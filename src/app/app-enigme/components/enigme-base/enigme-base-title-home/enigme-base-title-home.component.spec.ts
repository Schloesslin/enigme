import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnigmeBaseTitleHomeComponent } from './enigme-base-title-home.component';

describe('EnigmeBaseTitleHomeComponent', () => {
  let component: EnigmeBaseTitleHomeComponent;
  let fixture: ComponentFixture<EnigmeBaseTitleHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnigmeBaseTitleHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnigmeBaseTitleHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
