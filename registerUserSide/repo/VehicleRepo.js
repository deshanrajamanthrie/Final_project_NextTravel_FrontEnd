

export class VehicleRepo {
    constructor() {
        this.url = "http://localhost:8080/";
    }



    get(path, id) {
        return new Promise((resolve, reject) => {
            $.ajax({
                method: "GET",
                contentType: "application/json",        //request content body convert to Jason
                url:this.url+path,
                dataType:"json",
                async:false,
                headers: {
                    'X-Requested-With': 'XMLHttpRequest',
                },
                success:function (data,status,resp) {
                    data={
                        "body":data.data.vehicleBrands,
                        "status":status,
                        "resp":resp,
                    }
                    console.log("Hello data"+data)
                    resolve(data);

                },
                error:function (er){
                    reject(er);
                }


            });


        });

    }


}