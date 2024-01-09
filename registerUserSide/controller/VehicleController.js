import {VehicleService} from "../service/VehicleService.js";


export class VehicleController {
    constructor() {
        this.vehicleService = new VehicleService();
        this.loadAllVehicleBrands();
    }

    midRange() {
        let promise = this.vehicleService.getVehicles("Mid-Range");
        this.test(promise);
    }

    regular() {
        let promise = this.vehicleService.getVehicles("Economy");
        this.test(promise);
    }
    luxury() {
        let promise = this.vehicleService.getVehicles("Luxury");
        this.test(promise);
    }
    superLuxury() {
        let promise = this.vehicleService.getVehicles("Super-Luxury");
        this.test(promise)
    }
    test(promise) {
        promise.then(data => {
            console.log(data);
            $(".vehicle-card-parent").html('');

            for (const vehicle of data.body) {
                console.log("All Vehicle" + vehicle)
                $('.vehicle-card-parent').append(
                    `<div class="vehicle-card-new">
                            <img class="vehicle-image" src="data:image/png;base64,${vehicle.images}" alt="wgon ar">
                            <div class="vehicle-card-body">
                                <h5 style="margin-right: 5px;margin-top: 2px;" class="card-title-vehicle">${vehicle.brandName}</h5>
                                <input type="checkbox" name="vehicle1" value="#">
                            </div>
                            <div class="vehicle-card-body">
                                <h5 style="margin: 0" class="rate-hotel">Seat Capacity</h5>
                                <p class="data-hotel-crd">${vehicle.seat}</p>
                            </div>
                            <div class="vehicle-card-body">
                                <h5  style="margin: 0" class="rate-hotel">Availble Vehicle</h5>
                                <p class="data-hotel-crd">${vehicle.qty}</p>
                            </div>
                            <div class="vehicle-card-body">
                                <h5  style="margin: 0" class="rate-hotel">Fuel For 1l</h5>
                                <p class="data-hotel-crd">${vehicle.fuel1km}km</p>
                            </div>
                            <div class="vehicle-card-body">
                                <h5 style="margin: 0" class="rate-hotel">Fee One Day</h5>
                                <p class="data-hotel-crd payment-cost">Rs.${vehicle.feeForOneDay}.00/=</p>
                            </div>
                        </div>`
                );
                $(".vehicle-card-parent>:last-child").click(() => {
                    sessionStorage.setItem("vehicles", JSON.stringify(vehicle));
                });
                this.vehicleDetailReturn(vehicle);
            }
        });


    }


    loadAllVehicleBrands() {
        $('#btn-regular-category').click(this.regular.bind(this));
        $('#btn-midLevel-category').click(this.midRange.bind(this));
        $('#btn-luxury-category').click(this.luxury.bind(this));
        $('#btn-super-Luxury-category').click(this.superLuxury.bind(this));
    }

    vehicleDetailReturn(vehicle) {
        $(".vehicle-card-parent>:last-child").click(() => {
            let vehicleFee = $('.txt-Vehicle-Price').text(vehicle.feeForOneDay);
            return vehicleFee;
        })

    }


}

new VehicleController();