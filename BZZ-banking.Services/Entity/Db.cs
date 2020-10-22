using System;
using System.Collections.Generic;
using System.Runtime.ConstrainedExecution;
using System.Text;

namespace BZZ_banking.Services.Entity
{
    public class Db
    {
        public static string GetConnectionString(string database) => $"Server=(localdb)\\MSSQLLocalDb;Database={database};Trusted_Connection=True;";
    }
}
