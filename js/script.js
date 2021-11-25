$(document).ready(function(){
let showClosedCategory=function(){
    $(".show-men-category").hover(function(){
        $(".men-category").toggle({});
    });
    $(".show-women-category").hover(function(){
        $(".women-category").toggle({});
    });
    $(".show-other-category").hover(function(){
        $(".other-category").toggle({});
    });
};
  
showClosedCategory();

});