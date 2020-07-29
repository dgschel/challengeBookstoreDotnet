import { Author } from './author.interface';

export interface Book {
    bookId: number,
    name: string,
    isbn: string,
    author: Author
}
