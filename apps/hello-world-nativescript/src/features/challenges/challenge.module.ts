import {
    NgModule,
    NO_ERRORS_SCHEMA,
    CUSTOM_ELEMENTS_SCHEMA
} from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from '@nativescript/angular';

import { SharedModule } from '../shared/shared.module';
import { CurrentChallengeComponent } from './current-challenge/current-challenge.component';

export const routes: Routes = [
    {
        path: '',
        component: CurrentChallengeComponent
    }
];

@NgModule({
    imports: [SharedModule, NativeScriptRouterModule.forChild(routes)],
    declarations: [CurrentChallengeComponent],
    exports: [CurrentChallengeComponent],
    schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
})
export class ChallengeModule { }
