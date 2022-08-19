//User starts with $X
//User Inputs bet amount
//Click roll
//Return 3 random options "7, BAR(x3), BAR, Free Play, etc."
//Each play, subtrack bet amount

// console.log(userBet - points)


function slotSpin(){
    
// for (i = 0; i < 1; i++){

  
imgArray = ['img_1.jpg', 'img_2.jpg', 'img_3.jpg']



let button = document.getElementById('slot-button');
button.addEventListener('click', function getRandomImg(){ 
 
  randomIndex = Math.floor(Math.random()* imgArray.length);
  selectedImg = imgArray[randomIndex]

  document.getElementById('slotResult').src = `./img/${selectedImg}`
  slotResult.className = 'casino'}
  
   
  
  );

  let button2 = document.getElementById('slot-button');
  button.addEventListener('click', function getRandomImg(){ 
   
    randomIndex = Math.floor(Math.random()* imgArray.length);
    selectedImg = imgArray[randomIndex]
  
    document.getElementById('slotResult2').src = `./img/${selectedImg}`
    slotResult.className = 'casino'}
    
     
    
    );
  
    let button3 = document.getElementById('slot-button');
    button.addEventListener('click', function getRandomImg(){ 
     
      randomIndex = Math.floor(Math.random()* imgArray.length);
      selectedImg = imgArray[randomIndex]
    
      document.getElementById('slotResult3').src = `./img/${selectedImg}`
      slotResult.className = 'casino'}
      
       
      
      );
    
  







};
  


  slotSpin();

