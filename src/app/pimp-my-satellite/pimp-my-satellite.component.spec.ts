import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PimpMySatelliteComponent } from './pimp-my-satellite.component';

describe('PimpMySatelliteComponent', () => {
  let component: PimpMySatelliteComponent;
  let fixture: ComponentFixture<PimpMySatelliteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PimpMySatelliteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PimpMySatelliteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
