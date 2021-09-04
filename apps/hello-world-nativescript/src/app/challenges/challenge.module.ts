import {
    NgModule,
    NO_ERRORS_SCHEMA,
    CUSTOM_ELEMENTS_SCHEMA
} from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CurrentChallengeComponent } from './current-challenge/current-challenge.component';
import { ChallengeEditComponent } from './challenge-edit/challenge-edit.component';
import { ChallengeService } from './challenge.service';


@NgModule({
    imports: [SharedModule],
    declarations: [CurrentChallengeComponent, ChallengeEditComponent],
    exports: [CurrentChallengeComponent, ChallengeEditComponent],
    providers: [ChallengeService],
    schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
})
export class ChallengeModule { }
