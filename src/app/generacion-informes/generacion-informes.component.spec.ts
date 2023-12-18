import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneracionInformesComponent } from './generacion-informes.component';

describe('GeneracionInformesComponent', () => {
  let component: GeneracionInformesComponent;
  let fixture: ComponentFixture<GeneracionInformesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeneracionInformesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GeneracionInformesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
