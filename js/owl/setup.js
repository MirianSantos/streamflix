$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay:true,
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
})

function unmute() {
    var video = document.getElementById('trailer1');
    if (video.muted) {
        video.muted = false;
        $('#icone-som').removeClass("fa-solid fa-volume-xmark");
        $('#icone-som').addClass("fa-solid fa-volume-high");
    } else {
        video.muted = true;
        $('#icone-som').removeClass("fa-solid fa-volume-high");
        $('#icone-som').addClass("fa-solid fa-volume-high");
    }
}

function replay(){
    var video = document.getElementById('trailer1');
    video.currentTime = 0;
    video.play();

}