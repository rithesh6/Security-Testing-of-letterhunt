(self.webpackChunkembed_iframe = self.webpackChunkembed_iframe || []).push([
    [9097, 4826], {
        40637: (e, t, n) => {
            var r = {
                "./ar.js": [46979, 749, 8142],
                "./bn.js": [96734, 749, 5383],
                "./cs.js": [29868, 749, 4587],
                "./da.js": [56146, 749, 9264],
                "./de.js": [36500, 749, 7236],
                "./el.js": [22884, 749, 4704],
                "./en.js": [39656, 749, 3478],
                "./es.js": [11311, 749, 8599],
                "./fa.js": [60689, 749, 1076],
                "./fi.js": [53750, 749, 4213],
                "./fil.js": [13740, 749, 2271],
                "./fr.js": [43127, 749, 1753],
                "./he.js": [6335, 749, 9119],
                "./hi.js": [26076, 749, 6626],
                "./hu.js": [71723, 749, 4453],
                "./id.js": [60078, 749, 9342],
                "./it.js": [66530, 749, 1214],
                "./ja.js": [70145, 749, 2586],
                "./ko.js": [48441, 749, 6477],
                "./ms.js": [59117, 749, 8737],
                "./nb.js": [15353, 749, 890],
                "./nl.js": [71076, 749, 1476],
                "./pl.js": [14807, 749, 135],
                "./pt.js": [32068, 749, 9106],
                "./ro.js": [23051, 749, 1137],
                "./ru.js": [72091, 749, 7539],
                "./sv.js": [8237, 749, 2208],
                "./th.js": [33834, 749, 2918],
                "./tr.js": [61, 749, 7928],
                "./uk.js": [89911, 749, 3142],
                "./vi.js": [42601, 749, 4385],
                "./zh-Hant.js": [66711, 749, 1786],
                "./zh.js": [71979, 749, 9682]
            };

            function i(e) {
                if (!n.o(r, e)) return Promise.resolve().then((() => {
                    var t = new Error("Cannot find module '" + e + "'");
                    throw t.code = "MODULE_NOT_FOUND", t
                }));
                var t = r[e],
                    i = t[0];
                return Promise.all(t.slice(1).map(n.e)).then((() => n.t(i, 23)))
            }
            i.keys = () => Object.keys(r), i.id = 40637, e.exports = i
        },
        29881: (e, t, n) => {
            var r = {
                "./ar-x-fm.js": [38696, 749, 9536],
                "./ar.js": [21600, 749, 5413],
                "./bg.js": [57316, 749, 1643],
                "./bn.js": [41966, 749, 1718],
                "./ca.js": [76065, 749, 905],
                "./cs.js": [51210, 749, 9795],
                "./da.js": [69222, 749, 822],
                "./de.js": [50198, 749, 1841],
                "./el.js": [19062, 749, 9069],
                "./en-GB.js": [70729, 749, 6378],
                "./en-ss.js": [15342, 749, 5812],
                "./en-xx.js": [99858, 749, 2625],
                "./en.js": [24349, 749, 5762],
                "./es.js": [84826, 749, 8349],
                "./eu.js": [80908, 749, 6180],
                "./fa.js": [98853, 749, 8918],
                "./fi.js": [16378, 749, 8620],
                "./fil.js": [28679, 749, 3552],
                "./fr.js": [4450, 749, 242],
                "./ga.js": [64325, 749, 1211],
                "./gl.js": [25362, 749, 8281],
                "./gu.js": [71942, 749, 5103],
                "./he.js": [80153, 749, 5432],
                "./hi.js": [3990, 749, 230],
                "./hr.js": [89059, 749, 9876],
                "./hu.js": [37149, 749, 8345],
                "./id.js": [41744, 749, 2426],
                "./it.js": [16878, 749, 57],
                "./ja.js": [78782, 749, 5290],
                "./kn.js": [99292, 749, 4255],
                "./ko.js": [86407, 749, 4791],
                "./mr.js": [27381, 749, 5686],
                "./ms.js": [93704, 749, 3251],
                "./nb.js": [68317, 749, 4604],
                "./nl.js": [21775, 749, 4088],
                "./pl.js": [68252, 749, 847],
                "./pt.js": [7014, 749, 1839],
                "./ro.js": [34314, 749, 4397],
                "./ru.js": [75835, 749, 825],
                "./sk.js": [7793, 749, 5820],
                "./sr.js": [62360, 749, 3415],
                "./sv.js": [1064, 749, 9146],
                "./ta.js": [26140, 749, 8374],
                "./th.js": [32388, 749, 219],
                "./tr.js": [49519, 749, 3096],
                "./uk.js": [73453, 749, 4160],
                "./ur.js": [25163, 749, 7708],
                "./vi.js": [26280, 749, 530],
                "./zh-Hant.js": [91127, 749, 5576],
                "./zh.js": [96260, 749, 9989]
            };

            function i(e) {
                if (!n.o(r, e)) return Promise.resolve().then((() => {
                    var t = new Error("Cannot find module '" + e + "'");
                    throw t.code = "MODULE_NOT_FOUND", t
                }));
                var t = r[e],
                    i = t[0];
                return Promise.all(t.slice(1).map(n.e)).then((() => n.t(i, 23)))
            }
            i.keys = () => Object.keys(r), i.id = 29881, e.exports = i
        },
        47530: (e, t, n) => {
            "use strict";
            var r = function(e) {
                    this.Tweet = function(e) {
                        return {
                            fetch: function(t, n) {
                                return e.get("tweet-result", t, n).then((function(e) {
                                    return e && e.id_str ? Promise.resolve(e) : Promise.reject(new Error("could not parse api response"))
                                }))
                            }
                        }
                    }(e), this.RelatedVideos = function(e) {
                        return {
                            fetch: function(t, n) {
                                return e.get("related-videos", t, n).then((function(e) {
                                    return e && e.length ? Promise.resolve(e) : Promise.reject(new Error("could not parse api response"))
                                }))
                            }
                        }
                    }(e)
                },
                i = n(87462),
                s = n(34902);
            const a = function(e) {
                var t = e.headers,
                    n = t && t["content-type"];
                return "string" == typeof n && n.indexOf("application/json") >= 0 && e.body ? JSON.parse(e.body) : null
            };
            var o = {
                    host: "https://cdn.syndication.twimg.com"
                },
                c = function() {
                    function e(e) {
                        this.client = new s.ZP((0, i.Z)({}, o, e))
                    }
                    var t = e.prototype;
                    return t.dispatch = function(e) {
                        return this.client.dispatch(e).then(a)
                    }, t.get = function(e, t, n) {
                        return this.dispatch({
                            path: "/" + e,
                            method: "GET",
                            params: t,
                            headers: n || {}
                        })
                    }, e
                }(),
                u = n(31830),
                d = n(75208),
                l = n(57869),
                f = n(63366),
                _ = ["key"],
                h = function(e) {
                    return !0
                },
                E = function(e) {
                    return e
                },
                p = function(e, t) {
                    return e[t]
                };
            const v = function(e, t) {
                return t.reduce((function(t, n) {
                    var r, s = n.key,
                        a = (0, f.Z)(n, _),
                        o = a.accessor,
                        c = void 0 === o ? p : o,
                        u = a.required,
                        d = void 0 !== u && u,
                        l = a.validate,
                        v = void 0 === l ? h : l,
                        g = a.transform,
                        m = void 0 === g ? E : g,
                        T = a.fallback,
                        b = c(e, s);
                    if (void 0 !== b && v(b)) {
                        var k, w = m(b);
                        if (void 0 !== w) return (0, i.Z)({}, t, ((k = {})[s] = w, k))
                    }
                    if (void 0 !== T) return (0, i.Z)({}, t, ((r = {})[s] = T, r));
                    if (d) throw new Error(s + " is a required parameter");
                    return t
                }), {})
            };
            var g = /^[a-zA-Z0-9-]+$/,
                m = /^\d+$/,
                T = function(e) {
                    return e.replace(/[^a-zA-Z0-9-_:/?=@.]/g, "")
                },
                b = {
                    key: "dnt",
                    validate: function(e) {
                        return ["true", "false"].includes(e)
                    },
                    transform: function(e) {
                        return "true" === e
                    },
                    fallback: !1
                },
                k = {
                    key: "embedId",
                    validate: function(e) {
                        return g.test(e)
                    },
                    fallback: "embed-0"
                },
                w = {
                    key: "lang",
                    validate: function(e) {
                        return d.Z.isSupportedLocale(e)
                    },
                    fallback: "en"
                },
                y = {
                    key: "pageData",
                    accessor: function(e) {
                        return v(e, [{
                            key: "origin",
                            validate: function(e) {
                                return "string" == typeof e
                            },
                            transform: T,
                            fallback: ""
                        }, {
                            key: "frame",
                            validate: function(e) {
                                return "string" == typeof e
                            },
                            transform: T,
                            fallback: ""
                        }, {
                            key: "partner",
                            validate: function(e) {
                                return "string" == typeof e
                            },
                            transform: T,
                            fallback: ""
                        }, {
                            key: "siteScreenName",
                            validate: function(e) {
                                return "string" == typeof e
                            },
                            transform: T,
                            fallback: ""
                        }, {
                            key: "siteUserId",
                            validate: function(e) {
                                return "string" == typeof e
                            },
                            transform: T,
                            fallback: ""
                        }, {
                            key: "creatorScreenName",
                            validate: function(e) {
                                return "string" == typeof e
                            },
                            transform: T,
                            fallback: ""
                        }, {
                            key: "creatorUserId",
                            validate: function(e) {
                                return "string" == typeof e
                            },
                            transform: T,
                            fallback: ""
                        }])
                    }
                },
                O = {
                    key: "theme",
                    validate: function(e) {
                        return [l.ZP.ThemePaletteNames.light, l.ZP.ThemePaletteNames.dark].includes(e)
                    },
                    fallback: l.ZP.ThemePaletteNames.light
                },
                j = {
                    key: "widgetsVersion",
                    accessor: function(e) {
                        return e.widgetsVersion
                    },
                    validate: function(e) {
                        return "string" == typeof e && /^([a-zA-Z0-9])+:([0-9])+$/.test(e)
                    },
                    fallback: void 0
                },
                N = {
                    key: "features",
                    transform: function(e) {
                        try {
                            var t = window.atob(e);
                            return JSON.parse(t)
                        } catch (e) {
                            return {}
                        }
                    },
                    fallback: {}
                },
                I = {
                    key: "sessionId",
                    fallback: ""
                };
            n(67294);
            var R = n(83720),
                S = n(64123),
                A = n(43292),
                P = n(30801),
                L = n.n(P);
            const C = (0, A.Z)({
                loader: function() {
                    return (e = d.Z.getLocale(), t = L().getCldrLocale(e), Promise.all([n(40637)("./" + t + ".js"), n(29881)("./" + t + ".js")])).then((function() {
                        return Promise.all([n.e(2212), n.e(1901)]).then(n.bind(n, 30557))
                    }));
                    var e, t
                },
                renderPlaceholder: function() {
                    return null
                }
            });
            var Z, D, z, V, M = n(39958),
                F = n(91381),
                B = n(60798),
                x = n(64641),
                U = "e87353cc2ba70:1673652681513",
                W = new r(new c({
                    dispatcher: s.e2
                })),
                H = new r(new c({
                    dispatcher: s.e2,
                    host: "https://syndication.twitter.com"
                })),
                G = (z = u.Z.parseQueryString(location.search), V = [{
                    key: "id",
                    validate: function(e) {
                        return m.test(e)
                    },
                    required: !0
                }, {
                    key: "hideThread",
                    accessor: function(e) {
                        return e.hideThread
                    },
                    validate: function(e) {
                        return ["true", "false"].includes(e)
                    },
                    transform: function(e) {
                        return "true" === e
                    },
                    fallback: !1
                }, {
                    key: "hideMedia",
                    accessor: function(e) {
                        return e.hideCard
                    },
                    validate: function(e) {
                        return ["true", "false"].includes(e)
                    },
                    transform: function(e) {
                        return "true" === e
                    },
                    fallback: !1
                }, b, k, N, w, y, I, O, j], v(z, V)),
                X = G.dnt,
                Y = G.embedId,
                K = G.features,
                q = G.hideMedia,
                Q = G.hideThread,
                J = G.id,
                $ = G.lang,
                ee = G.pageData,
                te = G.sessionId,
                ne = G.theme,
                re = G.widgetsVersion;
            M.Z.initialize(H, K, te), B.ZP.initialize({
                page: B.iY.TWEET,
                data: {
                    client_version: re,
                    dnt: X,
                    widget_id: Y,
                    widget_origin: ee.origin,
                    widget_frame: ee.frame,
                    widget_partner: ee.partner,
                    widget_site_screen_name: ee.siteScreenName,
                    widget_site_user_id: ee.siteUserId,
                    widget_creator_screen_name: ee.creatorScreenName,
                    widget_creator_user_id: ee.creatorUserId,
                    widget_iframe_version: U,
                    item_ids: [J],
                    item_details: (Z = {}, Z[J] = {
                        item_type: F.v.TWEET
                    }, Z)
                }
            }), x.ZP.initialize({
                embedId: Y,
                data: {
                    tweet_id: J
                }
            }), x.ZP.send({
                key: x.zW.INITIALIZED,
                details: {
                    iframe_version: U
                }
            }), Promise.all([(D = [], window.IntersectionObserver || D.push(n.e(6337).then(n.t.bind(n, 66337, 23))), window.ResizeObserver ? window.PolyfillResizeObserver = window.ResizeObserver : D.push(n.e(1033).then(n.bind(n, 91033)).then((function(e) {
                window.ResizeObserver = e.default, window.PolyfillResizeObserver = e.default
            }))), Promise.all(D))]).then((function() {
                return function(e, t, n) {
                    var r = t.lang,
                        i = t.theme;
                    d.Z.setLocale(r), S.Z.setTheme(i, void 0, void 0, {
                        vdlRefreshEnabled: !0,
                        chirpFontEnabled: !1
                    }), R.Z.registerComponent("App", (function() {
                        return e
                    }));
                    var s = document.getElementById("app") || document.getElementsByTagName("div")[0];
                    return new Promise((function(e, t) {
                        R.Z.runApplication("App", {
                            callback: e,
                            rootTag: s,
                            initialProps: n
                        })
                    }))
                }(C, {
                    lang: $,
                    theme: ne
                }, {
                    api: W,
                    hideMedia: q,
                    hideThread: Q,
                    id: J,
                    pageData: ee
                })
            }))
        },
        57296: (e, t, n) => {
            "use strict";
            n.d(t, {
                ID: () => i,
                PE: () => l,
                bx: () => a,
                eK: () => c,
                eX: () => u,
                iY: () => s,
                sA: () => d,
                z8: () => o
            });
            var r = n(78539),
                i = "tfw",
                s = Object.freeze({
                    TWEET: "tweet",
                    DDG: "ddg"
                }),
                a = Object.freeze({
                    FAKE: "tfw_experiment_1234",
                    MAIN: "main",
                    PARENT: "parent",
                    QUOTE: "quote",
                    PARENT_QUOTE: "parent-quote",
                    HOLDBACK_EXPERIMENT: "tfw_team_holdback_11929",
                    SKELETON_LOADER_EXPERIMENT: "tfw_skeleton_loading_13398",
                    VIDEO_HLS_DYNAMIC_MANIFESTS_EXPERIMENT: r.pe.VideoHlsDynamicManifests.key,
                    VIDEO_PLAYER_SIZE_CAPPING_EXPERIMENT: r.pe.VideoPlayerSizeCapping.key,
                    RELATED_VIDEOS_EXPERIMENT: r.pe.RelatedVideos.key
                }),
                o = Object.freeze({
                    AUTHOR: "author",
                    CARD: "card",
                    ERROR: "error",
                    LIKE_ACTION: "like-action",
                    LOGO: "logo",
                    NEWS_ACTION: "news-action",
                    PERFORMANCE: "performance",
                    PHOTO: "photo",
                    PLACE: "place",
                    PRIVACY_NOTICE: "privacy-notice",
                    PUBLIC_INTEREST_NOTICE: "public-interest-notice",
                    REPLY_PROMPT: "reply-prompt",
                    SENSITIVE_MEDIA: "sensitive-media",
                    SHARE_ACTION: "share-action",
                    SOFT_INTERVENTION_PIVOT: "soft-intervention-pivot",
                    THREAD: "thread",
                    TIMESTAMP: "timestamp",
                    TWEET_REPLY_CONTEXT: "tweet-reply-context",
                    TWEET_TEXT_CASHTAG: "tweet-text-cashtag",
                    TWEET_TEXT_HASHTAG: "tweet-text-hashtag",
                    TWEET_TEXT_MEDIA: "tweet-text-media",
                    TWEET_TEXT_MENTION: "tweet-text-mention",
                    TWEET_TEXT_QUOTE: "tweet-text-quote",
                    TWEET_TEXT_URL: "tweet-text-url",
                    VIDEO: "video",
                    WHITESPACE: "whitespace"
                }),
                c = Object.freeze({
                    GIF_PLAYER: "gif_player",
                    VIDEO_PLAYER: "video_player",
                    CTA_LOGO: "cta_logo",
                    CTA_PAUSED_PLAYER: "cta_paused_player",
                    CTA_REPLIES: "cta_replies",
                    CTA_WATCH_AGAIN: "cta_watch_again",
                    CTA_WATCH_PREVIEW: "cta_watch_preview",
                    RELATED_VIDEOS: "related_videos_overlay",
                    SKELETON: "skeleton"
                }),
                u = Object.freeze({
                    CLICK_EXTERNAL: "click-external",
                    CLICK_INTERACTIVE: "click-interactive",
                    CLICK_TWITTER: "click-twitter",
                    EXPERIMENT: "experiment",
                    IMPRESSION: "impression",
                    UNHANDLED_ERROR: "unhandled-error",
                    NO_RESULTS: "no-results",
                    RESULTS: "results",
                    SEEN: "seen"
                }),
                d = "horizon",
                l = {
                    client: i,
                    page: s.TWEET
                }
        },
        60798: (e, t, n) => {
            "use strict";
            n.d(t, {
                eX: () => E.eX,
                z8: () => E.z8,
                eK: () => E.eK,
                iY: () => E.iY,
                bx: () => E.bx,
                ZP: () => p
            });
            var r = n(87462),
                i = n(4942),
                s = n(78539),
                a = n(44165),
                o = n(91381),
                c = n(94578),
                u = n(17187);
            const d = function(e) {
                    function t(t) {
                        var n;
                        n = e.call(this) || this;
                        var r = t.category,
                            i = t.clientName,
                            s = t.transport;
                        if (!r) throw new Error("required category is missing");
                        if (n.category = r, !i) throw new Error("required clientName is missing");
                        if (n.clientName = i, "function" != typeof s) throw new Error("Invalid transport: " + s);
                        return n._transport = s, n
                    }(0, c.Z)(t, e);
                    var n = t.prototype;
                    return n.createEventObject = function(e, t, n) {
                        return (0, r.Z)({
                            _category_: t,
                            triggered_on: Date.now(),
                            event_namespace: e
                        }, n)
                    }, n._handleError = function(e) {
                        try {
                            this.emit("error", e)
                        } catch (e) {}
                        throw e
                    }, n.log = function(e, t) {
                        var n = this.createEventObject((0, r.Z)({
                            client: this.clientName
                        }, e), this.category, t);
                        this.emit("log", n), this._log(n)
                    }, n._log = function(e) {
                        var t = this;
                        e && this._transport(e).catch((function(e) {
                            return t._handleError(e)
                        })).catch((function() {}))
                    }, t
                }(n.n(u)()),
                l = function(e) {
                    var t = new d(e);
                    return t.on("log", (function(e) {
                        (0, a.u)("[scribe] LOG " + (0, o.N)(e.event_namespace), e)
                    })), t.on("error", (function(e) {
                        (0, a.u)("[scribe] ERROR when scribing", e)
                    })), t
                };
            var f = n(17673),
                _ = n(39958);
            const h = function(e) {
                return function(t) {
                    return function(e, t) {
                        void 0 === t && (t = "https://syndication.twitter.com/i/jot");
                        var n = t + "?" + f.stringify(e);
                        return new Promise((function(e, t) {
                            var r = document.createElement("img");
                            r.addEventListener("load", (function() {
                                return e(r)
                            })), r.addEventListener("error", t), r.src = n
                        }))
                    }((n = t, r = {
                        l: JSON.stringify(n)
                    }, n.dnt && (r.dnt = 1), _.Z.isBucketed() && (r.session_id = _.Z.getSessionId().session_id), r), e);
                    var n, r
                }
            };
            var E = n(57296);
            const p = new(function() {
                function e() {
                    (0, i.Z)(this, "_data", {
                        context: E.sA
                    }), this._scribeClient = l({
                        clientName: E.ID,
                        category: "tfw_client_event",
                        transport: h()
                    }), this._settingsScribeClient = l({
                        clientName: E.ID,
                        category: "tfw_client_event",
                        transport: h("https://syndication.twitter.com/i/jot/embeds")
                    })
                }
                var t = e.prototype;
                return t.initialize = function(e) {
                    this._page = e.page, this._data = (0, r.Z)({}, this._data, e.data)
                }, t.scribe = function(e, t, n) {
                    var i = (0, r.Z)({}, this._data, n),
                        a = _.Z.getFeatureData(s.pe.RufousEOL.key),
                        o = _.Z.getFeatureData(s.pe.DuplicateScribeToSettings.key);
                    a && a.version ? a.bucket === s.pe.RufousEOL.buckets.CONTROL ? this._scribeClient.log((0, r.Z)({
                        page: this._page,
                        action: e
                    }, t), i) : this._settingsScribeClient.log((0, r.Z)({
                        page: this._page,
                        action: e
                    }, t), i) : o && o.bucket === s.pe.DuplicateScribeToSettings.buckets.ON ? (i.context = "rufous-eol", this._settingsScribeClient.log((0, r.Z)({
                        page: this._page,
                        action: e
                    }, t), i)) : this._scribeClient.log((0, r.Z)({
                        page: this._page,
                        action: e
                    }, t), i)
                }, e
            }())
        },
        44165: (e, t, n) => {
            "use strict";
            n.d(t, {
                u: () => r
            });
            var r = function(e, t) {}
        },
        75208: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => f
            });
            var r = n(74387),
                i = n.n(r),
                s = n(30801),
                a = n.n(s),
                o = n(86218),
                c = "en",
                u = {
                    ar: !0,
                    fa: !0,
                    he: !0
                },
                d = function(e) {
                    return Boolean(u[e])
                },
                l = function(e) {
                    return a().locales.indexOf(e) > -1
                };
            const f = {
                isLocaleRTL: d,
                isSupportedLocale: l,
                setLocale: function(e) {
                    return c = l(e) ? e : "en", i().loadLanguage(a().getCldrLocale(c)).then((function() {
                        o.Z.setPreferredLanguageRTL(d(c)), document && document.documentElement && document.documentElement.setAttribute("lang", c)
                    }))
                },
                getLocale: function() {
                    return c
                }
            }
        },
        30801: e => {
            var t = {
                    ms: "msa",
                    nb: "no",
                    zh: "zh-cn",
                    "zh-Hant": "zh-tw"
                },
                n = {
                    msa: "ms",
                    no: "nb",
                    "zh-cn": "zh",
                    "zh-tw": "zh-Hant"
                };
            e.exports = {
                locales: ["en", "ar", "bn", "cs", "da", "de", "el", "es", "fa", "fi", "fil", "fr", "he", "hi", "hu", "id", "it", "ja", "ko", "msa", "nl", "no", "pl", "pt", "ro", "ru", "sv", "th", "tr", "uk", "vi", "zh-cn", "zh-tw"],
                getCldrLocale: function(e) {
                    return n[e] || e
                },
                getTwitterLocale: function(e) {
                    return t[e] || e
                }
            }
        },
        31830: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => a
            });
            var r = n(17673),
                i = /(?:^|(?:https?:)?\/\/(?:www\.)?twitter\.com(?::\d+)?\/(?:#!\/)?[\w_]+\/status(?:es)?\/)(\d+)/i,
                s = ["twitter.com", "mobile.twitter.com"];
            const a = {
                isStatusUrl: function(e) {
                    return "string" == typeof e && i.test(e)
                },
                isTwitterDotComLink: function(e) {
                    try {
                        var t = new URL(e).host;
                        return s.indexOf(t) > -1
                    } catch (e) {
                        return !1
                    }
                },
                parseQueryString: function(e) {
                    void 0 === e && (e = "");
                    try {
                        return r.parse(e.replace(/^\?/, ""))
                    } catch (e) {
                        if (e instanceof URIError) return {};
                        throw e
                    }
                }
            }
        },
        64641: (e, t, n) => {
            "use strict";
            n.d(t, {
                dJ: () => a,
                zW: () => s,
                ZP: () => o
            });
            var r = n(87462),
                i = n(44165),
                s = Object.freeze({
                    CLICK: "click",
                    INITIALIZED: "initialized",
                    LIKE: "like",
                    NO_RESULTS: "no_results",
                    RENDERED: "rendered",
                    RESIZE: "resize",
                    RESULTS: "results",
                    TRIGGER: "trigger"
                }),
                a = Object.freeze({
                    INTENT: "intent"
                });
            const o = new(function() {
                function e() {}
                var t = e.prototype;
                return t.initialize = function(e) {
                    var t = e.embedId,
                        n = e.data;
                    this._embedId = t, this._data = n || {}
                }, t.send = function(e) {
                    var t, n = e.key,
                        s = e.details,
                        a = window.parent;
                    if (a && a.postMessage) {
                        var o = "twttr.private." + n,
                            c = {
                                jsonrpc: "2.0",
                                method: o,
                                id: this._embedId,
                                params: [(0, r.Z)({}, s, {
                                    data: this._data
                                })]
                            };
                        (0, i.u)("[rpc] MESSAGE " + o, s), a.postMessage(((t = {})["twttr.embed"] = c, t), "*")
                    }
                }, e
            }())
        },
        78539: (e, t, n) => {
            "use strict";
            n.d(t, {
                FA: () => a,
                PG: () => u,
                dw: () => _,
                hf: () => f,
                iv: () => c,
                l2: () => d,
                mS: () => o,
                pe: () => s,
                xD: () => l
            });
            var r, i = n(39958),
                s = {
                    DuplicateScribeToSettings: {
                        key: "tfw_duplicate_scribes_to_settings",
                        buckets: {
                            ON: "on",
                            OFF: "off"
                        }
                    },
                    ShowBlueVerifiedBadge: {
                        key: "tfw_show_blue_verified_badge",
                        buckets: {
                            ON: "on",
                            OFF: "off"
                        }
                    },
                    MixedMedia: {
                        key: "tfw_mixed_media_15897",
                        buckets: {
                            CONTROL: "control",
                            TREATMENT: "treatment"
                        }
                    },
                    ShowBusinessVerifiedBadge: {
                        key: "tfw_show_business_verified_badge",
                        buckets: {
                            ON: "on",
                            OFF: "off"
                        }
                    },
                    ShowGovernmentVerifiedBadge: {
                        key: "tfw_show_gov_verified_badge",
                        buckets: {
                            ON: "on",
                            OFF: "off"
                        }
                    },
                    ShowBusinessAffiliateBadge: {
                        key: "tfw_show_business_affiliate_badge",
                        buckets: {
                            ON: "on",
                            OFF: "off"
                        }
                    },
                    RufousEOL: {
                        key: "tfw_embeds_rufous_eol_14929",
                        buckets: {
                            CONTROL: "control",
                            TREATMENT: "treatment"
                        }
                    },
                    VideoHlsDynamicManifests: {
                        key: "tfw_video_hls_dynamic_manifests_15082",
                        buckets: {
                            CONTROL: "control",
                            TRUE_BITRATE: "true_bitrate"
                        }
                    },
                    VideoPlayerSizeCapping: {
                        key: "tfw_video_player_size_capping_15449",
                        buckets: {
                            CONTROL: "control",
                            NO_CAPPING: "no_capping"
                        }
                    },
                    RelatedVideos: {
                        key: "tfw_related_videos_15128",
                        buckets: {
                            CONTROL: "control",
                            FEW_VIDEOS: "few_vids",
                            MANY_VIDEOS: "many_vids"
                        }
                    }
                },
                a = function() {
                    var e = i.Z.getFeatures()[s.ShowBlueVerifiedBadge.key],
                        t = s.ShowBlueVerifiedBadge.buckets.ON;
                    return e && [t].includes(e.bucket)
                },
                o = function() {
                    var e = i.Z.getFeatures()[s.MixedMedia.key],
                        t = s.MixedMedia.buckets.TREATMENT;
                    return e && [t].includes(e.bucket)
                },
                c = function() {
                    var e = i.Z.getFeatures()[s.ShowBusinessVerifiedBadge.key],
                        t = s.ShowBusinessVerifiedBadge.buckets.ON;
                    return e && [t].includes(e.bucket)
                },
                u = function() {
                    var e = i.Z.getFeatures()[s.ShowGovernmentVerifiedBadge.key],
                        t = s.ShowGovernmentVerifiedBadge.buckets.ON;
                    return e && [t].includes(e.bucket)
                },
                d = function() {
                    var e = i.Z.getFeatures()[s.ShowBusinessAffiliateBadge.key],
                        t = s.ShowBusinessAffiliateBadge.buckets.ON;
                    return e && [t].includes(e.bucket)
                },
                l = function() {
                    var e = i.Z.getFeatures()[s.RelatedVideos.key],
                        t = s.RelatedVideos.buckets,
                        n = t.FEW_VIDEOS,
                        r = t.MANY_VIDEOS;
                    return e && [n, r].includes(e.bucket)
                },
                f = function() {
                    var e = i.Z.getFeatures()[s.RelatedVideos.key],
                        t = s.RelatedVideos.buckets.FEW_VIDEOS;
                    return e && [t].includes(e.bucket)
                },
                _ = ((r = {}).web_video_hls_variant_version = {
                    bucketValue: function(e) {
                        switch (e) {
                            case s.VideoHlsDynamicManifests.buckets.CONTROL:
                                return "0";
                            case s.VideoHlsDynamicManifests.buckets.TRUE_BITRATE:
                                return "1";
                            default:
                                return
                        }
                    },
                    key: s.VideoHlsDynamicManifests.key
                }, r.web_video_player_size_cap_disabled = {
                    bucketValue: function(e) {
                        switch (e) {
                            case s.VideoPlayerSizeCapping.buckets.CONTROL:
                                return !1;
                            case s.VideoPlayerSizeCapping.buckets.NO_CAPPING:
                                return !0;
                            default:
                                return
                        }
                    },
                    key: s.VideoPlayerSizeCapping.key
                }, r)
        },
        39958: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => i
            });
            var r = n(4942);
            const i = new(function() {
                function e() {
                    var e = this;
                    (0, r.Z)(this, "store", {
                        features: {}
                    }), (0, r.Z)(this, "get", (function() {
                        return e.store
                    })), (0, r.Z)(this, "getFeatures", (function() {
                        return e.store.features
                    })), (0, r.Z)(this, "getSessionId", (function() {
                        return e.session_id
                    })), (0, r.Z)(this, "isBucketed", (function() {
                        var t = e.getFeatures();
                        return Object.keys(t).some((function(e) {
                            return null !== t[e].version
                        }))
                    }))
                }
                var t = e.prototype;
                return t.initialize = function(e, t, n) {
                    this.api = e, this.store.features = t, this.session_id = {
                        session_id: n
                    }
                }, t.getFeatureData = function(e) {
                    var t = this.getFeatures();
                    return t[e] ? {
                        experiment_key: e,
                        bucket: t[e].bucket,
                        version: t[e].version
                    } : void 0
                }, e
            }())
        },
        91381: (e, t, n) => {
            "use strict";
            n.d(t, {
                N: () => i,
                v: () => r
            });
            var r = Object.freeze({
                    TWEET: 0,
                    CAROUSEL: 29
                }),
                i = function(e) {
                    var t = e.client,
                        n = void 0 === t ? "" : t,
                        r = e.page,
                        i = void 0 === r ? "" : r,
                        s = e.section,
                        a = void 0 === s ? "" : s,
                        o = e.component,
                        c = void 0 === o ? "" : o,
                        u = e.element,
                        d = void 0 === u ? "" : u,
                        l = e.action;
                    return n + ":" + i + ":" + a + ":" + c + ":" + d + ":" + (void 0 === l ? "" : l)
                }
        }
    },
    e => {
        e.O(0, [7796], (() => (47530, e(e.s = 47530)))), e.O()
    }
]);