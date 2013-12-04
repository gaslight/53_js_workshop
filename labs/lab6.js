describe("Invoking a function", function() {
    describe("directly", function() {
        var whatsMyName = function () {
          return "Fred";
        }

        it("can be defined globally and invoked", function() {
          expect().toEqual("Fred")
        });
    });

    describe("using new", function() {
        function Person (name) {
          this.name = name;
        }
        var person = // use new create a Person!

        it("can invoke a function with new to construct an object", function() {
            expect(person.name).toEqual("Fred");
        });
    });
    describe("as a method", function() {
        var person = {
          name: "Fred",
          getName: function () {
            return this.name;
          }
        }; 
        it("can invoke a function defined within an object", function() {
            expect().toEqual("Fred");
        });
    });

    describe("with native javascript function methods", function() {
        function formalPersonName (title,suffix) {
          return title + ' ' + this.name + " " + suffix;
        }
        var person = {
          name: "Fred"
        }; 
        it("can call apply() on the function passing in the context and an array of arguments", function() {
            // use apply()
            expect().toEqual("Mr Fred Esq");
        });
        it("can call call() on the function passing in the context and arguments", function() {
            // use call()
            expect().toEqual("Mr Fred Esq");
        });
    });
});