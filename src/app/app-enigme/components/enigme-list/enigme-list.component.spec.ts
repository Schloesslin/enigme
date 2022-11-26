import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnigmeListComponent } from './enigme-list.component';

describe('EnigmeListComponent', () => {
  let component: EnigmeListComponent;
  let fixture: ComponentFixture<EnigmeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnigmeListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnigmeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
