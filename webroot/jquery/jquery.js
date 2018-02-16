
$(function () {
    // $("#panel1").fadeUp(2000).fadeDown(1000);
    // $("#panel2").fadeToggle(2000).fadeToggle(1000);
    // $("#panel3").hide(2000).delay(1000).show(1000);
    // $("#panel4").css({opacity:0.5});
//     $('.btn').on('click',function () {
//         var panelId = $(this).attr('data-panel');
//         $('#'+panelId).fadeToggle();
//     }) ;
//
//next btn

    //SIMPLE SLIDER

    // var item = $('.slide');
    // var funkcija = setInterval(myCallback,2000);
    // var clear = $('.slider-images');
    // var play;

//  setInterval

// function startSlider() {
//        play = setInterval(function () {
//      var nextItem = $('.slide.active').removeClass('active').next(item);
//         if (nextItem.length === 0) {
//             nextItem = item.first();
//         }
//         nextItem.addClass('active');
//     },2000);
// }

    // function stopSlider() {
    //     clearInterval(play);
    // }
    // item.on('mouseenter',stopSlider).on('mouseleave',startSlider);
    //
    // startSlider();
   //




   // next btn
    //



    // $('#next').on('click',function () {
  // var nextItem = $('.slide.active').removeClass('active').next(item);
  //       if(nextItem.length === 0){
  //     nextItem = item.first();
  // }
  //       nextItem.addClass('active');
  //   });
//
// previous btn
    //
    // $('#prev').on('click',function () {
    //     var prevItem = $('.slide.active').removeClass('active').prev(item);
    //     if (prevItem.length === 0) {
    //         prevItem = item.last();
    //     }
    //     prevItem.addClass('active');
    // });

// END - SLIDER

 //AJAX


       //  $.ajax({
       //     type: 'GET',
       //      url: 'https://learnwebcode.github.io/json-example/animals-1.json',
       //     success: function (orders) {
       //         console.log('success',orders);
       //         $.each(orders, function ( i, item) {
       //             $('#orders').append('<li>name: '+ item.name + ', species: ' + item.species + ' </li>');
       //         });
       //     },
       //      error: function () {
       //          alert('error loading orderes');
       //      }
       // });

        // var $name = $('#name');
        // var $species = $('#drink');
        //
        // $('#add-order').on('click',function () {
        //     var order = {
        //         name: $name.val(),
        //         species: $species.val(),
        //     };
        //     $.ajax({
        //        type: 'POST',
        //         url: 'https://learnwebcode.github.io/json-example/animals-1.json',
        //         data: order,
        //         success: function (newOrder) {
        //             $$nesto.append('<li> name: '+ newOrder.name +',  species: '+ newOrder.drink + '</li>');
        //
        //         }
        //     });
        // });


    // $('#add-order').on('click',function (e) {
    //     e.preventDefault();
    //     $('#ovde').load("ajax.php");
        // var newData = {
            // name: $('#myA').val()
        // };
        // $.get("ajax.php",newData,function (data) {
        //     $("#ovde").html(data);
        // });
    // });

//END-AJAX




//SLOT MASHINE

 //    var result = document.getElementById('result');
 //    var score = document.getElementById('score');
 //    var ulijevi = $('.row');
 //    var play;
 //    x = prompt("New Game, insert coin:");
 //    results = parseInt(x);
 //    results = 100;
 //    score.innerHTML = results;
 //
 //    function stopSpin() {
 //        clearInterval(play);
 //    }
 //
 // function spin1() {
 //
 //     play = setInterval(function () {
 //         $.each(ulijevi, function () {
 //             var liE = $(this).children();
 //         spin = $(liE).removeClass('active');
 //             random = liE[Math.floor(Math.random() * liE.length)];
 //         $(random).addClass('active');
 //         });
 //     },150);
 // };
 //
 //    $('#btn').on('click', function () {
 //        if(results === 0 || results < 20){
 //            alert("GAME OVER! TRY AGAIN.");
 //            x = prompt("New Game, insert coin:");
 //            results = parseInt(x);
 //            score.innerHTML = results;
 //        }
 //        spin1();
 //
 //        $('#stop').one('click', function () {
 //            stopSpin();
 //
 //            if($('.active').eq(0).attr('id') === $('.active').eq(1).attr('id') && $('.active').eq(0).attr('id') === $('.active').eq(2).attr('id')){
 //
 //                results +=50;
 //                    console.log(results);
 //               score.innerHTML = results;
 //                result.innerHTML = "Congratulations!!";
 //                $(result).css("color","green");
 //            }else{
 //                result.innerHTML = "SPIN AGAIN !!!";
 //                $(result).css("color","red");
 //                results -= 20;
 //                console.log(results);
 //                score.innerHTML = results;
 //            };
 //        });
 //    });

 //END-SLOT MASHINE






    // var to = $('li');
    //
    // console.log(to);
    //
    // var pera = $(to).val();
    //
    // console.log(pera);
    //
    // function shuffle(to) {
    //     var j, x, i;
    //     for (i = to.length - 1; i > 0; i--) {
    //         j = Math.floor(Math.random() * (i + 1));
    //         x = to[i];
    //         to[i] = to[j];
    //         to[j] = x;
    //     }
    //     return to;
    // };
    //
    // console.log(to);


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

