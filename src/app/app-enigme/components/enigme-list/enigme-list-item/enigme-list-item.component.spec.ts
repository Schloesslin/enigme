import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnigmeListItemComponent } from './enigme-list-item.component';

describe('EnigmeListItemComponent', () => {
  let component: EnigmeListItemComponent;
  let fixture: ComponentFixture<EnigmeListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnigmeListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnigmeListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
