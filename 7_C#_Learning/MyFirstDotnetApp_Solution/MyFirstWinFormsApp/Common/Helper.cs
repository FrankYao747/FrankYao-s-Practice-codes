using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyFirstWinFormsApp.Common
{
   static class Helper
    {
        public static string AddFullStop(this string str)
        {
            return str + ".";
        }
    }
}
