import { Component, effect, model } from '@angular/core';
import { TextInput } from '../controls/text-input/text-input';
import { NumberInput } from '../controls/number-input/number-input';

@Component({
  selector: 'slh-test-page',
  imports: [TextInput, NumberInput],
  templateUrl: './test-page.html',
  styleUrl: './test-page.scss',
})
export class TestPage {



  myValue = model<string>('initial value');
  myNumber = model<number>(42);


  constructor() {
    effect(() => {
      console.log('Value changed:', this.myValue());
      console.log('Number changedL:', this.myNumber());
      
    });
  }
}
