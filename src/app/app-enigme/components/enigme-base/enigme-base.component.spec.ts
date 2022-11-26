import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnigmeBaseComponent } from './enigme-base.component';

describe('EnigmeBaseComponent', () => {
  let component: EnigmeBaseComponent;
  let fixture: ComponentFixture<EnigmeBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnigmeBaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnigmeBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
