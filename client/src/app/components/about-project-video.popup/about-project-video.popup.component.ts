import { Component } from '@angular/core';
import { BaseClosePopupDirective } from '../../shared/directives/base-close-popup.directive';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-about-project-video.popup',
  standalone: true,
  imports: [BaseClosePopupDirective, MatIcon],
  templateUrl: './about-project-video.popup.component.html',
  styleUrl: './about-project-video.popup.component.scss',
})
export class AboutProjectVideoPopupComponent {}
