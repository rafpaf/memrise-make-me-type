// ==UserScript==
// @name           Memrise: Make Me Type 2
// @description    This script converts Memrise "no typing" courses to typing
//                 courses, as much as possible.
// @match          http://www.memrise.com/course/*/garden/*
// @match          http://www.memrise.com/garden/water/*
// @grant          none
// @run-at         document-end
// ==/UserScript==

function replaceChoicesWithTyping() {
    console.log('replaceChoicesWithTyping');
    if ($('.choices:visible').length > 0) {
        console.log('choices is visible');
        $('.choices').hide();

        // html for typing box
        html =  "   <div class='typing-wrapper'>";
        html += "      <span class='marking-icon'></span>";
        html += "      <input id='a_typing_field' class='roundy shiny-box typing-type-here'";
        html += "          tabindex='1' autocomplete='off' spellcheck='false' type='text'>";
        html += "   </div>";
        $('.multiple_choice:eq(0)').append(html);

        $input = $('#a_typing_field');
        $input.keypress(function (e) {
            console.log('input keypressed');
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
                //$('.typing_wrapper').remove();
            }
        });
    }
    console.log('ok');
    window.setTimeout(arguments.callee, 500);
}

$(replaceChoicesWithTyping);
