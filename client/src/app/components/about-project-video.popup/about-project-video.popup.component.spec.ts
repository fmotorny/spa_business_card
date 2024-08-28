import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutProjectVideoPopupComponent } from './about-project-video.popup.component';

describe('AboutProjectVideoPopupComponent', () => {
  let component: AboutProjectVideoPopupComponent;
  let fixture: ComponentFixture<AboutProjectVideoPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutProjectVideoPopupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutProjectVideoPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
