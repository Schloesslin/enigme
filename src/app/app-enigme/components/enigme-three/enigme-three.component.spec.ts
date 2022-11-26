import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnigmeThreeComponent } from './enigme-three.component';

describe('EnigmeThreeComponent', () => {
  let component: EnigmeThreeComponent;
  let fixture: ComponentFixture<EnigmeThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnigmeThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnigmeThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
