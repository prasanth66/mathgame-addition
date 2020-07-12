
let owl=document.getElementById('moving-owl');

// checking the movement of owl
     setInterval(function(){ 
       
        let rect = owl.getBoundingClientRect();
      console.log(rect.left)
       if(rect.left>=1250){
        console.log(rect.left)
        
        window.history.back();
        window.alert('You Lost Owl Won...Returnning to home page..!!')
        
          
           
       }
    
    }
        , 100);

//calculating the animal movement
function calculate(){
            event.preventDefault();
           let sum=document.getElementById('add');
           let cal=(sum.elements[2].value);
           let notification=document.getElementById('notification');
           let level=(document.getElementById('level')).innerHTML;
           let num1=parseInt(sum.elements[0].value);
           let num2=parseInt(sum.elements[1].value);
           let mul=0;
           if(!isNaN(cal) && cal==(num1+num2)){
            
                notification.innerHTML='';
                let move=document.getElementById('runningimgs');
                var rect = move.getBoundingClientRect();
                if(rect.left>=1120){
                   window.alert('Hurry..!!!! You Won the Race going back main menu')
                   window.history.back();
                }
                if(level=='beginner'){
                  mul=10;
                }
                else if(level=='intermediate'){
                  mul=100;
                    
                }
                else if(level=='expert'){
                    mul=1000;
                }
                sum.elements[0].value=Math.floor(Math.random() * mul);
                sum.elements[1].value=Math.floor(Math.random() * mul);
                sum.elements[2].value=''
                move.style.marginLeft=rect.left+100;

           }
           else{             
               notification.innerHTML='Wrong Answer'   
           }
          
        }

       

         