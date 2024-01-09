/*Button On Action*/
$(".btn-Guide-onAction").click(() => {
    $(".id01").css('display', 'block');
})

$('.btn-hotel-OnAction').click(() => {
    $('.card-system-hotel').css('display', 'flex');
});


$('#regular-category-id').css('display', 'none');
$('#midRange-category-id').css('display', 'none');
$('#luxury-category-id').css('display', 'none');
$('#superLuxury-category-id').css('display', 'none');

/*do for Single-Page*/
$("#btn-regular-category").click(() => {
    $('#regular-category-id').css('display', 'flex');
    $('#midRange-category-id').css('display', 'none');
    $('#luxury-category-id').css('display', 'none');
    $('#superLuxury-category-id').css('display', 'none');

});

$("#btn-midLevel-category").click(() => {
    $('#regular-category-id').css('display', 'none');
    $('#midRange-category-id').css('display', 'flex');
    $('#luxury-category-id').css('display', 'none');
    $('#superLuxury-category-id').css('display', 'none');
});

$('#btn-luxury-category').click(()=>{
    $('#regular-category-id').css('display', 'none');
    $('#midRange-category-id').css('display', 'none');
    $('#luxury-category-id').css('display', 'flex');
    $('#superLuxury-category-id').css('display', 'none');

});

$('#btn-super-Luxury-category').click(()=>{
    $('#regular-category-id').css('display', 'none');
    $('#midRange-category-id').css('display', 'none');
    $('#luxury-category-id').css('display', 'none');
    $('#superLuxury-category-id').css('display', 'flex');

})
