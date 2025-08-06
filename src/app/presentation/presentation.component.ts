import { CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, viewChild } from '@angular/core';
import { BasicsComponent } from '../topics/basics/basics.component';
import { ComponentsComponent } from '../topics/components/components.component';
import { ControlFlowComponent } from "../topics/control-flow/control-flow.component";
import { DataLoadingComponent } from '../topics/data-loading/data-loading.component';
import { EndComponent } from '../topics/end/end.component';
import { GeneralComponent } from '../topics/general/general.component';
import { ObservablesComponent } from '../topics/observables/observables.component';
import { RoutingComponent } from '../topics/routing/routing.component';
import { SignalsComponent } from '../topics/signals/signals.component';
import { SsrComponent } from '../topics/ssr/ssr.component';
import { StartComponent } from '../topics/start/start.component';

import Reveal from 'reveal.js';
import RevealHighlight from 'reveal.js/plugin/highlight/highlight';

@Component({
  selector: 'app-presentation',
  standalone: true,
  imports: [CommonModule, StartComponent, GeneralComponent, BasicsComponent, ControlFlowComponent, ComponentsComponent, RoutingComponent, SignalsComponent, ObservablesComponent, DataLoadingComponent, SsrComponent, EndComponent],
  templateUrl: './presentation.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PresentationComponent implements AfterViewInit {
  readonly slidesElement = viewChild.required<ElementRef>('slides');

  ngAfterViewInit() {
    const deck = new Reveal(this.slidesElement().nativeElement, {
      controls: true,
      progress: true,
      center: true,
      hash: true,
      plugins: [RevealHighlight]
    });
    deck.initialize();
  }
}
