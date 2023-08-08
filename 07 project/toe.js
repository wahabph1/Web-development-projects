var current = "X";
let arr = Array(9).fill(null);
var  a= document.getElementById("b")
var first;
var second;


function winner()
{
  if((arr[0]!=null && arr[0]===arr[1] && arr[1]===arr[2])||
    (arr[3]!=null && arr[3]===arr[4] && arr[4]===arr[5])||
    (arr[6]!=null && arr[6]===arr[7] && arr[7]===arr[8]))
    
    {
      
     document.write("winner is  =  " + current)
   

      
    }
    
    else if(arr[0]!=null && arr[0]===arr[4] && arr[4]===arr[8])
    {
        
      document.write("winner is  =  " + current)
      

    }
 
  else if (arr[2]!=null && arr[2]===arr[4] && arr[4]===arr[6])
  {
    document.write("winner is  =  " + current)
  }
  else if (arr[0]!=null && arr[1]!=null && arr[2]!=null  && arr[3]!=null  && arr[4]!=null  && arr[5]!=null  && arr[6]!=null && arr[7]!=null && arr[8]!=null  )
  {
    
      window.location.href = 'Draw.html';
    
    
  }

  else if(arr[0]!=null && arr[0]===arr[3] && arr[3]===arr[6])
    {
        
      document.write("winner is  =  " + current)
      

    }
  

    else if(arr[1]!=null && arr[1]===arr[4] && arr[4]===arr[7])
    {
        
      document.write("winner is  =  " + current)
      

    }


    else if(arr[1]!=null && arr[1]===arr[4] && arr[4]===arr[7])
    {
        
      document.write("winner is  =  " + current)
      

    }


    else if(arr[2]!=null && arr[2]===arr[5] && arr[5]===arr[8])
    {
        
      document.write("winner is  =  " + current)
      

    }







}

function handle(el)
{
  const id = Number(el.id);
  if(arr[id]!=null) return;
  arr[id]= current;
  el.innerText= current;
  winner()
  
    current = current ==="X" ? "0": "X";
   

 
  
  console.log(arr);
}
 function getdata()
 {
  first = document.getElementById("in1");
  second = document.getElementById("in2"); 
  
  let n = document.getElementById("haider");
   n.innerHTML = first;



 }
