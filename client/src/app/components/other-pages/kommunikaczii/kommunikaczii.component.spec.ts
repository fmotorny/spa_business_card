import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KommunikacziiComponent } from './kommunikaczii.component';

describe('KommunikacziiComponent', () => {
  let component: KommunikacziiComponent;
  let fixture: ComponentFixture<KommunikacziiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KommunikacziiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KommunikacziiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
