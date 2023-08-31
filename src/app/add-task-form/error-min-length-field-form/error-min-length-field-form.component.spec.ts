import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorMinLengthFieldFormComponent } from './error-min-length-field-form.component';

describe('ErrorMinLengthFieldFormComponent', () => {
  let component: ErrorMinLengthFieldFormComponent;
  let fixture: ComponentFixture<ErrorMinLengthFieldFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ErrorMinLengthFieldFormComponent]
    });
    fixture = TestBed.createComponent(ErrorMinLengthFieldFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
