import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetencionDetalleComponent } from './detencion-detalle.component';

describe('DetencionDetalleComponent', () => {
  let component: DetencionDetalleComponent;
  let fixture: ComponentFixture<DetencionDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetencionDetalleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetencionDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
