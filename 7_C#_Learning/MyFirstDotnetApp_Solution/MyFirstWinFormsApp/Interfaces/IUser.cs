using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyFirstWinFormsApp.Interfaces
{
    public interface IUser
    {
        public int Count { get; set; }
        void SayHello();
    }
}
