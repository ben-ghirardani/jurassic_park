var assert = require("assert");
var Dinosaur = require("../models/dinosaur");
var Park = require("../models/park")

describe("Dinosaur", function() {

  var dinosaur1;

  beforeEach(function(){
    dinosaur1 = new Dinosaur("tyrannosaurus", 1);
  })

  it("type is tyrannosaurus", function(){
    assert.strictEqual(dinosaur1.type, "tyrannosaurus");
  })

  it("offspring per year is correct", function(){
    assert.strictEqual(dinosaur1.yearlyOffspring, 1);
  })


}) 