!function e(n,r,o){function t(s,c){if(!r[s]){if(!n[s]){var f="function"==typeof require&&require;if(!c&&f)return f(s,!0);if(i)return i(s,!0);var a=new Error("Cannot find module '"+s+"'");throw a.code="MODULE_NOT_FOUND",a}var d=r[s]={exports:{}};n[s][0].call(d.exports,(function(e){return t(n[s][1][e]||e)}),d,d.exports,e,n,r,o)}return r[s].exports}for(var i="function"==typeof require&&require,s=0;s<o.length;s++)t(o[s]);return t}({1:[function(e,n,r){"use strict";const o={entryTypes:["resource"]},t=(e,n)=>{const r=e.getEntries().filter((e=>e.name.includes("hero_startframe")));if(r.length>0&&(0!==r[0].duration||r[0].responseEnd!==r[0].responseStart)){n.disconnect();const e=(r[0].responseEnd/1e3).toFixed(3);window.fmp=e,window.fmpResolve(e)}};window.fmpPromise=new Promise((e=>{window.fmpResolve=e,window&&window.PerformanceObserver&&new PerformanceObserver(t).observe(o)})),window.addEventListener("load",(n=>{let r;try{r=e("@marcom/ac-analytics")}catch(e){}window.fmpPromise.then((()=>{if(window.fmp&&r){const e={events:"event421=".concat(window.fmp,",event422")},n={trackOnPageLoad:!0,trackOnExitLink:!0};r.passiveTracker(e,n)}}))}))},{undefined:void 0}]},{},[1]);