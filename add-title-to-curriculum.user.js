// ==UserScript==
// @name         複数ある「はじ副」のカリキュラムにタイトルを付ける
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Add the title to curriculum.
// @author       ShigeUe
// @match        https://techacademy.jp/mentor/courses/*/curriculums/*/lessons/*
// @grant        none
// @updateURL    https://raw.githubusercontent.com/ShigeUe/tafs/main/add-title-to-curriculum.user.js
// @downloadURL  https://raw.githubusercontent.com/ShigeUe/tafs/main/add-title-to-curriculum.user.js
// @supportURL   https://github.com/ShigeUe/tafs
// ==/UserScript==

(() => {
  const courses = {
    'first-sidejob': 'はじめての副業',
    'first-sidejob-r': 'はじめての副業R',
    'first-sidejob-r-m': 'はじめての副業 for mom',
    'first-sidejob-2': 'はじめての副業2',
    'first-sidejob-2-rd': 'はじめての副業 R&D',
    'first-sidejob-2-m': 'Web制作在宅ワークスタートfor mom',
  };
  const course_id = window.location.href.split('/').at(-3);
  const course_name = courses[course_id];

  if (!course_name) {
    return;
  }

  const div = document.createElement('div');
  div.innerText = course_name;

  const style = {
    position: 'absolute',
    left: 0,
    top: '-50px',
    zIndex: '999',
    padding: '10px 20px',
    backgroundColor: '#f00',
    opacity: '0.5',
    color: '#fff',
    fontSize: '24px',
    fontWeight: 'bold',
    lineHeight: 1,
  };
  Object.keys(style).forEach((prop) => {
    div.style[prop] = style[prop];
  });
  const target = document.querySelector('.billy_lesson .note-index-wrap .note-index');
  target.append(div);
})();
