using MyFirstWinFormsApp.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyFirstWinFormsApp.Models
{
    public class Car
    {
        public IUser User { get; set; }
        public Car()
        {
            
        }
        public Car(IUser user)
        {
            User = user;
        }
        public string Color { get; set; } = "Red";
        public double Length { get; set; }

        public void Run()
        {
            MessageBox.Show($"{Color} Vehicle is Running!!! It is {Length} long. {User.UserName} is driving!");
        }
    }

    public class Truck: Car
    {
        public Truck()
        {
            
        }
        public Truck(IUser user) : base(user)
        {
        }

        //new public string Color { get; set; } = "Blue";
        public string Carriage { get; set; } = "Apple";

        public string Freight()
        {
            return $"{Color} Truck is Running!!! It is {Length} long. And it is transporting {Carriage}, {User.UserName} is driving!";
        }
    }

    public class SUV : Car
    {
        public SUV()
        {
            
        }
        public SUV(IUser user) : base(user)
        {
        }

        public string Seats { get; set; }


    }
}
