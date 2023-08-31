import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-error-min-length-field-form',
  template: `
    <div class="error" *ngIf="displayError === true">
      Champ requis.
    </div>
  `,
  styleUrls: ['./error-min-length-field-form.component.scss']
})
export class ErrorMinLengthFieldFormComponent {
  @Input() displayError: boolean | undefined;
  @Input() fieldName: string = '';
  @Input() maxLength: number = 0;
}
