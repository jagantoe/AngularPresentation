import { NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component, Directive, ElementRef, HostListener, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Directive({
  selector: '[appDirectiveConcept]'
})
export class DirectiveConcept {
  @Input() highlightColor = '#ffff00';

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string | null) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}

@Component({
  selector: 'app-directive-concept',
  imports: [FormsModule, NgFor, DirectiveConcept],
  templateUrl: './directive-concept.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DirectiveConceptComponent {
  // Colors for the highlight directive
  colors = ['#ffff00', '#90EE90', '#ADD8E6', '#FFC0CB'];
  selectedColor = this.colors[0];
}
