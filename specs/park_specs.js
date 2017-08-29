var assert = require("assert");
var Park = require("../models/park")
var Dinosaur = require("../models/dinosaur");

describe("Dinosaur Park", function(){

  var dinosaurPark;
  var velociraptor1;
  var velociraptor2;
  var anatotitan1;

  beforeEach(function(){
    dinosaurPark = new Park();
    velociraptor1 = new Dinosaur("Velociraptor", 6);
    velociraptor2 = new Dinosaur("Velociraptor", 5);
    anatotitan1 = new Dinosaur("Anatotitan", 1);            
  })

  it("starts off empty", function(){
    assert.strictEqual(dinosaurPark.enclosure.length, 0); 
  })

  it("can add a dinosaur", function(){
    assert.strictEqual(dinosaurPark.enclosure.length, 0);
    dinosaurPark.addDinosaur(velociraptor1);
    assert.strictEqual(dinosaurPark.enclosure.length, 1);
  })

  it("can remove dinosaurs of a certain type", function(){
    assert.strictEqual(dinosaurPark.enclosure.length, 0);
    dinosaurPark.addDinosaur(velociraptor1);
    dinosaurPark.addDinosaur(velociraptor2);
    dinosaurPark.addDinosaur(anatotitan1);
    assert.strictEqual(dinosaurPark.enclosure.length, 3);
    dinosaurPark.removeByType("Velociraptor");
    assert.strictEqual(dinosaurPark.enclosure.length, 1);
  })


  it("can get dinosaurs with 2 or more offspring", function(){
    dinosaurPark.addDinosaur(velociraptor1);
    dinosaurPark.addDinosaur(velociraptor2);
    dinosaurPark.addDinosaur(anatotitan1);
    dinosaurPark.getNamesOfDinosaursWithLotsOfBabies();
  })



})