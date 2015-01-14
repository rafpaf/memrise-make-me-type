// ==UserScript==
// @name           Memrise: Make Me Type
// @description    This script converts Memrise multiple-choice questions to typing
//                 questions, where possible.
// @match          http://www.memrise.com/course/*/garden/*
// @match          http://www.memrise.com/garden/water/*
// @grant          none
// @run-at         document-start
// ==/UserScript==

function convertMultipleChoiceToTyping(e) {
    // Always jump to session level 6.
    sessions = MEMRISE.garden.sessions;
    for (s in sessions) {
        p = s.prototype.BoxFactory.prototype;
        if (typeof p === 'undefined') { continue; }
        p.make_at_level_1 = p.make_at_level_6;
        p.make_at_level_2 = p.make_at_level_6;
        p.make_at_level_3 = p.make_at_level_6;
        p.make_at_level_4 = p.make_at_level_6;
        p.make_at_level_5 = p.make_at_level_6;
    }
}

document.addEventListener("afterscriptexecute", convertMultipleChoiceToTyping, true);

