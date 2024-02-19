let sitsLeft = 40;
let sitCount = 0;


document.getElementById('btn-next').addEventListener('click',function(){
    const element = document.getElementById('success');
    element.classList.remove('hidden');
})


const sites = document.querySelectorAll('.all-btn')

for (const sit of sites) {
    sit.addEventListener('click', function (even) {
        isCheked = true;

        sit.classList.add('bg-[#1DD100]');
        const selectedPart = document.getElementById('selected');
        selectedPart.classList.add('text-[#1DD100]');
        sitsLeft = sitsLeft - 1;

        const leftSitIndex = document.getElementById('sit-number');
        leftSitIndex.innerText = sitsLeft;
        sitCount = sitCount + 1;
        const space = document.getElementById('count-number');
        space.innerText = sitCount;



        if (sitCount === 4) {
            const btnApply = document.getElementById('btn-apply')
            btnApply.removeAttribute('disabled')

        }
        else if (sitCount >= 4) {
            sit.setAttribute('disabled', true);

            alert('you can select only 4 seat! please refresh & select !')
            planOFsites.removeChild(hello);
            planOFsites.removeChild(hello2);
            planOFsites.replaceChild(tar)
        }




        const texts = even.target.innerText;
        const planOFsites = document.getElementById('sits');
        const hello = document.createElement('hello');
        hello.innerText = texts;
        planOFsites.appendChild(hello);
        const hello2 = document.createElement('hello2');
        hello2.innerText = 'Economoy';
        planOFsites.appendChild(hello2)
        const tar = document.createElement('tar');
        tar.innerText = ticketPrice;

        if (sitCount === 5) {
            sit.setAttribute('disabled', true)
            planOFsites.removeChild(hello);
            planOFsites.removeChild(hello2);
            planOFsites.replaceChild(tar)
        }


        planOFsites.appendChild(tar);



        totalPrice = totalPrice + ticketPrice;
        const cauntNumber = document.getElementById('count-payment');
        cauntNumber.innerText = totalPrice;

        const changePrice = document.getElementById('change-price');
        changePrice.innerText = totalPrice;

    })







}

let ticketPrice = 550;
let totalPrice = 0;
let isCheked = false;
let Selected = false





document.getElementById('btn-continue').addEventListener('click',function(){
    window.location.reload();
})




const applyById = document.getElementById('btn-apply');


applyById.addEventListener('click', function () {
    const inputId = document.getElementById('cop-price');
    const inputValue = inputId.value;
    const value = inputValue.split(' ').join('').toUpperCase();
    console.log(value);
    if (value === 'NEW15') {
        const element = document.getElementById('total-dis-price');
        const discount = totalPrice * 0.15;
        element.innerText = discount;
        const element2 = document.getElementById('grand-bdt');
        const lastPrice = totalPrice - discount;
        element2.innerText = lastPrice;
        inputId.classList.add('hidden');
        applyById.classList.add('hidden')
    }
    else if (value === 'COUPLE20') {
        const elementId = document.getElementById('total-dis-price');
        const discount = totalPrice * 0.2;
        elementId.innerText = discount;
        const elementIdBy = document.getElementById('grand-bdt');
        const lastPriceById = totalPrice - discount;
        elementIdBy.innerText = lastPriceById;
        inputId.classList.add('hidden');
        applyById.classList.add('hidden')

    }
    else {
        alert('please enter a valid coupon code');
    }


})

const element = document.getElementById('number-feild');
element.addEventListener('change',function(event){
     
     if(isCheked===false){
        isCheked= true;
     }
          if(event.target.value.length>0 && isCheked){
               
               const element = document.getElementById('next-btn');
          element.removeAttribute('disabled')
          }

})
