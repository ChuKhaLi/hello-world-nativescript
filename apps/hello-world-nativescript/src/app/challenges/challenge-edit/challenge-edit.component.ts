import { Component, OnInit } from '@angular/core';
import { ChallengeService } from '../challenge.service';

@Component({
    selector: 'challenge-edit',
    templateUrl: './challenge-edit.component.html',
    styleUrls: ['./challenge-edit.component.scss']
})
export class ChallengeEditComponent implements OnInit {
    currentChallenge = '';

    constructor(
        private readonly challengeService: ChallengeService
    ) { }

    ngOnInit(): void {
    }

    onSetChallenge() {
        if (!this.currentChallenge || !this.currentChallenge.trim()) {
            return;
        }

        this.challengeService.addChallenge(this.currentChallenge);

        this.currentChallenge = '';
    }
}
