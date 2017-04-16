import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { RepositoryListModule } from './repository-list/repository-list.module';
import { RepositoryDetailsModule } from './repository-details/repository-details.module';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    RepositoryListModule,
    RepositoryDetailsModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {}
