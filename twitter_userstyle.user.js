// ==UserScript==
// @name        twitter-userstyle
// @namespace   https://github.com/mdo/twitter-userstyle
// @include     https://twitter.com/*
// @resource    CSS https://raw.githubusercontent.com/scturtle/twitter-userstyle/master/twitter.css
// @grant       GM_addStyle
// @grant       GM_getResourceText
// ==/UserScript==

GM_addStyle(GM_getResourceText("CSS"));
/* quick fix search box board */
document.getElementById("search-query").style.cssText="border: 0px";
/* fix new profile icon top right */
document.getElementById("user-dropdown-toggle").style.cssText="height: 32px !important";
document.getElementById("user-dropdown").parentElement.style.cssText="margin-right: 10px !important";
