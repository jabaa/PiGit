import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { StoreModule } from '@ngrx/store';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { RepositoryListModule } from './repository-list/repository-list.module';
import { RepositoryDetailsModule } from './repository-details/repository-details.module';
import { MemberModule } from './member/member.module';
import { memberReducer } from './member/reducers/member.reducer';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    StoreModule.provideStore({ member: memberReducer }),
    RepositoryListModule,
    RepositoryDetailsModule,
    MemberModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {}
