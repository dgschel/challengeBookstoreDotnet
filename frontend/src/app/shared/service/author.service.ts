import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../model/book.interface';
import { Author } from '../model/author.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  private apiAuthorkUrl = 'https://localhost:5001/api/author/';

  constructor(private http: HttpClient) { }

  getAuthors(): Observable<Author[]> {
    return this.http.get<Author[]>(this.apiAuthorkUrl);
  }

  getAuthor(id: number): Observable<Author> {
    return this.http.get<Author>(this.apiAuthorkUrl + id)
  }

  createAuthor(author: Author): Observable<Author> {
    return this.http.post<Author>(this.apiAuthorkUrl, author);
  }

  updateAuthor(author: Author): Observable<Author> {
    return this.http.put<Author>(this.apiAuthorkUrl + author.authorId, author)
  }

  deleteAuthor(id: number): Observable<Author> {
    return this.http.delete<Author>(this.apiAuthorkUrl + id)
  }
}
