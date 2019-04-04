!function (a, c) {
    function h() {
        var c = y.getBoundingClientRect().width;
        c / A > 750 && (c = 750 * A);
        var h = c / 10;
        y.style.fontSize = h + "px",
            w.rem = a.rem = h
    }
    var v, g = a.document, y = g.documentElement, A = 1, w = c.flexible || (c.flexible = {});
    a.addEventListener("resize", function () {
        clearTimeout(v),
            v = setTimeout(h, 300)
    }, !1),
        a.addEventListener("pageshow", function (e) {
            e.persisted && (clearTimeout(v),
                v = setTimeout(h, 300))
        }, !1),
        "complete" === g.readyState ? g.body.style.fontSize = 12 * A + "px" : g.addEventListener("DOMContentLoaded", function () {
            g.body.style.fontSize = 12 * A + "px"
        }, !1),
        h(),
        w.dpr = a.dpr = A,
        w.refreshRem = h,
        w.rem2px = function (d) {
            var a = parseFloat(d) * this.rem;
            return "string" == typeof d && d.match(/rem$/) && (a += "px"),
                a
        },
        w.px2rem = function (d) {
            var a = parseFloat(d) / this.rem;
            return "string" == typeof d && d.match(/px$/) && (a += "rem"),
                a
        }
}(window, window.lib || (window.lib = {}));
