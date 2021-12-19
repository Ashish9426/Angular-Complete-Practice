import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomedirectiveComponent } from './customedirective.component';

describe('CustomedirectiveComponent', () => {
  let component: CustomedirectiveComponent;
  let fixture: ComponentFixture<CustomedirectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomedirectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomedirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
