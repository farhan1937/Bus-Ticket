let seatsLeft = 40 ;
let seatsCount = 0 ;
let ticketPrice = 550 ;
let totalPrice = 0 ;
let isCheck = false ;
let isSelected = false

const sits =document.querySelectorAll('.main-btn');

for(const sit of sits){
     sit.addEventListener('click',function(event){
          isCheck = true ;
          
          sit.classList.add('bg-[#1DD100]');
          const selectedPart = document.getElementById('selected');
          selectedPart.classList.add('text-[#1DD100]');
          seatsLeft = seatsLeft -1 ;
          

          //
          
          
          // 

          const leftSit = document .getElementById('left-sit');
          leftSit.innerText= seatsLeft ;
          seatsCount = seatsCount + 1 ;
          const space = document.getElementById('seatCount');
          space.innerText = seatsCount ;

          if(seatsCount===4){
               const applybtn = document.getElementById('apply-btn');
               applybtn.removeAttribute('disabled')  
              }
              else if( seatsCount >=4) {
               sit.setAttribute('disabled',true);
               
               
                alert ('you can select only 4 seat! please refresh & select !')
                sitsDisplay.removeChild(p1);
               sitsDisplay.removeChild(p2);
               sitsDisplay.replaceChild(p3)
               
              }

         


          // 
          const text = event.target.innerText;
          const sitsDisplay = document.getElementById('sits-display');
          const p1 = document.createElement('p');
          p1.innerText = text ;
          sitsDisplay.appendChild(p1);
          const p2 =  document.createElement('p');
          p2.innerText = 'Economoy';
          sitsDisplay.appendChild(p2)
          const p3 =  document.createElement('p');
          p3.innerText = ticketPrice ;

              if(seatsCount===5){
               sit.setAttribute('disabled', true)
               sitsDisplay.removeChild(p1);
               sitsDisplay.removeChild(p2);
               sitsDisplay.replaceChild(p3)
              }


          sitsDisplay.appendChild(p3);

         

          totalPrice = totalPrice + ticketPrice ;
          const currentPrice = document.getElementById('total-price');
          currentPrice.innerText = totalPrice ;

          const grandPrice = document.getElementById('grand-price');
          grandPrice.innerText = totalPrice ;


          
     
     

         
      

         
         
         
        

          
     })
   
    
}




const applyBtn = document.getElementById('apply-btn');


applyBtn.addEventListener('click',function(){
     const inputPlace = document.getElementById('cupon-input');
     const inputValue = inputPlace.value;
     const value = inputValue.split(' ').join('').toUpperCase();
     console.log(value);
     if(value === 'NEW15'){
          const element = document.getElementById('discount-price');
          const discount = totalPrice * 0.15 ;
          element.innerText=discount;
          const element2 = document.getElementById('grand-price');
          const lastPrice = totalPrice - discount ;
          element2.innerText =lastPrice ;
          inputPlace.classList.add('hidden');
          applyBtn.classList.add('hidden')
     }
     else if(value ==='COUPLE20'){
          const element = document.getElementById('discount-price');
          const discount = totalPrice * 0.2 ;
          element.innerText=discount;
          const element2 = document.getElementById('grand-price');
          const lastPrice = totalPrice - discount ;
          element2.innerText =lastPrice ;
          inputPlace.classList.add('hidden');
          applyBtn.classList.add('hidden')

     }
     else{
          alert('please enter a valid coupon code');
     }

     
    


})


const element = document.getElementById('number-feild');
element.addEventListener('change',function(event){
     
     if(isCheck===false){
          isCheck= true;
     }
          if(event.target.value.length>0 && isCheck){
               
               const element = document.getElementById('next-btn');
          element.removeAttribute('disabled')
          }

          
          
         
          

})

document.getElementById('next-btn').addEventListener('click',function(){
     const element = document.getElementById('last-section');
     element.classList.remove('hidden');
})


document.getElementById('continue-button').addEventListener('click',function(){
     window.location.reload();
})




 