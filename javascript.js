$(document).ready(function() {
    $("#my-element-id").one("mouseover", function() {
        $(this).addClass("permanent");
    });
});