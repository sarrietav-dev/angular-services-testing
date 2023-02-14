import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface Person {
  name: string;
  height: number;
  weight: number;
}

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss'],
})
export class PersonComponent {
  @Input() person!: Person;
  @Output() onSelected = new EventEmitter<Person>();

  bmiStatus:
    | 'Underweight'
    | 'Normal weight'
    | 'Overweight'
    | 'Obesity'
    | 'Unknown'
    | '' = '';

  handleClick() {
    this.bmiStatus = this.computeBMI(this.person.height, this.person.weight);
  }

  handleChoose() {
    this.onSelected.emit(this.person);
  }

  computeBMI(height: number, weight: number) {
    const bmi = weight / (height * height);

    if (bmi < 18.5) {
      return 'Underweight';
    }
    if (bmi >= 18.5 && bmi <= 24.9) {
      return 'Normal weight';
    }
    if (bmi >= 25 && bmi <= 29.9) {
      return 'Overweight';
    }
    if (bmi >= 30) {
      return 'Obesity';
    }

    return 'Unknown';
  }
}
