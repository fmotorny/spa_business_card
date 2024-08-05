import { Component, inject, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { PageBgLogicService } from '../../../shared/services/page-bg.logic.service';
import { Dialog } from '@angular/cdk/dialog';
import { FeedbackPopupComponent } from '../../feedback-popup/feedback-popup.component';

@Component({
  selector: 'app-kommunikaczii',
  standalone: true,
  imports: [],
  templateUrl: './kommunikaczii.component.html',
  styleUrl: './kommunikaczii.component.scss',
})
export class KommunikacziiComponent implements OnInit {
  private pageBgService = inject(PageBgLogicService);
  constructor(
    private meta: Meta,
    private title: Title,
    private route: ActivatedRoute,
    private dialog: Dialog,
  ) {}
  ngOnInit() {
    this.meta.updateTag({ name: 'description', content: 'О компании' });
    this.title.setTitle(this.route.snapshot.data['title']);
    this.pageBgService.setBg(this.route.snapshot.data['routeBg']);
  }

  public sendFeedback() {
    this.dialog.open(FeedbackPopupComponent, {
      disableClose: true,
    });
  }
}
