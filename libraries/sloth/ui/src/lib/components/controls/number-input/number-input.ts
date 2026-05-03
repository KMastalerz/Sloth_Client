import { Component } from '@angular/core';
import { BaseControl } from '../base-control';
import { FieldShell } from '../_core/field-shell/field-shell';
import { InputShell } from '../_core/input-shell/input-shell';
import { InputButton } from '../_core/input-button/input-button';

@Component({
  selector: 'slh-number-input',
  host: { 'class': 'slh-input-field' },
  imports: [FieldShell, InputShell, InputButton],
  templateUrl: './number-input.html',
  styleUrl: './number-input.scss',
})
export class NumberInput extends BaseControl<number> {
  onInput(event: Event): void {
    const target = event.target as HTMLInputElement | null;

    if (!target || target.value === '') {
      this.value.set(null);
      return;
    }

    this.value.set(Number(target.value));
  }
}

