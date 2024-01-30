class Key {

    private signature: number = Math.floor(10 * Math.random());

    getSignature(): number {
        return this.signature;
    }
}


class Person {
    constructor(private key: Key) { }

    getKey() {
        return this.key;
    }
}


abstract class House {
    protected door: boolean = false;
    private tenants: Person[] = [];

    constructor(protected key: Key) { }

    comeIn(tenant: Person) {
        if (this.door === true) {
            this.tenants.push(tenant);
        }
    }

  public abstract openDoor(key: Key): void;
}



class MyHouse extends House {
    public openDoor(key: Key): void {
        if (key.getSignature() === this.key.getSignature()) {
            this.door === true;
        }
        return;
    }
}


const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);
export { };


