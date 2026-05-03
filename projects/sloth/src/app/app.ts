import { Component, signal } from '@angular/core';
import { TestPage } from '@sloth/ui';

@Component({
  selector: 'app-root',
  imports: [TestPage],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('sloth');
}
