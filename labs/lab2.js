describe("Let's make an object", function() {
  var thing = {

  };
  it("has the right properties", function() {
    expect(thing.name).toEqual("Thing 1");
    expect(thing.description).toEqual("A good thing.");
  });
});