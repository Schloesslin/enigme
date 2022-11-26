import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnigmeContainerComponent } from './enigme-container.component';

describe('EnigmeContainerComponent', () => {
  let component: EnigmeContainerComponent;
  let fixture: ComponentFixture<EnigmeContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnigmeContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnigmeContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
