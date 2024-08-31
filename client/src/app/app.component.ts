import {
  Component,
  HostListener,
  inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  AsyncPipe,
  JsonPipe,
  NgClass,
  NgForOf,
  NgIf,
  NgStyle,
} from '@angular/common';
import {
  NavigationEnd,
  Router,
  RouterEvent,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
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
import { LocationPopupComponent } from './components/location-popup/location-popup.component';
import { Dialog, DialogModule } from '@angular/cdk/dialog';
import { FeedbackPopupComponent } from './components/feedback-popup/feedback-popup.component';
import { BehaviorSubject, delay, filter, map, Observable, tap } from 'rxjs';
import { PageBgLogicService } from './shared/services/page-bg.logic.service';

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
    NgStyle,
  ],
  standalone: true,
})
export class AppComponent implements OnInit {
  isLoaded$ = new BehaviorSubject(false);
  title = 'client';
  // products$ = this.api.getProductsTest();
  // pages$ = this.api.getPagesTest();
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  isMobile = true;
  isCollapsed = false;
  url$!: Observable<string>;
  bgPage$!: Observable<string>;
  private pageBgService = inject(PageBgLogicService);
  constructor(
    private observer: BreakpointObserver,
    private dialog: Dialog,
    private router: Router,
  ) {}

  @HostListener('window:load', ['$event'])
  onPageLoad(event: Event) {
    setTimeout(() => {
      this.isLoaded$.next(true);
    }, 1000);
  }

  ngOnInit() {
    this.observer.observe(['(max-width: 800px)']).subscribe((screenSize) => {
      this.isMobile = screenSize.matches;
      if (this.isMobile) {
        this.sidenav?.close();
      } else {
        this.sidenav?.open();
      }
    });

    this.url$ = this.router.events.pipe(
      filter((ev) => ev instanceof NavigationEnd),
      tap(() => {
        if (this.isMobile) {
          this.sidenav?.close();
        }
      }),
      map((res) => {
        this.pageBgService.setBg('');
        const routerObjs = res as RouterEvent;
        return routerObjs.url;
      }),
    );

    this.bgPage$ = this.pageBgService.getBg().pipe(delay(0));
  }

  toggleMenu() {
    this.sidenav.toggle();
  }

  showLocation() {
    this.dialog.open(LocationPopupComponent, {
      width: '100%',
      height: '100%',
      disableClose: true,
    });
  }

  sendFeedback() {
    this.dialog.open(FeedbackPopupComponent, {
      disableClose: true,
    });
  }
}
