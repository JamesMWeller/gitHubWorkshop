// JavaScript source code

var arrayList = ["item0", "item1", "item2", "item3"]; //Array values start at 0

console.log(arrayList[2]);  //prints arrayList item 2 to the console

arrayList[1] = "item1Updated"; //Update item 1* on array

arrayList.push("item4", "item5"); //Push to add to end of an array

arrayList.pop(); //Pop remove the final array item

arrayList.length;


//For loop
for (var i = 1; i <= 3; i++) //i starts as 1, if i is equal to or less than 3 run code add 1 till over 3
{
    console.log(i)
}

//////////////////////////////////////////////////////////

var forArray = ["for0", "for1", "for2", "for3"];
var ID = 0;
for (forArray[ID]; forArray[ID] !== "for2"; ID++ ){
    console.log(forArray[ID]);
    
}

console.log(forArray[ID] + " is for2");

/////////////////////////////////////////////////////////

var forArray = ["for0", "for1", "for2", "for3"];
for (var ID = 0; ID < forArray.length; ID++)
{
    if (forArray[ID] === "for2")
    {
        break;
    }
}

console.log(ID + " this");

////////////////////////////////////////////////////////

//While Loop
var whileArray = ["whileA", "whileB", "whileC", "whileD"];
var ID = 0;
while (whileArray[ID] !== "whileB") {
   ID++;
}

console.log(ID + " is whileB")

/////////////////////////////////////////////////////////

Nested Loops

var ranks = ["ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king"];
var suits = ["clubs", "hearts", "diamonds", "spades"];

for (var suitIndex = 0; suitIndex < suits.length; suitIndex++){
    for (var rankIndex = 0; rankIndex < ranks.length; rankIndex++){
        console.log(ranks[rankIndex] + " of " + suits[suitIndex]);
    }
}

console.log("Deck Empty");