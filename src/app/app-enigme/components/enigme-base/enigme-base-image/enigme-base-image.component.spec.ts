import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnigmeBaseImageComponent } from './enigme-base-image.component';

describe('EnigmeBaseImageComponent', () => {
  let component: EnigmeBaseImageComponent;
  let fixture: ComponentFixture<EnigmeBaseImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnigmeBaseImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnigmeBaseImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
