import {BookingService} from "../service/BookingService.js";


export class BookingController {

    constructor() {
        $('.btn-Booking-onAction').click(this.bookingHandle.bind(this));
        $('.btn-billGenerator').click(this.totalBill.bind(this));

        this.bookingService = new BookingService();
        this.getCurrentDate();
    }


    getCurrentDate() {
        const date = new Date().toLocaleDateString();
        return date;
        console.log(date)
    }

    getTravelData() {
        let travel = sessionStorage.getItem("travel");
        let travelParse = JSON.parse(travel);
        let TravelDTO = {
            travelArea: travelParse.travelArea,
            countDays: travelParse.countDays,
            noChildren: travelParse.noChildren,
            noAdult: travelParse.noAdult,
            headCount: travelParse.headCount
        }
        return TravelDTO;
    }


    getHotelData() {
        let hotelSelected = sessionStorage.getItem("selectHotel");
        let hotel = JSON.parse(hotelSelected);// string-->JSON
        let HotelDTO = {
            id: hotel.id,
            starRate: hotel.starRate,
            name: hotel.name,
            location: hotel.location,
            op4: hotel.op4
        }
        return HotelDTO;
    }

    calculationPayment() {
        let hotelData = this.getHotelData();
        let hotelFee = hotelData.op4;
        console.log("Hotel Fee :" + hotelFee)

        let vehicleData = this.getVehicleData();
        let vehicleFee = vehicleData.feeForOneDay;
        console.log("Vh Fee :" + vehicleFee)

        let guideData = this.getGuideData();
        let guideFee = guideData.value;
        console.log("guideFee :" + guideFee)

        let travelData = this.getTravelData();
        let days = travelData.countDays;

        let total = ((hotelFee + vehicleFee + guideFee) * days);
        let serviceCharge=total*0.1
        let lastTotal=total+serviceCharge;
        console.log("Total:________" + lastTotal)
        return lastTotal;
    }

    totalBill() {
        alert("joli");
        let number = this.calculationPayment();
        $('.txt-totalPayment').text(number);
    }


    getVehicleData() {
        let vehicleSelected = sessionStorage.getItem("vehicles");
        let vehicle = JSON.parse(vehicleSelected);
        let VehicleDTO = {
            vehicleId: vehicle.vehicleId,
            brandName: vehicle.brandName,
            feeForOneDay: vehicle.feeForOneDay
        }
        return VehicleDTO;
    }

    /*6D758D*/

    getGuideData() {
        let guideSelected = sessionStorage.getItem("guides");
        let guide = JSON.parse(guideSelected);
        let GuideDTO = {
            id: guide.id,
            name: guide.name,
            num1: guide.num1,
            value: guide.value
        }
        return GuideDTO;

    }

    bookingHandle() {

        let currentDate = this.getCurrentDate();




        alert("Yoo")
        let travel = this.getTravelData();
        let strTravel = JSON.stringify(travel);
        console.log(strTravel);

        let hotelData = this.getHotelData();
        let strHotel = JSON.stringify(hotelData);

        let vehicleData = this.getVehicleData();
        let strVehicle = JSON.stringify(vehicleData);

        let guideData = this.getGuideData();
        let strGuide = JSON.stringify(guideData);

        let calculateTotal = this.calculationPayment();




        let Booking = {
            date: currentDate,
            travel: strTravel,
            hotel: strHotel,
            vehicle: strVehicle,
            guide: strGuide,
            total: Number.parseInt(calculateTotal),
            user: {
                id: 1
            }
        }
        this.bookingService.postBooking(Booking);
        console.log("MyBooking"+JSON.stringify(Booking));
    }



}

new BookingController();