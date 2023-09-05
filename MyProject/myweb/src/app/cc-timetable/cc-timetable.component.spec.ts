import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CcTimetableComponent } from './cc-timetable.component';

describe('CcTimetableComponent', () => {
  let component: CcTimetableComponent;
  let fixture: ComponentFixture<CcTimetableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CcTimetableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CcTimetableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
