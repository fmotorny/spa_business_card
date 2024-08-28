import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const msgNameValidator = (): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors | null => {

    if (!control.value) {
      control.markAsTouched();
      return { fieldMustFill: true };
    }

    if (control.value.length < 3) {
      return { mustBiggerThanTwo: true };
    }

    return null;
  };
};
