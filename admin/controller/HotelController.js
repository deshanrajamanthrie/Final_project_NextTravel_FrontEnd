import {Hotel} from "../model/Hotel.js";

export class HotelController {
    constructor() {
        this.loadAllHotels();
        $("#btn-save-hotel").click(this.saveHotel.bind(this))
    }


    saveHotel() {

        let id = $("#txtHotel-id").val();
        let name = $("#txtHotel-name").val();
        let starRate = $("#txtStarRate").val();
        let location = $("#txtHotelLocation").val();
        let email = $("#txtHotelEmail").val();
        let contactNum1 = $("#txtContactNum1").val();
        let contactNum2 = $("#txtContactNum2").val();
        let pets = $("#txtPetsAllow").val();
        let op1 = $("#txtHotelOp1").val();
        let op2 = $("#txtHotelOp2").val();
        let op3 = $("#txtHotelOp3").val();
        let op4 = $("#txtHotelOp4").val();

        let contacts=[];
        contacts[0]=[email,Number.parseInt(contactNum1),Number.parseInt(contactNum2)]

        /*let contacts = [email, contactNum1, contactNum2];
         let contacts[0]*/

        let hotel = new Hotel(id, name,Number.parseInt(starRate),location, contacts,  pets, Number.parseInt(op1),Number.parseInt(op2),Number.parseInt(op3),Number.parseInt(op4));
       console.log(hotel)
        let postUrl = "http://deshanz-vivobook:8080/api/v1/hotel/consume";
        $.ajax({
            url: postUrl,
            method: "POST",
            contentType: "application/json",
            data: JSON.stringify(hotel),   //java Script obj convert To Json Object
            success: function (resp) {
                if(resp.code===200){
                   /* Swal.fire(resp.message);*/
                    alert(resp.message);
                }else {
                    alert(resp.message);
                }
            }
        });


    }

    /*Load All Data */
    loadAllHotels() {
        const url = "http://deshanz-vivobook:8080/api/v1/hotel/consume";
        $.ajax({
            url: url,
            method: "GET",
            dataType: "json",
            success: function (resp) {
                console.log(resp.data);
                $("#tbl-hotel-body").empty();
                for (const hotel of resp.data) {
                    const hotelRow = `<tr><td>${hotel.id}</td><td>${hotel.name}</td><td>${hotel.starRate}</td> <td>${hotel.location}</td> <td>${hotel.contacts[0].email}</td> <td>${hotel.contacts[0].contactNum1}</td> <td>${hotel.contacts[0].contactNum2}</td><td>${hotel.pets}</td><td>${hotel.op1}</td><td>${hotel.op2}</td><td>${hotel.op3}</td><td>${hotel.op4}</td></tr>`;
                    $("#tbl-hotel-body").append(hotelRow);
                }
            }

        });


    }


}

let hotelController = new HotelController();