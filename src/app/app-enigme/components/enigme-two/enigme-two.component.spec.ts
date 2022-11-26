import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnigmeTwoComponent } from './enigme-two.component';

describe('EnigmeTwoComponent', () => {
  let component: EnigmeTwoComponent;
  let fixture: ComponentFixture<EnigmeTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnigmeTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnigmeTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
