import {Package} from "../model/Package.js";


export class PackageCategoryController {
    constructor() {
        this.loadAllPackageCategory();

    }

    loadAllPackageCategory() {

        let urlOne = "http://localhost:8080/api/v1/consume/category?id=PACK001";
        $.ajax({
            url: urlOne,
            method: "GET",

            success: function (resp) {
                if (resp.code === 200) {
                    console.log(resp.data);
                    $(".e-categoryId").append(resp.data.id);
                    $(".e-categoryName").append(resp.data.category);
                }
            }
        });
        //////////
        let urlTwo = "http://localhost:8080/api/v1/consume/category?id=PACK002";
        $.ajax({
            url: urlTwo,
            method: "GET",

            success: function (resp) {
                if (resp.code === 200) {
                    console.log(resp.data);
                    $(".m-categoryId").append(resp.data.id);
                    $(".m-categoryName").append(resp.data.category);
                }
            }
        });
        ///////////////
        let urlThree = "http://localhost:8080/api/v1/consume/category?id=PACK003";
        $.ajax({
            url: urlThree,
            method: "GET",

            success: function (resp) {
                if (resp.code === 200) {
                    console.log(resp.data);
                    $(".l-categoryId").append(resp.data.id);
                    $(".l-categoryName").append(resp.data.category);
                }
            }
        });
        ///////////////
        let urlFour = "http://localhost:8080/api/v1/consume/category?id=PACK004";
        $.ajax({
            url: urlFour,
            method: "GET",

            success: function (resp) {
                if (resp.code === 200) {
                    console.log(resp.data);
                    $(".s-categoryId").append(resp.data.id);
                    $(".s-categoryName").append(resp.data.category);
                }
            }
        });



    }


}


new PackageCategoryController();