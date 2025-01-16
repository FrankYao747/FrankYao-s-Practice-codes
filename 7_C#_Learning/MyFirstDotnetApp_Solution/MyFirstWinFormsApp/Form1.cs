using MyFirstWinFormsApp.Common;
using MyFirstWinFormsApp.Models;
using System.Net;

namespace MyFirstWinFormsApp
{
    public partial class form1 : Form
    {
        public form1()
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

            //string kilo_string = textBoxCase1.Text;
            try
            {
                //double price = 1.9;
                //double kilo = Convert.ToDouble(textBoxCase1.Text); // the kilo you want to buy
                //double dis = 0.75; // discount
                //double totalPrice = price * kilo;
                //if (kilo >= 10)
                //{
                //    totalPrice = totalPrice * dis;
                //}
                //else dis = 0.0;
                ////MessageBox.Show($"Single Price is: {price}, You buy: {kilo} KG\r\n");
                //MessageBox.Show($"Single Price is: {price}, You buy: {kilo} KG, Original Total Price is: {Math.Round(price * kilo, 2)}.\r\nTotal Price is: {Math.Round(totalPrice, 2)}, the discount is: {dis}");

                double dis = 0.75; // discount
                double price = 1.9;
                double kilo = Convert.ToDouble(textBoxCase1.Text); // the kilo you want to buy
                double totalPrice = price * kilo;
                if (kilo >= 10)
                {
                    totalPrice = BuyMelon(kilo, ref dis, ref price, ref totalPrice);
                }

                //MessageBox.Show($"Single Price is: {price}, You buy: {kilo} KG\r\n");
                MessageBox.Show($"Single Price is: {price}, You buy: {kilo} KG, Original Total Price is: {Math.Round(price * kilo, 2)}.\r\nTotal Price is: {Math.Round(totalPrice, 2)}, the discount is: {dis}");

            }
            catch
            {
                MessageBox.Show("Wrong number");
            }

