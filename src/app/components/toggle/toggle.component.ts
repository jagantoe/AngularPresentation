import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, model } from '@angular/core';

@Component({
    selector: 'app-toggle',
    imports: [NgClass],
    templateUrl: './toggle.component.html',
    styles: `
    .toggle-container {
      display: inline-block;
      cursor: pointer;
    }

    .toggle-switch {
      position: relative;
      width: 60px;
      height: 30px;
      background-color: #ccc;
      border-radius: 15px;
      transition: background-color 0.3s;
    }

    .toggle-switch.active {
      background-color: #4cd964;
    }

    .toggle-slider {
      position: absolute;
      top: 3px;
      left: 3px;
      width: 24px;
      height: 24px;
      background-color: white;
      border-radius: 50%;
      transition: transform 0.3s;
      box-shadow: 0 1px 3px rgba(0,0,0,0.3);
    }

    .toggle-switch.active .toggle-slider {
      transform: translateX(30px);
    }

    .toggle-label {
      margin-top: 5px;
      text-align: center;
      font-size: 14px;
      font-weight: bold;
      color: #555;
    }

    .true {
      color: green;
    }

    .false {
      color: red;
    }
  `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToggleComponent {
    value = model(false);

    toggle(): void {
        this.value.update(current => !current);
    }
}
