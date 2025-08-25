import { ChangeDetectionStrategy, Component, inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceConceptService {
  private counter = 0;

  getValue() {
    return this.counter;
  }

  incrementCounter() {
    this.counter++;
  }
}

@Component({
  selector: 'app-child',
  template: '<button (click)="incrementCounter()">Increment</button>',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent {
  constructor(private service: ServiceConceptService) { }
  incrementCounter() {
    this.service.incrementCounter();
  }
}

@Component({
  selector: 'app-service-concept',
  imports: [ChildComponent],
  templateUrl: './service-concept.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ServiceConceptComponent {
  readonly service = inject(ServiceConceptService);
}
