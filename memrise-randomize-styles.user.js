// ==UserScript==
// @name           Memrise: Randomize styles
// @description    Randomizes the look and feel of a Memrise word review
//                 session, on the hunch that it's better for memory.
// @match          http://www.memrise.com/course/*/garden/*
// @match          http://www.memrise.com/garden/water/*
// @grant          none
// ==/UserScript==

fontTypes = 'sans-serif; serif; fantasy; cursive; monospace'.split(';');
fonts = '"Comic Sans MS"; "CooperHewitt"; Georgia; Geneva; Helvetica; Impact; "Lucida Grande"; "Marker Felt"; "monofur for Powerline"; Noteworthy; Optima; Papyrus; Seravek; Skia; "Snell Roundhand"; "Source Code Pro"; "Superclarendon"; "Tahoma"; "Times New Roman"; "Trebuchet MS"; Verdana; Zapfino; "Apple Chancery"; "Minion Pro", "Anonymous Pro", "AGaramond-Regular"'.split(';');
fontWeights = "300,500,700,900".split(',');

var observer = new MozMutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        for(var i = 0; i < mutation.addedNodes.length; i++)
            console.log('added: ' + mutation.addedNodes[i]);
    })
});
observer.observe(document, {
    childList: true
});

$(function () {
});
