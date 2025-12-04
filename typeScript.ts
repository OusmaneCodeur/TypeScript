interface Vehicule {
    make: string;
    model: string;
    year: number;
    start(): void;
}

class Voiture implements Vehicule{
    make: string;
    model: string;
    year: number;

    constructor(make: string, model: string, year:number){
        this.make = make;
        this.model = model;
        this.year = year;
    }

    start(): void{
        console.log("Car engine started");        
    }
}

let maVoiture = new Voiture("Lamborghini", "Urus Mansory", 2025);
maVoiture.start();