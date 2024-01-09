import {HotelController} from "./HotelController";

export class PaymentCalculationController {
    constructor() {
        this.calculatePaymentTotal();
        this.hotel=new HotelController();
    }

    calculatePaymentTotal() {


    }


}

new PaymentCalculationController();