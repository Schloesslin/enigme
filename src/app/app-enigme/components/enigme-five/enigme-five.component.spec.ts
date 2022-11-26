import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnigmeFiveComponent } from './enigme-five.component';

describe('EnigmeFiveComponent', () => {
  let component: EnigmeFiveComponent;
  let fixture: ComponentFixture<EnigmeFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnigmeFiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnigmeFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
