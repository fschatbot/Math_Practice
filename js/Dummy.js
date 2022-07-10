/*===================NOTE===================*/
/*This script was made by Himanshu Sultaina */
/* Please don't claim this as your own work */
/*     This script is under MIT License     */
/*==========================================*/

"use strict";
//These are the functions for Math
Math.PI2 = till => Number(Math.PI.toFixed(till||2))
Math.randomNum = (max,min=0) => Math.floor(Math.random()*(max-min))+min;
Math.randomcolor=()=>`rgb(${Math.randomNum(255)},${Math.randomNum(255)},${Math.randomNum(255)})`;
Math.range=(number,min,max,strict)=>{return strict?number>min&&number<max:number>=min&&number<=max};

//These are the functions for Date
Date.prototype.preset = function(preset) {
    const t = e => ("0" + e).slice(-2);
    return preset.replace(/MM/g, t(this.getMonth() + 1))
        .replace(/YYYY/g, this.getFullYear())
        .replace(/DD/g, t(this.getDate()))
        .replace(/hh/g, t(this.getHours()))
        .replace(/mm/g, t(this.getMinutes()))
        .replace(/ss/g, t(this.getSeconds()))
};
Date.prototype.getFullMonth = function(){['Janurary','February','March','April','May','June','July','August','September','October','November','December'][this.getMonth()]}

//These are the functions for Arrays
Array.prototype.random=function random(){return this[Math.randomNum(this.length-1)]};
Array.prototype.last=function last(){return this[this.length-1]};
Array.prototype.isEmpty=function empty(){return"[]"==JSON.stringify(this)};
Array.prototype.toNum=function number(){return this.map(r=>isNaN(r)||isNaN(parseFloat(r))?r:parseFloat(r))};

//Functions related to Objects
Object.isEmpty=(obj=>JSON.stringify({})===JSON.stringify(obj));

//Functions related to Strings
String.prototype.title = function title(){return this.replace(/\w\S*/g,(txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase())}

//Pass in the element as a string and get a parsed element
const createElm=html=>{const t=document.createElement("div");return t.innerHTML=html,t.removeChild(t.firstElementChild)};

//All the cursour Information is stored here
let cursourInfo = {mouseonpage: false, CursorX: 0, CursorY: 0, clicking: false}
if (window.Event) document.captureEvents(Event.MOUSEMOVE);
document.onmouseenter = function(){cursourInfo.mouseonpage = true};
document.onmouseleave = function(){cursourInfo.mouseonpage = false};
document.onmousedown = function(){cursourInfo.clicking = true};
document.onmouseup = function(){cursourInfo.clicking = false};
document.onmousemove = (e) => {
    cursourInfo.CursorX = (window.Event) ? e.pageX : event.clientX + (document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft);
    cursourInfo.CursorY = (window.Event) ? e.pageY : event.clientY + (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);
}

//All Code here is for stuff related to colors
const HexToRgb = e => {
    let s = e => parseInt(e, 16);
    let r = e.slice(1, 3),
        g = e.slice(3, 5),
        b = e.slice(5, 7);
    return `rgb(${s(r)}, ${s(g)}, ${s(b)})`
};
const RgbToHex = (r, g, b) => {
  let s = c => (0+c.toString(16)).slice(-2)
  return "#" + s(r) + s(g) + s(b);
}
const Dummy_class = class Dummy{
    static find_parameter(parameter){
        let href = window.location.href
        let regex = new RegExp(`[&?]${parameter}=([^&]*)`,'i')
        let match = href.match(regex)
        print(match)
        return match[1]
    }
    static isinstance(variable,type_variable){
        return type(variable) == type_variable
    }

    static set_tooltip(element,text) {
        element.setAttribute('title',text);
    }
    static timezone(){
        Intl.DateTimeFormat().resolvedOptions().timeZone
    }
    static rgb(r,g,b){
        return `rgb(${r},${g}${b}`;
    }
    static isPhone(){
        return ['Android','webOS','iPhone','iPad','BlackBerry','Windows Phone'].some(a=>navigator.userAgent.includes(a))
    }
    get in_iframe(){
        return window.location != window.parent.location
    }
    static isfunction(functionToCheck) {
        return functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';
    }
    static async is_online(fetch_check=false){
        if (!fetch_check) {
        return navigator.onLine
        } else {
            return await fetch("https://i.imgur.com/8pNz0UC.png",{cache: "no-store"})
            .then(r => r.blob())
            .then(r => true)
            .catch(error => false)
        }
    }

	static rand_bool(){
		return Math.randomNum(100) % 2 == 0
	}
}

const Dummy = {
    timezone:Intl.DateTimeFormat().resolvedOptions().timeZone,
    parameter:function search_parameter(parameter) {return window.location.href.match(new RegExp(`[&?]${parameter}=([^&]*)`,'i'))[1]},
    tooltip:function set_tooltip(element,text){element.setAttribute('title',text)},
    rgb:function(r,g,b){return `rgb(${r},${g},${b})`},
    find: function find_from_array(string,match_array){
        for (var i = 0; match_array.length >= i; i++) {
            if (string.includes(match_array[i])) return {found:true,from:match_array[i]}
        }
        return {found:false}
    },
    isPhone:['Android','webOS','iPhone','iPad','BlackBerry','Windows Phone'].some(a=>navigator.userAgent.includes(a)),
    OS:"Unknown OS",
    in_iframe: window.location != window.parent.location,
    Online:navigator.onLine,
    validUrl: function ValidURL(string) {return string.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g) !== null},
    InsertCss: function(css){let t=document.createElement("style");return t.appendChild(document.createTextNode(css)),document.head.appendChild(t),t},
    geolocation: function track(){if (navigator.geolocation) navigator.geolocation.getCurrentPosition((o)=>{Dummy.lat=o.coords.latitude,Dummy.lon=o.coords.longitude});}
}
//Checking the Operating System
!function(){let i=i=>navigator.userAgent.match(i),n=i=>Dummy.OS=i;i("Win")?n("Windows"):i("Mac")?n("Macintosh"):i("Linux")?n("Linux"):i("Android")?n("Android"):i("like Mac")?n("iOS"):n(void 0)}();
//Updating the Online or Offline thing in Dummy