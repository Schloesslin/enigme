import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnigmeFourComponent } from './enigme-four.component';

describe('EnigmeFourComponent', () => {
  let component: EnigmeFourComponent;
  let fixture: ComponentFixture<EnigmeFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnigmeFourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnigmeFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
