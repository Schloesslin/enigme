import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnigmeTwoImageOneComponent } from './enigme-two-image-one.component';

describe('EnigmeTwoImageOneComponent', () => {
  let component: EnigmeTwoImageOneComponent;
  let fixture: ComponentFixture<EnigmeTwoImageOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnigmeTwoImageOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnigmeTwoImageOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
