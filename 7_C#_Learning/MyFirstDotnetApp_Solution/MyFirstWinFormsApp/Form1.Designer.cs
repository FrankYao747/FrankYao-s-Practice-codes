namespace MyFirstWinFormsApp
{
    partial class form1
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
            btnWhile = new Button();
            btnArray = new Button();
            buttonCase1 = new Button();
            textBoxCase1 = new TextBox();
            btnCase1Plus = new Button();
            btnParse = new Button();
            btnCase2 = new Button();
            textBoxCase2 = new TextBox();
            btnCase2While = new Button();
            btnCase2DoWhich = new Button();
            btnFunction = new Button();
            textBox_left = new TextBox();
            textBox_right = new TextBox();
            btnOut = new Button();
            btnRef = new Button();
            btnParams = new Button();
            btnDesignClass = new Button();
            btnInherit = new Button();
            SuspendLayout();
            // 
            // btnCheckName
            // 
            btnCheckName.Location = new Point(64, 113);
            btnCheckName.Name = "btnCheckName";
            btnCheckName.Size = new Size(94, 29);
            btnCheckName.TabIndex = 1;
            btnCheckName.Text = "Submit";
            btnCheckName.UseVisualStyleBackColor = true;
            btnCheckName.Click += btnCheckName_Click;
            // 
            // btnFor
            // 
            btnFor.Location = new Point(64, 202);
            btnFor.Name = "btnFor";
            btnFor.Size = new Size(94, 29);
            btnFor.TabIndex = 3;
            btnFor.Text = "for loop";
            btnFor.UseVisualStyleBackColor = true;
            btnFor.Click += btnFor_Click;
            // 
            // txtUserName
            // 
            txtUserName.Location = new Point(31, 53);
            txtUserName.Name = "txtUserName";
            txtUserName.Size = new Size(170, 27);
            txtUserName.TabIndex = 4;
            // 
            // btnWhile
            // 
            btnWhile.Location = new Point(64, 305);
            btnWhile.Name = "btnWhile";
            btnWhile.Size = new Size(94, 29);
            btnWhile.TabIndex = 6;
            btnWhile.Text = "while loop";
            btnWhile.UseVisualStyleBackColor = true;
            btnWhile.Click += btnWhile_Click;
            // 
            // btnArray
            // 
            btnArray.Location = new Point(64, 400);
            btnArray.Name = "btnArray";
            btnArray.Size = new Size(94, 29);
            btnArray.TabIndex = 7;
            btnArray.Text = "Array";
            btnArray.UseVisualStyleBackColor = true;
            btnArray.Click += btnArray_Click;
            // 
            // buttonCase1
            // 
            buttonCase1.Location = new Point(275, 99);
            buttonCase1.Name = "buttonCase1";
            buttonCase1.Size = new Size(94, 29);
            buttonCase1.TabIndex = 8;
            buttonCase1.Text = "Case1";
            buttonCase1.UseVisualStyleBackColor = true;
            buttonCase1.Click += buttonCase1_Click;
            // 
            // textBoxCase1
            // 
            textBoxCase1.Location = new Point(263, 53);
            textBoxCase1.Name = "textBoxCase1";
            textBoxCase1.Size = new Size(125, 27);
            textBoxCase1.TabIndex = 9;
            textBoxCase1.Text = "How much Kilo?";
            // 
            // btnCase1Plus
            // 
            btnCase1Plus.Location = new Point(275, 178);
            btnCase1Plus.Name = "btnCase1Plus";
            btnCase1Plus.Size = new Size(94, 29);
            btnCase1Plus.TabIndex = 10;
            btnCase1Plus.Text = "Case1_Plus";
            btnCase1Plus.UseVisualStyleBackColor = true;
            btnCase1Plus.Click += btnCase1Plus_Click;
            // 
            // btnParse
            // 
            btnParse.Location = new Point(275, 255);
            btnParse.Name = "btnParse";
            btnParse.Size = new Size(94, 29);
            btnParse.TabIndex = 11;
            btnParse.Text = "Convert";
            btnParse.UseVisualStyleBackColor = true;
            btnParse.Click += btnParse_Click;
            // 
            // btnCase2
            // 
            btnCase2.Location = new Point(275, 400);
            btnCase2.Name = "btnCase2";
            btnCase2.Size = new Size(113, 29);
            btnCase2.TabIndex = 12;
            btnCase2.Text = "Case2_for";
            btnCase2.UseVisualStyleBackColor = true;
            btnCase2.Click += btnCase2_Click;
            // 
            // textBoxCase2
            // 
            textBoxCase2.Location = new Point(263, 353);
            textBoxCase2.Name = "textBoxCase2";
            textBoxCase2.Size = new Size(125, 27);
            textBoxCase2.TabIndex = 13;
            textBoxCase2.Text = "Find which?";
            // 
            // btnCase2While
            // 
            btnCase2While.Location = new Point(275, 465);
            btnCase2While.Name = "btnCase2While";
            btnCase2While.Size = new Size(113, 29);
            btnCase2While.TabIndex = 14;
            btnCase2While.Text = "Case2_while";
            btnCase2While.UseVisualStyleBackColor = true;
            btnCase2While.Click += btnCase2While_Click;
            // 
            // btnCase2DoWhich
            // 
            btnCase2DoWhich.Location = new Point(266, 512);
            btnCase2DoWhich.Name = "btnCase2DoWhich";
            btnCase2DoWhich.Size = new Size(122, 29);
            btnCase2DoWhich.TabIndex = 15;
            btnCase2DoWhich.Text = "Case2_do_while";
            btnCase2DoWhich.UseVisualStyleBackColor = true;
            btnCase2DoWhich.Click += btnCase2DoWhich_Click;
            // 
            // btnFunction
            // 
            btnFunction.Location = new Point(545, 99);
            btnFunction.Name = "btnFunction";
            btnFunction.Size = new Size(109, 29);
            btnFunction.TabIndex = 16;
            btnFunction.Text = "Add_Function";
            btnFunction.UseVisualStyleBackColor = true;
            btnFunction.Click += btnFunction_Click;
            // 
            // textBox_left
            // 
            textBox_left.Location = new Point(545, 52);
            textBox_left.Name = "textBox_left";
            textBox_left.Size = new Size(41, 27);
            textBox_left.TabIndex = 17;
            // 
            // textBox_right
            // 
            textBox_right.Location = new Point(604, 52);
            textBox_right.Name = "textBox_right";
            textBox_right.Size = new Size(35, 27);
            textBox_right.TabIndex = 18;
            // 
            // btnOut
            // 
            btnOut.Location = new Point(545, 165);
            btnOut.Name = "btnOut";
            btnOut.Size = new Size(94, 29);
            btnOut.TabIndex = 19;
            btnOut.Text = "out";
            btnOut.UseVisualStyleBackColor = true;
            btnOut.Click += btnOut_Click;
            // 
            // btnRef
            // 
            btnRef.Location = new Point(545, 227);
            btnRef.Name = "btnRef";
            btnRef.Size = new Size(94, 29);
            btnRef.TabIndex = 20;
            btnRef.Text = "ref";
            btnRef.UseVisualStyleBackColor = true;
            btnRef.Click += btnRef_Click;
            // 
            // btnParams
            // 
            btnParams.Location = new Point(545, 305);
            btnParams.Name = "btnParams";
            btnParams.Size = new Size(94, 29);
            btnParams.TabIndex = 21;
            btnParams.Text = "params";
            btnParams.UseVisualStyleBackColor = true;
            btnParams.Click += btnParams_Click;
            // 
            // btnDesignClass
            // 
            btnDesignClass.Location = new Point(728, 53);
            btnDesignClass.Name = "btnDesignClass";
            btnDesignClass.Size = new Size(102, 29);
            btnDesignClass.TabIndex = 22;
            btnDesignClass.Text = "ClassDesign";
            btnDesignClass.UseVisualStyleBackColor = true;
            btnDesignClass.Click += btnDesignClass_Click;
            // 
            // btnInherit
            // 
            btnInherit.Location = new Point(728, 126);
            btnInherit.Name = "btnInherit";
            btnInherit.Size = new Size(94, 29);
            btnInherit.TabIndex = 23;
            btnInherit.Text = "Inherit";
            btnInherit.UseVisualStyleBackColor = true;
            btnInherit.Click += btnInherit_Click;
            // 
            // form1
            // 
            AutoScaleDimensions = new SizeF(8F, 20F);
            AutoScaleMode = AutoScaleMode.Font;
            ClientSize = new Size(995, 612);
            Controls.Add(btnInherit);
            Controls.Add(btnDesignClass);
            Controls.Add(btnParams);
            Controls.Add(btnRef);
            Controls.Add(btnOut);
            Controls.Add(textBox_right);
            Controls.Add(textBox_left);
            Controls.Add(btnFunction);
            Controls.Add(btnCase2DoWhich);
            Controls.Add(btnCase2While);
            Controls.Add(textBoxCase2);
            Controls.Add(btnCase2);
            Controls.Add(btnParse);
            Controls.Add(btnCase1Plus);
            Controls.Add(textBoxCase1);
            Controls.Add(buttonCase1);
            Controls.Add(btnArray);
            Controls.Add(btnWhile);
            Controls.Add(txtUserName);
            Controls.Add(btnFor);
            Controls.Add(btnCheckName);
            Name = "form1";
            Text = "Form1";
            ResumeLayout(false);
            PerformLayout();
        }

        #endregion
        private Button btnCheckName;
        private Button btnFor;
        private TextBox txtUserName;
        private Button btnWhile;
        private Button btnArray;
        private Button buttonCase1;
        private TextBox textBoxCase1;
        private Button btnCase1Plus;
        private Button btnParse;
        private Button btnCase2;
        private TextBox textBoxCase2;
        private Button btnCase2While;
        private Button btnCase2DoWhich;
        private Button btnFunction;
        private TextBox textBox_left;
        private TextBox textBox_right;
        private Button btnOut;
        private Button btnRef;
        private Button btnParams;
        private Button btnDesignClass;
        private Button btnInherit;
    }
}
