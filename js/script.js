

    
// $(document).on("scroll", function () {
//     if (isScrolledIntoView($elem, $window)) {
//     $('.img-left').addClass ('add-animation');
//     console.log("now you see me");
//     }
// });

$(document).on("scroll", function () {
        if ( isScrolledIntoView()){
            var $elem = $("#img-left"); 
            var $right = $("#front-jersey-container"); 
            $elem.addClass("add-animation");
            $right.addClass("add-animation2");
            $(".characters > span").addClass("add-animation1");
            $(".number-jersey").addClass("add-animation1");
        }
        if (isScrolledIntoViewWriting()){
            var $elem1 = $("#letter"); 
            $elem1.addClass("type-writer");
        }
        if (isScrolledIntoViewWriting() == false){
            var $elem1 = $("#letter"); 
            var $right = $("#front-jersey-container"); 
            $elem1.removeClass("type-writer");
            $right.removeClass("add-animation2");
        }
    }); 
function isScrolledIntoView() {
        var $window = $(window);
        var $elem = $("#img-left")
        var docViewTop = $window.scrollTop();
        var docViewBottom = docViewTop + $window.height();
        var elemTop = $elem.offset().top;
        var elemBottom = elemTop + $elem.height();
        return ( docViewBottom >= elemTop );
}
function isScrolledOutView() {
    var $window = $(window);
    var $elem = $("#img-left")
    var docViewTop = $window.scrollTop();
    var docViewBottom = docViewTop + $window.height();
    var elemTop = $elem.offset().top;
    var elemBottom = elemTop + $elem.height();
    return ((elemBottom >docViewBottom) && (elemTop < docViewTop));
}
function isScrolledIntoViewWriting (){
    var $window = $(window);
        var $elem = $("#changing-color"); 
        var docViewTop = $window.scrollTop();
        var docViewBottom = docViewTop + $window.height();
        var elemTop = $elem.offset().top;
        var elemBottom = elemTop + $elem.height();
        return ( docViewTop >= elemTop);
}