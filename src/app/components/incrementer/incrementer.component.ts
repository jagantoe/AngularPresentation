import { ChangeDetectionStrategy, Component, input, model } from '@angular/core';

@Component({
  selector: 'app-incrementer',
  imports: [],
  templateUrl: './incrementer.component.html',
  styles: `
    .incrementer {
      display: flex;
      align-items: stretch;
      border: 1px solid #ccc;
      border-radius: 4px;
      overflow: hidden;
      width: fit-content;
    }
    button {
      width: 36px;
      font-size: 18px;
      font-weight: bold;
      cursor: pointer;
      border: none;
      background-color: #f1f1f1;
      transition: background-color 0.2s;
      padding: 8px 0;
    }
    button:hover {
      background-color: #e0e0e0;
    }
    button:active {
      background-color: #d0d0d0;
    }
    .value {
      min-width: 50px;
      text-align: center;
      font-size: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 10px;
      background-color: white;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IncrementerComponent {
  min = input(0);
  value = model(0);

  increment(): void {
    this.value.update(current => current + 1);
  }

  decrement(): void {
    this.value.update(current => Math.max(this.min(), current - 1));
  }
}
