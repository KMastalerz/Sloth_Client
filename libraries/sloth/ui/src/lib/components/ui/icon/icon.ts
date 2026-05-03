import { Component, computed, input } from '@angular/core';
import { IconOptions, IconType } from '../../../models/ui-options/icon.options';

@Component({
  selector: 'slh-icon',
  imports: [],
  templateUrl: './icon.html',
  styleUrl: './icon.scss',
})
export class Icon {
  options = input<IconOptions | null>();
  name = input<string | null>(null);
  type = input<IconType | null>(null);

  protected readonly _name = computed<string | null>(() => this.options()?.name ?? this.name() ?? null);
  protected readonly _type = computed<IconType>(() => this.options()?.type ?? this.type() ?? 'regular');
  protected readonly _class = computed<string>(() => `slh-icon-${this._type()}`);
}
