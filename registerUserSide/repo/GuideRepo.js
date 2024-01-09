import {Repo} from "./Repo.js";

export class GuideRepo {
    constructor() {
        this.url = "http://localhost:8080/";
        let repo = new Repo();

    }


    get(path) {
        return new Promise((resolve, reject) => {
            $.ajax({
                method: "GET",
                url: this.url+path,
                contentType: "application/json",
                dataType: "json",
                async: false,
                headers: {
                    'X-Requested-With': 'XMLHttpRequest',
                },
                success: (data, status, resp) => {
                    data = {
                        "body": data.data,
                        "status": status,
                        "resp": resp,
                    }
                    console.log("Dataaaa:"+data);
                    resolve(data)
                },
                error: (er) => {
                    reject(er);
                }

            });

        })
    }

}