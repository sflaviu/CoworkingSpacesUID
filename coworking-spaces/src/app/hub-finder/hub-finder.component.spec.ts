import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HubFinderComponent } from './hub-finder.component';

describe('HubFinderComponent', () => {
  let component: HubFinderComponent;
  let fixture: ComponentFixture<HubFinderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HubFinderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HubFinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
