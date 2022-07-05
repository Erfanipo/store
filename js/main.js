var countDownDate = new Date("september 29, 2022 15:37:25").getTime();

var x = setInterval(function() {

    var now = new Date().getTime();

    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / (1000));

    // document.getElementById("demo").innerHTML ='<span id="day">'+ days + '</span>' + '<span id="hours">'+ hours + '</span>'
    // + '<span id="minutes">'+ minutes + '</span>' + '<span id="seconds">' + seconds + '</span>';
    var z = document.getElementsByClassName("demos");
    for (var i = 0; i < z.length; i++) {
        z[i].innerHTML =
        '<span id="day">' +
        days +
        '</span>' +
        '<span id="hours">' +
        hours +
        '</span>' +
        '<span id="minutes">' +
        minutes +
        '</span>' +
        '<span id="seconds">' +
        seconds +
        '</span>';
    }

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "";
        var y = document.getElementsByClassName("demos");
        for (var i = 0; i < z.length; i++) {
            y[i].innerHTML = "";
        }
        // document.getElementById("after-expire").setAttribute("id","offer-expire-text");
        var g = document.getElementsByClassName("after-expire");
        for (var i = 0; i < z.length; i++) {
            g[i].classList.add("offer-expire-text");
        }
        // document.getElementById("offer-expire-text-inner").innerHTML = "پیشنهاد ویژه این محصول به پایان رسیده!";
        var d = document.getElementsByClassName("offer-expire-text-inner");
        for (var i = 0; i < z.length; i++) {
            d[i].innerHTML = "پیشنهاد ویژه این محصول به پایان رسیده!";
        }
        // document.getElementById("offer-ended").style.filter = "blur(2px)";
        var t = document.getElementsByClassName("offer-ended");
        for (var i = 0; i < z.length; i++) {
            t[i].style.filter = "blur(2px)";
        }
    }
}, 1000);

$('.owl-carousel').owlCarousel({
    rtl: true,
    loop:true,
    margin:0,
    autoplsy: false,
    nav:true,
    slideBy: 2,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});