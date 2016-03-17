#include<iostream>
using namespace std;
int main()
{
	int n,p;
	cin>>n;
	int arr[300];
  
 
  
    for (int i=1; i<=n; i++)
    {
      arr[i]=0;
    }
  	for(int i=2;i<=n;i++){
		if(arr[i]==0)
		{	p=i;
			for (int j=2;p*j<=n;j++)
			{	
				arr[p*j]=1;
			}
		}
	}
	for(int i=2;i<=n;i++){if(arr[i]==0)cout<<i<<endl;}
       
	return 0;
}
