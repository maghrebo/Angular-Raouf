import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimoCantanteComponent } from './primo-cantante.component';

describe('PrimoCantanteComponent', () => {
  let component: PrimoCantanteComponent;
  let fixture: ComponentFixture<PrimoCantanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimoCantanteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrimoCantanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
