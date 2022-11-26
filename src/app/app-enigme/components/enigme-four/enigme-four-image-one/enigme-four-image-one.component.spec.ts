import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnigmeFourImageOneComponent } from './enigme-four-image-one.component';

describe('EnigmeFourImageOneComponent', () => {
  let component: EnigmeFourImageOneComponent;
  let fixture: ComponentFixture<EnigmeFourImageOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnigmeFourImageOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnigmeFourImageOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
