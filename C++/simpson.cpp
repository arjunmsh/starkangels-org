
#include<iostream>
#include<math.h>
using namespace std;

float f(float x)
{ return  exp(-(x*x)/2); }

int main()
{ cout<<"no ofiteration";
  cin>>n;
  int x,xa[n]; 
  float fx, f1=0, inl;
  cout<<"enter x";
  cin >>x;
  for(int i=0;i<10;i++)
    {  xa[i]= (-100+(i*20)); cout<< "\n"<<i<<"     "<< xa[i]; }
  float h= (x+100)/6; cout<<"\n h is"<<h;
  for(int j=0;j<5;j++)
    { f1+= f(xa[((2*j)-2)]) +( 4*f(xa[((2*j)-1)])) +f(xa[(2*j)]); cout<<"\nf1 is"<<f1; }
  inl=h*f1;
  cout<<endl<<inl;
  return 0;
}
