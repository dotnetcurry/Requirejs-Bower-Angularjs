using System.Collections.Generic;

namespace ServiceProject.Models
{
    public class Product
    {
        public int ProdId { get; set; }
        public string ProdName { get; set; }
    }

    public class ProductDatabase : List<Product>
    {
        public ProductDatabase()
        {
            Add(new Product() {ProdId=1,ProdName="Laptop" });
            Add(new Product() { ProdId = 2, ProdName = "Desktop" });
        }
    }
}