//read the gameState and --> getState()
//update the gameState --> update(state)
//start the game acc to the gameState  --> start()
class Game {
    constructor(){

    }

    getState(){
        //read the state, listen to the values, store it in the gameState variable
    var gameStateRef = database.ref('gameState');
        gameStateRef.on("value",function(data){
        gameState = data.val();
        })
    }

    update(state){
        database.ref('/').update({
        gameState: state
        })
    }

    start(){
        if(gameState === 0){
            //create a new object for the Player class 
            player = new Player();

            //read the playerCount
           player.getCount();

            //create a new form object object from the Form class
            form = new Form();

            //display the form to Player --> call the display() from Form class here 
            form.display();   
        }
    }
}

//class Box
//box1,box2,...
//box1 = new Box()  --> new object created from the Box class