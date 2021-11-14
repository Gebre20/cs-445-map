const Factory = function(){
    this.createBulb = function (type) {
        var bulb;

        if (type === "regular") {
            bulb = new Regular();
        } else if (type === "energy") {
            bulb = new Energy();
        } 

        bulb.type = type;

        // bulb.say = function () {
        //     console.log(this.type + ": rate " + this.range + "/hour");
        // }

        return bulb;
    }
}
var Regular = function () {
    this.range = [50,100];
    this.time = 1;
};

var Energy = function () {
    this.range = [5,40];
    this.time = 10;
};

const bulbs = [];
const factory = new Factory();
bulbs.push(factory.createBulb("regular"));
bulbs.push(factory.createBulb("energy", "red"));

for (let i = 0, len = bulbs.length; i < len; i++) {
    console.log(bulbs[i]);
}
