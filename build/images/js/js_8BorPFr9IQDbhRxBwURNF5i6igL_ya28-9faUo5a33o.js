var $ = jQuery;

$('document').ready( function() {
    $("body").on("click",".mobilemenubutton", function (e) {
        e.preventDefault();
        $(".topmenu").toggleClass("menuclosed");
        return false;
    });

    $("body").on("click", "a[target='_blank']", function(e) {
        confirm("You are now leaving Janssen Pharmaceutica Prize. Our privacy policy is not applicable.");
    });
});;
