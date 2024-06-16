import { Directive, HostListener } from '@angular/core';
import { DialogRef } from '@angular/cdk/dialog';

@Directive({
  selector: '[appBaseClosePopup]',
  standalone: true,
})
export class BaseClosePopupDirective {
  constructor(private dialogRef: DialogRef) {}

  @HostListener('click', ['$event'])
  closePopup() {
    this.dialogRef.close();
  }
}
