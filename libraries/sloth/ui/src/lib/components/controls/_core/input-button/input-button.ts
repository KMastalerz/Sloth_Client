import { Component, computed, input } from '@angular/core';
import { Icon } from '../../../ui/icon/icon';

@Component({
  selector: 'slh-input-button',
  imports: [Icon],
  templateUrl: './input-button.html',
  styleUrl: './input-button.scss',
})
export class InputButton {
  inputButtonType = input.required<'minus' | 'plus' | 'password-show' | 'password-hide' | 'date' | 'time' | 'date-time'>();

  protected readonly icon = computed(() => {
    switch (this.inputButtonType()) {
      case 'minus':
        return 'remove';
      case 'plus':
        return 'add';
      case 'password-show':
        return 'visibility';
      case 'password-hide':
        return 'visibility-off';
      case 'date':
        return 'calendar_month';
      case 'time':
        return 'nest_clock_farsight_analog';
      case 'date-time':
        return 'calendar_clock';
    }
  })
}
