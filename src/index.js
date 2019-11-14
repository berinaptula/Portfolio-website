import $ from 'jquery';
import tilt from "tilt.js";
import gsap from 'gsap';

document.getElementById("about_triangle2").addEventListener("load", function () {
    var doc = this.getSVGDocument();
    var svg = doc.querySelector(".blue");
    svg.classList.remove("cls-1");
    svg.setAttribute('fill', "#ffae00")
});
document.getElementById("about_triangle").addEventListener("load", function () {
    var doc = this.getSVGDocument();
    var svg = doc.querySelector(".blue");
    svg.classList.remove("cls-1");
    svg.setAttribute('fill', "#2475b9")
});
document.getElementById("about_square").addEventListener("load", function () {
    var doc = this.getSVGDocument();
    var svg = doc.querySelector(".purple");
    svg.classList.remove("cls-1");
    svg.setAttribute('fill', "#9824b9")
});
document.getElementById("about_cross").addEventListener("load", function () {
    var doc = this.getSVGDocument();
    var svg = doc.querySelector(".red");
    svg.classList.remove("cls-1");
    svg.setAttribute('fill', "#b92444")
});
document.getElementById("about_circle").addEventListener("load", function () {
    var doc = this.getSVGDocument();
    var svg = doc.querySelector(".dark-blue");
    svg.classList.remove("cls-1");
    svg.setAttribute('fill', "#01162c")
});
document.getElementById("about_square2").addEventListener("load", function () {
    var doc = this.getSVGDocument();
    var svg = doc.querySelector(".green");
    svg.classList.remove("cls-1");
    svg.setAttribute('fill', "#a2b924")
});