

    
// $(document).on("scroll", function () {
//     if (isScrolledIntoView($elem, $window)) {
//     $('.img-left').addClass ('add-animation');
//     console.log("now you see me");
//     }
// });

$(document).on("scroll", function () {
        if ( isScrolledIntoView()){
            var $elem = $("#img-left"); 
            $elem.addClass("add-animation");
            $(".characters > span").addClass("add-animation1");
            $(".number-jersey").addClass("add-animation1");
        }
        if (isScrolledIntoViewWriting()){
            var $elem1 = $("#letter"); 
            $elem1.addClass("type-writer");
        }
        if (isScrolledIntoViewWriting() == false){
            var $elem1 = $("#letter"); 
            $elem1.removeClass("type-writer");
        }
    }); 
function isScrolledIntoView() {
        var $window = $(window);
        var $elem = $("#img-left")
        var docViewTop = $window.scrollTop();
        var docViewBottom = docViewTop + $window.height();
        var elemTop = $elem.offset().top;
        var elemBottom = elemTop + $elem.height();
        return ( docViewBottom >= elemTop && docViewBottom <= elemBottom);
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