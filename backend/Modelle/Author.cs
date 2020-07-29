using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using BookApi.Models;

namespace AuthorApi.Models
{
    public class Author
    {
        public int authorId { get; set; }
        public string first_name { get; set; }
        public string last_name { get; set; }
        public ICollection<Book> Books { get; set; }
    }
}