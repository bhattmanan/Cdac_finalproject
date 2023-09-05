import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CcExternalmarksComponent } from './cc-externalmarks.component';

describe('CcExternalmarksComponent', () => {
  let component: CcExternalmarksComponent;
  let fixture: ComponentFixture<CcExternalmarksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CcExternalmarksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CcExternalmarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
