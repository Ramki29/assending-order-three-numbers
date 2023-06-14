var a=parseInt(prompt("enter a value"));
var b=parseInt(prompt("enter b value"));
var c=parseInt(prompt("enter c value"));
if((a<b)&&(a<c))
	{
	if(b<c)
		{
		console.log(a,b,c);
		}
	else
		{
		console.log(a,c,b);
		}
	}	
	else if((b<a)&&(b<c))
		{
		if(a<c)
			{
			console.log(b,a,c);
			}
		else
			{
			console.log(b,c,a);
			}
		}	
		else
			{
			if(b<a)
				{
				console.log(c,b,a);
				}
				else
					{
					console.log(c,a,b);
					}
			}	