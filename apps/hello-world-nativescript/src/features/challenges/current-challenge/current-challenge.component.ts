import { Component, OnInit } from '@angular/core';
import { ItemEventData, ObservableArray } from '@nativescript/core';

@Component({
    selector: 'current-challenge',
    templateUrl: './current-challenge.component.html',
    styleUrls: ['./current-challenge.component.scss']
})
export class CurrentChallengeComponent implements OnInit {
    challenges = new ObservableArray<string>();
    currentChallenge = '';

    constructor() { }

    ngOnInit(): void {
    }

    onSetChallenge() {
        if (!this.currentChallenge || !this.currentChallenge.trim()) {
            return;
        }

        this.challenges.push(this.currentChallenge);
        this.currentChallenge = '';
    }

    onItemTap(args: ItemEventData) {
        this.challenges.splice(args.index, 1);
    }

}
