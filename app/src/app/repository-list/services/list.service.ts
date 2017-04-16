import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class ListService {
  constructor(private http: Http) {}

  public getList() {
    return this.http.get('/api')
      .map((response: Response) => response.json());
  }
}
