import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnigmeFiveImageOneComponent } from './enigme-five-image-one.component';

describe('EnigmeFiveImageOneComponent', () => {
  let component: EnigmeFiveImageOneComponent;
  let fixture: ComponentFixture<EnigmeFiveImageOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnigmeFiveImageOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnigmeFiveImageOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
