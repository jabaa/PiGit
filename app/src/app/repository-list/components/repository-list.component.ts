import { Component } from '@angular/core';

import { ListService } from '../services/list.service';
import { RepositoryListInterface } from '../models/repository-list.interface';

@Component({
  moduleId: module.id,
  templateUrl: './repository-list.component.html'
})
export class RepositoryListComponent {
  public list: RepositoryListInterface[];
  public page = 0;
  public itemsPerPage = 10;

  constructor(private listService: ListService) {
    this.listService.getList()
      .subscribe((response: RepositoryListInterface[]) => {
        this.list = response;
      });
  }

  public get showPagination(): boolean {
    return this.list && this.list.length > this.itemsPerPage;
  }

  public get pages(): number[] {
    return !this.list ? [1] : Array(this.list.length / this.itemsPerPage).fill(0).map((el: number, idx: number) => idx + 1);
  }

  public goToPage(page: number) {
    this.page = page;
  }
}
