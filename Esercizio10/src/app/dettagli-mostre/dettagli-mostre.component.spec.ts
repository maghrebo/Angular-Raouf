import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DettagliMostreComponent } from './dettagli-mostre.component';

describe('DettagliMostreComponent', () => {
  let component: DettagliMostreComponent;
  let fixture: ComponentFixture<DettagliMostreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DettagliMostreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DettagliMostreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
