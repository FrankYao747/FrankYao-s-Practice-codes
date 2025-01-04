namespace MyFirstWinFormsApp
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }


        private void btnCheckName_Click(object sender, EventArgs e)
        {
            //string fruit = txtUserName.Text;
            //if (fruit == "apple") // and && ; or ||
            //{
            //    MessageBox.Show("It's an apple");
            //}
            //else if (fruit == "banana")
            //{
            //    MessageBox.Show("It's a banana");
            //}
            //else
            //{
            //    MessageBox.Show("Neither apple nor banana");
            //}

            ///////////////////////////////////////////////////////////////////
            //string res = "";
            string number = txtUserName.Text;

            //switch (number)
            //{
            //    default:
            //    case "104":
            //    case "101":
            //        res = "101";
            //        break;
            //    case "102":
            //        res = "102";
            //        break;
            //    case "103":
            //        res = "103";
            //        break;
            //        //default:
            //        //    MessageBox.Show("Wrong Number!!!");
            //        //    break;

            //}
            //MessageBox.Show($"Enter Room {res}!!!");

            ////////////////////////////////////////////////////////////////
            ///

            string res = number switch                         // new switch
            {
                "101" => "101",
                "102" => "102",
                "103" => "103",
                _ => "101",

            };
            MessageBox.Show($"Enter Room {res}!!!");
        }

        private void btnFor_Click(object sender, EventArgs e)
        {
            for (int i = 0; i < 10; i++)
            {
                if (i == 0)
                {
                    MessageBox.Show("Start!!!");
                }
                if (i==5)
                {
                    continue;
                }
                MessageBox.Show($"i is {i}, it is the {i + 1} time");
            }
            MessageBox.Show($"Finish!!!");
        }

        private void btnWhile_Click(object sender, EventArgs e)
        {
            int i =0;
            //while (i<10)
            //{
            //    i++;
            //}

            do
            {
                MessageBox.Show("" + i++);
            }
            while (i < 10);
        }
    }
}
