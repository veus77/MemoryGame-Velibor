
$(function () {

// MEMORY GAME

    function countDown(i) {
        $int = setInterval(function () {
            $vreme = document.getElementById("score").innerHTML = "Timer: " + i;
            i++
        }, 1000);
    }

    var ul = document.querySelector('ul');
    var li = $('ul').children();
    var $btn_start = document.getElementById("btn");


    $("#btn").on("click",function () {
        $($btn_start).hide();
        $('li').addClass('hide');
        for (var i = ul.children.length; i >= 0; i--) {
            ul.appendChild(ul.children[Math.random() * i | 0]);
        }
        countDown(1);
        $("#btn").on("click",function () {

            $('li').removeClass('show selected');
            $('li').addClass('hide');
            for (var i = ul.children.length; i >= 0; i--) {
                ul.appendChild(ul.children[Math.random() * i | 0]);
            }
            countDown(1);
        });
    });

    var $clickOne;
    var $clickTwo;

    function memory() {

        $(".slide").unbind().on("click",function (e) {

            $clickOne = $(this).attr('id');
            $clickOneObject = $(this);
            $(this).addClass("selected");

            $(".slide").not(".selected").unbind().on("click",function (e) {
                $clickTwo = $(this).attr('id');
                $clickTwoObject = $(this);
                $(this).addClass("selected");

                setTimeout(function () {
                    if ($clickOne === $clickTwo) {
                        $clickTwoObject.removeClass('hide').addClass('show');
                        $clickTwoObject.siblings('.selected').removeClass('hide').addClass('show');
                    } if ($('.hide').length < 1){
                        alert("Your score is :" + $vreme  + "s");
                        clearInterval($int);
                        $($btn_start).show().html("PLAY AGAIN!");
                    }
                    else {
                        $clickOneObject.removeClass('selected');
                        $clickOneObject.siblings('.selected').removeClass("selected");
                    }
                },500);
                memory();
            });
        });
    }
    memory();


// END MEMORY GAME


});

