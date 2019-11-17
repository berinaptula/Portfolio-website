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


var windowWidth = $(window).width();
$(window).on('resize', function () {
    windowWidth = $(window).width();
    console.log(windowWidth)
    if (windowWidth > 800) {
        setAnimations();
    }
})
if (windowWidth > 800) {
    setAnimations();
}


function setAnimations() {
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
    for (var i = 0; i < portfolioLength; i++) {
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
            duration: '150%',
            triggerHook: 0.9
        })
        .setTween(first4)
        // .addIndicators()
        .addTo(controller);



    // function pathPrepare(id, color, durationPerc = "20%", strokeW = 5) {
    //     var svg;
    //     document.getElementById(id).addEventListener('load', function () {
    //         var doc = this.getSVGDocument();
    //         svg = doc.querySelector('path');
    //         length = svg.getTotalLength();
    //         $(svg).css('stroke-dasharray', length);
    //         $(svg).css('stroke-dashoffset', length);
    //         $(svg).css('stroke-width', strokeW);
    //         $(svg).css('stroke', 'black');
    //         $(svg).css('fill', 'none');

    //         var drawing = new TimelineMax();
    //         drawing.set(svg, {
    //                 fillOpacity: 0,
    //             })
    //             .to(svg, 3, {
    //                 strokeDashoffset: 0,
    //                 ease: Linear.easeNone,
    //                 fill: color,
    //             }).to(svg, 1, {
    //                 stroke: "transparent",
    //                 fillOpacity: 1,
    //             })
    //         var controller = new ScrollMagic.Controller();
    //         var draw = new ScrollMagic.Scene({
    //                 triggerElement: '.about',
    //                 duration: durationPerc,
    //                 triggerHook: 0.65
    //             })
    //             .setTween(drawing)
    //             .addTo(controller);
    //     });
    // }

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


    $('.portfolio__load-more').click(function (e) {
        // portfolioHook = 0.9;
        // portfolioDuration = "80%";
        // itemsToAnimate = portfolioDuration;
        $('.portfolio__container').toggleClass('loaded')
        $('.portfolio__item').toggleClass('showItem')
        $('.portfolio__item-8').toggleClass('showItem')
        showMoreBtnText();
    })

    function showMoreBtnText() {
        if ($('.portfolio__container').hasClass('loaded')) {
            $('.portfolio__load-more').text('Show less')
        } else {
            $('.portfolio__load-more').text('Load more')
        }
    }
}

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


////////////// POPUPS


