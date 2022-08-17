//User starts with $X
//User Inputs bet amount
//Click roll
//Return 3 random options "7, BAR(x3), BAR, Free Play, etc."
//Each play, subtrack bet amount

// console.log(userBet - points)


function slotSpin(){
    // let userBet = parseInt(prompt("Place your bet!"));
    // // console.log(typeof(userBet))
for (i = 0; i < 3; i++){

    function getSpinResult(spinOptions = ['7', 'BAR', 'Free Play']){ 
        
        return spinResult = spinOptions[Math.floor(Math.random()*spinOptions.length)];

    }
   
    getSpinResult();

    
    // let element = document.createElement('div');
    // element.innerText = spinResult;
    // element.setAttribute('class', 'casino');
    // document.body.appendChild(element);


  
imgArray = ['img_1.jpg', 'img_2.jpg', 'img_3.jpg']


  

function getRandomImg(){ 

    randomIndex = Math.floor(Math.random()* imgArray.length);

    selectedImg = imgArray[randomIndex]

    document.getElementById('slotResult').src = `./img/${selectedImg}`

    slotResult.className = 'casino';



}



getRandomImg();

    

 
    
};

};

slotSpin(4);

// let button = document.getElementById('slot-button');
// button.addEventListener('click', function(){
//   alert('hi');
// });


let button = document.getElementById('slot-button');
button.addEventListener('click', function getRandomImg(){ 

  randomIndex = Math.floor(Math.random()* imgArray.length);

  selectedImg = imgArray[randomIndex]

  document.getElementById('slotResult').src = `./img/${selectedImg}`

  slotResult.className = 'casino'});




