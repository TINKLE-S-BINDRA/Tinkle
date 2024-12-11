var date = new Date();
	var current_date =  date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear();
	var current_time = date.getHours()+":"+date.getMinutes();
	var date_time = current_date+" "+current_time;	
	document.getElementById("day").innerHTML = date_time;

    const dice1 =  document.querySelector('.dice1');
const dice2 =document.querySelector('.dice2');
const btnRoll = document.getElementById('btn');
document.getElementById('btn-roll')
.addEventListener('click', function(){
   btnRoll.disabled = true;
    RollDice();
});

 const RollDice = () =>{
    
     if(!dice1.classList.contains('dices'))
     dice1.classList.add('dice-1.svg')
    
     if(!dice2.classList.contains('dices'))
         dice2.classList.add('dice-2.svg')
   
                setTimeout(() => {
                    
                 let d1 = GetDice(); // 2
                 let d2 = GetDice();
                 
                 document.querySelector('.dice1').src = `img/dice-${d1}.png`;
                 document.querySelector('.dice2').src = `img/dice-${d2}.png`;

                 let sum = d1 + d2;
                 document.getElementById('dice-sum').innerText = sum;
               
                 if(dice1.classList.contains('animation'))
                 dice1.classList.remove('animation')
                
                 if(dice2.classList.contains('animation'))
                     dice2.classList.remove('animation')

                     btnRoll.disabled = false;
               }, 2000);
             
}


