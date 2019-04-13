$(function () {
    $("li").click(function () {
        let button = $(this);
        let container = $(`#${$(this).attr('container')}`);
        console.log($(".container").length);
        let activeContainer = $(".container").filter(function (entry) {
            if (entry === undefined) return;
            let element = $(".container").eq(entry);
            if (element.css('display') === 'none') return;
            return element;
        });

        if (activeContainer !== null) {
            console.log(`Active container is ${activeContainer.attr('id')}.`);
            activeContainer.css("display", "none");
            console.log('Set display to none.');
        }

        console.log(`Selected container is ${container.attr('id')}`);
        container.css("display", "block");
        console.log('Changed selected container css.');
    });
});