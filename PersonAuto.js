function Person(name, auto) {
    this.name = name;
    this.auto = auto;
}

function Auto(mtr) {
    this.mtr= mtr;
}



function conflict(owners) {
    if (owners.length > 1) {
        autos = [];
        for (o of owners) {
            autos.push(o.auto.mtr);
        }
        autos.sort();
        for (var i = 1; i < autos.length - 1; i++) {
            if (autos[i - 1].mtr === autos[i].mtr) {
                return true;
            }
        }
    }
    return false;
}


var car1 = new Auto("123");
var car2 = new Auto("456");
var car3 =new  Auto("789")

var besitzer1 = new Person("ayoub", car1);
var besitzer2 = new Person("marouane", car2);
var besitzer3 = new Person("khaled", car3);
var besitzer4= new Person("samir",car1);


test1 = [besitzer1,besitzer4,besitzer3];
test2= [besitzer1,besitzer2];


console.log("Test 1: " + conflict(test1))
console.log("Test 2: " + conflict(test2)) 
