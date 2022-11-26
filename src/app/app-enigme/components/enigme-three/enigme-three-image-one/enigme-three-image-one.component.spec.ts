import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnigmeThreeImageOneComponent } from './enigme-three-image-one.component';

describe('EnigmeThreeImageOneComponent', () => {
  let component: EnigmeThreeImageOneComponent;
  let fixture: ComponentFixture<EnigmeThreeImageOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnigmeThreeImageOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnigmeThreeImageOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
