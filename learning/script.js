// $(document).ready(function() {
//     $('p').fadeOut(2000);
// });

// const { ready } = require("jquery");

// $('.button').click(function (e) { 
//     e.preventDefault();
//     $('.well').fadeOut(3000);
// });

// $('.well').hide();
// $(window).ready(function() {
//     $('.well').fadeIn(3000);
// });

// $('.button2').click(function (e) { 
//     e.preventDefault();
//     $('*').fadeOut(3000);
// });

// $('.button2').click(function (e) { 
//     e.preventDefault();
//     $("[test*='test']").fadeOut(3000);
// });

// $('.button3').click(function (e) { 
//     e.preventDefault();
//     $("[wordname ~= 'word']").fadeOut(3000);
// });

// $('.button4').click(function (e) { 
//     e.preventDefault();
//     $("[endWith $= 'name']").fadeOut(3000);
// });

// $('.button5').click(function (e) { 
//     e.preventDefault();
//     $("[startWith ^= 'word']").fadeOut(3000);
// });

// $('.button6').click(function (e) { 
//     e.preventDefault();
//     $(':button').fadeOut(3000);
// });

// const button = document.querySelectorAll('button');
// const a = document.querySelector('.button6');
// a.addEventListener('click', (e) => {
//     e.preventDefault();
//     button.forEach(btn => {
//         console.log(btn.classList[0].charAt(3));
//         setTimeout(() => {
//             $(btn).fadeOut(500*(btn.classList[0].charAt(3))); 
//         }, 1000*(btn.classList[0].charAt(3)));
//     });
// })

// $('.button6').click(function (e) { 
//     e.preventDefault();
//     $(".parent > *").fadeOut(2000);
// });

// $('.button6').click(function (e) { 
//     e.preventDefault();
//     $(".parent:contains('button')").fadeOut(3000);
// });

// $('.text').click(function (e) { 
//     e.preventDefault();
//     $("input:blur").fadeOut(3000);
// });

// $('.button6').click(function (e) { 
//     e.preventDefault();
//     $(".parent input:eq(1)").fadeOut(3000);
// });

// $('.button6').click(function (e) { 
//     e.preventDefault();
//     $(".parent *:even").fadeOut(3000);
// });
// $('.button6').click(function (e) { 
//     e.preventDefault();
//     $(".parent *:odd").fadeOut(3000);
// });

// $('.button6').click(function (e) { 
//     e.preventDefault();
//     $(".parent :file").fadeOut(3000);
// });

// $('.button6').click(function (e) { 
//     e.preventDefault();
//     $(".parent *:gt(2)").fadeOut(3000);
// });

// $('body').click(function (e) { 
//     e.preventDefault();
//     $('#panel').slideUp("slow");
// });

// $(document).ready(function () {
//     // $(".button6").dblclick(function (e) { 
//     //     e.preventDefault();
//     //     $('.parent').fadeOut(500);
//     // });

//     // $(".button6").hover(function (e) {
//     //     e.preventDefault();
//     //     $('.Btn').fadeOut(500);
//     // }, function (e) {
//     //     $('.Btn').fadeIn(500);
//     // });

//     // $(".button6").mousedown(function (e) {
//     //     e.preventDefault();
//     //     $('.btn1').fadeOut(500);
//     // });
//     // $(".button6").mouseup(function (e) {
//     //     e.preventDefault();
//     //     $('.btn1').fadeIn(500);
//     // });

//     // $(".button6").mouseenter(function (e) { 
//     //     e.preventDefault();
//     //     $('.btn1').fadeOut(500);
//     // });
//     // $(".button6").mouseleave(function (e) { 
//     //     e.preventDefault();
//     //     $('.btn1').fadeIn(1000);
//     // });

//     // $(".button6").mousemove(function (e) {
//     //     // e.preventDefault();
//     //     const pageX = e.pageX;
//     //     const pageY = e.pageY;
//     //     const total = "("+pageX+" , "+pageY+")";
//     //     $('.btn1').text(total);
//     // });

//     // $("input[type=text]").keydown(function (e) { 
//     //     const value = $("input[type=text]").val();
//     //     $('.btn1').text(value);
//     // });
//     // $("input[type=text]").keyup(function (e) { 
//     //     const value = $("input[type=text]").val().trim();
//     //     $('.btn1').text(value);
//     // });
//     // $("input[type=text]").keypress(function (e) {
//     //     const value = $("input[type=text]").val();
//     //     $('.btn1').text(value);
//     // });