            double BuyMelon(double kilo, ref double dis, ref double price, ref double totalPrice)
            {


                totalPrice = totalPrice * dis;

                return totalPrice;
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
                    ten_count = (int)(totalPrice / 10);
                    //(int)5.21      5
                    //int.Parse() string to int;  the string should be int cannot be double format;
                    //double.Parse(ten_count.ToString());



                    //MessageBox.Show("ten_count: "+ ten_count);
                    //MessageBox.Show("totalPrice % 10: " + (totalPrice % 10));
                    discount_part = ten_count * 10 * dis;
                    totalPrice = (ten_count * 10 * dis) + totalPrice % 10;

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

        private void btnParse_Click(object sender, EventArgs e)
        {
            string str = "5.1";
            double dou = 5.21;
            double i1 = double.Parse(str);
            //int i2 = int.Parse(dou);
            MessageBox.Show($"4.3: {Convert.ToInt32(4.3).ToString()}\r\n" +
                $"4.5: {Convert.ToInt32(4.5).ToString()}\r\n" +
                $"4.56: {Convert.ToInt32(4.56).ToString()}\r\n" +
                $"4.7: {Convert.ToInt32(4.7).ToString()}\r\n" +
                $"5.5: {Convert.ToInt32(5.5).ToString()}\r\n");

            MessageBox.Show($"Convert.ToInt32(null): {Convert.ToInt32(null).ToString()}\r\n"); // 0
            //$"int.ToInt32(null): {int.ToInt32(null).ToString()}\r\n" //'int' does not contain a definition for 'ToInt32'
        }

        private void btnCase2_Click(object sender, EventArgs e)
        {
            string[] strs = { "a", "b", "c", "d", "e", "f", "g", "h" };

            bool state = false;
            int number = 0;
            for (int i = 0; i < strs.Length; i++)
            {

                if (strs[i] == textBoxCase2.Text)
                {
                    state = true;
                    number = i + 1;
                }
            }
            if (state == true)
            {
                MessageBox.Show($"Find it! It is the {number} one");
            }
            else
            {
                MessageBox.Show("Not at here!!!");
            };


        }

        private void btnCase2While_Click(object sender, EventArgs e)
        {
            string[] strs = { "a", "b", "c", "d", "e", "f", "g", "h" };

            bool state = false;
            int number = 0;
            int i = 0;
            while (i < strs.Length)
            {
                if (strs[i] == textBoxCase2.Text)
                {
                    state = true;
                    number = i + 1;
                };
                i++;
            }
            if (state == true)
            {
                MessageBox.Show($"Find it! It is the {number} one");
            }
            else
            {
                MessageBox.Show("Not at here!!!");
            };

            //string user = "";
            //while (user != textBoxCase2.Text)
            //{
            //    user = strs[i++];
            //    if (user == textBoxCase2.Text)
            //    {
            //        MessageBox.Show($"Find it! It is the {number} one");
            //    }
            //    else
            //    {
            //        MessageBox.Show("Not at here!!!");
            //    };
            //}


        }

        private void btnCase2DoWhich_Click(object sender, EventArgs e)
        {
            string[] strs = { "a", "b", "c", "d", "e", "f", "g", "h" };

            bool state = false;
            int number = 0;
            int i = 0;

            do
            {
                if (strs[i] == textBoxCase2.Text)
                {
                    state = true;
                    number = i + 1;
                };
                i++;
            }
            while (i < strs.Length);

            if (state == true)
            {
                MessageBox.Show($"Find it! It is the {number} one");
            }
            else
            {
                MessageBox.Show("Not at here!!!");
            };
        }

        private void btnFunction_Click(object sender, EventArgs e)
        {

            try
            {
                int left = int.Parse(textBox_left.Text);
                int right = int.Parse(textBox_right.Text);
                MessageBox.Show(Add(left, right).ToString());
            }
            catch { MessageBox.Show("Wrong numbers!!!"); }
        }

        int Add(int leftNum, int rightNum)
        {
            return leftNum + rightNum;
        }
        void Sub(int leftNum, int rightNum, out int res)
        {
            res = leftNum - rightNum;
        }


        private void btnOut_Click(object sender, EventArgs e)
        {
            try
            {
                //int res;
                int left = int.Parse(textBox_left.Text);
                int right = int.Parse(textBox_right.Text);
                Sub(left, right, out int res);
                MessageBox.Show(res.ToString());
            }
            catch { MessageBox.Show("Wrong numbers!!!"); }
        }

        private void btnRef_Click(object sender, EventArgs e)
        {
            try
            {
                int res = 0;   // !!!!!!
                int left = int.Parse(textBox_left.Text);
                int right = int.Parse(textBox_right.Text);
                Sub2(left, right, ref res);
                MessageBox.Show(res.ToString());
            }
            catch { MessageBox.Show("Wrong numbers!!!"); }
        }
        void Sub2(int leftNum, int rightNum, ref int res)
        {
            res = leftNum - rightNum;
        }

        private void btnParams_Click(object sender, EventArgs e)
        {
            try
            {
                //int res = 0;   // !!!!!!
                int left = int.Parse(textBox_left.Text);
                int right = int.Parse(textBox_right.Text);
                var res = Add2(left, right);
                MessageBox.Show(res.ToString());
            }
            catch { MessageBox.Show("Wrong numbers!!!"); }
        }

        int Add2(params int[] ints) /// params should be the last. 
        {
            int res2 = ints[0] + ints[1];
            return res2;
        }

        private void btnDesignClass_Click(object sender, EventArgs e)
        {
            //Person Frank = new Person();
            //Frank.Name = "Frank";
            //Frank.Age = 35;
            //Frank.Id = 1111111;

            Person Frank = new Person()  //             Person Frank = new()
            {
                Id = 111111,
                Name = "Frank",
                Age = 35
            };

            string res = Frank.Run();
            MessageBox.Show(res.AddFullStop());
        }
    }
}
