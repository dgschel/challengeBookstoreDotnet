using AuthorApi.Models;
using BookApi.Models;
using Microsoft.EntityFrameworkCore;

public class Bookstore : DbContext
{
    public Bookstore(DbContextOptions<Bookstore> options) : base(options) { }
    public DbSet<Author> Author { get; set; }
    public DbSet<Book> Book { get; set; }
}
