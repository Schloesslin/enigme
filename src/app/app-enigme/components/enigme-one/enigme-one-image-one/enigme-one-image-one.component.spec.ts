import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnigmeOneImageOneComponent } from './enigme-one-image-one.component';

describe('EnigmeOneImageOneComponent', () => {
  let component: EnigmeOneImageOneComponent;
  let fixture: ComponentFixture<EnigmeOneImageOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnigmeOneImageOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnigmeOneImageOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
