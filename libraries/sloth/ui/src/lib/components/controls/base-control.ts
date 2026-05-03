import { computed, Directive, input, model } from '@angular/core';
import { FormValueControl } from '@angular/forms/signals';
import { BaseControlOptions, LabelPosition } from '../../models/control-options/base-control.options';

type KeysForValue<TObj, TValue> = {
  [K in keyof TObj]-?: Exclude<TObj[K], undefined> extends TValue ? K : never;
}[keyof TObj];

@Directive()
export class BaseControl<T> implements FormValueControl<T | null> {
  private resolve = <
    V,
    K extends KeysForValue<BaseControlOptions<T>, V> = KeysForValue<BaseControlOptions<T>, V>
  >(
    key: K,
    fallback: () => V | null,
    fallbackValue: V | null = null
  ) => computed(() => {
    const fromOptions = this.options()?.[key] as V | undefined;
    const resolved = fromOptions ?? fallback() ?? fallbackValue ?? null;
    return resolved as V | null;
  });

  options = input<BaseControlOptions<T> | null>(null);

  icon = input<string | null> (null);
  label = input<string | null> (null);
  labelPosition = input<LabelPosition | null>(null);
  placeholder = input<string | null> (null);

  protected readonly _icon = this.resolve('icon', this.icon);
  protected readonly _label = this.resolve('label', this.label);
  protected readonly _placeholder = this.resolve('placeholder', this.placeholder);
  protected readonly _labelPosition = this.resolve<LabelPosition>('labelPosition', this.labelPosition, 'top');


  value = model<T | null>(null);

  // focus?(options?: FocusOptions): void {
  //   throw new Error('Method not implemented.');
  // }

}
