using ServiceProject.Models;
using System.Collections.Generic;
using System.Web.Http;

namespace ServiceProject.Controllers
{
    public class ProductInfoAPIController : ApiController
    {
        public IEnumerable<Product> Get()
        {
            return new ProductDatabase();
        }
    }
}
