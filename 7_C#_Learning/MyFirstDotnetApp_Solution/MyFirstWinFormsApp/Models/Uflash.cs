using MyFirstWinFormsApp.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyFirstWinFormsApp.Models
{
    public class Uflash : IUsb
    {
        public string EquipmentName { get; set; }

        public Uflash(string equipmentName)
        {
            EquipmentName = equipmentName;
            AddEquipment();
            //EquipmentWorking();
            ReadData();
        }


        public void AddEquipment()
        {
            MessageBox.Show($"{EquipmentName} Added!");
        }

        public void EquipmentWorking()
        {
            MessageBox.Show($"{EquipmentName} Working!");
        }

        private void ReadData()
        {
            MessageBox.Show($"Reading data of {EquipmentName}");
        }
    }
}
