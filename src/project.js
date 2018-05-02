require = function c(i, u, s) { 
  function l(o, t) {
    if (!u[o]) {
      if (!i[o]) {
        var e = "function" == typeof require && require; 
        if (!t && e) return e(o, !0); 
        if (p) return p(o, !0); var n = new Error("Cannot find module '" + o + "'"); 
        throw n.code = "MODULE_NOT_FOUND", n 
      } 
      var r = u[o] = { exports: {} };
      i[o][0].call(r.exports, function (t) { var e = i[o][1][t]; return l(e || t) }, r, r.exports, c, i, u, s) 
    } 
    return u[o].exports 
  } 
  for (var p = "function" == typeof require && require, t = 0; t < s.length; t++)l(s[t]); 
  return l 
}({
  HelloWorld: [function (t, e, o) { "use strict"; cc._RF.push(e, "280c3rsZJJKnZ9RqbALVwtK", "HelloWorld"), cc.Class({ extends: cc.Component, properties: { label: { default: null, type: cc.Label },        text: "Hello, World!" }, onLoad: function () { this.label.string = this.text }, pause: function () { this.label.stop() }, update: function (t) { } }), cc._RF.pop() }, {}],
  Mover: [function (t, e, o) {
    "use strict"; 
    cc._RF.push(e, "911e4ISH8VILKr9iEEyTwHl", "Mover"), 
    cc.Class({
      extends: cc.Component, 
      properties: { 
        moveDuration: 0
        }, 
      start: function () { }, 
      setMoveAction: function () { var t = cc.moveBy(this.moveDuration, cc.p(400, 100)), e = cc.moveBy(this.moveDuration, cc.p(-400, -100)); return cc.repeatForever(cc.sequence(t, e)) }, 
      onLoad: function () {
        this.jumpAction = this.setMoveAction();
        this.node.runAction(this.jumpAction); 
        let reocrdAndAsr = require('util/record-and-asr.js');
        reocrdAndAsr(this); 
      }, 
      callback: function(ss) { if (ss=='stop') this.stop();},
      stop: function () { this.node.stopAllActions() } 
      }), 
      cc._RF.pop() 
    }, {}] 
  }, {}, ["HelloWorld", "Mover"]);