import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { BaseClosePopupDirective } from '../../shared/directives/base-close-popup.directive';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-feedback-popup',
  standalone: true,
  imports: [MatIcon, BaseClosePopupDirective, ReactiveFormsModule, RouterLink],
  templateUrl: './feedback-popup.component.html',
  styleUrl: './feedback-popup.component.scss',
})
export class FeedbackPopupComponent {
  form = this.fb.group({
    name: ['' as string, []],
    phone: [null, [Validators.required]],
    agreed: [true, [Validators.requiredTrue]],
  });
  constructor(private fb: FormBuilder) {}

  send() {
    if (this.form.valid) {
      console.log('value', this.form.value);
      return;
    }
    console.error('form is invalid');
  }
}
