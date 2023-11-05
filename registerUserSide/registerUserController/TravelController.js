class TravelController {
    constructor() {
        $("#btn-save-Travel").click(this.saveTravel.bind(this));

    }

    static url = "http://localhost:8080/api/v1/consume/travel";

    saveTravel() {
        let Travel = {
            travelArea: $("#txt-travelArea").val(),
            dates: [{
                startDate: $("#txtStartDate").val()
            }, {
                endDate: $("#txtEndDate").val()
            }
            ],
            countDays: Number.parseInt($("#txt-countDay").val()),
            guide: $("#txt-Guide").val(),
            noChildren: Number.parseInt($("#txt-noChildren").val()),
            noAdult: Number.parseInt($("#txt-noAdult").val()),
            headCount: Number.parseInt($("#txt-headCount").val()),
            paidValue: Number.parseInt($("#txt-PaidValue").val()),
            packageCategory: {
                id: "PACK001"
            }
        }
            console.log(Travel)


        $.ajax({
            url: TravelController.url,
            method: "POST",
            contentType: "application/json",
            data: JSON.stringify(Travel),
            success: function (resp) {
                if (resp.code === 200) {
                    Swal.fire(resp.massage);

                } else {
                    Swal.fire(resp.massage);
                }

            }

        });
    }

}

new TravelController();