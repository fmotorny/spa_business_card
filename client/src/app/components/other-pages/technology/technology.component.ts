import { Component, Inject, inject, OnInit } from '@angular/core';
import { PageBgLogicService } from '../../../shared/services/page-bg.logic.service';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { WINDOW } from '../../../shared/tokens/window.token';
import { CdkAccordion, CdkAccordionItem } from '@angular/cdk/accordion';

@Component({
  selector: 'app-technology',
  standalone: true,
  imports: [CdkAccordionItem, CdkAccordion],
  templateUrl: './technology.component.html',
  styleUrl: './technology.component.scss',
})
export class TechnologyComponent implements OnInit {
  private pageBgService = inject(PageBgLogicService);
  technologyList = [
    {
      key: 'Фундамент',
      value:
        'Фундамент ленточный, ленточный предстовляет собой замкнутый контур из железо-бетонных элеметов возводимые под всеми несущими стенами здания ',
    },
    {
      key: 'Несущая конструкция',
      value:
        'Сейсмоусточивый монолитный железо-бетонный каркас (наполение, ракушечник)',
    },
    {
      key: 'Фасад',
      value:
        'Утепление фасада на выбор: минеральная вата, пенопласт',
    },
    {
      key: 'Остекление',
      value:
        'Мультифункциональное остекление, защита от жары до 68% прохлады в летний период. Защита от конденсата и наледи, бережет тепло зимой',
    },
    {
      key: 'Кровля',
      value:
        'Строительная система, несущая система скатной крыши состоящая из наклонных строительных ног, вертикальных стоек и наклонных подкосов. На выбор: битумная черепица, металлочерепица',
    },
    {
      key: 'Ограждение',
      value:
        'На выбор: металлопрофиль, еврозабор',
    }
  ];
  expandedIndex = 0;
  constructor(
    private meta: Meta,
    private title: Title,
    private route: ActivatedRoute,
    @Inject(WINDOW) private windowRef: Window,
  ) {}

  ngOnInit() {
    this.meta.updateTag({
      name: 'description',
      content: 'Технология строительства',
    });
    this.title.setTitle(this.route.snapshot.data['title']);
    this.pageBgService.setBg(this.route.snapshot.data['routeBg']);

    this.initMap();
  }

  async initMap() {
    console.log('windowRef', this.windowRef);

    const ymaps = this.windowRef.ymaps;
    await ymaps.ready();

    console.log(ymaps.Map);

    const myMap = new ymaps.Map('map', {
      // Координаты центра карты.
      // Порядок по умолчанию: «широта, долгота».
      // Чтобы не определять координаты центра карты вручную,
      // воспользуйтесь инструментом Определение координат.
      center: [37.588144, 55.733842],
      // Уровень масштабирования. Допустимые значения:
      // от 0 (весь мир) до 19.
      zoom: 10,
    });

    //  myMap.geoObjects.add(new ymaps.Placemark(current_obj_coords));

    console.log(myMap);
  }
}
