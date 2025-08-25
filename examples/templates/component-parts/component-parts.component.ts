import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <p>{{ title }}</p>
    <p>Count: {{ count }}</p>
    <button (click)="countChanged()">Change Count</button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent {
  @Input() title: string = '';
  @Input({ required: true }) count: number = 0;

  @Output() countChange = new EventEmitter<number>();

  countChanged() {
    this.countChange.emit(this.count);
  }
}

@Component({
  selector: 'app-component-parts',
  imports: [ChildComponent],
  templateUrl: './component-parts.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComponentPartsComponent {
  count = 10;

  parentMethod(number: number) {
    // Do something
  }
}
