using BZZ_banking.Services.Entity;
using BZZ_banking.Services.Entity.Model;
using Dapper;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;

namespace BZZ_banking.Services.Service.Demo
{
    public class Category
    {

        public IEnumerable<string> GetCategories()
        {
            using (var connection = new SqlConnection(Db.GetConnectionString("Foodmarket")))
            {
                var uCategories = new List<string>();
                var categories = connection.Query<string>($"SELECT [Name] FROM[Foodmarket].[dbo].[Category] as c INNER JOIN Menu_Category as mc on mc.Category_Id = c.Id");
                categories.ToList().ForEach(x =>
                {
                    if (uCategories.FirstOrDefault(y => y == x) == null)
                        uCategories.Add(x);
                });
                return uCategories;
            }
        }
    }
}
