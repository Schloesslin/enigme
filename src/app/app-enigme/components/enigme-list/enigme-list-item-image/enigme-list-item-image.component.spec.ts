import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnigmeListItemImageComponent } from './enigme-list-item-image.component';

describe('EnigmeListItemImageComponent', () => {
  let component: EnigmeListItemImageComponent;
  let fixture: ComponentFixture<EnigmeListItemImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnigmeListItemImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnigmeListItemImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
