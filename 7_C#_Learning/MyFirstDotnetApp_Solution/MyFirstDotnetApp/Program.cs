


Console.WriteLine("Hello, World!");
Console.WriteLine("++++++++++++++++++++++++++++++++++++");

Console.WriteLine("byte, short, int, long");
Console.WriteLine("float, double");
Console.WriteLine("decimal");
Console.WriteLine("string, char");
Console.WriteLine("null");


byte bMax = byte.MaxValue;
byte bMin = byte.MinValue;
Console.WriteLine("bMax is: {0}", bMax);
Console.WriteLine("bMin is: {0}", bMin);
Console.WriteLine("++++++++++++++++++++++++++++++++++++");
short sMax = short.MaxValue;
short sMin = short.MinValue;
Console.WriteLine("sMax is: {0}", sMax);
Console.WriteLine("sMin is: {0}", sMin);
Console.WriteLine("++++++++++++++++++++++++++++++++++++");
int iMax = int.MaxValue;
int iMin = int.MinValue;
Console.WriteLine("iMax is: {0}", iMax);
Console.WriteLine("iMin is: {0}", iMin);
Console.WriteLine("++++++++++++++++++++++++++++++++++++");

long lMax = long.MaxValue;
long lMin = long.MinValue;
Console.WriteLine("lMax is: {0}", lMax);
Console.WriteLine("lMin is: {0}", lMin);
Console.WriteLine("++++++++++++++++++++++++++++++++++++");

//float f = 1.1;
//float f = 1.1f;


float fMax = float.MaxValue;
float fMin = float.MinValue;
Console.WriteLine("fMax is: {0}", fMax);
Console.WriteLine("fMin is: {0}", fMin);
Console.WriteLine("++++++++++++++++++++++++++++++++++++");

double dMax = double.MaxValue;
double dMin = double.MinValue;
Console.WriteLine("dMax is: {0}", dMax);
Console.WriteLine("dMin is: {0}", dMin);
Console.WriteLine("++++++++++++++++++++++++++++++++++++");

decimal decMax = decimal.MaxValue;
decimal decMin = decimal.MinValue;
Console.WriteLine("decMax is: {0}", decMax);
Console.WriteLine("decMin is: {0}", decMin);
decimal dc = 1.1m;
Console.WriteLine("Test! variable dc is: {0}", dc);

Console.WriteLine("********* Not recommend this *******");
Console.WriteLine("++++++++++++++++++++++++++++++++++++");

bool bf = false;
bool bt = true;
Console.WriteLine("bool bf is: {0}", bf);
Console.WriteLine("bool bt is: {0}", bt);

bool b1 = 1 == 1;
Console.WriteLine("bool b1 = 1 == 1 is: {0}", b1);
bool b2 = 1 > 1;
Console.WriteLine("bool b2 = 1 > 1 is: {0}", b2);

Console.WriteLine("++++++++++++++++++++++++++++++++++++");

/*
bool bbb;
Console.WriteLine("bool bbb is: {0}", bbb);

int iii;
Console.WriteLine("int iii is: {0}", iii);
Console.WriteLine("++++++++++++++++++++++++++++++++++++");
*/
string s = string.Empty;
Console.WriteLine("string s is: {0}", s);

string str1 = "Hello!!!";
string str2 = "Happy!!!";
string str = str1 + str2;
Console.WriteLine("string str is: {0}", str);
Console.WriteLine("++++++++++++++++++++++++++++++++++++");



string name = "Frank";
int age = 35;
string intro = $"My name is {name}. My age is "+age+".";
Console.WriteLine("string intro is: {0}", intro);
Console.WriteLine("++++++++++++++++++++++++++++++++++++");



char c = 'H'; // char cannot use ", must use '; And only accept 1 letter

Console.WriteLine("char c is: {0}", c);
Console.WriteLine("++++++++++++++++++++++++++++++++++++");


string str_null = "Hello!!!";
str_null = null;
Console.WriteLine("string str_null is: {0}", str_null);
string str_n2 = "";
Console.WriteLine("string str_n2 is: {0}", str_n2);

int? ix = 0;
ix = null;
Console.WriteLine("int? ix is: {0}", ix);
Console.WriteLine("++++++++++++++++++++++++++++++++++++");

