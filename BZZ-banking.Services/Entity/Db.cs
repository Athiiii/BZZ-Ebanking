using System;
using System.Collections.Generic;
using System.Runtime.ConstrainedExecution;
using System.Text;

namespace BZZ_banking.Services.Entity
{
    public class Db
    {
        // public static string GetConnectionString(string database) => $"Server=(localdb)\\MSSQLLocalDb;Database={database};User Id=sa;Password=root;";
        public static string GetConnectionString(string database) => $"Server=DESKTOP-DJL8SSV\\SQLEXPRESS01;Database={database};Trusted_Connection=True;";
    }
}
