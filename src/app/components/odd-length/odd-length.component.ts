import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-odd-length',
    standalone: true,
    templateUrl: './odd-length.component.html',
    styleUrl: './odd-length.component.css',
    imports: []
})
export class OddLengthComponent {
@Input() userInput: string = '';
}
