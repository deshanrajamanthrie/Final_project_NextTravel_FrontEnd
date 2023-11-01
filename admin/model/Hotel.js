export class Hotel {
    constructor(id, name, starRate, location, contacts, pets, op1, op2, op3, op4) {
        this._id = id;
        this._name = name;
        this._starRate = starRate;
        this._location = location;
        this._pets = pets;
        this._op1 = op1;
        this._op2 = op2;
        this._op3 = op3;
        this._op4 = op4;
        this._contacts = contacts;
    }


    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get starRate() {
        return this._starRate;
    }

    set starRate(value) {
        this._starRate = value;
    }

    get location() {
        return this._location;
    }

    set location(value) {
        this._location = value;
    }

    get contacts() {
        return this._contacts;
    }

    set contacts(value) {
        this._contacts = value;
    }

    get pets() {
        return this._pets;
    }

    set pets(value) {
        this._pets = value;
    }

    get op1() {
        return this._op1;
    }

    set op1(value) {
        this._op1 = value;
    }

    get op2() {
        return this._op2;
    }

    set op2(value) {
        this._op2 = value;
    }

    get op3() {
        return this._op3;
    }

    set op3(value) {
        this._op3 = value;
    }

    get op4() {
        return this._op4;
    }

    set op4(value) {
        this._op4 = value;
    }
}
