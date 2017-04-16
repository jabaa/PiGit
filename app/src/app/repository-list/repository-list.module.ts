import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

import { RepositoryListComponent } from './components/repository-list.component';
import { RepositoryListItemComponent } from './components/repository-list-item.component';
import { ListService } from './services/list.service';
import { RepositoryListPagination } from './pipes/repository-list-pagination.pipe';

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  declarations: [
    RepositoryListComponent,
    RepositoryListItemComponent,
    RepositoryListPagination
  ],
  providers: [
    ListService,
    RepositoryListPagination
  ],
  exports: [
    RepositoryListComponent
  ]
})
export class RepositoryListModule {}
