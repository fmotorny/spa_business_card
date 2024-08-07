import { Component, ElementRef, inject, OnDestroy, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { PageBgLogicService } from '../../../shared/services/page-bg.logic.service';
import { Fancybox } from '@fancyapps/ui';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-about-company',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './about-company.component.html',
  styleUrl: './about-company.component.scss',
})
export class AboutCompanyComponent implements OnInit, OnDestroy {
  private pageBgService = inject(PageBgLogicService);
  constructor(
    private meta: Meta,
    private title: Title,
    private route: ActivatedRoute,
    private elRef: ElementRef,
  ) {}

  ngOnInit() {
    this.meta.updateTag({ name: 'description', content: 'О компании' });
    this.title.setTitle(this.route.snapshot.data['title']);
    this.pageBgService.setBg(this.route.snapshot.data['routeBg']);

    Fancybox.bind(this.elRef.nativeElement, '[data-fancybox]', {
      // Custom options
    });
  }

  ngOnDestroy() {
    Fancybox.unbind(this.elRef.nativeElement);
    Fancybox.close();
  }
}
