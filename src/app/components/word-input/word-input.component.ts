import { Component, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-word-input',
  standalone: true,
  imports: [],
  templateUrl: './word-input.component.html',
  styleUrl: './word-input.component.css'
})
export class WordInputComponent {
  
  @Output() userInput = new EventEmitter<string>();
  @Output() word = new EventEmitter<string>();

  currentWord = '';

  onUserInput(event: Event) {
    const input = event.target as HTMLInputElement;
    this.userInput.emit(input.value);
    this.currentWord = input.value;
    
  }

  onSubmit(event: Event) {
    event.preventDefault();
    this.word.emit(this.currentWord);
    this.userInput.emit('');
  }
}
