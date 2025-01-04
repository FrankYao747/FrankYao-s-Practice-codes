namespace MyFirstWinFormsApp
{
    partial class Form1
    {
        /// <summary>
        ///  Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        ///  Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        ///  Required method for Designer support - do not modify
        ///  the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            btnCheckName = new Button();
            btnFor = new Button();
            txtUserName = new TextBox();
            button1 = new Button();
            btnWhile = new Button();
            SuspendLayout();
            // 
            // btnCheckName
            // 
            btnCheckName.Location = new Point(306, 121);
            btnCheckName.Name = "btnCheckName";
            btnCheckName.Size = new Size(94, 29);
            btnCheckName.TabIndex = 1;
            btnCheckName.Text = "Submit";
            btnCheckName.UseVisualStyleBackColor = true;
            btnCheckName.Click += btnCheckName_Click;
            // 
            // btnFor
            // 
            btnFor.Location = new Point(306, 210);
            btnFor.Name = "btnFor";
            btnFor.Size = new Size(94, 29);
            btnFor.TabIndex = 3;
            btnFor.Text = "for loop";
            btnFor.UseVisualStyleBackColor = true;
            btnFor.Click += btnFor_Click;
            // 
            // txtUserName
            // 
            txtUserName.Location = new Point(273, 61);
            txtUserName.Name = "txtUserName";
            txtUserName.Size = new Size(170, 27);
            txtUserName.TabIndex = 4;
            // 
            // button1
            // 
            button1.Location = new Point(0, 0);
            button1.Name = "button1";
            button1.Size = new Size(94, 29);
            button1.TabIndex = 5;
            button1.Text = "button1";
            button1.UseVisualStyleBackColor = true;
            // 
            // btnWhile
            // 
            btnWhile.Location = new Point(306, 313);
            btnWhile.Name = "btnWhile";
            btnWhile.Size = new Size(94, 29);
            btnWhile.TabIndex = 6;
            btnWhile.Text = "while loop";
            btnWhile.UseVisualStyleBackColor = true;
            btnWhile.Click += btnWhile_Click;
            // 
            // Form1
            // 
            AutoScaleDimensions = new SizeF(8F, 20F);
            AutoScaleMode = AutoScaleMode.Font;
            ClientSize = new Size(995, 612);
            Controls.Add(btnWhile);
            Controls.Add(button1);
            Controls.Add(txtUserName);
            Controls.Add(btnFor);
            Controls.Add(btnCheckName);
            Name = "Form1";
            Text = "Form1";
            ResumeLayout(false);
            PerformLayout();
        }

        #endregion
        private Button btnCheckName;
        private Button btnFor;
        private TextBox txtUserName;
        private Button button1;
        private Button btnWhile;
    }
}
