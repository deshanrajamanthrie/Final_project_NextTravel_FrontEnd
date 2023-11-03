import {User} from "../model/User.js";

export class UserFormController {

    constructor() {
        $("#btn-user-register-now").click(this.saveUser.bind(this));

    }

    static url = "http://deshanz-vivobook:8080/api/v1/consume/users";

    saveUser() {
        alert("")
        let name = $("#txt-userName").val();
        let nic = $("#txt-usernic").val();
        let address = $("#txt-useraddress").val();
        let email = $("#txt-userEmail").val();
        let password = $("#txt-user-passeword").val();



        let user = new User(name, nic, address, email, password);
        $.ajax({
            url: UserFormController.url,
            method: "POST",
            contentType: "application/json",
            data: JSON.stringify(user),  //convert Json Object
            dataType: "json",
            success: function (resp) {

                if(resp.code===200){
                    Swal.fire(
                        'Register Successfully!',
                        'Enjoy Our Paradise',
                        'success'
                    )
                }else{
                    Swal.fire('Failed Register Try Again!')
                }

            }


        });

    }

}

new UserFormController();