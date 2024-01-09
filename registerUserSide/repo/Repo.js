export class Repo {

    constructor() {
        this.url = "http://localhost:8080/";
    }

    save(path, data) {


    }

    get(path, id) {

        return new Promise((resolve, reject) => {
            $.ajax({
                method: "GET",
                contentType: "application/json",
                url: this.url + path,
                dataType: "json",
                async: false,
                headers: {
                    'X-Requested-With': 'XMLHttpRequest',
                },
                success: function (data, status, resp) {
                    data = {
                        "body": data.data,
                        "status": status,
                        "resp": resp,

                    }
                    resolve(data);
                },
                error: function (er) {
                    reject(er);
                }

            });
        });
    }

}