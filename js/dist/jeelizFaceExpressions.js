/**
* Jeeliz Weboji - https://github.com/jeeliz/jeelizWeboji
*
* Copyright 2020 WebAR.rocks ( https://webar.rocks )
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

var JEELIZFACEEXPRESSIONS = (function () {
    function ca() { this.Ea = !1; this.ha = null; this.Qd = void 0; this.ga = 1; this.Nc = this.ie = 0; this.za = null } function ea(a) { if (a.Ea) throw new TypeError("Generator is already running"); a.Ea = !0 } ca.prototype.Fa = function (a) { this.Qd = a }; ca.prototype.Ha = function (a) { this.za = { ue: a, Se: !0 }; this.ga = this.ie || this.Nc }; ca.prototype.return = function (a) { this.za = { return: a }; this.ga = this.Nc }; function oa(a) { this.o = new ca; this.ff = a }
    oa.prototype.Fa = function (a) { ea(this.o); if (this.o.ha) return pa(this, this.o.ha.next, a, this.o.Fa); this.o.Fa(a); return ra(this) }; function ta(a, d) { ea(a.o); var g = a.o.ha; if (g) return pa(a, "return" in g ? g["return"] : function (h) { return { value: h, done: !0 } }, d, a.o.return); a.o.return(d); return ra(a) } oa.prototype.Ha = function (a) { ea(this.o); if (this.o.ha) return pa(this, this.o.ha["throw"], a, this.o.Fa); this.o.Ha(a); return ra(this) };
    function pa(a, d, g, h) { try { var t = d.call(a.o.ha, g); if (!(t instanceof Object)) throw new TypeError("Iterator result " + t + " is not an object"); if (!t.done) return a.o.Ea = !1, t; var l = t.value } catch (v) { return a.o.ha = null, a.o.Ha(v), ra(a) } a.o.ha = null; h.call(a.o, l); return ra(a) }
    function ra(a) { for (; a.o.ga;)try { var d = a.ff(a.o); if (d) return a.o.Ea = !1, { value: d.value, done: !1 } } catch (g) { a.o.Qd = void 0, a.o.Ha(g) } a.o.Ea = !1; if (a.o.za) { d = a.o.za; a.o.za = null; if (d.Se) throw d.ue; return { value: d.return, done: !0 } } return { value: void 0, done: !0 } } function va(a) { this.next = function (d) { return a.Fa(d) }; this.throw = function (d) { return a.Ha(d) }; this.return = function (d) { return ta(a, d) }; this[Symbol.iterator] = function () { return this } }
    function Ca(a) { function d(h) { return a.next(h) } function g(h) { return a.throw(h) } return new Promise(function (h, t) { function l(v) { v.done ? h(v.value) : Promise.resolve(v.value).then(d, g).then(l, t) } l(a.next()) }) } function Ea(a) { var d = new XMLHttpRequest; d.open("GET", b.uc + b.neuralNetworkPath, !0); d.withCredentials = !1; d.onreadystatechange = function () { 4 !== d.readyState || 200 !== d.status && 0 !== d.status || a(d.responseText) }; d.send() }
    function Fa(a, d) { if (0 === d || "object" !== typeof a) return a; a = Object.assign({}, a); d = void 0 === d || -1 === d ? -1 : d - 1; for (var g in a) a[g] = Fa(a[g], d); return a } function Ja(a, d, g) { return Math.min(Math.max((g - a) / (d - a), 0), 1) }
    function Ka(a) { switch (a) { case "relu": return "gl_FragColor=max(vec4(0.,0.,0.,0.),gl_FragColor);"; case "elu": return "gl_FragColor=mix(exp(-abs(gl_FragColor))-vec4(1.,1.,1.,1.),gl_FragColor,step(0.,gl_FragColor));"; case "elu01": return "gl_FragColor=mix(0.1*exp(-abs(gl_FragColor))-vec4(0.1,0.1,0.1,0.1),gl_FragColor,step(0.,gl_FragColor));"; case "arctan": return "gl_FragColor=atan(3.14159265359*texture2D(u0,vUV))/3.14159265359;"; case "copy": return ""; default: return !1 } }
    function La(a, d) { var g = d % 8; return a[(d - g) / 8] >> 7 - g & 1 }
    function Pa(a) {
        var d = JSON.parse(a); a = d.ne; var g = d.nf, h = d.n; var t = "undefined" === typeof btoa ? Buffer.from(d.data, "base64").toString("latin1") : atob(d.data); var l = t.length; d = new Uint8Array(l); for (var v = 0; v < l; ++v)d[v] = t.charCodeAt(v); t = new Float32Array(h); l = new Float32Array(g); v = a + g + 1; for (var k = 0; k < h; ++k) {
            for (var n = v * k, p = 0 === La(d, n) ? 1 : -1, C = n + 1, E = 1, m = 0, q = C + a - 1; q >= C; --q)m += E * La(d, q), E *= 2; C = m; n = n + 1 + a; E = l.length; m = 0; for (q = n; q < n + E; ++q)l[m] = La(d, q), ++m; for (E = n = 0; E < g; ++E)n += l[E] * Math.pow(2, -E - 1); t[k] = 0 === n && 0 ===
                C ? 0 : p * (1 + n) * Math.pow(2, 1 + C - Math.pow(2, a - 1))
        } return t
    }
    var I = function () {
        function a(u, e, z) { e = u.createShader(e); u.shaderSource(e, z); u.compileShader(e); return u.getShaderParameter(e, u.COMPILE_STATUS) ? e : !1 } function d(u, e, z) { e = a(u, u.VERTEX_SHADER, e); z = a(u, u.FRAGMENT_SHADER, z); u === G && k.push(e, z); var K = u.createProgram(); u.attachShader(K, e); u.attachShader(K, z); u.linkProgram(K); return K } function g(u) { return ["float", "sampler2D", "int"].map(function (e) { return "precision " + u + " " + e + ";\n" }).join("") } function h(u, e) {
            e.A = e.A ? !0 : !1; if (!e.A) {
                e.wa = e.wa || "precision lowp float;attribute vec2 a0;varying vec2 vv0;void main(){gl_Position=vec4(a0,0.,1.),vv0=a0*.5+vec2(.5,.5);}";
                e.La = e.La || ["a0"]; e.Aa = e.Aa || [2]; e.precision = e.precision || m; e.id = C++; void 0 !== e.Dd && (e.Dd.forEach(function (f, A) { e.h = e.h.replace(f, e.jb[A]) }), e.Dd.splice(0)); e.pc = 0; e.Aa.forEach(function (f) { e.pc += 4 * f }); var z = g(e.precision); e.ma = d(u, z + e.wa, z + e.h); e.v = {}; e.i.forEach(function (f) { e.v[f] = u.getUniformLocation(e.ma, f) }); e.attributes = {}; e.Ba = []; e.La.forEach(function (f) { var A = u.getAttribLocation(e.ma, f); e.attributes[f] = A; e.Ba.push(A) }); if (e.j) {
                    u.useProgram(e.ma); p = e; n = e.id; for (var K in e.j) u.uniform1i(e.v[K],
                        e.j[K])
                } e.la = !0
            }
        } function t(u) { Qa.Bf(P); n !== u.id && (P.P(), n = u.id, p = u, G.useProgram(u.ma), u.Ba.forEach(function (e) { 0 !== e && G.enableVertexAttribArray(e) })) } function l(u, e, z) { h(u, e, z); u.useProgram(e.ma); u.enableVertexAttribArray(0); n = -1; return p = e } function v() { return { h: "uniform sampler2D u1;varying vec2 vv0;void main(){gl_FragColor=texture2D(u1,vv0);}", i: ["u1"], j: { u1: 0 } } } var k = [], n = -1, p = null, C = 0, E = !1, m = "highp", q = ["u1"], D = ["u0"], w = { u1: 0 }, c = { u0: 0 }, F = { u1: 0, u2: 1 }, M = { u3: 0 }, J = {
            s0: v(), s1: {
                h: "uniform sampler2D u1;varying vec2 vv0;void main(){gl_FragColor=texture2D(u1,vv0);}",
                i: q, j: w, precision: "lowp"
            }, s2: { h: "uniform sampler2D u1,u2;varying vec2 vv0;void main(){vec4 a=texture2D(u2,vv0),b=texture2D(u1,vv0);gl_FragColor=a*b;}", i: ["u1", "u2"], j: F }, s3: { h: "uniform sampler2D u1;uniform vec2 u4,u5;varying vec2 vv0;void main(){vec2 a=vv0*u4+u5;gl_FragColor=texture2D(u1,a);}", i: ["u1", "u4", "u5"], j: w, A: !0 }, s4: { h: "uniform sampler2D u1;varying vec2 vv0;const vec4 f=vec4(1.,1.,1.,1.);void main(){vec4 a=texture2D(u1,vv0);gl_FragColor=a.r*f;}", i: q, j: w }, s5: {
                h: "uniform sampler2D u1,u2;varying vec2 vv0;const vec4 f=vec4(1.,1.,1.,1.);void main(){vec4 a=texture2D(u2,vv0),b=texture2D(u1,vv0);gl_FragColor=a.a*b.r*f;}",
                i: ["u1", "u2"], j: F
            }, s6: { h: "uniform sampler2D u1;varying vec2 vv0;void main(){gl_FragColor=texture2D(u1,vec2(1.-vv0.x,vv0.y));}", i: q, j: w }, s7: { h: "uniform sampler2D u1;varying vec2 vv0;void main(){gl_FragColor=texture2D(u1,vec2(vv0.x,1.-vv0.y));}", i: q, j: w }, s8: { h: "uniform sampler2D u0;uniform float u4;varying vec2 vv0;void main(){vec4 a=texture2D(u0,vv0);gl_FragColor=a*u4;}", i: ["u0", "u4"], j: c }, s9: {
                h: "uniform sampler2D u0;uniform float u4;varying vec2 vv0;const vec4 f=vec4(.25,.25,.25,.25),g=vec4(1.,1.,1.,1.);void main(){vec4 a=texture2D(u0,vv0);float b=dot(a*u4,f);gl_FragColor=b*g;}",
                i: ["u0", "u4"], j: c
            }, s10: { h: "uniform sampler2D u1;varying vec2 vv0;const vec4 e=vec4(1.,1.,1.,1.);void main(){float a=.25*dot(e,texture2D(u1,vv0));gl_FragColor=a*e;}", i: q, j: w }, s11: { h: "uniform sampler2D u1,u6;uniform float u7;const vec4 f=vec4(1.,1.,1.,1.);varying vec2 vv0;void main(){vec4 a=texture2D(u1,vv0),b=texture2D(u6,vv0);gl_FragColor=mix(b,a,u7*f);}", i: ["u1", "u6", "u7"], j: { u1: 0, u6: 1 } }, s12: {
                h: "uniform sampler2D u1;uniform vec2 u8;varying vec2 vv0;void main(){gl_FragColor=.25*(texture2D(u1,vv0+u8)+texture2D(u1,vv0+u8*vec2(1.,-1.))+texture2D(u1,vv0+u8*vec2(-1.,-1.))+texture2D(u1,vv0+u8*vec2(-1.,1.)));}",
                i: ["u1", "u8"], j: w
            }, s13: {
                h: "uniform sampler2D u1;uniform vec4 u9;varying vec2 vv0;float g(float a,float b){a=floor(a)+.5;return floor(a/exp2(b));}float h(float a,float b){return floor(a*exp2(b)+.5);}float i(float a,float b){return mod(a,h(1.,b));}float e(float c,float a,float b){a=floor(a+.5),b=floor(b+.5);return i(g(c,a),b-a);}vec4 j(float a){if(a==0.)return vec4(0.,0.,0.,0.);float k=128.*step(a,0.);a=abs(a);float c=floor(log2(a)),l=c+127.,b=(a/exp2(c)-1.)*8388608.,d=l/2.,m=fract(d)*2.,n=floor(d),o=e(b,0.,8.),p=e(b,8.,16.),q=m*128.+e(b,16.,23.),r=k+n;return vec4(o,p,q,r)/255.;}void main(){float a=dot(texture2D(u1,vv0),u9);gl_FragColor=j(a);}",
                i: ["u1", "u9"], j: w
            }, s14: { h: "uniform sampler2D u0;varying vec2 vv0;const vec4 e=vec4(1.,1.,1.,1.);void main(){vec4 a=texture2D(u0,vv0),b=e/(e+exp(-a));gl_FragColor=b;}", i: D, j: c, A: !0 }, s15: { h: "uniform sampler2D u0;varying vec2 vv0;const vec4 f=vec4(0.,0.,0.,0.);void main(){vec4 a=texture2D(u0,vv0);gl_FragColor=max(f,a);}", i: D, j: c }, s16: { h: "uniform sampler2D u0;varying vec2 vv0;const vec4 f=vec4(1.,1.,1.,1.);void main(){vec4 a=texture2D(u0,vv0);gl_FragColor=mix(exp(-abs(a))-f,a,step(0.,a));}", i: D, j: c },
            s17: { h: "uniform sampler2D u0;varying vec2 vv0;const vec4 f=vec4(1.,1.,1.,1.);void main(){vec4 a=texture2D(u0,vv0),b=exp(-abs(a))-f;gl_FragColor=mix(.1*b,a,step(0.,a));}", i: D, j: c }, s18: { h: "uniform sampler2D u0,u7,u10;varying vec2 vv0;const vec4 f=vec4(1.,1.,1.,1.);void main(){vec4 a=texture2D(u0,vv0),c=texture2D(u7,vv0),d=texture2D(u10,vv0),b=a/d;gl_FragColor=c*mix(exp(-abs(b))-f,b,step(0.,a));}", i: ["u0", "u7", "u10"], j: { u0: 0, u7: 1, u10: 2 }, A: !0 }, s19: {
                h: "uniform sampler2D u0;const float e=3.141593;varying vec2 vv0;void main(){gl_FragColor=atan(e*texture2D(u0,vv0))/e;}",
                i: D, j: c
            }, s20: { h: "uniform sampler2D u0;varying vec2 vv0;const vec4 f=vec4(1.,1.,1.,1.);void main(){vec4 a=texture2D(u0,vv0),b=log(f+a);gl_FragColor=b;}", i: D, j: c, A: !0 }, s21: { h: "uniform sampler2D u0,u11;uniform float u12;const vec2 e=vec2(.5,.5);const float f=1e-5;const vec4 g=vec4(1.,1.,1.,1.),i=vec4(0.,0.,0.,0.);varying vec2 vv0;void main(){vec4 a=texture2D(u11,e);float b=u12*u12;vec4 c=max(b*a,f*g);gl_FragColor=texture2D(u0,vv0)/c;}", i: ["u0", "u11", "u12"], j: { u0: 0, u11: 1 }, A: !0 }, s22: {
                h: "uniform sampler2D u1;uniform vec2 u13;varying vec2 vv0;void main(){float a=u13.x*u13.y;vec2 b=floor(vv0*a)/a,c=fract(vv0*a),d=floor(b*u13.y),f=floor(u13.x*fract(b*u13.y)),g=(f*u13.y+d)/a;gl_FragColor=texture2D(u1,g+c/a);}",
                i: ["u1", "u13"], j: w
            }, s23: { h: "uniform sampler2D u14,u15,u16;varying vec2 vv0;void main(){vec4 a=texture2D(u16,vv0);vec2 b=a.rg,c=a.ba;vec4 d=texture2D(u14,b),f=texture2D(u15,c);gl_FragColor=d*f;}", i: ["u14", "u15", "u16"], j: { u15: 0, u14: 1, u16: 2 }, A: !0 }, s24: { h: "uniform float u17;uniform sampler2D u14,u15;varying vec2 vv0;void main(){vec2 a=fract(vv0*u17);vec4 b=texture2D(u14,vv0),c=texture2D(u15,a);gl_FragColor=b*c;}", i: ["u15", "u14", "u17"], j: { u15: 0, u14: 1 } }, s25: {
                h: "uniform float u17;uniform sampler2D u14,u15,u18,u19,u20,u21;varying vec2 vv0;const vec4 e=vec4(1.,1.,1.,1.),g=vec4(1e-3,1e-3,1e-3,1e-3);void main(){vec2 h=vv0*u17,l=floor(h),c=h-l;vec4 m=texture2D(u14,vv0),d=texture2D(u15,c),a=texture2D(u21,vv0);a=a*255.;vec4 n=texture2D(u18,c),o=texture2D(u19,c),p=texture2D(u20,c),i=step(-g,-a),b=e-i,j=b*step(-e-g,-a);b*=e-j;vec4 k=b*step(-2.*e-g,-a);b*=e-k;vec4 q=b;d=i*d+j*n+k*o+q*p,gl_FragColor=m*d;}",
                i: "u14 u15 u17 u21 u18 u19 u20".split(" "), j: { u15: 0, u14: 1, u21: 3, u18: 4, u19: 5, u20: 6 }, A: !0
            }, s26: {
                h: "uniform sampler2D u14,u15,u22;uniform float u17,u23,u24,u25;varying vec2 vv0;const vec2 j=vec2(1.,1.);void main(){vec2 a=floor(u23*vv0),b=u23*vv0-a;float c=u17/u23;vec2 d=floor(b*c),f=b*c-d,g=(a+f)/u23;float k=u23*u25/u17;vec2 l=k*d,h=(l+f*u24)/u25,i=step(h,j);vec4 m=texture2D(u14,g),n=texture2D(u15,h),o=m*n*i.x*i.y,p=texture2D(u22,g);gl_FragColor=o*u24*u24+p;}", i: "u14 u15 u17 u23 u24 u25 u22".split(" "),
                j: { u15: 0, u14: 1, u22: 2 }
            }, s27: { h: "uniform sampler2D u14,u15;varying vec2 vv0;void main(){vec4 a=texture2D(u14,vv0),b=texture2D(u15,vv0);gl_FragColor=a*b;}", i: ["u14", "u15"], j: { u15: 0, u14: 1 }, A: !0 }, s28: { h: "uniform sampler2D u1,u22;uniform float u26;varying vec2 vv0;void main(){gl_FragColor=texture2D(u22,vv0)+u26*texture2D(u1,vv0);}", i: ["u1", "u22", "u26"], j: { u1: 0, u22: 1 } }, s29: {
                h: "varying vec2 vv0;uniform sampler2D u1;const vec4 f=vec4(1.,1.,1.,1.),g=vec4(.299,.587,.114,0.);void main(){vec4 a=texture2D(u1,vv0);gl_FragColor=dot(a,g)*f;}",
                i: q, j: w, precision: "lowp"
            }, s30: { h: "varying vec2 vv0;uniform sampler2D u1;uniform float u27;const vec3 f=vec3(.299,.587,.114);void main(){vec3 a=texture2D(u1,vv0).rgb,b=texture2D(u1,vv0+vec2(0.,u27)).rgb,c=texture2D(u1,vv0+vec2(u27,u27)).rgb,d=texture2D(u1,vv0+vec2(u27,0.)).rgb;gl_FragColor=vec4(dot(a,f),dot(b,f),dot(c,f),dot(d,f));}", i: ["u1", "u27"], j: w, precision: "lowp" }, s31: {
                h: "varying vec2 vv0;uniform sampler2D u1;uniform float u27;const vec3 f=vec3(.299,.587,.114);void main(){vec3 a=texture2D(u1,vv0).rgb,b=texture2D(u1,vv0+vec2(0.,u27)).rgb,c=texture2D(u1,vv0+vec2(u27,u27)).rgb,d=texture2D(u1,vv0+vec2(u27,0.)).rgb;gl_FragColor=vec4(a.r,b.g,c.b,dot(d,f));}",
                i: ["u1", "u27"], j: w, precision: "lowp"
            }, s32: {
                h: "varying vec2 vv0;uniform sampler2D u1,u2;uniform float u28;const vec4 f=vec4(1.,1.,1.,1.);void main(){vec4 a=vec4(0.);a-=texture2D(u1,vec2(vv0.x-u28,vv0.y-u28))*1.,a-=texture2D(u1,vec2(vv0.x-u28,vv0.y))*2.,a-=texture2D(u1,vec2(vv0.x-u28,vv0.y+u28))*1.,a+=texture2D(u1,vec2(vv0.x+u28,vv0.y-u28))*1.,a+=texture2D(u1,vec2(vv0.x+u28,vv0.y))*2.,a+=texture2D(u1,vec2(vv0.x+u28,vv0.y+u28))*1.;vec4 b=vec4(0.);b-=texture2D(u1,vec2(vv0.x-u28,vv0.y-u28))*1.,b-=texture2D(u1,vec2(vv0.x,vv0.y-u28))*2.,b-=texture2D(u1,vec2(vv0.x+u28,vv0.y-u28))*1.,b+=texture2D(u1,vec2(vv0.x-u28,vv0.y+u28))*1.,b+=texture2D(u1,vec2(vv0.x,vv0.y+u28))*2.,b+=texture2D(u1,vec2(vv0.x+u28,vv0.y+u28))*1.;vec3 c=sqrt(a.rgb*a.rgb+b.rgb*b.rgb);vec4 e=vec4(c,texture2D(u1,vv0).a),g=texture2D(u2,vv0);gl_FragColor=g.a*e.r*f;}",
                i: ["u1", "u2", "u28"], j: F, A: !0
            }, s33: { h: "varying vec2 vv0;uniform sampler2D u1,u2;uniform float u28;const vec4 j=vec4(1.,1.,1.,1.);const vec2 k=vec2(1.,1.);void main(){float h=0.;vec2 l=k*u28,a,b;float c,d,i=0.;for(float e=-4.;e<=4.;e+=1.)for(float f=-4.;f<=4.;f+=1.)a=vec2(e,f),c=length(a)/2.,d=exp(-c*c),b=vv0+l*a,h+=d*texture2D(u1,b).r,i+=d;vec4 m=texture2D(u2,vv0);gl_FragColor=m.a*(texture2D(u1,b).r-h/i)*j;}", i: ["u1", "u2", "u28"], j: F, A: !0 }, s34: {
                h: "uniform sampler2D u3;uniform vec2 u8;varying vec2 vv0;vec4 e(vec4 a,vec4 b){vec4 c=step(a,b);return mix(a,b,c);}const vec2 g=vec2(.5,.5),h=vec2(1.,0.),i=vec2(0.,1.);void main(){vec2 a=vv0-u8*g;vec4 b=texture2D(u3,a),c=texture2D(u3,a+u8*h),d=texture2D(u3,a+u8*i),j=texture2D(u3,a+u8),k=e(b,c),l=e(d,j);gl_FragColor=e(k,l);}",
                i: ["u3", "u8"], j: M
            }, s35: { h: "uniform sampler2D u3;uniform vec2 u8;varying vec2 vv0;const vec2 k=vec2(1.,0.),l=vec2(0.,1.),m=vec2(2.,0.),n=vec2(0.,2.);vec4 e(vec4 a,vec4 b){vec4 c=step(a,b);return mix(a,b,c);}vec4 f(vec2 a){vec4 b=texture2D(u3,a),c=texture2D(u3,a+u8*k),d=texture2D(u3,a+u8*l),g=texture2D(u3,a+u8),h=e(b,c),i=e(d,g);return e(h,i);}void main(){vec2 a=vv0+u8*vec2(-.55,-1.05);vec4 b=f(a),c=f(a+u8*m),d=f(a+u8*2.),g=f(a+u8*n),h=e(b,c),i=e(d,g);gl_FragColor=e(h,i);}", i: ["u3", "u8"], j: M, A: !0 },
            s36: { h: "uniform sampler2D u1;varying vec2 vv0;void main(){vec4 a=texture2D(u1,vv0);gl_FragColor=a*a;}", i: ["u1"], j: w, precision: "lowp", A: !0 }, s37: {
                h: "uniform sampler2D u1;uniform vec2 u8;varying vec2 vv0;const float e=15444.;void main(){vec4 a=1001./e*texture2D(u1,vv0-3.*u8)+2002./e*texture2D(u1,vv0-2.*u8)+3003./e*texture2D(u1,vv0-u8)+3432./e*texture2D(u1,vv0)+3003./e*texture2D(u1,vv0+u8)+2002./e*texture2D(u1,vv0+2.*u8)+1001./e*texture2D(u1,vv0+3.*u8);gl_FragColor=a;}", i: ["u8", "u1"], j: w, precision: "lowp",
                A: !0
            }, s38: { h: "uniform sampler2D u1,u11,u29;varying vec2 vv0;const vec4 f=vec4(1.,1.,1.,1.);const float g=.1;void main(){vec4 a=texture2D(u11,vv0),b=texture2D(u29,vv0),c=texture2D(u1,vv0),d=max(f*g,b-a*a),h=sqrt(d);gl_FragColor=(c-a)/h;}", i: ["u1", "u11", "u29"], j: { u1: 0, u11: 1, u29: 2 }, A: !0 }
        }, R = {
            s39: {
                h: "uniform float u17,u30;uniform sampler2D u14,u15,u22;varying vec2 vv0;const vec2 ZERO2=vec2(0.,0.),ONE2=vec2(1.,1.),HALF2=vec2(.5,.5),EPS2=vec2(1e-5,1e-5);void main(){vec4 sum=texture2D(u22,vv0);float toSparsity=1.1111;vec2 uvFrom,uvWeight,xyPatch=ZERO2,eps2=EPS2/u17,xyTo=floor(vv0*u17+eps2);float weightSize=toSparsity*u17;vec2 halfFromSparsity=ONE2*(toSparsity-1.)/2.;for(float patch_x=0.;patch_x<1.1111;patch_x+=1.){xyPatch.x=patch_x;for(float patch_y=0.;patch_y<1.1111;patch_y+=1.)xyPatch.y=patch_y,uvFrom=(xyTo+HALF2+u30*(xyPatch-halfFromSparsity))/u17,uvFrom+=step(uvFrom,-eps2),uvFrom-=step(ONE2-eps2,uvFrom),uvWeight=(xyTo*toSparsity+xyPatch+HALF2)/weightSize,sum+=texture2D(u14,uvWeight)*texture2D(u15,uvFrom);}gl_FragColor=sum,gl_FragColor*=2.2222;}",
                i: ["u17", "u14", "u15", "u22", "u30"], jb: ["1.1111", "gl_FragColor\\*=2.2222;"]
            }, s40: {
                h: "uniform float u17,u30,u25;uniform sampler2D u14,u15,u22;varying vec2 vv0;const vec2 ZERO2=vec2(0.,0.),ONE2=vec2(1.,1.),HALF2=vec2(.5,.5),EPS2=vec2(1e-4,1e-4);void main(){vec4 sum=texture2D(u22,vv0);float fromSparsity=1.1111,shrinkFactor=3.3333;vec2 uvFrom,uvWeight,xyFrom,xyPatchTo,xyPatch=ZERO2,xyShrink=ZERO2,eps2=EPS2/u25,xyTo=floor(vv0*u17+eps2);float weightSize=fromSparsity*u25;vec2 halfFromSparsity=ONE2*(fromSparsity-1.)/2.;float toSparsity=weightSize/u17;vec2 xyFrom0=xyTo*shrinkFactor;for(float patch_x=0.;patch_x<1.1111;patch_x+=1.){xyPatch.x=patch_x;for(float patch_y=0.;patch_y<1.1111;patch_y+=1.){xyPatch.y=patch_y;for(float shrink_x=0.;shrink_x<3.3333;shrink_x+=1.){xyShrink.x=shrink_x;for(float shrink_y=0.;shrink_y<3.3333;shrink_y+=1.)xyShrink.y=shrink_y,xyFrom=xyFrom0+xyShrink+shrinkFactor*u30*(xyPatch-halfFromSparsity),uvFrom=(xyFrom+HALF2)/u25,uvFrom+=step(uvFrom,-eps2),uvFrom-=step(ONE2-eps2,uvFrom),xyPatchTo=xyPatch*shrinkFactor+xyShrink,uvWeight=(xyTo*toSparsity+xyPatchTo+HALF2)/weightSize,sum+=texture2D(u14,uvWeight)*texture2D(u15,uvFrom);}}}gl_FragColor=sum,gl_FragColor*=2.2222;}",
                i: "u17 u25 u14 u15 u22 u30".split(" "), jb: ["1.1111", "gl_FragColor\\*=2.2222;", "3.3333"]
            }
        }, r = null, O = null, P = {
            bb: function () { return E }, s: function () { if (!E) { r = Fa(J, 2); O = Fa(R, 2); m = "highp"; G.getShaderPrecisionFormat && (G.getShaderPrecisionFormat(G.FRAGMENT_SHADER, G.MEDIUM_FLOAT), G.getShaderPrecisionFormat(G.FRAGMENT_SHADER, G.LOW_FLOAT)); for (var u in r) h(G, r[u], u); I.set("s0"); G.enableVertexAttribArray(0); E = !0 } }, xc: function (u) { u.forEach(function (e) { P.wc(e) }) }, wc: function (u) { r[u.id] = u; h(G, u, u.id) }, Wc: function (u,
                e, z) { e || (e = u); r[e] = Object.create(O[u]); r[e].Ue = !0; O[u].jb && O[u].jb.forEach(function (K, f) { r[e].h = r[e].h.replace(new RegExp(K, "g"), z[f]) }); h(G, r[e], e) }, set: function (u) { var e = r[u]; e.A && (e.A = !1, h(G, e, u)); t(e) }, Ga: function (u) { return l(u, v(), "s41") }, ec: function (u) { return l(u, { h: "void main(){gl_FragColor=vec4(.5,.5,.5,.5);}", i: [], precision: m }, "s42") }, ve: function (u) { return "undefined" === typeof r[u] ? !1 : r[u].la }, P: function () { -1 !== n && (n = -1, p.Ba.forEach(function (u) { 0 !== u && G.disableVertexAttribArray(u) })) }, fc: function () {
                    var u =
                        0; p.Ba.forEach(function (e, z) { z = p.Aa[z]; G.vertexAttribPointer(e, z, G.FLOAT, !1, p.pc, u); u += 4 * z })
                }, cg: function () { G.enableVertexAttribArray(0) }, kb: function () { P.lb(G) }, lb: function (u) { u.vertexAttribPointer(p.Ba[0], 2, u.FLOAT, !1, 8, 0) }, Jg: function (u, e) { G.uniform1i(p.v[u], e) }, H: function (u, e) { G.uniform1f(p.v[u], e) }, na: function (u, e, z) { G.uniform2f(p.v[u], e, z) }, Kg: function (u, e) { G.uniform2fv(p.v[u], e) }, Cf: function (u, e) { G.uniform3fv(p.v[u], e) }, Lg: function (u, e, z, K) { G.uniform3f(p.v[u], e, z, K) }, Df: function (u, e, z, K, f) {
                    G.uniform4f(p.v[u],
                        e, z, K, f)
                }, Gd: function (u, e) { G.uniform4fv(p.v[u], e) }, Mg: function (u, e) { G.uniformMatrix2fv(p.v[u], !1, e) }, Ng: function (u, e) { G.uniformMatrix3fv(p.v[u], !1, e) }, Og: function (u, e) { G.uniformMatrix4fv(p.v[u], !1, e) }, I: function (u, e) {
                    P.set(u); e.forEach(function (z) {
                        switch (z.type) {
                            case "4f": G.uniform4fv(p.v[z.name], z.value); break; case "3f": G.uniform3fv(p.v[z.name], z.value); break; case "2f": G.uniform2fv(p.v[z.name], z.value); break; case "1f": G.uniform1f(p.v[z.name], z.value); break; case "1i": G.uniform1i(p.v[z.name], z.value);
                                break; case "mat2": G.uniformMatrix2fv(p.v[z.name], !1, z.value); break; case "mat3": G.uniformMatrix3fv(p.v[z.name], !1, z.value); break; case "mat4": G.uniformMatrix4fv(p.v[z.name], !1, z.value)
                        }
                    })
                }, og: function () { return "lowp" }, m: function () { G.disableVertexAttribArray(0); P.P(); for (var u in r) { var e = r[u]; e.la && (e.la = !1, G.deleteProgram(e.ma)); e.Ue && delete r[u] } k.forEach(function (z) { G.deleteShader(z) }); k.splice(0); C = 0; E = !1; p = null; n = -1 }
        }; return P
    }(), G = null, Ua = function () {
        function a(m) {
            console.log("ERROR in ContextFF: ",
                m); return !1
        } function d(m) { function q() { Ra.m(); Sa.reset(); w.getExtension("WEBGL_lose_context").loseContext() } if (navigator.userAgent && -1 !== navigator.userAgent.indexOf("forceWebGL1")) return !1; var D = document.createElement("canvas"); D.setAttribute("width", 5); D.setAttribute("height", 5); var w = null; try { w = D.getContext("webgl2", m) } catch (c) { return !1 } if (!w) return !1; g(w); Sa.Fc(w); m = Sa.Ab(w); if (!m.ba && !m.da) return q(), !1; m = Ra.Bc(w, m); q(); return m ? !0 : !1 } function g(m) {
            m.clearColor(0, 0, 0, 0); m.disable(m.DEPTH_TEST);
            m.disable(m.BLEND); m.disable(m.DITHER); m.disable(m.STENCIL_TEST); m.disable(m.CULL_FACE); m.GENERATE_MIPMAP_HINT && m.hint(m.GENERATE_MIPMAP_HINT, m.FASTEST); m.disable(m.SAMPLE_ALPHA_TO_COVERAGE); m.disable(m.SAMPLE_COVERAGE); m.depthFunc(m.LEQUAL); m.clearDepth(1)
        } var h = null, t = null, l = null, v = null, k = !0, n = null, p = null, C = [], E = {
            B: function () { return h.width }, S: function () { return h.height }, Ua: function () { return h }, fg: function () { return G }, fa: function () { return k }, flush: function () { G.flush() }, Be: function () {
                n || (n = new Uint8Array(h.width *
                    h.height * 4)); G.readPixels(0, 0, h.width, h.height, G.RGBA, G.UNSIGNED_BYTE, n); return n
            }, ig: function () { return h.toDataURL("image/jpeg") }, jg: function () { Ta.O(); t || (t = document.createElement("canvas"), l = t.getContext("2d")); t.width = h.width; t.height = h.height; for (var m = E.Be(), q = l.createImageData(t.width, t.height), D = t.width, w = t.height, c = q.data, F = 0; F < w; ++F)for (var M = w - F - 1, J = 0; J < D; ++J) { var R = 4 * (F * D + J), r = 4 * (M * D + J); c[R] = m[r]; c[R + 1] = m[r + 1]; c[R + 2] = m[r + 2]; c[R + 3] = m[r + 3] } l.putImageData(q, 0, 0); return t.toDataURL("image/png") },
            hg: function (m) { !t && m && (t = document.createElement("canvas"), l = t.getContext("2d")); var q = m ? t : document.createElement("canvas"); q.width = h.width; q.height = h.height; (m ? l : q.getContext("2d")).drawImage(h, 0, 0); return q }, s: function (m) {
                m = Object.assign({ ca: null, Xb: null, Ma: null, Dc: null, width: 512, height: 512, premultipliedAlpha: !1, $c: !0, antialias: !1, debug: !1, $f: !1 }, m); m.ca ? (G = m.ca, h = m.ca.canvas) : m.Dc && !m.Ma ? h = document.getElementById(m.Dc) : m.Ma && (h = m.Ma); h || (h = document.createElement("canvas")); h.width = m.width; h.height =
                    m.height; if (G) k = G instanceof WebGL2RenderingContext; else { k = !0; var q = { antialias: m.antialias, alpha: !0, preserveDrawingBuffer: !0, premultipliedAlpha: m.premultipliedAlpha, stencil: !1, depth: m.$c }; navigator && navigator.userAgent && -1 !== navigator.userAgent.indexOf("noAntialiasing") && (q.antialias = !1); var D = d(q); !D && q.antialias && (q.antialias = !1, D = d(q)); D && (G = h.getContext("webgl2", q)); G ? k = !0 : ((G = h.getContext("webgl", q)) || (G = h.getContext("experimental-webgl", q)), k = !1) } if (!G) return a("WebGL1 and 2 are not enabled");
                (v = G.getExtension("WEBGL_lose_context")) && m.Xb && (p = m.Xb, h.addEventListener("webglcontextlost", p, !1)); if (!Sa.s()) return a("Not enough GL capabilities"); g(G); I.s(); Q.s(); if (!Ra.Bc(G, Sa.ze())) return a("Cannot filter float textures"); C.forEach(function (w) { w(G) }); C.splice(0); return !0
            }, Uf: function () { return new Promise(function (m) { G ? m(G) : C.push(m) }) }, m: function () { G && (Sa.m(), I.m(), Ra.m()); v && p && (h.removeEventListener("webglcontextlost", p, !1), v = p = null); G = n = l = t = h = null; C.splice(0) }
        }; return E
    }(), Qa = function () {
        function a() {
            null ===
            d && ("undefined" !== typeof I ? d = I : "undefined" !== typeof JEShaders && (d = JEShaders))
        } var d = null; return { reset: function () { d = null }, Bf: function (g) { d !== g && (d && d.P(), d = g) }, bb: function () { return d.bb() }, kb: function () { return d.kb() }, lb: function (g) { return d.lb(g) }, fc: function () { return d.fc() }, P: function () { return d.P() }, set: function (g) { a(); return d.set(g) }, Ga: function (g) { a(); return d.Ga(g) }, ec: function (g) { a(); return d.ec(g) } }
    }(), U = function () {
        function a(f) { G.bindTexture(G.TEXTURE_2D, f) } function d(f) {
            u[0] = f; f = e[0]; var A =
                f >> 16 & 32768, B = f >> 12 & 2047, S = f >> 23 & 255; return 103 > S ? A : 142 < S ? A | 31744 | ((255 == S ? 0 : 1) && f & 8388607) : 113 > S ? (B |= 2048, A | (B >> 114 - S) + (B >> 113 - S & 1)) : A = (A | S - 112 << 10 | B >> 1) + (B & 1)
        } function g(f) { var A = new Uint16Array(f.length); f.forEach(function (B, S) { A[S] = d(B) }); return A } function h() { if (null !== z.Jb) return z.Jb; var f = l(g([.5, .5, .5, .5])); return null === f ? !0 : z.Jb = f } function t() { if (null !== z.Kb) return z.Kb; var f = l(new Uint8Array([127, 127, 127, 127])); return null === f ? !0 : z.Kb = f } function l(f) {
            if (!Qa.bb() || !w) return null; var A =
                null, B = Math.sqrt(f.length / 4); try { var S = G.getError(); if ("FUCKING_BIG_ERROR" === S) return !1; A = K.instance({ isFloat: !1, K: !0, array: f, width: B }); S = G.getError(); if (S !== G.NO_ERROR) return !1 } catch (ka) { return !1 } Ta.O(); G.viewport(0, 0, B, B); G.clearColor(0, 0, 0, 0); G.clear(G.COLOR_BUFFER_BIT); Qa.set("s0"); A.zc(0); Q.l(!0, !0); f = 4 * B * B; S = new Uint8Array(f); G.readPixels(0, 0, B, B, G.RGBA, G.UNSIGNED_BYTE, S); B = !0; for (var N = 0; N < f; ++N)B = B && 3 > Math.abs(S[N] - 127); A.remove(); Ta.aa(); return B
        } var v = 0, k = null, n = 0, p = null, C = null, E = null, m =
            null, q = null, D = null, w = !1, c = [], F = { isFloat: !1, isPot: !0, isLinear: !1, isMipmap: !1, isAnisotropicFiltering: !1, isMirrorX: !1, isMirrorY: !1, isSrgb: !1, isKeepArray: !1, isFlipY: null, width: 0, height: 0, url: null, array: null, data: null, D: null, Sc: null, Te: !1, K: !1, ka: null, fb: 4, Sb: 0 }, M = !1, J = null, R = null, r = [[1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]], O = !1, P = !1, u = new Float32Array(1), e = new Int32Array(u.buffer), z = { Jb: null, Kb: null }, K = {
                s: function () {
                    w || (q = [G.RGBA, null, G.RGBA, G.RGBA], D = [G.RGBA, null, G.RGBA, G.RGBA], k = [G.TEXTURE0, G.TEXTURE1,
                    G.TEXTURE2, G.TEXTURE3, G.TEXTURE4, G.TEXTURE5, G.TEXTURE6, G.TEXTURE7], O = "undefined" !== typeof JEContext, P = "undefined" !== typeof Sa, O && JEContext.Dg() && k.push(G.TEXTURE8, G.TEXTURE9), p = [-1, -1, -1, -1, -1, -1, -1, -1], m = [G.UNSIGNED_BYTE, G.FLOAT, G.FLOAT], w = !0)
                }, Oe: function () { if (!C) { for (var f = new Float32Array(16384), A = 0; 16384 > A; ++A)f[A] = 2 * Math.random() - 1; C = { random: K.instance({ isFloat: !0, isPot: !0, array: f, width: 64 }), Od: K.instance({ isFloat: !1, isPot: !0, width: 1, array: new Uint8Array([0, 0, 0, 0]) }) } } K.Nf() }, ug: function () { return C.Od },
                Nf: function () { m[1] = Sa.Fb(G) }, zf: function () { D = q = [G.RGBA, G.RGBA, G.RGBA, G.RGBA] }, xd: function (f) { I.set("s1"); Ta.O(); var A = f.B(), B = f.S(); G.viewport(0, 0, A, B); f.g(0); Q.l(!1, !1) }, pf: function (f, A) { K.xd(f); G.readPixels(0, 0, f.B(), f.S(), G.RGBA, G.UNSIGNED_BYTE, A) }, qf: function (f, A) { K.xd(f); return Sa.dc(0, 0, f.B(), f.S(), A) }, Mc: function (f, A, B, S, N, ka, fa) {
                    f.activeTexture(f.TEXTURE0); var na = f.createTexture(); f.bindTexture(f.TEXTURE_2D, na); N = N instanceof Float32Array ? N : new Float32Array(N); f.texParameteri(f.TEXTURE_2D,
                        f.TEXTURE_WRAP_S, f.CLAMP_TO_EDGE); f.texParameteri(f.TEXTURE_2D, f.TEXTURE_WRAP_T, f.CLAMP_TO_EDGE); f.texParameteri(f.TEXTURE_2D, f.TEXTURE_MAG_FILTER, f.NEAREST); f.texParameteri(f.TEXTURE_2D, f.TEXTURE_MIN_FILTER, f.NEAREST); f.pixelStorei(f.UNPACK_FLIP_Y_WEBGL, ka); f.texImage2D(f.TEXTURE_2D, 0, f.RGBA, B, S, 0, f.RGBA, f.FLOAT, N); f.bindTexture(f.TEXTURE_2D, null); f.pixelStorei(f.UNPACK_FLIP_Y_WEBGL, !1); fa && (Ta.aa(), I.Ga(f)); f.viewport(0, 0, B, S); f.framebufferTexture2D(f.FRAMEBUFFER, f.COLOR_ATTACHMENT0, f.TEXTURE_2D,
                            A, 0); f.bindTexture(f.TEXTURE_2D, na); fa ? Q.l(!0, !0) : Q.Ra(f); f.deleteTexture(na); w && (p[0] = -1, E = null, v = 0)
                }, wb: function (f) { f !== v && (G.activeTexture(k[f]), v = f) }, instance: function (f) {
                    var A; function B() { V = void 0 !== x.D.videoWidth ? x.D.videoWidth : x.D.width; X = void 0 !== x.D.videoHeight ? x.D.videoHeight : x.D.height } function S(H) {
                        var W = G.getError(); if ("FUCKING_BIG_ERROR" === W) return !1; G.texImage2D(G.TEXTURE_2D, 0, la, ha, ia, H); W = G.getError(); W !== G.NO_ERROR && ha !== G.RGBA && (ha = G.RGBA, G.texImage2D(G.TEXTURE_2D, 0, la, ha, ia, H));
                        return !0
                    } function N() {
                        if (!ab) {
                            a(ja); ua && G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL, ua); x.isPot ? (G.texParameteri(G.TEXTURE_2D, G.TEXTURE_WRAP_S, x.isMirrorX ? G.MIRRORED_REPEAT : G.REPEAT), G.texParameteri(G.TEXTURE_2D, G.TEXTURE_WRAP_T, x.isMirrorY ? G.MIRRORED_REPEAT : G.REPEAT)) : (G.texParameteri(G.TEXTURE_2D, G.TEXTURE_WRAP_S, G.CLAMP_TO_EDGE), G.texParameteri(G.TEXTURE_2D, G.TEXTURE_WRAP_T, G.CLAMP_TO_EDGE)); x.isAnisotropicFiltering && "undefined" !== typeof JESETTINGS && G.texParameterf(G.TEXTURE_2D, JEContext.lg().TEXTURE_MAX_ANISOTROPY_EXT,
                                JESETTINGS.Qf); G.texParameteri(G.TEXTURE_2D, G.TEXTURE_MAG_FILTER, x.isLinear ? G.LINEAR : G.NEAREST); x.isLinear ? G.texParameteri(G.TEXTURE_2D, G.TEXTURE_MIN_FILTER, x.isMipmap && !za ? G.NEAREST_MIPMAP_LINEAR : G.LINEAR) : G.texParameteri(G.TEXTURE_2D, G.TEXTURE_MIN_FILTER, x.isMipmap && !za ? G.NEAREST_MIPMAP_NEAREST : G.NEAREST); ha = q[x.fb - 1]; la = D[x.fb - 1]; ia = m[Aa]; if (Sa.fa()) {
                                    var H = Sa.Ce(); ha === G.RGBA && ia === G.FLOAT ? x.isMipmap || x.isLinear ? la = Ra.Ee(G) : Sa.Cc() ? H && (la = H) : la = G.RGBA16F || G.RGBA : ha === G.RGB && ia === G.FLOAT && H && (la =
                                        H, ha = G.RGBA)
                                } if (x.K && !x.isFloat || x.isFloat && x.isMipmap && Ra.Xe()) la = Sa.De(), ia = Sa.Fb(G); x.Sb && (Ma = x.Sb); x.isSrgb && 4 === x.fb && (ha = JEContext.sg()); if (x.D) S(x.D); else if (x.url) S(xa); else if (qa) {
                                    H = qa; try { "FUCKING_BIG_ERROR" !== G.getError() && (G.texImage2D(G.TEXTURE_2D, 0, la, V, X, 0, ha, ia, H), G.getError() !== G.NO_ERROR && (G.texImage2D(G.TEXTURE_2D, 0, la, V, X, 0, ha, ia, null), G.getError() !== G.NO_ERROR && G.texImage2D(G.TEXTURE_2D, 0, G.RGBA, V, X, 0, G.RGBA, G.UNSIGNED_BYTE, null))) } catch (Lb) {
                                        G.texImage2D(G.TEXTURE_2D, 0, la, V, X,
                                            0, ha, ia, null)
                                    } x.isKeepArray || (qa = null)
                                } else H = G.getError(), "FUCKING_BIG_ERROR" !== H && (G.texImage2D(G.TEXTURE_2D, 0, la, V, X, 0, ha, ia, null), H = G.getError(), H !== G.NO_ERROR && (ha = G.RGBA, x.K && ia !== G.FLOAT && (ia = G.FLOAT, G.texImage2D(G.TEXTURE_2D, 0, la, V, X, 0, ha, ia, null)))); if (x.isMipmap) if (!za && da) da.Db(), Na = !0; else if (za) {
                                    H = Math.log2(Math.min(V, X)); Da = Array(1 + H); Da[0] = ja; for (var W = 1; W <= H; ++W) {
                                        var ma = Math.pow(2, W), Z = V / ma; ma = X / ma; var Ba = G.createTexture(); a(Ba); G.texParameteri(G.TEXTURE_2D, G.TEXTURE_MIN_FILTER, G.NEAREST);
                                        G.texParameteri(G.TEXTURE_2D, G.TEXTURE_MAG_FILTER, G.NEAREST); G.texImage2D(G.TEXTURE_2D, 0, la, Z, ma, 0, ha, ia, null); a(null); Da[W] = Ba
                                    } Na = !0
                                } a(null); p[v] = -1; ua && G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL, !1); Ga = !0; x.ka && da && (x.ka(da), x.ka = null)
                        }
                    } function ka() { for (var H = V * X, W = 2 * H, ma = 3 * H, Z = 0; Z < H; ++Z)sa[0][Z] = Ha[Z], sa[1][Z] = Ha[Z + H], sa[2][Z] = Ha[Z + W], sa[3][Z] = Ha[Z + ma] } function fa() {
                        var H = V * X * 4; wa = [new Uint8Array(H), new Uint8Array(H), new Uint8Array(H), new Uint8Array(H)]; sa = [new Float32Array(wa[0].buffer), new Float32Array(wa[1].buffer),
                        new Float32Array(wa[2].buffer), new Float32Array(wa[3].buffer)]; Oa = new Uint8Array(4 * H); Ha = new Float32Array(Oa.buffer); Ia = !0
                    } function na() { A = new Uint8Array(V * X * 4); bb = new Float32Array(A.buffer); Va = !0 } var x = Object.assign({}, F, f), ba = n++; null === x.isFlipY && (x.isFlipY = x.url || x.array ? !0 : !1); x.data && (x.array = "string" === typeof x.data ? Pa(x.data) : x.isFloat ? new Float32Array(x.data) : new Uint8Array(x.data), x.isFlipY = !1); var Aa = 0, ya = x.D ? !0 : !1, y = null, L = null, aa = !1, T = null; x.K = x.K || x.isFloat; x.K && (Aa = 1); !x.Te && x.isFloat &&
                        P && !Sa.Cc() && (x.isFloat = !1); x.isFloat && (Aa = 2); x.isAnisotropicFiltering && O && !JEContext.xg() && (x.isAnisotropicFiltering = !1); var ja = x.Sc || G.createTexture(), xa = null, qa = !1, V = 0, X = 0, Ga = !1, ab = !1, Ia = !1, sa = null, wa = null, Oa = null, Ha = null, la = null, ha = null, ia = null, ua = x.isFlipY, ub = (f = x.K && x.isMipmap) && Ra.ee(), za = f && ub ? !0 : !1, Da = null, Ma = -1, Na = !1; var Va = !1; var bb = A = null; x.width && (V = x.width, X = x.height ? x.height : V); var da = {
                            get: function () { return ja }, B: function () { return V }, S: function () { return X }, vg: function () { return x.url },
                            yg: function () { return x.isFloat }, Ag: function () { return x.K }, Bg: function () { return x.isLinear }, Db: function () { G.generateMipmap(G.TEXTURE_2D) }, ce: function (H, W) { za ? (H || (H = da.Qc()), K.wb(W), a(Da[H]), p[W] = -1) : da.g(W) }, Qc: function () { -1 === Ma && (Ma = Math.log(V) / Math.log(2)); return Ma }, ye: function (H) {
                                if (za) {
                                    H || (H = da.Qc()); I.set("s12"); K.wb(0); for (var W = V, ma = X, Z = 1; Z <= H; ++Z)W /= 2, ma /= 2, I.na("u8", .25 / W, .25 / ma), G.viewport(0, 0, W, ma), a(Da[Z - 1]), G.framebufferTexture2D(Ta.Wa(), G.COLOR_ATTACHMENT0, G.TEXTURE_2D, Da[Z], 0), Q.l(!1,
                                        1 === Z); p[0] = -1
                                } else da.Db()
                            }, Ig: function (H) { (ya = !(Array.isArray(H) || H.constructor === Float32Array || H.constructor === Uint8Array)) ? (qa = null, x.D = H, B()) : qa = H }, g: function (H) { if (!Ga) return !1; K.wb(H); if (p[H] === ba) return !1; a(ja); p[H] = ba; return !0 }, zc: function (H) { G.activeTexture(k[H]); v = H; a(ja); p[H] = ba }, u: function () { E = da; G.framebufferTexture2D(Ta.Wa(), G.COLOR_ATTACHMENT0, G.TEXTURE_2D, ja, 0) }, T: function () { E = da; G.viewport(0, 0, V, X); G.framebufferTexture2D(Ta.Wa(), G.COLOR_ATTACHMENT0, G.TEXTURE_2D, ja, 0) }, nc: K.nc, resize: function (H,
                                W) { V = H; X = W; N() }, clone: function (H) { H = K.instance({ width: V, height: X, K: x.K, isFloat: x.isFloat, isLinear: x.isLinear, isMirrorY: x.isMirrorY, isFlipY: H ? !ua : ua, isPot: x.isPot }); Qa.set("s0"); Ta.aa(); H.u(); G.viewport(0, 0, V, X); da.g(0); Q.l(!0, !0); return H }, Ef: function () { G.viewport(0, 0, V, X) }, remove: function () { G.deleteTexture(ja); ab = !0; c.splice(c.indexOf(da), 1); da = null }, refresh: function () {
                                    da.zc(0); ua && G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL, !0); ya ? G.texImage2D(G.TEXTURE_2D, 0, la, ha, ia, x.D) : G.texImage2D(G.TEXTURE_2D, 0, la,
                                        V, X, 0, ha, ia, qa); ua && G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL, !1)
                                }, cc: function () { Ia || fa(); G.readPixels(0, 0, V, 4 * X, G.RGBA, G.UNSIGNED_BYTE, Oa); ka(); return sa }, jf: function () { Ia || fa(); return Sa.dc(0, 0, V, 4 * X, Oa).then(function () { ka(); return sa }) }, lf: function () { Va || na(); G.readPixels(0, 0, V, X, G.RGBA, G.UNSIGNED_BYTE, A); return bb }, kf: function () { Va || na(); return Sa.dc(0, 0, V, X, A) }, Bb: function (H) {
                                    Ta.O(); I.set("s13"); da.g(0); if (H) G.viewport(0, 0, V, X), I.Df("u9", .25, .25, .25, .25), Q.l(!1, !0); else for (H = 0; 4 > H; ++H)G.viewport(0,
                                        X * H, V, X), I.Gd("u9", r[H]), Q.l(!1, 0 === H)
                                }, oc: function (H) { var W = ia === m[0] && !t(); a(ja); ua && G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL, !0); W ? (aa || (y = document.createElement("canvas"), y.width = V, y.height = X, L = y.getContext("2d"), T = L.createImageData(V, X), aa = !0), T.data.set(H), L.putImageData(T, 0, 0), G.texImage2D(G.TEXTURE_2D, 0, la, ha, ia, y)) : G.texImage2D(G.TEXTURE_2D, 0, la, V, X, 0, ha, ia, H); p[v] = ba; ua && G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL, !1) }, Rg: function (H, W) {
                                    a(ja); W && G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL, !0); G.texImage2D(G.TEXTURE_2D,
                                        0, la, ha, ia, H); p[v] = ba; W && G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL, !1)
                                }, Hg: function (H, W) {
                                    var ma = V * X, Z = 4 * ma; H = x.K ? H ? "RGBE" : "JSON" : "RGBA"; W && (H = W); W = Sa.fa() && !1; var Ba = null; switch (H) { case "RGBE": Ba = "s43"; break; case "JSON": Ba = W ? "s0" : "s13"; break; case "RGBA": case "RGBAARRAY": Ba = "s7" }Ia || ("RGBA" === H || "RGBE" === H || "RGBAARRAY" === H ? (wa = new Uint8Array(Z), Ia = !0) : "JSON" !== H || W || fa()); Ta.O(); I.set(Ba); da.g(0); Z = null; if ("RGBA" === H || "RGBE" === H || "RGBAARRAY" === H) {
                                        G.viewport(0, 0, V, X); Q.l(!0, !0); G.readPixels(0, 0, V, X, G.RGBA,
                                            G.UNSIGNED_BYTE, wa); if ("RGBAARRAY" === H) return { data: wa }; M || (J = document.createElement("canvas"), R = J.getContext("2d"), M = !0); J.width = V; J.height = X; ma = R.createImageData(V, X); ma.data.set(wa); R.putImageData(ma, 0, 0); Z = J.toDataURL("image/png")
                                    } else if ("JSON" === H) if (W) Z = new Float32Array(ma), G.viewport(0, 0, V, X), Q.l(!0, !0), G.readPixels(0, 0, V, X, G.RGBA, G.FLOAT, Z); else {
                                        for (Z = 0; 4 > Z; ++Z)G.viewport(0, X * Z, V, X), I.Gd("u9", r[Z]), Q.l(!Z, !Z); da.cc(); Z = Array(ma); for (W = 0; W < ma; ++W)Z[4 * W] = sa[0][W], Z[4 * W + 1] = sa[1][W], Z[4 * W + 2] =
                                            sa[2][W], Z[4 * W + 3] = sa[3][W]
                                    } return { format: H, data: Z, width: V, height: X, isMirrorY: x.isMirrorY, isFlipY: "RGBA" === H ? x.isFlipY : !x.isFlipY }
                                }
                        }; x.isMipmap && !za && Ga && !Na && (da.Db(), Na = !0); if (x.url) a(ja), G.texImage2D(G.TEXTURE_2D, 0, G.RGBA, 1, 1, 0, G.RGBA, G.UNSIGNED_BYTE, null), xa = new Image, xa.Zf = "Anonymous", xa.crossOrigin = "Anonymous", xa.src = x.url, xa.onload = function () { V = xa.width; X = xa.height; N() }; else if (x.D) { var cb = function () { B(); V ? N() : setTimeout(cb, 1) }; cb() } else x.array ? (x.K && !x.isFloat ? x.array instanceof Uint16Array ?
                            (qa = x.array, N()) : h() ? (qa = g(x.array), N()) : (N(), K.Mc(G, ja, da.B(), da.S(), x.array, ua, !0)) : (qa = x.isFloat ? x.array instanceof Float32Array ? x.array : new Float32Array(x.array) : x.array instanceof Uint8Array ? x.array : new Uint8Array(x.array), N()), x.isKeepArray || (qa && qa !== x.array && (qa = null), delete x.array)) : x.Sc ? Ga = !0 : N(); da.rg = da.B; x.ka && Ga && (x.ka(da), x.ka = null); c.push(da); return da
                }, O: function (f) { f !== v && (G.activeTexture(k[f]), v = f); p[f] = -1; a(null) }, Tf: function (f) { C.random.g(f) }, nc: function () {
                    E = null; G.framebufferTexture2D(Ta.Wa(),
                        G.COLOR_ATTACHMENT0, G.TEXTURE_2D, null, 0)
                }, reset: function () { 0 !== v && G.activeTexture(k[0]); for (var f = 0; f < k.length; ++f)p[f] = -1; v = -1 }, Gg: function () { v = -1 }, Jf: function () { for (var f = 0; f < k.length; ++f)K.O(f) }, Oc: function () { C && (C.random.remove(), C.Od.remove()) }, Qg: function (f, A) {
                    if ("RGBA" === f.format || "RGBE" === f.format) {
                        var B = new Image; B.src = f.data; B.onload = function () {
                            K.instance({
                                isMirrorY: f.isMirrorY, isFlipY: f.isFlipY, isFloat: !1, D: B, ka: function (S) {
                                    if ("RGBA" === f.format) A(S); else {
                                        var N = f.width, ka = f.height, fa = K.instance({
                                            isMirrorY: f.isMirrorY,
                                            isFloat: !0, width: N, height: ka, isFlipY: f.isFlipY
                                        }); Ta.aa(); G.viewport(0, 0, N, ka); I.set("s44"); fa.u(); S.g(0); Q.l(!0, !0); K.O(0); A(fa); Sa.flush(); setTimeout(S.remove, 50)
                                    }
                                }
                            })
                        }
                    } else "JSON" === f.format ? A(K.instance({ isFloat: !0, isFlipY: f.isFlipY, width: f.width, height: f.height, array: new Float32Array(f.data) })) : A(!1)
                }, je: g, m: function () { E && (Ta.aa(), K.nc(), Ta.O()); K.Jf(); c.slice(0).forEach(function (f) { f.remove() }); c.splice(0); w = !1; n = 0; "undefined" !== typeof Ra && Ra.m(); C = null }
            }; return K
    }(), Wa = {
        instance: function (a) {
            var d =
                [U.instance(a), U.instance(a)], g = [d[1], d[0]], h = g, t = { Fd: function (l) { h[1].u(); h[0].g(l); t.Jd() }, wf: function (l) { h[1].T(); h[0].g(l); t.Jd() }, Jd: function () { h = h === d ? g : d }, refresh: function () { h[0].refresh(); h[1].refresh() }, g: function (l) { h[0].g(l) }, Sf: function (l) { h[1].g(l) }, He: function () { return h[0] }, pg: function () { return h[1] }, oc: function (l) { h[0].oc(l); h[1].oc(l) }, remove: function () { h[0].remove(); h[1].remove(); h = null }, sync: function () { t.wf(0); I.set("s0"); Q.l(!1, !1) } }; return t
        }
    }, Q = function () {
        function a(n) {
            var p =
                { $: null, G: null }; p.$ = n.createBuffer(); n.bindBuffer(n.ARRAY_BUFFER, p.$); n.bufferData(n.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), n.STATIC_DRAW); p.G = n.createBuffer(); n.bindBuffer(n.ELEMENT_ARRAY_BUFFER, p.G); n.bufferData(n.ELEMENT_ARRAY_BUFFER, new Uint16Array([0, 1, 2]), n.STATIC_DRAW); return p
        } var d = null, g = 0, h = !1, t = [], l = -2, v = -2, k = {
            reset: function () { v = l = -2 }, s: function () { h || (d = a(G), k.xb(), h = !0) }, instance: function (n) {
                var p = g++, C = n.G ? n.G.length : 0, E = "undefined" === typeof n.mode ? G.STATIC_DRAW : n.mode, m = G.createBuffer();
                G.bindBuffer(G.ARRAY_BUFFER, m); G.bufferData(G.ARRAY_BUFFER, n.$ instanceof Float32Array ? n.$ : new Float32Array(n.$), E); l = p; var q = null, D = null, w = null; if (n.G) { q = G.createBuffer(); G.bindBuffer(G.ELEMENT_ARRAY_BUFFER, q); var c = null; 65536 > n.G.length ? (c = Uint16Array, D = G.UNSIGNED_SHORT, w = 2) : (c = Uint32Array, D = G.UNSIGNED_INT, w = 4); c = n.G instanceof c ? n.G : new c(n.G); G.bufferData(G.ELEMENT_ARRAY_BUFFER, c, E); v = p } var F = {
                    de: function (M) { l !== p && (G.bindBuffer(G.ARRAY_BUFFER, m), l = p); M && Qa.fc() }, ae: function () {
                        v !== p && (G.bindBuffer(G.ELEMENT_ARRAY_BUFFER,
                            q), v = p)
                    }, bind: function (M) { F.de(M); F.ae() }, ag: function () { G.drawElements(G.TRIANGLES, C, D, 0) }, bg: function (M, J) { G.drawElements(G.TRIANGLES, M, D, J * w) }, remove: function () { G.deleteBuffer(m); n.G && G.deleteBuffer(q); F = null }
                }; t.push(F); return F
            }, xb: function () { -1 !== l && (G.bindBuffer(G.ARRAY_BUFFER, d.$), l = -1); -1 !== v && (G.bindBuffer(G.ELEMENT_ARRAY_BUFFER, d.G), v = -1) }, l: function (n, p) { n && Q.xb(); p && Qa.kb(); G.drawElements(G.TRIANGLES, 3, G.UNSIGNED_SHORT, 0) }, Ra: function (n) {
                n = n || G; var p = a(n); n.bindBuffer(n.ARRAY_BUFFER, p.$);
                n.bindBuffer(n.ELEMENT_ARRAY_BUFFER, p.G); Qa.lb(n); n.clear(n.COLOR_BUFFER_BIT); n.drawElements(n.TRIANGLES, 3, n.UNSIGNED_SHORT, 0); n.flush(); n.bindBuffer(n.ARRAY_BUFFER, null); n.bindBuffer(n.ELEMENT_ARRAY_BUFFER, null); n.deleteBuffer(p.$); n.deleteBuffer(p.G); k.reset(); h && (k.xb(), Qa.kb())
            }, Oc: function () { var n = G, p = d; n.deleteBuffer(p.$); n.deleteBuffer(p.G) }, m: function () {
                k.Oc(); t.forEach(function (n) { n.remove() }); G.bindBuffer(G.ARRAY_BUFFER, null); G.bindBuffer(G.ELEMENT_ARRAY_BUFFER, null); k.reset(); h = !1; t.splice(0);
                g = 0
            }
        }; return k
    }(), Ta = function () {
        var a = null, d = null, g = null, h = !1, t = [], l = { F: -2, Lc: 1 }, v = {
            bb: function () { return h }, s: function () { if (!h) { a = G.createFramebuffer(); var k = Sa.fa(); d = k && G.DRAW_FRAMEBUFFER ? G.DRAW_FRAMEBUFFER : G.FRAMEBUFFER; g = k && G.READ_FRAMEBUFFER ? G.READ_FRAMEBUFFER : G.FRAMEBUFFER; h = !0 } }, mg: function () { return d }, Fe: function () { return g }, Wa: function () { return G.FRAMEBUFFER }, qg: function () { return l }, eg: function () { return a }, instance: function (k) {
                void 0 === k.Zc && (k.Zc = !1); var n = k.va ? k.va : null, p = k.width, C = void 0 !==
                    k.height ? k.height : k.width, E = a, m = null, q = !1, D = !1, w = 0; n && (p = p ? p : n.B(), C = C ? C : n.S()); var c = {
                        Ed: function () { q || (E = G.createFramebuffer(), q = !0, w = l.Lc++) }, Vd: function () { c.Ed(); c.u(); m = G.createRenderbuffer(); G.bindRenderbuffer(G.RENDERBUFFER, m); G.renderbufferStorage(G.RENDERBUFFER, G.DEPTH_COMPONENT16, p, C); G.framebufferRenderbuffer(d, G.DEPTH_ATTACHMENT, G.RENDERBUFFER, m); G.clearDepth(1) }, bind: function (F, M) { w !== l.F && (G.bindFramebuffer(d, E), l.F = w); n && n.u(); M && G.viewport(0, 0, p, C); F && G.clear(G.COLOR_BUFFER_BIT | G.DEPTH_BUFFER_BIT) },
                        Rf: function () { w !== l.F && (G.bindFramebuffer(d, E), l.F = w) }, clear: function () { G.clear(G.COLOR_BUFFER_BIT | G.DEPTH_BUFFER_BIT) }, Xf: function () { G.clear(G.COLOR_BUFFER_BIT) }, Yf: function () { G.clear(G.DEPTH_BUFFER_BIT) }, Ef: function () { G.viewport(0, 0, p, C) }, u: function () { w !== l.F && (G.bindFramebuffer(d, E), l.F = w) }, rtt: function (F) { n = F; l.F !== w && (G.bindFramebuffer(G.FRAMEBUFFER, E), l.F = w); F.u() }, O: function () { G.bindFramebuffer(d, null); l.F = -1 }, resize: function (F, M) {
                            p = F; C = M; m && (G.bindRenderbuffer(G.RENDERBUFFER, m), G.renderbufferStorage(G.RENDERBUFFER,
                                G.DEPTH_COMPONENT16, p, C))
                        }, remove: function () { E === a || D || (G.bindFramebuffer(d, E), G.framebufferTexture2D(d, G.COLOR_ATTACHMENT0, G.TEXTURE_2D, null, 0), m && G.framebufferRenderbuffer(d, G.DEPTH_ATTACHMENT, G.RENDERBUFFER, null), G.bindFramebuffer(d, null), G.deleteFramebuffer(E), m && G.deleteRenderbuffer(m)); D = !0 }
                    }; k.Zc && c.Vd(); t.push(c); return c
            }, O: function () { G.bindFramebuffer(d, null); l.F = -1 }, Kf: function () { G.bindFramebuffer(d, null); G.clear(G.COLOR_BUFFER_BIT | G.DEPTH_BUFFER_BIT); Sa.Hd(); l.F = -1 }, reset: function () {
                l.F =
                -2
            }, aa: function () { 0 !== l.F && (G.bindFramebuffer(d, a), l.F = 0) }, clear: function () { Sa.Hd(); G.clear(G.COLOR_BUFFER_BIT) }, m: function () { v.O(); t.forEach(function (k) { k.remove() }); null !== a && (G.deleteFramebuffer(a), a = null); v.reset(); h = !1; t.splice(0); l.Lc = 1 }
        }; return v
    }(), Sa = function () {
        function a() { t = "undefined" === typeof Ua ? JEContext : Ua; l = !0 } function d(c, F) { for (var M = 0; M < c.length; ++M) { var J = F.getExtension(c[M]); if (J) return J } return null } function g() { null !== q.pb && (clearInterval(q.pb), q.pb = null); q.qa = !1 } function h() {
            q.Ca &&
            (G.deleteSync(q.Ca), q.Ca = null)
        } var t = null, l = !1, v = { ad: !1, ic: null, jc: null, dd: !1, We: !1, kc: null, ed: !1, lc: null, bd: !1, yb: null, Qe: !1, zb: null, Re: !1 }, k = null, n = { ba: !0, da: !0, Cb: !0, wd: !1 }, p = null, C = !0, E = null, m = null, q = { qa: !1, pa: null, Ca: null, Ib: -1, V: null, pb: null }, D = "undefined" === typeof window ? {} : window, w = {
            s: function () {
                if (l) return !0; w.reset(); l || a(); var c = G; if (!k.ad) { k.ic = w.Ic(c); D.GL_EXT_FLOAT = k.ic; k.dd = k.ic ? !0 : !1; if (k.dd || w.fa()) k.jc = w.Jc(c), k.We = k.jc ? !0 : !1, D.GL_EXT_FLOATLINEAR = k.jc; k.ad = !0 } if (!k.bd) {
                    k.kc = w.Pa(c);
                    k.kc && (k.ed = !0, D.GL_EXT_HALFFLOAT = k.kc); if (k.ed || w.fa()) k.lc = w.Kc(c), D.GL_EXT_HALFFLOATLINEAR = k.lc; k.wg = k.lc ? !0 : !1; k.bd = !0
                } k.yb = w.Gc(c); k.Qe = k.yb ? !0 : !1; D.GL_EXT_COLORBUFFERFLOAT = k.yb; k.zb = w.Hc(c); k.Re = k.zb ? !0 : !1; D.GL_EXT_COLORBUFFERHALFFLOAT = k.zb; Ta.s(); U.s(); if (!w.me()) return !1; Q.s(); U.Oe(); return !0
            }, reset: function () { k = Object.assign({}, v); p = Object.assign({}, n) }, B: function () { l || a(); return t.B() }, S: function () { l || a(); return t.S() }, fa: function () { l || a(); return t.fa() }, Fc: function (c) {
                w.Gc(c); w.Hc(c); w.Ic(c);
                w.Jc(c); w.Pa(c); w.Kc(c)
            }, Gc: d.bind(null, ["EXT_color_buffer_float", "WEBGL_color_buffer_float", "OES_color_buffer_float"]), Hc: d.bind(null, ["EXT_color_buffer_half_float", "WEBGL_color_buffer_half_float", "OES_color_buffer_half_float"]), Ic: d.bind(null, ["OES_texture_float", "MOZ_OES_texture_float", "WEBKIT_OES_texture_float"]), Jc: d.bind(null, ["OES_texture_float_linear", "MOZ_OES_texture_float_linear", "WEBKIT_OES_texture_float_linear"]), Pa: d.bind(null, ["OES_texture_half_float", "MOZ_OES_texture_half_float", "WEBKIT_OES_texture_half_float"]),
            Kc: d.bind(null, ["OES_texture_half_float_linear", "MOZ_OES_texture_half_float_linear", "WEBKIT_OES_texture_half_float_linear"]), Fb: function (c) { var F = w.Pa(c); return F && F.HALF_FLOAT_OES ? F.HALF_FLOAT_OES : c.HALF_FLOAT || c.FLOAT }, Ce: function () { return m || G.RGBA32F || G.RGBA }, De: function () { return E || G.RGBA16F || G.RGBA }, ze: function () { return p }, Cc: function () { return p.ba }, Wf: function () { return p.da }, Vf: function () { return p.Cb }, fe: function () { return p.wd && C }, Nd: function (c) {
                C = c; !c && q.qa && (h(), G.bindBuffer(q.V, null), q.qa =
                    !1)
            }, Cg: function () { return q.qa }, nb: function (c, F, M) {
                function J() { c.bindTexture(c.TEXTURE_2D, null); c.bindFramebuffer(R, null); c.deleteTexture(P); c.deleteFramebuffer(O) } var R = c.FRAMEBUFFER, r = c.NEAREST, O = c.createFramebuffer(); c.bindFramebuffer(R, O); var P = c.createTexture(); c.activeTexture(c.TEXTURE0); c.bindTexture(c.TEXTURE_2D, P); c.pixelStorei(c.UNPACK_FLIP_Y_WEBGL, !1); c.texParameteri(c.TEXTURE_2D, c.TEXTURE_WRAP_S, c.CLAMP_TO_EDGE); c.texParameteri(c.TEXTURE_2D, c.TEXTURE_WRAP_T, c.CLAMP_TO_EDGE); c.texParameteri(c.TEXTURE_2D,
                    c.TEXTURE_MAG_FILTER, r); c.texParameteri(c.TEXTURE_2D, c.TEXTURE_MIN_FILTER, r); c.texImage2D(c.TEXTURE_2D, 0, F, 3, 3, 0, c.RGBA, M, null); c.framebufferTexture2D(c.FRAMEBUFFER, c.COLOR_ATTACHMENT0, c.TEXTURE_2D, P, 0); if (c.checkFramebufferStatus(c.READ_FRAMEBUFFER || c.FRAMEBUFFER) !== c.FRAMEBUFFER_COMPLETE) return J(), !1; Qa.ec(c); c.clearColor(0, 0, 0, 0); c.viewport(0, 0, 3, 3); c.disable(c.DEPTH_TEST); c.clear(c.COLOR_BUFFER_BIT); Q.Ra(c); c.bindFramebuffer(R, null); Qa.Ga(c); c.activeTexture(c.TEXTURE0); c.bindTexture(c.TEXTURE_2D,
                        P); Q.Ra(c); F = new Uint8Array(36); c.readPixels(0, 0, 3, 3, c.RGBA, c.UNSIGNED_BYTE, F); J(); for (M = 0; 36 > M; ++M)if (3 !== M % 4 && 3 < Math.abs(F[M] - 127)) return !1; return !0
            }, Ab: function (c) { var F = { ba: !1, da: !1 }; c.disable(c.BLEND); c.clearColor(0, 0, 0, 0); c.clear(c.COLOR_BUFFER_BIT); c.RGBA32F && w.nb(c, c.RGBA32F, c.FLOAT) && (F.ba = !0, m = c.RGBA32F); !F.ba && w.nb(c, c.RGBA, c.FLOAT) && (F.ba = !0, m = c.RGBA); var M = w.Fb(c); E = null; c.RGBA16F && w.nb(c, c.RGBA16F, M) && (F.da = !0, E = c.RGBA16F); !F.da && w.nb(c, c.RGBA, M) && (F.da = !0, E = c.RGBA); return F }, oe: function () {
                var c =
                    Ta.instance({ width: 2 }); c.Ed(); var F = U.instance({ width: 2, isFloat: !0, fb: 3 }); c.u(); F.u(); w.flush(); G.checkFramebufferStatus(Ta.Fe()) !== G.FRAMEBUFFER_COMPLETE ? (U.zf(), p.Cb = !1) : p.Cb = !0; c.remove(); F.remove()
            }, pe: function () { var c = !1; w.fa() && (c = "PIXEL_PACK_BUFFER STREAM_READ SYNC_GPU_COMMANDS_COMPLETE WAIT_FAILED fenceSync deleteSync createBuffer".split(" ").every(function (F) { return "undefined" !== typeof G[F] })); p.wd = c }, me: function () { var c = w.Ab(G); Object.assign(p, c); if (!p.ba && !p.da) return !1; w.oe(); w.pe(); return !0 },
            mf: function (c, F, M, J, R) { G.readPixels(c, F, M, J, G.RGBA, G.UNSIGNED_BYTE, R); return Promise.resolve(R, !1) }, dc: function (c, F, M, J, R, r) {
                if (!w.fe()) return w.mf(c, F, M, J, R); null === q.pa && (q.V = G.PIXEL_PACK_BUFFER, q.pa = G.createBuffer(), q.Ib = -1); G.bindBuffer(q.V, q.pa); R.byteLength !== q.Ib && (G.bufferData(q.V, R.byteLength, G.STREAM_READ), q.Ib = R.byteLength); G.readPixels(c, F, M, J, G.RGBA, G.UNSIGNED_BYTE, 0); q.Ca = G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE, 0); w.flush(); var O = !1; return new Promise(function (P, u) {
                    function e() {
                        if (!q.qa) return g(),
                            u(), !1; switch (G.clientWaitSync(q.Ca, 0, 0)) { case G.TIMEOUT_EXPIRED: case G.WAIT_FAILED: return !1; default: return g(), h(), G.getBufferSubData(q.V, 0, R), G.bindBuffer(q.V, null), P(R, O), !0 }
                    } g(); q.qa = !0; e() || (r && !O && (O = !0, r()), q.pb = setInterval(e, 0))
                })
            }, Hd: function () { G.viewport(0, 0, w.B(), w.S()) }, flush: function () { G.flush() }, m: function () { g(); h(); U.m(); Ta.m(); Q.m(); null !== q.pa && (G.deleteBuffer(q.pa), q.pa = null); Qa.reset(); l = !1 }
        }; return w
    }(), Ra = function () {
        function a(r, O, P, u) {
            c.texParameteri(c.TEXTURE_2D, c.TEXTURE_MIN_FILTER,
                u ? c.NEAREST_MIPMAP_NEAREST : c.LINEAR); var e = null; if (null !== P) try { e = c.getError(); if ("FUCKING_BIG_ERROR" === e) return !1; c.texImage2D(c.TEXTURE_2D, 0, r, 4, 4, 0, c.RGBA, O, P); e = c.getError(); if (e !== c.NO_ERROR) return !1 } catch (z) { return !1 } u && c.generateMipmap(c.TEXTURE_2D); c.clear(c.COLOR_BUFFER_BIT); Q.Ra(c); e = c.getError(); if ("FUCKING_BIG_ERROR" === e) return !1; c.readPixels(0, 0, 2, 2, c.RGBA, c.UNSIGNED_BYTE, C); e = c.getError(); e === c.INVALID_OPERATION && "undefined" !== typeof c.PIXEL_PACK_BUFFER && (c.bindBuffer(c.PIXEL_PACK_BUFFER,
                    null), c.readPixels(0, 0, 2, 2, c.RGBA, c.UNSIGNED_BYTE, C), e = c.getError()); if (e !== c.NO_ERROR) return !1; P = !0; for (u = 0; 16 > u; ++u)P = P && 4 > Math.abs(C[u] - 127); P && (n.pd = O, n.Yc = r); return P
        } function d(r, O) { return F.ba && a(r, c.FLOAT, new Float32Array(E), O) ? (k = v.vc, !0) : !1 } function g(r, O, P) {
            if (!F.da) return !1; var u = U.je(E), e = Sa.Pa(c); if (e && e.HALF_FLOAT_OES && a(r, e.HALF_FLOAT_OES, u, O) || c.HALF_FLOAT && a(r, c.HALF_FLOAT, u, O)) return k = v.ya, !0; u = new Float32Array(E); if (a(r, c.FLOAT, u, O)) return k = v.ya, !0; c.bindTexture(c.TEXTURE_2D,
                P); c.texImage2D(c.TEXTURE_2D, 0, c.RGBA, 2, 2, 0, c.RGBA, c.UNSIGNED_BYTE, null); c.bindFramebuffer(n.Na, R); U.Mc(c, P, 2, 2, u, !1, !1); c.bindFramebuffer(n.Na, null); c.bindTexture(c.TEXTURE_2D, P); return a(r, null, null, O) ? (k = v.ya, !0) : !1
        } function h(r, O, P) { p = !0; if (g(r, !0, P) || d(O, !0)) return !0; p = !1; return g(r, !1, P) || d(O, !1) ? !0 : !1 } function t(r) {
            if (k === v.P) {
                c = r || G; k = v.RGBA8; p = !0; Sa.Fc(c); F || (F = Sa.Ab(c)); Ta.reset(); R = c.createFramebuffer(); n.Na = c.DRAW_FRAMEBUFFER || c.FRAMEBUFFER; c.bindFramebuffer(n.Na, null); c.clearColor(0,
                    0, 0, 0); c.viewport(0, 0, 2, 2); I.P(); M = I.Ga(c); r = c.createTexture(); c.activeTexture(c.TEXTURE0); c.bindTexture(c.TEXTURE_2D, r); c.texParameteri(c.TEXTURE_2D, c.TEXTURE_WRAP_S, c.REPEAT); c.texParameteri(c.TEXTURE_2D, c.TEXTURE_WRAP_T, c.REPEAT); c.texParameteri(c.TEXTURE_2D, c.TEXTURE_MAG_FILTER, c.NEAREST); J = r; var O = r = c.RGBA, P = c.RGBA16F, u = c.RGBA32F; u && (r = u); P && (O = P); if ((P || u) && h(O, r, J)) return l(), !0; r = O = c.RGBA; if (h(O, r, J)) return l(), !0; k = v.RGBA8; l(); return !1
            }
        } function l() {
            c.deleteProgram(M.ma); c.deleteTexture(J);
            J = M = null
        } for (var v = { P: -1, vc: 3, ya: 2, RGBA8: 0 }, k = v.P, n = { pd: null, Yc: null, Na: null }, p = !0, C = new Uint8Array(16), E = Array(64), m = 0; 4 > m; ++m)for (var q = 0; 4 > q; ++q) { var D = 0 === (q + m) % 2 ? 1 : 0, w = 4 * m + q; E[4 * w] = D; E[4 * w + 1] = D; E[4 * w + 2] = D; E[4 * w + 3] = D } var c = null, F = null, M = null, J = null, R = null; return {
            ee: function (r) { t(r); return p }, Bc: function (r, O) { k === v.P && (typeof ("undefined" !== O) && (F = O), t(r)); return k !== v.RGBA8 }, zg: function (r) { t(r); return k === v.vc }, Xe: function (r) { t(r); return k === v.ya }, ng: function (r) { t(r); return n.pd }, Ee: function (r) {
                t(r);
                return n.Yc
            }, m: function () { c = null; p = !0; k = v.P; F = null }
        }
    }(), Xa = { instance: function (a) { var d = U.instance(a.alpha), g = U.instance(a.beta); return { re: function () { d.g(1); g.g(2) } } } }, $a = {
        instance: function (a) {
            var d = null, g = !1, h = !1, t = null, l = !1, v = !1, k = null, n = "undefined" === typeof a.preprocessing ? !1 : a.preprocessing, p = "undefined" === typeof a.preprocessingSize ? a.size : a.preprocessingSize; a.mask && (g = !0, b && void 0 !== b.$d && (a.mask = b.$d + a.mask), d = U.instance({ isFloat: !1, url: a.mask })); var C = !1; a.customInputShader && (C = "s45", I.wc({
                name: "_",
                id: C, h: a.customInputShader, Pg: ["uSource"], precision: "lowp"
            }), I.I(C, [{ type: "1i", name: "_", value: 0 }])); switch (n) {
                case "sobel": k = "s32"; l = !0; break; case "meanNormalization": k = "s33"; l = !0; break; case "grayScale": k = "s29"; l = !1; break; case "grayScaleTilt": k = "s30"; v = !0; l = !1; break; case "rgbGrayTilt": k = "s31"; v = !0; l = !1; break; case "copy": k = C ? C : "s0"; break; case "inputLightRegulation": k = C ? C : "s29"; t = Ya.instance({ Xc: p, od: a.size, md: a.nBlurPass, ab: !1 }); h = !0; break; case "inputMix0": k = "none"; t = Za.instance({
                    M: p, Pd: a.varianceMin,
                    Ac: a.blurKernelSizePx, ab: !1
                }); h = !0; break; case "direct": case "none": k = "abort"; break; default: k = "s4"
            }v && I.I(k, [{ name: "u27", type: "1f", value: a.tilt }]); g && (k += "Mask"); var E = U.instance({ isFloat: !1, isPot: !1, width: a.size }), m = { B: function () { return p }, Gb: function () { return m.B() }, Le: function () { return h ? t.Hb() : E }, N: function (q) { Ta.aa(); "abort" !== k && ("none" !== k && (I.set(k), l && I.H("u28", 1 / a.size), E.T(), g && d.g(1), Q.l(!1, !1), E.g(0), q = E), h && t.process(q)) }, m: function () { E.remove(); g && d.remove() } }; return m
        }
    }, ib = {
        instance: function (a) {
            function d(f) {
                t.forEach(function (A,
                    B) { l[B][0] = f[0][A]; l[B][1] = f[1][A]; l[B][2] = f[2][A]; l[B][3] = f[3][A] }); return l
            } a.normalize = a.normalize || !1; var g = { input: null, bias: null, Lb: null, Y: null, gb: null, $b: null, ac: null }, h = null, t = [], l = [], v = !1, k = null, n = !0, p = -1, C = a.isReorganize ? a.isReorganize : !1, E = a.kernelsCount ? !0 : !1, m = a.dynPelu ? Xa.instance(a.dynPelu) : !1, q = m ? !0 : !1, D = { isEnabled: !1 }; a.Ve ? (a.sparsity = "undefined" !== typeof a.sparsity ? a.sparsity : a.ib.Gb(), n = !1) : "full" === a.connectivityUp && (a.sparsity = a.ib.Gb()); var w = {
                elu: "s16", elu01: "s17", relu: "s15",
                arctan: "s19", sigmoid: "s14", copy: "s0", softplus: "s20", dynPelu: "s18"
            }[a.activation], c = a.sparsity * a.sparsity, F = !1, M = a.size, J = ""; if (a.maxPooling) { switch (a.maxPooling.size) { case 2: J = "s34"; break; case 4: J = "s35" }F = !0; M /= a.maxPooling.size; g.$b = U.instance({ isFloat: !0, isPot: !1, width: M }) } var R = a.normalization ? !0 : !1, r = null, O = null, P = null; if (R) {
                r = "s46" + a.index.toString(); I.Wc("s46", r, [((a.normalization.n - 1) / 2).toFixed(1)]); I.I(r, [{ type: "1i", name: "u1", value: 0 }, { type: "2f", name: "u8", value: [1 / a.size, 1 / a.size] }, {
                    type: "1f",
                    name: "u7", value: a.normalization.alpha
                }, { type: "1f", name: "u10", value: a.normalization.beta }, { type: "1f", name: "u31", value: a.normalization.k }]); var u = { isFloat: !0, isPot: !0, width: a.size }; O = U.instance(u); P = U.instance(u)
            } var e = -1, z = null; n && (g.Y = U.instance({ isFloat: !0, isPot: !1, width: a.size })); g.bias = U.instance(a.bias); var K = {
                B: function () { return a.size }, Gb: function () { return M }, Pc: function () { return a.classesCount }, be: function (f) { h.g(f) }, ef: function () {
                    a.remap && a.remap.isEnabled && (D = {
                        isEnabled: !0, Ye: U.instance({
                            isFloat: !1,
                            isFlipY: !1, array: new Uint8Array(a.remap.maskTexture.data), width: a.remap.maskTexture.width, isPot: !1
                        }), eb: a.remap.layers.map(function (f) { return a.parent.Ie(f) }), depth: a.remap.depth
                    })
                }, Af: function () {
                    switch (a.connectivityUp) {
                        case "direct": z = db.instance(a.connectivity); break; case "square": z = eb.instance(a.connectivity); break; case "squareFast": z = fb.instance(a.connectivity, a.activation); break; case "full": z = gb.instance(a.connectivity); break; case "conv": p = a.kernelsCount, z = hb.instance(a.connectivity), C && (g.gb =
                            U.instance({ width: M, isFloat: !0, isFlipY: !1, isPot: !1 }))
                    }if (z.ua) { var f = a.size * a.sparsity; e = Math.log(f / a.size) / Math.log(2); g.input = U.instance({ isMipmap: !0, isFloat: !0, isPot: !0, width: f, Sb: e }); g.Lb = U.instance({ isFloat: !0, isPot: !0, width: a.size }) }
                }, N: function (f, A) {
                    h = f; z.ua ? (g.input.T(), E && g.bias.g(2), z.N(D), g.input.g(0), g.input.ye(e), g.Lb.T(), E ? I.set("s0") : (I.set("s28"), I.H("u26", c), g.bias.g(1)), g.input.ce(e, 0), Q.l(!1, !1), I.set(w), R ? O.u() : g.Y.u(), g.Lb.g(0), q && m.re(), Q.l(!1, !1)) : (g.Y.T(), g.bias.g(1), z.N());
                    R && (I.set(r), P.u(), O.g(0), Q.l(!1, !1), I.set("s47"), I.H("u7", 1), g.Y.u(), P.g(1), Q.l(!1, !1)); if (n) return F ? (g.$b.T(), g.Y.g(0), I.set(J), I.na("u8", 1 / a.size, 1 / a.size), Q.l(!1, !1), A = g.$b) : A = g.Y, A.g(0), C && (g.gb.u(), I.set("s22"), I.na("u13", p, M / p), Q.l(!1, !1), A = g.gb, g.gb.g(0)), A; var B = g.Y; a.normalize && (I.set("gpuRawAvg" === v ? "s9" : "s8"), I.H("u4", 1 / a.size), g.ac.T(), g.Y.g(0), Q.l(!1, !1), B = g.ac); f = null; switch (v) {
                        case "cpuRGBA2Float": B.Bb(!1); A ? f = K.gf(B).then(k) : (B = K.hf(B), k(B)); break; case "cpuMeanFloat": B.Bb(!0); if (A) f =
                            B.kf().then(k); else { B = B.lf(); for (var S = 0; S < B.length; ++S); k(B) } break; case "gpuRawAvg": case "gpuRaw": B.g(0); case "none": null !== k && k(B)
                    }A && null === f && (f = Promise.resolve()); return f
                }, ke: function (f) {
                    f && (v = f.bc || "none", k = f.Zb || null); g.Y = U.instance({ isFloat: !0, isPot: !0, isMipmap: !1, width: a.size }); f = "undefined" !== typeof a.classesCount && a.classesCount ? a.classesCount : a.size * a.size; for (var A = 0, B = 0, S = 0; A < f; ++A)t.push(B + (a.size - 1 - S) * a.size), l.push([-1, -1, -1, -1]), ++B, B === a.size && (B = 0, ++S); a.normalize && (g.ac = U.instance({
                        isFloat: !0,
                        isPot: !0, width: a.size
                    }))
                }, gf: function (f) { return f.jf().then(d) }, hf: function (f) { f = f.cc(); d(f); return l }, m: function () { for (var f in g) { var A = g[f]; A && A.remove() } z && (z.m(), z = null) }
            }; a.ib && K.Af(a.ib); return K
        }
    };
    function jb(a) {
        var d = null, g = null, h = null, t = 0; this.s = function (l) { this.yf(l.eb); h.ke({ bc: l.bc, Zb: l.Zb }) }; this.Ie = function (l) { return d[l] }; this.yf = function (l) { var v = null; t = l.length; d = l.map(function (k, n) { k = Object.assign({}, k, { index: n, parent: this, ib: v, Ve: n === t - 1 }); return v = n = 0 === n ? $a.instance(k) : ib.instance(k) }); g = d[0]; h = d[t - 1]; d.forEach(function (k, n) { 0 !== n && k.ef() }) }; this.N = function (l) { l.g(0); var v = l; d.forEach(function (k) { v = k.N(v, !1) }); return v }; this.Ge = function () { return g.B() }; this.Me = function () { return h.B() };
        this.Hb = function () { return h.Le() }; this.Pc = function () { return h.Pc() }; this.m = function () { d && (d.forEach(function (l) { l.m() }), h = g = d = null, t = 0) }; "undefined" !== typeof a && this.s(a)
    }
    var db = { instance: function (a) { var d = U.instance(a.weights); return { ua: !0, Va: function () { return 1 }, m: function () { d.remove() }, Ne: function () { return d }, N: function () { I.set("s27"); d.g(1); Q.l(!1, !1) } } } }, gb = {
        instance: function (a) {
            var d = a.fromLayerSize, g = U.instance(a.weights); return {
                ua: !0, Va: function () { return d }, m: function () { g.remove() }, N: function (h) {
                    if (h.isEnabled) { I.set("s25"); h.Ye.g(3); var t, l = Math.min(h.eb.length, h.depth); for (t = 0; t < l; ++t)h.eb[t].be(4 + t) } else I.set("s24"); I.H("u17", a.toLayerSize); g.g(1); Q.l(!1,
                        !1)
                }
            }
        }
    }, eb = {
        instance: function (a) {
            for (var d = a.fromLayerSize, g = a.toLayerSize, h = a.toSparsity, t = h * g, l = t / d, v = d / g, k = 0, n = 0, p = 0, C = Array(h * g * h * g * 4), E = Array(h * g * h * g * 4), m = Array(d * d), q = 0; q < m.length; ++q)m[q] = 0; q = Math.floor(h / 2); for (var D = .5 / g, w = .5 / d, c = .5 / t, F = 0; F < g; ++F)for (var M = Math.round(F * v), J = 0; J < g; ++J) {
                var R = Math.round(J * v), r = F / g, O = J / g; r += D; O += D; for (var P = 0; P < h; ++P) {
                    var u = M + P - q; 0 > u && (u += d); u >= d && (u -= d); for (var e = 0; e < h; ++e) {
                        var z = k / t, K = n / t, f = R + e - q; 0 > f && (f += d); f >= d && (f -= d); var A = u / d, B = f / d; K = 1 - K - 1 / t; A += w; B +=
                            w; z += c; K += c; var S = F * h + P, N = J * h + e; N = g * h - N - 1; S = N * g * h + S; C[4 * S] = z; C[4 * S + 1] = K; C[4 * S + 2] = A; C[4 * S + 3] = B; B = m[f * d + u]++; S = B % l; A = u * l + S; f = f * l + (B - S) / l; f = d * l - 1 - f; f = f * d * l + A; E[4 * f] = z; E[4 * f + 1] = K; E[4 * f + 2] = r; E[4 * f + 3] = O; ++k >= t && (k = 0, ++n); ++p
                    }
                }
            } m = null; var ka = U.instance(a.weights); delete a.weights.data; var fa = U.instance({ width: t, isFloat: !0, array: new Float32Array(E), isPot: !0 }); E = null; var na = U.instance({ width: t, isFloat: !0, array: new Float32Array(C), isPot: !0 }); C = null; return {
                ua: !0, Va: function () { return l }, m: function () {
                    fa.remove();
                    na.remove(); ka.remove()
                }, N: function () { I.set("s23"); ka.g(1); na.g(2); Q.l(!1, !1) }
            }
        }
    }, hb = { instance: function (a) { var d = a.kernelsCount, g = a.toSparsity, h = g * a.toLayerSize / a.fromLayerSize, t = U.instance(a.weights); return { ua: !0, Va: function () { return h }, tg: function () { return g }, Ne: function () { return t }, m: function () { t.remove() }, N: function () { I.set("s26"); I.H("u23", d); I.H("u24", g); I.H("u17", a.toLayerSize); I.H("u25", a.fromLayerSize); t.g(1); Q.l(!1, !1) } } } }, fb = {
        instance: function (a, d) {
            var g = a.fromLayerSize, h = a.toLayerSize,
            t = a.toSparsity, l = a.stride ? a.stride : 1, v = t * h / g, k = h < g, n = g / h, p = U.instance(a.weights), C = "s48" + [g.toString(), h.toString(), t.toString(), l.toString(), d].join("_"); I.ve(C) || (a = Ka(d), h = [{ type: "1f", name: "u17", value: h }, { type: "1f", name: "u30", value: l }], k && h.push({ type: "1f", name: "u25", value: g }), g = [(k ? v : t).toFixed(1), a], k && g.push(n.toFixed(1)), I.Wc(k ? "s40" : "s39", C, g), I.I(C, h.concat([{ type: "1i", name: "u15", value: 0 }, { type: "1i", name: "u22", value: 1 }, { type: "1i", name: "u14", value: 3 }]))); return {
                ua: !1, Va: function () { return v },
                m: function () { p.remove() }, N: function () { I.set(C); p.g(3); Q.l(!1, !1) }
            }
        }
    }, Ya = {
        instance: function (a) {
            var d = a.md ? a.md : 3, g = a.Xc ? a.Xc : 64, h = a.od ? a.od : 64, t = a.ab ? !0 : !1; a = { isFloat: !1, width: g, isPot: !1, isFlipY: !1 }; var l = U.instance(a), v = U.instance(a), k = U.instance(a), n = U.instance(a), p = U.instance({ isFloat: !0, width: h, isPot: !1, isFlipY: !1 }), C = 1 / g; return {
                process: function (E) {
                    I.set("s36"); n.u(); Q.l(t, !1); I.set("s37"); for (var m = 0; m < d; ++m)l.u(), I.na("u8", C, 0), Q.l(t, !1), k.u(), n.g(0), Q.l(t, !1), v.u(), l.g(0), I.na("u8", 0, C), Q.l(t,
                        !1), n.u(), k.g(0), Q.l(t, !1), m !== d - 1 && v.g(0); I.set("s38"); p.u(); E.g(0); v.g(1); n.g(2); Q.l(t, !1); p.g(0)
                }, Hb: function () { return p }
            }
        }
    }, Za = {
        instance: function (a) {
            function d(p) { return U.instance({ isFloat: p, width: g.M, isPot: !1, isFlipY: !1 }) } var g = Object.assign({ Pd: .1, Ac: 9, M: 128, ab: !1 }, a), h = d(!1), t = [d(!1), d(!1), d(!1)], l = [d(!1), d(!1), d(!1)], v = d(!0), k = [h, l[0], l[1]]; a = "uniform sampler2D u1;const float e=1.1111,g=2.2222;uniform vec2 u32;varying vec2 vv0;void main(){float b=0.,c=0.;for(float a=-e;a<=e;a+=1.){vec2 i=u32*a,j=vv0+i*g;float d=1.2*a/e,f=exp(-d*d);b+=f*texture2D(u1,j).r,c+=f;}b/=c,gl_FragColor=vec4(b,0.,0.,1.);}".replace("1.1111",
                Math.round((g.Ac - 1) / 2).toFixed(2)).replace("2.2222", (1 / g.M).toFixed(6)); var n = { u1: 0 }; I.xc([{ id: "s50", name: "_", h: "uniform sampler2D u1;varying vec2 vv0;const vec3 f=vec3(.2126,.7152,.0722),g=vec3(1.,1.,1.);void main(){vec3 b=texture2D(u1,vv0).rgb;float a=dot(b,f);gl_FragColor=vec4(a,a,a,a);}", j: n, i: ["u1"], precision: "lowp" }, { id: "s51", name: "_", h: a, j: n, i: ["u1", "u32"], precision: "lowp" }, {
                    id: "s52", name: "_", h: "uniform sampler2D u33,u34,u35,u36;const float f=1.1111;const vec3 g=vec3(1.,1.,1.);varying vec2 vv0;void main(){vec3 a=texture2D(u33,vv0).rgb;float c=texture2D(u34,vv0).r,d=texture2D(u35,vv0).r,h=texture2D(u36,vv0).r,i=a.r*a.r;vec3 b=vec3(c,d,h),j=max(g*f,abs(i-b*b)),k=sqrt(j);gl_FragColor=vec4(a.r,(a-b)/k);}".replace("1.1111",
                        g.Pd.toFixed(4)), j: { u33: 0, u34: 1, u35: 2, u36: 3 }, i: ["u33", "u34", "u35", "u36"], precision: "highp"
                }]); return { process: function () { I.set("s50"); h.T(); Q.l(g.ab, !1); I.set("s51"); for (var p = 0; 3 > p; ++p)I.na("u32", 1, 0), t[p].u(), k[p].g(0), Q.l(!1, !1), I.na("u32", 0, 1), l[p].u(), t[p].g(0), Q.l(!1, !1); I.set("s52"); v.u(); h.g(0); l[0].g(1); l[1].g(2); l[2].g(3); Q.l(!1, !1); v.g(0) }, Hb: function () { return v } }
        }
    }; function kb(a, d) { a[d] = !0; a.setAttribute(d, "true") }
    function lb() { return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream } function mb() { var a = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/); return a && a.length && 2 < a.length ? [parseInt(a[1], 10), parseInt(a[2], 10), parseInt(a[3] || 0, 10)] : [0, 0, 0] } function nb() { var a = navigator.userAgent.toLowerCase(); return -1 !== a.indexOf("safari") && -1 === a.indexOf("chrome") ? !0 : !1 } function ob() { return navigator.mediaDevices && navigator.mediaDevices.getUserMedia ? !0 : !1 }
    function pb(a) { if (!a) return a; var d = null; if (a.video) { var g = function (h) { return h && "object" === typeof h ? Object.assign({}, h) : h }; d = {}; "undefined" !== typeof a.video.width && (d.width = g(a.video.width)); "undefined" !== typeof a.video.height && (d.height = g(a.video.height)); "undefined" !== typeof a.video.facingMode && (d.facingMode = g(a.video.facingMode)) } d = { audio: a.audio, video: d }; "undefined" !== typeof a.deviceId && qb(d, a.deviceId); return d }
    function qb(a, d) { d && (a.video = a.video || {}, a.video.deviceId = { exact: d }, a.video.facingMode && delete a.video.facingMode) } function sb(a) { var d = a.video.width; a.video.width = a.video.height; a.video.height = d; return a }
    function tb(a) {
        function d(m) { return [480, 576, 640, 648, 720, 768, 800, 960, 1080, 1152, 1280, 1366, 1920].sort(function (q, D) { return Math.abs(q - m) - Math.abs(D - m) }) } function g(m) { var q = pb(a); m = m(q); t.push(m); h(m) } function h(m) { if (m.video && m.video.facingMode && m.video.facingMode.exact) { var q = m.video.facingMode.exact; m = pb(m); delete m.video.facingMode.exact; m.video.facingMode.ideal = q; t.push(m) } } var t = []; if (!a || !a.video) return t; h(a); if (a.video.width && a.video.height) {
            if (a.video.width.ideal && a.video.height.ideal) {
                var l =
                    d(a.video.width.ideal).slice(0, 3), v = d(a.video.height.ideal).slice(0, 3), k = {}, n = 0; for (k.ja = void 0; n < l.length; k = { ja: k.ja }, ++n) { k.ja = l[n]; var p = {}, C = 0; for (p.ia = void 0; C < v.length; p = { ia: p.ia }, ++C)if (p.ia = v[C], k.ja !== a.video.width.ideal || p.ia !== a.video.height.ideal) { var E = Math.max(k.ja, p.ia) / Math.min(k.ja, p.ia); E < 4 / 3 - .1 || E > 16 / 9 + .1 || g(function (m, q) { return function (D) { D.video.width.ideal = m.ja; D.video.height.ideal = q.ia; return D } }(k, p)) } }
            } g(function (m) { return sb(m) })
        } a.video.width && a.video.height && (a.video.width.ideal &&
            a.video.height.ideal && g(function (m) { delete m.video.width.ideal; delete m.video.height.ideal; return m }), g(function (m) { delete m.video.width; delete m.video.height; return m })); a.video.facingMode && (g(function (m) { delete m.video.facingMode; return m }), a.video.width && a.video.height && g(function (m) { sb(m); delete m.video.facingMode; return m })); t.push({ audio: a.audio, video: !0 }); return t
    }
    function vb(a) { try { var d = window.matchMedia("(orientation: portrait)").matches ? !0 : !1 } catch (h) { d = window.innerHeight > window.innerWidth } if (d && a && a.video) { d = a.video.width; var g = a.video.height; d && g && d.ideal && g.ideal && d.ideal > g.ideal && (a.video.height = d, a.video.width = g) } }
    function wb(a) { a.volume = 0; kb(a, "muted"); if (nb()) { if (1 === a.volume) { var d = function () { a.volume = 0; window.removeEventListener("mousemove", d, !1); window.removeEventListener("touchstart", d, !1) }; window.addEventListener("mousemove", d, !1); window.addEventListener("touchstart", d, !1) } setTimeout(function () { a.volume = 0; kb(a, "muted") }, 5) } }
    function xb(a, d, g, h) {
        function t(v) { l || (l = !0, g(v)) } var l = !1; navigator.mediaDevices.getUserMedia(h).then(function (v) {
            function k() {
                setTimeout(function () {
                    if (a.currentTime) {
                        var p = a.videoWidth, C = a.videoHeight; if (0 === p || 0 === C) t("VIDEO_NULLSIZE"); else {
                            p && (a.style.width = p.toString() + "px"); C && (a.style.height = C.toString() + "px"); var E = { ge: null, Ff: null, Ze: null }; try { var m = v.getVideoTracks()[0]; m && (E.Ze = m, E.ge = m.getCapabilities(), E.Ff = m.getSettings()) } catch (q) { } nb() || lb() ? a.parentNode && null !== a.parentNode ? (l || d(a,
                                v, E), setTimeout(function () { a.play() }, 100)) : (document.body.appendChild(a), wb(a), setTimeout(function () { a.style.transform = "scale(0.0001,0.0001)"; a.style.position = "fixed"; a.style.bottom = "0px"; a.style.right = "0px"; wb(a); setTimeout(function () { a.play(); l || d(a, v, E) }, 100) }, 80)) : l || d(a, v, E)
                        }
                    } else t("VIDEO_NOTSTARTED")
                }, 700)
            } function n() { a.removeEventListener("loadeddata", n, !1); var p = a.play(); wb(a); "undefined" === typeof p ? k() : p.then(function () { k() }).catch(function () { t("VIDEO_PLAYPROMISEREJECTED") }) } "undefined" !==
                typeof a.srcObject ? a.srcObject = v : (a.src = window.URL.createObjectURL(v), a.videoStream = v); wb(a); a.addEventListener("loadeddata", n, !1)
        }).catch(function (v) { t(v) })
    }
    function yb(a, d, g) {
        var h = ob() ? document.createElement("video") : !1; if (h) if (ob()) {
            if (g && g.video) { if (lb()) { var t = mb(); 0 !== t[0] && (12 > t[0] || 12 === t[0] && 2 > t[1]) && vb(g) } g.video.width && g.video.width.ideal && (h.style.width = g.video.width.ideal + "px"); g.video.height && g.video.height.ideal && (h.style.height = g.video.height.ideal + "px") } kb(h, "autoplay"); kb(h, "playsinline"); g && g.audio ? h.volume = 0 : kb(h, "muted"); xb(h, a, function () {
                function l(k) {
                    if (0 === k.length) d("INVALID_FALLBACKCONSTRAINTS"); else {
                        var n = k.shift(); xb(h, a, function () { l(k) },
                            n)
                    }
                } var v = tb(g); l(v)
            }, g)
        } else d && d("MEDIASTREAMAPI_NOTFOUND"); else d && d("VIDEO_NOTPROVIDED")
    }
    var zb = function () {
        function a(D, w, c, F, M, J, R) { if (!m) if (R === J.length) M(); else { switch (J[R]) { case "A": c(); break; case "D": D(); break; case "S": w().then(function (r, O) { q.Md(); a(D, w, c, O ? null : F, M, J, ++R) }).catch(function (r) { M(); throw r; }); return; case "R": F && F() }a(D, w, c, F, M, J, ++R) } } var d = { n: 5, Ub: 1, kd: 0, Ta: [35, 49], Oa: [2, 200], k: .7, Mf: 200, df: .05 }, g = -1, h = null, t = -1, l = -1, v = 0, k = -1, n = -1, p = 0, C = 0, E = d.Oa[1], m = !0, q = {
            Je: function () { switch (g) { case -1: return -1; case 0: return n + h.kd; case 1: return p } }, Ae: function (D) {
                return Math.pow(Math.min(Math.max(k,
                    0), h.n - 1) / (h.n - 1), D || 1)
            }, s: function (D) { h = Object.assign({}, d, D); k = n = h.Ub; g = 0; q.reset() }, Md: function (D) { D = ("undefined" === typeof D ? Date.now() : D) || 0; var w = Math.min(Math.max(D - C, h.Oa[0]), h.Oa[1]); E = w; C = D; var c = -1 === t ? 0 : h.k; t = Math.min(Math.max(1E3 / w, 5), 120) * (1 - c) + t * c; D - l > h.Mf && 5 < ++v && (w = h.k, k = k * (1 - w) + (t < h.Ta[0] ? n - 1 : t > h.Ta[1] ? n + 1 : n) * w, Math.abs(k - n) > 1 - h.df && (w = Math.min(Math.max(Math.round(k), 0), h.n - 1), w !== n && (k = n = w, t = (h.Ta[1] - h.Ta[0]) / 2)), l = D) }, yd: function (D, w, c, F, M, J) { m = !1; a(D, w, c, F, M, J, 0) }, stop: function () {
                m =
                !0
            }, xf: function (D) { p = D; g = 1 }, Lf: function () { g = 0; q.reset() }, reset: function () { E = d.Oa[1]; l = t = -1; v = 0 }, kg: function () { return E }
        }; return q
    }(), Ab = function () {
        function a() { g(w + q.Tb); c.port.postMessage("DONE") } function d() { var e = q.R; r.isEnabled && (e = Math.max(e, r.R)); R.Ka = 0 === e ? M(g) : M(h) } function g(e) { J.ra && null !== D && (e -= w, e = Math.min(Math.max(e, q.Ec[0]), q.Ec[1]), w += e, l(), r.isEnabled && r.Da && J.X && w - r.Pb > q.tc && (p(), r.Pb = w), D(w)) } function h(e) { J.ra && (R.timeout = window.setTimeout(g.bind(null, e), q.R)) } function t() {
            D = null;
            J.ra = !1; l()
        } function l() { R.Ka && (window.cancelAnimationFrame(R.Ka), R.Ka = null); R.timeout && (window.clearTimeout(R.timeout), R.timeout = null) } function v(e) { e && !J.X ? (J.X = !0, F && zb.Lf(), c.port.postMessage("STOP"), Sa.Nd(!0), d()) : !e && J.X && (J.X = !1, F && zb.xf(1), Sa.Nd(!1), c.port.postMessage("START")) } function k(e) { e.target.hidden ? P() : O() } function n(e, z, K) { z = e.createShader(z); e.shaderSource(z, K); e.compileShader(z); return z } function p() {
            r.Da = !1; var e = r.ca, z = r.Xa, K = r.Ya, f = r.V; e.uniform1f(r.Tc, Math.random()); r.sa ? z.beginQueryEXT(f,
                K) : e.beginQuery(f, K); e.drawElements(e.POINTS, 1, e.UNSIGNED_SHORT, 0); r.sa ? z.endQueryEXT(f) : e.endQuery(f); Sa.flush(); E().then(function (A) {
                    A = q.Sd * q.rc * 1E3 / A; r.qb = (r.qb + 1) % q.xa; r.Rb[r.qb] = A; if (++r.fd > q.xa) { r.cb.set(r.Rb); r.cb.sort(function (S, N) { return S - N }); A = r.cb[Math.floor(q.xa / 2)]; r.Qa = Math.max(r.Qa, A); var B = 0; for (B = 0; B < r.mc && !(A > r.Qa * (1 - (q.sc[B] + q.Td * (B >= r.ob ? 1 : -1)))); ++B)B === r.mc - 1 && ++B; B !== r.ob && (console.log("THERMAL THROTTLING LEVEL = " + B.toString()), r.ob = B, r.R = 0 === B ? 0 : q.Rd[B - 1], q.qc && q.qc(B)) } r.Da =
                        !0
                }).catch(function () { r.Da = !0 })
        } function C(e) { var z = r.ca, K = r.Xa, f = r.Ya; f = r.sa ? K.dg(f, K.QUERY_RESULT_AVAILABLE_EXT) : z.getQueryParameter(f, z.QUERY_RESULT_AVAILABLE); z = z.getParameter(K.GPU_DISJOINT_EXT); f ? e(!z) : setTimeout(C.bind(null, e), .1) } function E() { return new Promise(function (e, z) { C(function (K) { if (K) { K = r.ca; var f = r.Xa, A = r.Ya; K = r.sa ? f.getQueryObjectEXT(A, f.QUERY_RESULT_EXT) : K.getQueryParameter(A, K.QUERY_RESULT); e(K) } else z() }) }) } var m = {
            cd: !0, Ec: [1, 200], Tb: 20, R: 0, Ud: !1, rc: 50, Sd: 240, tc: 3E3, xa: 3, sc: [.2,
                .35, .5], Td: .05, Rd: [8, 20, 40], qc: null
        }, q = null, D = null, w = 0, c = null, F = !1, M = null, J = { la: !1, X: !0, Ob: !1, Nb: !1, Mb: !1, ra: !1 }, R = { Ka: null, timeout: null }, r = { isEnabled: !1, Da: !1, ca: null, Xa: null, Ya: null, V: null, Tc: null, sa: !0, ob: 0, mc: 0, R: 0, Pb: 0, fd: 0, Rb: null, cb: null, qb: 0, Qa: 0 }, O = v.bind(null, !0), P = v.bind(null, !1), u = {
            s: function (e) {
                q = Object.assign(m, e); Object.assign(J, { X: !0, la: !0, ra: !1 }); M = window.requestPostAnimationFrame || window.requestAnimationFrame; if (q.Ud) {
                    e = document.createElement("canvas"); e.setAttribute("width", "1");
                    e.setAttribute("height", "1"); var z = { antialias: !1 }; e = e.getContext("webgl2", z) || e.getContext("webgl", z); if (z = e.getExtension("EXT_disjoint_timer_query") || e.getExtension("EXT_disjoint_timer_query_webgl2")) {
                        r.ca = e; r.Xa = z; r.isEnabled = !0; r.sa = z.beginQueryEXT ? !0 : !1; var K = n(e, e.VERTEX_SHADER, "attribute vec4 a0;void main(){gl_Position=a0;}"), f = n(e, e.FRAGMENT_SHADER, "precision lowp float;uniform float u37;void main(){vec4 a=u37*vec4(1.,2.,3.,4.);for(int b=0;b<666;b+=1)a=cos(a);gl_FragColor=a;}".replace("666",
                            q.rc.toString())), A = e.createProgram(); e.attachShader(A, K); e.attachShader(A, f); e.linkProgram(A); K = e.getAttribLocation(A, "a0"); r.Tc = e.getUniformLocation(A, "u37"); e.useProgram(A); e.enableVertexAttribArray(K); A = e.createBuffer(); e.bindBuffer(e.ARRAY_BUFFER, A); e.bufferData(e.ARRAY_BUFFER, new Float32Array([.5, .5, 0, 1]), e.STATIC_DRAW); e.vertexAttribPointer(K, 4, e.FLOAT, !1, 16, 0); A = e.createBuffer(); e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, A); e.bufferData(e.ELEMENT_ARRAY_BUFFER, new Uint16Array([0]), e.STATIC_DRAW);
                        e.disable(e.DEPTH_TEST); e.disable(e.DITHER); e.disable(e.STENCIL_TEST); e.viewport(0, 0, 1, 1); A = r.sa ? z.createQueryEXT() : e.createQuery(); r.Ya = A; r.V = z.TIME_ELAPSED_EXT || e.TIME_ELAPSED; r.ob = 0; r.mc = q.sc.length; r.R = 0; r.Pb = -q.tc; r.Rb = new Float32Array(q.xa); r.cb = new Float32Array(q.xa); r.Qa = 0; r.qb = 0; r.fd = 0; r.Da = !0
                    }
                } if (q.cd) {
                    e = !1; try {
                        if ("undefined" === typeof SharedWorker) {
                            var B = URL.createObjectURL(new Blob(["let handler = null;\n      self.addEventListener('message', function(e){\n        if (handler !== null){\n          clearTimeout(handler);\n          handler = null;\n        }\n        switch (e.data) {\n          case 'START':\n          case 'DONE':\n            handler = setTimeout(function(){\n              self.postMessage('TICK');\n            }, " +
                                q.Tb.toString() + ");\n            break;\n          case 'STOP':\n            break;\n        };\n      }, false);"], { type: "text/javascript" })), S = new Worker(B); S.addEventListener("message", a); c = { qd: S, port: S }; J.Ob = !0
                        } else {
                            var N = URL.createObjectURL(new Blob(["let handler = null;\n      onconnect = function(e) {\n        const port = e.ports[0];\n        port.addEventListener('message', function(e) {\n          \n          if (handler !== null){\n            clearTimeout(handler);\n            handler = null;\n          }\n          switch (e.data) {\n            case 'START':\n            case 'DONE':\n              handler = setTimeout(function(){\n                port.postMessage('TICK');\n              }, " +
                                q.Tb.toString() + ");\n              break;\n            case 'STOP':\n              break;\n          };\n          \n        });\n        \n        port.start();\n      } // end onconnect()"], { type: "text/javascript" })), ka = new SharedWorker(N); ka.port.start(); ka.port.addEventListener("message", a); c = { qd: ka, port: ka.port }; J.Nb = !0
                        } e = !0
                    } catch (fa) { } e && ("onvisibilitychange" in document ? document.addEventListener("visibilitychange", k) : (window.addEventListener("blur", P), window.addEventListener("focus", O)), J.Mb =
                        !0)
                } F = "undefined" !== typeof zb
            }, m: function () { t(); J.Mb && ("onvisibilitychange" in document ? document.removeEventListener("visibilitychange", k) : (window.removeEventListener("blur", P), window.removeEventListener("focus", O)), J.Mb = !1); J.Nb ? (c.port.close(), J.Nb = !1) : J.Ob && (c.qd.terminate(), J.Ob = !1); Object.assign(J, { X: !0, la: !1, ra: !1 }); D = null }, Eg: function () { return J.X }, update: function (e) { Object.assign(q, e) }, yd: function (e) { J.la || u.s({}); l(); J.ra = !0; D = e; J.X && d() }, stop: t
        }; return u
    }(), Bb = function () {
        var a = {
            nd: 4, hb: [1.5,
                1.5, 2], Z: [.1, .1, .1], Ad: 1, M: -1, ea: -1, Hf: 2, cf: 1, Cd: !0, te: .8
        }, d = null, g = [], h = [0], t = [.5, .5, 1]; return {
            s: function (l) {
                d = Object.assign({}, a, l); g.splice(0); l = d.hb[0] * d.Z[0]; var v = d.hb[1] * d.Z[1], k = 1 / (1 + d.hb[2] * d.Z[2]), n = d.Ad * Math.min(d.M, d.ea), p = n / d.M; n /= d.ea; var C = .5 * d.te; C *= C; for (var E = 0; E < d.nd; ++E) { var m = Math.pow(k, E), q = p * m, D = n * m; m = q * d.cf; var w = q * l, c = D * v; q /= 2; D /= 2; for (var F = 1 + (1 - q - q) / w, M = 1 + (1 - D - D) / c, J = 0; J < M; ++J)for (var R = D + J * c, r = R - .5, O = 0; O < F; ++O) { var P = q + O * w, u = P - .5; u * u + r * r > C || g.push([P, R, m]) } } d.Cd && g.sort(function (e,
                    z) { var K = e[0] - .5; e = e[1] - .5; var f = z[0] - .5; z = z[1] - .5; return K * K + e * e - (f * f + z * z) })
            }, get: function (l) { var v = g.length; if (0 === v) return t; for (; l >= h.length;)h.push(0); h[l] >= v && (h[l] = 0); var k = g[Math.floor(h[l])]; h[l] = (h[l] + 1 / d.Hf) % v; return k }, reset: function () { for (var l = g.length / h.length, v = 0; v < h.length; ++v)h[v] = Math.floor(v * l) }
        }
    }(), Cb = { Eb: function () { return Date.now() }, gg: function () { return performance.now() } }, Db = function () {
        var a = 0, d = null, g = null, h = null, t = null; return {
            s: function (l, v) {
                a = l.length; d = v; g = l; h = new Float32Array(a);
                t = new Float32Array(a)
            }, Ke: function () { return t }, Gf: function (l, v, k) { l.forEach(function (n, p) { var C = Math.min(1, g[p] * k * (v + .33 * (1 - v))); n = C * n + (1 - C) * h[p]; h[p] = n; n = d[p](n); n = Math.min(Math.max(n, 0), 1); t[p] = n }) }
        }
    }(), Y = { VERSION: "1.3.4", oa: [], ub: !1, vb: !1, tb: !1, Ja: !0, Ia: !1, ready: !1, initialized: !1 }, Eb = { facingMode: "user", idealWidth: 800, idealHeight: 600, minWidth: 240, maxWidth: 1280, minHeight: 240, maxHeight: 1280, rotate: 0, isAudio: !0, disableRendering: !1 }, b = {
        neuralNetworkPath: "jeelizFaceExpressionsNNC.json",
        uc: "js/dist/", R: 0, width: 512, height: 512, If: 40, Bd: [.6, 5.8], Z: [.11, .11, .3], vf: .7, tf: 2, uf: [2, 2, 2], Sa: !0, xe: .1, threshold: .8, Kd: .7, Ld: .03, se: .06, we: .02, Xd: [1, .05], Pf: 10, Pe: !1, sb: [2, 7], L: { Uc: [3, 7], quality: [0, 6], position: [0, 7], rotation: [5, 7] }, Wb: 11, ld: 1, $e: 1, Yd: [.1, .01], rf: [.4, -.7, -.4], sf: [.3, 0, 0], qe: !1, Zd: .001, yc: [Math.PI / 10, Math.PI / 6], sd: [.1, .4], td: [.009, .02], ud: [.1, .2], Vb: 5, Vc: .1, Wd: [.2, .2, .15, .15, .15, .15, .5, .2, .3, .3, .2], af: [Ja.bind(null, .1, .7), Ja.bind(null, .1, .7), Ja.bind(null, .05, .4), Ja.bind(null, .05, .4),
        Ja.bind(null, .05, .6), Ja.bind(null, .05, .6), Ja.bind(null, .1, .5), Ja.bind(null, .3, .7), Ja.bind(null, .7, .8), Ja.bind(null, .7, .8), Ja.bind(null, .15, .6)]
    }; Y.get_nMorphs = function () { return b.Wb }; var Fb = null, Gb = null, Hb = null, Ib = [], Jb = b.threshold;
    function Kb() {
        function a() { 1 === ++ka && (Db.s(b.Wd, b.af), d(), Y.ready = !0, Y.oa.forEach(function (y) { y() }), Y.oa.splice(0, Y.oa.length), g(), ka = 0) } function d() {
            J = new Float32Array(b.Wb); R = new Float32Array(b.Wb); r = new Uint8Array(c * c * 4); Y.get_morphTargetInfluences = function () { return J }; Y.get_morphTargetInfluencesStabilized = function () { return Db.Ke() }; Y.set_morphUpdateCallback = function (y) { O = y }; Y.get_rotation = function () { return e }; Y.get_positionScale = function () {
                var y = F.Id.He(); y.Bb(!1); y = y.cc(); f[0] = 1 - y[1][0]; f[1] =
                    y[2][0]; f[2] = y[3][0] * B.J[0]; return f
            }; Y.get_rotationStabilized = function () { return K }; Y.switch_sleep = function (y) { na !== fa.hc || y ? na = y ? fa.hc : fa.play : g() }; Y.on_detect = function (y) { y(x.W); x.Yb.push(y) }; Y.is_detected = function () { return x.W }; Y.set_animateDelay = function (y) { D = y; Ab.update({ R: D }) }
        } function g() { na !== fa.play && (na = fa.play, Ab.stop(), h()) } function h() {
            var y, L; return Ca(new va(new oa(function (aa) {
                switch (aa.ga) {
                    case 1: a: {
                        if ("VIDEO" === N.element.nodeName) {
                            var T = N.element.currentTime - Aa; 0 > T && (Aa = N.element.currentTime);
                            if (1E3 * T < b.Pf) break a; Aa += T
                        } N.va.refresh(); T = ya.Rc(); T[0] === N.J[0] && T[1] === N.J[1] || p()
                    } y = zb.Je(); L = 0; case 2: if (!(L < y)) { aa.ga = 4; break } T = F; var ja = w; I.set("s54"); Ta.aa(); T.Za.T(); N.va.g(0); T.mb.g(1); b.Sa && I.H("u38", A); Q.l(!1, !1); T.Za.g(0); ja.N(T.Za); b.Pe ? T = U.qf(P, r).then(t) : (U.pf(P, r), t(), T = Promise.resolve()); aa.ga = 3; return { value: T }; case 3: ++L; aa.ga = 2; break; case 4: Eb.disableRendering || (T = F, Ta.aa(), M.T(), I.set("s57"), b.Sa && I.H("u38", A), T.mb.g(0), Q.l(!1, !1)), T = zb.Ae(), S = 3 * (1 - T) + 1 * T, zb.Md(), Y.Ja && (Ta.Kf(),
                        I.set("s53"), N.va.g(0), Q.l(!1, !1), G.enable(G.BLEND), G.blendFunc(G.SRC_ALPHA, G.ONE), M.g(0), Q.l(!1, !1), G.disable(G.BLEND)), G.flush(), na !== fa.hc && Ab.yd(h), aa.ga = 0
                }
            })))
        } function t() {
            k(); if (!b.qe && x.W) { for (var y = 0, L = 0; 3 > L; ++L)y = v(L + b.L.rotation[0], b.L.rotation[1]), y = (2 * y - 1) * b.rf[L], y += b.sf[L], u[L] = y; b.Sa && (L = b.xe, A = A * (1 - L) + (-y + A) * L) } l(); y = Cb.Eb(); L = y - ba.hd; var aa = v(b.L.quality[0], b.L.quality[1]); ba.rd = Ja(b.sd[0], b.sd[1], aa); aa = v(b.L.position[0], b.L.position[1]); var T = v(b.L.position[0] + 1, b.L.position[1]),
                ja = v(b.L.position[0] + 2, b.L.position[1]); ba.zd = 1 - Ja(b.ud[0], b.ud[1], Math.sqrt(aa * aa + T * T + ja * ja) / L); aa = ba.ta[0] - u[0]; T = ba.ta[1] - u[1]; ja = ba.ta[2] - u[2]; L = Math.sqrt(aa * aa + T * T + ja * ja) / L; ba.ta[0] = u[0]; ba.ta[1] = u[1]; ba.ta[2] = u[2]; ba.vd = 1 - Ja(b.td[0], b.td[1], L); ba.U = ba.rd * ba.zd * ba.vd; ba.hd = y; ba.gd[ba.Qb] = ba.U; ba.Qb = (ba.Qb + 1) % b.Vb; for (y = 0; y < b.Vb; ++y)ba.U = Math.min(ba.gd[y], ba.U); Db.Gf(J, ba.U, S, R); O && O(ba.U, S); if (x.W) { y = ba.U; L = b.Yd; y = S * (L[0] * (1 - y) + L[1] * y); for (L = 0; 3 > L; ++L)e[L] = y * u[L] + (1 - y) * e[L], K[L] = e[L]; K[2] -= A } else y =
                    Cb.Eb() * b.Zd, z[0] = b.yc[0] * Math.sin(y), z[1] = b.yc[1] * Math.cos(y), K[0] = z[0], K[1] = z[1], K[2] = z[2]
        } function l() { var y = v(b.L.Uc[0], b.L.Uc[1]); x.$a = b.Vc * y + (1 - b.Vc) * x.$a; x.$a > b.Kd + b.Ld && !x.W ? (x.Yb.forEach(function (L) { L(!0) }), x.W = !0) : x.$a < b.Kd - b.Ld && x.W && (x.Yb.forEach(function (L) { L(!1) }), x.W = !1, A = 0) } function v(y, L) { y += c * L; return (r[4 * y] + r[4 * y + 1] + r[4 * y + 2] + r[4 * y + 3]) / 1020 } function k() {
            J.forEach(function (y, L) {
                if (x.W) {
                    var aa = (b.ld + L) % c, T = b.$e + Math.floor((b.ld + L) / c); T = c - 1 - T; aa += c * T; T = r.slice(4 * aa, 4 * aa + 4); aa = (T[0] +
                        T[1] + T[2] + T[3]) / 1020; T = b.we * Math.sqrt((T[0] * T[0] + T[1] * T[1] + T[2] * T[2] + T[3] * T[3]) / 1020 - aa * aa); J[L] = y > aa - T && y < aa + T ? y : aa
                } else J[L] = 0
            })
        } function n(y) { w = new jb({ eb: y.layers, bc: "gpuRaw", Zb: function (L) { var aa = F; aa.mb.Fd(1); G.viewport(0, 0, 1, 1); I.set("s55"); b.Sa && I.H("u38", A); I.H("u39", ba.U); I.Cf("u40", Bb.get(0)); Q.l(!1, !1); aa.Id.Fd(1); I.set("s56"); I.H("u39", ba.U); aa.mb.g(0); Q.l(!1, !1); P = L } }); y = w.Ge(); y !== q && (q = y, C(), F.Za.resize(q, q), E()); c = w.Me(); a() } function p() {
            var y = ya.Rc(); N.J[0] = y[0]; N.J[1] = y[1]; Ua.Ua().width =
                y[0]; Ua.Ua().height = y[1]; b.width = y[0]; b.height = y[1]; y = N.Of; var L = N.J[1] / N.J[0], aa = Ua.S() / Ua.B(); L > aa ? 1 >= L ? y[0] *= L : y[1] /= L : (y[0] *= L, L = 1 / aa, y[0] *= L, y[1] *= L); y[1] *= aa; I.I("s57", [{ name: "u41", type: "1f", value: aa }]); N.C[0] = 0; N.C[1] = 0; N.C[2] = 0; N.C[3] = 0; switch (Eb.rotate) { case 0: N.C[0] = y[0]; N.C[3] = y[1]; break; case 180: N.C[0] = -y[0]; N.C[3] = -y[1]; break; case 90: N.C[1] = y[0]; N.C[2] = -y[1]; break; case -90: N.C[1] = -y[0], N.C[2] = y[1] }y = [{ type: "mat2", name: "u42", value: N.C }]; I.I("s54", y); I.I("s53", y); I.I("s57", [{
                    type: "mat2",
                    name: "u42", value: 90 === Math.abs(Eb.rotate) ? [0, -N.C[1], -N.C[2], 0] : N.C
                }])
        } function C() { B.M = b.width; B.ea = b.height; Bb.s({ hb: b.uf, nd: b.tf, M: B.M, ea: B.ea, Ad: b.vf, Z: b.Z, Cd: !0 }); B.J = [1, B.M / B.ea] } function E() {
            I.I("s53", [{ type: "1i", name: "u1", value: 0 }]); I.I("s54", [{ type: "1i", name: "u1", value: 0 }, { type: "1i", name: "u43", value: 1 }, { type: "1f", name: "u38", value: 0 }, { type: "2f", name: "u44", value: B.J }]); I.I("s57", [{ type: "1i", name: "u43", value: 0 }, { type: "2f", name: "u44", value: B.J }, { type: "1f", name: "u38", value: 0 }, {
                type: "3f", name: "u45",
                value: [0, .5, 1]
            }]); I.I("s55", [{ type: "1i", name: "u46", value: 0 }, { type: "1i", name: "u43", value: 1 }, { type: "1f", name: "u47", value: b.Bd[0] }, { type: "1f", name: "u48", value: b.Bd[1] }, { type: "1f", name: "u49", value: b.If }, { type: "1f", name: "u50", value: Jb }, { type: "1f", name: "u51", value: b.se }, { type: "1f", name: "u38", value: 0 }, { type: "3f", name: "u52", value: [b.Z[0] * B.J[0], b.Z[1] * B.J[1], b.Z[2]] }]); I.I("s56", [{ type: "1i", name: "u1", value: 0 }, { type: "1i", name: "u6", value: 1 }, { type: "2f", name: "u53", value: b.Xd }])
        } function m(y) {
            var L = new Float32Array([0,
                .5, .5, 0]); y.Za = U.instance({ isPot: !0, isFloat: !1, width: q }); L = { width: 1, height: 1, isFloat: !0, isPot: !1, array: L }; y.mb = Wa.instance(L); y.Id = Wa.instance(L)
        } var q = 64, D = b.R, w = null, c = 0, F = {}, M = null, J = null, R = null, r = null, O = null, P = null, u = [0, 0, 0], e = [0, 0, 0], z = [0, 0, 0], K = [0, 0, 0], f = [0, 0, 0], A = 0, B = { J: null, M: -1, ea: -1 }, S = 1, N = { Of: [.5, .5], C: [.5, 0, 0, .5], element: null, va: null, J: [-1, -1] }, ka = 0, fa = { le: -4, bf: -3, Fg: -2, hc: -1, play: 0 }, na = fa.bf, x = { $a: 0, W: !1, Yb: [] }, ba = { U: 1, zd: 1, rd: 1, vd: 1, ta: [0, 0, 0], hd: Cb.Eb(), gd: new Float32Array(b.Vb), Qb: 0 },
            Aa = 0, ya = {
                s: function () { N.va = U.instance({ D: N.element, isPot: !1, isFloat: !1, isFlipY: !0 }); M = U.instance({ isPot: !1, isFloat: !1, width: B.M, height: B.ea }); m(F); Ab.s({ cd: !1, R: D }); zb.s({ Ub: 0, n: b.sb[1] - b.sb[0] + 1, kd: b.sb[0] }); Hb ? n(Hb) : Ea(function (y) { y = JSON.parse(y); n(y) }) }, m: function () { Ab.stop(); w && (w.m(), w = null); na = fa.le }, he: function (y) {
                    Y.ub && Y.ub(); var L = {
                        video: { facingMode: { ideal: Eb.facingMode }, width: { min: Eb.minWidth, max: Eb.maxWidth, ideal: Eb.idealWidth }, height: { min: Eb.minHeight, max: Eb.maxHeight, ideal: Eb.idealHeight } },
                        audio: Eb.isAudio
                    }; qb(L, Eb.deviceId); yb(function (aa, T) { Fb = T; Y.vb && Y.vb(); y(aa) }, function () { window.rb && window.rb("WEBCAM_UNAVAILABLE") }, L)
                }, jd: function (y, L) {
                    I.xc([{ id: "s53", name: "_", wa: "attribute vec2 a0;uniform mat2 u42;varying vec2 vv0;const vec2 f=vec2(.5,.5);void main(){gl_Position=vec4(a0,0.,1.),vv0=f+u42*a0;}", La: ["a0"], Aa: [2], h: "uniform sampler2D u1;varying vec2 vv0;void main(){gl_FragColor=texture2D(u1,vv0);}", i: ["u1", "u42"], precision: "lowp" }, {
                        id: "s54", name: "_", h: "uniform sampler2D u1;varying vec2 vv0;void main(){gl_FragColor=texture2D(u1,vv0);}",
                        wa: "attribute vec2 a0;uniform sampler2D u43;uniform mat2 u42;uniform vec2 u44;uniform float u38;const vec2 e=vec2(.25,.5),f=vec2(.5,.5);varying vec2 vv0;void main(){vec4 a=texture2D(u43,e);vec2 d=a.gb,h=a.a*u44;float b=cos(u38),c=sin(u38);vec2 i=mat2(b,c,-c,b)*a0,j=d+i*.5*h,k=j-.5;vv0=f+2.*u42*k,gl_Position=vec4(a0,0.,1.);}", La: ["a0"], Aa: [2], i: ["u1", "u43", "u44", "u42", "u38"], precision: "lowp"
                    }, {
                        id: "s55", name: "_", wa: "attribute vec2 a0;void main(){gl_Position=vec4(a0,0.,1.);}", h: "uniform sampler2D u46,u43;uniform vec3 u40,u52;uniform float u47,u48,u49,u50,u39,u51,u38;varying vec2 vv0;const vec4 e=vec4(.25,.25,.25,.25);void main(){vec4 h=texture2D(u46,vec2(.4375,.9375)),i=texture2D(u46,vec2(.5625,.9375));float j=dot(h-i,e);bool k=j>u50;vec4 a=texture2D(u43,vec2(.5,.5));k?a.r=2.:a.r>u49?a.r=0.:a.r>1.9&&(a.a>u48||a.a<u47)?a.r=0.:a.r>1.9?a.r+=1.:0.;if(a.r<.9)a.gba=u40,a.r=1.;else{float l=dot(e,texture2D(u46,vec2(.0625,.9375))),m=dot(e,texture2D(u46,vec2(.1875,.9375))),d=dot(e,texture2D(u46,vec2(.3125,.9375))),f=cos(u38),g=sin(u38);vec2 c=mat2(f,g,-g,f)*vec2(l,m);float b;a.r>1.9?(b=1.-u39,b*=1.-step(abs(c.x),u51)*step(abs(c.y),u51)*step(abs(d),u51)):(b=1.,a.r=0.),a.gba+=vec3(c,d)*u52*a.a*b;}gl_FragColor=a;}",
                        i: "u46 u43 u40 u47 u48 u49 u50 u52 u39 u51 u38".split(" ")
                    }, {
                        id: "s57", name: "_", wa: "attribute vec2 a0;uniform mat2 u42;varying vec2 vv0;const vec2 f=vec2(.5,.5);void main(){gl_Position=vec4(a0,0.,1.),vv0=f+u42*a0;}", h: "uniform sampler2D u43;uniform vec3 u45;uniform vec2 u44;uniform float u38,u41;varying vec2 vv0;const vec2 l=vec2(1.,1.),e=vec2(.5,.5),m=vec2(.25,.5);void main(){float f=cos(u38),g=-sin(u38);mat2 h=mat2(f,g/u41,-g*u41,f);vec2 b=h*(vv0-e);vec4 i=texture2D(u43,m);vec2 c=h*(i.gb-e);float n=i.a;vec2 d=.5*n*u44,o=c+d,p=c-d,j=step(p,b)*step(b,o);float q=j.x*j.y;vec2 a=abs(c-b)/d;a=pow(a,3.*l),gl_FragColor=vec4(q*u45*max(a.x,a.y),1.);}",
                        i: "u43 u44 u45 u42 u38 u41".split(" "), precision: "lowp"
                    }, { id: "s56", name: "_", h: "uniform sampler2D u1,u6;uniform vec2 u53;uniform float u39;const vec4 f=vec4(1.,1.,1.,1.);varying vec2 vv0;void main(){vec4 a=texture2D(u1,vv0),b=texture2D(u6,vv0);float c=mix(u53.x,u53.y,u39);gl_FragColor=mix(b,a,c*f);}", i: ["u1", "u6", "u53", "u39"] }]); N.element = y; Gb = N.element; p(); C(); E(); ya.s(); L && L()
                }, Rc: function () {
                    var y = [-1, -1], L = N.element; "VIDEO" === L.nodeName ? (y[0] = L.videoWidth, y[1] = L.videoHeight) : (y[0] = L.width, y[1] =
                        L.height); 90 === Math.abs(Eb.rotate) && y.reverse(); return y
                }
            }; Ib.push(ya); return ya
    } Y.onLoad = function (a) { Y.ready ? a() : Y.oa.push(a) }; Y.switch_displayVideo = function (a) { Y.Ja = a; Y.Ia && (Y.Ia.style.display = Y.Ja ? "block" : "none") }; Y.onWebcamAsk = function (a) { Y.ub = a }; Y.onContextLost = function (a) { Y.tb = a }; Y.onWebcamGet = function (a) { Y.vb = a };
    Y.destroy = function () { Ab.m(); Gb && Gb.srcObject && Gb.srcObject.getTracks().forEach(function (a) { a.stop() }); Ib.forEach(function (a) { a.m() }); Ib.splice(0); Ua.m(); Y.switch_displayVideo(!1); Y.initialized = !1; Y.oa.splice(0) }; Y.set_size = function (a, d) { b.width = a; b.height = d }; Y.get_size = function () { return { width: b.width, height: b.height } }; Y.get_videoStream = function () { return Fb }; Y.get_video = function () { return Gb }; Y.get_cv = function () { return Ua.Ua() }; Y.set_color = function (a) { I.I("s57", [{ type: "3f", name: "u45", value: a }]) };
    Y.init = function (a) {
        var d = Kb(), g = a.callbackReady || function (l) { console.log("ERR:", l) }, h = a.callbackReady ? a.callbackReady.bind(null, !1) : null; if (a.canvasId || a.canvas) {
            var t = a.canvas ? a.canvas : document.getElementById(a.canvasId); if (t) if (Y.initialized) g("ALREADY_INITIALIZED"); else {
                Y.initialized = !0; window.rb = g ? function (l) { g(l); window.rb = !1 } : !1; a.NNCPath && (b.uc = a.NNCPath); "undefined" !== typeof a.NNC && (Hb = "string" === typeof a.NNC ? JSON.parse(a.NNC) : a.NNC); h && Y.oa.push(h); Jb = a.threshold || Jb; if (!Ua.s({
                    Ma: t, width: b.width,
                    height: b.height, debug: !1, $c: !1, Xb: function () { Y.tb && Y.tb() }, premultipliedAlpha: !1
                })) return g("GL_INCOMPATIBLE"), !1; Y.Ia = Ua.Ua(); Y.Ja || (Y.Ia.style.display = "none"); a.videoSettings && a.videoSettings.videoElement ? d.jd(a.videoSettings.videoElement, !1) : (a.videoSettings && Object.assign(Eb, a.videoSettings), d.he(function (l) { d.jd(l, !1) })); return !0
            } else g("INVALID_CANVAS")
        } else g("NO_CANVASID")
    }; window.JEELIZFACEEXPRESSIONS = Y;
    ; return JEELIZFACEEXPRESSIONS || window.JEELIZFACEEXPRESSIONS;
})();