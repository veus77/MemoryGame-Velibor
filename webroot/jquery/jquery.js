
$(function () {

// MEMORY GAME

    var ul = document.querySelector('ul');
    var li = $('ul').children();

    $("#btn").on("click",function () {

        $('li').css({"filter":"brightness(1%)","cursor":"pointer"});
        for (var i = ul.children.length; i >= 0; i--) {
            ul.appendChild(ul.children[Math.random() * i | 0]);
        }
    });

    var $clickOne;
    var $clickTwo;

    function memory() {

        $(".slide").unbind().on("click",function (e) {

            $clickOne = $(this).attr('id');
            $clickOneObject = $(this);
            console.log("first " + $clickOne);
            $(this).addClass("selected");

            $(".slide").unbind().on("click",function (e) {
                $clickTwo = $(this).attr('id');
                $clickTwoObject = $(this);
                $(this).addClass("selected");
                console.log("second " + $clickTwo);

                setTimeout(function () {
                    if ($clickOne === $clickTwo) {
                        console.log("same!");
                        $clickTwoObject.addClass('hide');
                        $clickTwoObject.siblings('.selected').addClass('hide');
                    }
                    else {
                        $clickOneObject.removeClass('selected');
                        $clickOneObject.siblings('.selected').removeClass("selected");
                        console.log("not same!");
                    }
                },900);
                memory();

            });
        });

    }
    memory();

// END MEMORY GAME

});

