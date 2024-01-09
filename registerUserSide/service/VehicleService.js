import {VehicleRepo} from "../repo/VehicleRepo.js";

export class VehicleService {
    constructor() {
        this.vehicleRepo = new VehicleRepo();
        this.path = 'vehicle/api/v1/cate';
    }

    getVehicles(type) {
        let promise = this.vehicleRepo.get(this.path + "/search?type=" + type);
        console.log(promise);
        return promise;
    }


}