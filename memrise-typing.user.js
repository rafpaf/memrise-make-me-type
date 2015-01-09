// ==UserScript==
// @name           Memrise: Make Me Type
// @description    This script converts Memrise multiple-choice tests to typing
//                 tests, where possible.
// @match          http://www.memrise.com/course/*/garden/*
// @match          http://www.memrise.com/garden/water/*
// @grant          none
// @run-at         document-start
// ==/UserScript==

function convertMultipleChoiceToTyping(e) {
    // Always jump to grow session level 6.
    p = MEMRISE.garden.sessions.GrowSession.prototype.BoxFactory.prototype;
    p.make_at_level_1 = p.make_at_level_6;
    p.make_at_level_2 = p.make_at_level_6;
    p.make_at_level_3 = p.make_at_level_6;
    p.make_at_level_4 = p.make_at_level_6;
    p.make_at_level_5 = p.make_at_level_6;
}

document.addEventListener("afterscriptexecute", convertMultipleChoiceToTyping, true);
