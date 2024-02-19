let sitsLeft = 40;

const sites = document.getElementById('all-btn')

for(const sit of sites){
    sit.addEventListener('click', function(e){
        isCheck = true ;
          
        sit.classList.add('bg-[#1DD100]');
        const selectedPart = document.getElementById('selected');
        selectedPart.classList.add('text-[#1DD100]');
        sitsLeft = sitsLeft -1 ;
        
    })
}