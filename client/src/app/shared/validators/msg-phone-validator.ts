import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const msgPhoneValidator = (): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors | null => {

    if (!control.value) {
      control.markAsTouched();
      return { fieldMustFill: true };
    }
    return null;
  };
};
