$(document).ready(function () {
    $(".sideMenuToggler").on("click", function(){
        $(".wrapper").toggleClass("active");
    });
});
$(document).ready(function () {
    var adjustSidebar = function(){
        $(".sidebar").slimScroll({
            height: document.documentElement.clientHeight - $(".navbar").outerHeight()
        });
    };
});




