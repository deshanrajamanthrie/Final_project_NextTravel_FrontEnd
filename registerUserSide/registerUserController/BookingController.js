export class BookingController {
    constructor() {
        $("#btn-save-Booking").click(this.saveBooking.bind(this));
    }

    static url = "http://localhost:8080/api/v1/consume/booking";


    saveBooking() {
        let Booking = {
            date: $("#txt-bookingDate").val(),
            vehicleId: Number.parseInt($("#txt-booking-vehicle").val()),
            guideId: $("#txtbooking-GuideId").val(),
            hotelId: $("#txt-hotelId").val(),
            paid: Number.parseInt($("#txt-bookingPaid").val()),
            paymentStatus: $("#txtbookind-payment-status").val(),
            user: {
                id: Number.parseInt($("#txt-booking-User").val()),
            }
        }
        $.ajax({
            url: BookingController.url,
            method: "POST",
            contentType: "application/json",
            date: JSON.stringify(Booking),

            
            success: function (resp) {
                if (resp.code === 200) {
                    Swal.fire(resp.massage);
                } else {
                    Swal.fire(resp.massage);
                }

            }
        })

    }

}

new BookingController();