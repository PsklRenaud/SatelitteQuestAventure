import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Niveau2PageComponent } from './niveau2-page.component';

describe('Niveau2PageComponent', () => {
  let component: Niveau2PageComponent;
  let fixture: ComponentFixture<Niveau2PageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Niveau2PageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Niveau2PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
