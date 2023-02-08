// ==UserScript==
// @name         模範解答をコピーする
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Copy the model code.
// @author       ShigeUe
// @match        https://techacademy.jp/mentor/courses/*/review_guide
// @match        https://techacademy.jp/mentor/reports/*
// @match        https://techacademy.jp/mentor/training/reports/*
// @grant        none
// @updateURL    https://raw.githubusercontent.com/ShigeUe/tafs/main/copy-the-model-code.user.js
// @downloadURL  https://raw.githubusercontent.com/ShigeUe/tafs/main/copy-the-model-code.user.js
// @supportURL   https://github.com/ShigeUe/tafs
// ==/UserScript==

(() => {
  const codes = document.querySelectorAll(".CodeRay");
  if (!codes.length) {
    return;
  }

  const button = document.createElement('button');
  button.append('COPY');
  button.style.position = 'absolute';
  button.style.top = '-35px';
  button.style.right = '0';
  button.classList.add('btn', 'btn-sm', 'btn-danger');

  const onclick = (e) => {
    const text = e.target.parentElement.querySelector('.code pre').innerText;
    const blob = new Blob([text], { type: 'text/plain' });
    const item = [new ClipboardItem({ ['text/plain']: blob })];
    navigator.clipboard.write(item);
  };

  codes.forEach((ele) => {
    ele.style.position = 'relative';
    const b = button.cloneNode(true);
    b.addEventListener('click', onclick);
    ele.append(b);
  });
})();
