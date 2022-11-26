import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnigmeBaseDescriptionComponent } from './enigme-base-description.component';

describe('EnigmeBaseDescriptionComponent', () => {
  let component: EnigmeBaseDescriptionComponent;
  let fixture: ComponentFixture<EnigmeBaseDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnigmeBaseDescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnigmeBaseDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
