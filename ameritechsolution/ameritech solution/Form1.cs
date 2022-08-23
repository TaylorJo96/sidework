using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using System.IO;
using System.Security;

namespace ameritech_solution
{

    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();



        }

        private void button1_Click(object sender, EventArgs e)
        {
            long  total = 0;
           
            var fileContent = string.Empty;
            var filePath = string.Empty;

            using (OpenFileDialog openFileDialog = new OpenFileDialog())
            {
                openFileDialog.InitialDirectory = "c:\\";
                openFileDialog.Filter = "CSV Files (*.csv)|*.csv";
                openFileDialog.FilterIndex = 2;
                openFileDialog.RestoreDirectory = true;

                if (openFileDialog.ShowDialog() == DialogResult.OK)
                {
            
                    filePath = openFileDialog.FileName;

                    //Read the contents of the file into a stream
                    var fileStream = openFileDialog.OpenFile();

                    using (StreamReader reader = new StreamReader(fileStream))
                    {
                        string line;
                       

                        // I decided to read the document one line at a time so the streamreader would not be overloaded with a ton of information
                        while ((line = reader.ReadLine()) != null)
                        {
                            try
                            {
                                if (line.Length > 10)
                                {
                                    line = line.Substring(line.Length - 11, 10);

                                    //I would like to do more testing to insure the accuracy of the results but by taking out these extra high digits I can make the numbers handleable

                                    long result = Int64.Parse(line);
                                   
                                    total = total + result;
                                }
                                else 
                                {
                                    int result = Int32.Parse(line);
                                    total = total + result;
                                }
                            
                            }
                            
                            catch (FormatException)
                            {

                            
                                continue;
                            }

                        }
                    }
                }
                string longAnswer = total.ToString();
                string finalanswer = "";
                if (longAnswer.Length > 10)
                {
                   finalanswer = longAnswer.Substring(longAnswer.Length - 11, 10);
                }
                else 
                {
                     finalanswer = longAnswer;
                   
                }
         

                textBox1.Text = finalanswer;
            }


        }
        public class OpenFileDialogForm : Form
        {


            private Button selectButton;
            private OpenFileDialog openFileDialog1;
            private TextBox textBox1;

            public OpenFileDialogForm()
            {
                openFileDialog1 = new OpenFileDialog();
                selectButton = new Button
                {
                    Size = new Size(100, 20),
                    Location = new Point(15, 15),
                    Text = "Select file"
                };
                selectButton.Click += new EventHandler(SelectButton_Click);
                textBox1 = new TextBox
                {
                    Size = new Size(300, 300),
                    Location = new Point(15, 40),
                    Multiline = true,
                    ScrollBars = ScrollBars.Vertical
                };
                ClientSize = new Size(330, 360);
                Controls.Add(selectButton);
                Controls.Add(textBox1);
            }
            private void SetText(string text)
            {
                textBox1.Text = text;
            }
            private void SelectButton_Click(object sender, EventArgs e)
            {
                if (openFileDialog1.ShowDialog() == DialogResult.OK)
                {
                    try
                    {
                        var sr = new StreamReader(openFileDialog1.FileName);
                        SetText(sr.ReadToEnd());
                    }
                    catch (SecurityException ex)
                    {
                        MessageBox.Show($"Security error.\n\nError message: {ex.Message}\n\n" +
                        $"Details:\n\n{ex.StackTrace}");
                    }
                }
            }

        }

        private void textBox1_TextChanged(object sender, EventArgs e)
        {

        }

        private void label1_Click(object sender, EventArgs e)
        {

        }
    }
}
