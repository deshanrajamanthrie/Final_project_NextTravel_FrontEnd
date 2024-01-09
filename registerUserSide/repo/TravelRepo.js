

export class TravelRepo {

    constructor() {
        this.url = "http://localhost:8080";
    }


    save(path, travel) {
        console.log(travel.toString())
        return new Promise((resolve, reject) => {
            $.ajax({
                method: "POST",
                url: this.url + path,
                contentType: "application/json",
                dataType: "json",
                async: false,
                data: JSON.stringify(travel),
                headers: {
                    'X-Requested-With': 'XMLHttpRequest',
                },
                success: function (data, status, resp) {
                    alert(data)
                    data = {
                        "body": data.data,
                        "status": status,
                        "resp": resp,

                    }
                    // alert(data.body.data)
                    resolve(data);
                },
                error: function (er) {
                    reject(er);
                    console.log(er)
                }
            });


        });


    }

}