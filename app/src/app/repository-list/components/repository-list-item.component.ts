import { Component, Input } from '@angular/core';

import { RepositoryListInterface } from '../models/repository-list.interface';

@Component({
  moduleId: module.id,
  selector: 'app-repository-list-item',
  templateUrl: './repository-list-item.component.html'
})
export class RepositoryListItemComponent {
  @Input() item: RepositoryListInterface;
  @Input() index: number;
}
