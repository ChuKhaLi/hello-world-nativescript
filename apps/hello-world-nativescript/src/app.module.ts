import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CoreModule } from './core/core.module';
import { AppComponent } from './app.component';
import { StackLayoutComponent } from './app/layout/stack-layout/stack-layout.component';
import { ChallengeModule } from './app/challenges/challenge.module';
import { SharedModule } from './app/shared/shared.module';

@NgModule({
    imports: [CoreModule, SharedModule, ChallengeModule],
    declarations: [AppComponent, StackLayoutComponent],
    bootstrap: [AppComponent],
    schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
