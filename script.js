//User starts with $X
//User Inputs bet amount
//Click roll
//Return 3 random options "7, BAR(x3), BAR, Free Play, etc."
//Each play, subtrack bet amount

// console.log(userBet - points)



resultArray = [];

imgArray = ['img_1.jpg', 'img_2.jpg', 'img_3.jpg'];

let dict = {'img_1.jpg': 1, 'img_2.jpg': 2, 'img_3.jpg': 3}


function slotSpin(){

    document.querySelector('#creditsCount').textContent = parseInt(50);

    
    let button = document.getElementById('slot-button');
    button.addEventListener('click', function getRandomImg(){ 

    for (let i = 0; i <= imgArray.length-1; i++){
    
    randomIndex = Math.floor(Math.random()* imgArray.length);
    selectedImg = imgArray[randomIndex]

    document.getElementById('slotResult'+[i]).src = `./img/${selectedImg}`
    resultArray[i] = dict[selectedImg];
   
    
    }
    console.log(resultArray);  

    
    if (resultArray[0] === resultArray[1] && resultArray[1] === resultArray[2]){
      document.querySelector('#credits').textContent = "WINNER!";
      document.querySelector('#creditsCount').textContent -= parseInt(-5);
    }
    if (resultArray[0] !== resultArray[1] || resultArray[1] !== resultArray[2]){
      document.querySelector('#credits').textContent = "Try Again";
      document.querySelector('#creditsCount').textContent -= parseInt(2);
    }



    if (document.querySelector('#creditsCount').textContent < 0){
      document.querySelector('#creditsCount').textContent = 'GAME OVER';
      if (document.querySelector('.creditContainer').textContent = 'GAME OVER')
      
      {

      }
     
    };
 

    });


};
  


slotSpin();
  
  



















// newArray = [1, 2, 3]

// let result = document.querySelector('result')


// for (let i = 0; i <= newArray.length - 1; i++){
 
//   randomIndex = Math.floor(Math.random()* newArray.length);
//   selectedImg = newArray[randomIndex]
  
//   document.getElementById('result') =  `${selectedImg}`;


//   console.log(newArray[i]);

// }











// arrayCheck = ['cherries', '7', 'bar']

// for (let i = 0; i <= arrayCheck.length - 1; i++){
//   randomIndex = Math.floor(Math.random() * arrayCheck.length);
// randomNumber = arrayCheck[randomIndex];
//   console.log(randomNumber );

//   if (randomNumber + [1] === 'cherries'){
//     console.log('nice cherries');
  
//  };


//  }