const projects = [{
        id: 'fylo',
        props: {
            heading: "Fylo Project",
            description: "This was a fun project I found on the internet. It was a challenge project to build this website, according to the provided design. I really love illustrative designs. Its purpose was to practice my CSS Flexbox and SASS skills.",
            img: ["media/img/fylo1.png", "media/img/fylo2.png", "media/img/fylo3.png"],
            alt: 'Fylo project',
            technologies: ['CSS Flexbox', "SASS"],
        },
    }, {
        id: 'lol',
        props: {
            heading: "League Of Legends",
            description: "This web-app looking website was to practice my CSS Flexbox and SASS skills. I learned a lot from this project, the most important being SVG icons and complex animations. The layout is completely responsive and suitable for every device. Also has browser support testing ability for CSS properties",
            img: ["media/img/lol1.png", "media/img/lol2.gif", "media/img/lol3.gif"],
            alt: 'League of Legends project',
            technologies: ['CSS Flexbox', "SASS", "SVG"]
        }
    },
    {
        id: 'wine',
        props: {
            heading: "Wine Restaurant",
            description: "This was the ultimate CSS Grid website I built. It was a personal project. The layout is built entirely on CSS Grid to practice my CSS Grid skills and learn new things at the same time. It was quite a challenge, but in the end I am very satisfied with the end product, plus - I have learned a lot of new things.",
            img: ["media/img/wine1.png", "media/img/wine2.gif", "media/img/wine3.gif"],
            alt: 'Winery photo',
            technologies: ['CSS Grid', "SASS"]
        }
    },
    {
        id: 'opgg',
        props: {
            heading: "Op.gg Clone",
            description: "I was learning Bootstrap4 and was looking for a cool project to build. After looking for a quite a bit of time and finding nothing interesting, I decided to take half an hour break, and just relax my mind with video games. Just then, I thought about op.gg website, and it looks as if it was entirely built with Bootstrap. I decided to give it a try, and it turned out to be great.",
            img: ["media/img/opgg1.png", "media/img/opgg2.gif", "media/img/opgg3.gif"],
            alt: 'Winery photo',
            technologies: ['Bootstrap4', "SASS"]
        }
    },
    {
        id: 'realestate',
        props: {
            heading: "Real Estate website",
            description: "This Real Estate website I built was to practice my Javascript(ES6) and Webpack skills. It was very fun experimenting new JavaScript features, whcih make coding a lot easier to both write and read. I mostly paid attention to the technical part, rather than the design itself. I practiced filtering, sorting, calculating the time with Moment.JS and also LocalStorage to save the liked properties. It was definitely a challenging project, and I am very proud of it.",
            img: ["media/img/realestate1.png", "media/img/realestate2.gif", "media/img/realestate3.gif", "media/img/realestate4.gif"],
            alt: 'Real Estate website',
            technologies: ['JavaScript', "Webpack", "SASS"]
        }
    },
    {
        id: 'beautysalon',
        props: {
            heading: "Beauty Salon Beri",
            description: "A website that I built for my mom's beauty salon. During that time, I was learning very Advanced CSS properties and ways of interacting with the elements. I built the entire website with the 'legacy' CSS Float system, because it is compatiable with literally every browser. I learned about styling my own checkboxes and creating amazing navigation menus.",
            img: ["media/img/beri1.png", "media/img/beri2.gif", "media/img/beri3.gif"],
            alt: 'Beauty Salon Beri',
            technologies: ['CSS Float', "SASS"]
        }
    },
    {
        id: 'mywebsite',
        props: {
            heading: "My portfolio website",
            description: "It is indeed the website you are currently in. The reason I put it here is because I am very proud of it. It was designed by a professional designer, and built entirely by me.This website is a proof that I can turn any design into a fully responsive website with complex on scroll animations. I implemented GSAP and ScrollMagic in order to achieve this functionality and I loved it a lot.",
            img: ["media/img/fylo.png", "media/img/1fylo.png", "media/img/wine.png"],
            alt: 'Beauty Salon Beri',
            technologies: ['CSS Grid & Flex', "SASS", "GSAP", "SrollMagic"]
        }
    }

]


var itemId;
let clickedProject;
$('.portfolio__item--description-button').click(function (e) {
    let imgIndex = 0;
    itemId = $(e.currentTarget).parent().parent().attr('id');
    console.log(itemId)
    $('.portfolio__popup--container').toggleClass('togglePopup')
    clickedProject = projects.find((el) => el.id === itemId)
    var listString = '';
    clickedProject.props.technologies.forEach((item) => {
        listString += `<li>${item}</li>`
    })
    $('.portfolio__popup--slideshow-img img').attr('src', clickedProject.props.img[imgIndex])
    $('.portfolio__popup--info-heading').text(clickedProject.props.heading)
    $('.portfolio__popup--info-paragraph').text(clickedProject.props.description)
    $('.portfolio__popup--info-technologies ul').html(listString);
    console.log(clickedProject)

    $('.portfolio__popup--slideshow-controls-right').click(function () {
        imgIndex += 1;
        if (imgIndex == clickedProject.props.img.length) {
            imgIndex = 0;
        }
        $('.portfolio__popup--slideshow-img img').attr('src', clickedProject.props.img[imgIndex])
    })
    $('.portfolio__popup--slideshow-controls-left').click(function () {
        imgIndex -= 1;
        if (imgIndex < 0) {
            imgIndex = clickedProject.props.img.length - 1
        }
        $('.portfolio__popup--slideshow-img img').attr('src', clickedProject.props.img[imgIndex])
    })

})
$('.portfolio__popup--close').on('click', function (e) {
    $('.portfolio__popup--container').toggleClass('togglePopup')
})