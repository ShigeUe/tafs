// ==UserScript==
// @name         スケジュールの日付移動
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  スケジュールを1日ずつ移動する
// @author       ShigeUe
// @match        https://techacademy.jp/mentor/schedule/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=techacademy.jp
// @grant        none
// @updateURL    https://raw.githubusercontent.com/ShigeUe/tafs/main/move-the-schedule-one-day.js
// @downloadURL  https://raw.githubusercontent.com/ShigeUe/tafs/main/move-the-schedule-one-day.js
// @supportURL   https://github.com/ShigeUe/tafs
// ==/UserScript==

(function() {
    'use strict';

    const schedule_list = $('.container-fluid > .row > .col-lg-12 > .row > .col-md-12.add-margin-top-30 > ul > li:nth-of-type(4) > ul');

    const [year, month, day] = location.href.split('/').slice(-3);
    const base_date = (new Date(`${year}-${month}-${day}`)).getTime();

    const prev_date = (new Date(base_date - 3600 * 1000 * 12)).toISOString().split('T').shift().replaceAll('-', '/');
    const next_date = (new Date(base_date + 3600 * 1000 * 36)).toISOString().split('T').shift().replaceAll('-', '/');

    const next_link = $('<a>').attr('href', '/mentor/schedule/' + next_date).text('翌日 >').addClass('scheduled').css('font-weight', 'normal');
    const prev_link = $('<a>').attr('href', '/mentor/schedule/' + prev_date).text('< 前日').addClass('scheduled').css('font-weight', 'normal');
    const prev = $('<li>').append(prev_link);
    const next = $('<li>').append(next_link);
    schedule_list.prepend(prev);
    schedule_list.append(next);
})();