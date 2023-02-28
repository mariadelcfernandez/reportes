import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetencionTotalesComponent } from './detencion-totales.component';

describe('DetencionTotalesComponent', () => {
  let component: DetencionTotalesComponent;
  let fixture: ComponentFixture<DetencionTotalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetencionTotalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetencionTotalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
