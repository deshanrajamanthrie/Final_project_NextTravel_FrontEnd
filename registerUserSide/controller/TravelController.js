import {TravelService} from "../service/TravelService.js";



export class TravelController {
    constructor() {
        this.travelservice = new TravelService();
        $('.btn-ConformTravel').click(this.travelHandler.bind(this));



    }



    travelHandler() {
        alert("Moodi")
        let guide = sessionStorage.getItem("guides");
        let guideObjId = JSON.parse(guide);
        console.log(guideObjId.id);


        let countDays = this.timeCalculation();

        let Travel = {
            travelArea: $('.hotel-location-Action').val(),
            dates: [{
                startDate: $(".date-startDay").val(),
            }, {
                endDate: $(".date-EndDay").val()
            }
            ],
            countDays: Number.parseInt(countDays),
            guide: guideObjId.id,
            noChildren: Number.parseInt($('.txt-childCount').val()),
            noAdult: Number.parseInt($('.txt-AdultCount').val()),
            headCount: Number.parseInt($('.txt-childCount').val()) + Number.parseInt($('.txt-AdultCount').val()),
            packageCategory: {
                id: "PACK001"
            }
        }



        sessionStorage.setItem("travel", JSON.stringify(Travel));
        this.travelservice.postTravel(Travel);

        this.addCountDays();
        //this.totalOfPayment();


    }


    timeCalculation() {
        let countDay = (new Date($(".date-EndDay").val()) - new Date($(".date-startDay").val()))
            / (1000 * 3600 * 24);
        return Math.round(countDay);

    }



    addCountDays(){
        let travel = sessionStorage.getItem("travel");
        let jsonTravelObj=JSON.parse(travel);
        $('.txt-countDays').text((jsonTravelObj.countDays));
    }




}

new TravelController();