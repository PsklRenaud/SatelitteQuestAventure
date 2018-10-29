import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedBugComponent } from './fixed-bug.component';

describe('FixedBugComponent', () => {
  let component: FixedBugComponent;
  let fixture: ComponentFixture<FixedBugComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FixedBugComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FixedBugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
