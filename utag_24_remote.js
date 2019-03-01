//tealium universal tag - utag.24 ut4.0.201902271903, Copyright 2019 Tealium.com Inc. All Rights Reserved.
var s = new AppMeasurement();
s.account = "mazdatealiumdev";
s.trackDownloadLinks = true;
s.trackExternalLinks = true;
s.trackInlineStats = true;
s.linkInternalFilters = "javascript:,tel:,mailto:,mazdausa.com,mymazda.com,devteamcr.com";
s.linkLeaveQueryString = false;
s.linkTrackVars = "None";
s.linkTrackEvents = "None";
s.usePlugins = false;
s.currencyCode = "USD";
s.visitorNamespace = "";
s.trackingServer = "t.mazdausa.com";
s.trackingServerSecure = "st.mazdausa.com";
s.charSet = "UTF-8";
s.expectSupplementalData = true;
s.debugTracking = utag.cfg.utagdb;
function AppMeasurement() {
    var a = this;
    a.version = "1.8.0";
    var h = window;
    h.s_c_in || (h.s_c_il = [],
    h.s_c_in = 0);
    a._il = h.s_c_il;
    a._in = h.s_c_in;
    a._il[a._in] = a;
    h.s_c_in++;
    a._c = "s_c";
    var n = h.AppMeasurement.Ob;
    n || (n = null);
    var p = h, l, r;
    try {
        for (l = p.parent,
        r = p.location; l && l.location && r && "" + l.location != "" + r && p.location && "" + l.location != "" + p.location && l.location.host == r.host; )
            p = l,
            l = p.parent
    } catch (s) {}
    a.P = function(a) {
        try {
            console.log(a)
        } catch (b) {}
    }
    ;
    a.La = function(a) {
        return "" + parseInt(a) == "" + a
    }
    ;
    a.replace = function(a, b, d) {
        return !a || 0 > a.indexOf(b) ? a : a.split(b).join(d)
    }
    ;
    a.escape = function(c) {
        var b, d;
        if (!c)
            return c;
        c = encodeURIComponent(c);
        for (b = 0; 7 > b; b++)
            d = "+~!*()'".substring(b, b + 1),
            0 <= c.indexOf(d) && (c = a.replace(c, d, "%" + d.charCodeAt(0).toString(16).toUpperCase()));
        return c
    }
    ;
    a.unescape = function(c) {
        if (!c)
            return c;
        c = 0 <= c.indexOf("+") ? a.replace(c, "+", " ") : c;
        try {
            return decodeURIComponent(c)
        } catch (b) {}
        return unescape(c)
    }
    ;
    a.vb = function() {
        var c = h.location.hostname, b = a.fpCookieDomainPeriods, d;
        b || (b = a.cookieDomainPeriods);
        if (c && !a.cookieDomain && !/^[0-9.]+$/.test(c) && (b = b ? parseInt(b) : 2,
        b = 2 < b ? b : 2,
        d = c.lastIndexOf("."),
        0 <= d)) {
            for (; 0 <= d && 1 < b; )
                d = c.lastIndexOf(".", d - 1),
                b--;
            a.cookieDomain = 0 < d ? c.substring(d) : c
        }
        return a.cookieDomain
    }
    ;
    a.c_r = a.cookieRead = function(c) {
        c = a.escape(c);
        var b = " " + a.d.cookie
          , d = b.indexOf(" " + c + "=")
          , f = 0 > d ? d : b.indexOf(";", d);
        c = 0 > d ? "" : a.unescape(b.substring(d + 2 + c.length, 0 > f ? b.length : f));
        return "[[B]]" != c ? c : ""
    }
    ;
    a.c_w = a.cookieWrite = function(c, b, d) {
        var f = a.vb(), e = a.cookieLifetime, g;
        b = "" + b;
        e = e ? ("" + e).toUpperCase() : "";
        d && "SESSION" != e && "NONE" != e && ((g = "" != b ? parseInt(e ? e : 0) : -60) ? (d = new Date,
        d.setTime(d.getTime() + 1E3 * g)) : 1 == d && (d = new Date,
        g = d.getYear(),
        d.setYear(g + 5 + (1900 > g ? 1900 : 0))));
        return c && "NONE" != e ? (a.d.cookie = a.escape(c) + "=" + a.escape("" != b ? b : "[[B]]") + "; path=/;" + (d && "SESSION" != e ? " expires=" + d.toGMTString() + ";" : "") + (f ? " domain=" + f + ";" : ""),
        a.cookieRead(c) == b) : 0
    }
    ;
    a.K = [];
    a.ia = function(c, b, d) {
        if (a.Ea)
            return 0;
        a.maxDelay || (a.maxDelay = 250);
        var f = 0
          , e = (new Date).getTime() + a.maxDelay
          , g = a.d.visibilityState
          , k = ["webkitvisibilitychange", "visibilitychange"];
        g || (g = a.d.webkitVisibilityState);
        if (g && "prerender" == g) {
            if (!a.ja)
                for (a.ja = 1,
                d = 0; d < k.length; d++)
                    a.d.addEventListener(k[d], function() {
                        var c = a.d.visibilityState;
                        c || (c = a.d.webkitVisibilityState);
                        "visible" == c && (a.ja = 0,
                        a.delayReady())
                    });
            f = 1;
            e = 0
        } else
            d || a.p("_d") && (f = 1);
        f && (a.K.push({
            m: c,
            a: b,
            t: e
        }),
        a.ja || setTimeout(a.delayReady, a.maxDelay));
        return f
    }
    ;
    a.delayReady = function() {
        var c = (new Date).getTime(), b = 0, d;
        for (a.p("_d") ? b = 1 : a.xa(); 0 < a.K.length; ) {
            d = a.K.shift();
            if (b && !d.t && d.t > c) {
                a.K.unshift(d);
                setTimeout(a.delayReady, parseInt(a.maxDelay / 2));
                break
            }
            a.Ea = 1;
            a[d.m].apply(a, d.a);
            a.Ea = 0
        }
    }
    ;
    a.setAccount = a.sa = function(c) {
        var b, d;
        if (!a.ia("setAccount", arguments))
            if (a.account = c,
            a.allAccounts)
                for (b = a.allAccounts.concat(c.split(",")),
                a.allAccounts = [],
                b.sort(),
                d = 0; d < b.length; d++)
                    0 != d && b[d - 1] == b[d] || a.allAccounts.push(b[d]);
            else
                a.allAccounts = c.split(",")
    }
    ;
    a.foreachVar = function(c, b) {
        var d, f, e, g, k = "";
        e = f = "";
        if (a.lightProfileID)
            d = a.O,
            (k = a.lightTrackVars) && (k = "," + k + "," + a.na.join(",") + ",");
        else {
            d = a.g;
            if (a.pe || a.linkType)
                k = a.linkTrackVars,
                f = a.linkTrackEvents,
                a.pe && (e = a.pe.substring(0, 1).toUpperCase() + a.pe.substring(1),
                a[e] && (k = a[e].Mb,
                f = a[e].Lb));
            k && (k = "," + k + "," + a.G.join(",") + ",");
            f && k && (k += ",events,")
        }
        b && (b = "," + b + ",");
        for (f = 0; f < d.length; f++)
            e = d[f],
            (g = a[e]) && (!k || 0 <= k.indexOf("," + e + ",")) && (!b || 0 <= b.indexOf("," + e + ",")) && c(e, g)
    }
    ;
    a.r = function(c, b, d, f, e) {
        var g = "", k, m, h, t, l = 0;
        "contextData" == c && (c = "c");
        if (b) {
            for (k in b)
                if (!(Object.prototype[k] || e && k.substring(0, e.length) != e) && b[k] && (!d || 0 <= d.indexOf("," + (f ? f + "." : "") + k + ","))) {
                    h = !1;
                    if (l)
                        for (m = 0; m < l.length; m++)
                            k.substring(0, l[m].length) == l[m] && (h = !0);
                    if (!h && ("" == g && (g += "&" + c + "."),
                    m = b[k],
                    e && (k = k.substring(e.length)),
                    0 < k.length))
                        if (h = k.indexOf("."),
                        0 < h)
                            m = k.substring(0, h),
                            h = (e ? e : "") + m + ".",
                            l || (l = []),
                            l.push(h),
                            g += a.r(m, b, d, f, h);
                        else if ("boolean" == typeof m && (m = m ? "true" : "false"),
                        m) {
                            if ("retrieveLightData" == f && 0 > e.indexOf(".contextData."))
                                switch (h = k.substring(0, 4),
                                t = k.substring(4),
                                k) {
                                case "transactionID":
                                    k = "xact";
                                    break;
                                case "channel":
                                    k = "ch";
                                    break;
                                case "campaign":
                                    k = "v0";
                                    break;
                                default:
                                    a.La(t) && ("prop" == h ? k = "c" + t : "eVar" == h ? k = "v" + t : "list" == h ? k = "l" + t : "hier" == h && (k = "h" + t,
                                    m = m.substring(0, 255)))
                                }
                            g += "&" + a.escape(k) + "=" + a.escape(m)
                        }
                }
            "" != g && (g += "&." + c)
        }
        return g
    }
    ;
    a.usePostbacks = 0;
    a.yb = function() {
        var c = "", b, d, f, e, g, k, m, h, l = "", p = "", q = e = "";
        if (a.lightProfileID)
            b = a.O,
            (l = a.lightTrackVars) && (l = "," + l + "," + a.na.join(",") + ",");
        else {
            b = a.g;
            if (a.pe || a.linkType)
                l = a.linkTrackVars,
                p = a.linkTrackEvents,
                a.pe && (e = a.pe.substring(0, 1).toUpperCase() + a.pe.substring(1),
                a[e] && (l = a[e].Mb,
                p = a[e].Lb));
            l && (l = "," + l + "," + a.G.join(",") + ",");
            p && (p = "," + p + ",",
            l && (l += ",events,"));
            a.events2 && (q += ("" != q ? "," : "") + a.events2)
        }
        if (a.visitor && a.visitor.getCustomerIDs) {
            e = n;
            if (g = a.visitor.getCustomerIDs())
                for (d in g)
                    Object.prototype[d] || (f = g[d],
                    "object" == typeof f && (e || (e = {}),
                    f.id && (e[d + ".id"] = f.id),
                    f.authState && (e[d + ".as"] = f.authState)));
            e && (c += a.r("cid", e))
        }
        a.AudienceManagement && a.AudienceManagement.isReady() && (c += a.r("d", a.AudienceManagement.getEventCallConfigParams()));
        for (d = 0; d < b.length; d++) {
            e = b[d];
            g = a[e];
            f = e.substring(0, 4);
            k = e.substring(4);
            !g && "events" == e && q && (g = q,
            q = "");
            if (g && (!l || 0 <= l.indexOf("," + e + ","))) {
                switch (e) {
                case "supplementalDataID":
                    e = "sdid";
                    break;
                case "timestamp":
                    e = "ts";
                    break;
                case "dynamicVariablePrefix":
                    e = "D";
                    break;
                case "visitorID":
                    e = "vid";
                    break;
                case "marketingCloudVisitorID":
                    e = "mid";
                    break;
                case "analyticsVisitorID":
                    e = "aid";
                    break;
                case "audienceManagerLocationHint":
                    e = "aamlh";
                    break;
                case "audienceManagerBlob":
                    e = "aamb";
                    break;
                case "authState":
                    e = "as";
                    break;
                case "pageURL":
                    e = "g";
                    255 < g.length && (a.pageURLRest = g.substring(255),
                    g = g.substring(0, 255));
                    break;
                case "pageURLRest":
                    e = "-g";
                    break;
                case "referrer":
                    e = "r";
                    break;
                case "vmk":
                case "visitorMigrationKey":
                    e = "vmt";
                    break;
                case "visitorMigrationServer":
                    e = "vmf";
                    a.ssl && a.visitorMigrationServerSecure && (g = "");
                    break;
                case "visitorMigrationServerSecure":
                    e = "vmf";
                    !a.ssl && a.visitorMigrationServer && (g = "");
                    break;
                case "charSet":
                    e = "ce";
                    break;
                case "visitorNamespace":
                    e = "ns";
                    break;
                case "cookieDomainPeriods":
                    e = "cdp";
                    break;
                case "cookieLifetime":
                    e = "cl";
                    break;
                case "variableProvider":
                    e = "vvp";
                    break;
                case "currencyCode":
                    e = "cc";
                    break;
                case "channel":
                    e = "ch";
                    break;
                case "transactionID":
                    e = "xact";
                    break;
                case "campaign":
                    e = "v0";
                    break;
                case "latitude":
                    e = "lat";
                    break;
                case "longitude":
                    e = "lon";
                    break;
                case "resolution":
                    e = "s";
                    break;
                case "colorDepth":
                    e = "c";
                    break;
                case "javascriptVersion":
                    e = "j";
                    break;
                case "javaEnabled":
                    e = "v";
                    break;
                case "cookiesEnabled":
                    e = "k";
                    break;
                case "browserWidth":
                    e = "bw";
                    break;
                case "browserHeight":
                    e = "bh";
                    break;
                case "connectionType":
                    e = "ct";
                    break;
                case "homepage":
                    e = "hp";
                    break;
                case "events":
                    q && (g += ("" != g ? "," : "") + q);
                    if (p)
                        for (k = g.split(","),
                        g = "",
                        f = 0; f < k.length; f++)
                            m = k[f],
                            h = m.indexOf("="),
                            0 <= h && (m = m.substring(0, h)),
                            h = m.indexOf(":"),
                            0 <= h && (m = m.substring(0, h)),
                            0 <= p.indexOf("," + m + ",") && (g += (g ? "," : "") + k[f]);
                    break;
                case "events2":
                    g = "";
                    break;
                case "contextData":
                    c += a.r("c", a[e], l, e);
                    g = "";
                    break;
                case "lightProfileID":
                    e = "mtp";
                    break;
                case "lightStoreForSeconds":
                    e = "mtss";
                    a.lightProfileID || (g = "");
                    break;
                case "lightIncrementBy":
                    e = "mti";
                    a.lightProfileID || (g = "");
                    break;
                case "retrieveLightProfiles":
                    e = "mtsr";
                    break;
                case "deleteLightProfiles":
                    e = "mtsd";
                    break;
                case "retrieveLightData":
                    a.retrieveLightProfiles && (c += a.r("mts", a[e], l, e));
                    g = "";
                    break;
                default:
                    a.La(k) && ("prop" == f ? e = "c" + k : "eVar" == f ? e = "v" + k : "list" == f ? e = "l" + k : "hier" == f && (e = "h" + k,
                    g = g.substring(0, 255)))
                }
                g && (c += "&" + e + "=" + ("pev" != e.substring(0, 3) ? a.escape(g) : g))
            }
            "pev3" == e && a.e && (c += a.e)
        }
        return c
    }
    ;
    a.D = function(a) {
        var b = a.tagName;
        if ("undefined" != "" + a.Rb || "undefined" != "" + a.Hb && "HTML" != ("" + a.Hb).toUpperCase())
            return "";
        b = b && b.toUpperCase ? b.toUpperCase() : "";
        "SHAPE" == b && (b = "");
        b && (("INPUT" == b || "BUTTON" == b) && a.type && a.type.toUpperCase ? b = a.type.toUpperCase() : !b && a.href && (b = "A"));
        return b
    }
    ;
    a.Ha = function(a) {
        var b = h.location, d = a.href ? a.href : "", f, e, g;
        f = d.indexOf(":");
        e = d.indexOf("?");
        g = d.indexOf("/");
        d && (0 > f || 0 <= e && f > e || 0 <= g && f > g) && (e = a.protocol && 1 < a.protocol.length ? a.protocol : b.protocol ? b.protocol : "",
        f = b.pathname.lastIndexOf("/"),
        d = (e ? e + "//" : "") + (a.host ? a.host : b.host ? b.host : "") + ("/" != d.substring(0, 1) ? b.pathname.substring(0, 0 > f ? 0 : f) + "/" : "") + d);
        return d
    }
    ;
    a.L = function(c) {
        var b = a.D(c), d, f, e = "", g = 0;
        return b && (d = c.protocol,
        f = c.onclick,
        !c.href || "A" != b && "AREA" != b || f && d && !(0 > d.toLowerCase().indexOf("javascript")) ? f ? (e = a.replace(a.replace(a.replace(a.replace("" + f, "\r", ""), "\n", ""), "\t", ""), " ", ""),
        g = 2) : "INPUT" == b || "SUBMIT" == b ? (c.value ? e = c.value : c.innerText ? e = c.innerText : c.textContent && (e = c.textContent),
        g = 3) : "IMAGE" == b && c.src && (e = c.src) : e = a.Ha(c),
        e) ? {
            id: e.substring(0, 100),
            type: g
        } : 0
    }
    ;
    a.Pb = function(c) {
        for (var b = a.D(c), d = a.L(c); c && !d && "BODY" != b; )
            if (c = c.parentElement ? c.parentElement : c.parentNode)
                b = a.D(c),
                d = a.L(c);
        d && "BODY" != b || (c = 0);
        c && (b = c.onclick ? "" + c.onclick : "",
        0 <= b.indexOf(".tl(") || 0 <= b.indexOf(".trackLink(")) && (c = 0);
        return c
    }
    ;
    a.Gb = function() {
        var c, b, d = a.linkObject, f = a.linkType, e = a.linkURL, g, k;
        a.oa = 1;
        d || (a.oa = 0,
        d = a.clickObject);
        if (d) {
            c = a.D(d);
            for (b = a.L(d); d && !b && "BODY" != c; )
                if (d = d.parentElement ? d.parentElement : d.parentNode)
                    c = a.D(d),
                    b = a.L(d);
            b && "BODY" != c || (d = 0);
            if (d && !a.linkObject) {
                var m = d.onclick ? "" + d.onclick : "";
                if (0 <= m.indexOf(".tl(") || 0 <= m.indexOf(".trackLink("))
                    d = 0
            }
        } else
            a.oa = 1;
        !e && d && (e = a.Ha(d));
        e && !a.linkLeaveQueryString && (g = e.indexOf("?"),
        0 <= g && (e = e.substring(0, g)));
        if (!f && e) {
            var l = 0, p = 0, n;
            if (a.trackDownloadLinks && a.linkDownloadFileTypes)
                for (m = e.toLowerCase(),
                g = m.indexOf("?"),
                k = m.indexOf("#"),
                0 <= g ? 0 <= k && k < g && (g = k) : g = k,
                0 <= g && (m = m.substring(0, g)),
                g = a.linkDownloadFileTypes.toLowerCase().split(","),
                k = 0; k < g.length; k++)
                    (n = g[k]) && m.substring(m.length - (n.length + 1)) == "." + n && (f = "d");
            if (a.trackExternalLinks && !f && (m = e.toLowerCase(),
            a.Ka(m) && (a.linkInternalFilters || (a.linkInternalFilters = h.location.hostname),
            g = 0,
            a.linkExternalFilters ? (g = a.linkExternalFilters.toLowerCase().split(","),
            l = 1) : a.linkInternalFilters && (g = a.linkInternalFilters.toLowerCase().split(",")),
            g))) {
                for (k = 0; k < g.length; k++)
                    n = g[k],
                    0 <= m.indexOf(n) && (p = 1);
                p ? l && (f = "e") : l || (f = "e")
            }
        }
        a.linkObject = d;
        a.linkURL = e;
        a.linkType = f;
        if (a.trackClickMap || a.trackInlineStats)
            a.e = "",
            d && (f = a.pageName,
            e = 1,
            d = d.sourceIndex,
            f || (f = a.pageURL,
            e = 0),
            h.s_objectID && (b.id = h.s_objectID,
            d = b.type = 1),
            f && b && b.id && c && (a.e = "&pid=" + a.escape(f.substring(0, 255)) + (e ? "&pidt=" + e : "") + "&oid=" + a.escape(b.id.substring(0, 100)) + (b.type ? "&oidt=" + b.type : "") + "&ot=" + c + (d ? "&oi=" + d : "")))
    }
    ;
    a.zb = function() {
        var c = a.oa
          , b = a.linkType
          , d = a.linkURL
          , f = a.linkName;
        b && (d || f) && (b = b.toLowerCase(),
        "d" != b && "e" != b && (b = "o"),
        a.pe = "lnk_" + b,
        a.pev1 = d ? a.escape(d) : "",
        a.pev2 = f ? a.escape(f) : "",
        c = 1);
        a.abort && (c = 0);
        if (a.trackClickMap || a.trackInlineStats || a.ActivityMap) {
            var b = {}, d = 0, e = a.cookieRead("s_sq"), g = e ? e.split("&") : 0, k, m, h, e = 0;
            if (g)
                for (k = 0; k < g.length; k++)
                    m = g[k].split("="),
                    f = a.unescape(m[0]).split(","),
                    m = a.unescape(m[1]),
                    b[m] = f;
            f = a.account.split(",");
            k = {};
            for (h in a.contextData)
                h && !Object.prototype[h] && "a.activitymap." == h.substring(0, 14) && (k[h] = a.contextData[h],
                a.contextData[h] = "");
            a.e = a.r("c", k) + (a.e ? a.e : "");
            if (c || a.e) {
                c && !a.e && (e = 1);
                for (m in b)
                    if (!Object.prototype[m])
                        for (h = 0; h < f.length; h++)
                            for (e && (g = b[m].join(","),
                            g == a.account && (a.e += ("&" != m.charAt(0) ? "&" : "") + m,
                            b[m] = [],
                            d = 1)),
                            k = 0; k < b[m].length; k++)
                                g = b[m][k],
                                g == f[h] && (e && (a.e += "&u=" + a.escape(g) + ("&" != m.charAt(0) ? "&" : "") + m + "&u=0"),
                                b[m].splice(k, 1),
                                d = 1);
                c || (d = 1);
                if (d) {
                    e = "";
                    k = 2;
                    !c && a.e && (e = a.escape(f.join(",")) + "=" + a.escape(a.e),
                    k = 1);
                    for (m in b)
                        !Object.prototype[m] && 0 < k && 0 < b[m].length && (e += (e ? "&" : "") + a.escape(b[m].join(",")) + "=" + a.escape(m),
                        k--);
                    a.cookieWrite("s_sq", e)
                }
            }
        }
        return c
    }
    ;
    a.Ab = function() {
        if (!a.Kb) {
            var c = new Date, b = p.location, d, f, e = f = d = "", g = "", k = "", h = "1.2", l = a.cookieWrite("s_cc", "true", 0) ? "Y" : "N", n = "", q = "";
            if (c.setUTCDate && (h = "1.3",
            (0).toPrecision && (h = "1.5",
            c = [],
            c.forEach))) {
                h = "1.6";
                f = 0;
                d = {};
                try {
                    f = new Iterator(d),
                    f.next && (h = "1.7",
                    c.reduce && (h = "1.8",
                    h.trim && (h = "1.8.1",
                    Date.parse && (h = "1.8.2",
                    Object.create && (h = "1.8.5")))))
                } catch (r) {}
            }
            d = screen.width + "x" + screen.height;
            e = navigator.javaEnabled() ? "Y" : "N";
            f = screen.pixelDepth ? screen.pixelDepth : screen.colorDepth;
            g = a.w.innerWidth ? a.w.innerWidth : a.d.documentElement.offsetWidth;
            k = a.w.innerHeight ? a.w.innerHeight : a.d.documentElement.offsetHeight;
            try {
                a.b.addBehavior("#default#homePage"),
                n = a.b.Qb(b) ? "Y" : "N"
            } catch (s) {}
            try {
                a.b.addBehavior("#default#clientCaps"),
                q = a.b.connectionType
            } catch (u) {}
            a.resolution = d;
            a.colorDepth = f;
            a.javascriptVersion = h;
            a.javaEnabled = e;
            a.cookiesEnabled = l;
            a.browserWidth = g;
            a.browserHeight = k;
            a.connectionType = q;
            a.homepage = n;
            a.Kb = 1
        }
    }
    ;
    a.Q = {};
    a.loadModule = function(c, b) {
        var d = a.Q[c];
        if (!d) {
            d = h["AppMeasurement_Module_" + c] ? new h["AppMeasurement_Module_" + c](a) : {};
            a.Q[c] = a[c] = d;
            d.cb = function() {
                return d.hb
            }
            ;
            d.ib = function(b) {
                if (d.hb = b)
                    a[c + "_onLoad"] = b,
                    a.ia(c + "_onLoad", [a, d], 1) || b(a, d)
            }
            ;
            try {
                Object.defineProperty ? Object.defineProperty(d, "onLoad", {
                    get: d.cb,
                    set: d.ib
                }) : d._olc = 1
            } catch (f) {
                d._olc = 1
            }
        }
        b && (a[c + "_onLoad"] = b,
        a.ia(c + "_onLoad", [a, d], 1) || b(a, d))
    }
    ;
    a.p = function(c) {
        var b, d;
        for (b in a.Q)
            if (!Object.prototype[b] && (d = a.Q[b]) && (d._olc && d.onLoad && (d._olc = 0,
            d.onLoad(a, d)),
            d[c] && d[c]()))
                return 1;
        return 0
    }
    ;
    a.Cb = function() {
        var c = Math.floor(1E13 * Math.random())
          , b = a.visitorSampling
          , d = a.visitorSamplingGroup
          , d = "s_vsn_" + (a.visitorNamespace ? a.visitorNamespace : a.account) + (d ? "_" + d : "")
          , f = a.cookieRead(d);
        if (b) {
            b *= 100;
            f && (f = parseInt(f));
            if (!f) {
                if (!a.cookieWrite(d, c))
                    return 0;
                f = c
            }
            if (f % 1E4 > b)
                return 0
        }
        return 1
    }
    ;
    a.R = function(c, b) {
        var d, f, e, g, k, h;
        for (d = 0; 2 > d; d++)
            for (f = 0 < d ? a.Aa : a.g,
            e = 0; e < f.length; e++)
                if (g = f[e],
                (k = c[g]) || c["!" + g]) {
                    if (!b && ("contextData" == g || "retrieveLightData" == g) && a[g])
                        for (h in a[g])
                            k[h] || (k[h] = a[g][h]);
                    a[g] = k
                }
    }
    ;
    a.Ua = function(c, b) {
        var d, f, e, g;
        for (d = 0; 2 > d; d++)
            for (f = 0 < d ? a.Aa : a.g,
            e = 0; e < f.length; e++)
                g = f[e],
                c[g] = a[g],
                b || c[g] || (c["!" + g] = 1)
    }
    ;
    a.ub = function(a) {
        var b, d, f, e, g, k = 0, h, l = "", n = "";
        if (a && 255 < a.length && (b = "" + a,
        d = b.indexOf("?"),
        0 < d && (h = b.substring(d + 1),
        b = b.substring(0, d),
        e = b.toLowerCase(),
        f = 0,
        "http://" == e.substring(0, 7) ? f += 7 : "https://" == e.substring(0, 8) && (f += 8),
        d = e.indexOf("/", f),
        0 < d && (e = e.substring(f, d),
        g = b.substring(d),
        b = b.substring(0, d),
        0 <= e.indexOf("google") ? k = ",q,ie,start,search_key,word,kw,cd," : 0 <= e.indexOf("yahoo.co") && (k = ",p,ei,"),
        k && h)))) {
            if ((a = h.split("&")) && 1 < a.length) {
                for (f = 0; f < a.length; f++)
                    e = a[f],
                    d = e.indexOf("="),
                    0 < d && 0 <= k.indexOf("," + e.substring(0, d) + ",") ? l += (l ? "&" : "") + e : n += (n ? "&" : "") + e;
                l && n ? h = l + "&" + n : n = ""
            }
            d = 253 - (h.length - n.length) - b.length;
            a = b + (0 < d ? g.substring(0, d) : "") + "?" + h
        }
        return a
    }
    ;
    a.$a = function(c) {
        var b = a.d.visibilityState
          , d = ["webkitvisibilitychange", "visibilitychange"];
        b || (b = a.d.webkitVisibilityState);
        if (b && "prerender" == b) {
            if (c)
                for (b = 0; b < d.length; b++)
                    a.d.addEventListener(d[b], function() {
                        var b = a.d.visibilityState;
                        b || (b = a.d.webkitVisibilityState);
                        "visible" == b && c()
                    });
            return !1
        }
        return !0
    }
    ;
    a.ea = !1;
    a.I = !1;
    a.kb = function() {
        a.I = !0;
        a.j()
    }
    ;
    a.ca = !1;
    a.V = !1;
    a.gb = function(c) {
        a.marketingCloudVisitorID = c;
        a.V = !0;
        a.j()
    }
    ;
    a.fa = !1;
    a.W = !1;
    a.lb = function(c) {
        a.visitorOptedOut = c;
        a.W = !0;
        a.j()
    }
    ;
    a.Z = !1;
    a.S = !1;
    a.Wa = function(c) {
        a.analyticsVisitorID = c;
        a.S = !0;
        a.j()
    }
    ;
    a.ba = !1;
    a.U = !1;
    a.Ya = function(c) {
        a.audienceManagerLocationHint = c;
        a.U = !0;
        a.j()
    }
    ;
    a.aa = !1;
    a.T = !1;
    a.Xa = function(c) {
        a.audienceManagerBlob = c;
        a.T = !0;
        a.j()
    }
    ;
    a.Za = function(c) {
        a.maxDelay || (a.maxDelay = 250);
        return a.p("_d") ? (c && setTimeout(function() {
            c()
        }, a.maxDelay),
        !1) : !0
    }
    ;
    a.da = !1;
    a.H = !1;
    a.xa = function() {
        a.H = !0;
        a.j()
    }
    ;
    a.isReadyToTrack = function() {
        var c = !0, b = a.visitor, d, f, e;
        a.ea || a.I || (a.$a(a.kb) ? a.I = !0 : a.ea = !0);
        if (a.ea && !a.I)
            return !1;
        b && b.isAllowed() && (a.ca || a.marketingCloudVisitorID || !b.getMarketingCloudVisitorID || (a.ca = !0,
        a.marketingCloudVisitorID = b.getMarketingCloudVisitorID([a, a.gb]),
        a.marketingCloudVisitorID && (a.V = !0)),
        a.fa || a.visitorOptedOut || !b.isOptedOut || (a.fa = !0,
        a.visitorOptedOut = b.isOptedOut([a, a.lb]),
        a.visitorOptedOut != n && (a.W = !0)),
        a.Z || a.analyticsVisitorID || !b.getAnalyticsVisitorID || (a.Z = !0,
        a.analyticsVisitorID = b.getAnalyticsVisitorID([a, a.Wa]),
        a.analyticsVisitorID && (a.S = !0)),
        a.ba || a.audienceManagerLocationHint || !b.getAudienceManagerLocationHint || (a.ba = !0,
        a.audienceManagerLocationHint = b.getAudienceManagerLocationHint([a, a.Ya]),
        a.audienceManagerLocationHint && (a.U = !0)),
        a.aa || a.audienceManagerBlob || !b.getAudienceManagerBlob || (a.aa = !0,
        a.audienceManagerBlob = b.getAudienceManagerBlob([a, a.Xa]),
        a.audienceManagerBlob && (a.T = !0)),
        c = a.ca && !a.V && !a.marketingCloudVisitorID,
        b = a.Z && !a.S && !a.analyticsVisitorID,
        d = a.ba && !a.U && !a.audienceManagerLocationHint,
        f = a.aa && !a.T && !a.audienceManagerBlob,
        e = a.fa && !a.W,
        c = c || b || d || f || e ? !1 : !0);
        a.da || a.H || (a.Za(a.xa) ? a.H = !0 : a.da = !0);
        a.da && !a.H && (c = !1);
        return c
    }
    ;
    a.o = n;
    a.u = 0;
    a.callbackWhenReadyToTrack = function(c, b, d) {
        var f;
        f = {};
        f.pb = c;
        f.ob = b;
        f.mb = d;
        a.o == n && (a.o = []);
        a.o.push(f);
        0 == a.u && (a.u = setInterval(a.j, 100))
    }
    ;
    a.j = function() {
        var c;
        if (a.isReadyToTrack() && (a.jb(),
        a.o != n))
            for (; 0 < a.o.length; )
                c = a.o.shift(),
                c.ob.apply(c.pb, c.mb)
    }
    ;
    a.jb = function() {
        a.u && (clearInterval(a.u),
        a.u = 0)
    }
    ;
    a.eb = function(c) {
        var b, d, f = n, e = n;
        if (!a.isReadyToTrack()) {
            b = [];
            if (c != n)
                for (d in f = {},
                c)
                    f[d] = c[d];
            e = {};
            a.Ua(e, !0);
            b.push(f);
            b.push(e);
            a.callbackWhenReadyToTrack(a, a.track, b);
            return !0
        }
        return !1
    }
    ;
    a.wb = function() {
        var c = a.cookieRead("s_fid"), b = "", d = "", f;
        f = 8;
        var e = 4;
        if (!c || 0 > c.indexOf("-")) {
            for (c = 0; 16 > c; c++)
                f = Math.floor(Math.random() * f),
                b += "0123456789ABCDEF".substring(f, f + 1),
                f = Math.floor(Math.random() * e),
                d += "0123456789ABCDEF".substring(f, f + 1),
                f = e = 16;
            c = b + "-" + d
        }
        a.cookieWrite("s_fid", c, 1) || (c = 0);
        return c
    }
    ;
    a.t = a.track = function(c, b) {
        var d, f = new Date, e = "s" + Math.floor(f.getTime() / 108E5) % 10 + Math.floor(1E13 * Math.random()), g = f.getYear(), g = "t=" + a.escape(f.getDate() + "/" + f.getMonth() + "/" + (1900 > g ? g + 1900 : g) + " " + f.getHours() + ":" + f.getMinutes() + ":" + f.getSeconds() + " " + f.getDay() + " " + f.getTimezoneOffset());
        a.visitor && a.visitor.getAuthState && (a.authState = a.visitor.getAuthState());
        a.p("_s");
        a.eb(c) || (b && a.R(b),
        c && (d = {},
        a.Ua(d, 0),
        a.R(c)),
        a.Cb() && !a.visitorOptedOut && (a.analyticsVisitorID || a.marketingCloudVisitorID || (a.fid = a.wb()),
        a.Gb(),
        a.usePlugins && a.doPlugins && a.doPlugins(a),
        a.account && (a.abort || (a.visitor && !a.supplementalDataID && a.visitor.getSupplementalDataID && (a.supplementalDataID = a.visitor.getSupplementalDataID("AppMeasurement:" + a._in, a.expectSupplementalData ? !1 : !0)),
        a.trackOffline && !a.timestamp && (a.timestamp = Math.floor(f.getTime() / 1E3)),
        f = h.location,
        a.pageURL || (a.pageURL = f.href ? f.href : f),
        a.referrer || a.Va || (a.referrer = p.document.referrer),
        a.Va = 1,
        a.referrer = a.ub(a.referrer),
        a.p("_g")),
        a.zb() && !a.abort && (a.Ab(),
        g += a.yb(),
        a.Fb(e, g),
        a.p("_t"),
        a.referrer = ""))),
        c && a.R(d, 1));
        a.abort = a.supplementalDataID = a.timestamp = a.pageURLRest = a.linkObject = a.clickObject = a.linkURL = a.linkName = a.linkType = h.s_objectID = a.pe = a.pev1 = a.pev2 = a.pev3 = a.e = a.lightProfileID = 0
    }
    ;
    a.za = [];
    a.registerPreTrackCallback = function(c) {
        for (var b = [], d = 1; d < arguments.length; d++)
            b.push(arguments[d]);
        "function" == typeof c ? a.za.push([c, b]) : a.debugTracking && a.P("DEBUG: Non function type passed to registerPreTrackCallback")
    }
    ;
    a.bb = function(c) {
        a.wa(a.za, c)
    }
    ;
    a.ya = [];
    a.registerPostTrackCallback = function(c) {
        for (var b = [], d = 1; d < arguments.length; d++)
            b.push(arguments[d]);
        "function" == typeof c ? a.ya.push([c, b]) : a.debugTracking && a.P("DEBUG: Non function type passed to registerPostTrackCallback")
    }
    ;
    a.ab = function(c) {
        a.wa(a.ya, c)
    }
    ;
    a.wa = function(c, b) {
        if ("object" == typeof c)
            for (var d = 0; d < c.length; d++) {
                var f = c[d][0]
                  , e = c[d][1];
                e.unshift(b);
                if ("function" == typeof f)
                    try {
                        f.apply(null, e)
                    } catch (g) {
                        a.debugTracking && a.P(g.message)
                    }
            }
    }
    ;
    a.tl = a.trackLink = function(c, b, d, f, e) {
        a.linkObject = c;
        a.linkType = b;
        a.linkName = d;
        e && (a.l = c,
        a.A = e);
        return a.track(f)
    }
    ;
    a.trackLight = function(c, b, d, f) {
        a.lightProfileID = c;
        a.lightStoreForSeconds = b;
        a.lightIncrementBy = d;
        return a.track(f)
    }
    ;
    a.clearVars = function() {
        var c, b;
        for (c = 0; c < a.g.length; c++)
            if (b = a.g[c],
            "prop" == b.substring(0, 4) || "eVar" == b.substring(0, 4) || "hier" == b.substring(0, 4) || "list" == b.substring(0, 4) || "channel" == b || "events" == b || "eventList" == b || "products" == b || "productList" == b || "purchaseID" == b || "transactionID" == b || "state" == b || "zip" == b || "campaign" == b)
                a[b] = void 0
    }
    ;
    a.tagContainerMarker = "";
    a.Fb = function(c, b) {
        var d, f = a.trackingServer;
        d = "";
        var e = a.dc
          , g = "sc."
          , h = a.visitorNamespace;
        f ? a.trackingServerSecure && a.ssl && (f = a.trackingServerSecure) : (h || (h = a.account,
        f = h.indexOf(","),
        0 <= f && (h = h.substring(0, f)),
        h = h.replace(/[^A-Za-z0-9]/g, "")),
        d || (d = "2o7.net"),
        e = e ? ("" + e).toLowerCase() : "d1",
        "2o7.net" == d && ("d1" == e ? e = "112" : "d2" == e && (e = "122"),
        g = ""),
        f = h + "." + e + "." + g + d);
        d = a.ssl ? "https://" : "http://";
        e = a.AudienceManagement && a.AudienceManagement.isReady() || 0 != a.usePostbacks;
        d += f + "/b/ss/" + a.account + "/" + (a.mobile ? "5." : "") + (e ? "10" : "1") + "/JS-" + a.version + (a.Jb ? "T" : "") + (a.tagContainerMarker ? "-" + a.tagContainerMarker : "") + "/" + c + "?AQB=1&ndh=1&pf=1&" + (e ? "callback=s_c_il[" + a._in + "].doPostbacks&et=1&" : "") + b + "&AQE=1";
        a.bb(d);
        a.sb(d);
        a.ka()
    }
    ;
    a.Ta = /{(%?)(.*?)(%?)}/;
    a.Nb = RegExp(a.Ta.source, "g");
    a.tb = function(c) {
        if ("object" == typeof c.dests)
            for (var b = 0; b < c.dests.length; ++b) {
                var d = c.dests[b];
                if ("string" == typeof d.c && "aa." == d.id.substr(0, 3))
                    for (var f = d.c.match(a.Nb), e = 0; e < f.length; ++e) {
                        var g = f[e]
                          , h = g.match(a.Ta)
                          , l = "";
                        "%" == h[1] && "timezone_offset" == h[2] ? l = (new Date).getTimezoneOffset() : "%" == h[1] && "timestampz" == h[2] && (l = a.xb());
                        d.c = d.c.replace(g, a.escape(l))
                    }
            }
    }
    ;
    a.xb = function() {
        var c = new Date
          , b = new Date(6E4 * Math.abs(c.getTimezoneOffset()));
        return a.k(4, c.getFullYear()) + "-" + a.k(2, c.getMonth() + 1) + "-" + a.k(2, c.getDate()) + "T" + a.k(2, c.getHours()) + ":" + a.k(2, c.getMinutes()) + ":" + a.k(2, c.getSeconds()) + (0 < c.getTimezoneOffset() ? "-" : "+") + a.k(2, b.getUTCHours()) + ":" + a.k(2, b.getUTCMinutes())
    }
    ;
    a.k = function(a, b) {
        return (Array(a + 1).join(0) + b).slice(-a)
    }
    ;
    a.ta = {};
    a.doPostbacks = function(c) {
        if ("object" == typeof c)
            if (a.tb(c),
            "object" == typeof a.AudienceManagement && "function" == typeof a.AudienceManagement.isReady && a.AudienceManagement.isReady() && "function" == typeof a.AudienceManagement.passData)
                a.AudienceManagement.passData(c);
            else if ("object" == typeof c && "object" == typeof c.dests)
                for (var b = 0; b < c.dests.length; ++b) {
                    var d = c.dests[b];
                    "object" == typeof d && "string" == typeof d.c && "string" == typeof d.id && "aa." == d.id.substr(0, 3) && (a.ta[d.id] = new Image,
                    a.ta[d.id].alt = "",
                    a.ta[d.id].src = d.c)
                }
    }
    ;
    a.sb = function(c) {
        a.i || a.Bb();
        a.i.push(c);
        a.ma = a.C();
        a.Ra()
    }
    ;
    a.Bb = function() {
        a.i = a.Db();
        a.i || (a.i = [])
    }
    ;
    a.Db = function() {
        var c, b;
        if (a.ra()) {
            try {
                (b = h.localStorage.getItem(a.pa())) && (c = h.JSON.parse(b))
            } catch (d) {}
            return c
        }
    }
    ;
    a.ra = function() {
        var c = !0;
        a.trackOffline && a.offlineFilename && h.localStorage && h.JSON || (c = !1);
        return c
    }
    ;
    a.Ia = function() {
        var c = 0;
        a.i && (c = a.i.length);
        a.q && c++;
        return c
    }
    ;
    a.ka = function() {
        if (a.q && (a.B && a.B.complete && a.B.F && a.B.va(),
        a.q))
            return;
        a.Ja = n;
        if (a.qa)
            a.ma > a.N && a.Pa(a.i),
            a.ua(500);
        else {
            var c = a.nb();
            if (0 < c)
                a.ua(c);
            else if (c = a.Fa())
                a.q = 1,
                a.Eb(c),
                a.Ib(c)
        }
    }
    ;
    a.ua = function(c) {
        a.Ja || (c || (c = 0),
        a.Ja = setTimeout(a.ka, c))
    }
    ;
    a.nb = function() {
        var c;
        if (!a.trackOffline || 0 >= a.offlineThrottleDelay)
            return 0;
        c = a.C() - a.Oa;
        return a.offlineThrottleDelay < c ? 0 : a.offlineThrottleDelay - c
    }
    ;
    a.Fa = function() {
        if (0 < a.i.length)
            return a.i.shift()
    }
    ;
    a.Eb = function(c) {
        if (a.debugTracking) {
            var b = "AppMeasurement Debug: " + c;
            c = c.split("&");
            var d;
            for (d = 0; d < c.length; d++)
                b += "\n\t" + a.unescape(c[d]);
            a.P(b)
        }
    }
    ;
    a.fb = function() {
        return a.marketingCloudVisitorID || a.analyticsVisitorID
    }
    ;
    a.Y = !1;
    var q;
    try {
        q = JSON.parse('{"x":"y"}')
    } catch (u) {
        q = null
    }
    q && "y" == q.x ? (a.Y = !0,
    a.X = function(a) {
        return JSON.parse(a)
    }
    ) : h.$ && h.$.parseJSON ? (a.X = function(a) {
        return h.$.parseJSON(a)
    }
    ,
    a.Y = !0) : a.X = function() {
        return null
    }
    ;
    a.Ib = function(c) {
        var b, d, f;
        a.fb() && 2047 < c.length && ("undefined" != typeof XMLHttpRequest && (b = new XMLHttpRequest,
        "withCredentials"in b ? d = 1 : b = 0),
        b || "undefined" == typeof XDomainRequest || (b = new XDomainRequest,
        d = 2),
        b && (a.AudienceManagement && a.AudienceManagement.isReady() || 0 != a.usePostbacks) && (a.Y ? b.Ba = !0 : b = 0));
        !b && a.Sa && (c = c.substring(0, 2047));
        !b && a.d.createElement && (0 != a.usePostbacks || a.AudienceManagement && a.AudienceManagement.isReady()) && (b = a.d.createElement("SCRIPT")) && "async"in b && ((f = (f = a.d.getElementsByTagName("HEAD")) && f[0] ? f[0] : a.d.body) ? (b.type = "text/javascript",
        b.setAttribute("async", "async"),
        d = 3) : b = 0);
        b || (b = new Image,
        b.alt = "",
        b.abort || "undefined" === typeof h.InstallTrigger || (b.abort = function() {
            b.src = n
        }
        ));
        b.Da = function() {
            try {
                b.F && (clearTimeout(b.F),
                b.F = 0)
            } catch (a) {}
        }
        ;
        b.onload = b.va = function() {
            a.ab(c);
            b.Da();
            a.rb();
            a.ga();
            a.q = 0;
            a.ka();
            if (b.Ba) {
                b.Ba = !1;
                try {
                    a.doPostbacks(a.X(b.responseText))
                } catch (d) {}
            }
        }
        ;
        b.onabort = b.onerror = b.Ga = function() {
            b.Da();
            (a.trackOffline || a.qa) && a.q && a.i.unshift(a.qb);
            a.q = 0;
            a.ma > a.N && a.Pa(a.i);
            a.ga();
            a.ua(500)
        }
        ;
        b.onreadystatechange = function() {
            4 == b.readyState && (200 == b.status ? b.va() : b.Ga())
        }
        ;
        a.Oa = a.C();
        if (1 == d || 2 == d) {
            var e = c.indexOf("?");
            f = c.substring(0, e);
            e = c.substring(e + 1);
            e = e.replace(/&callback=[a-zA-Z0-9_.\[\]]+/, "");
            1 == d ? (b.open("POST", f, !0),
            b.send(e)) : 2 == d && (b.open("POST", f),
            b.send(e))
        } else if (b.src = c,
        3 == d) {
            if (a.Ma)
                try {
                    f.removeChild(a.Ma)
                } catch (g) {}
            f.firstChild ? f.insertBefore(b, f.firstChild) : f.appendChild(b);
            a.Ma = a.B
        }
        b.F = setTimeout(function() {
            b.F && (b.complete ? b.va() : (a.trackOffline && b.abort && b.abort(),
            b.Ga()))
        }, 5E3);
        a.qb = c;
        a.B = h["s_i_" + a.replace(a.account, ",", "_")] = b;
        if (a.useForcedLinkTracking && a.J || a.A)
            a.forcedLinkTrackingTimeout || (a.forcedLinkTrackingTimeout = 250),
            a.ha = setTimeout(a.ga, a.forcedLinkTrackingTimeout)
    }
    ;
    a.rb = function() {
        if (a.ra() && !(a.Na > a.N))
            try {
                h.localStorage.removeItem(a.pa()),
                a.Na = a.C()
            } catch (c) {}
    }
    ;
    a.Pa = function(c) {
        if (a.ra()) {
            a.Ra();
            try {
                h.localStorage.setItem(a.pa(), h.JSON.stringify(c)),
                a.N = a.C()
            } catch (b) {}
        }
    }
    ;
    a.Ra = function() {
        if (a.trackOffline) {
            if (!a.offlineLimit || 0 >= a.offlineLimit)
                a.offlineLimit = 10;
            for (; a.i.length > a.offlineLimit; )
                a.Fa()
        }
    }
    ;
    a.forceOffline = function() {
        a.qa = !0
    }
    ;
    a.forceOnline = function() {
        a.qa = !1
    }
    ;
    a.pa = function() {
        return a.offlineFilename + "-" + a.visitorNamespace + a.account
    }
    ;
    a.C = function() {
        return (new Date).getTime()
    }
    ;
    a.Ka = function(a) {
        a = a.toLowerCase();
        return 0 != a.indexOf("#") && 0 != a.indexOf("about:") && 0 != a.indexOf("opera:") && 0 != a.indexOf("javascript:") ? !0 : !1
    }
    ;
    a.setTagContainer = function(c) {
        var b, d, f;
        a.Jb = c;
        for (b = 0; b < a._il.length; b++)
            if ((d = a._il[b]) && "s_l" == d._c && d.tagContainerName == c) {
                a.R(d);
                if (d.lmq)
                    for (b = 0; b < d.lmq.length; b++)
                        f = d.lmq[b],
                        a.loadModule(f.n);
                if (d.ml)
                    for (f in d.ml)
                        if (a[f])
                            for (b in c = a[f],
                            f = d.ml[f],
                            f)
                                !Object.prototype[b] && ("function" != typeof f[b] || 0 > ("" + f[b]).indexOf("s_c_il")) && (c[b] = f[b]);
                if (d.mmq)
                    for (b = 0; b < d.mmq.length; b++)
                        f = d.mmq[b],
                        a[f.m] && (c = a[f.m],
                        c[f.f] && "function" == typeof c[f.f] && (f.a ? c[f.f].apply(c, f.a) : c[f.f].apply(c)));
                if (d.tq)
                    for (b = 0; b < d.tq.length; b++)
                        a.track(d.tq[b]);
                d.s = a;
                break
            }
    }
    ;
    a.Util = {
        urlEncode: a.escape,
        urlDecode: a.unescape,
        cookieRead: a.cookieRead,
        cookieWrite: a.cookieWrite,
        getQueryParam: function(c, b, d) {
            var f;
            b || (b = a.pageURL ? a.pageURL : h.location);
            d || (d = "&");
            return c && b && (b = "" + b,
            f = b.indexOf("?"),
            0 <= f && (b = d + b.substring(f + 1) + d,
            f = b.indexOf(d + c + "="),
            0 <= f && (b = b.substring(f + d.length + c.length + 1),
            f = b.indexOf(d),
            0 <= f && (b = b.substring(0, f)),
            0 < b.length))) ? a.unescape(b) : ""
        }
    };
    a.G = "supplementalDataID timestamp dynamicVariablePrefix visitorID marketingCloudVisitorID analyticsVisitorID audienceManagerLocationHint authState fid vmk visitorMigrationKey visitorMigrationServer visitorMigrationServerSecure charSet visitorNamespace cookieDomainPeriods fpCookieDomainPeriods cookieLifetime pageName pageURL referrer contextData currencyCode lightProfileID lightStoreForSeconds lightIncrementBy retrieveLightProfiles deleteLightProfiles retrieveLightData".split(" ");
    a.g = a.G.concat("purchaseID variableProvider channel server pageType transactionID campaign state zip events events2 products audienceManagerBlob tnt".split(" "));
    a.na = "timestamp charSet visitorNamespace cookieDomainPeriods cookieLifetime contextData lightProfileID lightStoreForSeconds lightIncrementBy".split(" ");
    a.O = a.na.slice(0);
    a.Aa = "account allAccounts debugTracking visitor visitorOptedOut trackOffline offlineLimit offlineThrottleDelay offlineFilename usePlugins doPlugins configURL visitorSampling visitorSamplingGroup linkObject clickObject linkURL linkName linkType trackDownloadLinks trackExternalLinks trackClickMap trackInlineStats linkLeaveQueryString linkTrackVars linkTrackEvents linkDownloadFileTypes linkExternalFilters linkInternalFilters useForcedLinkTracking forcedLinkTrackingTimeout trackingServer trackingServerSecure ssl abort mobile dc lightTrackVars maxDelay expectSupplementalData usePostbacks registerPreTrackCallback registerPostTrackCallback AudienceManagement".split(" ");
    for (l = 0; 250 >= l; l++)
        76 > l && (a.g.push("prop" + l),
        a.O.push("prop" + l)),
        a.g.push("eVar" + l),
        a.O.push("eVar" + l),
        6 > l && a.g.push("hier" + l),
        4 > l && a.g.push("list" + l);
    l = "pe pev1 pev2 pev3 latitude longitude resolution colorDepth javascriptVersion javaEnabled cookiesEnabled browserWidth browserHeight connectionType homepage pageURLRest".split(" ");
    a.g = a.g.concat(l);
    a.G = a.G.concat(l);
    a.ssl = 0 <= h.location.protocol.toLowerCase().indexOf("https");
    a.charSet = "UTF-8";
    a.contextData = {};
    a.offlineThrottleDelay = 0;
    a.offlineFilename = "AppMeasurement.offline";
    a.Oa = 0;
    a.ma = 0;
    a.N = 0;
    a.Na = 0;
    a.linkDownloadFileTypes = "exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx";
    a.w = h;
    a.d = h.document;
    try {
        if (a.Sa = !1,
        navigator) {
            var v = navigator.userAgent;
            if ("Microsoft Internet Explorer" == navigator.appName || 0 <= v.indexOf("MSIE ") || 0 <= v.indexOf("Trident/") && 0 <= v.indexOf("Windows NT 6"))
                a.Sa = !0
        }
    } catch (w) {}
    a.ga = function() {
        a.ha && (h.clearTimeout(a.ha),
        a.ha = n);
        a.l && a.J && a.l.dispatchEvent(a.J);
        a.A && ("function" == typeof a.A ? a.A() : a.l && a.l.href && (a.d.location = a.l.href));
        a.l = a.J = a.A = 0
    }
    ;
    a.Qa = function() {
        a.b = a.d.body;
        a.b ? (a.v = function(c) {
            var b, d, f, e, g;
            if (!(a.d && a.d.getElementById("cppXYctnr") || c && c["s_fe_" + a._in])) {
                if (a.Ca)
                    if (a.useForcedLinkTracking)
                        a.b.removeEventListener("click", a.v, !1);
                    else {
                        a.b.removeEventListener("click", a.v, !0);
                        a.Ca = a.useForcedLinkTracking = 0;
                        return
                    }
                else
                    a.useForcedLinkTracking = 0;
                a.clickObject = c.srcElement ? c.srcElement : c.target;
                try {
                    if (!a.clickObject || a.M && a.M == a.clickObject || !(a.clickObject.tagName || a.clickObject.parentElement || a.clickObject.parentNode))
                        a.clickObject = 0;
                    else {
                        var k = a.M = a.clickObject;
                        a.la && (clearTimeout(a.la),
                        a.la = 0);
                        a.la = setTimeout(function() {
                            a.M == k && (a.M = 0)
                        }, 1E4);
                        f = a.Ia();
                        a.track();
                        if (f < a.Ia() && a.useForcedLinkTracking && c.target) {
                            for (e = c.target; e && e != a.b && "A" != e.tagName.toUpperCase() && "AREA" != e.tagName.toUpperCase(); )
                                e = e.parentNode;
                            if (e && (g = e.href,
                            a.Ka(g) || (g = 0),
                            d = e.target,
                            c.target.dispatchEvent && g && (!d || "_self" == d || "_top" == d || "_parent" == d || h.name && d == h.name))) {
                                try {
                                    b = a.d.createEvent("MouseEvents")
                                } catch (l) {
                                    b = new h.MouseEvent
                                }
                                if (b) {
                                    try {
                                        b.initMouseEvent("click", c.bubbles, c.cancelable, c.view, c.detail, c.screenX, c.screenY, c.clientX, c.clientY, c.ctrlKey, c.altKey, c.shiftKey, c.metaKey, c.button, c.relatedTarget)
                                    } catch (n) {
                                        b = 0
                                    }
                                    b && (b["s_fe_" + a._in] = b.s_fe = 1,
                                    c.stopPropagation(),
                                    c.stopImmediatePropagation && c.stopImmediatePropagation(),
                                    c.preventDefault(),
                                    a.l = c.target,
                                    a.J = b)
                                }
                            }
                        }
                    }
                } catch (p) {
                    a.clickObject = 0
                }
            }
        }
        ,
        a.b && a.b.attachEvent ? a.b.attachEvent("onclick", a.v) : a.b && a.b.addEventListener && (navigator && (0 <= navigator.userAgent.indexOf("WebKit") && a.d.createEvent || 0 <= navigator.userAgent.indexOf("Firefox/2") && h.MouseEvent) && (a.Ca = 1,
        a.useForcedLinkTracking = 1,
        a.b.addEventListener("click", a.v, !0)),
        a.b.addEventListener("click", a.v, !1))) : setTimeout(a.Qa, 30)
    }
    ;
    a.Qa();
    a.loadModule("ActivityMap")
}
function s_gi(a) {
    var h, n = window.s_c_il, p, l, r = a.split(","), s, q, u = 0;
    if (n)
        for (p = 0; !u && p < n.length; ) {
            h = n[p];
            if ("s_c" == h._c && (h.account || h.oun))
                if (h.account && h.account == a)
                    u = 1;
                else
                    for (l = h.account ? h.account : h.oun,
                    l = h.allAccounts ? h.allAccounts : l.split(","),
                    s = 0; s < r.length; s++)
                        for (q = 0; q < l.length; q++)
                            r[s] == l[q] && (u = 1);
            p++
        }
    u || (h = new AppMeasurement);
    h.setAccount ? h.setAccount(a) : h.sa && h.sa(a);
    return h
}
AppMeasurement.getInstance = s_gi;
window.s_objectID || (window.s_objectID = 0);
function s_pgicq() {
    var a = window, h = a.s_giq, n, p, l;
    if (h)
        for (n = 0; n < h.length; n++)
            p = h[n],
            l = s_gi(p.oun),
            l.setAccount(p.un),
            l.setTagContainer(p.tagContainerName);
    a.s_giq = 0
}
s_pgicq();
function AppMeasurement_Module_Integrate(l) {
    var c = this;
    c.s = l;
    var e = window;
    e.s_c_in || (e.s_c_il = [],
    e.s_c_in = 0);
    c._il = e.s_c_il;
    c._in = e.s_c_in;
    c._il[c._in] = c;
    e.s_c_in++;
    c._c = "s_m";
    c.list = [];
    c.add = function(d, b) {
        var a;
        b || (b = "s_Integrate_" + d);
        e[b] || (e[b] = {});
        a = c[d] = e[b];
        a.a = d;
        a.e = c;
        a._c = 0;
        a._d = 0;
        void 0 == a.disable && (a.disable = 0);
        a.get = function(b, d) {
            var f = document, h = f.getElementsByTagName("HEAD"), k;
            if (!a.disable && (d || (v = "s_" + c._in + "_Integrate_" + a.a + "_get_" + a._c),
            a._c++,
            a.VAR = v,
            a.CALLBACK = "s_c_il[" + c._in + "]." + a.a + ".callback",
            a.delay(),
            h = h && 0 < h.length ? h[0] : f.body))
                try {
                    k = f.createElement("SCRIPT"),
                    k.type = "text/javascript",
                    k.setAttribute("async", "async"),
                    k.src = c.c(a, b),
                    0 > b.indexOf("[CALLBACK]") && (k.onload = k.onreadystatechange = function() {
                        a.callback(e[v])
                    }
                    ),
                    h.firstChild ? h.insertBefore(k, h.firstChild) : h.appendChild(k)
                } catch (l) {}
        }
        ;
        a.callback = function(b) {
            var c;
            if (b)
                for (c in b)
                    Object.prototype[c] || (a[c] = b[c]);
            a.ready()
        }
        ;
        a.beacon = function(b) {
            var d = "s_i_" + c._in + "_Integrate_" + a.a + "_" + a._c;
            a.disable || (a._c++,
            d = e[d] = new Image,
            d.src = c.c(a, b))
        }
        ;
        a.script = function(b) {
            a.get(b, 1)
        }
        ;
        a.delay = function() {
            a._d++
        }
        ;
        a.ready = function() {
            a._d--;
            a.disable || l.delayReady()
        }
        ;
        c.list.push(d)
    }
    ;
    c._g = function(d) {
        var b, a = (d ? "use" : "set") + "Vars";
        for (d = 0; d < c.list.length; d++)
            if ((b = c[c.list[d]]) && !b.disable && b[a])
                try {
                    b[a](l, b)
                } catch (e) {}
    }
    ;
    c._t = function() {
        c._g(1)
    }
    ;
    c._d = function() {
        var d, b;
        for (d = 0; d < c.list.length; d++)
            if ((b = c[c.list[d]]) && !b.disable && 0 < b._d)
                return 1;
        return 0
    }
    ;
    c.c = function(c, b) {
        var a, e, g, f;
        "http" != b.toLowerCase().substring(0, 4) && (b = "http://" + b);
        l.ssl && (b = l.replace(b, "http:", "https:"));
        c.RAND = Math.floor(1E13 * Math.random());
        for (a = 0; 0 <= a; )
            a = b.indexOf("[", a),
            0 <= a && (e = b.indexOf("]", a),
            e > a && (g = b.substring(a + 1, e),
            2 < g.length && "s." == g.substring(0, 2) ? (f = l[g.substring(2)]) || (f = "") : (f = "" + c[g],
            f != c[g] && parseFloat(f) != c[g] && (g = 0)),
            g && (b = b.substring(0, a) + encodeURIComponent(f) + b.substring(e + 1)),
            a = e));
        return b
    }
}
function AppMeasurement_Module_ActivityMap(f) {
    function g(a, d) {
        var b, c, n;
        if (a && d && (b = e.c[d] || (e.c[d] = d.split(","))))
            for (n = 0; n < b.length && (c = b[n++]); )
                if (-1 < a.indexOf(c))
                    return null;
        p = 1;
        return a
    }
    function q(a, d, b, c, e) {
        var g, h;
        if (a.dataset && (h = a.dataset[d]))
            g = h;
        else if (a.getAttribute)
            if (h = a.getAttribute("data-" + b))
                g = h;
            else if (h = a.getAttribute(b))
                g = h;
        if (!g && f.useForcedLinkTracking && e && (g = "",
        d = a.onclick ? "" + a.onclick : "")) {
            b = d.indexOf(c);
            var l, k;
            if (0 <= b) {
                for (b += 10; b < d.length && 0 <= "= \t\r\n".indexOf(d.charAt(b)); )
                    b++;
                if (b < d.length) {
                    h = b;
                    for (l = k = 0; h < d.length && (";" != d.charAt(h) || l); )
                        l ? d.charAt(h) != l || k ? k = "\\" == d.charAt(h) ? !k : 0 : l = 0 : (l = d.charAt(h),
                        '"' != l && "'" != l && (l = 0)),
                        h++;
                    if (d = d.substring(b, h))
                        a.e = new Function("s","var e;try{s.w." + c + "=" + d + "}catch(e){}"),
                        a.e(f)
                }
            }
        }
        return g || e && f.w[c]
    }
    function r(a, d, b) {
        var c;
        return (c = e[d](a, b)) && (p ? (p = 0,
        c) : g(k(c), e[d + "Exclusions"]))
    }
    function s(a, d, b) {
        var c;
        if (a && !(1 === (c = a.nodeType) && (c = a.nodeName) && (c = c.toUpperCase()) && t[c]) && (1 === a.nodeType && (c = a.nodeValue) && (d[d.length] = c),
        b.a || b.t || b.s || !a.getAttribute || ((c = a.getAttribute("alt")) ? b.a = c : (c = a.getAttribute("title")) ? b.t = c : "IMG" == ("" + a.nodeName).toUpperCase() && (c = a.getAttribute("src") || a.src) && (b.s = c)),
        (c = a.childNodes) && c.length))
            for (a = 0; a < c.length; a++)
                s(c[a], d, b)
    }
    function k(a) {
        if (null == a || void 0 == a)
            return a;
        try {
            return a.replace(RegExp("^[\\s\\n\\f\\r\\t\t-\r \u00a0\u1680\u180e\u2000-\u200a\u2028\u2029\u205f\u3000\ufeff]+", "mg"), "").replace(RegExp("[\\s\\n\\f\\r\\t\t-\r \u00a0\u1680\u180e\u2000-\u200a\u2028\u2029\u205f\u3000\ufeff]+$", "mg"), "").replace(RegExp("[\\s\\n\\f\\r\\t\t-\r \u00a0\u1680\u180e\u2000-\u200a\u2028\u2029\u205f\u3000\ufeff]{1,}", "mg"), " ").substring(0, 254)
        } catch (d) {}
    }
    var e = this;
    e.s = f;
    var m = window;
    m.s_c_in || (m.s_c_il = [],
    m.s_c_in = 0);
    e._il = m.s_c_il;
    e._in = m.s_c_in;
    e._il[e._in] = e;
    m.s_c_in++;
    e._c = "s_m";
    e.c = {};
    var p = 0
      , t = {
        SCRIPT: 1,
        STYLE: 1,
        LINK: 1,
        CANVAS: 1
    };
    e._g = function() {
        var a, d, b, c = f.contextData, e = f.linkObject;
        (a = f.pageName || f.pageURL) && (d = r(e, "link", f.linkName)) && (b = r(e, "region")) && (c["a.activitymap.page"] = a.substring(0, 255),
        c["a.activitymap.link"] = 128 < d.length ? d.substring(0, 128) : d,
        c["a.activitymap.region"] = 127 < b.length ? b.substring(0, 127) : b,
        c["a.activitymap.pageIDType"] = f.pageName ? 1 : 0)
    }
    ;
    e.link = function(a, d) {
        var b;
        if (d)
            b = g(k(d), e.linkExclusions);
        else if ((b = a) && !(b = q(a, "sObjectId", "s-object-id", "s_objectID", 1))) {
            var c, f;
            (f = g(k(a.innerText || a.textContent), e.linkExclusions)) || (s(a, c = [], b = {
                a: void 0,
                t: void 0,
                s: void 0
            }),
            (f = g(k(c.join("")))) || (f = g(k(b.a ? b.a : b.t ? b.t : b.s ? b.s : void 0))) || !(c = (c = a.tagName) && c.toUpperCase ? c.toUpperCase() : "") || ("INPUT" == c || "SUBMIT" == c && a.value ? f = g(k(a.value)) : "IMAGE" == c && a.src && (f = g(k(a.src)))));
            b = f
        }
        return b
    }
    ;
    e.region = function(a) {
        for (var d, b = e.regionIDAttribute || "id"; a && (a = a.parentNode); ) {
            if (d = q(a, b, b, b))
                return d;
            if ("BODY" == a.nodeName)
                return "BODY"
        }
    }
}
try {
    (function(id, loader) {
        window.utag.tagsettings = window.utag.tagsettings || {};
        window.utag.tagsettings.adobe = window.utag.tagsettings.adobe || {};
        var vAPI = window.utag.tagsettings.adobe.visitorAPI = window.utag.tagsettings.adobe.visitorAPI || (function() {
            return {
                getInstance: function(orgID, callback) {
                    if (orgID) {
                        utag.DB("[" + u.id + "] OrgID used, but no 'Adobe Marketing Cloud ID Service' tag detected");
                    }
                    return callback();
                }
            };
        }());
        var u = {
            "id": id
        };
        utag.o[loader].sender[id] = u;
        u.ev = {
            'view': 1,
            'link': 1,
            'video': 1
        };
        u.o = s;
        u.varlist = {
            pageName: 'pageName',
            channel: 'ch',
            campaign: 'v0',
            hier1: 'h1',
            hier2: 'h2',
            hier3: 'h3',
            hier4: 'h4'
        };
        for (var i = 1; i < 76; i++) {
            u.varlist['prop' + i] = 'c' + i;
            u.varlist['eVar' + i] = 'v' + i;
        }
        u.pushlt = function(l, v) {
            if (typeof l != "undefined")
                l.push(v)
        }
        ;
        u.map = {};
        u.extend = [function(a, b) {
            try {
                if (b['dom.pathname'] == '/' || b['dom.pathname'].toString().indexOf('/why-mazda/') > -1 || b['dom.pathname'].toString().indexOf('shopping-tools/inventory/results') > -1 || (b['dom.pathname'].toString().indexOf('shopping-tools/special-offers-and-incentives') > -1 && b['dom.hash'].toString().toLowerCase() == ''.toLowerCase()) || (b['dom.pathname'].toString().indexOf('regional-incentives/') > -1 && b['dom.hash'].toString().toLowerCase() == ''.toLowerCase()) || b['dom.pathname'].toString().indexOf('why-mazda/skyactiv') > -1 || b['dom.pathname'].toString().indexOf('preorder/mx-5-rf-launch-edition/gallery') > -1 || b['dom.pathname'].toString().indexOf('/shopping-tools/compare-vehicles') > -1 || b['dom.pathname'].toString().indexOf('/vehicles/') > -1 || b['dom.pathname'].toString().indexOf('certified-pre-owned') > -1 || b['dom.pathname'].toString().indexOf('/disaster-relief') > -1 || b['dom.pathname'].toString().indexOf('/next-generation') > -1 || b['dom.pathname'].toString().indexOf('/new-era') > -1) {
                    var alreadyScrolled = false;
                    window.onscroll = throttle(function() {
                        var minDepth = 299;
                        var currentDepth = window.scrollY;
                        if (!alreadyScrolled && (currentDepth > minDepth)) {
                            alreadyScrolled = true;
                            s.linkTrackVars = defaultLinkTrackVars;
                            if (location.pathname.indexOf('/why-mazda/') > -1) {
                                s.linkTrackEvents = "event98";
                                s.events = "event98";
                            }
                            if (location.hostname.indexOf('insidemazda.mazdausa.com/') > -1 && location.pathname.indexOf('-') > -1) {
                                s.linkTrackEvents += ",event135,event136";
                                s.events += ",event135,event136";
                            } else if (location.hostname.indexOf('insidemazda.mazdausa.com') > -1) {
                                s.linkTrackEvents += ",event139,event140";
                                s.events += ",event139,event140";
                            }
                            if (location.pathname.indexOf('shopping-tools/inventory/results') > -1 && dataLayer.search.type == "new_inventory") {
                                s.linkTrackEvents += ",event179,event180";
                                s.events += ",event179,event180";
                            }
                            if (location.pathname.indexOf('shopping-tools/inventory/results') > -1 && dataLayer.search.type == "cpo_inventory") {
                                s.linkTrackEvents += ",event169,event170";
                                s.events += ",event169,event170";
                            }
                            if (location.pathname == "/certified-pre-owned") {
                                s.linkTrackEvents += ",event242,event243";
                                s.events += ",event242,event243";
                            }
                            if (location.pathname.indexOf('/disaster-relief') > -1) {
                                s.linkTrackEvents += ",event237,event238";
                                s.events += ",event237,event238";
                            }
                            if (location.pathname.indexOf('vehicles/') > -1 && location.pathname.indexOf('/accessories') > -1) {
                                s.linkTrackEvents += ",event165,event166";
                                s.events += ",event165,event166";
                            } else if (location.pathname.indexOf('vehicles/') > -1 && location.pathname.indexOf('/features') > -1) {
                                s.linkTrackEvents += ",event171,event172";
                                s.events += ",event171,event172";
                            } else if (location.pathname.indexOf('vehicles/') > -1 && location.pathname.indexOf('/gallery') > -1) {
                                s.linkTrackEvents += ",event173,event174";
                                s.events += ",event173,event174";
                            } else if (location.pathname.indexOf('vehicles/') > -1 && location.pathname.indexOf('/accolades') > -1) {
                                s.linkTrackEvents += ",event205,event206";
                                s.events += ",event205,event206";
                            } else if (location.pathname.indexOf('vehicles/') > -1 && (location.pathname.indexOf('/specs') > -1 || location.pathname.indexOf('/specifications') > -1)) {
                                s.linkTrackEvents += ",event233,event234";
                                s.events += ",event233,event234";
                            } else if (location.pathname.indexOf('vehicles/') > -1 && location.pathname.indexOf('/trims') > -1) {
                                s.linkTrackEvents += "";
                                s.events = "";
                            } else if (location.pathname.indexOf('/vehicles/') > -1 && location.href.toLowerCase().indexOf('#kmu') == -1) {
                                s.linkTrackEvents += ",event181,event182";
                                s.events += ",event181,event182";
                            }
                            if (location.pathname.indexOf('shopping-tools/special-offers-and-incentives') > -1 || location.pathname.indexOf('regional-incentives/') > -1) {
                                s.linkTrackEvents += ",event177,event178";
                                s.events += ",event177,event178";
                            }
                            if (location.pathname.indexOf('why-mazda/skyactiv') > -1) {
                                s.linkTrackEvents += ",event195,event196";
                                s.events += ",event195,event196";
                            }
                            if (location.pathname.indexOf('preorder/mx-5-rf-launch-edition/gallery') > -1) {
                                s.linkTrackEvents += ",event173,event174";
                                s.events += ",event173,event174";
                            }
                            if (location.pathname == "/") {
                                s.linkTrackEvents += ",event175,event176";
                                s.events += ",event175,event176";
                            }
                            if (location.pathname.indexOf('/shopping-tools/compare-vehicles/') > -1) {
                                s.linkTrackEvents += ",event167,event168";
                                s.events += ",event167,event168";
                            }
                            if (location.pathname.indexOf('/next-generation') > -1 || location.pathname.indexOf('/new-era') > -1) {
                                s.linkTrackEvents += ",event280,event281";
                                s.events += ",event280,event281";
                            }
                            if (s.events !== "") {
                                s.tl(this, 'o', s.prop23 + ':scrolled');
                                utag.link(dataLayer);
                                s.events = "";
                                mazdaAnalytics.log('Scroll triggered for the first time.');
                            }
                        }
                    }, 250);
                    function throttle(func, wait) {
                        var context, args, result;
                        var timeout = null;
                        var previous = 0;
                        var later = function() {
                            previous = new Date();
                            timeout = null;
                            result = func.apply(context, args);
                        };
                        return function() {
                            var now = new Date();
                            if (!previous)
                                previous = now;
                            var remaining = wait - (now - previous);
                            context = this;
                            args = arguments;
                            if (remaining <= 0) {
                                clearTimeout(timeout);
                                timeout = null;
                                previous = now;
                                result = func.apply(context, args);
                            } else if (!timeout) {
                                timeout = setTimeout(later, remaining);
                            }
                            return result;
                        }
                        ;
                    }
                }
            } catch (e) {
                utag.DB(e)
            }
        }
        , function(a, b) {
            try {
                if (1) {
                    var defaultLinkTrackVars = "prop1,eVar3,prop3,eVar4,prop4,prop12,eVar12,prop15,eVar15,prop16,eVar16,prop27,eVar27,prop8,prop23,prop24,prop71,eVar71,prop40,prop41,prop51,eVar51,prop60,eVar60,eVar2,prop50,eVar48,prop48,eVar80,eVar83";
                    s.usePlugins = true;
                    function s_doPlugins(s) {
                        mazdaAnalytics.log('doPlugins is running from Tealium (sorry Ben, but I have to check it for a little bit)');
                        if (mazdaAnalytics.getData('dataLayer.vehicle.vehicleID') != '') {
                            if (dataLayer.vehicle.vehicleID.length == 5) {
                                dataLayer.vehicle.vehicleID = dataLayer.vehicle.vehicleID.substr(2, 5);
                            }
                        }
                        s.eVar15 = s.prop15 = location.hostname;
                        s.server = mazdaAnalytics.getData('dataLayer.server');
                        if (location.hostname == "www.mazdaespanol.com") {
                            s.prop9 = s.eVar9 = dataLayer.language = "es";
                        } else if (location.hostname == "ja.mazdausa.com") {
                            s.prop9 = s.eVar9 = dataLayer.language = "ja";
                        } else if (location.hostname == "zh.mazdausa.com") {
                            s.prop9 = s.eVar9 = dataLayer.language = "zh";
                        } else {
                            s.prop9 = s.eVar9 = mazdaAnalytics.getData('dataLayer.language');
                        }
                        s.prop63 = s.eVar90 = mazdaAnalytics.getData('dataLayer.tier.content');
                        s.eVar39 = mazdaAnalytics.getData('dataLayer.responsive');
                        s.prop74 = s.eVar74 = mazdaAnalytics.getData('dataLayer.platform');
                        s.prop23 = dataLayer.page.fqpn = "musa:" + mazdaAnalytics.getData('dataLayer.site.section') + ":" + mazdaAnalytics.getData('dataLayer.site.subsection') + ":" + mazdaAnalytics.getData('dataLayer.page.name');
                        if (location.hostname == "accessories.mazdausa.com") {
                            s.pageName = "musa:accessories:" + location.pathname;
                            s.prop23 = s.pageName;
                        } else if (mazdaAnalytics.getData('dataLayer.page.nameHistorical')) {
                            s.pageName = mazdaAnalytics.getData('dataLayer.page.nameHistorical');
                        } else {
                            s.pageName = s.prop23;
                        }
                        s.prop24 = document.location;
                        s.prop40 = mazdaAnalytics.getData('dataLayer.site.section');
                        if (mazdaAnalytics.getData('dataLayer.site.sectionHistorical')) {
                            s.channel = mazdaAnalytics.getData('dataLayer.site.sectionHistorical');
                        } else {
                            s.channel = s.prop40;
                        }
                        s.prop41 = mazdaAnalytics.getData('dataLayer.site.section') + ":" + mazdaAnalytics.getData('dataLayer.site.subsection');
                        if (mazdaAnalytics.getData('dataLayer.page.subCategory')) {
                            s.prop8 = mazdaAnalytics.getData('dataLayer.page.subCategory');
                        } else {
                            s.prop8 = s.prop41;
                        }
                        s.prop35 = mazdaAnalytics.getData('dataLayer.errorCodes');
                        s.prop46 = mazdaAnalytics.getData('dataLayer.form.name');
                        s.prop3 = s.eVar3 = mazdaAnalytics.getData('dataLayer.dealer.ID');
                        s.prop45 = mazdaAnalytics.getData('dataLayer.form.type');
                        s.prop57 = mazdaAnalytics.getData('dataLayer.search.term');
                        s.prop62 = mazdaAnalytics.getData('dataLayer.search_type');
                        s.prop59 = mazdaAnalytics.getData('dataLayer.user.distanceFromDealer');
                        s.prop54 = mazdaAnalytics.getData('dataLayer.vehicle.type');
                        s.prop28 = mazdaAnalytics.getData('dataLayer.vehicle.retailPrice');
                        if (mazdaAnalytics.getData('dataLayer.page.name') == 'summary' && mazdaAnalytics.getData('dataLayer.vehicle.modelYear') == '2019' && mazdaAnalytics.getData('dataLayer.vehicle.vehicleID') == 'mx5' && mazdaAnalytics.getData('dataLayer.vehicle.roofTopColor') == '') {
                            s.eVar65 = 'Black Cloth Softtop roof (w/Cloth lining)';
                        } else if (mazdaAnalytics.getData('dataLayer.page.name') == 'summary' && mazdaAnalytics.getData('dataLayer.vehicle.modelYear') == '2019' && mazdaAnalytics.getData('dataLayer.vehicle.vehicleID') == 'mx5') {
                            s.eVar65 = mazdaAnalytics.getData('dataLayer.vehicle.roofTopColor');
                        }
                        s.eVar17 = mazdaAnalytics.getData('dataLayer.form.leadID');
                        if (mazdaAnalytics.getData('dataLayer.vehicle.vehicleID')) {
                            s.eVar71 = s.prop71 = s.prop23 + "_" + mazdaAnalytics.getData('dataLayer.vehicle.vehicleID');
                        } else {
                            s.eVar71 = s.prop71 = s.prop23;
                        }
                        s.prop27 = s.eVar27 = mazdaAnalytics.getData('dataLayer.vehicle.modelYear') + mazdaAnalytics.getData('dataLayer.vehicle.vehicleID');
                        s.eVar12 = s.prop12 = mazdaAnalytics.getData('dataLayer.vehicle.modelYear');
                        s.prop39 = mazdaAnalytics.getData('dataLayer.vehicle.trimCode');
                        if (mazdaAnalytics.getData('dataLayer.vehicle.trimCode').length > 0) {
                            s.prop2 = mazdaAnalytics.getData('dataLayer.vehicle.vehicleID') + "_" + mazdaAnalytics.getData('dataLayer.vehicle.trimCode');
                        }
                        s.eVar7 = mazdaAnalytics.getData('dataLayer.vehicle.exteriorColor');
                        s.prop1 = mazdaAnalytics.getData('dataLayer.vehicle.vehicleID').toUpperCase();
                        ;s.eVar76 = mazdaAnalytics.getData('dataLayer.zipCode');
                        s.prop28 = mazdaAnalytics.getData('dataLayer.vehicle.msrp');
                        s.prop36 = mazdaAnalytics.getData('dataLayer.vehicle.totalCost');
                        s.eVar16 = s.prop16 = mazdaAnalytics.getData('dataLayer.vehicle.nameplate');
                        s.eVar4 = s.prop4 = mazdaAnalytics.getData('dataLayer.user.type');
                        s.prop46 = mazdaAnalytics.getData('dataLayer.form.name');
                        s.prop45 = mazdaAnalytics.getData('dataLayer.form.type');
                        s.prop56 = mazdaAnalytics.getData('dataLayer.search.results');
                        s.prop57 = mazdaAnalytics.getData('dataLayer.search.term');
                        s.prop62 = mazdaAnalytics.getData('dataLayer.search.type');
                        s.eVar80 = mazdaAnalytics.getData('MCID');
                        s.eVar94 = mazdaAnalytics.getData('crtvid');
                        s.eVar11 = mazdaAnalytics.getData('target.variation');
                        if (dataLayer.errorCodes == "404_error") {
                            s.pageName = s.prop23 = "musa:error:404:" + location;
                        }
                        if (!s.prop42) {
                            s.prop42 = "page";
                        }
                        if (s.linkType == "d") {
                            s.eVar68 = s.prop68 = s.linkURL.substring(s.linkURL.lastIndexOf("/") + 1, s.linkURL.length);
                            _satellite.notify("an asset name was added to the download", 1);
                            s.linkTrackVars = defaultLinkTrackVars + ",eVar68,prop68";
                            if (location.pathname.indexOf('brochures') > 0) {
                                s.events = "event15,event100";
                                _satellite.notify("the events were added to the download", 1);
                                s.linkTrackVars = defaultLinkTrackVars + ",events";
                                s.linkTrackEvents = "event15,event100";
                            }
                        }
                        if (s.prop1 != '') {
                            var date = new Date();
                            date.setMonth(date.getMonth() + 120);
                            s.Util.cookieWrite('DTMvehicleID', s.prop1, date);
                        } else if (s.prop1 == '' && s.Util.cookieRead('DTMvehicleID')) {
                            s.prop1 = s.Util.cookieRead('DTMvehicleID');
                        }
                        if (s.prop3 != '') {
                            var date = new Date();
                            date.setMonth(date.getMonth() + 120);
                            s.Util.cookieWrite('DTMdealerID', s.prop3, date);
                        } else if (s.prop3 == '' && s.Util.cookieRead('DTMdealerID')) {
                            s.eVar3 = s.prop3 = s.Util.cookieRead('DTMdealerID');
                        }
                        if (s.prop4 == 'kizuna') {
                            var date = new Date();
                            date.setMonth(date.getMonth() + 120);
                            s.Util.cookieWrite('user.type', s.prop4, date);
                        } else if (s.prop4 != 'kizuna' && s.Util.cookieRead('user.type') == 'kizuna') {
                            s.eVar4 = s.prop4 = s.Util.cookieRead('user.type');
                        }
                        s.eVar61 = s.Util.getQueryParam('k_keyword');
                        s.eVar62 = s.Util.getQueryParam('k_matchtype');
                        if (navigator.doNotTrack == "1") {
                            if (s.events && s.events != "") {
                                s.events = s.events + ",event801,event802";
                            } else {
                                s.events = "event801,event802";
                            }
                        }
                        if (mazdaAnalytics.getData('VIN URL Parameter')) {
                            if (location.pathname.indexOf('shopping-tools/inventory/cpo/') > -1) {
                                s.eVar83 = 'cpo:' + mazdaAnalytics.getData('VIN URL Parameter');
                            }
                            if (location.pathname.indexOf('shopping-tools/inventory/new/') > -1) {
                                s.eVar83 = 'new:' + mazdaAnalytics.getData('VIN URL Parameter');
                            }
                            if (location.pathname.indexOf('/owners/') > -1) {
                                s.eVar83 = 'own:' + mazdaAnalytics.getData('VIN URL Parameter');
                            }
                        }
                        function getParam(name, url) {
                            name = name.replace(/[\[\]]/g, "\\$&");
                            var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)")
                              , results = regex.exec(url);
                            if (!results)
                                return null;
                            if (!results[2])
                                return '';
                            return decodeURIComponent(results[2].replace(/\+/g, " "));
                        }
                        var qs = window.location.search
                          , ref = document.referrer
                          , refDom = ref.split('/')[2]
                          , se = ["google", "yahoo", "bing", "duckduckgo", "myway", "askjeeves", "aol", "msn", "dogpile", "baidu", "yandex"]
                          , kwp = ["q", "p", "q", "q", "searchfor", "q", "q", "q", "q", "wd", "text"];
                        if (ref) {
                            for (i = 0; i < se.length; i++) {
                                if (refDom.indexOf(se[i]) > -1 && getParam("semid", qs)) {
                                    s.eVar42 = "Paid Search";
                                    s.eVar45 = getParam("k_keyword", qs);
                                } else if (refDom.indexOf(se[i]) > -1 && !getParam("semid", qs)) {
                                    s.eVar42 = "Organic Search";
                                    s.eVar43 = s.prop23;
                                    s.eVar44 = document.URL;
                                    s.eVar45 = getParam(kwp[i], ref) || "";
                                }
                            }
                        }
                        mazdaAnalytics.log('doPlugins from Tealium has ended');
                    }
                    ;s.doPlugins = s_doPlugins;
                }
            } catch (e) {
                utag.DB(e)
            }
        }
        , function(a, b) {
            try {
                if (1) {
                    var isVehicleLanding = document.location.pathname.split('/').length === 3;
                    var jqueryHasLoaded = typeof jQuery === 'function';
                    if (!isVehicleLanding && jqueryHasLoaded) {
                        "use strict";
                        var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
                            return typeof obj;
                        }
                        : function(obj) {
                            return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
                        }
                        ;
                        !function() {
                            "use strict";
                            function t(n) {
                                if (!n)
                                    throw new Error("No options passed to Waypoint constructor");
                                if (!n.element)
                                    throw new Error("No element option passed to Waypoint constructor");
                                if (!n.handler)
                                    throw new Error("No handler option passed to Waypoint constructor");
                                this.key = "waypoint-" + e,
                                this.options = t.Adapter.extend({}, t.defaults, n),
                                this.element = this.options.element,
                                this.adapter = new t.Adapter(this.element),
                                this.callback = n.handler,
                                this.axis = this.options.horizontal ? "horizontal" : "vertical",
                                this.enabled = this.options.enabled,
                                this.triggerPoint = null,
                                this.group = t.Group.findOrCreate({
                                    name: this.options.group,
                                    axis: this.axis
                                }),
                                this.context = t.Context.findOrCreateByElement(this.options.context),
                                t.offsetAliases[this.options.offset] && (this.options.offset = t.offsetAliases[this.options.offset]),
                                this.group.add(this),
                                this.context.add(this),
                                i[this.key] = this,
                                e += 1;
                            }
                            var e = 0
                              , i = {};
                            t.prototype.queueTrigger = function(t) {
                                this.group.queueTrigger(this, t);
                            }
                            ,
                            t.prototype.trigger = function(t) {
                                this.enabled && this.callback && this.callback.apply(this, t);
                            }
                            ,
                            t.prototype.destroy = function() {
                                this.context.remove(this),
                                this.group.remove(this),
                                delete i[this.key];
                            }
                            ,
                            t.prototype.disable = function() {
                                return this.enabled = !1,
                                this;
                            }
                            ,
                            t.prototype.enable = function() {
                                return this.context.refresh(),
                                this.enabled = !0,
                                this;
                            }
                            ,
                            t.prototype.next = function() {
                                return this.group.next(this);
                            }
                            ,
                            t.prototype.previous = function() {
                                return this.group.previous(this);
                            }
                            ,
                            t.invokeAll = function(t) {
                                var e = [];
                                for (var n in i) {
                                    e.push(i[n]);
                                }
                                for (var o = 0, r = e.length; r > o; o++) {
                                    e[o][t]();
                                }
                            }
                            ,
                            t.destroyAll = function() {
                                t.invokeAll("destroy");
                            }
                            ,
                            t.disableAll = function() {
                                t.invokeAll("disable");
                            }
                            ,
                            t.enableAll = function() {
                                t.Context.refreshAll();
                                for (var e in i) {
                                    i[e].enabled = !0;
                                }
                                return this;
                            }
                            ,
                            t.refreshAll = function() {
                                t.Context.refreshAll();
                            }
                            ,
                            t.viewportHeight = function() {
                                return window.innerHeight || document.documentElement.clientHeight;
                            }
                            ,
                            t.viewportWidth = function() {
                                return document.documentElement.clientWidth;
                            }
                            ,
                            t.adapters = [],
                            t.defaults = {
                                context: window,
                                continuous: !0,
                                enabled: !0,
                                group: "default",
                                horizontal: !1,
                                offset: 0
                            },
                            t.offsetAliases = {
                                "bottom-in-view": function bottomInView() {
                                    return this.context.innerHeight() - this.adapter.outerHeight();
                                },
                                "right-in-view": function rightInView() {
                                    return this.context.innerWidth() - this.adapter.outerWidth();
                                }
                            },
                            window.Waypoint = t;
                        }(),
                        function() {
                            "use strict";
                            function t(t) {
                                window.setTimeout(t, 1e3 / 60);
                            }
                            function e(t) {
                                this.element = t,
                                this.Adapter = o.Adapter,
                                this.adapter = new this.Adapter(t),
                                this.key = "waypoint-context-" + i,
                                this.didScroll = !1,
                                this.didResize = !1,
                                this.oldScroll = {
                                    x: this.adapter.scrollLeft(),
                                    y: this.adapter.scrollTop()
                                },
                                this.waypoints = {
                                    vertical: {},
                                    horizontal: {}
                                },
                                t.waypointContextKey = this.key,
                                n[t.waypointContextKey] = this,
                                i += 1,
                                o.windowContext || (o.windowContext = !0,
                                o.windowContext = new e(window)),
                                this.createThrottledScrollHandler(),
                                this.createThrottledResizeHandler();
                            }
                            var i = 0
                              , n = {}
                              , o = window.Waypoint
                              , r = window.onload;
                            e.prototype.add = function(t) {
                                var e = t.options.horizontal ? "horizontal" : "vertical";
                                this.waypoints[e][t.key] = t,
                                this.refresh();
                            }
                            ,
                            e.prototype.checkEmpty = function() {
                                var t = this.Adapter.isEmptyObject(this.waypoints.horizontal)
                                  , e = this.Adapter.isEmptyObject(this.waypoints.vertical)
                                  , i = this.element == this.element.window;
                                t && e && !i && (this.adapter.off(".waypoints"),
                                delete n[this.key]);
                            }
                            ,
                            e.prototype.createThrottledResizeHandler = function() {
                                function t() {
                                    e.handleResize(),
                                    e.didResize = !1;
                                }
                                var e = this;
                                this.adapter.on("resize.waypoints", function() {
                                    e.didResize || (e.didResize = !0,
                                    o.requestAnimationFrame(t));
                                });
                            }
                            ,
                            e.prototype.createThrottledScrollHandler = function() {
                                function t() {
                                    e.handleScroll(),
                                    e.didScroll = !1;
                                }
                                var e = this;
                                this.adapter.on("scroll.waypoints", function() {
                                    (!e.didScroll || o.isTouch) && (e.didScroll = !0,
                                    o.requestAnimationFrame(t));
                                });
                            }
                            ,
                            e.prototype.handleResize = function() {
                                o.Context.refreshAll();
                            }
                            ,
                            e.prototype.handleScroll = function() {
                                var t = {}
                                  , e = {
                                    horizontal: {
                                        newScroll: this.adapter.scrollLeft(),
                                        oldScroll: this.oldScroll.x,
                                        forward: "right",
                                        backward: "left"
                                    },
                                    vertical: {
                                        newScroll: this.adapter.scrollTop(),
                                        oldScroll: this.oldScroll.y,
                                        forward: "down",
                                        backward: "up"
                                    }
                                };
                                for (var i in e) {
                                    var n = e[i]
                                      , o = n.newScroll > n.oldScroll
                                      , r = o ? n.forward : n.backward;
                                    for (var s in this.waypoints[i]) {
                                        var l = this.waypoints[i][s];
                                        if (null !== l.triggerPoint) {
                                            var a = n.oldScroll < l.triggerPoint
                                              , h = n.newScroll >= l.triggerPoint
                                              , p = a && h
                                              , u = !a && !h;
                                            (p || u) && (l.queueTrigger(r),
                                            t[l.group.id] = l.group);
                                        }
                                    }
                                }
                                for (var d in t) {
                                    t[d].flushTriggers();
                                }
                                this.oldScroll = {
                                    x: e.horizontal.newScroll,
                                    y: e.vertical.newScroll
                                };
                            }
                            ,
                            e.prototype.innerHeight = function() {
                                return this.element == this.element.window ? o.viewportHeight() : this.adapter.innerHeight();
                            }
                            ,
                            e.prototype.remove = function(t) {
                                delete this.waypoints[t.axis][t.key],
                                this.checkEmpty();
                            }
                            ,
                            e.prototype.innerWidth = function() {
                                return this.element == this.element.window ? o.viewportWidth() : this.adapter.innerWidth();
                            }
                            ,
                            e.prototype.destroy = function() {
                                var t = [];
                                for (var e in this.waypoints) {
                                    for (var i in this.waypoints[e]) {
                                        t.push(this.waypoints[e][i]);
                                    }
                                }
                                for (var n = 0, o = t.length; o > n; n++) {
                                    t[n].destroy();
                                }
                            }
                            ,
                            e.prototype.refresh = function() {
                                var t, e = this.element == this.element.window, i = e ? void 0 : this.adapter.offset(), n = {};
                                this.handleScroll(),
                                t = {
                                    horizontal: {
                                        contextOffset: e ? 0 : i.left,
                                        contextScroll: e ? 0 : this.oldScroll.x,
                                        contextDimension: this.innerWidth(),
                                        oldScroll: this.oldScroll.x,
                                        forward: "right",
                                        backward: "left",
                                        offsetProp: "left"
                                    },
                                    vertical: {
                                        contextOffset: e ? 0 : i.top,
                                        contextScroll: e ? 0 : this.oldScroll.y,
                                        contextDimension: this.innerHeight(),
                                        oldScroll: this.oldScroll.y,
                                        forward: "down",
                                        backward: "up",
                                        offsetProp: "top"
                                    }
                                };
                                for (var r in t) {
                                    var s = t[r];
                                    for (var l in this.waypoints[r]) {
                                        var a, h, p, u, d, f = this.waypoints[r][l], c = f.options.offset, w = f.triggerPoint, y = 0, g = null == w;
                                        f.element !== f.element.window && (y = f.adapter.offset()[s.offsetProp]),
                                        "function" == typeof c ? c = c.apply(f) : "string" == typeof c && (c = parseFloat(c),
                                        f.options.offset.indexOf("%") > -1 && (c = Math.ceil(s.contextDimension * c / 100))),
                                        a = s.contextScroll - s.contextOffset,
                                        f.triggerPoint = Math.floor(y + a - c),
                                        h = w < s.oldScroll,
                                        p = f.triggerPoint >= s.oldScroll,
                                        u = h && p,
                                        d = !h && !p,
                                        !g && u ? (f.queueTrigger(s.backward),
                                        n[f.group.id] = f.group) : !g && d ? (f.queueTrigger(s.forward),
                                        n[f.group.id] = f.group) : g && s.oldScroll >= f.triggerPoint && (f.queueTrigger(s.forward),
                                        n[f.group.id] = f.group);
                                    }
                                }
                                return o.requestAnimationFrame(function() {
                                    for (var t in n) {
                                        n[t].flushTriggers();
                                    }
                                }),
                                this;
                            }
                            ,
                            e.findOrCreateByElement = function(t) {
                                return e.findByElement(t) || new e(t);
                            }
                            ,
                            e.refreshAll = function() {
                                for (var t in n) {
                                    n[t].refresh();
                                }
                            }
                            ,
                            e.findByElement = function(t) {
                                return n[t.waypointContextKey];
                            }
                            ,
                            window.onload = function() {
                                r && r(),
                                e.refreshAll();
                            }
                            ,
                            o.requestAnimationFrame = function(e) {
                                var i = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || t;
                                i.call(window, e);
                            }
                            ,
                            o.Context = e;
                        }(),
                        function() {
                            "use strict";
                            function t(t, e) {
                                return t.triggerPoint - e.triggerPoint;
                            }
                            function e(t, e) {
                                return e.triggerPoint - t.triggerPoint;
                            }
                            function i(t) {
                                this.name = t.name,
                                this.axis = t.axis,
                                this.id = this.name + "-" + this.axis,
                                this.waypoints = [],
                                this.clearTriggerQueues(),
                                n[this.axis][this.name] = this;
                            }
                            var n = {
                                vertical: {},
                                horizontal: {}
                            }
                              , o = window.Waypoint;
                            i.prototype.add = function(t) {
                                this.waypoints.push(t);
                            }
                            ,
                            i.prototype.clearTriggerQueues = function() {
                                this.triggerQueues = {
                                    up: [],
                                    down: [],
                                    left: [],
                                    right: []
                                };
                            }
                            ,
                            i.prototype.flushTriggers = function() {
                                for (var i in this.triggerQueues) {
                                    var n = this.triggerQueues[i]
                                      , o = "up" === i || "left" === i;
                                    n.sort(o ? e : t);
                                    for (var r = 0, s = n.length; s > r; r += 1) {
                                        var l = n[r];
                                        (l.options.continuous || r === n.length - 1) && l.trigger([i]);
                                    }
                                }
                                this.clearTriggerQueues();
                            }
                            ,
                            i.prototype.next = function(e) {
                                this.waypoints.sort(t);
                                var i = o.Adapter.inArray(e, this.waypoints)
                                  , n = i === this.waypoints.length - 1;
                                return n ? null : this.waypoints[i + 1];
                            }
                            ,
                            i.prototype.previous = function(e) {
                                this.waypoints.sort(t);
                                var i = o.Adapter.inArray(e, this.waypoints);
                                return i ? this.waypoints[i - 1] : null;
                            }
                            ,
                            i.prototype.queueTrigger = function(t, e) {
                                this.triggerQueues[e].push(t);
                            }
                            ,
                            i.prototype.remove = function(t) {
                                var e = o.Adapter.inArray(t, this.waypoints);
                                e > -1 && this.waypoints.splice(e, 1);
                            }
                            ,
                            i.prototype.first = function() {
                                return this.waypoints[0];
                            }
                            ,
                            i.prototype.last = function() {
                                return this.waypoints[this.waypoints.length - 1];
                            }
                            ,
                            i.findOrCreate = function(t) {
                                return n[t.axis][t.name] || new i(t);
                            }
                            ,
                            o.Group = i;
                        }(),
                        function() {
                            "use strict";
                            function t(t) {
                                return t === t.window;
                            }
                            function e(e) {
                                return t(e) ? e : e.defaultView;
                            }
                            function i(t) {
                                this.element = t,
                                this.handlers = {};
                            }
                            var n = window.Waypoint;
                            i.prototype.innerHeight = function() {
                                var e = t(this.element);
                                return e ? this.element.innerHeight : this.element.clientHeight;
                            }
                            ,
                            i.prototype.innerWidth = function() {
                                var e = t(this.element);
                                return e ? this.element.innerWidth : this.element.clientWidth;
                            }
                            ,
                            i.prototype.off = function(t, e) {
                                function i(t, e, i) {
                                    for (var n = 0, o = e.length - 1; o > n; n++) {
                                        var r = e[n];
                                        i && i !== r || t.removeEventListener(r);
                                    }
                                }
                                var n = t.split(".")
                                  , o = n[0]
                                  , r = n[1]
                                  , s = this.element;
                                if (r && this.handlers[r] && o)
                                    i(s, this.handlers[r][o], e),
                                    this.handlers[r][o] = [];
                                else if (o)
                                    for (var l in this.handlers) {
                                        i(s, this.handlers[l][o] || [], e),
                                        this.handlers[l][o] = [];
                                    }
                                else if (r && this.handlers[r]) {
                                    for (var a in this.handlers[r]) {
                                        i(s, this.handlers[r][a], e);
                                    }
                                    this.handlers[r] = {};
                                }
                            }
                            ,
                            i.prototype.offset = function() {
                                if (!this.element.ownerDocument)
                                    return null;
                                var t = this.element.ownerDocument.documentElement
                                  , i = e(this.element.ownerDocument)
                                  , n = {
                                    top: 0,
                                    left: 0
                                };
                                return this.element.getBoundingClientRect && (n = this.element.getBoundingClientRect()),
                                {
                                    top: n.top + i.pageYOffset - t.clientTop,
                                    left: n.left + i.pageXOffset - t.clientLeft
                                };
                            }
                            ,
                            i.prototype.on = function(t, e) {
                                var i = t.split(".")
                                  , n = i[0]
                                  , o = i[1] || "__default"
                                  , r = this.handlers[o] = this.handlers[o] || {}
                                  , s = r[n] = r[n] || [];
                                s.push(e),
                                this.element.addEventListener(n, e);
                            }
                            ,
                            i.prototype.outerHeight = function(e) {
                                var i, n = this.innerHeight();
                                return e && !t(this.element) && (i = window.getComputedStyle(this.element),
                                n += parseInt(i.marginTop, 10),
                                n += parseInt(i.marginBottom, 10)),
                                n;
                            }
                            ,
                            i.prototype.outerWidth = function(e) {
                                var i, n = this.innerWidth();
                                return e && !t(this.element) && (i = window.getComputedStyle(this.element),
                                n += parseInt(i.marginLeft, 10),
                                n += parseInt(i.marginRight, 10)),
                                n;
                            }
                            ,
                            i.prototype.scrollLeft = function() {
                                var t = e(this.element);
                                return t ? t.pageXOffset : this.element.scrollLeft;
                            }
                            ,
                            i.prototype.scrollTop = function() {
                                var t = e(this.element);
                                return t ? t.pageYOffset : this.element.scrollTop;
                            }
                            ,
                            i.extend = function() {
                                function t(t, e) {
                                    if ("object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)))
                                        for (var i in e) {
                                            e.hasOwnProperty(i) && (t[i] = e[i]);
                                        }
                                    return t;
                                }
                                for (var e = Array.prototype.slice.call(arguments), i = 1, n = e.length; n > i; i++) {
                                    t(e[0], e[i]);
                                }
                                return e[0];
                            }
                            ,
                            i.inArray = function(t, e, i) {
                                return null == e ? -1 : e.indexOf(t, i);
                            }
                            ,
                            i.isEmptyObject = function(t) {
                                for (var e in t) {
                                    return !1;
                                }
                                return !0;
                            }
                            ,
                            n.adapters.push({
                                name: "noframework",
                                Adapter: i
                            }),
                            n.Adapter = i;
                        }();
                        !function() {
                            "use strict";
                            function t() {}
                            function e(t) {
                                this.options = i.Adapter.extend({}, e.defaults, t),
                                this.axis = this.options.horizontal ? "horizontal" : "vertical",
                                this.waypoints = [],
                                this.element = this.options.element,
                                this.createWaypoints();
                            }
                            var i = window.Waypoint;
                            e.prototype.createWaypoints = function() {
                                for (var t = {
                                    vertical: [{
                                        down: "enter",
                                        up: "exited",
                                        offset: "100%"
                                    }, {
                                        down: "entered",
                                        up: "exit",
                                        offset: "bottom-in-view"
                                    }, {
                                        down: "exit",
                                        up: "entered",
                                        offset: 0
                                    }, {
                                        down: "exited",
                                        up: "enter",
                                        offset: function offset() {
                                            return -this.adapter.outerHeight();
                                        }
                                    }],
                                    horizontal: [{
                                        right: "enter",
                                        left: "exited",
                                        offset: "100%"
                                    }, {
                                        right: "entered",
                                        left: "exit",
                                        offset: "right-in-view"
                                    }, {
                                        right: "exit",
                                        left: "entered",
                                        offset: 0
                                    }, {
                                        right: "exited",
                                        left: "enter",
                                        offset: function offset() {
                                            return -this.adapter.outerWidth();
                                        }
                                    }]
                                }, e = 0, i = t[this.axis].length; i > e; e++) {
                                    var n = t[this.axis][e];
                                    this.createWaypoint(n);
                                }
                            }
                            ,
                            e.prototype.createWaypoint = function(t) {
                                var e = this;
                                this.waypoints.push(new i({
                                    context: this.options.context,
                                    element: this.options.element,
                                    enabled: this.options.enabled,
                                    handler: function(t) {
                                        return function(i) {
                                            e.options[t[i]].call(e, i);
                                        }
                                        ;
                                    }(t),
                                    offset: t.offset,
                                    horizontal: this.options.horizontal
                                }));
                            }
                            ,
                            e.prototype.destroy = function() {
                                for (var t = 0, e = this.waypoints.length; e > t; t++) {
                                    this.waypoints[t].destroy();
                                }
                                this.waypoints = [];
                            }
                            ,
                            e.prototype.disable = function() {
                                for (var t = 0, e = this.waypoints.length; e > t; t++) {
                                    this.waypoints[t].disable();
                                }
                            }
                            ,
                            e.prototype.enable = function() {
                                for (var t = 0, e = this.waypoints.length; e > t; t++) {
                                    this.waypoints[t].enable();
                                }
                            }
                            ,
                            e.defaults = {
                                context: window,
                                enabled: !0,
                                enter: t,
                                entered: t,
                                exit: t,
                                exited: t
                            },
                            i.Inview = e;
                        }();
                        var _pageName = mazdaAnalytics.getData("dataLayer.page.name") || ""
                          , _compAttr = "data-analytics-content-description"
                          , _panelSelector = 'main > div > div[data-analytics-content-description]:not([class*="tout"]):not([class*="accordion"]):not([class*="-hero"]):not([class*="light-text"])'
                          , _vlpSelectors = ['div[class$="trims__container"]', 'div[class$="gallery-full__container"]', 'div[class*="gallery"] + div.container', 'div[class$="video-background__inner"]', 'div[class$="cargo-capacity"]', 'div[class$="iactive__slide-container"]', 'div[class$="kmu-container"]', 'div[class$="flexiblecontent-slider"]', 'div[class$="flexiblecontent-timeline__slider"]', 'div[class$="gallery-social"]', 'div[class="mdp-gallery-social no-carousel container"]']
                          , _customizableSelectors = ['div[class$="fleet-contact"]', 'div[class$="details__dealer-map"]', 'div[class$="inventory--details__autocheck"]', 'div[class$="inventory--details__totals"]', 'div[class$="inventory--details__details"]']
                          , _oneOffSelectors = ['div[data-analytics-content-description="Dual Facilities"]', 'div[data-analytics-content-description="Ready to Load"]', 'div[data-analytics-content-description="PORTS OF CALL"]', 'div[data-analytics-content-description="Precision Loading"]', 'div[data-analytics-content-description="ALL ASHORE"]', 'div[data-analytics-content-description$="S A PROCESS"]', 'div[data-analytics-content-description="STAGING AND ACCESSORIES"]', 'div[data-analytics-content-description="Roadways and Railways"]', 'div[data-analytics-content-description="Almost Home"]', 'div[data-analytics-content-description="cx5_paint"]', 'div[data-analytics-content-description="cx5_acc_copy"]', 'div[data-analytics-content-description="New Era Reveal Live Video"]']
                          , _scrolledComponentSelector = _vlpSelectors.concat(_panelSelector).concat(_customizableSelectors).concat(_oneOffSelectors);
                        var panels = document.querySelectorAll(_scrolledComponentSelector);
                        var waypoints = Array.from(panels).map(function(panel) {
                            return new Waypoint.Inview({
                                element: panel,
                                entered: function entered(x) {
                                    trackPanel(panel);
                                    this.destroy();
                                },
                                offset: 300
                            });
                        });
                        function trackPanel(panel) {
                            var _comp = jQuery(panel);
                            var _compName = !!_comp.attr(_compAttr) ? _comp.attr(_compAttr).replace(/-|\s/g, "_").toLowerCase() : _comp.find('[data-analytics-link-component-name]').length ? _comp.find('[data-analytics-link-component-name]').attr('data-analytics-link-component-name') : _comp.find('h3').length ? _comp.find('h3').first().text() : '';
                            _compName = _compName.replace(/-|\s/g, "_").replace(/\W/, '_').replace(/\_{2,}/g, '_').toLowerCase() || 'missing component';
                            var dataValue = typeof dataLayer !== 'undefined' ? _compName : '';
                            mazdaAnalytics.setData("dataLayer.panel", dataValue);
                            var override = {};
                            override.pageName = _pageName + ':' + _compName;
                            override.prop69 = _compName;
                            override.eVar69 = _compName;
                            override.events = _compName == 'kmu_form_single_veh' ? 'event201,event202' : 'event193,event194';
                            override.linkTrackVars = defaultLinkTrackVars + ',events,prop69,eVar69';
                            override.linkTrackEvents = _compName == 'kmu_form_single_veh' ? 'event201,event202' : 'event193,event194';
                            if (_compName !== 'missing component') {
                                mazdaAnalytics.log('༼ つ ◕o◕ ༽つ Component into View: ' + _compName + '\n');
                            } else {
                                mazdaAnalytics.log('(ꉺ⍸ꉺ) Component is missing ' + '\n');
                            }
                            var ignorable = _compName == 'service_features_blocks' || _compName.indexOf('_hero') > -1 || _compName == 'missing component';
                            if (!ignorable) {
                                s.tl(this, 'o', override.prop69, override);
                                utag.link(dataLayer);
                            }
                        }
                    }
                }
            } catch (e) {
                utag.DB(e)
            }
        }
        , function(a, b) {
            try {
                if (1) {
                    var isVehicleLanding = document.location.pathname.split('/').length === 3;
                    var jqueryHasLoaded = typeof jQuery === 'function';
                    if (isVehicleLanding && jqueryHasLoaded && (location.href.indexOf("2018-mazda6#kmu" == -1))) {
                        "use strict";
                        var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
                            return typeof obj;
                        }
                        : function(obj) {
                            return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
                        }
                        ;
                        !function() {
                            "use strict";
                            function t(n) {
                                if (!n)
                                    throw new Error("No options passed to Waypoint constructor");
                                if (!n.element)
                                    throw new Error("No element option passed to Waypoint constructor");
                                if (!n.handler)
                                    throw new Error("No handler option passed to Waypoint constructor");
                                this.key = "waypoint-" + e,
                                this.options = t.Adapter.extend({}, t.defaults, n),
                                this.element = this.options.element,
                                this.adapter = new t.Adapter(this.element),
                                this.callback = n.handler,
                                this.axis = this.options.horizontal ? "horizontal" : "vertical",
                                this.enabled = this.options.enabled,
                                this.triggerPoint = null,
                                this.group = t.Group.findOrCreate({
                                    name: this.options.group,
                                    axis: this.axis
                                }),
                                this.context = t.Context.findOrCreateByElement(this.options.context),
                                t.offsetAliases[this.options.offset] && (this.options.offset = t.offsetAliases[this.options.offset]),
                                this.group.add(this),
                                this.context.add(this),
                                i[this.key] = this,
                                e += 1;
                            }
                            var e = 0
                              , i = {};
                            t.prototype.queueTrigger = function(t) {
                                this.group.queueTrigger(this, t);
                            }
                            ,
                            t.prototype.trigger = function(t) {
                                this.enabled && this.callback && this.callback.apply(this, t);
                            }
                            ,
                            t.prototype.destroy = function() {
                                this.context.remove(this),
                                this.group.remove(this),
                                delete i[this.key];
                            }
                            ,
                            t.prototype.disable = function() {
                                return this.enabled = !1,
                                this;
                            }
                            ,
                            t.prototype.enable = function() {
                                return this.context.refresh(),
                                this.enabled = !0,
                                this;
                            }
                            ,
                            t.prototype.next = function() {
                                return this.group.next(this);
                            }
                            ,
                            t.prototype.previous = function() {
                                return this.group.previous(this);
                            }
                            ,
                            t.invokeAll = function(t) {
                                var e = [];
                                for (var n in i) {
                                    e.push(i[n]);
                                }
                                for (var o = 0, r = e.length; r > o; o++) {
                                    e[o][t]();
                                }
                            }
                            ,
                            t.destroyAll = function() {
                                t.invokeAll("destroy");
                            }
                            ,
                            t.disableAll = function() {
                                t.invokeAll("disable");
                            }
                            ,
                            t.enableAll = function() {
                                t.Context.refreshAll();
                                for (var e in i) {
                                    i[e].enabled = !0;
                                }
                                return this;
                            }
                            ,
                            t.refreshAll = function() {
                                t.Context.refreshAll();
                            }
                            ,
                            t.viewportHeight = function() {
                                return window.innerHeight || document.documentElement.clientHeight;
                            }
                            ,
                            t.viewportWidth = function() {
                                return document.documentElement.clientWidth;
                            }
                            ,
                            t.adapters = [],
                            t.defaults = {
                                context: window,
                                continuous: !0,
                                enabled: !0,
                                group: "default",
                                horizontal: !1,
                                offset: 0
                            },
                            t.offsetAliases = {
                                "bottom-in-view": function bottomInView() {
                                    return this.context.innerHeight() - this.adapter.outerHeight();
                                },
                                "right-in-view": function rightInView() {
                                    return this.context.innerWidth() - this.adapter.outerWidth();
                                }
                            },
                            window.Waypoint = t;
                        }(),
                        function() {
                            "use strict";
                            function t(t) {
                                window.setTimeout(t, 1e3 / 60);
                            }
                            function e(t) {
                                this.element = t,
                                this.Adapter = o.Adapter,
                                this.adapter = new this.Adapter(t),
                                this.key = "waypoint-context-" + i,
                                this.didScroll = !1,
                                this.didResize = !1,
                                this.oldScroll = {
                                    x: this.adapter.scrollLeft(),
                                    y: this.adapter.scrollTop()
                                },
                                this.waypoints = {
                                    vertical: {},
                                    horizontal: {}
                                },
                                t.waypointContextKey = this.key,
                                n[t.waypointContextKey] = this,
                                i += 1,
                                o.windowContext || (o.windowContext = !0,
                                o.windowContext = new e(window)),
                                this.createThrottledScrollHandler(),
                                this.createThrottledResizeHandler();
                            }
                            var i = 0
                              , n = {}
                              , o = window.Waypoint
                              , r = window.onload;
                            e.prototype.add = function(t) {
                                var e = t.options.horizontal ? "horizontal" : "vertical";
                                this.waypoints[e][t.key] = t,
                                this.refresh();
                            }
                            ,
                            e.prototype.checkEmpty = function() {
                                var t = this.Adapter.isEmptyObject(this.waypoints.horizontal)
                                  , e = this.Adapter.isEmptyObject(this.waypoints.vertical)
                                  , i = this.element == this.element.window;
                                t && e && !i && (this.adapter.off(".waypoints"),
                                delete n[this.key]);
                            }
                            ,
                            e.prototype.createThrottledResizeHandler = function() {
                                function t() {
                                    e.handleResize(),
                                    e.didResize = !1;
                                }
                                var e = this;
                                this.adapter.on("resize.waypoints", function() {
                                    e.didResize || (e.didResize = !0,
                                    o.requestAnimationFrame(t));
                                });
                            }
                            ,
                            e.prototype.createThrottledScrollHandler = function() {
                                function t() {
                                    e.handleScroll(),
                                    e.didScroll = !1;
                                }
                                var e = this;
                                this.adapter.on("scroll.waypoints", function() {
                                    (!e.didScroll || o.isTouch) && (e.didScroll = !0,
                                    o.requestAnimationFrame(t));
                                });
                            }
                            ,
                            e.prototype.handleResize = function() {
                                o.Context.refreshAll();
                            }
                            ,
                            e.prototype.handleScroll = function() {
                                var t = {}
                                  , e = {
                                    horizontal: {
                                        newScroll: this.adapter.scrollLeft(),
                                        oldScroll: this.oldScroll.x,
                                        forward: "right",
                                        backward: "left"
                                    },
                                    vertical: {
                                        newScroll: this.adapter.scrollTop(),
                                        oldScroll: this.oldScroll.y,
                                        forward: "down",
                                        backward: "up"
                                    }
                                };
                                for (var i in e) {
                                    var n = e[i]
                                      , o = n.newScroll > n.oldScroll
                                      , r = o ? n.forward : n.backward;
                                    for (var s in this.waypoints[i]) {
                                        var l = this.waypoints[i][s];
                                        if (null !== l.triggerPoint) {
                                            var a = n.oldScroll < l.triggerPoint
                                              , h = n.newScroll >= l.triggerPoint
                                              , p = a && h
                                              , u = !a && !h;
                                            (p || u) && (l.queueTrigger(r),
                                            t[l.group.id] = l.group);
                                        }
                                    }
                                }
                                for (var d in t) {
                                    t[d].flushTriggers();
                                }
                                this.oldScroll = {
                                    x: e.horizontal.newScroll,
                                    y: e.vertical.newScroll
                                };
                            }
                            ,
                            e.prototype.innerHeight = function() {
                                return this.element == this.element.window ? o.viewportHeight() : this.adapter.innerHeight();
                            }
                            ,
                            e.prototype.remove = function(t) {
                                delete this.waypoints[t.axis][t.key],
                                this.checkEmpty();
                            }
                            ,
                            e.prototype.innerWidth = function() {
                                return this.element == this.element.window ? o.viewportWidth() : this.adapter.innerWidth();
                            }
                            ,
                            e.prototype.destroy = function() {
                                var t = [];
                                for (var e in this.waypoints) {
                                    for (var i in this.waypoints[e]) {
                                        t.push(this.waypoints[e][i]);
                                    }
                                }
                                for (var n = 0, o = t.length; o > n; n++) {
                                    t[n].destroy();
                                }
                            }
                            ,
                            e.prototype.refresh = function() {
                                var t, e = this.element == this.element.window, i = e ? void 0 : this.adapter.offset(), n = {};
                                this.handleScroll(),
                                t = {
                                    horizontal: {
                                        contextOffset: e ? 0 : i.left,
                                        contextScroll: e ? 0 : this.oldScroll.x,
                                        contextDimension: this.innerWidth(),
                                        oldScroll: this.oldScroll.x,
                                        forward: "right",
                                        backward: "left",
                                        offsetProp: "left"
                                    },
                                    vertical: {
                                        contextOffset: e ? 0 : i.top,
                                        contextScroll: e ? 0 : this.oldScroll.y,
                                        contextDimension: this.innerHeight(),
                                        oldScroll: this.oldScroll.y,
                                        forward: "down",
                                        backward: "up",
                                        offsetProp: "top"
                                    }
                                };
                                for (var r in t) {
                                    var s = t[r];
                                    for (var l in this.waypoints[r]) {
                                        var a, h, p, u, d, f = this.waypoints[r][l], c = f.options.offset, w = f.triggerPoint, y = 0, g = null == w;
                                        f.element !== f.element.window && (y = f.adapter.offset()[s.offsetProp]),
                                        "function" == typeof c ? c = c.apply(f) : "string" == typeof c && (c = parseFloat(c),
                                        f.options.offset.indexOf("%") > -1 && (c = Math.ceil(s.contextDimension * c / 100))),
                                        a = s.contextScroll - s.contextOffset,
                                        f.triggerPoint = Math.floor(y + a - c),
                                        h = w < s.oldScroll,
                                        p = f.triggerPoint >= s.oldScroll,
                                        u = h && p,
                                        d = !h && !p,
                                        !g && u ? (f.queueTrigger(s.backward),
                                        n[f.group.id] = f.group) : !g && d ? (f.queueTrigger(s.forward),
                                        n[f.group.id] = f.group) : g && s.oldScroll >= f.triggerPoint && (f.queueTrigger(s.forward),
                                        n[f.group.id] = f.group);
                                    }
                                }
                                return o.requestAnimationFrame(function() {
                                    for (var t in n) {
                                        n[t].flushTriggers();
                                    }
                                }),
                                this;
                            }
                            ,
                            e.findOrCreateByElement = function(t) {
                                return e.findByElement(t) || new e(t);
                            }
                            ,
                            e.refreshAll = function() {
                                for (var t in n) {
                                    n[t].refresh();
                                }
                            }
                            ,
                            e.findByElement = function(t) {
                                return n[t.waypointContextKey];
                            }
                            ,
                            window.onload = function() {
                                r && r(),
                                e.refreshAll();
                            }
                            ,
                            o.requestAnimationFrame = function(e) {
                                var i = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || t;
                                i.call(window, e);
                            }
                            ,
                            o.Context = e;
                        }(),
                        function() {
                            "use strict";
                            function t(t, e) {
                                return t.triggerPoint - e.triggerPoint;
                            }
                            function e(t, e) {
                                return e.triggerPoint - t.triggerPoint;
                            }
                            function i(t) {
                                this.name = t.name,
                                this.axis = t.axis,
                                this.id = this.name + "-" + this.axis,
                                this.waypoints = [],
                                this.clearTriggerQueues(),
                                n[this.axis][this.name] = this;
                            }
                            var n = {
                                vertical: {},
                                horizontal: {}
                            }
                              , o = window.Waypoint;
                            i.prototype.add = function(t) {
                                this.waypoints.push(t);
                            }
                            ,
                            i.prototype.clearTriggerQueues = function() {
                                this.triggerQueues = {
                                    up: [],
                                    down: [],
                                    left: [],
                                    right: []
                                };
                            }
                            ,
                            i.prototype.flushTriggers = function() {
                                for (var i in this.triggerQueues) {
                                    var n = this.triggerQueues[i]
                                      , o = "up" === i || "left" === i;
                                    n.sort(o ? e : t);
                                    for (var r = 0, s = n.length; s > r; r += 1) {
                                        var l = n[r];
                                        (l.options.continuous || r === n.length - 1) && l.trigger([i]);
                                    }
                                }
                                this.clearTriggerQueues();
                            }
                            ,
                            i.prototype.next = function(e) {
                                this.waypoints.sort(t);
                                var i = o.Adapter.inArray(e, this.waypoints)
                                  , n = i === this.waypoints.length - 1;
                                return n ? null : this.waypoints[i + 1];
                            }
                            ,
                            i.prototype.previous = function(e) {
                                this.waypoints.sort(t);
                                var i = o.Adapter.inArray(e, this.waypoints);
                                return i ? this.waypoints[i - 1] : null;
                            }
                            ,
                            i.prototype.queueTrigger = function(t, e) {
                                this.triggerQueues[e].push(t);
                            }
                            ,
                            i.prototype.remove = function(t) {
                                var e = o.Adapter.inArray(t, this.waypoints);
                                e > -1 && this.waypoints.splice(e, 1);
                            }
                            ,
                            i.prototype.first = function() {
                                return this.waypoints[0];
                            }
                            ,
                            i.prototype.last = function() {
                                return this.waypoints[this.waypoints.length - 1];
                            }
                            ,
                            i.findOrCreate = function(t) {
                                return n[t.axis][t.name] || new i(t);
                            }
                            ,
                            o.Group = i;
                        }(),
                        function() {
                            "use strict";
                            function t(t) {
                                return t === t.window;
                            }
                            function e(e) {
                                return t(e) ? e : e.defaultView;
                            }
                            function i(t) {
                                this.element = t,
                                this.handlers = {};
                            }
                            var n = window.Waypoint;
                            i.prototype.innerHeight = function() {
                                var e = t(this.element);
                                return e ? this.element.innerHeight : this.element.clientHeight;
                            }
                            ,
                            i.prototype.innerWidth = function() {
                                var e = t(this.element);
                                return e ? this.element.innerWidth : this.element.clientWidth;
                            }
                            ,
                            i.prototype.off = function(t, e) {
                                function i(t, e, i) {
                                    for (var n = 0, o = e.length - 1; o > n; n++) {
                                        var r = e[n];
                                        i && i !== r || t.removeEventListener(r);
                                    }
                                }
                                var n = t.split(".")
                                  , o = n[0]
                                  , r = n[1]
                                  , s = this.element;
                                if (r && this.handlers[r] && o)
                                    i(s, this.handlers[r][o], e),
                                    this.handlers[r][o] = [];
                                else if (o)
                                    for (var l in this.handlers) {
                                        i(s, this.handlers[l][o] || [], e),
                                        this.handlers[l][o] = [];
                                    }
                                else if (r && this.handlers[r]) {
                                    for (var a in this.handlers[r]) {
                                        i(s, this.handlers[r][a], e);
                                    }
                                    this.handlers[r] = {};
                                }
                            }
                            ,
                            i.prototype.offset = function() {
                                if (!this.element.ownerDocument)
                                    return null;
                                var t = this.element.ownerDocument.documentElement
                                  , i = e(this.element.ownerDocument)
                                  , n = {
                                    top: 0,
                                    left: 0
                                };
                                return this.element.getBoundingClientRect && (n = this.element.getBoundingClientRect()),
                                {
                                    top: n.top + i.pageYOffset - t.clientTop,
                                    left: n.left + i.pageXOffset - t.clientLeft
                                };
                            }
                            ,
                            i.prototype.on = function(t, e) {
                                var i = t.split(".")
                                  , n = i[0]
                                  , o = i[1] || "__default"
                                  , r = this.handlers[o] = this.handlers[o] || {}
                                  , s = r[n] = r[n] || [];
                                s.push(e),
                                this.element.addEventListener(n, e);
                            }
                            ,
                            i.prototype.outerHeight = function(e) {
                                var i, n = this.innerHeight();
                                return e && !t(this.element) && (i = window.getComputedStyle(this.element),
                                n += parseInt(i.marginTop, 10),
                                n += parseInt(i.marginBottom, 10)),
                                n;
                            }
                            ,
                            i.prototype.outerWidth = function(e) {
                                var i, n = this.innerWidth();
                                return e && !t(this.element) && (i = window.getComputedStyle(this.element),
                                n += parseInt(i.marginLeft, 10),
                                n += parseInt(i.marginRight, 10)),
                                n;
                            }
                            ,
                            i.prototype.scrollLeft = function() {
                                var t = e(this.element);
                                return t ? t.pageXOffset : this.element.scrollLeft;
                            }
                            ,
                            i.prototype.scrollTop = function() {
                                var t = e(this.element);
                                return t ? t.pageYOffset : this.element.scrollTop;
                            }
                            ,
                            i.extend = function() {
                                function t(t, e) {
                                    if ("object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)))
                                        for (var i in e) {
                                            e.hasOwnProperty(i) && (t[i] = e[i]);
                                        }
                                    return t;
                                }
                                for (var e = Array.prototype.slice.call(arguments), i = 1, n = e.length; n > i; i++) {
                                    t(e[0], e[i]);
                                }
                                return e[0];
                            }
                            ,
                            i.inArray = function(t, e, i) {
                                return null == e ? -1 : e.indexOf(t, i);
                            }
                            ,
                            i.isEmptyObject = function(t) {
                                for (var e in t) {
                                    return !1;
                                }
                                return !0;
                            }
                            ,
                            n.adapters.push({
                                name: "noframework",
                                Adapter: i
                            }),
                            n.Adapter = i;
                        }();
                        !function() {
                            "use strict";
                            function t() {}
                            function e(t) {
                                this.options = i.Adapter.extend({}, e.defaults, t),
                                this.axis = this.options.horizontal ? "horizontal" : "vertical",
                                this.waypoints = [],
                                this.element = this.options.element,
                                this.createWaypoints();
                            }
                            var i = window.Waypoint;
                            e.prototype.createWaypoints = function() {
                                for (var t = {
                                    vertical: [{
                                        down: "enter",
                                        up: "exited",
                                        offset: "100%"
                                    }, {
                                        down: "entered",
                                        up: "exit",
                                        offset: "bottom-in-view"
                                    }, {
                                        down: "exit",
                                        up: "entered",
                                        offset: 0
                                    }, {
                                        down: "exited",
                                        up: "enter",
                                        offset: function offset() {
                                            return -this.adapter.outerHeight();
                                        }
                                    }],
                                    horizontal: [{
                                        right: "enter",
                                        left: "exited",
                                        offset: "100%"
                                    }, {
                                        right: "entered",
                                        left: "exit",
                                        offset: "right-in-view"
                                    }, {
                                        right: "exit",
                                        left: "entered",
                                        offset: 0
                                    }, {
                                        right: "exited",
                                        left: "enter",
                                        offset: function offset() {
                                            return -this.adapter.outerWidth();
                                        }
                                    }]
                                }, e = 0, i = t[this.axis].length; i > e; e++) {
                                    var n = t[this.axis][e];
                                    this.createWaypoint(n);
                                }
                            }
                            ,
                            e.prototype.createWaypoint = function(t) {
                                var e = this;
                                this.waypoints.push(new i({
                                    context: this.options.context,
                                    element: this.options.element,
                                    enabled: this.options.enabled,
                                    handler: function(t) {
                                        return function(i) {
                                            e.options[t[i]].call(e, i);
                                        }
                                        ;
                                    }(t),
                                    offset: t.offset,
                                    horizontal: this.options.horizontal
                                }));
                            }
                            ,
                            e.prototype.destroy = function() {
                                for (var t = 0, e = this.waypoints.length; e > t; t++) {
                                    this.waypoints[t].destroy();
                                }
                                this.waypoints = [];
                            }
                            ,
                            e.prototype.disable = function() {
                                for (var t = 0, e = this.waypoints.length; e > t; t++) {
                                    this.waypoints[t].disable();
                                }
                            }
                            ,
                            e.prototype.enable = function() {
                                for (var t = 0, e = this.waypoints.length; e > t; t++) {
                                    this.waypoints[t].enable();
                                }
                            }
                            ,
                            e.defaults = {
                                context: window,
                                enabled: !0,
                                enter: t,
                                entered: t,
                                exit: t,
                                exited: t
                            },
                            i.Inview = e;
                        }();
                        var _pageName = mazdaAnalytics.getData("dataLayer.page.name") || ""
                          , _compAttr = "data-analytics-content-description"
                          , _panelSelector = 'main > div > div[data-analytics-content-description]:not([class*="tout"]):not([class*="accordion"]):not([class*="-hero"]):not([class*="light-text"])'
                          , _vlpSelectors = ['div[class$="trims__container"]', 'div[class$="gallery-full__container"]', 'div[class*="gallery"] + div.container', 'div[class$="video-background__inner"]', 'div[class$="cargo-capacity"]', 'div[class$="iactive__slide-container"]', 'div[class$="kmu-container"]', 'div[class$="flexiblecontent-slider"]', 'div[class$="flexiblecontent-timeline__slider"]', 'div[class$="gallery-social"]', 'div[class="mdp-gallery-social no-carousel container"]']
                          , _customizableSelectors = ['div[class$="fleet-contact"]', 'div[class$="details__dealer-map"]', 'div[class$="inventory--details__autocheck"]', 'div[class$="inventory--details__totals"]', 'div[class$="inventory--details__details"]']
                          , _oneOffSelectors = ['div[data-analytics-content-description="Dual Facilities"]', 'div[data-analytics-content-description="Ready to Load"]', 'div[data-analytics-content-description="PORTS OF CALL"]', 'div[data-analytics-content-description="Precision Loading"]', 'div[data-analytics-content-description="ALL ASHORE"]', 'div[data-analytics-content-description$="S A PROCESS"]', 'div[data-analytics-content-description="STAGING AND ACCESSORIES"]', 'div[data-analytics-content-description="Roadways and Railways"]', 'div[data-analytics-content-description="Almost Home"]', 'div[data-analytics-content-description="cx5_paint"]', 'div[data-analytics-content-description="cx5_acc_copy"]']
                          , _scrolledComponentSelector = _vlpSelectors.concat(_panelSelector).concat(_customizableSelectors).concat(_oneOffSelectors);
                        var panels = document.querySelectorAll(_scrolledComponentSelector);
                        var waypoints = Array.from(panels).map(function(panel) {
                            return new Waypoint.Inview({
                                element: panel,
                                entered: function entered(x) {
                                    trackPanel(panel);
                                },
                                offset: '50%',
                                exited: function exited(x) {
                                    this.destroy();
                                }
                            });
                        });
                        function trackPanel(panel) {
                            var _comp = panel;
                            var _compAttr = 'data-analytics-content-description';
                            var _compName = !!_comp.getAttribute(_compAttr) ? _comp.getAttribute(_compAttr).replace(/-|\s/g, "_").toLowerCase() : _comp.querySelectorAll('[data-analytics-link-component-name]').length > 0 ? _comp.querySelectorAll('[data-analytics-link-component-name]')[0].getAttribute('data-analytics-link-component-name') : _comp.querySelectorAll('h3').length > 0 ? _comp.querySelectorAll('h3')[0].innerText : '';
                            _compName = _compName.replace(/-|\s/g, "_").replace(/\W/, '_').replace(/\_{2,}/g, '_').toLowerCase() || 'missing component';
                            var dataValue = typeof dataLayer !== 'undefined' ? _compName : '';
                            mazdaAnalytics.setData("dataLayer.panel", dataValue);
                            var override = {
                                pageName: _pageName + ':' + _compName,
                                prop69: _compName,
                                eVar69: _compName,
                                events: _compName == 'kmu_form_single_veh' ? 'event201,event202' : 'event193,event194',
                                linkTrackVars: defaultLinkTrackVars + ',events,prop69,eVar69',
                                linkTrackEvents: _compName == 'kmu_form_single_veh' ? 'event201,event202' : 'event193,event194'
                            };
                            if (_compName !== 'missing component') {
                                mazdaAnalytics.log('༼ つ ◕o◕ ༽つ Component into View: ' + _compName + '\n');
                            } else {
                                mazdaAnalytics.log('(ꉺ⍸ꉺ) Component is missing ' + '\n');
                            }
                            var ignorable = _compName == 'service_features_blocks' || _compName.indexOf('_hero') > -1 || _compName == 'missing component';
                            if (!ignorable) {
                                s.tl(this, 'o', override.prop69, override);
                                utag.link(dataLayer);
                            }
                        }
                    }
                }
            } catch (e) {
                utag.DB(e)
            }
        }
        ];
        u.send = function(a, b, c, d, e, f, g, h, ev) {
            if (u.ev[a] || typeof u.ev.all != "undefined") {
                utag.DB("send:24");
                u.data = {
                    "adobe_org_id": "900A67C25245B3C10A490D4C@AdobeOrg",
                    "cookieDomain": (function() {
                        return utag.loader.RC('utag_main').vapi_domain || (function() {
                            var i = 0
                              , d = document.domain
                              , p = d.split('.')
                              , s = '_vapi' + new Date().getTime();
                            while (i < (p.length - 1) && document.cookie.indexOf(s + '=' + s) === -1) {
                                d = p.slice(-1 - (++i)).join('.');
                                document.cookie = s + '=' + s + ';domain=' + d + ';';
                            }
                            document.cookie = s + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;domain=' + d + ';';
                            utag.loader.SC('utag_main', {
                                'vapi_domain': d
                            });
                            return d;
                        }());
                    }()),
                    "a": {},
                    "serial": {}
                };
                u.a = a;
                b.sc_events = b.sc_events || {};
                u.addEvent = function(v, n) {
                    var t = [];
                    if (v instanceof Array) {
                        t = v.slice(0);
                    } else if (typeof n !== "undefined") {
                        t.push(v + "=" + n);
                    } else {
                        t.push(v);
                    }
                    for (var i = 0; i < t.length; i++) {
                        b.sc_events[t[i]] = 1;
                        u.pushlt(u.lte, t[i].indexOf("=") > -1 ? t[i].split('=')[0] : t[i].split(':')[0]);
                    }
                    return b.sc_events;
                }
                ;
                u.addProduct = function(v) {
                    u.data.sc_addProd = "";
                    if (v instanceof Array) {
                        u.data.sc_addProd = v.join(',');
                    } else {
                        u.data.sc_addProd = v;
                    }
                }
                ;
                if (u.a === "link") {
                    u.ltflag = true;
                    if (typeof b.linkTrackVars === "undefined") {
                        u.ltv = [];
                    }
                    if (typeof b.linkTrackEvents === "undefined") {
                        u.lte = [];
                    }
                }
                u.data.tagdevicetype = "standard";
                u.data.detectserial = "yes";
                for (c = 0; c < u.extend.length; c++) {
                    try {
                        d = u.extend[c](a, b);
                        if (d == false)
                            return
                    } catch (e) {}
                }
                ;try {
                    if (window.sessionStorage) {
                        var standardDimensions = sessionStorage.getItem('s_dmdbase') || '';
                        var customDimensions1 = sessionStorage.getItem('s_dmdbase_custom1') || '';
                        var customDimensions2 = sessionStorage.getItem('s_dmdbase_custom2') || '';
                        var customDimensions3 = sessionStorage.getItem('s_dmdbase_custom3') || '';
                        var customDimensions4 = sessionStorage.getItem('s_dmdbase_custom4') || '';
                        u.o.contextData.s_dmdbase = standardDimensions;
                        u.o.contextData.s_dmdbase_custom1 = customDimensions1;
                        u.o.contextData.s_dmdbase_custom2 = customDimensions2;
                        u.o.contextData.s_dmdbase_custom3 = customDimensions3;
                        u.o.contextData.s_dmdbase_custom4 = customDimensions4;
                    }
                } catch (e) {
                    utag.DB('AppMeasurement Demandbase Error: ' + e.message);
                }
                if (u.data.tagdevicetype === "mobile") {
                    if (b.timestamp || b.timestamp_unix) {
                        u.o.timestamp = b.timestamp || b.timestamp_unix;
                    }
                    u.data.a = {
                        "AppID": b.app_id || "",
                        "CarrierName": b.carrier || "",
                        "DeviceName": b.device || "",
                        "HourOfDay": b.lifecycle_hourofday_local || "",
                        "DayOfWeek": b.lifecycle_dayofweek_local || "",
                        "OSVersion": b.os_version || b.platform_version || "",
                        "Resolution": b.device_resolution || ""
                    };
                    if (b.lifecycle_type) {
                        u.data.a.disable_wake_track = false;
                        u.data.a.disable_sleep_track = false;
                        u.data.a.DaysSinceFirstUse = b.lifecycle_dayssincelaunch || "";
                        u.data.a.DaysSinceLastUpgrade = b.lifecycle_dayssinceupdate || "";
                        u.data.a.DaysSinceLastUse = b.lifecycle_dayssincelastwake || "";
                        u.data.a.Launches = b.lifecycle_launchcount || "";
                        u.data.a.InstallDate = b.lifecycle_firstlaunchdate_MMDDYYYY || "";
                        u.data.a.UpgradeEvent = b.lifecycle_isfirstlaunchupdate || "";
                        u.data.a.PrevSessionLength = b.lifecycle_priorsecondsawake || "";
                    }
                    if (b.lifecycle_isfirstlaunch) {
                        u.data.a.InstallEvent = "InstallEvent";
                    }
                    if (b.lifecycle_diddetectcrash) {
                        u.data.a.CrashEvent = "CrashEvent";
                    }
                    if (b.lifecycle_type === "launch") {
                        u.data.a.LaunchEvent = "LaunchEvent";
                    }
                    if (b.lifecycle_isfirslaunchupdate) {
                        u.data.a.UpgradeEvent = "UpgradeEvent";
                    }
                }
                for (e in utag.loader.GV(u.map)) {
                    if (u.data.tagdevicetype === "mobile") {
                        if (typeof b[e] != "undefined" && typeof u.map[e] == "string" && u.map[e].indexOf("contextData.a.") > -1) {
                            f = u.map[e].split(",");
                            for (g = 0; g < f.length; g++) {
                                if (f[g].indexOf("contextData.a.") === 0) {
                                    u.data.a[f[g].substring(14)] = b[e];
                                }
                            }
                        }
                    } else if (typeof b[e] != "undefined" && typeof u.map[e] == "string" && u.map[e].indexOf("SERIAL_") > -1) {
                        f = u.map[e].split(",");
                        for (g = 0; g < f.length; g++) {
                            if (f[g].indexOf("SERIAL_") === 0) {
                                u.data.serial[f[g].substring(7)] = b[e];
                            }
                        }
                    } else if (typeof b[e] != "undefined" && typeof u.map[e] == "string" && u.map[e].indexOf("PRODUCTS_") > -1) {
                        f = u.map[e].split(",");
                        for (g = 0; g < f.length; g++) {
                            if (f[g].indexOf("PRODUCTS_id") || f[g].indexOf("PRODUCTS_category") || f[g].indexOf("PRODUCTS_quantity") || f[g].indexOf("PRODUCTS_price")) {
                                u.data[f[g].substring(9)] = b[e];
                            }
                        }
                    }
                }
                if (u.data.a.disable_wake_track === true || u.data.a.disable_wake_track === "true") {
                    if (b.lifecycle_type === "wake") {
                        return false;
                    }
                }
                if (u.data.a.disable_sleep_track === true || u.data.a.disable_sleep_track === "true") {
                    if (b.lifecycle_type === "sleep") {
                        return false;
                    }
                }
                u.data.id = u.data.id || (typeof b._cprod != "undefined" ? b._cprod.slice(0) : []);
                u.data.category = u.data.category || (typeof b._ccat != "undefined" ? b._ccat.slice(0) : []);
                u.data.quantity = u.data.quantity || (typeof b._cquan != "undefined" ? b._cquan.slice(0) : []);
                u.data.price = u.data.price || (typeof b._cprice != "undefined" ? b._cprice.slice(0) : []);
                if (typeof u.data.id != "undefined" && u.data.id != "") {
                    c = [];
                    d = {};
                    ev = {};
                    for (e in utag.loader.GV(u.map)) {
                        if (typeof b[e] != "undefined" && typeof u.map[e] == "string" && u.map[e].indexOf("PRODUCTS_") > -1) {
                            f = u.map[e].split(",");
                            for (g = 0; g < f.length; g++) {
                                var pv = f[g].substring(9);
                                if (f[g].indexOf("PRODUCTS_evar") == 0 || f[g].indexOf("PRODUCTS_eVar") == 0) {
                                    if (b[e]instanceof Array) {
                                        b.sc_prodevars = b.sc_prodevars || [];
                                        for (var i = 0; i < b[e].length; i++) {
                                            var prodvars = {};
                                            if (typeof b.sc_prodevars[i] != "undefined" && b.sc_prodevars[i] != "") {
                                                b.sc_prodevars[i][pv] = b[e][i];
                                            } else {
                                                prodvars[pv] = b[e][i];
                                                b.sc_prodevars.push(prodvars);
                                            }
                                        }
                                    } else {
                                        d[pv] = (b[e] + "").split(",");
                                    }
                                } else if (f[g].indexOf("PRODUCTS_event") == 0) {
                                    if (b[e]instanceof Array) {
                                        b.sc_prodevents = b.sc_prodevents || [];
                                        for (var i = 0; i < b[e].length; i++) {
                                            var prodevents = {};
                                            if (typeof b.sc_prodevents[i] != "undefined" && b.sc_prodevents[i] != "") {
                                                b.sc_prodevents[i][pv] = b[e][i];
                                            } else {
                                                prodevents[pv] = b[e][i];
                                                b.sc_prodevents.push(prodevents);
                                            }
                                        }
                                        u.addEvent(pv);
                                    } else if (b[e] !== "") {
                                        ev[pv] = b[e];
                                        u.addEvent(pv);
                                    }
                                }
                            }
                        }
                    }
                    e = "";
                    for (f in utag.loader.GV(d)) {
                        for (g = 0; g < d[f].length; g++) {
                            if (e != "")
                                e += "|" + f + "=" + d[f][g];
                            else
                                e = f + "=" + d[f][g];
                        }
                    }
                    h = "";
                    for (f in utag.loader.GV(ev)) {
                        if (h)
                            h += "|" + f + "=" + ((isNaN(ev[f])) ? "1" : ev[f]);
                        else
                            h = f + "=" + ((isNaN(ev[f])) ? "1" : ev[f]);
                    }
                    b.sc_prodevents = b.sc_prodevents || [];
                    b.sc_prodevars = b.sc_prodevars || [];
                    for (d = 0; d < u.data.id.length; d++) {
                        var h2 = h;
                        var h3 = e;
                        if (typeof b.sc_prodevents != "undefined") {
                            for (f in b.sc_prodevents[d]) {
                                if (typeof b.sc_prodevents[d][f] != "undefined") {
                                    var l = b.sc_prodevents[d][f];
                                    if (typeof l != "undefined" && l != "" && isNaN(l) == false) {
                                        if (h2) {
                                            h2 += "|" + f + '=' + l;
                                        } else {
                                            h2 = f + '=' + l;
                                        }
                                    }
                                }
                            }
                        }
                        if (typeof b.sc_prodevars != "undefined") {
                            for (f in b.sc_prodevars[d]) {
                                if (typeof b.sc_prodevars[d][f] != "undefined") {
                                    var l = b.sc_prodevars[d][f];
                                    if (typeof l != "undefined" && l != "") {
                                        if (h3) {
                                            h3 += "|" + f + '=' + l;
                                        } else {
                                            h3 = f + '=' + l;
                                        }
                                    }
                                }
                            }
                        }
                        c.push((u.data.category[d] ? u.data.category[d] : "") + ";" + u.data.id[d] + ";" + (u.data.quantity[d] ? u.data.quantity[d] : "") + ";" + (u.data.price[d] ? ((u.data.quantity[d] ? parseInt(u.data.quantity[d]) : 1) * parseFloat(u.data.price[d])).toFixed(2) : "") + ";" + h2 + ";" + h3);
                    }
                    if (typeof u.data.sc_addProd !== "undefined" && u.data.sc_addProd) {
                        c.push(u.data.sc_addProd);
                    }
                    u.o.products = c.join(",");
                } else {
                    u.o.products = "";
                }
                var evt = /^event|prodView|scOpen|scAdd|scRemove|scView|scCheckout|purchase$/;
                for (c in utag.loader.GV(b)) {
                    if (b[c] !== "") {
                        f = ("" + b[c]).split(",");
                        for (g = 0; g < f.length; g++) {
                            h = f[g].split(":");
                            d = [];
                            if (u.data.detectserial === "no") {
                                if (typeof u.map[c + ":" + h.join(":")] != "undefined") {
                                    d = u.map[c + ":" + h.join(":")].split(",");
                                } else if (typeof u.map[c] != "undefined") {
                                    d = u.map[c].split(",");
                                }
                            } else {
                                if (h.length > 1) {
                                    var subTrigger = h[0];
                                    for (var i = 1; i < h.length - 1; i++) {
                                        subTrigger += ":" + h[i];
                                    }
                                    h[0] = subTrigger;
                                    h[1] = h[h.length - 1];
                                }
                                if (typeof u.map[c + ":" + h[0]] != "undefined") {
                                    d = u.map[c + ":" + h[0]].split(",");
                                } else if (typeof u.map[c] != "undefined") {
                                    d = u.map[c].split(",");
                                }
                            }
                            for (e = 0; e < d.length; e++) {
                                if (d[e] != "events" && evt.test(d[e]) && d[e].indexOf("SERIAL_") !== 0) {
                                    if (u.data.serial[d[e]] !== undefined && u.data.serial[d[e]] !== "") {
                                        u.addEvent(d[e] + ":" + u.data.serial[d[e]]);
                                    } else {
                                        if (u.data.detectserial === "yes") {
                                            u.addEvent(d[e] + (h.length > 1 ? ":" + h[1] : ""));
                                        } else {
                                            u.addEvent(d[e]);
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                for (var m in u.data.a) {
                    u.o.contextData["a." + m] = u.data.a[m];
                    u.pushlt(u.ltv, "contextData.a." + m);
                }
                for (c in utag.loader.GV(b)) {
                    if (typeof u.map[c] != "undefined") {
                        d = u.map[c].split(",");
                        for (e = 0; e < d.length; e++) {
                            if (d[e].indexOf("VALUE_") == 0) {
                                if (u.data.serial[d[e]] !== undefined && u.data.serial[d[e]] !== "") {
                                    u.addEvent(d[e].substring(6), b[c] + ":" + u.data.serial[d[e]]);
                                } else {
                                    u.addEvent(d[e].substring(6), b[c]);
                                }
                            } else if (d[e] == "doneAction") {
                                b.doneAction = b[c];
                                if (b.doneAction != "navigate") {
                                    b.doneAction = eval(b[c]);
                                }
                            } else if (d[e].indexOf("c.") == 0 || d[e].indexOf("contextData.") == 0) {
                                d[e] = d[e].replace("contextData.", "c.");
                                if (d[e][2] !== "a" && d[e][3] !== ".") {
                                    u.o.contextData[d[e].substring(2)] = b[c];
                                    u.pushlt(u.ltv, "contextData." + d[e].substring(2))
                                }
                            } else {
                                if (c == "sc_events" || c == "sc_prodevents" || c == "sc_prodevars") {
                                    utag.DB("Error:24: Mapping reserved object name " + c)
                                } else {
                                    if (d[e] === "adobe_org_id") {
                                        u.data.adobe_org_id = b[c];
                                    } else {
                                        u.o[d[e]] = b[c];
                                    }
                                }
                                if (d[e] == "s_account") {
                                    u.o.account = b[c];
                                } else if (d[e] == "linkTrackVars") {
                                    u.ltflag = false;
                                } else {
                                    u.pushlt(u.ltv, d[e]);
                                }
                            }
                        }
                    }
                }
                d = [];
                for (c in utag.loader.GV(b.sc_events)) {
                    if (b.sc_events[c])
                        d.push(c);
                }
                if (d.length > 0) {
                    u.o.events = d.join(",");
                    u.pushlt(u.lte, u.o.events);
                } else {
                    u.o.events = "";
                }
                if (b._ccurrency) {
                    u.o.currencyCode = b._ccurrency;
                }
                if (b._corder) {
                    u.pushlt(u.lte, "purchase");
                    u.pushlt(u.ltv, "purchaseID");
                    u.o.purchaseID = ((u.o.purchaseID) ? u.o.purchaseID : b._corder);
                    u.o.events = ((u.o.events) ? u.o.events : "purchase");
                    if (u.o.events.indexOf("purchase") < 0) {
                        u.o.events += ",purchase";
                    }
                }
                vAPI.getInstance(u.data.adobe_org_id, function(instance) {
                    if (instance) {
                        u.o.visitor = instance;
                    }
                    u.o.cookieDomain = u.o.visitor ? u.o.visitor.cookieDomain || u.data.cookieDomain : u.data.cookieDomain;
                    if (u.a == "view") {
                        var img = u.o.t();
                        if (typeof img != "undefined" && img != "") {
                            u.img = new Image();
                            u.img.src = img.substring(img.indexOf("src=") + 5, img.indexOf("width=") - 2);
                        }
                    } else if (u.a == "link") {
                        if (typeof u.ltv != "undefined" && u.ltflag) {
                            if (u.o.events) {
                                u.ltv.push("events");
                            }
                            if (u.o.products) {
                                u.ltv.push("products");
                            }
                            b.linkTrackVars = u.ltv.join(',')
                        }
                        if (typeof u.lte != "undefined" && u.ltflag)
                            b.linkTrackEvents = u.lte.join(',');
                        u.o.linkTrackVars = (b.linkTrackVars) ? b.linkTrackVars : "None";
                        u.o.linkTrackEvents = (b.linkTrackEvents) ? b.linkTrackEvents : "None";
                        if (!u.o.linkType)
                            u.o.linkType = 'o';
                        if (b.link_name)
                            b.link_text = b.link_name;
                        b.link_text = (b.link_text) ? b.link_text : "no link_name";
                        if (b.link_type == 'exit link') {
                            u.o.linkType = 'e'
                        } else if (b.link_type == 'download link')
                            u.o.linkType = 'd';
                        u.o.tl(((b.link_obj) ? b.link_obj : true), u.o.linkType, b.link_text, null, (b.doneAction ? b.doneAction : null));
                    }
                    if ("no" == "yes") {
                        u.o.clearVars();
                        u.o.contextData = {};
                    }
                    utag.DB("send:24:COMPLETE");
                });
            }
        }
        ;
        try {
            utag.o[loader].loader.LOAD(id)
        } catch (e) {
            utag.loader.LOAD(id)
        }
    }
    )('24', 'mazdausa.main');
} catch (e) {
    utag.DB(e);
}
