import $ from 'jquery';
import tilt from 'tilt.js';

document.getElementById('about_triangle2').addEventListener('load', function () {
    var doc = this.getSVGDocument();
    var svg = doc.querySelector('.blue');
    svg.classList.remove('cls-1');
    svg.setAttribute('fill', '#ffae00');
});
document.getElementById('about_triangle').addEventListener('load', function () {
    var doc = this.getSVGDocument();
    var svg = doc.querySelector('.blue');
    svg.classList.remove('cls-1');
    svg.setAttribute('fill', '#2475b9');
});
document.getElementById('about_square').addEventListener('load', function () {
    var doc = this.getSVGDocument();
    var svg = doc.querySelector('.purple');
    svg.classList.remove('cls-1');
    svg.setAttribute('fill', '#9824b9');
});
document.getElementById('about_cross').addEventListener('load', function () {
    var doc = this.getSVGDocument();
    var svg = doc.querySelector('.red');
    svg.classList.remove('cls-1');
    svg.setAttribute('fill', '#b92444');
});
document.getElementById('about_circle').addEventListener('load', function () {
    var doc = this.getSVGDocument();
    var svg = doc.querySelector('.dark-blue');
    svg.classList.remove('cls-1');
    svg.setAttribute('fill', '#01162c');
});
document.getElementById('about_square2').addEventListener('load', function () {
    var doc = this.getSVGDocument();
    var svg = doc.querySelector('.green');
    svg.classList.remove('cls-1');
    svg.setAttribute('fill', '#a2b924');
});

var first = new TimelineMax();

first
    .set('#intro_circle', {
        scale: 1,
        transformOrigin: 'center top'
    })
    .to(
        '#intro_circle',
        3, {
            y: '0%'
        },
        '-=3'
    )
    .to(
        '#intro_circle',
        3, {
            y: '-50%'
        },
        '-=3'
    )
    .to(
        '.intro__text__container',
        3, {
            y: '-20%'
        },
        '-=3'
    )
    .to(
        '#intro_square',
        3, {
            y: '40%'
        },
        '-=3'
    )
    .to(
        '#intro_cross',
        3, {
            x: '40%',
            y: '-130%',
            rotation: '-10deg'
        },
        '-=3'
    )
    .to(
        '#intro_cross2',
        3, {
            x: '140%',
            y: '130%',
            rotation: '-10deg'
        },
        '-=3'
    )
    .to(
        '#intro_triangle',
        3, {
            x: '-100%',
            rotation: '-30deg'
        },
        '-=3'
    )
    .to(
        '.intro__img',
        3, {
            y: '10%',
            scale: 0.9
        },
        '-=3'
    )
    .to(
        '#intro_triangle2',
        3, {
            x: '10%',
            y: '-10%'
        },
        '-=3'
    )
    .to(
        '#intro_circle2',
        3, {
            scale: 1.1,
            x: '-10%',
            y: '-30%'
        },
        '-=3'
    );

var controller = new ScrollMagic.Controller();

var scene1 = new ScrollMagic.Scene({
        triggerElement: '.navbar',
        duration: '100%',
        triggerHook: 0
    })
    .setTween(first)
    // .addIndicators()
    .addTo(controller);

var second = new TimelineMax();

var arrow;
var arrowl;
document.getElementById('about_arrow').addEventListener('load', function () {
    arrow = this.getSVGDocument();
    arrowl = arrow.querySelector('#arrowX');
    var linez = arrowl.getTotalLength();
    $(arrowl).css('stroke-dasharray', linez);
    $(arrowl).css('stroke-dashoffset', linez);
    $(arrowl).css('stroke-width', 1);
    $(arrowl).css('stroke', 'black');
    $(arrowl).css('fill', 'none');

    second
        .to(arrowl, 3, {
            strokeDashoffset: 0,
            ease: Linear.easeNone
        })
        .to(arrowl, 3, {
            fill: 'black',
            ease: Linear.easeNone
        });
    var scene2 = new ScrollMagic.Scene({
            triggerElement: '.about',
            duration: '20%',
            triggerHook: 0.5
        })
        .setTween(second)
        // .addIndicators()
        .addTo(controller);
});

var first3 = new TimelineMax();

var skillsLength = $('.skill').length;
console.log(skillsLength);
first3
    .set('.skill__icon', {
        y: '-50%',
        opacity: 0
    })
    .set('.skill__name', {
        x: '-50%',
        opacity: 0,
        rotationX: '90deg'
    })
    .set('.skill__description', {
        y: '50%',
        opacity: 0,
        rotationX: '0deg'
    });
for (var i = 0; i < skillsLength; i++) {
    first3
        .to($('.skill__icon')[i], 3, {
            y: '0%',
            opacity: 1,
            rotationY: '0deg'
        })
        .to($('.skill__name')[i], 3, {
            x: '0%',
            opacity: 1,
            rotationX: '0deg'
        })
        .to($('.skill__description')[i], 3, {
            y: '0%',
            opacity: 1,
            rotationX: '0deg'
        });
}
var controller = new ScrollMagic.Controller();
var scene3 = new ScrollMagic.Scene({
        triggerElement: '.skills',
        duration: '70%',
        triggerHook: 0.8
    })
    .setTween(first3)
    // .addIndicators()
    .addTo(controller);

