import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about-company',
  standalone: true,
  imports: [],
  templateUrl: './about-company.component.html',
  styleUrl: './about-company.component.scss',
})
export class AboutCompanyComponent implements OnInit {
  constructor(
    private meta: Meta,
    private title: Title,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.meta.updateTag({ name: 'description', content: 'О компании' });
    this.title.setTitle(this.route.snapshot.data['title']);
  }
}
