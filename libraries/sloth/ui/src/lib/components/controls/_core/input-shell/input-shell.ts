import { Component, input } from '@angular/core';
import { Icon } from '../../../ui/icon/icon';

@Component({
  selector: 'slh-input-shell',
  imports: [Icon],
  templateUrl: './input-shell.html',
  styleUrl: './input-shell.scss',
})
export class InputShell {
  icon = input<string | null>(null);
}
