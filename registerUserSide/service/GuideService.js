import {GuideRepo} from "../repo/GuideRepo.js";

export class GuideService {

    constructor() {
        this.guideRepo = new GuideRepo();
     //   this.path = "guide/api/v1/guide";
    }

    getGuide() {
      return this.guideRepo.get(this.path);

    }


}