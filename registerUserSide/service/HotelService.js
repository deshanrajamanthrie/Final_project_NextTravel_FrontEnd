import {Repo} from "../repo/Repo.js";

export class HotelService {
    constructor() {
        this.hotelRepo= new Repo();
      //  this.path='hotel/api/v1/hotel';
    }

    getHotel(location){
        return this.hotelRepo.get(this.path+"/location?location="+location+"&starRate=3");
    }




}

