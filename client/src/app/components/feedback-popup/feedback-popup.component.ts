import { Component, inject } from '@angular/core';
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
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarModule,
  MatSnackBarVerticalPosition
} from '@angular/material/snack-bar';
import { ToastComponent } from '../toast/toast.component';
import { DialogRef } from '@angular/cdk/dialog';
import { ResponseModel } from '../../shared/models/response.model';
import { HttpErrorResponse } from '@angular/common/http';

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
    MatSnackBarModule
  ],
  templateUrl: './feedback-popup.component.html',
  styleUrl: './feedback-popup.component.scss',
  providers: [provideNgxMask()],
})
export class FeedbackPopupComponent {
  private _snackBar = inject(MatSnackBar);
  private _durationInSeconds = 5;
  form = this.fb.group({
    name: ['' as string, [Validators.required, msgNameValidator()]],
    phone: [null, [Validators.required, msgPhoneValidator()]],
    email: [null],
    agreed: [true, [Validators.requiredTrue]],
  });

  formIsSubmitting = false;

  private horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  private verticalPosition: MatSnackBarVerticalPosition = 'top';
  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    private dialogRef: DialogRef
  ) {}

  send() {
    this.formIsSubmitting = true;
    if (this.form.valid) {
      this.api
        .sendMessToTG(this.form.value)
        .pipe(
          first(),
          catchError((err: ResponseModel) => {
            console.log('catchError');
            console.error(err);
            this.launchSnackBar(err);
            this.formIsSubmitting = false;
            return EMPTY;
          }),
        )
        .subscribe((res) => {
          this.dialogRef.close();
          this.launchSnackBar(res);
          this.formIsSubmitting = false;
        });

      return;
    }
    console.error('form is invalid');
  }

  private launchSnackBar(data: ResponseModel ) {
    this._snackBar.openFromComponent(ToastComponent, {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: this._durationInSeconds * 1000,
      data: data.message
    });
  }
}
