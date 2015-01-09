// ==UserScript==
// @name           Memrise Make Me Type
// @description    Converts all Memrise multiple choice tests to typing tests.
// @match          http://www.memrise.com/course/*/garden/*
// @match          http://www.memrise.com/garden/water/*
// @author         Raphael Krut-Landau
// @grant          none
// ==/UserScript==

function replaceChoicesWithTyping() {
    if ($('.choices:visible').length > 0) {
        $('.choices').hide();
        $('.typing *').show();
        $('.typing input').keypress(function (e) {
            if (e.which == 13) { // enter pressed
                answerGiven = $(this).val().trim();
                var someChoiceMatched = false; // initial value
                $('.choice').each(function () {
                    var choiceText = $(this).find('.val').get(0).innerHTML;
                    thisChoiceMatched = choiceText.indexOf(answerGiven) > -1;
                    if (thisChoiceMatched) {
                        someChoiceMatched = true;
                        $(this).click();
                    }
                });
                if (!someChoiceMatched) {
                    $('.do-review').click();
                }
                $(this).val('');
            }
        });
    }
    window.setTimeout("replaceChoicesWithTyping();", 100);
}

var onLoad = function($) {
    replaceChoicesWithTyping();
    MEMRISE.garden.box_types.MultipleChoiceBox = MEMRISE.garden.box_types.TypingTestBox;
}

var injectWithJQ = function(f) {
    var script = document.createElement('script');
    script.textContent = '$(' + f.toString() + '($));';
    document.body.appendChild(script);
};


var inject = function(f) {
    var script = document.createElement('script');
    //script.textContent = '(' + f.toString() + ')();';
    script.textContent = f.toString();
    document.body.appendChild(script);
};

inject(replaceChoicesWithTyping);
injectWithJQ(onLoad);
