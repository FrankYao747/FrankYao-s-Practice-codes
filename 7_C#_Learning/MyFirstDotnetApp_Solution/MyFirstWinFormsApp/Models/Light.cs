using MyFirstWinFormsApp.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyFirstWinFormsApp.Models
{
    public class Light: IUsb
    {
        public string EquipmentName { get; set; }

        public Light(string equipmentName)
        {
            EquipmentName = equipmentName;
            AddEquipment();
            //EquipmentWorking();
            OpenLight();
        }

        public void AddEquipment()
        {
            MessageBox.Show($"{EquipmentName} Added!");
        }

        public void EquipmentWorking()
        {
            MessageBox.Show($"{EquipmentName} Working!");
        }
        private void OpenLight()
        {
            MessageBox.Show($"{EquipmentName} opening!");
        }
    }
}