var first4 = new TimelineMax();
var portfolioLength = $('.portfolio__item').length;
console.log(portfolioLength + 1);
first4
    .set('.portfolio__heading', {
        x: '10%',
        opacity: 0
    })
    .set('.portfolio__text--heading', {
        y: '-100%',
        opacity: 0
    })
    .set('.portfolio__text--description', {
        y: '100%',
        opacity: 0
    })
    .set('.portfolio__item', {
        x: '-10%',
        opacity: 0,
        width: '100%',
        transformOrigin: 'left center'
    })
    .set('.portfolio__item--description-client', {
        y: '-100%',
        opacity: 0
    })
    .set('.portfolio__item--description-title', {
        x: '-10%',
        opacity: 0
    })
    .set('.portfolio__item--description-button', {
        y: '100%',
        opacity: 0
    })
    .set('.portfolio__item--photo img', {
        scale: 1.5
    })
    .set('.portfolio__load-more', {
        // y: '100%',
        transformOrigin: 'center center',
        scale: 1.2
    })
    .to($('.portfolio__heading'), 10, {
        opacity: 1,
        x: '0%'
    })
    .to($('.portfolio__text--heading'), 10, {
        opacity: 1,
        y: '0%'
    }, '+=20')
    .to($('.portfolio__text--description'), 20, {
        opacity: 1,
        y: '0%'
    });
for (var i = 0; i < 3; i++) {
    first4
        .to($('.portfolio__item')[i], 4, {
            opacity: 1,
            width: '100%',
            ease: Circ.easeInOut
        })
        .to($('.portfolio__item')[i], 4, {
            x: '0%'
        })
        .to($('.portfolio__item--photo img')[i], 4, {
            scale: 1,
            opacity: 1
        }, '+=4')
        .to($('.portfolio__item--description-client')[i], 4, {
            y: '0%',
            opacity: 1
        })
        .to($('.portfolio__item--description-title')[i], 4, {
            x: '0%',
            opacity: 1
        })
        .to($('.portfolio__item--description-button')[i], 4, {
            y: '0%',
            opacity: 1
        });
}
first4.to('.portfolio__load-more', 0.1, {
    y: '0%',
    scale: 1
});
var controller = new ScrollMagic.Controller();

var scene4 = new ScrollMagic.Scene({
        triggerElement: '.portfolio',
        duration: '80%',
        triggerHook: 0.9
    })
    .setTween(first4)
    .addTo(controller);

function pathPrepare(id, color, durationPerc = "20%", strokeW = 5) {
    var svg;
    document.getElementById(id).addEventListener('load', function () {
        var doc = this.getSVGDocument();
        svg = doc.querySelector('path');
        length = svg.getTotalLength();
        $(svg).css('stroke-dasharray', length);
        $(svg).css('stroke-dashoffset', length);
        $(svg).css('stroke-width', strokeW);
        $(svg).css('stroke', 'black');
        $(svg).css('fill', 'none');

        var drawing = new TimelineMax();
        drawing.set(svg, {
                fillOpacity: 0,
            })
            .to(svg, 3, {
                strokeDashoffset: 0,
                ease: Linear.easeNone,
                fill: color,
            }).to(svg, 1, {
                stroke: "transparent",
                fillOpacity: 1,
            })
        var controller = new ScrollMagic.Controller();
        var draw = new ScrollMagic.Scene({
                triggerElement: '.about',
                duration: durationPerc,
                triggerHook: 0.65
            })
            .setTween(drawing)
            .addTo(controller);
    });
}

const colors = {
    purple: "#9824b9",
    blue: "#2475b9",
    yellow: "#ffae00",
    green: "#a2b924",
    red: "#b92444",
    darkblue: "#01162c"
}
pathPrepare('about_square', colors.purple);
pathPrepare('about_cross', colors.red);
pathPrepare('about_triangle', colors.blue);
pathPrepare('about_triangle2', colors.yellow);
pathPrepare('about_circle', colors.darkblue, "20%", 1);
pathPrepare('about_square2', colors.green);

var about = new TimelineMax();
about.set('.about__photo--container img', {
        opacity: 0,
        x: "-3%"
    })
    .set('.about__text--heading', {
        opacity: 0,
        y: "-100%"
    })
    .set('.about__text--description', {
        opacity: 0,
        x: "100%"
    })
    .to('.about__text--heading', 3, {
        y: "0%",
        opacity: 1
    })
    .to('.about__text--description', 3, {
        x: "0%",
        opacity: 1
    })
    .to('.about__photo--container img', 3, {
        x: "0%",
        opacity: 1
    })
var controller = new ScrollMagic.Controller();
var aboutSc = new ScrollMagic.Scene({
        triggerElement: '.about',
        duration: "5%",
        triggerHook: 0.5
    })
    .setTween(about)
    .addTo(controller);