/**
 * crisp-client
 * @version v2.10.0 7f1f150
 * @author Crisp IM SAS
 * @date 2/27/2023
 */
(function() {
    try {
        var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        };
        i.prototype.init = function() {
            var i, n, s = this,
                e = "init";
            try {
                this.n && !0 !== this.s && (this.s = !0, (i = document.createElement("div")).id = "crisp-loader", document.getElementsByTagName("body")[0].appendChild(i), n = function() {
                    return "none" === window.getComputedStyle(i).getPropertyValue("display")
                }, function t() {
                    s.f = setTimeout(function() {
                        s.f = null, s.y -= s.w, void 0 !== window[s.v] && "function" == typeof window[s.v].__init && !0 === n() ? (s.x.info(s.ns + "." + e, "Dependencies loaded"), i.parentNode.removeChild(i), window[s.v].__init({
                            dollar_crisp: window[s.v],
                            project_name: s.on,
                            url_go: s.fn,
                            url_image: s._n,
                            url_game: s.fs,
                            url_relay_client: s.ms,
                            url_relay_stream: s.ws,
                            url_website: s.$s,
                            url_assets: s._e,
                            rtc_ice: s.io,
                            client_environment: s.do,
                            client_revision: s._a,
                            website_domain: s._f,
                            website_id: s.n,
                            token_id: s.el,
                            cookie_expire: s.Fn,
                            cookie_domain: s.Ip,
                            page_url: s.Rp,
                            page_domain: s.Sp,
                            browser_useragent: s.Pp,
                            browser_timezone: s.Tp,
                            browser_capabilities: s.Dp,
                            browser_locales: s.Op,
                            ready_trigger: s.Np,
                            runtime_configuration: s.Kp,
                            reset_handler: function() {
                                s.reset()
                            }
                        })) : 0 < s.y ? t() : s.x.error(s.ns + "." + e, "Could not load dependencies")
                    }, s.w)
                }())
            } catch (t) {}
        }, i.prototype.reset = function() {
            try {
                null !== this.f && clearTimeout(this.f), this.Gp(), this.init()
            } catch (t) {}
        }, i.prototype.Up = function() {
            try {
                this.Bp("dns-prefetch", this.ms), this.Bp("preconnect", this._e), this.Lp(), this.Mp()
            } catch (t) {}
        }, i.prototype.Bp = function(t, i) {
            try {
                var n = document.createElement("link");
                n.setAttribute("href", i), n.setAttribute("rel", t), n.setAttribute("crossorigin", ""), this.Yp(n), document.getElementsByTagName("head")[0].appendChild(n)
            } catch (t) {}
        }, i.prototype.Lp = function() {
            try {
                var t = document.createElement("script");
                t.src = [this._e + "/", this.Xp + "/", "client.js?" + this._a].join(""), t.type = "text/javascript", t.async = 1, this.Yp(t), document.getElementsByTagName("head")[0].appendChild(t)
            } catch (t) {}
        }, i.prototype.Mp = function() {
            try {
                var t = this.Jp(),
                    i = document.createElement("link");
                i.href = [this._e + "/", this.Wp + "/", "client_" + t + ".css?" + this._a].join(""), i.type = "text/css", i.rel = "stylesheet", this.Yp(i), document.getElementsByTagName("head")[0].appendChild(i)
            } catch (t) {}
        }, i.prototype.Gp = function() {
            this.Hp(), this.qp(), this.Qp()
        }, i.prototype.Hp = function() {
            this.s = !1, this.f = null, this.y = this.Vp, this._f = document.domain, this.Rp = document.location.href, this.Sp = document.location.hostname, this.Pp = window.navigator.userAgent, this.Tp = (new Date).getTimezoneOffset(), this.Op = this.Zp(), "string" == typeof CRISP_WEBSITE_ID && CRISP_WEBSITE_ID ? this.n = CRISP_WEBSITE_ID : this.n = this.t_(), "string" == typeof CRISP_TOKEN_ID && CRISP_TOKEN_ID ? this.el = CRISP_TOKEN_ID : "number" == typeof CRISP_TOKEN_ID && CRISP_TOKEN_ID ? this.el = CRISP_TOKEN_ID.toString() : this.el = null, "number" == typeof CRISP_COOKIE_EXPIRE && 0 < CRISP_COOKIE_EXPIRE ? this.Fn = CRISP_COOKIE_EXPIRE : this.Fn = null, "string" == typeof CRISP_COOKIE_DOMAIN && CRISP_COOKIE_DOMAIN ? this.Ip = CRISP_COOKIE_DOMAIN : this.Ip = null, "function" == typeof CRISP_READY_TRIGGER ? this.Np = CRISP_READY_TRIGGER : this.Np = {}, "object" === ("undefined" == typeof CRISP_RUNTIME_CONFIG ? "undefined" : t(CRISP_RUNTIME_CONFIG)) ? this.Kp = CRISP_RUNTIME_CONFIG : this.Kp = {}, "object" === ("undefined" == typeof CRISP_INCLUDE_ATTRS ? "undefined" : t(CRISP_INCLUDE_ATTRS)) ? this.i_ = CRISP_INCLUDE_ATTRS : this.i_ = {}
        }, i.prototype.qp = function() {
            try {
                this.Dp = [], "function" == typeof window.MutationObserver && "function" == typeof JSON.stringify && this.Dp.push("browsing"), ("function" == typeof window.RTCPeerConnection && "object" === t(navigator.mediaDevices) && "https:" === document.location.protocol && (window.innerWidth || 0) >= this.n_ && (window.innerHeight || 0) >= this.s_ || !0 === this.e_) && this.Dp.push("call")
            } catch (t) {}
        }, i.prototype.Qp = function() {
            var t;
            try {
                this.Kp.locale && (-1 !== (t = this.Op.indexOf(this.Kp.locale)) && this.Op.splice(t, 1), this.Op.unshift(this.Kp.locale))
            } catch (t) {}
        }, i.prototype.Yp = function(t) {
            try {
                for (var i in this.i_) this.i_.hasOwnProperty(i) && t.setAttribute(i, this.i_[i])
            } catch (t) {}
        }, i.prototype.t_ = function() {
            var t = null;
            try {
                for (var i = document.querySelectorAll("script[src]"), n = 0; n < i.length; n++) {
                    var s = this.o_.exec(i[n].src);
                    if (s && "string" == typeof s[1]) {
                        t = s[1];
                        break
                    }
                }
            } catch (t) {} finally {
                return t
            }
        }, i.prototype.Jp = function() {
            var t = "default";
            try {
                var i = (navigator.userAgent || "").toLowerCase(),
                    n = (navigator.appVersion || "").toLowerCase(),
                    s = !1;
                if (!0 !== s && (-1 === i.indexOf("opera mini/") && -1 === i.indexOf("msie") && -1 === n.indexOf("trident/") || (s = !0)), !0 !== s)
                    for (var e = 0; e < this.r_.length; e++) {
                        var o = this.r_[e],
                            r = i.match(o.pattern);
                        if (r && r[1] && parseInt(r[1], 10) <= o.version) {
                            s = !0;
                            break
                        }
                    }!0 === s && (t = "legacy")
            } catch (t) {} finally {
                return t
            }
        }, i.prototype.c_ = function() {
            var t = !0;
            try {
                !(window.innerWidth && window.innerWidth < this.h_) && !0 === this.a_() && !0 !== this.u_(this.Sp) && !0 !== this.f_(this.Pp) && window.WebSocket || (t = !1)
            } catch (t) {} finally {
                return t
            }
        }, i.prototype.a_ = function() {
            var t, i, n = !1;
            try {
                !0 === navigator.cookieEnabled ? n = !0 : window.localStorage && "function" == typeof window.localStorage.setItem && "function" == typeof window.localStorage.getItem && "function" == typeof window.localStorage.removeItem && (t = "" + (new Date).getTime(), i = "crisp-client/loader/storage/check", window.localStorage.setItem(i, t), n = window.localStorage.getItem(i) === t)
            } catch (t) {} finally {
                return n
            }
        }, i.prototype.u_ = function() {
            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "",
                i = !1;
            try {
                if (t)
                    for (var n = 0; n < this.d_.domains.length; n++) {
                        var s = this.d_.domains[n],
                            e = "." + s;
                        if (t === s || t.slice(-1 * e.length) === e) {
                            i = !0;
                            break
                        }
                    }
            } catch (t) {} finally {
                return i
            }
        }, i.prototype.f_ = function() {
            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "",
                i = !1;
            try {
                if (t)
                    for (var n = 0; n < this.d_.agents.length; n++)
                        if (-1 !== t.indexOf(this.d_.agents[n])) {
                            i = !0;
                            break
                        }
            } catch (t) {} finally {
                return i
            }
        }, i.prototype.Zp = function() {
            var t = [];
            try {
                for (var i = navigator.languages && 0 < navigator.languages.length ? navigator.languages : [navigator.language || navigator.userLanguage], n = 0; n < i.length; n++) i[n] && t.push(i[n])
            } catch (t) {} finally {
                return t
            }
        }, new i
    } catch (t) {}

    function i() {
        var t, i = this;
        try {
            this.ns = "CrispLoader", this.x = {
                warn: function() {},
                error: function() {},
                info: function() {},
                log: function() {},
                debug: function() {}
            }, this.e_ = !1, this.on = "crisp-client", this.l_ = "client.crisp.chat", this.p_ = "client.relay.crisp.chat", this.__ = "stream.relay.crisp.chat", this._a = "7f1f150", this.do = "production", this.y_ = "https:", this.$s = "https://crisp.chat", this.fn = "https://go.crisp.chat", this._n = "https://image.crisp.chat", this.fs = "https://game.crisp.chat", this.ms = this.y_ + "//" + this.p_, this.ws = this.y_ + "//" + this.__, this._e = this.y_ + "//" + this.l_, this.io = [{
                urls: ["stun:stun.media.crisp.chat:3478", "stun:stun.media.crisp.chat:3479"]
            }, {
                urls: ["turn:turn.media.crisp.chat:3478?transport=udp", "turn:turn.media.crisp.chat:3478?transport=tcp", "turn:turn.media.crisp.chat:3479?transport=udp", "turn:turn.media.crisp.chat:3479?transport=tcp", "turns:turn.media.crisp.chat:443?transport=tcp"],
                username: "client_9F9kh",
                credential: "DPCEHTqUb7jiJ2mvnzcUmFV4mKK6c8jntUXo4gC8tYCbHTocuy9YJiCxpQ4tmG3p"
            }], this.d_ = {
                domains: [],
                agents: ["Trident", "Googlebot", "Bingbot", "Slurp", "DuckDuckBot", "Baiduspider", "YandexBot", "GTmetrix", "Lighthouse", "Acunetix", "Ahrefs"]
            }, this.Xp = "static/javascripts", this.Wp = "static/stylesheets", this.v = "$__CRISP_INSTANCE", this.m_ = "$__CRISP_INCLUDED", this.w = 100, this.Vp = 3e4, this.I_ = 1e3, this.h_ = 280, this.n_ = 320, this.s_ = 420, this.r_ = [{
                pattern: /edg(?:e)?\/([0-9\.]+)/,
                version: 79
            }, {
                pattern: /chrom(?:e|ium)\/([0-9\.]+)/,
                version: 53
            }, {
                pattern: /firefox\/([0-9\.]+)/,
                version: 49
            }, {
                pattern: /version\/([0-9\.]+)(?: mobile\/(?:[^\s]+))? safari\//,
                version: 10
            }, {
                pattern: /android ([0-9\.]+)/,
                version: 5
            }], this.o_ = /(?:http\:|https\:)?\/\/[^\/]+\/l\/([a-zA-Z0-9\-_]+)\.js/i, this.Gp(), !0 === window[this.m_] || void 0 !== window[this.v] && "function" == typeof window[this.v].__init || !0 !== this.c_() || (window[this.m_] = !0, "interactive" === document.readyState || "complete" === document.readyState ? this.init() : (t = document.onreadystatechange || function() {}, window.addEventListener("DOMContentLoaded", function() {
                i.init()
            }), document.onreadystatechange = function() {
                "function" == typeof t && t(), "interactive" !== document.readyState && "complete" !== document.readyState || setTimeout(function() {
                    i.init()
                }, i.I_)
            }), this.Up())
        } catch (t) {}
    }
})();