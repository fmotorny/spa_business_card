import { Component, inject, OnInit } from '@angular/core';
import { PageBgLogicService } from '../../../shared/services/page-bg.logic.service';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-technology',
  standalone: true,
  imports: [],
  templateUrl: './technology.component.html',
  styleUrl: './technology.component.scss'
})
export class TechnologyComponent implements OnInit {
  private pageBgService = inject(PageBgLogicService);
  constructor(
    private meta: Meta,
    private title: Title,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.meta.updateTag({ name: 'description', content: 'Технология строительства' });
    this.title.setTitle(this.route.snapshot.data['title']);
    this.pageBgService.setBg(this.route.snapshot.data['routeBg']);
  }
}
