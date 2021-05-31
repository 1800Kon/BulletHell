class Spaceship {
    constructor() {
        if (this.constructor === Spaceship) {
            throw new TypeError("Can't instantiate abstract classes");
        }
    }
}