import {BookingRepo} from "../repo/BookingRepo.js";

export class BookingService {
    constructor() {
        this.bokingRepo=new BookingRepo();
        //this.path="/user/api/v1/booking";
    }

    postBooking(booking){
        return this.bokingRepo.save(this.path,booking);
    }
}