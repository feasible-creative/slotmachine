//User starts with $X
//User Inputs bet amount
//Click roll
//Return 3 random options "7, BAR(x3), BAR, Free Play, etc."
//Each play, subtrack bet amount

// console.log(userBet - points)


function slotSpin(){
    
// for (i = 0; i < 1; i++){

  
imgArray = ['img_1.jpg', 'img_2.jpg', 'img_3.jpg']

// function getRandomImg(){ 

//     randomIndex = Math.floor(Math.random()* imgArray.length);
//     selectedImg = imgArray[randomIndex]
//     document.getElementById('slotResult').src = `./img/${selectedImg}`
//     slotResult.className = 'casino';
// }


// getRandomImg();

    
// }







let button = document.getElementById('slot-button');
button.addEventListener('click', function getRandomImg(){ 
 
  randomIndex = Math.floor(Math.random()* imgArray.length);
  selectedImg = imgArray[randomIndex]

  document.getElementById('slotResult').src = `./img/${selectedImg}`
  slotResult.className = 'casino'}
  
   
  
  );
};
  


  slotSpin();

