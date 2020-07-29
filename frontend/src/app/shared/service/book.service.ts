import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Book } from '../model/book.interface';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private apiBookUrl = 'https://localhost:5001/api/book/';

  constructor(private http: HttpClient) { }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.apiBookUrl);
  }

  getBook(id: string): Observable<Book> {
    return this.http.get<Book>(this.apiBookUrl + id)
  }

  createBook(book: Book): Observable<Book> {
    return this.http.post<Book>(this.apiBookUrl, book);
  }

  updateBook(book: Book): Observable<Book> {
    return this.http.put<Book>(this.apiBookUrl + book.bookId, book)
  }

  deleteBook(id: number): Observable<Book> {
    return this.http.delete<Book>(this.apiBookUrl + id)
  }
}
