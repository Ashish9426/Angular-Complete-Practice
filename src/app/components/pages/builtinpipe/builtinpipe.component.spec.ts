import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuiltinpipeComponent } from './builtinpipe.component';

describe('BuiltinpipeComponent', () => {
  let component: BuiltinpipeComponent;
  let fixture: ComponentFixture<BuiltinpipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuiltinpipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuiltinpipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
