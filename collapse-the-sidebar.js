// ==UserScript==
// @name         メンター画面のサイドバー折り畳み
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  メンター画面のサイドバーを折り畳めるようにします
// @author       You
// @match        https://techacademy.jp/mentor
// @match        https://techacademy.jp/mentor/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=techacademy.jp
// @grant        none
// @updateURL    https://raw.githubusercontent.com/ShigeUe/tafs/main/collapse-the-sidebar.js
// @downloadURL  https://raw.githubusercontent.com/ShigeUe/tafs/main/collapse-the-sidebar.js
// @supportURL   https://github.com/ShigeUe/tafs
// ==/UserScript==

(function() {
    'use strict';

    let state = {};

    function setState(key, value) {
        state[key] = value;
        localStorage.mentorSideBarState = JSON.stringify(state);
    }

    function getState(key) {
        state = JSON.parse(localStorage.mentorSideBarState ?? '{}');
        return state[key] ?? false;
    }

    const h5s = document.querySelectorAll('#sidebar-wrapper h5');
    h5s.forEach((el) => {
        el.style.cursor = 'pointer';
        const text = el.innerText;
        if (getState(text)) {
            $(el.nextElementSibling).hide();
        }
        $(el).on('click', () => {
            $(el.nextElementSibling).slideToggle();
            setState(text, !getState(text));
        });
    });
})();