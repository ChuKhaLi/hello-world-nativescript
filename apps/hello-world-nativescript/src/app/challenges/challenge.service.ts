import { Injectable } from '@angular/core';
import { ObservableArray } from '@nativescript/core';

@Injectable({
    providedIn: 'root'
})
export class ChallengeService {
    challenges = new ObservableArray<string>();

    constructor() { }

    getChallenges() {
        return this.challenges;
    }

    addChallenge(challenge: string) {
        this.challenges.push(challenge);
    }

    removeChallenge(index: number) {
        this.challenges.splice(index, 1);
    }
}
