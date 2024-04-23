import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { WordInputComponent } from './components/word-input/word-input.component';
import { OddLengthComponent } from "./components/odd-length/odd-length.component";


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, NavbarComponent, WordInputComponent, OddLengthComponent]
})
export class AppComponent {
  inputOddWord: string = "";
  inputEvenWord: string = "";

  oddLengthWords: string[] = [];
  evenLengthWords: string[] = [];

  onUserInputChange(word: string){
    if (word.length % 2 === 0) {
      this.inputEvenWord = word;
      this.inputOddWord = '';
    } else {
      this.inputEvenWord = '';
      this.inputOddWord = word;
    }
  }

  onWord(word: string) {
    if (word.length % 2 === 0) {
      this.evenLengthWords.push(word);
    } else {
      this.oddLengthWords.push(word);
    }
  }
    

}
