import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyDayComponent } from './weekly-day.component';

describe('WeeklyDayComponent', () => {
  let component: WeeklyDayComponent;
  let fixture: ComponentFixture<WeeklyDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeeklyDayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeeklyDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
