(self.webpackChunkembed_iframe = self.webpackChunkembed_iframe || []).push([
    [4384], {
        14525: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => F
            });
            var i, o = n(87462),
                r = n(45987),
                a = (n(21249), n(67294)),
                s = n(15671),
                l = n(43144),
                c = n(97326),
                d = n(60136),
                h = n(98557),
                u = n(4942),
                v = (n(43371), n(26699), n(32023), n(92222), n(89554), n(41539), n(54747), n(82772), n(91038), n(78783), n(86218)),
                f = n(67177),
                p = n(58609),
                b = n.n(p),
                _ = n(83621),
                g = n(31562),
                w = n(49445),
                y = n(57219),
                m = n(7064),
                Z = n(55793),
                C = n(38190),
                k = n(80134),
                x = n(81443),
                L = n(2883),
                I = n(64123),
                T = n(5352),
                B = n(16508);
            var P = b().gea7aa3c,
                R = b().b6462b32,
                E = {
                    viewType: "previous"
                },
                S = {
                    viewType: "next"
                },
                N = function() {
                    return function() {
                        if (void 0 !== i || !B.canUseDOM) return i;
                        var e = document.createElement("template");
                        e.innerHTML = '<div dir="rtl" style="width: 1px; height: 1px; position: fixed; top: 0px; left: 0px; overflow: hidden"><div style="width: 2px"><span style="display: inline-block; width: 1px"></span><span style="display: inline-block; width: 1px"></span></div></div>';
                        var t = e.content.firstChild;
                        if (!(t && t instanceof window.HTMLElement)) return i;
                        document.body && document.body.appendChild(t);
                        var n = t.scrollLeft;
                        return t.remove(), i = 0 === n
                    }() || !v.Z.getConstants().isRTL
                },
                O = Object.freeze(["INPUT", "SELECT", "TEXTAREA"]);

            function W(e) {
                var t = e.event,
                    n = e.isCarouselLocked,
                    i = t.key,
                    o = t.target;
                return [T.Z.ArrowLeft, T.Z.ArrowRight].includes(i) && !n && !(function(e) {
                    return e instanceof HTMLElement && e.isContentEditable
                }(o) || function(e) {
                    return e instanceof HTMLElement && O.includes(e.nodeName)
                }(o))
            }
            var A = function(e) {
                (0, d.Z)(n, e);
                var t = (0, h.Z)(n);

                function n() {
                    var e;
                    (0, s.Z)(this, n);
                    for (var i = arguments.length, o = new Array(i), r = 0; r < i; r++) o[r] = arguments[r];
                    return e = t.call.apply(t, [this].concat(o)), (0, u.Z)((0, c.Z)(e), "_list", a.createRef()), (0, u.Z)((0, c.Z)(e), "_focusedTabIndex", e.props.visibleItemIndex || 0), (0, u.Z)((0, c.Z)(e), "_childRefs", {}), (0, u.Z)((0, c.Z)(e), "_scrollLeft", 0), (0, u.Z)((0, c.Z)(e), "state", {
                        buttonWidth: 0,
                        hidePrevButton: !0,
                        hideNextButton: !0,
                        swipeableWidth: void 0
                    }), (0, u.Z)((0, c.Z)(e), "_getMemoizedBehavioralEventContext", (0, w.Z)((function(e) {
                        return {
                            viewType: e
                        }
                    }))), (0, u.Z)((0, c.Z)(e), "_setChildRef", (function(t) {
                        return function(n) {
                            e._childRefs[t] = n
                        }
                    })), (0, u.Z)((0, c.Z)(e), "_handlePreviousClick", (function(t) {
                        t.stopPropagation(), e._goToPreviousPage()
                    })), (0, u.Z)((0, c.Z)(e), "_handleNextClick", (function(t) {
                        t.stopPropagation(), e._goToNextPage()
                    })), (0, u.Z)((0, c.Z)(e), "_handleSwipeableLayout", (function(t) {
                        var n = t.nativeEvent.layout.width;
                        n !== e.state.swipeableWidth && (void 0 !== e.props.swipeablePaddingLeft && void 0 !== e.props.swipeablePaddingRight && e._list.current && e._list.current.setNativeProps ? e._list.current.setNativeProps({
                            style: {
                                scrollPadding: "0 ".concat(e.props.swipeablePaddingRight, "px 0 ").concat(e.props.swipeablePaddingLeft, "px")
                            }
                        }) : e._list.current && e._list.current.setNativeProps && e.state.buttonWidth && e._list.current.setNativeProps({
                            style: {
                                scrollPadding: "0 ".concat(e.state.buttonWidth, "px")
                            }
                        }), e.setState({
                            swipeableWidth: n
                        }))
                    })), (0, u.Z)((0, c.Z)(e), "_handleButtonLayout", (function(t) {
                        var n = t.nativeEvent.layout.width,
                            i = e.state.buttonWidth;
                        n > 0 && n !== i && e.setState({
                            buttonWidth: n
                        })
                    })), (0, u.Z)((0, c.Z)(e), "_handleItemClick", (function(t) {
                        return function() {
                            e._goToItem(t), e._focusedTabIndex = t
                        }
                    })), (0, u.Z)((0, c.Z)(e), "_handleKeyDown", (function(t) {
                        var n = t.key,
                            i = e.props,
                            o = i.children,
                            r = i.isLocked,
                            a = i.withWraparound;
                        if (W({
                                event: t,
                                isCarouselLocked: r
                            })) {
                            t.preventDefault();
                            var s = e._focusedTabIndex,
                                l = s;
                            if (!v.Z.getConstants().isRTL && n === T.Z.ArrowLeft || v.Z.getConstants().isRTL && n === T.Z.ArrowRight) {
                                var c = a ? o.length - 1 : 0;
                                l = 0 === s ? c : s - 1
                            }
                            if (!v.Z.getConstants().isRTL && n === T.Z.ArrowRight || v.Z.getConstants().isRTL && n === T.Z.ArrowLeft) {
                                var d = a ? 0 : o.length - 1;
                                l = s === o.length - 1 ? d : s + 1
                            }
                            e._focusItem(l)
                        }
                    })), (0, u.Z)((0, c.Z)(e), "_setupIntersectionObserver", (function() {
                        window.IntersectionObserver && (e._observer = new window.IntersectionObserver(e._handleIntersection, {
                            root: e._list.current,
                            rootMargin: "5px",
                            threshold: [.5, 1]
                        }), e._observeChildRefs())
                    })), (0, u.Z)((0, c.Z)(e), "_observeChildRefs", (function() {
                        e._observer && (e._observer.disconnect(), (0, y.Z)(e._childRefs).forEach((function(t) {
                            t && e._observer.observe(t)
                        })))
                    })), (0, u.Z)((0, c.Z)(e), "_handleIntersection", (function(t, n) {
                        var i = e.props,
                            o = i.children,
                            r = i.onVisibleRangeChange;
                        e._handleScrollDebounce(), t.forEach((function(t) {
                            var i = Array.from(n.root.children).indexOf(t.target);
                            0 === i ? e.setState({
                                hidePrevButton: 1 === t.intersectionRatio
                            }) : i === o.length - 1 && e.setState({
                                hideNextButton: 1 === t.intersectionRatio
                            }), -1 !== i && r && r({
                                index: i,
                                intersectionRatio: t.intersectionRatio
                            })
                        }))
                    })), (0, u.Z)((0, c.Z)(e), "_handleScroll", (function() {
                        var t = e.props.onScroll,
                            n = e.state.swipeableWidth;
                        if (t && n) {
                            var i = e._getLeftOffset(n);
                            t({
                                previous: e._scrollLeft,
                                next: i
                            }), e._scrollLeft = i
                        }
                    })), (0, u.Z)((0, c.Z)(e), "_handleScrollDebounce", (0, m.Z)(e._handleScroll, 500)), (0, u.Z)((0, c.Z)(e), "_goToOffset", (function(t) {
                        if (!e.props.isLocked) {
                            var n = e._list.current;
                            if (n instanceof window.HTMLElement)
                                if (v.Z.getConstants().isRTL)
                                    if (N()) e._scrollToOffset(-t);
                                    else {
                                        var i = n.scrollWidth - (e.state.swipeableWidth || 0);
                                        e._scrollToOffset(i - t)
                                    }
                            else e._scrollToOffset(t);
                            else e._scrollToOffset(t)
                        }
                    })), (0, u.Z)((0, c.Z)(e), "_scrollToOffset", (function(t, n) {
                        var i = e._list.current;
                        i && i.scrollTo && i.scrollTo({
                            left: t,
                            behavior: e._getScrollBehavior(n)
                        })
                    })), (0, u.Z)((0, c.Z)(e), "_getLeftOffset", (function(t) {
                        var n, i = e._list.current,
                            o = i ? i.scrollLeft : 0,
                            r = i ? i.scrollWidth : 0;
                        return n = v.Z.getConstants().isRTL ? N() && v.Z.getConstants().isRTL ? -1 * Math.min(0, o) : -1 * Math.min(0, o - (r - t)) : o, Math.ceil(n)
                    })), (0, u.Z)((0, c.Z)(e), "_goToPreviousPage", (function() {
                        var t = e.state.swipeableWidth,
                            n = void 0 === t ? 0 : t;
                        e._goToOffset(e._getLeftOffset(n) - n)
                    })), (0, u.Z)((0, c.Z)(e), "_goToNextPage", (function() {
                        var t = e.state.swipeableWidth,
                            n = void 0 === t ? 0 : t;
                        e._goToOffset(e._getLeftOffset(n) + n)
                    })), e
                }
                return (0, l.Z)(n, [{
                    key: "componentDidMount",
                    value: function() {
                        var e = this.props,
                            t = e.visibleItemIndex,
                            n = e.withGlobalKeyboardNavigation;
                        t && this._goToInitialItem(t), n && window.document.addEventListener("keydown", this._handleKeyDown), this._setupIntersectionObserver()
                    }
                }, {
                    key: "componentDidUpdate",
                    value: function(e, t) {
                        this.props.updateObserverWithChildren && e.children.length !== this.props.children.length && this._observeChildRefs(), this._handleSelectedItemChange(e), void 0 !== this.props.swipeablePaddingLeft && void 0 !== this.props.swipeablePaddingRight && this._list.current && this._list.current.setNativeProps ? this._list.current.setNativeProps({
                            style: {
                                scrollPadding: "0 ".concat(this.props.swipeablePaddingRight, "px 0 ").concat(this.props.swipeablePaddingLeft, "px")
                            }
                        }) : this._list.current && this._list.current.setNativeProps && this.state.buttonWidth !== t.buttonWidth && this._list.current.setNativeProps({
                            style: {
                                scrollPadding: "0 ".concat(this.state.buttonWidth, "px")
                            }
                        }), e.withGlobalKeyboardNavigation !== this.props.withGlobalKeyboardNavigation && (this.props.withGlobalKeyboardNavigation ? window.document.addEventListener("keydown", this._handleKeyDown) : window.document.removeEventListener("keydown", this._handleKeyDown))
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        this._observer && this._observer.disconnect(), window.document.removeEventListener("keydown", this._handleKeyDown)
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this.props.viewType,
                            t = this._getMemoizedBehavioralEventContext(e);
                        return e ? a.createElement(k.zt, {
                            behavioralEventContext: t
                        }, this._renderView()) : a.createElement(a.Fragment, null, this._renderView())
                    }
                }, {
                    key: "_renderView",
                    value: function() {
                        var e = this.props,
                            t = e.accessibilityLabel,
                            n = e.style;
                        return a.createElement(f.Z, {
                            accessibilityLabel: t,
                            accessibilityLiveRegion: "polite",
                            accessibilityRole: "navigation",
                            onKeyDown: this._handleKeyDown,
                            style: [D.root, n]
                        }, this._renderChildren())
                    }
                }, {
                    key: "_renderChildren",
                    value: function() {
                        var e = this,
                            t = this.props,
                            n = t.children,
                            i = t.childrenStyle,
                            o = t.isLocked,
                            r = this._getWithOffscreenItems(),
                            s = v.Z.getConstants().isRTL && (Z.ZP.isIOS() && Z.ZP.iOSVersion() < 14 || Z.ZP.isSafari() && Z.ZP.isMac() && Z.ZP.safariVersion() < 14);
                        return a.createElement(L.Z, {
                            interactiveStyles: null,
                            style: D.swipeableContainer
                        }, (function(t) {
                            var l = t.isFocused,
                                c = t.isFocusedWithin,
                                d = t.isHovered;
                            return a.createElement(a.Fragment, null, e._renderPreviousButton(d || l || c), a.createElement(f.Z, {
                                onLayout: e._handleSwipeableLayout,
                                style: [D.swipeable, !r && {
                                    overflow: "hidden"
                                }],
                                testID: "ScrollSnap-SwipeableList"
                            }, a.createElement(f.Z, {
                                accessibilityRole: "tablist",
                                ref: e._list,
                                style: [D.list, o ? D.notScrollable : D.scrollable, s && D.listSafariRtl, r && D.addRoomForOffscreenItems],
                                testID: "ScrollSnap-List"
                            }, n.map((function(t, n) {
                                return a.createElement(f.Z, {
                                    accessibilityRole: "presentation",
                                    key: n,
                                    onClick: e._handleItemClick(n),
                                    ref: e._setChildRef(n),
                                    style: [D.item, i]
                                }, t)
                            })))), e._renderNextButton(d || l || c))
                        }))
                    }
                }, {
                    key: "_renderPreviousButton",
                    value: function(e) {
                        var t = this.props,
                            n = t.dominantButtonColor,
                            i = t.isLocked,
                            o = t.navButtonStyle,
                            r = t.showNavButtonsOnHover,
                            s = t.withAddedNavButtonClickArea,
                            l = this.state.hidePrevButton || r && !e || i,
                            c = a.createElement(_.Z, {
                                style: [D.navButtonIcon, l && D.navButtonIconDisabled]
                            }),
                            d = s && [D.navClickableArea, D.navClickableAreaPrev];
                        return a.createElement(f.Z, {
                            onClick: this._handlePreviousClick,
                            style: [D.navButton, d, o, l && D.hiddenNavButton, !C.Z.reducedMotionEnabled && D.navButtonAnimation],
                            testID: "ScrollSnap-prevButtonWrapper"
                        }, a.createElement(x.ZP, {
                            accessibilityLabel: R,
                            behavioralEventContext: E,
                            disabled: l,
                            dominantColor: n,
                            icon: c,
                            onClick: this._handlePreviousClick,
                            onLayout: this._handleButtonLayout,
                            type: "onMediaDominantColorFilled"
                        }))
                    }
                }, {
                    key: "_renderNextButton",
                    value: function(e) {
                        var t = this.props,
                            n = t.dominantButtonColor,
                            i = t.isLocked,
                            o = t.navButtonStyle,
                            r = t.showNavButtonsOnHover,
                            s = t.withAddedNavButtonClickArea,
                            l = this.state.hideNextButton || r && !e || i,
                            c = a.createElement(g.Z, {
                                style: [D.navButtonIcon, l && D.navButtonIconDisabled]
                            }),
                            d = s && [D.navClickableArea, D.navClickableAreaNext];
                        return a.createElement(f.Z, {
                            onClick: this._handleNextClick,
                            style: [D.navButton, D.navButtonNext, d, o, l && D.hiddenNavButton, !C.Z.reducedMotionEnabled && D.navButtonAnimation],
                            testID: "ScrollSnap-nextButtonWrapper"
                        }, a.createElement(x.ZP, {
                            accessibilityLabel: P,
                            behavioralEventContext: S,
                            disabled: l,
                            dominantColor: n,
                            icon: c,
                            onClick: this._handleNextClick,
                            onLayout: this._handleButtonLayout,
                            type: "onMediaDominantColorFilled"
                        }))
                    }
                }, {
                    key: "_getWithOffscreenItems",
                    value: function() {
                        var e = this.props.withOffscreenItems;
                        return !Z.ZP.isSafari() && e
                    }
                }, {
                    key: "_focusItem",
                    value: function(e) {
                        var t = this._childRefs[e];
                        t && t.firstChild instanceof HTMLElement && (t.firstChild.focus({
                            preventScroll: !0
                        }), this._focusedTabIndex = e, this._goToItem(e))
                    }
                }, {
                    key: "_handleSelectedItemChange",
                    value: function(e) {
                        var t = this.props.visibleItemIndex;
                        "number" == typeof t && e.visibleItemIndex !== t && this._goToItem(t)
                    }
                }, {
                    key: "_goToInitialItem",
                    value: function(e) {
                        var t = this.props.isLocked;
                        if (this._childRefs[e] && !t) {
                            var n = this._childRefs[e];
                            if (n) {
                                var i, o = n.getBoundingClientRect().left,
                                    r = (null === (i = this._childRefs[0]) || void 0 === i ? void 0 : i.getBoundingClientRect().left) || 0;
                                this._scrollToOffset(o - r, !0)
                            }
                        }
                    }
                }, {
                    key: "_goToItem",
                    value: function(e) {
                        var t = this.props,
                            n = t.isLocked,
                            i = t.scrollToCenter;
                        if (this._childRefs[e] && !n) {
                            var o = this._childRefs[e];
                            if (o && o.scrollIntoView) try {
                                o.scrollIntoView({
                                    behavior: this._getScrollBehavior(),
                                    block: "nearest",
                                    inline: i ? "center" : "nearest"
                                })
                            } catch (e) {
                                o.scrollIntoView(!1)
                            }
                        }
                    }
                }, {
                    key: "_getScrollBehavior",
                    value: function(e) {
                        return C.Z.reducedMotionEnabled || e ? "auto" : "smooth"
                    }
                }, {
                    key: "handleNextSlide",
                    value: function(e) {
                        this._handleNextClick(e)
                    }
                }]), n
            }(a.Component);
            (0, u.Z)(A, "defaultProps", {
                children: [],
                dominantButtonColor: I.Z.theme.colors.alwaysBaseGray1100,
                isLocked: !1,
                scrollToCenter: !1,
                showNavButtonsOnHover: !0,
                withAddedNavButtonClickArea: !1,
                withGlobalKeyboardNavigation: !1,
                withOffscreenItems: !1,
                withWraparound: !0
            });
            var D = I.Z.create((function(e) {
                return {
                    root: {
                        alignItems: "center",
                        flexDirection: "row"
                    },
                    swipeable: {
                        display: "block",
                        flexGrow: 1,
                        flexShrink: 1,
                        height: "100%"
                    },
                    swipeableContainer: {
                        alignItems: "center",
                        flexGrow: 1,
                        flexBasis: "0%",
                        flexDirection: "row",
                        height: "100%"
                    },
                    list: {
                        flexGrow: 1,
                        flexDirection: "row",
                        flexShrink: 1,
                        flexWrap: "nowrap",
                        height: "100%",
                        scrollSnapType: "x mandatory",
                        scrollbarWidth: "none",
                        transform: [{
                            translate3d: "0,0,0"
                        }],
                        overflowY: "hidden"
                    },
                    scrollable: {
                        overflowX: "auto"
                    },
                    notScrollable: {
                        overflowX: "hidden"
                    },
                    listSafariRtl: {
                        scrollSnapType: "none"
                    },
                    item: {
                        paddingHorizontal: "0",
                        scrollSnapAlign: "start"
                    },
                    navButton: {
                        marginHorizontal: e.spaces.space4,
                        position: "absolute",
                        zIndex: 1
                    },
                    hiddenNavButton: {
                        opacity: 0,
                        pointerEvents: "none"
                    },
                    navButtonNext: {
                        end: 0
                    },
                    navButtonIcon: {
                        color: e.colors.white
                    },
                    navButtonIconDisabled: {
                        color: e.colors.gray200
                    },
                    navButtonAnimation: {
                        transitionProperty: "opacity",
                        transitionDuration: "0.2s"
                    },
                    navClickableArea: {
                        justifyContent: "center",
                        height: "50%",
                        width: "auto",
                        zIndex: 1
                    },
                    navClickableAreaNext: {
                        paddingStart: e.spaces.space12
                    },
                    navClickableAreaPrev: {
                        paddingEnd: e.spaces.space12
                    },
                    addRoomForOffscreenItems: {
                        marginStart: "-100%",
                        marginEnd: "-100%",
                        paddingStart: "100%",
                        paddingEnd: "100%"
                    }
                }
            }));
            const M = A;
            var H = n(51572);
            const K = a.createContext({
                playbackPriority: H.W.NORMAL
            });
            var G = ["children"];
            const F = a.forwardRef((function(e, t) {
                var n = e.children,
                    i = void 0 === n ? [] : n,
                    s = (0, r.Z)(e, G),
                    l = i.map((function(e, t) {
                        return a.createElement(K.Provider, {
                            key: t,
                            value: {
                                playbackPriority: t === s.visibleItemIndex ? H.W.NORMAL : H.W.INELIGIBLE
                            }
                        }, e)
                    }));
                return a.createElement(M, (0, o.Z)({}, s, {
                    children: l,
                    ref: t,
                    viewType: "carousel"
                }), l)
            }))
        },
        47098: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => o
            });
            var i = n(90447);
            const o = {
                hexToCss: i.a7,
                hexToRgba: i.FP,
                rgbaToCss: i.rb,
                rgbToHex: i.vq
            }
        },
        7064: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => r
            });
            var i = n(20296),
                o = n.n(i);
            const r = function(e, t, n) {
                return o()(e, t, n)
            }
        },
        44048: (e, t, n) => {
            n(82109)({
                target: "Number",
                stat: !0
            }, {
                isNaN: function(e) {
                    return e != e
                }
            })
        }
    }
]);