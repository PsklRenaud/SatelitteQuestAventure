import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecompenseMoonComponent } from './recompense-moon.component';

describe('RecompenseMoonComponent', () => {
  let component: RecompenseMoonComponent;
  let fixture: ComponentFixture<RecompenseMoonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecompenseMoonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecompenseMoonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
