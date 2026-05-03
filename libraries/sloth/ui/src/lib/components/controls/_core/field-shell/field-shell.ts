import { Component, input } from '@angular/core';
import { LabelPosition } from '../../../../models/control-options/base-control.options';

@Component({
  selector: 'slh-field-shell',
  imports: [],
  templateUrl: './field-shell.html',
  styleUrl: './field-shell.scss',
})
export class FieldShell {
  label = input<string | null>(null);
  labelPosition = input<LabelPosition>('top');
}
