import { ChangeDetectionStrategy, Component, ElementRef, inject, input } from '@angular/core';
import { highlightCode } from '../../utils/highlight';

@Component({
  selector: '[app-code-block]',
  imports: [],
  template: '<code data-noescape data-trim [textContent]="code()"></code>',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CodeBlockComponent {
  code = input.required<string>();

  element = inject(ElementRef);

  ngAfterViewInit() {
    highlightCode(this.element.nativeElement);
  }
}
