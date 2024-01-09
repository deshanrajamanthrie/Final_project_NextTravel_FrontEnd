export class BookingRepo {
    constructor() {
        this.url = "http://localhost:8080";
    }

    save(path, booking) {
        console.log('Booking Path'+path);
        console.log("Booking : "+booking)
        return new Promise((resolve, reject) => {
            $.ajax({
                method: "POST",
                url: this.url + path,
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                async: false,
                data: JSON.stringify(booking),
                headers: {
                    'X-Requested-With': 'XMLHttpRequest',
                },
                success: function (data, status, resp) {
                    alert(data.code)
                    data = {
                        "body": data.data,
                        "status": status,
                        "resp": resp
                    }
                    resolve(data);
                },
                error: function (er) {
                    reject(er);
                    console.log(er);

                }
            })

        });

    }


}