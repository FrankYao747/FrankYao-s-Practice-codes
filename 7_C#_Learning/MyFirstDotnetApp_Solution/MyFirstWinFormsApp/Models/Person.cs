using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyFirstWinFormsApp.Models
{
    class Person
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Age { get; set; }

        public void Eat()
        {
            MessageBox.Show($"{Name} is Eating!!!");
        }

        public string Run()
        {
            return $"{Name} is Running!!! He is {Age} years old, His ID number is {Id}";
        }
    }
}
