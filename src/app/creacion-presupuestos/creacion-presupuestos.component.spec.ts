import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreacionPresupuestosComponent } from './creacion-presupuestos.component';

describe('CreacionPresupuestosComponent', () => {
  let component: CreacionPresupuestosComponent;
  let fixture: ComponentFixture<CreacionPresupuestosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreacionPresupuestosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreacionPresupuestosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
