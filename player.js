//read the playerCount --> getCount()
//update the playerCount --> updateCount(count)
//update the player name --> update(name)

class Player {
     constructor(){
         
     }

     getCount() {
   var player = database.ref('playerCount');
   player.on("value",function(data){
        playerCount = data.val();
   })
     }

     updateCount(count) {
     database.ref('/').update({
          playerCount:count
     })
     }

     update(name) {
     var playerIndexRef = "player" + playerCount;
     database.ref(playerIndexRef).set({
         name:name
     })


     }
}
//playerCount: 0  --> update
//name : " " --> set