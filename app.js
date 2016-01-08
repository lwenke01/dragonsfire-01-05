

var res1 = document.getElementById('resultOne');
var res2 = document.getElementById('resultTwo');
var res3 = document.getElementById('resultThree');
var res4 = document.getElementById('resultFour');
var res5 = document.getElementById('resultFive');

  var user = prompt('What is your name?');
    console.log('The user\'s name is '+ user);

  var counter = 0;
    alert('Hi there, '+ user +'. Let\'s see how much you know me...');
var quesData = [
  ['Please answer only yes or no. Have I ever been skydiving?',
  'Y', 'YES', 'N','NO', 'Correct! I went skydiving 10 years ago over the Great Barrier in Australia!', 'Err....Nope! Jumped off a perfectly good plane 10 years ago in Australia, mate.', res1],
  ['Is black licorice my favorite thing on earth?','N','NO','Y','YES','Correct!! You know me so well,  '+ user + '. I loathe the stuff!','No way, '+ user + '! That stuff is nasty!', res2],
  ['Have I seen the new Star Wars movie?','N','NO','Y','YES','True. Want to watch it with me' ,'False! I am probably the only person who hasn\'t seen it yet. Want to watch it with me, ' + user +'?', res3],
];

function questions(){
  for(var i=0; i < quesData.length; i++){
    var ans1 = prompt(quesData[i][0]).toUpperCase();
    console.log('The user answered answer 1: '+ ans1);
    if(ans1 === quesData[i][1] || ans1 === quesData[i][2]){
      // alert('Correct! I went skydiving 10 years ago over the Great Barrier in Australia!');
      quesData[i][7].textContent = quesData[i][5];
      quesData[i][7].className = 'right';
      counter++;
    } else {
      quesData[i][7].textContent = quesData[i][6];
      quesData[i][7].className = 'wrong';
      // alert('Err....Nope! Jumped off a perfectly good plane 10 years ago in Australia, mate.');
      // res1.textContent = 'Err....Nope! Jumped off a perfectly good plane 10 years ago in Australia, mate.';
    }
  }
}
questions();
// questions();
//
//   var res1 = document.getElementById('resultOne');
//   var res2 = document.getElementById('resultTwo');
//   var res3 = document.getElementById('resultThree');
//   var res4 = document.getElementById('resultFour');
//   var res5 = document.getElementById('resultFive');
//
//     var user = prompt('What is your name?');
//       console.log('The user\'s name is '+ user);
//
//     var counter = 0;
//       alert('Hi there, '+ user +'. Let\'s see how much you know me...');
//
// //question 1
//   function firstQuestion() {
//   var ans1 = prompt('Let\'s get started, '+ user +'! Please answer only yes or no. Have I ever been skydiving?').toUpperCase();
//       console.log('The user answered answer 1: '+ ans1);
//     if(ans1 === 'Y'|| ans1 === 'YES'){
//       // alert('Correct! I went skydiving 10 years ago over the Great Barrier in Australia!');
//       res1.textContent = 'Correct! I went skydiving 10 years ago over the Great Barrier in Australia!';
//         counter++;
//       } else {
//         // alert('Err....Nope! Jumped off a perfectly good plane 10 years ago in Australia, mate.');
//       res1.textContent = 'Err....Nope! Jumped off a perfectly good plane 10 years ago in Australia, mate.';
//
//     }
//     alert('You got '+ counter +'/1 correct!');
//   }
//
//
//
// //question 2
//   function secondQuestion() {
//   var ans2 = prompt('Is black licorice my favorite thing on earth?').toUpperCase();
//       console.log('The user answered answer 2: '+ ans2);
//     if(ans2 === 'Y'|| ans2 === 'YES'){
//       // alert('No way!, '+ user + '. That stuff is nasty!');
//       res2.textContent = 'No way!, '+ user + '. That stuff is nasty!';
//       } else {
//       // alert('Correct!! You know me so well,  '+ user +'. I loathe the stuff!');
//       res2.textContent = 'Correct!! You know me so well,  '+ user +'. I loathe the stuff!';
//       counter++;
// }
// alert('You got '+ counter +'/2 correct!');
// }
//
// //question 3
//   function thirdQuestion() {
//   var ans3 = prompt('Have I seen the new Star Wars movie?').toUpperCase();
//     console.log('The user answered answer 3: '+ ans3);
//     if(ans3 === 'N'||ans3 === 'NO'){
//       // alert('True. Want to watch it with me, '+ user +'?');
//       res3.textContent = 'True. Want to watch it with me, '+ user +'?';
//         counter++;
//       } else {
//         // alert('False! I am probably the only person who hasn\'t seen it yet. Want to watch it with me, '+ user +'?');
//         res3.textContent = 'False! I am probably the only person who hasn\'t seen it yet. Want to watch it with me, '+ user +'?';
//     }
//     alert('You got '+ counter +'/3 correct!');
//   }
//
// //question 4
function fourthQuestion(){
var responseto4 = false;
while(responseto4 === false) {

  var ans4 = prompt('How old do I look?');
    console.log('The user answered answer 4: '+ ans4);
    if(parseInt(ans4) == 33){
      // alert('Correct! You know me the best!!!');
      res4.textContent = 'Correct! You know me the best!!!';
      res4.className = 'right';
      responseto4 = true;
        counter++;
    } else if (parseInt(ans4) > 33){
    //  alert('I\'m not that old, '+ user +'!! Try again..');
     res4.textContent = 'I\'m not that old, '+ user +'!! Try again..';
     res4.className = 'wrong';
      responseto4 = false;
      } else {
        // alert('That\'s sweet of you, '+ user +'! I am a little older though Try again..');
        res4.textContent = 'That\'s sweet of you, '+ user +'! I am a little older though Try again..';
        res4.className = 'wrong';
        responseto4 = false;

   }
 }
 alert('You got '+ counter +'/4 correct!');
 }

//question 5
  function fifthQuestion(){
   var responseto5 = false;
    while(responseto5 === false){

   var ans5 = prompt('What is my favorite number?');
    console.log('The user answered answer 5: '+ ans5);
  if (parseInt(ans5) == 22){
        // alert('Correct! You rock!');
        res5.textContent = 'Correct! You rock!';
        res5.className = 'right';
        responseto5 = true;
        counter++;
    } else if (parseInt(ans5)< 22){
      // alert('Too low. Try again!');
      res5.textContent = 'Too low. Try again!';
      res5.className = 'wrong';
        responseto5 = false;
      } else {
          // alert('Too high. Keep guessing');
          res5.textContent = 'Too high. Keep guessing';
          res5.className = 'wrong';
          responseto5 = false;
      }
    }
  }

//
// //end results
// firstQuestion();
// secondQuestion();
// thirdQuestion();
fourthQuestion();
fifthQuestion();
//
    if(counter == 5){
      alert('High five! ' + counter + '/5!! Woo hoo!');
      } else if (counter < 2){
        alert('I thought we were friends...'+ counter + '/5...');
      } else {
            alert('You got '+ counter + '/5 correct');
      }
