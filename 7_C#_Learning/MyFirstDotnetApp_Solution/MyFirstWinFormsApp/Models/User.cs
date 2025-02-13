using MyFirstWinFormsApp.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyFirstWinFormsApp.Models
{
    class User : IUser
    {
        public User()
        {
            
        }
        public string UserName { get ; set ; }

        public void SayHello()
        {
        MessageBox.Show($"This is {UserName}'s SayHello method!!!");
        }

        //void SayHello(int i)
        //{
        //    int x = 1;
        //    int y = x+1;
        //}
    }
}
