import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GestionFinanzasComponent } from './gestion-finanzas.component';

describe('GestionFinanzasComponent', () => {
  let component: GestionFinanzasComponent;
  let fixture: ComponentFixture<GestionFinanzasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionFinanzasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GestionFinanzasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
