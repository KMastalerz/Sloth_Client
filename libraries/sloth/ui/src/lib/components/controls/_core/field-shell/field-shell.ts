import { Component, computed, input } from '@angular/core';
import { FieldMessage } from '../field-message/field-message';
import { LabelPosition } from '../../../../models/control-options/base-control.options';

@Component({
  selector: 'slh-field-shell',
  imports: [FieldMessage],
  templateUrl: './field-shell.html',
  styleUrl: './field-shell.scss',
})
export class FieldShell {
  label = input<string | null>(null);
  labelPosition = input<LabelPosition>('top');
}
