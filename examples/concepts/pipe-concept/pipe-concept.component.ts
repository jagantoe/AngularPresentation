import { CurrencyPipe, DatePipe, JsonPipe, LowerCasePipe, UpperCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, Pipe, PipeTransform } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Pipe({
  name: 'reverse'
})
export class PipeConceptPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return '';
    return value.split('').reverse().join('');
  }
}

@Component({
  selector: 'app-pipe-concept',
  imports: [DatePipe, JsonPipe, UpperCasePipe, LowerCasePipe, CurrencyPipe, FormsModule, PipeConceptPipe],
  templateUrl: './pipe-concept.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PipeConceptComponent {
  // Data to transform with pipes
  currentDate = new Date();
  price = 42.99;
  message = 'Angular Pipes Transform Data';

  // Object for JSON pipe
  person = {
    name: 'John Doe',
    age: 30,
    address: {
      city: 'New York',
      country: 'USA'
    }
  };
}
