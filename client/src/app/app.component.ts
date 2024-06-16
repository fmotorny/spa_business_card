import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from './api/api.service';
import { AsyncPipe, JsonPipe, NgClass, NgForOf, NgIf } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatToolbar } from '@angular/material/toolbar';
import { MatIcon } from '@angular/material/icon';
import { MatNavList } from '@angular/material/list';
import {
  MatSidenav,
  MatSidenavContainer,
  MatSidenavContent,
} from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatIconButton } from '@angular/material/button';
import {
  MAT_DIALOG_DEFAULT_OPTIONS,
  MatDialog,
  MatDialogModule,
} from '@angular/material/dialog';
import { LocationPopupComponent } from './components/location-popup/location-popup.component';
import { Dialog, DialogModule } from '@angular/cdk/dialog';
import { FeedbackPopupComponent } from './components/feedback-popup/feedback-popup.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    NgForOf,
    AsyncPipe,
    JsonPipe,
    RouterLink,
    RouterOutlet,
    MatToolbar,
    MatIcon,
    MatNavList,
    MatSidenav,
    MatSidenavContainer,
    MatSidenavContent,
    NgClass,
    MatIconButton,
    NgIf,
    RouterLinkActive,
    DialogModule,
  ],
  standalone: true,
})
export class AppComponent implements OnInit {
  title = 'client';
  products$ = this.api.getProductsTest();
  pages$ = this.api.getPagesTest();
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  isMobile = true;
  isCollapsed = false;
  constructor(
    private api: ApiService,
    private observer: BreakpointObserver,
    private dialog: Dialog,
  ) {}

  ngOnInit() {
    this.observer.observe(['(max-width: 800px)']).subscribe((screenSize) => {
      this.isMobile = screenSize.matches;
    });
  }

  toggleMenu() {
    this.sidenav.toggle();
    if (this.isMobile) {
      this.isCollapsed = false;
    } else {
      //  this.sidenav.open();
      this.isCollapsed = !this.isCollapsed;
    }
  }

  showLocation() {
    this.dialog.open(LocationPopupComponent, {
      disableClose: true,
    });
  }

  sendFeedback() {
    this.dialog.open(FeedbackPopupComponent, {
      disableClose: true,
    });
  }
}
