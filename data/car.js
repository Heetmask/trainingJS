
class Car {
    #brand;
    #model;
    #speed = 0;
    isTrunkOpen = true;
    displayInfo(){
       return `${this.#brand} ${this.#model}, Speed: ${this.#speed} km/h Is trunk open: ${this.isTrunkOpen} , acceleration: ${this.acceleration}`
    }

    constructor(carDetails){
       this.#brand = carDetails.brand;
       this.#model = carDetails.model;
    }

    openTrunk(){
        if(this.isTrunkOpen!== undefined){
          this.#speed = 0;
          this.isTrunkOpen = true;
          return this;
        
        }
    
    }

    closeTrunk(){
         if(this.isTrunkOpen!== undefined){
          this.isTrunkOpen = false;
          return this;
          }
    }

    go(){
        if(this.isTrunkOpen){
            return;
        }

        if(this.acceleration){
            this.#speed+=this.acceleration;
            return this;
        }

       this.#speed+=5;
       if(this.speed>200){
        this.#speed = 0;
       }

       return this;
    }

    brake(){
        this.#speed-=5;
        if(this.#speed<0){
        this.#speed = 0;
       }
        return this;
    }
}

const car1 = new Car({
    brand:'Toyota',
    model: 'Corolla',
});

const car2 = new Car({
    brand:'Tesla',
    model:'Model 3',
});

car1.go();
car1.closeTrunk();
car1.go();
car1.go();
car1.go();
car2.brake();
car2.go();
car2.go();

console.log(car1.displayInfo());
console.log(car2.displayInfo());

class RaceCar extends Car{
    isTrunkOpen = undefined;
    acceleration;
    constructor(carDetails){
    super(carDetails);
        this.acceleration = carDetails.acceleration;
    }
}

const car3 = new RaceCar({
  brand:'McLaren',
  model:'F1',
  acceleration:20
});

car3.go();
car3.openTrunk();
car3.brake()
car3.brake();
console.log(car3);
console.log(car3.displayInfo());


