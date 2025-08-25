import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-first',
  imports: [],
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FirstComponent {

}

@Component({
  selector: 'app-second',
  imports: [],
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SecondComponent {

}

// A module can be seen as a grouping of related components, directives, pipes, and services.
// With the introduction of standalone components in Angular, the need for NgModules has been reduced.
@NgModule({
  imports: [FirstComponent, SecondComponent],
  exports: [FirstComponent, SecondComponent]
})
export class MyModule { }

@Component({
  selector: 'app-module-concept',
  imports: [MyModule],
  template: `
    <app-first></app-first>
    <app-second></app-second>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModuleConceptComponent {

}
