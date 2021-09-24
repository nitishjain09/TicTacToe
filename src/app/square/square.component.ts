import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
      <button> {{ value }} </button>
  `,
  styles: [ 'button { width: 100%; height: 100%; font-size: 50px}']
})
export class SquareComponent {

  @Input() value: 'X'|'O';
}
