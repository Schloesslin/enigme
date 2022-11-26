import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnigmeBaseTitleComponent } from './enigme-base-title.component';

describe('EnigmeBaseTitleComponent', () => {
  let component: EnigmeBaseTitleComponent;
  let fixture: ComponentFixture<EnigmeBaseTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnigmeBaseTitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnigmeBaseTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
