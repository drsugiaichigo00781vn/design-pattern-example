/**
 * A factory method handles object creation and encapsulates it in a subclass.
 *
 */

class Pizza {
  name: string;
  getName() {
    console.log(`name: ${this.name} Pizza`);
  }

  prepare() {
    console.log(`Prepare: ${this.name} Pizza`);
  }
}

class CheesePizza extends Pizza {
  constructor() {
    super();
    this.name = 'cheese';
  }
}

class ChicagoCheesePizza extends Pizza {
  constructor() {
    super();
    this.name = 'Chicago cheese';
  }
}

// use for simple factory pattern
//
// class SimplePizzaFactory {
//   protected pizza: Pizza;
//   createPizza(type: string) {
//     switch (type) {
//       case 'cheese':
//         this.pizza = new CheesePizza();
//         break;
//       default:
//         throw new Error('type not found');
//     }

//     return this.pizza
//   }
// }

// class ChicagoPizzaFactory extends SimplePizzaFactory{
//   createPizza(type: string) {
//     switch (type) {
//       case 'cheese':
//         this.pizza = new ChicagoCheesePizza();
//         break;
//       default:
//         throw new Error('type not found');
//     }

//     return this.pizza
//   }
// }

abstract class PizzaStore {
  protected pizza
  orderPizza(type: string) {
    this.pizza = this.createPizza(type)
    this.pizza.prepare()
    this.pizza.getName()
  }

  abstract createPizza(type: string)
}

class NYPizzaStore extends PizzaStore {
  createPizza(type: string) {
    switch (type) {
      case 'cheese':
        this.pizza = new CheesePizza();
        break;
      default:
        throw new Error('type not found');
    }
    return this.pizza
  }
}

class ChicagoPizzaStore extends PizzaStore {
  createPizza(type: string) {
    switch (type) {
      case 'cheese':
        this.pizza = new ChicagoCheesePizza();
        break;
      default:
        throw new Error('type not found');
    }
    return this.pizza
  }
}

const store = new NYPizzaStore()
store.orderPizza('cheese')
console.log('=============');
const chicagoStore = new ChicagoPizzaStore()
chicagoStore.orderPizza('cheese')
