import { Component, inject, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { PageBgLogicService } from '../../../shared/services/page-bg.logic.service';

@Component({
  selector: 'app-about-company',
  standalone: true,
  imports: [],
  templateUrl: './about-company.component.html',
  styleUrl: './about-company.component.scss',
})
export class AboutCompanyComponent implements OnInit {
  private pageBgService = inject(PageBgLogicService);
  constructor(
    private meta: Meta,
    private title: Title,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.meta.updateTag({ name: 'description', content: 'О компании' });
    this.title.setTitle(this.route.snapshot.data['title']);
    this.pageBgService.setBg(this.route.snapshot.data['routeBg']);
  }
}
