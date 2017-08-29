var Park = function(){
  this.enclosure = [];
}

Park.prototype.addDinosaur = function(dinosaur){
  this.enclosure.push(dinosaur);
}

Park.prototype.removeByType = function(type){
      for( var i = this.enclosure.length - 1; i > -1; i--){
        if (this.enclosure[i].type == type) {
          this.enclosure.splice(i, 1);
        }
      }
}

Park.prototype.getNamesOfDinosaursWithLotsOfBabies = function(){
  for ( dinosaur of this.enclosure ){
    if(dinosaur.)
  }
}

module.exports = Park;