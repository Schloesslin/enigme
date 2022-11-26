import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnigmeOneComponent } from './enigme-one.component';

describe('EnigmeOneComponent', () => {
  let component: EnigmeOneComponent;
  let fixture: ComponentFixture<EnigmeOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnigmeOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnigmeOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
