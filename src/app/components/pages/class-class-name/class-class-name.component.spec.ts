import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassClassNameComponent } from './class-class-name.component';

describe('ClassClassNameComponent', () => {
  let component: ClassClassNameComponent;
  let fixture: ComponentFixture<ClassClassNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassClassNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassClassNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
