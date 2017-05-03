import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class MemberService {
  constructor(private http: Http) {}

  public login(username: string, password: string): Observable<any> {
    return this.http.post('/api/member/login', {username, password})
      .map((response: Response) => response.json());
  }
}
