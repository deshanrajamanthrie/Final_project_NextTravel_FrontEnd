import {TravelRepo} from "../repo/TravelRepo.js";


export class TravelService {
    constructor() {
        this.travelRepo = new TravelRepo();
        this.path = "/travel/api/v1/travel";
    }

    postTravel(travel) {
        return this.travelRepo.save(this.path, travel);
    }

}