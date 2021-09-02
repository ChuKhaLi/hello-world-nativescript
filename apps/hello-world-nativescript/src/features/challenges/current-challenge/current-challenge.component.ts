import { Component, OnInit } from '@angular/core';
import { ObservableArray } from '@nativescript/core';

@Component({
    selector: 'current-challenge',
    templateUrl: './current-challenge.component.html',
    styleUrls: ['./current-challenge.component.css']
})
export class CurrentChallengeComponent implements OnInit {
    challenges = new ObservableArray<string>();
    currentChallenge = '';

    constructor() { }

    ngOnInit(): void {
    }

    onSetChallenge() {
        this.challenges.push(this.currentChallenge);
        this.currentChallenge = '';
    }

}
