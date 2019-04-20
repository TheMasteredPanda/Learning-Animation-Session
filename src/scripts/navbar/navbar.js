$(function () {
    $(".navbar-button").click(function () {
        let button = $(this);
        let container = $(`#${$(this).attr('container')}`);
        let activeContainer = $(".container").filter(function (entry) {
            if (entry === undefined) return;
            let element = $(".container").eq(entry);
            if (element.css('display') === 'none') return;
            return element;
        });

        if (activeContainer !== null) {
            activeContainer.css("display", "none");
        }

        container.css("display", "block");
    });
});