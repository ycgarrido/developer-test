import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class BookListService {

  private server;

  constructor(private http: HttpClient) {
    this.server = 'http://127.0.0.1:3000/book';
  }

  index(filter) {
    var params = (filter.author && filter.category) ? ("?author=" + filter.author + "&category=" + filter.category) : (filter.author) ? "?author=" + filter.author : (filter.category) ? "?category=" + filter.category : "";
    return this.http.get(this.server + params);
  }

  delete(id) {
    return this.http.delete<any>(this.server + "/" + id);
  }
}
