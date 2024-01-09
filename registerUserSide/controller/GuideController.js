import {GuideService} from "../service/GuideService.js";

export class GuideController {
    constructor() {
        this.guideService = new GuideService();
        this.getAllGuide();
    }

    getAllGuide() {
        let promise = this.guideService.getGuide();

        promise.then(data => {
            $(".guide-cards-Parent").html('');
            for (const guide of data.body) {
                console.log(guide)

                $(".guide-cards-Parent").append(
                    `
                                     <div class="card guide-card" style="width:15.88vw;">
                                            <img src="/registerUserSide/assets/img/man.png" class="card-img-top card-image-guide" alt="img">

                                            <div class="card-title-guide">
                                                <h5 class="card-title-hotel">${guide.name}</h5>
                                                <input style="margin-bottom: 7px" type="checkbox" name="vehicle1" value="#">
                                            </div>
                                            <div class="vehicle-card-body">
                                                <h5 style="margin: 0" class="rate-hotel">Address</h5>
                                                <p class="data-hotel-crd">${guide.address}</p>
                                            </div>
                                            <div class="vehicle-card-body">
                                                <h5 style="margin: 0" class="rate-hotel">Guide Nic</h5>
                                                <p class="data-hotel-crd">${guide.nic}</p>
                                            </div>
                                            <div class="vehicle-card-body">
                                                <h5 style="margin: 0" class="rate-hotel">Contact</h5>
                                                <p class="data-hotel-crd">${guide.num1}</p>
                                            </div>
                                            <div class="vehicle-card-body">
                                                <h5 style="margin: 0" class="rate-hotel">Payment</h5>
                                                <p class="data-hotel-crd payment-cost">Rs.${guide.value}/= per Day</p>
                                            </div>
                                        </div>`
                );
                this.guideValueStore(guide);

                this.getGuideDetail(guide);
            }
        });
    }

    guideValueStore(guide) {   //store the session storage
        $(".guide-cards-Parent >:last-child").click(() => {
            sessionStorage.setItem("guides", JSON.stringify(guide));
        });
    }

    getGuideDetail(guide) {
        $('.guide-cards-Parent>:last-child').click(() => {
            $('.txt-guide-price').text(guide.value)
        })
    }

}

new GuideController();

