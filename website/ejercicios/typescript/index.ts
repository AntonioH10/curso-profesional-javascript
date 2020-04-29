enum Perros {
  Boxer,
  Mastin,
  Bulldog,
}

console.log(Perros.Bulldog); // Esto retornará 2.

enum RealDogs {
  Boxer = "boxer",
  Mastin = "mastin",
  Bulldog = "bulldog",
}

console.log(RealDogs.Bulldog); //Esto retornará "bulldog"

// Interfaces
interface Rectangulo {
  ancho: number;
  alto: number;
}

let rect: Rectangulo = {
  ancho: 4,
  alto: 6,
};

console.log(rect.ancho);

function area(r: Rectangulo) {
  return r.alto * r.ancho;
}

console.log(area(rect));
