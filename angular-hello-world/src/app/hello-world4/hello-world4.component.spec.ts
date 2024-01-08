import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloWorld4Component } from './hello-world4.component';

describe('HelloWorld4Component', () => {
  let component: HelloWorld4Component;
  let fixture: ComponentFixture<HelloWorld4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelloWorld4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HelloWorld4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
