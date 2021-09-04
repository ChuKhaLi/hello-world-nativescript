import { Component, OnInit } from '@angular/core';
import { ItemEventData, ObservableArray } from '@nativescript/core';
import { ChallengeService } from '../challenge.service';

@Component({
    selector: 'current-challenge',
    templateUrl: './current-challenge.component.html',
    styleUrls: ['./current-challenge.component.scss']
})
export class CurrentChallengeComponent implements OnInit {
    challenges = new ObservableArray<string>();

    constructor(
        private readonly challengeService: ChallengeService
    ) { }

    ngOnInit(): void {
        this.challenges = this.challengeService.getChallenges();
    }

    onRemoveChallenge(args: ItemEventData) {
        this.challengeService.removeChallenge(args.index);
    }
}
