import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyEventDetailsComponent } from './weekly-event-details.component';

describe('WeeklyEventDetailsComponent', () => {
  let component: WeeklyEventDetailsComponent;
  let fixture: ComponentFixture<WeeklyEventDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeeklyEventDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeeklyEventDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
