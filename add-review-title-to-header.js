// ==UserScript==
// @name         課題レビューにタイトルを設置
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Add review title to the page header.
// @author       ShigeUe
// @match        https://techacademy.jp/mentor/reports/*
// @match        https://techacademy.jp/mentor/training/reports/*
// @grant        none
// @updateURL    https://raw.githubusercontent.com/ShigeUe/tafs/main/add-review-title-to-header.js
// @downloadURL  https://raw.githubusercontent.com/ShigeUe/tafs/main/add-review-title-to-header.js
// @supportURL   https://github.com/ShigeUe/tafs
// ==/UserScript==

(() => {
  const title = document.querySelector('table tr:first-of-type td a');
  console.log(title);
  if (title) {
    const ele = title.cloneNode(true);
    const style = {
      position: 'fixed',
      top: '13px',
      left: '300px',
      zIndex: '99999',
      backgroundColor: '#780f0f',
      color: 'white',
      fontWeight: 'bold',
      padding: '0 .5em',
    };
    Object.keys(style).forEach((prop) => {
      ele.style[prop] = style[prop];
    });
    document.body.prepend(ele);
  }  
})();
