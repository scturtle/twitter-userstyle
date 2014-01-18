// ==UserScript==
// @name        twitter-userstyle
// @namespace   https://github.com/mdo/twitter-userstyle
// @include     https://twitter.com/*
// @resource    CSS https://rawgithub.com/scturtle/twitter-userstyle/master/twitter.css
// @grant       GM_addStyle
// @grant       GM_getResourceText
// ==/UserScript==

GM_addStyle(GM_getResourceText("CSS"));
