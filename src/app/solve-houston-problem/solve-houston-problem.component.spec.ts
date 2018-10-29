import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolveHoustonProblemComponent } from './solve-houston-problem.component';

describe('SolveHoustonProblemComponent', () => {
  let component: SolveHoustonProblemComponent;
  let fixture: ComponentFixture<SolveHoustonProblemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolveHoustonProblemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolveHoustonProblemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
