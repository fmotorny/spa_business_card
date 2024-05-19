import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../api/api.service';
import { CollectionResModel, PageModel } from '../../shared/models/collection.res.model';
import { map } from 'rxjs';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';

const parsePageObj = (obj: CollectionResModel) => {
  return obj.data[0].attributes as PageModel;
};

@Component({
  selector: 'app-simple-page',
  standalone: true,
  imports: [AsyncPipe, JsonPipe],
  templateUrl: './simple-page.component.html',
  styleUrl: './simple-page.component.scss',
})
export class SimplePageComponent {
  pageData$ = this.api
    .getPageDataByUrl(this.router.url)
    .pipe(map(parsePageObj));
  constructor(
    private router: Router,
    private api: ApiService,
    private meta: Meta,
    private title: Title,
    private route: ActivatedRoute
  ) {
    // console.log(this.router.url);


   // console.log('route data ddd', this.route.snapshot.data['title']);


    this.meta.updateTag({ name: 'description', content: 'TESTsssss' });
    this.title.setTitle(this.route.snapshot.data['title']);
    // this.api.getPageDataByUrl(this.router.url).pipe(
    //   map(parsePageObj)
    // ).subscribe((res) => {
    //   console.log('res', res);
    // })
  }
}
