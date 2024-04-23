import { Component } from '@angular/core';

@Component({
  selector: 'app-word-input',
  standalone: true,
  imports: [],
  templateUrl: './word-input.component.html',
  styleUrl: './word-input.component.css'
})
export class WordInputComponent {
  userInput: string = '';

  onUserInput(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.userInput = value;
  }

}
