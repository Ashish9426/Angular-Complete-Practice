import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeTODOComponent } from './employee-todo.component';

describe('EmployeeTODOComponent', () => {
  let component: EmployeeTODOComponent;
  let fixture: ComponentFixture<EmployeeTODOComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeTODOComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeTODOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
