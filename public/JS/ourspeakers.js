const paginum = (page) => {
    $("#pagination-container").pagination({
        dataSource: function (done) {
            var result = [];
            for (var i = 1; i < 34; i++) {
                result.push("image" + i);
            }
            done(result);
        },
        locator: "items",
        totalNumberLocator: function (response) {
            // you can return totalNumber by analyzing response content
            return Math.floor(Math.random() * (1000 - 100)) + 100;
        },
        pageSize: page,
        className: "paginationjs-theme-red paginationjs-big",
        ajax: {
            beforeSend: function () {
                $("#data-container").html("Loading images from TEDx...");
            },
        },
        callback: function (data, pagination) {
            var html = "";
            $.each(data, function (index, detail) {
                html += `<div class="gridbox-${index} girdbox">
                      <img src="../../public/images/ourspeakers/speakers/${detail}.jpg" class="speakerimg" alt="${detail}">
                      </div>`;
            });
            $("#data-container").html(html);
        },
    });
};

window.addEventListener("resize", () => {
    if (window.screen.width < 920) {
        paginum(8);
    } else {
        paginum(9);
    }
});

if (window.screen.width < 920) {
    paginum(8);
} else {
    paginum(9);
}
