using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyFirstWinFormsApp.Models
{
    public class Car
    {
        public string Color { get; set; } = "Red";
        public double Length { get; set; }

        public void Run()
        {
            MessageBox.Show($"{Color} Vehicle is Running!!! It is {Length} long");
        }
    }

    public class Truck: Car
    {
        //new public string Color { get; set; } = "Blue";
        public string Carriage { get; set; }

        public string Freight()
        {
            return $"{Color} Truck is Running!!! It is {Length} long. And it is transporting {Carriage}";
        }
    }

    public class SUV : Car
    {
        public string Seats { get; set; }


    }
}
