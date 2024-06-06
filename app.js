let y=1
let z=0
var audio =new Audio('g.mp3')
audio.play();
function roll_dice()
{
    let x=Number(Math.floor(Math.random(0,1)*6+1))
    document.getElementById('dice_value').innerHTML=x
     if(y%2==0)
        {
        console.log('dog 1')
        let num2=Number(document.getElementById('p2_score').innerHTML)
        num2=num2+x
        document.getElementById('p2_score').innerHTML=num2
        y=1  
        if(num2>=50)
        {
            z=1
         }    
        }
     else
     {
     console.log('Dog 2')
     let num1=Number(document.getElementById('p1_score').innerHTML)
     num1=num1+x
     document.getElementById('p1_score').innerHTML=num1
     y=y+1
     if(num1>=30)
        {
        z=1
        }
     }
    
     if(z==1)
        {
             num1 =Number(document.getElementById('p1_score').innerHTML)
             num2 =Number(document.getElementById('p2_score').innerHTML)

      
     
        if(num1>num2)
        {
           // window.print("Dog 1 got the bone!! We are sooo pawd of youu")
            document.getElementById('result').innerHTML = 'Hurray!!Dog 1 won.We are so pawd of you'
            document.getElementById('result').className = 'alert alert-success'
            document.getElementById('btn1').disabled = true

        }
    else
    
    {
        //window.print("Dog 2 got the bone!! We are sooo pawd of youu")
        document.getElementById('result').innerHTML = 'Hurray!! Dog 2 won.We are so pawd of you'
        document.getElementById('result').className = 'alert alert-success'
        document.getElementById('btn1').disabled = true
       }

       addEventListener('click', function () 
       {
        confetti
        ({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });
    });
    }
}