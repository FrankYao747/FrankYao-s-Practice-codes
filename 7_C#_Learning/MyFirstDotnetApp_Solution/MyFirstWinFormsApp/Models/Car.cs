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
            MessageBox.Show($"{Color} Car is Running!!! It is {Length} long");
        }
    }

    public class Truck(): Car
    {
        public string Carriage { get; set; }

        public string Freight()
        {
            return $"{Color} Truck is Running!!! It is {Length} long. And it is transporting {Carriage}";
        }
    }
}
