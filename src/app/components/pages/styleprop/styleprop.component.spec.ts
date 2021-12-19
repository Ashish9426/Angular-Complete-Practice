import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StylepropComponent } from './styleprop.component';

describe('StylepropComponent', () => {
  let component: StylepropComponent;
  let fixture: ComponentFixture<StylepropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StylepropComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StylepropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
