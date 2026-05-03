import { Component } from '@angular/core';
import { BaseControl } from '../base-control';
import { FieldShell } from '../_core/field-shell/field-shell';
import { InputShell } from '../_core/input-shell/input-shell';

@Component({
  selector: 'slh-text-input',
  host: { 'class': 'slh-input-field' },
  imports: [FieldShell, InputShell],
  templateUrl: './text-input.html',
  styleUrl: './text-input.scss',
})
export class TextInput extends BaseControl<string> {
  onInput(event: Event): void {
    const target = event.target as HTMLInputElement | null;
    this.value.set(target?.value ?? null);
  }
}

