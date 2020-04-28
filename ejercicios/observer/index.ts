interface Observer {
  update: (data: any) => void;
}

interface Subject {
  subscribe: (observer: Observer) => void;
  unsubscribe: (observer: Observer) => void;
}

class BitcoinPrice implements Subject {
  observers: Observer[] = [];

  constructor() {
    const el: HTMLInputElement = document.querySelector("#value");
    el.addEventListener("input", () => {
      this.notify(el.value);
    });
  }

  subscribe(observer: Observer) {
    this.observers.push(observer);
  }
  unsubscribe(observer: Observer) {
    // Buscamos el indice del observer al que se va a desuscribir
    const index = this.observers.findIndex((obs) => {
      return obs === observer;
    });

    // Se usa el metodo splice(indice del que se empezara a quitar, cuantos se va a quitar)
    this.observers.splice(index, 1);
  }

  notify(data: any) {
    this.observers.forEach((observer) => observer.update(data));
  }
}

class PriceDisplay implements Observer {
  private el: HTMLElement;

  constructor() {
    this.el = document.querySelector("#price");
  }

  update(data: any) {
    this.el.innerText = data;
  }
}

// Creacion de instancias
const value = new BitcoinPrice();
const display = new PriceDisplay();

value.subscribe(display);

// Ahora para probar el unsubscribe, será con un timeout
setTimeout(() => value.unsubscribe(display), 5000);
