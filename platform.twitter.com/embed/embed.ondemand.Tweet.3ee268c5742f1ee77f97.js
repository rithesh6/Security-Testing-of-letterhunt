"use strict";
(self.webpackChunkembed_iframe = self.webpackChunkembed_iframe || []).push([
    [1901], {
        41554: (e, t, n) => {
            n.d(t, {
                Z: () => d
            });
            var r = n(97326),
                i = n(94578),
                o = n(4942),
                s = n(67294),
                c = n(25304),
                a = n(97677),
                l = n(39958),
                u = n(64123),
                m = n(67177),
                _ = "/data/jenkins/workspace/source_4/syndication/embed-iframe/src/components/ABImpressionScribe/index.js",
                d = function(e) {
                    function t() {
                        for (var t, n = arguments.length, i = new Array(n), s = 0; s < n; s++) i[s] = arguments[s];
                        return t = e.call.apply(e, [this].concat(i)) || this, (0, o.Z)((0, r.Z)(t), "state", {
                            seen: !1
                        }), (0, o.Z)((0, r.Z)(t), "handleInViewport", (function(e) {
                            var n = e.isIntersecting,
                                r = t.state.seen,
                                i = t.props.experimentKey,
                                o = l.Z.getFeatureData(i);
                            o && t.isExperimentBucketed(o) && n && !r && ((0, c.jq)(i, o), t.setState({
                                seen: !0
                            }))
                        })), (0, o.Z)((0, r.Z)(t), "isExperimentBucketed", (function(e) {
                            return !!e.version
                        })), t
                    }
                    return (0, i.Z)(t, e), t.prototype.render = function() {
                        var e = this.state.seen;
                        return s.createElement(a.Z, {
                            disabled: e,
                            onChange: this.handleInViewport,
                            threshold: 1,
                            __self: this,
                            __source: {
                                fileName: _,
                                lineNumber: 46,
                                columnNumber: 7
                            }
                        }, s.createElement(m.Z, {
                            style: f.root,
                            __self: this,
                            __source: {
                                fileName: _,
                                lineNumber: 47,
                                columnNumber: 9
                            }
                        }))
                    }, t
                }(s.Component),
                f = u.Z.create({
                    root: {
                        backgroundColor: "transparent",
                        position: "absolute",
                        width: 1,
                        height: 1,
                        overflow: "hidden",
                        padding: 0,
                        borderWidth: 0
                    }
                })
        },
        98222: (e, t, n) => {
            n.d(t, {
                Z: () => d,
                i: () => _
            });
            var r = n(46873),
                i = [r.sj.IMAGE_DIRECT_MESSAGE, r.sj.MESSAGE_ME, r.sj.VIDEO_DIRECT_MESSAGE],
                o = [r.sj.POLL_2_CHOICE_TEXT, r.sj.POLL_3_CHOICE_TEXT, r.sj.POLL_4_CHOICE_TEXT, r.sj.POLL_2_CHOICE_IMAGE, r.sj.POLL_3_CHOICE_IMAGE, r.sj.POLL_4_CHOICE_IMAGE, r.sj.POLL_2_CHOICE_VIDEO, r.sj.POLL_3_CHOICE_VIDEO, r.sj.POLL_4_CHOICE_VIDEO],
                s = [r.sj.AUDIOSPACE],
                c = [r.sj.AMPLIFY, r.sj.BROADCAST, r.sj.LIVE_EVENT, r.sj.MOMENT].concat(o, i, s),
                a = [r.sj.PROMO_VIDEO_CONVO, r.sj.PROMO_IMAGE_CONVO],
                l = r.sj.AMPLIFY,
                u = [r.sj.POLL_2_CHOICE_VIDEO, r.sj.POLL_3_CHOICE_VIDEO, r.sj.POLL_4_CHOICE_VIDEO, r.sj.PROMO_VIDEO_WEBSITE],
                m = function(e) {
                    return s.indexOf(e.name) > -1
                },
                _ = function(e) {
                    return function(e) {
                        return i.indexOf(e.name) > -1
                    }(e) || function(e) {
                        return a.indexOf(e.name) > -1
                    }(e)
                };
            const d = {
                isPollCard: function(e) {
                    return o.indexOf(e.name) > -1
                },
                isSpaceCard: m,
                isTwitterCardClick: function(e) {
                    return -1 !== c.indexOf(e.name)
                },
                shouldRenderVideoPlayer: function(e) {
                    return -1 !== u.indexOf(e.name)
                },
                shouldShowCard: function(e) {
                    return ! function(e) {
                        return l === e.name
                    }(e) && !m(e)
                }
            }
        },
        97677: (e, t, n) => {
            n.d(t, {
                Z: () => l
            });
            var r = n(97326),
                i = n(94578),
                o = n(4942),
                s = n(67294),
                c = n(73935),
                a = function(e) {
                    function t(t) {
                        var n;
                        return n = e.call(this, t) || this, (0, o.Z)((0, r.Z)(n), "observer", null), (0, o.Z)((0, r.Z)(n), "createObserver", (function() {
                            var e = n.props,
                                t = e.root,
                                r = e.rootMargin,
                                i = e.threshold;
                            n.observer = new IntersectionObserver(n.handleChange, {
                                root: t,
                                rootMargin: r,
                                threshold: i
                            })
                        })), (0, o.Z)((0, r.Z)(n), "destroyObserver", (function() {
                            n.observer && n.node && (n.observer.unobserve(n.node), n.observer = null)
                        })), (0, o.Z)((0, r.Z)(n), "handleChange", (function(e) {
                            (0, n.props.onChange)(e[0])
                        })), n.props.disabled || n.createObserver(), n
                    }(0, i.Z)(t, e);
                    var n = t.prototype;
                    return n.componentDidMount = function() {
                        var e = (0, c.findDOMNode)(this);
                        e instanceof HTMLElement && (this.node = e, this.node && this.observer && this.observer.observe && this.observer.observe(this.node))
                    }, n.componentDidUpdate = function(e) {
                        var t = this.props.disabled;
                        !t && e.disabled && this.createObserver(), t && !e.disabled && this.destroyObserver()
                    }, n.componentWillUnmount = function() {
                        this.destroyObserver()
                    }, n.render = function() {
                        var e = this.props.children;
                        return s.Children.only(e)
                    }, t
                }(s.Component);
            (0, o.Z)(a, "defaultProps", {
                disabled: !1,
                root: null,
                rootMargin: "0px"
            });
            const l = a
        },
        80228: (e, t, n) => {
            n.d(t, {
                Z: () => b,
                e: () => f
            });
            var r = n(87462),
                i = n(63366),
                o = n(67294),
                s = n(67177),
                c = n(64123),
                a = n(76290),
                l = n(57869),
                u = n(49954),
                m = ["children", "style"],
                _ = "/data/jenkins/workspace/source_4/syndication/embed-iframe/src/components/TweetContainer/index.js",
                d = void 0,
                f = c.Z.theme.breakpoints.xSmall;
            const b = function(e) {
                var t = e.children,
                    n = e.style,
                    b = (0, i.Z)(e, m),
                    N = o.useState(!1),
                    E = N[0],
                    T = N[1],
                    h = o.useRef(),
                    I = o.useRef(),
                    C = (0, a.F)().windowWidth;
                return o.useEffect((function() {
                    C && C < f && c.Z.setScale(l.ZP.ThemeScaleNames.small)
                }), [C]), o.createElement(u.Z, {
                    __self: d,
                    __source: {
                        fileName: _,
                        lineNumber: 57,
                        columnNumber: 5
                    }
                }, o.createElement(s.Z, (0, r.Z)({
                    style: [p.container, n]
                }, b, {
                    ref: I,
                    __self: d,
                    __source: {
                        fileName: _,
                        lineNumber: 58,
                        columnNumber: 7
                    }
                }), E ? null : o.createElement("div", {
                    onFocus: function(e) {
                        return function(e, t, n, r, i) {
                            r || e.target !== t.current || (i(!0), e.target.dispatchEvent(new KeyboardEvent("keydown", {
                                key: "a"
                            })), n.current.children[1].focus())
                        }(e, h, I, E, T)
                    },
                    ref: h,
                    tabIndex: "0",
                    __self: d,
                    __source: {
                        fileName: _,
                        lineNumber: 60,
                        columnNumber: 11
                    }
                }), t))
            };
            var p = c.Z.create((function(e) {
                return {
                    container: {
                        borderWidth: e.borderWidths.small,
                        borderColor: e.colors.gray200,
                        borderRadius: e.borderRadii.large,
                        overflow: "hidden"
                    }
                }
            }))
        },
        80944: (e, t, n) => {
            n.d(t, {
                Z: () => r
            });
            const r = (0, n(43292).Z)({
                loader: function() {
                    return Promise.all([n.e(9055), n.e(618), n.e(4384), n.e(2796), n.e(4347)]).then(n.bind(n, 90290))
                },
                renderPlaceholder: function() {
                    return null
                }
            })
        },
        30557: (e, t, n) => {
            n.r(t), n.d(t, {
                EmbedServerAPIContext: () => Lr,
                default: () => Sr
            });
            var r, i, o = n(97326),
                s = n(94578),
                c = n(4942),
                a = n(67294),
                l = (Object.freeze({
                    FCP: "FCP",
                    FID: "FID",
                    LCP: "LCP"
                }), n(60798)),
                u = function(e) {
                    l.ZP.scribe(e.name, {
                        component: l.z8.PERFORMANCE,
                        section: l.bx.MAIN
                    }, {
                        duration_ms: e.value
                    })
                },
                m = n(82131),
                _ = n(16942),
                d = n(25304),
                f = function(e) {
                    function t(t) {
                        var n;
                        return (n = e.call(this, t) || this).state = {
                            hasError: !1
                        }, n
                    }
                    return (0, s.Z)(t, e), t.getDerivedStateFromError = function(e) {
                        return (0, d.Vg)(e), {
                            hasError: !0
                        }
                    }, t.prototype.render = function() {
                        return this.props.children
                    }, t
                }(a.Component),
                b = n(53070),
                p = n(75208),
                N = n(39958),
                E = n(41554),
                T = n(87462),
                h = n(63366),
                I = n(31830),
                C = Object.freeze({
                    tweet: "tweet"
                }),
                Z = [{
                    name: "tfw_team_holdback_11929",
                    ref_id: "hb",
                    ref_values: ["control", "holdback_prod", "production"]
                }],
                y = n(50277),
                v = {
                    sections: (r = {}, r[l.bx.FAKE] = "", r[l.bx.MAIN] = "s1", r[l.bx.PARENT] = "s2", r[l.bx.QUOTE] = "s3", r[l.bx.PARENT_QUOTE] = "s4", r[l.bx.HOLDBACK_EXPERIMENT] = "", r[l.bx.SKELETON_LOADER_EXPERIMENT] = "", r[l.bx.VIDEO_HLS_DYNAMIC_MANIFESTS_EXPERIMENT] = "", r[l.bx.VIDEO_PLAYER_SIZE_CAPPING_EXPERIMENT] = "", r[l.bx.RELATED_VIDEOS_EXPERIMENT] = "", r),
                    components: (i = {}, i[l.z8.AUTHOR] = "c1", i[l.z8.CARD] = "c2", i[l.z8.LIKE_ACTION] = "c3", i[l.z8.LOGO] = "c4", i[l.z8.NEWS_ACTION] = "c5", i[l.z8.PERFORMANCE] = "", i[l.z8.PHOTO] = "c6", i[l.z8.PLACE] = "c7", i[l.z8.PRIVACY_NOTICE] = "c8", i[l.z8.PUBLIC_INTEREST_NOTICE] = "c9", i[l.z8.SHARE_ACTION] = "c10", i[l.z8.SOFT_INTERVENTION_PIVOT] = "c11", i[l.z8.THREAD] = "c11.1", i[l.z8.TIMESTAMP] = "c12", i[l.z8.TWEET_REPLY_CONTEXT] = "c13", i[l.z8.TWEET_TEXT_CASHTAG] = "c14", i[l.z8.TWEET_TEXT_HASHTAG] = "c15", i[l.z8.TWEET_TEXT_MEDIA] = "c16", i[l.z8.TWEET_TEXT_MENTION] = "c17", i[l.z8.TWEET_TEXT_QUOTE] = "c18", i[l.z8.TWEET_TEXT_URL] = "c19", i[l.z8.VIDEO] = "c20", i[l.z8.WHITESPACE] = "c21", i[l.z8.REPLY_PROMPT] = "c22", i[l.z8.ERROR] = "c23", i[l.z8.SENSITIVE_MEDIA] = "c25", i)
                };
            const w = function(e) {
                var t = [];
                return Z.forEach((function(n) {
                    var r = e[n.name],
                        i = n.ref_id;
                    if (r && i) {
                        if (!/^[a-z0-9]+$/i.test(i)) return;
                        var o = r.bucket;
                        if (n.ref_values) {
                            var s = n.ref_values.indexOf(o);
                            if (s > -1) {
                                var c = i + "_" + s;
                                r.version && (c += "_" + r.version), t.push(c)
                            }
                        }
                    }
                }), {}), t.join(",")
            };
            var g = ["pathname", "query"],
                P = function(e, t, n, r) {
                    var i, o, s, c, a, l, u, m, _, d, f = {
                            twcamp: (d = e.embedType, d === C.tweet ? "tweetembed" : "unknown"),
                            twterm: e.id,
                            twgr: r ? n : w(t),
                            twcon: (s = e.namespace, c = s.section, a = void 0 === c ? "" : c, l = s.component, u = void 0 === l ? "" : l, m = a && v.sections[a], _ = u && v.components[u], m || _ ? m + "_" + _ : "")
                        },
                        b = {
                            ref_src: (i = f, o = function(e) {
                                var t;
                                return (0, T.Z)(((t = {}).twsrc = "tfw", t), e)
                            }(i), function(e) {
                                return e.reduce((function(e, t) {
                                    return e + "|" + t
                                }))
                            }(Object.keys(o).map((function(e) {
                                return function(e, t) {
                                    return e + "^" + t
                                }(e, o[e] ? o[e] : "")
                            })))),
                            ref_url: e.pageData.origin
                        };
                    return function(e) {
                        var t, n = e.pathname,
                            r = e.query,
                            i = (0, h.Z)(e, g),
                            o = function(e) {
                                return e.startsWith("/")
                            }(t = n) ? "" + y.S9 + t : t;
                        return (0, T.Z)({
                            pathname: o,
                            query: I.Z.isTwitterDotComLink(o) ? (0, T.Z)({}, b, r) : r
                        }, i)
                    }
                },
                A = n(99318),
                x = n(45227),
                R = n(31072),
                k = "/data/jenkins/workspace/source_4/syndication/embed-iframe/src/components/AnalyticsContext/index.js",
                L = function() {
                    return !0
                },
                S = a.createContext(),
                O = S.Consumer,
                M = S.Provider,
                W = function(e, t) {
                    var n = (0, T.Z)({}, e, {
                        namespace: (0, T.Z)({}, e.namespace, t)
                    });
                    return (0, x.Z)(n, e) ? e : n
                },
                z = function(e) {
                    function t() {
                        for (var t, n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                        return t = e.call.apply(e, [this].concat(r)) || this, (0, c.Z)((0, o.Z)(t), "_getMergedContext", (0, R.Z)(W)), t
                    }
                    return (0, s.Z)(t, e), t.prototype.render = function() {
                        var e = this,
                            t = this.props,
                            n = t.children,
                            r = t.namespace,
                            i = N.Z.getFeatures(),
                            o = N.Z.getSessionId().session_id,
                            s = i && i.tfw_refsrc_session,
                            c = !(!s || "on" !== s.bucket);
                        return a.createElement(O, {
                            __self: this,
                            __source: {
                                fileName: k,
                                lineNumber: 39,
                                columnNumber: 7
                            }
                        }, (function(t) {
                            var s = t ? e._getMergedContext(t, r) : void 0;
                            return a.createElement(M, {
                                value: s,
                                __self: e,
                                __source: {
                                    fileName: k,
                                    lineNumber: 43,
                                    columnNumber: 13
                                }
                            }, s ? a.createElement(A.zt, {
                                isExternal: L,
                                linkProcessor: P(s, i, o, c),
                                __self: e,
                                __source: {
                                    fileName: k,
                                    lineNumber: 45,
                                    columnNumber: 17
                                }
                            }, n) : n)
                        }))
                    }, t
                }(a.Component),
                X = function(e) {
                    return !(!e.limited_actions || "non_compliant" !== e.limited_actions)
                },
                D = n(74387),
                V = n.n(D),
                j = n(43463),
                U = n(26039),
                Q = ["children", "link", "style"],
                K = "/data/jenkins/workspace/source_4/syndication/embed-iframe/src/components/InnerTweetContainer/index.js",
                F = V().i8622c1c,
                B = function(e) {
                    function t() {
                        var t;
                        return t = e.call(this) || this, (0, c.Z)((0, o.Z)(t), "handleViewLinkClick", (function(e) {
                            var n = t.props.onClick;
                            t._linkRef.current && t._linkRef.current.click && t._linkRef.current.click(), n && n(e)
                        })), (0, c.Z)((0, o.Z)(t), "handleListItemViewClick", (function(e) {
                            t._linkRef.current && t._linkRef.current.click && t._linkRef.current.click()
                        })), t._containerRef = a.createRef(), t._linkRef = a.createRef(), t
                    }
                    return (0, s.Z)(t, e), t.prototype.render = function() {
                        var e = this.props,
                            t = e.children,
                            n = e.link,
                            r = e.style,
                            i = (0, h.Z)(e, Q);
                        return a.createElement(a.Fragment, null, a.createElement(j.Z, (0, T.Z)({
                            accessibilityRole: "article",
                            focusable: !0,
                            style: r
                        }, i, {
                            onClick: this.handleListItemViewClick,
                            viewRef: this._containerRef,
                            __self: this,
                            __source: {
                                fileName: K,
                                lineNumber: 48,
                                columnNumber: 9
                            }
                        }), a.createElement(U.Z, {
                            accessibilityLabel: F,
                            link: n,
                            onClick: this.handleViewLinkClick,
                            ref: this._linkRef,
                            __self: this,
                            __source: {
                                fileName: K,
                                lineNumber: 56,
                                columnNumber: 11
                            }
                        }), t))
                    }, t
                }(a.Component);
            const H = B;
            var G = n(98222),
                q = n(97677),
                Y = n(80228),
                $ = n(78539),
                J = n(67177),
                ee = n(2883),
                te = n(44723),
                ne = n(64123),
                re = "/data/jenkins/workspace/source_4/syndication/embed-iframe/src/components/ParentTweetContainer/index.js",
                ie = void 0,
                oe = V().c5218b0c;
            const se = function(e) {
                var t = e.avatarUrl,
                    n = e.children,
                    r = e.screenName;
                return a.createElement(j.Z, {
                    style: ce.container,
                    withInteractiveStyling: !1,
                    __self: ie,
                    __source: {
                        fileName: re,
                        lineNumber: 24,
                        columnNumber: 5
                    }
                }, a.createElement(J.Z, {
                    __self: ie,
                    __source: {
                        fileName: re,
                        lineNumber: 25,
                        columnNumber: 7
                    }
                }, a.createElement(ee.Z, {
                    hoverLabel: {
                        label: oe
                    },
                    interactiveStyles: null,
                    __self: ie,
                    __source: {
                        fileName: re,
                        lineNumber: 26,
                        columnNumber: 9
                    }
                }, a.createElement(te.default, {
                    importantForAccessibility: "no-hide-descendants",
                    onClick: d.QY,
                    screenName: r,
                    size: "xxLarge",
                    uri: t,
                    withLink: !0,
                    __self: ie,
                    __source: {
                        fileName: re,
                        lineNumber: 32,
                        columnNumber: 11
                    }
                })), a.createElement(J.Z, {
                    style: ce.line,
                    __self: ie,
                    __source: {
                        fileName: re,
                        lineNumber: 41,
                        columnNumber: 9
                    }
                })), a.createElement(J.Z, {
                    style: ce.columnRight,
                    __self: ie,
                    __source: {
                        fileName: re,
                        lineNumber: 43,
                        columnNumber: 7
                    }
                }, n))
            };
            var ce = ne.Z.create((function(e) {
                    return {
                        container: {
                            flexDirection: "row"
                        },
                        columnRight: {
                            flexBasis: 0,
                            flexGrow: 7,
                            justifyContent: "flex-start",
                            marginStart: e.spaces.space4,
                            marginBottom: e.spaces.space12
                        },
                        line: {
                            backgroundColor: e.colors.gray200,
                            marginHorizontal: "auto",
                            marginTop: e.spaces.space4,
                            marginBottom: e.spaces.space4,
                            minHeight: "10px",
                            width: "2px",
                            flexGrow: 1
                        }
                    }
                })),
                ae = n(57296);
            const le = (0, n(43292).Z)({
                loader: function() {
                    return Promise.all([n.e(4384), n.e(6544), n.e(1520)]).then(n.bind(n, 41569))
                },
                renderPlaceholder: function() {
                    return null
                }
            });
            var ue = n(68646),
                me = n(82089),
                _e = "/data/jenkins/workspace/source_4/syndication/embed-iframe/src/components/Photos/index.js",
                de = void 0,
                fe = V().a316f872,
                be = function(e) {
                    return e.map((function(e) {
                        return (0, T.Z)({
                            accessibilityLabel: fe
                        }, e, {
                            shouldShowAltLabel: !1
                        })
                    }))
                };
            const pe = function(e) {
                var t = e.images,
                    n = e.section,
                    r = e.style,
                    i = n === ae.bx.MAIN || n === ae.bx.PARENT,
                    o = t.length > 1;
                return a.createElement(J.Z, {
                    style: [Ee.photoWrapper, i && [Ee.nonQuotedTweetStyles, r]],
                    __self: de,
                    __source: {
                        fileName: _e,
                        lineNumber: 53,
                        columnNumber: 5
                    }
                }, a.createElement(me.Z, {
                    cacheLocationKey: "embedded_tweet",
                    images: be(t),
                    onClick: Ne(n),
                    onVariantSelection: ue.Z,
                    previewMode: !1,
                    singleImageMaxAspectRatio: 2,
                    singleImageMinAspectRatio: 1,
                    withCenterCrop: o,
                    __self: de,
                    __source: {
                        fileName: _e,
                        lineNumber: 54,
                        columnNumber: 7
                    }
                }))
            };
            var Ne = function(e) {
                    switch (e) {
                        case ae.bx.PARENT_QUOTE:
                            return d.$X;
                        case ae.bx.PARENT:
                            return d.JV;
                        case ae.bx.QUOTE:
                            return d.q2;
                        default:
                            return d.LC
                    }
                },
                Ee = ne.Z.create((function(e) {
                    return {
                        photoWrapper: {
                            overflow: "hidden"
                        },
                        nonQuotedTweetStyles: {
                            borderColor: e.colors.nestedBorderColor,
                            borderRadius: e.borderRadii.large,
                            borderStyle: "solid",
                            borderWidth: "1px"
                        }
                    }
                })),
                Te = n(86034),
                he = "/data/jenkins/workspace/source_4/syndication/embed-iframe/src/components/PublicInterestNotice/index.js",
                Ie = function(e) {
                    function t() {
                        for (var t, n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                        return t = e.call.apply(e, [this].concat(r)) || this, (0, c.Z)((0, o.Z)(t), "state", {
                            seen: !1
                        }), (0, c.Z)((0, o.Z)(t), "getClickHandler", (function() {
                            switch (t.props.section) {
                                case l.bx.MAIN:
                                    return d.qO;
                                case l.bx.PARENT:
                                    return d.Z$;
                                case l.bx.QUOTE:
                                    return d.GV;
                                case l.bx.PARENT_QUOTE:
                                    return d.x2;
                                default:
                                    return
                            }
                        })), (0, c.Z)((0, o.Z)(t), "handleInViewport", (function(e) {
                            var n = e.isIntersecting,
                                r = t.state.seen,
                                i = t.props.section;
                            n && !r && (i === l.bx.MAIN ? (0, d.Mu)() : i === l.bx.PARENT ? (0, d.Rd)() : i === l.bx.QUOTE ? (0, d.yu)() : i === l.bx.PARENT_QUOTE && (0, d.wA)(), t.setState({
                                seen: !0
                            }))
                        })), (0, c.Z)((0, o.Z)(t), "isInQuotedTweet", (function() {
                            var e = t.props.section;
                            return e === l.bx.QUOTE || e === l.bx.PARENT_QUOTE
                        })), t
                    }
                    return (0, s.Z)(t, e), t.prototype.render = function() {
                        var e = this.props,
                            t = e.actionLabel,
                            n = e.actionLink,
                            r = e.text,
                            i = this.state.seen,
                            o = this.getClickHandler();
                        return a.createElement(q.Z, {
                            disabled: i,
                            onChange: this.handleInViewport,
                            threshold: 1,
                            __self: this,
                            __source: {
                                fileName: he,
                                lineNumber: 41,
                                columnNumber: 7
                            }
                        }, a.createElement(ee.Z, {
                            link: n,
                            onClick: o,
                            style: [Ce.label, this.isInQuotedTweet() && Ce.labelInQuotedTweet],
                            __self: this,
                            __source: {
                                fileName: he,
                                lineNumber: 42,
                                columnNumber: 9
                            }
                        }, a.createElement(Te.ZP, {
                            color: "normal",
                            size: "body",
                            withInteractiveStyling: !1,
                            __self: this,
                            __source: {
                                fileName: he,
                                lineNumber: 47,
                                columnNumber: 11
                            }
                        }, r, " ", a.createElement(Te.ZP, {
                            color: "blue700",
                            withInteractiveStyling: !0,
                            __self: this,
                            __source: {
                                fileName: he,
                                lineNumber: 49,
                                columnNumber: 13
                            }
                        }, t))))
                    }, t
                }(a.Component),
                Ce = ne.Z.create((function(e) {
                    return {
                        label: {
                            marginTop: e.spaces.space12,
                            marginBottom: e.spaces.space12,
                            paddingBottom: e.spaces.space12,
                            paddingTop: e.spaces.space12,
                            paddingLeft: e.spaces.space16,
                            paddingRight: e.spaces.space16,
                            borderWidth: e.borderWidths.small,
                            borderColor: e.colors.nestedBorderColor,
                            borderRadius: e.borderRadii.large,
                            backgroundColor: e.colors.gray0
                        },
                        labelInQuotedTweet: {
                            borderRadius: e.borderRadii.large,
                            marginStart: e.spaces.space16,
                            marginEnd: e.spaces.space16
                        }
                    }
                })),
                Ze = function(e) {
                    if (e) {
                        var t = e.badge,
                            n = e.description,
                            r = e.url,
                            i = e.user_label_type,
                            o = e.user_label_display_type;
                        return {
                            badge: {
                                url: t && t.url
                            },
                            description: n,
                            url: {
                                url: r && r.url,
                                urlType: "ExternalUrl"
                            },
                            userLabelType: i,
                            userLabelDisplayType: o
                        }
                    }
                },
                ye = function(e) {
                    return "Badge" === (null == e ? void 0 : e.user_label_display_type)
                },
                ve = n(39281),
                we = n(34351),
                ge = n(1781),
                Pe = n(27220),
                Ae = "/data/jenkins/workspace/source_4/syndication/embed-iframe/src/components/QuotedTweet/index.js",
                xe = void 0,
                Re = V().g7aba472;
            const ke = function(e) {
                var t = e.hideMedia,
                    n = e.quotedTweet,
                    r = e.onClick,
                    i = e.section,
                    o = e.style,
                    s = n.user,
                    c = s.highlighted_label;
                return a.createElement(ee.Z, {
                    hoverLabel: {
                        label: Re
                    },
                    interactiveStyles: null,
                    __self: xe,
                    __source: {
                        fileName: Ae,
                        lineNumber: 38,
                        columnNumber: 5
                    }
                }, a.createElement(Y.Z, {
                    style: [Le.container, o],
                    __self: xe,
                    __source: {
                        fileName: Ae,
                        lineNumber: 44,
                        columnNumber: 7
                    }
                }, a.createElement(H, {
                    link: (0, y.t0)(n),
                    onClick: r,
                    __self: xe,
                    __source: {
                        fileName: Ae,
                        lineNumber: 45,
                        columnNumber: 9
                    }
                }, a.createElement(J.Z, {
                    style: Le.innerContainer,
                    __self: xe,
                    __source: {
                        fileName: Ae,
                        lineNumber: 46,
                        columnNumber: 11
                    }
                }, a.createElement(J.Z, {
                    style: Le.header,
                    __self: xe,
                    __source: {
                        fileName: Ae,
                        lineNumber: 47,
                        columnNumber: 13
                    }
                }, a.createElement(ve.Z, {
                    affiliateBadgeInfo: Ze(c),
                    isBlueVerified: (0, $.FA)() ? s.is_blue_verified : void 0,
                    isVerified: s.verified,
                    name: s.name,
                    profileImageUrl: s.profile_image_url_https,
                    screenName: s.screen_name,
                    style: Le.username,
                    verifiedType: s.verified_type,
                    __self: xe,
                    __source: {
                        fileName: Ae,
                        lineNumber: 48,
                        columnNumber: 15
                    }
                }), function(e) {
                    var t, n = N.Z.getFeatures(),
                        r = "on" === (null == n || null == (t = n.tfw_tweet_edit_frontend) ? void 0 : t.bucket);
                    return e.isEdited && !e.isStaleEdit && r ? a.createElement(J.Z, {
                        style: Le.editedIcon,
                        __self: xe,
                        __source: {
                            fileName: Ae,
                            lineNumber: 87,
                            columnNumber: 5
                        }
                    }, a.createElement(ge.Z, {
                        __self: xe,
                        __source: {
                            fileName: Ae,
                            lineNumber: 88,
                            columnNumber: 7
                        }
                    }), a.createElement(Pe.Z, {
                        __self: xe,
                        __source: {
                            fileName: Ae,
                            lineNumber: 89,
                            columnNumber: 7
                        }
                    })) : null
                }(n)), function(e) {
                    var t = Ze(e);
                    return !t || ye(e) ? null : a.createElement(we.Z, {
                        label: t,
                        shouldTruncate: !0,
                        __self: xe,
                        __source: {
                            fileName: Ae,
                            lineNumber: 79,
                            columnNumber: 10
                        }
                    })
                }(c)), a.createElement(ht, {
                    hideMedia: t,
                    section: i === ae.bx.PARENT ? ae.bx.PARENT_QUOTE : ae.bx.QUOTE,
                    tweet: n,
                    __self: xe,
                    __source: {
                        fileName: Ae,
                        lineNumber: 62,
                        columnNumber: 11
                    }
                }), function(e) {
                    var t, n = N.Z.getFeatures(),
                        r = "on" === (null == n || null == (t = n.tfw_tweet_edit_frontend) ? void 0 : t.bucket);
                    return e.isStaleEdit && r ? a.createElement(J.Z, {
                        style: Le.staleCallout,
                        __self: xe,
                        __source: {
                            fileName: Ae,
                            lineNumber: 99,
                            columnNumber: 5
                        }
                    }, a.createElement(Pe.Z, {
                        editType: "stale",
                        textMode: "inline",
                        textSize: "subtext2",
                        __self: xe,
                        __source: {
                            fileName: Ae,
                            lineNumber: 100,
                            columnNumber: 7
                        }
                    })) : null
                }(n))))
            };
            var Le = ne.Z.create((function(e) {
                    return {
                        container: {
                            borderRadius: e.borderRadii.large
                        },
                        innerContainer: {
                            paddingTop: e.spaces.space12,
                            paddingRight: e.spaces.space12,
                            paddingLeft: e.spaces.space12
                        },
                        header: {
                            flexDirection: "row"
                        },
                        username: {
                            flex: "1 1 auto"
                        },
                        editedIcon: {
                            flexDirection: "row",
                            flexBasis: "content",
                            marginStart: e.spaces.space2
                        },
                        staleCallout: {
                            flexDirection: "row",
                            paddingBottom: e.spaces.space12,
                            paddingRight: e.spaces.space12,
                            paddingLeft: e.spaces.space12
                        }
                    }
                })),
                Se = n(984),
                Oe = n(66596),
                Me = n(68896),
                We = "/data/jenkins/workspace/source_4/syndication/embed-iframe/src/components/SensitiveMediaInterstitial/index.js",
                ze = V().daa154a0,
                Xe = function(e) {
                    function t() {
                        for (var t, n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                        return t = e.call.apply(e, [this].concat(r)) || this, (0, c.Z)((0, o.Z)(t), "state", {
                            seen: !1
                        }), (0, c.Z)((0, o.Z)(t), "renderTombstoneComponent", (function(e, n) {
                            var r = t.getClickHandler(),
                                i = n === l.bx.MAIN || n === l.bx.PARENT;
                            return a.createElement(Se.Z, (0, T.Z)({}, e, {
                                actionButtonWrapperStyle: De.attachment,
                                onActionClick: function(t) {
                                    e.onActionClick(), r(t)
                                },
                                style: [De.content, De.wrapper, i ? De.nonQuotedTweetStyles : De.quotedTweetStyles],
                                __self: (0, o.Z)(t),
                                __source: {
                                    fileName: We,
                                    lineNumber: 81,
                                    columnNumber: 7
                                }
                            }))
                        })), (0, c.Z)((0, o.Z)(t), "getClickHandler", (function() {
                            switch (t.props.section) {
                                case l.bx.MAIN:
                                    return d.ez;
                                case l.bx.PARENT:
                                    return d.g;
                                case l.bx.QUOTE:
                                    return d.Fy;
                                case l.bx.PARENT_QUOTE:
                                    return d.or;
                                default:
                                    return ue.Z
                            }
                        })), (0, c.Z)((0, o.Z)(t), "handleInViewport", (function(e) {
                            var n = e.isIntersecting,
                                r = t.state.seen,
                                i = t.props.section;
                            n && !r && (i === l.bx.MAIN ? (0, d.cY)() : i === l.bx.PARENT ? (0, d.e7)() : i === l.bx.QUOTE ? (0, d.g1)() : i === l.bx.PARENT_QUOTE && (0, d.Lo)(), t.setState({
                                seen: !0
                            }))
                        })), t
                    }
                    return (0, s.Z)(t, e), t.prototype.render = function() {
                        var e = this,
                            t = this.props,
                            n = t.children,
                            r = t.section,
                            i = t.lang,
                            o = t.attachmentAspectRatio,
                            s = this.state.seen,
                            c = a.createElement(Te.ZP, {
                                align: "center",
                                lang: i,
                                style: De.text,
                                __self: this,
                                __source: {
                                    fileName: We,
                                    lineNumber: 44,
                                    columnNumber: 7
                                }
                            }, ze),
                            u = r === l.bx.MAIN || r === l.bx.PARENT ? De.root : null;
                        return a.createElement(q.Z, {
                            disabled: s,
                            onChange: this.handleInViewport,
                            threshold: 1,
                            __self: this,
                            __source: {
                                fileName: We,
                                lineNumber: 51,
                                columnNumber: 7
                            }
                        }, a.createElement(Oe.Z, {
                            label: c,
                            lang: i,
                            render: function(t) {
                                return a.createElement(J.Z, {
                                    style: u,
                                    __self: e,
                                    __source: {
                                        fileName: We,
                                        lineNumber: 58,
                                        columnNumber: 15
                                    }
                                }, o ? a.createElement(Me.Z, {
                                    ratio: o,
                                    __self: e,
                                    __source: {
                                        fileName: We,
                                        lineNumber: 60,
                                        columnNumber: 19
                                    }
                                }, e.renderTombstoneComponent(t, r)) : e.renderTombstoneComponent(t, r))
                            },
                            __self: this,
                            __source: {
                                fileName: We,
                                lineNumber: 52,
                                columnNumber: 9
                            }
                        }, n))
                    }, t
                }(a.Component),
                De = ne.Z.create((function(e) {
                    return {
                        root: {
                            marginTop: e.spaces.space12
                        },
                        attachment: {
                            marginTop: e.spaces.space8,
                            paddingBottom: e.spaces.space4
                        },
                        content: {
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            textAlign: "center",
                            height: "100%",
                            width: "100%"
                        },
                        photoWrapper: {
                            overflow: "hidden"
                        },
                        nonQuotedTweetStyles: {
                            borderColor: e.colors.nestedBorderColor,
                            borderRadius: e.borderRadii.large,
                            borderStyle: "solid",
                            borderWidth: "1px"
                        },
                        quotedTweetStyles: {
                            borderColor: e.colors.transparent,
                            borderTopColor: e.colors.nestedBorderColor,
                            borderRadius: e.borderRadii.none
                        }
                    }
                })),
                Ve = n(59101),
                je = "/data/jenkins/workspace/source_4/syndication/embed-iframe/src/components/SoftInterventionPivot/index.js",
                Ue = function(e) {
                    function t() {
                        for (var t, n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                        return t = e.call.apply(e, [this].concat(r)) || this, (0, c.Z)((0, o.Z)(t), "state", {
                            seen: !1
                        }), (0, c.Z)((0, o.Z)(t), "getClickHandler", (function() {
                            var e = t.props,
                                n = e.link,
                                r = e.section,
                                i = I.Z.isTwitterDotComLink(n.url);
                            switch (r) {
                                case l.bx.MAIN:
                                    return i ? d.Zg : d.El;
                                case l.bx.PARENT:
                                    return i ? d.oj : d.xZ;
                                case l.bx.QUOTE:
                                    return i ? d.Rg : d.uA;
                                case l.bx.PARENT_QUOTE:
                                    return i ? d.Fq : d.lP;
                                default:
                                    return
                            }
                        })), (0, c.Z)((0, o.Z)(t), "handleInViewport", (function(e) {
                            var n = e.isIntersecting,
                                r = t.state.seen,
                                i = t.props.section;
                            n && !r && (i === l.bx.MAIN ? (0, d.Ek)() : i === l.bx.PARENT ? (0, d.kc)() : i === l.bx.QUOTE ? (0, d.jv)() : i === l.bx.PARENT_QUOTE && (0, d.UP)(), t.setState({
                                seen: !0
                            }))
                        })), (0, c.Z)((0, o.Z)(t), "isInQuotedTweet", (function() {
                            var e = t.props.section;
                            return e === l.bx.QUOTE || e === l.bx.PARENT_QUOTE
                        })), t
                    }
                    return (0, s.Z)(t, e), t.prototype.render = function() {
                        var e = this.props,
                            t = e.isTweetNonCompliant,
                            n = e.link,
                            r = e.label,
                            i = e.tweetId,
                            o = e.displayType,
                            s = this.state.seen,
                            c = {
                                text: r,
                                entities: []
                            };
                        return a.createElement(q.Z, {
                            disabled: s,
                            onChange: this.handleInViewport,
                            threshold: 1,
                            __self: this,
                            __source: {
                                fileName: je,
                                lineNumber: 51,
                                columnNumber: 7
                            }
                        }, a.createElement(J.Z, {
                            onClick: this.getClickHandler(),
                            style: [Qe.label, this.isInQuotedTweet() && Qe.labelInQuotedTweet],
                            __self: this,
                            __source: {
                                fileName: je,
                                lineNumber: 52,
                                columnNumber: 9
                            }
                        }, a.createElement(Ve.ZP, {
                            displayType: "SoftIntervention",
                            inQuoteTweet: this.isInQuotedTweet(),
                            isTweetNonCompliant: t,
                            landingUrl: n,
                            softInterventionDisplayType: o,
                            text: c,
                            tweetId: i,
                            __self: this,
                            __source: {
                                fileName: je,
                                lineNumber: 56,
                                columnNumber: 11
                            }
                        })))
                    }, t
                }(a.Component),
                Qe = ne.Z.create((function(e) {
                    return {
                        label: {
                            display: "block",
                            alignItems: "flex-start",
                            flexDirection: "row",
                            marginTop: e.spaces.space12
                        },
                        labelInQuotedTweet: {
                            marginTop: 0
                        }
                    }
                })),
                Ke = n(76290),
                Fe = n(12011),
                Be = n(45392),
                He = "/data/jenkins/workspace/source_4/syndication/embed-iframe/src/components/TweetTextWrapper/index.js",
                Ge = void 0,
                qe = ne.Z.create((function(e) {
                    return {
                        tweetTextMain: {
                            cursor: "text"
                        },
                        tweetTextQuoted: {
                            cursor: "normal"
                        }
                    }
                })),
                Ye = Object.freeze({
                    CASHTAG: "cashtag",
                    EMOJI: "emoji",
                    HASHTAG: "hashtag",
                    MEDIA: "media",
                    MENTION: "mention",
                    TEXT: "text",
                    URL: "url"
                });
            const $e = function(e) {
                var t = e.hideMedia,
                    n = e.section,
                    r = e.tweet,
                    i = n === l.bx.PARENT_QUOTE || n === l.bx.QUOTE,
                    o = n === l.bx.PARENT_QUOTE || n === l.bx.PARENT,
                    s = function(e) {
                        return function(t, n) {
                            var r = t.currentTarget,
                                i = r.title && I.Z.isTwitterDotComLink(r.title),
                                o = r.title && I.Z.isStatusUrl(r.title);
                            if (e === l.bx.MAIN) switch (n) {
                                case Ye.CASHTAG:
                                    return void d.$E(t);
                                case Ye.HASHTAG:
                                    return void d.$d(t);
                                case Ye.MEDIA:
                                    return void d.BM(t);
                                case Ye.MENTION:
                                    return void d.hJ(t);
                                case Ye.URL:
                                    return void(o ? d.k9(t) : i ? d.bK(t) : d._N(t));
                                default:
                                    return
                            } else if (e === l.bx.PARENT) switch (n) {
                                case Ye.CASHTAG:
                                    return void d.PS(t);
                                case Ye.HASHTAG:
                                    return void d.EP(t);
                                case Ye.MEDIA:
                                    return void d.$F(t);
                                case Ye.MENTION:
                                    return void d.Ci(t);
                                case Ye.URL:
                                    return void(o ? d.V9(t) : i ? d._u(t) : d.sz(t));
                                default:
                                    return
                            }
                        }
                    }(n);
                return a.createElement(Ke.Z, {
                    __self: Ge,
                    __source: {
                        fileName: He,
                        lineNumber: 25,
                        columnNumber: 5
                    }
                }, (function(e) {
                    var n = e.windowWidth < Y.e;
                    return a.createElement(Fe.ZP.Provider, {
                        value: {
                            isEmbedBrandLinkExperimentEnabled: function() {
                                return !1
                            }
                        },
                        __self: Ge,
                        __source: {
                            fileName: He,
                            lineNumber: 29,
                            columnNumber: 11
                        }
                    }, a.createElement(Be.Z, {
                        displayTextRange: r.display_text_range,
                        entities: r.entities,
                        entityBaseUrl: y.S9,
                        excludeCardUrl: r.card && r.card.url,
                        lang: r.lang,
                        linkColor: "blue700",
                        linkify: !i,
                        onEntityClick: s,
                        quotedTweetId: r.quoted_tweet && r.quoted_tweet.id_str,
                        size: i || o || n ? "body" : "headline1",
                        style: i ? qe.tweetTextQuoted : qe.tweetTextMain,
                        text: r.text,
                        withCardLinks: t || i || r.card && G.Z.isSpaceCard(r.card),
                        withMediaLinks: t,
                        withQuoteLinks: i,
                        __self: Ge,
                        __source: {
                            fileName: He,
                            lineNumber: 34,
                            columnNumber: 13
                        }
                    }))
                }))
            };
            var Je = n(80944),
                et = function(e) {
                    var t = e && e.video && e.video.aspectRatio;
                    if (t) return t;
                    var n = tt(e);
                    return n ? [n.width, n.height] : [16, 9]
                },
                tt = function(e) {
                    var t = e && e.photos && e.photos.length ? e.photos[0] : void 0;
                    return t && t.expandedUrl && t.expandedUrl.includes("/video/") ? t : void 0
                },
                nt = function(e) {
                    var t = rt(e);
                    return t ? [t.width, t.height] : [16, 9]
                },
                rt = function(e) {
                    return e && e.photos && e.photos.length && 1 === e.photos.length ? e.photos[0] : void 0
                },
                it = function(e) {
                    if (2 === e.length) {
                        var t = e[0] > 0 ? e[0] : 16,
                            n = e[1] > 0 ? e[1] : 9;
                        return Math.max(1, t / n)
                    }
                    return 16 / 9
                },
                ot = function(e) {
                    var t = e.video && e.video.poster;
                    if (t) return t;
                    var n = tt(e);
                    return n ? n.url : void 0
                },
                st = function(e, t, n) {
                    var r = !t && !!e.video && n,
                        i = !t && !!ot(e);
                    return r || i
                },
                ct = function(e) {
                    var t = e && e.video && !!e.video.sensitiveMediaWarning,
                        n = e && e.photos && !!e.photos.find((function(e) {
                            return e.sensitiveMediaWarning
                        }));
                    return t || n || !!e.possibly_sensitive
                },
                at = n(63250),
                lt = n(91780),
                ut = "/data/jenkins/workspace/source_4/syndication/embed-iframe/src/components/TweetVideoPoster/index.js",
                mt = void 0,
                _t = V().fd2ac40a,
                dt = V().ffc14326;
            const ft = function(e) {
                var t = e.aspectRatio,
                    n = e.link,
                    r = e.src,
                    i = e.section,
                    o = e.style,
                    s = i === ae.bx.PARENT_QUOTE || i === ae.bx.QUOTE ? [o] : [pt.nonQuotedTweetStyles, o],
                    c = bt(i);
                return a.createElement(Me.Z, {
                    ratio: it(t),
                    style: s,
                    __self: mt,
                    __source: {
                        fileName: ut,
                        lineNumber: 38,
                        columnNumber: 5
                    }
                }, a.createElement(ee.Z, {
                    accessibilityLabel: dt,
                    interactiveStyles: null,
                    link: n,
                    onPress: c,
                    style: [ne.Z.absoluteFill, pt.wrapper],
                    __self: mt,
                    __source: {
                        fileName: ut,
                        lineNumber: 39,
                        columnNumber: 7
                    }
                }, a.createElement(at.Z, {
                    accessibilityLabel: _t,
                    source: r,
                    style: ne.Z.absoluteFill,
                    __self: mt,
                    __source: {
                        fileName: ut,
                        lineNumber: 46,
                        columnNumber: 9
                    }
                }), a.createElement(lt.Z, {
                    accessibilityLabel: dt,
                    onPress: c,
                    __self: mt,
                    __source: {
                        fileName: ut,
                        lineNumber: 47,
                        columnNumber: 9
                    }
                })))
            };
            var bt = function(e) {
                    switch (e) {
                        case ae.bx.MAIN:
                            return d.qK;
                        case ae.bx.PARENT:
                            return d.py;
                        case ae.bx.QUOTE:
                            return d.Pn;
                        case ae.bx.PARENT_QUOTE:
                            return d.og;
                        default:
                            return ue.Z
                    }
                },
                pt = ne.Z.create((function(e) {
                    return {
                        wrapper: {
                            justifyContent: "center",
                            alignItems: "center"
                        },
                        nonQuotedTweetStyles: {
                            borderWidth: "1px",
                            borderStyle: "solid",
                            borderColor: e.colors.nestedBorderColor,
                            borderRadius: e.borderRadii.large,
                            overflow: "hidden"
                        }
                    }
                })),
                Nt = n(93269),
                Et = n(88109),
                Tt = "/data/jenkins/workspace/source_4/syndication/embed-iframe/src/components/TweetContent/index.js",
                ht = function(e) {
                    function t() {
                        for (var t, n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                        return t = e.call.apply(e, [this].concat(r)) || this, (0, c.Z)((0, o.Z)(t), "_getDisplayProps", (function() {
                            var e = t.props,
                                n = e.hideMedia,
                                r = e.hideThread,
                                i = e.tweet,
                                o = e.section,
                                s = t._isWithinQuotedTweet(),
                                c = t._isEmbeddable();
                            return {
                                hasSensitiveMedia: ct(i),
                                showCard: !(!i.card || s || n || !G.Z.shouldShowCard(i.card)),
                                showPhotos: !(n || !i.photos || !i.photos.length),
                                showQuotedTweet: !(!i.quoted_tweet || s),
                                showReplyContext: !(!i.in_reply_to_status_id_str || !r && o !== ae.bx.PARENT && !s),
                                showVideo: !(n || !c || s),
                                showVideoPoster: st(i, n, s)
                            }
                        })), (0, c.Z)((0, o.Z)(t), "_getAttachmentAspectRatio", (function() {
                            var e = t.props.tweet,
                                n = t._getDisplayProps(),
                                r = n.showPhotos,
                                i = n.showVideo,
                                o = n.showVideoPoster;
                            return i || o ? it(et(e)) : r ? it(nt(e)) : void 0
                        })), (0, c.Z)((0, o.Z)(t), "_renderMixedMediaVideoPoster", (function(e) {
                            var n = t.props,
                                r = n.tweet,
                                i = n.section,
                                s = (0, y.t0)(r),
                                c = e.videoConfig;
                            return c && c.poster ? a.createElement(ft, {
                                aspectRatio: [1, 1],
                                link: s,
                                section: i,
                                src: c.poster.url,
                                style: It.mixedMediaVideo,
                                __self: (0, o.Z)(t),
                                __source: {
                                    fileName: Tt,
                                    lineNumber: 262,
                                    columnNumber: 7
                                }
                            }) : null
                        })), (0, c.Z)((0, o.Z)(t), "_isEmbeddable", (function() {
                            var e = t.props.tweet;
                            return e.video && e.video.variants
                        })), (0, c.Z)((0, o.Z)(t), "_isWithinQuotedTweet", (function() {
                            var e = t.props.section;
                            return e === ae.bx.PARENT_QUOTE || e === ae.bx.QUOTE
                        })), (0, c.Z)((0, o.Z)(t), "_isMixedMedia", (function() {
                            var e = t.props.tweet.mediaDetails;
                            return !!(null != e && e.length && (null == e ? void 0 : e.length) > 1 && null != e && e.some((function(e) {
                                return "video" === e.type || "animated_gif" === e.type
                            })))
                        })), t
                    }(0, s.Z)(t, e);
                    var n = t.prototype;
                    return n.render = function() {
                        var e = this._isWithinQuotedTweet();
                        return a.createElement(a.Fragment, {
                            __self: this,
                            __source: {
                                fileName: Tt,
                                lineNumber: 84,
                                columnNumber: 7
                            }
                        }, this._renderPublicInterestNotice(), a.createElement(J.Z, {
                            style: e && It.textWrapperQuoted,
                            __self: this,
                            __source: {
                                fileName: Tt,
                                lineNumber: 86,
                                columnNumber: 9
                            }
                        }, this._renderReplyContext(), this._renderTweetText()), this._renderAttachmentOrHideSensitiveMedia(), this._renderSoftInterventionPivot(), this._renderQuotedTweet())
                    }, n._renderReplyContext = function() {
                        var e = this.props,
                            t = e.section,
                            n = e.tweet,
                            r = this._getDisplayProps().showReplyContext,
                            i = function(e) {
                                switch (e) {
                                    case ae.bx.MAIN:
                                        return d.N_;
                                    case ae.bx.PARENT:
                                        return d.xj;
                                    default:
                                        return
                                }
                            }(t),
                            o = (0, y.CX)((0, y.t0)(n)),
                            s = this._isWithinQuotedTweet() ? Nt.ZP.ReplyContextLinkTypes.none : Nt.ZP.ReplyContextLinkTypes.all;
                        return r ? a.createElement(Nt.ZP, {
                            displayTextRange: n.display_text_range,
                            inReplyToName: n.in_reply_to_name,
                            inReplyToScreenName: n.in_reply_to_screen_name,
                            inReplyToStatusIdStr: n.in_reply_to_status_id_str,
                            inReplyToUserIdStr: n.in_reply_to_user_id_str,
                            linkColor: "gray700",
                            linkType: s,
                            onClick: i,
                            style: It.replyContext,
                            tweetPermalink: o,
                            userMentionsEntities: n.entities.user_mentions,
                            __self: this,
                            __source: {
                                fileName: Tt,
                                lineNumber: 106,
                                columnNumber: 7
                            }
                        }) : null
                    }, n._renderPublicInterestNotice = function() {
                        var e = this.props,
                            t = e.section,
                            n = e.tweet.public_interest_notice;
                        return n ? a.createElement(Ie, {
                            actionLabel: n.action_label,
                            actionLink: n.landing_url,
                            section: t,
                            text: n.text,
                            __self: this,
                            __source: {
                                fileName: Tt,
                                lineNumber: 126,
                                columnNumber: 7
                            }
                        }) : null
                    }, n._renderTweetText = function() {
                        var e = this.props,
                            t = e.hideMedia,
                            n = e.section,
                            r = e.tweet;
                        return a.createElement($e, {
                            hideMedia: t,
                            section: n,
                            tweet: r,
                            __self: this,
                            __source: {
                                fileName: Tt,
                                lineNumber: 137,
                                columnNumber: 12
                            }
                        })
                    }, n._renderAttachmentOrHideSensitiveMedia = function() {
                        var e = this.props,
                            t = e.tweet,
                            n = e.section,
                            r = this._getDisplayProps(),
                            i = r.hasSensitiveMedia,
                            o = r.showCard,
                            s = r.showPhotos,
                            c = r.showQuotedTweet,
                            l = r.showVideo,
                            u = r.showVideoPoster,
                            m = this._getAttachmentAspectRatio();
                        return i && (l || u || s || o && !c) && !this._isMixedMedia() ? a.createElement(Xe, {
                            attachmentAspectRatio: m,
                            lang: t.lang,
                            section: n,
                            __self: this,
                            __source: {
                                fileName: Tt,
                                lineNumber: 157,
                                columnNumber: 9
                            }
                        }, this._renderAttachment()) : this._renderAttachment()
                    }, n._renderAttachment = function() {
                        var e = this,
                            t = this._getDisplayProps(),
                            n = t.showCard,
                            r = t.showPhotos,
                            i = t.showQuotedTweet,
                            o = t.showVideo,
                            s = t.showVideoPoster,
                            c = this.props,
                            l = c.tweet,
                            u = c.section;
                        return a.createElement(Fe.ZP.UseProps, {
                            __self: this,
                            __source: {
                                fileName: Tt,
                                lineNumber: 183,
                                columnNumber: 7
                            }
                        }, (function(t) {
                            if (t.mixedMediaEnabled && e._isMixedMedia() && (o || s || r)) {
                                var c = e._isWithinQuotedTweet() ? {
                                    showBorder: !1,
                                    showRoundCorners: !1
                                } : {};
                                return a.createElement(Et.Z, (0, T.Z)({}, c, {
                                    mediaDetails: l.mediaDetails,
                                    onClick: (0, d.pz)(u),
                                    renderVideo: e._renderMixedMediaVideoPoster,
                                    style: It.attachment,
                                    __self: e,
                                    __source: {
                                        fileName: Tt,
                                        lineNumber: 193,
                                        columnNumber: 15
                                    }
                                }))
                            }
                            return o ? e._renderVideo() : s ? e._renderVideoPoster() : r ? e._renderPhotos() : n && !i ? e._renderCard() : null
                        }))
                    }, n._renderCard = function() {
                        var e = this.props,
                            t = e.tweet,
                            n = e.section,
                            r = {
                                tweetId: t.id_str,
                                tweetPermalink: (0, y.CX)((0, y.t0)(t)),
                                tweetUserId: t.user.id_str
                            };
                        return t.card ? a.createElement(le, {
                            card: t.card,
                            cardContext: r,
                            section: n,
                            style: It.attachment,
                            __self: this,
                            __source: {
                                fileName: Tt,
                                lineNumber: 225,
                                columnNumber: 7
                            }
                        }) : null
                    }, n._renderPhotos = function() {
                        var e = this.props,
                            t = e.tweet,
                            n = e.section;
                        return t.photos ? a.createElement(pe, {
                            images: t.photos,
                            section: n,
                            style: It.attachment,
                            __self: this,
                            __source: {
                                fileName: Tt,
                                lineNumber: 231,
                                columnNumber: 27
                            }
                        }) : null
                    }, n._renderVideo = function() {
                        var e = this,
                            t = this.props,
                            n = t.tweet,
                            r = t.section,
                            i = (0, y.t0)(n);
                        return n.video ? a.createElement(Lr.Consumer, {
                            __self: this,
                            __source: {
                                fileName: Tt,
                                lineNumber: 238,
                                columnNumber: 7
                            }
                        }, (function(t) {
                            return a.createElement(Je.Z, {
                                api: t,
                                link: i,
                                possiblySensitive: n.possibly_sensitive,
                                section: r,
                                style: It.attachment,
                                tweetId: n.id_str,
                                video: n.video,
                                __self: e,
                                __source: {
                                    fileName: Tt,
                                    lineNumber: 240,
                                    columnNumber: 11
                                }
                            })
                        })) : null
                    }, n._renderVideoPoster = function() {
                        var e = this.props,
                            t = e.tweet,
                            n = e.section,
                            r = (0, y.t0)(t),
                            i = ot(t),
                            o = et(t);
                        return i ? a.createElement(ft, {
                            aspectRatio: o,
                            link: r,
                            section: n,
                            src: i,
                            style: It.attachment,
                            __self: this,
                            __source: {
                                fileName: Tt,
                                lineNumber: 278,
                                columnNumber: 7
                            }
                        }) : null
                    }, n._renderSoftInterventionPivot = function() {
                        var e = this.props,
                            t = e.section,
                            n = e.tweet,
                            r = n.soft_intervention_pivot;
                        return r ? a.createElement(Ue, {
                            displayType: r.displayType,
                            isTweetNonCompliant: X(n),
                            label: r.label,
                            link: r.landing_url,
                            section: t,
                            tweetId: n.id_str,
                            __self: this,
                            __source: {
                                fileName: Tt,
                                lineNumber: 314,
                                columnNumber: 7
                            }
                        }) : null
                    }, n._renderQuotedTweet = function() {
                        var e = this.props,
                            t = e.hideMedia,
                            n = e.tweet,
                            r = e.section,
                            i = this._getDisplayProps().showQuotedTweet,
                            o = r === ae.bx.PARENT ? ae.bx.PARENT_QUOTE : ae.bx.QUOTE,
                            s = r === ae.bx.PARENT ? d.tI : d.HM;
                        return i && n.quoted_tweet ? a.createElement(z, {
                            namespace: {
                                section: o
                            },
                            __self: this,
                            __source: {
                                fileName: Tt,
                                lineNumber: 331,
                                columnNumber: 7
                            }
                        }, a.createElement(ke, {
                            hideMedia: t,
                            onClick: s,
                            quotedTweet: n.quoted_tweet,
                            section: r,
                            style: It.attachment,
                            __self: this,
                            __source: {
                                fileName: Tt,
                                lineNumber: 332,
                                columnNumber: 9
                            }
                        })) : null
                    }, t
                }(a.Component);
            (0, c.Z)(ht, "defaultProps", {
                hideMedia: !1,
                hideThread: !1
            });
            var It = ne.Z.create((function(e) {
                    return {
                        mixedMediaVideo: {
                            height: "100%",
                            borderRadius: 0,
                            border: "0 solid"
                        },
                        quotedMixedMediaContent: {
                            borderWidth: "0px",
                            borderRadius: 0
                        },
                        attachment: {
                            marginTop: e.spaces.space12
                        },
                        replyContext: {
                            marginBottom: e.spaces.space4
                        },
                        textWrapperQuoted: {
                            marginBottom: e.spaces.space12,
                            marginTop: e.spaces.space4,
                            paddingRight: e.spaces.space12,
                            paddingLeft: e.spaces.space12
                        }
                    }
                })),
                Ct = n(11537),
                Zt = n(40830),
                yt = "/data/jenkins/workspace/source_4/syndication/embed-iframe/src/components/TwitterLogo/index.js",
                vt = void 0,
                wt = V().j6fd91b6;
            const gt = function(e) {
                var t = e.link,
                    n = Zt.Z.generate({
                        backgroundColor: "transparent",
                        color: ne.Z.theme.colors.blue500
                    }),
                    r = {
                        backgroundColor: "transparent"
                    },
                    i = {
                        hoverStyle: r,
                        pressedStyle: r
                    };
                return a.createElement(S.Consumer, {
                    __self: vt,
                    __source: {
                        fileName: yt,
                        lineNumber: 35,
                        columnNumber: 5
                    }
                }, (function(r) {
                    return a.createElement(ee.Z, {
                        accessibilityLabel: wt,
                        interactiveStyles: (0, T.Z)({}, n, i),
                        link: t,
                        onPress: e.scribeHandler ? e.scribeHandler : (o = r && r.namespace.section, o === ae.bx.PARENT ? d.nO : d.GC),
                        style: Pt.iconWrapper,
                        __self: vt,
                        __source: {
                            fileName: yt,
                            lineNumber: 38,
                            columnNumber: 11
                        }
                    }, a.createElement(Ct.Z, {
                        style: Pt.icon,
                        __self: vt,
                        __source: {
                            fileName: yt,
                            lineNumber: 49,
                            columnNumber: 13
                        }
                    }));
                    var o
                }))
            };
            var Pt = ne.Z.create((function(e) {
                    return {
                        icon: {
                            color: e.colors.brandColor,
                            margin: "0",
                            width: 25 * e.scales[e.scale] + "px",
                            height: 25 * e.scales[e.scale] + "px"
                        },
                        iconWrapper: {
                            borderRadius: ne.Z.theme.borderRadii.infinite,
                            marginStart: "auto"
                        }
                    }
                })),
                At = n(7798),
                xt = "/data/jenkins/workspace/source_4/syndication/embed-iframe/src/components/ParentTweet/index.js",
                Rt = void 0,
                kt = V().jade381b,
                Lt = V().c5218b0c,
                St = V().a7fb9c0c,
                Ot = function(e) {
                    e.stopPropagation(), (0, d.QY)(e)
                };
            const Mt = function(e) {
                var t = e.hideMedia,
                    n = e.parentTweet,
                    r = (0, y.t0)(n),
                    i = n.user.highlighted_label;
                return a.createElement(Ke.Z, {
                    __self: Rt,
                    __source: {
                        fileName: xt,
                        lineNumber: 48,
                        columnNumber: 5
                    }
                }, (function(e) {
                    var o, s = e.windowWidth < Y.e;
                    return a.createElement(H, {
                        link: r,
                        onClick: d.IO,
                        withInteractiveStyling: !1,
                        __self: Rt,
                        __source: {
                            fileName: xt,
                            lineNumber: 52,
                            columnNumber: 11
                        }
                    }, a.createElement(se, {
                        avatarUrl: n.user.profile_image_url_https,
                        permalink: r,
                        screenName: n.user.screen_name,
                        __self: Rt,
                        __source: {
                            fileName: xt,
                            lineNumber: 57,
                            columnNumber: 13
                        }
                    }, a.createElement(J.Z, {
                        style: Wt.header,
                        __self: Rt,
                        __source: {
                            fileName: xt,
                            lineNumber: 62,
                            columnNumber: 15
                        }
                    }, a.createElement(J.Z, {
                        style: [Wt.usernameLabel, i && !ye(i) && Wt.highlightedUserLabelWrapper],
                        __self: Rt,
                        __source: {
                            fileName: xt,
                            lineNumber: 63,
                            columnNumber: 17
                        }
                    }, a.createElement(J.Z, {
                        style: Wt.usernameTimestamp,
                        __self: Rt,
                        __source: {
                            fileName: xt,
                            lineNumber: 71,
                            columnNumber: 19
                        }
                    }, a.createElement(ee.Z, {
                        hoverLabel: {
                            label: Lt
                        },
                        interactiveStyles: null,
                        style: Wt.username,
                        __self: Rt,
                        __source: {
                            fileName: xt,
                            lineNumber: 72,
                            columnNumber: 21
                        }
                    }, a.createElement(ve.Z, {
                        affiliateBadgeInfo: Ze(i),
                        isBlueVerified: (0, $.FA)() ? n.user.is_blue_verified : void 0,
                        isVerified: n.user.verified,
                        name: n.user.name,
                        onLinkClick: d.QY,
                        screenName: n.user.screen_name,
                        verifiedType: n.user.verified_type,
                        withLink: !0,
                        withScreenName: !1,
                        __self: Rt,
                        __source: {
                            fileName: xt,
                            lineNumber: 79,
                            columnNumber: 23
                        }
                    })), a.createElement(J.Z, {
                        style: Wt.timestampAndEditedIcon,
                        __self: Rt,
                        __source: {
                            fileName: xt,
                            lineNumber: 91,
                            columnNumber: 21
                        }
                    }, a.createElement(ge.Z, {
                        __self: Rt,
                        __source: {
                            fileName: xt,
                            lineNumber: 92,
                            columnNumber: 23
                        }
                    }), a.createElement(Te.ZP, {
                        color: "gray700",
                        link: r,
                        numberOfLines: 1,
                        __self: Rt,
                        __source: {
                            fileName: xt,
                            lineNumber: 93,
                            columnNumber: 23
                        }
                    }, s ? (o = n.created_at, a.createElement(At.Z, {
                        timestamp: o,
                        __self: Rt,
                        __source: {
                            fileName: xt,
                            lineNumber: 166,
                            columnNumber: 10
                        }
                    })) : kt(new Date(n.created_at))), function(e) {
                        var t, n = N.Z.getFeatures(),
                            r = "on" === (null == n || null == (t = n.tfw_tweet_edit_frontend) ? void 0 : t.bucket);
                        return e.isEdited && !e.isStaleEdit && r ? a.createElement(Te.ZP, {
                            __self: Rt,
                            __source: {
                                fileName: xt,
                                lineNumber: 141,
                                columnNumber: 5
                            }
                        }, a.createElement(ge.Z, {
                            __self: Rt,
                            __source: {
                                fileName: xt,
                                lineNumber: 142,
                                columnNumber: 7
                            }
                        }), a.createElement(Pe.Z, {
                            __self: Rt,
                            __source: {
                                fileName: xt,
                                lineNumber: 143,
                                columnNumber: 7
                            }
                        })) : null
                    }(n))), a.createElement(J.Z, {
                        style: Wt.header,
                        __self: Rt,
                        __source: {
                            fileName: xt,
                            lineNumber: 101,
                            columnNumber: 19
                        }
                    }, a.createElement(Te.ZP, {
                        dir: "ltr",
                        link: (0, y.po)(n.user.screen_name),
                        numberOfLines: 1,
                        onClick: d.QY,
                        size: "body",
                        style: Wt.screenName,
                        __self: Rt,
                        __source: {
                            fileName: xt,
                            lineNumber: 102,
                            columnNumber: 21
                        }
                    }, "@", n.user.screen_name), a.createElement(ge.Z, {
                        __self: Rt,
                        __source: {
                            fileName: xt,
                            lineNumber: 113,
                            columnNumber: 21
                        }
                    }), a.createElement(Te.ZP, {
                        color: "blue700",
                        link: (0, y.XS)(n),
                        onClick: Ot,
                        weight: "bold",
                        __self: Rt,
                        __source: {
                            fileName: xt,
                            lineNumber: 114,
                            columnNumber: 21
                        }
                    }, St)), function(e) {
                        var t = Ze(e);
                        return !t || ye(e) ? null : a.createElement(J.Z, {
                            style: Wt.highlightedLabel,
                            __self: Rt,
                            __source: {
                                fileName: xt,
                                lineNumber: 154,
                                columnNumber: 5
                            }
                        }, a.createElement(we.Z, {
                            label: t,
                            onClick: d.QY,
                            shouldTruncate: !0,
                            withTopMargin: !1,
                            __self: Rt,
                            __source: {
                                fileName: xt,
                                lineNumber: 155,
                                columnNumber: 7
                            }
                        }))
                    }(i)), a.createElement(gt, {
                        link: (0, y.t0)(n),
                        __self: Rt,
                        __source: {
                            fileName: xt,
                            lineNumber: 125,
                            columnNumber: 17
                        }
                    })), a.createElement(ht, {
                        hideMedia: t,
                        section: ae.bx.PARENT,
                        tweet: n,
                        __self: Rt,
                        __source: {
                            fileName: xt,
                            lineNumber: 127,
                            columnNumber: 15
                        }
                    })))
                }))
            };
            var Wt = ne.Z.create((function(e) {
                    return {
                        header: {
                            flexDirection: "row"
                        },
                        usernameLabel: {
                            alignItems: "baseline",
                            flexDirection: "column",
                            justifyContent: "center",
                            maxWidth: "calc(100% - 25px)"
                        },
                        highlightedUserLabelWrapper: {
                            height: 67
                        },
                        highlightedLabel: {
                            maxWidth: "100%"
                        },
                        username: {
                            flex: "1 1 auto"
                        },
                        screenName: {
                            flexDirection: "row",
                            color: e.colors.gray700
                        },
                        usernameTimestamp: {
                            alignItems: "flex-start",
                            flexDirection: "row",
                            maxWidth: "100%"
                        },
                        timestampAndEditedIcon: {
                            flexDirection: "row",
                            flexBasis: "content"
                        }
                    }
                })),
                zt = n(81443),
                Xt = "/data/jenkins/workspace/source_4/syndication/embed-iframe/src/components/PrimaryActionButton/index.js",
                Dt = void 0,
                Vt = ne.Z.create((function(e) {
                    return {
                        root: {
                            paddingTop: e.spaces.space4,
                            paddingBottom: e.spaces.space12
                        }
                    }
                }));
            const jt = function(e) {
                var t = e.children,
                    n = e.link,
                    r = e.onClick;
                return a.createElement(J.Z, {
                    style: Vt.root,
                    __self: Dt,
                    __source: {
                        fileName: Xt,
                        lineNumber: 15,
                        columnNumber: 5
                    }
                }, a.createElement(zt.ZP, {
                    backgroundColor: "transparent",
                    borderColor: "buttonOutlinedBorder",
                    color: "blue700",
                    link: n,
                    onClick: r,
                    size: "small",
                    __self: Dt,
                    __source: {
                        fileName: Xt,
                        lineNumber: 16,
                        columnNumber: 7
                    }
                }, t))
            };
            var Ut = n(63987),
                Qt = "/data/jenkins/workspace/source_4/syndication/embed-iframe/src/components/PrivacyNotice/index.js",
                Kt = V().c5005824,
                Ft = function(e) {
                    function t() {
                        for (var t, n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                        return t = e.call.apply(e, [this].concat(r)) || this, (0, c.Z)((0, o.Z)(t), "handleInViewport", (function(e) {
                            e.isIntersecting && !t.props.isPrivacyNoticeSeen && ((0, d.fv)(), t.props.setPrivacyNoticeSeen(!0))
                        })), t
                    }
                    return (0, s.Z)(t, e), t.prototype.render = function() {
                        var e = this,
                            t = this.props.style,
                            n = this.props.isPrivacyNoticeSeen,
                            r = Zt.Z.generate({
                                backgroundColor: "transparent",
                                color: ne.Z.theme.colors.blue700
                            });
                        return a.createElement(Ke.Z, {
                            __self: this,
                            __source: {
                                fileName: Qt,
                                lineNumber: 41,
                                columnNumber: 7
                            }
                        }, (function(i) {
                            var o = i.windowWidth < Y.e;
                            return a.createElement(q.Z, {
                                disabled: n,
                                onChange: e.handleInViewport,
                                threshold: 1,
                                __self: e,
                                __source: {
                                    fileName: Qt,
                                    lineNumber: 45,
                                    columnNumber: 13
                                }
                            }, a.createElement(ee.Z, {
                                accessibilityLabel: Kt,
                                interactiveStyles: r,
                                link: "https://help.twitter.com/en/twitter-for-websites-ads-info-and-privacy",
                                onPress: d.QZ,
                                style: [Bt.iconWrapper, t],
                                __self: e,
                                __source: {
                                    fileName: Qt,
                                    lineNumber: 46,
                                    columnNumber: 15
                                }
                            }, (function(t) {
                                var n = t.isFocused,
                                    r = t.isHovered,
                                    i = t.isPressed;
                                return a.createElement(Ut.Z, {
                                    style: [Bt.icon, o && Bt.tiny, (n || r || i) && Bt.iconFocus],
                                    __self: e,
                                    __source: {
                                        fileName: Qt,
                                        lineNumber: 54,
                                        columnNumber: 19
                                    }
                                })
                            })))
                        }))
                    }, t
                }(a.Component),
                Bt = ne.Z.create((function(e) {
                    return {
                        iconWrapper: {
                            borderRadius: e.borderRadii.infinite,
                            height: e.spaces.space32,
                            width: e.spaces.space32,
                            justifyContent: "center",
                            marginEnd: "-" + e.spaces.space4
                        },
                        icon: {
                            color: e.colors.gray700
                        },
                        iconFocus: {
                            color: e.colors.blue700
                        },
                        tiny: {
                            fontSize: e.fontSizes.subtext2
                        }
                    }
                })),
                Ht = "/data/jenkins/workspace/source_4/syndication/embed-iframe/src/components/ThreadedTweetContentContainer/index.js";

            function Gt(e) {
                var t = e.children;
                return a.createElement(J.Z, {
                    style: qt.container,
                    __self: this,
                    __source: {
                        fileName: Ht,
                        lineNumber: 17,
                        columnNumber: 5
                    }
                }, a.createElement(J.Z, {
                    style: qt.columnLeft,
                    __self: this,
                    __source: {
                        fileName: Ht,
                        lineNumber: 18,
                        columnNumber: 7
                    }
                }, a.createElement(J.Z, {
                    style: qt.line,
                    __self: this,
                    __source: {
                        fileName: Ht,
                        lineNumber: 19,
                        columnNumber: 9
                    }
                })), a.createElement(J.Z, {
                    style: qt.columnRight,
                    __self: this,
                    __source: {
                        fileName: Ht,
                        lineNumber: 21,
                        columnNumber: 7
                    }
                }, t))
            }
            var qt = ne.Z.create((function(e) {
                    return {
                        columnLeft: {
                            minWidth: e.spaces.space48,
                            paddingTop: e.spaces.space4
                        },
                        columnRight: {
                            flexBasis: 0,
                            flexGrow: 7,
                            justifyContent: "center",
                            marginStart: e.spaces.space4,
                            paddingTop: e.spaces.space12
                        },
                        container: {
                            flexDirection: "row",
                            paddingBottom: e.spaces.space4
                        },
                        line: {
                            backgroundColor: e.colors.gray200,
                            height: "100%",
                            marginHorizontal: "auto",
                            minHeight: "25px",
                            width: "2px"
                        }
                    }
                })),
                Yt = "/data/jenkins/workspace/source_4/syndication/embed-iframe/src/components/ThreadIndicator/index.js",
                $t = V().df2ba244,
                Jt = V().c5218b0c;

            function en(e) {
                var t = e.tweet;
                return a.createElement(J.Z, {
                    style: tn.container,
                    __self: this,
                    __source: {
                        fileName: Yt,
                        lineNumber: 22,
                        columnNumber: 5
                    }
                }, a.createElement(J.Z, {
                    style: tn.columnLeft,
                    __self: this,
                    __source: {
                        fileName: Yt,
                        lineNumber: 23,
                        columnNumber: 7
                    }
                }, a.createElement(ee.Z, {
                    hoverLabel: {
                        label: Jt
                    },
                    interactiveStyles: null,
                    __self: this,
                    __source: {
                        fileName: Yt,
                        lineNumber: 24,
                        columnNumber: 9
                    }
                }, a.createElement(te.default, {
                    accessibilityHidden: !0,
                    focusable: !1,
                    onClick: d.NS,
                    screenName: t.user.screen_name,
                    size: "large",
                    uri: t.user.profile_image_url_https,
                    withLink: !0,
                    __self: this,
                    __source: {
                        fileName: Yt,
                        lineNumber: 30,
                        columnNumber: 11
                    }
                }))), a.createElement(J.Z, {
                    style: tn.columnRight,
                    __self: this,
                    __source: {
                        fileName: Yt,
                        lineNumber: 41,
                        columnNumber: 7
                    }
                }, a.createElement(Te.ZP, {
                    color: "blue700",
                    link: (0, y.t0)(t),
                    onClick: d.NS,
                    size: "body",
                    __self: this,
                    __source: {
                        fileName: Yt,
                        lineNumber: 42,
                        columnNumber: 9
                    }
                }, $t)))
            }
            var tn = ne.Z.create((function(e) {
                    return {
                        container: {
                            flexDirection: "row",
                            paddingBottom: e.spaces.space4
                        },
                        columnLeft: {
                            alignItems: "center",
                            minWidth: e.spaces.space48
                        },
                        columnRight: {
                            flexBasis: 0,
                            flexGrow: 7,
                            justifyContent: "center",
                            marginStart: e.spaces.space4
                        }
                    }
                })),
                nn = "/data/jenkins/workspace/source_4/syndication/embed-iframe/src/components/GenericAction/index.js",
                rn = function(e) {
                    function t() {
                        for (var t, n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                        return t = e.call.apply(e, [this].concat(r)) || this, (0, c.Z)((0, o.Z)(t), "handleClick", (function(e) {
                            var n = t.props.onClick;
                            n && n(e)
                        })), t
                    }
                    return (0, s.Z)(t, e), t.prototype.render = function() {
                        var e = this,
                            t = this.props,
                            n = t.accessibilityLabel,
                            r = t.hoverColor,
                            i = t.hoverLabel,
                            o = t.icon,
                            s = t.isLastAction,
                            c = t.link,
                            l = t.pullLeft,
                            u = t.shouldTruncate,
                            m = t.text,
                            _ = {
                                color: ne.Z.theme.colors[r]
                            },
                            d = Zt.Z.generate({
                                backgroundColor: "transparent",
                                color: ne.Z.theme.colors[r],
                                customHoverBackgroundColor: "transparent",
                                customPressedBackgroundColor: "transparent"
                            }),
                            f = Zt.Z.generate({
                                backgroundColor: "transparent",
                                color: ne.Z.theme.colors[r]
                            }),
                            b = c ? "link" : "button";
                        return a.createElement(ee.Z, {
                            accessibilityLabel: n,
                            accessibilityRole: b,
                            hoverLabel: i,
                            interactiveStyles: d,
                            link: c,
                            onClick: this.handleClick,
                            style: [sn.root, u && sn.truncate, !s && sn.gapBetweenActions],
                            __self: this,
                            __source: {
                                fileName: nn,
                                lineNumber: 59,
                                columnNumber: 7
                            }
                        }, (function(t) {
                            var n = t.isFocused,
                                r = t.isHovered,
                                i = t.isPressed;
                            return a.createElement(a.Fragment, {
                                __self: e,
                                __source: {
                                    fileName: nn,
                                    lineNumber: 69,
                                    columnNumber: 11
                                }
                            }, a.createElement(J.Z, {
                                focusable: !1,
                                style: [sn.iconWrapper, l && sn.pullLeft, r && f.hoverStyle, i && f.pressedStyle],
                                __self: e,
                                __source: {
                                    fileName: nn,
                                    lineNumber: 70,
                                    columnNumber: 13
                                }
                            }, a.createElement(o, {
                                style: [sn.icon, (n || i || r) && _],
                                __self: e,
                                __source: {
                                    fileName: nn,
                                    lineNumber: 79,
                                    columnNumber: 15
                                }
                            })), m ? a.createElement(Te.ZP, {
                                numberOfLines: 1,
                                size: "subtext1",
                                style: [sn.text, (n || i || r) && _, (n || i || r) && sn.textHover],
                                weight: "bold",
                                __self: e,
                                __source: {
                                    fileName: nn,
                                    lineNumber: 82,
                                    columnNumber: 15
                                }
                            }, m) : null)
                        }))
                    }, t
                }(a.Component);
            (0, c.Z)(rn, "defaultProps", {
                pullLeft: !1,
                shouldTruncate: !1
            });
            const on = rn;
            var sn = ne.Z.create((function(e) {
                    return {
                        root: {
                            flexDirection: "row",
                            alignItems: "center"
                        },
                        iconWrapper: {
                            borderRadius: e.borderRadii.infinite,
                            height: e.spaces.space32,
                            width: e.spaces.space32,
                            justifyContent: "center"
                        },
                        icon: {
                            color: e.colors.gray700
                        },
                        gapBetweenActions: {
                            marginEnd: e.spaces.space20
                        },
                        pullLeft: {
                            marginStart: "-" + e.spaces.space4
                        },
                        text: {
                            color: e.colors.gray700,
                            marginStart: e.spaces.space4
                        },
                        textHover: {
                            textDecorationLine: "underline"
                        },
                        truncate: {
                            flexShrink: 1
                        }
                    }
                })),
                cn = n(47497),
                an = n(64641),
                ln = "/data/jenkins/workspace/source_4/syndication/embed-iframe/src/components/LikeAction/index.js",
                un = V().d58baa7f,
                mn = V().j95993dd,
                _n = V().ac7bfc92,
                dn = function() {
                    return a.createElement(cn.Z, {
                        style: bn.iconFill,
                        __self: void 0,
                        __source: {
                            fileName: ln,
                            lineNumber: 29,
                            columnNumber: 32
                        }
                    })
                },
                fn = function(e) {
                    function t() {
                        for (var t, n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                        return t = e.call.apply(e, [this].concat(r)) || this, (0, c.Z)((0, o.Z)(t), "getAccessibilityLabel", (function(e) {
                            if (e > 0) {
                                var t = un(e);
                                return mn({
                                    count: e,
                                    formattedCount: t
                                })
                            }
                            return _n
                        })), (0, c.Z)((0, o.Z)(t), "getText", (function() {
                            var e = t.props.likeCount;
                            if (e > 0) return un(e)
                        })), (0, c.Z)((0, o.Z)(t), "handleLikeActionClick", (function(e) {
                            (0, d.S1)(e), an.ZP.send({
                                key: an.zW.TRIGGER,
                                details: {
                                    region: an.dJ.INTENT,
                                    type: an.zW.CLICK
                                }
                            }), an.ZP.send({
                                key: an.zW.TRIGGER,
                                details: {
                                    region: an.dJ.INTENT,
                                    type: an.zW.LIKE
                                }
                            })
                        })), t
                    }
                    return (0, s.Z)(t, e), t.prototype.render = function() {
                        var e = this.props,
                            t = e.hoverLabel,
                            n = e.isLastAction,
                            r = e.link,
                            i = e.likeCount,
                            o = this.getText(),
                            s = this.getAccessibilityLabel(i);
                        return a.createElement(on, {
                            accessibilityLabel: s,
                            hoverColor: "magenta500",
                            hoverLabel: t,
                            icon: dn,
                            isLastAction: n,
                            link: r,
                            onClick: this.handleLikeActionClick,
                            pullLeft: !0,
                            text: o,
                            __self: this,
                            __source: {
                                fileName: ln,
                                lineNumber: 59,
                                columnNumber: 7
                            }
                        })
                    }, t
                }(a.Component),
                bn = ne.Z.create((function(e) {
                    return {
                        iconFill: {
                            fill: e.colors.magenta500,
                            color: e.colors.magenta500
                        }
                    }
                })),
                pn = n(91149),
                Nn = n(5781),
                En = Object.freeze({
                    conversation: "conversation",
                    covid19: "covid19"
                }),
                Tn = ["hoverLabel", "isLastAction"],
                hn = "/data/jenkins/workspace/source_4/syndication/embed-iframe/src/components/NewsAction/index.js",
                In = void 0,
                Cn = V().jd7337e0,
                Zn = V().adade5fe,
                yn = V().gc112aae,
                vn = V().ab7c2dea,
                wn = function() {
                    return a.createElement(pn.Z, {
                        style: gn.iconFill,
                        __self: In,
                        __source: {
                            fileName: hn,
                            lineNumber: 30,
                            columnNumber: 32
                        }
                    })
                },
                gn = ne.Z.create((function(e) {
                    return {
                        iconFill: {
                            fill: e.colors.blue500,
                            color: e.colors.blue500
                        }
                    }
                }));
            const Pn = function(e) {
                var t = e.hoverLabel,
                    n = e.isLastAction,
                    r = (0, h.Z)(e, Tn);
                return a.createElement(Ke.Z, {
                    __self: In,
                    __source: {
                        fileName: hn,
                        lineNumber: 56,
                        columnNumber: 5
                    }
                }, (function(e) {
                    var i = e.windowWidth < Y.e,
                        o = function(e, t) {
                            var n = e.link,
                                r = e.newsActionType,
                                i = e.tweet;
                            return r === En.covid19 ? {
                                accessibilityLabel: Cn,
                                icon: Nn.Z,
                                link: n,
                                text: t ? Zn : Cn
                            } : {
                                accessibilityLabel: yn,
                                icon: wn,
                                link: (0, y.Rk)(i),
                                text: vn
                            }
                        }(r, i),
                        s = o.accessibilityLabel,
                        c = o.icon,
                        l = o.link,
                        u = o.text;
                    return a.createElement(on, {
                        accessibilityLabel: s,
                        hoverColor: "blue700",
                        hoverLabel: t,
                        icon: c,
                        isLastAction: n,
                        link: l,
                        onClick: d.ri,
                        shouldTruncate: n,
                        text: u,
                        __self: In,
                        __source: {
                            fileName: hn,
                            lineNumber: 62,
                            columnNumber: 11
                        }
                    })
                }))
            };
            var An = n(15861),
                xn = n(64687),
                Rn = n.n(xn),
                kn = n(97196),
                Ln = n(35170),
                Sn = n(40608),
                On = n(29255),
                Mn = n(1398),
                Wn = V().b0af8538,
                zn = V().i55ea7bc,
                Xn = V().a9d3434a,
                Dn = V().a2270044,
                Vn = V().e3f4426c,
                jn = function(e) {
                    function t(t) {
                        var n;
                        n = e.call(this, t) || this, (0, c.Z)((0, o.Z)(n), "isFallback", (function() {
                            return !window.navigator.share
                        })), (0, c.Z)((0, o.Z)(n), "getClickHandler", (function() {
                            return n.isFallback() ? n.handleCopyLink : n.handleShare
                        })), (0, c.Z)((0, o.Z)(n), "handleClick", (function(e) {
                            e.preventDefault(), e.stopPropagation(), n.getClickHandler()(e), (0, d.ju)()
                        })), (0, c.Z)((0, o.Z)(n), "handleShare", (function(e) {
                            var t = n.props.link;
                            (0, An.Z)(Rn().mark((function e() {
                                var n, r, i, o, s;
                                return Rn().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (e.prev = 0, n = t.pathname, r = t.hash, i = t.state, o = t.query, s = Ln.Z.createPath(Ln.Z.createLocation({
                                                    pathname: n,
                                                    hash: r,
                                                    query: o,
                                                    state: i
                                                })), !navigator.share) {
                                                e.next = 6;
                                                break
                                            }
                                            return e.next = 6, navigator.share({
                                                url: s
                                            });
                                        case 6:
                                            e.next = 11;
                                            break;
                                        case 8:
                                            e.prev = 8, e.t0 = e.catch(0);
                                        case 11:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [0, 8]
                                ])
                            })))()
                        })), (0, c.Z)((0, o.Z)(n), "handleCopyLink", (function(e) {
                            var t = n.props.link,
                                r = t.pathname,
                                i = t.hash,
                                o = t.state,
                                s = t.query,
                                c = Ln.Z.createPath(Ln.Z.createLocation({
                                    pathname: r,
                                    hash: i,
                                    query: s,
                                    state: o
                                }));
                            kn.Z.isAvailable() && (kn.Z.setString(c), n.setState({
                                actionLabel: Vn,
                                icon: Sn.Z
                            }), setTimeout((function() {
                                n.setState({
                                    actionLabel: n.props.isTinyTweet ? Xn : Dn,
                                    icon: On.Z
                                })
                            }), 6e3))
                        }));
                        var r, i = n.isFallback();
                        r = i ? t.isTinyTweet ? Xn : Dn : t.isTinyTweet ? zn : Wn;
                        var s = i ? On.Z : Mn.Z;
                        return n.state = {
                            actionLabel: r,
                            icon: s
                        }, n
                    }
                    return (0, s.Z)(t, e), t.prototype.render = function() {
                        var e = this.props,
                            t = e.hoverLabel,
                            n = e.isLastAction,
                            r = this.state,
                            i = r.actionLabel,
                            o = r.icon;
                        return a.createElement(on, {
                            hoverColor: "green500",
                            hoverLabel: t,
                            icon: o,
                            isLastAction: n,
                            onClick: this.handleClick,
                            pullLeft: !0,
                            shouldTruncate: !0,
                            text: i,
                            __self: this,
                            __source: {
                                fileName: "/data/jenkins/workspace/source_4/syndication/embed-iframe/src/components/ShareAction/index.js",
                                lineNumber: 112,
                                columnNumber: 7
                            }
                        })
                    }, t
                }(a.Component),
                Un = "/data/jenkins/workspace/source_4/syndication/embed-iframe/src/components/TweetActions/index.js",
                Qn = void 0,
                Kn = V().ac7bfc92,
                Fn = V().d2f3904e,
                Bn = V().b0af8538;
            const Hn = function(e) {
                var t, n = e.likeCount,
                    r = e.likeLink,
                    i = e.newsActionLink,
                    o = e.newsActionType,
                    s = e.permalink,
                    c = e.tweet,
                    u = o !== En.covid19,
                    m = a.createElement(fn, {
                        hoverLabel: {
                            label: Kn
                        },
                        isLastAction: !1,
                        key: "like-action",
                        likeCount: n,
                        link: r,
                        __self: Qn,
                        __source: {
                            fileName: Un,
                            lineNumber: 34,
                            columnNumber: 5
                        }
                    }),
                    _ = function(e) {
                        var t = o !== En.covid19 ? {
                            label: Fn
                        } : null;
                        return a.createElement(Pn, {
                            hoverLabel: t,
                            isLastAction: e,
                            key: "news-action",
                            link: i,
                            newsActionType: o,
                            tweet: c,
                            __self: Qn,
                            __source: {
                                fileName: Un,
                                lineNumber: 54,
                                columnNumber: 7
                            }
                        })
                    },
                    d = a.createElement(Ke.Z, {
                        key: "share-action",
                        __self: Qn,
                        __source: {
                            fileName: Un,
                            lineNumber: 67,
                            columnNumber: 5
                        }
                    }, (function(e) {
                        var t = e.windowWidth;
                        return a.createElement(z, {
                            namespace: {
                                component: l.z8.SHARE_ACTION
                            },
                            __self: Qn,
                            __source: {
                                fileName: Un,
                                lineNumber: 69,
                                columnNumber: 9
                            }
                        }, a.createElement(A.$6, {
                            __self: Qn,
                            __source: {
                                fileName: Un,
                                lineNumber: 70,
                                columnNumber: 11
                            }
                        }, (function(e) {
                            return a.createElement(jn, {
                                hoverLabel: {
                                    label: Bn
                                },
                                isLastAction: !0,
                                isTinyTweet: t < Y.e,
                                link: e.linkProcessor(s),
                                __self: Qn,
                                __source: {
                                    fileName: Un,
                                    lineNumber: 72,
                                    columnNumber: 15
                                }
                            })
                        })))
                    }));
                return a.createElement(a.Fragment, null, a.createElement(J.Z, {
                    style: [Gn.root, Gn.actionsBorder],
                    __self: Qn,
                    __source: {
                        fileName: Un,
                        lineNumber: 101,
                        columnNumber: 7
                    }
                }, (t = [m], u ? t.push(_(!1), d) : t.push(_(!0)), t)))
            };
            var Gn = ne.Z.create((function(e) {
                    return {
                        root: {
                            alignItems: "flex-start",
                            flexDirection: "row"
                        },
                        actionsBorder: {
                            borderTopWidth: e.borderWidths.small,
                            borderColor: e.colors.gray200,
                            marginTop: e.spaces.space4,
                            paddingTop: e.spaces.space4
                        }
                    }
                })),
                qn = n(89857),
                Yn = "/data/jenkins/workspace/source_4/syndication/embed-iframe/src/components/Tweet/index.js",
                $n = V().f9e9679f,
                Jn = V().ib52c63b,
                er = V().jb2472b4,
                tr = V().d63ac4cc,
                nr = V().a7fb9c0c,
                rr = V().c5218b0c,
                ir = V().g1f2693c,
                or = V().ifd14e5a,
                sr = V().e6d09cf4,
                cr = V().jade381b,
                ar = V().d725a289,
                lr = function(e) {
                    function t() {
                        for (var t, n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                        return t = e.call.apply(e, [this].concat(r)) || this, (0, c.Z)((0, o.Z)(t), "state", {
                            impressionHandled: !1
                        }), (0, c.Z)((0, o.Z)(t), "handleImpression", (function(e) {
                            var n = e.isIntersecting,
                                r = t.state.impressionHandled;
                            n && !r && (l.ZP.scribe(l.eX.IMPRESSION, {
                                section: l.bx.MAIN
                            }), t.setState({
                                impressionHandled: !0
                            }))
                        })), (0, c.Z)((0, o.Z)(t), "handleFollowIntentClick", (function(e) {
                            e.stopPropagation(), (0, d.pd)(e)
                        })), (0, c.Z)((0, o.Z)(t), "_maybeRenderEditedCallout", (function() {
                            return t._isEdited() ? a.createElement(Pe.Z, {
                                editType: "latest",
                                textMode: "standalone",
                                textSize: "body",
                                __self: (0, o.Z)(t),
                                __source: {
                                    fileName: Yn,
                                    lineNumber: 249,
                                    columnNumber: 31
                                }
                            }) : null
                        })), (0, c.Z)((0, o.Z)(t), "_maybeRenderPlace", (function() {
                            var e = t.props.tweet;
                            if (e && e.place) {
                                var n = e.place;
                                return a.createElement(Te.ZP, {
                                    color: "gray700",
                                    link: (0, y.$1)(n),
                                    onClick: d.zJ,
                                    __self: (0, o.Z)(t),
                                    __source: {
                                        fileName: Yn,
                                        lineNumber: 257,
                                        columnNumber: 9
                                    }
                                }, n.full_name)
                            }
                            return null
                        })), (0, c.Z)((0, o.Z)(t), "_isEdited", (function() {
                            var e, n = t.props.tweet,
                                r = N.Z.getFeatures(),
                                i = "on" === (null == r || null == (e = r.tfw_tweet_edit_frontend) ? void 0 : e.bucket);
                            return n.isEdited && !n.isStaleEdit && i
                        })), (0, c.Z)((0, o.Z)(t), "_isStaleTweet", (function() {
                            var e, n, r = t.props.tweet,
                                i = N.Z.getFeatures();
                            return "on" === (null == i || null == (e = i.tfw_tweet_edit_frontend) ? void 0 : e.bucket) && ((null == (n = r.parent) ? void 0 : n.isStaleEdit) || r.isStaleEdit)
                        })), (0, c.Z)((0, o.Z)(t), "_renderStaleCallout", (function() {
                            return a.createElement(J.Z, {
                                style: ur.staleCallout,
                                __self: (0, o.Z)(t),
                                __source: {
                                    fileName: Yn,
                                    lineNumber: 281,
                                    columnNumber: 7
                                }
                            }, a.createElement(Pe.Z, {
                                editType: "stale",
                                textMode: "inline",
                                textSize: "body",
                                __self: (0, o.Z)(t),
                                __source: {
                                    fileName: Yn,
                                    lineNumber: 282,
                                    columnNumber: 9
                                }
                            }))
                        })), (0, c.Z)((0, o.Z)(t), "_renderTimestamp", (function(e) {
                            var n = t.props,
                                r = n.permalink,
                                i = n.tweet,
                                s = new Date(i.created_at),
                                c = cr(s),
                                l = ar(s) + " · " + c;
                            return a.createElement(At.Z, {
                                accessibilityLabel: t._isEdited() ? sr + " " + or + " " + l : null,
                                color: "gray700",
                                link: r,
                                onPress: d.N5,
                                prefix: e && e.prefix,
                                relative: !1,
                                timestamp: i.created_at,
                                __self: (0, o.Z)(t),
                                __source: {
                                    fileName: Yn,
                                    lineNumber: 294,
                                    columnNumber: 7
                                }
                            })
                        })), t
                    }(0, s.Z)(t, e);
                    var n = t.prototype;
                    return n.render = function() {
                        var e = this.props,
                            t = e.onLayout,
                            n = e.permalink,
                            r = N.Z.getFeatures()[$.pe.RufousEOL.key],
                            i = r && r.version;
                        return a.createElement(z, {
                            namespace: {
                                section: l.bx.MAIN
                            },
                            __self: this,
                            __source: {
                                fileName: Yn,
                                lineNumber: 112,
                                columnNumber: 7
                            }
                        }, i && a.createElement(E.Z, {
                            experimentKey: $.pe.RufousEOL.key,
                            __self: this,
                            __source: {
                                fileName: Yn,
                                lineNumber: 113,
                                columnNumber: 53
                            }
                        }), a.createElement(Y.Z, {
                            onLayout: t,
                            style: ur.outerContainer,
                            __self: this,
                            __source: {
                                fileName: Yn,
                                lineNumber: 114,
                                columnNumber: 9
                            }
                        }, a.createElement(H, {
                            link: n,
                            onClick: d.EF,
                            style: ur.innerContainer,
                            __self: this,
                            __source: {
                                fileName: Yn,
                                lineNumber: 115,
                                columnNumber: 11
                            }
                        }, this._maybeRenderParentTweet(), this._renderHeader(), this._renderTweetContentMetaAndPrivacy(), this._maybeRenderThreadIndicator(), this._isStaleTweet() ? this._renderStaleCallout() : this._maybeRenderTweetActions(), this._maybeRenderPrimaryActionButton())))
                    }, n._renderHeader = function() {
                        var e = this.props.tweet,
                            t = this.state.impressionHandled;
                        return a.createElement(q.Z, {
                            disabled: t,
                            onChange: this.handleImpression,
                            threshold: 1,
                            __self: this,
                            __source: {
                                fileName: Yn,
                                lineNumber: 133,
                                columnNumber: 7
                            }
                        }, a.createElement(J.Z, {
                            style: [ur.header, this.isSelfThread() && ur.threadedHeader],
                            __self: this,
                            __source: {
                                fileName: Yn,
                                lineNumber: 134,
                                columnNumber: 9
                            }
                        }, a.createElement(ee.Z, {
                            hoverLabel: {
                                label: rr
                            },
                            interactiveStyles: null,
                            __self: this,
                            __source: {
                                fileName: Yn,
                                lineNumber: 135,
                                columnNumber: 11
                            }
                        }, a.createElement(te.default, {
                            accessibilityHidden: !0,
                            focusable: !1,
                            onClick: d.pd,
                            screenName: e.user.screen_name,
                            size: "xxLarge",
                            uri: e.user.profile_image_url_https,
                            withLink: !0,
                            __self: this,
                            __source: {
                                fileName: Yn,
                                lineNumber: 141,
                                columnNumber: 13
                            }
                        })), a.createElement(J.Z, {
                            style: ur.userNameAndLabel,
                            __self: this,
                            __source: {
                                fileName: Yn,
                                lineNumber: 151,
                                columnNumber: 11
                            }
                        }, a.createElement(ee.Z, {
                            hoverLabel: {
                                label: rr
                            },
                            interactiveStyles: null,
                            __self: this,
                            __source: {
                                fileName: Yn,
                                lineNumber: 152,
                                columnNumber: 13
                            }
                        }, a.createElement(ve.Z, {
                            affiliateBadgeInfo: Ze(e.user.highlighted_label),
                            isBlueVerified: (0, $.FA)() ? e.user.is_blue_verified : void 0,
                            isVerified: e.user.verified,
                            name: e.user.name,
                            onLinkClick: d.pd,
                            screenName: e.user.screen_name,
                            screenNameSuffix: a.createElement(Te.ZP, {
                                color: "blue700",
                                link: (0, y.XS)(e),
                                onClick: this.handleFollowIntentClick,
                                weight: "bold",
                                __self: this,
                                __source: {
                                    fileName: Yn,
                                    lineNumber: 166,
                                    columnNumber: 19
                                }
                            }, nr),
                            verifiedType: e.user.verified_type,
                            withLink: !0,
                            withScreenName: !0,
                            withStackedLayout: !0,
                            __self: this,
                            __source: {
                                fileName: Yn,
                                lineNumber: 158,
                                columnNumber: 15
                            }
                        })), this._maybeRenderHighlightedUserLabel()), this._maybeRenderTwitterLogo()))
                    }, n._maybeRenderTwitterLogo = function() {
                        var e = this.props,
                            t = e.hideThread,
                            n = e.permalink,
                            r = e.tweet;
                        return t || !t && !r.parent ? a.createElement(gt, {
                            link: n,
                            __self: this,
                            __source: {
                                fileName: Yn,
                                lineNumber: 191,
                                columnNumber: 59
                            }
                        }) : null
                    }, n._renderTweetContentMetaAndPrivacy = function() {
                        var e = this.props,
                            t = e.hideMedia,
                            n = e.hideThread,
                            r = e.tweet,
                            i = a.createElement(a.Fragment, {
                                __self: this,
                                __source: {
                                    fileName: Yn,
                                    lineNumber: 198,
                                    columnNumber: 7
                                }
                            }, a.createElement(ht, {
                                hideMedia: t,
                                hideThread: n,
                                section: l.bx.MAIN,
                                tweet: r,
                                __self: this,
                                __source: {
                                    fileName: Yn,
                                    lineNumber: 199,
                                    columnNumber: 9
                                }
                            }), a.createElement(J.Z, {
                                style: ur.meta,
                                __self: this,
                                __source: {
                                    fileName: Yn,
                                    lineNumber: 200,
                                    columnNumber: 9
                                }
                            }, this._renderTweetMeta(), this._renderPrivacyNotice()));
                        return this.isSelfThread() ? a.createElement(a.Fragment, {
                            __self: this,
                            __source: {
                                fileName: Yn,
                                lineNumber: 208,
                                columnNumber: 7
                            }
                        }, a.createElement(Gt, {
                            __self: this,
                            __source: {
                                fileName: Yn,
                                lineNumber: 209,
                                columnNumber: 9
                            }
                        }, i)) : i
                    }, n._maybeRenderThreadIndicator = function() {
                        var e = this.props.tweet;
                        return this.isSelfThread() ? a.createElement(en, {
                            tweet: e,
                            __self: this,
                            __source: {
                                fileName: Yn,
                                lineNumber: 218,
                                columnNumber: 34
                            }
                        }) : null
                    }, n._maybeRenderHighlightedUserLabel = function() {
                        var e = this.props.tweet.user.highlighted_label,
                            t = Ze(e);
                        return !t || ye(e) ? null : a.createElement(we.Z, {
                            label: t,
                            onClick: d.pd,
                            shouldTruncate: !0,
                            withTopMargin: !1,
                            __self: this,
                            __source: {
                                fileName: Yn,
                                lineNumber: 230,
                                columnNumber: 7
                            }
                        })
                    }, n._maybeRenderParentTweet = function() {
                        var e = this.props,
                            t = e.hideMedia,
                            n = e.hideThread,
                            r = e.tweet;
                        return r.parent && !n ? a.createElement(z, {
                            namespace: {
                                section: l.bx.PARENT
                            },
                            __self: this,
                            __source: {
                                fileName: Yn,
                                lineNumber: 237,
                                columnNumber: 7
                            }
                        }, a.createElement(Mt, {
                            hideMedia: t,
                            parentTweet: r.parent,
                            __self: this,
                            __source: {
                                fileName: Yn,
                                lineNumber: 238,
                                columnNumber: 9
                            }
                        })) : null
                    }, n._maybeRenderTweetActions = function() {
                        var e = this.props.tweet;
                        return X(e) ? null : this._renderTweetActions()
                    }, n._renderTweetMeta = function() {
                        return a.createElement(Te.ZP, {
                            numberOfLines: 1,
                            __self: this,
                            __source: {
                                fileName: Yn,
                                lineNumber: 308,
                                columnNumber: 7
                            }
                        }, a.createElement(qn.Z, {
                            linkColor: "gray700",
                            renderEditCallout: this._maybeRenderEditedCallout,
                            renderPlace: this._maybeRenderPlace,
                            renderTimestamp: this._renderTimestamp,
                            __self: this,
                            __source: {
                                fileName: Yn,
                                lineNumber: 309,
                                columnNumber: 9
                            }
                        }))
                    }, n._renderPrivacyNotice = function() {
                        return a.createElement(Ft, {
                            isPrivacyNoticeSeen: this.props.isPrivacyNoticeSeen,
                            setPrivacyNoticeSeen: this.props.setPrivacyNoticeSeen,
                            style: ur.privacy,
                            __self: this,
                            __source: {
                                fileName: Yn,
                                lineNumber: 321,
                                columnNumber: 7
                            }
                        })
                    }, n._renderTweetActions = function() {
                        var e, t, n, r = this.props,
                            i = r.likeActionLink,
                            o = r.newsActionLink,
                            s = r.newsActionType,
                            c = r.permalink,
                            l = r.tweet,
                            u = l.favorite_count || 0,
                            m = N.Z.getFeatures();
                        return "on" === (null == m || null == (e = m.tfw_tweet_edit_frontend) ? void 0 : e.bucket) && null != (t = l.previous_counts) && t.favorite_count && (u += null == (n = l.previous_counts) ? void 0 : n.favorite_count), void 0 !== l.favorite_count ? a.createElement(Hn, {
                            likeCount: u,
                            likeLink: i,
                            newsActionLink: o,
                            newsActionType: s,
                            permalink: c,
                            tweet: l,
                            __self: this,
                            __source: {
                                fileName: Yn,
                                lineNumber: 342,
                                columnNumber: 7
                            }
                        }) : null
                    }, n._maybeRenderPrimaryActionButton = function() {
                        var e = this,
                            t = this.props,
                            n = t.permalink,
                            r = t.tweet,
                            i = r.conversation_count,
                            o = Jn({
                                count: i,
                                formattedCount: $n(i)
                            }),
                            s = function(t, n, r) {
                                return a.createElement(jt, {
                                    link: t,
                                    onClick: n,
                                    __self: e,
                                    __source: {
                                        fileName: Yn,
                                        lineNumber: 362,
                                        columnNumber: 9
                                    }
                                }, r)
                            };
                        return X(r) || r.card && (0, G.i)(r.card) ? null : r.isStaleEdit ? s(n, d.mZ, ir) : 0 === Number(r.conversation_count) ? s(y.Bs, d.uM, er) : s(n, d.uM, o)
                    }, n.isSelfThread = function() {
                        var e = this.props.tweet,
                            t = e.id_str,
                            n = e.self_thread;
                        return n && n.id_str === t
                    }, t
                }(a.Component);
            (0, c.Z)(lr, "defaultProps", {
                hideThread: !1
            });
            var ur = ne.Z.create((function(e) {
                return {
                    outerContainer: {
                        maxWidth: 550,
                        minWidth: 250,
                        cursor: "pointer"
                    },
                    innerContainer: {
                        backgroundColor: e.colors.cellBackground,
                        paddingTop: e.spaces.space12,
                        paddingRight: e.spaces.space16,
                        paddingBottom: e.spaces.space4,
                        paddingLeft: e.spaces.space16
                    },
                    header: {
                        flexDirection: "row",
                        paddingBottom: e.spaces.space12
                    },
                    threadedHeader: {
                        paddingBottom: 0
                    },
                    userNameAndLabel: {
                        flexDirection: "column",
                        justifyContent: "center",
                        marginHorizontal: e.spaces.space4,
                        maxWidth: "calc(100% - 84px)"
                    },
                    logo: {
                        marginStart: "auto"
                    },
                    meta: {
                        flexDirection: "row",
                        alignItems: "center",
                        marginTop: e.spaces.space2
                    },
                    staleCallout: {
                        borderTopWidth: e.borderWidths.small,
                        borderColor: e.colors.gray200,
                        flexDirection: "row",
                        marginTop: e.spaces.space4,
                        paddingTop: e.spaces.space8,
                        paddingBottom: e.spaces.space4
                    },
                    privacy: {
                        marginStart: "auto"
                    }
                }
            }));
            const mr = function(e) {
                var t = e.children,
                    n = {
                        id: e.id,
                        pageData: e.pageData,
                        embedType: C.tweet,
                        namespace: ae.PE
                    };
                return a.createElement(S.Provider, {
                    value: n,
                    __self: void 0,
                    __source: {
                        fileName: "/data/jenkins/workspace/source_4/syndication/embed-iframe/src/embeds/Tweet/context.js",
                        lineNumber: 17,
                        columnNumber: 10
                    }
                }, t)
            };
            var _r = n(11365),
                dr = "/data/jenkins/workspace/source_4/syndication/embed-iframe/src/components/TweetLoadingState/fallbacks/TweetActionsFallback/index.js",
                fr = void 0,
                br = ne.Z.create((function(e) {
                    return {
                        fallbackActions: {
                            backgroundColor: e.colors.gray50,
                            flex: 1,
                            justifyContent: "center",
                            marginBottom: e.spaces.space8,
                            marginTop: e.spaces.space8,
                            paddingTop: e.spaces.space12,
                            position: "relative"
                        },
                        width: {
                            width: "50%"
                        }
                    }
                }));
            const pr = function() {
                return a.createElement(J.Z, {
                    style: br.width,
                    __self: fr,
                    __source: {
                        fileName: dr,
                        lineNumber: 8,
                        columnNumber: 5
                    }
                }, a.createElement(_r.Z, {
                    displayStyle: "block",
                    __self: fr,
                    __source: {
                        fileName: dr,
                        lineNumber: 9,
                        columnNumber: 7
                    }
                }, a.createElement(J.Z, {
                    style: br.fallbackActions,
                    __self: fr,
                    __source: {
                        fileName: dr,
                        lineNumber: 10,
                        columnNumber: 9
                    }
                })))
            };
            var Nr = "/data/jenkins/workspace/source_4/syndication/embed-iframe/src/components/TweetLoadingState/fallbacks/TweetTextFallback/index.js",
                Er = void 0,
                Tr = ne.Z.create((function(e) {
                    return {
                        fallbackText: {
                            backgroundColor: e.colors.gray50,
                            flex: 1,
                            justifyContent: "center",
                            marginTop: e.spaces.space8,
                            marginBottom: e.spaces.space8,
                            paddingTop: e.spaces.space12,
                            position: "relative"
                        },
                        long: {
                            width: "90%"
                        },
                        medium: {
                            width: "80%"
                        },
                        short: {
                            width: "65%"
                        }
                    }
                }));
            const hr = function() {
                return a.createElement(J.Z, {
                    __self: Er,
                    __source: {
                        fileName: Nr,
                        lineNumber: 8,
                        columnNumber: 5
                    }
                }, a.createElement(J.Z, {
                    style: [Tr.fallbackText, Tr.long],
                    __self: Er,
                    __source: {
                        fileName: Nr,
                        lineNumber: 9,
                        columnNumber: 7
                    }
                }), a.createElement(J.Z, {
                    style: [Tr.fallbackText, Tr.medium],
                    __self: Er,
                    __source: {
                        fileName: Nr,
                        lineNumber: 10,
                        columnNumber: 7
                    }
                }), a.createElement(J.Z, {
                    style: [Tr.fallbackText, Tr.short],
                    __self: Er,
                    __source: {
                        fileName: Nr,
                        lineNumber: 11,
                        columnNumber: 7
                    }
                }))
            };
            var Ir = "/data/jenkins/workspace/source_4/syndication/embed-iframe/src/components/TweetLoadingState/fallbacks/TweetTimestampFallback/index.js",
                Cr = void 0,
                Zr = ne.Z.create((function(e) {
                    return {
                        fallbackTimestamp: {
                            backgroundColor: e.colors.gray50,
                            flex: 1,
                            justifyContent: "center",
                            marginBottom: e.spaces.space8,
                            marginTop: e.spaces.space8,
                            paddingTop: e.spaces.space12,
                            position: "relative"
                        },
                        width: {
                            width: "20%"
                        }
                    }
                }));
            const yr = function() {
                return a.createElement(J.Z, {
                    style: Zr.width,
                    __self: Cr,
                    __source: {
                        fileName: Ir,
                        lineNumber: 8,
                        columnNumber: 5
                    }
                }, a.createElement(J.Z, {
                    style: Zr.fallbackTimestamp,
                    __self: Cr,
                    __source: {
                        fileName: Ir,
                        lineNumber: 9,
                        columnNumber: 7
                    }
                }))
            };
            var vr = n(89818),
                wr = "/data/jenkins/workspace/source_4/syndication/embed-iframe/src/components/TweetLoadingState/index.js",
                gr = function(e) {
                    function t() {
                        for (var t, n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                        return t = e.call.apply(e, [this].concat(r)) || this, (0, c.Z)((0, o.Z)(t), "state", {
                            seen: !1
                        }), (0, c.Z)((0, o.Z)(t), "handleInViewport", (function(e) {
                            var n = e.isIntersecting,
                                r = t.state.seen;
                            n && !r && ((0, d.sL)(), t.setState({
                                seen: !0
                            }))
                        })), t
                    }(0, s.Z)(t, e);
                    var n = t.prototype;
                    return n.componentDidMount = function() {
                        an.ZP.send({
                            key: an.zW.RESULTS,
                            details: {}
                        }), an.ZP.send({
                            key: an.zW.RENDERED,
                            details: {}
                        })
                    }, n.render = function() {
                        var e = this.props,
                            t = e.bucket,
                            n = e.onLayout,
                            r = this.state.seen,
                            i = "cta" === t;
                        return a.createElement(Y.Z, {
                            onLayout: n,
                            style: Ar.outerContainer,
                            __self: this,
                            __source: {
                                fileName: wr,
                                lineNumber: 59,
                                columnNumber: 7
                            }
                        }, a.createElement(q.Z, {
                            disabled: r,
                            onChange: this.handleInViewport,
                            threshold: 1,
                            __self: this,
                            __source: {
                                fileName: wr,
                                lineNumber: 60,
                                columnNumber: 9
                            }
                        }, a.createElement(H, {
                            link: y.Bs,
                            onClick: d.CF,
                            style: Ar.innerContainer,
                            __self: this,
                            __source: {
                                fileName: wr,
                                lineNumber: 61,
                                columnNumber: 11
                            }
                        }, a.createElement(vr.Z, {
                            avatar: a.createElement(te.default, {
                                size: "xxLarge",
                                __self: this,
                                __source: {
                                    fileName: wr,
                                    lineNumber: 67,
                                    columnNumber: 23
                                }
                            }),
                            footer: this._maybeRenderReplyButton(i),
                            usernameContent: this._renderUserNameAndLogo(),
                            withFullWidthChildren: !0,
                            __self: this,
                            __source: {
                                fileName: wr,
                                lineNumber: 66,
                                columnNumber: 13
                            }
                        }, a.createElement(hr, {
                            __self: this,
                            __source: {
                                fileName: wr,
                                lineNumber: 72,
                                columnNumber: 16
                            }
                        }), this._renderTimestampAndPrivacyIcon(), this._renderTweetActions()))))
                    }, n._renderUserNameAndLogo = function() {
                        return a.createElement(a.Fragment, {
                            __self: this,
                            __source: {
                                fileName: wr,
                                lineNumber: 84,
                                columnNumber: 7
                            }
                        }, a.createElement(J.Z, {
                            style: Ar.userAndTwitterLogo,
                            __self: this,
                            __source: {
                                fileName: wr,
                                lineNumber: 85,
                                columnNumber: 9
                            }
                        }, a.createElement(J.Z, {
                            style: Ar.userName,
                            __self: this,
                            __source: {
                                fileName: wr,
                                lineNumber: 86,
                                columnNumber: 11
                            }
                        }), a.createElement(J.Z, {
                            style: Ar.icon,
                            __self: this,
                            __source: {
                                fileName: wr,
                                lineNumber: 87,
                                columnNumber: 11
                            }
                        }, a.createElement(gt, {
                            link: y.S9,
                            scribeHandler: d.YV,
                            __self: this,
                            __source: {
                                fileName: wr,
                                lineNumber: 88,
                                columnNumber: 13
                            }
                        }))), a.createElement(J.Z, {
                            style: Ar.screenName,
                            __self: this,
                            __source: {
                                fileName: wr,
                                lineNumber: 91,
                                columnNumber: 9
                            }
                        }))
                    }, n._renderTimestampAndPrivacyIcon = function() {
                        return a.createElement(J.Z, {
                            style: Ar.timestampAndPrivacyIcon,
                            __self: this,
                            __source: {
                                fileName: wr,
                                lineNumber: 98,
                                columnNumber: 7
                            }
                        }, a.createElement(yr, {
                            __self: this,
                            __source: {
                                fileName: wr,
                                lineNumber: 99,
                                columnNumber: 9
                            }
                        }), a.createElement(Ft, {
                            isPrivacyNoticeSeen: this.props.isPrivacyNoticeSeen,
                            setPrivacyNoticeSeen: this.props.setPrivacyNoticeSeen,
                            style: Ar.icon,
                            __self: this,
                            __source: {
                                fileName: wr,
                                lineNumber: 100,
                                columnNumber: 9
                            }
                        }))
                    }, n._renderTweetActions = function() {
                        return a.createElement(J.Z, {
                            style: Ar.actions,
                            __self: this,
                            __source: {
                                fileName: wr,
                                lineNumber: 111,
                                columnNumber: 7
                            }
                        }, a.createElement(pr, {
                            __self: this,
                            __source: {
                                fileName: wr,
                                lineNumber: 112,
                                columnNumber: 9
                            }
                        }))
                    }, n._maybeRenderReplyButton = function(e) {
                        return e ? a.createElement(J.Z, {
                            style: Ar.button,
                            __self: this,
                            __source: {
                                fileName: wr,
                                lineNumber: 119,
                                columnNumber: 7
                            }
                        }, a.createElement(jt, {
                            link: y.Bs,
                            onClick: d.d$,
                            __self: this,
                            __source: {
                                fileName: wr,
                                lineNumber: 120,
                                columnNumber: 9
                            }
                        }, tr)) : null
                    }, t
                }(a.Component);
            const Pr = gr;
            var Ar = ne.Z.create((function(e) {
                    return {
                        actions: {
                            alignItems: "flex-start",
                            flexDirection: "row",
                            marginTop: e.spaces.space4,
                            paddingTop: e.spaces.space4,
                            paddingBottom: e.spaces.space1
                        },
                        button: {
                            marginBottom: e.spaces.space4,
                            marginTop: e.spaces.space1
                        },
                        icon: {
                            marginStart: "auto"
                        },
                        outerContainer: {
                            cursor: "pointer",
                            maxWidth: 550,
                            minWidth: 250
                        },
                        innerContainer: {
                            backgroundColor: e.colors.cellBackground
                        },
                        screenName: {
                            backgroundColor: e.colors.gray50,
                            flexDirection: "row",
                            marginBottom: e.spaces.space8,
                            marginStart: "-" + e.spaces.space8,
                            paddingTop: e.spaces.space12,
                            width: "25%"
                        },
                        text: {
                            paddingBottom: e.spaces.space2,
                            paddingTop: e.spaces.space8
                        },
                        timestampAndPrivacyIcon: {
                            alignItems: "center",
                            flexDirection: "row"
                        },
                        userAndTwitterLogo: {
                            alignItems: "center",
                            flexDirection: "row",
                            marginStart: "-" + e.spaces.space8
                        },
                        userName: {
                            backgroundColor: e.colors.gray50,
                            justifyContent: "center",
                            marginBottom: e.spaces.space8,
                            marginTop: e.spaces.space8,
                            paddingTop: e.spaces.space12,
                            position: "relative",
                            width: "20%"
                        }
                    }
                })),
                xr = n(70996);
            const Rr = Object.freeze({
                FAILED: "failed",
                LOADED: "loaded",
                LOADING: "loading",
                NONE: "none"
            });
            var kr = "/data/jenkins/workspace/source_4/syndication/embed-iframe/src/embeds/Tweet/Tweet.js",
                Lr = a.createContext();
            Lr.displayName = "EmbedServerAPIContext";
            var Sr = function(e) {
                function t(t) {
                    var n, r;
                    return n = e.call(this, t) || this, (0, c.Z)((0, o.Z)(n), "setPrivacyNoticeSeen", (function(e) {
                        n.setState({
                            isPrivacyNoticeSeen: e
                        })
                    })), (0, c.Z)((0, o.Z)(n), "_getNewsActionProps", (function() {
                        var e = n.state.tweet;
                        if (e) return e.news_action_type === En.covid19 ? {
                            newsActionLink: {
                                pathname: e.covid19_hub_url
                            },
                            newsActionType: En.covid19
                        } : {
                            newsActionLink: (0, y.t0)(e),
                            newsActionType: En.conversation
                        }
                    })), (0, c.Z)((0, o.Z)(n), "handleSkeletonLayout", (0, _.Z)((function(e) {
                        var t = e.nativeEvent.layout,
                            n = t.width,
                            r = t.height;
                        an.ZP.send({
                            key: an.zW.RESIZE,
                            details: {
                                width: n,
                                height: r
                            }
                        })
                    }), 100)), (0, c.Z)((0, o.Z)(n), "handleLayout", (0, _.Z)((r = !1, function(e) {
                        var t = e.nativeEvent;
                        if (n.state.tweetFetchStatus === Rr.LOADED) {
                            var i = t.layout,
                                o = i.width,
                                s = i.height;
                            an.ZP.send({
                                key: an.zW.RESIZE,
                                details: {
                                    width: o,
                                    height: s
                                }
                            }), r || (an.ZP.send({
                                key: an.zW.RENDERED,
                                details: {}
                            }), r = !0)
                        }
                    }), 100)), (0, c.Z)((0, o.Z)(n), "loadTweet", (function() {
                        var e = n.props.id,
                            t = p.Z.getLocale();
                        return n.fetchTweet(e, t).then((function(e) {
                            n.setState({
                                tweet: e,
                                tweetFetchStatus: Rr.LOADED
                            }), an.ZP.send({
                                key: an.zW.RESULTS,
                                details: {}
                            }), n._scribeAction(l.eX.RESULTS), (0, m.Y)(u), (0, m.Tb)(u), (0, m.Tx)(u)
                        })).catch((function(e) {
                            n.setState({
                                tweetFetchStatus: Rr.FAILED
                            }), an.ZP.send({
                                key: an.zW.NO_RESULTS,
                                details: {}
                            }), n._scribeAction(l.eX.NO_RESULTS)
                        }))
                    })), (0, c.Z)((0, o.Z)(n), "fetchTweet", (function(e, t) {
                        var r = n.props.api,
                            i = N.Z.getFeatures();
                        return r.Tweet.fetch({
                            features: (0, b.Z)(i),
                            id: e,
                            lang: t
                        })
                    })), (0, c.Z)((0, o.Z)(n), "_scribeAction", (function(e) {
                        l.ZP.scribe(e, {
                            section: l.bx.MAIN
                        })
                    })), n.setPrivacyNoticeSeen = n.setPrivacyNoticeSeen.bind((0, o.Z)(n)), n.state = {
                        tweetFetchStatus: Rr.LOADING,
                        isPrivacyNoticeSeen: !1
                    }, n
                }(0, s.Z)(t, e);
                var n = t.prototype;
                return n.componentDidMount = function() {
                    this.props.id ? this.loadTweet() : this.setState({
                        tweetFetchStatus: Rr.FAILED
                    })
                }, n.render = function() {
                    var e = this.state,
                        t = e.tweet;
                    return e.tweetFetchStatus === Rr.LOADED && t ? a.createElement(a.Fragment, null, this._renderTweet()) : this._renderFallback()
                }, n._renderTweet = function() {
                    var e = this.props,
                        t = e.hideMedia,
                        n = e.hideThread,
                        r = e.id,
                        i = e.pageData,
                        o = this.state.tweet,
                        s = this._getNewsActionProps();
                    return o && s ? a.createElement(f, {
                        __self: this,
                        __source: {
                            fileName: kr,
                            lineNumber: 88,
                            columnNumber: 7
                        }
                    }, a.createElement(Lr.Provider, {
                        value: this.props.api,
                        __self: this,
                        __source: {
                            fileName: kr,
                            lineNumber: 89,
                            columnNumber: 9
                        }
                    }, a.createElement(Fe.ZP.Provider, {
                        value: {
                            mixedMediaEnabled: function() {
                                return (0, $.mS)()
                            },
                            blueVerifiedBadgeIsEnabled: function() {
                                return (0, $.FA)()
                            },
                            blueBusinessVerifiedBadgeEnabled: function() {
                                return (0, $.iv)()
                            },
                            blueGovernmentVerifiedBadgeEnabled: function() {
                                return (0, $.PG)()
                            },
                            blueBusinessAffiliateBadgeEnabled: function() {
                                return (0, $.l2)()
                            }
                        },
                        __self: this,
                        __source: {
                            fileName: kr,
                            lineNumber: 90,
                            columnNumber: 11
                        }
                    }, a.createElement(mr, {
                        id: r,
                        pageData: i,
                        __self: this,
                        __source: {
                            fileName: kr,
                            lineNumber: 99,
                            columnNumber: 13
                        }
                    }, a.createElement(lr, {
                        hideMedia: t,
                        hideThread: n,
                        isPrivacyNoticeSeen: this.state.isPrivacyNoticeSeen,
                        likeActionLink: (0, y.ke)(o),
                        newsActionLink: s.newsActionLink,
                        newsActionType: s.newsActionType,
                        onLayout: this.handleLayout,
                        permalink: (0, y.t0)(o),
                        setPrivacyNoticeSeen: this.setPrivacyNoticeSeen,
                        tweet: o,
                        __self: this,
                        __source: {
                            fileName: kr,
                            lineNumber: 100,
                            columnNumber: 15
                        }
                    }), a.createElement(xr.Z, {
                        zIndex: 1,
                        __self: this,
                        __source: {
                            fileName: kr,
                            lineNumber: 112,
                            columnNumber: 15
                        }
                    }))))) : this._renderFallback()
                }, n._renderFallback = function() {
                    return this._isSkeletonExperimentTreatmentEnabled() ? a.createElement(Pr, {
                        bucket: this._getExperimentBucketValue(),
                        isPrivacyNoticeSeen: this.state.isPrivacyNoticeSeen,
                        onLayout: this.handleSkeletonLayout,
                        setPrivacyNoticeSeen: this.setPrivacyNoticeSeen,
                        __self: this,
                        __source: {
                            fileName: kr,
                            lineNumber: 124,
                            columnNumber: 7
                        }
                    }) : null
                }, n._getExperimentBucketValue = function() {
                    var e = N.Z.getFeatureData(l.bx.SKELETON_LOADER_EXPERIMENT);
                    return e && e.bucket
                }, n._isSkeletonExperimentTreatmentEnabled = function() {
                    return "cta" === this._getExperimentBucketValue() || "no_cta" === this._getExperimentBucketValue()
                }, t
            }(a.Component)
        },
        50277: (e, t, n) => {
            n.d(t, {
                $1: () => u,
                Bs: () => i,
                CX: () => _,
                Rk: () => s,
                S9: () => r,
                XS: () => c,
                ke: () => o,
                po: () => m,
                sp: () => l,
                t0: () => a
            });
            var r = "https://twitter.com",
                i = "https://twitter.com/explore",
                o = function(e) {
                    return {
                        pathname: r + "/intent/like",
                        query: {
                            tweet_id: e.id_str
                        }
                    }
                },
                s = function(e) {
                    return {
                        pathname: r + "/intent/tweet",
                        query: {
                            in_reply_to: e.id_str
                        }
                    }
                },
                c = function(e) {
                    return {
                        pathname: r + "/intent/follow",
                        query: {
                            screen_name: e.user.screen_name
                        }
                    }
                },
                a = function(e) {
                    var t, n, i;
                    if (e.isStaleEdit && null != (t = e.edit_control) && null != (n = t.edit_tweet_ids) && n.length) {
                        var o = e.edit_control.edit_tweet_ids;
                        i = o[o.length - 1]
                    } else i = e.id_str;
                    return {
                        pathname: r + "/" + e.user.screen_name + "/status/" + i
                    }
                },
                l = function(e) {
                    var t = e.id,
                        n = e.screenName;
                    return {
                        pathname: r + "/" + n + "/status/" + t
                    }
                },
                u = function(e) {
                    return {
                        pathname: r + "/places/" + e.id
                    }
                },
                m = function(e) {
                    return {
                        pathname: r + "/" + e
                    }
                },
                _ = function(e) {
                    return e.pathname
                }
        },
        53070: (e, t, n) => {
            n.d(t, {
                Z: () => r
            });
            const r = function(e) {
                var t = Object.keys(e);
                return 0 === t.length ? null : t.map((function(t) {
                    return t + ":" + e[t].bucket
                })).join(";")
            }
        },
        25304: (e, t, n) => {
            n.d(t, {
                $E: () => w,
                $F: () => J,
                $X: () => Ne,
                $d: () => g,
                A6: () => D,
                BM: () => P,
                CF: () => c,
                Ci: () => ee,
                EF: () => S,
                EP: () => $,
                Ek: () => Z,
                El: () => O,
                Fq: () => Ce,
                Fy: () => Xe,
                GC: () => d,
                GV: () => Ae,
                HM: () => we,
                Hf: () => Re,
                I3: () => W,
                IO: () => oe,
                JV: () => B,
                LC: () => b,
                Lo: () => ve,
                Lp: () => de,
                Md: () => ke,
                Mu: () => T,
                N5: () => y,
                NS: () => V,
                N_: () => v,
                PQ: () => Le,
                PS: () => Y,
                Pn: () => xe,
                QY: () => K,
                QZ: () => N,
                Rd: () => H,
                Rg: () => We,
                S1: () => _,
                SG: () => Se,
                UP: () => Ze,
                V9: () => re,
                Vg: () => j,
                YV: () => a,
                Z$: () => G,
                Zg: () => M,
                _N: () => R,
                _u: () => te,
                bK: () => x,
                cY: () => Q,
                d$: () => l,
                e7: () => be,
                ez: () => U,
                fW: () => X,
                fv: () => E,
                g: () => fe,
                g1: () => De,
                hJ: () => A,
                iR: () => _e,
                jh: () => z,
                jq: () => Oe,
                ju: () => le,
                jv: () => ze,
                k9: () => k,
                kc: () => ae,
                lP: () => Ie,
                mZ: () => C,
                nO: () => F,
                og: () => he,
                oj: () => ce,
                or: () => ye,
                pd: () => m,
                py: () => ie,
                pz: () => Ve,
                q2: () => ge,
                qK: () => L,
                qO: () => h,
                r4: () => ue,
                ri: () => f,
                sL: () => u,
                sz: () => ne,
                tI: () => pe,
                tS: () => me,
                uA: () => Me,
                uM: () => I,
                wA: () => Ee,
                x2: () => Te,
                xZ: () => se,
                xj: () => q,
                yu: () => Pe,
                zJ: () => p
            });
            var r = n(53100),
                i = n(91381),
                o = n(60798),
                s = function(e) {
                    e.stopPropagation()
                },
                c = function(e) {
                    s(e), o.ZP.scribe(o.eX.CLICK_TWITTER, {
                        section: o.bx.MAIN,
                        component: o.z8.WHITESPACE
                    })
                },
                a = function(e) {
                    s(e), o.ZP.scribe(o.eX.CLICK_TWITTER, {
                        section: o.bx.MAIN,
                        component: o.z8.LOGO
                    })
                },
                l = function(e) {
                    s(e), o.ZP.scribe(o.eX.CLICK_TWITTER, {
                        section: o.bx.MAIN,
                        component: o.z8.REPLY_PROMPT
                    })
                },
                u = function() {
                    o.ZP.scribe(o.eX.SEEN, {
                        section: o.bx.MAIN,
                        element: o.eK.SKELETON
                    })
                },
                m = function(e) {
                    s(e), o.ZP.scribe(o.eX.CLICK_TWITTER, {
                        section: o.bx.MAIN,
                        component: o.z8.AUTHOR
                    })
                },
                _ = function(e) {
                    s(e), o.ZP.scribe(o.eX.CLICK_TWITTER, {
                        section: o.bx.MAIN,
                        component: o.z8.LIKE_ACTION
                    })
                },
                d = function(e) {
                    s(e), o.ZP.scribe(o.eX.CLICK_TWITTER, {
                        section: o.bx.MAIN,
                        component: o.z8.LOGO
                    })
                },
                f = function(e) {
                    s(e), o.ZP.scribe(o.eX.CLICK_TWITTER, {
                        section: o.bx.MAIN,
                        component: o.z8.NEWS_ACTION
                    })
                },
                b = function(e) {
                    s(e), o.ZP.scribe(o.eX.CLICK_TWITTER, {
                        section: o.bx.MAIN,
                        component: o.z8.PHOTO
                    })
                },
                p = function(e) {
                    s(e), o.ZP.scribe(o.eX.CLICK_TWITTER, {
                        section: o.bx.MAIN,
                        component: o.z8.PLACE
                    })
                },
                N = function(e) {
                    s(e), o.ZP.scribe(o.eX.CLICK_EXTERNAL, {
                        section: o.bx.MAIN,
                        component: o.z8.PRIVACY_NOTICE
                    })
                },
                E = function() {
                    o.ZP.scribe(o.eX.SEEN, {
                        section: o.bx.MAIN,
                        component: o.z8.PRIVACY_NOTICE
                    })
                },
                T = function() {
                    o.ZP.scribe(o.eX.SEEN, {
                        section: o.bx.MAIN,
                        component: o.z8.PUBLIC_INTEREST_NOTICE
                    })
                },
                h = function(e) {
                    s(e), o.ZP.scribe(o.eX.CLICK_TWITTER, {
                        section: o.bx.MAIN,
                        component: o.z8.PUBLIC_INTEREST_NOTICE
                    })
                },
                I = function(e) {
                    s(e), o.ZP.scribe(o.eX.CLICK_TWITTER, {
                        section: o.bx.MAIN,
                        component: o.z8.REPLY_PROMPT
                    })
                },
                C = function(e) {
                    s(e)
                },
                Z = function() {
                    o.ZP.scribe(o.eX.SEEN, {
                        section: o.bx.MAIN,
                        component: o.z8.SOFT_INTERVENTION_PIVOT
                    })
                },
                y = function(e) {
                    s(e), o.ZP.scribe(o.eX.CLICK_TWITTER, {
                        section: o.bx.MAIN,
                        component: o.z8.TIMESTAMP
                    })
                },
                v = function(e) {
                    s(e), o.ZP.scribe(o.eX.CLICK_TWITTER, {
                        section: o.bx.MAIN,
                        component: o.z8.TWEET_REPLY_CONTEXT
                    })
                },
                w = function(e) {
                    s(e), o.ZP.scribe(o.eX.CLICK_TWITTER, {
                        section: o.bx.MAIN,
                        component: o.z8.TWEET_TEXT_CASHTAG
                    })
                },
                g = function(e) {
                    s(e), o.ZP.scribe(o.eX.CLICK_TWITTER, {
                        section: o.bx.MAIN,
                        component: o.z8.TWEET_TEXT_HASHTAG
                    })
                },
                P = function(e) {
                    s(e), o.ZP.scribe(o.eX.CLICK_TWITTER, {
                        section: o.bx.MAIN,
                        component: o.z8.TWEET_TEXT_MEDIA
                    })
                },
                A = function(e) {
                    s(e), o.ZP.scribe(o.eX.CLICK_TWITTER, {
                        section: o.bx.MAIN,
                        component: o.z8.TWEET_TEXT_MENTION
                    })
                },
                x = function(e) {
                    s(e), o.ZP.scribe(o.eX.CLICK_TWITTER, {
                        section: o.bx.MAIN,
                        component: o.z8.TWEET_TEXT_URL
                    })
                },
                R = function(e) {
                    s(e), o.ZP.scribe(o.eX.CLICK_EXTERNAL, {
                        section: o.bx.MAIN,
                        component: o.z8.TWEET_TEXT_URL
                    })
                },
                k = function(e) {
                    s(e), o.ZP.scribe(o.eX.CLICK_TWITTER, {
                        section: o.bx.MAIN,
                        component: o.z8.TWEET_TEXT_QUOTE
                    })
                },
                L = function(e) {
                    s(e), o.ZP.scribe(o.eX.CLICK_TWITTER, {
                        section: o.bx.MAIN,
                        component: o.z8.VIDEO
                    })
                },
                S = function(e) {
                    s(e), o.ZP.scribe(o.eX.CLICK_TWITTER, {
                        section: o.bx.MAIN,
                        component: o.z8.WHITESPACE
                    })
                },
                O = function(e) {
                    s(e), o.ZP.scribe(o.eX.CLICK_EXTERNAL, {
                        section: o.bx.MAIN,
                        component: o.z8.SOFT_INTERVENTION_PIVOT
                    })
                },
                M = function(e) {
                    s(e), o.ZP.scribe(o.eX.CLICK_TWITTER, {
                        section: o.bx.MAIN,
                        component: o.z8.SOFT_INTERVENTION_PIVOT
                    })
                },
                W = function(e) {
                    s(e), (0, r.A)(o.bx.MAIN, o.eK.CTA_PAUSED_PLAYER, o.eX.CLICK_TWITTER)
                },
                z = function(e) {
                    s(e), (0, r.A)(o.bx.MAIN, o.eK.CTA_LOGO, o.eX.CLICK_TWITTER)
                },
                X = function(e) {
                    s(e), (0, r.A)(o.bx.MAIN, o.eK.CTA_REPLIES, o.eX.CLICK_TWITTER)
                },
                D = function(e, t) {
                    s(e), o.ZP.scribe(o.eX.CLICK_TWITTER, {
                        section: o.bx.MAIN,
                        component: o.z8.VIDEO,
                        element: o.eK.RELATED_VIDEOS
                    }, {
                        item_details: {
                            relatedVideos: {
                                cursor: t,
                                item_type: i.v.CAROUSEL
                            }
                        }
                    })
                },
                V = function(e) {
                    s(e), o.ZP.scribe(o.eX.CLICK_TWITTER, {
                        section: o.bx.MAIN,
                        component: o.z8.THREAD
                    })
                },
                j = function(e) {
                    o.ZP.scribe(o.eX.UNHANDLED_ERROR, {
                        section: o.bx.MAIN,
                        component: o.z8.ERROR
                    }, {
                        message: e.toString()
                    })
                },
                U = function(e) {
                    s(e), o.ZP.scribe(o.eX.CLICK_INTERACTIVE, {
                        section: o.bx.MAIN,
                        component: o.z8.SENSITIVE_MEDIA
                    })
                },
                Q = function() {
                    o.ZP.scribe(o.eX.SEEN, {
                        section: o.bx.MAIN,
                        component: o.z8.SENSITIVE_MEDIA
                    })
                },
                K = function(e) {
                    s(e), o.ZP.scribe(o.eX.CLICK_TWITTER, {
                        section: o.bx.PARENT,
                        component: o.z8.AUTHOR
                    })
                },
                F = function(e) {
                    s(e), o.ZP.scribe(o.eX.CLICK_TWITTER, {
                        section: o.bx.PARENT,
                        component: o.z8.LOGO
                    })
                },
                B = function(e) {
                    s(e), o.ZP.scribe(o.eX.CLICK_TWITTER, {
                        section: o.bx.PARENT,
                        component: o.z8.PHOTO
                    })
                },
                H = function() {
                    o.ZP.scribe(o.eX.SEEN, {
                        section: o.bx.PARENT,
                        component: o.z8.PUBLIC_INTEREST_NOTICE
                    })
                },
                G = function(e) {
                    s(e), o.ZP.scribe(o.eX.CLICK_TWITTER, {
                        section: o.bx.PARENT,
                        component: o.z8.PUBLIC_INTEREST_NOTICE
                    })
                },
                q = function(e) {
                    s(e), o.ZP.scribe(o.eX.CLICK_TWITTER, {
                        section: o.bx.PARENT,
                        component: o.z8.TWEET_REPLY_CONTEXT
                    })
                },
                Y = function(e) {
                    s(e), o.ZP.scribe(o.eX.CLICK_TWITTER, {
                        section: o.bx.PARENT,
                        component: o.z8.TWEET_TEXT_CASHTAG
                    })
                },
                $ = function(e) {
                    s(e), o.ZP.scribe(o.eX.CLICK_TWITTER, {
                        section: o.bx.PARENT,
                        component: o.z8.TWEET_TEXT_HASHTAG
                    })
                },
                J = function(e) {
                    s(e), o.ZP.scribe(o.eX.CLICK_TWITTER, {
                        section: o.bx.PARENT,
                        component: o.z8.TWEET_TEXT_MEDIA
                    })
                },
                ee = function(e) {
                    s(e), o.ZP.scribe(o.eX.CLICK_TWITTER, {
                        section: o.bx.PARENT,
                        component: o.z8.TWEET_TEXT_MENTION
                    })
                },
                te = function(e) {
                    s(e), o.ZP.scribe(o.eX.CLICK_TWITTER, {
                        section: o.bx.PARENT,
                        component: o.z8.TWEET_TEXT_URL
                    })
                },
                ne = function(e) {
                    s(e), o.ZP.scribe(o.eX.CLICK_EXTERNAL, {
                        section: o.bx.PARENT,
                        component: o.z8.TWEET_TEXT_URL
                    })
                },
                re = function(e) {
                    s(e), o.ZP.scribe(o.eX.CLICK_TWITTER, {
                        section: o.bx.PARENT,
                        component: o.z8.TWEET_TEXT_QUOTE
                    })
                },
                ie = function(e) {
                    s(e), o.ZP.scribe(o.eX.CLICK_TWITTER, {
                        section: o.bx.PARENT,
                        component: o.z8.VIDEO
                    })
                },
                oe = function(e) {
                    s(e), o.ZP.scribe(o.eX.CLICK_TWITTER, {
                        section: o.bx.PARENT,
                        component: o.z8.WHITESPACE
                    })
                },
                se = function(e) {
                    s(e), o.ZP.scribe(o.eX.CLICK_EXTERNAL, {
                        section: o.bx.PARENT,
                        component: o.z8.SOFT_INTERVENTION_PIVOT
                    })
                },
                ce = function(e) {
                    s(e), o.ZP.scribe(o.eX.CLICK_TWITTER, {
                        section: o.bx.PARENT,
                        component: o.z8.SOFT_INTERVENTION_PIVOT
                    })
                },
                ae = function() {
                    o.ZP.scribe(o.eX.SEEN, {
                        section: o.bx.PARENT,
                        component: o.z8.SOFT_INTERVENTION_PIVOT
                    })
                },
                le = function() {
                    o.ZP.scribe(o.eX.CLICK_INTERACTIVE, {
                        section: o.bx.MAIN,
                        component: o.z8.SHARE_ACTION
                    })
                },
                ue = function(e) {
                    s(e), (0, r.A)(o.bx.PARENT, o.eK.CTA_PAUSED_PLAYER, o.eX.CLICK_TWITTER)
                },
                me = function(e) {
                    s(e), (0, r.A)(o.bx.PARENT, o.eK.CTA_LOGO, o.eX.CLICK_TWITTER)
                },
                _e = function(e) {
                    s(e), (0, r.A)(o.bx.PARENT, o.eK.CTA_REPLIES, o.eX.CLICK_TWITTER)
                },
                de = function(e, t) {
                    s(e), o.ZP.scribe(o.eX.CLICK_TWITTER, {
                        section: o.bx.PARENT,
                        component: o.z8.VIDEO,
                        element: o.eK.RELATED_VIDEOS
                    }, {
                        item_details: {
                            relatedVideos: {
                                cursor: t,
                                item_type: i.v.CAROUSEL
                            }
                        }
                    })
                },
                fe = function(e) {
                    s(e), o.ZP.scribe(o.eX.CLICK_INTERACTIVE, {
                        section: o.bx.PARENT,
                        component: o.z8.SENSITIVE_MEDIA
                    })
                },
                be = function() {
                    o.ZP.scribe(o.eX.SEEN, {
                        section: o.bx.PARENT,
                        component: o.z8.SENSITIVE_MEDIA
                    })
                },
                pe = function(e) {
                    s(e), o.ZP.scribe(o.eX.CLICK_TWITTER, {
                        section: o.bx.PARENT_QUOTE
                    })
                },
                Ne = function(e) {
                    s(e), o.ZP.scribe(o.eX.CLICK_TWITTER, {
                        section: o.bx.PARENT_QUOTE,
                        component: o.z8.PHOTO
                    })
                },
                Ee = function() {
                    o.ZP.scribe(o.eX.SEEN, {
                        section: o.bx.PARENT_QUOTE,
                        component: o.z8.PUBLIC_INTEREST_NOTICE
                    })
                },
                Te = function(e) {
                    s(e), o.ZP.scribe(o.eX.CLICK_TWITTER, {
                        section: o.bx.PARENT_QUOTE,
                        component: o.z8.PUBLIC_INTEREST_NOTICE
                    })
                },
                he = function(e) {
                    s(e), o.ZP.scribe(o.eX.CLICK_TWITTER, {
                        section: o.bx.PARENT_QUOTE,
                        component: o.z8.VIDEO
                    })
                },
                Ie = function(e) {
                    s(e), o.ZP.scribe(o.eX.CLICK_EXTERNAL, {
                        section: o.bx.PARENT_QUOTE,
                        component: o.z8.SOFT_INTERVENTION_PIVOT
                    })
                },
                Ce = function(e) {
                    s(e), o.ZP.scribe(o.eX.CLICK_TWITTER, {
                        section: o.bx.PARENT_QUOTE,
                        component: o.z8.SOFT_INTERVENTION_PIVOT
                    })
                },
                Ze = function() {
                    o.ZP.scribe(o.eX.SEEN, {
                        section: o.bx.PARENT_QUOTE,
                        component: o.z8.SOFT_INTERVENTION_PIVOT
                    })
                },
                ye = function(e) {
                    s(e), o.ZP.scribe(o.eX.CLICK_INTERACTIVE, {
                        section: o.bx.PARENT_QUOTE,
                        component: o.z8.SENSITIVE_MEDIA
                    })
                },
                ve = function() {
                    o.ZP.scribe(o.eX.SEEN, {
                        section: o.bx.PARENT_QUOTE,
                        component: o.z8.SENSITIVE_MEDIA
                    })
                },
                we = function(e) {
                    s(e), o.ZP.scribe(o.eX.CLICK_TWITTER, {
                        section: o.bx.QUOTE
                    })
                },
                ge = function(e) {
                    s(e), o.ZP.scribe(o.eX.CLICK_TWITTER, {
                        section: o.bx.QUOTE,
                        component: o.z8.PHOTO
                    })
                },
                Pe = function() {
                    o.ZP.scribe(o.eX.SEEN, {
                        section: o.bx.QUOTE,
                        component: o.z8.PUBLIC_INTEREST_NOTICE
                    })
                },
                Ae = function(e) {
                    s(e), o.ZP.scribe(o.eX.CLICK_TWITTER, {
                        section: o.bx.QUOTE,
                        component: o.z8.PUBLIC_INTEREST_NOTICE
                    })
                },
                xe = function(e) {
                    s(e), o.ZP.scribe(o.eX.CLICK_TWITTER, {
                        section: o.bx.QUOTE,
                        component: o.z8.VIDEO
                    })
                },
                Re = function() {
                    o.ZP.scribe(o.eX.CLICK_TWITTER, {
                        section: o.bx.MAIN,
                        component: o.z8.CARD
                    })
                },
                ke = function() {
                    o.ZP.scribe(o.eX.CLICK_EXTERNAL, {
                        section: o.bx.MAIN,
                        component: o.z8.CARD
                    })
                },
                Le = function() {
                    o.ZP.scribe(o.eX.CLICK_TWITTER, {
                        section: o.bx.PARENT,
                        component: o.z8.CARD
                    })
                },
                Se = function() {
                    o.ZP.scribe(o.eX.CLICK_EXTERNAL, {
                        section: o.bx.PARENT,
                        component: o.z8.CARD
                    })
                },
                Oe = function(e, t) {
                    o.ZP.scribe(o.eX.EXPERIMENT, {
                        section: e,
                        page: o.iY.DDG
                    }, t)
                },
                Me = function(e) {
                    s(e), o.ZP.scribe(o.eX.CLICK_EXTERNAL, {
                        section: o.bx.QUOTE,
                        component: o.z8.SOFT_INTERVENTION_PIVOT
                    })
                },
                We = function(e) {
                    s(e), o.ZP.scribe(o.eX.CLICK_TWITTER, {
                        section: o.bx.QUOTE,
                        component: o.z8.SOFT_INTERVENTION_PIVOT
                    })
                },
                ze = function() {
                    o.ZP.scribe(o.eX.SEEN, {
                        section: o.bx.QUOTE,
                        component: o.z8.SOFT_INTERVENTION_PIVOT
                    })
                },
                Xe = function(e) {
                    s(e), o.ZP.scribe(o.eX.CLICK_INTERACTIVE, {
                        section: o.bx.QUOTE,
                        component: o.z8.SENSITIVE_MEDIA
                    })
                },
                De = function() {
                    o.ZP.scribe(o.eX.SEEN, {
                        section: o.bx.QUOTE,
                        component: o.z8.SENSITIVE_MEDIA
                    })
                },
                Ve = function(e) {
                    switch (e) {
                        case o.bx.PARENT_QUOTE:
                            return Ne;
                        case o.bx.PARENT:
                            return B;
                        case o.bx.QUOTE:
                            return ge;
                        default:
                            return b
                    }
                }
        },
        53100: (e, t, n) => {
            n.d(t, {
                A: () => i,
                v: () => o
            });
            var r = n(60798),
                i = function(e, t, n) {
                    r.ZP.scribe(n, {
                        section: e,
                        component: r.z8.VIDEO,
                        element: t
                    })
                },
                o = function(e) {
                    r.ZP.scribe(r.eX.CLICK_INTERACTIVE, {
                        section: e,
                        component: r.z8.VIDEO
                    })
                }
        }
    }
]);