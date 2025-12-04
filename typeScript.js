var Voiture = /** @class */ (function () {
    function Voiture(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    Voiture.prototype.start = function () {
        console.log("Car engine started");
    };
    return Voiture;
}());
var maVoiture = new Voiture("Lamborghini", "Urus Mansory", 2025);
maVoiture.start();

console.log(maVoiture);
