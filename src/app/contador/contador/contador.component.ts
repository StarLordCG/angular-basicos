import { Component } from '@angular/core';


@Component({
    selector: 'app-contador',
    template: `
        <h1>{{ titulo }}</h1>
        <h3>The base number is: <strong>{{base}}</strong> </h3>

        <button (click)="accumulate(base)"> + {{base}}</button>

        <span>{{ num }}</span>

        <button (click)="accumulate(-base)"> - {{base}}</button>
    `
})
export class ContadorComponent {

    titulo: string = 'Contador App';
    num: number = 10;
    base: number = 5;

    accumulate(val: number) {
         this.num += val;
    }


}