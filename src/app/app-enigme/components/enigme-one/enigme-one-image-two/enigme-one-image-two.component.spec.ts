import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnigmeOneImageTwoComponent } from './enigme-one-image-two.component';

describe('EnigmeOneImageTwoComponent', () => {
  let component: EnigmeOneImageTwoComponent;
  let fixture: ComponentFixture<EnigmeOneImageTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnigmeOneImageTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnigmeOneImageTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
