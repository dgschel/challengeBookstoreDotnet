using System.Collections.Generic;
using AuthorApi.Models;

namespace BookApi.Models
{
    public class Book
    {
        public int bookId { get; set; }
        public string name { get; set; }
        public string isbn { get; set; }
        public Author Author { get; set; }
    }
}