import { Component } from '@angular/core';
import { ApiService } from './api/api.service';
import { AsyncPipe, JsonPipe, NgForOf } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [NgForOf, AsyncPipe, JsonPipe, RouterLink, RouterOutlet],
  standalone: true,
})
export class AppComponent {
  title = 'client';
  products$ = this.api.getProductsTest();
  pages$ = this.api.getPagesTest();
  constructor(private api: ApiService) {




  }
}
