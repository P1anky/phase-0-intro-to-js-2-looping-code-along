// Code your solutions in this file
/*for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
 };
 const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }

  return gifts;
};
wrapGifts(gifts);

*/
function writeCards(names,event){
    const cards=[];
    for (let i = 0; i < names.length; i++){
        cards[i]=`Thank you, ${names[i]}, for the wonderful ${event} gift!`
        debugger;
    };
    return cards;
}
console.log(writeCards(["Charlie", "Samip", "Ali"], "birthday"));

function countDown(num){
    while(num>=0){
        console.log(num)
        num -=1;
    };
};