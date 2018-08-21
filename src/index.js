import mgnSmoothScroll from './mgn-smooth-scroll';

let scroll = new mgnSmoothScroll(
    "a",
    {
        easing: "easeOutQuint",
        ignore: ".ignore",
        posFix: 60,
        blank: true,
    }
);

scroll.ScrollEnd = function(){
    console.log("ScrollEnd")
};
