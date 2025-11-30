import { Component, output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.scss',
})
export class Button {
  // Expose click events to parent via output signal
  readonly clicked = output<void>();

  onClick() {
    this.clicked.emit();
  }
}
