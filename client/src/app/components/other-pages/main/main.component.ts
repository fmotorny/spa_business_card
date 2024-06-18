import { Component, OnInit } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NgStyle } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MatIcon } from '@angular/material/icon';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [SlickCarouselModule, NgStyle, RouterLink, MatIcon],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent implements OnInit {
  slides = [
    {
      id: 1,
      img: '/assets/images/slides/render1.jpg',
      title: 'Уникальное расположение',
      desc: 'Коттеджный поселок расположен в уникальном месте 15 минут до г. Симферополя и 20 минут до г. Алушты',
    },
    {
      id: 2,
      img: '/assets/images/slides/render2.jpg',
      title: 'Коттеджный поселок комфорт-класса от 8 млн. ₽',
      desc: 'Приватная территория с КПП и собственной службой безопасности',
    },
    {
      id: 3,
      img: '/assets/images/slides/render1.jpg',
      title: 'Уникальное расположение',
      desc: 'Коттеджный поселок расположен в уникальном месте 15 минут до г. Симферополя и 20 минут до г. Алушты',
    },
    {
      id: 4,
      img: '/assets/images/slides/render2.jpg',
      title: 'Коттеджный поселок комфорт-класса от 8 млн. ₽',
      desc: 'Приватная территория с КПП и собственной службой безопасности',
    },
  ];
  slideConfig = { slidesToShow: 1, slidesToScroll: 1 };

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
