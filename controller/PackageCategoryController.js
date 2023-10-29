import {Package} from "../model/Package.js";


export class PackageCategoryController {
    constructor() {
        this.loadAllPackageCategory();

    }

    loadAllPackageCategory() {

        let url = "http://localhost:8080/api/v1/consume/category?id=PACK001";
        $.ajax({
            url: url,
            method: "GET",

            success: function (resp) {
                if (resp.code === 200) {
                    console.log(resp.data);
                    $(".e-categoryId").append(resp.data.id);
                    $(".e-categoryName").append(resp.data.category);


                }


            }

        });

    }


}


new PackageCategoryController();