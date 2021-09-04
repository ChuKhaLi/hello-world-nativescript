import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CoreModule } from './core/core.module';
import { SharedModule } from './features/shared/shared.module';
import { AppComponent } from './app.component';
import { StackLayoutComponent } from './app/layout/stack-layout/stack-layout.component';

@NgModule({
  imports: [CoreModule, SharedModule],
  declarations: [AppComponent, StackLayoutComponent],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {}
