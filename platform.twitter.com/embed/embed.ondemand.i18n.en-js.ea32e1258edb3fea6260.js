"use strict";
(self.webpackChunkembed_iframe = self.webpackChunkembed_iframe || []).push([
    [3478], {
        39656: (e, t, o) => {
            var r = o(73653)._register("en");

            function a(e, t, o) {
                return "one" == (r = e, a = !String(r).split(".")[1], 1 == r && a ? "one" : "other") ? t : o;
                var r, a
            }
            r("ib52c63b", (function(e) {
                return "Read " + e.formattedCount + " repl" + a(e.count, "y", "ies")
            })), r("jb2472b4", "Read more on Twitter"), r("d63ac4cc", "Explore what's happening on Twitter"), r("a7fb9c0c", "Follow"), r("c5218b0c", "View profile on Twitter"), r("g1f2693c", "See the latest Tweet"), r("ifd14e5a", "Last edited"), r("e6d09cf4", "This is the latest version of this Tweet."), r("i8622c1c", "Visit this Tweet on Twitter"), r("e06ab25a", "Watch on Twitter"), r("je045ea8", "Continue watching on Twitter"), r("ca45c920", "Watch more on Twitter"), r("fb85f798", "Watch more"), r("eb3b60b5", (function(e) {
                return "View video on Twitter with " + e.formattedNumVideos + " view" + a(e.numVideos, "", "s")
            })), r("c7d0c936", "View replies"), r("a316f872", "Image"), r("g7aba472", "View Tweet"), r("daa154a0", "The following media includes potentially sensitive content."), r("fd2ac40a", "Embedded video"), r("ffc14326", "View video on Twitter"), r("j6fd91b6", "View on Twitter"), r("c5005824", "Twitter Ads info and privacy"), r("df2ba244", "Read the full conversation on Twitter"), r("ac7bfc92", "Like this Tweet"), r("d2f3904e", "Reply to this Tweet"), r("b0af8538", "Share this Tweet"), r("j95993dd", (function(e) {
                return "Like. This Tweet has " + e.formattedCount + " like" + a(e.count, "", "s")
            })), r("jd7337e0", "See the latest COVID-19 information on Twitter"), r("adade5fe", "See latest COVID-19 info"), r("gc112aae", "Reply to this Tweet on Twitter"), r("ab7c2dea", "Reply"), r("i55ea7bc", "Share"), r("a9d3434a", "Copy link"), r("a2270044", "Copy link to Tweet"), r("e3f4426c", "Copied!");
            var n = o(51989);
            o(17338), o(16698), o(42863);
            var i = n._numberRound,
                h = n._numberFormatterFn,
                d = n._pluralGeneratorFn,
                c = n._dateToPartsFormatterFn,
                s = n._dateFormatterFn;
            n.a50324716 = h(["", , 1, 0, 1, , , , 3, , "", "#,##0.###", "-#,##0.###", "-", "", i(), "∞", "NaN", {
                ".": ".",
                ",": ",",
                "%": "%",
                "+": "+",
                "-": "-",
                E: "E",
                "‰": "‰"
            }, , {
                3: {
                    one: "0K",
                    other: "0K"
                },
                4: {
                    one: "00K",
                    other: "00K"
                },
                5: {
                    one: "000K",
                    other: "000K"
                },
                6: {
                    one: "0M",
                    other: "0M"
                },
                7: {
                    one: "00M",
                    other: "00M"
                },
                8: {
                    one: "000M",
                    other: "000M"
                },
                9: {
                    one: "0B",
                    other: "0B"
                },
                10: {
                    one: "00B",
                    other: "00B"
                },
                11: {
                    one: "000B",
                    other: "000B"
                },
                12: {
                    one: "0T",
                    other: "0T"
                },
                13: {
                    one: "00T",
                    other: "00T"
                },
                14: {
                    one: "000T",
                    other: "000T"
                },
                maxExponent: 14
            }], n("en").pluralGenerator({})), n.a1378886668 = h(["", , 1, 0, 0, , , , , , "", "0", "-0", "-", "", i(), "∞", "NaN", {
                ".": ".",
                ",": ",",
                "%": "%",
                "+": "+",
                "-": "-",
                E: "E",
                "‰": "‰"
            }]), n.b203855544 = h(["", , 2, 0, 0, , , , , , "", "00", "-00", "-", "", i(), "∞", "NaN", {
                ".": ".",
                ",": ",",
                "%": "%",
                "+": "+",
                "-": "-",
                E: "E",
                "‰": "‰"
            }]), n.a527220190 = h(["", , 1, 0, 1, , , , 3, , "", "#,##0.###", "-#,##0.###", "-", "", i("truncate"), "∞", "NaN", {
                ".": ".",
                ",": ",",
                "%": "%",
                "+": "+",
                "-": "-",
                E: "E",
                "‰": "‰"
            }, , {
                3: {
                    one: "0K",
                    other: "0K"
                },
                4: {
                    one: "00K",
                    other: "00K"
                },
                5: {
                    one: "000K",
                    other: "000K"
                },
                6: {
                    one: "0M",
                    other: "0M"
                },
                7: {
                    one: "00M",
                    other: "00M"
                },
                8: {
                    one: "000M",
                    other: "000M"
                },
                9: {
                    one: "0B",
                    other: "0B"
                },
                10: {
                    one: "00B",
                    other: "00B"
                },
                11: {
                    one: "000B",
                    other: "000B"
                },
                12: {
                    one: "0T",
                    other: "0T"
                },
                13: {
                    one: "00T",
                    other: "00T"
                },
                14: {
                    one: "000T",
                    other: "000T"
                },
                maxExponent: 14
            }], n("en").pluralGenerator({})), n.a1662346136 = d((function(e) {
                var t = !String(e).split(".")[1];
                return 1 == e && t ? "one" : "other"
            })), n.a64793641 = c({
                1: n("en").numberFormatter({
                    raw: "0"
                })
            }, {
                pattern: "MMM d, y",
                timeSeparator: ":",
                months: {
                    M: {
                        3: {
                            1: "Jan",
                            2: "Feb",
                            3: "Mar",
                            4: "Apr",
                            5: "May",
                            6: "Jun",
                            7: "Jul",
                            8: "Aug",
                            9: "Sep",
                            10: "Oct",
                            11: "Nov",
                            12: "Dec"
                        }
                    }
                }
            }), n.b129255162 = c({
                1: n("en").numberFormatter({
                    raw: "0"
                }),
                2: n("en").numberFormatter({
                    raw: "00"
                })
            }, {
                pattern: "h:mm a",
                timeSeparator: ":",
                dayPeriods: {
                    am: "AM",
                    pm: "PM"
                }
            }), n.a816076018 = s(n("en").dateToPartsFormatter({
                skeleton: "yMMMd"
            })), n.b965415715 = s(n("en").dateToPartsFormatter({
                skeleton: "hm"
            })), r("f9e9679f", n.a50324716), r("jade381b", n.a816076018), r("d725a289", n.b965415715), r("d58baa7f", n.a527220190)
        }
    }
]);