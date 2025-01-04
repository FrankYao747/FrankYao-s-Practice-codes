namespace MyFirstWinFormsApp
{
    internal static class Program
    {
        /// <summary>
        ///  The main entry point for the application.
        /// </summary>
        [STAThread]
        static void Main()
        {
            // To customize application configuration such as set high DPI settings or default font,
            // see https://aka.ms/applicationconfiguration.
            ApplicationConfiguration.Initialize();
            Application.Run(new Form1());



            //int i = 10;

            //if (i > 10)
            //{
            //    MessageBox.Show("i > 10");
            //}
            //else
            //{
            //    MessageBox.Show("i <= 10");
            //}

            ////////////////////////////////////////////////


        }
    }
}