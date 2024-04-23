import { Component, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-word-input',
  standalone: true,
  imports: [],
  templateUrl: './word-input.component.html',
  styleUrl: './word-input.component.css'
})
export class WordInputComponent {
  userInput: string = '';
  @Output() userInputChange = new EventEmitter<string>();
  @Output() word = new EventEmitter<string>();

  currentWord = '';

  onUserInput(event: Event) {
    const input = event.target as HTMLInputElement;
    this.userInputChange.emit(input.value);
    this.currentWord = input.value;
  }

  onSubmit() {
    this.word.emit(this.currentWord);
  }
}
