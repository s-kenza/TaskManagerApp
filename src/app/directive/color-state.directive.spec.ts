import { ColorStateDirective } from './color-state.directive';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { TaskState } from '../model/Task';

@Component({
  template: `<div [appColorState]="taskState"></div>`
})
class TestComponent {
  taskState: TaskState = TaskState.A_FAIRE;
}

describe('ColorStateDirective', () => {
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ColorStateDirective, TestComponent]
    });

    fixture = TestBed.createComponent(TestComponent);
  });

  it('should apply red color for TaskState.A_FAIRE', () => {
    fixture.componentInstance.taskState = TaskState.A_FAIRE;
    fixture.detectChanges();

    const divElement = fixture.nativeElement.querySelector('div');
    expect(divElement.style.color).toBe('red');
  });

  it('should apply orange color for TaskState.EN_COURS', () => {
    fixture.componentInstance.taskState = TaskState.EN_COURS;
    fixture.detectChanges();

    const divElement = fixture.nativeElement.querySelector('div');
    expect(divElement.style.color).toBe('orange');
  });

  it('should apply green color for TaskState.TERMINEE', () => {
    fixture.componentInstance.taskState = TaskState.TERMINEE;
    fixture.detectChanges();

    const divElement = fixture.nativeElement.querySelector('div');
    expect(divElement.style.color).toBe('green');
  });
});
