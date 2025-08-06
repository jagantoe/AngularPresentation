import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-computed-signal',
  imports: [],
  templateUrl: './computed-signal.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComputedSignalComponent {
  readonly a = signal(5);
  readonly b = signal(10);
  readonly c = signal(15);

  readonly sum = computed(() => this.a() + this.b() + this.c());
}
