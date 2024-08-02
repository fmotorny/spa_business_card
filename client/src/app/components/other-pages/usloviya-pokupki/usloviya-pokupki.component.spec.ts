import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsloviyaPokupkiComponent } from './usloviya-pokupki.component';

describe('UsloviyaPokupkiComponent', () => {
  let component: UsloviyaPokupkiComponent;
  let fixture: ComponentFixture<UsloviyaPokupkiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsloviyaPokupkiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsloviyaPokupkiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
