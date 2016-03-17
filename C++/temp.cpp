#include<stdio.h>
#include<iostream>
#include<math.h>
#define true 1
#define false 0
using namespace std;
main()
{  cout<<"no of iterations";
  int J;cin>>J;

   double A,B,XI0,XI1,XI2,H,XI,X;
   int I,N,NN,OK;

   double F(double);
   void INPUT(int *, double *, double *, int *);
   void OUTPUT(double, double, double);

   INPUT(&OK, &A, &B, &N);
     while(J){ J--;
   if (OK) {
   
      H = (B - A) / N; 
     
      XI0 = F(A) + F(B);
 
      XI1 = 0.0;
  
      XI2 = 0.0;
      
      NN = N - 1;       
      for (I=1; I<=NN; I++) {
       
	 X = A + I * H; 
    
	 if ((I%2) == 0) XI2 = XI2 + F(X); 
	 else XI1 = XI1 + F(X);
      }
  
      XI = (XI0 + 2.0 * XI2 + 4.0 * XI1) * H / 3.0; 
     
      OUTPUT(A, B, XI); B=B-0.05;
   }}
   return 0;
}


double F(double X)
{
   double f; 

   f = exp(-(X*X)/2);
   return f;
}

void INPUT(int *OK, double *A, double *B, int *N)
{
  
      *OK = false;
      while (!(*OK)) {
	 printf("Input lower limit of integration and ");
	 printf("X one by one\n");
	 printf("separated by a blank\n");
	 scanf("%lf %lf", A, B);
	 if (*A > *B) printf("Lower limit must be less than upper limit\n");
	 else *OK = true;
      } 
      *OK = false;
      while (!(*OK)) {
	 printf("Input an even positive integer N.\n");
	 scanf("%d", N);
	 if ((*N > 0) && (((*N)%2) == 0)) *OK = true;
	 else printf("Input must be even and positive\n");
      }
   
  
}

void OUTPUT(double A, double B, double XI)
{
   printf("\nThe integral of e-x2 from %12.8f to %12.8f is\n", A, B);
   XI*=0.3989423;
   printf("%12.8f\n", XI);
}   
