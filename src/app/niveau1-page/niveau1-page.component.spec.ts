import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Niveau1PageComponent } from './niveau1-page.component';

describe('Niveau1PageComponent', () => {
  let component: Niveau1PageComponent;
  let fixture: ComponentFixture<Niveau1PageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Niveau1PageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Niveau1PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
