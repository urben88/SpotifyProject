import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantillaArtistaComponent } from './plantilla-artista.component';

describe('PlantillaArtistaComponent', () => {
  let component: PlantillaArtistaComponent;
  let fixture: ComponentFixture<PlantillaArtistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlantillaArtistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantillaArtistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
