using MyFirstWinFormsApp.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using System.Data.SqlClient;

namespace MyFirstWinFormsApp
{
    public partial class FrmList : Form
    {
        List<Person> persons;
        public FrmList()
        {
            InitializeComponent();
        }

        private void btnCancel_Click(object sender, EventArgs e)
        {
            this.Close();
        }

        private void btnBinding_Click(object sender, EventArgs e)
        {
			//persons = new List<Person>();
			//Person p1 = new Person();
			//p1.Name = "Frank";
			//p1.Age = 35;
			//p1.Id = 1;
			//persons.Add(p1);

			//Person p2 = new Person()
			//{
			//    Name = "Peter",
			//    Age = 31,
			//    Id = 2
			//};
			//persons.Add(p2);

			//persons.Add(new Person()
			//{
			//    Name = "Davin",
			//    Age = 30,
			//    Id = 3
			//});
			//persons.Add(new Person()
			//{
			//    Name = "Leo",
			//    Age = 33,
			//    Id = 4
			//});

			//dgvPerson.DataSource = persons;


			//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
			// create a key to the Database
			using SqlConnection conn = new SqlConnection("Server=127.0.0.1; database = MyFirstDb; uid = sa; pwd= 12344321") ;
			conn.Open();
			///  create a SqlCommand object
			SqlCommand cmd = new SqlCommand("Select UserName, Age, UserDescription From [User]", conn);

			SqlDataAdapter adapter = new SqlDataAdapter(cmd);

			DataSet ds = new DataSet();

			adapter.Fill(ds);

			DataTable dt = ds.Tables[0];

			dgvPerson.DataSource = dt;

			//conn.Close();
			//conn.Dispose();
				
			//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

		}

        private void dgvPerson_RowHeaderMouseClick(object sender, DataGridViewCellMouseEventArgs e)
        {
            int rowIndex = e.RowIndex;
            if(persons != null)
            {
                dgvPerson.DataSource = new List<Person>();
                persons.RemoveAt(rowIndex);
                dgvPerson.DataSource = persons;
            }

        }
    }
}
