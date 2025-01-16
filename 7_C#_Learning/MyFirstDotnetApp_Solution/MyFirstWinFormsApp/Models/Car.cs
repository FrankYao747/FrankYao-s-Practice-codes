using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyFirstWinFormsApp.Models
{
    public class Car
    {
        public string Color { get; set; }
        public double Length { get; set; }

        public void Run()
        {
            MessageBox.Show("Car Running!!!");
        }
    }
}
