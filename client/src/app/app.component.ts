import { Component } from '@angular/core';
import { ApiService } from './api/api.service';
import { AsyncPipe, JsonPipe, NgForOf } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [NgForOf, AsyncPipe, JsonPipe],
  standalone: true,
})
export class AppComponent {
  title = 'client';
  products$ = this.api.getProductsTest();
  constructor(private api: ApiService) {}
}
