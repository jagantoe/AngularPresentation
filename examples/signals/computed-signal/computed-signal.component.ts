import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-computed-signal',
  imports: [],
  templateUrl: './computed-signal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComputedSignalComponent {
  readonly switch = signal(false);
  readonly a = signal(5);
  readonly b = signal(10);
  readonly c = signal(15);

  readonly sum = computed(() => this.switch() ? this.a() + this.b() : this.b() + this.c());

  incrementA() {
    this.a.update(value => value + 1);
  }

  incrementB() {
    this.b.update(value => value + 1);
  }

  incrementC() {
    this.c.update(value => value + 1);
  }
}
