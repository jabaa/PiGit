import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

import { RepositoryListComponent } from './components/repository-list.component';
import { RepositoryListItemComponent } from './components/repository-list-item.component';
import { RepositoryListService } from './services/repository-list.service';
import { RepositoryListPaginationPipe } from './pipes/repository-list-pagination.pipe';

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  declarations: [
    RepositoryListComponent,
    RepositoryListItemComponent,
    RepositoryListPaginationPipe,
  ],
  providers: [
    RepositoryListService,
    RepositoryListPaginationPipe
  ],
  exports: [
    RepositoryListComponent
  ]
})
export class RepositoryListModule {}