//     // $("input[type=text]").keydown(function (e) { 
//     //     $(".text").text("Is typing");
//     // });
//     // $("input[type=text]").keyup(function (e) { 
//     //     setInterval(() => {
//     //         $(".text").text("");
//     //     }, 6000);
//     // });
// });


// $(document).ready(function () {
//     // $('.text').blur(function (e) { 
//     //     const tex = e.type;
//     //     $('.btn1').text(tex);
//     // });

//     // $('.text').focusout(function (e) {
//     //     const tex = e.type;
//     //     $('.btn1').text(tex);
//     // });

//     // $('.parent').focusin(function (e) {
//     //     const tex = e.type;
//     //     $('.btn1').text(tex);
//     // });

//     // $("#select").change(function (e) { 
//     //     e.preventDefault();
//     //     const tex = $("#select :selected").text();
//     //     $(".text1").val(tex);
//     // });

//     // $(".form").submit(function (e) { 
//     //     const text = $(".formInput").val().trim();
//     //     if (text) {
//     //         return;
//     //     } else {
//     //         e.preventDefault();
//     //     }
//     // });
// });

// $(window).resize(function () { 
//     $(".btn1").text($(window).width());
// });

// $(window).scroll(function () {

//     if ($(window).scrollTop() > 100) {
//         $(".navbar").addClass("navbarFix");
//     } else {
//         $(".navbar").removeClass("navbarFix");
//     }
// });

// $.holdReady(true)
// $.getScript("test.js", function (script, textStatus, jqXHR) {
//     $.holdReady(false);
// });
// $(document).ready(function() {
//     show();
// });

// $(document).ready(() => {
//     // $(".button7").on("click mouseover", () => {
//     //     prompt("age")
//     // });

//     $(".button7").on({
//         mouseenter: (e) => {
//             alert("l")
//         },
//         mouseout: (e) => {
//             $(".button7").off('mouseenter');
//         }
//     });
// });

// $(document).ready(function () {
//     $(".button7").one("click", (e) => {
//         e.preventDefault();
//         alert("l")
//     });
// });

// $(document).ready(function () {
//     $(".btn1").on("click", (e) => {
//         e.preventDefault();
//         $(".button7").trigger("click");
//     });
// });


// const button = document.querySelectorAll('.Btn');
// const a = document.querySelector('.button6');
// a.addEventListener('click', (e) => {
//     e.preventDefault();
//     button.forEach(Btn => {
//         if (Btn.currentTarget === this) {
//             alert("l")
//         }
//     });
// })

// $(function () {
//     button.forEach(Btn => {
//         $(Btn).click(function (e) {
//             e.preventDefault();
//             button.forEach(Btn => {
//                 $(Btn).css("color", "black");
//             })
//             $(Btn).css("color", "red");

//             // if (e.currentTarget === this) {
//             //     $(Btn).css("color", "red");
//             // }
//             // else {
//             //     button.forEach(Btn => {
//             //         $(Btn).css("color", "black");
//             //     })
//             // }
//         });
//     });
// })


// $(document).ready(function () {
//     // $(".btn1").click(function (e) { 
//     //     e.preventDefault();
//     //     $(".form-group").fadeOut(300);
//     // });

//     // $(".btn2").dblclick(function (e) { 
//     //     e.preventDefault();
//     //     $(".form-group").fadeOut(300);
//     // });

//     // $(".btn3").hover(function (e) { 
//     //     e.preventDefault();
//     //     $(".form-group").fadeOut(300);
//     // },function () {
//     //     $(".form-group").fadeIn(300);
//     // });

//     // $(".btn4").mousedown(function (e) { 
//     //     e.preventDefault();
//     //     $(".form-group").fadeOut(300);
//     // });

//     // $(".btn4").mouseup(function (e) { 
//     //     e.preventDefault();
//     //     $(".form-group").fadeIn(300);
//     // });


//     $(".btn1").mousemove(function (e) {
//         var pageX = e.pageX;
//         var pageY = e.pageY;
//         var total = "(" + pageX + " , " + pageY + ")";
//         $(".button6").text(total);
//     });
// });


$(document).ready(function () {
    // $("#input1").keyup(function (e) { 
    //     var text =$("#input1").val();
    //     $("#input2").val(text);
    // });

    // $("#input1").keypress(function (e) { 
    //     var text =$("#input1").val();
    //     $("#input2").val(text);
    // });

    $("#input1").keydown(function (e) { 
            $(".para").text("is typing ...")
    });

    $("#input1").keyup(function (e) { 
        setInterval(() => {
            $(".para").text("")
        }, 1000);
    });
});