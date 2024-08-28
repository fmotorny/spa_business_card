import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { BaseClosePopupDirective } from '../../shared/directives/base-close-popup.directive';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ApiService } from '../../api/api.service';
import { catchError, EMPTY, first } from 'rxjs';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { msgNameValidator } from '../../shared/validators/msg-name-validator';
import { NgIf } from '@angular/common';
import { msgPhoneValidator } from '../../shared/validators/msg-phone-validator';

@Component({
  selector: 'app-feedback-popup',
  standalone: true,
  imports: [
    MatIcon,
    BaseClosePopupDirective,
    ReactiveFormsModule,
    RouterLink,
    NgxMaskDirective,
    NgxMaskPipe,
    NgIf,
  ],
  templateUrl: './feedback-popup.component.html',
  styleUrl: './feedback-popup.component.scss',
  providers: [provideNgxMask()],
})
export class FeedbackPopupComponent {
  form = this.fb.group({
    name: ['' as string, [Validators.required, msgNameValidator()]],
    phone: [null, [Validators.required, msgPhoneValidator()]],
    email: [null],
    agreed: [true, [Validators.requiredTrue]],
  });

  formIsSubmitting = false;
  constructor(
    private fb: FormBuilder,
    private api: ApiService,
  ) {}

  send() {
    this.formIsSubmitting = true;
    if (this.form.valid) {
      this.api
        .sendMessToTG(this.form.value)
        .pipe(
          first(),
          catchError((err) => {
            console.log('catchError');
            console.error(err);
            this.formIsSubmitting = false;
            return EMPTY;
          }),
        )
        .subscribe((res) => {
          console.log('sendMessToTG', res);
          this.formIsSubmitting = false;
        });

      return;
    }
    console.error('form is invalid');
  }
}
