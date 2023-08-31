import { Directive, ElementRef, Input } from '@angular/core';
import { TaskState } from '../model/Task';

@Directive({
  selector: '[appColorState]'
})
export class ColorStateDirective {
  @Input() appColorState = TaskState.A_FAIRE;

  constructor(private el: ElementRef) { }

  ngOnInit() {
    switch (this.appColorState) {
      case TaskState.A_FAIRE:
        this.el.nativeElement.style.color = 'red';
        break;
      case TaskState.EN_COURS:
        this.el.nativeElement.style.color = 'orange';
        break;
      case TaskState.TERMINEE:
        this.el.nativeElement.style.color = 'green';
        break;
    }
  }
}
