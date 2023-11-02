//Q1:
console.log(` MOVIE CLASS 
-------------`)
class Movie{
constructor(title,studio,rating="PG"){
    this.title=title;
    this.studio=studio;
    this.rating=rating;
}
get getPG(){
    return this.rating;
}
}
let film = new Movie("Casino Royale","Eon Productions","PG13");
console.log(film.getPG);
let film1 = new Movie("Casino","Productions");
console.log(film1.getPG)
film1.rating="PG11";
console.log(film1.getPG)

// Q2:CIRCLE
console.log(` CIRCLE RADIUS 
 -------------`);

class Circle{
    constructor(radius,color){
        this.radius=radius;
        this.color=color;
    }
    get radiusCircle(){
      
        return this.radius;
    }
    set radiusCircle(radius){
        this.radius = radius;

    }
    get colorCircle(){
      
        return this.color;
    }
    set colorCircle(color){
        this.color = color;

    }
    get toString()
    {
         return `"Circle [radius = ${this.radius},color = ${this.color}] " `;
    }
    get areaCircle()
    {
        return Math.PI *this.radius *this.radius;
    }
    get circumferenceCircle(){
        return 2 * Math.PI *this.radius;
    }

}
let obj1 = new Circle(1.0,"blue")
console.log(obj1.radiusCircle);
obj1.radiusCircle=3.0;
console.log(obj1.radiusCircle);
obj1.colorCircle="red";
console.log(obj1.colorCircle);
console.log(obj1.toString);
console.log(obj1.areaCircle);
console.log(obj1.circumferenceCircle);

// Q3: CLASS PERSON

console.log(`CLASS PERSON
----------------`)
class Person{
        constructor(name,age,gender,salary){
            this.name =name;
            this.age=age;
            this.gender=gender;
            this.salary=salary;
    
        }
    }
    const person1 = new Person("priya","30","female",50000);
    console.log(person1.name);
    console.log(person1.age);
    console.log(person1.gender);
    console.log(person1.salary);
    const person2 = new Person("rajesh","30","male","50000",12,"asd");
    console.log(person2);
    console.log(person1);



// Q4:uber price calculate

console.log(`UBER PRICE CALCULATE     
---------------------`);
class Uber{
    constructor(km,price=20){
        this.price=price;
        this.km=km;
    }
    get priceCalculate(){
        return this.price*this.km;
    }
}
let uberPrice = new Uber(13,50);
let uberPrice1 = new Uber(10,10);
let uberPrice2 = new Uber(10);
console.log(uberPrice.priceCalculate);
console.log(uberPrice1.priceCalculate);
console.log(uberPrice2.priceCalculate);