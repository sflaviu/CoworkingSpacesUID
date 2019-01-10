import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceRentalComponent } from './space-rental.component';

describe('SpaceRentalComponent', () => {
  let component: SpaceRentalComponent;
  let fixture: ComponentFixture<SpaceRentalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpaceRentalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaceRentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
