import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usloviya-pokupki',
  standalone: true,
  imports: [],
  templateUrl: './usloviya-pokupki.component.html',
  styleUrl: './usloviya-pokupki.component.scss'
})
export class UsloviyaPokupkiComponent implements OnInit {
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
