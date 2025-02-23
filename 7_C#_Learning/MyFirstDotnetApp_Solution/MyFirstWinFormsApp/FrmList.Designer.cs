namespace MyFirstWinFormsApp
{
    partial class FrmList
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
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
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            dgvPerson = new DataGridView();
            Column1 = new DataGridViewTextBoxColumn();
            Column2 = new DataGridViewTextBoxColumn();
            Column3 = new DataGridViewTextBoxColumn();
            panel1 = new Panel();
            btnCancel = new Button();
            btnBinding = new Button();
            ((System.ComponentModel.ISupportInitialize)dgvPerson).BeginInit();
            panel1.SuspendLayout();
            SuspendLayout();
            // 
            // dgvPerson
            // 
            dgvPerson.Anchor = AnchorStyles.Top | AnchorStyles.Bottom | AnchorStyles.Left | AnchorStyles.Right;
            dgvPerson.ColumnHeadersHeightSizeMode = DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            dgvPerson.Columns.AddRange(new DataGridViewColumn[] { Column1, Column2, Column3 });
            dgvPerson.Location = new Point(12, 12);
            dgvPerson.Name = "dgvPerson";
            dgvPerson.RowHeadersWidth = 51;
            dgvPerson.Size = new Size(1094, 456);
            dgvPerson.TabIndex = 0;
            dgvPerson.RowHeaderMouseClick += dgvPerson_RowHeaderMouseClick;
            // 
            // Column1
            // 
            Column1.DataPropertyName = "Id";
            Column1.HeaderText = "ID";
            Column1.MinimumWidth = 6;
            Column1.Name = "Column1";
            Column1.Width = 125;
            // 
            // Column2
            // 
            Column2.DataPropertyName = "Name";
            Column2.HeaderText = "Name";
            Column2.MinimumWidth = 6;
            Column2.Name = "Column2";
            Column2.Width = 125;
            // 
            // Column3
            // 
            Column3.DataPropertyName = "Age";
            Column3.HeaderText = "Age";
            Column3.MinimumWidth = 6;
            Column3.Name = "Column3";
            Column3.Width = 125;
            // 
            // panel1
            // 
            panel1.Anchor = AnchorStyles.Bottom | AnchorStyles.Left | AnchorStyles.Right;
            panel1.BorderStyle = BorderStyle.FixedSingle;
            panel1.Controls.Add(btnCancel);
            panel1.Controls.Add(btnBinding);
            panel1.Location = new Point(12, 484);
            panel1.Name = "panel1";
            panel1.Size = new Size(1094, 177);
            panel1.TabIndex = 1;
            // 
            // btnCancel
            // 
            btnCancel.Anchor = AnchorStyles.Top | AnchorStyles.Bottom | AnchorStyles.Right;
            btnCancel.Location = new Point(970, 65);
            btnCancel.Name = "btnCancel";
            btnCancel.Size = new Size(90, 29);
            btnCancel.TabIndex = 1;
            btnCancel.Text = "Cancel";
            btnCancel.UseVisualStyleBackColor = true;
            btnCancel.Click += btnCancel_Click;
            // 
            // btnBinding
            // 
            btnBinding.Anchor = AnchorStyles.Top | AnchorStyles.Bottom | AnchorStyles.Right;
            btnBinding.Location = new Point(837, 65);
            btnBinding.Name = "btnBinding";
            btnBinding.Size = new Size(90, 29);
            btnBinding.TabIndex = 0;
            btnBinding.Text = "Binding";
            btnBinding.UseVisualStyleBackColor = true;
            btnBinding.Click += btnBinding_Click;
            // 
            // FrmList
            // 
            AutoScaleDimensions = new SizeF(8F, 20F);
            AutoScaleMode = AutoScaleMode.Font;
            ClientSize = new Size(1118, 673);
            Controls.Add(panel1);
            Controls.Add(dgvPerson);
            Name = "FrmList";
            Text = "FrmList";
            ((System.ComponentModel.ISupportInitialize)dgvPerson).EndInit();
            panel1.ResumeLayout(false);
            ResumeLayout(false);
        }

        #endregion

        private DataGridView dgvPerson;
        private Panel panel1;
        private Button btnCancel;
        private Button btnBinding;
        private DataGridViewTextBoxColumn Column1;
        private DataGridViewTextBoxColumn Column2;
        private DataGridViewTextBoxColumn Column3;
    }
}