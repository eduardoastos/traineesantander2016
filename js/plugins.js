! function (e, t) {
"object" == typeof exports && "object" == typeof module ? module.exports =
t() : "function" == typeof define && define.amd ? define([], t) : "object" ==
typeof exports ? exports.AOS = t() : e.AOS = t()
}(this, function () {
return function (e) {
function t(o) {
if (n[o]) return n[o].exports;
var i = n[o] = {
exports: {},
id: o,
loaded: !1
};
return e[o].call(i.exports, i, i.exports, t), i.loaded = !0, i.exports
}
var n = {};
return t.m = e, t.c = n, t.p = "dist/", t(0)
}([function (e, t, n) {
"use strict";

function o(e) {
return e && e.__esModule ? e : {
default: e
}
}
var i = Object.assign || function (e) {
for (var t = 1; t < arguments.length; t++) {
var n = arguments[t];
for (var o in n) Object.prototype.hasOwnProperty.call(n, o) &&
(e[o] = n[o])
}
return e
},
r = n(1),
a = (o(r), n(6)),
u = o(a),
c = n(7),
f = o(c),
s = n(8),
d = o(s),
l = n(9),
p = o(l),
m = n(10),
b = o(m),
v = n(11),
y = o(v),
g = n(14),
h = o(g),
w = [],
k = !1,
x = document.all && !window.atob,
j = {
offset: 120,
delay: 0,
easing: "ease",
duration: 400,
disable: !1,
once: !1,
startEvent: "DOMContentLoaded",
throttleDelay: 99,
debounceDelay: 50,
disableMutationObserver: !1
},
O = function () {
var e = arguments.length > 0 && void 0 !== arguments[0] &&
arguments[0];
if (e && (k = !0), k) return w = (0, y.default)(w, j), (0, b
.default)(w, j.once), w
},
_ = function () {
w = (0, h.default)(), O()
},
S = function () {
w.forEach(function (e, t) {
e.node.removeAttribute("data-aos"), e.node
.removeAttribute("data-aos-easing"), e.node
.removeAttribute("data-aos-duration"), e.node
.removeAttribute("data-aos-delay")
})
},
z = function (e) {
return e === !0 || "mobile" === e && p.default.mobile() ||
"phone" === e && p.default.phone() || "tablet" === e && p
.default.tablet() || "function" == typeof e && e() === !0
},
A = function (e) {
return j = i(j, e), w = (0, h.default)(), z(j.disable) || x ?
S() : (document.querySelector("body")
.setAttribute("data-aos-easing", j.easing), document
.querySelector("body")
.setAttribute("data-aos-duration", j.duration), document
.querySelector("body")
.setAttribute("data-aos-delay", j.delay),
"DOMContentLoaded" === j.startEvent && ["complete",
"interactive"].indexOf(document.readyState) > -1 ? O(!0) :
"load" === j.startEvent ? window.addEventListener(j
.startEvent,
function () {
O(!0)
}) : document.addEventListener(j.startEvent, function () {
O(!0)
}), window.addEventListener("resize", (0, f.default)(O, j
.debounceDelay, !0)), window.addEventListener(
"orientationchange", (0, f.default)(O, j.debounceDelay, !
0)), window.addEventListener("scroll", (0, u.default)(
function () {
(0, b.default)(w, j.once)
}, j.throttleDelay)), j.disableMutationObserver || (0, d
.default)("[data-aos]", _), w)
};
e.exports = {
init: A,
refresh: O,
refreshHard: _
}
}, function (e, t) {}, , , , , function (e, t) {
(function (t) {
"use strict";

function n(e, t, n) {
function o(t) {
var n = b,
o = v;
return b = v = void 0, k = t, g = e.apply(o, n)
}

function r(e) {
return k = e, h = setTimeout(s, t), _ ? o(e) : g
}

function a(e) {
var n = e - w,
o = e - k,
i = t - n;
return S ? j(i, y - o) : i
}

function c(e) {
var n = e - w,
o = e - k;
return void 0 === w || n >= t || n < 0 || S && o >= y
}

function s() {
var e = O();
return c(e) ? d(e) : void(h = setTimeout(s, a(e)))
}

function d(e) {
return h = void 0, z && b ? o(e) : (b = v = void 0, g)
}

function l() {
void 0 !== h && clearTimeout(h), k = 0, b = w = v = h =
void 0
}

function p() {
return void 0 === h ? g : d(O())
}

function m() {
var e = O(),
n = c(e);
if (b = arguments, v = this, w = e, n) {
if (void 0 === h) return r(w);
if (S) return h = setTimeout(s, t), o(w)
}
return void 0 === h && (h = setTimeout(s, t)), g
}
var b, v, y, g, h, w, k = 0,
_ = !1,
S = !1,
z = !0;
if ("function" != typeof e) throw new TypeError(f);
return t = u(t) || 0, i(n) && (_ = !!n.leading, S =
"maxWait" in n, y = S ? x(u(n.maxWait) || 0, t) : y, z =
"trailing" in n ? !!n.trailing : z), m.cancel = l, m
.flush = p, m
}

function o(e, t, o) {
var r = !0,
a = !0;
if ("function" != typeof e) throw new TypeError(f);
return i(o) && (r = "leading" in o ? !!o.leading : r, a =
"trailing" in o ? !!o.trailing : a), n(e, t, {
leading: r,
maxWait: t,
trailing: a
})
}

function i(e) {
var t = "undefined" == typeof e ? "undefined" : c(e);
return !!e && ("object" == t || "function" == t)
}

function r(e) {
return !!e && "object" == ("undefined" == typeof e ?
"undefined" : c(e))
}

function a(e) {
return "symbol" == ("undefined" == typeof e ? "undefined" : c(
e)) || r(e) && k.call(e) == d
}

function u(e) {
if ("number" == typeof e) return e;
if (a(e)) return s;
if (i(e)) {
var t = "function" == typeof e.valueOf ? e.valueOf() : e;
e = i(t) ? t + "" : t
}
if ("string" != typeof e) return 0 === e ? e : +e;
e = e.replace(l, "");
var n = m.test(e);
return n || b.test(e) ? v(e.slice(2), n ? 2 : 8) : p.test(e) ?
s : +e
}
var c = "function" == typeof Symbol && "symbol" == typeof Symbol
.iterator ? function (e) {
return typeof e
} : function (e) {
return e && "function" == typeof Symbol && e.constructor ===
Symbol && e !== Symbol.prototype ? "symbol" : typeof e
},
f = "Expected a function",
s = NaN,
d = "[object Symbol]",
l = /^\s+|\s+$/g,
p = /^[-+]0x[0-9a-f]+$/i,
m = /^0b[01]+$/i,
b = /^0o[0-7]+$/i,
v = parseInt,
y = "object" == ("undefined" == typeof t ? "undefined" : c(
t)) && t && t.Object === Object && t,
g = "object" == ("undefined" == typeof self ? "undefined" : c(
self)) && self && self.Object === Object && self,
h = y || g || Function("return this")(),
w = Object.prototype,
k = w.toString,
x = Math.max,
j = Math.min,
O = function () {
return h.Date.now()
};
e.exports = o
})
.call(t, function () {
return this
}())
}, function (e, t) {
(function (t) {
"use strict";

function n(e, t, n) {
function i(t) {
var n = b,
o = v;
return b = v = void 0, O = t, g = e.apply(o, n)
}

function r(e) {
return O = e, h = setTimeout(s, t), _ ? i(e) : g
}

function u(e) {
var n = e - w,
o = e - O,
i = t - n;
return S ? x(i, y - o) : i
}

function f(e) {
var n = e - w,
o = e - O;
return void 0 === w || n >= t || n < 0 || S && o >= y
}

function s() {
var e = j();
return f(e) ? d(e) : void(h = setTimeout(s, u(e)))
}

function d(e) {
return h = void 0, z && b ? i(e) : (b = v = void 0, g)
}

function l() {
void 0 !== h && clearTimeout(h), O = 0, b = w = v = h =
void 0
}

function p() {
return void 0 === h ? g : d(j())
}

function m() {
var e = j(),
n = f(e);
if (b = arguments, v = this, w = e, n) {
if (void 0 === h) return r(w);
if (S) return h = setTimeout(s, t), i(w)
}
return void 0 === h && (h = setTimeout(s, t)), g
}
var b, v, y, g, h, w, O = 0,
_ = !1,
S = !1,
z = !0;
if ("function" != typeof e) throw new TypeError(c);
return t = a(t) || 0, o(n) && (_ = !!n.leading, S =
"maxWait" in n, y = S ? k(a(n.maxWait) || 0, t) : y, z =
"trailing" in n ? !!n.trailing : z), m.cancel = l, m
.flush = p, m
}

function o(e) {
var t = "undefined" == typeof e ? "undefined" : u(e);
return !!e && ("object" == t || "function" == t)
}

function i(e) {
return !!e && "object" == ("undefined" == typeof e ?
"undefined" : u(e))
}

function r(e) {
return "symbol" == ("undefined" == typeof e ? "undefined" : u(
e)) || i(e) && w.call(e) == s
}

function a(e) {
if ("number" == typeof e) return e;
if (r(e)) return f;
if (o(e)) {
var t = "function" == typeof e.valueOf ? e.valueOf() : e;
e = o(t) ? t + "" : t
}
if ("string" != typeof e) return 0 === e ? e : +e;
e = e.replace(d, "");
var n = p.test(e);
return n || m.test(e) ? b(e.slice(2), n ? 2 : 8) : l.test(e) ?
f : +e
}
var u = "function" == typeof Symbol && "symbol" == typeof Symbol
.iterator ? function (e) {
return typeof e
} : function (e) {
return e && "function" == typeof Symbol && e.constructor ===
Symbol && e !== Symbol.prototype ? "symbol" : typeof e
},
c = "Expected a function",
f = NaN,
s = "[object Symbol]",
d = /^\s+|\s+$/g,
l = /^[-+]0x[0-9a-f]+$/i,
p = /^0b[01]+$/i,
m = /^0o[0-7]+$/i,
b = parseInt,
v = "object" == ("undefined" == typeof t ? "undefined" : u(
t)) && t && t.Object === Object && t,
y = "object" == ("undefined" == typeof self ? "undefined" : u(
self)) && self && self.Object === Object && self,
g = v || y || Function("return this")(),
h = Object.prototype,
w = h.toString,
k = Math.max,
x = Math.min,
j = function () {
return g.Date.now()
};
e.exports = n
})
.call(t, function () {
return this
}())
}, function (e, t) {
"use strict";

function n(e, t) {
var n = new r(o);
a = t, n.observe(i.documentElement, {
childList: !0,
subtree: !0,
removedNodes: !0
})
}

function o(e) {
e && e.forEach(function (e) {
var t = Array.prototype.slice.call(e.addedNodes),
n = Array.prototype.slice.call(e.removedNodes),
o = t.concat(n)
.filter(function (e) {
return e.hasAttribute && e.hasAttribute("data-aos")
})
.length;
o && a()
})
}
Object.defineProperty(t, "__esModule", {
value: !0
});
var i = window.document,
r = window.MutationObserver || window.WebKitMutationObserver ||
window.MozMutationObserver,
a = function () {};
t.default = n
}, function (e, t) {
"use strict";

function n(e, t) {
if (!(e instanceof t)) throw new TypeError(
"Cannot call a class as a function")
}

function o() {
return navigator.userAgent || navigator.vendor || window.opera ||
""
}
Object.defineProperty(t, "__esModule", {
value: !0
});
var i = function () {
function e(e, t) {
for (var n = 0; n < t.length; n++) {
var o = t[n];
o.enumerable = o.enumerable || !1, o.configurable = !0,
"value" in o && (o.writable = !0), Object.defineProperty(
e, o.key, o)
}
}
return function (t, n, o) {
return n && e(t.prototype, n), o && e(t, o), t
}
}(),
r =
/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
a =
/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
u =
/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
c =
/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
f = function () {
function e() {
n(this, e)
}
return i(e, [{
key: "phone",
value: function () {
var e = o();
return !(!r.test(e) && !a.test(e.substr(0, 4)))
}
}, {
key: "mobile",
value: function () {
var e = o();
return !(!u.test(e) && !c.test(e.substr(0, 4)))
}
}, {
key: "tablet",
value: function () {
return this.mobile() && !this.phone()
}
}]), e
}();
t.default = new f
}, function (e, t) {
"use strict";
Object.defineProperty(t, "__esModule", {
value: !0
});
var n = function (e, t, n) {
var o = e.node.getAttribute("data-aos-once");
t > e.position ? e.node.classList.add("aos-animate") :
"undefined" != typeof o && ("false" === o || !n && "true" !==
o) && e.node.classList.remove("aos-animate")
},
o = function (e, t) {
var o = window.pageYOffset,
i = window.innerHeight;
e.forEach(function (e, r) {
n(e, i + o, t)
})
};
t.default = o
}, function (e, t, n) {
"use strict";

function o(e) {
return e && e.__esModule ? e : {
default: e
}
}
Object.defineProperty(t, "__esModule", {
value: !0
});
var i = n(12),
r = o(i),
a = function (e, t) {
return e.forEach(function (e, n) {
e.node.classList.add("aos-init"), e.position = (0, r
.default)(e.node, t.offset)
}), e
};
t.default = a
}, function (e, t, n) {
"use strict";

function o(e) {
return e && e.__esModule ? e : {
default: e
}
}
Object.defineProperty(t, "__esModule", {
value: !0
});
var i = n(13),
r = o(i),
a = function (e, t) {
var n = 0,
o = 0,
i = window.innerHeight,
a = {
offset: e.getAttribute("data-aos-offset"),
anchor: e.getAttribute("data-aos-anchor"),
anchorPlacement: e.getAttribute("data-aos-anchor-placement")
};
switch (a.offset && !isNaN(a.offset) && (o = parseInt(a
.offset)), a.anchor && document.querySelectorAll(a.anchor) &&
(e = document.querySelectorAll(a.anchor)[0]), n = (0, r
.default)(e)
.top, a.anchorPlacement) {
case "top-bottom":
break;
case "center-bottom":
n += e.offsetHeight / 2;
break;
case "bottom-bottom":
n += e.offsetHeight;
break;
case "top-center":
n += i / 2;
break;
case "bottom-center":
n += i / 2 + e.offsetHeight;
break;
case "center-center":
n += i / 2 + e.offsetHeight / 2;
break;
case "top-top":
n += i;
break;
case "bottom-top":
n += e.offsetHeight + i;
break;
case "center-top":
n += e.offsetHeight / 2 + i
}
return a.anchorPlacement || a.offset || isNaN(t) || (o = t), n +
o
};
t.default = a
}, function (e, t) {
"use strict";
Object.defineProperty(t, "__esModule", {
value: !0
});
var n = function (e) {
for (var t = 0, n = 0; e && !isNaN(e.offsetLeft) && !isNaN(e
.offsetTop);) t += e.offsetLeft - ("BODY" != e.tagName ? e
.scrollLeft : 0), n += e.offsetTop - ("BODY" != e.tagName ?
e.scrollTop : 0), e = e.offsetParent;
return {
top: n,
left: t
}
};
t.default = n
}, function (e, t) {
"use strict";
Object.defineProperty(t, "__esModule", {
value: !0
});
var n = function (e) {
return e = e || document.querySelectorAll("[data-aos]"), Array
.prototype.map.call(e, function (e) {
return {
node: e
}
})
};
t.default = n
}])
});
/*!
 * Bootstrap v5.3.0-alpha1 (https://getbootstrap.com/)
 * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */
! function (t, e) {
"object" == typeof exports && "undefined" != typeof module ? module.exports =
e() : "function" == typeof define && define.amd ? define(e) : (t =
"undefined" != typeof globalThis ? globalThis : t || self)
.bootstrap = e()
}(this, (function () {
"use strict";
const t = "transitionend",
e = t => (t && window.CSS && window.CSS.escape && (t = t.replace(
/#([^\s"#']+)/g, ((t, e) => `#${CSS.escape(e)}`))), t),
i = e => {
e.dispatchEvent(new Event(t))
},
n = t => !(!t || "object" != typeof t) && (void 0 !== t.jquery && (t =
t[0]), void 0 !== t.nodeType),
s = t => n(t) ? t.jquery ? t[0] : t : "string" == typeof t && t.length >
0 ? document.querySelector(e(t)) : null,
o = t => {
if (!n(t) || 0 === t.getClientRects()
.length) return !1;
const e = "visible" === getComputedStyle(t)
.getPropertyValue("visibility"),
i = t.closest("details:not([open])");
if (!i) return e;
if (i !== t) {
const e = t.closest("summary");
if (e && e.parentNode !== i) return !1;
if (null === e) return !1
}
return e
},
r = t => !t || t.nodeType !== Node.ELEMENT_NODE || !!t.classList
.contains("disabled") || (void 0 !== t.disabled ? t.disabled : t
.hasAttribute("disabled") && "false" !== t.getAttribute("disabled")),
a = t => {
if (!document.documentElement.attachShadow) return null;
if ("function" == typeof t.getRootNode) {
const e = t.getRootNode();
return e instanceof ShadowRoot ? e : null
}
return t instanceof ShadowRoot ? t : t.parentNode ? a(t.parentNode) :
null
},
l = () => {},
c = t => {
t.offsetHeight
},
h = () => window.jQuery && !document.body.hasAttribute(
"data-bs-no-jquery") ? window.jQuery : null,
d = [],
u = () => "rtl" === document.documentElement.dir,
f = t => {
var e;
e = () => {
const e = h();
if (e) {
const i = t.NAME,
n = e.fn[i];
e.fn[i] = t.jQueryInterface, e.fn[i].Constructor = t, e.fn[i]
.noConflict = () => (e.fn[i] = n, t.jQueryInterface)
}
}, "loading" === document.readyState ? (d.length || document
.addEventListener("DOMContentLoaded", (() => {
for (const t of d) t()
})), d.push(e)) : e()
},
p = (t, e = [], i = t) => "function" == typeof t ? t(...e) : i,
m = (e, n, s = !0) => {
if (!s) return void p(e);
const o = (t => {
if (!t) return 0;
let {
transitionDuration: e,
transitionDelay: i
} = window.getComputedStyle(t);
const n = Number.parseFloat(e),
s = Number.parseFloat(i);
return n || s ? (e = e.split(",")[0], i = i.split(",")[0], 1e3 *
(Number.parseFloat(e) + Number.parseFloat(i))) : 0
})(n) + 5;
let r = !1;
const a = ({
target: i
}) => {
i === n && (r = !0, n.removeEventListener(t, a), p(e))
};
n.addEventListener(t, a), setTimeout((() => {
r || i(n)
}), o)
},
g = (t, e, i, n) => {
const s = t.length;
let o = t.indexOf(e);
return -1 === o ? !i && n ? t[s - 1] : t[0] : (o += i ? 1 : -1, n && (
o = (o + s) % s), t[Math.max(0, Math.min(o, s - 1))])
},
_ = /[^.]*(?=\..*)\.|.*/,
b = /\..*/,
v = /::\d+$/,
y = {};
let w = 1;
const A = {
mouseenter: "mouseover",
mouseleave: "mouseout"
},
E = new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu",
"mousewheel", "DOMMouseScroll", "mouseover", "mouseout",
"mousemove", "selectstart", "selectend", "keydown", "keypress",
"keyup", "orientationchange", "touchstart", "touchmove", "touchend",
"touchcancel", "pointerdown", "pointermove", "pointerup",
"pointerleave", "pointercancel", "gesturestart", "gesturechange",
"gestureend", "focus", "blur", "change", "reset", "select",
"submit", "focusin", "focusout", "load", "unload", "beforeunload",
"resize", "move", "DOMContentLoaded", "readystatechange", "error",
"abort", "scroll"]);

function T(t, e) {
return e && `${e}::${w++}` || t.uidEvent || w++
}

function C(t) {
const e = T(t);
return t.uidEvent = e, y[e] = y[e] || {}, y[e]
}

function O(t, e, i = null) {
return Object.values(t)
.find((t => t.callable === e && t.delegationSelector === i))
}

function x(t, e, i) {
const n = "string" == typeof e,
s = n ? i : e || i;
let o = D(t);
return E.has(o) || (o = t), [n, s, o]
}

function k(t, e, i, n, s) {
if ("string" != typeof e || !t) return;
let [o, r, a] = x(e, i, n);
if (e in A) {
const t = t => function (e) {
if (!e.relatedTarget || e.relatedTarget !== e.delegateTarget && !e
.delegateTarget.contains(e.relatedTarget)) return t.call(this,
e)
};
r = t(r)
}
const l = C(t),
c = l[a] || (l[a] = {}),
h = O(c, r, o ? i : null);
if (h) return void(h.oneOff = h.oneOff && s);
const d = T(r, e.replace(_, "")),
u = o ? function (t, e, i) {
return function n(s) {
const o = t.querySelectorAll(e);
for (let {
target: r
} = s; r && r !== this; r = r.parentNode)
for (const a of o)
if (a === r) return N(s, {
delegateTarget: r
}), n.oneOff && I.off(t, s.type, e, i), i.apply(r, [s])
}
}(t, i, r) : function (t, e) {
return function i(n) {
return N(n, {
delegateTarget: t
}), i.oneOff && I.off(t, n.type, e), e.apply(t, [n])
}
}(t, r);
u.delegationSelector = o ? i : null, u.callable = r, u.oneOff = s, u
.uidEvent = d, c[d] = u, t.addEventListener(a, u, o)
}

function L(t, e, i, n, s) {
const o = O(e[i], n, s);
o && (t.removeEventListener(i, o, Boolean(s)), delete e[i][o.uidEvent])
}

function S(t, e, i, n) {
const s = e[i] || {};
for (const [o, r] of Object.entries(s)) o.includes(n) && L(t, e, i, r
.callable, r.delegationSelector)
}

function D(t) {
return t = t.replace(b, ""), A[t] || t
}
const I = {
on(t, e, i, n) {
k(t, e, i, n, !1)
},
one(t, e, i, n) {
k(t, e, i, n, !0)
},
off(t, e, i, n) {
if ("string" != typeof e || !t) return;
const [s, o, r] = x(e, i, n), a = r !== e, l = C(t), c = l[r] || {},
h = e.startsWith(".");
if (void 0 === o) {
if (h)
for (const i of Object.keys(l)) S(t, l, i, e.slice(1));
for (const [i, n] of Object.entries(c)) {
const s = i.replace(v, "");
a && !e.includes(s) || L(t, l, r, n.callable, n
.delegationSelector)
}
} else {
if (!Object.keys(c)
.length) return;
L(t, l, r, o, s ? i : null)
}
},
trigger(t, e, i) {
if ("string" != typeof e || !t) return null;
const n = h();
let s = null,
o = !0,
r = !0,
a = !1;
e !== D(e) && n && (s = n.Event(e, i), n(t)
.trigger(s), o = !s.isPropagationStopped(), r = !s
.isImmediatePropagationStopped(), a = s.isDefaultPrevented());
let l = new Event(e, {
bubbles: o,
cancelable: !0
});
return l = N(l, i), a && l.preventDefault(), r && t.dispatchEvent(
l), l.defaultPrevented && s && s.preventDefault(), l
}
};

function N(t, e = {}) {
for (const [i, n] of Object.entries(e)) try {
t[i] = n
} catch (e) {
Object.defineProperty(t, i, {
configurable: !0,
get: () => n
})
}
return t
}
const P = new Map,
j = {
set(t, e, i) {
P.has(t) || P.set(t, new Map);
const n = P.get(t);
n.has(e) || 0 === n.size ? n.set(e, i) : console.error(
`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(n.keys())[0]}.`
)
},
get: (t, e) => P.has(t) && P.get(t)
.get(e) || null,
remove(t, e) {
if (!P.has(t)) return;
const i = P.get(t);
i.delete(e), 0 === i.size && P.delete(t)
}
};

function M(t) {
if ("true" === t) return !0;
if ("false" === t) return !1;
if (t === Number(t)
.toString()) return Number(t);
if ("" === t || "null" === t) return null;
if ("string" != typeof t) return t;
try {
return JSON.parse(decodeURIComponent(t))
} catch (e) {
return t
}
}

function F(t) {
return t.replace(/[A-Z]/g, (t => `-${t.toLowerCase()}`))
}
const H = {
setDataAttribute(t, e, i) {
t.setAttribute(`data-bs-${F(e)}`, i)
},
removeDataAttribute(t, e) {
t.removeAttribute(`data-bs-${F(e)}`)
},
getDataAttributes(t) {
if (!t) return {};
const e = {},
i = Object.keys(t.dataset)
.filter((t => t.startsWith("bs") && !t.startsWith("bsConfig")));
for (const n of i) {
let i = n.replace(/^bs/, "");
i = i.charAt(0)
.toLowerCase() + i.slice(1, i.length), e[i] = M(t.dataset[n])
}
return e
},
getDataAttribute: (t, e) => M(t.getAttribute(`data-bs-${F(e)}`))
};
class $ {
static get Default() {
return {}
}
static get DefaultType() {
return {}
}
static get NAME() {
throw new Error(
'You have to implement the static method "NAME", for each component!'
)
}
_getConfig(t) {
return t = this._mergeConfigObj(t), t = this._configAfterMerge(t),
this._typeCheckConfig(t), t
}
_configAfterMerge(t) {
return t
}
_mergeConfigObj(t, e) {
const i = n(e) ? H.getDataAttribute(e, "config") : {};
return {
...this.constructor.Default,
..."object" == typeof i ? i : {},
...n(e) ? H.getDataAttributes(e) : {},
..."object" == typeof t ? t : {}
}
}
_typeCheckConfig(t, e = this.constructor.DefaultType) {
for (const [s, o] of Object.entries(e)) {
const e = t[s],
r = n(e) ? "element" : null == (i = e) ? `${i}` : Object
.prototype.toString.call(i)
.match(/\s([a-z]+)/i)[1].toLowerCase();
if (!new RegExp(o)
.test(r)) throw new TypeError(
`${this.constructor.NAME.toUpperCase()}: Option "${s}" provided type "${r}" but expected type "${o}".`
)
}
var i
}
}
class W extends $ {
constructor(t, e) {
super(), (t = s(t)) && (this._element = t, this._config = this
._getConfig(e), j.set(this._element, this.constructor.DATA_KEY,
this))
}
dispose() {
j.remove(this._element, this.constructor.DATA_KEY), I.off(this
._element, this.constructor.EVENT_KEY);
for (const t of Object.getOwnPropertyNames(this)) this[t] = null
}
_queueCallback(t, e, i = !0) {
m(t, e, i)
}
_getConfig(t) {
return t = this._mergeConfigObj(t, this._element), t = this
._configAfterMerge(t), this._typeCheckConfig(t), t
}
static getInstance(t) {
return j.get(s(t), this.DATA_KEY)
}
static getOrCreateInstance(t, e = {}) {
return this.getInstance(t) || new this(t, "object" == typeof e ? e :
null)
}
static get VERSION() {
return "5.3.0-alpha1"
}
static get DATA_KEY() {
return `bs.${this.NAME}`
}
static get EVENT_KEY() {
return `.${this.DATA_KEY}`
}
static eventName(t) {
return `${t}${this.EVENT_KEY}`
}
}
const B = t => {
let i = t.getAttribute("data-bs-target");
if (!i || "#" === i) {
let e = t.getAttribute("href");
if (!e || !e.includes("#") && !e.startsWith(".")) return null;
e.includes("#") && !e.startsWith("#") && (e =
`#${e.split("#")[1]}`), i = e && "#" !== e ? e.trim() : null
}
return e(i)
},
z = {
find: (t, e = document.documentElement) => [].concat(...Element
.prototype.querySelectorAll.call(e, t)),
findOne: (t, e = document.documentElement) => Element.prototype
.querySelector.call(e, t),
children: (t, e) => [].concat(...t.children)
.filter((t => t.matches(e))),
parents(t, e) {
const i = [];
let n = t.parentNode.closest(e);
for (; n;) i.push(n), n = n.parentNode.closest(e);
return i
},
prev(t, e) {
let i = t.previousElementSibling;
for (; i;) {
if (i.matches(e)) return [i];
i = i.previousElementSibling
}
return []
},
next(t, e) {
let i = t.nextElementSibling;
for (; i;) {
if (i.matches(e)) return [i];
i = i.nextElementSibling
}
return []
},
focusableChildren(t) {
const e = ["a", "button", "input", "textarea", "select", "details",
"[tabindex]", '[contenteditable="true"]'].map((t =>
`${t}:not([tabindex^="-"])`))
.join(",");
return this.find(e, t)
.filter((t => !r(t) && o(t)))
},
getSelectorFromElement(t) {
const e = B(t);
return e && z.findOne(e) ? e : null
},
getElementFromSelector(t) {
const e = B(t);
return e ? z.findOne(e) : null
},
getMultipleElementsFromSelector(t) {
const e = B(t);
return e ? z.find(e) : []
}
},
R = (t, e = "hide") => {
const i = `click.dismiss${t.EVENT_KEY}`,
n = t.NAME;
I.on(document, i, `[data-bs-dismiss="${n}"]`, (function (i) {
if (["A", "AREA"].includes(this.tagName) && i
.preventDefault(), r(this)) return;
const s = z.getElementFromSelector(this) || this.closest(
`.${n}`);
t.getOrCreateInstance(s)[e]()
}))
};
class q extends W {
static get NAME() {
return "alert"
}
close() {
if (I.trigger(this._element, "close.bs.alert")
.defaultPrevented) return;
this._element.classList.remove("show");
const t = this._element.classList.contains("fade");
this._queueCallback((() => this._destroyElement()), this._element,
t)
}
_destroyElement() {
this._element.remove(), I.trigger(this._element, "closed.bs.alert"),
this.dispose()
}
static jQueryInterface(t) {
return this.each((function () {
const e = q.getOrCreateInstance(this);
if ("string" == typeof t) {
if (void 0 === e[t] || t.startsWith("_") ||
"constructor" === t) throw new TypeError(
`No method named "${t}"`);
e[t](this)
}
}))
}
}
R(q, "close"), f(q);
const V = '[data-bs-toggle="button"]';
class K extends W {
static get NAME() {
return "button"
}
toggle() {
this._element.setAttribute("aria-pressed", this._element.classList
.toggle("active"))
}
static jQueryInterface(t) {
return this.each((function () {
const e = K.getOrCreateInstance(this);
"toggle" === t && e[t]()
}))
}
}
I.on(document, "click.bs.button.data-api", V, (t => {
t.preventDefault();
const e = t.target.closest(V);
K.getOrCreateInstance(e)
.toggle()
})), f(K);
const Q = {
endCallback: null,
leftCallback: null,
rightCallback: null
},
X = {
endCallback: "(function|null)",
leftCallback: "(function|null)",
rightCallback: "(function|null)"
};
class Y extends $ {
constructor(t, e) {
super(), this._element = t, t && Y.isSupported() && (this._config =
this._getConfig(e), this._deltaX = 0, this
._supportPointerEvents = Boolean(window.PointerEvent), this
._initEvents())
}
static get Default() {
return Q
}
static get DefaultType() {
return X
}
static get NAME() {
return "swipe"
}
dispose() {
I.off(this._element, ".bs.swipe")
}
_start(t) {
this._supportPointerEvents ? this._eventIsPointerPenTouch(t) && (
this._deltaX = t.clientX) : this._deltaX = t.touches[0].clientX
}
_end(t) {
this._eventIsPointerPenTouch(t) && (this._deltaX = t.clientX - this
._deltaX), this._handleSwipe(), p(this._config.endCallback)
}
_move(t) {
this._deltaX = t.touches && t.touches.length > 1 ? 0 : t.touches[0]
.clientX - this._deltaX
}
_handleSwipe() {
const t = Math.abs(this._deltaX);
if (t <= 40) return;
const e = t / this._deltaX;
this._deltaX = 0, e && p(e > 0 ? this._config.rightCallback : this
._config.leftCallback)
}
_initEvents() {
this._supportPointerEvents ? (I.on(this._element,
"pointerdown.bs.swipe", (t => this._start(t))), I.on(this
._element, "pointerup.bs.swipe", (t => this._end(t))), this
._element.classList.add("pointer-event")) : (I.on(this._element,
"touchstart.bs.swipe", (t => this._start(t))), I.on(this
._element, "touchmove.bs.swipe", (t => this._move(t))), I.on(
this._element, "touchend.bs.swipe", (t => this._end(t))))
}
_eventIsPointerPenTouch(t) {
return this._supportPointerEvents && ("pen" === t.pointerType ||
"touch" === t.pointerType)
}
static isSupported() {
return "ontouchstart" in document.documentElement || navigator
.maxTouchPoints > 0
}
}
const U = "next",
G = "prev",
J = "left",
Z = "right",
tt = "slid.bs.carousel",
et = "carousel",
it = "active",
nt = {
ArrowLeft: Z,
ArrowRight: J
},
st = {
interval: 5e3,
keyboard: !0,
pause: "hover",
ride: !1,
touch: !0,
wrap: !0
},
ot = {
interval: "(number|boolean)",
keyboard: "boolean",
pause: "(string|boolean)",
ride: "(boolean|string)",
touch: "boolean",
wrap: "boolean"
};
class rt extends W {
constructor(t, e) {
super(t, e), this._interval = null, this._activeElement = null, this
._isSliding = !1, this.touchTimeout = null, this._swipeHelper =
null, this._indicatorsElement = z.findOne(".carousel-indicators",
this._element), this._addEventListeners(), this._config.ride ===
et && this.cycle()
}
static get Default() {
return st
}
static get DefaultType() {
return ot
}
static get NAME() {
return "carousel"
}
next() {
this._slide(U)
}
nextWhenVisible() {
!document.hidden && o(this._element) && this.next()
}
prev() {
this._slide(G)
}
pause() {
this._isSliding && i(this._element), this._clearInterval()
}
cycle() {
this._clearInterval(), this._updateInterval(), this._interval =
setInterval((() => this.nextWhenVisible()), this._config.interval)
}
_maybeEnableCycle() {
this._config.ride && (this._isSliding ? I.one(this._element, tt, (
() => this.cycle())) : this.cycle())
}
to(t) {
const e = this._getItems();
if (t > e.length - 1 || t < 0) return;
if (this._isSliding) return void I.one(this._element, tt, (() =>
this.to(t)));
const i = this._getItemIndex(this._getActive());
if (i === t) return;
const n = t > i ? U : G;
this._slide(n, e[t])
}
dispose() {
this._swipeHelper && this._swipeHelper.dispose(), super.dispose()
}
_configAfterMerge(t) {
return t.defaultInterval = t.interval, t
}
_addEventListeners() {
this._config.keyboard && I.on(this._element, "keydown.bs.carousel",
(t => this._keydown(t))), "hover" === this._config.pause && (I
.on(this._element, "mouseenter.bs.carousel", (() => this
.pause())), I.on(this._element, "mouseleave.bs.carousel", (() =>
this._maybeEnableCycle()))), this._config.touch && Y
.isSupported() && this._addTouchEventListeners()
}
_addTouchEventListeners() {
for (const t of z.find(".carousel-item img", this._element)) I.on(t,
"dragstart.bs.carousel", (t => t.preventDefault()));
const t = {
leftCallback: () => this._slide(this._directionToOrder(J)),
rightCallback: () => this._slide(this._directionToOrder(Z)),
endCallback: () => {
"hover" === this._config.pause && (this.pause(), this
.touchTimeout && clearTimeout(this.touchTimeout), this
.touchTimeout = setTimeout((() => this
._maybeEnableCycle()), 500 + this._config.interval))
}
};
this._swipeHelper = new Y(this._element, t)
}
_keydown(t) {
if (/input|textarea/i.test(t.target.tagName)) return;
const e = nt[t.key];
e && (t.preventDefault(), this._slide(this._directionToOrder(e)))
}
_getItemIndex(t) {
return this._getItems()
.indexOf(t)
}
_setActiveIndicatorElement(t) {
if (!this._indicatorsElement) return;
const e = z.findOne(".active", this._indicatorsElement);
e.classList.remove(it), e.removeAttribute("aria-current");
const i = z.findOne(`[data-bs-slide-to="${t}"]`, this
._indicatorsElement);
i && (i.classList.add(it), i.setAttribute("aria-current", "true"))
}
_updateInterval() {
const t = this._activeElement || this._getActive();
if (!t) return;
const e = Number.parseInt(t.getAttribute("data-bs-interval"), 10);
this._config.interval = e || this._config.defaultInterval
}
_slide(t, e = null) {
if (this._isSliding) return;
const i = this._getActive(),
n = t === U,
s = e || g(this._getItems(), i, n, this._config.wrap);
if (s === i) return;
const o = this._getItemIndex(s),
r = e => I.trigger(this._element, e, {
relatedTarget: s,
direction: this._orderToDirection(t),
from: this._getItemIndex(i),
to: o
});
if (r("slide.bs.carousel")
.defaultPrevented) return;
if (!i || !s) return;
const a = Boolean(this._interval);
this.pause(), this._isSliding = !0, this._setActiveIndicatorElement(
o), this._activeElement = s;
const l = n ? "carousel-item-start" : "carousel-item-end",
h = n ? "carousel-item-next" : "carousel-item-prev";
s.classList.add(h), c(s), i.classList.add(l), s.classList.add(l),
this._queueCallback((() => {
s.classList.remove(l, h), s.classList.add(it), i.classList
.remove(it, h, l), this._isSliding = !1, r(tt)
}), i, this._isAnimated()), a && this.cycle()
}
_isAnimated() {
return this._element.classList.contains("slide")
}
_getActive() {
return z.findOne(".active.carousel-item", this._element)
}
_getItems() {
return z.find(".carousel-item", this._element)
}
_clearInterval() {
this._interval && (clearInterval(this._interval), this._interval =
null)
}
_directionToOrder(t) {
return u() ? t === J ? G : U : t === J ? U : G
}
_orderToDirection(t) {
return u() ? t === G ? J : Z : t === G ? Z : J
}
static jQueryInterface(t) {
return this.each((function () {
const e = rt.getOrCreateInstance(this, t);
if ("number" != typeof t) {
if ("string" == typeof t) {
if (void 0 === e[t] || t.startsWith("_") ||
"constructor" === t) throw new TypeError(
`No method named "${t}"`);
e[t]()
}
} else e.to(t)
}))
}
}
I.on(document, "click.bs.carousel.data-api",
"[data-bs-slide], [data-bs-slide-to]", (function (t) {
const e = z.getElementFromSelector(this);
if (!e || !e.classList.contains(et)) return;
t.preventDefault();
const i = rt.getOrCreateInstance(e),
n = this.getAttribute("data-bs-slide-to");
return n ? (i.to(n), void i._maybeEnableCycle()) : "next" === H
.getDataAttribute(this, "slide") ? (i.next(), void i
._maybeEnableCycle()) : (i.prev(), void i._maybeEnableCycle())
})), I.on(window, "load.bs.carousel.data-api", (() => {
const t = z.find('[data-bs-ride="carousel"]');
for (const e of t) rt.getOrCreateInstance(e)
})), f(rt);
const at = "show",
lt = "collapse",
ct = "collapsing",
ht = '[data-bs-toggle="collapse"]',
dt = {
parent: null,
toggle: !0
},
ut = {
parent: "(null|element)",
toggle: "boolean"
};
class ft extends W {
constructor(t, e) {
super(t, e), this._isTransitioning = !1, this._triggerArray = [];
const i = z.find(ht);
for (const t of i) {
const e = z.getSelectorFromElement(t),
i = z.find(e)
.filter((t => t === this._element));
null !== e && i.length && this._triggerArray.push(t)
}
this._initializeChildren(), this._config.parent || this
._addAriaAndCollapsedClass(this._triggerArray, this._isShown()),
this._config.toggle && this.toggle()
}
static get Default() {
return dt
}
static get DefaultType() {
return ut
}
static get NAME() {
return "collapse"
}
toggle() {
this._isShown() ? this.hide() : this.show()
}
show() {
if (this._isTransitioning || this._isShown()) return;
let t = [];
if (this._config.parent && (t = this._getFirstLevelChildren(
".collapse.show, .collapse.collapsing")
.filter((t => t !== this._element))
.map((t => ft.getOrCreateInstance(t, {
toggle: !1
})))), t.length && t[0]._isTransitioning) return;
if (I.trigger(this._element, "show.bs.collapse")
.defaultPrevented) return;
for (const e of t) e.hide();
const e = this._getDimension();
this._element.classList.remove(lt), this._element.classList.add(ct),
this._element.style[e] = 0, this._addAriaAndCollapsedClass(this
._triggerArray, !0), this._isTransitioning = !0;
const i = `scroll${e[0].toUpperCase()+e.slice(1)}`;
this._queueCallback((() => {
this._isTransitioning = !1, this._element.classList.remove(
ct), this._element.classList.add(lt, at), this._element
.style[e] = "", I.trigger(this._element,
"shown.bs.collapse")
}), this._element, !0), this._element.style[e] =
`${this._element[i]}px`
}
hide() {
if (this._isTransitioning || !this._isShown()) return;
if (I.trigger(this._element, "hide.bs.collapse")
.defaultPrevented) return;
const t = this._getDimension();
this._element.style[t] =
`${this._element.getBoundingClientRect()[t]}px`, c(this._element),
this._element.classList.add(ct), this._element.classList.remove(
lt, at);
for (const t of this._triggerArray) {
const e = z.getElementFromSelector(t);
e && !this._isShown(e) && this._addAriaAndCollapsedClass([t], !1)
}
this._isTransitioning = !0, this._element.style[t] = "", this
._queueCallback((() => {
this._isTransitioning = !1, this._element.classList.remove(
ct), this._element.classList.add(lt), I.trigger(this
._element, "hidden.bs.collapse")
}), this._element, !0)
}
_isShown(t = this._element) {
return t.classList.contains(at)
}
_configAfterMerge(t) {
return t.toggle = Boolean(t.toggle), t.parent = s(t.parent), t
}
_getDimension() {
return this._element.classList.contains("collapse-horizontal") ?
"width" : "height"
}
_initializeChildren() {
if (!this._config.parent) return;
const t = this._getFirstLevelChildren(ht);
for (const e of t) {
const t = z.getElementFromSelector(e);
t && this._addAriaAndCollapsedClass([e], this._isShown(t))
}
}
_getFirstLevelChildren(t) {
const e = z.find(":scope .collapse .collapse", this._config.parent);
return z.find(t, this._config.parent)
.filter((t => !e.includes(t)))
}
_addAriaAndCollapsedClass(t, e) {
if (t.length)
for (const i of t) i.classList.toggle("collapsed", !e), i
.setAttribute("aria-expanded", e)
}
static jQueryInterface(t) {
const e = {};
return "string" == typeof t && /show|hide/.test(t) && (e.toggle = !
1), this.each((function () {
const i = ft.getOrCreateInstance(this, e);
if ("string" == typeof t) {
if (void 0 === i[t]) throw new TypeError(
`No method named "${t}"`);
i[t]()
}
}))
}
}
I.on(document, "click.bs.collapse.data-api", ht, (function (t) {
("A" === t.target.tagName || t.delegateTarget && "A" === t
.delegateTarget.tagName) && t.preventDefault();
for (const t of z.getMultipleElementsFromSelector(this)) ft
.getOrCreateInstance(t, {
toggle: !1
})
.toggle()
})), f(ft);
var pt = "top",
mt = "bottom",
gt = "right",
_t = "left",
bt = "auto",
vt = [pt, mt, gt, _t],
yt = "start",
wt = "end",
At = "clippingParents",
Et = "viewport",
Tt = "popper",
Ct = "reference",
Ot = vt.reduce((function (t, e) {
return t.concat([e + "-" + yt, e + "-" + wt])
}), []),
xt = [].concat(vt, [bt])
.reduce((function (t, e) {
return t.concat([e, e + "-" + yt, e + "-" + wt])
}), []),
kt = "beforeRead",
Lt = "read",
St = "afterRead",
Dt = "beforeMain",
It = "main",
Nt = "afterMain",
Pt = "beforeWrite",
jt = "write",
Mt = "afterWrite",
Ft = [kt, Lt, St, Dt, It, Nt, Pt, jt, Mt];

function Ht(t) {
return t ? (t.nodeName || "")
.toLowerCase() : null
}

function $t(t) {
if (null == t) return window;
if ("[object Window]" !== t.toString()) {
var e = t.ownerDocument;
return e && e.defaultView || window
}
return t
}

function Wt(t) {
return t instanceof $t(t)
.Element || t instanceof Element
}

function Bt(t) {
return t instanceof $t(t)
.HTMLElement || t instanceof HTMLElement
}

function zt(t) {
return "undefined" != typeof ShadowRoot && (t instanceof $t(t)
.ShadowRoot || t instanceof ShadowRoot)
}
const Rt = {
name: "applyStyles",
enabled: !0,
phase: "write",
fn: function (t) {
var e = t.state;
Object.keys(e.elements)
.forEach((function (t) {
var i = e.styles[t] || {},
n = e.attributes[t] || {},
s = e.elements[t];
Bt(s) && Ht(s) && (Object.assign(s.style, i), Object.keys(
n)
.forEach((function (t) {
var e = n[t];
!1 === e ? s.removeAttribute(t) : s
.setAttribute(t, !0 === e ? "" : e)
})))
}))
},
effect: function (t) {
var e = t.state,
i = {
popper: {
position: e.options.strategy,
left: "0",
top: "0",
margin: "0"
},
arrow: {
position: "absolute"
},
reference: {}
};
return Object.assign(e.elements.popper.style, i.popper), e
.styles = i, e.elements.arrow && Object.assign(e.elements.arrow
.style, i.arrow),
function () {
Object.keys(e.elements)
.forEach((function (t) {
var n = e.elements[t],
s = e.attributes[t] || {},
o = Object.keys(e.styles.hasOwnProperty(t) ? e
.styles[t] : i[t])
.reduce((function (t, e) {
return t[e] = "", t
}), {});
Bt(n) && Ht(n) && (Object.assign(n.style, o), Object
.keys(s)
.forEach((function (t) {
n.removeAttribute(t)
})))
}))
}
},
requires: ["computeStyles"]
};

function qt(t) {
return t.split("-")[0]
}
var Vt = Math.max,
Kt = Math.min,
Qt = Math.round;

function Xt() {
var t = navigator.userAgentData;
return null != t && t.brands ? t.brands.map((function (t) {
return t.brand + "/" + t.version
}))
.join(" ") : navigator.userAgent
}

function Yt() {
return !/^((?!chrome|android).)*safari/i.test(Xt())
}

function Ut(t, e, i) {
void 0 === e && (e = !1), void 0 === i && (i = !1);
var n = t.getBoundingClientRect(),
s = 1,
o = 1;
e && Bt(t) && (s = t.offsetWidth > 0 && Qt(n.width) / t.offsetWidth ||
1, o = t.offsetHeight > 0 && Qt(n.height) / t.offsetHeight || 1);
var r = (Wt(t) ? $t(t) : window)
.visualViewport,
a = !Yt() && i,
l = (n.left + (a && r ? r.offsetLeft : 0)) / s,
c = (n.top + (a && r ? r.offsetTop : 0)) / o,
h = n.width / s,
d = n.height / o;
return {
width: h,
height: d,
top: c,
right: l + h,
bottom: c + d,
left: l,
x: l,
y: c
}
}

function Gt(t) {
var e = Ut(t),
i = t.offsetWidth,
n = t.offsetHeight;
return Math.abs(e.width - i) <= 1 && (i = e.width), Math.abs(e.height -
n) <= 1 && (n = e.height), {
x: t.offsetLeft,
y: t.offsetTop,
width: i,
height: n
}
}

function Jt(t, e) {
var i = e.getRootNode && e.getRootNode();
if (t.contains(e)) return !0;
if (i && zt(i)) {
var n = e;
do {
if (n && t.isSameNode(n)) return !0;
n = n.parentNode || n.host
} while (n)
}
return !1
}

function Zt(t) {
return $t(t)
.getComputedStyle(t)
}

function te(t) {
return ["table", "td", "th"].indexOf(Ht(t)) >= 0
}

function ee(t) {
return ((Wt(t) ? t.ownerDocument : t.document) || window.document)
.documentElement
}

function ie(t) {
return "html" === Ht(t) ? t : t.assignedSlot || t.parentNode || (zt(t) ?
t.host : null) || ee(t)
}

function ne(t) {
return Bt(t) && "fixed" !== Zt(t)
.position ? t.offsetParent : null
}

function se(t) {
for (var e = $t(t), i = ne(t); i && te(i) && "static" === Zt(i)
.position;) i = ne(i);
return i && ("html" === Ht(i) || "body" === Ht(i) && "static" === Zt(i)
.position) ? e : i || function (t) {
var e = /firefox/i.test(Xt());
if (/Trident/i.test(Xt()) && Bt(t) && "fixed" === Zt(t)
.position) return null;
var i = ie(t);
for (zt(i) && (i = i.host); Bt(i) && ["html", "body"].indexOf(Ht(
i)) < 0;) {
var n = Zt(i);
if ("none" !== n.transform || "none" !== n.perspective ||
"paint" === n.contain || -1 !== ["transform", "perspective"]
.indexOf(n.willChange) || e && "filter" === n.willChange || e &&
n.filter && "none" !== n.filter) return i;
i = i.parentNode
}
return null
}(t) || e
}

function oe(t) {
return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y"
}

function re(t, e, i) {
return Vt(t, Kt(e, i))
}

function ae(t) {
return Object.assign({}, {
top: 0,
right: 0,
bottom: 0,
left: 0
}, t)
}

function le(t, e) {
return e.reduce((function (e, i) {
return e[i] = t, e
}), {})
}
const ce = {
name: "arrow",
enabled: !0,
phase: "main",
fn: function (t) {
var e, i = t.state,
n = t.name,
s = t.options,
o = i.elements.arrow,
r = i.modifiersData.popperOffsets,
a = qt(i.placement),
l = oe(a),
c = [_t, gt].indexOf(a) >= 0 ? "height" : "width";
if (o && r) {
var h = function (t, e) {
return ae("number" != typeof (t = "function" == typeof t ?
t(Object.assign({}, e.rects, {
placement: e.placement
})) : t) ? t : le(t, vt))
}(s.padding, i),
d = Gt(o),
u = "y" === l ? pt : _t,
f = "y" === l ? mt : gt,
p = i.rects.reference[c] + i.rects.reference[l] - r[l] - i
.rects.popper[c],
m = r[l] - i.rects.reference[l],
g = se(o),
_ = g ? "y" === l ? g.clientHeight || 0 : g.clientWidth || 0 :
0,
b = p / 2 - m / 2,
v = h[u],
y = _ - d[c] - h[f],
w = _ / 2 - d[c] / 2 + b,
A = re(v, w, y),
E = l;
i.modifiersData[n] = ((e = {})[E] = A, e.centerOffset = A - w,
e)
}
},
effect: function (t) {
var e = t.state,
i = t.options.element,
n = void 0 === i ? "[data-popper-arrow]" : i;
null != n && ("string" != typeof n || (n = e.elements.popper
.querySelector(n))) && Jt(e.elements.popper, n) && (e.elements
.arrow = n)
},
requires: ["popperOffsets"],
requiresIfExists: ["preventOverflow"]
};

function he(t) {
return t.split("-")[1]
}
var de = {
top: "auto",
right: "auto",
bottom: "auto",
left: "auto"
};

function ue(t) {
var e, i = t.popper,
n = t.popperRect,
s = t.placement,
o = t.variation,
r = t.offsets,
a = t.position,
l = t.gpuAcceleration,
c = t.adaptive,
h = t.roundOffsets,
d = t.isFixed,
u = r.x,
f = void 0 === u ? 0 : u,
p = r.y,
m = void 0 === p ? 0 : p,
g = "function" == typeof h ? h({
x: f,
y: m
}) : {
x: f,
y: m
};
f = g.x, m = g.y;
var _ = r.hasOwnProperty("x"),
b = r.hasOwnProperty("y"),
v = _t,
y = pt,
w = window;
if (c) {
var A = se(i),
E = "clientHeight",
T = "clientWidth";
A === $t(i) && "static" !== Zt(A = ee(i))
.position && "absolute" === a && (E = "scrollHeight", T =
"scrollWidth"), (s === pt || (s === _t || s === gt) && o ===
wt) && (y = mt, m -= (d && A === w && w.visualViewport ? w
.visualViewport.height : A[E]) - n.height, m *= l ? 1 : -1), s !==
_t && (s !== pt && s !== mt || o !== wt) || (v = gt, f -= (d &&
A === w && w.visualViewport ? w.visualViewport.width : A[T]) - n
.width, f *= l ? 1 : -1)
}
var C, O = Object.assign({
position: a
}, c && de),
x = !0 === h ? function (t) {
var e = t.x,
i = t.y,
n = window.devicePixelRatio || 1;
return {
x: Qt(e * n) / n || 0,
y: Qt(i * n) / n || 0
}
}({
x: f,
y: m
}) : {
x: f,
y: m
};
return f = x.x, m = x.y, l ? Object.assign({}, O, ((C = {})[y] = b ?
"0" : "", C[v] = _ ? "0" : "", C.transform = (w
.devicePixelRatio || 1) <= 1 ? "translate(" + f + "px, " + m +
"px)" : "translate3d(" + f + "px, " + m + "px, 0)", C)) : Object
.assign({}, O, ((e = {})[y] = b ? m + "px" : "", e[v] = _ ? f + "px" :
"", e.transform = "", e))
}
const fe = {
name: "computeStyles",
enabled: !0,
phase: "beforeWrite",
fn: function (t) {
var e = t.state,
i = t.options,
n = i.gpuAcceleration,
s = void 0 === n || n,
o = i.adaptive,
r = void 0 === o || o,
a = i.roundOffsets,
l = void 0 === a || a,
c = {
placement: qt(e.placement),
variation: he(e.placement),
popper: e.elements.popper,
popperRect: e.rects.popper,
gpuAcceleration: s,
isFixed: "fixed" === e.options.strategy
};
null != e.modifiersData.popperOffsets && (e.styles.popper = Object
.assign({}, e.styles.popper, ue(Object.assign({}, c, {
offsets: e.modifiersData.popperOffsets,
position: e.options.strategy,
adaptive: r,
roundOffsets: l
})))), null != e.modifiersData.arrow && (e.styles.arrow =
Object.assign({}, e.styles.arrow, ue(Object.assign({}, c, {
offsets: e.modifiersData.arrow,
position: "absolute",
adaptive: !1,
roundOffsets: l
})))), e.attributes.popper = Object.assign({}, e.attributes
.popper, {
"data-popper-placement": e.placement
})
},
data: {}
};
var pe = {
passive: !0
};
const me = {
name: "eventListeners",
enabled: !0,
phase: "write",
fn: function () {},
effect: function (t) {
var e = t.state,
i = t.instance,
n = t.options,
s = n.scroll,
o = void 0 === s || s,
r = n.resize,
a = void 0 === r || r,
l = $t(e.elements.popper),
c = [].concat(e.scrollParents.reference, e.scrollParents
.popper);
return o && c.forEach((function (t) {
t.addEventListener("scroll", i.update, pe)
})), a && l.addEventListener("resize", i.update, pe),
function () {
o && c.forEach((function (t) {
t.removeEventListener("scroll", i.update, pe)
})), a && l.removeEventListener("resize", i.update, pe)
}
},
data: {}
};
var ge = {
left: "right",
right: "left",
bottom: "top",
top: "bottom"
};

function _e(t) {
return t.replace(/left|right|bottom|top/g, (function (t) {
return ge[t]
}))
}
var be = {
start: "end",
end: "start"
};

function ve(t) {
return t.replace(/start|end/g, (function (t) {
return be[t]
}))
}

function ye(t) {
var e = $t(t);
return {
scrollLeft: e.pageXOffset,
scrollTop: e.pageYOffset
}
}

function we(t) {
return Ut(ee(t))
.left + ye(t)
.scrollLeft
}

function Ae(t) {
var e = Zt(t),
i = e.overflow,
n = e.overflowX,
s = e.overflowY;
return /auto|scroll|overlay|hidden/.test(i + s + n)
}

function Ee(t) {
return ["html", "body", "#document"].indexOf(Ht(t)) >= 0 ? t
.ownerDocument.body : Bt(t) && Ae(t) ? t : Ee(ie(t))
}

function Te(t, e) {
var i;
void 0 === e && (e = []);
var n = Ee(t),
s = n === (null == (i = t.ownerDocument) ? void 0 : i.body),
o = $t(n),
r = s ? [o].concat(o.visualViewport || [], Ae(n) ? n : []) : n,
a = e.concat(r);
return s ? a : a.concat(Te(ie(r)))
}

function Ce(t) {
return Object.assign({}, t, {
left: t.x,
top: t.y,
right: t.x + t.width,
bottom: t.y + t.height
})
}

function Oe(t, e, i) {
return e === Et ? Ce(function (t, e) {
var i = $t(t),
n = ee(t),
s = i.visualViewport,
o = n.clientWidth,
r = n.clientHeight,
a = 0,
l = 0;
if (s) {
o = s.width, r = s.height;
var c = Yt();
(c || !c && "fixed" === e) && (a = s.offsetLeft, l = s
.offsetTop)
}
return {
width: o,
height: r,
x: a + we(t),
y: l
}
}(t, i)) : Wt(e) ? function (t, e) {
var i = Ut(t, !1, "fixed" === e);
return i.top = i.top + t.clientTop, i.left = i.left + t.clientLeft,
i.bottom = i.top + t.clientHeight, i.right = i.left + t
.clientWidth, i.width = t.clientWidth, i.height = t.clientHeight,
i.x = i.left, i.y = i.top, i
}(e, i) : Ce(function (t) {
var e, i = ee(t),
n = ye(t),
s = null == (e = t.ownerDocument) ? void 0 : e.body,
o = Vt(i.scrollWidth, i.clientWidth, s ? s.scrollWidth : 0, s ?
s.clientWidth : 0),
r = Vt(i.scrollHeight, i.clientHeight, s ? s.scrollHeight : 0,
s ? s.clientHeight : 0),
a = -n.scrollLeft + we(t),
l = -n.scrollTop;
return "rtl" === Zt(s || i)
.direction && (a += Vt(i.clientWidth, s ? s.clientWidth : 0) -
o), {
width: o,
height: r,
x: a,
y: l
}
}(ee(t)))
}

function xe(t) {
var e, i = t.reference,
n = t.element,
s = t.placement,
o = s ? qt(s) : null,
r = s ? he(s) : null,
a = i.x + i.width / 2 - n.width / 2,
l = i.y + i.height / 2 - n.height / 2;
switch (o) {
case pt:
e = {
x: a,
y: i.y - n.height
};
break;
case mt:
e = {
x: a,
y: i.y + i.height
};
break;
case gt:
e = {
x: i.x + i.width,
y: l
};
break;
case _t:
e = {
x: i.x - n.width,
y: l
};
break;
default:
e = {
x: i.x,
y: i.y
}
}
var c = o ? oe(o) : null;
if (null != c) {
var h = "y" === c ? "height" : "width";
switch (r) {
case yt:
e[c] = e[c] - (i[h] / 2 - n[h] / 2);
break;
case wt:
e[c] = e[c] + (i[h] / 2 - n[h] / 2)
}
}
return e
}

function ke(t, e) {
void 0 === e && (e = {});
var i = e,
n = i.placement,
s = void 0 === n ? t.placement : n,
o = i.strategy,
r = void 0 === o ? t.strategy : o,
a = i.boundary,
l = void 0 === a ? At : a,
c = i.rootBoundary,
h = void 0 === c ? Et : c,
d = i.elementContext,
u = void 0 === d ? Tt : d,
f = i.altBoundary,
p = void 0 !== f && f,
m = i.padding,
g = void 0 === m ? 0 : m,
_ = ae("number" != typeof g ? g : le(g, vt)),
b = u === Tt ? Ct : Tt,
v = t.rects.popper,
y = t.elements[p ? b : u],
w = function (t, e, i, n) {
var s = "clippingParents" === e ? function (t) {
var e = Te(ie(t)),
i = ["absolute", "fixed"].indexOf(Zt(t)
.position) >= 0 && Bt(t) ? se(t) : t;
return Wt(i) ? e.filter((function (t) {
return Wt(t) && Jt(t, i) && "body" !== Ht(t)
})) : []
}(t) : [].concat(e),
o = [].concat(s, [i]),
r = o[0],
a = o.reduce((function (e, i) {
var s = Oe(t, i, n);
return e.top = Vt(s.top, e.top), e.right = Kt(s.right, e
.right), e.bottom = Kt(s.bottom, e.bottom), e.left = Vt(
s.left, e.left), e
}), Oe(t, r, n));
return a.width = a.right - a.left, a.height = a.bottom - a.top, a
.x = a.left, a.y = a.top, a
}(Wt(y) ? y : y.contextElement || ee(t.elements.popper), l, h, r),
A = Ut(t.elements.reference),
E = xe({
reference: A,
element: v,
strategy: "absolute",
placement: s
}),
T = Ce(Object.assign({}, v, E)),
C = u === Tt ? T : A,
O = {
top: w.top - C.top + _.top,
bottom: C.bottom - w.bottom + _.bottom,
left: w.left - C.left + _.left,
right: C.right - w.right + _.right
},
x = t.modifiersData.offset;
if (u === Tt && x) {
var k = x[s];
Object.keys(O)
.forEach((function (t) {
var e = [gt, mt].indexOf(t) >= 0 ? 1 : -1,
i = [pt, mt].indexOf(t) >= 0 ? "y" : "x";
O[t] += k[i] * e
}))
}
return O
}

function Le(t, e) {
void 0 === e && (e = {});
var i = e,
n = i.placement,
s = i.boundary,
o = i.rootBoundary,
r = i.padding,
a = i.flipVariations,
l = i.allowedAutoPlacements,
c = void 0 === l ? xt : l,
h = he(n),
d = h ? a ? Ot : Ot.filter((function (t) {
return he(t) === h
})) : vt,
u = d.filter((function (t) {
return c.indexOf(t) >= 0
}));
0 === u.length && (u = d);
var f = u.reduce((function (e, i) {
return e[i] = ke(t, {
placement: i,
boundary: s,
rootBoundary: o,
padding: r
})[qt(i)], e
}), {});
return Object.keys(f)
.sort((function (t, e) {
return f[t] - f[e]
}))
}
const Se = {
name: "flip",
enabled: !0,
phase: "main",
fn: function (t) {
var e = t.state,
i = t.options,
n = t.name;
if (!e.modifiersData[n]._skip) {
for (var s = i.mainAxis, o = void 0 === s || s, r = i.altAxis,
a = void 0 === r || r, l = i.fallbackPlacements, c = i
.padding, h = i.boundary, d = i.rootBoundary, u = i
.altBoundary, f = i.flipVariations, p = void 0 === f || f,
m = i.allowedAutoPlacements, g = e.options.placement, _ =
qt(g), b = l || (_ !== g && p ? function (t) {
if (qt(t) === bt) return [];
var e = _e(t);
return [ve(t), e, ve(e)]
}(g) : [_e(g)]), v = [g].concat(b)
.reduce((function (t, i) {
return t.concat(qt(i) === bt ? Le(e, {
placement: i,
boundary: h,
rootBoundary: d,
padding: c,
flipVariations: p,
allowedAutoPlacements: m
}) : i)
}), []), y = e.rects.reference, w = e.rects.popper, A =
new Map, E = !0, T = v[0], C = 0; C < v.length; C++) {
var O = v[C],
x = qt(O),
k = he(O) === yt,
L = [pt, mt].indexOf(x) >= 0,
S = L ? "width" : "height",
D = ke(e, {
placement: O,
boundary: h,
rootBoundary: d,
altBoundary: u,
padding: c
}),
I = L ? k ? gt : _t : k ? mt : pt;
y[S] > w[S] && (I = _e(I));
var N = _e(I),
P = [];
if (o && P.push(D[x] <= 0), a && P.push(D[I] <= 0, D[N] <= 0),
P.every((function (t) {
return t
}))) {
T = O, E = !1;
break
}
A.set(O, P)
}
if (E)
for (var j = function (t) {
var e = v.find((function (e) {
var i = A.get(e);
if (i) return i.slice(0, t)
.every((function (t) {
return t
}))
}));
if (e) return T = e, "break"
}, M = p ? 3 : 1; M > 0 && "break" !== j(M); M--);
e.placement !== T && (e.modifiersData[n]._skip = !0, e
.placement = T, e.reset = !0)
}
},
requiresIfExists: ["offset"],
data: {
_skip: !1
}
};

function De(t, e, i) {
return void 0 === i && (i = {
x: 0,
y: 0
}), {
top: t.top - e.height - i.y,
right: t.right - e.width + i.x,
bottom: t.bottom - e.height + i.y,
left: t.left - e.width - i.x
}
}

function Ie(t) {
return [pt, gt, mt, _t].some((function (e) {
return t[e] >= 0
}))
}
const Ne = {
name: "hide",
enabled: !0,
phase: "main",
requiresIfExists: ["preventOverflow"],
fn: function (t) {
var e = t.state,
i = t.name,
n = e.rects.reference,
s = e.rects.popper,
o = e.modifiersData.preventOverflow,
r = ke(e, {
elementContext: "reference"
}),
a = ke(e, {
altBoundary: !0
}),
l = De(r, n),
c = De(a, s, o),
h = Ie(l),
d = Ie(c);
e.modifiersData[i] = {
referenceClippingOffsets: l,
popperEscapeOffsets: c,
isReferenceHidden: h,
hasPopperEscaped: d
}, e.attributes.popper = Object.assign({}, e.attributes
.popper, {
"data-popper-reference-hidden": h,
"data-popper-escaped": d
})
}
},
Pe = {
name: "offset",
enabled: !0,
phase: "main",
requires: ["popperOffsets"],
fn: function (t) {
var e = t.state,
i = t.options,
n = t.name,
s = i.offset,
o = void 0 === s ? [0, 0] : s,
r = xt.reduce((function (t, i) {
return t[i] = function (t, e, i) {
var n = qt(t),
s = [_t, pt].indexOf(n) >= 0 ? -1 : 1,
o = "function" == typeof i ? i(Object.assign({},
e, {
placement: t
})) : i,
r = o[0],
a = o[1];
return r = r || 0, a = (a || 0) * s, [_t, gt].indexOf(
n) >= 0 ? {
x: a,
y: r
} : {
x: r,
y: a
}
}(i, e.rects, o), t
}), {}),
a = r[e.placement],
l = a.x,
c = a.y;
null != e.modifiersData.popperOffsets && (e.modifiersData
.popperOffsets.x += l, e.modifiersData.popperOffsets.y += c),
e.modifiersData[n] = r
}
},
je = {
name: "popperOffsets",
enabled: !0,
phase: "read",
fn: function (t) {
var e = t.state,
i = t.name;
e.modifiersData[i] = xe({
reference: e.rects.reference,
element: e.rects.popper,
strategy: "absolute",
placement: e.placement
})
},
data: {}
},
Me = {
name: "preventOverflow",
enabled: !0,
phase: "main",
fn: function (t) {
var e = t.state,
i = t.options,
n = t.name,
s = i.mainAxis,
o = void 0 === s || s,
r = i.altAxis,
a = void 0 !== r && r,
l = i.boundary,
c = i.rootBoundary,
h = i.altBoundary,
d = i.padding,
u = i.tether,
f = void 0 === u || u,
p = i.tetherOffset,
m = void 0 === p ? 0 : p,
g = ke(e, {
boundary: l,
rootBoundary: c,
padding: d,
altBoundary: h
}),
_ = qt(e.placement),
b = he(e.placement),
v = !b,
y = oe(_),
w = "x" === y ? "y" : "x",
A = e.modifiersData.popperOffsets,
E = e.rects.reference,
T = e.rects.popper,
C = "function" == typeof m ? m(Object.assign({}, e.rects, {
placement: e.placement
})) : m,
O = "number" == typeof C ? {
mainAxis: C,
altAxis: C
} : Object.assign({
mainAxis: 0,
altAxis: 0
}, C),
x = e.modifiersData.offset ? e.modifiersData.offset[e
.placement] : null,
k = {
x: 0,
y: 0
};
if (A) {
if (o) {
var L, S = "y" === y ? pt : _t,
D = "y" === y ? mt : gt,
I = "y" === y ? "height" : "width",
N = A[y],
P = N + g[S],
j = N - g[D],
M = f ? -T[I] / 2 : 0,
F = b === yt ? E[I] : T[I],
H = b === yt ? -T[I] : -E[I],
$ = e.elements.arrow,
W = f && $ ? Gt($) : {
width: 0,
height: 0
},
B = e.modifiersData["arrow#persistent"] ? e.modifiersData[
"arrow#persistent"].padding : {
top: 0,
right: 0,
bottom: 0,
left: 0
},
z = B[S],
R = B[D],
q = re(0, E[I], W[I]),
V = v ? E[I] / 2 - M - q - z - O.mainAxis : F - q - z - O
.mainAxis,
K = v ? -E[I] / 2 + M + q + R + O.mainAxis : H + q + R + O
.mainAxis,
Q = e.elements.arrow && se(e.elements.arrow),
X = Q ? "y" === y ? Q.clientTop || 0 : Q.clientLeft || 0 :
0,
Y = null != (L = null == x ? void 0 : x[y]) ? L : 0,
U = N + K - Y,
G = re(f ? Kt(P, N + V - Y - X) : P, N, f ? Vt(j, U) : j);
A[y] = G, k[y] = G - N
}
if (a) {
var J, Z = "x" === y ? pt : _t,
tt = "x" === y ? mt : gt,
et = A[w],
it = "y" === w ? "height" : "width",
nt = et + g[Z],
st = et - g[tt],
ot = -1 !== [pt, _t].indexOf(_),
rt = null != (J = null == x ? void 0 : x[w]) ? J : 0,
at = ot ? nt : et - E[it] - T[it] - rt + O.altAxis,
lt = ot ? et + E[it] + T[it] - rt - O.altAxis : st,
ct = f && ot ? function (t, e, i) {
var n = re(t, e, i);
return n > i ? i : n
}(at, et, lt) : re(f ? at : nt, et, f ? lt : st);
A[w] = ct, k[w] = ct - et
}
e.modifiersData[n] = k
}
},
requiresIfExists: ["offset"]
};

function Fe(t, e, i) {
void 0 === i && (i = !1);
var n, s, o = Bt(e),
r = Bt(e) && function (t) {
var e = t.getBoundingClientRect(),
i = Qt(e.width) / t.offsetWidth || 1,
n = Qt(e.height) / t.offsetHeight || 1;
return 1 !== i || 1 !== n
}(e),
a = ee(e),
l = Ut(t, r, i),
c = {
scrollLeft: 0,
scrollTop: 0
},
h = {
x: 0,
y: 0
};
return (o || !o && !i) && (("body" !== Ht(e) || Ae(a)) && (c = (n =
e) !== $t(n) && Bt(n) ? {
scrollLeft: (s = n)
.scrollLeft,
scrollTop: s.scrollTop
} : ye(n)), Bt(e) ? ((h = Ut(e, !0))
.x += e.clientLeft, h.y += e.clientTop) : a && (h.x = we(a))), {
x: l.left + c.scrollLeft - h.x,
y: l.top + c.scrollTop - h.y,
width: l.width,
height: l.height
}
}

function He(t) {
var e = new Map,
i = new Set,
n = [];

function s(t) {
i.add(t.name), [].concat(t.requires || [], t.requiresIfExists || [])
.forEach((function (t) {
if (!i.has(t)) {
var n = e.get(t);
n && s(n)
}
})), n.push(t)
}
return t.forEach((function (t) {
e.set(t.name, t)
})), t.forEach((function (t) {
i.has(t.name) || s(t)
})), n
}
var $e = {
placement: "bottom",
modifiers: [],
strategy: "absolute"
};

function We() {
for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[
i] = arguments[i];
return !e.some((function (t) {
return !(t && "function" == typeof t.getBoundingClientRect)
}))
}

function Be(t) {
void 0 === t && (t = {});
var e = t,
i = e.defaultModifiers,
n = void 0 === i ? [] : i,
s = e.defaultOptions,
o = void 0 === s ? $e : s;
return function (t, e, i) {
void 0 === i && (i = o);
var s, r, a = {
placement: "bottom",
orderedModifiers: [],
options: Object.assign({}, $e, o),
modifiersData: {},
elements: {
reference: t,
popper: e
},
attributes: {},
styles: {}
},
l = [],
c = !1,
h = {
state: a,
setOptions: function (i) {
var s = "function" == typeof i ? i(a.options) : i;
d(), a.options = Object.assign({}, o, a.options, s), a
.scrollParents = {
reference: Wt(t) ? Te(t) : t.contextElement ? Te(t
.contextElement) : [],
popper: Te(e)
};
var r, c, u = function (t) {
var e = He(t);
return Ft.reduce((function (t, i) {
return t.concat(e.filter((function (t) {
return t.phase === i
})))
}), [])
}((r = [].concat(n, a.options.modifiers), c = r.reduce((
function (t, e) {
var i = t[e.name];
return t[e.name] = i ? Object.assign({}, i, e, {
options: Object.assign({}, i.options, e
.options),
data: Object.assign({}, i.data, e.data)
}) : e, t
}), {}), Object.keys(c)
.map((function (t) {
return c[t]
}))));
return a.orderedModifiers = u.filter((function (t) {
return t.enabled
})), a.orderedModifiers.forEach((function (t) {
var e = t.name,
i = t.options,
n = void 0 === i ? {} : i,
s = t.effect;
if ("function" == typeof s) {
var o = s({
state: a,
name: e,
instance: h,
options: n
});
l.push(o || function () {})
}
})), h.update()
},
forceUpdate: function () {
if (!c) {
var t = a.elements,
e = t.reference,
i = t.popper;
if (We(e, i)) {
a.rects = {
reference: Fe(e, se(i), "fixed" === a.options
.strategy),
popper: Gt(i)
}, a.reset = !1, a.placement = a.options.placement, a
.orderedModifiers.forEach((function (t) {
return a.modifiersData[t.name] = Object
.assign({}, t.data)
}));
for (var n = 0; n < a.orderedModifiers.length; n++)
if (!0 !== a.reset) {
var s = a.orderedModifiers[n],
o = s.fn,
r = s.options,
l = void 0 === r ? {} : r,
d = s.name;
"function" == typeof o && (a = o({
state: a,
options: l,
name: d,
instance: h
}) || a)
} else a.reset = !1, n = -1
}
}
},
update: (s = function () {
return new Promise((function (t) {
h.forceUpdate(), t(a)
}))
}, function () {
return r || (r = new Promise((function (t) {
Promise.resolve()
.then((function () {
r = void 0, t(s())
}))
}))), r
}),
destroy: function () {
d(), c = !0
}
};
if (!We(t, e)) return h;

function d() {
l.forEach((function (t) {
return t()
})), l = []
}
return h.setOptions(i)
.then((function (t) {
!c && i.onFirstUpdate && i.onFirstUpdate(t)
})), h
}
}
var ze = Be(),
Re = Be({
defaultModifiers: [me, je, fe, Rt]
}),
qe = Be({
defaultModifiers: [me, je, fe, Rt, Pe, Se, Me, ce, Ne]
});
const Ve = Object.freeze(Object.defineProperty({
__proto__: null,
popperGenerator: Be,
detectOverflow: ke,
createPopperBase: ze,
createPopper: qe,
createPopperLite: Re,
top: pt,
bottom: mt,
right: gt,
left: _t,
auto: bt,
basePlacements: vt,
start: yt,
end: wt,
clippingParents: At,
viewport: Et,
popper: Tt,
reference: Ct,
variationPlacements: Ot,
placements: xt,
beforeRead: kt,
read: Lt,
afterRead: St,
beforeMain: Dt,
main: It,
afterMain: Nt,
beforeWrite: Pt,
write: jt,
afterWrite: Mt,
modifierPhases: Ft,
applyStyles: Rt,
arrow: ce,
computeStyles: fe,
eventListeners: me,
flip: Se,
hide: Ne,
offset: Pe,
popperOffsets: je,
preventOverflow: Me
}, Symbol.toStringTag, {
value: "Module"
})),
Ke = "dropdown",
Qe = "ArrowUp",
Xe = "ArrowDown",
Ye = "click.bs.dropdown.data-api",
Ue = "keydown.bs.dropdown.data-api",
Ge = "show",
Je = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',
Ze = `${Je}.show`,
ti = ".dropdown-menu",
ei = u() ? "top-end" : "top-start",
ii = u() ? "top-start" : "top-end",
ni = u() ? "bottom-end" : "bottom-start",
si = u() ? "bottom-start" : "bottom-end",
oi = u() ? "left-start" : "right-start",
ri = u() ? "right-start" : "left-start",
ai = {
autoClose: !0,
boundary: "clippingParents",
display: "dynamic",
offset: [0, 2],
popperConfig: null,
reference: "toggle"
},
li = {
autoClose: "(boolean|string)",
boundary: "(string|element)",
display: "string",
offset: "(array|string|function)",
popperConfig: "(null|object|function)",
reference: "(string|element|object)"
};
class ci extends W {
constructor(t, e) {
super(t, e), this._popper = null, this._parent = this._element
.parentNode, this._menu = z.next(this._element, ti)[0] || z.prev(
this._element, ti)[0] || z.findOne(ti, this._parent), this
._inNavbar = this._detectNavbar()
}
static get Default() {
return ai
}
static get DefaultType() {
return li
}
static get NAME() {
return Ke
}
toggle() {
return this._isShown() ? this.hide() : this.show()
}
show() {
if (r(this._element) || this._isShown()) return;
const t = {
relatedTarget: this._element
};
if (!I.trigger(this._element, "show.bs.dropdown", t)
.defaultPrevented) {
if (this._createPopper(), "ontouchstart" in document
.documentElement && !this._parent.closest(".navbar-nav"))
for (const t of [].concat(...document.body.children)) I.on(t,
"mouseover", l);
this._element.focus(), this._element.setAttribute("aria-expanded",
!0), this._menu.classList.add(Ge), this._element.classList
.add(Ge), I.trigger(this._element, "shown.bs.dropdown", t)
}
}
hide() {
if (r(this._element) || !this._isShown()) return;
const t = {
relatedTarget: this._element
};
this._completeHide(t)
}
dispose() {
this._popper && this._popper.destroy(), super.dispose()
}
update() {
this._inNavbar = this._detectNavbar(), this._popper && this._popper
.update()
}
_completeHide(t) {
if (!I.trigger(this._element, "hide.bs.dropdown", t)
.defaultPrevented) {
if ("ontouchstart" in document.documentElement)
for (const t of [].concat(...document.body.children)) I.off(t,
"mouseover", l);
this._popper && this._popper.destroy(), this._menu.classList
.remove(Ge), this._element.classList.remove(Ge), this._element
.setAttribute("aria-expanded", "false"), H.removeDataAttribute(
this._menu, "popper"), I.trigger(this._element,
"hidden.bs.dropdown", t)
}
}
_getConfig(t) {
if ("object" == typeof (t = super._getConfig(t))
.reference && !n(t.reference) && "function" != typeof t.reference
.getBoundingClientRect) throw new TypeError(
`${Ke.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`
);
return t
}
_createPopper() {
if (void 0 === Ve) throw new TypeError(
"Bootstrap's dropdowns require Popper (https://popper.js.org)"
);
let t = this._element;
"parent" === this._config.reference ? t = this._parent : n(this
._config.reference) ? t = s(this._config.reference) :
"object" == typeof this._config.reference && (t = this._config
.reference);
const e = this._getPopperConfig();
this._popper = qe(t, this._menu, e)
}
_isShown() {
return this._menu.classList.contains(Ge)
}
_getPlacement() {
const t = this._parent;
if (t.classList.contains("dropend")) return oi;
if (t.classList.contains("dropstart")) return ri;
if (t.classList.contains("dropup-center")) return "top";
if (t.classList.contains("dropdown-center")) return "bottom";
const e = "end" === getComputedStyle(this._menu)
.getPropertyValue("--bs-position")
.trim();
return t.classList.contains("dropup") ? e ? ii : ei : e ? si : ni
}
_detectNavbar() {
return null !== this._element.closest(".navbar")
}
_getOffset() {
const {
offset: t
} = this._config;
return "string" == typeof t ? t.split(",")
.map((t => Number.parseInt(t, 10))) : "function" == typeof t ?
e => t(e, this._element) : t
}
_getPopperConfig() {
const t = {
placement: this._getPlacement(),
modifiers: [{
name: "preventOverflow",
options: {
boundary: this._config.boundary
}
}, {
name: "offset",
options: {
offset: this._getOffset()
}
}]
};
return (this._inNavbar || "static" === this._config.display) && (H
.setDataAttribute(this._menu, "popper", "static"), t
.modifiers = [{
name: "applyStyles",
enabled: !1
}]), {
...t,
...p(this._config.popperConfig, [t])
}
}
_selectMenuItem({
key: t,
target: e
}) {
const i = z.find(
".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
this._menu)
.filter((t => o(t)));
i.length && g(i, e, t === Xe, !i.includes(e))
.focus()
}
static jQueryInterface(t) {
return this.each((function () {
const e = ci.getOrCreateInstance(this, t);
if ("string" == typeof t) {
if (void 0 === e[t]) throw new TypeError(
`No method named "${t}"`);
e[t]()
}
}))
}
static clearMenus(t) {
if (2 === t.button || "keyup" === t.type && "Tab" !== t.key) return;
const e = z.find(Ze);
for (const i of e) {
const e = ci.getInstance(i);
if (!e || !1 === e._config.autoClose) continue;
const n = t.composedPath(),
s = n.includes(e._menu);
if (n.includes(e._element) || "inside" === e._config.autoClose &&
!s || "outside" === e._config.autoClose && s) continue;
if (e._menu.contains(t.target) && ("keyup" === t.type && "Tab" ===
t.key || /input|select|option|textarea|form/i.test(t.target
.tagName))) continue;
const o = {
relatedTarget: e._element
};
"click" === t.type && (o.clickEvent = t), e._completeHide(o)
}
}
static dataApiKeydownHandler(t) {
const e = /input|textarea/i.test(t.target.tagName),
i = "Escape" === t.key,
n = [Qe, Xe].includes(t.key);
if (!n && !i) return;
if (e && !i) return;
t.preventDefault();
const s = this.matches(Je) ? this : z.prev(this, Je)[0] || z.next(
this, Je)[0] || z.findOne(Je, t.delegateTarget.parentNode),
o = ci.getOrCreateInstance(s);
if (n) return t.stopPropagation(), o.show(), void o._selectMenuItem(
t);
o._isShown() && (t.stopPropagation(), o.hide(), s.focus())
}
}
I.on(document, Ue, Je, ci.dataApiKeydownHandler), I.on(document, Ue, ti,
ci.dataApiKeydownHandler), I.on(document, Ye, ci.clearMenus), I.on(
document, "keyup.bs.dropdown.data-api", ci.clearMenus), I.on(document,
Ye, Je, (function (t) {
t.preventDefault(), ci.getOrCreateInstance(this)
.toggle()
})), f(ci);
const hi = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
di = ".sticky-top",
ui = "padding-right",
fi = "margin-right";
class pi {
constructor() {
this._element = document.body
}
getWidth() {
const t = document.documentElement.clientWidth;
return Math.abs(window.innerWidth - t)
}
hide() {
const t = this.getWidth();
this._disableOverFlow(), this._setElementAttributes(this._element,
ui, (e => e + t)), this._setElementAttributes(hi, ui, (e => e +
t)), this._setElementAttributes(di, fi, (e => e - t))
}
reset() {
this._resetElementAttributes(this._element, "overflow"), this
._resetElementAttributes(this._element, ui), this
._resetElementAttributes(hi, ui), this._resetElementAttributes(di,
fi)
}
isOverflowing() {
return this.getWidth() > 0
}
_disableOverFlow() {
this._saveInitialAttribute(this._element, "overflow"), this._element
.style.overflow = "hidden"
}
_setElementAttributes(t, e, i) {
const n = this.getWidth();
this._applyManipulationCallback(t, (t => {
if (t !== this._element && window.innerWidth > t
.clientWidth + n) return;
this._saveInitialAttribute(t, e);
const s = window.getComputedStyle(t)
.getPropertyValue(e);
t.style.setProperty(e, `${i(Number.parseFloat(s))}px`)
}))
}
_saveInitialAttribute(t, e) {
const i = t.style.getPropertyValue(e);
i && H.setDataAttribute(t, e, i)
}
_resetElementAttributes(t, e) {
this._applyManipulationCallback(t, (t => {
const i = H.getDataAttribute(t, e);
null !== i ? (H.removeDataAttribute(t, e), t.style
.setProperty(e, i)) : t.style.removeProperty(e)
}))
}
_applyManipulationCallback(t, e) {
if (n(t)) e(t);
else
for (const i of z.find(t, this._element)) e(i)
}
}
const mi = "show",
gi = "mousedown.bs.backdrop",
_i = {
className: "modal-backdrop",
clickCallback: null,
isAnimated: !1,
isVisible: !0,
rootElement: "body"
},
bi = {
className: "string",
clickCallback: "(function|null)",
isAnimated: "boolean",
isVisible: "boolean",
rootElement: "(element|string)"
};
class vi extends $ {
constructor(t) {
super(), this._config = this._getConfig(t), this._isAppended = !1,
this._element = null
}
static get Default() {
return _i
}
static get DefaultType() {
return bi
}
static get NAME() {
return "backdrop"
}
show(t) {
if (!this._config.isVisible) return void p(t);
this._append();
const e = this._getElement();
this._config.isAnimated && c(e), e.classList.add(mi), this
._emulateAnimation((() => {
p(t)
}))
}
hide(t) {
this._config.isVisible ? (this._getElement()
.classList.remove(mi), this._emulateAnimation((() => {
this.dispose(), p(t)
}))) : p(t)
}
dispose() {
this._isAppended && (I.off(this._element, gi), this._element
.remove(), this._isAppended = !1)
}
_getElement() {
if (!this._element) {
const t = document.createElement("div");
t.className = this._config.className, this._config.isAnimated && t
.classList.add("fade"), this._element = t
}
return this._element
}
_configAfterMerge(t) {
return t.rootElement = s(t.rootElement), t
}
_append() {
if (this._isAppended) return;
const t = this._getElement();
this._config.rootElement.append(t), I.on(t, gi, (() => {
p(this._config.clickCallback)
})), this._isAppended = !0
}
_emulateAnimation(t) {
m(t, this._getElement(), this._config.isAnimated)
}
}
const yi = ".bs.focustrap",
wi = "backward",
Ai = {
autofocus: !0,
trapElement: null
},
Ei = {
autofocus: "boolean",
trapElement: "element"
};
class Ti extends $ {
constructor(t) {
super(), this._config = this._getConfig(t), this._isActive = !1,
this._lastTabNavDirection = null
}
static get Default() {
return Ai
}
static get DefaultType() {
return Ei
}
static get NAME() {
return "focustrap"
}
activate() {
this._isActive || (this._config.autofocus && this._config
.trapElement.focus(), I.off(document, yi), I.on(document,
"focusin.bs.focustrap", (t => this._handleFocusin(t))), I.on(
document, "keydown.tab.bs.focustrap", (t => this
._handleKeydown(t))), this._isActive = !0)
}
deactivate() {
this._isActive && (this._isActive = !1, I.off(document, yi))
}
_handleFocusin(t) {
const {
trapElement: e
} = this._config;
if (t.target === document || t.target === e || e.contains(t.target))
return;
const i = z.focusableChildren(e);
0 === i.length ? e.focus() : this._lastTabNavDirection === wi ? i[i
.length - 1].focus() : i[0].focus()
}
_handleKeydown(t) {
"Tab" === t.key && (this._lastTabNavDirection = t.shiftKey ? wi :
"forward")
}
}
const Ci = "hidden.bs.modal",
Oi = "show.bs.modal",
xi = "modal-open",
ki = "show",
Li = "modal-static",
Si = {
backdrop: !0,
focus: !0,
keyboard: !0
},
Di = {
backdrop: "(boolean|string)",
focus: "boolean",
keyboard: "boolean"
};
class Ii extends W {
constructor(t, e) {
super(t, e), this._dialog = z.findOne(".modal-dialog", this
._element), this._backdrop = this._initializeBackDrop(), this
._focustrap = this._initializeFocusTrap(), this._isShown = !1,
this._isTransitioning = !1, this._scrollBar = new pi, this
._addEventListeners()
}
static get Default() {
return Si
}
static get DefaultType() {
return Di
}
static get NAME() {
return "modal"
}
toggle(t) {
return this._isShown ? this.hide() : this.show(t)
}
show(t) {
this._isShown || this._isTransitioning || I.trigger(this._element,
Oi, {
relatedTarget: t
})
.defaultPrevented || (this._isShown = !0, this
._isTransitioning = !0, this._scrollBar.hide(), document.body
.classList.add(xi), this._adjustDialog(), this._backdrop.show((
() => this._showElement(t))))
}
hide() {
this._isShown && !this._isTransitioning && (I.trigger(this._element,
"hide.bs.modal")
.defaultPrevented || (this._isShown = !1, this
._isTransitioning = !0, this._focustrap.deactivate(), this
._element.classList.remove(ki), this._queueCallback((() =>
this._hideModal()), this._element, this._isAnimated())))
}
dispose() {
for (const t of [window, this._dialog]) I.off(t, ".bs.modal");
this._backdrop.dispose(), this._focustrap.deactivate(), super
.dispose()
}
handleUpdate() {
this._adjustDialog()
}
_initializeBackDrop() {
return new vi({
isVisible: Boolean(this._config.backdrop),
isAnimated: this._isAnimated()
})
}
_initializeFocusTrap() {
return new Ti({
trapElement: this._element
})
}
_showElement(t) {
document.body.contains(this._element) || document.body.append(this
._element), this._element.style.display = "block", this._element
.removeAttribute("aria-hidden"), this._element.setAttribute(
"aria-modal", !0), this._element.setAttribute("role", "dialog"),
this._element.scrollTop = 0;
const e = z.findOne(".modal-body", this._dialog);
e && (e.scrollTop = 0), c(this._element), this._element.classList
.add(ki), this._queueCallback((() => {
this._config.focus && this._focustrap.activate(), this
._isTransitioning = !1, I.trigger(this._element,
"shown.bs.modal", {
relatedTarget: t
})
}), this._dialog, this._isAnimated())
}
_addEventListeners() {
I.on(this._element, "keydown.dismiss.bs.modal", (t => {
if ("Escape" === t.key) return this._config.keyboard ? (t
.preventDefault(), void this.hide()) : void this
._triggerBackdropTransition()
})), I.on(window, "resize.bs.modal", (() => {
this._isShown && !this._isTransitioning && this
._adjustDialog()
})), I.on(this._element, "mousedown.dismiss.bs.modal", (t => {
I.one(this._element, "click.dismiss.bs.modal", (e => {
this._element === t.target && this._element === e
.target && ("static" !== this._config.backdrop ?
this._config.backdrop && this.hide() : this
._triggerBackdropTransition())
}))
}))
}
_hideModal() {
this._element.style.display = "none", this._element.setAttribute(
"aria-hidden", !0), this._element.removeAttribute("aria-modal"),
this._element.removeAttribute("role"), this._isTransitioning = !1,
this._backdrop.hide((() => {
document.body.classList.remove(xi), this
._resetAdjustments(), this._scrollBar.reset(), I.trigger(
this._element, Ci)
}))
}
_isAnimated() {
return this._element.classList.contains("fade")
}
_triggerBackdropTransition() {
if (I.trigger(this._element, "hidePrevented.bs.modal")
.defaultPrevented) return;
const t = this._element.scrollHeight > document.documentElement
.clientHeight,
e = this._element.style.overflowY;
"hidden" === e || this._element.classList.contains(Li) || (t || (
this._element.style.overflowY = "hidden"), this._element
.classList.add(Li), this._queueCallback((() => {
this._element.classList.remove(Li), this._queueCallback((
() => {
this._element.style.overflowY = e
}), this._dialog)
}), this._dialog), this._element.focus())
}
_adjustDialog() {
const t = this._element.scrollHeight > document.documentElement
.clientHeight,
e = this._scrollBar.getWidth(),
i = e > 0;
if (i && !t) {
const t = u() ? "paddingLeft" : "paddingRight";
this._element.style[t] = `${e}px`
}
if (!i && t) {
const t = u() ? "paddingRight" : "paddingLeft";
this._element.style[t] = `${e}px`
}
}
_resetAdjustments() {
this._element.style.paddingLeft = "", this._element.style
.paddingRight = ""
}
static jQueryInterface(t, e) {
return this.each((function () {
const i = Ii.getOrCreateInstance(this, t);
if ("string" == typeof t) {
if (void 0 === i[t]) throw new TypeError(
`No method named "${t}"`);
i[t](e)
}
}))
}
}
I.on(document, "click.bs.modal.data-api", '[data-bs-toggle="modal"]', (
function (t) {
const e = z.getElementFromSelector(this);
["A", "AREA"].includes(this.tagName) && t.preventDefault(), I.one(
e, Oi, (t => {
t.defaultPrevented || I.one(e, Ci, (() => {
o(this) && this.focus()
}))
}));
const i = z.findOne(".modal.show");
i && Ii.getInstance(i)
.hide(), Ii.getOrCreateInstance(e)
.toggle(this)
})), R(Ii), f(Ii);
const Ni = "show",
Pi = "showing",
ji = "hiding",
Mi = ".offcanvas.show",
Fi = "hidePrevented.bs.offcanvas",
Hi = "hidden.bs.offcanvas",
$i = {
backdrop: !0,
keyboard: !0,
scroll: !1
},
Wi = {
backdrop: "(boolean|string)",
keyboard: "boolean",
scroll: "boolean"
};
class Bi extends W {
constructor(t, e) {
super(t, e), this._isShown = !1, this._backdrop = this
._initializeBackDrop(), this._focustrap = this
._initializeFocusTrap(), this._addEventListeners()
}
static get Default() {
return $i
}
static get DefaultType() {
return Wi
}
static get NAME() {
return "offcanvas"
}
toggle(t) {
return this._isShown ? this.hide() : this.show(t)
}
show(t) {
this._isShown || I.trigger(this._element, "show.bs.offcanvas", {
relatedTarget: t
})
.defaultPrevented || (this._isShown = !0, this._backdrop.show(),
this._config.scroll || (new pi)
.hide(), this._element.setAttribute("aria-modal", !0), this
._element.setAttribute("role", "dialog"), this._element
.classList.add(Pi), this._queueCallback((() => {
this._config.scroll && !this._config.backdrop || this
._focustrap.activate(), this._element.classList.add(Ni),
this._element.classList.remove(Pi), I.trigger(this
._element, "shown.bs.offcanvas", {
relatedTarget: t
})
}), this._element, !0))
}
hide() {
this._isShown && (I.trigger(this._element, "hide.bs.offcanvas")
.defaultPrevented || (this._focustrap.deactivate(), this
._element.blur(), this._isShown = !1, this._element.classList
.add(ji), this._backdrop.hide(), this._queueCallback((() => {
this._element.classList.remove(Ni, ji), this._element
.removeAttribute("aria-modal"), this._element
.removeAttribute("role"), this._config.scroll || (
new pi)
.reset(), I.trigger(this._element, Hi)
}), this._element, !0)))
}
dispose() {
this._backdrop.dispose(), this._focustrap.deactivate(), super
.dispose()
}
_initializeBackDrop() {
const t = Boolean(this._config.backdrop);
return new vi({
className: "offcanvas-backdrop",
isVisible: t,
isAnimated: !0,
rootElement: this._element.parentNode,
clickCallback: t ? () => {
"static" !== this._config.backdrop ? this.hide() : I
.trigger(this._element, Fi)
} : null
})
}
_initializeFocusTrap() {
return new Ti({
trapElement: this._element
})
}
_addEventListeners() {
I.on(this._element, "keydown.dismiss.bs.offcanvas", (t => {
"Escape" === t.key && (this._config.keyboard ? this.hide() :
I.trigger(this._element, Fi))
}))
}
static jQueryInterface(t) {
return this.each((function () {
const e = Bi.getOrCreateInstance(this, t);
if ("string" == typeof t) {
if (void 0 === e[t] || t.startsWith("_") ||
"constructor" === t) throw new TypeError(
`No method named "${t}"`);
e[t](this)
}
}))
}
}
I.on(document, "click.bs.offcanvas.data-api",
'[data-bs-toggle="offcanvas"]', (function (t) {
const e = z.getElementFromSelector(this);
if (["A", "AREA"].includes(this.tagName) && t.preventDefault(), r(
this)) return;
I.one(e, Hi, (() => {
o(this) && this.focus()
}));
const i = z.findOne(Mi);
i && i !== e && Bi.getInstance(i)
.hide(), Bi.getOrCreateInstance(e)
.toggle(this)
})), I.on(window, "load.bs.offcanvas.data-api", (() => {
for (const t of z.find(Mi)) Bi.getOrCreateInstance(t)
.show()
})), I.on(window, "resize.bs.offcanvas", (() => {
for (const t of z.find(
"[aria-modal][class*=show][class*=offcanvas-]")) "fixed" !==
getComputedStyle(t)
.position && Bi.getOrCreateInstance(t)
.hide()
})), R(Bi), f(Bi);
const zi = new Set(["background", "cite", "href", "itemtype", "longdesc",
"poster", "src", "xlink:href"]),
Ri = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,
qi =
/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,
Vi = (t, e) => {
const i = t.nodeName.toLowerCase();
return e.includes(i) ? !zi.has(i) || Boolean(Ri.test(t.nodeValue) ||
qi.test(t.nodeValue)) : e.filter((t => t instanceof RegExp))
.some((t => t.test(i)))
},
Ki = {
"*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
a: ["target", "href", "title", "rel"],
area: [],
b: [],
br: [],
col: [],
code: [],
div: [],
em: [],
hr: [],
h1: [],
h2: [],
h3: [],
h4: [],
h5: [],
h6: [],
i: [],
img: ["src", "srcset", "alt", "title", "width", "height"],
li: [],
ol: [],
p: [],
pre: [],
s: [],
small: [],
span: [],
sub: [],
sup: [],
strong: [],
u: [],
ul: []
},
Qi = {
allowList: Ki,
content: {},
extraClass: "",
html: !1,
sanitize: !0,
sanitizeFn: null,
template: "<div></div>"
},
Xi = {
allowList: "object",
content: "object",
extraClass: "(string|function)",
html: "boolean",
sanitize: "boolean",
sanitizeFn: "(null|function)",
template: "string"
},
Yi = {
entry: "(string|element|function|null)",
selector: "(string|element)"
};
class Ui extends $ {
constructor(t) {
super(), this._config = this._getConfig(t)
}
static get Default() {
return Qi
}
static get DefaultType() {
return Xi
}
static get NAME() {
return "TemplateFactory"
}
getContent() {
return Object.values(this._config.content)
.map((t => this._resolvePossibleFunction(t)))
.filter(Boolean)
}
hasContent() {
return this.getContent()
.length > 0
}
changeContent(t) {
return this._checkContent(t), this._config.content = {
...this._config.content,
...t
}, this
}
toHtml() {
const t = document.createElement("div");
t.innerHTML = this._maybeSanitize(this._config.template);
for (const [e, i] of Object.entries(this._config.content)) this
._setContent(t, i, e);
const e = t.children[0],
i = this._resolvePossibleFunction(this._config.extraClass);
return i && e.classList.add(...i.split(" ")), e
}
_typeCheckConfig(t) {
super._typeCheckConfig(t), this._checkContent(t.content)
}
_checkContent(t) {
for (const [e, i] of Object.entries(t)) super._typeCheckConfig({
selector: e,
entry: i
}, Yi)
}
_setContent(t, e, i) {
const o = z.findOne(i, t);
o && ((e = this._resolvePossibleFunction(e)) ? n(e) ? this
._putElementInTemplate(s(e), o) : this._config.html ? o
.innerHTML = this._maybeSanitize(e) : o.textContent = e : o
.remove())
}
_maybeSanitize(t) {
return this._config.sanitize ? function (t, e, i) {
if (!t.length) return t;
if (i && "function" == typeof i) return i(t);
const n = (new window.DOMParser)
.parseFromString(t, "text/html"),
s = [].concat(...n.body.querySelectorAll("*"));
for (const t of s) {
const i = t.nodeName.toLowerCase();
if (!Object.keys(e)
.includes(i)) {
t.remove();
continue
}
const n = [].concat(...t.attributes),
s = [].concat(e["*"] || [], e[i] || []);
for (const e of n) Vi(e, s) || t.removeAttribute(e.nodeName)
}
return n.body.innerHTML
}(t, this._config.allowList, this._config.sanitizeFn) : t
}
_resolvePossibleFunction(t) {
return p(t, [this])
}
_putElementInTemplate(t, e) {
if (this._config.html) return e.innerHTML = "", void e.append(t);
e.textContent = t.textContent
}
}
const Gi = new Set(["sanitize", "allowList", "sanitizeFn"]),
Ji = "fade",
Zi = "show",
tn = ".modal",
en = "hide.bs.modal",
nn = "hover",
sn = "focus",
on = {
AUTO: "auto",
TOP: "top",
RIGHT: u() ? "left" : "right",
BOTTOM: "bottom",
LEFT: u() ? "right" : "left"
},
rn = {
allowList: Ki,
animation: !0,
boundary: "clippingParents",
container: !1,
customClass: "",
delay: 0,
fallbackPlacements: ["top", "right", "bottom", "left"],
html: !1,
offset: [0, 0],
placement: "top",
popperConfig: null,
sanitize: !0,
sanitizeFn: null,
selector: !1,
template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
title: "",
trigger: "hover focus"
},
an = {
allowList: "object",
animation: "boolean",
boundary: "(string|element)",
container: "(string|element|boolean)",
customClass: "(string|function)",
delay: "(number|object)",
fallbackPlacements: "array",
html: "boolean",
offset: "(array|string|function)",
placement: "(string|function)",
popperConfig: "(null|object|function)",
sanitize: "boolean",
sanitizeFn: "(null|function)",
selector: "(string|boolean)",
template: "string",
title: "(string|element|function)",
trigger: "string"
};
class ln extends W {
constructor(t, e) {
if (void 0 === Ve) throw new TypeError(
"Bootstrap's tooltips require Popper (https://popper.js.org)");
super(t, e), this._isEnabled = !0, this._timeout = 0, this
._isHovered = null, this._activeTrigger = {}, this._popper = null,
this._templateFactory = null, this._newContent = null, this.tip =
null, this._setListeners(), this._config.selector || this
._fixTitle()
}
static get Default() {
return rn
}
static get DefaultType() {
return an
}
static get NAME() {
return "tooltip"
}
enable() {
this._isEnabled = !0
}
disable() {
this._isEnabled = !1
}
toggleEnabled() {
this._isEnabled = !this._isEnabled
}
toggle() {
this._isEnabled && (this._activeTrigger.click = !this._activeTrigger
.click, this._isShown() ? this._leave() : this._enter())
}
dispose() {
clearTimeout(this._timeout), I.off(this._element.closest(tn), en,
this._hideModalHandler), this._element.getAttribute(
"data-bs-original-title") && this._element.setAttribute("title",
this._element.getAttribute("data-bs-original-title")), this
._disposePopper(), super.dispose()
}
show() {
if ("none" === this._element.style.display) throw new Error(
"Please use show on visible elements");
if (!this._isWithContent() || !this._isEnabled) return;
const t = I.trigger(this._element, this.constructor.eventName(
"show")),
e = (a(this._element) || this._element.ownerDocument
.documentElement)
.contains(this._element);
if (t.defaultPrevented || !e) return;
this._disposePopper();
const i = this._getTipElement();
this._element.setAttribute("aria-describedby", i.getAttribute(
"id"));
const {
container: n
} = this._config;
if (this._element.ownerDocument.documentElement.contains(this
.tip) || (n.append(i), I.trigger(this._element, this.constructor
.eventName("inserted"))), this._popper = this._createPopper(i),
i.classList.add(Zi), "ontouchstart" in document.documentElement)
for (const t of [].concat(...document.body.children)) I.on(t,
"mouseover", l);
this._queueCallback((() => {
I.trigger(this._element, this.constructor.eventName(
"shown")), !1 === this._isHovered && this._leave(), this
._isHovered = !1
}), this.tip, this._isAnimated())
}
hide() {
if (this._isShown() && !I.trigger(this._element, this.constructor
.eventName("hide"))
.defaultPrevented) {
if (this._getTipElement()
.classList.remove(Zi), "ontouchstart" in document
.documentElement)
for (const t of [].concat(...document.body.children)) I.off(t,
"mouseover", l);
this._activeTrigger.click = !1, this._activeTrigger.focus = !1,
this._activeTrigger.hover = !1, this._isHovered = null, this
._queueCallback((() => {
this._isWithActiveTrigger() || (this._isHovered || this
._disposePopper(), this._element.removeAttribute(
"aria-describedby"), I.trigger(this._element, this
.constructor.eventName("hidden")))
}), this.tip, this._isAnimated())
}
}
update() {
this._popper && this._popper.update()
}
_isWithContent() {
return Boolean(this._getTitle())
}
_getTipElement() {
return this.tip || (this.tip = this._createTipElement(this
._newContent || this._getContentForTemplate())), this.tip
}
_createTipElement(t) {
const e = this._getTemplateFactory(t)
.toHtml();
if (!e) return null;
e.classList.remove(Ji, Zi), e.classList.add(
`bs-${this.constructor.NAME}-auto`);
const i = (t => {
do {
t += Math.floor(1e6 * Math.random())
} while (document.getElementById(t));
return t
})(this.constructor.NAME)
.toString();
return e.setAttribute("id", i), this._isAnimated() && e.classList
.add(Ji), e
}
setContent(t) {
this._newContent = t, this._isShown() && (this._disposePopper(),
this.show())
}
_getTemplateFactory(t) {
return this._templateFactory ? this._templateFactory.changeContent(
t) : this._templateFactory = new Ui({
...this._config,
content: t,
extraClass: this._resolvePossibleFunction(this._config
.customClass)
}), this._templateFactory
}
_getContentForTemplate() {
return {
".tooltip-inner": this._getTitle()
}
}
_getTitle() {
return this._resolvePossibleFunction(this._config.title) || this
._element.getAttribute("data-bs-original-title")
}
_initializeOnDelegatedTarget(t) {
return this.constructor.getOrCreateInstance(t.delegateTarget, this
._getDelegateConfig())
}
_isAnimated() {
return this._config.animation || this.tip && this.tip.classList
.contains(Ji)
}
_isShown() {
return this.tip && this.tip.classList.contains(Zi)
}
_createPopper(t) {
const e = p(this._config.placement, [this, t, this._element]),
i = on[e.toUpperCase()];
return qe(this._element, t, this._getPopperConfig(i))
}
_getOffset() {
const {
offset: t
} = this._config;
return "string" == typeof t ? t.split(",")
.map((t => Number.parseInt(t, 10))) : "function" == typeof t ?
e => t(e, this._element) : t
}
_resolvePossibleFunction(t) {
return p(t, [this._element])
}
_getPopperConfig(t) {
const e = {
placement: t,
modifiers: [{
name: "flip",
options: {
fallbackPlacements: this._config.fallbackPlacements
}
}, {
name: "offset",
options: {
offset: this._getOffset()
}
}, {
name: "preventOverflow",
options: {
boundary: this._config.boundary
}
}, {
name: "arrow",
options: {
element: `.${this.constructor.NAME}-arrow`
}
}, {
name: "preSetPlacement",
enabled: !0,
phase: "beforeMain",
fn: t => {
this._getTipElement()
.setAttribute("data-popper-placement", t.state
.placement)
}
}]
};
return {
...e,
...p(this._config.popperConfig, [e])
}
}
_setListeners() {
const t = this._config.trigger.split(" ");
for (const e of t)
if ("click" === e) I.on(this._element, this.constructor.eventName(
"click"), this._config.selector, (t => {
this._initializeOnDelegatedTarget(t)
.toggle()
}));
else if ("manual" !== e) {
const t = e === nn ? this.constructor.eventName("mouseenter") :
this.constructor.eventName("focusin"),
i = e === nn ? this.constructor.eventName("mouseleave") : this
.constructor.eventName("focusout");
I.on(this._element, t, this._config.selector, (t => {
const e = this._initializeOnDelegatedTarget(t);
e._activeTrigger["focusin" === t.type ? sn : nn] = !0, e
._enter()
})), I.on(this._element, i, this._config.selector, (t => {
const e = this._initializeOnDelegatedTarget(t);
e._activeTrigger["focusout" === t.type ? sn : nn] = e
._element.contains(t.relatedTarget), e._leave()
}))
}
this._hideModalHandler = () => {
this._element && this.hide()
}, I.on(this._element.closest(tn), en, this._hideModalHandler)
}
_fixTitle() {
const t = this._element.getAttribute("title");
t && (this._element.getAttribute("aria-label") || this._element
.textContent.trim() || this._element.setAttribute("aria-label",
t), this._element.setAttribute("data-bs-original-title", t),
this._element.removeAttribute("title"))
}
_enter() {
this._isShown() || this._isHovered ? this._isHovered = !0 : (this
._isHovered = !0, this._setTimeout((() => {
this._isHovered && this.show()
}), this._config.delay.show))
}
_leave() {
this._isWithActiveTrigger() || (this._isHovered = !1, this
._setTimeout((() => {
this._isHovered || this.hide()
}), this._config.delay.hide))
}
_setTimeout(t, e) {
clearTimeout(this._timeout), this._timeout = setTimeout(t, e)
}
_isWithActiveTrigger() {
return Object.values(this._activeTrigger)
.includes(!0)
}
_getConfig(t) {
const e = H.getDataAttributes(this._element);
for (const t of Object.keys(e)) Gi.has(t) && delete e[t];
return t = {
...e,
..."object" == typeof t && t ? t : {}
}, t = this._mergeConfigObj(t), t = this._configAfterMerge(t),
this._typeCheckConfig(t), t
}
_configAfterMerge(t) {
return t.container = !1 === t.container ? document.body : s(t
.container), "number" == typeof t.delay && (t.delay = {
show: t.delay,
hide: t.delay
}), "number" == typeof t.title && (t.title = t.title.toString()),
"number" == typeof t.content && (t.content = t.content
.toString()), t
}
_getDelegateConfig() {
const t = {};
for (const [e, i] of Object.entries(this._config)) this.constructor
.Default[e] !== i && (t[e] = i);
return t.selector = !1, t.trigger = "manual", t
}
_disposePopper() {
this._popper && (this._popper.destroy(), this._popper = null), this
.tip && (this.tip.remove(), this.tip = null)
}
static jQueryInterface(t) {
return this.each((function () {
const e = ln.getOrCreateInstance(this, t);
if ("string" == typeof t) {
if (void 0 === e[t]) throw new TypeError(
`No method named "${t}"`);
e[t]()
}
}))
}
}
f(ln);
const cn = {
...ln.Default,
content: "",
offset: [0, 8],
placement: "right",
template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
trigger: "click"
},
hn = {
...ln.DefaultType,
content: "(null|string|element|function)"
};
class dn extends ln {
static get Default() {
return cn
}
static get DefaultType() {
return hn
}
static get NAME() {
return "popover"
}
_isWithContent() {
return this._getTitle() || this._getContent()
}
_getContentForTemplate() {
return {
".popover-header": this._getTitle(),
".popover-body": this._getContent()
}
}
_getContent() {
return this._resolvePossibleFunction(this._config.content)
}
static jQueryInterface(t) {
return this.each((function () {
const e = dn.getOrCreateInstance(this, t);
if ("string" == typeof t) {
if (void 0 === e[t]) throw new TypeError(
`No method named "${t}"`);
e[t]()
}
}))
}
}
f(dn);
const un = "click.bs.scrollspy",
fn = "active",
pn = "[href]",
mn = {
offset: null,
rootMargin: "0px 0px -25%",
smoothScroll: !1,
target: null,
threshold: [.1, .5, 1]
},
gn = {
offset: "(number|null)",
rootMargin: "string",
smoothScroll: "boolean",
target: "element",
threshold: "array"
};
class _n extends W {
constructor(t, e) {
super(t, e), this._targetLinks = new Map, this._observableSections =
new Map, this._rootElement = "visible" === getComputedStyle(this
._element)
.overflowY ? null : this._element, this._activeTarget = null, this
._observer = null, this._previousScrollData = {
visibleEntryTop: 0,
parentScrollTop: 0
}, this.refresh()
}
static get Default() {
return mn
}
static get DefaultType() {
return gn
}
static get NAME() {
return "scrollspy"
}
refresh() {
this._initializeTargetsAndObservables(), this
._maybeEnableSmoothScroll(), this._observer ? this._observer
.disconnect() : this._observer = this._getNewObserver();
for (const t of this._observableSections.values()) this._observer
.observe(t)
}
dispose() {
this._observer.disconnect(), super.dispose()
}
_configAfterMerge(t) {
return t.target = s(t.target) || document.body, t.rootMargin = t
.offset ? `${t.offset}px 0px -30%` : t.rootMargin, "string" ==
typeof t.threshold && (t.threshold = t.threshold.split(",")
.map((t => Number.parseFloat(t)))), t
}
_maybeEnableSmoothScroll() {
this._config.smoothScroll && (I.off(this._config.target, un), I.on(
this._config.target, un, pn, (t => {
const e = this._observableSections.get(t.target.hash);
if (e) {
t.preventDefault();
const i = this._rootElement || window,
n = e.offsetTop - this._element.offsetTop;
if (i.scrollTo) return void i.scrollTo({
top: n,
behavior: "smooth"
});
i.scrollTop = n
}
})))
}
_getNewObserver() {
const t = {
root: this._rootElement,
threshold: this._config.threshold,
rootMargin: this._config.rootMargin
};
return new IntersectionObserver((t => this._observerCallback(t)), t)
}
_observerCallback(t) {
const e = t => this._targetLinks.get(`#${t.target.id}`),
i = t => {
this._previousScrollData.visibleEntryTop = t.target.offsetTop,
this._process(e(t))
},
n = (this._rootElement || document.documentElement)
.scrollTop,
s = n >= this._previousScrollData.parentScrollTop;
this._previousScrollData.parentScrollTop = n;
for (const o of t) {
if (!o.isIntersecting) {
this._activeTarget = null, this._clearActiveClass(e(o));
continue
}
const t = o.target.offsetTop >= this._previousScrollData
.visibleEntryTop;
if (s && t) {
if (i(o), !n) return
} else s || t || i(o)
}
}
_initializeTargetsAndObservables() {
this._targetLinks = new Map, this._observableSections = new Map;
const t = z.find(pn, this._config.target);
for (const e of t) {
if (!e.hash || r(e)) continue;
const t = z.findOne(e.hash, this._element);
o(t) && (this._targetLinks.set(e.hash, e), this
._observableSections.set(e.hash, t))
}
}
_process(t) {
this._activeTarget !== t && (this._clearActiveClass(this._config
.target), this._activeTarget = t, t.classList.add(fn), this
._activateParents(t), I.trigger(this._element,
"activate.bs.scrollspy", {
relatedTarget: t
}))
}
_activateParents(t) {
if (t.classList.contains("dropdown-item")) z.findOne(
".dropdown-toggle", t.closest(".dropdown"))
.classList.add(fn);
else
for (const e of z.parents(t, ".nav, .list-group"))
for (const t of z.prev(e,
".nav-link, .nav-item > .nav-link, .list-group-item")) t
.classList.add(fn)
}
_clearActiveClass(t) {
t.classList.remove(fn);
const e = z.find("[href].active", t);
for (const t of e) t.classList.remove(fn)
}
static jQueryInterface(t) {
return this.each((function () {
const e = _n.getOrCreateInstance(this, t);
if ("string" == typeof t) {
if (void 0 === e[t] || t.startsWith("_") ||
"constructor" === t) throw new TypeError(
`No method named "${t}"`);
e[t]()
}
}))
}
}
I.on(window, "load.bs.scrollspy.data-api", (() => {
for (const t of z.find('[data-bs-spy="scroll"]')) _n
.getOrCreateInstance(t)
})), f(_n);
const bn = "ArrowLeft",
vn = "ArrowRight",
yn = "ArrowUp",
wn = "ArrowDown",
An = "active",
En = "fade",
Tn = "show",
Cn =
'[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
On =
`.nav-link:not(.dropdown-toggle), .list-group-item:not(.dropdown-toggle), [role="tab"]:not(.dropdown-toggle), ${Cn}`;
class xn extends W {
constructor(t) {
super(t), this._parent = this._element.closest(
'.list-group, .nav, [role="tablist"]'), this._parent && (this
._setInitialAttributes(this._parent, this._getChildren()), I.on(
this._element, "keydown.bs.tab", (t => this._keydown(t))))
}
static get NAME() {
return "tab"
}
show() {
const t = this._element;
if (this._elemIsActive(t)) return;
const e = this._getActiveElem(),
i = e ? I.trigger(e, "hide.bs.tab", {
relatedTarget: t
}) : null;
I.trigger(t, "show.bs.tab", {
relatedTarget: e
})
.defaultPrevented || i && i.defaultPrevented || (this._deactivate(
e, t), this._activate(t, e))
}
_activate(t, e) {
t && (t.classList.add(An), this._activate(z.getElementFromSelector(
t)), this._queueCallback((() => {
"tab" === t.getAttribute("role") ? (t.removeAttribute(
"tabindex"), t.setAttribute("aria-selected", !0),
this._toggleDropDown(t, !0), I.trigger(t,
"shown.bs.tab", {
relatedTarget: e
})) : t.classList.add(Tn)
}), t, t.classList.contains(En)))
}
_deactivate(t, e) {
t && (t.classList.remove(An), t.blur(), this._deactivate(z
.getElementFromSelector(t)), this._queueCallback((() => {
"tab" === t.getAttribute("role") ? (t.setAttribute(
"aria-selected", !1), t.setAttribute("tabindex",
"-1"), this._toggleDropDown(t, !1), I.trigger(t,
"hidden.bs.tab", {
relatedTarget: e
})) : t.classList.remove(Tn)
}), t, t.classList.contains(En)))
}
_keydown(t) {
if (![bn, vn, yn, wn].includes(t.key)) return;
t.stopPropagation(), t.preventDefault();
const e = [vn, wn].includes(t.key),
i = g(this._getChildren()
.filter((t => !r(t))), t.target, e, !0);
i && (i.focus({
preventScroll: !0
}), xn.getOrCreateInstance(i)
.show())
}
_getChildren() {
return z.find(On, this._parent)
}
_getActiveElem() {
return this._getChildren()
.find((t => this._elemIsActive(t))) || null
}
_setInitialAttributes(t, e) {
this._setAttributeIfNotExists(t, "role", "tablist");
for (const t of e) this._setInitialAttributesOnChild(t)
}
_setInitialAttributesOnChild(t) {
t = this._getInnerElement(t);
const e = this._elemIsActive(t),
i = this._getOuterElement(t);
t.setAttribute("aria-selected", e), i !== t && this
._setAttributeIfNotExists(i, "role", "presentation"), e || t
.setAttribute("tabindex", "-1"), this._setAttributeIfNotExists(t,
"role", "tab"), this._setInitialAttributesOnTargetPanel(t)
}
_setInitialAttributesOnTargetPanel(t) {
const e = z.getElementFromSelector(t);
e && (this._setAttributeIfNotExists(e, "role", "tabpanel"), t.id &&
this._setAttributeIfNotExists(e, "aria-labelledby", `#${t.id}`))
}
_toggleDropDown(t, e) {
const i = this._getOuterElement(t);
if (!i.classList.contains("dropdown")) return;
const n = (t, n) => {
const s = z.findOne(t, i);
s && s.classList.toggle(n, e)
};
n(".dropdown-toggle", An), n(".dropdown-menu", Tn), i.setAttribute(
"aria-expanded", e)
}
_setAttributeIfNotExists(t, e, i) {
t.hasAttribute(e) || t.setAttribute(e, i)
}
_elemIsActive(t) {
return t.classList.contains(An)
}
_getInnerElement(t) {
return t.matches(On) ? t : z.findOne(On, t)
}
_getOuterElement(t) {
return t.closest(".nav-item, .list-group-item") || t
}
static jQueryInterface(t) {
return this.each((function () {
const e = xn.getOrCreateInstance(this);
if ("string" == typeof t) {
if (void 0 === e[t] || t.startsWith("_") ||
"constructor" === t) throw new TypeError(
`No method named "${t}"`);
e[t]()
}
}))
}
}
I.on(document, "click.bs.tab", Cn, (function (t) {
["A", "AREA"].includes(this.tagName) && t.preventDefault(), r(
this) || xn.getOrCreateInstance(this)
.show()
})), I.on(window, "load.bs.tab", (() => {
for (const t of z.find(
'.active[data-bs-toggle="tab"], .active[data-bs-toggle="pill"], .active[data-bs-toggle="list"]'
)) xn.getOrCreateInstance(t)
})), f(xn);
const kn = "hide",
Ln = "show",
Sn = "showing",
Dn = {
animation: "boolean",
autohide: "boolean",
delay: "number"
},
In = {
animation: !0,
autohide: !0,
delay: 5e3
};
class Nn extends W {
constructor(t, e) {
super(t, e), this._timeout = null, this._hasMouseInteraction = !1,
this._hasKeyboardInteraction = !1, this._setListeners()
}
static get Default() {
return In
}
static get DefaultType() {
return Dn
}
static get NAME() {
return "toast"
}
show() {
I.trigger(this._element, "show.bs.toast")
.defaultPrevented || (this._clearTimeout(), this._config
.animation && this._element.classList.add("fade"), this._element
.classList.remove(kn), c(this._element), this._element.classList
.add(Ln, Sn), this._queueCallback((() => {
this._element.classList.remove(Sn), I.trigger(this
._element, "shown.bs.toast"), this
._maybeScheduleHide()
}), this._element, this._config.animation))
}
hide() {
this.isShown() && (I.trigger(this._element, "hide.bs.toast")
.defaultPrevented || (this._element.classList.add(Sn), this
._queueCallback((() => {
this._element.classList.add(kn), this._element.classList
.remove(Sn, Ln), I.trigger(this._element,
"hidden.bs.toast")
}), this._element, this._config.animation)))
}
dispose() {
this._clearTimeout(), this.isShown() && this._element.classList
.remove(Ln), super.dispose()
}
isShown() {
return this._element.classList.contains(Ln)
}
_maybeScheduleHide() {
this._config.autohide && (this._hasMouseInteraction || this
._hasKeyboardInteraction || (this._timeout = setTimeout((() => {
this.hide()
}), this._config.delay)))
}
_onInteraction(t, e) {
switch (t.type) {
case "mouseover":
case "mouseout":
this._hasMouseInteraction = e;
break;
case "focusin":
case "focusout":
this._hasKeyboardInteraction = e
}
if (e) return void this._clearTimeout();
const i = t.relatedTarget;
this._element === i || this._element.contains(i) || this
._maybeScheduleHide()
}
_setListeners() {
I.on(this._element, "mouseover.bs.toast", (t => this._onInteraction(
t, !0))), I.on(this._element, "mouseout.bs.toast", (t => this
._onInteraction(t, !1))), I.on(this._element,
"focusin.bs.toast", (t => this._onInteraction(t, !0))), I.on(
this._element, "focusout.bs.toast", (t => this._onInteraction(t,
!1)))
}
_clearTimeout() {
clearTimeout(this._timeout), this._timeout = null
}
static jQueryInterface(t) {
return this.each((function () {
const e = Nn.getOrCreateInstance(this, t);
if ("string" == typeof t) {
if (void 0 === e[t]) throw new TypeError(
`No method named "${t}"`);
e[t](this)
}
}))
}
}
return R(Nn), f(Nn), {
Alert: q,
Button: K,
Carousel: rt,
Collapse: ft,
Dropdown: ci,
Modal: Ii,
Offcanvas: Bi,
Popover: dn,
ScrollSpy: _n,
Tab: xn,
Toast: Nn,
Tooltip: ln
}
}));
//# sourceMappingURL=bootstrap.bundle.min.js.map
/**
 * Swiper 10.0.4
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2023 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: July 8, 2023
 */

var Swiper = function () {
"use strict";

function e(e) {
return null !== e && "object" == typeof e && "constructor" in e && e
.constructor === Object
}

function t(s, a) {
void 0 === s && (s = {}), void 0 === a && (a = {}), Object.keys(a)
.forEach((i => {
void 0 === s[i] ? s[i] = a[i] : e(a[i]) && e(s[i]) && Object.keys(
a[i])
.length > 0 && t(s[i], a[i])
}))
}
const s = {
body: {},
addEventListener() {},
removeEventListener() {},
activeElement: {
blur() {},
nodeName: ""
},
querySelector: () => null,
querySelectorAll: () => [],
getElementById: () => null,
createEvent: () => ({
initEvent() {}
}),
createElement: () => ({
children: [],
childNodes: [],
stxyle: {},
setAttribute() {},
getElementsByTagName: () => []
}),
createElementNS: () => ({}),
importNode: () => null,
location: {
hash: "",
host: "",
hostname: "",
href: "",
origin: "",
pathname: "",
protocol: "",
search: ""
}
};

function a() {
const e = "undefined" != typeof document ? document : {};
return t(e, s), e
}
const i = {
document: s,
navigator: {
userAgent: ""
},
location: {
hash: "",
host: "",
hostname: "",
href: "",
origin: "",
pathname: "",
protocol: "",
search: ""
},
history: {
replaceState() {},
pushState() {},
go() {},
back() {}
},
CustomEvent: function () {
return this
},
addEventListener() {},
removeEventListener() {},
getComputedStyle: () => ({
getPropertyValue: () => ""
}),
Image() {},
Date() {},
screen: {},
setTimeout() {},
clearTimeout() {},
matchMedia: () => ({}),
requestAnimationFrame: e => "undefined" == typeof setTimeout ? (e(),
null) : setTimeout(e, 0),
cancelAnimationFrame(e) {
"undefined" != typeof setTimeout && clearTimeout(e)
}
};

function r() {
const e = "undefined" != typeof window ? window : {};
return t(e, i), e
}

function n(e, t) {
return void 0 === t && (t = 0), setTimeout(e, t)
}

function l() {
return Date.now()
}

function o(e, t) {
void 0 === t && (t = "x");
const s = r();
let a, i, n;
const l = function (e) {
const t = r();
let s;
return t.getComputedStyle && (s = t.getComputedStyle(e, null)), !s &&
e.currentStyle && (s = e.currentStyle), s || (s = e.style), s
}(e);
return s.WebKitCSSMatrix ? (i = l.transform || l.webkitTransform, i.split(
",")
.length > 6 && (i = i.split(", ")
.map((e => e.replace(",", ".")))
.join(", ")), n = new s.WebKitCSSMatrix("none" === i ? "" : i)) : (
n = l.MozTransform || l.OTransform || l.MsTransform || l
.msTransform || l.transform || l.getPropertyValue("transform")
.replace("translate(", "matrix(1, 0, 0, 1,"), a = n.toString()
.split(",")), "x" === t && (i = s.WebKitCSSMatrix ? n.m41 : 16 === a
.length ? parseFloat(a[12]) : parseFloat(a[4])), "y" === t && (i = s
.WebKitCSSMatrix ? n.m42 : 16 === a.length ? parseFloat(a[13]) :
parseFloat(a[5])), i || 0
}

function d(e) {
return "object" == typeof e && null !== e && e.constructor && "Object" ===
Object.prototype.toString.call(e)
.slice(8, -1)
}

function c() {
const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
t = ["__proto__", "constructor", "prototype"];
for (let a = 1; a < arguments.length; a += 1) {
const i = a < 0 || arguments.length <= a ? void 0 : arguments[a];
if (null != i && (s = i, !("undefined" != typeof window && void 0 !==
window.HTMLElement ? s instanceof HTMLElement : s && (1 === s
.nodeType || 11 === s.nodeType)))) {
const s = Object.keys(Object(i))
.filter((e => t.indexOf(e) < 0));
for (let t = 0, a = s.length; t < a; t += 1) {
const a = s[t],
r = Object.getOwnPropertyDescriptor(i, a);
void 0 !== r && r.enumerable && (d(e[a]) && d(i[a]) ? i[a]
.__swiper__ ? e[a] = i[a] : c(e[a], i[a]) : !d(e[a]) && d(i[
a]) ? (e[a] = {}, i[a].__swiper__ ? e[a] = i[a] : c(e[a], i[
a])) : e[a] = i[a])
}
}
}
var s;
return e
}

function p(e, t, s) {
e.style.setProperty(t, s)
}

function u(e) {
let {
swiper: t,
targetPosition: s,
side: a
} = e;
const i = r(),
n = -t.translate;
let l, o = null;
const d = t.params.speed;
t.wrapperEl.style.scrollSnapType = "none", i.cancelAnimationFrame(t
.cssModeFrameID);
const c = s > n ? "next" : "prev",
p = (e, t) => "next" === c && e >= t || "prev" === c && e <= t,
u = () => {
l = (new Date)
.getTime(), null === o && (o = l);
const e = Math.max(Math.min((l - o) / d, 1), 0),
r = .5 - Math.cos(e * Math.PI) / 2;
let c = n + r * (s - n);
if (p(c, s) && (c = s), t.wrapperEl.scrollTo({
[a]: c
}), p(c, s)) return t.wrapperEl.style.overflow = "hidden", t
.wrapperEl.style.scrollSnapType = "", setTimeout((() => {
t.wrapperEl.style.overflow = "", t.wrapperEl.scrollTo({
[a]: c
})
})), void i.cancelAnimationFrame(t.cssModeFrameID);
t.cssModeFrameID = i.requestAnimationFrame(u)
};
u()
}

function m(e) {
return e.querySelector(".swiper-slide-transform") || e.shadowRoot && e
.shadowRoot.querySelector(".swiper-slide-transform") || e
}

function h(e, t) {
return void 0 === t && (t = ""), [...e.children].filter((e => e.matches(
t)))
}

function f(e, t) {
void 0 === t && (t = []);
const s = document.createElement(e);
return s.classList.add(...Array.isArray(t) ? t : [t]), s
}

function g(e) {
const t = r(),
s = a(),
i = e.getBoundingClientRect(),
n = s.body,
l = e.clientTop || n.clientTop || 0,
o = e.clientLeft || n.clientLeft || 0,
d = e === t ? t.scrollY : e.scrollTop,
c = e === t ? t.scrollX : e.scrollLeft;
return {
top: i.top + d - l,
left: i.left + c - o
}
}

function v(e, t) {
return r()
.getComputedStyle(e, null)
.getPropertyValue(t)
}

function w(e) {
let t, s = e;
if (s) {
for (t = 0; null !== (s = s.previousSibling);) 1 === s.nodeType && (t +=
1);
return t
}
}

function b(e, t) {
const s = [];
let a = e.parentElement;
for (; a;) t ? a.matches(t) && s.push(a) : s.push(a), a = a.parentElement;
return s
}

function y(e, t) {
t && e.addEventListener("transitionend", (function s(a) {
a.target === e && (t.call(e, a), e.removeEventListener(
"transitionend", s))
}))
}

function E(e, t, s) {
const a = r();
return s ? e["width" === t ? "offsetWidth" : "offsetHeight"] + parseFloat(
a.getComputedStyle(e, null)
.getPropertyValue("width" === t ? "margin-right" : "margin-top")) +
parseFloat(a.getComputedStyle(e, null)
.getPropertyValue("width" === t ? "margin-left" : "margin-bottom")) :
e.offsetWidth
}
let x, S, T;

function M() {
return x || (x = function () {
const e = r(),
t = a();
return {
smoothScroll: t.documentElement && t.documentElement.style &&
"scrollBehavior" in t.documentElement.style,
touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e
.DocumentTouch)
}
}()), x
}

function C(e) {
return void 0 === e && (e = {}), S || (S = function (e) {
let {
userAgent: t
} = void 0 === e ? {} : e;
const s = M(),
a = r(),
i = a.navigator.platform,
n = t || a.navigator.userAgent,
l = {
ios: !1,
android: !1
},
o = a.screen.width,
d = a.screen.height,
c = n.match(/(Android);?[\s\/]+([\d.]+)?/);
let p = n.match(/(iPad).*OS\s([\d_]+)/);
const u = n.match(/(iPod)(.*OS\s([\d_]+))?/),
m = !p && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
h = "Win32" === i;
let f = "MacIntel" === i;
return !p && f && s.touch && ["1024x1366", "1366x1024", "834x1194",
"1194x834", "834x1112", "1112x834", "768x1024", "1024x768",
"820x1180", "1180x820", "810x1080", "1080x810"].indexOf(
`${o}x${d}`) >= 0 && (p = n.match(/(Version)\/([\d.]+)/), p || (
p = [0, 1, "13_0_0"]), f = !1), c && !h && (l.os = "android", l
.android = !0), (p || m || u) && (l.os = "ios", l.ios = !0), l
}(e)), S
}

function P() {
return T || (T = function () {
const e = r();
let t = !1;

function s() {
const t = e.navigator.userAgent.toLowerCase();
return t.indexOf("safari") >= 0 && t.indexOf("chrome") < 0 && t
.indexOf("android") < 0
}
if (s()) {
const s = String(e.navigator.userAgent);
if (s.includes("Version/")) {
const [e, a] = s.split("Version/")[1].split(" ")[0].split(".")
.map((e => Number(e)));
t = e < 16 || 16 === e && a < 2
}
}
return {
isSafari: t || s(),
needPerspectiveFix: t,
isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e
.navigator.userAgent)
}
}()), T
}
var L = {
on(e, t, s) {
const a = this;
if (!a.eventsListeners || a.destroyed) return a;
if ("function" != typeof t) return a;
const i = s ? "unshift" : "push";
return e.split(" ")
.forEach((e => {
a.eventsListeners[e] || (a.eventsListeners[e] = []), a
.eventsListeners[e][i](t)
})), a
},
once(e, t, s) {
const a = this;
if (!a.eventsListeners || a.destroyed) return a;
if ("function" != typeof t) return a;

function i() {
a.off(e, i), i.__emitterProxy && delete i.__emitterProxy;
for (var s = arguments.length, r = new Array(s), n = 0; n < s; n++)
r[n] = arguments[n];
t.apply(a, r)
}
return i.__emitterProxy = t, a.on(e, i, s)
},
onAny(e, t) {
const s = this;
if (!s.eventsListeners || s.destroyed) return s;
if ("function" != typeof e) return s;
const a = t ? "unshift" : "push";
return s.eventsAnyListeners.indexOf(e) < 0 && s.eventsAnyListeners[a](
e), s
},
offAny(e) {
const t = this;
if (!t.eventsListeners || t.destroyed) return t;
if (!t.eventsAnyListeners) return t;
const s = t.eventsAnyListeners.indexOf(e);
return s >= 0 && t.eventsAnyListeners.splice(s, 1), t
},
off(e, t) {
const s = this;
return !s.eventsListeners || s.destroyed ? s : s.eventsListeners ? (e
.split(" ")
.forEach((e => {
void 0 === t ? s.eventsListeners[e] = [] : s
.eventsListeners[e] && s.eventsListeners[e].forEach(((a,
i) => {
(a === t || a.__emitterProxy && a.__emitterProxy ===
t) && s.eventsListeners[e].splice(i, 1)
}))
})), s) : s
},
emit() {
const e = this;
if (!e.eventsListeners || e.destroyed) return e;
if (!e.eventsListeners) return e;
let t, s, a;
for (var i = arguments.length, r = new Array(i), n = 0; n < i; n++) r[
n] = arguments[n];
"string" == typeof r[0] || Array.isArray(r[0]) ? (t = r[0], s = r
.slice(1, r.length), a = e) : (t = r[0].events, s = r[0].data, a =
r[0].context || e), s.unshift(a);
return (Array.isArray(t) ? t : t.split(" "))
.forEach((t => {
e.eventsAnyListeners && e.eventsAnyListeners.length && e
.eventsAnyListeners.forEach((e => {
e.apply(a, [t, ...s])
})), e.eventsListeners && e.eventsListeners[t] && e
.eventsListeners[t].forEach((e => {
e.apply(a, s)
}))
})), e
}
};
const z = (e, t) => {
if (!e || e.destroyed || !e.params) return;
const s = t.closest(e.isElement ? "swiper-slide" :
`.${e.params.slideClass}`);
if (s) {
const t = s.querySelector(`.${e.params.lazyPreloaderClass}`);
t && t.remove()
}
},
A = (e, t) => {
if (!e.slides[t]) return;
const s = e.slides[t].querySelector('[loading="lazy"]');
s && s.removeAttribute("loading")
},
$ = e => {
if (!e || e.destroyed || !e.params) return;
let t = e.params.lazyPreloadPrevNext;
const s = e.slides.length;
if (!s || !t || t < 0) return;
t = Math.min(t, s);
const a = "auto" === e.params.slidesPerView ? e.slidesPerViewDynamic() :
Math.ceil(e.params.slidesPerView),
i = e.activeIndex;
if (e.params.grid && e.params.grid.rows > 1) {
const s = i,
r = [s - t];
return r.push(...Array.from({
length: t
})
.map(((e, t) => s + a + t))), void e.slides.forEach(((t, s) => {
r.includes(t.column) && A(e, s)
}))
}
const r = i + a - 1;
if (e.params.rewind || e.params.loop)
for (let a = i - t; a <= r + t; a += 1) {
const t = (a % s + s) % s;
(t < i || t > r) && A(e, t)
} else
for (let a = Math.max(i - t, 0); a <= Math.min(r + t, s - 1); a +=
1) a !== i && (a > r || a < i) && A(e, a)
};
var I = {
updateSize: function () {
const e = this;
let t, s;
const a = e.el;
t = void 0 !== e.params.width && null !== e.params.width ? e.params
.width : a.clientWidth, s = void 0 !== e.params.height && null !==
e.params.height ? e.params.height : a.clientHeight, 0 === t && e
.isHorizontal() || 0 === s && e.isVertical() || (t = t - parseInt(
v(a, "padding-left") || 0, 10) - parseInt(v(a,
"padding-right") || 0, 10), s = s - parseInt(v(a,
"padding-top") || 0, 10) - parseInt(v(a, "padding-bottom") ||
0, 10), Number.isNaN(t) && (t = 0), Number.isNaN(s) && (s =
0), Object.assign(e, {
width: t,
height: s,
size: e.isHorizontal() ? t : s
}))
},
updateSlides: function () {
const e = this;

function t(t) {
return e.isHorizontal() ? t : {
width: "height",
"margin-top": "margin-left",
"margin-bottom ": "margin-right",
"margin-left": "margin-top",
"margin-right": "margin-bottom",
"padding-left": "padding-top",
"padding-right": "padding-bottom",
marginRight: "marginBottom"
} [t]
}

function s(e, s) {
return parseFloat(e.getPropertyValue(t(s)) || 0)
}
const a = e.params,
{
wrapperEl: i,
slidesEl: r,
size: n,
rtlTranslate: l,
wrongRTL: o
} = e,
d = e.virtual && a.virtual.enabled,
c = d ? e.virtual.slides.length : e.slides.length,
u = h(r, `.${e.params.slideClass}, swiper-slide`),
m = d ? e.virtual.slides.length : u.length;
let f = [];
const g = [],
w = [];
let b = a.slidesOffsetBefore;
"function" == typeof b && (b = a.slidesOffsetBefore.call(e));
let y = a.slidesOffsetAfter;
"function" == typeof y && (y = a.slidesOffsetAfter.call(e));
const x = e.snapGrid.length,
S = e.slidesGrid.length;
let T = a.spaceBetween,
M = -b,
C = 0,
P = 0;
if (void 0 === n) return;
"string" == typeof T && T.indexOf("%") >= 0 ? T = parseFloat(T
.replace("%", "")) / 100 * n : "string" == typeof T && (T =
parseFloat(T)), e.virtualSize = -T, u.forEach((e => {
l ? e.style.marginLeft = "" : e.style.marginRight = "", e
.style.marginBottom = "", e.style.marginTop = ""
})), a.centeredSlides && a.cssMode && (p(i,
"--swiper-centered-offset-before", ""), p(i,
"--swiper-centered-offset-after", ""));
const L = a.grid && a.grid.rows > 1 && e.grid;
let z;
L && e.grid.initSlides(m);
const A = "auto" === a.slidesPerView && a.breakpoints && Object
.keys(a.breakpoints)
.filter((e => void 0 !== a.breakpoints[e].slidesPerView))
.length > 0;
for (let i = 0; i < m; i += 1) {
let r;
if (z = 0, u[i] && (r = u[i]), L && e.grid.updateSlide(i, r, m,
t), !u[i] || "none" !== v(r, "display")) {
if ("auto" === a.slidesPerView) {
A && (u[i].style[t("width")] = "");
const n = getComputedStyle(r),
l = r.style.transform,
o = r.style.webkitTransform;
if (l && (r.style.transform = "none"), o && (r.style
.webkitTransform = "none"), a.roundLengths) z = e
.isHorizontal() ? E(r, "width", !0) : E(r, "height", !0);
else {
const e = s(n, "width"),
t = s(n, "padding-left"),
a = s(n, "padding-right"),
i = s(n, "margin-left"),
l = s(n, "margin-right"),
o = n.getPropertyValue("box-sizing");
if (o && "border-box" === o) z = e + i + l;
else {
const {
clientWidth: s,
offsetWidth: n
} = r;
z = e + t + a + i + l + (n - s)
}
}
l && (r.style.transform = l), o && (r.style.webkitTransform =
o), a.roundLengths && (z = Math.floor(z))
} else z = (n - (a.slidesPerView - 1) * T) / a.slidesPerView, a
.roundLengths && (z = Math.floor(z)), u[i] && (u[i].style[t(
"width")] = `${z}px`);
u[i] && (u[i].swiperSlideSize = z), w.push(z), a
.centeredSlides ? (M = M + z / 2 + C / 2 + T, 0 === C && 0 !==
i && (M = M - n / 2 - T), 0 === i && (M = M - n / 2 - T),
Math.abs(M) < .001 && (M = 0), a.roundLengths && (M = Math
.floor(M)), P % a.slidesPerGroup == 0 && f.push(M), g
.push(M)) : (a.roundLengths && (M = Math.floor(M)), (P -
Math.min(e.params.slidesPerGroupSkip, P)) % e.params
.slidesPerGroup == 0 && f.push(M), g.push(M), M = M + z + T
), e.virtualSize += z + T, C = z, P += 1
}
}
if (e.virtualSize = Math.max(e.virtualSize, n) + y, l && o && (
"slide" === a.effect || "coverflow" === a.effect) && (i.style
.width = `${e.virtualSize+T}px`), a.setWrapperSize && (i.style[
t("width")] = `${e.virtualSize+T}px`), L && e.grid
.updateWrapperSize(z, f, t), !a.centeredSlides) {
const t = [];
for (let s = 0; s < f.length; s += 1) {
let i = f[s];
a.roundLengths && (i = Math.floor(i)), f[s] <= e.virtualSize -
n && t.push(i)
}
f = t, Math.floor(e.virtualSize - n) - Math.floor(f[f.length -
1]) > 1 && f.push(e.virtualSize - n)
}
if (d && a.loop) {
const t = w[0] + T;
if (a.slidesPerGroup > 1) {
const s = Math.ceil((e.virtual.slidesBefore + e.virtual
.slidesAfter) / a.slidesPerGroup),
i = t * a.slidesPerGroup;
for (let e = 0; e < s; e += 1) f.push(f[f.length - 1] + i)
}
for (let s = 0; s < e.virtual.slidesBefore + e.virtual
.slidesAfter; s += 1) 1 === a.slidesPerGroup && f.push(f[f
.length - 1] + t), g.push(g[g.length - 1] + t), e
.virtualSize += t
}
if (0 === f.length && (f = [0]), 0 !== T) {
const s = e.isHorizontal() && l ? "marginLeft" : t("marginRight");
u.filter(((e, t) => !(a.cssMode && !a.loop) || t !== u.length -
1))
.forEach((e => {
e.style[s] = `${T}px`
}))
}
if (a.centeredSlides && a.centeredSlidesBounds) {
let e = 0;
w.forEach((t => {
e += t + (T || 0)
})), e -= T;
const t = e - n;
f = f.map((e => e <= 0 ? -b : e > t ? t + y : e))
}
if (a.centerInsufficientSlides) {
let e = 0;
if (w.forEach((t => {
e += t + (T || 0)
})), e -= T, e < n) {
const t = (n - e) / 2;
f.forEach(((e, s) => {
f[s] = e - t
})), g.forEach(((e, s) => {
g[s] = e + t
}))
}
}
if (Object.assign(e, {
slides: u,
snapGrid: f,
slidesGrid: g,
slidesSizesGrid: w
}), a.centeredSlides && a.cssMode && !a.centeredSlidesBounds) {
p(i, "--swiper-centered-offset-before", -f[0] + "px"), p(i,
"--swiper-centered-offset-after", e.size / 2 - w[w.length -
1] / 2 + "px");
const t = -e.snapGrid[0],
s = -e.slidesGrid[0];
e.snapGrid = e.snapGrid.map((e => e + t)), e.slidesGrid = e
.slidesGrid.map((e => e + s))
}
if (m !== c && e.emit("slidesLengthChange"), f.length !== x && (e
.params.watchOverflow && e.checkOverflow(), e.emit(
"snapGridLengthChange")), g.length !== S && e.emit(
"slidesGridLengthChange"), a.watchSlidesProgress && e
.updateSlidesOffset(), !(d || a.cssMode || "slide" !== a.effect &&
"fade" !== a.effect)) {
const t = `${a.containerModifierClass}backface-hidden`,
s = e.el.classList.contains(t);
m <= a.maxBackfaceHiddenSlides ? s || e.el.classList.add(t) : s &&
e.el.classList.remove(t)
}
},
updateAutoHeight: function (e) {
const t = this,
s = [],
a = t.virtual && t.params.virtual.enabled;
let i, r = 0;
"number" == typeof e ? t.setTransition(e) : !0 === e && t
.setTransition(t.params.speed);
const n = e => a ? t.slides[t.getSlideIndexByData(e)] : t.slides[e];
if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
if (t.params.centeredSlides)(t.visibleSlides || [])
.forEach((e => {
s.push(e)
}));
else
for (i = 0; i < Math.ceil(t.params.slidesPerView); i += 1) {
const e = t.activeIndex + i;
if (e > t.slides.length && !a) break;
s.push(n(e))
} else s.push(n(t.activeIndex));
for (i = 0; i < s.length; i += 1)
if (void 0 !== s[i]) {
const e = s[i].offsetHeight;
r = e > r ? e : r
}(r || 0 === r) && (t.wrapperEl.style.height = `${r}px`)
},
updateSlidesOffset: function () {
const e = this,
t = e.slides,
s = e.isElement ? e.isHorizontal() ? e.wrapperEl.offsetLeft : e
.wrapperEl.offsetTop : 0;
for (let a = 0; a < t.length; a += 1) t[a].swiperSlideOffset = (e
.isHorizontal() ? t[a].offsetLeft : t[a].offsetTop) - s - e
.cssOverflowAdjustment()
},
updateSlidesProgress: function (e) {
void 0 === e && (e = this && this.translate || 0);
const t = this,
s = t.params,
{
slides: a,
rtlTranslate: i,
snapGrid: r
} = t;
if (0 === a.length) return;
void 0 === a[0].swiperSlideOffset && t.updateSlidesOffset();
let n = -e;
i && (n = e), a.forEach((e => {
e.classList.remove(s.slideVisibleClass)
})), t.visibleSlidesIndexes = [], t.visibleSlides = [];
let l = s.spaceBetween;
"string" == typeof l && l.indexOf("%") >= 0 ? l = parseFloat(l
.replace("%", "")) / 100 * t.size : "string" == typeof l && (l =
parseFloat(l));
for (let e = 0; e < a.length; e += 1) {
const o = a[e];
let d = o.swiperSlideOffset;
s.cssMode && s.centeredSlides && (d -= a[0].swiperSlideOffset);
const c = (n + (s.centeredSlides ? t.minTranslate() : 0) - d) / (o
.swiperSlideSize + l),
p = (n - r[0] + (s.centeredSlides ? t.minTranslate() : 0) - d) /
(o.swiperSlideSize + l),
u = -(n - d),
m = u + t.slidesSizesGrid[e];
(u >= 0 && u < t.size - 1 || m > 1 && m <= t.size || u <= 0 &&
m >= t.size) && (t.visibleSlides.push(o), t.visibleSlidesIndexes
.push(e), a[e].classList.add(s.slideVisibleClass)), o.progress =
i ? -c : c, o.originalProgress = i ? -p : p
}
},
updateProgress: function (e) {
const t = this;
if (void 0 === e) {
const s = t.rtlTranslate ? -1 : 1;
e = t && t.translate && t.translate * s || 0
}
const s = t.params,
a = t.maxTranslate() - t.minTranslate();
let {
progress: i,
isBeginning: r,
isEnd: n,
progressLoop: l
} = t;
const o = r,
d = n;
if (0 === a) i = 0, r = !0, n = !0;
else {
i = (e - t.minTranslate()) / a;
const s = Math.abs(e - t.minTranslate()) < 1,
l = Math.abs(e - t.maxTranslate()) < 1;
r = s || i <= 0, n = l || i >= 1, s && (i = 0), l && (i = 1)
}
if (s.loop) {
const s = t.getSlideIndexByData(0),
a = t.getSlideIndexByData(t.slides.length - 1),
i = t.slidesGrid[s],
r = t.slidesGrid[a],
n = t.slidesGrid[t.slidesGrid.length - 1],
o = Math.abs(e);
l = o >= i ? (o - i) / n : (o + n - r) / n, l > 1 && (l -= 1)
}
Object.assign(t, {
progress: i,
progressLoop: l,
isBeginning: r,
isEnd: n
}), (s.watchSlidesProgress || s.centeredSlides && s.autoHeight) &&
t.updateSlidesProgress(e), r && !o && t.emit(
"reachBeginning toEdge"), n && !d && t.emit("reachEnd toEdge"),
(o && !r || d && !n) && t.emit("fromEdge"), t.emit("progress", i)
},
updateSlidesClasses: function () {
const e = this,
{
slides: t,
params: s,
slidesEl: a,
activeIndex: i
} = e,
r = e.virtual && s.virtual.enabled,
n = e => h(a, `.${s.slideClass}${e}, swiper-slide${e}`)[0];
let l;
if (t.forEach((e => {
e.classList.remove(s.slideActiveClass, s.slideNextClass, s
.slidePrevClass)
})), r)
if (s.loop) {
let t = i - e.virtual.slidesBefore;
t < 0 && (t = e.virtual.slides.length + t), t >= e.virtual
.slides.length && (t -= e.virtual.slides.length), l = n(
`[data-swiper-slide-index="${t}"]`)
} else l = n(`[data-swiper-slide-index="${i}"]`);
else l = t[i];
if (l) {
l.classList.add(s.slideActiveClass);
let e = function (e, t) {
const s = [];
for (; e.nextElementSibling;) {
const a = e.nextElementSibling;
t ? a.matches(t) && s.push(a) : s.push(a), e = a
}
return s
}(l, `.${s.slideClass}, swiper-slide`)[0];
s.loop && !e && (e = t[0]), e && e.classList.add(s
.slideNextClass);
let a = function (e, t) {
const s = [];
for (; e.previousElementSibling;) {
const a = e.previousElementSibling;
t ? a.matches(t) && s.push(a) : s.push(a), e = a
}
return s
}(l, `.${s.slideClass}, swiper-slide`)[0];
s.loop && 0 === !a && (a = t[t.length - 1]), a && a.classList.add(
s.slidePrevClass)
}
e.emitSlidesClasses()
},
updateActiveIndex: function (e) {
const t = this,
s = t.rtlTranslate ? t.translate : -t.translate,
{
snapGrid: a,
params: i,
activeIndex: r,
realIndex: n,
snapIndex: l
} = t;
let o, d = e;
const c = e => {
let s = e - t.virtual.slidesBefore;
return s < 0 && (s = t.virtual.slides.length + s), s >= t
.virtual.slides.length && (s -= t.virtual.slides.length), s
};
if (void 0 === d && (d = function (e) {
const {
slidesGrid: t,
params: s
} = e, a = e.rtlTranslate ? e.translate : -e.translate;
let i;
for (let e = 0; e < t.length; e += 1) void 0 !== t[e + 1] ?
a >= t[e] && a < t[e + 1] - (t[e + 1] - t[e]) / 2 ? i = e :
a >= t[e] && a < t[e + 1] && (i = e + 1) : a >= t[e] && (i =
e);
return s.normalizeSlideIndex && (i < 0 || void 0 === i) && (
i = 0), i
}(t)), a.indexOf(s) >= 0) o = a.indexOf(s);
else {
const e = Math.min(i.slidesPerGroupSkip, d);
o = e + Math.floor((d - e) / i.slidesPerGroup)
}
if (o >= a.length && (o = a.length - 1), d === r) return o !== l &&
(t.snapIndex = o, t.emit("snapIndexChange")), void(t.params
.loop && t.virtual && t.params.virtual.enabled && (t
.realIndex = c(d)));
let p;
p = t.virtual && i.virtual.enabled && i.loop ? c(d) : t.slides[d] ?
parseInt(t.slides[d].getAttribute("data-swiper-slide-index") || d,
10) : d, Object.assign(t, {
previousSnapIndex: l,
snapIndex: o,
previousRealIndex: n,
realIndex: p,
previousIndex: r,
activeIndex: d
}), t.initialized && $(t), t.emit("activeIndexChange"), t.emit(
"snapIndexChange"), n !== p && t.emit("realIndexChange"), (t
.initialized || t.params.runCallbacksOnInit) && t.emit(
"slideChange")
},
updateClickedSlide: function (e) {
const t = this,
s = t.params,
a = e.closest(`.${s.slideClass}, swiper-slide`);
let i, r = !1;
if (a)
for (let e = 0; e < t.slides.length; e += 1)
if (t.slides[e] === a) {
r = !0, i = e;
break
} if (!a || !r) return t.clickedSlide = void 0, void(t
.clickedIndex = void 0);
t.clickedSlide = a, t.virtual && t.params.virtual.enabled ? t
.clickedIndex = parseInt(a.getAttribute(
"data-swiper-slide-index"), 10) : t.clickedIndex = i, s
.slideToClickedSlide && void 0 !== t.clickedIndex && t
.clickedIndex !== t.activeIndex && t.slideToClickedSlide()
}
};
var k = {
getTranslate: function (e) {
void 0 === e && (e = this.isHorizontal() ? "x" : "y");
const {
params: t,
rtlTranslate: s,
translate: a,
wrapperEl: i
} = this;
if (t.virtualTranslate) return s ? -a : a;
if (t.cssMode) return a;
let r = o(i, e);
return r += this.cssOverflowAdjustment(), s && (r = -r), r || 0
},
setTranslate: function (e, t) {
const s = this,
{
rtlTranslate: a,
params: i,
wrapperEl: r,
progress: n
} = s;
let l, o = 0,
d = 0;
s.isHorizontal() ? o = a ? -e : e : d = e, i.roundLengths && (o =
Math.floor(o), d = Math.floor(d)), s.previousTranslate = s
.translate, s.translate = s.isHorizontal() ? o : d, i.cssMode ? r[
s.isHorizontal() ? "scrollLeft" : "scrollTop"] = s
.isHorizontal() ? -o : -d : i.virtualTranslate || (s
.isHorizontal() ? o -= s.cssOverflowAdjustment() : d -= s
.cssOverflowAdjustment(), r.style.transform =
`translate3d(${o}px, ${d}px, 0px)`);
const c = s.maxTranslate() - s.minTranslate();
l = 0 === c ? 0 : (e - s.minTranslate()) / c, l !== n && s
.updateProgress(e), s.emit("setTranslate", s.translate, t)
},
minTranslate: function () {
return -this.snapGrid[0]
},
maxTranslate: function () {
return -this.snapGrid[this.snapGrid.length - 1]
},
translateTo: function (e, t, s, a, i) {
void 0 === e && (e = 0), void 0 === t && (t = this.params.speed),
void 0 === s && (s = !0), void 0 === a && (a = !0);
const r = this,
{
params: n,
wrapperEl: l
} = r;
if (r.animating && n.preventInteractionOnTransition) return !1;
const o = r.minTranslate(),
d = r.maxTranslate();
let c;
if (c = a && e > o ? o : a && e < d ? d : e, r.updateProgress(c), n
.cssMode) {
const e = r.isHorizontal();
if (0 === t) l[e ? "scrollLeft" : "scrollTop"] = -c;
else {
if (!r.support.smoothScroll) return u({
swiper: r,
targetPosition: -c,
side: e ? "left" : "top"
}), !0;
l.scrollTo({
[e ? "left" : "top"]: -c,
behavior: "smooth"
})
}
return !0
}
return 0 === t ? (r.setTransition(0), r.setTranslate(c), s && (r
.emit("beforeTransitionStart", t, i), r.emit("transitionEnd")
)) : (r.setTransition(t), r.setTranslate(c), s && (r.emit(
"beforeTransitionStart", t, i), r.emit("transitionStart")), r
.animating || (r.animating = !0, r
.onTranslateToWrapperTransitionEnd || (r
.onTranslateToWrapperTransitionEnd = function (e) {
r && !r.destroyed && e.target === this && (r.wrapperEl
.removeEventListener("transitionend", r
.onTranslateToWrapperTransitionEnd), r
.onTranslateToWrapperTransitionEnd = null, delete r
.onTranslateToWrapperTransitionEnd, s && r.emit(
"transitionEnd"))
}), r.wrapperEl.addEventListener("transitionend", r
.onTranslateToWrapperTransitionEnd))), !0
}
};

function O(e) {
let {
swiper: t,
runCallbacks: s,
direction: a,
step: i
} = e;
const {
activeIndex: r,
previousIndex: n
} = t;
let l = a;
if (l || (l = r > n ? "next" : r < n ? "prev" : "reset"), t.emit(
`transition${i}`), s && r !== n) {
if ("reset" === l) return void t.emit(`slideResetTransition${i}`);
t.emit(`slideChangeTransition${i}`), "next" === l ? t.emit(
`slideNextTransition${i}`) : t.emit(`slidePrevTransition${i}`)
}
}
var D = {
slideTo: function (e, t, s, a, i) {
void 0 === e && (e = 0), void 0 === t && (t = this.params.speed),
void 0 === s && (s = !0), "string" == typeof e && (e = parseInt(e,
10));
const r = this;
let n = e;
n < 0 && (n = 0);
const {
params: l,
snapGrid: o,
slidesGrid: d,
previousIndex: c,
activeIndex: p,
rtlTranslate: m,
wrapperEl: h,
enabled: f
} = r;
if (r.animating && l.preventInteractionOnTransition || !f && !a && !
i) return !1;
const g = Math.min(r.params.slidesPerGroupSkip, n);
let v = g + Math.floor((n - g) / r.params.slidesPerGroup);
v >= o.length && (v = o.length - 1);
const w = -o[v];
if (l.normalizeSlideIndex)
for (let e = 0; e < d.length; e += 1) {
const t = -Math.floor(100 * w),
s = Math.floor(100 * d[e]),
a = Math.floor(100 * d[e + 1]);
void 0 !== d[e + 1] ? t >= s && t < a - (a - s) / 2 ? n = e :
t >= s && t < a && (n = e + 1) : t >= s && (n = e)
}
if (r.initialized && n !== p) {
if (!r.allowSlideNext && (m ? w > r.translate && w > r
.minTranslate() : w < r.translate && w < r.minTranslate()))
return !1;
if (!r.allowSlidePrev && w > r.translate && w > r
.maxTranslate() && (p || 0) !== n) return !1
}
let b;
if (n !== (c || 0) && s && r.emit("beforeSlideChangeStart"), r
.updateProgress(w), b = n > p ? "next" : n < p ? "prev" : "reset",
m && -w === r.translate || !m && w === r.translate) return r
.updateActiveIndex(n), l.autoHeight && r.updateAutoHeight(), r
.updateSlidesClasses(), "slide" !== l.effect && r.setTranslate(
w), "reset" !== b && (r.transitionStart(s, b), r
.transitionEnd(s, b)), !1;
if (l.cssMode) {
const e = r.isHorizontal(),
s = m ? w : -w;
if (0 === t) {
const t = r.virtual && r.params.virtual.enabled;
t && (r.wrapperEl.style.scrollSnapType = "none", r
._immediateVirtual = !0), t && !r
._cssModeVirtualInitialSet && r.params.initialSlide > 0 ? (r
._cssModeVirtualInitialSet = !0, requestAnimationFrame((
() => {
h[e ? "scrollLeft" : "scrollTop"] = s
}))) : h[e ? "scrollLeft" : "scrollTop"] = s, t &&
requestAnimationFrame((() => {
r.wrapperEl.style.scrollSnapType = "", r
._immediateVirtual = !1
}))
} else {
if (!r.support.smoothScroll) return u({
swiper: r,
targetPosition: s,
side: e ? "left" : "top"
}), !0;
h.scrollTo({
[e ? "left" : "top"]: s,
behavior: "smooth"
})
}
return !0
}
return r.setTransition(t), r.setTranslate(w), r.updateActiveIndex(
n), r.updateSlidesClasses(), r.emit("beforeTransitionStart", t,
a), r.transitionStart(s, b), 0 === t ? r.transitionEnd(s, b) : r
.animating || (r.animating = !0, r
.onSlideToWrapperTransitionEnd || (r
.onSlideToWrapperTransitionEnd = function (e) {
r && !r.destroyed && e.target === this && (r.wrapperEl
.removeEventListener("transitionend", r
.onSlideToWrapperTransitionEnd), r
.onSlideToWrapperTransitionEnd = null, delete r
.onSlideToWrapperTransitionEnd, r.transitionEnd(s, b))
}), r.wrapperEl.addEventListener("transitionend", r
.onSlideToWrapperTransitionEnd)), !0
},
slideToLoop: function (e, t, s, a) {
if (void 0 === e && (e = 0), void 0 === t && (t = this.params
.speed), void 0 === s && (s = !0), "string" == typeof e) {
e = parseInt(e, 10)
}
const i = this;
let r = e;
return i.params.loop && (i.virtual && i.params.virtual.enabled ?
r += i.virtual.slidesBefore : r = i.getSlideIndexByData(r)), i
.slideTo(r, t, s, a)
},
slideNext: function (e, t, s) {
void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
const a = this,
{
enabled: i,
params: r,
animating: n
} = a;
if (!i) return a;
let l = r.slidesPerGroup;
"auto" === r.slidesPerView && 1 === r.slidesPerGroup && r
.slidesPerGroupAuto && (l = Math.max(a.slidesPerViewDynamic(
"current", !0), 1));
const o = a.activeIndex < r.slidesPerGroupSkip ? 1 : l,
d = a.virtual && r.virtual.enabled;
if (r.loop) {
if (n && !d && r.loopPreventsSliding) return !1;
a.loopFix({
direction: "next"
}), a._clientLeft = a.wrapperEl.clientLeft
}
return r.rewind && a.isEnd ? a.slideTo(0, e, t, s) : a.slideTo(a
.activeIndex + o, e, t, s)
},
slidePrev: function (e, t, s) {
void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
const a = this,
{
params: i,
snapGrid: r,
slidesGrid: n,
rtlTranslate: l,
enabled: o,
animating: d
} = a;
if (!o) return a;
const c = a.virtual && i.virtual.enabled;
if (i.loop) {
if (d && !c && i.loopPreventsSliding) return !1;
a.loopFix({
direction: "prev"
}), a._clientLeft = a.wrapperEl.clientLeft
}

function p(e) {
return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
}
const u = p(l ? a.translate : -a.translate),
m = r.map((e => p(e)));
let h = r[m.indexOf(u) - 1];
if (void 0 === h && i.cssMode) {
let e;
r.forEach(((t, s) => {
u >= t && (e = s)
})), void 0 !== e && (h = r[e > 0 ? e - 1 : e])
}
let f = 0;
if (void 0 !== h && (f = n.indexOf(h), f < 0 && (f = a.activeIndex -
1), "auto" === i.slidesPerView && 1 === i.slidesPerGroup && i
.slidesPerGroupAuto && (f = f - a.slidesPerViewDynamic(
"previous", !0) + 1, f = Math.max(f, 0))), i.rewind && a
.isBeginning) {
const i = a.params.virtual && a.params.virtual.enabled && a
.virtual ? a.virtual.slides.length - 1 : a.slides.length - 1;
return a.slideTo(i, e, t, s)
}
return a.slideTo(f, e, t, s)
},
slideReset: function (e, t, s) {
return void 0 === e && (e = this.params.speed), void 0 === t && (
t = !0), this.slideTo(this.activeIndex, e, t, s)
},
slideToClosest: function (e, t, s, a) {
void 0 === e && (e = this.params.speed), void 0 === t && (t = !0),
void 0 === a && (a = .5);
const i = this;
let r = i.activeIndex;
const n = Math.min(i.params.slidesPerGroupSkip, r),
l = n + Math.floor((r - n) / i.params.slidesPerGroup),
o = i.rtlTranslate ? i.translate : -i.translate;
if (o >= i.snapGrid[l]) {
const e = i.snapGrid[l];
o - e > (i.snapGrid[l + 1] - e) * a && (r += i.params
.slidesPerGroup)
} else {
const e = i.snapGrid[l - 1];
o - e <= (i.snapGrid[l] - e) * a && (r -= i.params.slidesPerGroup)
}
return r = Math.max(r, 0), r = Math.min(r, i.slidesGrid.length - 1),
i.slideTo(r, e, t, s)
},
slideToClickedSlide: function () {
const e = this,
{
params: t,
slidesEl: s
} = e,
a = "auto" === t.slidesPerView ? e.slidesPerViewDynamic() : t
.slidesPerView;
let i, r = e.clickedIndex;
const l = e.isElement ? "swiper-slide" : `.${t.slideClass}`;
if (t.loop) {
if (e.animating) return;
i = parseInt(e.clickedSlide.getAttribute(
"data-swiper-slide-index"), 10), t.centeredSlides ? r < e
.loopedSlides - a / 2 || r > e.slides.length - e.loopedSlides +
a / 2 ? (e.loopFix(), r = e.getSlideIndex(h(s,
`${l}[data-swiper-slide-index="${i}"]`)[0]), n((() => {
e.slideTo(r)
}))) : e.slideTo(r) : r > e.slides.length - a ? (e.loopFix(),
r = e.getSlideIndex(h(s,
`${l}[data-swiper-slide-index="${i}"]`)[0]), n((() => {
e.slideTo(r)
}))) : e.slideTo(r)
} else e.slideTo(r)
}
};
var G = {
loopCreate: function (e) {
const t = this,
{
params: s,
slidesEl: a
} = t;
if (!s.loop || t.virtual && t.params.virtual.enabled) return;
h(a, `.${s.slideClass}, swiper-slide`)
.forEach(((e, t) => {
e.setAttribute("data-swiper-slide-index", t)
})), t.loopFix({
slideRealIndex: e,
direction: s.centeredSlides ? void 0 : "next"
})
},
loopFix: function (e) {
let {
slideRealIndex: t,
slideTo: s = !0,
direction: a,
setTranslate: i,
activeSlideIndex: r,
byController: n,
byMousewheel: l
} = void 0 === e ? {} : e;
const o = this;
if (!o.params.loop) return;
o.emit("beforeLoopFix");
const {
slides: d,
allowSlidePrev: c,
allowSlideNext: p,
slidesEl: u,
params: m
} = o;
if (o.allowSlidePrev = !0, o.allowSlideNext = !0, o.virtual && m
.virtual.enabled) return s && (m.centeredSlides || 0 !== o
.snapIndex ? m.centeredSlides && o.snapIndex < m
.slidesPerView ? o.slideTo(o.virtual.slides.length + o
.snapIndex, 0, !1, !0) : o.snapIndex === o.snapGrid.length -
1 && o.slideTo(o.virtual.slidesBefore, 0, !1, !0) : o.slideTo(
o.virtual.slides.length, 0, !1, !0)), o.allowSlidePrev = c,
o.allowSlideNext = p, void o.emit("loopFix");
const h = "auto" === m.slidesPerView ? o.slidesPerViewDynamic() :
Math.ceil(parseFloat(m.slidesPerView, 10));
let f = m.loopedSlides || h;
f % m.slidesPerGroup != 0 && (f += m.slidesPerGroup - f % m
.slidesPerGroup), o.loopedSlides = f;
const g = [],
v = [];
let w = o.activeIndex;
void 0 === r ? r = o.getSlideIndex(o.slides.filter((e => e.classList
.contains(m.slideActiveClass)))[0]) : w = r;
const b = "next" === a || !a,
y = "prev" === a || !a;
let E = 0,
x = 0;
if (r < f) {
E = Math.max(f - r, m.slidesPerGroup);
for (let e = 0; e < f - r; e += 1) {
const t = e - Math.floor(e / d.length) * d.length;
g.push(d.length - t - 1)
}
} else if (r > o.slides.length - 2 * f) {
x = Math.max(r - (o.slides.length - 2 * f), m.slidesPerGroup);
for (let e = 0; e < x; e += 1) {
const t = e - Math.floor(e / d.length) * d.length;
v.push(t)
}
}
if (y && g.forEach((e => {
o.slides[e].swiperLoopMoveDOM = !0, u.prepend(o.slides[e]),
o.slides[e].swiperLoopMoveDOM = !1
})), b && v.forEach((e => {
o.slides[e].swiperLoopMoveDOM = !0, u.append(o.slides[e]), o
.slides[e].swiperLoopMoveDOM = !1
})), o.recalcSlides(), "auto" === m.slidesPerView && o
.updateSlides(), m.watchSlidesProgress && o.updateSlidesOffset(),
s)
if (g.length > 0 && y)
if (void 0 === t) {
const e = o.slidesGrid[w],
t = o.slidesGrid[w + E] - e;
l ? o.setTranslate(o.translate - t) : (o.slideTo(w + E, 0, !1,
!0), i && (o.touches[o.isHorizontal() ? "startX" :
"startY"] += t))
} else i && o.slideToLoop(t, 0, !1, !0);
else if (v.length > 0 && b)
if (void 0 === t) {
const e = o.slidesGrid[w],
t = o.slidesGrid[w - x] - e;
l ? o.setTranslate(o.translate - t) : (o.slideTo(w - x, 0, !1, !
0), i && (o.touches[o.isHorizontal() ? "startX" :
"startY"] += t))
} else o.slideToLoop(t, 0, !1, !0);
if (o.allowSlidePrev = c, o.allowSlideNext = p, o.controller && o
.controller.control && !n) {
const e = {
slideRealIndex: t,
slideTo: !1,
direction: a,
setTranslate: i,
activeSlideIndex: r,
byController: !0
};
Array.isArray(o.controller.control) ? o.controller.control
.forEach((t => {
!t.destroyed && t.params.loop && t.loopFix(e)
})) : o.controller.control instanceof o.constructor && o
.controller.control.params.loop && o.controller.control.loopFix(
e)
}
o.emit("loopFix")
},
loopDestroy: function () {
const e = this,
{
params: t,
slidesEl: s
} = e;
if (!t.loop || e.virtual && e.params.virtual.enabled) return;
e.recalcSlides();
const a = [];
e.slides.forEach((e => {
const t = void 0 === e.swiperSlideIndex ? 1 * e
.getAttribute("data-swiper-slide-index") : e
.swiperSlideIndex;
a[t] = e
})), e.slides.forEach((e => {
e.removeAttribute("data-swiper-slide-index")
})), a.forEach((e => {
s.append(e)
})), e.recalcSlides(), e.slideTo(e.realIndex, 0)
}
};

function H(e) {
const t = this,
s = a(),
i = r(),
n = t.touchEventsData;
n.evCache.push(e);
const {
params: o,
touches: d,
enabled: c
} = t;
if (!c) return;
if (!o.simulateTouch && "mouse" === e.pointerType) return;
if (t.animating && o.preventInteractionOnTransition) return;
!t.animating && o.cssMode && o.loop && t.loopFix();
let p = e;
p.originalEvent && (p = p.originalEvent);
let u = p.target;
if ("wrapper" === o.touchEventsTarget && !t.wrapperEl.contains(u)) return;
if ("which" in p && 3 === p.which) return;
if ("button" in p && p.button > 0) return;
if (n.isTouched && n.isMoved) return;
const m = !!o.noSwipingClass && "" !== o.noSwipingClass,
h = e.composedPath ? e.composedPath() : e.path;
m && p.target && p.target.shadowRoot && h && (u = h[0]);
const f = o.noSwipingSelector ? o.noSwipingSelector :
`.${o.noSwipingClass}`,
g = !(!p.target || !p.target.shadowRoot);
if (o.noSwiping && (g ? function (e, t) {
return void 0 === t && (t = this),
function t(s) {
if (!s || s === a() || s === r()) return null;
s.assignedSlot && (s = s.assignedSlot);
const i = s.closest(e);
return i || s.getRootNode ? i || t(s.getRootNode()
.host) : null
}(t)
}(f, u) : u.closest(f))) return void(t.allowClick = !0);
if (o.swipeHandler && !u.closest(o.swipeHandler)) return;
d.currentX = p.pageX, d.currentY = p.pageY;
const v = d.currentX,
w = d.currentY,
b = o.edgeSwipeDetection || o.iOSEdgeSwipeDetection,
y = o.edgeSwipeThreshold || o.iOSEdgeSwipeThreshold;
if (b && (v <= y || v >= i.innerWidth - y)) {
if ("prevent" !== b) return;
e.preventDefault()
}
Object.assign(n, {
isTouched: !0,
isMoved: !1,
allowTouchCallbacks: !0,
isScrolling: void 0,
startMoving: void 0
}), d.startX = v, d.startY = w, n.touchStartTime = l(), t.allowClick = !
0, t.updateSize(), t.swipeDirection = void 0, o.threshold > 0 && (n
.allowThresholdMove = !1);
let E = !0;
u.matches(n.focusableElements) && (E = !1, "SELECT" === u.nodeName && (n
.isTouched = !1)), s.activeElement && s.activeElement.matches(n
.focusableElements) && s.activeElement !== u && s.activeElement.blur();
const x = E && t.allowTouchMove && o.touchStartPreventDefault;
!o.touchStartForcePreventDefault && !x || u.isContentEditable || p
.preventDefault(), o.freeMode && o.freeMode.enabled && t.freeMode && t
.animating && !o.cssMode && t.freeMode.onTouchStart(), t.emit(
"touchStart", p)
}

function X(e) {
const t = a(),
s = this,
i = s.touchEventsData,
{
params: r,
touches: n,
rtlTranslate: o,
enabled: d
} = s;
if (!d) return;
if (!r.simulateTouch && "mouse" === e.pointerType) return;
let c = e;
if (c.originalEvent && (c = c.originalEvent), !i.isTouched) return void(i
.startMoving && i.isScrolling && s.emit("touchMoveOpposite", c));
const p = i.evCache.findIndex((e => e.pointerId === c.pointerId));
p >= 0 && (i.evCache[p] = c);
const u = i.evCache.length > 1 ? i.evCache[0] : c,
m = u.pageX,
h = u.pageY;
if (c.preventedByNestedSwiper) return n.startX = m, void(n.startY = h);
if (!s.allowTouchMove) return c.target.matches(i.focusableElements) || (s
.allowClick = !1), void(i.isTouched && (Object.assign(n, {
startX: m,
startY: h,
prevX: s.touches.currentX,
prevY: s.touches.currentY,
currentX: m,
currentY: h
}), i.touchStartTime = l()));
if (r.touchReleaseOnEdges && !r.loop)
if (s.isVertical()) {
if (h < n.startY && s.translate <= s.maxTranslate() || h > n.startY &&
s.translate >= s.minTranslate()) return i.isTouched = !1, void(i
.isMoved = !1)
} else if (m < n.startX && s.translate <= s.maxTranslate() || m > n
.startX && s.translate >= s.minTranslate()) return;
if (t.activeElement && c.target === t.activeElement && c.target.matches(i
.focusableElements)) return i.isMoved = !0, void(s.allowClick = !1);
if (i.allowTouchCallbacks && s.emit("touchMove", c), c.targetTouches && c
.targetTouches.length > 1) return;
n.currentX = m, n.currentY = h;
const f = n.currentX - n.startX,
g = n.currentY - n.startY;
if (s.params.threshold && Math.sqrt(f ** 2 + g ** 2) < s.params.threshold)
return;
if (void 0 === i.isScrolling) {
let e;
s.isHorizontal() && n.currentY === n.startY || s.isVertical() && n
.currentX === n.startX ? i.isScrolling = !1 : f * f + g * g >= 25 && (
e = 180 * Math.atan2(Math.abs(g), Math.abs(f)) / Math.PI, i
.isScrolling = s.isHorizontal() ? e > r.touchAngle : 90 - e > r
.touchAngle)
}
if (i.isScrolling && s.emit("touchMoveOpposite", c), void 0 === i
.startMoving && (n.currentX === n.startX && n.currentY === n.startY || (
i.startMoving = !0)), i.isScrolling || s.zoom && s.params.zoom && s
.params.zoom.enabled && i.evCache.length > 1) return void(i
.isTouched = !1);
if (!i.startMoving) return;
s.allowClick = !1, !r.cssMode && c.cancelable && c.preventDefault(), r
.touchMoveStopPropagation && !r.nested && c.stopPropagation();
let v = s.isHorizontal() ? f : g,
w = s.isHorizontal() ? n.currentX - n.previousX : n.currentY - n
.previousY;
r.oneWayMovement && (v = Math.abs(v) * (o ? 1 : -1), w = Math.abs(w) * (
o ? 1 : -1)), n.diff = v, v *= r.touchRatio, o && (v = -v, w = -w);
const b = s.touchesDirection;
s.swipeDirection = v > 0 ? "prev" : "next", s.touchesDirection = w > 0 ?
"prev" : "next";
const y = s.params.loop && !r.cssMode;
if (!i.isMoved) {
if (y && s.loopFix({
direction: s.swipeDirection
}), i.startTranslate = s.getTranslate(), s.setTransition(0), s
.animating) {
const e = new window.CustomEvent("transitionend", {
bubbles: !0,
cancelable: !0
});
s.wrapperEl.dispatchEvent(e)
}
i.allowMomentumBounce = !1, !r.grabCursor || !0 !== s.allowSlideNext &&
!0 !== s.allowSlidePrev || s.setGrabCursor(!0), s.emit(
"sliderFirstMove", c)
}
let E;
i.isMoved && b !== s.touchesDirection && y && Math.abs(v) >= 1 && (s
.loopFix({
direction: s.swipeDirection,
setTranslate: !0
}), E = !0), s.emit("sliderMove", c), i.isMoved = !0, i
.currentTranslate = v + i.startTranslate;
let x = !0,
S = r.resistanceRatio;
if (r.touchReleaseOnEdges && (S = 0), v > 0 ? (y && !E && i
.currentTranslate > (r.centeredSlides ? s.minTranslate() - s.size /
2 : s.minTranslate()) && s.loopFix({
direction: "prev",
setTranslate: !0,
activeSlideIndex: 0
}), i.currentTranslate > s.minTranslate() && (x = !1, r.resistance &&
(i.currentTranslate = s.minTranslate() - 1 + (-s.minTranslate() + i
.startTranslate + v) ** S))) : v < 0 && (y && !E && i
.currentTranslate < (r.centeredSlides ? s.maxTranslate() + s.size /
2 : s.maxTranslate()) && s.loopFix({
direction: "next",
setTranslate: !0,
activeSlideIndex: s.slides.length - ("auto" === r.slidesPerView ?
s.slidesPerViewDynamic() : Math.ceil(parseFloat(r
.slidesPerView, 10)))
}), i.currentTranslate < s.maxTranslate() && (x = !1, r.resistance &&
(i.currentTranslate = s.maxTranslate() + 1 - (s.maxTranslate() - i
.startTranslate - v) ** S))), x && (c.preventedByNestedSwiper = !
0), !s.allowSlideNext && "next" === s.swipeDirection && i
.currentTranslate < i.startTranslate && (i.currentTranslate = i
.startTranslate), !s.allowSlidePrev && "prev" === s.swipeDirection &&
i.currentTranslate > i.startTranslate && (i.currentTranslate = i
.startTranslate), s.allowSlidePrev || s.allowSlideNext || (i
.currentTranslate = i.startTranslate), r.threshold > 0) {
if (!(Math.abs(v) > r.threshold || i.allowThresholdMove)) return void(i
.currentTranslate = i.startTranslate);
if (!i.allowThresholdMove) return i.allowThresholdMove = !0, n.startX =
n.currentX, n.startY = n.currentY, i.currentTranslate = i
.startTranslate, void(n.diff = s.isHorizontal() ? n.currentX - n
.startX : n.currentY - n.startY)
}
r.followFinger && !r.cssMode && ((r.freeMode && r.freeMode.enabled && s
.freeMode || r.watchSlidesProgress) && (s.updateActiveIndex(), s
.updateSlidesClasses()), r.freeMode && r.freeMode.enabled && s
.freeMode && s.freeMode.onTouchMove(), s.updateProgress(i
.currentTranslate), s.setTranslate(i.currentTranslate))
}

function Y(e) {
const t = this,
s = t.touchEventsData,
a = s.evCache.findIndex((t => t.pointerId === e.pointerId));
if (a >= 0 && s.evCache.splice(a, 1), ["pointercancel", "pointerout",
"pointerleave"].includes(e.type)) {
if (!("pointercancel" === e.type && (t.browser.isSafari || t.browser
.isWebView))) return
}
const {
params: i,
touches: r,
rtlTranslate: o,
slidesGrid: d,
enabled: c
} = t;
if (!c) return;
if (!i.simulateTouch && "mouse" === e.pointerType) return;
let p = e;
if (p.originalEvent && (p = p.originalEvent), s.allowTouchCallbacks && t
.emit("touchEnd", p), s.allowTouchCallbacks = !1, !s.isTouched) return s
.isMoved && i.grabCursor && t.setGrabCursor(!1), s.isMoved = !1, void(
s.startMoving = !1);
i.grabCursor && s.isMoved && s.isTouched && (!0 === t.allowSlideNext || !
0 === t.allowSlidePrev) && t.setGrabCursor(!1);
const u = l(),
m = u - s.touchStartTime;
if (t.allowClick) {
const e = p.path || p.composedPath && p.composedPath();
t.updateClickedSlide(e && e[0] || p.target), t.emit("tap click", p), m <
300 && u - s.lastClickTime < 300 && t.emit("doubleTap doubleClick", p)
}
if (s.lastClickTime = l(), n((() => {
t.destroyed || (t.allowClick = !0)
})), !s.isTouched || !s.isMoved || !t.swipeDirection || 0 === r.diff ||
s.currentTranslate === s.startTranslate) return s.isTouched = !1, s
.isMoved = !1, void(s.startMoving = !1);
let h;
if (s.isTouched = !1, s.isMoved = !1, s.startMoving = !1, h = i
.followFinger ? o ? t.translate : -t.translate : -s.currentTranslate, i
.cssMode) return;
if (i.freeMode && i.freeMode.enabled) return void t.freeMode.onTouchEnd({
currentPos: h
});
let f = 0,
g = t.slidesSizesGrid[0];
for (let e = 0; e < d.length; e += e < i.slidesPerGroupSkip ? 1 : i
.slidesPerGroup) {
const t = e < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
void 0 !== d[e + t] ? h >= d[e] && h < d[e + t] && (f = e, g = d[e +
t] - d[e]) : h >= d[e] && (f = e, g = d[d.length - 1] - d[d.length -
2])
}
let v = null,
w = null;
i.rewind && (t.isBeginning ? w = i.virtual && i.virtual.enabled && t
.virtual ? t.virtual.slides.length - 1 : t.slides.length - 1 : t
.isEnd && (v = 0));
const b = (h - d[f]) / g,
y = f < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
if (m > i.longSwipesMs) {
if (!i.longSwipes) return void t.slideTo(t.activeIndex);
"next" === t.swipeDirection && (b >= i.longSwipesRatio ? t.slideTo(i
.rewind && t.isEnd ? v : f + y) : t.slideTo(f)), "prev" === t
.swipeDirection && (b > 1 - i.longSwipesRatio ? t.slideTo(f + y) :
null !== w && b < 0 && Math.abs(b) > i.longSwipesRatio ? t.slideTo(
w) : t.slideTo(f))
} else {
if (!i.shortSwipes) return void t.slideTo(t.activeIndex);
t.navigation && (p.target === t.navigation.nextEl || p.target === t
.navigation.prevEl) ? p.target === t.navigation.nextEl ? t.slideTo(
f + y) : t.slideTo(f) : ("next" === t.swipeDirection && t.slideTo(
null !== v ? v : f + y), "prev" === t.swipeDirection && t.slideTo(
null !== w ? w : f))
}
}

function B() {
const e = this,
{
params: t,
el: s
} = e;
if (s && 0 === s.offsetWidth) return;
t.breakpoints && e.setBreakpoint();
const {
allowSlideNext: a,
allowSlidePrev: i,
snapGrid: r
} = e, n = e.virtual && e.params.virtual.enabled;
e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e
.updateSlides(), e.updateSlidesClasses();
const l = n && t.loop;
!("auto" === t.slidesPerView || t.slidesPerView > 1) || !e.isEnd || e
.isBeginning || e.params.centeredSlides || l ? e.params.loop && !n ? e
.slideToLoop(e.realIndex, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !
0) : e.slideTo(e.slides.length - 1, 0, !1, !0), e.autoplay && e
.autoplay.running && e.autoplay.paused && (clearTimeout(e.autoplay
.resizeTimeout), e.autoplay.resizeTimeout = setTimeout((() => {
e.autoplay && e.autoplay.running && e.autoplay.paused && e
.autoplay.resume()
}), 500)), e.allowSlidePrev = i, e.allowSlideNext = a, e.params
.watchOverflow && r !== e.snapGrid && e.checkOverflow()
}

function N(e) {
const t = this;
t.enabled && (t.allowClick || (t.params.preventClicks && e
.preventDefault(), t.params.preventClicksPropagation && t
.animating && (e.stopPropagation(), e.stopImmediatePropagation())))
}

function R() {
const e = this,
{
wrapperEl: t,
rtlTranslate: s,
enabled: a
} = e;
if (!a) return;
let i;
e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = -t
.scrollLeft : e.translate = -t.scrollTop, 0 === e.translate && (e
.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
const r = e.maxTranslate() - e.minTranslate();
i = 0 === r ? 0 : (e.translate - e.minTranslate()) / r, i !== e
.progress && e.updateProgress(s ? -e.translate : e.translate), e.emit(
"setTranslate", e.translate, !1)
}

function q(e) {
const t = this;
z(t, e.target), t.params.cssMode || "auto" !== t.params.slidesPerView && !
t.params.autoHeight || t.update()
}
let F = !1;

function _() {}
const V = (e, t) => {
const s = a(),
{
params: i,
el: r,
wrapperEl: n,
device: l
} = e,
o = !!i.nested,
d = "on" === t ? "addEventListener" : "removeEventListener",
c = t;
r[d]("pointerdown", e.onTouchStart, {
passive: !1
}), s[d]("pointermove", e.onTouchMove, {
passive: !1,
capture: o
}), s[d]("pointerup", e.onTouchEnd, {
passive: !0
}), s[d]("pointercancel", e.onTouchEnd, {
passive: !0
}), s[d]("pointerout", e.onTouchEnd, {
passive: !0
}), s[d]("pointerleave", e.onTouchEnd, {
passive: !0
}), (i.preventClicks || i.preventClicksPropagation) && r[d]("click", e
.onClick, !0), i.cssMode && n[d]("scroll", e.onScroll), i
.updateOnWindowResize ? e[c](l.ios || l.android ?
"resize orientationchange observerUpdate" : "resize observerUpdate",
B, !0) : e[c]("observerUpdate", B, !0), r[d]("load", e.onLoad, {
capture: !0
})
};
const j = (e, t) => e.grid && t.grid && t.grid.rows > 1;
var W = {
init: !0,
direction: "horizontal",
oneWayMovement: !1,
touchEventsTarget: "wrapper",
initialSlide: 0,
speed: 300,
cssMode: !1,
updateOnWindowResize: !0,
resizeObserver: !0,
nested: !1,
createElements: !1,
enabled: !0,
focusableElements: "input, select, option, textarea, button, video, label",
width: null,
height: null,
preventInteractionOnTransition: !1,
userAgent: null,
url: null,
edgeSwipeDetection: !1,
edgeSwipeThreshold: 20,
autoHeight: !1,
setWrapperSize: !1,
virtualTranslate: !1,
effect: "slide",
breakpoints: void 0,
breakpointsBase: "window",
spaceBetween: 0,
slidesPerView: 1,
slidesPerGroup: 1,
slidesPerGroupSkip: 0,
slidesPerGroupAuto: !1,
centeredSlides: !1,
centeredSlidesBounds: !1,
slidesOffsetBefore: 0,
slidesOffsetAfter: 0,
normalizeSlideIndex: !0,
centerInsufficientSlides: !1,
watchOverflow: !0,
roundLengths: !1,
touchRatio: 1,
touchAngle: 45,
simulateTouch: !0,
shortSwipes: !0,
longSwipes: !0,
longSwipesRatio: .5,
longSwipesMs: 300,
followFinger: !0,
allowTouchMove: !0,
threshold: 5,
touchMoveStopPropagation: !1,
touchStartPreventDefault: !0,
touchStartForcePreventDefault: !1,
touchReleaseOnEdges: !1,
uniqueNavElements: !0,
resistance: !0,
resistanceRatio: .85,
watchSlidesProgress: !1,
grabCursor: !1,
preventClicks: !0,
preventClicksPropagation: !0,
slideToClickedSlide: !1,
loop: !1,
loopedSlides: null,
loopPreventsSliding: !0,
rewind: !1,
allowSlidePrev: !0,
allowSlideNext: !0,
swipeHandler: null,
noSwiping: !0,
noSwipingClass: "swiper-no-swiping",
noSwipingSelector: null,
passiveListeners: !0,
maxBackfaceHiddenSlides: 10,
containerModifierClass: "swiper-",
slideClass: "swiper-slide",
slideActiveClass: "swiper-slide-active",
slideVisibleClass: "swiper-slide-visible",
slideNextClass: "swiper-slide-next",
slidePrevClass: "swiper-slide-prev",
wrapperClass: "swiper-wrapper",
lazyPreloaderClass: "swiper-lazy-preloader",
lazyPreloadPrevNext: 0,
runCallbacksOnInit: !0,
_emitClasses: !1
};

function U(e, t) {
return function (s) {
void 0 === s && (s = {});
const a = Object.keys(s)[0],
i = s[a];
"object" == typeof i && null !== i ? (["navigation", "pagination",
"scrollbar"].indexOf(a) >= 0 && !0 === e[a] && (e[a] = {
auto: !0
}), a in e && "enabled" in i ? (!0 === e[a] && (e[a] = {
enabled: !0
}), "object" != typeof e[a] || "enabled" in e[a] || (e[a]
.enabled = !0), e[a] || (e[a] = {
enabled: !1
}), c(t, s)) : c(t, s)) : c(t, s)
}
}
const K = {
eventsEmitter: L,
update: I,
translate: k,
transition: {
setTransition: function (e, t) {
const s = this;
s.params.cssMode || (s.wrapperEl.style.transitionDuration =
`${e}ms`), s.emit("setTransition", e, t)
},
transitionStart: function (e, t) {
void 0 === e && (e = !0);
const s = this,
{
params: a
} = s;
a.cssMode || (a.autoHeight && s.updateAutoHeight(), O({
swiper: s,
runCallbacks: e,
direction: t,
step: "Start"
}))
},
transitionEnd: function (e, t) {
void 0 === e && (e = !0);
const s = this,
{
params: a
} = s;
s.animating = !1, a.cssMode || (s.setTransition(0), O({
swiper: s,
runCallbacks: e,
direction: t,
step: "End"
}))
}
},
slide: D,
loop: G,
grabCursor: {
setGrabCursor: function (e) {
const t = this;
if (!t.params.simulateTouch || t.params.watchOverflow && t
.isLocked || t.params.cssMode) return;
const s = "container" === t.params.touchEventsTarget ? t.el : t
.wrapperEl;
t.isElement && (t.__preventObserver__ = !0), s.style.cursor =
"move", s.style.cursor = e ? "grabbing" : "grab", t.isElement &&
requestAnimationFrame((() => {
t.__preventObserver__ = !1
}))
},
unsetGrabCursor: function () {
const e = this;
e.params.watchOverflow && e.isLocked || e.params.cssMode || (e
.isElement && (e.__preventObserver__ = !0), e["container" ===
e.params.touchEventsTarget ? "el" : "wrapperEl"].style
.cursor = "", e.isElement && requestAnimationFrame((() => {
e.__preventObserver__ = !1
})))
}
},
events: {
attachEvents: function () {
const e = this,
t = a(),
{
params: s
} = e;
e.onTouchStart = H.bind(e), e.onTouchMove = X.bind(e), e
.onTouchEnd = Y.bind(e), s.cssMode && (e.onScroll = R.bind(e)),
e.onClick = N.bind(e), e.onLoad = q.bind(e), F || (t
.addEventListener("touchstart", _), F = !0), V(e, "on")
},
detachEvents: function () {
V(this, "off")
}
},
breakpoints: {
setBreakpoint: function () {
const e = this,
{
realIndex: t,
initialized: s,
params: a,
el: i
} = e,
r = a.breakpoints;
if (!r || r && 0 === Object.keys(r)
.length) return;
const n = e.getBreakpoint(r, e.params.breakpointsBase, e.el);
if (!n || e.currentBreakpoint === n) return;
const l = (n in r ? r[n] : void 0) || e.originalParams,
o = j(e, a),
d = j(e, l),
p = a.enabled;
o && !d ? (i.classList.remove(`${a.containerModifierClass}grid`,
`${a.containerModifierClass}grid-column`), e
.emitContainerClasses()) : !o && d && (i.classList.add(
`${a.containerModifierClass}grid`), (l.grid.fill &&
"column" === l.grid.fill || !l.grid.fill && "column" === a
.grid.fill) && i.classList.add(
`${a.containerModifierClass}grid-column`), e
.emitContainerClasses()), ["navigation", "pagination",
"scrollbar"].forEach((t => {
if (void 0 === l[t]) return;
const s = a[t] && a[t].enabled,
i = l[t] && l[t].enabled;
s && !i && e[t].disable(), !s && i && e[t].enable()
}));
const u = l.direction && l.direction !== a.direction,
m = a.loop && (l.slidesPerView !== a.slidesPerView || u);
u && s && e.changeDirection(), c(e.params, l);
const h = e.params.enabled;
Object.assign(e, {
allowTouchMove: e.params.allowTouchMove,
allowSlideNext: e.params.allowSlideNext,
allowSlidePrev: e.params.allowSlidePrev
}), p && !h ? e.disable() : !p && h && e.enable(), e
.currentBreakpoint = n, e.emit("_beforeBreakpoint", l), m &&
s && (e.loopDestroy(), e.loopCreate(t), e.updateSlides()), e
.emit("breakpoint", l)
},
getBreakpoint: function (e, t, s) {
if (void 0 === t && (t = "window"), !e || "container" === t && !s)
return;
let a = !1;
const i = r(),
n = "window" === t ? i.innerHeight : s.clientHeight,
l = Object.keys(e)
.map((e => {
if ("string" == typeof e && 0 === e.indexOf("@")) {
const t = parseFloat(e.substr(1));
return {
value: n * t,
point: e
}
}
return {
value: e,
point: e
}
}));
l.sort(((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10)));
for (let e = 0; e < l.length; e += 1) {
const {
point: r,
value: n
} = l[e];
"window" === t ? i.matchMedia(`(min-width: ${n}px)`)
.matches && (a = r) : n <= s.clientWidth && (a = r)
}
return a || "max"
}
},
checkOverflow: {
checkOverflow: function () {
const e = this,
{
isLocked: t,
params: s
} = e,
{
slidesOffsetBefore: a
} = s;
if (a) {
const t = e.slides.length - 1,
s = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * a;
e.isLocked = e.size > s
} else e.isLocked = 1 === e.snapGrid.length;
!0 === s.allowSlideNext && (e.allowSlideNext = !e.isLocked), !
0 === s.allowSlidePrev && (e.allowSlidePrev = !e.isLocked), t &&
t !== e.isLocked && (e.isEnd = !1), t !== e.isLocked && e.emit(e
.isLocked ? "lock" : "unlock")
}
},
classes: {
addClasses: function () {
const e = this,
{
classNames: t,
params: s,
rtl: a,
el: i,
device: r
} = e,
n = function (e, t) {
const s = [];
return e.forEach((e => {
"object" == typeof e ? Object.keys(e)
.forEach((a => {
e[a] && s.push(t + a)
})) : "string" == typeof e && s.push(t + e)
})), s
}(["initialized", s.direction, {
"free-mode": e.params.freeMode && s.freeMode.enabled
}, {
autoheight: s.autoHeight
}, {
rtl: a
}, {
grid: s.grid && s.grid.rows > 1
}, {
"grid-column": s.grid && s.grid.rows > 1 && "column" === s
.grid.fill
}, {
android: r.android
}, {
ios: r.ios
}, {
"css-mode": s.cssMode
}, {
centered: s.cssMode && s.centeredSlides
}, {
"watch-progress": s.watchSlidesProgress
}], s.containerModifierClass);
t.push(...n), i.classList.add(...t), e.emitContainerClasses()
},
removeClasses: function () {
const {
el: e,
classNames: t
} = this;
e.classList.remove(...t), this.emitContainerClasses()
}
}
},
Z = {};
class Q {
constructor() {
let e, t;
for (var s = arguments.length, i = new Array(s), r = 0; r < s; r++) i[
r] = arguments[r];
1 === i.length && i[0].constructor && "Object" === Object.prototype
.toString.call(i[0])
.slice(8, -1) ? t = i[0] : [e, t] = i, t || (t = {}), t = c({}, t),
e && !t.el && (t.el = e);
const n = a();
if (t.el && "string" == typeof t.el && n.querySelectorAll(t.el)
.length > 1) {
const e = [];
return n.querySelectorAll(t.el)
.forEach((s => {
const a = c({}, t, {
el: s
});
e.push(new Q(a))
})), e
}
const l = this;
l.__swiper__ = !0, l.support = M(), l.device = C({
userAgent: t.userAgent
}), l.browser = P(), l.eventsListeners = {}, l
.eventsAnyListeners = [], l.modules = [...l.__modules__], t
.modules && Array.isArray(t.modules) && l.modules.push(...t
.modules);
const o = {};
l.modules.forEach((e => {
e({
params: t,
swiper: l,
extendParams: U(t, o),
on: l.on.bind(l),
once: l.once.bind(l),
off: l.off.bind(l),
emit: l.emit.bind(l)
})
}));
const d = c({}, W, o);
return l.params = c({}, d, Z, t), l.originalParams = c({}, l.params),
l.passedParams = c({}, t), l.params && l.params.on && Object.keys(l
.params.on)
.forEach((e => {
l.on(e, l.params.on[e])
})), l.params && l.params.onAny && l.onAny(l.params.onAny), Object
.assign(l, {
enabled: l.params.enabled,
el: e,
classNames: [],
slides: [],
slidesGrid: [],
snapGrid: [],
slidesSizesGrid: [],
isHorizontal: () => "horizontal" === l.params.direction,
isVertical: () => "vertical" === l.params.direction,
activeIndex: 0,
realIndex: 0,
isBeginning: !0,
isEnd: !1,
translate: 0,
previousTranslate: 0,
progress: 0,
velocity: 0,
animating: !1,
cssOverflowAdjustment() {
return Math.trunc(this.translate / 2 ** 23) * 2 ** 23
},
allowSlideNext: l.params.allowSlideNext,
allowSlidePrev: l.params.allowSlidePrev,
touchEventsData: {
isTouched: void 0,
isMoved: void 0,
allowTouchCallbacks: void 0,
touchStartTime: void 0,
isScrolling: void 0,
currentTranslate: void 0,
startTranslate: void 0,
allowThresholdMove: void 0,
focusableElements: l.params.focusableElements,
lastClickTime: 0,
clickTimeout: void 0,
velocities: [],
allowMomentumBounce: void 0,
startMoving: void 0,
evCache: []
},
allowClick: !0,
allowTouchMove: l.params.allowTouchMove,
touches: {
startX: 0,
startY: 0,
currentX: 0,
currentY: 0,
diff: 0
},
imagesToLoad: [],
imagesLoaded: 0
}), l.emit("_swiper"), l.params.init && l.init(), l
}
getSlideIndex(e) {
const {
slidesEl: t,
params: s
} = this, a = w(h(t, `.${s.slideClass}, swiper-slide`)[0]);
return w(e) - a
}
getSlideIndexByData(e) {
return this.getSlideIndex(this.slides.filter((t => 1 * t.getAttribute(
"data-swiper-slide-index") === e))[0])
}
recalcSlides() {
const {
slidesEl: e,
params: t
} = this;
this.slides = h(e, `.${t.slideClass}, swiper-slide`)
}
enable() {
const e = this;
e.enabled || (e.enabled = !0, e.params.grabCursor && e
.setGrabCursor(), e.emit("enable"))
}
disable() {
const e = this;
e.enabled && (e.enabled = !1, e.params.grabCursor && e
.unsetGrabCursor(), e.emit("disable"))
}
setProgress(e, t) {
const s = this;
e = Math.min(Math.max(e, 0), 1);
const a = s.minTranslate(),
i = (s.maxTranslate() - a) * e + a;
s.translateTo(i, void 0 === t ? 0 : t), s.updateActiveIndex(), s
.updateSlidesClasses()
}
emitContainerClasses() {
const e = this;
if (!e.params._emitClasses || !e.el) return;
const t = e.el.className.split(" ")
.filter((t => 0 === t.indexOf("swiper") || 0 === t.indexOf(e.params
.containerModifierClass)));
e.emit("_containerClasses", t.join(" "))
}
getSlideClasses(e) {
const t = this;
return t.destroyed ? "" : e.className.split(" ")
.filter((e => 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t
.params.slideClass)))
.join(" ")
}
emitSlidesClasses() {
const e = this;
if (!e.params._emitClasses || !e.el) return;
const t = [];
e.slides.forEach((s => {
const a = e.getSlideClasses(s);
t.push({
slideEl: s,
classNames: a
}), e.emit("_slideClass", s, a)
})), e.emit("_slideClasses", t)
}
slidesPerViewDynamic(e, t) {
void 0 === e && (e = "current"), void 0 === t && (t = !1);
const {
params: s,
slides: a,
slidesGrid: i,
slidesSizesGrid: r,
size: n,
activeIndex: l
} = this;
let o = 1;
if (s.centeredSlides) {
let e, t = a[l] ? a[l].swiperSlideSize : 0;
for (let s = l + 1; s < a.length; s += 1) a[s] && !e && (t += a[s]
.swiperSlideSize, o += 1, t > n && (e = !0));
for (let s = l - 1; s >= 0; s -= 1) a[s] && !e && (t += a[s]
.swiperSlideSize, o += 1, t > n && (e = !0))
} else if ("current" === e)
for (let e = l + 1; e < a.length; e += 1) {
(t ? i[e] + r[e] - i[l] < n : i[e] - i[l] < n) && (o += 1)
} else
for (let e = l - 1; e >= 0; e -= 1) {
i[l] - i[e] < n && (o += 1)
}
return o
}
update() {
const e = this;
if (!e || e.destroyed) return;
const {
snapGrid: t,
params: s
} = e;

function a() {
const t = e.rtlTranslate ? -1 * e.translate : e.translate,
s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses()
}
let i;
if (s.breakpoints && e.setBreakpoint(), [...e.el.querySelectorAll(
'[loading="lazy"]')].forEach((t => {
t.complete && z(e, t)
})), e.updateSize(), e.updateSlides(), e.updateProgress(), e
.updateSlidesClasses(), s.freeMode && s.freeMode.enabled && !s
.cssMode) a(), s.autoHeight && e.updateAutoHeight();
else {
if (("auto" === s.slidesPerView || s.slidesPerView > 1) && e
.isEnd && !s.centeredSlides) {
const t = e.virtual && s.virtual.enabled ? e.virtual.slides : e
.slides;
i = e.slideTo(t.length - 1, 0, !1, !0)
} else i = e.slideTo(e.activeIndex, 0, !1, !0);
i || a()
}
s.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit(
"update")
}
changeDirection(e, t) {
void 0 === t && (t = !0);
const s = this,
a = s.params.direction;
return e || (e = "horizontal" === a ? "vertical" : "horizontal"),
e === a || "horizontal" !== e && "vertical" !== e || (s.el.classList
.remove(`${s.params.containerModifierClass}${a}`), s.el.classList
.add(`${s.params.containerModifierClass}${e}`), s
.emitContainerClasses(), s.params.direction = e, s.slides.forEach(
(t => {
"vertical" === e ? t.style.width = "" : t.style.height = ""
})), s.emit("changeDirection"), t && s.update()), s
}
changeLanguageDirection(e) {
const t = this;
t.rtl && "rtl" === e || !t.rtl && "ltr" === e || (t.rtl = "rtl" === e,
t.rtlTranslate = "horizontal" === t.params.direction && t.rtl, t
.rtl ? (t.el.classList.add(
`${t.params.containerModifierClass}rtl`), t.el.dir = "rtl") : (t
.el.classList.remove(`${t.params.containerModifierClass}rtl`), t
.el.dir = "ltr"), t.update())
}
mount(e) {
const t = this;
if (t.mounted) return !0;
let s = e || t.params.el;
if ("string" == typeof s && (s = document.querySelector(s)), !s)
return !1;
s.swiper = t, s.parentNode && s.parentNode.host && (t.isElement = !0);
const a = () =>
`.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`;
let i = (() => {
if (s && s.shadowRoot && s.shadowRoot.querySelector) {
return s.shadowRoot.querySelector(a())
}
return h(s, a())[0]
})();
return !i && t.params.createElements && (i = f("div", t.params
.wrapperClass), s.append(i), h(s, `.${t.params.slideClass}`)
.forEach((e => {
i.append(e)
}))), Object.assign(t, {
el: s,
wrapperEl: i,
slidesEl: t.isElement ? s.parentNode.host : i,
hostEl: t.isElement ? s.parentNode.host : s,
mounted: !0,
rtl: "rtl" === s.dir.toLowerCase() || "rtl" === v(s,
"direction"),
rtlTranslate: "horizontal" === t.params.direction && ("rtl" ===
s.dir.toLowerCase() || "rtl" === v(s, "direction")),
wrongRTL: "-webkit-box" === v(i, "display")
}), !0
}
init(e) {
const t = this;
if (t.initialized) return t;
return !1 === t.mount(e) || (t.emit("beforeInit"), t.params
.breakpoints && t.setBreakpoint(), t.addClasses(), t.updateSize(),
t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t
.params.grabCursor && t.enabled && t.setGrabCursor(), t.params
.loop && t.virtual && t.params.virtual.enabled ? t.slideTo(t
.params.initialSlide + t.virtual.slidesBefore, 0, t.params
.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide,
0, t.params.runCallbacksOnInit, !1, !0), t.params.loop && t
.loopCreate(), t.attachEvents(), [...t.el.querySelectorAll(
'[loading="lazy"]')].forEach((e => {
e.complete ? z(t, e) : e.addEventListener("load", (e => {
z(t, e.target)
}))
})), $(t), t.initialized = !0, $(t), t.emit("init"), t.emit(
"afterInit")), t
}
destroy(e, t) {
void 0 === e && (e = !0), void 0 === t && (t = !0);
const s = this,
{
params: a,
el: i,
wrapperEl: r,
slides: n
} = s;
return void 0 === s.params || s.destroyed || (s.emit("beforeDestroy"),
s.initialized = !1, s.detachEvents(), a.loop && s.loopDestroy(),
t && (s.removeClasses(), i.removeAttribute("style"), r
.removeAttribute("style"), n && n.length && n.forEach((e => {
e.classList.remove(a.slideVisibleClass, a
.slideActiveClass, a.slideNextClass, a.slidePrevClass
), e.removeAttribute("style"), e.removeAttribute(
"data-swiper-slide-index")
}))), s.emit("destroy"), Object.keys(s.eventsListeners)
.forEach((e => {
s.off(e)
})), !1 !== e && (s.el.swiper = null, function (e) {
const t = e;
Object.keys(t)
.forEach((e => {
try {
t[e] = null
} catch (e) {}
try {
delete t[e]
} catch (e) {}
}))
}(s)), s.destroyed = !0), null
}
static extendDefaults(e) {
c(Z, e)
}
static get extendedDefaults() {
return Z
}
static get defaults() {
return W
}
static installModule(e) {
Q.prototype.__modules__ || (Q.prototype.__modules__ = []);
const t = Q.prototype.__modules__;
"function" == typeof e && t.indexOf(e) < 0 && t.push(e)
}
static use(e) {
return Array.isArray(e) ? (e.forEach((e => Q.installModule(e))), Q) :
(Q.installModule(e), Q)
}
}

function J(e, t, s, a) {
return e.params.createElements && Object.keys(a)
.forEach((i => {
if (!s[i] && !0 === s.auto) {
let r = h(e.el, `.${a[i]}`)[0];
r || (r = f("div", a[i]), r.className = a[i], e.el.append(r)),
s[i] = r, t[i] = r
}
})), s
}

function ee(e) {
return void 0 === e && (e = ""),
`.${e.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}`
}

function te(e) {
const t = this,
{
params: s,
slidesEl: a
} = t;
s.loop && t.loopDestroy();
const i = e => {
if ("string" == typeof e) {
const t = document.createElement("div");
t.innerHTML = e, a.append(t.children[0]), t.innerHTML = ""
} else a.append(e)
};
if ("object" == typeof e && "length" in e)
for (let t = 0; t < e.length; t += 1) e[t] && i(e[t]);
else i(e);
t.recalcSlides(), s.loop && t.loopCreate(), s.observer && !t.isElement ||
t.update()
}

function se(e) {
const t = this,
{
params: s,
activeIndex: a,
slidesEl: i
} = t;
s.loop && t.loopDestroy();
let r = a + 1;
const n = e => {
if ("string" == typeof e) {
const t = document.createElement("div");
t.innerHTML = e, i.prepend(t.children[0]), t.innerHTML = ""
} else i.prepend(e)
};
if ("object" == typeof e && "length" in e) {
for (let t = 0; t < e.length; t += 1) e[t] && n(e[t]);
r = a + e.length
} else n(e);
t.recalcSlides(), s.loop && t.loopCreate(), s.observer && !t.isElement ||
t.update(), t.slideTo(r, 0, !1)
}

function ae(e, t) {
const s = this,
{
params: a,
activeIndex: i,
slidesEl: r
} = s;
let n = i;
a.loop && (n -= s.loopedSlides, s.loopDestroy(), s.recalcSlides());
const l = s.slides.length;
if (e <= 0) return void s.prependSlide(t);
if (e >= l) return void s.appendSlide(t);
let o = n > e ? n + 1 : n;
const d = [];
for (let t = l - 1; t >= e; t -= 1) {
const e = s.slides[t];
e.remove(), d.unshift(e)
}
if ("object" == typeof t && "length" in t) {
for (let e = 0; e < t.length; e += 1) t[e] && r.append(t[e]);
o = n > e ? n + t.length : n
} else r.append(t);
for (let e = 0; e < d.length; e += 1) r.append(d[e]);
s.recalcSlides(), a.loop && s.loopCreate(), a.observer && !s.isElement ||
s.update(), a.loop ? s.slideTo(o + s.loopedSlides, 0, !1) : s.slideTo(o,
0, !1)
}

function ie(e) {
const t = this,
{
params: s,
activeIndex: a
} = t;
let i = a;
s.loop && (i -= t.loopedSlides, t.loopDestroy());
let r, n = i;
if ("object" == typeof e && "length" in e) {
for (let s = 0; s < e.length; s += 1) r = e[s], t.slides[r] && t.slides[
r].remove(), r < n && (n -= 1);
n = Math.max(n, 0)
} else r = e, t.slides[r] && t.slides[r].remove(), r < n && (n -= 1), n =
Math.max(n, 0);
t.recalcSlides(), s.loop && t.loopCreate(), s.observer && !t.isElement ||
t.update(), s.loop ? t.slideTo(n + t.loopedSlides, 0, !1) : t.slideTo(n,
0, !1)
}

function re() {
const e = this,
t = [];
for (let s = 0; s < e.slides.length; s += 1) t.push(s);
e.removeSlide(t)
}

function ne(e) {
const {
effect: t,
swiper: s,
on: a,
setTranslate: i,
setTransition: r,
overwriteParams: n,
perspective: l,
recreateShadows: o,
getEffectParams: d
} = e;
let c;
a("beforeInit", (() => {
if (s.params.effect !== t) return;
s.classNames.push(`${s.params.containerModifierClass}${t}`), l &&
l() && s.classNames.push(
`${s.params.containerModifierClass}3d`);
const e = n ? n() : {};
Object.assign(s.params, e), Object.assign(s.originalParams, e)
})), a("setTranslate", (() => {
s.params.effect === t && i()
})), a("setTransition", ((e, a) => {
s.params.effect === t && r(a)
})), a("transitionEnd", (() => {
if (s.params.effect === t && o) {
if (!d || !d()
.slideShadows) return;
s.slides.forEach((e => {
e.querySelectorAll(
".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
)
.forEach((e => e.remove()))
})), o()
}
})), a("virtualUpdate", (() => {
s.params.effect === t && (s.slides.length || (c = !0),
requestAnimationFrame((() => {
c && s.slides && s.slides.length && (i(), c = !1)
})))
}))
}

function le(e, t) {
const s = m(t);
return s !== t && (s.style.backfaceVisibility = "hidden", s.style[
"-webkit-backface-visibility"] = "hidden"), s
}

function oe(e) {
let {
swiper: t,
duration: s,
transformElements: a,
allSlides: i
} = e;
const {
activeIndex: r
} = t;
if (t.params.virtualTranslate && 0 !== s) {
let e, s = !1;
e = i ? a : a.filter((e => {
const s = e.classList.contains("swiper-slide-transform") ? (
e => {
if (!e.parentElement) return t.slides.filter((t => t
.shadowRoot && t.shadowRoot === e.parentNode))[0];
return e.parentElement
})(e) : e;
return t.getSlideIndex(s) === r
})), e.forEach((e => {
y(e, (() => {
if (s) return;
if (!t || t.destroyed) return;
s = !0, t.animating = !1;
const e = new window.CustomEvent("transitionend", {
bubbles: !0,
cancelable: !0
});
t.wrapperEl.dispatchEvent(e)
}))
}))
}
}

function de(e, t, s) {
const a =
`swiper-slide-shadow${s?`-${s}`:""}${e?` swiper-slide-shadow-${e}`:""}`,
i = m(t);
let r = i.querySelector(`.${a.split(" ").join(".")}`);
return r || (r = f("div", a.split(" ")), i.append(r)), r
}
Object.keys(K)
.forEach((e => {
Object.keys(K[e])
.forEach((t => {
Q.prototype[t] = K[e][t]
}))
})), Q.use([function (e) {
let {
swiper: t,
on: s,
emit: a
} = e;
const i = r();
let n = null,
l = null;
const o = () => {
t && !t.destroyed && t.initialized && (a("beforeResize"), a(
"resize"))
},
d = () => {
t && !t.destroyed && t.initialized && a("orientationchange")
};
s("init", (() => {
t.params.resizeObserver && void 0 !== i.ResizeObserver ?
t && !t.destroyed && t.initialized && (n =
new ResizeObserver((e => {
l = i.requestAnimationFrame((() => {
const {
width: s,
height: a
} = t;
let i = s,
r = a;
e.forEach((e => {
let {
contentBoxSize: s,
contentRect: a,
target: n
} = e;
n && n !== t.el || (i = a ? a
.width : (s[0] || s)
.inlineSize, r = a ? a
.height : (s[0] || s)
.blockSize)
})), i === s && r === a || o()
}))
})), n.observe(t.el)) : (i.addEventListener("resize",
o), i.addEventListener("orientationchange", d))
})), s("destroy", (() => {
l && i.cancelAnimationFrame(l), n && n.unobserve && t.el &&
(n.unobserve(t.el), n = null), i.removeEventListener(
"resize", o), i.removeEventListener("orientationchange",
d)
}))
}, function (e) {
let {
swiper: t,
extendParams: s,
on: a,
emit: i
} = e;
const n = [],
l = r(),
o = function (e, s) {
void 0 === s && (s = {});
const a = new(l.MutationObserver || l.WebkitMutationObserver)((
e => {
if (t.__preventObserver__) return;
if (1 === e.length) return void i("observerUpdate", e[
0]);
const s = function () {
i("observerUpdate", e[0])
};
l.requestAnimationFrame ? l.requestAnimationFrame(s) : l
.setTimeout(s, 0)
}));
a.observe(e, {
attributes: void 0 === s.attributes || s.attributes,
childList: void 0 === s.childList || s.childList,
characterData: void 0 === s.characterData || s
.characterData
}), n.push(a)
};
s({
observer: !1,
observeParents: !1,
observeSlideChildren: !1
}), a("init", (() => {
if (t.params.observer) {
if (t.params.observeParents) {
const e = b(t.el);
for (let t = 0; t < e.length; t += 1) o(e[t])
}
o(t.el, {
childList: t.params.observeSlideChildren
}), o(t.wrapperEl, {
attributes: !1
})
}
})), a("destroy", (() => {
n.forEach((e => {
e.disconnect()
})), n.splice(0, n.length)
}))
}]);
const ce = [function (e) {
let t, {
swiper: s,
extendParams: i,
on: r,
emit: n
} = e;
i({
virtual: {
enabled: !1,
slides: [],
cache: !0,
renderSlide: null,
renderExternal: null,
renderExternalUpdate: !0,
addSlidesBefore: 0,
addSlidesAfter: 0
}
});
const l = a();
s.virtual = {
cache: {},
from: void 0,
to: void 0,
slides: [],
offset: 0,
slidesGrid: []
};
const o = l.createElement("div");

function d(e, t) {
const a = s.params.virtual;
if (a.cache && s.virtual.cache[t]) return s.virtual.cache[t];
let i;
return a.renderSlide ? (i = a.renderSlide.call(s, e, t), "string" ==
typeof i && (o.innerHTML = i, i = o.children[0])) : i = s
.isElement ? f("swiper-slide") : f("div", s.params.slideClass), i
.setAttribute("data-swiper-slide-index", t), a.renderSlide || (i
.innerHTML = e), a.cache && (s.virtual.cache[t] = i), i
}

function c(e) {
const {
slidesPerView: t,
slidesPerGroup: a,
centeredSlides: i,
loop: r
} = s.params, {
addSlidesBefore: l,
addSlidesAfter: o
} = s.params.virtual, {
from: c,
to: p,
slides: u,
slidesGrid: m,
offset: f
} = s.virtual;
s.params.cssMode || s.updateActiveIndex();
const g = s.activeIndex || 0;
let v, w, b;
v = s.rtlTranslate ? "right" : s.isHorizontal() ? "left" : "top",
i ? (w = Math.floor(t / 2) + a + o, b = Math.floor(t / 2) + a +
l) : (w = t + (a - 1) + o, b = (r ? t : a) + l);
let y = g - b,
E = g + w;
r || (y = Math.max(y, 0), E = Math.min(E, u.length - 1));
let x = (s.slidesGrid[y] || 0) - (s.slidesGrid[0] || 0);

function S() {
s.updateSlides(), s.updateProgress(), s.updateSlidesClasses(), n(
"virtualUpdate")
}
if (r && g >= b ? (y -= b, i || (x += s.slidesGrid[0])) : r && g <
b && (y = -b, i && (x += s.slidesGrid[0])), Object.assign(s
.virtual, {
from: y,
to: E,
offset: x,
slidesGrid: s.slidesGrid,
slidesBefore: b,
slidesAfter: w
}), c === y && p === E && !e) return s.slidesGrid !== m && x !==
f && s.slides.forEach((e => {
e.style[v] = x - Math.abs(s.cssOverflowAdjustment()) +
"px"
})), s.updateProgress(), void n("virtualUpdate");
if (s.params.virtual.renderExternal) return s.params.virtual
.renderExternal.call(s, {
offset: x,
from: y,
to: E,
slides: function () {
const e = [];
for (let t = y; t <= E; t += 1) e.push(u[t]);
return e
}()
}), void(s.params.virtual.renderExternalUpdate ? S() : n(
"virtualUpdate"));
const T = [],
M = [],
C = e => {
let t = e;
return e < 0 ? t = u.length + e : t >= u.length && (t -= u
.length), t
};
if (e) s.slidesEl.querySelectorAll(
`.${s.params.slideClass}, swiper-slide`)
.forEach((e => {
e.remove()
}));
else
for (let e = c; e <= p; e += 1)
if (e < y || e > E) {
const t = C(e);
s.slidesEl.querySelectorAll(
`.${s.params.slideClass}[data-swiper-slide-index="${t}"], swiper-slide[data-swiper-slide-index="${t}"]`
)
.forEach((e => {
e.remove()
}))
} const P = r ? -u.length : 0,
L = r ? 2 * u.length : u.length;
for (let t = P; t < L; t += 1)
if (t >= y && t <= E) {
const s = C(t);
void 0 === p || e ? M.push(s) : (t > p && M.push(s), t < c && T
.push(s))
} if (M.forEach((e => {
s.slidesEl.append(d(u[e], e))
})), r)
for (let e = T.length - 1; e >= 0; e -= 1) {
const t = T[e];
s.slidesEl.prepend(d(u[t], t))
} else T.sort(((e, t) => t - e)), T.forEach((e => {
s.slidesEl.prepend(d(u[e], e))
}));
h(s.slidesEl, ".swiper-slide, swiper-slide")
.forEach((e => {
e.style[v] = x - Math.abs(s.cssOverflowAdjustment()) + "px"
})), S()
}
r("beforeInit", (() => {
if (!s.params.virtual.enabled) return;
let e;
if (void 0 === s.passedParams.virtual.slides) {
const t = [...s.slidesEl.children].filter((e => e.matches(
`.${s.params.slideClass}, swiper-slide`)));
t && t.length && (s.virtual.slides = [...t], e = !0, t
.forEach(((e, t) => {
e.setAttribute("data-swiper-slide-index", t), s
.virtual.cache[t] = e, e.remove()
})))
}
e || (s.virtual.slides = s.params.virtual.slides), s
.classNames.push(
`${s.params.containerModifierClass}virtual`), s.params
.watchSlidesProgress = !0, s.originalParams
.watchSlidesProgress = !0, s.params.initialSlide || c()
})), r("setTranslate", (() => {
s.params.virtual.enabled && (s.params.cssMode && !s
._immediateVirtual ? (clearTimeout(t), t = setTimeout((
() => {
c()
}), 100)) : c())
})), r("init update resize", (() => {
s.params.virtual.enabled && s.params.cssMode && p(s.wrapperEl,
"--swiper-virtual-size", `${s.virtualSize}px`)
})), Object.assign(s.virtual, {
appendSlide: function (e) {
if ("object" == typeof e && "length" in e)
for (let t = 0; t < e.length; t += 1) e[t] && s.virtual
.slides.push(e[t]);
else s.virtual.slides.push(e);
c(!0)
},
prependSlide: function (e) {
const t = s.activeIndex;
let a = t + 1,
i = 1;
if (Array.isArray(e)) {
for (let t = 0; t < e.length; t += 1) e[t] && s.virtual
.slides.unshift(e[t]);
a = t + e.length, i = e.length
} else s.virtual.slides.unshift(e);
if (s.params.virtual.cache) {
const e = s.virtual.cache,
t = {};
Object.keys(e)
.forEach((s => {
const a = e[s],
r = a.getAttribute("data-swiper-slide-index");
r && a.setAttribute("data-swiper-slide-index",
parseInt(r, 10) + i), t[parseInt(s, 10) + i] =
a
})), s.virtual.cache = t
}
c(!0), s.slideTo(a, 0)
},
removeSlide: function (e) {
if (null == e) return;
let t = s.activeIndex;
if (Array.isArray(e))
for (let a = e.length - 1; a >= 0; a -= 1) s.virtual
.slides.splice(e[a], 1), s.params.virtual.cache &&
delete s.virtual.cache[e[a]], e[a] < t && (t -= 1), t =
Math.max(t, 0);
else s.virtual.slides.splice(e, 1), s.params.virtual
.cache && delete s.virtual.cache[e], e < t && (t -= 1),
t = Math.max(t, 0);
c(!0), s.slideTo(t, 0)
},
removeAllSlides: function () {
s.virtual.slides = [], s.params.virtual.cache && (s.virtual
.cache = {}), c(!0), s.slideTo(0, 0)
},
update: c
})
}, function (e) {
let {
swiper: t,
extendParams: s,
on: i,
emit: n
} = e;
const l = a(),
o = r();

function d(e) {
if (!t.enabled) return;
const {
rtlTranslate: s
} = t;
let a = e;
a.originalEvent && (a = a.originalEvent);
const i = a.keyCode || a.charCode,
r = t.params.keyboard.pageUpDown,
d = r && 33 === i,
c = r && 34 === i,
p = 37 === i,
u = 39 === i,
m = 38 === i,
h = 40 === i;
if (!t.allowSlideNext && (t.isHorizontal() && u || t.isVertical() &&
h || c)) return !1;
if (!t.allowSlidePrev && (t.isHorizontal() && p || t.isVertical() &&
m || d)) return !1;
if (!(a.shiftKey || a.altKey || a.ctrlKey || a.metaKey || l
.activeElement && l.activeElement.nodeName && ("input" === l
.activeElement.nodeName.toLowerCase() || "textarea" === l
.activeElement.nodeName.toLowerCase()))) {
if (t.params.keyboard.onlyInViewport && (d || c || p || u || m ||
h)) {
let e = !1;
if (b(t.el, `.${t.params.slideClass}, swiper-slide`)
.length > 0 && 0 === b(t.el, `.${t.params.slideActiveClass}`)
.length) return;
const a = t.el,
i = a.clientWidth,
r = a.clientHeight,
n = o.innerWidth,
l = o.innerHeight,
d = g(a);
s && (d.left -= a.scrollLeft);
const c = [[d.left, d.top], [d.left + i, d.top], [d.left, d
.top + r], [d.left + i, d.top + r]];
for (let t = 0; t < c.length; t += 1) {
const s = c[t];
if (s[0] >= 0 && s[0] <= n && s[1] >= 0 && s[1] <= l) {
if (0 === s[0] && 0 === s[1]) continue;
e = !0
}
}
if (!e) return
}
t.isHorizontal() ? ((d || c || p || u) && (a.preventDefault ? a
.preventDefault() : a.returnValue = !1), ((c || u) && !s ||
(d || p) && s) && t.slideNext(), ((d || p) && !s || (c ||
u) && s) && t.slidePrev()) : ((d || c || m || h) && (a
.preventDefault ? a.preventDefault() : a.returnValue = !1),
(c || h) && t.slideNext(), (d || m) && t.slidePrev()), n(
"keyPress", i)
}
}

function c() {
t.keyboard.enabled || (l.addEventListener("keydown", d), t.keyboard
.enabled = !0)
}

function p() {
t.keyboard.enabled && (l.removeEventListener("keydown", d), t
.keyboard.enabled = !1)
}
t.keyboard = {
enabled: !1
}, s({
keyboard: {
enabled: !1,
onlyInViewport: !0,
pageUpDown: !0
}
}), i("init", (() => {
t.params.keyboard.enabled && c()
})), i("destroy", (() => {
t.keyboard.enabled && p()
})), Object.assign(t.keyboard, {
enable: c,
disable: p
})
}, function (e) {
let {
swiper: t,
extendParams: s,
on: a,
emit: i
} = e;
const o = r();
let d;
s({
mousewheel: {
enabled: !1,
releaseOnEdges: !1,
invert: !1,
forceToAxis: !1,
sensitivity: 1,
eventsTarget: "container",
thresholdDelta: null,
thresholdTime: null,
noMousewheelClass: "swiper-no-mousewheel"
}
}), t.mousewheel = {
enabled: !1
};
let c, p = l();
const u = [];

function m() {
t.enabled && (t.mouseEntered = !0)
}

function h() {
t.enabled && (t.mouseEntered = !1)
}

function f(e) {
return !(t.params.mousewheel.thresholdDelta && e.delta < t.params
.mousewheel.thresholdDelta) && (!(t.params.mousewheel
.thresholdTime && l() - p < t.params.mousewheel.thresholdTime
) && (e.delta >= 6 && l() - p < 60 || (e.direction < 0 ? t
.isEnd && !t.params.loop || t.animating || (t.slideNext(),
i("scroll", e.raw)) : t.isBeginning && !t.params.loop || t
.animating || (t.slidePrev(), i("scroll", e.raw)), p = (
new o.Date)
.getTime(), !1)))
}

function g(e) {
let s = e,
a = !0;
if (!t.enabled) return;
if (e.target.closest(`.${t.params.mousewheel.noMousewheelClass}`))
return;
const r = t.params.mousewheel;
t.params.cssMode && s.preventDefault();
let o = t.el;
"container" !== t.params.mousewheel.eventsTarget && (o = document
.querySelector(t.params.mousewheel.eventsTarget));
const p = o && o.contains(s.target);
if (!t.mouseEntered && !p && !r.releaseOnEdges) return !0;
s.originalEvent && (s = s.originalEvent);
let m = 0;
const h = t.rtlTranslate ? -1 : 1,
g = function (e) {
let t = 0,
s = 0,
a = 0,
i = 0;
return "detail" in e && (s = e.detail), "wheelDelta" in e && (
s = -e.wheelDelta / 120), "wheelDeltaY" in e && (s = -e
.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e
.wheelDeltaX / 120), "axis" in e && e.axis === e
.HORIZONTAL_AXIS && (t = s, s = 0), a = 10 * t, i = 10 * s,
"deltaY" in e && (i = e.deltaY), "deltaX" in e && (a = e
.deltaX), e.shiftKey && !a && (a = i, i = 0), (a || i) && e
.deltaMode && (1 === e.deltaMode ? (a *= 40, i *= 40) : (a *=
800, i *= 800)), a && !t && (t = a < 1 ? -1 : 1), i && !s &&
(s = i < 1 ? -1 : 1), {
spinX: t,
spinY: s,
pixelX: a,
pixelY: i
}
}(s);
if (r.forceToAxis)
if (t.isHorizontal()) {
if (!(Math.abs(g.pixelX) > Math.abs(g.pixelY))) return !0;
m = -g.pixelX * h
} else {
if (!(Math.abs(g.pixelY) > Math.abs(g.pixelX))) return !0;
m = -g.pixelY
}
else m = Math.abs(g.pixelX) > Math.abs(g.pixelY) ? -g.pixelX * h : -
g.pixelY;
if (0 === m) return !0;
r.invert && (m = -m);
let v = t.getTranslate() + m * r.sensitivity;
if (v >= t.minTranslate() && (v = t.minTranslate()), v <= t
.maxTranslate() && (v = t.maxTranslate()), a = !!t.params.loop ||
!(v === t.minTranslate() || v === t.maxTranslate()), a && t.params
.nested && s.stopPropagation(), t.params.freeMode && t.params
.freeMode.enabled) {
const e = {
time: l(),
delta: Math.abs(m),
direction: Math.sign(m)
},
a = c && e.time < c.time + 500 && e.delta <= c.delta && e
.direction === c.direction;
if (!a) {
c = void 0;
let l = t.getTranslate() + m * r.sensitivity;
const o = t.isBeginning,
p = t.isEnd;
if (l >= t.minTranslate() && (l = t.minTranslate()), l <= t
.maxTranslate() && (l = t.maxTranslate()), t.setTransition(0),
t.setTranslate(l), t.updateProgress(), t.updateActiveIndex(),
t.updateSlidesClasses(), (!o && t.isBeginning || !p && t
.isEnd) && t.updateSlidesClasses(), t.params.loop && t
.loopFix({
direction: e.direction < 0 ? "next" : "prev",
byMousewheel: !0
}), t.params.freeMode.sticky) {
clearTimeout(d), d = void 0, u.length >= 15 && u.shift();
const s = u.length ? u[u.length - 1] : void 0,
a = u[0];
if (u.push(e), s && (e.delta > s.delta || e.direction !== s
.direction)) u.splice(0);
else if (u.length >= 15 && e.time - a.time < 500 && a.delta -
e.delta >= 1 && e.delta <= 6) {
const s = m > 0 ? .8 : .2;
c = e, u.splice(0), d = n((() => {
t.slideToClosest(t.params.speed, !0, void 0, s)
}), 0)
}
d || (d = n((() => {
c = e, u.splice(0), t.slideToClosest(t.params.speed,
!0, void 0, .5)
}), 500))
}
if (a || i("scroll", s), t.params.autoplay && t.params
.autoplayDisableOnInteraction && t.autoplay.stop(), l === t
.minTranslate() || l === t.maxTranslate()) return !0
}
} else {
const s = {
time: l(),
delta: Math.abs(m),
direction: Math.sign(m),
raw: e
};
u.length >= 2 && u.shift();
const a = u.length ? u[u.length - 1] : void 0;
if (u.push(s), a ? (s.direction !== a.direction || s.delta > a
.delta || s.time > a.time + 150) && f(s) : f(s), function (
e) {
const s = t.params.mousewheel;
if (e.direction < 0) {
if (t.isEnd && !t.params.loop && s.releaseOnEdges) return !0
} else if (t.isBeginning && !t.params.loop && s
.releaseOnEdges) return !0;
return !1
}(s)) return !0
}
return s.preventDefault ? s.preventDefault() : s.returnValue = !1, !
1
}

function v(e) {
let s = t.el;
"container" !== t.params.mousewheel.eventsTarget && (s = document
.querySelector(t.params.mousewheel.eventsTarget)), s[e](
"mouseenter", m), s[e]("mouseleave", h), s[e]("wheel", g)
}

function w() {
return t.params.cssMode ? (t.wrapperEl.removeEventListener("wheel",
g), !0) : !t.mousewheel.enabled && (v("addEventListener"), t
.mousewheel.enabled = !0, !0)
}

function b() {
return t.params.cssMode ? (t.wrapperEl.addEventListener(event, g), !
0) : !!t.mousewheel.enabled && (v("removeEventListener"), t
.mousewheel.enabled = !1, !0)
}
a("init", (() => {
!t.params.mousewheel.enabled && t.params.cssMode && b(), t
.params.mousewheel.enabled && w()
})), a("destroy", (() => {
t.params.cssMode && w(), t.mousewheel.enabled && b()
})), Object.assign(t.mousewheel, {
enable: w,
disable: b
})
}, function (e) {
let {
swiper: t,
extendParams: s,
on: a,
emit: i
} = e;
s({
navigation: {
nextEl: null,
prevEl: null,
hideOnClick: !1,
disabledClass: "swiper-button-disabled",
hiddenClass: "swiper-button-hidden",
lockClass: "swiper-button-lock",
navigationDisabledClass: "swiper-navigation-disabled"
}
}), t.navigation = {
nextEl: null,
prevEl: null
};
const r = e => (Array.isArray(e) || (e = [e].filter((e => !!e))), e);

function n(e) {
let s;
return e && "string" == typeof e && t.isElement && (s = t.el
.querySelector(e), s) ? s : (e && ("string" == typeof e && (
s = [...document.querySelectorAll(e)]), t.params
.uniqueNavElements && "string" == typeof e && s.length > 1 &&
1 === t.el.querySelectorAll(e)
.length && (s = t.el.querySelector(e))), e && !s ? e : s)
}

function l(e, s) {
const a = t.params.navigation;
(e = r(e))
.forEach((e => {
e && (e.classList[s ? "add" : "remove"](...a.disabledClass
.split(" ")), "BUTTON" === e.tagName && (e.disabled =
s), t.params.watchOverflow && t.enabled && e
.classList[t.isLocked ? "add" : "remove"](a.lockClass))
}))
}

function o() {
const {
nextEl: e,
prevEl: s
} = t.navigation;
if (t.params.loop) return l(s, !1), void l(e, !1);
l(s, t.isBeginning && !t.params.rewind), l(e, t.isEnd && !t.params
.rewind)
}

function d(e) {
e.preventDefault(), (!t.isBeginning || t.params.loop || t.params
.rewind) && (t.slidePrev(), i("navigationPrev"))
}

function c(e) {
e.preventDefault(), (!t.isEnd || t.params.loop || t.params
.rewind) && (t.slideNext(), i("navigationNext"))
}

function p() {
const e = t.params.navigation;
if (t.params.navigation = J(t, t.originalParams.navigation, t.params
.navigation, {
nextEl: "swiper-button-next",
prevEl: "swiper-button-prev"
}), !e.nextEl && !e.prevEl) return;
let s = n(e.nextEl),
a = n(e.prevEl);
Object.assign(t.navigation, {
nextEl: s,
prevEl: a
}), s = r(s), a = r(a);
const i = (s, a) => {
s && s.addEventListener("click", "next" === a ? c : d), !t
.enabled && s && s.classList.add(...e.lockClass.split(" "))
};
s.forEach((e => i(e, "next"))), a.forEach((e => i(e, "prev")))
}

function u() {
let {
nextEl: e,
prevEl: s
} = t.navigation;
e = r(e), s = r(s);
const a = (e, s) => {
e.removeEventListener("click", "next" === s ? c : d), e
.classList.remove(...t.params.navigation.disabledClass.split(
" "))
};
e.forEach((e => a(e, "next"))), s.forEach((e => a(e, "prev")))
}
a("init", (() => {
!1 === t.params.navigation.enabled ? m() : (p(), o())
})), a("toEdge fromEdge lock unlock", (() => {
o()
})), a("destroy", (() => {
u()
})), a("enable disable", (() => {
let {
nextEl: e,
prevEl: s
} = t.navigation;
e = r(e), s = r(s), [...e, ...s].filter((e => !!e))
.forEach((e => e.classList[t.enabled ? "remove" : "add"](t
.params.navigation.lockClass)))
})), a("click", ((e, s) => {
let {
nextEl: a,
prevEl: n
} = t.navigation;
a = r(a), n = r(n);
const l = s.target;
if (t.params.navigation.hideOnClick && !n.includes(l) && !a
.includes(l)) {
if (t.pagination && t.params.pagination && t.params
.pagination.clickable && (t.pagination.el === l || t
.pagination.el.contains(l))) return;
let e;
a.length ? e = a[0].classList.contains(t.params.navigation
.hiddenClass) : n.length && (e = n[0].classList
.contains(t.params.navigation.hiddenClass)), i(!0 ===
e ? "navigationShow" : "navigationHide"), [...a, ...n]
.filter((e => !!e))
.forEach((e => e.classList.toggle(t.params.navigation
.hiddenClass)))
}
}));
const m = () => {
t.el.classList.add(...t.params.navigation.navigationDisabledClass
.split(" ")), u()
};
Object.assign(t.navigation, {
enable: () => {
t.el.classList.remove(...t.params.navigation
.navigationDisabledClass.split(" ")), p(), o()
},
disable: m,
update: o,
init: p,
destroy: u
})
}, function (e) {
let {
swiper: t,
extendParams: s,
on: a,
emit: i
} = e;
const r = "swiper-pagination";
let n;
s({
pagination: {
el: null,
bulletElement: "span",
clickable: !1,
hideOnClick: !1,
renderBullet: null,
renderProgressbar: null,
renderFraction: null,
renderCustom: null,
progressbarOpposite: !1,
type: "bullets",
dynamicBullets: !1,
dynamicMainBullets: 1,
formatFractionCurrent: e => e,
formatFractionTotal: e => e,
bulletClass: `${r}-bullet`,
bulletActiveClass: `${r}-bullet-active`,
modifierClass: `${r}-`,
currentClass: `${r}-current`,
totalClass: `${r}-total`,
hiddenClass: `${r}-hidden`,
progressbarFillClass: `${r}-progressbar-fill`,
progressbarOppositeClass: `${r}-progressbar-opposite`,
clickableClass: `${r}-clickable`,
lockClass: `${r}-lock`,
horizontalClass: `${r}-horizontal`,
verticalClass: `${r}-vertical`,
paginationDisabledClass: `${r}-disabled`
}
}), t.pagination = {
el: null,
bullets: []
};
let l = 0;
const o = e => (Array.isArray(e) || (e = [e].filter((e => !!e))), e);

function d() {
return !t.params.pagination.el || !t.pagination.el || Array.isArray(
t.pagination.el) && 0 === t.pagination.el.length
}

function c(e, s) {
const {
bulletActiveClass: a
} = t.params.pagination;
e && (e = e[("prev" === s ? "previous" : "next") +
"ElementSibling"]) && (e.classList.add(`${a}-${s}`), (e = e[(
"prev" === s ? "previous" : "next") + "ElementSibling"]) && e
.classList.add(`${a}-${s}-${s}`))
}

function p(e) {
const s = e.target.closest(ee(t.params.pagination.bulletClass));
if (!s) return;
e.preventDefault();
const a = w(s) * t.params.slidesPerGroup;
if (t.params.loop) {
if (t.realIndex === a) return;
const e = t.getSlideIndexByData(a),
s = t.getSlideIndexByData(t.realIndex);
e > t.slides.length - t.loopedSlides && t.loopFix({
direction: e > s ? "next" : "prev",
activeSlideIndex: e,
slideTo: !1
}), t.slideToLoop(a)
} else t.slideTo(a)
}

function u() {
const e = t.rtl,
s = t.params.pagination;
if (d()) return;
let a, r, p = t.pagination.el;
p = o(p);
const u = t.virtual && t.params.virtual.enabled ? t.virtual.slides
.length : t.slides.length,
m = t.params.loop ? Math.ceil(u / t.params.slidesPerGroup) : t
.snapGrid.length;
if (t.params.loop ? (r = t.previousRealIndex || 0, a = t.params
.slidesPerGroup > 1 ? Math.floor(t.realIndex / t.params
.slidesPerGroup) : t.realIndex) : void 0 !== t.snapIndex ? (
a = t.snapIndex, r = t.previousSnapIndex) : (r = t
.previousIndex || 0, a = t.activeIndex || 0), "bullets" === s
.type && t.pagination.bullets && t.pagination.bullets.length > 0
) {
const i = t.pagination.bullets;
let o, d, u;
if (s.dynamicBullets && (n = E(i[0], t.isHorizontal() ? "width" :
"height", !0), p.forEach((e => {
e.style[t.isHorizontal() ? "width" : "height"] = n * (s
.dynamicMainBullets + 4) + "px"
})), s.dynamicMainBullets > 1 && void 0 !== r && (l += a - (
r || 0), l > s.dynamicMainBullets - 1 ? l = s
.dynamicMainBullets - 1 : l < 0 && (l = 0)), o = Math.max(
a - l, 0), d = o + (Math.min(i.length, s
.dynamicMainBullets) - 1), u = (d + o) / 2), i.forEach((e => {
const t = [...["", "-next", "-next-next", "-prev",
"-prev-prev", "-main"].map((e =>
`${s.bulletActiveClass}${e}`))].map((e => "string" ==
typeof e && e.includes(" ") ? e.split(" ") : e))
.flat();
e.classList.remove(...t)
})), p.length > 1) i.forEach((e => {
const i = w(e);
i === a ? e.classList.add(...s.bulletActiveClass.split(
" ")) : t.isElement && e.setAttribute("part",
"bullet"), s.dynamicBullets && (i >= o && i <= d && e
.classList.add(...`${s.bulletActiveClass}-main`.split(
" ")), i === o && c(e, "prev"), i === d && c(e,
"next"))
}));
else {
const e = i[a];
if (e && e.classList.add(...s.bulletActiveClass.split(" ")), t
.isElement && i.forEach(((e, t) => {
e.setAttribute("part", t === a ? "bullet-active" :
"bullet")
})), s.dynamicBullets) {
const e = i[o],
t = i[d];
for (let e = o; e <= d; e += 1) i[e] && i[e].classList.add(...
`${s.bulletActiveClass}-main`.split(" "));
c(e, "prev"), c(t, "next")
}
}
if (s.dynamicBullets) {
const a = Math.min(i.length, s.dynamicMainBullets + 4),
r = (n * a - n) / 2 - u * n,
l = e ? "right" : "left";
i.forEach((e => {
e.style[t.isHorizontal() ? l : "top"] = `${r}px`
}))
}
}
p.forEach(((e, r) => {
if ("fraction" === s.type && (e.querySelectorAll(ee(s
.currentClass))
.forEach((e => {
e.textContent = s.formatFractionCurrent(a + 1)
})), e.querySelectorAll(ee(s.totalClass))
.forEach((e => {
e.textContent = s.formatFractionTotal(m)
}))), "progressbar" === s.type) {
let i;
i = s.progressbarOpposite ? t.isHorizontal() ?
"vertical" : "horizontal" : t.isHorizontal() ?
"horizontal" : "vertical";
const r = (a + 1) / m;
let n = 1,
l = 1;
"horizontal" === i ? n = r : l = r, e.querySelectorAll(ee(
s.progressbarFillClass))
.forEach((e => {
e.style.transform =
`translate3d(0,0,0) scaleX(${n}) scaleY(${l})`,
e.style.transitionDuration =
`${t.params.speed}ms`
}))
}
"custom" === s.type && s.renderCustom ? (e.innerHTML = s
.renderCustom(t, a + 1, m), 0 === r && i(
"paginationRender", e)) : (0 === r && i(
"paginationRender", e), i("paginationUpdate", e)), t
.params.watchOverflow && t.enabled && e.classList[t
.isLocked ? "add" : "remove"](s.lockClass)
}))
}

function m() {
const e = t.params.pagination;
if (d()) return;
const s = t.virtual && t.params.virtual.enabled ? t.virtual.slides
.length : t.slides.length;
let a = t.pagination.el;
a = o(a);
let r = "";
if ("bullets" === e.type) {
let a = t.params.loop ? Math.ceil(s / t.params.slidesPerGroup) : t
.snapGrid.length;
t.params.freeMode && t.params.freeMode.enabled && a > s && (a =
s);
for (let s = 0; s < a; s += 1) e.renderBullet ? r += e
.renderBullet.call(t, s, e.bulletClass) : r +=
`<${e.bulletElement} ${t.isElement?'part="bullet"':""} class="${e.bulletClass}"></${e.bulletElement}>`
}
"fraction" === e.type && (r = e.renderFraction ? e.renderFraction
.call(t, e.currentClass, e.totalClass) :
`<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`
), "progressbar" === e.type && (r = e.renderProgressbar ? e
.renderProgressbar.call(t, e.progressbarFillClass) :
`<span class="${e.progressbarFillClass}"></span>`), t.pagination
.bullets = [], a.forEach((s => {
"custom" !== e.type && (s.innerHTML = r || ""),
"bullets" === e.type && t.pagination.bullets.push(...s
.querySelectorAll(ee(e.bulletClass)))
})), "custom" !== e.type && i("paginationRender", a[0])
}

function h() {
t.params.pagination = J(t, t.originalParams.pagination, t.params
.pagination, {
el: "swiper-pagination"
});
const e = t.params.pagination;
if (!e.el) return;
let s;
"string" == typeof e.el && t.isElement && (s = t.el.querySelector(e
.el)), s || "string" != typeof e.el || (s = [...document
.querySelectorAll(e.el)]), s || (s = e.el), s && 0 !== s
.length && (t.params.uniqueNavElements && "string" == typeof e
.el && Array.isArray(s) && s.length > 1 && (s = [...t.el
.querySelectorAll(e.el)], s.length > 1 && (s = s.filter((
e => b(e, ".swiper")[0] === t.el))[0])), Array.isArray(s) &&
1 === s.length && (s = s[0]), Object.assign(t.pagination, {
el: s
}), s = o(s), s.forEach((s => {
"bullets" === e.type && e.clickable && s.classList.add(e
.clickableClass), s.classList.add(e.modifierClass + e
.type), s.classList.add(t.isHorizontal() ? e
.horizontalClass : e.verticalClass), "bullets" === e
.type && e.dynamicBullets && (s.classList.add(
`${e.modifierClass}${e.type}-dynamic`), l = 0, e
.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)
), "progressbar" === e.type && e
.progressbarOpposite && s.classList.add(e
.progressbarOppositeClass), e.clickable && s
.addEventListener("click", p), t.enabled || s.classList
.add(e.lockClass)
})))
}

function f() {
const e = t.params.pagination;
if (d()) return;
let s = t.pagination.el;
s && (s = o(s), s.forEach((s => {
s.classList.remove(e.hiddenClass), s.classList.remove(e
.modifierClass + e.type), s.classList.remove(t
.isHorizontal() ? e.horizontalClass : e.verticalClass
), e.clickable && s.removeEventListener("click", p)
}))), t.pagination.bullets && t.pagination.bullets.forEach((t => t
.classList.remove(...e.bulletActiveClass.split(" "))))
}
a("changeDirection", (() => {
if (!t.pagination || !t.pagination.el) return;
const e = t.params.pagination;
let {
el: s
} = t.pagination;
s = o(s), s.forEach((s => {
s.classList.remove(e.horizontalClass, e
.verticalClass), s.classList.add(t.isHorizontal() ?
e.horizontalClass : e.verticalClass)
}))
})), a("init", (() => {
!1 === t.params.pagination.enabled ? g() : (h(), m(), u())
})), a("activeIndexChange", (() => {
void 0 === t.snapIndex && u()
})), a("snapIndexChange", (() => {
u()
})), a("snapGridLengthChange", (() => {
m(), u()
})), a("destroy", (() => {
f()
})), a("enable disable", (() => {
let {
el: e
} = t.pagination;
e && (e = o(e), e.forEach((e => e.classList[t.enabled ?
"remove" : "add"](t.params.pagination.lockClass))))
})), a("lock unlock", (() => {
u()
})), a("click", ((e, s) => {
const a = s.target,
r = o(t.pagination.el);
if (t.params.pagination.el && t.params.pagination
.hideOnClick && r && r.length > 0 && !a.classList.contains(t
.params.pagination.bulletClass)) {
if (t.navigation && (t.navigation.nextEl && a === t
.navigation.nextEl || t.navigation.prevEl && a === t
.navigation.prevEl)) return;
const e = r[0].classList.contains(t.params.pagination
.hiddenClass);
i(!0 === e ? "paginationShow" : "paginationHide"), r
.forEach((e => e.classList.toggle(t.params.pagination
.hiddenClass)))
}
}));
const g = () => {
t.el.classList.add(t.params.pagination.paginationDisabledClass);
let {
el: e
} = t.pagination;
e && (e = o(e), e.forEach((e => e.classList.add(t.params
.pagination.paginationDisabledClass)))), f()
};
Object.assign(t.pagination, {
enable: () => {
t.el.classList.remove(t.params.pagination
.paginationDisabledClass);
let {
el: e
} = t.pagination;
e && (e = o(e), e.forEach((e => e.classList.remove(t.params
.pagination.paginationDisabledClass)))), h(), m(), u()
},
disable: g,
render: m,
update: u,
init: h,
destroy: f
})
}, function (e) {
let {
swiper: t,
extendParams: s,
on: i,
emit: r
} = e;
const l = a();
let o, d, c, p, u = !1,
m = null,
h = null;

function v() {
if (!t.params.scrollbar.el || !t.scrollbar.el) return;
const {
scrollbar: e,
rtlTranslate: s
} = t, {
dragEl: a,
el: i
} = e, r = t.params.scrollbar, n = t.params.loop ? t.progressLoop :
t.progress;
let l = d,
o = (c - d) * n;
s ? (o = -o, o > 0 ? (l = d - o, o = 0) : -o + d > c && (l = c +
o)) : o < 0 ? (l = d + o, o = 0) : o + d > c && (l = c - o), t
.isHorizontal() ? (a.style.transform =
`translate3d(${o}px, 0, 0)`, a.style.width = `${l}px`) : (a
.style.transform = `translate3d(0px, ${o}px, 0)`, a.style
.height = `${l}px`), r.hide && (clearTimeout(m), i.style
.opacity = 1, m = setTimeout((() => {
i.style.opacity = 0, i.style.transitionDuration = "400ms"
}), 1e3))
}

function w() {
if (!t.params.scrollbar.el || !t.scrollbar.el) return;
const {
scrollbar: e
} = t, {
dragEl: s,
el: a
} = e;
s.style.width = "", s.style.height = "", c = t.isHorizontal() ? a
.offsetWidth : a.offsetHeight, p = t.size / (t.virtualSize + t
.params.slidesOffsetBefore - (t.params.centeredSlides ? t
.snapGrid[0] : 0)), d = "auto" === t.params.scrollbar
.dragSize ? c * p : parseInt(t.params.scrollbar.dragSize, 10), t
.isHorizontal() ? s.style.width = `${d}px` : s.style.height =
`${d}px`, a.style.display = p >= 1 ? "none" : "", t.params
.scrollbar.hide && (a.style.opacity = 0), t.params
.watchOverflow && t.enabled && e.el.classList[t.isLocked ? "add" :
"remove"](t.params.scrollbar.lockClass)
}

function b(e) {
return t.isHorizontal() ? e.clientX : e.clientY
}

function y(e) {
const {
scrollbar: s,
rtlTranslate: a
} = t, {
el: i
} = s;
let r;
r = (b(e) - g(i)[t.isHorizontal() ? "left" : "top"] - (null !== o ?
o : d / 2)) / (c - d), r = Math.max(Math.min(r, 1), 0), a && (
r = 1 - r);
const n = t.minTranslate() + (t.maxTranslate() - t.minTranslate()) *
r;
t.updateProgress(n), t.setTranslate(n), t.updateActiveIndex(), t
.updateSlidesClasses()
}

function E(e) {
const s = t.params.scrollbar,
{
scrollbar: a,
wrapperEl: i
} = t,
{
el: n,
dragEl: l
} = a;
u = !0, o = e.target === l ? b(e) - e.target
.getBoundingClientRect()[t.isHorizontal() ? "left" : "top"] : null,
e.preventDefault(), e.stopPropagation(), i.style
.transitionDuration = "100ms", l.style.transitionDuration =
"100ms", y(e), clearTimeout(h), n.style.transitionDuration =
"0ms", s.hide && (n.style.opacity = 1), t.params.cssMode && (t
.wrapperEl.style["scroll-snap-type"] = "none"), r(
"scrollbarDragStart", e)
}

function x(e) {
const {
scrollbar: s,
wrapperEl: a
} = t, {
el: i,
dragEl: n
} = s;
u && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, y(
e), a.style.transitionDuration = "0ms", i.style
.transitionDuration = "0ms", n.style.transitionDuration = "0ms",
r("scrollbarDragMove", e))
}

function S(e) {
const s = t.params.scrollbar,
{
scrollbar: a,
wrapperEl: i
} = t,
{
el: l
} = a;
u && (u = !1, t.params.cssMode && (t.wrapperEl.style[
"scroll-snap-type"] = "", i.style.transitionDuration = ""), s
.hide && (clearTimeout(h), h = n((() => {
l.style.opacity = 0, l.style.transitionDuration =
"400ms"
}), 1e3)), r("scrollbarDragEnd", e), s.snapOnRelease && t
.slideToClosest())
}

function T(e) {
const {
scrollbar: s,
params: a
} = t, i = s.el;
if (!i) return;
const r = i,
n = !!a.passiveListeners && {
passive: !1,
capture: !1
},
o = !!a.passiveListeners && {
passive: !0,
capture: !1
};
if (!r) return;
const d = "on" === e ? "addEventListener" : "removeEventListener";
r[d]("pointerdown", E, n), l[d]("pointermove", x, n), l[d](
"pointerup", S, o)
}

function M() {
const {
scrollbar: e,
el: s
} = t;
t.params.scrollbar = J(t, t.originalParams.scrollbar, t.params
.scrollbar, {
el: "swiper-scrollbar"
});
const a = t.params.scrollbar;
if (!a.el) return;
let i, r;
"string" == typeof a.el && t.isElement && (i = t.el.querySelector(a
.el)), i || "string" != typeof a.el ? i || (i = a.el) : i = l
.querySelectorAll(a.el), t.params.uniqueNavElements && "string" ==
typeof a.el && i.length > 1 && 1 === s.querySelectorAll(a.el)
.length && (i = s.querySelector(a.el)), i.length > 0 && (i = i[
0]), i.classList.add(t.isHorizontal() ? a.horizontalClass : a
.verticalClass), i && (r = i.querySelector(
`.${t.params.scrollbar.dragClass}`), r || (r = f("div", t
.params.scrollbar.dragClass), i.append(r))), Object.assign(e, {
el: i,
dragEl: r
}), a.draggable && t.params.scrollbar.el && t.scrollbar.el && T(
"on"), i && i.classList[t.enabled ? "remove" : "add"](t.params
.scrollbar.lockClass)
}

function C() {
const e = t.params.scrollbar,
s = t.scrollbar.el;
s && s.classList.remove(t.isHorizontal() ? e.horizontalClass : e
.verticalClass), t.params.scrollbar.el && t.scrollbar.el && T(
"off")
}
s({
scrollbar: {
el: null,
dragSize: "auto",
hide: !1,
draggable: !1,
snapOnRelease: !0,
lockClass: "swiper-scrollbar-lock",
dragClass: "swiper-scrollbar-drag",
scrollbarDisabledClass: "swiper-scrollbar-disabled",
horizontalClass: "swiper-scrollbar-horizontal",
verticalClass: "swiper-scrollbar-vertical"
}
}), t.scrollbar = {
el: null,
dragEl: null
}, i("init", (() => {
!1 === t.params.scrollbar.enabled ? P() : (M(), w(), v())
})), i("update resize observerUpdate lock unlock", (() => {
w()
})), i("setTranslate", (() => {
v()
})), i("setTransition", ((e, s) => {
! function (e) {
t.params.scrollbar.el && t.scrollbar.el && (t.scrollbar
.dragEl.style.transitionDuration = `${e}ms`)
}(s)
})), i("enable disable", (() => {
const {
el: e
} = t.scrollbar;
e && e.classList[t.enabled ? "remove" : "add"](t.params
.scrollbar.lockClass)
})), i("destroy", (() => {
C()
}));
const P = () => {
t.el.classList.add(t.params.scrollbar.scrollbarDisabledClass), t
.scrollbar.el && t.scrollbar.el.classList.add(t.params.scrollbar
.scrollbarDisabledClass), C()
};
Object.assign(t.scrollbar, {
enable: () => {
t.el.classList.remove(t.params.scrollbar
.scrollbarDisabledClass), t.scrollbar.el && t.scrollbar
.el.classList.remove(t.params.scrollbar
.scrollbarDisabledClass), M(), w(), v()
},
disable: P,
updateSize: w,
setTranslate: v,
init: M,
destroy: C
})
}, function (e) {
let {
swiper: t,
extendParams: s,
on: a
} = e;
s({
parallax: {
enabled: !1
}
});
const i = (e, s) => {
const {
rtl: a
} = t, i = a ? -1 : 1, r = e.getAttribute(
"data-swiper-parallax") || "0";
let n = e.getAttribute("data-swiper-parallax-x"),
l = e.getAttribute("data-swiper-parallax-y");
const o = e.getAttribute("data-swiper-parallax-scale"),
d = e.getAttribute("data-swiper-parallax-opacity"),
c = e.getAttribute("data-swiper-parallax-rotate");
if (n || l ? (n = n || "0", l = l || "0") : t.isHorizontal() ? (
n = r, l = "0") : (l = r, n = "0"), n = n.indexOf("%") >= 0 ?
parseInt(n, 10) * s * i + "%" : n * s * i + "px", l = l.indexOf(
"%") >= 0 ? parseInt(l, 10) * s + "%" : l * s + "px", null !=
d) {
const t = d - (d - 1) * (1 - Math.abs(s));
e.style.opacity = t
}
let p = `translate3d(${n}, ${l}, 0px)`;
if (null != o) {
p += ` scale(${o-(o-1)*(1-Math.abs(s))})`
}
if (c && null != c) {
p += ` rotate(${c*s*-1}deg)`
}
e.style.transform = p
},
r = () => {
const {
el: e,
slides: s,
progress: a,
snapGrid: r
} = t;
h(e,
"[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]")
.forEach((e => {
i(e, a)
})), s.forEach(((e, s) => {
let n = e.progress;
t.params.slidesPerGroup > 1 && "auto" !== t.params
.slidesPerView && (n += Math.ceil(s / 2) - a * (r
.length - 1)), n = Math.min(Math.max(n, -1), 1), e
.querySelectorAll(
"[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale], [data-swiper-parallax-rotate]"
)
.forEach((e => {
i(e, n)
}))
}))
};
a("beforeInit", (() => {
t.params.parallax.enabled && (t.params.watchSlidesProgress = !
0, t.originalParams.watchSlidesProgress = !0)
})), a("init", (() => {
t.params.parallax.enabled && r()
})), a("setTranslate", (() => {
t.params.parallax.enabled && r()
})), a("setTransition", ((e, s) => {
t.params.parallax.enabled && function (e) {
void 0 === e && (e = t.params.speed);
const {
el: s
} = t;
s.querySelectorAll(
"[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
)
.forEach((t => {
let s = parseInt(t.getAttribute(
"data-swiper-parallax-duration"), 10) || e;
0 === e && (s = 0), t.style.transitionDuration =
`${s}ms`
}))
}(s)
}))
}, function (e) {
let {
swiper: t,
extendParams: s,
on: a,
emit: i
} = e;
const n = r();
s({
zoom: {
enabled: !1,
maxRatio: 3,
minRatio: 1,
toggle: !0,
containerClass: "swiper-zoom-container",
zoomedSlideClass: "swiper-slide-zoomed"
}
}), t.zoom = {
enabled: !1
};
let l, d, c = 1,
p = !1;
const u = [],
m = {
originX: 0,
originY: 0,
slideEl: void 0,
slideWidth: void 0,
slideHeight: void 0,
imageEl: void 0,
imageWrapEl: void 0,
maxRatio: 3
},
f = {
isTouched: void 0,
isMoved: void 0,
currentX: void 0,
currentY: void 0,
minX: void 0,
minY: void 0,
maxX: void 0,
maxY: void 0,
width: void 0,
height: void 0,
startX: void 0,
startY: void 0,
touchesStart: {},
touchesCurrent: {}
},
v = {
x: void 0,
y: void 0,
prevPositionX: void 0,
prevPositionY: void 0,
prevTime: void 0
};
let w = 1;

function y() {
if (u.length < 2) return 1;
const e = u[0].pageX,
t = u[0].pageY,
s = u[1].pageX,
a = u[1].pageY;
return Math.sqrt((s - e) ** 2 + (a - t) ** 2)
}

function E(e) {
const s = t.isElement ? "swiper-slide" : `.${t.params.slideClass}`;
return !!e.target.matches(s) || t.slides.filter((t => t.contains(e
.target)))
.length > 0
}

function x(e) {
if ("mouse" === e.pointerType && u.splice(0, u.length), !E(e))
return;
const s = t.params.zoom;
if (l = !1, d = !1, u.push(e), !(u.length < 2)) {
if (l = !0, m.scaleStart = y(), !m.slideEl) {
m.slideEl = e.target.closest(
`.${t.params.slideClass}, swiper-slide`), m.slideEl || (m
.slideEl = t.slides[t.activeIndex]);
let a = m.slideEl.querySelector(`.${s.containerClass}`);
if (a && (a = a.querySelectorAll(
"picture, img, svg, canvas, .swiper-zoom-target")[0]), m
.imageEl = a, m.imageWrapEl = a ? b(m.imageEl,
`.${s.containerClass}`)[0] : void 0, !m.imageWrapEl)
return void(m.imageEl = void 0);
m.maxRatio = m.imageWrapEl.getAttribute("data-swiper-zoom") || s
.maxRatio
}
if (m.imageEl) {
const [e, t] = function () {
if (u.length < 2) return {
x: null,
y: null
};
const e = m.imageEl.getBoundingClientRect();
return [(u[0].pageX + (u[1].pageX - u[0].pageX) / 2 - e.x) /
c, (u[0].pageY + (u[1].pageY - u[0].pageY) / 2 - e.y) / c]
}();
m.originX = e, m.originY = t, m.imageEl.style
.transitionDuration = "0ms"
}
p = !0
}
}

function S(e) {
if (!E(e)) return;
const s = t.params.zoom,
a = t.zoom,
i = u.findIndex((t => t.pointerId === e.pointerId));
i >= 0 && (u[i] = e), u.length < 2 || (d = !0, m.scaleMove = y(), m
.imageEl && (a.scale = m.scaleMove / m.scaleStart * c, a.scale >
m.maxRatio && (a.scale = m.maxRatio - 1 + (a.scale - m
.maxRatio + 1) ** .5), a.scale < s.minRatio && (a.scale = s
.minRatio + 1 - (s.minRatio - a.scale + 1) ** .5), m.imageEl
.style.transform = `translate3d(0,0,0) scale(${a.scale})`))
}

function T(e) {
if (!E(e)) return;
if ("mouse" === e.pointerType && "pointerout" === e.type) return;
const s = t.params.zoom,
a = t.zoom,
i = u.findIndex((t => t.pointerId === e.pointerId));
i >= 0 && u.splice(i, 1), l && d && (l = !1, d = !1, m.imageEl && (a
.scale = Math.max(Math.min(a.scale, m.maxRatio), s.minRatio),
m.imageEl.style.transitionDuration = `${t.params.speed}ms`, m
.imageEl.style.transform =
`translate3d(0,0,0) scale(${a.scale})`, c = a.scale, p = !1, a
.scale > 1 && m.slideEl ? m.slideEl.classList.add(
`${s.zoomedSlideClass}`) : a.scale <= 1 && m.slideEl && m
.slideEl.classList.remove(`${s.zoomedSlideClass}`), 1 === a
.scale && (m.originX = 0, m.originY = 0, m.slideEl = void 0)))
}

function M(e) {
if (!E(e) || ! function (e) {
const s = `.${t.params.zoom.containerClass}`;
return !!e.target.matches(s) || [...t.el.querySelectorAll(s)]
.filter((t => t.contains(e.target)))
.length > 0
}(e)) return;
const s = t.zoom;
if (!m.imageEl) return;
if (!f.isTouched || !m.slideEl) return;
f.isMoved || (f.width = m.imageEl.offsetWidth, f.height = m.imageEl
.offsetHeight, f.startX = o(m.imageWrapEl, "x") || 0, f.startY =
o(m.imageWrapEl, "y") || 0, m.slideWidth = m.slideEl
.offsetWidth, m.slideHeight = m.slideEl.offsetHeight, m
.imageWrapEl.style.transitionDuration = "0ms");
const a = f.width * s.scale,
i = f.height * s.scale;
if (a < m.slideWidth && i < m.slideHeight) return;
f.minX = Math.min(m.slideWidth / 2 - a / 2, 0), f.maxX = -f.minX, f
.minY = Math.min(m.slideHeight / 2 - i / 2, 0), f.maxY = -f.minY,
f.touchesCurrent.x = u.length > 0 ? u[0].pageX : e.pageX, f
.touchesCurrent.y = u.length > 0 ? u[0].pageY : e.pageY;
if (Math.max(Math.abs(f.touchesCurrent.x - f.touchesStart.x), Math
.abs(f.touchesCurrent.y - f.touchesStart.y)) > 5 && (t
.allowClick = !1), !f.isMoved && !p) {
if (t.isHorizontal() && (Math.floor(f.minX) === Math.floor(f
.startX) && f.touchesCurrent.x < f.touchesStart.x || Math
.floor(f.maxX) === Math.floor(f.startX) && f.touchesCurrent
.x > f.touchesStart.x)) return void(f.isTouched = !1);
if (!t.isHorizontal() && (Math.floor(f.minY) === Math.floor(f
.startY) && f.touchesCurrent.y < f.touchesStart.y || Math
.floor(f.maxY) === Math.floor(f.startY) && f.touchesCurrent
.y > f.touchesStart.y)) return void(f.isTouched = !1)
}
e.cancelable && e.preventDefault(), e.stopPropagation(), f
.isMoved = !0;
const r = (s.scale - c) / (m.maxRatio - t.params.zoom.minRatio),
{
originX: n,
originY: l
} = m;
f.currentX = f.touchesCurrent.x - f.touchesStart.x + f.startX + r *
(f.width - 2 * n), f.currentY = f.touchesCurrent.y - f
.touchesStart.y + f.startY + r * (f.height - 2 * l), f.currentX <
f.minX && (f.currentX = f.minX + 1 - (f.minX - f.currentX + 1) **
.8), f.currentX > f.maxX && (f.currentX = f.maxX - 1 + (f
.currentX - f.maxX + 1) ** .8), f.currentY < f.minY && (f
.currentY = f.minY + 1 - (f.minY - f.currentY + 1) ** .8), f
.currentY > f.maxY && (f.currentY = f.maxY - 1 + (f.currentY - f
.maxY + 1) ** .8), v.prevPositionX || (v.prevPositionX = f
.touchesCurrent.x), v.prevPositionY || (v.prevPositionY = f
.touchesCurrent.y), v.prevTime || (v.prevTime = Date.now()), v
.x = (f.touchesCurrent.x - v.prevPositionX) / (Date.now() - v
.prevTime) / 2, v.y = (f.touchesCurrent.y - v.prevPositionY) / (
Date.now() - v.prevTime) / 2, Math.abs(f.touchesCurrent.x - v
.prevPositionX) < 2 && (v.x = 0), Math.abs(f.touchesCurrent.y -
v.prevPositionY) < 2 && (v.y = 0), v.prevPositionX = f
.touchesCurrent.x, v.prevPositionY = f.touchesCurrent.y, v
.prevTime = Date.now(), m.imageWrapEl.style.transform =
`translate3d(${f.currentX}px, ${f.currentY}px,0)`
}

function C() {
const e = t.zoom;
m.slideEl && t.activeIndex !== t.slides.indexOf(m.slideEl) && (m
.imageEl && (m.imageEl.style.transform =
"translate3d(0,0,0) scale(1)"), m.imageWrapEl && (m
.imageWrapEl.style.transform = "translate3d(0,0,0)"), m
.slideEl.classList.remove(`${t.params.zoom.zoomedSlideClass}`),
e.scale = 1, c = 1, m.slideEl = void 0, m.imageEl = void 0, m
.imageWrapEl = void 0, m.originX = 0, m.originY = 0)
}

function P(e) {
const s = t.zoom,
a = t.params.zoom;
if (!m.slideEl) {
e && e.target && (m.slideEl = e.target.closest(
`.${t.params.slideClass}, swiper-slide`)), m.slideEl || (t
.params.virtual && t.params.virtual.enabled && t.virtual ? m
.slideEl = h(t.slidesEl, `.${t.params.slideActiveClass}`)[0] :
m.slideEl = t.slides[t.activeIndex]);
let s = m.slideEl.querySelector(`.${a.containerClass}`);
s && (s = s.querySelectorAll(
"picture, img, svg, canvas, .swiper-zoom-target")[0]), m
.imageEl = s, m.imageWrapEl = s ? b(m.imageEl,
`.${a.containerClass}`)[0] : void 0
}
if (!m.imageEl || !m.imageWrapEl) return;
let i, r, l, o, d, p, u, v, w, y, E, x, S, T, M, C, P, L;
t.params.cssMode && (t.wrapperEl.style.overflow = "hidden", t
.wrapperEl.style.touchAction = "none"), m.slideEl.classList.add(
`${a.zoomedSlideClass}`), void 0 === f.touchesStart.x && e ? (
i = e.pageX, r = e.pageY) : (i = f.touchesStart.x, r = f
.touchesStart.y);
const z = "number" == typeof e ? e : null;
1 === c && z && (i = void 0, r = void 0), s.scale = z || m
.imageWrapEl.getAttribute("data-swiper-zoom") || a.maxRatio, c =
z || m.imageWrapEl.getAttribute("data-swiper-zoom") || a.maxRatio,
!e || 1 === c && z ? (u = 0, v = 0) : (P = m.slideEl.offsetWidth,
L = m.slideEl.offsetHeight, l = g(m.slideEl)
.left + n.scrollX, o = g(m.slideEl)
.top + n.scrollY, d = l + P / 2 - i, p = o + L / 2 - r, w = m
.imageEl.offsetWidth, y = m.imageEl.offsetHeight, E = w * s
.scale, x = y * s.scale, S = Math.min(P / 2 - E / 2, 0), T =
Math.min(L / 2 - x / 2, 0), M = -S, C = -T, u = d * s.scale, v =
p * s.scale, u < S && (u = S), u > M && (u = M), v < T && (v =
T), v > C && (v = C)), z && 1 === s.scale && (m.originX = 0, m
.originY = 0), m.imageWrapEl.style.transitionDuration = "300ms",
m.imageWrapEl.style.transform = `translate3d(${u}px, ${v}px,0)`, m
.imageEl.style.transitionDuration = "300ms", m.imageEl.style
.transform = `translate3d(0,0,0) scale(${s.scale})`
}

function L() {
const e = t.zoom,
s = t.params.zoom;
if (!m.slideEl) {
t.params.virtual && t.params.virtual.enabled && t.virtual ? m
.slideEl = h(t.slidesEl, `.${t.params.slideActiveClass}`)[0] : m
.slideEl = t.slides[t.activeIndex];
let e = m.slideEl.querySelector(`.${s.containerClass}`);
e && (e = e.querySelectorAll(
"picture, img, svg, canvas, .swiper-zoom-target")[0]), m
.imageEl = e, m.imageWrapEl = e ? b(m.imageEl,
`.${s.containerClass}`)[0] : void 0
}
m.imageEl && m.imageWrapEl && (t.params.cssMode && (t.wrapperEl
.style.overflow = "", t.wrapperEl.style.touchAction = ""), e
.scale = 1, c = 1, m.imageWrapEl.style.transitionDuration =
"300ms", m.imageWrapEl.style.transform = "translate3d(0,0,0)", m
.imageEl.style.transitionDuration = "300ms", m.imageEl.style
.transform = "translate3d(0,0,0) scale(1)", m.slideEl.classList
.remove(`${s.zoomedSlideClass}`), m.slideEl = void 0, m
.originX = 0, m.originY = 0)
}

function z(e) {
const s = t.zoom;
s.scale && 1 !== s.scale ? L() : P(e)
}

function A() {
return {
passiveListener: !!t.params.passiveListeners && {
passive: !0,
capture: !1
},
activeListenerWithCapture: !t.params.passiveListeners || {
passive: !1,
capture: !0
}
}
}

function $() {
const e = t.zoom;
if (e.enabled) return;
e.enabled = !0;
const {
passiveListener: s,
activeListenerWithCapture: a
} = A();
t.wrapperEl.addEventListener("pointerdown", x, s), t.wrapperEl
.addEventListener("pointermove", S, a), ["pointerup",
"pointercancel", "pointerout"].forEach((e => {
t.wrapperEl.addEventListener(e, T, s)
})), t.wrapperEl.addEventListener("pointermove", M, a)
}

function I() {
const e = t.zoom;
if (!e.enabled) return;
e.enabled = !1;
const {
passiveListener: s,
activeListenerWithCapture: a
} = A();
t.wrapperEl.removeEventListener("pointerdown", x, s), t.wrapperEl
.removeEventListener("pointermove", S, a), ["pointerup",
"pointercancel", "pointerout"].forEach((e => {
t.wrapperEl.removeEventListener(e, T, s)
})), t.wrapperEl.removeEventListener("pointermove", M, a)
}
Object.defineProperty(t.zoom, "scale", {
get: () => w,
set(e) {
if (w !== e) {
const t = m.imageEl,
s = m.slideEl;
i("zoomChange", e, t, s)
}
w = e
}
}), a("init", (() => {
t.params.zoom.enabled && $()
})), a("destroy", (() => {
I()
})), a("touchStart", ((e, s) => {
t.zoom.enabled && function (e) {
const s = t.device;
if (!m.imageEl) return;
if (f.isTouched) return;
s.android && e.cancelable && e.preventDefault(), f
.isTouched = !0;
const a = u.length > 0 ? u[0] : e;
f.touchesStart.x = a.pageX, f.touchesStart.y = a.pageY
}(s)
})), a("touchEnd", ((e, s) => {
t.zoom.enabled && function () {
const e = t.zoom;
if (!m.imageEl) return;
if (!f.isTouched || !f.isMoved) return f.isTouched = !1,
void(f.isMoved = !1);
f.isTouched = !1, f.isMoved = !1;
let s = 300,
a = 300;
const i = v.x * s,
r = f.currentX + i,
n = v.y * a,
l = f.currentY + n;
0 !== v.x && (s = Math.abs((r - f.currentX) / v.x)), 0 !==
v.y && (a = Math.abs((l - f.currentY) / v.y));
const o = Math.max(s, a);
f.currentX = r, f.currentY = l;
const d = f.width * e.scale,
c = f.height * e.scale;
f.minX = Math.min(m.slideWidth / 2 - d / 2, 0), f.maxX = -
f.minX, f.minY = Math.min(m.slideHeight / 2 - c / 2, 0),
f.maxY = -f.minY, f.currentX = Math.max(Math.min(f
.currentX, f.maxX), f.minX), f.currentY = Math.max(
Math.min(f.currentY, f.maxY), f.minY), m.imageWrapEl
.style.transitionDuration = `${o}ms`, m.imageWrapEl
.style.transform =
`translate3d(${f.currentX}px, ${f.currentY}px,0)`
}()
})), a("doubleTap", ((e, s) => {
!t.animating && t.params.zoom.enabled && t.zoom.enabled && t
.params.zoom.toggle && z(s)
})), a("transitionEnd", (() => {
t.zoom.enabled && t.params.zoom.enabled && C()
})), a("slideChange", (() => {
t.zoom.enabled && t.params.zoom.enabled && t.params.cssMode &&
C()
})), Object.assign(t.zoom, {
enable: $,
disable: I,
in: P,
out: L,
toggle: z
})
}, function (e) {
let {
swiper: t,
extendParams: s,
on: a
} = e;

function i(e, t) {
const s = function () {
let e, t, s;
return (a, i) => {
for (t = -1, e = a.length; e - t > 1;) s = e + t >> 1, a[
s] <= i ? t = s : e = s;
return e
}
}();
let a, i;
return this.x = e, this.y = t, this.lastIndex = e.length - 1, this
.interpolate = function (e) {
return e ? (i = s(this.x, e), a = i - 1, (e - this.x[a]) * (this
.y[i] - this.y[a]) / (this.x[i] - this.x[a]) + this.y[a]) :
0
}, this
}

function r() {
t.controller.control && t.controller.spline && (t.controller
.spline = void 0, delete t.controller.spline)
}
s({
controller: {
control: void 0,
inverse: !1,
by: "slide"
}
}), t.controller = {
control: void 0
}, a("beforeInit", (() => {
if ("undefined" != typeof window && ("string" == typeof t
.params.controller.control || t.params.controller
.control instanceof HTMLElement)) {
const e = document.querySelector(t.params.controller
.control);
if (e && e.swiper) t.controller.control = e.swiper;
else if (e) {
const s = a => {
t.controller.control = a.detail[0], t.update(), e
.removeEventListener("init", s)
};
e.addEventListener("init", s)
}
} else t.controller.control = t.params.controller.control
})), a("update", (() => {
r()
})), a("resize", (() => {
r()
})), a("observerUpdate", (() => {
r()
})), a("setTranslate", ((e, s, a) => {
t.controller.control && !t.controller.control.destroyed && t
.controller.setTranslate(s, a)
})), a("setTransition", ((e, s, a) => {
t.controller.control && !t.controller.control.destroyed && t
.controller.setTransition(s, a)
})), Object.assign(t.controller, {
setTranslate: function (e, s) {
const a = t.controller.control;
let r, n;
const l = t.constructor;

function o(e) {
if (e.destroyed) return;
const s = t.rtlTranslate ? -t.translate : t.translate;
"slide" === t.params.controller.by && (! function (e) {
t.controller.spline = t.params.loop ? new i(t
.slidesGrid, e.slidesGrid) : new i(t.snapGrid, e
.snapGrid)
}(e), n = -t.controller.spline.interpolate(-s)), n &&
"container" !== t.params.controller.by || (r = (e
.maxTranslate() - e.minTranslate()) / (t
.maxTranslate() - t.minTranslate()), !Number.isNaN(
r) && Number.isFinite(r) || (r = 1), n = (s - t
.minTranslate()) * r + e.minTranslate()), t.params
.controller.inverse && (n = e.maxTranslate() - n), e
.updateProgress(n), e.setTranslate(n, t), e
.updateActiveIndex(), e.updateSlidesClasses()
}
if (Array.isArray(a))
for (let e = 0; e < a.length; e += 1) a[e] !== s && a[
e] instanceof l && o(a[e]);
else a instanceof l && s !== a && o(a)
},
setTransition: function (e, s) {
const a = t.constructor,
i = t.controller.control;
let r;

function l(s) {
s.destroyed || (s.setTransition(e, t), 0 !== e && (s
.transitionStart(), s.params.autoHeight && n((
() => {
s.updateAutoHeight()
})), y(s.wrapperEl, (() => {
i && s.transitionEnd()
}))))
}
if (Array.isArray(i))
for (r = 0; r < i.length; r += 1) i[r] !== s && i[
r] instanceof a && l(i[r]);
else i instanceof a && s !== i && l(i)
}
})
}, function (e) {
let {
swiper: t,
extendParams: s,
on: a
} = e;
s({
a11y: {
enabled: !0,
notificationClass: "swiper-notification",
prevSlideMessage: "Previous slide",
nextSlideMessage: "Next slide",
firstSlideMessage: "This is the first slide",
lastSlideMessage: "This is the last slide",
paginationBulletMessage: "Go to slide {{index}}",
slideLabelMessage: "{{index}} / {{slidesLength}}",
containerMessage: null,
containerRoleDescriptionMessage: null,
itemRoleDescriptionMessage: null,
slideRole: "group",
id: null
}
}), t.a11y = {
clicked: !1
};
let i = null;

function r(e) {
const t = i;
0 !== t.length && (t.innerHTML = "", t.innerHTML = e)
}
const n = e => (Array.isArray(e) || (e = [e].filter((e => !!e))), e);

function l(e) {
(e = n(e))
.forEach((e => {
e.setAttribute("tabIndex", "0")
}))
}

function o(e) {
(e = n(e))
.forEach((e => {
e.setAttribute("tabIndex", "-1")
}))
}

function d(e, t) {
(e = n(e))
.forEach((e => {
e.setAttribute("role", t)
}))
}

function c(e, t) {
(e = n(e))
.forEach((e => {
e.setAttribute("aria-roledescription", t)
}))
}

function p(e, t) {
(e = n(e))
.forEach((e => {
e.setAttribute("aria-label", t)
}))
}

function u(e) {
(e = n(e))
.forEach((e => {
e.setAttribute("aria-disabled", !0)
}))
}

function m(e) {
(e = n(e))
.forEach((e => {
e.setAttribute("aria-disabled", !1)
}))
}

function h(e) {
if (13 !== e.keyCode && 32 !== e.keyCode) return;
const s = t.params.a11y,
a = e.target;
t.pagination && t.pagination.el && (a === t.pagination.el || t
.pagination.el.contains(e.target)) && !e.target.matches(ee(t
.params.pagination.bulletClass)) || (t.navigation && t
.navigation.nextEl && a === t.navigation.nextEl && (t.isEnd && !
t.params.loop || t.slideNext(), t.isEnd ? r(s
.lastSlideMessage) : r(s.nextSlideMessage)), t.navigation &&
t.navigation.prevEl && a === t.navigation.prevEl && (t
.isBeginning && !t.params.loop || t.slidePrev(), t
.isBeginning ? r(s.firstSlideMessage) : r(s.prevSlideMessage)
), t.pagination && a.matches(ee(t.params.pagination
.bulletClass)) && a.click())
}

function g() {
return t.pagination && t.pagination.bullets && t.pagination.bullets
.length
}

function v() {
return g() && t.params.pagination.clickable
}
const b = (e, t, s) => {
l(e), "BUTTON" !== e.tagName && (d(e, "button"), e
.addEventListener("keydown", h)), p(e, s),
function (e, t) {
(e = n(e))
.forEach((e => {
e.setAttribute("aria-controls", t)
}))
}(e, t)
},
y = () => {
t.a11y.clicked = !0
},
E = () => {
requestAnimationFrame((() => {
requestAnimationFrame((() => {
t.destroyed || (t.a11y.clicked = !1)
}))
}))
},
x = e => {
if (t.a11y.clicked) return;
const s = e.target.closest(
`.${t.params.slideClass}, swiper-slide`);
if (!s || !t.slides.includes(s)) return;
const a = t.slides.indexOf(s) === t.activeIndex,
i = t.params.watchSlidesProgress && t.visibleSlides && t
.visibleSlides.includes(s);
a || i || e.sourceCapabilities && e.sourceCapabilities
.firesTouchEvents || (t.isHorizontal() ? t.el.scrollLeft = 0 : t
.el.scrollTop = 0, t.slideTo(t.slides.indexOf(s), 0))
},
S = () => {
const e = t.params.a11y;
e.itemRoleDescriptionMessage && c(t.slides, e
.itemRoleDescriptionMessage), e.slideRole && d(t.slides, e
.slideRole);
const s = t.slides.length;
e.slideLabelMessage && t.slides.forEach(((a, i) => {
const r = t.params.loop ? parseInt(a.getAttribute(
"data-swiper-slide-index"), 10) : i;
p(a, e.slideLabelMessage.replace(/\{\{index\}\}/, r + 1)
.replace(/\{\{slidesLength\}\}/, s))
}))
},
T = () => {
const e = t.params.a11y;
t.el.append(i);
const s = t.el;
e.containerRoleDescriptionMessage && c(s, e
.containerRoleDescriptionMessage), e.containerMessage && p(s,
e.containerMessage);
const a = t.wrapperEl,
r = e.id || a.getAttribute("id") ||
`swiper-wrapper-${l=16,void 0===l&&(l=16),"x".repeat(l).replace(/x/g,(()=>Math.round(16*Math.random()).toString(16)))}`;
var l;
const o = t.params.autoplay && t.params.autoplay.enabled ? "off" :
"polite";
var d;
d = r, n(a)
.forEach((e => {
e.setAttribute("id", d)
})),
function (e, t) {
(e = n(e))
.forEach((e => {
e.setAttribute("aria-live", t)
}))
}(a, o), S();
let {
nextEl: u,
prevEl: m
} = t.navigation ? t.navigation : {};
if (u = n(u), m = n(m), u && u.forEach((t => b(t, r, e
.nextSlideMessage))), m && m.forEach((t => b(t, r, e
.prevSlideMessage))), v()) {
(Array.isArray(t.pagination.el) ? t.pagination.el : [t
.pagination.el])
.forEach((e => {
e.addEventListener("keydown", h)
}))
}
t.el.addEventListener("focus", x, !0), t.el.addEventListener(
"pointerdown", y, !0), t.el.addEventListener("pointerup", E, !
0)
};
a("beforeInit", (() => {
i = f("span", t.params.a11y.notificationClass), i
.setAttribute("aria-live", "assertive"), i.setAttribute(
"aria-atomic", "true")
})), a("afterInit", (() => {
t.params.a11y.enabled && T()
})), a(
"slidesLengthChange snapGridLengthChange slidesGridLengthChange",
(() => {
t.params.a11y.enabled && S()
})), a("fromEdge toEdge afterInit lock unlock", (() => {
t.params.a11y.enabled && function () {
if (t.params.loop || t.params.rewind || !t.navigation)
return;
const {
nextEl: e,
prevEl: s
} = t.navigation;
s && (t.isBeginning ? (u(s), o(s)) : (m(s), l(s))), e && (
t.isEnd ? (u(e), o(e)) : (m(e), l(e)))
}()
})), a("paginationUpdate", (() => {
t.params.a11y.enabled && function () {
const e = t.params.a11y;
g() && t.pagination.bullets.forEach((s => {
t.params.pagination.clickable && (l(s), t.params
.pagination.renderBullet || (d(s, "button"),
p(s, e.paginationBulletMessage.replace(
/\{\{index\}\}/, w(s) + 1)))), s.matches(
ee(t.params.pagination.bulletActiveClass)) ? s
.setAttribute("aria-current", "true") : s
.removeAttribute("aria-current")
}))
}()
})), a("destroy", (() => {
t.params.a11y.enabled && function () {
i && i.remove();
let {
nextEl: e,
prevEl: s
} = t.navigation ? t.navigation : {};
e = n(e), s = n(s), e && e.forEach((e => e
.removeEventListener("keydown", h))), s && s.forEach((
e => e.removeEventListener("keydown", h))), v() && (
Array.isArray(t.pagination.el) ? t.pagination.el : [t
.pagination.el])
.forEach((e => {
e.removeEventListener("keydown", h)
}));
t.el.removeEventListener("focus", x, !0), t.el
.removeEventListener("pointerdown", y, !0), t.el
.removeEventListener("pointerup", E, !0)
}()
}))
}, function (e) {
let {
swiper: t,
extendParams: s,
on: a
} = e;
s({
history: {
enabled: !1,
root: "",
replaceState: !1,
key: "slides",
keepQuery: !1
}
});
let i = !1,
n = {};
const l = e => e.toString()
.replace(/\s+/g, "-")
.replace(/[^\w-]+/g, "")
.replace(/--+/g, "-")
.replace(/^-+/, "")
.replace(/-+$/, ""),
o = e => {
const t = r();
let s;
s = e ? new URL(e) : t.location;
const a = s.pathname.slice(1)
.split("/")
.filter((e => "" !== e)),
i = a.length;
return {
key: a[i - 2],
value: a[i - 1]
}
},
d = (e, s) => {
const a = r();
if (!i || !t.params.history.enabled) return;
let n;
n = t.params.url ? new URL(t.params.url) : a.location;
const o = t.slides[s];
let d = l(o.getAttribute("data-history"));
if (t.params.history.root.length > 0) {
let s = t.params.history.root;
"/" === s[s.length - 1] && (s = s.slice(0, s.length - 1)), d =
`${s}/${e?`${e}/`:""}${d}`
} else n.pathname.includes(e) || (d = `${e?`${e}/`:""}${d}`);
t.params.history.keepQuery && (d += n.search);
const c = a.history.state;
c && c.value === d || (t.params.history.replaceState ? a.history
.replaceState({
value: d
}, null, d) : a.history.pushState({
value: d
}, null, d))
},
c = (e, s, a) => {
if (s)
for (let i = 0, r = t.slides.length; i < r; i += 1) {
const r = t.slides[i];
if (l(r.getAttribute("data-history")) === s) {
const s = t.getSlideIndex(r);
t.slideTo(s, e, a)
}
} else t.slideTo(0, e, a)
},
p = () => {
n = o(t.params.url), c(t.params.speed, n.value, !1)
};
a("init", (() => {
t.params.history.enabled && (() => {
const e = r();
if (t.params.history) {
if (!e.history || !e.history.pushState) return t
.params.history.enabled = !1, void(t.params
.hashNavigation.enabled = !0);
i = !0, n = o(t.params.url), n.key || n.value ? (c(0,
n.value, t.params.runCallbacksOnInit), t.params
.history.replaceState || e.addEventListener(
"popstate", p)) : t.params.history
.replaceState || e.addEventListener("popstate", p)
}
})()
})), a("destroy", (() => {
t.params.history.enabled && (() => {
const e = r();
t.params.history.replaceState || e.removeEventListener(
"popstate", p)
})()
})), a("transitionEnd _freeModeNoMomentumRelease", (() => {
i && d(t.params.history.key, t.activeIndex)
})), a("slideChange", (() => {
i && t.params.cssMode && d(t.params.history.key, t
.activeIndex)
}))
}, function (e) {
let {
swiper: t,
extendParams: s,
emit: i,
on: n
} = e, l = !1;
const o = a(),
d = r();
s({
hashNavigation: {
enabled: !1,
replaceState: !1,
watchState: !1,
getSlideIndex(e, s) {
if (t.virtual && t.params.virtual.enabled) {
const e = t.slides.filter((e => e.getAttribute(
"data-hash") === s))[0];
if (!e) return 0;
return parseInt(e.getAttribute("data-swiper-slide-index"),
10)
}
return t.getSlideIndex(h(t.slidesEl,
`.${t.params.slideClass}[data-hash="${s}"], swiper-slide[data-hash="${s}"]`
)[0])
}
}
});
const c = () => {
i("hashChange");
const e = o.location.hash.replace("#", ""),
s = t.virtual && t.params.virtual.enabled ? t.slidesEl
.querySelector(`[data-swiper-slide-index="${t.activeIndex}"]`) :
t.slides[t.activeIndex];
if (e !== (s ? s.getAttribute("data-hash") : "")) {
const s = t.params.hashNavigation.getSlideIndex(t, e);
if (void 0 === s || Number.isNaN(s)) return;
t.slideTo(s)
}
},
p = () => {
if (!l || !t.params.hashNavigation.enabled) return;
const e = t.virtual && t.params.virtual.enabled ? t.slidesEl
.querySelector(`[data-swiper-slide-index="${t.activeIndex}"]`) :
t.slides[t.activeIndex],
s = e ? e.getAttribute("data-hash") || e.getAttribute(
"data-history") : "";
t.params.hashNavigation.replaceState && d.history && d.history
.replaceState ? (d.history.replaceState(null, null, `#${s}` ||
""), i("hashSet")) : (o.location.hash = s || "", i("hashSet"))
};
n("init", (() => {
t.params.hashNavigation.enabled && (() => {
if (!t.params.hashNavigation.enabled || t.params
.history && t.params.history.enabled) return;
l = !0;
const e = o.location.hash.replace("#", "");
if (e) {
const s = 0,
a = t.params.hashNavigation.getSlideIndex(t, e);
t.slideTo(a || 0, s, t.params.runCallbacksOnInit, !0)
}
t.params.hashNavigation.watchState && d
.addEventListener("hashchange", c)
})()
})), n("destroy", (() => {
t.params.hashNavigation.enabled && t.params.hashNavigation
.watchState && d.removeEventListener("hashchange", c)
})), n("transitionEnd _freeModeNoMomentumRelease", (() => {
l && p()
})), n("slideChange", (() => {
l && t.params.cssMode && p()
}))
}, function (e) {
let t, s, {
swiper: i,
extendParams: r,
on: n,
emit: l,
params: o
} = e;
i.autoplay = {
running: !1,
paused: !1,
timeLeft: 0
}, r({
autoplay: {
enabled: !1,
delay: 3e3,
waitForTransition: !0,
disableOnInteraction: !0,
stopOnLastSlide: !1,
reverseDirection: !1,
pauseOnMouseEnter: !1
}
});
let d, c, p, u, m, h, f, g = o && o.autoplay ? o.autoplay.delay : 3e3,
v = o && o.autoplay ? o.autoplay.delay : 3e3,
w = (new Date)
.getTime;

function b(e) {
i && !i.destroyed && i.wrapperEl && e.target === i.wrapperEl && (i
.wrapperEl.removeEventListener("transitionend", b), M())
}
const y = () => {
if (i.destroyed || !i.autoplay.running) return;
i.autoplay.paused ? c = !0 : c && (v = d, c = !1);
const e = i.autoplay.paused ? d : w + v - (new Date)
.getTime();
i.autoplay.timeLeft = e, l("autoplayTimeLeft", e, e / g), s =
requestAnimationFrame((() => {
y()
}))
},
E = e => {
if (i.destroyed || !i.autoplay.running) return;
cancelAnimationFrame(s), y();
let a = void 0 === e ? i.params.autoplay.delay : e;
g = i.params.autoplay.delay, v = i.params.autoplay.delay;
const r = (() => {
let e;
if (e = i.virtual && i.params.virtual.enabled ? i.slides
.filter((e => e.classList.contains(
"swiper-slide-active")))[0] : i.slides[i.activeIndex], !
e) return;
return parseInt(e.getAttribute("data-swiper-autoplay"), 10)
})();
!Number.isNaN(r) && r > 0 && void 0 === e && (a = r, g = r, v =
r), d = a;
const n = i.params.speed,
o = () => {
i && !i.destroyed && (i.params.autoplay.reverseDirection ? !i
.isBeginning || i.params.loop || i.params.rewind ? (i
.slidePrev(n, !0, !0), l("autoplay")) : i.params
.autoplay.stopOnLastSlide || (i.slideTo(i.slides.length -
1, n, !0, !0), l("autoplay")) : !i.isEnd || i.params
.loop || i.params.rewind ? (i.slideNext(n, !0, !0), l(
"autoplay")) : i.params.autoplay.stopOnLastSlide || (i
.slideTo(0, n, !0, !0), l("autoplay")), i.params
.cssMode && (w = (new Date)
.getTime(), requestAnimationFrame((() => {
E()
}))))
};
return a > 0 ? (clearTimeout(t), t = setTimeout((() => {
o()
}), a)) : requestAnimationFrame((() => {
o()
})), a
},
x = () => {
i.autoplay.running = !0, E(), l("autoplayStart")
},
S = () => {
i.autoplay.running = !1, clearTimeout(t), cancelAnimationFrame(s),
l("autoplayStop")
},
T = (e, s) => {
if (i.destroyed || !i.autoplay.running) return;
clearTimeout(t), e || (f = !0);
const a = () => {
l("autoplayPause"), i.params.autoplay.waitForTransition ? i
.wrapperEl.addEventListener("transitionend", b) : M()
};
if (i.autoplay.paused = !0, s) return h && (d = i.params.autoplay
.delay), h = !1, void a();
const r = d || i.params.autoplay.delay;
d = r - ((new Date)
.getTime() - w), i.isEnd && d < 0 && !i.params.loop || (d <
0 && (d = 0), a())
},
M = () => {
i.isEnd && d < 0 && !i.params.loop || i.destroyed || !i.autoplay
.running || (w = (new Date)
.getTime(), f ? (f = !1, E(d)) : E(), i.autoplay.paused = !1,
l("autoplayResume"))
},
C = () => {
if (i.destroyed || !i.autoplay.running) return;
const e = a();
"hidden" === e.visibilityState && (f = !0, T(!0)), "visible" === e
.visibilityState && M()
},
P = e => {
"mouse" === e.pointerType && (f = !0, T(!0))
},
L = e => {
"mouse" === e.pointerType && i.autoplay.paused && M()
};
n("init", (() => {
i.params.autoplay.enabled && (i.params.autoplay
.pauseOnMouseEnter && (i.el.addEventListener(
"pointerenter", P), i.el.addEventListener(
"pointerleave", L)), a()
.addEventListener("visibilitychange", C), w = (new Date)
.getTime(), x())
})), n("destroy", (() => {
i.el.removeEventListener("pointerenter", P), i.el
.removeEventListener("pointerleave", L), a()
.removeEventListener("visibilitychange", C), i.autoplay
.running && S()
})), n("beforeTransitionStart", ((e, t, s) => {
!i.destroyed && i.autoplay.running && (s || !i.params.autoplay
.disableOnInteraction ? T(!0, !0) : S())
})), n("sliderFirstMove", (() => {
!i.destroyed && i.autoplay.running && (i.params.autoplay
.disableOnInteraction ? S() : (p = !0, u = !1, f = !1, m =
setTimeout((() => {
f = !0, u = !0, T(!0)
}), 200)))
})), n("touchEnd", (() => {
if (!i.destroyed && i.autoplay.running && p) {
if (clearTimeout(m), clearTimeout(t), i.params.autoplay
.disableOnInteraction) return u = !1, void(p = !1);
u && i.params.cssMode && M(), u = !1, p = !1
}
})), n("slideChange", (() => {
!i.destroyed && i.autoplay.running && (h = !0)
})), Object.assign(i.autoplay, {
start: x,
stop: S,
pause: T,
resume: M
})
}, function (e) {
let {
swiper: t,
extendParams: s,
on: i
} = e;
s({
thumbs: {
swiper: null,
multipleActiveThumbs: !0,
autoScrollOffset: 0,
slideThumbActiveClass: "swiper-slide-thumb-active",
thumbsContainerClass: "swiper-thumbs"
}
});
let r = !1,
n = !1;

function l() {
const e = t.thumbs.swiper;
if (!e || e.destroyed) return;
const s = e.clickedIndex,
a = e.clickedSlide;
if (a && a.classList.contains(t.params.thumbs
.slideThumbActiveClass)) return;
if (null == s) return;
let i;
i = e.params.loop ? parseInt(e.clickedSlide.getAttribute(
"data-swiper-slide-index"), 10) : s, t.params.loop ? t
.slideToLoop(i) : t.slideTo(i)
}

function o() {
const {
thumbs: e
} = t.params;
if (r) return !1;
r = !0;
const s = t.constructor;
if (e.swiper instanceof s) t.thumbs.swiper = e.swiper, Object
.assign(t.thumbs.swiper.originalParams, {
watchSlidesProgress: !0,
slideToClickedSlide: !1
}), Object.assign(t.thumbs.swiper.params, {
watchSlidesProgress: !0,
slideToClickedSlide: !1
}), t.thumbs.swiper.update();
else if (d(e.swiper)) {
const a = Object.assign({}, e.swiper);
Object.assign(a, {
watchSlidesProgress: !0,
slideToClickedSlide: !1
}), t.thumbs.swiper = new s(a), n = !0
}
return t.thumbs.swiper.el.classList.add(t.params.thumbs
.thumbsContainerClass), t.thumbs.swiper.on("tap", l), !0
}

function c(e) {
const s = t.thumbs.swiper;
if (!s || s.destroyed) return;
const a = "auto" === s.params.slidesPerView ? s
.slidesPerViewDynamic() : s.params.slidesPerView;
let i = 1;
const r = t.params.thumbs.slideThumbActiveClass;
if (t.params.slidesPerView > 1 && !t.params.centeredSlides && (i = t
.params.slidesPerView), t.params.thumbs.multipleActiveThumbs ||
(i = 1), i = Math.floor(i), s.slides.forEach((e => e.classList
.remove(r))), s.params.loop || s.params.virtual && s.params
.virtual.enabled)
for (let e = 0; e < i; e += 1) h(s.slidesEl,
`[data-swiper-slide-index="${t.realIndex+e}"]`)
.forEach((e => {
e.classList.add(r)
}));
else
for (let e = 0; e < i; e += 1) s.slides[t.realIndex + e] && s
.slides[t.realIndex + e].classList.add(r);
const n = t.params.thumbs.autoScrollOffset,
l = n && !s.params.loop;
if (t.realIndex !== s.realIndex || l) {
const i = s.activeIndex;
let r, o;
if (s.params.loop) {
const e = s.slides.filter((e => e.getAttribute(
"data-swiper-slide-index") === `${t.realIndex}`))[0];
r = s.slides.indexOf(e), o = t.activeIndex > t.previousIndex ?
"next" : "prev"
} else r = t.realIndex, o = r > t.previousIndex ? "next" : "prev";
l && (r += "next" === o ? n : -1 * n), s.visibleSlidesIndexes && s
.visibleSlidesIndexes.indexOf(r) < 0 && (s.params
.centeredSlides ? r = r > i ? r - Math.floor(a / 2) + 1 : r +
Math.floor(a / 2) - 1 : r > i && s.params.slidesPerGroup, s
.slideTo(r, e ? 0 : void 0))
}
}
t.thumbs = {
swiper: null
}, i("beforeInit", (() => {
const {
thumbs: e
} = t.params;
if (e && e.swiper)
if ("string" == typeof e.swiper || e
.swiper instanceof HTMLElement) {
const s = a(),
i = () => {
const a = "string" == typeof e.swiper ? s
.querySelector(e.swiper) : e.swiper;
if (a && a.swiper) e.swiper = a.swiper, o(), c(!0);
else if (a) {
const s = i => {
e.swiper = i.detail[0], a.removeEventListener(
"init", s), o(), c(!0), e.swiper.update(), t
.update()
};
a.addEventListener("init", s)
}
return a
},
r = () => {
if (t.destroyed) return;
i() || requestAnimationFrame(r)
};
requestAnimationFrame(r)
} else o(), c(!0)
})), i("slideChange update resize observerUpdate", (() => {
c()
})), i("setTransition", ((e, s) => {
const a = t.thumbs.swiper;
a && !a.destroyed && a.setTransition(s)
})), i("beforeDestroy", (() => {
const e = t.thumbs.swiper;
e && !e.destroyed && n && e.destroy()
})), Object.assign(t.thumbs, {
init: o,
update: c
})
}, function (e) {
let {
swiper: t,
extendParams: s,
emit: a,
once: i
} = e;
s({
freeMode: {
enabled: !1,
momentum: !0,
momentumRatio: 1,
momentumBounce: !0,
momentumBounceRatio: 1,
momentumVelocityRatio: 1,
sticky: !1,
minimumVelocity: .02
}
}), Object.assign(t, {
freeMode: {
onTouchStart: function () {
if (t.params.cssMode) return;
const e = t.getTranslate();
t.setTranslate(e), t.setTransition(0), t.touchEventsData
.velocities.length = 0, t.freeMode.onTouchEnd({
currentPos: t.rtl ? t.translate : -t.translate
})
},
onTouchMove: function () {
if (t.params.cssMode) return;
const {
touchEventsData: e,
touches: s
} = t;
0 === e.velocities.length && e.velocities.push({
position: s[t.isHorizontal() ? "startX" : "startY"],
time: e.touchStartTime
}), e.velocities.push({
position: s[t.isHorizontal() ? "currentX" :
"currentY"],
time: l()
})
},
onTouchEnd: function (e) {
let {
currentPos: s
} = e;
if (t.params.cssMode) return;
const {
params: r,
wrapperEl: n,
rtlTranslate: o,
snapGrid: d,
touchEventsData: c
} = t, p = l() - c.touchStartTime;
if (s < -t.minTranslate()) t.slideTo(t.activeIndex);
else if (s > -t.maxTranslate()) t.slides.length < d
.length ? t.slideTo(d.length - 1) : t.slideTo(t.slides
.length - 1);
else {
if (r.freeMode.momentum) {
if (c.velocities.length > 1) {
const e = c.velocities.pop(),
s = c.velocities.pop(),
a = e.position - s.position,
i = e.time - s.time;
t.velocity = a / i, t.velocity /= 2, Math.abs(t
.velocity) < r.freeMode.minimumVelocity && (t
.velocity = 0), (i > 150 || l() - e.time >
300) && (t.velocity = 0)
} else t.velocity = 0;
t.velocity *= r.freeMode.momentumVelocityRatio, c
.velocities.length = 0;
let e = 1e3 * r.freeMode.momentumRatio;
const s = t.velocity * e;
let p = t.translate + s;
o && (p = -p);
let u, m = !1;
const h = 20 * Math.abs(t.velocity) * r.freeMode
.momentumBounceRatio;
let f;
if (p < t.maxTranslate()) r.freeMode.momentumBounce ?
(p + t.maxTranslate() < -h && (p = t
.maxTranslate() - h), u = t.maxTranslate(), m = !
0, c.allowMomentumBounce = !0) : p = t
.maxTranslate(), r.loop && r.centeredSlides && (
f = !0);
else if (p > t.minTranslate()) r.freeMode
.momentumBounce ? (p - t.minTranslate() > h && (p =
t.minTranslate() + h), u = t.minTranslate(),
m = !0, c.allowMomentumBounce = !0) : p = t
.minTranslate(), r.loop && r.centeredSlides && (
f = !0);
else if (r.freeMode.sticky) {
let e;
for (let t = 0; t < d.length; t += 1)
if (d[t] > -p) {
e = t;
break
} p = Math.abs(d[e] - p) < Math.abs(d[e - 1] -
p) || "next" === t.swipeDirection ? d[e] : d[e -
1], p = -p
}
if (f && i("transitionEnd", (() => {
t.loopFix()
})), 0 !== t.velocity) {
if (e = o ? Math.abs((-p - t.translate) / t
.velocity) : Math.abs((p - t.translate) / t
.velocity), r.freeMode.sticky) {
const s = Math.abs((o ? -p : p) - t.translate),
a = t.slidesSizesGrid[t.activeIndex];
e = s < a ? r.speed : s < 2 * a ? 1.5 * r.speed :
2.5 * r.speed
}
} else if (r.freeMode.sticky) return void t
.slideToClosest();
r.freeMode.momentumBounce && m ? (t.updateProgress(u),
t.setTransition(e), t.setTranslate(p), t
.transitionStart(!0, t.swipeDirection), t
.animating = !0, y(n, (() => {
t && !t.destroyed && c
.allowMomentumBounce && (a(
"momentumBounce"), t.setTransition(r
.speed), setTimeout((() => {
t.setTranslate(u), y(n, (() => {
t && !t.destroyed && t
.transitionEnd()
}))
}), 0))
}))) : t.velocity ? (a(
"_freeModeNoMomentumRelease"), t.updateProgress(
p), t.setTransition(e), t.setTranslate(p), t
.transitionStart(!0, t.swipeDirection), t
.animating || (t.animating = !0, y(n, (() => {
t && !t.destroyed && t.transitionEnd()
})))) : t.updateProgress(p), t
.updateActiveIndex(), t.updateSlidesClasses()
} else {
if (r.freeMode.sticky) return void t.slideToClosest();
r.freeMode && a("_freeModeNoMomentumRelease")
}(!r.freeMode.momentum || p >= r.longSwipesMs) && (t
.updateProgress(), t.updateActiveIndex(), t
.updateSlidesClasses())
}
}
}
})
}, function (e) {
let t, s, a, {
swiper: i,
extendParams: r
} = e;
r({
grid: {
rows: 1,
fill: "column"
}
});
const n = () => {
let e = i.params.spaceBetween;
return "string" == typeof e && e.indexOf("%") >= 0 ? e =
parseFloat(e.replace("%", "")) / 100 * i.size : "string" ==
typeof e && (e = parseFloat(e)), e
};
i.grid = {
initSlides: e => {
const {
slidesPerView: r
} = i.params, {
rows: n,
fill: l
} = i.params.grid;
a = Math.floor(e / n), t = Math.floor(e / n) === e / n ? e :
Math.ceil(e / n) * n, "auto" !== r && "row" === l && (t =
Math.max(t, r * n)), s = t / n
},
updateSlide: (e, r, l, o) => {
const {
slidesPerGroup: d
} = i.params, c = n(), {
rows: p,
fill: u
} = i.params.grid;
let m, h, f;
if ("row" === u && d > 1) {
const s = Math.floor(e / (d * p)),
a = e - p * d * s,
i = 0 === s ? d : Math.min(Math.ceil((l - s * p * d) / p),
d);
f = Math.floor(a / i), h = a - f * i + s * d, m = h + f *
t / p, r.style.order = m
} else "column" === u ? (h = Math.floor(e / p), f = e - h * p,
(h > a || h === a && f === p - 1) && (f += 1, f >= p && (
f = 0, h += 1))) : (f = Math.floor(e / s), h = e - f *
s);
r.row = f, r.column = h, r.style[o("margin-top")] = 0 !== f ?
c && `${c}px` : ""
},
updateWrapperSize: (e, s, a) => {
const {
centeredSlides: r,
roundLengths: l
} = i.params, o = n(), {
rows: d
} = i.params.grid;
if (i.virtualSize = (e + o) * t, i.virtualSize = Math.ceil(i
.virtualSize / d) - o, i.wrapperEl.style[a("width")] =
`${i.virtualSize+o}px`, r) {
const e = [];
for (let t = 0; t < s.length; t += 1) {
let a = s[t];
l && (a = Math.floor(a)), s[t] < i.virtualSize + s[0] && e
.push(a)
}
s.splice(0, s.length), s.push(...e)
}
}
}
}, function (e) {
let {
swiper: t
} = e;
Object.assign(t, {
appendSlide: te.bind(t),
prependSlide: se.bind(t),
addSlide: ae.bind(t),
removeSlide: ie.bind(t),
removeAllSlides: re.bind(t)
})
}, function (e) {
let {
swiper: t,
extendParams: s,
on: a
} = e;
s({
fadeEffect: {
crossFade: !1
}
}), ne({
effect: "fade",
swiper: t,
on: a,
setTranslate: () => {
const {
slides: e
} = t;
t.params.fadeEffect;
for (let s = 0; s < e.length; s += 1) {
const e = t.slides[s];
let a = -e.swiperSlideOffset;
t.params.virtualTranslate || (a -= t.translate);
let i = 0;
t.isHorizontal() || (i = a, a = 0);
const r = t.params.fadeEffect.crossFade ? Math.max(1 -
Math.abs(e.progress), 0) : 1 + Math.min(Math.max(e
.progress, -1), 0),
n = le(0, e);
n.style.opacity = r, n.style.transform =
`translate3d(${a}px, ${i}px, 0px)`
}
},
setTransition: e => {
const s = t.slides.map((e => m(e)));
s.forEach((t => {
t.style.transitionDuration = `${e}ms`
})), oe({
swiper: t,
duration: e,
transformElements: s,
allSlides: !0
})
},
overwriteParams: () => ({
slidesPerView: 1,
slidesPerGroup: 1,
watchSlidesProgress: !0,
spaceBetween: 0,
virtualTranslate: !t.params.cssMode
})
})
}, function (e) {
let {
swiper: t,
extendParams: s,
on: a
} = e;
s({
cubeEffect: {
slideShadows: !0,
shadow: !0,
shadowOffset: 20,
shadowScale: .94
}
});
const i = (e, t, s) => {
let a = s ? e.querySelector(".swiper-slide-shadow-left") : e
.querySelector(".swiper-slide-shadow-top"),
i = s ? e.querySelector(".swiper-slide-shadow-right") : e
.querySelector(".swiper-slide-shadow-bottom");
a || (a = f("div", (
"swiper-slide-shadow-cube swiper-slide-shadow-" + (s ?
"left" : "top"))
.split(" ")), e.append(a)), i || (i = f("div", (
"swiper-slide-shadow-cube swiper-slide-shadow-" + (s ?
"right" : "bottom"))
.split(" ")), e.append(i)), a && (a.style.opacity = Math.max(-
t, 0)), i && (i.style.opacity = Math.max(t, 0))
};
ne({
effect: "cube",
swiper: t,
on: a,
setTranslate: () => {
const {
el: e,
wrapperEl: s,
slides: a,
width: r,
height: n,
rtlTranslate: l,
size: o,
browser: d
} = t, c = t.params.cubeEffect, p = t.isHorizontal(), u = t
.virtual && t.params.virtual.enabled;
let m, h = 0;
c.shadow && (p ? (m = t.wrapperEl.querySelector(
".swiper-cube-shadow"), m || (m = f("div",
"swiper-cube-shadow"), t.wrapperEl.append(m)), m
.style.height = `${r}px`) : (m = e.querySelector(
".swiper-cube-shadow"), m || (m = f("div",
"swiper-cube-shadow"), e.append(m))));
for (let e = 0; e < a.length; e += 1) {
const t = a[e];
let s = e;
u && (s = parseInt(t.getAttribute(
"data-swiper-slide-index"), 10));
let r = 90 * s,
n = Math.floor(r / 360);
l && (r = -r, n = Math.floor(-r / 360));
const d = Math.max(Math.min(t.progress, 1), -1);
let m = 0,
f = 0,
g = 0;
s % 4 == 0 ? (m = 4 * -n * o, g = 0) : (s - 1) % 4 == 0 ?
(m = 0, g = 4 * -n * o) : (s - 2) % 4 == 0 ? (m = o +
4 * n * o, g = o) : (s - 3) % 4 == 0 && (m = -o, g =
3 * o + 4 * o * n), l && (m = -m), p || (f = m, m =
0);
const v =
`rotateX(${p?0:-r}deg) rotateY(${p?r:0}deg) translate3d(${m}px, ${f}px, ${g}px)`;
d <= 1 && d > -1 && (h = 90 * s + 90 * d, l && (h = 90 * -
s - 90 * d)), t.style.transform = v, c.slideShadows &&
i(t, d, p)
}
if (s.style.transformOrigin = `50% 50% -${o/2}px`, s.style[
"-webkit-transform-origin"] = `50% 50% -${o/2}px`, c
.shadow)
if (p) m.style.transform =
`translate3d(0px, ${r/2+c.shadowOffset}px, ${-r/2}px) rotateX(90deg) rotateZ(0deg) scale(${c.shadowScale})`;
else {
const e = Math.abs(h) - 90 * Math.floor(Math.abs(h) /
90),
t = 1.5 - (Math.sin(2 * e * Math.PI / 360) / 2 + Math
.cos(2 * e * Math.PI / 360) / 2),
s = c.shadowScale,
a = c.shadowScale / t,
i = c.shadowOffset;
m.style.transform =
`scale3d(${s}, 1, ${a}) translate3d(0px, ${n/2+i}px, ${-n/2/a}px) rotateX(-90deg)`
} const g = (d.isSafari || d.isWebView) && d
.needPerspectiveFix ? -o / 2 : 0;
s.style.transform =
`translate3d(0px,0,${g}px) rotateX(${t.isHorizontal()?0:h}deg) rotateY(${t.isHorizontal()?-h:0}deg)`,
s.style.setProperty("--swiper-cube-translate-z", `${g}px`)
},
setTransition: e => {
const {
el: s,
slides: a
} = t;
if (a.forEach((t => {
t.style.transitionDuration = `${e}ms`, t
.querySelectorAll(
".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
)
.forEach((t => {
t.style.transitionDuration = `${e}ms`
}))
})), t.params.cubeEffect.shadow && !t.isHorizontal()) {
const t = s.querySelector(".swiper-cube-shadow");
t && (t.style.transitionDuration = `${e}ms`)
}
},
recreateShadows: () => {
const e = t.isHorizontal();
t.slides.forEach((t => {
const s = Math.max(Math.min(t.progress, 1), -1);
i(t, s, e)
}))
},
getEffectParams: () => t.params.cubeEffect,
perspective: () => !0,
overwriteParams: () => ({
slidesPerView: 1,
slidesPerGroup: 1,
watchSlidesProgress: !0,
resistanceRatio: 0,
spaceBetween: 0,
centeredSlides: !1,
virtualTranslate: !0
})
})
}, function (e) {
let {
swiper: t,
extendParams: s,
on: a
} = e;
s({
flipEffect: {
slideShadows: !0,
limitRotation: !0
}
});
const i = (e, s) => {
let a = t.isHorizontal() ? e.querySelector(
".swiper-slide-shadow-left") : e.querySelector(
".swiper-slide-shadow-top"),
i = t.isHorizontal() ? e.querySelector(
".swiper-slide-shadow-right") : e.querySelector(
".swiper-slide-shadow-bottom");
a || (a = de("flip", e, t.isHorizontal() ? "left" : "top")), i ||
(i = de("flip", e, t.isHorizontal() ? "right" : "bottom")), a &&
(a.style.opacity = Math.max(-s, 0)), i && (i.style.opacity =
Math.max(s, 0))
};
ne({
effect: "flip",
swiper: t,
on: a,
setTranslate: () => {
const {
slides: e,
rtlTranslate: s
} = t, a = t.params.flipEffect;
for (let r = 0; r < e.length; r += 1) {
const n = e[r];
let l = n.progress;
t.params.flipEffect.limitRotation && (l = Math.max(Math
.min(n.progress, 1), -1));
const o = n.swiperSlideOffset;
let d = -180 * l,
c = 0,
p = t.params.cssMode ? -o - t.translate : -o,
u = 0;
t.isHorizontal() ? s && (d = -d) : (u = p, p = 0, c = -d,
d = 0), n.style.zIndex = -Math.abs(Math.round(l)) + e
.length, a.slideShadows && i(n, l);
const m =
`translate3d(${p}px, ${u}px, 0px) rotateX(${c}deg) rotateY(${d}deg)`;
le(0, n)
.style.transform = m
}
},
setTransition: e => {
const s = t.slides.map((e => m(e)));
s.forEach((t => {
t.style.transitionDuration = `${e}ms`, t
.querySelectorAll(
".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
)
.forEach((t => {
t.style.transitionDuration = `${e}ms`
}))
})), oe({
swiper: t,
duration: e,
transformElements: s
})
},
recreateShadows: () => {
t.params.flipEffect, t.slides.forEach((e => {
let s = e.progress;
t.params.flipEffect.limitRotation && (s = Math.max(
Math.min(e.progress, 1), -1)), i(e, s)
}))
},
getEffectParams: () => t.params.flipEffect,
perspective: () => !0,
overwriteParams: () => ({
slidesPerView: 1,
slidesPerGroup: 1,
watchSlidesProgress: !0,
spaceBetween: 0,
virtualTranslate: !t.params.cssMode
})
})
}, function (e) {
let {
swiper: t,
extendParams: s,
on: a
} = e;
s({
coverflowEffect: {
rotate: 50,
stretch: 0,
depth: 100,
scale: 1,
modifier: 1,
slideShadows: !0
}
}), ne({
effect: "coverflow",
swiper: t,
on: a,
setTranslate: () => {
const {
width: e,
height: s,
slides: a,
slidesSizesGrid: i
} = t, r = t.params.coverflowEffect, n = t.isHorizontal(),
l = t.translate, o = n ? e / 2 - l : s / 2 - l, d = n ? r
.rotate : -r.rotate, c = r.depth;
for (let e = 0, t = a.length; e < t; e += 1) {
const t = a[e],
s = i[e],
l = (o - t.swiperSlideOffset - s / 2) / s,
p = "function" == typeof r.modifier ? r.modifier(l) :
l * r.modifier;
let u = n ? d * p : 0,
m = n ? 0 : d * p,
h = -c * Math.abs(p),
f = r.stretch;
"string" == typeof f && -1 !== f.indexOf("%") && (f =
parseFloat(r.stretch) / 100 * s);
let g = n ? 0 : f * p,
v = n ? f * p : 0,
w = 1 - (1 - r.scale) * Math.abs(p);
Math.abs(v) < .001 && (v = 0), Math.abs(g) < .001 && (g =
0), Math.abs(h) < .001 && (h = 0), Math.abs(u) <
.001 && (u = 0), Math.abs(m) < .001 && (m = 0), Math
.abs(w) < .001 && (w = 0);
const b =
`translate3d(${v}px,${g}px,${h}px)  rotateX(${m}deg) rotateY(${u}deg) scale(${w})`;
if (le(0, t)
.style.transform = b, t.style.zIndex = 1 - Math.abs(Math
.round(p)), r.slideShadows) {
let e = n ? t.querySelector(
".swiper-slide-shadow-left") : t.querySelector(
".swiper-slide-shadow-top"),
s = n ? t.querySelector(
".swiper-slide-shadow-right") : t.querySelector(
".swiper-slide-shadow-bottom");
e || (e = de("coverflow", t, n ? "left" : "top")), s ||
(s = de("coverflow", t, n ? "right" : "bottom")), e &&
(e.style.opacity = p > 0 ? p : 0), s && (s.style
.opacity = -p > 0 ? -p : 0)
}
}
},
setTransition: e => {
t.slides.map((e => m(e)))
.forEach((t => {
t.style.transitionDuration = `${e}ms`, t
.querySelectorAll(
".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
)
.forEach((t => {
t.style.transitionDuration = `${e}ms`
}))
}))
},
perspective: () => !0,
overwriteParams: () => ({
watchSlidesProgress: !0
})
})
}, function (e) {
let {
swiper: t,
extendParams: s,
on: a
} = e;
s({
creativeEffect: {
limitProgress: 1,
shadowPerProgress: !1,
progressMultiplier: 1,
perspective: !0,
prev: {
translate: [0, 0, 0],
rotate: [0, 0, 0],
opacity: 1,
scale: 1
},
next: {
translate: [0, 0, 0],
rotate: [0, 0, 0],
opacity: 1,
scale: 1
}
}
});
const i = e => "string" == typeof e ? e : `${e}px`;
ne({
effect: "creative",
swiper: t,
on: a,
setTranslate: () => {
const {
slides: e,
wrapperEl: s,
slidesSizesGrid: a
} = t, r = t.params.creativeEffect, {
progressMultiplier: n
} = r, l = t.params.centeredSlides;
if (l) {
const e = a[0] / 2 - t.params.slidesOffsetBefore || 0;
s.style.transform = `translateX(calc(50% - ${e}px))`
}
for (let s = 0; s < e.length; s += 1) {
const a = e[s],
o = a.progress,
d = Math.min(Math.max(a.progress, -r.limitProgress), r
.limitProgress);
let c = d;
l || (c = Math.min(Math.max(a.originalProgress, -r
.limitProgress), r.limitProgress));
const p = a.swiperSlideOffset,
u = [t.params.cssMode ? -p - t.translate : -p, 0, 0],
m = [0, 0, 0];
let h = !1;
t.isHorizontal() || (u[1] = u[0], u[0] = 0);
let f = {
translate: [0, 0, 0],
rotate: [0, 0, 0],
scale: 1,
opacity: 1
};
d < 0 ? (f = r.next, h = !0) : d > 0 && (f = r.prev, h = !
0), u.forEach(((e, t) => {
u[t] =
`calc(${e}px + (${i(f.translate[t])} * ${Math.abs(d*n)}))`
})), m.forEach(((e, t) => {
m[t] = f.rotate[t] * Math.abs(d * n)
})), a.style.zIndex = -Math.abs(Math.round(o)) + e
.length;
const g = u.join(", "),
v =
`rotateX(${m[0]}deg) rotateY(${m[1]}deg) rotateZ(${m[2]}deg)`,
w = c < 0 ? `scale(${1+(1-f.scale)*c*n})` :
`scale(${1-(1-f.scale)*c*n})`,
b = c < 0 ? 1 + (1 - f.opacity) * c * n : 1 - (1 - f
.opacity) * c * n,
y = `translate3d(${g}) ${v} ${w}`;
if (h && f.shadow || !h) {
let e = a.querySelector(".swiper-slide-shadow");
if (!e && f.shadow && (e = de("creative", a)), e) {
const t = r.shadowPerProgress ? d * (1 / r
.limitProgress) : d;
e.style.opacity = Math.min(Math.max(Math.abs(t), 0),
1)
}
}
const E = le(0, a);
E.style.transform = y, E.style.opacity = b, f.origin && (E
.style.transformOrigin = f.origin)
}
},
setTransition: e => {
const s = t.slides.map((e => m(e)));
s.forEach((t => {
t.style.transitionDuration = `${e}ms`, t
.querySelectorAll(".swiper-slide-shadow")
.forEach((t => {
t.style.transitionDuration = `${e}ms`
}))
})), oe({
swiper: t,
duration: e,
transformElements: s,
allSlides: !0
})
},
perspective: () => t.params.creativeEffect.perspective,
overwriteParams: () => ({
watchSlidesProgress: !0,
virtualTranslate: !t.params.cssMode
})
})
}, function (e) {
let {
swiper: t,
extendParams: s,
on: a
} = e;
s({
cardsEffect: {
slideShadows: !0,
rotate: !0,
perSlideRotate: 2,
perSlideOffset: 8
}
}), ne({
effect: "cards",
swiper: t,
on: a,
setTranslate: () => {
const {
slides: e,
activeIndex: s,
rtlTranslate: a
} = t, i = t.params.cardsEffect, {
startTranslate: r,
isTouched: n
} = t.touchEventsData, l = a ? -t.translate : t.translate;
for (let o = 0; o < e.length; o += 1) {
const d = e[o],
c = d.progress,
p = Math.min(Math.max(c, -4), 4);
let u = d.swiperSlideOffset;
t.params.centeredSlides && !t.params.cssMode && (t
.wrapperEl.style.transform =
`translateX(${t.minTranslate()}px)`), t.params
.centeredSlides && t.params.cssMode && (u -= e[0]
.swiperSlideOffset);
let m = t.params.cssMode ? -u - t.translate : -u,
h = 0;
const f = -100 * Math.abs(p);
let g = 1,
v = -i.perSlideRotate * p,
w = i.perSlideOffset - .75 * Math.abs(p);
const b = t.virtual && t.params.virtual.enabled ? t
.virtual.from + o : o,
y = (b === s || b === s - 1) && p > 0 && p < 1 && (n ||
t.params.cssMode) && l < r,
E = (b === s || b === s + 1) && p < 0 && p > -1 && (n ||
t.params.cssMode) && l > r;
if (y || E) {
const e = (1 - Math.abs((Math.abs(p) - .5) / .5)) ** .5;
v += -28 * p * e, g += -.5 * e, w += 96 * e, h = -25 *
e * Math.abs(p) + "%"
}
if (m = p < 0 ?
`calc(${m}px ${a?"-":"+"} (${w*Math.abs(p)}%))` : p >
0 ? `calc(${m}px ${a?"-":"+"} (-${w*Math.abs(p)}%))` :
`${m}px`, !t.isHorizontal()) {
const e = h;
h = m, m = e
}
const x = p < 0 ? "" + (1 + (1 - g) * p) : "" + (1 - (1 -
g) * p),
S =
`\n        translate3d(${m}, ${h}, ${f}px)\n        rotateZ(${i.rotate?a?-v:v:0}deg)\n        scale(${x})\n      `;
if (i.slideShadows) {
let e = d.querySelector(".swiper-slide-shadow");
e || (e = de("cards", d)), e && (e.style.opacity = Math
.min(Math.max((Math.abs(p) - .5) / .5, 0), 1))
}
d.style.zIndex = -Math.abs(Math.round(c)) + e.length;
le(0, d)
.style.transform = S
}
},
setTransition: e => {
const s = t.slides.map((e => m(e)));
s.forEach((t => {
t.style.transitionDuration = `${e}ms`, t
.querySelectorAll(".swiper-slide-shadow")
.forEach((t => {
t.style.transitionDuration = `${e}ms`
}))
})), oe({
swiper: t,
duration: e,
transformElements: s
})
},
perspective: () => !0,
overwriteParams: () => ({
watchSlidesProgress: !0,
virtualTranslate: !t.params.cssMode
})
})
}];
return Q.use(ce), Q
}();
//# sourceMappingURL=swiper-bundle.js.map
