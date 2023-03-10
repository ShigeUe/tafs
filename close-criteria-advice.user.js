/* globals $ */

// ==UserScript==
// @name         課題レビューの基準とアドバイスを閉じる
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  ちょっと邪魔な課題レビュー基準とアドバイスを閉じる
// @author       Shige Ue
// @match        https://techacademy.jp/mentor/reports/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=techacademy.jp
// @grant        none
// @updateURL    https://raw.githubusercontent.com/ShigeUe/tafs/main/close-criteria-advice.user.js
// @downloadURL  https://raw.githubusercontent.com/ShigeUe/tafs/main/close-criteria-advice.user.js
// @supportURL   https://github.com/ShigeUe/tafs
// ==/UserScript==

(function() {
  'use strict';

  $('.panel-heading h4').click();
})();