using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyFirstWinFormsApp.Interfaces
{
    public interface IUsb
    {

        public string EquipmentName { get; set; }

        public void AddEquipment();
        //{
        //    MessageBox.Show($"{EquipmentName} Added!");
        //}

        public void EquipmentWorking();
        //{
        //    MessageBox.Show($"{EquipmentName} Working!");
        //}
    }
}
