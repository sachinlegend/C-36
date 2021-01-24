class Form{         //your home
    constructor(){

    }
    //element (title/greeting), input, button
    
    display(){      //your shoe
var title = createElement('h1');
title.html("Car Racing Game");
title.position(150,10);

var greeting = createElement('h3');

var input = createInput('Name');
input.position(130,160);

var button = createButton('Start');
button.position(250,200);

    

    //sprite --> mousePressedOver()
    //button --> varName.mousePressed()
    button.mousePressed(function() {
        //hide the input & button using hide()
        input.hide();
        button.hide();
        
        //store the entered name of the player inside a variable called name using --> input.value()
        var name = input.value();

        //increase the playerCount
        playerCount+=1;

        //update the name of the player
       player.update(name);

        //update the playerCount
        player.updateCount(playerCount);

        //greet the player with the word "Welcome" + player's name
        greeting.html("Welcome "+name);
        greeting.position(140,160);
    })
    
    


       
    }
}