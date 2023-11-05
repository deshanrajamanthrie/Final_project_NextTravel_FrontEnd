import {VehicleBrand} from "../../admin/model/VehicleBrand.js";

export class VehicleController {
    constructor() {
        this.vehicleLoad()

    }


    static url = "http://localhost:8080/api/v1/consume/brand";

    vehicleLoad() {
        $.ajax({
            url: VehicleController.url + "/search?id=1",
            method: "GET",
            dataType: "json",
            success: function (resp) {

                if (resp.code === 200) {
                    $("#car-id-1").append(resp.data.vehicleId);
                    $("#car-name-1").append(resp.data.brandName)
                }

            }
        })
        /*-----------*/
        $.ajax({
            url:VehicleController.url + "/search?id=2",
            method: "GET",
            dataType: "json",
            success: function (resp) {

                if (resp.code === 200) {
                    $("#car-id-2").append(resp.data.vehicleId);
                    $("#car-name-2").append(resp.data.brandName)
                }

            }
        })
        /*---------------*/
        $.ajax({
            url:VehicleController.url + "/search?id=3",
            method: "GET",
            dataType: "json",
            success: function (resp) {

                if (resp.code === 200) {
                    $("#car-id-3").append(resp.data.vehicleId);
                    $("#car-name-3").append(resp.data.brandName)
                }

            }
        })
        /*--------------------*/
        $.ajax({
            url:VehicleController.url + "/search?id=4",
            method: "GET",
            dataType: "json",
            success: function (resp) {
                console.log(resp)
                if (resp.code === 200) {
                    $("#car-id-4").append(resp.data.vehicleId);
                    $("#car-name-4").append(resp.data.brandName)
                }

            }
        })

    }




}

new VehicleController();


