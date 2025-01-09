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
                if (i == 5)
                {
                    continue;
                }
                MessageBox.Show($"i is {i}, it is the {i + 1} time");
            }
            MessageBox.Show($"Finish!!!");
        }

        private void btnWhile_Click(object sender, EventArgs e)
        {
            int i = 0;
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

        private void btnArray_Click(object sender, EventArgs e)
        {
            int[] ints = new int[6]; //Array creation must have array size or array initializer
            ints[0] = 1;
            ints[1] = 2;
            ints[2] = 3;
            ints[3] = 4;
            ints[4] = 5;
            ints[5] = 6;
            //ints[6] = 7; // System.IndexOutOfRangeException: 'Index was outside the bounds of the array.'

            int[] ints2 = new int[] { 0, 1, 2, 3, 4, 5, 6 };
            ints2[0] = 1;
            //ints2[8] = 7; // System.IndexOutOfRangeException: 'Index was outside the bounds of the array.'

            int[] ints3 = { 0, 1, 2 };

            //int i = ints[1];

            //int len = ints3.Length;
            //for (int i=0; i<ints3.Length; i++)
            //{
            //   MessageBox.Show( ints3[i] + "");
            //}

            string[] strs = { "Hello ", "My ", "Name" };
            for (int i = 0; i < strs.Length; i++)
            {
                MessageBox.Show(strs[i]);
            }

        }


        // case 1:
        private void buttonCase1_Click(object sender, EventArgs e)
        {
            double price = 1.9;
            //string kilo_string = textBoxCase1.Text;
            try
            {
                double kilo = Convert.ToDouble(textBoxCase1.Text); // the kilo you want to buy
                double dis = 0.75; // discount
                double totalPrice = price * kilo;
                if (kilo >= 10)
                {
                    totalPrice = totalPrice * dis;
                }
                else dis = 0.0;
                //MessageBox.Show($"Single Price is: {price}, You buy: {kilo} KG\r\n");
                MessageBox.Show($"Single Price is: {price}, You buy: {kilo} KG, Original Total Price is: {Math.Round(price * kilo, 2)}.\r\nTotal Price is: {Math.Round(totalPrice,2)}, the discount is: {dis}");
            }
            catch
            {
                MessageBox.Show("Wrong number");
            }




        }

        private void btnCase1Plus_Click(object sender, EventArgs e)
        {
            double price = 1.9;
            //string kilo_string = textBoxCase1.Text;
            try
            {
                
                double kilo = Convert.ToDouble(textBoxCase1.Text); // the kilo you want to buy
                double dis = 0.75; // discount
                double totalPrice = price * kilo;
                double discount_part = 0;
                double ten_count = 0;
                if (kilo >= 10)
                {
                    ten_count = (int) (totalPrice / 10);
//(int)5.21      5
//int.Parse() string to int;  the string should be int cannot be double format;
//double.Parse(ten_count.ToString());



                    //MessageBox.Show("ten_count: "+ ten_count);
                    //MessageBox.Show("totalPrice % 10: " + (totalPrice % 10));
                    discount_part = ten_count * 10 * dis;
                    totalPrice = (ten_count *10* dis) + totalPrice % 10;

                }
                else dis = 0.0;
                //MessageBox.Show($"Single Price is: {price}, You buy: {kilo} KG\r\n");
                MessageBox.Show($"Single Price is: {price}, You buy: {kilo} KG, Original Total Price is: {Math.Round(price * kilo, 2)}.\r\nThe discount is: {ten_count} times {dis}, discount part is {discount_part}.\r\nTotal Price is: {Math.Round(totalPrice, 2)}.");
            }
            catch
            {
                MessageBox.Show("Wrong number");
            }
        }
    }
}
