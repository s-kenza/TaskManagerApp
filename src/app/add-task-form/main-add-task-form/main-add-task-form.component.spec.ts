import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainAddTaskFormComponent } from './main-add-task-form.component';

describe('MainAddTaskFormComponent', () => {
  let component: MainAddTaskFormComponent;
  let fixture: ComponentFixture<MainAddTaskFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainAddTaskFormComponent]
    });
    fixture = TestBed.createComponent(MainAddTaskFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
