import {HotelService} from "../service/HotelService.js";

export class HotelController {
    constructor() {
        $(".btn-hotel-OnAction").click(this.hotelSearchHandler.bind(this));
        this.hotelService = new HotelService();
    }

    hotelSearchHandler() {
        console.log($('.hotel-location-Action').val());
        let promise = this.hotelService.getHotel($('.hotel-location-Action').val());

        promise.then(data => {
            console.log(data)
            $('.hotel-card-parent').html('');


            for (let hotel of data.body) {
                $('.hotel-card-parent').append(
                    `
                    <div class="card" style="width: 18rem;">
                   <img src="data:image/png;base64,${hotel.image}" class="card-img-top" alt="...">
                    <div class="card-body card-body-all">
                    <div class="hotel-card-body">
                        <h5 class="card-title-hotel">${hotel.name}</h5>
                        <input type="checkbox" id="hotel-id" name="vehicle1" value="#">
                    </div>
                    <div class="hotel-card-body">
                        <h6 class="rate-hotel">Star Rate</h6>
                        <p class="data-hotel-crd">${hotel.starRate}</p>
                    </div>
                    <div class="hotel-card-body">
                        <h6 class="rate-hotel">Contact</h6>
                        <p class="data-hotel-crd">${hotel.contacts[0].contactNum1}</p>
                
                    </div>
                    <div class="hotel-card-body">
                        <h6 class="rate-hotel">Pets</h6>
                        <p class="data-hotel-crd">${hotel.pets}</p>
                    </div>
                    <div class="hotel-card-body">
                        <h6 class="rate-hotel">Payment</h6>
                        <p class="data-hotel-crd payment-cost">${hotel.op4} Per Day</p>
                    </div>
                </div>
            </div>
                `
                );
                $('.hotel-card-parent>:last-child').click(() => {
                    sessionStorage.setItem("selectHotel", JSON.stringify(hotel));
                });
                //return hotel;
                this.hotelDetailReturn(hotel);

            }
        }).catch(er => {
            console.log(er);
        });
    }

    hotelDetailReturn(hotel) {          //add the hotel chargers in to the
        $('.hotel-card-parent>:last-child').click(() => {
            $('.txt-hotel-Price').text(hotel.op4);
        });


    }


}

new HotelController();