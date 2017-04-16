import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

import { RepositoryDetailsComponent } from './components/repository-details.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  declarations: [
    RepositoryDetailsComponent
  ],
  providers: [
  ],
  exports: [
    RepositoryDetailsComponent
  ]
})
export class RepositoryDetailsModule {}
