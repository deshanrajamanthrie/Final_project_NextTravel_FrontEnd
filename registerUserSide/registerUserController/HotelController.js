import {Hotel} from "../../admin/model/Hotel.js";

export class HotelController {
    constructor() {
        this.loadHotel();
    }

    static url = "http://localhost:8080/api/v1/consume/hotel";

    loadHotel() {
        $.ajax({
            url: HotelController.url + "?id=H008",
            method: "GET",
            dataType: "json",
            success: function (resp) {
                if (resp.code === 200) {
                    console.log(resp.data);
                    $("#hotel-id-01").append(resp.data.id);
                    $("#hotel-name-01").append(resp.data.name);
                }


            }
        });
        /*------*/
        $.ajax({
            url: HotelController.url + "?id=H009",
            method: "GET",
            dataType: "json",
            success: function (resp) {
                if (resp.code === 200) {
                    console.log(resp.data);
                    $("#hotel-id-02").append(resp.data.id);
                    $("#hotel-name-02").append(resp.data.name);
                }


            }
        });
        /*--------*/
        $.ajax({
            url: HotelController.url + "?id=H010",
            method: "GET",
            dataType: "json",
            success: function (resp) {
                if (resp.code === 200) {
                    console.log(resp.data);
                    $("#hotel-id-03").append(resp.data.id);
                    $("#hotel-name-03").append(resp.data.name);
                }
            }
        });
    }


}

new HotelController();