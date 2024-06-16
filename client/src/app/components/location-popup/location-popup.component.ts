import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { BaseClosePopupDirective } from '../../shared/directives/base-close-popup.directive';

@Component({
  selector: 'app-location-popup',
  standalone: true,
  imports: [MatIcon, BaseClosePopupDirective],
  templateUrl: './location-popup.component.html',
  styleUrl: './location-popup.component.scss',
})
export class LocationPopupComponent {}
