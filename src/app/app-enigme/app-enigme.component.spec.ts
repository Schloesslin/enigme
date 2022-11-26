import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppEnigmeComponent } from './app-enigme.component';

describe('AppEnigmeComponent', () => {
  let component: AppEnigmeComponent;
  let fixture: ComponentFixture<AppEnigmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppEnigmeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppEnigmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
