"use strict";
(self.webpackChunkembed_iframe = self.webpackChunkembed_iframe || []).push([
    [8099], {
        49161: (e, t, n) => {
            n.r(t), n.d(t, {
                default: () => x
            });
            var o = n(87462),
                r = n(15671),
                i = n(43144),
                a = n(97326),
                c = n(60136),
                l = n(98557),
                d = n(4942),
                u = n(1413),
                s = (n(43371), n(15218), n(67294)),
                p = n(95998),
                h = n(67177),
                f = n(7064),
                m = n(86435),
                Z = n(49384),
                v = n(19466),
                _ = n(21078),
                g = n(55346),
                w = n(65859),
                b = n(66288),
                y = n(83765),
                R = n(32770),
                E = n(13582),
                N = n(76290),
                O = n(64123),
                H = O.Z.create((function(e) {
                    return {
                        rootNarrow: {
                            maxWidth: "75%"
                        },
                        rootWide: {
                            maxWidth: "calc(".concat(e.spaces.space64, " * 6)")
                        },
                        anchor: O.Z.absoluteFillObject,
                        mask: (0, u.Z)((0, u.Z)({}, O.Z.absoluteFillObject), {}, {
                            position: "fixed"
                        }),
                        bodyRectHelper: (0, u.Z)((0, u.Z)({}, O.Z.absoluteFillObject), {}, {
                            bottom: void 0
                        }),
                        content: {
                            borderRadius: e.borderRadii.large,
                            position: "absolute",
                            overflow: "hidden",
                            backgroundColor: e.colors.navigationBackground,
                            boxShadow: e.boxShadows.medium
                        },
                        contentInitialRender: {
                            position: "fixed",
                            opacity: 0
                        },
                        contentFixed: {
                            position: "fixed",
                            overflowY: "auto",
                            overscrollBehavior: "contain"
                        }
                    }
                })),
                x = function(e) {
                    (0, c.Z)(n, e);
                    var t = (0, l.Z)(n);

                    function n(e, o) {
                        var i;
                        return (0, r.Z)(this, n), i = t.call(this, e, o), (0, d.Z)((0, a.Z)(i), "_handleAnimateComplete", (function() {
                            var e = i.props.onAnimateComplete;
                            e && e()
                        })), (0, d.Z)((0, a.Z)(i), "_handleEsc", (function(e) {
                            var t = i.props.onDismiss,
                                n = e.altKey,
                                o = e.ctrlKey,
                                r = e.key,
                                a = e.metaKey;
                            !(n || o || a) && "Escape" === r && t()
                        })), (0, d.Z)((0, a.Z)(i), "_receiveBodyRectHelperRef", (function(e) {
                            e && i._bodyRectHelperNode !== e && (i._bodyRectHelperNode = e, i._scheduleUpdate())
                        })), (0, d.Z)((0, a.Z)(i), "_receiveAnchorRef", (function(e) {
                            e && i._anchorNode !== e && (i._anchorNode = e, i._scheduleUpdate())
                        })), (0, d.Z)((0, a.Z)(i), "_receiveContentRef", (function(e) {
                            e && i._contentNode !== e && (i._contentNode = e, i._scheduleUpdate())
                        })), (0, d.Z)((0, a.Z)(i), "_updatePosition", (function() {
                            if (i._mounted && (i._anchorNode || i.props.position) && i._contentNode && i._contentNode instanceof window.HTMLElement && i._bodyRectHelperNode && i._bodyRectHelperNode instanceof window.HTMLElement) {
                                var e = "rtl" === i._languageDirection,
                                    t = i._contentNode.scrollHeight,
                                    n = i._contentNode.scrollWidth,
                                    o = i._bodyRectHelperNode.getBoundingClientRect(),
                                    r = o.left,
                                    a = o.top,
                                    c = o.width,
                                    l = p.Z.get("window"),
                                    d = l.height,
                                    s = l.width,
                                    h = {
                                        left: 0,
                                        top: 0,
                                        height: 0,
                                        width: 0
                                    };
                                i.props.position ? h = (0, u.Z)((0, u.Z)({}, h), i.props.position) : i._anchorNode && i._anchorNode instanceof window.HTMLElement && (h = i._anchorNode.getBoundingClientRect());
                                var f = h,
                                    m = f.height,
                                    Z = f.left,
                                    v = f.top,
                                    _ = f.width,
                                    g = s - c,
                                    w = Z - r,
                                    b = v - a,
                                    y = Z + _ >= n,
                                    R = v + m >= t,
                                    E = s - Z >= n,
                                    N = d - v >= t,
                                    O = i.props.preferredVerticalOrientation,
                                    H = function(e, t) {
                                        return e ? "left" === t ? "right" : "left" : t
                                    }(e, i.props.preferredHorizontalOrientation),
                                    x = i.state.verticalOrientation || function(e) {
                                        var t = e.canOrientDown,
                                            n = e.canOrientUp;
                                        return n && t || !n && !t ? e.verticalPreference : n ? "up" : "down"
                                    }({
                                        verticalPreference: O,
                                        canOrientUp: R,
                                        canOrientDown: N
                                    }),
                                    C = i.state.horizontalOrientation || (z = {
                                        horizontalPreference: H,
                                        canOrientLeft: y,
                                        canOrientRight: E
                                    }, !z.canOrientLeft || "left" !== z.horizontalPreference && z.canOrientRight ? "right" : "left"),
                                    D = i.props.isFixed ? Z : w,
                                    k = i.props.isFixed ? v : b,
                                    F = "up" === x ? k + m - t : k,
                                    U = "left" === C ? s - D - _ - g : s - D - n - g;
                                i.setState({
                                    top: Math.max(F, 0),
                                    right: U,
                                    verticalOrientation: x,
                                    horizontalOrientation: C
                                })
                            }
                            var z
                        })), i.state = Object.freeze({}), i._scheduleUpdate = (0, Z.Z)(i._updatePosition, window.requestAnimationFrame), i._scheduleDebouncedUpdate = (0, f.Z)(i._scheduleUpdate, 250), i
                    }
                    return (0, i.Z)(n, [{
                        key: "componentDidMount",
                        value: function() {
                            this._mounted = !0, p.Z.addEventListener("change", this._scheduleDebouncedUpdate)
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            this._mounted = !1, p.Z.removeEventListener("change", this._scheduleDebouncedUpdate)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this,
                                t = this.props,
                                n = t.animateInDuration,
                                r = t.animateType,
                                i = t.children,
                                a = t.isFixed,
                                c = t.onDismiss,
                                l = t.preventFocusShift,
                                d = t.withKeyboardNavigation,
                                u = this.state,
                                p = u.right,
                                f = u.top,
                                Z = u.verticalOrientation,
                                x = void 0 === f,
                                C = d ? v.Z : s.Fragment,
                                D = "calc(100vh - ".concat(f || 0, "px)"),
                                k = function(t) {
                                    var l = "rtl" === t,
                                        d = [H.content, x && H.contentInitialRender, a && [H.contentFixed, {
                                            maxHeight: D
                                        }], {
                                            top: f,
                                            end: l ? void 0 : p,
                                            start: l ? p : void 0
                                        }];
                                    return s.createElement(s.Fragment, null, s.createElement(h.Z, {
                                        onClick: c,
                                        style: H.mask
                                    }), s.createElement(h.Z, {
                                        ref: e._receiveBodyRectHelperRef,
                                        style: H.bodyRectHelper
                                    }), s.createElement(N.Z, null, (function(t) {
                                        var a = t.windowWidth;
                                        return s.createElement(h.Z, {
                                            accessibilityRole: "menu",
                                            onKeyUp: e._handleEsc,
                                            ref: e._receiveContentRef,
                                            style: [a < O.Z.theme.breakpoints.medium ? H.rootNarrow : H.rootWide, d]
                                        }, x && "slide" === r ? i : s.createElement(m.Z, {
                                            animateMount: "up" !== Z,
                                            duration: n,
                                            onAnimateComplete: e._handleAnimateComplete,
                                            show: !0,
                                            type: r
                                        }, (function(e) {
                                            var t = e.isAnimating;
                                            return s.createElement(b.Z, {
                                                id: "Dropdown",
                                                minimizeReporting: t
                                            }, (function(e, t) {
                                                return s.createElement(h.Z, (0, o.Z)({
                                                    ref: e()
                                                }, t({})), i)
                                            }))
                                        })))
                                    })))
                                };
                            return s.createElement(R.Z, null, (function(t) {
                                var n = t.direction;
                                return e._languageDirection = n, s.createElement(h.Z, {
                                    ref: e._receiveAnchorRef,
                                    style: H.anchor
                                }, s.createElement(y.Z.Dropdown, null, s.createElement(w.Z.Consumer, null, (function(e) {
                                    return s.createElement(E.Z.Consumer, null, (function(t) {
                                        var o = t.isModal;
                                        return s.createElement(g.Z, {
                                            history: e,
                                            isModal: o,
                                            onDismiss: c
                                        }, l ? k(n) : s.createElement(_.Z, null, s.createElement(C, null, k(n))))
                                    }))
                                }))))
                            }))
                        }
                    }]), n
                }(s.Component);
            (0, d.Z)(x, "defaultProps", {
                preferredHorizontalOrientation: "left",
                preferredVerticalOrientation: "down",
                animateType: "slide",
                animateInDuration: "normal",
                withKeyboardNavigation: !0
            })
        },
        49384: (e, t, n) => {
            n.d(t, {
                Z: () => o
            });
            const o = function(e, t) {
                var n = null,
                    o = function() {
                        n = null, e()
                    };
                return function() {
                    return n || (n = t(o)), n
                }
            }
        },
        15218: (e, t, n) => {
            var o = n(82109),
                r = n(14230);
            o({
                target: "String",
                proto: !0,
                forced: n(43429)("anchor")
            }, {
                anchor: function(e) {
                    return r(this, "a", "name", e)
                }
            })
        }
    }
]);