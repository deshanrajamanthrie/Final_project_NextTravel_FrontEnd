import {User} from "../model/User.js";

export class UserFormController {

    constructor() {
        $("#btn-user-register-now").click(this.saveUser.bind(this));
        $("#btn-login-user").click(this.passwordCheck.bind(this));

    }

    static url = "http://deshanz-vivobook:8080/api/v1/consume/user";


    passwordCheck() {

        let emailval = $("#txt-login-email").val();
        let pswval = $("#txt-login-psw").val();

        let email = "deshan@gmail.com";
        let psw = "1234";

        if (email === emailval && psw === pswval) {
            Swal.fire(
                'Login Successfully!',
                'Enjoy Next Travel',
                'success'
            );
            $(location).prop("href", "./registerUserSide/index.html");
        }else {
            Swal.fire('Login Failed! Please Check Your User name And Password!');
        }


        /*$.ajax({
            url: UserFormController.url + "/myEmail?email=" + $("#txt-login-email").val(),
            method: "GET",
            dataType: "json",
            headers: {
                "Authorization": "Basic " + window.btoa($("#txt-login-email").val() + ":" + $("#txt-login-psw").val())
            },
            success: function (data, status, resp) {
                alert("Success");
                let autho = resp.getResponseHeader("Authorization");
                localStorage.setItem("auth", autho);

                console.log(data.code);
                if (data.code === 200) {

                    Swal.fire(
                        'Login Successfully!',
                        'Enjoy Next Travel',
                        'success'
                    );
                    $(location).prop("href", "../registerUserSide/index.html");
                }

            },


        });*/

    }


    saveUser() {

        let name = $("#txt-userName").val();
        let nic = $("#txt-usernic").val();
        let address = $("#txt-useraddress").val();
        let email = $("#txt-userEmail").val();
        let password = $("#txt-user-passeword").val();


        let user = new User(name, nic, address, email, password);
        $.ajax({
            url: UserFormController.url + "/register",
            method: "POST",
            contentType: "application/json",
            data: JSON.stringify(user),  //convert Json Object
            dataType: "json",
            success: function (resp) {
                if (resp.code === 200) {
                    Swal.fire(
                        'Register Successfully!',
                        'Enjoy Our Paradise',
                        'success'
                    )
                } else {
                    Swal.fire('Failed Register Try Again!')
                }

            }


        });
    }

}

new UserFormController();