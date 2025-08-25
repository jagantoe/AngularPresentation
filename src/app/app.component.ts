import { Component } from '@angular/core';
import { PresentationComponent } from "./presentation/presentation.component";

@Component({
  selector: 'app-root',
  imports: [PresentationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class App {
  protected title = 'AngularPresentation';
}
