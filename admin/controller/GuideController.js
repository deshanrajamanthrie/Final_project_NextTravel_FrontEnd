import {Guide} from "../model/Guide.js";

export class GuideController {

    constructor() {
        this.loadAllGuide();
        $("#btn-Package-save").click(this.saveGuide.bind(this));

    }


    static url = "http://deshanz-vivobook:8080/api/v1/mainGuide";

    saveGuide() {
        let id = $("#txtGuideId").val();
        let name = $("#txtGuideName").val();
        let nic = $("#txtGuideNic").val();
        let num1 = $("#txtGuideNum1").val();
        let address = $("#txtGuideAddress").val();
        let value = $("#txtGuideValue").val();



    }


    loadAllGuide() {
        $.ajax({
            url: GuideController.url,
            method: "GET",
            dataType: "json",
            success: function (resp) {
                $("#tbl-Guide-tbody").empty();
                for (const guide of resp.data) {
                    let row = `<tr><td>${guide.id}</td><td>${guide.name}</td><td>${guide.nic}</td><td>${guide.num1}</td><td>${guide.address}</td><td>${guide.value}</td></tr>`;
                    $("#tbl-Guide-tbody").append(row);
                    $("#tbl-Guide-tbody>:last-child").click(function () {
                        let id = $(this).children().eq(0).text();
                        let name = $(this).children().eq(1).text();
                        let nic = $(this).children().eq(2).text();
                        let num1 = $(this).children().eq(3).text();
                        let address = $(this).children().eq(4).text();
                        let value = $(this).children().eq(5).text();

                        $("#txtGuideId").val(id);
                        $("#txtGuideName").val(name);
                        $("#txtGuideNic").val(nic);
                        $("#txtGuideNum1").val(num1);
                        $("#txtGuideAddress").val(address);
                        $("#txtGuideValue").val(value);

                    });
                }
            }
        })
    }
}

new GuideController();