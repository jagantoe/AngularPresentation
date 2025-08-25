
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ComponentConceptComponent } from "../../../../examples/concepts/component-concept/component-concept.component";
import { DirectiveConceptComponent } from "../../../../examples/concepts/directive-concept/directive-concept.component";
import { PipeConceptComponent } from "../../../../examples/concepts/pipe-concept/pipe-concept.component";
import { ServiceConceptComponent } from "../../../../examples/concepts/service-concept/service-concept.component";
import { ContainerComponent } from "../../../../examples/templates/container/container.component";
import { CodeExampleComponent } from "../../code-example/code-example.component";

@Component({
  selector: 'section[app-concepts]',
  imports: [
    CodeExampleComponent,
    ComponentConceptComponent,
    DirectiveConceptComponent,
    PipeConceptComponent,
    ServiceConceptComponent,
    ContainerComponent
  ],
  templateUrl: './concepts.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConceptsComponent {

}
