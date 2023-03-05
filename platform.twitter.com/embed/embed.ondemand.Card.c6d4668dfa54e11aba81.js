"use strict";
(self.webpackChunkembed_iframe = self.webpackChunkembed_iframe || []).push([
    [1520], {
        41569: (e, r, t) => {
            t.r(r), t.d(r, {
                default: () => v
            });
            var n = t(87462),
                a = t(63366),
                i = t(67294),
                o = t(30557),
                c = t(57296),
                u = t(60890),
                l = t(80944),
                s = t(98222),
                d = t(67177),
                m = t(25304),
                f = t(96544),
                _ = t(26039),
                b = ["aspect_ratio", "duration_ms"],
                N = "/data/jenkins/workspace/source_4/syndication/embed-iframe/src/components/Card/Card.js",
                C = void 0,
                k = "open_link";
            const v = function(e) {
                var r = e.card,
                    t = e.cardContext,
                    c = e.section,
                    m = e.style,
                    v = p(c, r),
                    Z = r && s.Z.shouldRenderVideoPlayer(r) ? {
                        renderVideoPlayer: function(e) {
                            var r = e.aspect_ratio,
                                u = e.duration_ms,
                                s = (0, a.Z)(e, b),
                                d = (0, n.Z)({
                                    aspectRatio: r,
                                    durationMs: u
                                }, s);
                            return i.createElement(o.EmbedServerAPIContext.Consumer, {
                                __self: C,
                                __source: {
                                    fileName: N,
                                    lineNumber: 46,
                                    columnNumber: 15
                                }
                            }, (function(e) {
                                return i.createElement(l.Z, {
                                    api: e,
                                    isInCard: !0,
                                    section: c,
                                    tweetId: t.tweetId,
                                    video: d,
                                    __self: C,
                                    __source: {
                                        fileName: N,
                                        lineNumber: 48,
                                        columnNumber: 19
                                    }
                                })
                            }))
                        }
                    } : {
                        cardState: "static"
                    },
                    w = s.Z.isPollCard(r),
                    P = i.useCallback((function(e) {
                        (0, u.U)(e), w && v({
                            action: k
                        })
                    })),
                    E = i.createElement(f.Z, (0, n.Z)({
                        card: r,
                        cardContext: t,
                        isPromoted: !1,
                        onScribeEvent: v
                    }, Z, {
                        __self: C,
                        __source: {
                            fileName: N,
                            lineNumber: 69,
                            columnNumber: 5
                        }
                    }));
                if (s.Z.shouldShowCard(r)) {
                    if (w) {
                        var h = t.tweetPermalink;
                        return i.createElement(_.Z, {
                            link: h,
                            onClick: P,
                            style: m,
                            __self: C,
                            __source: {
                                fileName: N,
                                lineNumber: 82,
                                columnNumber: 9
                            }
                        }, E)
                    }
                    return i.createElement(d.Z, {
                        onClick: u.U,
                        style: m,
                        __self: C,
                        __source: {
                            fileName: N,
                            lineNumber: 88,
                            columnNumber: 7
                        }
                    }, E)
                }
                return null
            };
            var p = function(e, r) {
                return function(t) {
                    if (t.action === k) {
                        var n = s.Z.isTwitterCardClick(r);
                        switch (e) {
                            case c.bx.MAIN:
                                return void(n ? (0, m.Hf)() : (0, m.Md)());
                            case c.bx.PARENT:
                                return void(n ? (0, m.PQ)() : (0, m.SG)());
                            default:
                                return
                        }
                    }
                }
            }
        },
        60890: (e, r, t) => {
            t.d(r, {
                U: () => n
            });
            var n = function(e) {
                e.stopPropagation()
            }
        }
    }
]);