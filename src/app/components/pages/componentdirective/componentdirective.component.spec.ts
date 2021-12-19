import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentdirectiveComponent } from './componentdirective.component';

describe('ComponentdirectiveComponent', () => {
  let component: ComponentdirectiveComponent;
  let fixture: ComponentFixture<ComponentdirectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentdirectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentdirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
