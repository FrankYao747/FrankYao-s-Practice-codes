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
            btnArray = new Button();
            buttonCase1 = new Button();
            textBoxCase1 = new TextBox();
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
            // btnArray
            // 
            btnArray.Location = new Point(306, 408);
            btnArray.Name = "btnArray";
            btnArray.Size = new Size(94, 29);
            btnArray.TabIndex = 7;
            btnArray.Text = "Array";
            btnArray.UseVisualStyleBackColor = true;
            btnArray.Click += btnArray_Click;
            // 
            // buttonCase1
            // 
            buttonCase1.Location = new Point(680, 117);
            buttonCase1.Name = "buttonCase1";
            buttonCase1.Size = new Size(94, 29);
            buttonCase1.TabIndex = 8;
            buttonCase1.Text = "Case1";
            buttonCase1.UseVisualStyleBackColor = true;
            buttonCase1.Click += buttonCase1_Click;
            // 
            // textBoxCase1
            // 
            textBoxCase1.Location = new Point(668, 71);
            textBoxCase1.Name = "textBoxCase1";
            textBoxCase1.Size = new Size(125, 27);
            textBoxCase1.TabIndex = 9;
            textBoxCase1.Text = "How much Kilo?";
            // 
            // Form1
            // 
            AutoScaleDimensions = new SizeF(8F, 20F);
            AutoScaleMode = AutoScaleMode.Font;
            ClientSize = new Size(995, 612);
            Controls.Add(textBoxCase1);
            Controls.Add(buttonCase1);
            Controls.Add(btnArray);
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
        private Button btnArray;
        private Button buttonCase1;
        private TextBox textBoxCase1;
    }
}
