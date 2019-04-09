//tealium universal tag - utag.loader ut4.0.201904091522, Copyright 2019 Tealium.com Inc. All Rights Reserved.
var utag_condload = false;
try {
    (function() {
        function ul(src, a, b) {
            a = document;
            b = a.createElement('script');
            b.language = 'javascript';
            b.type = 'text/javascript';
            b.src = src;
            a.getElementsByTagName('head')[0].appendChild(b)
        }
        ;if (("" + document.cookie).match("utag_env_mazdausa_main=(\/\/tags\.tiqcdn\.com\/utag\/mazdausa\/[^\S;]*)")) {
            if (RegExp.$1.indexOf("/qa/") === -1) {
                var s = RegExp.$1;
                while (s.indexOf("%") != -1) {
                    s = decodeURIComponent(s);
                }
                s = s.replace(/\.\./g, "");
                ul(s);
                utag_condload = true;
                __tealium_default_path = '//tags.tiqcdn.com/utag/mazdausa/main/qa/';
            }
        }
    }
    )();
} catch (e) {}
;try {
    try {
        window.teal = window.teal || {};
        teal.ignore_keys = {};
        teal.replace_keys = {};
        teal.prefix = "";
        teal.nested_delimiter = ".";
        teal.flattener_version = 1.3;
        Object.keys || (Object.keys = function() {
            "use strict";
            var a = Object.prototype.hasOwnProperty
              , b = !{
                toString: null
            }.propertyIsEnumerable("toString")
              , c = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"]
              , d = c.length;
            return function(e) {
                if ("object" != typeof e && ("function" != typeof e || null === e))
                    throw new TypeError("Object.keys called on non-object");
                var g, h, f = [];
                for (g in e)
                    a.call(e, g) && f.push(g);
                if (b)
                    for (h = 0; h < d; h++)
                        a.call(e, c[h]) && f.push(c[h]);
                return f
            }
        }());
        teal.ignoreKey = function(key, re) {
            var should_ignore_key = 0;
            if (typeof teal.ignore_keys_list === 'undefined') {
                teal.ignore_keys_list = Object.keys(teal.ignore_keys);
                teal.ignore_keys_list.forEach(function(name) {
                    teal.ignore_keys[name] = new RegExp("^" + name);
                    if (key.match(teal.ignore_keys[name])) {
                        should_ignore_key = 1;
                    }
                });
            } else {
                teal.ignore_keys_list.forEach(function(name) {
                    if (key.match(teal.ignore_keys[name])) {
                        should_ignore_key = 1;
                    }
                });
            }
            return should_ignore_key;
        }
        teal.getKeyName = function(key, re) {
            teal.replace_keys_regex = teal.replace_keys_regex || {};
            if (typeof teal.replace_keys_list === 'undefined') {
                teal.replace_keys_list = Object.keys(teal.replace_keys);
                teal.replace_keys_list.forEach(function(name) {
                    teal.replace_keys_regex[name] = new RegExp("[" + teal.nested_delimiter + "]?" + name + "[" + teal.nested_delimiter + "]","g");
                    key = teal.keyReplace(key, name, teal.replace_keys_regex[name]);
                });
            } else {
                teal.replace_keys_list.forEach(function(name) {
                    key = teal.keyReplace(key, name, teal.replace_keys_regex[name]);
                });
            }
            return key;
        }
        teal.keyReplace = function(key, name, re) {
            if (teal.replace_keys[name] === '') {
                key = key.replace(re, teal.nested_delimiter);
                if (key.indexOf(teal.nested_delimiter) === 0) {
                    var cleanRegEx = new RegExp("^[" + teal.nested_delimiter + "]");
                    key = key.replace(cleanRegEx, '');
                }
            } else {
                key = key.replace(re, teal.nested_delimiter + teal.replace_keys[name] + teal.nested_delimiter);
            }
            return key;
        }
        teal.processDataObject = function(obj, new_obj, parent_key, create_array) {
            if (typeof parent_key === "undefined") {
                parent_key = "";
            } else {
                teal.nested_delimiter_regex = teal.nested_delimiter_regex || new RegExp("[" + teal.nested_delimiter + "]$");
                if (!parent_key.match(teal.nested_delimiter_regex)) {
                    parent_key += "" + teal.nested_delimiter;
                }
            }
            Object.keys(obj).forEach(function(key) {
                var nested_key_name = parent_key + key;
                var new_key_name = teal.getKeyName((teal.prefix + parent_key + key).replace(/\s/g, ''));
                var key_type = teal.typeOf(obj[key]);
                if (key_type !== 'undefined' && key_type != null) {
                    if (key_type.match(/boolean|string|number|date/) && !teal.ignoreKey(key)) {
                        if (teal.typeOf(obj[key]) === 'date') {
                            obj[key] = obj[key].toISOString();
                        }
                        if (create_array) {
                            if (teal.typeOf(new_obj[new_key_name]) !== "array") {
                                new_obj[new_key_name] = [];
                            }
                            new_obj[new_key_name].push("" + obj[key]);
                        } else {
                            new_obj[new_key_name] = "" + obj[key];
                        }
                    } else if (key_type === 'object' && !teal.ignoreKey(key)) {
                        teal.processDataObject(obj[key], new_obj, nested_key_name, create_array);
                    } else if (key_type === 'array') {
                        teal.processDataArray(obj[key], new_obj, nested_key_name);
                    }
                }
            });
        }
        teal.processDataArray = function(obj, new_obj, parent_key) {
            var objLength = obj.length;
            if (typeof parent_key === "undefined") {
                parent_key = "";
            } else if (objLength > 0 && teal.typeOf(obj[0]).match(/boolean|string|number|date/)) {} else {
                parent_key += "" + teal.nested_delimiter;
            }
            var new_key_name = teal.getKeyName((teal.prefix + parent_key).replace(/\s/g, ''));
            for (var n = 0; n < objLength; n++) {
                var key_type = teal.typeOf(obj[n]);
                if (key_type.match(/boolean|string|number|date/)) {
                    if (key_type === 'date') {
                        obj[n] = obj[n].toISOString();
                    }
                    if (teal.typeOf(new_obj[new_key_name]) !== "array") {
                        new_obj[new_key_name] = [];
                    }
                    new_obj[new_key_name].push("" + obj[n]);
                } else if (key_type === 'object') {
                    teal.processDataObject(obj[n], new_obj, new_key_name, 1);
                }
            }
        }
        teal.typeOf = function(e) {
            return ({}).toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
        }
        teal.flattenObject = function(obj, new_obj) {
            if (typeof obj === 'undefined') {
                return false;
            }
            var mergeObject = false;
            if (obj === new_obj) {
                mergeObject = true;
                new_obj = {};
            }
            if (typeof new_obj === 'undefined') {
                new_obj = {};
            }
            if (teal.typeOf(obj) === 'array') {
                var temp_array = JSON.parse(JSON.stringify(obj));
                var temp_array_length = temp_array.length;
                obj = {};
                if (obj == new_obj) {
                    if (typeof a === 'undefined') {
                        var a = 'view';
                    }
                    utag.loader.RD(new_obj, a);
                }
                for (var i = 0; i < temp_array_length; i++) {
                    teal.processDataObject(temp_array[i], new_obj);
                }
            } else {
                teal.processDataObject(obj, new_obj);
            }
            if (mergeObject) {
                Object.keys(obj).forEach(function(key) {
                    delete obj[key];
                });
                Object.keys(new_obj).forEach(function(key) {
                    obj[key] = new_obj[key];
                });
            }
            return new_obj;
        }
    } catch (e) {
        utag.DB(e)
    }
} catch (e) {}
;if (!utag_condload) {
    try {
        try {
            utag_data = teal.flattenObject(dataLayer);
        } catch (e) {
            utag.DB(e)
        }
    } catch (e) {}
}
;if (typeof utag == "undefined" && !utag_condload) {
    var utag = {
        id: "mazdausa.main",
        o: {},
        sender: {},
        send: {},
        rpt: {
            ts: {
                a: new Date()
            }
        },
        dbi: [],
        db_log: [],
        loader: {
            q: [],
            lc: 0,
            f: {},
            p: 0,
            ol: 0,
            wq: [],
            lq: [],
            bq: {},
            bk: {},
            rf: 0,
            ri: 0,
            rp: 0,
            rq: [],
            ready_q: [],
            sendq: {
                "pending": 0
            },
            run_ready_q: function() {
                for (var i = 0; i < utag.loader.ready_q.length; i++) {
                    utag.DB("READY_Q:" + i);
                    try {
                        utag.loader.ready_q[i]()
                    } catch (e) {
                        utag.DB(e)
                    }
                    ;
                }
            },
            lh: function(a, b, c) {
                a = "" + location.hostname;
                b = a.split(".");
                c = (/\.co\.|\.com\.|\.org\.|\.edu\.|\.net\.|\.asn\.|\...\.jp$/.test(a)) ? 3 : 2;
                return b.splice(b.length - c, c).join(".");
            },
            WQ: function(a, b, c, d, g) {
                utag.DB('WQ:' + utag.loader.wq.length);
                try {
                    if (utag.udoname && utag.udoname.indexOf(".") < 0) {
                        utag.ut.merge(utag.data, window[utag.udoname], 0);
                    }
                    if (utag.cfg.load_rules_at_wait) {
                        utag.handler.LR(utag.data);
                    }
                } catch (e) {
                    utag.DB(e)
                }
                ;d = 0;
                g = [];
                for (a = 0; a < utag.loader.wq.length; a++) {
                    b = utag.loader.wq[a];
                    b.load = utag.loader.cfg[b.id].load;
                    if (b.load == 4) {
                        this.f[b.id] = 0;
                        utag.loader.LOAD(b.id)
                    } else if (b.load > 0) {
                        g.push(b);
                        d++;
                    } else {
                        this.f[b.id] = 1;
                    }
                }
                for (a = 0; a < g.length; a++) {
                    utag.loader.AS(g[a]);
                }
                if (d == 0) {
                    utag.loader.END();
                }
            },
            AS: function(a, b, c, d) {
                utag.send[a.id] = a;
                if (typeof a.src == 'undefined') {
                    a.src = utag.cfg.path + ((typeof a.name != 'undefined') ? a.name : 'ut' + 'ag.' + a.id + '.js')
                }
                a.src += (a.src.indexOf('?') > 0 ? '&' : '?') + 'utv=' + (a.v ? utag.cfg.template + a.v : utag.cfg.v);
                utag.rpt['l_' + a.id] = a.src;
                b = document;
                this.f[a.id] = 0;
                if (a.load == 2) {
                    utag.DB("Attach sync: " + a.src);
                    a.uid = a.id;
                    b.write('<script id="utag_' + a.id + '" src="' + a.src + '"></scr' + 'ipt>')
                    if (typeof a.cb != 'undefined')
                        a.cb();
                } else if (a.load == 1 || a.load == 3) {
                    if (b.createElement) {
                        c = 'utag_mazdausa.main_' + a.id;
                        if (!b.getElementById(c)) {
                            d = {
                                src: a.src,
                                id: c,
                                uid: a.id,
                                loc: a.loc
                            }
                            if (a.load == 3) {
                                d.type = "iframe"
                            }
                            ;if (typeof a.cb != 'undefined')
                                d.cb = a.cb;
                            utag.ut.loader(d);
                        }
                    }
                }
            },
            GV: function(a, b, c) {
                b = {};
                for (c in a) {
                    if (a.hasOwnProperty(c) && typeof a[c] != "function")
                        b[c] = a[c];
                }
                return b
            },
            OU: function(tid, tcat, a, b, c, d, f, g) {
                g = {};
                utag.loader.RDcp(g);
                try {
                    if (typeof g['cp.OPTOUTMULTI'] != 'undefined') {
                        c = utag.loader.cfg;
                        a = utag.ut.decode(g['cp.OPTOUTMULTI']).split('|');
                        for (d = 0; d < a.length; d++) {
                            b = a[d].split(':');
                            if (b[1] * 1 !== 0) {
                                if (b[0].indexOf('c') == 0) {
                                    for (f in utag.loader.GV(c)) {
                                        if (c[f].tcat == b[0].substring(1))
                                            c[f].load = 0;
                                        if (c[f].tid == tid && c[f].tcat == b[0].substring(1))
                                            return true;
                                    }
                                    if (tcat == b[0].substring(1))
                                        return true;
                                } else if (b[0] * 1 == 0) {
                                    utag.cfg.nocookie = true
                                } else {
                                    for (f in utag.loader.GV(c)) {
                                        if (c[f].tid == b[0])
                                            c[f].load = 0
                                    }
                                    if (tid == b[0])
                                        return true;
                                }
                            }
                        }
                    }
                } catch (e) {
                    utag.DB(e)
                }
                return false;
            },
            RDdom: function(o) {
                var d = document || {}
                  , l = location || {};
                o["dom.referrer"] = d.referrer;
                o["dom.title"] = "" + d.title;
                o["dom.domain"] = "" + l.hostname;
                o["dom.query_string"] = ("" + l.search).substring(1);
                o["dom.hash"] = ("" + l.hash).substring(1);
                o["dom.url"] = "" + d.URL;
                o["dom.pathname"] = "" + l.pathname;
                o["dom.viewport_height"] = window.innerHeight || (d.documentElement ? d.documentElement.clientHeight : 960);
                o["dom.viewport_width"] = window.innerWidth || (d.documentElement ? d.documentElement.clientWidth : 960);
            },
            RDcp: function(o, b, c, d) {
                b = utag.loader.RC();
                for (d in b) {
                    if (d.match(/utag_(.*)/)) {
                        for (c in utag.loader.GV(b[d])) {
                            o["cp.utag_" + RegExp.$1 + "_" + c] = b[d][c];
                        }
                    }
                }
                for (c in utag.loader.GV((utag.cl && !utag.cl['_all_']) ? utag.cl : b)) {
                    if (c.indexOf("utag_") < 0 && typeof b[c] != "undefined")
                        o["cp." + c] = b[c];
                }
            },
            RDqp: function(o, a, b, c) {
                a = location.search + (location.hash + '').replace("#", "&");
                if (utag.cfg.lowerqp) {
                    a = a.toLowerCase()
                }
                ;if (a.length > 1) {
                    b = a.substring(1).split('&');
                    for (a = 0; a < b.length; a++) {
                        c = b[a].split("=");
                        if (c.length > 1) {
                            o["qp." + c[0]] = utag.ut.decode(c[1])
                        }
                    }
                }
            },
            RDmeta: function(o, a, b, h) {
                a = document.getElementsByTagName("meta");
                for (b = 0; b < a.length; b++) {
                    try {
                        h = a[b].name || a[b].getAttribute("property") || "";
                    } catch (e) {
                        h = "";
                        utag.DB(e)
                    }
                    ;if (utag.cfg.lowermeta) {
                        h = h.toLowerCase()
                    }
                    ;if (h != "") {
                        o["meta." + h] = a[b].content
                    }
                }
            },
            RDva: function(o) {
                var readAttr = function(o, l) {
                    var a = "", b;
                    a = localStorage.getItem(l);
                    if (!a || a == "{}")
                        return;
                    b = utag.ut.flatten({
                        va: JSON.parse(a)
                    });
                    utag.ut.merge(o, b, 1);
                }
                try {
                    readAttr(o, "tealium_va");
                    readAttr(o, "tealium_va_" + o["ut.account"] + "_" + o["ut.profile"]);
                } catch (e) {
                    utag.DB(e)
                }
            },
            RDut: function(o, a) {
                var t = {};
                var d = new Date();
                var m = (utag.ut.typeOf(d.toISOString) == "function");
                o["ut.domain"] = utag.cfg.domain;
                o["ut.version"] = utag.cfg.v;
                t["tealium_event"] = o["ut.event"] = a || "view";
                t["tealium_visitor_id"] = o["ut.visitor_id"] = o["cp.utag_main_v_id"];
                t["tealium_session_id"] = o["ut.session_id"] = o["cp.utag_main_ses_id"];
                t["tealium_session_number"] = o["cp.utag_main__sn"];
                t["tealium_session_event_number"] = o["cp.utag_main__se"];
                try {
                    t["tealium_datasource"] = utag.cfg.datasource;
                    t["tealium_account"] = o["ut.account"] = utag.cfg.utid.split("/")[0];
                    t["tealium_profile"] = o["ut.profile"] = utag.cfg.utid.split("/")[1];
                    t["tealium_environment"] = o["ut.env"] = utag.cfg.path.split("/")[6];
                } catch (e) {
                    utag.DB(e)
                }
                t["tealium_random"] = Math.random().toFixed(16).substring(2);
                t["tealium_library_name"] = "ut" + "ag.js";
                t["tealium_library_version"] = (utag.cfg.template + "0").substring(2);
                t["tealium_timestamp_epoch"] = Math.floor(d.getTime() / 1000);
                t["tealium_timestamp_utc"] = (m ? d.toISOString() : "");
                d.setHours(d.getHours() - (d.getTimezoneOffset() / 60));
                t["tealium_timestamp_local"] = (m ? d.toISOString().replace("Z", "") : "");
                utag.ut.merge(o, t, 0);
            },
            RDses: function(o, a, c) {
                a = (new Date()).getTime();
                c = (a + parseInt(utag.cfg.session_timeout)) + "";
                if (!o["cp.utag_main_ses_id"]) {
                    o["cp.utag_main_ses_id"] = a + "";
                    o["cp.utag_main__ss"] = "1";
                    o["cp.utag_main__se"] = "1";
                    o["cp.utag_main__sn"] = (1 + parseInt(o["cp.utag_main__sn"] || 0)) + "";
                } else {
                    o["cp.utag_main__ss"] = "0";
                    o["cp.utag_main__se"] = (1 + parseInt(o["cp.utag_main__se"] || 0)) + "";
                }
                o["cp.utag_main__pn"] = o["cp.utag_main__pn"] || "1";
                o["cp.utag_main__st"] = c;
                utag.loader.SC("utag_main", {
                    "_sn": (o["cp.utag_main__sn"] || 1),
                    "_se": o["cp.utag_main__se"],
                    "_ss": o["cp.utag_main__ss"],
                    "_st": c,
                    "ses_id": (o["cp.utag_main_ses_id"] || a) + ";exp-session",
                    "_pn": o["cp.utag_main__pn"] + ";exp-session"
                });
            },
            RDpv: function(o) {
                if (typeof utag.pagevars == "function") {
                    utag.DB("Read page variables");
                    utag.pagevars(o);
                }
            },
            RD: function(o, a) {
                utag.DB("utag.loader.RD");
                utag.DB(o);
                utag.loader.RDcp(o);
                if (!utag.loader.rd_flag) {
                    utag.loader.rd_flag = 1;
                    o["cp.utag_main_v_id"] = o["cp.utag_main_v_id"] || utag.ut.vi((new Date()).getTime());
                    o["cp.utag_main__pn"] = (1 + parseInt(o["cp.utag_main__pn"] || 0)) + "";
                    utag.loader.SC("utag_main", {
                        "v_id": o["cp.utag_main_v_id"]
                    });
                    utag.loader.RDses(o);
                }
                if (a && !utag.cfg.noview)
                    utag.loader.RDses(o);
                utag.loader.RDqp(o);
                utag.loader.RDmeta(o);
                utag.loader.RDdom(o);
                utag.loader.RDut(o, a || "view");
                utag.loader.RDpv(o);
                utag.loader.RDva(o);
            },
            RC: function(a, x, b, c, d, e, f, g, h, i, j, k, l, m, n, o, v, ck, cv, r, s, t) {
                o = {};
                b = ("" + document.cookie != "") ? (document.cookie).split("; ") : [];
                r = /^(.*?)=(.*)$/;
                s = /^(.*);exp-(.*)$/;
                t = (new Date()).getTime();
                for (c = 0; c < b.length; c++) {
                    if (b[c].match(r)) {
                        ck = RegExp.$1;
                        cv = RegExp.$2;
                    }
                    e = utag.ut.decode(cv);
                    if (typeof ck != "undefined") {
                        if (ck.indexOf("ulog") == 0 || ck.indexOf("utag_") == 0) {
                            e = cv.split("$");
                            g = [];
                            j = {};
                            for (f = 0; f < e.length; f++) {
                                try {
                                    g = e[f].split(":");
                                    if (g.length > 2) {
                                        g[1] = g.slice(1).join(":");
                                    }
                                    v = "";
                                    if (("" + g[1]).indexOf("~") == 0) {
                                        h = g[1].substring(1).split("|");
                                        for (i = 0; i < h.length; i++)
                                            h[i] = utag.ut.decode(h[i]);
                                        v = h
                                    } else
                                        v = utag.ut.decode(g[1]);
                                    j[g[0]] = v;
                                } catch (er) {
                                    utag.DB(er)
                                }
                                ;
                            }
                            o[ck] = {};
                            for (f in utag.loader.GV(j)) {
                                if (j[f]instanceof Array) {
                                    n = [];
                                    for (m = 0; m < j[f].length; m++) {
                                        if (j[f][m].match(s)) {
                                            k = (RegExp.$2 == "session") ? (typeof j._st != "undefined" ? j._st : t - 1) : parseInt(RegExp.$2);
                                            if (k > t)
                                                n[m] = (x == 0) ? j[f][m] : RegExp.$1;
                                        }
                                    }
                                    j[f] = n.join("|");
                                } else {
                                    j[f] = "" + j[f];
                                    if (j[f].match(s)) {
                                        k = (RegExp.$2 == "session") ? (typeof j._st != "undefined" ? j._st : t - 1) : parseInt(RegExp.$2);
                                        j[f] = (k < t) ? null : (x == 0 ? j[f] : RegExp.$1);
                                    }
                                }
                                if (j[f])
                                    o[ck][f] = j[f];
                            }
                        } else if (utag.cl[ck] || utag.cl['_all_']) {
                            o[ck] = e
                        }
                    }
                }
                return (a) ? (o[a] ? o[a] : {}) : o;
            },
            SC: function(a, b, c, d, e, f, g, h, i, j, k, x, v) {
                if (!a)
                    return 0;
                if (a == "utag_main" && utag.cfg.nocookie)
                    return 0;
                v = "";
                var date = new Date();
                var exp = new Date();
                exp.setTime(date.getTime() + (365 * 24 * 60 * 60 * 1000));
                x = exp.toGMTString();
                if (c && c == "da") {
                    x = "Thu, 31 Dec 2009 00:00:00 GMT";
                } else if (a.indexOf("utag_") != 0 && a.indexOf("ulog") != 0) {
                    if (typeof b != "object") {
                        v = b
                    }
                } else {
                    d = utag.loader.RC(a, 0);
                    for (e in utag.loader.GV(b)) {
                        f = "" + b[e];
                        if (f.match(/^(.*);exp-(\d+)(\w)$/)) {
                            g = date.getTime() + parseInt(RegExp.$2) * ((RegExp.$3 == "h") ? 3600000 : 86400000);
                            if (RegExp.$3 == "u")
                                g = parseInt(RegExp.$2);
                            f = RegExp.$1 + ";exp-" + g;
                        }
                        if (c == "i") {
                            if (d[e] == null)
                                d[e] = f;
                        } else if (c == "d")
                            delete d[e];
                        else if (c == "a")
                            d[e] = (d[e] != null) ? (f - 0) + (d[e] - 0) : f;
                        else if (c == "ap" || c == "au") {
                            if (d[e] == null)
                                d[e] = f;
                            else {
                                if (d[e].indexOf("|") > 0) {
                                    d[e] = d[e].split("|")
                                }
                                g = (d[e]instanceof Array) ? d[e] : [d[e]];
                                g.push(f);
                                if (c == "au") {
                                    h = {};
                                    k = {};
                                    for (i = 0; i < g.length; i++) {
                                        if (g[i].match(/^(.*);exp-(.*)$/)) {
                                            j = RegExp.$1;
                                        }
                                        if (typeof k[j] == "undefined") {
                                            k[j] = 1;
                                            h[g[i]] = 1;
                                        }
                                    }
                                    g = [];
                                    for (i in utag.loader.GV(h)) {
                                        g.push(i);
                                    }
                                }
                                d[e] = g
                            }
                        } else
                            d[e] = f;
                    }
                    h = new Array();
                    for (g in utag.loader.GV(d)) {
                        if (d[g]instanceof Array) {
                            for (c = 0; c < d[g].length; c++) {
                                d[g][c] = encodeURIComponent(d[g][c])
                            }
                            h.push(g + ":~" + d[g].join("|"))
                        } else
                            h.push((g + ":").replace(/[\,\$\;\?]/g, "") + encodeURIComponent(d[g]))
                    }
                    if (h.length == 0) {
                        h.push("");
                        x = ""
                    }
                    v = (h.join("$"));
                }
                document.cookie = a + "=" + v + ";path=/;domain=" + utag.cfg.domain + ";expires=" + x;
                return 1
            },
            LOAD: function(a, b, c, d) {
                if (!utag.loader.cfg) {
                    return
                }
                if (this.ol == 0) {
                    if (utag.loader.cfg[a].block && utag.loader.cfg[a].cbf) {
                        this.f[a] = 1;
                        delete utag.loader.bq[a];
                    }
                    for (b in utag.loader.GV(utag.loader.bq)) {
                        if (utag.loader.cfg[a].load == 4 && utag.loader.cfg[a].wait == 0) {
                            utag.loader.bk[a] = 1;
                            utag.DB("blocked: " + a);
                        }
                        utag.DB("blocking: " + b);
                        return;
                    }
                    utag.loader.INIT();
                    return;
                }
                utag.DB('utag.loader.LOAD:' + a);
                if (this.f[a] == 0) {
                    this.f[a] = 1;
                    if (utag.cfg.noview != true) {
                        if (utag.loader.cfg[a].send) {
                            utag.DB("SENDING: " + a);
                            try {
                                if (utag.loader.sendq.pending > 0 && utag.loader.sendq[a]) {
                                    utag.DB("utag.loader.LOAD:sendq: " + a);
                                    while (d = utag.loader.sendq[a].shift()) {
                                        utag.DB(d);
                                        utag.sender[a].send(d.event, utag.handler.C(d.data));
                                        utag.loader.sendq.pending--;
                                    }
                                } else {
                                    utag.sender[a].send('view', utag.handler.C(utag.data));
                                }
                                utag.rpt['s_' + a] = 0;
                            } catch (e) {
                                utag.DB(e);
                                utag.rpt['s_' + a] = 1;
                            }
                        }
                    }
                    if (utag.loader.rf == 0)
                        return;
                    for (b in utag.loader.GV(this.f)) {
                        if (this.f[b] == 0 || this.f[b] == 2)
                            return
                    }
                    utag.loader.END();
                }
            },
            EV: function(a, b, c, d) {
                if (b == "ready") {
                    if (!utag.data) {
                        try {
                            utag.cl = {
                                '_all_': 1
                            };
                            utag.loader.initdata();
                            utag.loader.RD(utag.data);
                        } catch (e) {
                            utag.DB(e)
                        }
                        ;
                    }
                    if ((document.attachEvent || utag.cfg.dom_complete) ? document.readyState === "complete" : document.readyState !== "loading")
                        setTimeout(c, 1);
                    else {
                        utag.loader.ready_q.push(c);
                        var RH;
                        if (utag.loader.ready_q.length <= 1) {
                            if (document.addEventListener) {
                                RH = function() {
                                    document.removeEventListener("DOMContentLoaded", RH, false);
                                    utag.loader.run_ready_q()
                                }
                                ;
                                if (!utag.cfg.dom_complete)
                                    document.addEventListener("DOMContentLoaded", RH, false);
                                window.addEventListener("load", utag.loader.run_ready_q, false);
                            } else if (document.attachEvent) {
                                RH = function() {
                                    if (document.readyState === "complete") {
                                        document.detachEvent("onreadystatechange", RH);
                                        utag.loader.run_ready_q()
                                    }
                                }
                                ;
                                document.attachEvent("onreadystatechange", RH);
                                window.attachEvent("onload", utag.loader.run_ready_q);
                            }
                        }
                    }
                } else {
                    if (a.addEventListener) {
                        a.addEventListener(b, c, false)
                    } else if (a.attachEvent) {
                        a.attachEvent(((d == 1) ? "" : "on") + b, c)
                    }
                }
            },
            END: function(b, c, d, e, v, w) {
                if (this.ended) {
                    return
                }
                ;this.ended = 1;
                utag.DB("loader.END");
                b = utag.data;
                if (utag.handler.base && utag.handler.base != '*') {
                    e = utag.handler.base.split(",");
                    for (d = 0; d < e.length; d++) {
                        if (typeof b[e[d]] != "undefined")
                            utag.handler.df[e[d]] = b[e[d]]
                    }
                } else if (utag.handler.base == '*') {
                    utag.ut.merge(utag.handler.df, b, 1);
                }
                utag.rpt['r_0'] = "t";
                for (var r in utag.loader.GV(utag.cond)) {
                    utag.rpt['r_' + r] = (utag.cond[r]) ? "t" : "f";
                }
                utag.rpt.ts['s'] = new Date();
                v = utag.cfg.path;
                w = v.indexOf(".tiqcdn.");
                if (w > 0 && b["cp.utag_main__ss"] == 1 && !utag.cfg.no_session_count)
                    utag.ut.loader({
                        src: v.substring(0, v.indexOf("/ut" + "ag/") + 6) + "tiqapp/ut" + "ag.v.js?a=" + utag.cfg.utid + (utag.cfg.nocookie ? "&nocookie=1" : "&cb=" + (new Date).getTime()),
                        id: "tiqapp"
                    })
                if (utag.cfg.noview != true)
                    utag.handler.RE('view', b, "end");
                utag.handler.INIT();
            }
        },
        DB: function(a, b) {
            if (utag.cfg.utagdb === false) {
                return;
            } else if (typeof utag.cfg.utagdb == "undefined") {
                b = document.cookie + '';
                utag.cfg.utagdb = ((b.indexOf('utagdb=true') >= 0) ? true : false);
            }
            if (utag.cfg.utagdb === true) {
                var t;
                if (utag.ut.typeOf(a) == "object") {
                    t = utag.handler.C(a)
                } else {
                    t = a
                }
                utag.db_log.push(t);
                try {
                    if (!utag.cfg.noconsole)
                        console.log(t)
                } catch (e) {}
            }
        },
        RP: function(a, b, c) {
            if (typeof a != 'undefined' && typeof a.src != 'undefined' && a.src != '') {
                b = [];
                for (c in utag.loader.GV(a)) {
                    if (c != 'src')
                        b.push(c + '=' + escape(a[c]))
                }
                this.dbi.push((new Image()).src = a.src + '?utv=' + utag.cfg.v + '&utid=' + utag.cfg.utid + '&' + (b.join('&')))
            }
        },
        view: function(a, c, d) {
            return this.track({
                event: 'view',
                data: a || {},
                cfg: {
                    cb: c,
                    uids: d
                }
            })
        },
        link: function(a, c, d) {
            return this.track({
                event: 'link',
                data: a || {},
                cfg: {
                    cb: c,
                    uids: d
                }
            })
        },
        track: function(a, b, c, d, e) {
            a = a || {};
            if (typeof a == "string") {
                a = {
                    event: a,
                    data: b || {},
                    cfg: {
                        cb: c,
                        uids: d
                    }
                }
            }
            for (e in utag.loader.GV(utag.o)) {
                utag.o[e].handler.trigger(a.event || "view", a.data || a, a.cfg || {
                    cb: b,
                    uids: c
                })
            }
            a.cfg = a.cfg || {
                cb: b
            };
            if (typeof a.cfg.cb == "function")
                a.cfg.cb();
            return true
        },
        handler: {
            base: "",
            df: {},
            o: {},
            send: {},
            iflag: 0,
            INIT: function(a, b, c) {
                utag.DB('utag.handler.INIT');
                if (utag.initcatch) {
                    utag.initcatch = 0;
                    return
                }
                this.iflag = 1;
                a = utag.loader.q.length;
                if (a > 0) {
                    utag.DB("Loader queue");
                    for (b = 0; b < a; b++) {
                        c = utag.loader.q[b];
                        utag.handler.trigger(c.a, c.b, c.c)
                    }
                }
            },
            test: function() {
                return 1
            },
            LR: function(b) {
                utag.DB("Load Rules");
                for (var d in utag.loader.GV(utag.cond)) {
                    utag.cond[d] = false;
                }
                utag.DB(b);
                utag.loader.loadrules(b);
                utag.DB(utag.cond);
                utag.loader.initcfg();
                utag.loader.OU();
                for (var r in utag.loader.GV(utag.cond)) {
                    utag.rpt['r_' + r] = (utag.cond[r]) ? "t" : "f";
                }
            },
            RE: function(a, b, c, d, e, f, g) {
                if (c != "alr" && !this.cfg_extend) {
                    return 0;
                }
                utag.DB("RE: " + c);
                if (c == "alr")
                    utag.DB("All Tags EXTENSIONS");
                utag.DB(b);
                if (typeof this.extend != "undefined") {
                    g = 0;
                    for (d = 0; d < this.extend.length; d++) {
                        try {
                            e = 0;
                            if (typeof this.cfg_extend != "undefined") {
                                f = this.cfg_extend[d];
                                if (typeof f.count == "undefined")
                                    f.count = 0;
                                if (f[a] == 0 || (f.once == 1 && f.count > 0) || f[c] == 0) {
                                    e = 1
                                } else {
                                    if (f[c] == 1) {
                                        g = 1
                                    }
                                    ;f.count++
                                }
                            }
                            if (e != 1) {
                                this.extend[d](a, b);
                                utag.rpt['ex_' + d] = 0
                            }
                        } catch (er) {
                            utag.DB(er);
                            utag.rpt['ex_' + d] = 1;
                            utag.ut.error({
                                e: er.message,
                                s: utag.cfg.path + 'utag.js',
                                l: d,
                                t: 'ge'
                            });
                        }
                    }
                    utag.DB(b);
                    return g;
                }
            },
            trigger: function(a, b, c, d, e, f) {
                utag.DB('trigger:' + a + (c && c.uids ? ":" + c.uids.join(",") : ""));
                b = b || {};
                utag.DB(b);
                if (!this.iflag) {
                    utag.DB("trigger:called before tags loaded");
                    for (d in utag.loader.f) {
                        if (!(utag.loader.f[d] === 1))
                            utag.DB('Tag ' + d + ' did not LOAD')
                    }
                    utag.loader.q.push({
                        a: a,
                        b: utag.handler.C(b),
                        c: c
                    });
                    return;
                }
                utag.ut.merge(b, this.df, 0);
                utag.loader.RD(b, a);
                utag.cfg.noview = false;
                function sendTag(a, b, d) {
                    try {
                        if (typeof utag.sender[d] != "undefined") {
                            utag.DB("SENDING: " + d);
                            utag.sender[d].send(a, utag.handler.C(b));
                            utag.rpt['s_' + d] = 0;
                        } else if (utag.loader.cfg[d].load != 2) {
                            utag.loader.sendq[d] = utag.loader.sendq[d] || [];
                            utag.loader.sendq[d].push({
                                "event": a,
                                "data": utag.handler.C(b)
                            });
                            utag.loader.sendq.pending++;
                            utag.loader.AS({
                                id: d,
                                load: 1
                            });
                        }
                    } catch (e) {
                        utag.DB(e)
                    }
                }
                if (c && c.uids) {
                    this.RE(a, b, "alr");
                    for (f = 0; f < c.uids.length; f++) {
                        d = c.uids[f];
                        if (!utag.loader.OU(utag.loader.cfg[d].tid)) {
                            sendTag(a, b, d);
                        }
                    }
                } else if (utag.cfg.load_rules_ajax) {
                    this.RE(a, b, "blr");
                    this.LR(b);
                    this.RE(a, b, "alr");
                    for (f = 0; f < utag.loader.cfgsort.length; f++) {
                        d = utag.loader.cfgsort[f];
                        if (utag.loader.cfg[d].load && utag.loader.cfg[d].send) {
                            sendTag(a, b, d);
                        }
                    }
                } else {
                    this.RE(a, b, "alr");
                    for (d in utag.loader.GV(utag.sender)) {
                        sendTag(a, b, d);
                    }
                }
                this.RE(a, b, "end");
            },
            C: function(a, b, c) {
                b = {};
                for (c in utag.loader.GV(a)) {
                    if (a[c]instanceof Array) {
                        b[c] = a[c].slice(0)
                    } else {
                        b[c] = a[c]
                    }
                }
                return b
            }
        },
        ut: {
            pad: function(a, b, c, d) {
                a = "" + ((a - 0).toString(16));
                d = '';
                if (b > a.length) {
                    for (c = 0; c < (b - a.length); c++) {
                        d += '0'
                    }
                }
                return "" + d + a
            },
            vi: function(t, a, b) {
                if (!utag.v_id) {
                    a = this.pad(t, 12);
                    b = "" + Math.random();
                    a += this.pad(b.substring(2, b.length), 16);
                    try {
                        a += this.pad((navigator.plugins.length ? navigator.plugins.length : 0), 2);
                        a += this.pad(navigator.userAgent.length, 3);
                        a += this.pad(document.URL.length, 4);
                        a += this.pad(navigator.appVersion.length, 3);
                        a += this.pad(screen.width + screen.height + parseInt((screen.colorDepth) ? screen.colorDepth : screen.pixelDepth), 5)
                    } catch (e) {
                        utag.DB(e);
                        a += "12345"
                    }
                    ;utag.v_id = a;
                }
                return utag.v_id
            },
            hasOwn: function(o, a) {
                return o != null && Object.prototype.hasOwnProperty.call(o, a)
            },
            isEmptyObject: function(o, a) {
                for (a in o) {
                    if (utag.ut.hasOwn(o, a))
                        return false
                }
                return true
            },
            isEmpty: function(o) {
                var t = utag.ut.typeOf(o);
                if (t == "number") {
                    return isNaN(o)
                } else if (t == "boolean") {
                    return false
                } else if (t == "string") {
                    return o.length === 0
                } else
                    return utag.ut.isEmptyObject(o)
            },
            typeOf: function(e) {
                return ({}).toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
            },
            flatten: function(o) {
                var a = {};
                function r(c, p) {
                    if (Object(c) !== c || c instanceof Array) {
                        a[p] = c;
                    } else {
                        if (utag.ut.isEmptyObject(c)) {} else {
                            for (var d in c) {
                                r(c[d], p ? p + "." + d : d);
                            }
                        }
                    }
                }
                r(o, "");
                return a;
            },
            merge: function(a, b, c, d) {
                if (c) {
                    for (d in utag.loader.GV(b)) {
                        a[d] = b[d]
                    }
                } else {
                    for (d in utag.loader.GV(b)) {
                        if (typeof a[d] == "undefined")
                            a[d] = b[d]
                    }
                }
            },
            decode: function(a, b) {
                b = "";
                try {
                    b = decodeURIComponent(a)
                } catch (e) {
                    utag.DB(e)
                }
                ;if (b == "") {
                    b = unescape(a)
                }
                ;return b
            },
            encode: function(a, b) {
                b = "";
                try {
                    b = encodeURIComponent(a)
                } catch (e) {
                    utag.DB(e)
                }
                ;if (b == "") {
                    b = escape(a)
                }
                ;return b
            },
            error: function(a, b, c) {
                if (typeof utag_err != "undefined") {
                    utag_err.push(a)
                }
            },
            loader: function(o, a, b, c, l, m) {
                utag.DB(o);
                a = document;
                if (o.type == "iframe") {
                    m = a.getElementById(o.id);
                    if (m && m.tagName == "IFRAME") {
                        m.parentNode.removeChild(m);
                    }
                    b = a.createElement("iframe");
                    o.attrs = o.attrs || {};
                    utag.ut.merge(o.attrs, {
                        "height": "1",
                        "width": "1",
                        "style": "display:none"
                    }, 0);
                } else if (o.type == "img") {
                    utag.DB("Attach img: " + o.src);
                    b = new Image();
                } else {
                    b = a.createElement("script");
                    b.language = "javascript";
                    b.type = "text/javascript";
                    b.async = 1;
                    b.charset = "utf-8";
                }
                if (o.id) {
                    b.id = o.id
                }
                ;for (l in utag.loader.GV(o.attrs)) {
                    b.setAttribute(l, o.attrs[l])
                }
                b.setAttribute("src", o.src);
                if (typeof o.cb == "function") {
                    if (b.addEventListener) {
                        b.addEventListener("load", function() {
                            o.cb()
                        }, false);
                    } else {
                        b.onreadystatechange = function() {
                            if (this.readyState == 'complete' || this.readyState == 'loaded') {
                                this.onreadystatechange = null;
                                o.cb()
                            }
                        }
                        ;
                    }
                }
                if (typeof o.error == "function") {
                    utag.loader.EV(b, "error", o.error);
                }
                if (o.type != "img") {
                    l = o.loc || "head";
                    c = a.getElementsByTagName(l)[0];
                    if (c) {
                        utag.DB("Attach to " + l + ": " + o.src);
                        if (l == "script") {
                            c.parentNode.insertBefore(b, c);
                        } else {
                            c.appendChild(b)
                        }
                    }
                }
            }
        }
    };
    utag.o['mazdausa.main'] = utag;
    utag.cfg = {
        template: "ut4.46.",
        load_rules_ajax: true,
        load_rules_at_wait: false,
        lowerqp: false,
        noconsole: false,
        session_timeout: 1800000,
        readywait: 0,
        noload: 0,
        domain: utag.loader.lh(),
        datasource: "##UTDATASOURCE##".replace("##" + "UTDATASOURCE##", ""),
        path: "//tags.tiqcdn.com/utag/mazdausa/main/qa/",
        utid: "mazdausa/main/201904091522"
    };
    utag.cfg.v = utag.cfg.template + "201904091522";
    utag.cond = {
        10: 0,
        11: 0,
        12: 0,
        13: 0,
        14: 0,
        15: 0,
        16: 0,
        17: 0,
        19: 0,
        20: 0,
        22: 0,
        23: 0,
        24: 0,
        2: 0,
        3: 0,
        5: 0,
        6: 0,
        7: 0,
        8: 0,
        9: 0
    };
    utag.loader.initdata = function() {
        try {
            utag.data = (typeof utag_data != 'undefined') ? utag_data : {};
            utag.udoname = 'utag_data';
        } catch (e) {
            utag.data = {};
            utag.DB('idf:' + e);
        }
    }
    ;
    utag.loader.loadrules = function(_pd, _pc) {
        var d = _pd || utag.data;
        var c = _pc || utag.cond;
        for (var l in utag.loader.GV(c)) {
            switch (l) {
            case '10':
                try {
                    c[10] |= (typeof d['nativo_fy153_value'] != 'undefined' && typeof d['nativo_fy153_value'] != 'undefined' && d['nativo_fy153_value'] != '')
                } catch (e) {
                    utag.DB(e)
                }
                ;break;
            case '11':
                try {
                    c[11] |= (typeof d['tradedesk_fy152_value'] != 'undefined' && typeof d['tradedesk_fy152_value'] != 'undefined' && d['tradedesk_fy152_value'] != '')
                } catch (e) {
                    utag.DB(e)
                }
                ;break;
            case '12':
                try {
                    c[12] |= (typeof d['tradedesk_fy152_decided_value'] != 'undefined' && typeof d['tradedesk_fy152_decided_value'] != 'undefined' && d['tradedesk_fy152_decided_value'] != '')
                } catch (e) {
                    utag.DB(e)
                }
                ;break;
            case '13':
                try {
                    c[13] |= (typeof d['tradedesk_fy152_dreamer_value'] != 'undefined' && typeof d['tradedesk_fy152_dreamer_value'] != 'undefined' && d['tradedesk_fy152_dreamer_value'] != '')
                } catch (e) {
                    utag.DB(e)
                }
                ;break;
            case '14':
                try {
                    c[14] |= (typeof d['tradedesk_fy152_shopper_value'] != 'undefined' && typeof d['tradedesk_fy152_shopper_value'] != 'undefined' && d['tradedesk_fy152_shopper_value'] != '')
                } catch (e) {
                    utag.DB(e)
                }
                ;break;
            case '15':
                try {
                    c[15] |= (typeof d['tradedesk_fy152_shopper_v2_value'] != 'undefined' && typeof d['tradedesk_fy152_shopper_v2_value'] != 'undefined' && d['tradedesk_fy152_shopper_v2_value'] != '')
                } catch (e) {
                    utag.DB(e)
                }
                ;break;
            case '16':
                try {
                    c[16] |= (typeof d['exp_fy152_value'] != 'undefined' && typeof d['exp_fy152_value'] != 'undefined' && d['exp_fy152_value'] != '')
                } catch (e) {
                    utag.DB(e)
                }
                ;break;
            case '17':
                try {
                    c[17] |= (typeof d['exponential_value'] != 'undefined' && typeof d['exponential_value'] != 'undefined' && d['exponential_value'] != '')
                } catch (e) {
                    utag.DB(e)
                }
                ;break;
            case '19':
                try {
                    c[19] |= (typeof d['tradedesk_rt_fy152_value'] != 'undefined' && typeof d['tradedesk_rt_fy152_value'] != 'undefined' && d['tradedesk_rt_fy152_value'] != '')
                } catch (e) {
                    utag.DB(e)
                }
                ;break;
            case '2':
                try {
                    c[2] |= (typeof d['amazon_fy152_value'] != 'undefined')
                } catch (e) {
                    utag.DB(e)
                }
                ;break;
            case '20':
                try {
                    c[20] |= (typeof d['twitter_event'] != 'undefined' && d['twitter_event'] != '')
                } catch (e) {
                    utag.DB(e)
                }
                ;break;
            case '22':
                try {
                    c[22] |= (typeof d['exponential_insights_pixel_value'] != 'undefined' && d['exponential_insights_pixel_value'] != '')
                } catch (e) {
                    utag.DB(e)
                }
                ;break;
            case '23':
                try {
                    c[23] |= (typeof d['exponential_deep_dive_value'] != 'undefined' && d['exponential_deep_dive_value'] != '')
                } catch (e) {
                    utag.DB(e)
                }
                ;break;
            case '24':
                try {
                    c[24] |= (d['dom.domain'].toString().indexOf('mazdausa.com') > -1)
                } catch (e) {
                    utag.DB(e)
                }
                ;break;
            case '3':
                try {
                    c[3] |= (typeof d['cbsi_value'] != 'undefined' && typeof d['cbsi_value'] != 'undefined' && d['cbsi_value'] != '')
                } catch (e) {
                    utag.DB(e)
                }
                ;break;
            case '5':
                try {
                    c[5] |= (typeof d['google_sem_value'] != 'undefined' && typeof d['google_sem_value'] != 'undefined' && d['google_sem_value'] != '')
                } catch (e) {
                    utag.DB(e)
                }
                ;break;
            case '6':
                try {
                    c[6] |= (typeof d['nativo_81618_value'] != 'undefined' && typeof d['nativo_81618_value'] != 'undefined' && d['nativo_81618_value'] != '')
                } catch (e) {
                    utag.DB(e)
                }
                ;break;
            case '7':
                try {
                    c[7] |= (typeof d['nativo_trusignal_value'] != 'undefined' && typeof d['nativo_trusignal_value'] != 'undefined' && d['nativo_trusignal_value'] != '')
                } catch (e) {
                    utag.DB(e)
                }
                ;break;
            case '8':
                try {
                    c[8] |= (typeof d['nativo_fy152_value'] != 'undefined' && typeof d['nativo_fy152_value'] != 'undefined' && d['nativo_fy152_value'] != '')
                } catch (e) {
                    utag.DB(e)
                }
                ;break;
            case '9':
                try {
                    c[9] |= (typeof d['nativo_cp_fy152_value'] != 'undefined' && typeof d['nativo_cp_fy152_value'] != 'undefined' && d['nativo_cp_fy152_value'] != '')
                } catch (e) {
                    utag.DB(e)
                }
                ;break;
            }
        }
    }
    ;
    utag.pre = function() {
        utag.loader.initdata();
        try {
            utag.loader.RD(utag.data)
        } catch (e) {
            utag.DB(e)
        }
        ;utag.loader.loadrules();
    }
    ;
    utag.loader.GET = function() {
        utag.cl = {
            '_all_': 1
        };
        utag.pre();
        utag.handler.extend = [function(a, b) {
            try {
                if (1) {
                    teal.flattenObject(b, b);
                }
            } catch (e) {
                utag.DB(e)
            }
        }
        , function(a, b) {
            try {
                if (1) {
                    b['silverpop_meta_content'] = 'www.pages02.net,mazda_mph.cis.silverpop.com,mazdaservicedriveoffer.com,mazdasharetowin.com,mazdatestdriveoffer.com,mazdaupdates.com,www.mazdasharetowin.com,www.mazdatestdriveoffer.com,www.mazdaupdates.com,www.mazdausa.com'
                }
            } catch (e) {
                utag.DB(e)
            }
        }
        , function(a, b) {
            try {
                if (1) {
                    window.teal = window.teal || {};
                    teal.getVar = function(a) {
                        if (typeof b !== "undefined" && typeof b[a] !== "undefined")
                            return b[a];
                    }
                    teal.getFullPageName = function getFullPageName(b) {
                        var URL_PATHS = ['mazda3-sedan', 'mazda3-hatchback', 'mazda6', 'cx-3', 'cx-5', 'cx-9', 'mx-5-miata'];
                        var URL_HASHES = ['m3s', 'm3h', 'm6g', 'cx3', 'cx5', 'cx9', 'mx5', 'all', 'm6g', 'mxr'];
                        var INPAGE_TEXT = ['Mazda3 4-door', 'Mazda3 5-door', 'Mazda6', 'CX-3', 'CX-5', 'CX-9', 'MX-5 Miata'];
                        var RAB_PRINT_VEHICLES = ['M3S', 'M3H', 'M6G', 'CX3', 'CX5', 'CX9', 'MX5', 'FLV', 'MXR'];
                        var RAB_VEHICLES = [/\d\dM3S/, /\d\dM3H/, /16M6G/, /\d\dCX3/, /\d\dCX5/, /\d\dCX9/, /\d\dMX5/, /FLV/, /17M6G/, ];
                        var fromDataLayer = teal.getVar('vehicle.vehicleID') || '';
                        var fromURLParam = teal.getVar('vehicleID.fromURLParam') || teal.getVar('vehicleID.fromURLParamB');
                        var fromProp;
                        var fromURLPath = URL_PATHS.findIndex(function(path) {
                            return document.location.pathname.toLowerCase().includes(path);
                        });
                        if (fromURLPath == 6 && document.location.pathname.indexOf("mx-5-miata-rf") > -1) {
                            fromURLPath = 9;
                        }
                        var fromURLHash = URL_HASHES.findIndex(function(hash) {
                            return document.location.hash.toLowerCase().includes(hash);
                        });
                        var fromInPage = INPAGE_TEXT.findIndex(function(text) {
                            return document.querySelector('h3.mobile-title') ? document.querySelector('h3.mobile-title').textContent.includes(text) : '';
                        });
                        var fromRAB = RAB_VEHICLES.findIndex(function(path) {
                            return document.location.search.search(path) > -1;
                        });
                        var fromRABPrint = RAB_PRINT_VEHICLES.findIndex(function(checkbox) {
                            return document.querySelector('input.form-field[type=checkbox]:checked') ? document.querySelector('input.form-field[type=checkbox]:checked').value.includes(checkbox) : '';
                        });
                        var index = fromURLPath > -1 ? fromURLPath : fromURLHash > -1 ? fromURLHash : fromInPage > -1 ? fromInPage : fromRABPrint > -1 ? fromRABPrint : fromRAB > -1 ? fromRAB : -1;
                        if (location.pathname.indexOf('/new-era') > -1 || location.pathname.indexOf('/keep-me-updated') > -1 || location.pathname.indexOf('/shopping-tools/reserve-a-test-drive') > -1 || location.pathname.indexOf('/find-a-dealer') > -1 || (location.pathname.indexOf("/shopping-tools/special-offers-and-incentives") > -1 && (dataLayer.vehicle.vehicleID === "" || dataLayer['vehicle'].hasOwnProperty('vehicleID') === false)) || location.pathname === '/' || location.pathname.indexOf("/shopping-tools/special-offers-and-incentives") > -1 && fromDataLayer !== "" && window.location.href.indexOf('#') == -1 || location.pathname.indexOf("/feelalive") > -1) {
                            var _vehicle = "";
                        } else {
                            var _vehicle = fromDataLayer || fromURLParam || URL_HASHES[index] || fromProp || '';
                            if (_vehicle == "undefined") {
                                _vehicle = "";
                            } else {
                                _vehicle = _vehicle.toLowerCase();
                            }
                        }
                        b['_vehicle'] = _vehicle;
                        b['_year'] = _year;
                        var _section = teal.getVar('site.section');
                        var _subsection = teal.getVar('site.subsection') || '';
                        var _pageName = teal.getVar('page.name') || '';
                        var _subCat = teal.getVar('page.subCategory') || '';
                        var _year = teal.getVar('vehicle.modelYear') || '';
                        var _events = teal.getVar('events') || '';
                        var _pageStructure = _section == 'regional incentives' ? [_section, _vehicle] : _subsection == 'inventory' && _pageName == 'models' ? [_section, _subsection, _pageName, _subCat] : [_section, _subsection, _pageName, _vehicle];
                        var formSelection = document.querySelector('input:checked') ? document.querySelector('input:checked')['id'] : '';
                        var _fullPageName = _pageStructure.filter(function(x) {
                            return x !== '';
                        }).join(':').replace(/\s/g, '_');
                        var isPaymentEstimator = _fullPageName.search('tools:pay_est:info:') === 0;
                        _fullPageName = isPaymentEstimator ? 'tools:pay_est:info' : _fullPageName;
                        var isInitialScroll = _events.search(/event\.scroll/) !== -1;
                        var isEmailUpdateSubmit = _events.search(/event5,event99/) !== -1;
                        var isKMUSubmit = _events.search(/event27,event35/) !== -1;
                        var isRAQComplete = _events.search(/event3,event11/) !== -1;
                        var isBrochureSubmit = _events.search(/event5,event99/) !== -1;
                        var isFinanceApplySubmit = _events.search(/event49,event70/) !== -1;
                        var isCompare = _events.search(/event22,event30/) !== -1;
                        if (_pageName == "2019 Mazda3 Sedan" && _subsection == "Compare Vehicles") {
                            _fullPageName = "tools:compare:details:m3s";
                            isCompare = true;
                        } else if (_pageName == "2018 Mazda3 5-door" && _subsection == "Compare Vehicles") {
                            _fullPageName = "tools:compare:details:m3h";
                            isCompare = true;
                        }
                        if (!isCompare && _pageName == 'details' && _subsection == 'compare') {
                            isCompare = true;
                        }
                        var isBuildStart = _events.search(/event103,event104/) !== -1;
                        var isBuildComplete = _events.search(/event2,event21/) !== -1;
                        var isCPOsearchResults = _events.search(/event38,event40/) !== -1;
                        var isCPOdetailedView = _events.search(/event109,event110/) !== -1;
                        if (!isCPOdetailedView && a == "view" && _subsection == 'inventory' && _subCat == 'cpo_inventory_detail') {
                            isCPOdetailedView = true;
                        }
                        var isNEWsearchResults = _events.search(/event12,event209/) !== -1;
                        var isNEWdetailedView = _events.search(/event143,event144/) !== -1;
                        if (!isNEWdetailedView && a == "view" && _subsection == 'inventory' && _subCat == 'inventory_detail') {
                            isNEWdetailedView = true;
                        }
                        var isClickDealerMap = _events.search(/event123,event124/) !== -1;
                        var isCallDealer = _events.search(/event50,event52/) !== -1;
                        var isDealerWebsiteOut = _events.search(/event117,event118/) !== -1;
                        var isSpecialOffersExpand = _events.search(/event131,event132/) !== -1;
                        var isVideoStart = _events.search(/event81/) !== -1;
                        var isReserveSignup = _events.search(/event282,event283/) !== -1;
                        var eventKPI = isInitialScroll ? 'scroll' : isEmailUpdateSubmit ? 'emailUpdateSubmit' : isKMUSubmit ? 'KMUsubmit' : isRAQComplete ? 'RAQcomplete' : isCompare ? 'compare' : isBrochureSubmit ? 'brochureSubmit' : isBuildStart ? 'buildStart' : isBuildComplete ? 'buildComplete' : isCPOsearchResults ? 'CPOsearchResults' : isCPOdetailedView ? 'CPOdetailedView' : isNEWsearchResults ? 'NEWsearchResults' : isNEWdetailedView ? 'NEWdetailedView' : isClickDealerMap ? 'clickDealerMap' : isCallDealer ? 'callDealer' : isDealerWebsiteOut ? 'dealerWebsite' : isSpecialOffersExpand ? 'specialOffersExpand' : isVideoStart ? 'videoStart' : isReserveSignup ? 'reserveSignup' : isFinanceApplySubmit ? 'financeApplySubmit' : _events;
                        if (eventKPI == 'buildComplete' || eventKPI == 'buildStart') {
                            typeof updateRAQCTA !== "undefined" ? updateRAQCTA(__BUILD_VARIANT) : ''
                        }
                        utag.DB("Floodlight Test Comment: eventKPI =  " + eventKPI);
                        if (eventKPI !== "") {
                            var PAGE_EVENT = [_fullPageName, eventKPI].join(':');
                        }
                        if (typeof PAGE_EVENT !== "undefined" && PAGE_EVENT !== "") {
                            utag.DB("3PT - teal.getFullPageName returned: " + PAGE_EVENT + " via a " + a + " call");
                            return PAGE_EVENT;
                        } else {
                            utag.DB("3PT - teal.getFullPageName returned: " + _fullPageName + " via a " + a + " call");
                            return _fullPageName;
                        }
                    }
                }
            } catch (e) {
                utag.DB(e)
            }
        }
        , function(a, b) {
            try {
                if (b['dom.domain'].toString().toLowerCase().indexOf('mazdaespanol'.toLowerCase()) < 0) {
                    try {
                        b['full_page_name'] = teal.getFullPageName(b)
                    } catch (e) {}
                }
            } catch (e) {
                utag.DB(e)
            }
        }
        , function(a, b) {
            try {
                if (b['dom.domain'].toString().toLowerCase().indexOf('mazdaespanol'.toLowerCase()) > -1) {
                    try {
                        b['full_page_name_esp'] = teal.getFullPageName(b)
                    } catch (e) {}
                }
            } catch (e) {
                utag.DB(e)
            }
        }
        , function(a, b, c, d, e, f, g) {
            d = b['full_page_name'];
            if (typeof d == 'undefined')
                return;
            c = [{
                'home:home:home:scroll': 'Dream0|musa_0|3eedd142-e884-b321-4617-8a208db81847|4336693|0||||||pdata=partner%3Dtap22978%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Dreamers|CQAAAEAAAA20ECA|9d1cf807bbdb46a8a1d53d7807daf076||9spr9l6||tl6ows5||||||Homepage Scroll|VIEW_CONTENT||'
            }, {
                'home:home:home': '||||||||||||||||||||||Homepage Start|||'
            }, {
                'tools:apply_for_financing:info': 'decid0|musa_001|f88cb71c-68fc-fdf4-aeda-bc7da54dbc7e|||client=654223&ev=1&page=Shop|||3||pdata=partner%3Dtap22979%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Decided|||85114|tnaf3xu||9d3nwvk|||||Lead||||'
            }, {
                'tools:build:summary:cx3:buildComplete': 'Explo0|musa_007|32c58ea2-7aa6-f190-6db0-e3c29366138f|4338288|2|c=601533&ev=5&page=Cclass|client=655883&ev=1||||pdata=partner%3Dtap22977%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Explorers|CQAAAEAAAA3EECA|67df3e3bfc1c4c9b875ad47d95a32d98||edj49ti|||2xm23p1||||ViewContent|Build Complete|SAVE||'
            }, {
                'tools:build:summary:cx5:buildComplete': 'Explo0|musa_008|4f59999a-e69e-7349-3f9f-cfb42d8add7e|4338288|2|c=601533&ev=5&page=Cclass|client=455403&ev=1&page=CX5||||pdata=partner%3Dtap22977%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Explorers|CQAAAEAAAA3EECA|db09be85f35c4d968ba8d78de57c2ac1||dicbm9b|||2xm23p1||||ViewContent|Build Complete|SAVE||'
            }, {
                'tools:build:summary:cx9:buildComplete': 'Explo0|musa_009|1f319937-bd60-f6a9-c201-6684523e07f3|4338288|2|c=601533&ev=5&page=Cclass|client=463963&ev=1&page=CX9||||pdata=partner%3Dtap22977%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Explorers|CQAAAEAAAA3EECA|7c6daa5f505046e1b1dd265305d34102||zy1ypoy|||2xm23p1||||ViewContent|Build Complete|SAVE||'
            }, {
                'tools:build:summary:m3h:buildComplete': 'Explo0|musa_00-|c6dfc89c-b659-b611-edea-198b56b71eed|4338288|2|c=601533&ev=4&page=Mclass|client=462213&ev=1&page=M3H||||pdata=partner%3Dtap22977%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Explorers|CQAAAEAAAA3EECA|bfb8ce697fb5417aab7a5bf9f281e100||kphg7zh|||2xm23p1||||ViewContent|Build Complete|SAVE||'
            }, {
                'tools:build:summary:m3s:buildComplete': 'Explo0|musa_00a|c9faafd5-d915-c7aa-991a-5dd0b50d8ed8|4338288|2|c=601533&ev=4&page=Mclass|client=609393&ev=1&page=M3S||||pdata=partner%3Dtap22977%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Explorers|CQAAAEAAAA3EECA|f811aff6a3d14df5b1a664d4a121760f||t8zqks7|||2xm23p1||||ViewContent|Build Complete|SAVE||'
            }, {
                'tools:build:summary:m6g:buildComplete': 'Explo0|musa_00b|d6d94d1c-b260-6aeb-6fbd-d551b78f860b||2|c=601533&ev=4&page=Mclass|client=609413&ev=1&page=M6G||||pdata=partner%3Dtap22977%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Explorers|CQAAAEAAAA3EECA|b8fd8f4659a94854bd61f042a5f5ee45||g7wccs1|||2xm23p1||||ViewContent|Build Complete|SAVE||'
            }, {
                'tools:build:summary:mx5:buildComplete': 'Explo0|musa_00c|ec79c959-7f99-73b3-0d61-43ec097856e2|4338288|2|c=601533&ev=4&page=Mclass|client=654243&ev=1&page=MX5||||pdata=partner%3Dtap22977%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Explorers|CQAAAEAAAA3EECA|89a0e9510f424156859fd9c475cd13e3||y0o3snj|||2xm23p1||||ViewContent|Build Complete|SAVE||'
            }, {
                'tools:build:summary:mxr:buildComplete': 'Explo0|musa_00d|ec79c959-7f99-73b3-0d61-43ec097856e2|4338288|2||||||pdata=partner%3Dtap22977%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Explorers|CQAAAEAAAA3EECA|fd07cb79f59a4018a422552de856205c||a953z5u|||2xm23p1||||ViewContent|Build Complete|SAVE||'
            }, {
                'tools:compare:details:cx3:compare': 'shopp0|musa_007|db5384f5-a24d-ce71-4d9a-afe874e3cb1f|4336696|2|client=654223&ev=2&page=Validate|client=655883&ev=1||3||pdata=partner%3Dtap22949%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Shoppers|CQAAAEAAAA3UECA|402c1e4825d94ddf881ee3260284db42||qev2ig1|||2xm23p1|ihu9797||||||search|'
            }, {
                'tools:compare:details:cx5:compare': 'shopp0|musa_008|99c8e3ff-2e1c-8388-a483-25bf1a776584|4336696|2|client=654223&ev=2&page=Validate|||3||pdata=partner%3Dtap22949%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Shoppers|CQAAAEAAAA3UECA|1be901e99e684c76b0bab3960732159c|99994|bcxuca4|||2xm23p1|ihu9797||||||search|'
            }, {
                'tools:compare:details:cx9:compare': 'shopp0|musa_009|d0d3376a-14bb-addd-5c6f-e69f9ea8bb60|4336696|2|client=654223&ev=2&page=Validate|||3||pdata=partner%3Dtap22949%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Shoppers|CQAAAEAAAA3UECA|bbb170f6c1514dfe945d775cdf94ae4d|100834|ggpskqs|||2xm23p1|ihu9797||||||search|'
            }, {
                'tools:compare:details:m3h:compare': 'shopp0|musa_00-|18ed97df-e27a-a147-f8b8-b2b62f36056d|4336696|2|client=654223&ev=2&page=Validate|||3||pdata=partner%3Dtap22949%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Shoppers|CQAAAEAAAA3UECA|52347910e8ad44d2923fefcf25b382f5|88234|vzs5odi|||2xm23p1|ihu9797||||||search|'
            }, {
                'tools:compare:details:m3s:compare': 'shopp0|musa_00a|93bef4f9-45a3-6b26-f86b-14fd0594de94|4336696|2|client=654223&ev=2&page=Validate|||3||pdata=partner%3Dtap22949%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Shoppers|CQAAAEAAAA3UECA|4a04c43f50a2445e9b81eece708cbf1e|86554|3pd4xfk|||2xm23p1|ihu9797||||||search|'
            }, {
                'tools:compare:details:m6g:compare': 'shopp0|musa_00b|2b8b1283-3719-c065-260e-21adf0ac3408||2|client=654223&ev=2&page=Validate|||3||pdata=partner%3Dtap22949%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Shoppers|CQAAAEAAAA3UECA|81d8ac9f28ae4dc08d48a2684a54381a|91954|6ldbc2a|||2xm23p1|ihu9797||||||search|'
            }, {
                'tools:compare:details:mx5:compare': 'shopp0|musa_00c|50b09c3f-8a92-b4b9-d321-e644151fcc3f|4336696|2|client=654223&ev=2&page=Validate||client=654243&ev=1|3||pdata=partner%3Dtap22949%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Shoppers|CQAAAEAAAA3UECA|4627bf93e8cb4e3f97a4e9672799c008|93874|7bcvmn4|||2xm23p1|ihu9797||||||search|'
            }, {
                'tools:compare:details:mxr:compare': 'shopp0|musa_00d|9c684f25-e303-1c0d-6a02-9ed472a12df5|4336696|2|client=654223&ev=2&page=Conversion Page||client=718673&ev=1|3||pdata=partner%3Dtap22949%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Shoppers|CQAAAEAAAA3UECA|5f1431018c8e48bc898e415c0d6e3751|128794|vvmk4hw|||2xm23p1|ihu9797||||||search|'
            }, {
                'tools:incentives:national:scroll': 'Dream0|musa_009|||||||||||||||||||||Incentives Scroll|||'
            }, {
                'tools:incentives:national:cx3:scroll': 'Dream0|musa_00-|d242ec05-e02c-2724-eb99-01743440b310|4336693|||||||pdata=partner%3Dtap22978%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Dreamers|CQAAAEAAAA20ECA|c321eaac3a794e9593147d4f90f4f83b||1knxj5x||tl6ows5||||||Incentives Start||pagevisit|nwdgt'
            }, {
                'tools:incentives:national:cx3:specialOffersExpand': 'shopp0|musa_00|c8417331-0dd1-a01f-1d1b-b7002035a620|4336696|1||||||pdata=partner%3Dtap22949%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Shoppers|CQAAAEAAAA3UECA|f4d7b76de16f416c9ccd090726f50c64||nviee1b|||2xm23p1|ihu9797|||AddPaymentInfo|Incentives Offer Expanded|ADD_BILLING||'
            }, {
                'tools:incentives:national:cx5:scroll': 'Dream0|musa_00b|85812c4c-57bb-0a59-d24d-a05d08d2677c|4336693|||||||pdata=partner%3Dtap22978%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Dreamers|CQAAAEAAAA20ECA|2b786297168b46cd9fd67fdd118c2859||31jiou1||tl6ows5||||||Incentives Start||pagevisit|nwdgt'
            }, {
                'tools:incentives:national:cx5:specialOffersExpand': 'shopp0|musa_000|490fa839-3558-69d0-4b68-fa07f4300c67|4336696|1||||||pdata=partner%3Dtap22949%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Shoppers|CQAAAEAAAA3UECA|d5d6e113afe64010a53764ffbeb9637f||ooq9jm0|||2xm23p1|ihu9797|||AddPaymentInfo|Incentives Offer Expanded|ADD_BILLING||'
            }, {
                'tools:incentives:national:cx9:scroll': 'Dream0|musa_00d|bb941c85-1e61-9010-5f95-23faae738a26|4336693|||||||pdata=partner%3Dtap22978%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Dreamers|CQAAAEAAAA20ECA|2b0687d69f75465f8def73bbb994ce47||wp73dh0||tl6ows5||||||Incentives Start||pagevisit|nwdgt'
            }, {
                'tools:incentives:national:cx9:specialOffersExpand': 'shopp0|musa_001|f69de3a1-8a97-1d5b-880d-128a57e98b47|4336696|1||||||pdata=partner%3Dtap22949%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Shoppers|CQAAAEAAAA3UECA|53fe3e7cc39944bb8c19b425a364e3d0||e6hk675|||2xm23p1|ihu9797|||AddPaymentInfo|Incentives Offer Expanded|ADD_BILLING||'
            }, {
                'tools:incentives:national:m3h:scroll': 'Dream0|musa_00f|8e67d75f-f7ae-fadb-5068-064625cf3b20|4336693|||||||pdata=partner%3Dtap22978%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Dreamers|CQAAAEAAAA20ECA|390c70ae761d4ad0885447c3fee215a7||qbyi3wf||tl6ows5||||||Incentives Start||pagevisit|nwdgt'
            }, {
                'tools:incentives:national:m3h:specialOffersExpand': 'shopp0|musa_002|da07660d-1569-9a5f-ad14-a1407673bd9e|4336696|1||||||pdata=partner%3Dtap22949%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Shoppers|CQAAAEAAAA3UECA|b57beae1a0ac4ca3af88391c896ddb5e||ypr0dop|||2xm23p1|ihu9797|||AddPaymentInfo|Incentives Offer Expanded|ADD_BILLING||'
            }, {
                'tools:incentives:national:m3s:scroll': 'Dream0|musa_00h|56c5f667-afb6-3d6c-76b2-e36509bf9bd4|4336693|||||||pdata=partner%3Dtap22978%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Dreamers|CQAAAEAAAA20ECA|47ed35de11a14c609004d1d55a27c9a9||87had6n||tl6ows5||||||Incentives Start||pagevisit|nwdgt'
            }, {
                'tools:incentives:national:m3s:specialOffersExpand': 'shopp0|musa_003|b3b592c6-cedd-195c-52b4-8db0148a9c35|4336696|1||||||pdata=partner%3Dtap22949%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Shoppers|CQAAAEAAAA3UECA|52fe0dd539dc4b59a512c6586ee0e8ac||6fh9rrg|||2xm23p1|ihu9797|||AddPaymentInfo|Incentives Offer Expanded|ADD_BILLING||'
            }, {
                'tools:incentives:national:m6g:scroll': 'Dream0|musa_00j|275820da-750c-0639-2615-e3b52362cdb1||||||||pdata=partner%3Dtap22978%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Dreamers|CQAAAEAAAA20ECA|3d098a89dd99471c97c5b5f557364ea7||c5mor19||tl6ows5||||||Incentives Start||pagevisit|nwdgt'
            }, {
                'tools:incentives:national:m6g:specialOffersExpand': 'shopp0|musa_004|cc36ce0d-6d18-a52d-4af7-8266556b1bf7||1||||||pdata=partner%3Dtap22949%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Shoppers|CQAAAEAAAA3UECA|5a7eaabd581f47baa1834d305d2a88ad||36d13yt|||2xm23p1|ihu9797|||AddPaymentInfo|Incentives Offer Expanded|ADD_BILLING||'
            }, {
                'tools:incentives:national:mx5:scroll': 'Dream0|musa_00l|abafd8a7-16c4-5182-5d56-56eb708a685c|4336693|||||||pdata=partner%3Dtap22978%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Dreamers|CQAAAEAAAA20ECA|40512773a09845778469b30b0f28b10e||6layfr1||tl6ows5||||||Incentives Start||pagevisit|nwdgt'
            }, {
                'tools:incentives:national:mx5:specialOffersExpand': 'shopp0|musa_005|5282bb1b-02f9-faf6-9788-ff2416518c9b|4336696|1||||||pdata=partner%3Dtap22949%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Shoppers|CQAAAEAAAA3UECA|49f3fae65ffc4751b612860ec0ad7112||xfz425y|||2xm23p1|ihu9797|||AddPaymentInfo|Incentives Offer Expanded|ADD_BILLING||'
            }, {
                'tools:incentives:national:mxr:scroll': 'Dream0|musa_00n|31b4095f-3856-12de-5909-8d159e76bafc|4336693|||||||pdata=partner%3Dtap22978%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Dreamers|CQAAAEAAAA20ECA|bcc0a53c2f7643daa34b8ea53f35029b||0qsq2pc||tl6ows5||||||Incentives Start||pagevisit|nwdgt'
            }, {
                'tools:incentives:national:mxr:specialOffersExpand': 'shopp0|musa_006|2d84bdee-e2ef-e0dd-ea9a-a08f09de360c|4336696|1||||||pdata=partner%3Dtap22949%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Shoppers|CQAAAEAAAA3UECA|9d1c30e8782b42c3b6be0d911bb3c468||xzhtth6|||2xm23p1|ihu9797|||AddPaymentInfo|Incentives Offer Expanded|ADD_BILLING||'
            }, {
                'tools:incentives:national:specialOffersExpand': 'shopp0|musa_0|d423bae9-89b6-fad1-3ab6-cf6405c7c008|4336693|1||||||pdata=partner%3Dtap22949%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Shoppers|CQAAAEAAAA3UECA|b421ca994f094ef997509820f17ccffa||ahxjwyk|||2xm23p1|ihu9797|||AddPaymentInfo|Incentives Offer Expanded|ADD_BILLING||'
            }, {
                'tools:inventory:cpo_detail:cx3:CPOdetailedView': 'shopp0|musa_00m|c6cc2d0b-7486-9296-8250-d3884739d996|4336696|||||||pdata=partner%3Dtap22949%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Shoppers|CQAAAEAAAA3UECA|8810a6f22c58476fa523050c6dd35351|||||2xm23p1|||||Inventory Detail View|||'
            }, {
                'tools:inventory:cpo_detail:cx5:CPOdetailedView': 'shopp0|musa_00n|33e54df3-8809-e6cf-676b-f1f5990b36ad|4336696|1||||||pdata=partner%3Dtap22949%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Shoppers|CQAAAEAAAA3UECA|f590300a798541f190275a221d6d83bd|||||2xm23p1|||||Inventory Detail View|||'
            }, {
                'tools:inventory:cpo_detail:cx7:CPOdetailedView': 'shopp0|musa_00u|b6433202-3073-6360-785a-20f1b7ecfc45|4336696|||||||pdata=partner%3Dtap22949%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Shoppers|CQAAAEAAAA3UECA|b7339dbf4d7a45279de20498dee7c41f|||||2xm23p1|||||Inventory Detail View|||'
            }, {
                'tools:inventory:cpo_detail:cx9:CPOdetailedView': 'shopp0|musa_00o|0b96b934-d75a-7d39-09f6-34ef8885c52e|4336696|||||||pdata=partner%3Dtap22949%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Shoppers|CQAAAEAAAA3UECA|226ae130055c4aa9a05228f49ea8457c|||||2xm23p1|||||Inventory Detail View|||'
            }, {
                'tools:inventory:cpo_detail:m3h:CPOdetailedView': 'shopp0|musa_00p|f7ef6e85-374f-ac25-9ce1-61d6a82c4ce7|4336696|||||||pdata=partner%3Dtap22949%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Shoppers|CQAAAEAAAA3UECA|3dbb1d27adec404bb5e56ed424c27d41|||||2xm23p1|||||Inventory Detail View|||'
            }, {
                'tools:inventory:cpo_detail:m3s:CPOdetailedView': 'shopp0|musa_00q|46115837-2fe7-ea70-a172-269ab058501c|4336696|||||||pdata=partner%3Dtap22949%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Shoppers|CQAAAEAAAA3UECA|c13c1a4ab11a49ca80456b856851f0c0|||||2xm23p1|||||Inventory Detail View|||'
            }, {
                'tools:inventory:cpo_detail:m6g:CPOdetailedView': 'shopp0|musa_00r|f0b53266-9f58-7890-403f-171eb7d21666||2||||||pdata=partner%3Dtap22949%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Shoppers|CQAAAEAAAA3UECA|e03cab1fc6a44f12a6f6e9b5ee3adf82|||||2xm23p1|||||Inventory Detail View|||'
            }, {
                'tools:inventory:cpo_detail:ms3:CPOdetailedView': 'shopp0|musa_00v|7cfbc131-2731-5f8d-e1fb-6a2f8eb85658|4338288|||||||pdata=partner%3Dtap22949%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Shoppers|CQAAAEAAAA3UECA|68e941b566da48259de46b984d8c4318|||||2xm23p1|||||Inventory Detail View|||'
            }, {
                'tools:inventory:cpo_detail:mx5:CPOdetailedView': 'shopp0|musa_00s|78a1156c-881e-bdf7-c0b7-d6df8fcce466|4336696|||||||pdata=partner%3Dtap22949%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Shoppers|CQAAAEAAAA3UECA|4f795810db66468aa6e11403aa9e107b|||||2xm23p1|||||Inventory Detail View|||'
            }, {
                'tools:inventory:cpo_detail:mxr:CPOdetailedView': 'shopp0|musa_00t|6fb9c80a-0e46-3425-49b3-dd9530f0fb11|4336696|||||||pdata=partner%3Dtap22949%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Shoppers||a0944f77f6ad4c1d847c2018cc010036|||||2xm23p1|||||Inventory Detail View|||'
            }, {
                'tools:inventory:cpo_detail:mz2:CPOdetailedView': 'shopp0|musa_00w|62208a59-824b-a7bb-eeba-f3c4f8dfd4c0|4336696|||||||pdata=partner%3Dtap22949%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Shoppers|CQAAAEAAAA3UECA|c97b738e66d5483abfea847ed2751fe1|||||2xm23p1|||||Inventory Detail View|||'
            }, {
                'tools:inventory:cpo_detail:mz5:CPOdetailedView': 'shopp0|musa_00x|057c272f-8129-3696-7aec-e72919c35249|4336696|||||||pdata=partner%3Dtap22949%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Shoppers|CQAAAEAAAA3UECA|f90d799765a14957a8abb5c3f972ed68|||||2xm23p1|||||Inventory Detail View|||'
            }, {
                'tools:inventory:cpo_detail:rx8:CPOdetailedView': 'shopp0|musa_00y|501c0ee9-f9da-e390-ed88-2aa2dd7de196|4336696|||||||pdata=partner%3Dtap22949%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Shoppers|CQAAAEAAAA3UECA|2b6fb5dbce2d4e988316a35468f89655|||||2xm23p1|||||Inventory Detail View|||'
            }, {
                'tools:inventory:detail:cx3:NEWdetailedView': 'shopp0|musa_00e|d242ec05-e02c-2724-eb99-01743440b310|4336696|1||||||pdata=partner%3Dtap22949%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Shoppers|CQAAAEAAAA3UECA|ce43a083d6bc4592b6673e84f1f98f0a||mu1prra|||2xm23p1|ihu9797||||Inventory Detail View||search|'
            }, {
                'tools:inventory:detail:cx5:NEWdetailedView': 'shopp0|musa_00f|8657db9b-874f-e381-f1bb-e2167101a1cc|4336696|||||||pdata=partner%3Dtap22949%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Shoppers|CQAAAEAAAA3UECA|76373ff704b942cdbd0a6522adfec6da||z8apu1a|||2xm23p1|ihu9797||||Inventory Detail View||search|'
            }, {
                'tools:inventory:detail:cx9:NEWdetailedView': 'shopp0|musa_00g|eea20c1f-a518-e346-a43b-8df6251eaece|4336696|1||||||pdata=partner%3Dtap22949%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Shoppers|CQAAAEAAAA3UECA|81476474a3c640849454bf9ecb0b05db||8qinxk8|||2xm23p1|ihu9797||||Inventory Detail View||search|'
            }, {
                'tools:inventory:detail:m3h:NEWdetailedView': 'shopp0|musa_00h|bf80b7a4-7195-78e5-b8cd-9bf04d66bd6f|4336696|1||||||pdata=partner%3Dtap22949%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Shoppers|CQAAAEAAAA3UECA|ae3890f866a946fc818d36c212a34ee3||88jjnnm|||2xm23p1|ihu9797||||Inventory Detail View||search|'
            }, {
                'tools:inventory:detail:m3s:NEWdetailedView': 'shopp0|musa_00i|437fbd82-7d58-0c0d-7aac-11bf24846382|4336696|1||||||pdata=partner%3Dtap22949%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Shoppers|CQAAAEAAAA3UECA|93d1ade9ff4c4e20ad46fa5a0b54cac6||30b1l5r|||2xm23p1|ihu9797||||Inventory Detail View||search|'
            }, {
                'tools:inventory:detail:m6g:NEWdetailedView': 'shopp0|musa_00j|192f366f-13ab-b4e2-4d35-0b3839d30652||1||||||pdata=partner%3Dtap22949%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Shoppers|CQAAAEAAAA3UECA|303b6ef709af4ff2a57c7428da79ff78||cssmpxb|||2xm23p1|ihu9797||||Inventory Detail View||search|'
            }, {
                'tools:inventory:detail:mx5:NEWdetailedView': 'shopp0|musa_00k|33c7db80-d780-3996-b70f-c75952069781|4336696|1||||||pdata=partner%3Dtap22949%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Shoppers|CQAAAEAAAA3UECA|0a86e820d0af4d48ae48863f0cad3f8e||a5a0eom|||2xm23p1|ihu9797||||Inventory Detail View||search|'
            }, {
                'tools:locate_dealer:overview': 'shopp0|musa_00z|232da1f5-a7e7-33eb-09ab-bdf1e5d2da91|4336696|1|client=654223&ev=1&page=Shop|||2||pdata=partner%3Dtap22949%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Shoppers|CQAAAEAAAA3UECA|90cb83e7411f4a94a2b136bcd2821a92|85234|7jl5x8z|||2xm23p1|ihu9797||1||Locate a Dealer||lead|'
            }, {
                'tools:locate_dealer:overview:callDealer': 'decid0|musa_0|501c0ee9-f9da-e390-ed88-2aa2dd7de196||||||||pdata=partner%3Dtap22979%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Decided||||||nevonyw|||||Lead|Click To Call Dealer|PURCHASE||nwdhl'
            }, {
                'tools:locate_dealer:overview:clickDealerMap': 'decid0|musa_00|d697e7e2-b1aa-65aa-3366-e7a2b3645904||||||||pdata=partner%3Dtap22979%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Decided||||buc59f4||9d3nwvk|||||Lead|Exit to Dealer Map|PURCHASE||nwdhl'
            }, {
                'tools:locate_dealer:overview:dealerWebsite': 'decid0|musa_000|a799152b-45fc-68ec-4054-25bdcd01d975||||||||pdata=partner%3Dtap22979%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Decided||||atl15as||9d3nwvk|||||Lead|Dealer Site Click Out|PURCHASE||nwdhl'
            }, {
                'tools:pay_est:info:event14': 'shopp0|musa_00_|ffa0e47c-1e67-1f60-8f00-7fc7275e2a4f|4336696|1||||||pdata=partner%3Dtap22949%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Shoppers|CQAAAEAAAA3UECA|9f930dda27954a5086d6bd80b4db32c8||ljrrwrk|||2xm23p1|ihu9797||||Payment Calculated||addToCart|'
            }, {
                'tools:quote:confirm:cx3:RAQcomplete': 'decid0|musa_002|42a4c418-de00-7f50-90cb-b2b28b2a8cae|||c=601533&ev=5&page=Cclass|client=655883&ev=1||||pdata=partner%3Dtap22979%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Decided||||ityu7im||9d3nwvk|||||Lead|RAQ Submission|PURCHASE|checkout|nwdhl'
            }, {
                'tools:quote:confirm:cx5:RAQcomplete': 'decid0|musa_003|382c058a-aab8-6839-fffa-42c2e73d5e37|4336693||c=601533&ev=5&page=Cclass|client=455403&ev=1&page=CX5||||pdata=partner%3Dtap22979%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Decided||||p4mmem9||9d3nwvk|||||Lead|RAQ Submission|PURCHASE|checkout|nwdhl'
            }, {
                'tools:quote:confirm:cx9:RAQcomplete': 'decid0|musa_004|92d9d977-2ae2-977f-405d-49b45222092f|4336693||c=601533&ev=5&page=Cclass|client=463963&ev=1&page=CX9||||pdata=partner%3Dtap22979%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Decided||||ak7whdl||9d3nwvk|||||Lead|RAQ Submission|PURCHASE|checkout|nwdhl'
            }, {
                'tools:quote:confirm:m3h:RAQcomplete': 'decid0|musa_005|a32ad128-3b01-1075-b26e-a31ef20d53b0|4336693||c=601533&ev=4&page=Mclass|client=462213&ev=1&page=M3H||||pdata=partner%3Dtap22979%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Decided||||5rbzhsx||9d3nwvk|||||Lead|RAQ Submission|PURCHASE|checkout|nwdhl'
            }, {
                'tools:quote:confirm:m3s:RAQcomplete': 'decid0|musa_006|1bc9938a-8f64-1b09-421d-040c9a7a3173|4336693||c=601533&ev=4&page=Mclass|client=609393&ev=1&page=M3S||||pdata=partner%3Dtap22979%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Decided||||v289avv||9d3nwvk|||||Lead|RAQ Submission|PURCHASE|checkout|nwdhl'
            }, {
                'tools:quote:confirm:m6g:RAQcomplete': 'decid0|musa_007|f48c371a-2bc2-88e4-db70-8d9d82a282a6|||c=601533&ev=4&page=Mclass|client=609413&ev=1&page=M6G||||pdata=partner%3Dtap22979%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Decided||||zipiqy9||9d3nwvk|||||Lead|RAQ Submission|PURCHASE|checkout|nwdhl'
            }, {
                'tools:quote:confirm:mx5:RAQcomplete': 'decid0|musa_008|28d69c3f-efec-f8ee-1ed6-880c150713e9|4336693||c=601533&ev=4&page=Mclass|client=654243&ev=1&page=MX5||||pdata=partner%3Dtap22979%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Decided||||as6rtna||9d3nwvk|||||Lead|RAQ Submission|PURCHASE|checkout|nwdhl'
            }, {
                'tools:quote:confirm:mxr:RAQcomplete': 'decid0|musa_009|98c1b38b-5967-ec70-7c9a-260c8f88ecb1|4336693|||||||pdata=partner%3Dtap22979%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Decided||||t6p724g||9d3nwvk|||||Lead|RAQ Submission|PURCHASE|checkout|nwdhl'
            }, {
                'vehicles:anniversary:overview:mx5': 'Dream0|musa_00s||4336696||||||||||||||||||||||'
            }, {
                'vehicles:cx3:features:cx3:scroll': 'Explo0|musa_00e|319c510d-b0d4-ebcd-401b-cd35e2387d5b|4338288|2||||||pdata=partner%3Dtap22977%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Explorers|CQAAAEAAAA3EECA|edfeec9b6d5841f5a284e233355829ee||rvvmqz6|||2xm23p1|||||Features Scroll|SEARCH||'
            }, {
                'vehicles:cx3:gallery:cx3:scroll': 'Explo0|musa_00m|800d1d31-8c11-c283-0a91-a8b883ac1dde|4338288|2||||||pdata=partner%3Dtap22977%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Explorers|CQAAAEAAAA3EECA|a797d23b8cc14ec1ba1a96ed80380a86||92pnye5|||2xm23p1|||||Gallery Scroll|SEARCH||'
            }, {
                'vehicles:cx3:overview:cx3:scroll': 'Dream0|musa_00a|619fefff-313d-8d40-bfd6-2de2f21b2ae0|4336693|0|||||CQAAAEAAAAFQgYAQ|pdata=partner%3Dtap22978%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Dreamers|CQAAAEAAAA20ECA|884aaa3dd106432384c6df37d3d81806||fnqw65m||tl6ows5||||||VLP Scroll|VIEW_CONTENT||'
            }, {
                'vehicles:cx3:overview:cx3': '||||||||||||||||||||||VLP Start|||'
            }, {
                'vehicles:cx3:specs:cx3': 'Explo0|musa_00u|7c012e9b-12b8-0857-1164-ac53ee9c6fc5|4338288|2|client=654223&ev=2&page=Validate|client=655883&ev=1||3||pdata=partner%3Dtap22977%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Explorers|CQAAAEAAAA3EECA|7345760e672a4f9c99e0178871a8cb23||rqal9vy|||2xm23p1|||1||Specs View||watchvideo|'
            }, {
                'vehicles:cx5:features:cx5:scroll': 'Explo0|musa_00f|16|||||||||||||||||||||||'
            }, {
                'vehicles:cx5:gallery:cx5:scroll': 'Explo0|musa_00n|3effaa04-beb6-0331-61b8-ef716fd90d26|4338288|2||||||pdata=partner%3Dtap22977%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Explorers|CQAAAEAAAA3EECA|516b7c1e106c47c081f95a5a104cb366||zdqjgfy|||2xm23p1|||||Gallery Scroll|SEARCH||'
            }, {
                'vehicles:cx5:overview:cx5:scroll': 'Dream0|musa_00c|c3e15617-df11-1944-097b-9babe773aedd|4336693|1|||||CQAAAEAAAAFggYAQ||CQAAAEAAAA20ECA|479865ace097467bbe704d5cf15c4c3b||luy86qj||tl6ows5||||||VLP Scroll|VIEW_CONTENT||'
            }, {
                'vehicles:cx5:overview:cx5': '||||||||||||||||||||||VLP Start|||'
            }, {
                'vehicles:cx5:specs:cx5': 'Explo0|musa_00v|379e5d5a-64c5-fa48-56b2-a0857965f5fc|4338288|2|client=654223&ev=2&page=Validate|||3||pdata=partner%3Dtap22977%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Explorers|CQAAAEAAAA3EECA|d8ad82e338e04aa78af4a3558fc141c8|99754|y4ir7ln|||2xm23p1|||1||Specs View||watchvideo|'
            }, {
                'vehicles:cx9:features:cx9:scroll': 'Explo0|musa_00g|20a40357-f000-6091-4316-5acf6e29f96c|4338288|2||||||pdata=partner%3Dtap22977%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Explorers|CQAAAEAAAA3EECA|d77aca5490c04fabb4dfc9fb90108b5f||bfyj89o|||2xm23p1|||||Features Scroll|SEARCH||'
            }, {
                'vehicles:cx9:gallery:cx9:scroll': 'Explo0|musa_00o|0f5e9d5a-e5c2-79bc-37d3-5358140838cb|4338288|2||||||pdata=partner%3Dtap22977%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Explorers|CQAAAEAAAA3EECA|f7597ccf90c54071beccaccf86746033||cg37dum|||2xm23p1|||||Gallery Scroll|SEARCH||'
            }, {
                'vehicles:cx9:overview:cx9:scroll': 'Dream0|musa_00e|c879446c-37da-c6fc-4077-5e29c1aafc5f|4336693|2|||||CQAAAEAAAAFwgYAQ|pdata=partner%3Dtap22978%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Dreamers|CQAAAEAAAA20ECA|74d9197dd3d549979ae075a09fb23b33||itm68v9||tl6ows5||||||VLP Scroll|VIEW_CONTENT||'
            }, {
                'vehicles:cx9:overview:cx9': '||||||||||||||||||||||VLP Start|||'
            }, {
                'vehicles:cx9:specs:cx9': 'Explo0|musa_00w|52183009-79b8-a2f4-aa9f-3f19f45917f1|4338288|2|client=654223&ev=2&page=Validate|||||pdata=partner%3Dtap22977%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Explorers|CQAAAEAAAA3EECA|d6dc883081094fba8988d0064585ab6c|100594|ys4vqo3|||2xm23p1|||1||Specs View||watchvideo|'
            }, {
                'vehicles:m3h:features:m3h:scroll': 'Explo0|musa_00h|63d5080f-5f91-6d85-e30d-21d9b9603bca|4338288|2||||||pdata=partner%3Dtap22977%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Explorers|CQAAAEAAAA3EECA|39012314bb794365a13154541d9b8dae||6rw05zm|||2xm23p1|||||Features Scroll|SEARCH||'
            }, {
                'vehicles:m3h:gallery:m3h:scroll': 'Explo0|musa_00p|08e0d3b0-f99e-64b2-443a-edb65485fac2|4338288|2||||||pdata=partner%3Dtap22977%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Explorers|CQAAAEAAAA3EECA|b6233746ce05440b97ccc1020b7f5b1c||9png2gi|||2xm23p1|||||Gallery Scroll|SEARCH||'
            }, {
                'vehicles:m3h:overview:m3h:scroll': 'Dream0|musa_00g|b3a2c3ca-bec7-8589-4476-76e96c3b953c|4336693|3|||||CQAAAEAAAAGAgYAQ|pdata=partner%3Dtap22978%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Dreamers|CQAAAEAAAA20ECA|eb4d677f839543c681b0ac75895f8028||pi83idj||tl6ows5||||||VLP Scroll|VIEW_CONTENT||'
            }, {
                'vehicles:m3h:overview:m3h': '||||||||||||||||||||||VLP Start|||'
            }, {
                'vehicles:m3h:specs:m3h': 'Explo0|musa_00x|6cd86115-c058-b3e8-84a8-0f66bdcc8c2f|4338288|2|client=654223&ev=2&page=Validate|||3||pdata=partner%3Dtap22977%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Explorers|CQAAAEAAAA3EECA|b9990a8703d443e1b8b4f62c0329cc21|87754|h5we714|||2xm23p1|||1||Specs View||watchvideo|'
            }, {
                'vehicles:m3s:features:m3s:scroll': 'Explo0|musa_00i|96e1fd64-c504-63b9-0d83-ec6e46b15594|4338288|2|||||||CQAAAEAAAA3EECA|037c75c11f874d97b36c7206f933ead7||psobo4g|||2xm23p1|||||Features Scroll|SEARCH||'
            }, {
                'vehicles:m3s:gallery:m3s:scroll': 'Explo0|musa_00q|556b40af-5c5a-d498-7210-9f032371d6ec|4338288|2||||||pdata=partner%3Dtap22977%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Explorers|CQAAAEAAAA3EECA|29d915fd30ae408b9ef1162812ecc2ea||eeq5d2a|||2xm23p1|||||Gallery Scroll|SEARCH||'
            }, {
                'vehicles:m3s:overview:m3s:scroll': 'Dream0|musa_00i|de2f03d9-d3a8-4476-d435-14bb69415138|4336693|4|||||CQAAAEAAAAGQgYAQ|pdata=partner%3Dtap22978%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Dreamers|CQAAAEAAAA20ECA|25449cfca7734f7980f0c5c1a4b4a068||sr8nzio||tl6ows5||||||VLP Scroll|VIEW_CONTENT||'
            }, {
                'vehicles:m3s:overview:m3s': '||||||||||||||||||||||VLP Start|||'
            }, {
                'vehicles:m3s:specs:m3s': 'Explo0|musa_00y|7c66de5c-5bff-483a-b818-4fa046c637d5|4338288|2|client=654223&ev=2&page=Validate|||3||pdata=partner%3Dtap22977%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Explorers|CQAAAEAAAA3EECA|f1cb6d9eff9d4603a394619bc5400ae9|85954|lmmwj42|||2xm23p1|||1||Specs View||watchvideo|'
            }, {
                'vehicles:m6g:features:m6g:scroll': 'Explo0|musa_00j|3422b773-0748-67f6-4324-77e06028e5e5||2||||||pdata=partner%3Dtap22977%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Explorers|CQAAAEAAAA3EECA|dc38d92641a847b089c06dc70729dba4||yarrkpt|||2xm23p1|||||Features Scroll|SEARCH||'
            }, {
                'vehicles:m6g:gallery:m6g:scroll': 'Explo0|musa_00r|e1d40351-38f2-81fd-05bb-f321ac3f867a|4338288|2||||||pdata=partner%3Dtap22977%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Explorers|CQAAAEAAAA3EECA|04d23c820bbb4821bba06e8ebe7d1ce6||b4wx0mk|||2xm23p1|||||Gallery Scroll|SEARCH||'
            }, {
                'vehicles:m6g:overview:m6g:scroll': 'Dream0|musa_00k|ae456c1e-f11f-b504-7ea1-0f3e1bf25db1||5|||||CQAAAEAAAAHAgYAQ|pdata=partner%3Dtap22978%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Dreamers|CQAAAEAAAA20ECA|a87557af22b148f1923dfe28342e94e4||r0u282n||tl6ows5||||||VLP Scroll|VIEW_CONTENT||'
            }, {
                'vehicles:m6g:overview:m6g': '||||||||||||||||||||||VLP Start|||'
            }, {
                'vehicles:mx5:features:mx5:scroll': 'Explo0|musa_00k|ec79c959-7f99-73b3-0d61-43ec097856e2|4338288|2||||||pdata=partner%3Dtap22977%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Explorers|CQAAAEAAAA3EECA|5f78d198a064468f8458a73aaeed186d||cou6yxa|||2xm23p1|||||Features Scroll|SEARCH||'
            }, {
                'vehicles:mx5:gallery:mx5:scroll': 'Explo0|musa_00s|03b04851-f930-f5b0-0a5c-ebe778dbcc09|4338288|2||||||pdata=partner%3Dtap22977%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Explorers|CQAAAEAAAA3EECA|461c93ed4e9e4571a7898b1a1e7c8392||ktr5b76|||2xm23p1|||||Gallery Scroll|SEARCH||'
            }, {
                'vehicles:mx5:overview:mx5:scroll': 'Dream0|musa_00m|b9ec5d6f-8130-d6f0-65da-3c2ef299113e|4336693|6|||||CQAAAEAAAAGggYAQ|pdata=partner%3Dtap22978%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Dreamers|CQAAAEAAAA20ECA|a4c5d01d0dce4c52aec0f50adb13e99d||8vn7jz4||tl6ows5||||||VLP Scroll|VIEW_CONTENT||'
            }, {
                'vehicles:mx5:overview:mx5': '||||||||||||||||||||||VLP Start|||'
            }, {
                'vehicles:mx5:specs:mx5': 'Explo0|musa_00_|e50f29a8-9243-c26c-44a3-b631ed313409|4338288|2|client=654223&ev=2&page=Validate||client=654243&ev=1|3||pdata=partner%3Dtap22977%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Explorers|CQAAAEAAAA3EECA|ffe72ff3fd9e42fda6055df692397121|93034|lik7b2i|||2xm23p1|||1||Specs View||watchvideo|'
            }, {
                'vehicles:mxr:features:mxr:scroll': 'Explo0|musa_00l|91f1d5f5-8ec4-28e1-eb3e-f97b82620beb|4338288|2||||||pdata=partner%3Dtap22977%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Explorers|CQAAAEAAAA3EECA|d7483fd00bc94728b9c67c90886839a5||7upmiyt|||2xm23p1|||||Features Scroll|SEARCH||'
            }, {
                'vehicles:mxr:gallery:mxr:scroll': 'Explo0|musa_00t|c4136cec-c2c6-3b3f-79e2-23bafa1e48f8|4338288|2||||||pdata=partner%3Dtap22977%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Explorers|CQAAAEAAAA3EECA|5cc9181da88d4584844b162b11c31669||itn6sny|||2xm23p1|||||Gallery Scroll|SEARCH||'
            }, {
                'vehicles:mxr:overview:mxr:scroll': 'Dream0|musa_00o|15b86a26-6610-2548-f4c4-a786075bb4ce|4336693|7|||||CQAAAEAAAAGwgYAQ|pdata=partner%3Dtap22978%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Dreamers|CQAAAEAAAA20ECA|adfc4f57096f4b24ace3c4c6c73e3b0e||k48q1wl||tl6ows5||||||VLP Scroll|VIEW_CONTENT||'
            }, {
                'vehicles:mxr:overview:mxr': '||||||||||||||||||||||VLP Start|||'
            }, {
                'vehicles:mxr:specs:mxr': 'Explo0|musa_01|1800c2bb-37b5-a573-9c29-7a2b72955536|4338288|2|client=654223&ev=2&page=Conversion Page||client=718673&ev=1|3||pdata=partner%3Dtap22977%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Explorers|CQAAAEAAAA3EECA|7df4a3c69fc4449bb4a96283f8e61e22|129514|d2xuuns|||2xm23p1|||||Specs View||watchvideo|'
            }, {
                'vehicles:m6g:specs:m6g': 'Explo0|musa_00z|0a09d84b-2d02-5e60-c82a-72c4e6555eee||2|client=654223&ev=2&page=Validate|||3||pdata=partner%3Dtap22977%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Explorers|CQAAAEAAAA3EECA|3d73be62bf694613853c728f3b9e0304|91354|r0u282n|||2xm23p1|||1||Specs View||watchvideo|'
            }, {
                'vehicles:new_era:overview': 'Dream0|musa_00q|||||||||||||||||||||||pagevisit|'
            }, {
                'vehicles:new_era:overview:KMUsubmit': 'Explo0|musa_00r||||||||||||||||||||CompleteRegistration||SIGN_UP||nwd8t'
            }, {
                'tools:test_drive:reserve_a_test_drive': '|||||||||||||||||||||Schedule||||nwdgt'
            }, {
                'vehicles:cx3:features:cx3': '||||||||||||||||||||||Features Start|||'
            }, {
                'vehicles:cx5:features:cx5': '||||||||||||||||||||||Features Start|||'
            }, {
                'vehicles:cx9:features:cx9': '||||||||||||||||||||||Features Start|||'
            }, {
                'vehicles:m3h:features:m3h': '||||||||||||||||||||||Features Start|||'
            }, {
                'vehicles:m3s:features:m3s': '||||||||||||||||||||||Features Start|||'
            }, {
                'vehicles:m6g:features:m6g': '||||||||||||||||||||||Features Start|||'
            }, {
                'vehicles:mx5:features:mx5': '||||||||||||||||||||||Features Start|||'
            }, {
                'vehicles:mxr:features:mxr': '||||||||||||||||||||||Features Start|||'
            }, {
                'tools:apply_for_financing:info:financeApplySubmit': '||||||||||||||||||||||Apply for Financing Click Out|||nwdhl'
            }, {
                'tools:quote:info': '||||||||||||||||||||||RAQ Start|||nwdgt'
            }, {
                'vehicles:cx3:gallery:cx3': '||||||||||||||||||||||Gallery Start|||'
            }, {
                'vehicles:cx5:gallery:cx5': '||||||||||||||||||||||Gallery Start|||'
            }, {
                'vehicles:cx9:gallery:cx9': '||||||||||||||||||||||Gallery Start|||'
            }, {
                'vehicles:m3h:gallery:m3h': '||||||||||||||||||||||Gallery Start|||'
            }, {
                'vehicles:m3s:gallery:m3s': '||||||||||||||||||||||Gallery Start|||'
            }, {
                'vehicles:m6g:gallery:m6g': '||||||||||||||||||||||Gallery Start|||'
            }, {
                'vehicles:mx5:gallery:mx5': '||||||||||||||||||||||Gallery Start|||'
            }, {
                'vehicles:mxr:gallery:mxr': '||||||||||||||||||||||Gallery Start|||'
            }, {
                'tools:kmu:confirm:emailUpdateSubmit': '||||||||||||||||||||||Hand Raiser|||nwd8t'
            }, {
                'tools:apply_for_financing:info:cx3:financeApplySubmit': '||||||||||||||||||||||TEST|||nwdhl'
            }, {
                'tools:apply_for_financing:info:cx5:financeApplySubmit': '|||||||||||||||||||||||PURCHASE||nwdhl'
            }, {
                'tools:apply_for_financing:info:cx9:financeApplySubmit': '|||||||||||||||||||||||PURCHASE||nwdhl'
            }, {
                'tools:apply_for_financing:info:m3h:financeApplySubmit': '|||||||||||||||||||||||PURCHASE||nwdhl'
            }, {
                'tools:apply_for_financing:info:m3s:financeApplySubmit': '|||||||||||||||||||||||PURCHASE||nwdhl'
            }, {
                'tools:apply_for_financing:info:m6g:financeApplySubmit': '|||||||||||||||||||||||PURCHASE||nwdhl'
            }, {
                'tools:apply_for_financing:info:mx5:financeApplySubmit': '|||||||||||||||||||||||PURCHASE||nwdhl'
            }, {
                'tools:apply_for_financing:info:mxr:financeApplySubmit': '|||||||||||||||||||||||PURCHASE||nwdhl'
            }, {
                'tools:incentives:national': '||||||||||||||||||||||||pagevisit|nwdgt'
            }, {
                'tools:test_drive:reserve_a_test_drive_confirm:reserveSignup': '|||||||||||||||||||||Lead||||nwdhl'
            }, {
                'tools:inventory:cpo_results:cx3:CPOsearchResults': '||||||||||||||||||||||Inventory Search Start|||'
            }, {
                'tools:inventory:cpo_results:cx5:CPOsearchResults': '||||||||||||||||||||||Inventory Search Start|||'
            }, {
                'tools:inventory:cpo_results:cx9:CPOsearchResults': '||||||||||||||||||||||Inventory Search Start|||'
            }, {
                'tools:inventory:cpo_results:m3h:CPOsearchResults': '||||||||||||||||||||||Inventory Search Start|||'
            }, {
                'tools:inventory:cpo_results:m3s:CPOsearchResults': '||||||||||||||||||||||Inventory Search Start|||'
            }, {
                'tools:inventory:cpo_results:m6g:CPOsearchResults': '||||||||||||||||||||||Inventory Search Start|||'
            }, {
                'tools:inventory:cpo_results:mx5:CPOsearchResults': '||||||||||||||||||||||Inventory Search Start|||'
            }, {
                'tools:inventory:cpo_results:mxr:CPOsearchResults': '||||||||||||||||||||||Inventory Search Start|||'
            }, {
                'tools:inventory:cpo_results:mz2:CPOsearchResults': '||||||||||||||||||||||Inventory Search Start|||'
            }, {
                'tools:inventory:cpo_results:mz5:CPOsearchResults': '||||||||||||||||||||||Inventory Search Start|||'
            }, {
                'tools:inventory:cpo_results:rx8:CPOsearchResults': '||||||||||||||||||||||Inventory Search Start|||'
            }, {
                'tools:inventory:cpo_results:ms3:CPOsearchResults': '||||||||||||||||||||||Inventory Search Start|||'
            }, {
                'tools:inventory:results:cx3:NEWsearchResults': '||||||||||||||||||||||Inventory Search Start|||'
            }, {
                'tools:inventory:results:cx5:NEWsearchResults': '||||||||||||||||||||||Inventory Search Start|||'
            }, {
                'tools:inventory:results:cx9:NEWsearchResults': '||||||||||||||||||||||Inventory Search Start|||'
            }, {
                'tools:inventory:results:m3h:NEWsearchResults': '||||||||||||||||||||||Inventory Search Start|||'
            }, {
                'tools:inventory:results:m3s:NEWsearchResults': '||||||||||||||||||||||Inventory Search Start|||'
            }, {
                'tools:inventory:results:m6g:NEWsearchResults': '||||||||||||||||||||||Inventory Search Start|||'
            }, {
                'tools:inventory:results:mx5:NEWsearchResults': '||||||||||||||||||||||Inventory Search Start|||'
            }, {
                'tools:inventory:results:mxr:NEWsearchResults': '||||||||||||||||||||||Inventory Search Start|||'
            }, {
                'whymazda:feelalive:home:scroll': 'dream0|musa00p||||||||||||||||||||||||'
            }];
            var m = false;
            for (e = 0; e < c.length; e++) {
                for (f in c[e]) {
                    if (d == f) {
                        b['full_page_value'] = c[e][f];
                        m = true
                    }
                    ;
                }
                ;if (m)
                    break
            }
            ;
        }
        , function(a, b, c, d, e, f, g) {
            d = b['full_page_name_esp'];
            if (typeof d == 'undefined')
                return;
            c = [{
                'home:home:home:scroll': 'Dream0|mesp_0'
            }, {
                'home:home:home': '|'
            }, {
                'tools:apply_for_financing:info': 'decid0|mesp_001'
            }, {
                'tools:build:summary:cx3:buildComplete': 'Explo0|mesp_007'
            }, {
                'tools:build:summary:cx5:buildComplete': 'Explo0|mesp_008'
            }, {
                'tools:build:summary:cx9:buildComplete': 'Explo0|mesp_009'
            }, {
                'tools:build:summary:m3h:buildComplete': 'Explo0|mesp_00-'
            }, {
                'tools:build:summary:m3s:buildComplete': 'Explo0|mesp_00a'
            }, {
                'tools:build:summary:m6g:buildComplete': 'Explo0|mesp_00b'
            }, {
                'tools:build:summary:mx5:buildComplete': 'Explo0|mesp_00c'
            }, {
                'tools:build:summary:mxr:buildComplete': 'Explo0|mesp_00d'
            }, {
                'tools:compare:details:cx3:compare': 'shopp0|mesp_007'
            }, {
                'tools:compare:details:cx5:compare': 'shopp0|mesp_008'
            }, {
                'tools:compare:details:cx9:compare': 'shopp0|mesp_009'
            }, {
                'tools:compare:details:m3h:compare': 'shopp0|mesp_00-'
            }, {
                'tools:compare:details:m3s:compare': 'shopp0|mesp_00a'
            }, {
                'tools:compare:details:m6g:compare': 'shopp0|mesp_00b'
            }, {
                'tools:compare:details:mx5:compare': 'shopp0|mesp_00c'
            }, {
                'tools:compare:details:mxr:compare': 'shopp0|mesp_00d'
            }, {
                'tools:incentives:national:scroll': 'Dream0|mesp_009'
            }, {
                'tools:incentives:national:cx3:scroll': 'Dream0|mesp_00-'
            }, {
                'tools:incentives:national:cx3:specialOffersExpand': 'shopp0|mesp_00'
            }, {
                'tools:incentives:national:cx5:scroll': 'Dream0|mesp_00b'
            }, {
                'tools:incentives:national:cx5:specialOffersExpand': 'shopp0|mesp_000'
            }, {
                'tools:incentives:national:cx9:scroll': 'Dream0|mesp_00d'
            }, {
                'tools:incentives:national:cx9:specialOffersExpand': 'shopp0|mesp_001'
            }, {
                'tools:incentives:national:m3h:scroll': 'Dream0|mesp_00f'
            }, {
                'tools:incentives:national:m3h:specialOffersExpand': 'shopp0|mesp_002'
            }, {
                'tools:incentives:national:m3s:scroll': 'Dream0|mesp_00h'
            }, {
                'tools:incentives:national:m3s:specialOffersExpand': 'shopp0|mesp_003'
            }, {
                'tools:incentives:national:m6g:scroll': 'Dream0|mesp_00j'
            }, {
                'tools:incentives:national:m6g:specialOffersExpand': 'shopp0|mesp_004'
            }, {
                'tools:incentives:national:mx5:scroll': 'Dream0|mesp_00l'
            }, {
                'tools:incentives:national:mx5:specialOffersExpand': 'shopp0|mesp_005'
            }, {
                'tools:incentives:national:mxr:scroll': 'Dream0|mesp_00n'
            }, {
                'tools:incentives:national:mxr:specialOffersExpand': 'shopp0|mesp_006'
            }, {
                'tools:incentives:national:specialOffersExpand': 'shopp0|mesp_0'
            }, {
                'tools:inventory:cpo_detail:cx3:CPOdetailedView': 'shopp0|mesp_00m'
            }, {
                'tools:inventory:cpo_detail:cx5:CPOdetailedView': 'shopp0|mesp_00n'
            }, {
                'tools:inventory:cpo_detail:cx7:CPOdetailedView': 'shopp0|mesp_00u'
            }, {
                'tools:inventory:cpo_detail:cx9:CPOdetailedView': 'shopp0|mesp_00o'
            }, {
                'tools:inventory:cpo_detail:m3h:CPOdetailedView': 'shopp0|mesp_00p'
            }, {
                'tools:inventory:cpo_detail:m3s:CPOdetailedView': 'shopp0|mesp_00q'
            }, {
                'tools:inventory:cpo_detail:m6g:CPOdetailedView': 'shopp0|mesp_00r'
            }, {
                'tools:inventory:cpo_detail:ms3:CPOdetailedView': 'shopp0|mesp_00v'
            }, {
                'tools:inventory:cpo_detail:mx5:CPOdetailedView': 'shopp0|mesp_00s'
            }, {
                'tools:inventory:cpo_detail:mxr:CPOdetailedView': 'shopp0|mesp_00t'
            }, {
                'tools:inventory:cpo_detail:mz2:CPOdetailedView': 'shopp0|mesp_00w'
            }, {
                'tools:inventory:cpo_detail:mz5:CPOdetailedView': 'shopp0|mesp_00x'
            }, {
                'tools:inventory:cpo_detail:rx8:CPOdetailedView': 'shopp0|mesp_00y'
            }, {
                'tools:inventory:detail:cx3:NEWdetailedView': 'shopp0|mesp_00e'
            }, {
                'tools:inventory:detail:cx5:NEWdetailedView': 'shopp0|mesp_00f'
            }, {
                'tools:inventory:detail:cx9:NEWdetailedView': 'shopp0|mesp_00g'
            }, {
                'tools:inventory:detail:m3h:NEWdetailedView': 'shopp0|mesp_00h'
            }, {
                'tools:inventory:detail:m3s:NEWdetailedView': 'shopp0|mesp_00i'
            }, {
                'tools:inventory:detail:m6g:NEWdetailedView': 'shopp0|mesp_00j'
            }, {
                'tools:inventory:detail:mx5:NEWdetailedView': 'shopp0|mesp_00k'
            }, {
                'tools:locate_dealer:overview': 'shopp0|mesp_00z'
            }, {
                'tools:locate_dealer:overview:callDealer': 'decid0|mesp_0'
            }, {
                'tools:locate_dealer:overview:clickDealerMap': 'decid0|mesp_00'
            }, {
                'tools:locate_dealer:overview:dealerWebsite': 'decid0|mesp_000'
            }, {
                'tools:pay_est:info:event14': 'shopp0|mesp_00_'
            }, {
                'tools:quote:confirm:cx3:RAQcomplete': 'decid0|mesp_002'
            }, {
                'tools:quote:confirm:cx5:RAQcomplete': 'decid0|mesp_003'
            }, {
                'tools:quote:confirm:cx9:RAQcomplete': 'decid0|mesp_004'
            }, {
                'tools:quote:confirm:m3h:RAQcomplete': 'decid0|mesp_005'
            }, {
                'tools:quote:confirm:m3s:RAQcomplete': 'decid0|mesp_006'
            }, {
                'tools:quote:confirm:m6g:RAQcomplete': 'decid0|mesp_007'
            }, {
                'tools:quote:confirm:mx5:RAQcomplete': 'decid0|mesp_008'
            }, {
                'tools:quote:confirm:mxr:RAQcomplete': 'decid0|mesp_009'
            }, {
                'vehicles:anniversary:overview:mx5': 'Dream0|mesp_00s'
            }, {
                'vehicles:cx3:features:cx3:scroll': 'Explo0|mesp_00e'
            }, {
                'vehicles:cx3:gallery:cx3:scroll': 'Explo0|mesp_00m'
            }, {
                'vehicles:cx3:overview:cx3:scroll': 'Dream0|mesp_00a'
            }, {
                'vehicles:cx3:overview:cx3': '|'
            }, {
                'vehicles:cx3:specs:cx3': 'Explo0|mesp_00u'
            }, {
                'vehicles:cx5:features:cx5:scroll': 'Explo0|mesp_00f'
            }, {
                'vehicles:cx5:gallery:cx5:scroll': 'Explo0|mesp_00n'
            }, {
                'vehicles:cx5:overview:cx5:scroll': 'Dream0|mesp_00c'
            }, {
                'vehicles:cx5:overview:cx5': '|'
            }, {
                'vehicles:cx5:specs:cx5': 'Explo0|mesp_00v'
            }, {
                'vehicles:cx9:features:cx9:scroll': 'Explo0|mesp_00g'
            }, {
                'vehicles:cx9:gallery:cx9:scroll': 'Explo0|mesp_00o'
            }, {
                'vehicles:cx9:overview:cx9:scroll': 'Dream0|mesp_00e'
            }, {
                'vehicles:cx9:overview:cx9': '|'
            }, {
                'vehicles:cx9:specs:cx9': 'Explo0|mesp_00w'
            }, {
                'vehicles:m3h:features:m3h:scroll': 'Explo0|mesp_00h'
            }, {
                'vehicles:m3h:gallery:m3h:scroll': 'Explo0|mesp_00p'
            }, {
                'vehicles:m3h:overview:m3h:scroll': 'Dream0|mesp_00g'
            }, {
                'vehicles:m3h:overview:m3h': '|'
            }, {
                'vehicles:m3h:specs:m3h': 'Explo0|mesp_00x'
            }, {
                'vehicles:m3s:features:m3s:scroll': 'Explo0|mesp_00i'
            }, {
                'vehicles:m3s:gallery:m3s:scroll': 'Explo0|mesp_00q'
            }, {
                'vehicles:m3s:overview:m3s:scroll': 'Dream0|mesp_00i'
            }, {
                'vehicles:m3s:overview:m3s': '|'
            }, {
                'vehicles:m3s:specs:m3s': 'Explo0|mesp_00y'
            }, {
                'vehicles:m6g:features:m6g:scroll': 'Explo0|mesp_00j'
            }, {
                'vehicles:m6g:gallery:m6g:scroll': 'Explo0|mesp_00r'
            }, {
                'vehicles:m6g:overview:m6g:scroll': 'Dream0|mesp_00k'
            }, {
                'vehicles:m6g:overview:m6g': '|'
            }, {
                'vehicles:mx5:features:mx5:scroll': 'Explo0|mesp_00k'
            }, {
                'vehicles:mx5:gallery:mx5:scroll': 'Explo0|mesp_00s'
            }, {
                'vehicles:mx5:overview:mx5:scroll': 'Dream0|mesp_00m'
            }, {
                'vehicles:mx5:overview:mx5': '|'
            }, {
                'vehicles:mx5:specs:mx5': 'Explo0|mesp_00_'
            }, {
                'vehicles:mxr:features:mxr:scroll': 'Explo0|mesp_00l'
            }, {
                'vehicles:mxr:gallery:mxr:scroll': 'Explo0|mesp_00t'
            }, {
                'vehicles:mxr:overview:mxr:scroll': 'Dream0|mesp_00o'
            }, {
                'vehicles:mxr:overview:mxr': '|'
            }, {
                'vehicles:mxr:specs:mxr': 'Explo0|mesp_01'
            }, {
                'vehicles:m6g:specs:m6g': 'Explo0|mesp_00z'
            }, {
                'vehicles:new_era:overview': 'Dream0|mesp_00q'
            }, {
                'vehicles:new_era:overview:KMUsubmit': 'Explo0|mesp_00r'
            }, {
                'tools:test_drive:reserve_a_test_drive': '|'
            }, {
                'vehicles:cx3:features:cx3': '|'
            }, {
                'vehicles:cx5:features:cx5': '|'
            }, {
                'vehicles:cx9:features:cx9': '|'
            }, {
                'vehicles:m3h:features:m3h': '|'
            }, {
                'vehicles:m3s:features:m3s': '|'
            }, {
                'vehicles:m6g:features:m6g': '|'
            }, {
                'vehicles:mx5:features:mx5': '|'
            }, {
                'vehicles:mxr:features:mxr': '|'
            }, {
                'tools:apply_for_financing:info:financeApplySubmit': '|'
            }, {
                'tools:quote:info': '|'
            }, {
                'vehicles:cx3:gallery:cx3': '|'
            }, {
                'vehicles:cx5:gallery:cx5': '|'
            }, {
                'vehicles:cx9:gallery:cx9': '|'
            }, {
                'vehicles:m3h:gallery:m3h': '|'
            }, {
                'vehicles:m3s:gallery:m3s': '|'
            }, {
                'vehicles:m6g:gallery:m6g': '|'
            }, {
                'vehicles:mx5:gallery:mx5': '|'
            }, {
                'vehicles:mxr:gallery:mxr': '|'
            }, {
                'tools:kmu:confirm:emailUpdateSubmit': '|'
            }, {
                'tools:apply_for_financing:info:cx3:financeApplySubmit': '|'
            }, {
                'tools:apply_for_financing:info:cx5:financeApplySubmit': '|'
            }, {
                'tools:apply_for_financing:info:cx9:financeApplySubmit': '|'
            }, {
                'tools:apply_for_financing:info:m3h:financeApplySubmit': '|'
            }, {
                'tools:apply_for_financing:info:m3s:financeApplySubmit': '|'
            }, {
                'tools:apply_for_financing:info:m6g:financeApplySubmit': '|'
            }, {
                'tools:apply_for_financing:info:mx5:financeApplySubmit': '|'
            }, {
                'tools:apply_for_financing:info:mxr:financeApplySubmit': '|'
            }, {
                'tools:incentives:national': '|'
            }, {
                'tools:test_drive:reserve_a_test_drive_confirm:reserveSignup': '|'
            }, {
                'tools:inventory:cpo_results:cx3:CPOsearchResults': '|'
            }, {
                'tools:inventory:cpo_results:cx5:CPOsearchResults': '|'
            }, {
                'tools:inventory:cpo_results:cx9:CPOsearchResults': '|'
            }, {
                'tools:inventory:cpo_results:m3h:CPOsearchResults': '|'
            }, {
                'tools:inventory:cpo_results:m3s:CPOsearchResults': '|'
            }, {
                'tools:inventory:cpo_results:m6g:CPOsearchResults': '|'
            }, {
                'tools:inventory:cpo_results:mx5:CPOsearchResults': '|'
            }, {
                'tools:inventory:cpo_results:mxr:CPOsearchResults': '|'
            }, {
                'tools:inventory:cpo_results:mz2:CPOsearchResults': '|'
            }, {
                'tools:inventory:cpo_results:mz5:CPOsearchResults': '|'
            }, {
                'tools:inventory:cpo_results:rx8:CPOsearchResults': '|'
            }, {
                'tools:inventory:cpo_results:ms3:CPOsearchResults': '|'
            }, {
                'tools:inventory:results:cx3:NEWsearchResults': '|'
            }, {
                'tools:inventory:results:cx5:NEWsearchResults': '|'
            }, {
                'tools:inventory:results:cx9:NEWsearchResults': '|'
            }, {
                'tools:inventory:results:m3h:NEWsearchResults': '|'
            }, {
                'tools:inventory:results:m3s:NEWsearchResults': '|'
            }, {
                'tools:inventory:results:m6g:NEWsearchResults': '|'
            }, {
                'tools:inventory:results:mx5:NEWsearchResults': '|'
            }, {
                'tools:inventory:results:mxr:NEWsearchResults': '|'
            }, {
                'whymazda:feelalive:home:scroll': 'dream0|mesp_00g'
            }];
            var m = false;
            for (e = 0; e < c.length; e++) {
                for (f in c[e]) {
                    if (d == f) {
                        b['full_page_value_esp'] = c[e][f];
                        m = true
                    }
                    ;
                }
                ;if (m)
                    break
            }
            ;
        }
        , function(a, b) {
            try {
                if ((typeof b['full_page_value'] != 'undefined' && typeof b['full_page_value'] != 'undefined' && b['full_page_value'] != '')) {
                    try {
                        b['floodlight_activity_group'] = b.full_page_value.split('|')[0]
                    } catch (e) {}
                    ;try {
                        b['floodlight_activity'] = b.full_page_value.split('|')[1]
                    } catch (e) {}
                    ;try {
                        b['amazon_fy152_value'] = b.full_page_value.split('|')[2]
                    } catch (e) {}
                    ;try {
                        b['cbsi_value'] = b.full_page_value.split('|')[3]
                    } catch (e) {}
                    ;try {
                        b['exp_fy152_value'] = b.full_page_value.split('|')[4]
                    } catch (e) {}
                    ;try {
                        b['exponential_value'] = b.full_page_value.split('|')[5]
                    } catch (e) {}
                    ;try {
                        b['exponential_deep_dive_value'] = b.full_page_value.split('|')[6]
                    } catch (e) {}
                    ;try {
                        b['exponential_insights_pixel_value'] = b.full_page_value.split('|')[7]
                    } catch (e) {}
                    ;try {
                        b['google_sem_value'] = b.full_page_value.split('|')[8]
                    } catch (e) {}
                    ;try {
                        b['nativo_81618_value'] = b.full_page_value.split('|')[9]
                    } catch (e) {}
                    ;try {
                        b['nativo_trusignal_value'] = b.full_page_value.split('|')[10]
                    } catch (e) {}
                    ;try {
                        b['nativo_fy152_value'] = b.full_page_value.split('|')[11]
                    } catch (e) {}
                    ;try {
                        b['nativo_cp_fy152_value'] = b.full_page_value.split('|')[12]
                    } catch (e) {}
                    ;try {
                        b['nativo_fy153_value'] = b.full_page_value.split('|')[13]
                    } catch (e) {}
                    ;try {
                        b['ten_value'] = b.full_page_value.split('|')[14]
                    } catch (e) {}
                    ;try {
                        b['tradedesk_fy152_value'] = b.full_page_value.split('|')[14]
                    } catch (e) {}
                    ;try {
                        b['tradedesk_fy152_decided_value'] = b.full_page_value.split('|')[16]
                    } catch (e) {}
                    ;try {
                        b['tradedesk_fy152_dreamer_value'] = b.full_page_value.split('|')[17]
                    } catch (e) {}
                    ;try {
                        b['tradedesk_fy152_shopper_value'] = b.full_page_value.split('|')[18]
                    } catch (e) {}
                    ;try {
                        b['tradedesk_fy152_shopper_v2_value'] = b.full_page_value.split('|')[18]
                    } catch (e) {}
                    ;try {
                        b['tradedesk_rt_fy152_value'] = b.full_page_value.split('|')[20]
                    } catch (e) {}
                    ;try {
                        b['facebook_event'] = b.full_page_value.split('|')[21]
                    } catch (e) {}
                    ;try {
                        b['bk_event'] = b.full_page_value.split('|')[22]
                    } catch (e) {}
                    ;try {
                        b['snap_event'] = !!b.full_page_value.split('|')[23] ? b.full_page_value.split('|')[23] : b.full_page_value.split('|')[23]
                    } catch (e) {}
                    ;try {
                        b['pintr_event'] = !!b.full_page_value.split('|')[24] ? b.full_page_value.split('|')[24] : b.full_page_value.split('|')[24]
                    } catch (e) {}
                    ;try {
                        b['twitter_event'] = !!b.full_page_value.split('|')[25] ? b.full_page_value.split('|')[25] : b.full_page_value.split('|')[25]
                    } catch (e) {}
                }
            } catch (e) {
                utag.DB(e)
            }
        }
        , function(a, b) {
            try {
                if ((typeof b['full_page_value_esp'] != 'undefined' && typeof b['full_page_value_esp'] != 'undefined' && b['full_page_value_esp'] != '')) {
                    try {
                        b['floodlight_activity_group'] = b.full_page_value_esp.split('|')[0]
                    } catch (e) {}
                    ;try {
                        b['floodlight_activity'] = b.full_page_value_esp.split('|')[1]
                    } catch (e) {}
                    ;try {
                        b['amazon_fy152_value'] = b.full_page_value_esp.split('|')[2]
                    } catch (e) {}
                    ;try {
                        b['cbsi_value'] = b.full_page_value_esp.split('|')[3]
                    } catch (e) {}
                    ;try {
                        b['exp_fy152_value'] = b.full_page_value_esp.split('|')[4]
                    } catch (e) {}
                    ;try {
                        b['exponential_value'] = b.full_page_value_esp.split('|')[5]
                    } catch (e) {}
                    ;try {
                        b['exponential_deep_dive_value'] = b.full_page_value_esp.split('|')[6]
                    } catch (e) {}
                    ;try {
                        b['exponential_insights_pixel_value'] = b.full_page_value_esp.split('|')[7]
                    } catch (e) {}
                    ;try {
                        b['google_sem_value'] = b.full_page_value_esp.split('|')[8]
                    } catch (e) {}
                    ;try {
                        b['nativo_81618_value'] = b.full_page_value_esp.split('|')[9]
                    } catch (e) {}
                    ;try {
                        b['nativo_trusignal_value'] = b.full_page_value_esp.split('|')[10]
                    } catch (e) {}
                    ;try {
                        b['nativo_fy152_value'] = b.full_page_value_esp.split('|')[11]
                    } catch (e) {}
                    ;try {
                        b['nativo_cp_fy152_value'] = b.full_page_value_esp.split('|')[12]
                    } catch (e) {}
                    ;try {
                        b['nativo_fy153_value'] = b.full_page_value_esp.split('|')[13]
                    } catch (e) {}
                    ;try {
                        b['ten_value'] = b.full_page_value_esp.split('|')[14]
                    } catch (e) {}
                    ;try {
                        b['tradedesk_fy152_value'] = b.full_page_value_esp.split('|')[14]
                    } catch (e) {}
                    ;try {
                        b['tradedesk_fy152_decided_value'] = b.full_page_value_esp.split('|')[16]
                    } catch (e) {}
                    ;try {
                        b['tradedesk_fy152_dreamer_value'] = b.full_page_value_esp.split('|')[17]
                    } catch (e) {}
                    ;try {
                        b['tradedesk_fy152_shopper_value'] = b.full_page_value_esp.split('|')[18]
                    } catch (e) {}
                    ;try {
                        b['tradedesk_fy152_shopper_v2_value'] = b.full_page_value_esp.split('|')[18]
                    } catch (e) {}
                    ;try {
                        b['tradedesk_rt_fy152_value'] = b.full_page_value_esp.split('|')[20]
                    } catch (e) {}
                    ;try {
                        b['facebook_event'] = b.full_page_value_esp.split('|')[21]
                    } catch (e) {}
                    ;try {
                        b['bk_event'] = b.full_page_value_esp.split('|')[22]
                    } catch (e) {}
                    ;try {
                        b['snap_event'] = !!b.full_page_value_esp.split('|')[23] ? b.full_page_value.split('|')[23] : b.full_page_value.split('|')[23]
                    } catch (e) {}
                    ;try {
                        b['pintr_event'] = !!b.full_page_value_esp.split('|')[24] ? b.full_page_value.split('|')[24] : b.full_page_value.split('|')[24]
                    } catch (e) {}
                    ;try {
                        b['twitter_event'] = !!b.full_page_value_esp.split('|')[25] ? b.full_page_value.split('|')[25] : b.full_page_value.split('|')[25]
                    } catch (e) {}
                }
            } catch (e) {
                utag.DB(e)
            }
        }
        , function(a, b) {
            try {
                if ((typeof b['amazon_fy152_value'] != 'undefined' && typeof b['amazon_fy152_value'] != 'undefined' && b['amazon_fy152_value'] != '')) {
                    try {
                        b['amazon_fy152_value'] = '%3Fid%3D' + b.amazon_fy152_value + '%26type%3D4%26m%3D1&ex-fch=416613&ex-src=https://mazdausa.com&ex-hargs=v%3D1.0%3Bc%3D1525869610001%3Bp%3D' + b.amazon_fy152_value
                    } catch (e) {}
                }
            } catch (e) {
                utag.DB(e)
            }
        }
        , function(a, b) {
            try {
                if (b['amazon_fy152_value'].toString().indexOf('e1d40351-38f2-81fd-05bb-f321ac3f867a') > -1) {
                    b['amazon_custom_d'] = 'forester-did'
                }
            } catch (e) {
                utag.DB(e)
            }
        }
        , function(a, b) {
            try {
                if (b['google_sem_value'] == '3') {
                    b['gsem_id'] = '976662238';
                    b['gsem_label'] = 'M4vyCILo4ggQ3t3a0QM';
                    b['gsem_language'] = 'en'
                }
            } catch (e) {
                utag.DB(e)
            }
        }
        , function(a, b) {
            try {
                if (b['google_sem_value'] == '2') {
                    b['gsem_id'] = '1007231142';
                    b['gsem_label'] = 'b6ZmCOKxnwcQpsGk4AM';
                    b['gsem_language'] = 'en'
                }
            } catch (e) {
                utag.DB(e)
            }
        }
        , function(a, b) {
            try {
                if ((typeof b['tradedesk_fy152_decided_value'] != 'undefined' && typeof b['tradedesk_fy152_decided_value'] != 'undefined' && b['tradedesk_fy152_decided_value'] != '')) {
                    b['tradedesk_synced_value'] = b['tradedesk_fy152_decided_value']
                }
            } catch (e) {
                utag.DB(e)
            }
        }
        , function(a, b) {
            try {
                if ((typeof b['tradedesk_fy152_shopper_value'] != 'undefined' && typeof b['tradedesk_fy152_shopper_value'] != 'undefined' && b['tradedesk_fy152_shopper_value'] != '')) {
                    b['tradedesk_synced_value'] = b['tradedesk_fy152_shopper_value']
                }
            } catch (e) {
                utag.DB(e)
            }
        }
        , function(a, b) {
            try {
                if ((typeof b['tradedesk_fy152_dreamer_value'] != 'undefined' && typeof b['tradedesk_fy152_dreamer_value'] != 'undefined' && b['tradedesk_fy152_dreamer_value'] != '')) {
                    b['tradedesk_synced_value'] = b['tradedesk_fy152_dreamer_value']
                }
            } catch (e) {
                utag.DB(e)
            }
        }
        , function(a, b) {
            try {
                if (b['exp_fy152_value'] == '2') {
                    b['exp_client_name'] = 'SHOPPER_EXPLORER';
                    b['exp_client_id'] = '742233';
                    b['exp_segment_name'] = 'EXPLORER';
                    b['exp_event_type'] = 'conversion'
                }
            } catch (e) {
                utag.DB(e)
            }
        }
        , function(a, b) {
            try {
                if ((b['exp_fy152_value'] == '0' && b['full_page_name'].toString().toLowerCase().indexOf('cx3'.toLowerCase()) > -1)) {
                    b['exp_client_name'] = 'Mazda%20Model%20VLPs';
                    b['exp_client_id'] = '742223';
                    b['exp_segment_name'] = 'CX3';
                    b['exp_event_type'] = 'visitor'
                }
            } catch (e) {
                utag.DB(e)
            }
        }
        , function(a, b) {
            try {
                if (b['exp_fy152_value'] == '1') {
                    b['exp_client_name'] = 'Mazda%20Model%20VLPs';
                    b['exp_client_id'] = '742223';
                    b['exp_segment_name'] = 'CX5';
                    b['exp_event_type'] = 'visitor'
                }
            } catch (e) {
                utag.DB(e)
            }
        }
        , function(a, b) {
            try {
                if ((b['exp_fy152_value'] == '2' && b['full_page_name'].toString().toLowerCase().indexOf(':CX9'.toLowerCase()) > -1)) {
                    b['exp_client_name'] = 'Mazda%20Model%20VLPs';
                    b['exp_client_id'] = '742223';
                    b['exp_segment_name'] = 'CX9';
                    b['exp_event_type'] = 'visitor'
                }
            } catch (e) {
                utag.DB(e)
            }
        }
        , function(a, b) {
            try {
                if ((b['exp_fy152_value'] == '0' && b['full_page_name'].toString().toLowerCase().indexOf('home'.toLowerCase()) > -1)) {
                    b['exp_client_name'] = 'Mazda%20Homepage';
                    b['exp_client_id'] = '742213';
                    b['exp_segment_name'] = 'Homepage';
                    b['exp_event_type'] = 'visitor'
                }
            } catch (e) {
                utag.DB(e)
            }
        }
        , function(a, b) {
            try {
                if (b['exp_fy152_value'] == '3') {
                    b['exp_client_name'] = 'Mazda%20Model%20VLPs';
                    b['exp_client_id'] = '742223';
                    b['exp_segment_name'] = 'M3H';
                    b['exp_event_type'] = 'visitor'
                }
            } catch (e) {
                utag.DB(e)
            }
        }
        , function(a, b) {
            try {
                if (b['exp_fy152_value'] == '4') {
                    b['exp_client_name'] = 'Mazda%20Model%20VLPs';
                    b['exp_client_id'] = '742223';
                    b['exp_segment_name'] = 'M3S';
                    b['exp_event_type'] = 'visitor'
                }
            } catch (e) {
                utag.DB(e)
            }
        }
        , function(a, b) {
            try {
                if (b['exp_fy152_value'] == '5') {
                    b['exp_client_name'] = 'Mazda%20Model%20VLPs';
                    b['exp_client_id'] = '742223';
                    b['exp_segment_name'] = 'MZ6';
                    b['exp_event_type'] = 'visitor'
                }
            } catch (e) {
                utag.DB(e)
            }
        }
        , function(a, b) {
            try {
                if (b['exp_fy152_value'] == '6') {
                    b['exp_client_name'] = 'Mazda%20Model%20VLPs';
                    b['exp_client_id'] = '742223';
                    b['exp_segment_name'] = 'MX5';
                    b['exp_event_type'] = 'visitor'
                }
            } catch (e) {
                utag.DB(e)
            }
        }
        , function(a, b) {
            try {
                if (b['exp_fy152_value'] == '7') {
                    b['exp_client_name'] = 'Mazda%20Model%20VLPs';
                    b['exp_client_id'] = '742223';
                    b['exp_segment_name'] = 'MXR';
                    b['exp_event_type'] = 'visitor'
                }
            } catch (e) {
                utag.DB(e)
            }
        }
        , function(a, b) {
            try {
                utag.runonce = utag.runonce || {};
                utag.runonce.ext = utag.runonce.ext || {};
                if (typeof utag.runonce.ext[56] == 'undefined') {
                    utag.runonce.ext[56] = 1;
                    if (1) {
                        try {
                            !function() {
                                function e(e) {
                                    var a = "/shopping-tools/request-a-quote" == document.location.pathname
                                      , n = "/shopping-tools/cpo-request-a-quote" == document.location.pathname
                                      , o = document.location.pathname.search(/inventory\/cpo\//) > -1
                                      , r = document.location.pathname.search(/inventory\/new\//) > -1
                                      , i = [{
                                        name: "raqConfirm",
                                        channel: n || o ? "cpo" : "quote_confirm",
                                        events: n || o ? "event39,event41" : "event3,event11",
                                        prop1: mazdaAnalytics.getData("dataLayer.vehicle.vehicleID").toUpperCase(),
                                        prop2: "",
                                        page: "confirm",
                                        nameHistorical: a || r ? "musa:quote_confirm" + (mazdaAnalytics.getData("dataLayer.vehicle.vehicleID") ? "_" + mazdaAnalytics.getData("dataLayer.vehicle.vehicleID") : "") : "musa:cpo_quote_confirm" + (mazdaAnalytics.getData("dataLayer.vehicle.vehicleID") ? "_" + mazdaAnalytics.getData("dataLayer.vehicle.vehicleID") : ""),
                                        subCategory: a ? "quote_confirm" : n ? "cpo_quote_confirm" : o ? "cpo_quote_confirm" : "quote_confirm",
                                        sectionHistorical: "quote_confirm",
                                        section: "tools",
                                        subsection: "quote",
                                        eVar2: " ",
                                        msrp: mazdaAnalytics.getData("dataLayer.vehicle.msrp"),
                                        totalCost: mazdaAnalytics.getData("dataLayer.vehicle.totalCost"),
                                        trim: mazdaAnalytics.getData("dataLayer.vehicle.trimCode"),
                                        searchType: "",
                                        formType: a ? "new_page" : n ? "cpo_page" : o ? "cpo_overlay" : "new_overlay",
                                        formValues: mazdaAnalytics.getData("dataLayer.form.values")
                                    }, {
                                        name: "raqInfo",
                                        channel: "quote_info",
                                        events: "event163,event164",
                                        prop1: mazdaAnalytics.getData("dataLayer.vehicle.vehicleID").toUpperCase(),
                                        prop2: "",
                                        page: "info",
                                        nameHistorical: "musa:quote_info",
                                        subCategory: "quote_info",
                                        sectionHistorical: "quote_info",
                                        section: "tools",
                                        subsection: "quote",
                                        eVar2: " ",
                                        msrp: mazdaAnalytics.getData("dataLayer.vehicle.msrp"),
                                        totalCost: mazdaAnalytics.getData("dataLayer.vehicle.totalCost"),
                                        trim: mazdaAnalytics.getData("dataLayer.vehicle.trimCode"),
                                        searchType: "",
                                        formType: a ? "new_page" : n ? "cpo_page" : o ? "cpo_overlay" : "new_overlay",
                                        formValues: ""
                                    }, {
                                        name: "raqInfo_cpo",
                                        channel: "quote_info",
                                        events: "event163,event164",
                                        prop1: mazdaAnalytics.getData("dataLayer.vehicle.vehicleID").toUpperCase(),
                                        prop2: "",
                                        page: "info",
                                        nameHistorical: "musa:quote_info",
                                        subCategory: "quote_info",
                                        sectionHistorical: "quote_info",
                                        section: "tools",
                                        subsection: "quote",
                                        eVar2: " ",
                                        msrp: mazdaAnalytics.getData("dataLayer.vehicle.msrp"),
                                        totalCost: mazdaAnalytics.getData("dataLayer.vehicle.totalCost"),
                                        trim: mazdaAnalytics.getData("dataLayer.vehicle.trimCode"),
                                        searchType: "",
                                        formType: a ? "new_page" : n ? "cpo_page" : o ? "cpo_overlay" : "new_overlay",
                                        formValues: ""
                                    }, {
                                        name: "leaseSpecialOffers",
                                        channel: mazdaAnalytics.getData("dataLayer.site.sectionHistorical"),
                                        events: "event131,event132",
                                        prop1: t(e.datums),
                                        prop2: "",
                                        page: mazdaAnalytics.getData("dataLayer.page.name"),
                                        pageFull: ["musa", mazdaAnalytics.getData("dataLayer.site.section"), mazdaAnalytics.getData("dataLayer.site.subsection"), mazdaAnalytics.getData("dataLayer.page.name")].filter(function(e) {
                                            return "" !== e
                                        }).join(":"),
                                        nameHistorical: "",
                                        subCategory: mazdaAnalytics.getData("dataLayer.page.subCategory"),
                                        sectionHistorical: "",
                                        section: mazdaAnalytics.getData("dataLayer.site.section"),
                                        subsection: mazdaAnalytics.getData("dataLayer.site.subsection"),
                                        data: e.datums.trim().toLowerCase().replace(/\W/g, "_"),
                                        formType: "",
                                        formValues: "",
                                        msrp: "",
                                        totalCost: "",
                                        trim: "",
                                        searchType: "lease"
                                    }, {
                                        name: "purchaseSpecialOffers",
                                        channel: mazdaAnalytics.getData("dataLayer.site.sectionHistorical"),
                                        events: "event131,event132",
                                        prop1: t(e.datums),
                                        prop2: "",
                                        page: mazdaAnalytics.getData("dataLayer.page.name"),
                                        pageFull: ["musa", mazdaAnalytics.getData("dataLayer.site.section"), mazdaAnalytics.getData("dataLayer.site.subsection"), mazdaAnalytics.getData("dataLayer.page.name")].filter(function(e) {
                                            return "" !== e
                                        }).join(":"),
                                        nameHistorical: "",
                                        subCategory: mazdaAnalytics.getData("dataLayer.page.subCategory"),
                                        sectionHistorical: "",
                                        section: mazdaAnalytics.getData("dataLayer.site.section"),
                                        subsection: mazdaAnalytics.getData("dataLayer.site.subsection"),
                                        data: e.datums.trim().toLowerCase().replace(/\W/g, "_"),
                                        formType: "",
                                        formValues: "",
                                        msrp: "",
                                        totalCost: "",
                                        trim: "",
                                        searchType: "purchase"
                                    }, {
                                        name: "specialSpecialOffers",
                                        channel: mazdaAnalytics.getData("dataLayer.site.sectionHistorical"),
                                        events: "event131,event132",
                                        prop1: "",
                                        prop2: "",
                                        page: mazdaAnalytics.getData("dataLayer.page.name"),
                                        pageFull: ["musa", mazdaAnalytics.getData("dataLayer.site.section"), mazdaAnalytics.getData("dataLayer.site.subsection"), mazdaAnalytics.getData("dataLayer.page.name")].filter(function(e) {
                                            return "" !== e
                                        }).join(":"),
                                        nameHistorical: "",
                                        subCategory: mazdaAnalytics.getData("dataLayer.page.subCategory"),
                                        sectionHistorical: "",
                                        section: mazdaAnalytics.getData("dataLayer.site.section"),
                                        subsection: mazdaAnalytics.getData("dataLayer.site.subsection"),
                                        data: e.datums.trim().toLowerCase().replace(/\W/g, "_"),
                                        formType: "",
                                        formValues: "",
                                        msrp: "",
                                        totalCost: "",
                                        trim: "",
                                        searchType: "special"
                                    }].find(function(a) {
                                        return a.name === e.name
                                    }) || {
                                        name: e.name,
                                        events: "",
                                        channel: mazdaAnalytics.getData("dataLayer.site.sectionHistorical"),
                                        prop1: mazdaAnalytics.getData("dataLayer.vehicle.vehicleID"),
                                        prop2: [mazdaAnalytics.getData("dataLayer.vehicle.vehicleID"), mazdaAnalytics.getData("dataLayer.vehicle.trimCode")].filter(function(e) {
                                            return "" !== e
                                        }).join("_"),
                                        page: mazdaAnalytics.getData("dataLayer.page.name"),
                                        pageFull: ["musa", mazdaAnalytics.getData("dataLayer.site.section"), mazdaAnalytics.getData("dataLayer.site.subsection"), mazdaAnalytics.getData("dataLayer.page.name")].filter(function(e) {
                                            return "" !== e
                                        }).join(":"),
                                        nameHistorical: "",
                                        subCategory: mazdaAnalytics.getData("dataLayer.page.subCategory"),
                                        sectionHistorical: "",
                                        section: mazdaAnalytics.getData("dataLayer.site.section"),
                                        subsection: mazdaAnalytics.getData("dataLayer.site.subsection"),
                                        data: e.datums.trim().toLowerCase().replace(/\W/g, "_"),
                                        formType: "",
                                        formValues: "",
                                        msrp: "",
                                        totalCost: "",
                                        trim: "",
                                        searchType: ""
                                    }
                                      , c = {
                                        pageName: i.pageFull + (i.data ? "_" + i.data : ""),
                                        channel: i.channel,
                                        prop1: i.prop1 || "",
                                        prop2: i.prop2 || "",
                                        prop8: i.sectionHistorical,
                                        prop25: i.formValues,
                                        prop42: a || n ? "page" : "overlay",
                                        prop45: i.formType,
                                        prop62: i.searchType,
                                        events: i.events,
                                        list2: i.formValues,
                                        nameHistorical: i.nameHistorical,
                                        subCategory: i.subCategory,
                                        section: i.section,
                                        subsection: i.subsection,
                                        formType: i.formType,
                                        evar2: " ",
                                        msrp: i.msrp,
                                        totalCost: i.totalCost,
                                        trim: i.trim
                                    }
                                      , l = dataLayer.page.name
                                      , d = dataLayer.page.nameHistorical
                                      , m = dataLayer.site.section
                                      , u = dataLayer.site.subsection
                                      , p = dataLayer.form.type
                                      , y = dataLayer.page.subCategory
                                      , g = dataLayer.vehicle.vehicleID
                                      , f = dataLayer.search.type
                                      , v = dataLayer.site.sectionHistorical;
                                    dataLayer.page.nameHistorical = i.nameHistorical,
                                    dataLayer.page.name = i.data ? i.page + "_" + i.data : i.page,
                                    dataLayer.site.section = i.section,
                                    dataLayer.site.subsection = i.subsection,
                                    dataLayer.form.type = i.formType,
                                    dataLayer.page.subCategory = i.subCategory,
                                    dataLayer.vehicle.vehicleID = i.prop1,
                                    dataLayer.search.type = i.searchType,
                                    dataLayer.site.sectionHistorical = i.channel,
                                    dataLayer.events = i.events,
                                    i.name.includes("disclaimer") ? (dataLayer.page.name = i.page,
                                    s.tl(!0, "o", c.pageName),
                                    console.log("Mirror ʕ ◔ᴥ◔ ʔ Disclaimer Page Name should be: " + i.pageFull),
                                    console.log('Mirror ʕ´•ᴥ•`ʔσ" while Custom Link name should be: ' + c.pageName)) : (console.log("Mirror ʕ ◔ᴥ◔ ʔ Page Name could be: " + (c.pageName || dataLayer.page.name)),
                                    s.events = "",
                                    s.t(c)),
                                    console.log(e),
                                    "raqConfirm" !== i.name && (dataLayer.page.name = l,
                                    dataLayer.page.nameHistorical = d,
                                    dataLayer.site.section = m,
                                    dataLayer.site.subsection = u,
                                    dataLayer.form.type = p,
                                    dataLayer.page.subCategory = y,
                                    dataLayer.vehicle.vehicleID = g,
                                    dataLayer.search.type = f,
                                    dataLayer.site.sectionHistorical = v,
                                    temp = JSON.parse(JSON.stringify(dataLayer)),
                                    utag.view(temp))
                                }
                                function a(e) {
                                    var a = [{
                                        name: "careersDecrepitDepartments",
                                        events: "",
                                        prop1: "",
                                        prop2: "",
                                        page: mazdaAnalytics.getData("dataLayer.page.name"),
                                        pageFull: ["musa", mazdaAnalytics.getData("dataLayer.site.section"), mazdaAnalytics.getData("dataLayer.site.subsection"), mazdaAnalytics.getData("dataLayer.page.name")].filter(function(e) {
                                            return "" !== e
                                        }).join(":"),
                                        nameHistorical: "musa:about_careers_departments",
                                        subCategory: "about_careers_departments",
                                        sectionHistorical: "about",
                                        section: "about",
                                        subsection: mazdaAnalytics.getData("dataLayer.site.subsection"),
                                        data: e.datums.trim().toLowerCase().replace(/\W/g, "_"),
                                        searchType: "overlay"
                                    }, {
                                        name: "careersDecrepitBenefits",
                                        events: "",
                                        prop1: "",
                                        prop2: "",
                                        page: mazdaAnalytics.getData("dataLayer.page.name"),
                                        pageFull: ["musa", mazdaAnalytics.getData("dataLayer.site.section"), mazdaAnalytics.getData("dataLayer.site.subsection"), mazdaAnalytics.getData("dataLayer.page.name")].filter(function(e) {
                                            return "" !== e
                                        }).join(":"),
                                        nameHistorical: "musa:about_careers_benefits",
                                        subCategory: "about_careers_benefits",
                                        sectionHistorical: "about",
                                        section: "about",
                                        subsection: mazdaAnalytics.getData("dataLayer.site.subsection"),
                                        data: e.datums.trim().toLowerCase().replace(/\W/g, "_"),
                                        searchType: "overlay"
                                    }, {
                                        name: "ownersDecrepitServiceWarranty",
                                        events: "",
                                        prop1: "",
                                        prop2: "",
                                        page: mazdaAnalytics.getData("dataLayer.page.name"),
                                        pageFull: ["musa", mazdaAnalytics.getData("dataLayer.site.section"), mazdaAnalytics.getData("dataLayer.site.subsection"), mazdaAnalytics.getData("dataLayer.page.name")].filter(function(e) {
                                            return "" !== e
                                        }).join(":"),
                                        nameHistorical: "musa:owners_maintenance_warranty",
                                        subCategory: "owners_maintenance_warranty",
                                        sectionHistorical: "nonowner",
                                        section: "owners",
                                        subsection: mazdaAnalytics.getData("dataLayer.site.subsection"),
                                        data: e.datums.trim().toLowerCase().replace(/\W/g, "_"),
                                        searchType: "overlay"
                                    }, {
                                        name: "ownersDecrepitPartsTires",
                                        events: "",
                                        prop1: "",
                                        prop2: "",
                                        page: mazdaAnalytics.getData("dataLayer.page.name"),
                                        pageFull: ["musa", mazdaAnalytics.getData("dataLayer.site.section"), mazdaAnalytics.getData("dataLayer.site.subsection"), mazdaAnalytics.getData("dataLayer.page.name")].filter(function(e) {
                                            return "" !== e
                                        }).join(":"),
                                        nameHistorical: "musa:owners_vehiclecare_tires",
                                        subCategory: "owners_vehiclecare_tires",
                                        sectionHistorical: "nonowner",
                                        section: "owners",
                                        subsection: mazdaAnalytics.getData("dataLayer.site.subsection"),
                                        data: e.datums.trim().toLowerCase().replace(/\W/g, "_"),
                                        searchType: "overlay"
                                    }, {
                                        name: "ownersDecrepitPartsBrakes",
                                        events: "",
                                        prop1: "",
                                        prop2: "",
                                        page: mazdaAnalytics.getData("dataLayer.page.name"),
                                        pageFull: ["musa", mazdaAnalytics.getData("dataLayer.site.section"), mazdaAnalytics.getData("dataLayer.site.subsection"), mazdaAnalytics.getData("dataLayer.page.name")].filter(function(e) {
                                            return "" !== e
                                        }).join(":"),
                                        nameHistorical: "musa:owners_vehiclecare_brakes",
                                        subCategory: "owners_vehiclecare_brakes",
                                        sectionHistorical: "nonowner",
                                        section: "owners",
                                        subsection: mazdaAnalytics.getData("dataLayer.site.subsection"),
                                        data: e.datums.trim().toLowerCase().replace(/\W/g, "_"),
                                        searchType: "overlay"
                                    }, {
                                        name: "ownersDecrepitPartsBatteries",
                                        events: "",
                                        prop1: "",
                                        prop2: "",
                                        page: mazdaAnalytics.getData("dataLayer.page.name"),
                                        pageFull: ["musa", mazdaAnalytics.getData("dataLayer.site.section"), mazdaAnalytics.getData("dataLayer.site.subsection"), mazdaAnalytics.getData("dataLayer.page.name")].filter(function(e) {
                                            return "" !== e
                                        }).join(":"),
                                        nameHistorical: "musa:owners_vehiclecare_battery",
                                        subCategory: "owners_vehiclecare_battery",
                                        sectionHistorical: "nonowner",
                                        section: "owners",
                                        subsection: mazdaAnalytics.getData("dataLayer.site.subsection"),
                                        data: e.datums.trim().toLowerCase().replace(/\W/g, "_"),
                                        searchType: "overlay"
                                    }, {
                                        name: "recallsVin",
                                        events: " ",
                                        prop1: "",
                                        prop2: "",
                                        page: mazdaAnalytics.getData("dataLayer.page.name"),
                                        pageFull: ["musa", mazdaAnalytics.getData("dataLayer.site.section"), mazdaAnalytics.getData("dataLayer.site.subsection"), mazdaAnalytics.getData("dataLayer.page.name")].filter(function(e) {
                                            return "" !== e
                                        }).join(":"),
                                        nameHistorical: "musa:profile_vin_how",
                                        subCategory: "profile_vin_how",
                                        sectionHistorical: "profile",
                                        section: "owners",
                                        subsection: mazdaAnalytics.getData("dataLayer.site.subsection"),
                                        data: e.datums.trim().toLowerCase().replace(/\W/g, "_"),
                                        searchType: "overlay"
                                    }].find(function(a) {
                                        return a.name === e.name
                                    })
                                      , t = {
                                        pageName: a.nameHistorical ? a.nameHistorical : a.pageFull,
                                        channel: a.sectionHistorical ? a.sectionHistorical : a.section,
                                        prop1: a.prop1 || "",
                                        prop2: a.prop2 || "",
                                        prop8: a.subCategory,
                                        prop23: "",
                                        prop42: "overlay",
                                        prop62: a.searchType,
                                        evar2: " ",
                                        events: a.events
                                    }
                                      , n = dataLayer.page.name
                                      , o = dataLayer.page.nameHistorical
                                      , r = dataLayer.site.section
                                      , i = dataLayer.site.subsection
                                      , c = dataLayer.page.subCategory
                                      , l = dataLayer.vehicle.vehicleID
                                      , d = dataLayer.search.type;
                                    dataLayer.page.nameHistorical = a.nameHistorical,
                                    dataLayer.page.name = a.data ? a.page + "_" + a.data : a.page,
                                    dataLayer.site.section = a.section,
                                    dataLayer.site.subsection = a.subsection,
                                    dataLayer.page.subCategory = a.subCategory,
                                    dataLayer.vehicle.vehicleID = a.prop1,
                                    dataLayer.search.type = a.searchType,
                                    s.t(t),
                                    console.log(e),
                                    dataLayer.page.name = n,
                                    dataLayer.page.nameHistorical = o,
                                    dataLayer.site.section = r,
                                    dataLayer.site.subsection = i,
                                    dataLayer.page.subCategory = c,
                                    dataLayer.vehicle.vehicleID = l,
                                    dataLayer.search.type = d
                                }
                                function t(e) {
                                    var a = String(e);
                                    if ("" === a)
                                        return a;
                                    if (n(a))
                                        return a;
                                    var t = a.trim().toLowerCase().replace(/\s/g, "_").replace(/-/g, "")
                                      , o = -1 !== t.search(/cx(\-)?(3)+/gi)
                                      , r = -1 !== t.search(/cx(\-)?(5)+/gi)
                                      , s = -1 !== t.search(/cx(\-)?(7)+/gi)
                                      , i = -1 !== t.search(/cx(\-)?(9)+/gi)
                                      , c = -1 !== t.search(/mx|miata/gi)
                                      , l = c && -1 !== t.search(/rf|prht/)
                                      , d = -1 !== t.search(/m(azda)?(2|5|3|6)+/gi)
                                      , m = d && -1 !== t.search(/5(.)?(door|puertas)+|hatchback/gi)
                                      , u = d && -1 !== t.search(/m?6+g?/)
                                      , p = d && -1 !== t.search(/mz2|mazda2/gi)
                                      , y = d && -1 !== t.search(/mz5|mazda5/gi)
                                      , g = -1 !== t.search(/ms3+|mazdaspeed3/gi)
                                      , f = -1 !== t.search(/rx(8)?/gi);
                                    return (o ? "cx3" : r ? "cx5" : s ? "cx7" : i ? "cx9" : l ? "mxr" : c ? "mx5" : m ? "m3h" : p ? "mz2" : g ? "ms3" : y ? "mz5" : u ? "m6g" : d ? "m3s" : f ? "rx8" : "").toUpperCase()
                                }
                                function n(e) {
                                    var a = String(e).toLowerCase();
                                    if (-1 !== ["m3s", "m3h", "m6g", "cx3", "cx5", "cx7", "cx9", "mx5", "mxr", "rx8", "mz2", "ms3"].findIndex(function(e) {
                                        return e == a
                                    }))
                                        return !0;
                                    if (/^(c|m|r)(x|[1-9])([1-9]|h|g|r|s|z)$/.test(a))
                                        return !0;
                                    var t = 3 == a.length
                                      , n = -1 !== a.search(/\w{3}/g)
                                      , o = 0 === a.search(/^\D/);
                                    return !!(t && n && o)
                                }
                                function o(e) {
                                    var a = [{
                                        name: "recallsFound",
                                        page: "results",
                                        nameHistorical: "",
                                        subCategory: "",
                                        sectionHistorical: "",
                                        events: "",
                                        formValues: ""
                                    }, {
                                        name: "contactUsFleet",
                                        page: "confirm",
                                        nameHistorical: "madm:fleet_contact_email_confirm",
                                        subCategory: "fleet_contact_email_confirm",
                                        sectionHistorical: "fleet",
                                        events: "",
                                        formValues: ""
                                    }, {
                                        name: "contactUsEmail",
                                        page: "confirm",
                                        nameHistorical: "musa:contact_email_confirm",
                                        subCategory: "contact_email",
                                        sectionHistorical: "contact",
                                        events: "",
                                        formValues: ""
                                    }, {
                                        name: "keepMeUpdated",
                                        page: "confirm",
                                        nameHistorical: "musa:updated_info_email_thankyou",
                                        subCategory: "updated_confirm",
                                        sectionHistorical: "KMU_confirm",
                                        events: "event5,event99",
                                        formValues: dataLayer.form.values
                                    }, {
                                        name: "keepMeUpdatedSingleVehicle",
                                        page: "confirm",
                                        nameHistorical: "musa:updated_info_email_thankyou",
                                        subCategory: "updated_confirm",
                                        sectionHistorical: "KMU_confirm",
                                        events: "event27,event35",
                                        formValues: dataLayer.form.values
                                    }, {
                                        name: "raqSummaryThankyou",
                                        page: "confirm",
                                        nameHistorical: "musa:quote_confirm",
                                        subCategory: "quote_confirm",
                                        sectionHistorical: "quote_confirm",
                                        events: "",
                                        formValues: ""
                                    }, {
                                        name: "rab",
                                        page: "confirm",
                                        nameHistorical: "musa:updated_confirm",
                                        subCategory: "updated_confirm",
                                        sectionHistorical: "KMU_confirm",
                                        events: "event5,event99",
                                        formValues: dataLayer.form.values
                                    }, {
                                        name: "buildPriceTrim",
                                        page: "trim",
                                        nameHistorical: "musa:build_trim_",
                                        subCategory: "build_trim",
                                        sectionHistorical: "build_trim",
                                        events: "event101,event102",
                                        formValues: ""
                                    }, {
                                        name: "buildPriceColors",
                                        page: "colors",
                                        nameHistorical: "musa:build_color_",
                                        subCategory: "build_colors",
                                        sectionHistorical: "build_colors",
                                        events: "",
                                        formValues: ""
                                    }, {
                                        name: "buildPricePackages",
                                        page: "packages",
                                        nameHistorical: "",
                                        subCategory: "build_packages",
                                        sectionHistorical: "build_packages",
                                        events: "",
                                        formValues: ""
                                    }, {
                                        name: "buildPriceOptions",
                                        page: "options",
                                        nameHistorical: "musa:build_options_",
                                        subCategory: "build_options",
                                        sectionHistorical: "build_options",
                                        events: "",
                                        formValues: ""
                                    }, {
                                        name: "buildPriceSummary",
                                        page: "summary",
                                        nameHistorical: "musa:build_summary_",
                                        subCategory: "build_summary",
                                        sectionHistorical: "build_summary",
                                        events: "event2,event21",
                                        formValues: ""
                                    }].find(function(a) {
                                        return a.name === e.name
                                    })
                                      , n = e.datums.trim().toLowerCase().replace(/\-/g, "_")
                                      , o = {
                                        pageName: ["musa", mazdaAnalytics.getData("dataLayer.site.section"), mazdaAnalytics.getData("dataLayer.site.subsection"), a.page].filter(function(e) {
                                            return "" !== e
                                        }).join(":"),
                                        nameHistorical: e.name.includes("buildPrice") && a.nameHistorical ? a.nameHistorical + t(n) : a.nameHistorical,
                                        subCategory: a.subCategory,
                                        sectionHistorical: a.sectionHistorical,
                                        events: "" === a.events ? (s.events = "",
                                        "") : a.events,
                                        list2: a.formValues,
                                        prop52: a.formValues,
                                        prop29: dataLayer.package.cost.length > 0 ? dataLayer.package.cost.reduce(function(e, a) {
                                            return e + a
                                        }, 0) : "",
                                        prop30: dataLayer.package.name.length > 0 ? dataLayer.package.name.reduce(function(e, a, t, n) {
                                            return e.includes(a) || e.push(a),
                                            e
                                        }, []).join(";") : "",
                                        prop32: dataLayer.accessory.cost.length > 0 ? dataLayer.accessory.cost.reduce(function(e, a) {
                                            return e + a
                                        }, 0) : "",
                                        list1: dataLayer.accessory.name.length > 0 ? dataLayer.accessory.name.reduce(function(e, a, t, n) {
                                            return e.includes(a) || e.push(a),
                                            e
                                        }, []).join("|") : "",
                                        eVar93: dataLayer.accessory.name.length > 0 ? dataLayer.accessory.name.reduce(function(e, a, t, n) {
                                            return e.includes(a) || e.push(a),
                                            e
                                        }, []).join(";") : ""
                                    };
                                    dataLayer.page.name = a.page,
                                    dataLayer.page.nameHistorical = o.nameHistorical,
                                    dataLayer.page.subCategory = o.subCategory,
                                    dataLayer.site.sectionHistorical = o.sectionHistorical,
                                    dataLayer.events = o.events,
                                    s.t(o),
                                    temp = JSON.parse(JSON.stringify(dataLayer)),
                                    utag.view(temp),
                                    console.log("Mirror ✧(=ↀωↀ=)ノ New Page Name shall be: " + o.pageName),
                                    console.log("Mirror                Historical Page Name shall be: " + o.nameHistorical),
                                    console.log(e)
                                }
                                var r = [{
                                    name: "triTout",
                                    selector: 'div.modal-tout--full[style*="none"]' + [':not([data-analytics-content-description="Benefits and Culture"])', ':not([data-analytics-content-description="Departments"])', ':not([data-analytics-content-description=" Mazda Benefits "])', ':not([data-analytics-content-description="Mazda Warranty"])', ':not([data-analytics-content-description="Mazda Tire Center"])', ':not([data-analytics-content-description="GENUINE MAZDA BRAKES"])', ':not([data-analytics-content-description="MAZDA HIGH-PERFORMANCE BATTERIES"])'].join(""),
                                    observed: "style",
                                    visible: "block",
                                    hidden: "none",
                                    dataOf: function(e) {
                                        return e.dataset.analyticsContentDescription
                                    }
                                }, {
                                    name: "triTout",
                                    selector: "div.component-modal.tout__modal" + [':not([data-analytics-content-description="Benefits and Culture"])', ':not([data-analytics-content-description="Departments"])', ':not([data-analytics-content-description=" Mazda Benefits "])', ':not([data-analytics-content-description="Mazda Warranty"])', ':not([data-analytics-content-description="Mazda Tire Center"])', ':not([data-analytics-content-description="GENUINE MAZDA BRAKES"])', ':not([data-analytics-content-description="MAZDA HIGH-PERFORMANCE BATTERIES"])'].join(""),
                                    observed: "class",
                                    visible: "--open",
                                    hidden: "",
                                    dataOf: function(e) {
                                        return e.dataset.analyticsContentDescription
                                    }
                                }, {
                                    name: "multiTout",
                                    selector: 'div[class*="modal-tout"]:not(.raq-modal)' + [':not([data-analytics-content-description="Benefits and Culture"])', ':not([data-analytics-content-description="Departments"])', ':not([data-analytics-content-description=" Mazda Benefits "])', ':not([data-analytics-content-description="Mazda Warranty"])', ':not([data-analytics-content-description="Mazda Tire Center"])', ':not([data-analytics-content-description="GENUINE MAZDA BRAKES"])', ':not([data-analytics-content-description="MAZDA HIGH-PERFORMANCE BATTERIES"])'].join(""),
                                    observed: "class",
                                    visible: "modal--open",
                                    hidden: "^modal-tout$",
                                    dataOf: function(e) {
                                        return e.dataset.analyticsContentDescription
                                    }
                                }, {
                                    name: "specialOffers",
                                    selector: 'div.mdp-incentives > div.mdp-incentives__modal > div[style*="none"]',
                                    observed: "style",
                                    visible: "block",
                                    hidden: "none",
                                    dataOf: function(e) {
                                        return e.dataset.url
                                    }
                                }, {
                                    name: "generalTout",
                                    selector: 'div.modal-tout[style*="none"]',
                                    observed: "style",
                                    visible: "block",
                                    hidden: "none",
                                    dataOf: function(e) {
                                        return e.dataset.analyticsContentDescription
                                    }
                                }, {
                                    name: "gallerySlides",
                                    selector: 'div[class*="gallery-modal--container"] div[class*="-container"].slick-slide',
                                    observed: "class",
                                    visible: "slick-active",
                                    hidden: "slick-current",
                                    dataOf: function(e) {
                                        var a = e.getElementsByTagName("h5")[0].textContent
                                          , t = String(parseInt(e.dataset.slickIndex) + 1);
                                        return a || "slide_" + t
                                    }
                                }, {
                                    name: "vlpTrims",
                                    selector: 'div[class*="trims--modal"][class*="trim__modal"]',
                                    observed: "class",
                                    visible: "modal--open",
                                    hidden: "^((?!modal--open).)*$",
                                    dataOf: function(e) {
                                        return e.getElementsByTagName("h4")[0].textContent
                                    }
                                }, {
                                    name: "buildOptions",
                                    selector: 'div[class*="mdp-assemble--modal"][class*="mdp-assemble--options"]',
                                    observed: "style",
                                    visible: "block|z-index: 200",
                                    hidden: "none|z-index: -1",
                                    dataOf: function(e) {
                                        return e.getElementsByTagName("h4")[0].textContent
                                    }
                                }, {
                                    name: "buildTrims",
                                    selector: 'div[class*="mdp-assemble--modal"][class*="mdp-assemble--trim__modal"]',
                                    observed: "style",
                                    visible: "block|z-index: 200",
                                    hidden: "none|z-index: -1",
                                    dataOf: function(e) {
                                        return e.getElementsByTagName("h4")[0].textContent
                                    }
                                }, {
                                    name: "disclaimer",
                                    selector: "div.mdp-foundation-disclaimer__modal",
                                    observed: "class",
                                    visible: "active",
                                    hidden: "touch",
                                    dataOf: function(e) {
                                        var a = e.querySelector("div.disclaimer-block__num").textContent.trim();
                                        e.getElementsByTagName("p")[0].textContent;
                                        return "disclaimer" + a
                                    }
                                }, {
                                    name: "disclaimerMobile",
                                    selector: "div.mdp-foundation-disclaimer__modal-mobile",
                                    observed: "class",
                                    visible: "active",
                                    hidden: "",
                                    dataOf: function(e) {
                                        var a = e.querySelector("div.disclaimer-block__num").textContent.trim();
                                        e.getElementsByTagName("p")[0].textContent;
                                        return "disclaimer" + a
                                    }
                                }, {
                                    name: "emailForms",
                                    selector: "div.mdp-forms-email",
                                    observed: "data-form-state",
                                    visible: "open",
                                    hidden: "closed",
                                    dataOf: function(e) {
                                        return e.getElementsByTagName("h4")[0].textContent
                                    }
                                }, {
                                    name: "keepMeUpdated",
                                    selector: "div.kmu-component div.mdp-forms__summary",
                                    observed: "style",
                                    visible: "visible",
                                    hidden: "display:none",
                                    dataOf: function(e) {
                                        return e.getElementsByTagName("h1")[0].textContent
                                    }
                                }, {
                                    name: "changeZip",
                                    selector: "div.mdp-navigation-global-modal__zip-code",
                                    observed: "class",
                                    visible: "show",
                                    hidden: "",
                                    dataOf: function(e) {
                                        return e.getElementsByTagName("h3")[0].textContent
                                    }
                                }, {
                                    name: "whereVin_contactUs",
                                    selector: "div.mdp-forms-container + div.component-overlay-modal",
                                    observed: "class",
                                    visible: "show",
                                    hidden: "",
                                    dataOf: function(e) {
                                        return e.getElementsByTagName("h2")[0].textContent
                                    }
                                }, {
                                    name: "leaseOffers",
                                    selector: 'div[class*="__modal--lease-offers"]',
                                    observed: "class",
                                    visible: "enter|modal--open",
                                    hidden: "__modal--lease-offers$",
                                    dataOf: function(e) {
                                        var a = e.querySelector(".copy-model__content") ? e.querySelector(".copy-model__content").textContent : "";
                                        return "lease_offer" + (a ? "_" + a : "")
                                    }
                                }, {
                                    name: "purchaseOffers",
                                    selector: 'div[class*="__modal--purchase-offers"]',
                                    observed: "class",
                                    visible: "enter|modal--open",
                                    hidden: "__modal--purchase-offers$",
                                    dataOf: function(e) {
                                        var a = e.querySelector(".copy-model__content") ? e.querySelector(".copy-model__content").textContent : "";
                                        return "purchase_offer" + (a ? "_" + a : "")
                                    }
                                }, {
                                    name: "leaseSpecialOffers",
                                    selector: "div.component-modal.mdp-offers__modal.mdp-offers__modal--lease",
                                    observed: "class",
                                    visible: "component-modal--open",
                                    hidden: "^((?!component-modal--open).)*$",
                                    dataOf: function(e) {
                                        var a = e.querySelector(".copy-model__content") ? e.querySelector(".copy-model__content").textContent : "";
                                        return "lease_offer" + (a ? "_" + a : "")
                                    }
                                }, {
                                    name: "purchaseSpecialOffers",
                                    selector: "div.component-modal.mdp-offers__modal.mdp-offers__modal--purchase",
                                    observed: "class",
                                    visible: "component-modal--open",
                                    hidden: "^((?!component-modal--open).)*$",
                                    dataOf: function(e) {
                                        var a = e.querySelector(".copy-model__content") ? e.querySelector(".copy-model__content").textContent : "";
                                        return "purchase_offer" + (a ? "_" + a : "")
                                    }
                                }, {
                                    name: "specialSpecialOffers",
                                    selector: "div.component-modal.mdp-offers__modal.mdp-offers__modal--special",
                                    observed: "class",
                                    visible: "component-modal--open",
                                    hidden: "^((?!component-modal--open).)*$",
                                    dataOf: function(e) {
                                        var a = e.querySelector(".copy-title__content") ? e.querySelector(".copy-title__content").textContent : "";
                                        return "special_offer" + (a ? "_" + a : "")
                                    }
                                }, {
                                    name: "raqInfo",
                                    selector: "div.raq-modal.modal-tout--full",
                                    observed: "class",
                                    visible: "modal--open",
                                    hidden: "^((?!modal--open).)*$",
                                    dataOf: function(e) {
                                        return ""
                                    }
                                }, {
                                    name: "raqInfo_cpo",
                                    selector: "#raq-component-modal",
                                    observed: "class",
                                    visible: "modal--open",
                                    hidden: "^((?!modal--open).)*$",
                                    dataOf: function(e) {
                                        return ""
                                    }
                                }]
                                  , i = [{
                                    name: "careersDecrepitDepartments",
                                    selector: 'div[class*="tout__modal"][data-analytics-content-description="Departments"]',
                                    observed: "class",
                                    visible: "component-modal--open",
                                    hidden: "^((?!component-modal--open).)*$",
                                    dataOf: function(e) {
                                        return e.dataset.analyticsContentDescription
                                    }
                                }, {
                                    name: "careersDecrepitBenefits",
                                    selector: 'div[class*="tout__modal"][data-analytics-content-description="Benefits and Culture"],div[class*="modal-tout"][data-analytics-content-description=" Mazda Benefits "]',
                                    observed: "class",
                                    visible: "component-modal--open",
                                    hidden: "^((?!component-modal--open).)*$",
                                    dataOf: function(e) {
                                        return e.dataset.analyticsContentDescription
                                    }
                                }, {
                                    name: "ownersDecrepitServiceWarranty",
                                    selector: 'div[class*="tout__modal"][data-analytics-content-description="Mazda Warranty"]',
                                    observed: "class",
                                    visible: "component-modal--open",
                                    hidden: "^((?!component-modal--open).)*$",
                                    dataOf: function(e) {
                                        return e.dataset.analyticsContentDescription
                                    }
                                }, {
                                    name: "ownersDecrepitPartsTires",
                                    selector: 'div[class*="tout__modal"][data-analytics-content-description="Mazda Tire Center"]',
                                    observed: "class",
                                    visible: "component-modal--open",
                                    hidden: "^((?!component-modal--open).)*$",
                                    dataOf: function(e) {
                                        return e.dataset.analyticsContentDescription
                                    }
                                }, {
                                    name: "ownersDecrepitPartsBrakes",
                                    selector: 'div[class*="tout__modal"][data-analytics-content-description="GENUINE MAZDA BRAKES"]',
                                    observed: "class",
                                    visible: "component-modal--open",
                                    hidden: "^((?!component-modal--open).)*$",
                                    dataOf: function(e) {
                                        return e.dataset.analyticsContentDescription
                                    }
                                }, {
                                    name: "ownersDecrepitPartsBatteries",
                                    selector: 'div[class*="tout__modal"][data-analytics-content-description="MAZDA HIGH-PERFORMANCE BATTERIES"]',
                                    observed: "class",
                                    visible: "component-modal--open",
                                    hidden: "^((?!component-modal--open).)*$",
                                    dataOf: function(e) {
                                        return e.dataset.analyticsContentDescription
                                    }
                                }, {
                                    name: "recallsVin",
                                    selector: "div.component-overlay-modal.mdp-search-recalls-vin__component-overlay-modal",
                                    observed: "class",
                                    visible: "show",
                                    hidden: "",
                                    dataOf: function(e) {
                                        return e.getElementsByTagName("h2")[0].textContent
                                    }
                                }]
                                  , c = [{
                                    name: "recallsFound",
                                    selector: "div.mdp-search-recalls-vin > div.mdp-search-recalls-vin__result > div.mdp-search-recalls-vin__result-item",
                                    observed: "class",
                                    visible: "active",
                                    hidden: "event157,event158",
                                    dataOf: function(e) {
                                        return e.querySelector("div.mdp-search-recalls-vin__result-summary-item").textContent
                                    }
                                }, {
                                    name: "contactUsFleet",
                                    selector: "div.container.mdp-fleet-contact > div.mdp-fleet-contact__summary",
                                    observed: "style",
                                    visible: "block",
                                    hidden: "",
                                    dataOf: function(e) {
                                        return e.getElementsByTagName("h4")[0].textContent
                                    }
                                }, {
                                    name: "contactUsEmail",
                                    selector: "div.container.mdp-forms-container > div.mdp-forms__summary",
                                    observed: "style",
                                    visible: "visible",
                                    hidden: "",
                                    dataOf: function(e) {
                                        return e.getElementsByTagName("h1")[0].textContent
                                    }
                                }, {
                                    name: "keepMeUpdated",
                                    selector: "div.kmu-page div.mdp-forms__summary",
                                    observed: "style",
                                    visible: "block",
                                    hidden: "",
                                    dataOf: function(e) {
                                        return e.getElementsByTagName("h1")[0].textContent
                                    }
                                }, {
                                    name: "keepMeUpdatedSingleVehicle",
                                    selector: "div.kmu-component > div > div.mdp-forms__summary",
                                    observed: "style",
                                    visible: "block",
                                    hidden: "display:none",
                                    dataOf: function(e) {
                                        return e.getElementsByTagName("h1")[0].textContent
                                    }
                                }, {
                                    name: "rab",
                                    selector: "div.mdp-rab__container > div.container > div.mdp-forms__summary",
                                    observed: "style",
                                    visible: "block",
                                    hidden: "",
                                    dataOf: function(e) {
                                        return e.getElementsByTagName("h1")[0].textContent
                                    }
                                }, {
                                    name: "buildPriceTrim",
                                    selector: "#assemble > section.mdp-assemble--step.mdp-assemble--trim.section",
                                    observed: "class",
                                    visible: "active",
                                    hidden: "",
                                    dataOf: function(e) {
                                        var a = ["mazda3-sedan", "mazda3-hatchback", "mazda6", "cx-3", "cx-5", "cx-9", "mx-5-miata"]
                                          , t = ["m3s", "m3h", "m6g", "cx3", "cx5", "cx9", "mx5"]
                                          , n = ["Mazda3 4-door", "Mazda3 5-door", "Mazda6", "CX-3", "CX-5", "CX-9", "MX-5 Miata"]
                                          , o = mazdaAnalytics.getData("dataLayer.vehicle.vehicleID")
                                          , r = mazdaAnalytics.getData("vehicleID.fromURLParam")
                                          , s = a.findIndex(function(e) {
                                            return document.location.pathname.includes(e)
                                        })
                                          , i = t.findIndex(function(e) {
                                            return document.location.hash.includes(e)
                                        })
                                          , c = n.findIndex(function(e) {
                                            return document.querySelector("h3.mobile-title") ? document.querySelector("h3.mobile-title").textContent.includes(e) : ""
                                        })
                                          , l = s > -1 ? s : i > -1 ? i : c > -1 ? c : -1;
                                        return o || r || t[l] || ""
                                    }
                                }, {
                                    name: "buildPriceColors",
                                    selector: "#assemble > section.mdp-assemble--step.mdp-assemble--colors.section",
                                    observed: "class",
                                    visible: "active",
                                    hidden: "",
                                    dataOf: function(e) {
                                        var a = ["mazda3-sedan", "mazda3-hatchback", "mazda6", "cx-3", "cx-5", "cx-9", "mx-5-miata"]
                                          , t = ["m3s", "m3h", "m6g", "cx3", "cx5", "cx9", "mx5"]
                                          , n = ["Mazda3 4-door", "Mazda3 5-door", "Mazda6", "CX-3", "CX-5", "CX-9", "MX-5 Miata"]
                                          , o = mazdaAnalytics.getData("dataLayer.vehicle.vehicleID")
                                          , r = mazdaAnalytics.getData("vehicleID.fromURLParam")
                                          , s = a.findIndex(function(e) {
                                            return document.location.pathname.includes(e)
                                        })
                                          , i = t.findIndex(function(e) {
                                            return document.location.hash.includes(e)
                                        })
                                          , c = n.findIndex(function(e) {
                                            return document.querySelector("h3.mobile-title") ? document.querySelector("h3.mobile-title").textContent.includes(e) : ""
                                        })
                                          , l = s > -1 ? s : i > -1 ? i : c > -1 ? c : -1;
                                        return o || r || t[l] || ""
                                    }
                                }, {
                                    name: "buildPricePackages",
                                    selector: "#assemble > section.mdp-assemble--step.mdp-assemble--packages.section",
                                    observed: "class",
                                    visible: "active",
                                    hidden: "",
                                    dataOf: function(e) {
                                        var a = ["mazda3-sedan", "mazda3-hatchback", "mazda6", "cx-3", "cx-5", "cx-9", "mx-5-miata"]
                                          , t = ["m3s", "m3h", "m6g", "cx3", "cx5", "cx9", "mx5"]
                                          , n = ["Mazda3 4-door", "Mazda3 5-door", "Mazda6", "CX-3", "CX-5", "CX-9", "MX-5 Miata"]
                                          , o = mazdaAnalytics.getData("dataLayer.vehicle.vehicleID")
                                          , r = mazdaAnalytics.getData("vehicleID.fromURLParam")
                                          , s = a.findIndex(function(e) {
                                            return document.location.pathname.includes(e)
                                        })
                                          , i = t.findIndex(function(e) {
                                            return document.location.hash.includes(e)
                                        })
                                          , c = n.findIndex(function(e) {
                                            return document.querySelector("h3.mobile-title") ? document.querySelector("h3.mobile-title").textContent.includes(e) : ""
                                        })
                                          , l = s > -1 ? s : i > -1 ? i : c > -1 ? c : -1;
                                        return o || r || t[l] || ""
                                    }
                                }, {
                                    name: "buildPriceOptions",
                                    selector: "#assemble > section.mdp-assemble--step.mdp-assemble--options.section",
                                    observed: "class",
                                    visible: "active",
                                    hidden: "",
                                    dataOf: function(e) {
                                        var a = ["mazda3-sedan", "mazda3-hatchback", "mazda6", "cx-3", "cx-5", "cx-9", "mx-5-miata"]
                                          , t = ["m3s", "m3h", "m6g", "cx3", "cx5", "cx9", "mx5"]
                                          , n = ["Mazda3 4-door", "Mazda3 5-door", "Mazda6", "CX-3", "CX-5", "CX-9", "MX-5 Miata"]
                                          , o = mazdaAnalytics.getData("dataLayer.vehicle.vehicleID")
                                          , r = mazdaAnalytics.getData("vehicleID.fromURLParam")
                                          , s = a.findIndex(function(e) {
                                            return document.location.pathname.includes(e)
                                        })
                                          , i = t.findIndex(function(e) {
                                            return document.location.hash.includes(e)
                                        })
                                          , c = n.findIndex(function(e) {
                                            return document.querySelector("h3.mobile-title") ? document.querySelector("h3.mobile-title").textContent.includes(e) : ""
                                        })
                                          , l = s > -1 ? s : i > -1 ? i : c > -1 ? c : -1;
                                        return o || r || t[l] || ""
                                    }
                                }, {
                                    name: "buildPriceSummary",
                                    selector: "#assemble > section.mdp-assemble--step.mdp-assemble--summary.section",
                                    observed: "class",
                                    visible: "active",
                                    hidden: "",
                                    dataOf: function(e) {
                                        var a = ["mazda3-sedan", "mazda3-hatchback", "mazda6", "cx-3", "cx-5", "cx-9", "mx-5-miata"]
                                          , t = ["m3s", "m3h", "m6g", "cx3", "cx5", "cx9", "mx5"]
                                          , n = ["Mazda3 4-door", "Mazda3 5-door", "Mazda6", "CX-3", "CX-5", "CX-9", "MX-5 Miata"]
                                          , o = mazdaAnalytics.getData("dataLayer.vehicle.vehicleID")
                                          , r = mazdaAnalytics.getData("vehicleID.fromURLParam")
                                          , s = a.findIndex(function(e) {
                                            return document.location.pathname.includes(e)
                                        })
                                          , i = t.findIndex(function(e) {
                                            return document.location.hash.includes(e)
                                        })
                                          , c = n.findIndex(function(e) {
                                            return document.querySelector("h3.mobile-title") ? document.querySelector("h3.mobile-title").textContent.includes(e) : ""
                                        })
                                          , l = s > -1 ? s : i > -1 ? i : c > -1 ? c : -1;
                                        return o || r || t[l] || ""
                                    }
                                }];
                                PaneMirror.echo(r, e),
                                PaneMirror.echo(i, a),
                                PaneMirror.echo(c, o)
                            }();
                        } catch (e) {
                            utag.DB(e);
                        }
                        try {
                            !function() {
                                function t(t) {
                                    "style" == t.attributeName ? function(t) {
                                        var e = t.oldValue
                                          , a = t.target.getAttribute("style");
                                        a.includes("display: block"),
                                        a.includes("display: none"),
                                        e.includes("display: block"),
                                        e.includes("display: none")
                                    }(t) : function(t) {
                                        var a = t.oldValue
                                          , n = t.target.getAttribute("data-analytics-form-values")
                                          , l = a ? a.replace(/'/g, "").split(",").map(function(t) {
                                            return t.split("=")
                                        }).reduce(function(t, e) {
                                            return t[e[0]] = e[1],
                                            t
                                        }, {
                                            model_year: "",
                                            trim: "",
                                            down_payment: "",
                                            trade_in: "",
                                            interest_rate: "",
                                            lease_term: ""
                                        }) : ""
                                          , o = n ? n.replace(/'/g, "").split(",").map(function(t) {
                                            return t.split("=")
                                        }).reduce(function(t, e) {
                                            return t[e[0]] = e[1],
                                            t
                                        }, {
                                            model_year: "",
                                            trim: "",
                                            down_payment: "",
                                            trade_in: "",
                                            interest_rate: "",
                                            lease_term: ""
                                        }) : ""
                                          , s = n !== a
                                          , p = "" !== o.model_year
                                          , u = (o.lease_term,
                                        o.lease_term,
                                        l.lease_term,
                                        "" !== o.lease_term && "" === l.lease_term);
                                        t.model_year = o.model_year,
                                        t.trim = o.trim,
                                        t.down_pay = o.down_payment,
                                        t.trade_in = o.trade_in,
                                        t.interest = o.interest_rate,
                                        t.lease_term = o.lease_term,
                                        i.push(t),
                                        s && p && u && e(r, "14,scOpen")
                                    }(t)
                                }
                                function e(t, e, r) {
                                    var n = jQuery(t)
                                      , i = n.attr("data-analytics-link-component-name")
                                      , l = n.attr("data-analytics-link-type")
                                      , o = a(n.attr("data-analytics-link-description"))
                                      , p = s.prop23
                                      , u = n.attr("data-analytics-link-number") || ""
                                      , c = n.attr("data-analytics-vehicle-ID") || ""
                                      , d = a(n.attr("data-analytics-form-values") || "")
                                      , m = n.attr("data-analytics-content-description") || ""
                                      , y = n.attr("data-gallery-full-index") || ""
                                      , _ = [u || c, o].filter(function(t) {
                                        return "" !== t
                                    }).join("_")
                                      , f = [m || i, l, _, y].filter(function(t) {
                                        return "" !== t
                                    }).join(":")
                                      , b = p + ":" + f
                                      , g = {
                                        prop1: c,
                                        prop25: b,
                                        prop36: u,
                                        prop48: f,
                                        prop50: _,
                                        prop51: i,
                                        prop52: d,
                                        prop60: l,
                                        eVar2: b,
                                        eVar48: f,
                                        eVar51: i,
                                        eVar60: l,
                                        list2: d
                                    };
                                    g.events = [e, r].map(function(t) {
                                        return t ? "event" + t : ""
                                    }).filter(function(t) {
                                        return "" !== t
                                    }).join(","),
                                    g.linkTrackVars = [u ? "prop36" : "", c ? "prop1" : "", d ? "list2,prop52" : "", g.events ? "events" : "", "prop25"].filter(function(t) {
                                        return "" !== t
                                    }).concat(defaultLinkTrackVars).join(","),
                                    s.tl(t, "o", b, g),
                                    dataLayer.events = "event14",
                                    temp = JSON.parse(JSON.stringify(dataLayer)),
                                    utag.link(temp)
                                }
                                function a(t) {
                                    return t.toLocaleLowerCase().trim().replace(/\s/g, "_").replace(/%|#|\?|!/g, "").replace(/\-|@|&|\^|`|~|\(|\)|;|\||\:/g, "_").replace(/(\D(\s)*)\.((\s)*\D)/g, "$1_$2").replace(/_{2,}/g, "_")
                                }
                                var r = document.querySelector("form.mdp-estpmt")
                                  , n = document.getElementsByClassName("mdp-estpmt__payment-detail")[0]
                                  , i = []
                                  , l = new MutationObserver(function(e) {
                                    e.forEach(t)
                                }
                                );
                                l.observe(r, {
                                    attributes: !0,
                                    attributeFilter: ["data-analytics-form-values"],
                                    attributeOldValue: !0
                                }),
                                l.observe(n, {
                                    attributes: !0,
                                    attributeFilter: ["style"],
                                    attributeOldValue: !0
                                })
                            }();
                        } catch (e) {
                            utag.DB(e)
                        }
                        try {
                            function assignLinkTracking() {
                                var links = document.querySelectorAll("[data-analytics-link-component-name]");
                                for (var a = 0, l = links.length; a < l; a++) {
                                    links[a].addEventListener("click", mazdaAnalytics.linkHandler, false);
                                }
                            }
                            if (b['dom.pathname'] == "/find-a-dealer") {
                                var counter = 0;
                                var waitForPop = setInterval(function() {
                                    counter++
                                    if (typeof document.getElementsByClassName('dealer__container')[1] != "undefined") {
                                        utag.DB("assignLinkTracking attached successfully on try number: " + counter);
                                        assignLinkTracking();
                                        clearInterval(waitForPop);
                                    } else if (counter == 8) {
                                        utag.DB("After 2 seconds, clearing interval and calling assignLinkTracking");
                                        clearInterval(waitForPop);
                                        assignLinkTracking();
                                    }
                                }, 250);
                            } else if (b['dom.pathname'].indexOf("/shopping-tools/compare-vehicles/") > -1) {
                                var counter = 0;
                                var waitForPop = setInterval(function() {
                                    counter++
                                    if (document.querySelectorAll("button[data-analytics-link-description='Warranty']").length > 0) {
                                        utag.DB("assignLinkTracking attached successfully on try number: " + counter);
                                        assignLinkTracking();
                                        clearInterval(waitForPop);
                                    } else if (counter == 8) {
                                        utag.DB("After 2 seconds, clearing interval and calling assignLinkTracking");
                                        clearInterval(waitForPop);
                                        assignLinkTracking();
                                    }
                                }, 250);
                            } else if (b['dom.pathname'].indexOf("/shopping-tools/special-offers-and-incentives") > -1) {
                                var counter = 0;
                                var waitForPop = setInterval(function() {
                                    counter++
                                    if (document.querySelectorAll("div.mdp-incentives__mdl-off").length > 1) {
                                        utag.DB("assignLinkTracking attached successfully on try number: " + counter);
                                        assignLinkTracking();
                                        clearInterval(waitForPop);
                                    } else if (counter == 8) {
                                        utag.DB("After 2 seconds, clearing interval and calling assignLinkTracking");
                                        clearInterval(waitForPop);
                                        assignLinkTracking();
                                    }
                                }, 250);
                            } else if (b['dom.pathname'].indexOf("/shopping-tools/build-and-price/") > -1) {
                                var counter = 0;
                                var hasTrimHashParam = true;
                                var trackTrim = function() {
                                    var vehID = dataLayer.vehicle.vehicleID || utag.loader.RC('DTMvehicleID');
                                    dataLayer.page.name = hasTrimHashParam ? 'trim' : dataLayer.page.name;
                                    dataLayer.page.nameHistorical = hasTrimHashParam ? 'musa:build_trim_' + vehID : dataLayer.page.name;
                                    dataLayer.site.sectionHistorical = hasTrimHashParam ? 'build_trim' : dataLayer.page.name;
                                    dataLayer.page.subCategory = hasTrimHashParam ? 'build_trim' : dataLayer.page.subCategory;
                                    s.channel = "build_trim";
                                    s.eVar93 = s.prop33 = mazdaAnalytics.getData('dataLayer.accessory.name');
                                    s.prop8 = "build_trim";
                                    s.events = "event101,event102";
                                    s.t();
                                }
                                var waitForPop = setInterval(function() {
                                    counter++
                                    if (document.querySelectorAll("div.mdp-assemble__trims__filters").length > 1) {
                                        utag.DB("assignLinkTracking attached successfully on try number: " + counter);
                                        trackTrim();
                                        assignLinkTracking();
                                        clearInterval(waitForPop);
                                    } else if (counter == 8) {
                                        utag.DB("After 2 seconds, clearing interval and calling assignLinkTracking");
                                        clearInterval(waitForPop);
                                        trackTrim();
                                        assignLinkTracking();
                                    }
                                }, 250);
                            } else {
                                assignLinkTracking();
                            }
                        } catch (e) {
                            utag.DB(e)
                        }
                        try {
                            (function() {
                                function l() {
                                    function n(a) {
                                        return a ? "object" === typeof a || "function" === typeof a : !1
                                    }
                                    var p = null;
                                    var g = function(a, b) {
                                        function f() {}
                                        if (!n(a) || !n(b))
                                            throw new TypeError("Cannot create proxy with a non-object as target or handler");
                                        p = function() {
                                            f = function(a) {
                                                throw new TypeError("Cannot perform '" + a + "' on a proxy that has been revoked");
                                            }
                                        }
                                        ;
                                        var e = b;
                                        b = {
                                            get: null,
                                            set: null,
                                            apply: null,
                                            construct: null
                                        };
                                        for (var k in e) {
                                            if (!(k in b))
                                                throw new TypeError("Proxy polyfill does not support trap '" + k + "'");
                                            b[k] = e[k]
                                        }
                                        "function" === typeof e && (b.apply = e.apply.bind(e));
                                        var c = this
                                          , g = !1
                                          , q = !1;
                                        "function" === typeof a ? (c = function() {
                                            var h = this && this.constructor === c
                                              , d = Array.prototype.slice.call(arguments);
                                            f(h ? "construct" : "apply");
                                            return h && b.construct ? b.construct.call(this, a, d) : !h && b.apply ? b.apply(a, this, d) : h ? (d.unshift(a),
                                            new (a.bind.apply(a, d))) : a.apply(this, d)
                                        }
                                        ,
                                        g = !0) : a instanceof Array && (c = [],
                                        q = !0);
                                        var r = b.get ? function(a) {
                                            f("get");
                                            return b.get(this, a, c)
                                        }
                                        : function(a) {
                                            f("get");
                                            return this[a]
                                        }
                                          , v = b.set ? function(a, d) {
                                            f("set");
                                            b.set(this, a, d, c)
                                        }
                                        : function(a, b) {
                                            f("set");
                                            this[a] = b
                                        }
                                          , t = {};
                                        Object.getOwnPropertyNames(a).forEach(function(b) {
                                            if (!((g || q) && b in c)) {
                                                var d = {
                                                    enumerable: !!Object.getOwnPropertyDescriptor(a, b).enumerable,
                                                    get: r.bind(a, b),
                                                    set: v.bind(a, b)
                                                };
                                                Object.defineProperty(c, b, d);
                                                t[b] = !0
                                            }
                                        });
                                        e = !0;
                                        Object.setPrototypeOf ? Object.setPrototypeOf(c, Object.getPrototypeOf(a)) : c.__proto__ ? c.__proto__ = a.__proto__ : e = !1;
                                        if (b.get || !e)
                                            for (var m in a)
                                                t[m] || Object.defineProperty(c, m, {
                                                    get: r.bind(a, m)
                                                });
                                        Object.seal(a);
                                        Object.seal(c);
                                        return c
                                    };
                                    g.revocable = function(a, b) {
                                        return {
                                            proxy: new g(a,b),
                                            revoke: p
                                        }
                                    }
                                    ;
                                    return g
                                }
                                ;var u = "undefined" !== typeof process && "[object process]" === {}.toString.call(process) || "undefined" !== typeof navigator && "ReactNative" === navigator.product ? global : self;
                                u.Proxy || (u.Proxy = l(),
                                u.Proxy.revocable = u.Proxy.revocable);
                            }
                            )();
                            if (typeof Object.assign != 'function') {
                                Object.defineProperty(Object, "assign", {
                                    value: function assign(target, varArgs) {
                                        'use strict';
                                        if (target == null) {
                                            throw new TypeError('Cannot convert undefined or null to object');
                                        }
                                        var to = Object(target);
                                        for (var index = 1; index < arguments.length; index++) {
                                            var nextSource = arguments[index];
                                            if (nextSource != null) {
                                                for (var nextKey in nextSource) {
                                                    if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
                                                        to[nextKey] = nextSource[nextKey];
                                                    }
                                                }
                                            }
                                        }
                                        return to;
                                    },
                                    writable: true,
                                    configurable: true
                                });
                            }
                            const Objectifier = (()=>{
                                const objectifier = (splits,create,context)=>{
                                    let result = context || window;
                                    for (let i = 0, s; result && (s = splits[i]); i++) {
                                        result = (s in result ? result[s] : (create ? result[s] = {} : undefined));
                                    }
                                    return result;
                                }
                                ;
                                return {
                                    set: (name,value,context)=>{
                                        const splits = name.split('.');
                                        const s = splits.pop();
                                        let result = objectifier(splits, true, context);
                                        if (name.indexOf('dataLayer') === 0) {
                                            mazdaAnalytics.log(`${name}updated!`);
                                        }
                                        return result && s ? (result[s] = value) : undefined;
                                    }
                                    ,
                                    get: (name,create,context)=>{
                                        return objectifier(name.split('.'), create, context);
                                    }
                                    ,
                                    exists: (name,context)=>{
                                        return this.get(name, false, context) !== undefined;
                                    }
                                };
                            }
                            )();
                            function isEquivalent(a, b) {
                                var aProps = Object.getOwnPropertyNames(a);
                                var bProps = Object.getOwnPropertyNames(b);
                                if (aProps.length != bProps.length) {
                                    return false;
                                }
                                for (var i = 0; i < aProps.length; i++) {
                                    var propName = aProps[i];
                                    if (a[propName] !== b[propName]) {
                                        return false;
                                    }
                                }
                                return true;
                            }
                            function getParent(child) {
                                for (var x in dataLayer) {
                                    if (typeof dataLayer[x] == 'object')
                                        if (isEquivalent(child, dataLayer[x]))
                                            return x;
                                }
                                return false;
                            }
                            ;const handler = {
                                get: (obj,prop)=>{
                                    return prop in obj ? obj[prop] : undefined;
                                    mazdaAnalytics.log(`dataLayer.${prop}retrieved!`);
                                }
                                ,
                                set: (obj,prop,value)=>{
                                    obj[prop] = value;
                                    var myParent = false;
                                    if (typeof obj == 'object')
                                        myParent = getParent(obj);
                                    if (myParent)
                                        mazdaAnalytics.log('dataLayer.' + myParent + '.' + prop + ' updated!');
                                    else
                                        mazdaAnalytics.log('datalayer.' + prop + ' updated!');
                                    if (myParent === 'search' && prop === 'results') {
                                        if (document.location.pathname.indexOf('/shopping-tools/inventory/results') > -1 && mazdaAnalytics.getData('dataLayer.site.subsection') == 'inventory' && (mazdaAnalytics.getData('dataLayer.page.name') == 'results' || mazdaAnalytics.getData('dataLayer.page.name') == 'cpo_results')) {
                                            var tempEvents = s.events;
                                            if (mazdaAnalytics.getData('dataLayer.search.results') === '0') {
                                                s.events = 'event141,event142';
                                            } else if (mazdaAnalytics.getData('dataLayer.page.name') == 'results') {
                                                s.events = 'event12,event209';
                                            } else if (mazdaAnalytics.getData('dataLayer.page.name') == 'cpo_results') {
                                                s.events = 'event38,event40';
                                            }
                                            s.prop1 = mazdaAnalytics.getData('dataLayer.vehicle.vehicleID');
                                            s.prop3 = s.eVar3 = mazdaAnalytics.getData('dataLayer.dealer.ID');
                                            s.prop4 = s.eVar4 = mazdaAnalytics.getData('dataLayer.user.type');
                                            s.prop8 = mazdaAnalytics.getData('dataLayer.page.subCategory');
                                            s.prop9 = mazdaAnalytics.getData('dataLayer.language');
                                            s.prop15 = eVar15 = location.hostname;
                                            s.prop16 = eVar16 = mazdaAnalytics.getData('dataLayer.vehicle.nameplate');
                                            s.prop23 = 'musa:' + mazdaAnalytics.getData('dataLayer.site.section') + ':' + mazdaAnalytics.getData('dataLayer.site.subsection') + ':' + mazdaAnalytics.getData('dataLayer.page.name');
                                            s.prop24 = mazdaAnalytics.getData('dataLayer.page.URL');
                                            s.eVar2 = 'musa:tools:inventory:results_' + mazdaAnalytics.getData('dataLayer.search.results');
                                            s.prop25 = s.eVar2;
                                            s.prop40 = mazdaAnalytics.getData('dataLayer.site.section');
                                            s.prop41 = mazdaAnalytics.getData('dataLayer.site.section') + ':' + mazdaAnalytics.getData('dataLayer.site.subsection');
                                            s.prop56 = mazdaAnalytics.getData('dataLayer.search.results');
                                            s.prop71 = s.eVar71 = "musa:tools:Inventory:results_" + mazdaAnalytics.getData('dataLayer.vehicle.vehicleID');
                                            s.linkTrackVars = 'events,prop1,prop3,eVar3,prop4,eVar4,prop8,prop9,prop15,eVar15,prop16,eVar16,prop23,prop24,eVar2,prop25,prop40,prop41,prop56,prop71,eVar71';
                                            s.linkTrackEvents = s.events;
                                            window.dispatchEvent(linkEvent);
                                            s.events = dataLayer.events = tempEvents;
                                        } else if (document.location.pathname.indexOf('/find-a-dealer') > -1) {
                                            var tempEvents = s.events;
                                            if (mazdaAnalytics.getData('dataLayer.search.results') === '0') {
                                                s.events = 'event125,event126';
                                            } else {
                                                s.events = 'event1,event13';
                                            }
                                            mazdaAnalytics.setData('dataLayer.events', s.events);
                                            s.prop1 = mazdaAnalytics.getData('dataLayer.vehicle.vehicleID');
                                            s.prop4 = s.eVar4 = mazdaAnalytics.getData('dataLayer.user.type');
                                            s.prop8 = mazdaAnalytics.getData('dataLayer.page.subCategory');
                                            s.prop23 = 'musa:' + mazdaAnalytics.getData('dataLayer.site.section') + ':' + mazdaAnalytics.getData('dataLayer.site.subsection') + ':' + mazdaAnalytics.getData('dataLayer.page.name');
                                            s.prop24 = mazdaAnalytics.getData('dataLayer.page.URL');
                                            s.eVar2 = 'musa:tools:locate_dealer:overview:dealer_results:dealers_found_' + mazdaAnalytics.getData('dataLayer.search.results');
                                            s.prop25 = s.eVar2;
                                            s.prop40 = mazdaAnalytics.getData('dataLayer.site.section');
                                            s.prop41 = mazdaAnalytics.getData('dataLayer.site.section') + ':' + mazdaAnalytics.getData('dataLayer.site.subsection');
                                            s.eVar92 = mazdaAnalytics.getData('dataLayer.zipCode');
                                            s.eVar76 = s.eVar92;
                                            s.linkTrackVars = 'events,prop1,prop4,eVar4,prop8,prop23,prop24,eVar2,prop25,prop40,prop41,eVar76,eVar92';
                                            s.linkTrackEvents = s.events;
                                            window.dispatchEvent(linkEvent);
                                            s.events = dataLayer.events = tempEvents;
                                        }
                                    }
                                    return true;
                                }
                            };
                            for (key in dataLayer) {
                                if (typeof (dataLayer[key]) == 'object')
                                    dataLayer[key] = new Proxy(dataLayer[key],handler);
                            }
                            dataLayer = new Proxy(dataLayer,handler);
                            const pageEvent = new Event('PageView');
                            const linkEvent = new Event('LinkEvent');
                            (function(window, MDP, Analytics) {
                                Analytics.dataLayer = {};
                                Object.keys(window.dataLayer).forEach((key)=>{
                                    Object.defineProperty(Analytics.dataLayer, key, {
                                        enumerable: true,
                                        get: ()=>{
                                            let value = window.dataLayer[key];
                                            return value;
                                        }
                                        ,
                                        set: (value)=>{
                                            window.dataLayer[key] = value;
                                        }
                                    });
                                }
                                );
                            }(window, window.MDP = window.MDP || {}, window.MDP.Analytics = window.MDP.Analytics || {}));
                            window.addEventListener('PageView', function(e) {
                                mazdaAnalytics.log('Page View');
                                s.t();
                            });
                            window.addEventListener('LinkEvent', function(e) {
                                mazdaAnalytics.log('Link Click');
                                s.tl(this, 'o', s.eVar2);
                                if (s.events.indexOf("event50,event52") > -1 || s.events.indexOf("event123,event124") > -1 || s.events.indexOf("event117,event118") > -1 || s.events.indexOf("event27,event35") > -1 || s.events.indexOf("event12,event209") > -1 || s.events.indexOf("event38,event40") > -1) {
                                    dataLayer.events = s.events;
                                    var temp = JSON.parse(JSON.stringify(dataLayer));
                                    utag.link(temp);
                                    utag.DB("Link Call fired by state change logic.");
                                }
                            });
                        } catch (e) {
                            utag.DB(e)
                        }
                        try {
                            if(location.pathname.toLowerCase().indexOf('/owners') > -1){
                                var selector = 'iframe[id*="widget"].video-wrapper';
                            }else{
                                var selector = 'iframe.mdp-flexiblecontent-video__player';
                            }
                            var counter = 0;
                            var waitForPop = setInterval(function() {
                                counter++;
                                if (document.querySelectorAll(selector).length > 0) {
                                    utag.DB("Video found attached successfully on try number: " + counter);
                                    trackVideos(selector);
                                    clearInterval(waitForPop);
                                } else if (counter == 8) {
                                    utag.DB("After 2 seconds, clearing interval and calling not waiting for vide.");
                                    clearInterval(waitForPop);
                                }
                            }, 250);
                            // var counter2 = 0;
                            // var waitForPop2 = setInterval(function() {
                            //     counter2++;
                            //     if (document.querySelectorAll('iframe.mdp-flexiblecontent-video__player').length > 0) {
                            //         utag.DB("Video found attached successfully on try number: " + counter);
                            //         trackVideos();
                            //         clearInterval(waitForPop2);
                            //     } else if (counter2 == 8) {
                            //         utag.DB("After 2 seconds, clearing interval and calling not waiting for video");
                            //         clearInterval(waitForPop2);
                            //     }
                            // }, 250);
                            // function newEraTrackVideos() {
                            //     var videoIframes = document.querySelectorAll('iframe[id*="widget"].video-wrapper');
                            //     var newEraVideoIframes = document.querySelectorAll('iframe#widget2.mdp-flexiblecontent-video__player');
                            //     Array.from(newEraVideoIframes).forEach(function(vid) {
                            //         vid.addEventListener('video:playing', getVideoTitle);
                            //         vid.addEventListener('video:paused', getVideoTitle);
                            //         vid.addEventListener('video:playing', function(e) {
                            //             s.prop68 = s.eVar68 = mazdaAnalytics.getData('dataLayer.videoTitle');
                            //             s.events = 'event81';
                            //             s.linkTrackVars = 'events,prop68,eVar68';
                            //             s.linkTrackEvents = 'event81';
                            //             s.tl(this, 'o', s.prop23 + ':video:100');
                            //             dataLayer.events = s.events;
                            //             var temp = JSON.parse(JSON.stringify(dataLayer));
                            //             utag.link(temp);
                            //         });
                            //         vid.addEventListener('video:ended', function(e) {
                            //             s.prop68 = s.eVar68 = mazdaAnalytics.getData('dataLayer.videoTitle');
                            //             s.events = 'event86';
                            //             s.linkTrackVars = 'events,prop68,eVar68';
                            //             s.linkTrackEvents = 'event86';
                            //             s.tl(this, 'o', s.prop23 + ':video:100');
                            //             dataLayer.events = s.events;
                            //             var temp = JSON.parse(JSON.stringify(dataLayer));
                            //             utag.link(temp);
                            //         });
                            //         vid.addEventListener('video:reach75', function(e) {
                            //             s.prop68 = s.eVar68 = mazdaAnalytics.getData('dataLayer.videoTitle');
                            //             s.events = 'event84';
                            //             s.linkTrackVars = 'events,prop68,eVar68';
                            //             s.linkTrackEvents = 'event84';
                            //             s.tl(this, 'o', s.prop23 + ':video:75');
                            //             dataLayer.events = s.events;
                            //             var temp = JSON.parse(JSON.stringify(dataLayer));
                            //             utag.link(temp);
                            //         });
                            //         vid.addEventListener('video:reach50', function(e) {
                            //             s.prop68 = s.eVar68 = mazdaAnalytics.getData('dataLayer.videoTitle');
                            //             s.events = 'event83';
                            //             s.linkTrackVars = 'events,prop68,eVar68';
                            //             s.linkTrackEvents = 'event83';
                            //             s.tl(this, 'o', s.prop23 + ':video:50');
                            //             dataLayer.events = s.events;
                            //             var temp = JSON.parse(JSON.stringify(dataLayer));
                            //             utag.link(temp);
                            //         });
                            //         vid.addEventListener('video:reach25', function(e) {
                            //             s.prop68 = s.eVar68 = mazdaAnalytics.getData('dataLayer.videoTitle');
                            //             s.events = 'event82';
                            //             s.linkTrackVars = 'events,prop68,eVar68';
                            //             s.linkTrackEvents = 'event82';
                            //             s.tl(this, 'o', s.prop23 + ':video:25');
                            //             dataLayer.events = s.events;
                            //             var temp = JSON.parse(JSON.stringify(dataLayer));
                            //             utag.link(temp);
                            //         });
                            //         vid.addEventListener('video:paused', function(e) {
                            //             s.prop68 = s.eVar68 = mazdaAnalytics.getData('dataLayer.videoTitle');
                            //             s.linkTrackVars = 'prop68,eVar68';
                            //             s.tl(this, 'o', 'video:paused');
                            //             dataLayer.events = s.events;
                            //             var temp = JSON.parse(JSON.stringify(dataLayer));
                            //             utag.link(temp);
                            //         });
                            //         vid.addEventListener('video:start', function(e) {
                            //             s.tl(this, 'o', 'video:start');
                            //             dataLayer.events = s.events;
                            //             var temp = JSON.parse(JSON.stringify(dataLayer));
                            //             utag.link(temp);
                            //         });
                            //     });
                            // }
                            function trackVideos(selector) {
                                var ytFrame = document.querySelectorAll(selector);
                                //var videoIframes = document.querySelectorAll('iframe[id*="widget"].video-wrapper');
                                //WL remove #widget2 in selector for consumer-reports page
                                //var newEraVideoIframes = document.querySelectorAll('iframe.mdp-flexiblecontent-video__player');
                                //replace .from param with newEraVideoIframes
                                Array.from(ytFrame).forEach(function(vid) {
                                    //vid.addEventListener('video:playing', getVideoTitle);
                                    //vid.addEventListener('video:paused', getVideoTitle);
                                    //WL update dataLayer to dataLayer
                                    vid.addEventListener('video:playing', function(e) {
                                        s.prop68 = s.eVar68 = e.detail.title;
                                        s.events = 'event81';
                                        s.linkTrackVars = 'events,prop68,eVar68';
                                        s.linkTrackEvents = 'event81';
                                        //WL - update to video:play from video:100
                                        s.tl(this, 'o', s.prop23 + ':video:play');
                                        dataLayer.events = s.events;
                                        var temp = JSON.parse(JSON.stringify(dataLayer));
                                        utag.link(temp);
                                        utag.DB("Video Event: video:play");
                                    });
                                    vid.addEventListener('video:ended', function(e) {
                                        s.prop68 = s.eVar68 = e.detail.title;
                                        s.events = 'event86';
                                        s.linkTrackVars = 'events,prop68,eVar68';
                                        s.linkTrackEvents = 'event86';
                                        s.tl(this, 'o', s.prop23 + ':video:100');
                                        dataLayer.events = s.events;
                                        var temp = JSON.parse(JSON.stringify(dataLayer));
                                        utag.link(temp);
                                        utag.DB("Video Event: video:100");
                                    });
                                    vid.addEventListener('video:reach75', function(e) {
                                        s.prop68 = s.eVar68 = e.detail.title;
                                        s.events = 'event84';
                                        s.linkTrackVars = 'events,prop68,eVar68';
                                        s.linkTrackEvents = 'event84';
                                        s.tl(this, 'o', s.prop23 + ':video:75');
                                        dataLayer.events = s.events;
                                        var temp = JSON.parse(JSON.stringify(dataLayer));
                                        utag.link(temp);
                                        utag.DB("Video Event: video:75");
                                    });
                                    vid.addEventListener('video:reach50', function(e) {
                                        s.prop68 = s.eVar68 = e.detail.title;
                                        s.events = 'event83';
                                        s.linkTrackVars = 'events,prop68,eVar68';
                                        s.linkTrackEvents = 'event83';
                                        s.tl(this, 'o', s.prop23 + ':video:50');
                                        dataLayer.events = s.events;
                                        var temp = JSON.parse(JSON.stringify(dataLayer));
                                        utag.link(temp);
                                        utag.DB("Video Event: video:50");
                                    });
                                    vid.addEventListener('video:reach25', function(e) {
                                        s.prop68 = s.eVar68 = e.detail.title;
                                        s.events = 'event82';
                                        s.linkTrackVars = 'events,prop68,eVar68';
                                        s.linkTrackEvents = 'event82';
                                        s.tl(this, 'o', s.prop23 + ':video:25');
                                        dataLayer.events = s.events;
                                        var temp = JSON.parse(JSON.stringify(dataLayer));
                                        utag.link(temp);
                                        utag.DB("Video Event: video:25");
                                    });
                                    vid.addEventListener('video:paused', function(e) {
                                        s.prop68 = s.eVar68 = e.detail.title;
                                        s.linkTrackVars = 'prop68,eVar68';
                                        s.tl(this, 'o', 'video:paused');
                                        dataLayer.events = s.events;
                                        var temp = JSON.parse(JSON.stringify(dataLayer));
                                        utag.link(temp);
                                        utag.DB("Video Event: video:paused");
                                    });
                                    vid.addEventListener('video:start', function(e) {
                                        s.tl(this, 'o', 'video:start');
                                        dataLayer.events = s.events;
                                        var temp = JSON.parse(JSON.stringify(dataLayer));
                                        utag.link(temp);
                                        utag.DB("Video Event: video:start");
                                    });
                                });
                            }
                            // function getVideoTitle(e) {
                            //     mazdaAnalytics.log('Video Title');
                            //     mazdaAnalytics.log(e.detail.title);
                            //     dataLayer.videoTitle = e.detail.title;
                            //     dataLayer.videoID = e.detail.youtubeID;
                            // }
                        } catch (e) {
                            utag.DB(e);
                        }
                    }
                }
            } catch (e) {
                utag.DB(e)
            }
        }
        , function(a, b) {
            try {
                if (b['dom.domain'].toString().toLowerCase().indexOf('mazdaespanol'.toLowerCase()) < 0) {
                    if (typeof b['full_page_value'] != 'undefined' && b['full_page_value'] != '') {
                        utag.DB("3PT - Set Full Page Dependent Values extension found a match!  3rd Party Tag values set as follows:");
                        utag.DB('3PT - DoubleClick Floodlight - floodlight_activity_group was set to: ' + b.full_page_value.split('|')[0]);
                        utag.DB('3PT - DoubleClick Floodlight - floodlight_activity was set to: ' + b.full_page_value.split('|')[1]);
                        utag.DB('3PT - amazon_fy152_value was set to: ' + b.full_page_value.split('|')[2]);
                        utag.DB('3PT - cbsi_value was set to: ' + b.full_page_value.split('|')[3]);
                        utag.DB('3PT - exp_fy152_value was set to: ' + b.full_page_value.split('|')[4]);
                        utag.DB('3PT - exponential_value was set to: ' + b.full_page_value.split('|')[5]);
                        utag.DB('3PT - exponential_deep_dive_value was set to: ' + b.full_page_value.split('|')[6]);
                        utag.DB('3PT - exponential_insights_pixel_value was set to: ' + b.full_page_value.split('|')[7]);
                        utag.DB('3PT - google_sem_value was set to: ' + b.full_page_value.split('|')[8]);
                        utag.DB('3PT - nativo_81618_value was set to: ' + b.full_page_value.split('|')[9]);
                        utag.DB('3PT - nativo_trusignal_value was set to: ' + b.full_page_value.split('|')[10]);
                        utag.DB('3PT - nativo_fy152_value was set to: ' + b.full_page_value.split('|')[11]);
                        utag.DB('3PT - nativo_cp_fy152_value was set to: ' + b.full_page_value.split('|')[12]);
                        utag.DB('3PT - nativo_fy153_value was set to: ' + b.full_page_value.split('|')[13]);
                        utag.DB('3PT - ten_value was set to: ' + b.full_page_value.split('|')[14]);
                        utag.DB('3PT - Trade Desk - tradedesk_fy152_value was set to: ' + b.full_page_value.split('|')[14]);
                        utag.DB('3PT - Trade Desk - tradedesk_fy152_decided_value was set to: ' + b.full_page_value.split('|')[16]);
                        utag.DB('3PT - Trade Desk - tradedesk_fy152_dreamer_value was set to: ' + b.full_page_value.split('|')[17]);
                        utag.DB('3PT - Trade Desk - tradedesk_fy152_shopper_value was set to: ' + b.full_page_value.split('|')[18]);
                        utag.DB('3PT - Trade Desk - tradedesk_fy152_shopper_v2_value was set to: ' + b.full_page_value.split('|')[18]);
                        utag.DB('3PT - Trade Desk - tradedesk_rt_fy152_value was set to: ' + b.full_page_value.split('|')[20]);
                        utag.DB('3PT - Facebook - facebook_event was set to: ' + b.full_page_value.split('|')[21]);
                        utag.DB('3PT - BlueKai - bk_event was set to: ' + b.full_page_value.split('|')[22]);
                        utag.DB('3PT - Snapchat - snap_event was set to: ' + b.full_page_value.split('|')[23]);
                        utag.DB('3PT - Pinterest - pintr_event was set to: ' + b.full_page_value.split('|')[24]);
                        utag.DB('3PT - Twitter - twitter_event was set to: ' + b.full_page_value.split('|')[25]);
                    } else {
                        utag.DB("3PT - Set Full Page Dependent Values FAILED to find a match!  3rd Party Tag values were not set!");
                    }
                }
            } catch (e) {
                utag.DB(e)
            }
        }
        , function(a, b) {
            try {
                if (b['dom.domain'].toString().toLowerCase().indexOf('mazdaespanol'.toLowerCase()) > -1) {
                    if (typeof b['full_page_value_esp'] != 'undefined' && b['full_page_value_esp'] != '') {
                        utag.DB("3PT - Set Full Page Dependent Values extension found a match!  3rd Party Tag values set as follows:");
                        utag.DB('3PT - DoubleClick Floodlight - floodlight_activity_group was set to: ' + b.full_page_value_esp.split('|')[0]);
                        utag.DB('3PT - DoubleClick Floodlight - floodlight_activity was set to: ' + b.full_page_value_esp.split('|')[1]);
                        utag.DB('3PT - amazon_fy152_value was set to: ' + b.full_page_value_esp.split('|')[2]);
                        utag.DB('3PT - cbsi_value was set to: ' + b.full_page_value_esp.split('|')[3]);
                        utag.DB('3PT - exp_fy152_value was set to: ' + b.full_page_value_esp.split('|')[4]);
                        utag.DB('3PT - exponential_value was set to: ' + b.full_page_value_esp.split('|')[5]);
                        utag.DB('3PT - exponential_deep_dive_value was set to: ' + b.full_page_value_esp.split('|')[6]);
                        utag.DB('3PT - exponential_insights_pixel_value was set to: ' + b.full_page_value_esp.split('|')[7]);
                        utag.DB('3PT - google_sem_value was set to: ' + b.full_page_value_esp.split('|')[8]);
                        utag.DB('3PT - nativo_81618_value was set to: ' + b.full_page_value_esp.split('|')[9]);
                        utag.DB('3PT - nativo_trusignal_value was set to: ' + b.full_page_value_esp.split('|')[10]);
                        utag.DB('3PT - nativo_fy152_value was set to: ' + b.full_page_value_esp.split('|')[11]);
                        utag.DB('3PT - nativo_cp_fy152_value was set to: ' + b.full_page_value_esp.split('|')[12]);
                        utag.DB('3PT - nativo_fy153_value was set to: ' + b.full_page_value_esp.split('|')[13]);
                        utag.DB('3PT - ten_value was set to: ' + b.full_page_value_esp.split('|')[14]);
                        utag.DB('3PT - Trade Desk - tradedesk_fy152_value was set to: ' + b.full_page_value_esp.split('|')[14]);
                        utag.DB('3PT - Trade Desk - tradedesk_fy152_decided_value was set to: ' + b.full_page_value_esp.split('|')[16]);
                        utag.DB('3PT - Trade Desk - tradedesk_fy152_dreamer_value was set to: ' + b.full_page_value_esp.split('|')[17]);
                        utag.DB('3PT - Trade Desk - tradedesk_fy152_shopper_value was set to: ' + b.full_page_value_esp.split('|')[18]);
                        utag.DB('3PT - Trade Desk - tradedesk_fy152_shopper_v2_value was set to: ' + b.full_page_value_esp.split('|')[18]);
                        utag.DB('3PT - Trade Desk - tradedesk_rt_fy152_value was set to: ' + b.full_page_value_esp.split('|')[20]);
                        utag.DB('3PT - Facebook - facebook_event was set to: ' + b.full_page_value_esp.split('|')[21]);
                        utag.DB('3PT - BlueKai - bk_event was set to: ' + b.full_page_value_esp.split('|')[22]);
                        utag.DB('3PT - Snapchat - snap_event was set to: ' + b.full_page_value_esp.split('|')[23]);
                        utag.DB('3PT - Pinterest - pintr_event was set to: ' + b.full_page_value_esp.split('|')[24]);
                        utag.DB('3PT - Twitter - twitter_event was set to: ' + b.full_page_value_esp.split('|')[25]);
                    } else {
                        utag.DB("3PT - Set Full Page Dependent Values FAILED to find a match!  3rd Party Tag values were not set!");
                    }
                }
            } catch (e) {
                utag.DB(e)
            }
        }
        ];
        utag.handler.cfg_extend = [{
            "end": 0,
            "blr": 1,
            "bwq": 0,
            "id": "3",
            "alr": 0
        }, {
            "end": 0,
            "blr": 1,
            "bwq": 0,
            "id": "5",
            "alr": 0
        }, {
            "blr": 1,
            "end": 0,
            "bwq": 0,
            "id": "8",
            "alr": 0
        }, {
            "id": "9",
            "end": 0,
            "blr": 1,
            "bwq": 0,
            "alr": 0
        }, {
            "alr": 0,
            "end": 0,
            "bwq": 0,
            "blr": 1,
            "id": "76"
        }, {
            "end": 0,
            "blr": 1,
            "bwq": 0,
            "id": "64",
            "alr": 0
        }, {
            "id": "77",
            "blr": 1,
            "end": 0,
            "bwq": 0,
            "alr": 0
        }, {
            "alr": 0,
            "id": "28",
            "end": 0,
            "bwq": 0,
            "blr": 1
        }, {
            "id": "78",
            "end": 0,
            "blr": 1,
            "bwq": 0,
            "alr": 0
        }, {
            "blr": 1,
            "end": 0,
            "bwq": 0,
            "id": "29",
            "alr": 0
        }, {
            "alr": 0,
            "id": "30",
            "bwq": 0,
            "end": 0,
            "blr": 1
        }, {
            "blr": 1,
            "end": 0,
            "bwq": 0,
            "id": "31",
            "alr": 0
        }, {
            "id": "32",
            "blr": 1,
            "end": 0,
            "bwq": 0,
            "alr": 0
        }, {
            "blr": 1,
            "end": 0,
            "bwq": 0,
            "id": "34",
            "alr": 0
        }, {
            "id": "35",
            "blr": 1,
            "end": 0,
            "bwq": 0,
            "alr": 0
        }, {
            "end": 0,
            "blr": 1,
            "bwq": 0,
            "id": "36",
            "alr": 0
        }, {
            "id": "37",
            "end": 0,
            "blr": 1,
            "bwq": 0,
            "alr": 0
        }, {
            "id": "38",
            "end": 0,
            "blr": 1,
            "bwq": 0,
            "alr": 0
        }, {
            "alr": 0,
            "bwq": 0,
            "end": 0,
            "blr": 1,
            "id": "39"
        }, {
            "alr": 0,
            "end": 0,
            "bwq": 0,
            "blr": 1,
            "id": "40"
        }, {
            "id": "41",
            "end": 0,
            "blr": 1,
            "bwq": 0,
            "alr": 0
        }, {
            "blr": 1,
            "end": 0,
            "bwq": 0,
            "id": "42",
            "alr": 0
        }, {
            "alr": 0,
            "bwq": 0,
            "end": 0,
            "blr": 1,
            "id": "43"
        }, {
            "id": "44",
            "end": 0,
            "blr": 1,
            "bwq": 0,
            "alr": 0
        }, {
            "alr": 0,
            "id": "70",
            "bwq": 0,
            "end": 0,
            "blr": 1
        }, {
            "end": 0,
            "blr": 1,
            "bwq": 0,
            "id": "71",
            "alr": 0
        }, {
            "alr": 0,
            "bwq": 0,
            "end": 1,
            "blr": 0,
            "id": "56"
        }, {
            "alr": 1,
            "bwq": 0,
            "end": 0,
            "blr": 0,
            "id": "58"
        }, {
            "id": "79",
            "end": 0,
            "blr": 0,
            "bwq": 0,
            "alr": 1
        }];
        utag.loader.initcfg = function() {
            utag.loader.cfg = {
                "54": {
                    load: 4,
                    send: 1,
                    v: 201904042253,
                    wait: 0,
                    tid: 1191
                },
                "1": {
                    load: 1,
                    send: 1,
                    v: 201904042253,
                    wait: 1,
                    tid: 2045
                },
                "8": {
                    load: 1,
                    send: 1,
                    v: 201904041710,
                    wait: 1,
                    tid: 22024
                },
                "9": {
                    load: 1,
                    send: 1,
                    v: 201904041710,
                    wait: 1,
                    tid: 13068
                },
                "10": {
                    load: 1,
                    send: 1,
                    v: 201904041710,
                    wait: 1,
                    tid: 19003
                },
                "12": {
                    load: 1,
                    send: 1,
                    v: 201904042253,
                    wait: 1,
                    tid: 1068
                },
                "14": {
                    load: 1,
                    send: 1,
                    v: 201904042330,
                    wait: 1,
                    tid: 6026
                },
                "19": {
                    load: 1,
                    send: 1,
                    v: 201904041710,
                    wait: 1,
                    tid: 7133
                },
                "20": {
                    load: 1,
                    send: 1,
                    v: 201904041710,
                    wait: 1,
                    tid: 4049
                },
                "21": {
                    load: 1,
                    send: 1,
                    v: 201904041710,
                    wait: 1,
                    tid: 20067
                },
                "22": {
                    load: 1,
                    send: 1,
                    v: 201903062051,
                    wait: 1,
                    tid: 7132
                },
                "25": {
                    load: 1,
                    send: 1,
                    v: 201904042330,
                    wait: 1,
                    tid: 2011
                },
                "28": {
                    load: utag.cond[2],
                    send: 1,
                    v: 201904042330,
                    wait: 1,
                    tid: 20067
                },
                "29": {
                    load: utag.cond[3],
                    send: 1,
                    v: 201904042330,
                    wait: 1,
                    tid: 20067
                },
                "34": {
                    load: utag.cond[5],
                    send: 1,
                    v: 201904042330,
                    wait: 1,
                    tid: 7132
                },
                "35": {
                    load: utag.cond[6],
                    send: 1,
                    v: 201904042330,
                    wait: 1,
                    tid: 20067
                },
                "36": {
                    load: utag.cond[7],
                    send: 1,
                    v: 201904042330,
                    wait: 1,
                    tid: 20067
                },
                "37": {
                    load: utag.cond[8],
                    send: 1,
                    v: 201904042330,
                    wait: 1,
                    tid: 20067
                },
                "38": {
                    load: utag.cond[9],
                    send: 1,
                    v: 201904042330,
                    wait: 1,
                    tid: 20067
                },
                "39": {
                    load: (utag.cond[9] || utag.cond[10]),
                    send: 1,
                    v: 201904042330,
                    wait: 1,
                    tid: 20067
                },
                "40": {
                    load: utag.cond[10],
                    send: 1,
                    v: 201904042330,
                    wait: 1,
                    tid: 20067
                },
                "41": {
                    load: utag.cond[11],
                    send: 1,
                    v: 201904042330,
                    wait: 1,
                    tid: 20067
                },
                "42": {
                    load: (utag.cond[12] || utag.cond[13] || utag.cond[14]),
                    send: 1,
                    v: 201904042330,
                    wait: 1,
                    tid: 20067
                },
                "43": {
                    load: utag.cond[15],
                    send: 1,
                    v: 201904042330,
                    wait: 1,
                    tid: 20067
                },
                "44": {
                    load: utag.cond[16],
                    send: 1,
                    v: 201904042330,
                    wait: 1,
                    tid: 20067
                },
                "45": {
                    load: utag.cond[17],
                    send: 1,
                    v: 201904042330,
                    wait: 1,
                    tid: 20067
                },
                "61": {
                    load: utag.cond[23],
                    send: 1,
                    v: 201904042330,
                    wait: 1,
                    tid: 20067
                },
                "62": {
                    load: utag.cond[22],
                    send: 1,
                    v: 201904042330,
                    wait: 1,
                    tid: 20067
                },
                "47": {
                    load: utag.cond[19],
                    send: 1,
                    v: 201904042330,
                    wait: 1,
                    tid: 20067
                },
                "48": {
                    load: 1,
                    send: 1,
                    v: 201904042330,
                    wait: 1,
                    tid: 20103
                },
                "53": {
                    load: 1,
                    send: 1,
                    v: 201904052329,
                    wait: 1,
                    tid: 19063
                },
                "55": {
                    load: 1,
                    send: 1,
                    v: 201904042330,
                    wait: 1,
                    tid: 16044
                },
                "56": {
                    load: 1,
                    send: 1,
                    v: 201904042330,
                    wait: 1,
                    tid: 19129
                },
                "57": {
                    load: utag.cond[20],
                    send: 1,
                    v: 201904042330,
                    wait: 1,
                    tid: 20078
                },
                "60": {
                    load: 1,
                    send: 1,
                    v: 201904041722,
                    wait: 1,
                    tid: 20067
                },
                "63": {
                    load: utag.cond[24],
                    send: 1,
                    v: 201904091514,
                    wait: 1,
                    tid: 20010
                }
            };
            utag.loader.cfgsort = ["54", "1", "8", "9", "10", "12", "14", "19", "20", "21", "22", "25", "28", "29", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "61", "62", "47", "48", "53", "55", "56", "57", "60", "63"];
        }
        utag.loader.initcfg();
    }
    if (typeof utag_cfg_ovrd != 'undefined') {
        for (utag._i in utag.loader.GV(utag_cfg_ovrd))
            utag.cfg[utag._i] = utag_cfg_ovrd[utag._i]
    }
    ;utag.loader.PINIT = function(a, b, c) {
        utag.DB("Pre-INIT");
        if (utag.cfg.noload) {
            return;
        }
        try {
            this.GET();
            if (utag.handler.RE('view', utag.data, "blr")) {
                utag.handler.LR(utag.data);
            }
        } catch (e) {
            utag.DB(e)
        }
        ;a = this.cfg;
        c = 0;
        for (b in this.GV(a)) {
            if (a[b].block == 1 || (a[b].load > 0 && (typeof a[b].src != 'undefined' && a[b].src != ''))) {
                a[b].block = 1;
                c = 1;
                this.bq[b] = 1;
            }
        }
        if (c == 1) {
            for (b in this.GV(a)) {
                if (a[b].block) {
                    a[b].id = b;
                    if (a[b].load == 4)
                        a[b].load = 1;
                    a[b].cb = function() {
                        var d = this.uid;
                        utag.loader.cfg[d].cbf = 1;
                        utag.loader.LOAD(d)
                    }
                    ;
                    this.AS(a[b]);
                }
            }
        }
        if (c == 0)
            this.INIT();
    }
    ;
    utag.loader.INIT = function(a, b, c, d, e) {
        utag.DB('utag.loader.INIT');
        if (this.ol == 1)
            return -1;
        else
            this.ol = 1;
        if (utag.cfg.noview != true)
            utag.handler.RE('view', utag.data, "alr");
        utag.rpt.ts['i'] = new Date();
        d = this.cfgsort;
        for (a = 0; a < d.length; a++) {
            e = d[a];
            b = this.cfg[e];
            b.id = e;
            if (b.block != 1) {
                if (utag.loader.bk[b.id] || ((utag.cfg.readywait || utag.cfg.noview) && b.load == 4)) {
                    this.f[b.id] = 0;
                    utag.loader.LOAD(b.id)
                } else if (b.wait == 1 && utag.loader.rf == 0) {
                    utag.DB('utag.loader.INIT: waiting ' + b.id);
                    this.wq.push(b)
                    this.f[b.id] = 2;
                } else if (b.load > 0) {
                    utag.DB('utag.loader.INIT: loading ' + b.id);
                    this.lq.push(b);
                    this.AS(b);
                }
            }
        }
        if (this.wq.length > 0)
            utag.loader.EV('', 'ready', function(a) {
                if (utag.loader.rf == 0) {
                    utag.DB('READY:utag.loader.wq');
                    utag.loader.rf = 1;
                    utag.loader.WQ();
                }
            });
        else if (this.lq.length > 0)
            utag.loader.rf = 1;
        else if (this.lq.length == 0)
            utag.loader.END();
        return 1
    }
    ;
    utag.loader.EV('', 'ready', function(a) {
        if (utag.loader.efr != 1) {
            utag.loader.efr = 1;
            try {
                if (typeof utag.runonce == 'undefined')
                    utag.runonce = {};
                utag.jdh = function(h, i, j, k) {
                    h = utag.jdhc.length;
                    if (h == 0)
                        window.clearInterval(utag.jdhi);
                    else {
                        for (i = 0; i < h; i++) {
                            j = utag.jdhc[i];
                            k = jQuery(j.i).is(":visible") ? 1 : 0;
                            if (k != j.s) {
                                if (j.e == (j.s = k))
                                    jQuery(j.i).trigger(j.e ? "afterShow" : "afterHide")
                            }
                        }
                    }
                }
                ;
                utag.jdhi = window.setInterval(utag.jdh, 250);
                utag.jdhc = [];
                if (utag.data['dom.pathname'].toString().toLowerCase().indexOf('/shopping-tools/reserve-a-test-drive'.toLowerCase()) > -1) {
                    if (typeof utag.runonce[67] == 'undefined') {
                        utag.runonce[67] = 1;
                        utag.jdhc.push({
                            i: 'div[class="mdp-veh-inquiry__summary"][style*="visibility: visible"]',
                            e: 1
                        });
                        jQuery(document.body).on('afterShow', 'div[class="mdp-veh-inquiry__summary"][style*="visibility: visible"]', function(e) {
                            if (jQuery('div[class="mdp-veh-inquiry__summary"][style*="visibility: visible"]').is(':visible')) {
                                dataLayer.page.name = "reserve_a_test_drive_confirm";
                                dataLayer.page.nameHistorical = "";
                                dataLayer.site.section = "tools";
                                dataLayer.site.sectionHistorical = "";
                                dataLayer.site.subsection = "test_drive";
                                dataLayer.form.name = "test_drive_form";
                                dataLayer.form.type = "schedule";
                                s.events += ",event282,event283";
                                dataLayer.events = "event282,event283";
                                s.t();
                                var temp = JSON.parse(JSON.stringify(dataLayer));
                                utag.view(temp);
                            }
                        })
                    }
                }
            } catch (e) {
                utag.DB(e)
            }
            ;
        }
    })
    if (utag.cfg.readywait || utag.cfg.waittimer) {
        utag.loader.EV('', 'ready', function(a) {
            if (utag.loader.rf == 0) {
                utag.loader.rf = 1;
                utag.cfg.readywait = 1;
                utag.DB('READY:utag.cfg.readywait');
                setTimeout(function() {
                    utag.loader.PINIT()
                }, utag.cfg.waittimer || 1);
            }
        })
    } else {
        utag.loader.PINIT()
    }
}
//tealium universal tag - utag.54 ut4.0.201904091522, Copyright 2019 Tealium.com Inc. All Rights Reserved.
var e = function() {
    "use strict";
    function e() {
        return {
            callbacks: {},
            add: function(e, t) {
                this.callbacks[e] = this.callbacks[e] || [];
                var i = this.callbacks[e].push(t) - 1;
                return function() {
                    this.callbacks[e].splice(i, 1)
                }
            },
            execute: function(e, t) {
                if (this.callbacks[e]) {
                    t = void 0 === t ? [] : t,
                    t = t instanceof Array ? t : [t];
                    try {
                        for (; this.callbacks[e].length; ) {
                            var i = this.callbacks[e].shift();
                            "function" == typeof i ? i.apply(null, t) : i instanceof Array && i[1].apply(i[0], t)
                        }
                        delete this.callbacks[e]
                    } catch (e) {}
                }
            },
            executeAll: function(e, t) {
                (t || e && !v.isObjectEmpty(e)) && Object.keys(this.callbacks).forEach(function(t) {
                    var i = void 0 !== e[t] ? e[t] : "";
                    this.execute(t, i)
                }, this)
            },
            hasCallbacks: function() {
                return Boolean(Object.keys(this.callbacks).length)
            }
        }
    }
    function t(e) {
        for (var t = /^\d+$/, i = 0, n = e.length; i < n; i++)
            if (!t.test(e[i]))
                return !1;
        return !0
    }
    function i(e, t) {
        for (; e.length < t.length; )
            e.push("0");
        for (; t.length < e.length; )
            t.push("0")
    }
    function n(e, t) {
        for (var i = 0; i < e.length; i++) {
            var n = parseInt(e[i], 10)
              , r = parseInt(t[i], 10);
            if (n > r)
                return 1;
            if (r > n)
                return -1
        }
        return 0
    }
    function r(e, r) {
        if (e === r)
            return 0;
        var a = e.toString().split(".")
          , s = r.toString().split(".");
        return t(a.concat(s)) ? (i(a, s),
        n(a, s)) : NaN
    }
    var a = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
    Object.assign = Object.assign || function(e) {
        for (var t, i, n = 1; n < arguments.length; ++n) {
            i = arguments[n];
            for (t in i)
                Object.prototype.hasOwnProperty.call(i, t) && (e[t] = i[t])
        }
        return e
    }
    ;
    var s = {
        HANDSHAKE: "HANDSHAKE",
        GETSTATE: "GETSTATE",
        PARENTSTATE: "PARENTSTATE"
    }
      , o = {
        MCMID: "MCMID",
        MCAID: "MCAID",
        MCAAMB: "MCAAMB",
        MCAAMLH: "MCAAMLH",
        MCOPTOUT: "MCOPTOUT",
        CUSTOMERIDS: "CUSTOMERIDS"
    }
      , l = {
        MCMID: "getMarketingCloudVisitorID",
        MCAID: "getAnalyticsVisitorID",
        MCAAMB: "getAudienceManagerBlob",
        MCAAMLH: "getAudienceManagerLocationHint",
        MCOPTOUT: "getOptOut"
    }
      , d = {
        CUSTOMERIDS: "getCustomerIDs"
    }
      , c = {
        MCMID: "getMarketingCloudVisitorID",
        MCAAMB: "getAudienceManagerBlob",
        MCAAMLH: "getAudienceManagerLocationHint",
        MCOPTOUT: "getOptOut",
        MCAID: "getAnalyticsVisitorID",
        CUSTOMERIDS: "getCustomerIDs"
    }
      , u = {
        MC: "MCMID",
        A: "MCAID",
        AAM: "MCAAMB"
    }
      , f = {
        MCMID: "MCMID",
        MCOPTOUT: "MCOPTOUT",
        MCAID: "MCAID",
        MCAAMLH: "MCAAMLH",
        MCAAMB: "MCAAMB"
    }
      , g = {
        UNKNOWN: 0,
        AUTHENTICATED: 1,
        LOGGED_OUT: 2
    }
      , m = {
        GLOBAL: "global"
    }
      , _ = {
        MESSAGES: s,
        STATE_KEYS_MAP: o,
        ASYNC_API_MAP: l,
        SYNC_API_MAP: d,
        ALL_APIS: c,
        FIELDGROUP_TO_FIELD: u,
        FIELDS: f,
        AUTH_STATE: g,
        OPT_OUT: m
    }
      , h = _.STATE_KEYS_MAP
      , p = function(e) {
        function t() {}
        function i(t, i) {
            var n = this;
            return function() {
                var t = e(0, h.MCMID)
                  , r = {};
                return r[h.MCMID] = t,
                n.setStateAndPublish(r),
                i(t),
                t
            }
        }
        this.getMarketingCloudVisitorID = function(e) {
            e = e || t;
            var n = this.findField(h.MCMID, e)
              , r = i.call(this, h.MCMID, e);
            return void 0 !== n ? n : r()
        }
    }
      , C = _.MESSAGES
      , S = _.ASYNC_API_MAP
      , I = _.SYNC_API_MAP
      , D = function() {
        function e() {}
        function t(e, t) {
            var i = this;
            return function() {
                return i.callbackRegistry.add(e, t),
                i.messageParent(C.GETSTATE),
                ""
            }
        }
        function i(i) {
            this[S[i]] = function(n) {
                n = n || e;
                var r = this.findField(i, n)
                  , a = t.call(this, i, n);
                return void 0 !== r ? r : a()
            }
        }
        function n(t) {
            this[I[t]] = function() {
                return this.findField(t, e) || {}
            }
        }
        Object.keys(S).forEach(i, this),
        Object.keys(I).forEach(n, this)
    }
      , A = _.ASYNC_API_MAP
      , M = function() {
        Object.keys(A).forEach(function(e) {
            this[A[e]] = function(t) {
                this.callbackRegistry.add(e, t)
            }
        }, this)
    }
      , v = function(e, t) {
        return t = {
            exports: {}
        },
        e(t, t.exports),
        t.exports
    }(function(e, t) {
        t.isObjectEmpty = function(e) {
            return e === Object(e) && 0 === Object.keys(e).length
        }
        ,
        t.isValueEmpty = function(e) {
            return "" === e || t.isObjectEmpty(e)
        }
        ,
        t.getIeVersion = function() {
            if (document.documentMode)
                return document.documentMode;
            for (var e = 7; e > 4; e--) {
                var t = document.createElement("div");
                if (t.innerHTML = "\x3c!--[if IE " + e + "]><span></span><![endif]--\x3e",
                t.getElementsByTagName("span").length)
                    return t = null,
                    e;
                t = null
            }
            return null
        }
        ,
        t.encodeAndBuildRequest = function(e, t) {
            return e.map(encodeURIComponent).join(t)
        }
        ,
        t.isObject = function(e) {
            return null !== e && "object" == typeof e && !1 === Array.isArray(e)
        }
    })
      , y = (v.isObjectEmpty,
    v.isValueEmpty,
    v.getIeVersion,
    v.encodeAndBuildRequest,
    v.isObject,
    e)
      , b = _.MESSAGES
      , T = {
        0: "prefix",
        1: "orgID",
        2: "state"
    }
      , k = function(e, t) {
        this.parse = function(e) {
            try {
                var t = {};
                return e.data.split("|").forEach(function(e, i) {
                    if (void 0 !== e) {
                        t[T[i]] = 2 !== i ? e : JSON.parse(e)
                    }
                }),
                t
            } catch (e) {}
        }
        ,
        this.isInvalid = function(i) {
            var n = this.parse(i);
            if (!n || Object.keys(n).length < 2)
                return !0;
            var r = e !== n.orgID
              , a = !t || i.origin !== t
              , s = -1 === Object.keys(b).indexOf(n.prefix);
            return r || a || s
        }
        ,
        this.send = function(i, n, r) {
            var a = n + "|" + e;
            r && r === Object(r) && (a += "|" + JSON.stringify(r));
            try {
                i.postMessage(a, t)
            } catch (e) {}
        }
    }
      , O = _.MESSAGES
      , E = function(e, t, i, n) {
        function r(e) {
            Object.assign(m, e)
        }
        function s(e) {
            Object.assign(m.state, e),
            m.callbackRegistry.executeAll(m.state)
        }
        function o(e) {
            if (!C.isInvalid(e)) {
                h = !1;
                var t = C.parse(e);
                m.setStateAndPublish(t.state)
            }
        }
        function l(e) {
            !h && _ && (h = !0,
            C.send(n, e))
        }
        function d() {
            r(new p(i._generateID)),
            m.getMarketingCloudVisitorID(),
            m.callbackRegistry.executeAll(m.state, !0),
            a.removeEventListener("message", c)
        }
        function c(e) {
            if (!C.isInvalid(e)) {
                var t = C.parse(e);
                h = !1,
                a.clearTimeout(m._handshakeTimeout),
                a.removeEventListener("message", c),
                r(new D(m)),
                a.addEventListener("message", o),
                m.setStateAndPublish(t.state),
                m.callbackRegistry.hasCallbacks() && l(O.GETSTATE)
            }
        }
        function u() {
            _ && postMessage ? (a.addEventListener("message", c),
            l(O.HANDSHAKE),
            m._handshakeTimeout = setTimeout(d, 250)) : d()
        }
        function f() {
            a.s_c_in || (a.s_c_il = [],
            a.s_c_in = 0),
            m._c = "Visitor",
            m._il = a.s_c_il,
            m._in = a.s_c_in,
            m._il[m._in] = m,
            a.s_c_in++
        }
        function g() {
            function e(e) {
                0 !== e.indexOf("_") && "function" == typeof i[e] && (m[e] = function() {}
                )
            }
            Object.keys(i).forEach(e),
            m.getSupplementalDataID = i.getSupplementalDataID
        }
        var m = this
          , _ = t.whitelistParentDomain;
        m.state = {},
        m.version = i.version,
        m.marketingCloudOrgID = e,
        m.cookieDomain = i.cookieDomain || "",
        m._instanceType = "child";
        var h = !1
          , C = new k(e,_);
        m.callbackRegistry = y(),
        m.init = function() {
            f(),
            g(),
            r(new M(m)),
            u()
        }
        ,
        m.findField = function(e, t) {
            if (m.state[e])
                return t(m.state[e]),
                m.state[e]
        }
        ,
        m.messageParent = l,
        m.setStateAndPublish = s
    }
      , L = _.MESSAGES
      , P = _.ALL_APIS
      , R = _.ASYNC_API_MAP
      , F = _.FIELDGROUP_TO_FIELD
      , w = function(e, t) {
        function i() {
            var t = {};
            return Object.keys(P).forEach(function(i) {
                var n = P[i]
                  , r = e[n]();
                v.isValueEmpty(r) || (t[i] = r)
            }),
            t
        }
        function n() {
            var t = [];
            return e._loading && Object.keys(e._loading).forEach(function(i) {
                if (e._loading[i]) {
                    var n = F[i];
                    t.push(n)
                }
            }),
            t.length ? t : null
        }
        function r(t) {
            return function i(r) {
                var a = n();
                if (a) {
                    var s = R[a[0]];
                    e[s](i, !0)
                } else
                    t()
            }
        }
        function a(e, n) {
            var r = i();
            t.send(e, n, r)
        }
        function s(e) {
            l(e),
            a(e, L.HANDSHAKE)
        }
        function o(e) {
            r(function() {
                a(e, L.PARENTSTATE)
            })()
        }
        function l(i) {
            function n(n) {
                r.call(e, n),
                t.send(i, L.PARENTSTATE, {
                    CUSTOMERIDS: e.getCustomerIDs()
                })
            }
            var r = e.setCustomerIDs;
            e.setCustomerIDs = n
        }
        return function(e) {
            if (!t.isInvalid(e)) {
                (t.parse(e).prefix === L.HANDSHAKE ? s : o)(e.source)
            }
        }
    }
      , V = function(e, t) {
        function i(e) {
            return function(i) {
                n[e] = i,
                r++,
                r === a && t(n)
            }
        }
        var n = {}
          , r = 0
          , a = Object.keys(e).length;
        Object.keys(e).forEach(function(t) {
            var n = e[t];
            if (n.fn) {
                var r = n.args || [];
                r.unshift(i(t)),
                n.fn.apply(n.context || null, r)
            }
        })
    }
      , N = function(e) {
        var t;
        if (!e && a.location && (e = a.location.hostname),
        t = e)
            if (/^[0-9.]+$/.test(t))
                t = "";
            else {
                var i = ",ac,ad,ae,af,ag,ai,al,am,an,ao,aq,ar,as,at,au,aw,ax,az,ba,bb,be,bf,bg,bh,bi,bj,bm,bo,br,bs,bt,bv,bw,by,bz,ca,cc,cd,cf,cg,ch,ci,cl,cm,cn,co,cr,cu,cv,cw,cx,cz,de,dj,dk,dm,do,dz,ec,ee,eg,es,et,eu,fi,fm,fo,fr,ga,gb,gd,ge,gf,gg,gh,gi,gl,gm,gn,gp,gq,gr,gs,gt,gw,gy,hk,hm,hn,hr,ht,hu,id,ie,im,in,io,iq,ir,is,it,je,jo,jp,kg,ki,km,kn,kp,kr,ky,kz,la,lb,lc,li,lk,lr,ls,lt,lu,lv,ly,ma,mc,md,me,mg,mh,mk,ml,mn,mo,mp,mq,mr,ms,mt,mu,mv,mw,mx,my,na,nc,ne,nf,ng,nl,no,nr,nu,nz,om,pa,pe,pf,ph,pk,pl,pm,pn,pr,ps,pt,pw,py,qa,re,ro,rs,ru,rw,sa,sb,sc,sd,se,sg,sh,si,sj,sk,sl,sm,sn,so,sr,st,su,sv,sx,sy,sz,tc,td,tf,tg,th,tj,tk,tl,tm,tn,to,tp,tr,tt,tv,tw,tz,ua,ug,uk,us,uy,uz,va,vc,ve,vg,vi,vn,vu,wf,ws,yt,"
                  , n = t.split(".")
                  , r = n.length - 1
                  , s = r - 1;
                if (r > 1 && n[r].length <= 2 && (2 === n[r - 1].length || i.indexOf("," + n[r] + ",") < 0) && s--,
                s > 0)
                    for (t = ""; r >= s; )
                        t = n[r] + (t ? "." : "") + t,
                        r--
            }
        return t
    }
      , x = {
        compare: r,
        isLessThan: function(e, t) {
            return r(e, t) < 0
        },
        areVersionsDifferent: function(e, t) {
            return 0 !== r(e, t)
        },
        isGreaterThan: function(e, t) {
            return r(e, t) > 0
        },
        isEqual: function(e, t) {
            return 0 === r(e, t)
        }
    }
      , j = !!a.postMessage
      , U = {
        postMessage: function(e, t, i) {
            var n = 1;
            t && (j ? i.postMessage(e, t.replace(/([^:]+:\/\/[^\/]+).*/, "$1")) : t && (i.location = t.replace(/#.*$/, "") + "#" + +new Date + n++ + "&" + e))
        },
        receiveMessage: function(e, t) {
            var i;
            try {
                j && (e && (i = function(i) {
                    if ("string" == typeof t && i.origin !== t || "[object Function]" === Object.prototype.toString.call(t) && !1 === t(i.origin))
                        return !1;
                    e(i)
                }
                ),
                a.addEventListener ? a[e ? "addEventListener" : "removeEventListener"]("message", i) : a[e ? "attachEvent" : "detachEvent"]("onmessage", i))
            } catch (e) {}
        }
    }
      , H = function(e) {
        var t, i, n = "0123456789", r = "", a = "", s = 8, o = 10, l = 10;
        if (1 == e) {
            for (n += "ABCDEF",
            t = 0; 16 > t; t++)
                i = Math.floor(Math.random() * s),
                r += n.substring(i, i + 1),
                i = Math.floor(Math.random() * s),
                a += n.substring(i, i + 1),
                s = 16;
            return r + "-" + a
        }
        for (t = 0; 19 > t; t++)
            i = Math.floor(Math.random() * o),
            r += n.substring(i, i + 1),
            0 === t && 9 == i ? o = 3 : (1 == t || 2 == t) && 10 != o && 2 > i ? o = 10 : 2 < t && (o = 10),
            i = Math.floor(Math.random() * l),
            a += n.substring(i, i + 1),
            0 === t && 9 == i ? l = 3 : (1 == t || 2 == t) && 10 != l && 2 > i ? l = 10 : 2 < t && (l = 10);
        return r + a
    }
      , B = function(e, t) {
        return {
            corsMetadata: function() {
                var e = "none"
                  , t = !0;
                return "undefined" != typeof XMLHttpRequest && XMLHttpRequest === Object(XMLHttpRequest) && ("withCredentials"in new XMLHttpRequest ? e = "XMLHttpRequest" : "undefined" != typeof XDomainRequest && XDomainRequest === Object(XDomainRequest) && (t = !1),
                Object.prototype.toString.call(a.HTMLElement).indexOf("Constructor") > 0 && (t = !1)),
                {
                    corsType: e,
                    corsCookiesEnabled: t
                }
            }(),
            getCORSInstance: function() {
                return "none" === this.corsMetadata.corsType ? null : new a[this.corsMetadata.corsType]
            },
            fireCORS: function(t, i, n) {
                function r(e) {
                    var i;
                    try {
                        if ((i = JSON.parse(e)) !== Object(i))
                            return void s.handleCORSError(t, null, "Response is not JSON")
                    } catch (e) {
                        return void s.handleCORSError(t, e, "Error parsing response as JSON")
                    }
                    try {
                        for (var n = t.callback, r = a, o = 0; o < n.length; o++)
                            r = r[n[o]];
                        r(i)
                    } catch (e) {
                        s.handleCORSError(t, e, "Error forming callback function")
                    }
                }
                var s = this;
                i && (t.loadErrorHandler = i);
                try {
                    var o = this.getCORSInstance();
                    o.open("get", t.corsUrl + "&ts=" + (new Date).getTime(), !0),
                    "XMLHttpRequest" === this.corsMetadata.corsType && (o.withCredentials = !0,
                    o.timeout = e.loadTimeout,
                    o.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"),
                    o.onreadystatechange = function() {
                        4 === this.readyState && 200 === this.status && r(this.responseText)
                    }
                    ),
                    o.onerror = function(e) {
                        s.handleCORSError(t, e, "onerror")
                    }
                    ,
                    o.ontimeout = function(e) {
                        s.handleCORSError(t, e, "ontimeout")
                    }
                    ,
                    o.send(),
                    e._log.requests.push(t.corsUrl)
                } catch (e) {
                    this.handleCORSError(t, e, "try-catch")
                }
            },
            handleCORSError: function(t, i, n) {
                e.CORSErrors.push({
                    corsData: t,
                    error: i,
                    description: n
                }),
                t.loadErrorHandler && ("ontimeout" === n ? t.loadErrorHandler(!0) : t.loadErrorHandler(!1))
            }
        }
    }
      , G = {
        POST_MESSAGE_ENABLED: !!a.postMessage,
        DAYS_BETWEEN_SYNC_ID_CALLS: 1,
        MILLIS_PER_DAY: 864e5,
        ADOBE_MC: "adobe_mc",
        ADOBE_MC_SDID: "adobe_mc_sdid",
        VALID_VISITOR_ID_REGEX: /^[0-9a-fA-F\-]+$/,
        ADOBE_MC_TTL_IN_MIN: 5,
        VERSION_REGEX: /vVersion\|((\d+\.)?(\d+\.)?(\*|\d+))(?=$|\|)/
    }
      , q = function(e, t) {
        var i = a.document;
        return {
            THROTTLE_START: 3e4,
            MAX_SYNCS_LENGTH: 649,
            throttleTimerSet: !1,
            id: null,
            onPagePixels: [],
            iframeHost: null,
            getIframeHost: function(e) {
                if ("string" == typeof e) {
                    var t = e.split("/");
                    return t[0] + "//" + t[2]
                }
            },
            subdomain: null,
            url: null,
            getUrl: function() {
                var t, n = "http://fast.", r = "?d_nsid=" + e.idSyncContainerID + "#" + encodeURIComponent(i.location.origin);
                return this.subdomain || (this.subdomain = "nosubdomainreturned"),
                e.loadSSL && (n = e.idSyncSSLUseAkamai ? "https://fast." : "https://"),
                t = n + this.subdomain + ".demdex.net/dest5.html" + r,
                this.iframeHost = this.getIframeHost(t),
                this.id = "destination_publishing_iframe_" + this.subdomain + "_" + e.idSyncContainerID,
                t
            },
            checkDPIframeSrc: function() {
                var t = "?d_nsid=" + e.idSyncContainerID + "#" + encodeURIComponent(i.location.href);
                "string" == typeof e.dpIframeSrc && e.dpIframeSrc.length && (this.id = "destination_publishing_iframe_" + (e._subdomain || this.subdomain || (new Date).getTime()) + "_" + e.idSyncContainerID,
                this.iframeHost = this.getIframeHost(e.dpIframeSrc),
                this.url = e.dpIframeSrc + t)
            },
            idCallNotProcesssed: null,
            doAttachIframe: !1,
            startedAttachingIframe: !1,
            iframeHasLoaded: null,
            iframeIdChanged: null,
            newIframeCreated: null,
            originalIframeHasLoadedAlready: null,
            iframeLoadedCallbacks: [],
            regionChanged: !1,
            timesRegionChanged: 0,
            sendingMessages: !1,
            messages: [],
            messagesPosted: [],
            messagesReceived: [],
            messageSendingInterval: G.POST_MESSAGE_ENABLED ? null : 100,
            jsonForComparison: [],
            jsonDuplicates: [],
            jsonWaiting: [],
            jsonProcessed: [],
            canSetThirdPartyCookies: !0,
            receivedThirdPartyCookiesNotification: !1,
            readyToAttachIframePreliminary: function() {
                return !(e.idSyncDisableSyncs || e.disableIdSyncs || e.idSyncDisable3rdPartySyncing || e.disableThirdPartyCookies || e.disableThirdPartyCalls)
            },
            readyToAttachIframe: function() {
                return this.readyToAttachIframePreliminary() && (this.doAttachIframe || e._doAttachIframe) && (this.subdomain && "nosubdomainreturned" !== this.subdomain || e._subdomain) && this.url && !this.startedAttachingIframe
            },
            attachIframe: function() {
                function e() {
                    r = i.createElement("iframe"),
                    r.sandbox = "allow-scripts allow-same-origin",
                    r.title = "Adobe ID Syncing iFrame",
                    r.id = n.id,
                    r.name = n.id + "_name",
                    r.style.cssText = "display: none; width: 0; height: 0;",
                    r.src = n.url,
                    n.newIframeCreated = !0,
                    t(),
                    i.body.appendChild(r)
                }
                function t(e) {
                    r.addEventListener("load", function() {
                        r.className = "aamIframeLoaded",
                        n.iframeHasLoaded = !0,
                        n.fireIframeLoadedCallbacks(e),
                        n.requestToProcess()
                    })
                }
                this.startedAttachingIframe = !0;
                var n = this
                  , r = i.getElementById(this.id);
                r ? "IFRAME" !== r.nodeName ? (this.id += "_2",
                this.iframeIdChanged = !0,
                e()) : (this.newIframeCreated = !1,
                "aamIframeLoaded" !== r.className ? (this.originalIframeHasLoadedAlready = !1,
                t("The destination publishing iframe already exists from a different library, but hadn't loaded yet.")) : (this.originalIframeHasLoadedAlready = !0,
                this.iframeHasLoaded = !0,
                this.iframe = r,
                this.fireIframeLoadedCallbacks("The destination publishing iframe already exists from a different library, and had loaded alresady."),
                this.requestToProcess())) : e(),
                this.iframe = r
            },
            fireIframeLoadedCallbacks: function(e) {
                this.iframeLoadedCallbacks.forEach(function(t) {
                    "function" == typeof t && t({
                        message: e || "The destination publishing iframe was attached and loaded successfully."
                    })
                }),
                this.iframeLoadedCallbacks = []
            },
            requestToProcess: function(t) {
                function i() {
                    r.jsonForComparison.push(t),
                    r.jsonWaiting.push(t),
                    r.processSyncOnPage(t)
                }
                var n, r = this;
                if (t === Object(t) && t.ibs)
                    if (n = JSON.stringify(t.ibs || []),
                    this.jsonForComparison.length) {
                        var a, s, o, l = !1;
                        for (a = 0,
                        s = this.jsonForComparison.length; a < s; a++)
                            if (o = this.jsonForComparison[a],
                            n === JSON.stringify(o.ibs || [])) {
                                l = !0;
                                break
                            }
                        l ? this.jsonDuplicates.push(t) : i()
                    } else
                        i();
                if ((this.receivedThirdPartyCookiesNotification || !G.POST_MESSAGE_ENABLED || this.iframeHasLoaded) && this.jsonWaiting.length) {
                    var d = this.jsonWaiting.shift();
                    this.process(d),
                    this.requestToProcess()
                }
                e.idSyncDisableSyncs || e.disableIdSyncs || !this.iframeHasLoaded || !this.messages.length || this.sendingMessages || (this.throttleTimerSet || (this.throttleTimerSet = !0,
                setTimeout(function() {
                    r.messageSendingInterval = G.POST_MESSAGE_ENABLED ? null : 150
                }, this.THROTTLE_START)),
                this.sendingMessages = !0,
                this.sendMessages())
            },
            getRegionAndCheckIfChanged: function(t, i) {
                var n = e._getField("MCAAMLH")
                  , r = t.d_region || t.dcs_region;
                return n ? r && (e._setFieldExpire("MCAAMLH", i),
                e._setField("MCAAMLH", r),
                parseInt(n, 10) !== r && (this.regionChanged = !0,
                this.timesRegionChanged++,
                e._setField("MCSYNCSOP", ""),
                e._setField("MCSYNCS", ""),
                n = r)) : (n = r) && (e._setFieldExpire("MCAAMLH", i),
                e._setField("MCAAMLH", n)),
                n || (n = ""),
                n
            },
            processSyncOnPage: function(e) {
                var t, i, n, r;
                if ((t = e.ibs) && t instanceof Array && (i = t.length))
                    for (n = 0; n < i; n++)
                        r = t[n],
                        r.syncOnPage && this.checkFirstPartyCookie(r, "", "syncOnPage")
            },
            process: function(e) {
                var t, i, n, r, a, s = encodeURIComponent, o = !1;
                if ((t = e.ibs) && t instanceof Array && (i = t.length))
                    for (o = !0,
                    n = 0; n < i; n++)
                        r = t[n],
                        a = [s("ibs"), s(r.id || ""), s(r.tag || ""), v.encodeAndBuildRequest(r.url || [], ","), s(r.ttl || ""), "", "", r.fireURLSync ? "true" : "false"],
                        r.syncOnPage || (this.canSetThirdPartyCookies ? this.addMessage(a.join("|")) : r.fireURLSync && this.checkFirstPartyCookie(r, a.join("|")));
                o && this.jsonProcessed.push(e)
            },
            checkFirstPartyCookie: function(t, i, n) {
                var r = "syncOnPage" === n
                  , a = r ? "MCSYNCSOP" : "MCSYNCS";
                e._readVisitor();
                var s, o, l = e._getField(a), d = !1, c = !1, u = Math.ceil((new Date).getTime() / G.MILLIS_PER_DAY);
                l ? (s = l.split("*"),
                o = this.pruneSyncData(s, t.id, u),
                d = o.dataPresent,
                c = o.dataValid,
                d && c || this.fireSync(r, t, i, s, a, u)) : (s = [],
                this.fireSync(r, t, i, s, a, u))
            },
            pruneSyncData: function(e, t, i) {
                var n, r, a, s = !1, o = !1;
                for (r = 0; r < e.length; r++)
                    n = e[r],
                    a = parseInt(n.split("-")[1], 10),
                    n.match("^" + t + "-") ? (s = !0,
                    i < a ? o = !0 : (e.splice(r, 1),
                    r--)) : i >= a && (e.splice(r, 1),
                    r--);
                return {
                    dataPresent: s,
                    dataValid: o
                }
            },
            manageSyncsSize: function(e) {
                if (e.join("*").length > this.MAX_SYNCS_LENGTH)
                    for (e.sort(function(e, t) {
                        return parseInt(e.split("-")[1], 10) - parseInt(t.split("-")[1], 10)
                    }); e.join("*").length > this.MAX_SYNCS_LENGTH; )
                        e.shift()
            },
            fireSync: function(t, i, n, r, a, s) {
                var o = this;
                if (t) {
                    if ("img" === i.tag) {
                        var l, d, c, u, f = i.url, g = e.loadSSL ? "https:" : "http:";
                        for (l = 0,
                        d = f.length; l < d; l++) {
                            c = f[l],
                            u = /^\/\//.test(c);
                            var m = new Image;
                            m.addEventListener("load", function(t, i, n, r) {
                                return function() {
                                    o.onPagePixels[t] = null,
                                    e._readVisitor();
                                    var s, l = e._getField(a), d = [];
                                    if (l) {
                                        s = l.split("*");
                                        var c, u, f;
                                        for (c = 0,
                                        u = s.length; c < u; c++)
                                            f = s[c],
                                            f.match("^" + i.id + "-") || d.push(f)
                                    }
                                    o.setSyncTrackingData(d, i, n, r)
                                }
                            }(this.onPagePixels.length, i, a, s)),
                            m.src = (u ? g : "") + c,
                            this.onPagePixels.push(m)
                        }
                    }
                } else
                    this.addMessage(n),
                    this.setSyncTrackingData(r, i, a, s)
            },
            addMessage: function(t) {
                var i = encodeURIComponent
                  , n = i(e._enableErrorReporting ? "---destpub-debug---" : "---destpub---");
                this.messages.push((G.POST_MESSAGE_ENABLED ? "" : n) + t)
            },
            setSyncTrackingData: function(t, i, n, r) {
                t.push(i.id + "-" + (r + Math.ceil(i.ttl / 60 / 24))),
                this.manageSyncsSize(t),
                e._setField(n, t.join("*"))
            },
            sendMessages: function() {
                var e, t = this, i = "", n = encodeURIComponent;
                this.regionChanged && (i = n("---destpub-clear-dextp---"),
                this.regionChanged = !1),
                this.messages.length ? G.POST_MESSAGE_ENABLED ? (e = i + n("---destpub-combined---") + this.messages.join("%01"),
                this.postMessage(e),
                this.messages = [],
                this.sendingMessages = !1) : (e = this.messages.shift(),
                this.postMessage(i + e),
                setTimeout(function() {
                    t.sendMessages()
                }, this.messageSendingInterval)) : this.sendingMessages = !1
            },
            postMessage: function(e) {
                U.postMessage(e, this.url, this.iframe.contentWindow),
                this.messagesPosted.push(e)
            },
            receiveMessage: function(e) {
                var t, i = /^---destpub-to-parent---/;
                "string" == typeof e && i.test(e) && (t = e.replace(i, "").split("|"),
                "canSetThirdPartyCookies" === t[0] && (this.canSetThirdPartyCookies = "true" === t[1],
                this.receivedThirdPartyCookiesNotification = !0,
                this.requestToProcess()),
                this.messagesReceived.push(e))
            },
            processIDCallData: function(n) {
                (null == this.url || n.subdomain && "nosubdomainreturned" === this.subdomain) && ("string" == typeof e._subdomain && e._subdomain.length ? this.subdomain = e._subdomain : this.subdomain = n.subdomain || "",
                this.url = this.getUrl()),
                n.ibs instanceof Array && n.ibs.length && (this.doAttachIframe = !0),
                this.readyToAttachIframe() && (e.idSyncAttachIframeOnWindowLoad ? (t.windowLoaded || "complete" === i.readyState || "loaded" === i.readyState) && this.attachIframe() : this.attachIframeASAP()),
                "function" == typeof e.idSyncIDCallResult ? e.idSyncIDCallResult(n) : this.requestToProcess(n),
                "function" == typeof e.idSyncAfterIDCallResult && e.idSyncAfterIDCallResult(n)
            },
            canMakeSyncIDCall: function(t, i) {
                return e._forceSyncIDCall || !t || i - t > G.DAYS_BETWEEN_SYNC_ID_CALLS
            },
            attachIframeASAP: function() {
                function e() {
                    t.startedAttachingIframe || (i.body ? t.attachIframe() : setTimeout(e, 30))
                }
                var t = this;
                e()
            }
        }
    }
      , Y = {
        audienceManagerServer: {},
        audienceManagerServerSecure: {},
        cookieDomain: {},
        cookieLifetime: {},
        cookieName: {},
        disableThirdPartyCalls: {},
        idSyncAfterIDCallResult: {},
        idSyncAttachIframeOnWindowLoad: {},
        idSyncContainerID: {},
        idSyncDisable3rdPartySyncing: {},
        disableThirdPartyCookies: {},
        idSyncDisableSyncs: {},
        disableIdSyncs: {},
        idSyncIDCallResult: {},
        idSyncSSLUseAkamai: {},
        isCoopSafe: {},
        loadSSL: {},
        loadTimeout: {},
        marketingCloudServer: {},
        marketingCloudServerSecure: {},
        overwriteCrossDomainMCIDAndAID: {},
        resetBeforeVersion: {},
        sdidParamExpiry: {},
        serverState: {},
        sessionCookieName: {},
        secureCookie: {},
        takeTimeoutMetrics: {},
        trackingServer: {},
        trackingServerSecure: {},
        whitelistIframeDomains: {},
        whitelistParentDomain: {}
    }
      , X = {
        getConfigNames: function() {
            return Object.keys(Y)
        },
        getConfigs: function() {
            return Y
        }
    }
      , W = function(e, t, i) {
        function n(e) {
            var t = e;
            return function(e) {
                var i = e || c.location.href;
                try {
                    var n = d._extractParamFromUri(i, t);
                    if (n)
                        return y.parsePipeDelimetedKeyValues(n)
                } catch (e) {}
            }
        }
        function r(e) {
            function t(e, t) {
                e && e.match(G.VALID_VISITOR_ID_REGEX) && t(e)
            }
            t(e[m], d.setMarketingCloudVisitorID),
            d._setFieldExpire(I, -1),
            t(e[C], d.setAnalyticsVisitorID)
        }
        function s(e) {
            e = e || {},
            d._supplementalDataIDCurrent = e.supplementalDataIDCurrent || "",
            d._supplementalDataIDCurrentConsumed = e.supplementalDataIDCurrentConsumed || {},
            d._supplementalDataIDLast = e.supplementalDataIDLast || "",
            d._supplementalDataIDLastConsumed = e.supplementalDataIDLastConsumed || {}
        }
        function o(e) {
            function t(e, t, i) {
                return i = i ? i += "|" : i,
                i += e + "=" + encodeURIComponent(t)
            }
            function i(e, i) {
                var n = i[0]
                  , r = i[1];
                return null != r && r !== D && (e = t(n, r, e)),
                e
            }
            var n = e.reduce(i, "");
            return function(e) {
                var t = y.getTimestampInSeconds();
                return e = e ? e += "|" : e,
                e += "TS=" + t
            }(n)
        }
        function l(e) {
            var t = e.minutesToLive
              , i = "";
            return (d.idSyncDisableSyncs || d.disableIdSyncs) && (i = i || "Error: id syncs have been disabled"),
            "string" == typeof e.dpid && e.dpid.length || (i = i || "Error: config.dpid is empty"),
            "string" == typeof e.url && e.url.length || (i = i || "Error: config.url is empty"),
            void 0 === t ? t = 20160 : (t = parseInt(t, 10),
            (isNaN(t) || t <= 0) && (i = i || "Error: config.minutesToLive needs to be a positive number")),
            {
                error: i,
                ttl: t
            }
        }
        if (!i || i.split("").reverse().join("") !== e)
            throw new Error("Please use `Visitor.getInstance` to instantiate Visitor.");
        var d = this;
        d.version = "3.3.0";
        var c = a
          , u = c.Visitor;
        u.version = d.version,
        u.AuthState = _.AUTH_STATE,
        u.OptOut = _.OPT_OUT,
        c.s_c_in || (c.s_c_il = [],
        c.s_c_in = 0),
        d._c = "Visitor",
        d._il = c.s_c_il,
        d._in = c.s_c_in,
        d._il[d._in] = d,
        c.s_c_in++,
        d._instanceType = "regular",
        d._log = {
            requests: []
        },
        d.marketingCloudOrgID = e,
        d.cookieName = "AMCV_" + e,
        d.sessionCookieName = "AMCVS_" + e,
        d.cookieDomain = N(),
        d.cookieDomain === c.location.hostname && (d.cookieDomain = ""),
        d.loadSSL = c.location.protocol.toLowerCase().indexOf("https") >= 0,
        d.loadTimeout = 3e4,
        d.CORSErrors = [],
        d.marketingCloudServer = d.audienceManagerServer = "dpm.demdex.net",
        d.sdidParamExpiry = 30;
        var f = c.document
          , g = null
          , m = "MCMID"
          , h = "MCIDTS"
          , p = "A"
          , C = "MCAID"
          , S = "AAM"
          , I = "MCAAMB"
          , D = "NONE"
          , A = function(e) {
            return !Object.prototype[e]
        }
          , M = B(d);
        d.FIELDS = _.FIELDS,
        d.cookieRead = function(e) {
            e = encodeURIComponent(e);
            var t = (";" + f.cookie).split(" ").join(";")
              , i = t.indexOf(";" + e + "=")
              , n = i < 0 ? i : t.indexOf(";", i + 1);
            return i < 0 ? "" : decodeURIComponent(t.substring(i + 2 + e.length, n < 0 ? t.length : n))
        }
        ,
        d.cookieWrite = function(e, t, i) {
            var n, r = d.cookieLifetime, a = "";
            if (t = "" + t,
            r = r ? ("" + r).toUpperCase() : "",
            i && "SESSION" !== r && "NONE" !== r) {
                if (n = "" !== t ? parseInt(r || 0, 10) : -60)
                    i = new Date,
                    i.setTime(i.getTime() + 1e3 * n);
                else if (1 === i) {
                    i = new Date;
                    var s = i.getYear();
                    i.setYear(s + 2 + (s < 1900 ? 1900 : 0))
                }
            } else
                i = 0;
            return e && "NONE" !== r ? (d.configs && d.configs.secureCookie && "https:" === location.protocol && (a = "Secure"),
            f.cookie = encodeURIComponent(e) + "=" + encodeURIComponent(t) + "; path=/;" + (i ? " expires=" + i.toGMTString() + ";" : "") + (d.cookieDomain ? " domain=" + d.cookieDomain + ";" : "") + a,
            d.cookieRead(e) === t) : 0
        }
        ,
        d.resetState = function(e) {
            e ? d._mergeServerState(e) : s()
        }
        ,
        d._isAllowedDone = !1,
        d._isAllowedFlag = !1,
        d.isAllowed = function() {
            return d._isAllowedDone || (d._isAllowedDone = !0,
            (d.cookieRead(d.cookieName) || d.cookieWrite(d.cookieName, "T", 1)) && (d._isAllowedFlag = !0)),
            d._isAllowedFlag
        }
        ,
        d.setMarketingCloudVisitorID = function(e) {
            d._setMarketingCloudFields(e)
        }
        ,
        d._use1stPartyMarketingCloudServer = !1,
        d.getMarketingCloudVisitorID = function(e, t) {
            if (d.isAllowed()) {
                d.marketingCloudServer && d.marketingCloudServer.indexOf(".demdex.net") < 0 && (d._use1stPartyMarketingCloudServer = !0);
                var i = d._getAudienceManagerURLData("_setMarketingCloudFields")
                  , n = i.url;
                return d._getRemoteField(m, n, e, t, i)
            }
            return ""
        }
        ,
        d.getVisitorValues = function(e, t) {
            var i = {
                MCMID: {
                    fn: d.getMarketingCloudVisitorID,
                    args: [!0],
                    context: d
                },
                MCOPTOUT: {
                    fn: d.isOptedOut,
                    args: [void 0, !0],
                    context: d
                },
                MCAID: {
                    fn: d.getAnalyticsVisitorID,
                    args: [!0],
                    context: d
                },
                MCAAMLH: {
                    fn: d.getAudienceManagerLocationHint,
                    args: [!0],
                    context: d
                },
                MCAAMB: {
                    fn: d.getAudienceManagerBlob,
                    args: [!0],
                    context: d
                }
            }
              , n = t && t.length ? y.pluck(i, t) : i;
            V(n, e)
        }
        ,
        d._currentCustomerIDs = {},
        d._customerIDsHashChanged = !1,
        d._newCustomerIDsHash = "",
        d.setCustomerIDs = function(e) {
            function t() {
                d._customerIDsHashChanged = !1
            }
            if (d.isAllowed() && e) {
                if (!v.isObject(e) || v.isObjectEmpty(e))
                    return !1;
                d._readVisitor();
                var i, n;
                for (i in e)
                    if (A(i) && (n = e[i]))
                        if ("object" == typeof n) {
                            var r = {};
                            n.id && (r.id = n.id),
                            void 0 != n.authState && (r.authState = n.authState),
                            d._currentCustomerIDs[i] = r
                        } else
                            d._currentCustomerIDs[i] = {
                                id: n
                            };
                var a = d.getCustomerIDs()
                  , s = d._getField("MCCIDH")
                  , o = "";
                s || (s = 0);
                for (i in a)
                    A(i) && (n = a[i],
                    o += (o ? "|" : "") + i + "|" + (n.id ? n.id : "") + (n.authState ? n.authState : ""));
                d._newCustomerIDsHash = String(d._hash(o)),
                d._newCustomerIDsHash !== s && (d._customerIDsHashChanged = !0,
                d._mapCustomerIDs(t))
            }
        }
        ,
        d.getCustomerIDs = function() {
            d._readVisitor();
            var e, t, i = {};
            for (e in d._currentCustomerIDs)
                A(e) && (t = d._currentCustomerIDs[e],
                i[e] || (i[e] = {}),
                t.id && (i[e].id = t.id),
                void 0 != t.authState ? i[e].authState = t.authState : i[e].authState = u.AuthState.UNKNOWN);
            return i
        }
        ,
        d.setAnalyticsVisitorID = function(e) {
            d._setAnalyticsFields(e)
        }
        ,
        d.getAnalyticsVisitorID = function(e, t, i) {
            if (!y.isTrackingServerPopulated() && !i)
                return d._callCallback(e, [""]),
                "";
            if (d.isAllowed()) {
                var n = "";
                if (i || (n = d.getMarketingCloudVisitorID(function(t) {
                    d.getAnalyticsVisitorID(e, !0)
                })),
                n || i) {
                    var r = i ? d.marketingCloudServer : d.trackingServer
                      , a = "";
                    d.loadSSL && (i ? d.marketingCloudServerSecure && (r = d.marketingCloudServerSecure) : d.trackingServerSecure && (r = d.trackingServerSecure));
                    var s = {};
                    if (r) {
                        var o = "http" + (d.loadSSL ? "s" : "") + "://" + r + "/id"
                          , l = "d_visid_ver=" + d.version + "&mcorgid=" + encodeURIComponent(d.marketingCloudOrgID) + (n ? "&mid=" + encodeURIComponent(n) : "") + (d.idSyncDisable3rdPartySyncing || d.disableThirdPartyCookies ? "&d_coppa=true" : "")
                          , c = ["s_c_il", d._in, "_set" + (i ? "MarketingCloud" : "Analytics") + "Fields"];
                        a = o + "?" + l + "&callback=s_c_il%5B" + d._in + "%5D._set" + (i ? "MarketingCloud" : "Analytics") + "Fields",
                        s.corsUrl = o + "?" + l,
                        s.callback = c
                    }
                    return s.url = a,
                    d._getRemoteField(i ? m : C, a, e, t, s)
                }
            }
            return ""
        }
        ,
        d.getAudienceManagerLocationHint = function(e, t) {
            if (d.isAllowed()) {
                if (d.getMarketingCloudVisitorID(function(t) {
                    d.getAudienceManagerLocationHint(e, !0)
                })) {
                    var i = d._getField(C);
                    if (!i && y.isTrackingServerPopulated() && (i = d.getAnalyticsVisitorID(function(t) {
                        d.getAudienceManagerLocationHint(e, !0)
                    })),
                    i || !y.isTrackingServerPopulated()) {
                        var n = d._getAudienceManagerURLData()
                          , r = n.url;
                        return d._getRemoteField("MCAAMLH", r, e, t, n)
                    }
                }
            }
            return ""
        }
        ,
        d.getLocationHint = d.getAudienceManagerLocationHint,
        d.getAudienceManagerBlob = function(e, t) {
            if (d.isAllowed()) {
                if (d.getMarketingCloudVisitorID(function(t) {
                    d.getAudienceManagerBlob(e, !0)
                })) {
                    var i = d._getField(C);
                    if (!i && y.isTrackingServerPopulated() && (i = d.getAnalyticsVisitorID(function(t) {
                        d.getAudienceManagerBlob(e, !0)
                    })),
                    i || !y.isTrackingServerPopulated()) {
                        var n = d._getAudienceManagerURLData()
                          , r = n.url;
                        return d._customerIDsHashChanged && d._setFieldExpire(I, -1),
                        d._getRemoteField(I, r, e, t, n)
                    }
                }
            }
            return ""
        }
        ,
        d._supplementalDataIDCurrent = "",
        d._supplementalDataIDCurrentConsumed = {},
        d._supplementalDataIDLast = "",
        d._supplementalDataIDLastConsumed = {},
        d.getSupplementalDataID = function(e, t) {
            d._supplementalDataIDCurrent || t || (d._supplementalDataIDCurrent = d._generateID(1));
            var i = d._supplementalDataIDCurrent;
            return d._supplementalDataIDLast && !d._supplementalDataIDLastConsumed[e] ? (i = d._supplementalDataIDLast,
            d._supplementalDataIDLastConsumed[e] = !0) : i && (d._supplementalDataIDCurrentConsumed[e] && (d._supplementalDataIDLast = d._supplementalDataIDCurrent,
            d._supplementalDataIDLastConsumed = d._supplementalDataIDCurrentConsumed,
            d._supplementalDataIDCurrent = i = t ? "" : d._generateID(1),
            d._supplementalDataIDCurrentConsumed = {}),
            i && (d._supplementalDataIDCurrentConsumed[e] = !0)),
            i
        }
        ,
        d.getOptOut = function(e, t) {
            if (d.isAllowed()) {
                var i = d._getAudienceManagerURLData("_setMarketingCloudFields")
                  , n = i.url;
                return d._getRemoteField("MCOPTOUT", n, e, t, i)
            }
            return ""
        }
        ,
        d.isOptedOut = function(e, t, i) {
            if (d.isAllowed()) {
                t || (t = u.OptOut.GLOBAL);
                var n = d.getOptOut(function(i) {
                    var n = i === u.OptOut.GLOBAL || i.indexOf(t) >= 0;
                    d._callCallback(e, [n])
                }, i);
                return n ? n === u.OptOut.GLOBAL || n.indexOf(t) >= 0 : null
            }
            return !1
        }
        ,
        d._fields = null,
        d._fieldsExpired = null,
        d._hash = function(e) {
            var t, i, n = 0;
            if (e)
                for (t = 0; t < e.length; t++)
                    i = e.charCodeAt(t),
                    n = (n << 5) - n + i,
                    n &= n;
            return n
        }
        ,
        d._generateID = H,
        d._generateLocalMID = function() {
            var e = d._generateID(0);
            return T.isClientSideMarketingCloudVisitorID = !0,
            e
        }
        ,
        d._callbackList = null,
        d._callCallback = function(e, t) {
            try {
                "function" == typeof e ? e.apply(c, t) : e[1].apply(e[0], t)
            } catch (e) {}
        }
        ,
        d._registerCallback = function(e, t) {
            t && (null == d._callbackList && (d._callbackList = {}),
            void 0 == d._callbackList[e] && (d._callbackList[e] = []),
            d._callbackList[e].push(t))
        }
        ,
        d._callAllCallbacks = function(e, t) {
            if (null != d._callbackList) {
                var i = d._callbackList[e];
                if (i)
                    for (; i.length > 0; )
                        d._callCallback(i.shift(), t)
            }
        }
        ,
        d._addQuerystringParam = function(e, t, i, n) {
            var r = encodeURIComponent(t) + "=" + encodeURIComponent(i)
              , a = y.parseHash(e)
              , s = y.hashlessUrl(e);
            if (-1 === s.indexOf("?"))
                return s + "?" + r + a;
            var o = s.split("?")
              , l = o[0] + "?"
              , d = o[1];
            return l + y.addQueryParamAtLocation(d, r, n) + a
        }
        ,
        d._extractParamFromUri = function(e, t) {
            var i = new RegExp("[\\?&#]" + t + "=([^&#]*)")
              , n = i.exec(e);
            if (n && n.length)
                return decodeURIComponent(n[1])
        }
        ,
        d._parseAdobeMcFromUrl = n(G.ADOBE_MC),
        d._parseAdobeMcSdidFromUrl = n(G.ADOBE_MC_SDID),
        d._attemptToPopulateSdidFromUrl = function(t) {
            var i = d._parseAdobeMcSdidFromUrl(t)
              , n = 1e9;
            i && i.TS && (n = y.getTimestampInSeconds() - i.TS),
            i && i.SDID && i.MCORGID === e && n < d.sdidParamExpiry && (d._supplementalDataIDCurrent = i.SDID,
            d._supplementalDataIDCurrentConsumed.SDID_URL_PARAM = !0)
        }
        ,
        d._attemptToPopulateIdsFromUrl = function() {
            var t = d._parseAdobeMcFromUrl();
            if (t && t.TS) {
                var i = y.getTimestampInSeconds()
                  , n = i - t.TS;
                if (Math.floor(n / 60) > G.ADOBE_MC_TTL_IN_MIN || t.MCORGID !== e)
                    return;
                r(t)
            }
        }
        ,
        d._mergeServerState = function(e) {
            if (e)
                try {
                    if (e = function(e) {
                        return y.isObject(e) ? e : JSON.parse(e)
                    }(e),
                    e[d.marketingCloudOrgID]) {
                        var t = e[d.marketingCloudOrgID];
                        !function(e) {
                            y.isObject(e) && d.setCustomerIDs(e)
                        }(t.customerIDs),
                        s(t.sdid)
                    }
                } catch (e) {
                    throw new Error("`serverState` has an invalid format.")
                }
        }
        ,
        d._timeout = null,
        d._loadData = function(e, t, i, n) {
            t = d._addQuerystringParam(t, "d_fieldgroup", e, 1),
            n.url = d._addQuerystringParam(n.url, "d_fieldgroup", e, 1),
            n.corsUrl = d._addQuerystringParam(n.corsUrl, "d_fieldgroup", e, 1),
            T.fieldGroupObj[e] = !0,
            n === Object(n) && n.corsUrl && "XMLHttpRequest" === M.corsMetadata.corsType && M.fireCORS(n, i, e)
        }
        ,
        d._clearTimeout = function(e) {
            null != d._timeout && d._timeout[e] && (clearTimeout(d._timeout[e]),
            d._timeout[e] = 0)
        }
        ,
        d._settingsDigest = 0,
        d._getSettingsDigest = function() {
            if (!d._settingsDigest) {
                var e = d.version;
                d.audienceManagerServer && (e += "|" + d.audienceManagerServer),
                d.audienceManagerServerSecure && (e += "|" + d.audienceManagerServerSecure),
                d._settingsDigest = d._hash(e)
            }
            return d._settingsDigest
        }
        ,
        d._readVisitorDone = !1,
        d._readVisitor = function() {
            if (!d._readVisitorDone) {
                d._readVisitorDone = !0;
                var e, t, i, n, r, a, s = d._getSettingsDigest(), o = !1, l = d.cookieRead(d.cookieName), c = new Date;
                if (null == d._fields && (d._fields = {}),
                l && "T" !== l)
                    for (l = l.split("|"),
                    l[0].match(/^[\-0-9]+$/) && (parseInt(l[0], 10) !== s && (o = !0),
                    l.shift()),
                    l.length % 2 == 1 && l.pop(),
                    e = 0; e < l.length; e += 2)
                        t = l[e].split("-"),
                        i = t[0],
                        n = l[e + 1],
                        t.length > 1 ? (r = parseInt(t[1], 10),
                        a = t[1].indexOf("s") > 0) : (r = 0,
                        a = !1),
                        o && ("MCCIDH" === i && (n = ""),
                        r > 0 && (r = c.getTime() / 1e3 - 60)),
                        i && n && (d._setField(i, n, 1),
                        r > 0 && (d._fields["expire" + i] = r + (a ? "s" : ""),
                        (c.getTime() >= 1e3 * r || a && !d.cookieRead(d.sessionCookieName)) && (d._fieldsExpired || (d._fieldsExpired = {}),
                        d._fieldsExpired[i] = !0)));
                !d._getField(C) && y.isTrackingServerPopulated() && (l = d.cookieRead("s_vi")) && (l = l.split("|"),
                l.length > 1 && l[0].indexOf("v1") >= 0 && (n = l[1],
                e = n.indexOf("["),
                e >= 0 && (n = n.substring(0, e)),
                n && n.match(G.VALID_VISITOR_ID_REGEX) && d._setField(C, n)))
            }
        }
        ,
        d._appendVersionTo = function(e) {
            var t = "vVersion|" + d.version
              , i = e ? d._getCookieVersion(e) : null;
            return i ? x.areVersionsDifferent(i, d.version) && (e = e.replace(G.VERSION_REGEX, t)) : e += (e ? "|" : "") + t,
            e
        }
        ,
        d._writeVisitor = function() {
            var e, t, i = d._getSettingsDigest();
            for (e in d._fields)
                A(e) && d._fields[e] && "expire" !== e.substring(0, 6) && (t = d._fields[e],
                i += (i ? "|" : "") + e + (d._fields["expire" + e] ? "-" + d._fields["expire" + e] : "") + "|" + t);
            i = d._appendVersionTo(i),
            d.cookieWrite(d.cookieName, i, 1)
        }
        ,
        d._getField = function(e, t) {
            return null == d._fields || !t && d._fieldsExpired && d._fieldsExpired[e] ? null : d._fields[e]
        }
        ,
        d._setField = function(e, t, i) {
            null == d._fields && (d._fields = {}),
            d._fields[e] = t,
            i || d._writeVisitor()
        }
        ,
        d._getFieldList = function(e, t) {
            var i = d._getField(e, t);
            return i ? i.split("*") : null
        }
        ,
        d._setFieldList = function(e, t, i) {
            d._setField(e, t ? t.join("*") : "", i)
        }
        ,
        d._getFieldMap = function(e, t) {
            var i = d._getFieldList(e, t);
            if (i) {
                var n, r = {};
                for (n = 0; n < i.length; n += 2)
                    r[i[n]] = i[n + 1];
                return r
            }
            return null
        }
        ,
        d._setFieldMap = function(e, t, i) {
            var n, r = null;
            if (t) {
                r = [];
                for (n in t)
                    A(n) && (r.push(n),
                    r.push(t[n]))
            }
            d._setFieldList(e, r, i)
        }
        ,
        d._setFieldExpire = function(e, t, i) {
            var n = new Date;
            n.setTime(n.getTime() + 1e3 * t),
            null == d._fields && (d._fields = {}),
            d._fields["expire" + e] = Math.floor(n.getTime() / 1e3) + (i ? "s" : ""),
            t < 0 ? (d._fieldsExpired || (d._fieldsExpired = {}),
            d._fieldsExpired[e] = !0) : d._fieldsExpired && (d._fieldsExpired[e] = !1),
            i && (d.cookieRead(d.sessionCookieName) || d.cookieWrite(d.sessionCookieName, "1"))
        }
        ,
        d._findVisitorID = function(e) {
            return e && ("object" == typeof e && (e = e.d_mid ? e.d_mid : e.visitorID ? e.visitorID : e.id ? e.id : e.uuid ? e.uuid : "" + e),
            e && "NOTARGET" === (e = e.toUpperCase()) && (e = D),
            e && (e === D || e.match(G.VALID_VISITOR_ID_REGEX)) || (e = "")),
            e
        }
        ,
        d._setFields = function(e, t) {
            if (d._clearTimeout(e),
            null != d._loading && (d._loading[e] = !1),
            T.fieldGroupObj[e] && T.setState(e, !1),
            "MC" === e) {
                !0 !== T.isClientSideMarketingCloudVisitorID && (T.isClientSideMarketingCloudVisitorID = !1);
                var i = d._getField(m);
                if (!i || d.overwriteCrossDomainMCIDAndAID) {
                    if (!(i = "object" == typeof t && t.mid ? t.mid : d._findVisitorID(t))) {
                        if (d._use1stPartyMarketingCloudServer && !d.tried1stPartyMarketingCloudServer)
                            return d.tried1stPartyMarketingCloudServer = !0,
                            void d.getAnalyticsVisitorID(null, !1, !0);
                        i = d._generateLocalMID()
                    }
                    d._setField(m, i)
                }
                i && i !== D || (i = ""),
                "object" == typeof t && ((t.d_region || t.dcs_region || t.d_blob || t.blob) && d._setFields(S, t),
                d._use1stPartyMarketingCloudServer && t.mid && d._setFields(p, {
                    id: t.id
                })),
                d._callAllCallbacks(m, [i])
            }
            if (e === S && "object" == typeof t) {
                var n = 604800;
                void 0 != t.id_sync_ttl && t.id_sync_ttl && (n = parseInt(t.id_sync_ttl, 10));
                var r = b.getRegionAndCheckIfChanged(t, n);
                d._callAllCallbacks("MCAAMLH", [r]);
                var a = d._getField(I);
                (t.d_blob || t.blob) && (a = t.d_blob,
                a || (a = t.blob),
                d._setFieldExpire(I, n),
                d._setField(I, a)),
                a || (a = ""),
                d._callAllCallbacks(I, [a]),
                !t.error_msg && d._newCustomerIDsHash && d._setField("MCCIDH", d._newCustomerIDsHash)
            }
            if (e === p) {
                var s = d._getField(C);
                s && !d.overwriteCrossDomainMCIDAndAID || (s = d._findVisitorID(t),
                s ? s !== D && d._setFieldExpire(I, -1) : s = D,
                d._setField(C, s)),
                s && s !== D || (s = ""),
                d._callAllCallbacks(C, [s])
            }
            if (d.idSyncDisableSyncs || d.disableIdSyncs)
                b.idCallNotProcesssed = !0;
            else {
                b.idCallNotProcesssed = !1;
                var o = {};
                o.ibs = t.ibs,
                o.subdomain = t.subdomain,
                b.processIDCallData(o)
            }
            if (t === Object(t)) {
                var l, c;
                d.isAllowed() && (l = d._getField("MCOPTOUT")),
                l || (l = D,
                t.d_optout && t.d_optout instanceof Array && (l = t.d_optout.join(",")),
                c = parseInt(t.d_ottl, 10),
                isNaN(c) && (c = 7200),
                d._setFieldExpire("MCOPTOUT", c, !0),
                d._setField("MCOPTOUT", l)),
                d._callAllCallbacks("MCOPTOUT", [l])
            }
        }
        ,
        d._loading = null,
        d._getRemoteField = function(e, t, i, n, r) {
            var a, s = "", o = y.isFirstPartyAnalyticsVisitorIDCall(e), l = {
                MCAAMLH: !0,
                MCAAMB: !0
            };
            if (d.isAllowed()) {
                d._readVisitor(),
                s = d._getField(e, !0 === l[e]);
                if (function() {
                    return (!s || d._fieldsExpired && d._fieldsExpired[e]) && (!d.disableThirdPartyCalls || o)
                }()) {
                    if (e === m || "MCOPTOUT" === e ? a = "MC" : "MCAAMLH" === e || e === I ? a = S : e === C && (a = p),
                    a)
                        return !t || null != d._loading && d._loading[a] || (null == d._loading && (d._loading = {}),
                        d._loading[a] = !0,
                        d._loadData(a, t, function(t) {
                            if (!d._getField(e)) {
                                t && T.setState(a, !0);
                                var i = "";
                                e === m ? i = d._generateLocalMID() : a === S && (i = {
                                    error_msg: "timeout"
                                }),
                                d._setFields(a, i)
                            }
                        }, r)),
                        d._registerCallback(e, i),
                        s || (t || d._setFields(a, {
                            id: D
                        }),
                        "")
                } else
                    s || (e === m ? (d._registerCallback(e, i),
                    s = d._generateLocalMID(),
                    d.setMarketingCloudVisitorID(s)) : e === C ? (d._registerCallback(e, i),
                    s = "",
                    d.setAnalyticsVisitorID(s)) : (s = "",
                    n = !0))
            }
            return e !== m && e !== C || s !== D || (s = "",
            n = !0),
            i && n && d._callCallback(i, [s]),
            s
        }
        ,
        d._setMarketingCloudFields = function(e) {
            d._readVisitor(),
            d._setFields("MC", e)
        }
        ,
        d._mapCustomerIDs = function(e) {
            d.getAudienceManagerBlob(e, !0)
        }
        ,
        d._setAnalyticsFields = function(e) {
            d._readVisitor(),
            d._setFields(p, e)
        }
        ,
        d._setAudienceManagerFields = function(e) {
            d._readVisitor(),
            d._setFields(S, e)
        }
        ,
        d._getAudienceManagerURLData = function(e) {
            var t = d.audienceManagerServer
              , i = ""
              , n = d._getField(m)
              , r = d._getField(I, !0)
              , a = d._getField(C)
              , s = a && a !== D ? "&d_cid_ic=AVID%01" + encodeURIComponent(a) : "";
            if (d.loadSSL && d.audienceManagerServerSecure && (t = d.audienceManagerServerSecure),
            t) {
                var o, l, c = d.getCustomerIDs();
                if (c)
                    for (o in c)
                        A(o) && (l = c[o],
                        s += "&d_cid_ic=" + encodeURIComponent(o) + "%01" + encodeURIComponent(l.id ? l.id : "") + (l.authState ? "%01" + l.authState : ""));
                e || (e = "_setAudienceManagerFields");
                var u = "http" + (d.loadSSL ? "s" : "") + "://" + t + "/id"
                  , f = "d_visid_ver=" + d.version + "&d_rtbd=json&d_ver=2" + (!n && d._use1stPartyMarketingCloudServer ? "&d_verify=1" : "") + "&d_orgid=" + encodeURIComponent(d.marketingCloudOrgID) + "&d_nsid=" + (d.idSyncContainerID || 0) + (n ? "&d_mid=" + encodeURIComponent(n) : "") + (d.idSyncDisable3rdPartySyncing || d.disableThirdPartyCookies ? "&d_coppa=true" : "") + (!0 === g ? "&d_coop_safe=1" : !1 === g ? "&d_coop_unsafe=1" : "") + (r ? "&d_blob=" + encodeURIComponent(r) : "") + s
                  , _ = ["s_c_il", d._in, e];
                return i = u + "?" + f + "&d_cb=s_c_il%5B" + d._in + "%5D." + e,
                {
                    url: i,
                    corsUrl: u + "?" + f,
                    callback: _
                }
            }
            return {
                url: i
            }
        }
        ,
        d.appendVisitorIDsTo = function(e) {
            try {
                var t = [[m, d._getField(m)], [C, d._getField(C)], ["MCORGID", d.marketingCloudOrgID]];
                return d._addQuerystringParam(e, G.ADOBE_MC, o(t))
            } catch (t) {
                return e
            }
        }
        ,
        d.appendSupplementalDataIDTo = function(e, t) {
            if (!(t = t || d.getSupplementalDataID(y.generateRandomString(), !0)))
                return e;
            try {
                var i = o([["SDID", t], ["MCORGID", d.marketingCloudOrgID]]);
                return d._addQuerystringParam(e, G.ADOBE_MC_SDID, i)
            } catch (t) {
                return e
            }
        }
        ;
        var y = {
            parseHash: function(e) {
                var t = e.indexOf("#");
                return t > 0 ? e.substr(t) : ""
            },
            hashlessUrl: function(e) {
                var t = e.indexOf("#");
                return t > 0 ? e.substr(0, t) : e
            },
            addQueryParamAtLocation: function(e, t, i) {
                var n = e.split("&");
                return i = null != i ? i : n.length,
                n.splice(i, 0, t),
                n.join("&")
            },
            isFirstPartyAnalyticsVisitorIDCall: function(e, t, i) {
                if (e !== C)
                    return !1;
                var n;
                return t || (t = d.trackingServer),
                i || (i = d.trackingServerSecure),
                !("string" != typeof (n = d.loadSSL ? i : t) || !n.length) && (n.indexOf("2o7.net") < 0 && n.indexOf("omtrdc.net") < 0)
            },
            isObject: function(e) {
                return Boolean(e && e === Object(e))
            },
            removeCookie: function(e) {
                document.cookie = encodeURIComponent(e) + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;" + (d.cookieDomain ? " domain=" + d.cookieDomain + ";" : "")
            },
            isTrackingServerPopulated: function() {
                return !!d.trackingServer || !!d.trackingServerSecure
            },
            getTimestampInSeconds: function() {
                return Math.round((new Date).getTime() / 1e3)
            },
            parsePipeDelimetedKeyValues: function(e) {
                return e.split("|").reduce(function(e, t) {
                    var i = t.split("=");
                    return e[i[0]] = decodeURIComponent(i[1]),
                    e
                }, {})
            },
            generateRandomString: function(e) {
                e = e || 5;
                for (var t = "", i = "abcdefghijklmnopqrstuvwxyz0123456789"; e--; )
                    t += i[Math.floor(Math.random() * i.length)];
                return t
            },
            parseBoolean: function(e) {
                return "true" === e || "false" !== e && null
            },
            replaceMethodsWithFunction: function(e, t) {
                for (var i in e)
                    e.hasOwnProperty(i) && "function" == typeof e[i] && (e[i] = t);
                return e
            },
            pluck: function(e, t) {
                return t.reduce(function(t, i) {
                    return e[i] && (t[i] = e[i]),
                    t
                }, Object.create(null))
            }
        };
        d._helpers = y;
        var b = q(d, u);
        d._destinationPublishing = b,
        d.timeoutMetricsLog = [];
        var T = {
            isClientSideMarketingCloudVisitorID: null,
            MCIDCallTimedOut: null,
            AnalyticsIDCallTimedOut: null,
            AAMIDCallTimedOut: null,
            fieldGroupObj: {},
            setState: function(e, t) {
                switch (e) {
                case "MC":
                    !1 === t ? !0 !== this.MCIDCallTimedOut && (this.MCIDCallTimedOut = !1) : this.MCIDCallTimedOut = t;
                    break;
                case p:
                    !1 === t ? !0 !== this.AnalyticsIDCallTimedOut && (this.AnalyticsIDCallTimedOut = !1) : this.AnalyticsIDCallTimedOut = t;
                    break;
                case S:
                    !1 === t ? !0 !== this.AAMIDCallTimedOut && (this.AAMIDCallTimedOut = !1) : this.AAMIDCallTimedOut = t
                }
            }
        };
        d.isClientSideMarketingCloudVisitorID = function() {
            return T.isClientSideMarketingCloudVisitorID
        }
        ,
        d.MCIDCallTimedOut = function() {
            return T.MCIDCallTimedOut
        }
        ,
        d.AnalyticsIDCallTimedOut = function() {
            return T.AnalyticsIDCallTimedOut
        }
        ,
        d.AAMIDCallTimedOut = function() {
            return T.AAMIDCallTimedOut
        }
        ,
        d.idSyncGetOnPageSyncInfo = function() {
            return d._readVisitor(),
            d._getField("MCSYNCSOP")
        }
        ,
        d.idSyncByURL = function(e) {
            var t = l(e || {});
            if (t.error)
                return t.error;
            var i, n, r = e.url, a = encodeURIComponent, s = b;
            return r = r.replace(/^https:/, "").replace(/^http:/, ""),
            i = v.encodeAndBuildRequest(["", e.dpid, e.dpuuid || ""], ","),
            n = ["ibs", a(e.dpid), "img", a(r), t.ttl, "", i],
            s.addMessage(n.join("|")),
            s.requestToProcess(),
            "Successfully queued"
        }
        ,
        d.idSyncByDataSource = function(e) {
            return e === Object(e) && "string" == typeof e.dpuuid && e.dpuuid.length ? (e.url = "//dpm.demdex.net/ibs:dpid=" + e.dpid + "&dpuuid=" + e.dpuuid,
            d.idSyncByURL(e)) : "Error: config or config.dpuuid is empty"
        }
        ,
        d.publishDestinations = function(e, t, i) {
            if (i = "function" == typeof i ? i : function() {}
            ,
            "string" != typeof e || !e.length)
                return void i({
                    error: "subdomain is not a populated string."
                });
            if (!(t instanceof Array && t.length))
                return void i({
                    error: "messages is not a populated array."
                });
            var n = b;
            if (!n.readyToAttachIframePreliminary())
                return void i({
                    error: "The destination publishing iframe is disabled in the Visitor library."
                });
            var r = !1;
            if (t.forEach(function(e) {
                "string" == typeof e && e.length && (n.addMessage(e),
                r = !0)
            }),
            !r)
                return void i({
                    error: "None of the messages are populated strings."
                });
            n.iframe ? (i({
                message: "The destination publishing iframe is already attached and loaded."
            }),
            n.requestToProcess()) : !d.subdomain && d._getField(m) ? (n.subdomain = e,
            n.doAttachIframe = !0,
            n.url = n.getUrl(),
            n.readyToAttachIframe() ? (n.iframeLoadedCallbacks.push(function(e) {
                i({
                    message: "Attempted to attach and load the destination publishing iframe through this API call. Result: " + (e.message || "no result")
                })
            }),
            n.attachIframe()) : i({
                error: "Encountered a problem in attempting to attach and load the destination publishing iframe through this API call."
            })) : n.iframeLoadedCallbacks.push(function(e) {
                i({
                    message: "Attempted to attach and load the destination publishing iframe through normal Visitor API processing. Result: " + (e.message || "no result")
                })
            })
        }
        ,
        d._getCookieVersion = function(e) {
            e = e || d.cookieRead(d.cookieName);
            var t = G.VERSION_REGEX.exec(e);
            return t && t.length > 1 ? t[1] : null
        }
        ,
        d._resetAmcvCookie = function(e) {
            var t = d._getCookieVersion();
            t && !x.isLessThan(t, e) || y.removeCookie(d.cookieName)
        }
        ,
        d.setAsCoopSafe = function() {
            g = !0
        }
        ,
        d.setAsCoopUnsafe = function() {
            g = !1
        }
        ,
        d.init = function() {
            !function() {
                if (t && "object" == typeof t) {
                    d.configs = Object.create(null);
                    for (var e in t)
                        A(e) && (d[e] = t[e],
                        d.configs[e] = t[e]);
                    d.idSyncContainerID = d.idSyncContainerID || 0,
                    g = "boolean" == typeof d.isCoopSafe ? d.isCoopSafe : y.parseBoolean(d.isCoopSafe),
                    d.resetBeforeVersion && d._resetAmcvCookie(d.resetBeforeVersion),
                    d._attemptToPopulateIdsFromUrl(),
                    d._attemptToPopulateSdidFromUrl(),
                    d._readVisitor();
                    var i = d._getField(h)
                      , n = Math.ceil((new Date).getTime() / G.MILLIS_PER_DAY);
                    d.idSyncDisableSyncs || d.disableIdSyncs || !b.canMakeSyncIDCall(i, n) || (d._setFieldExpire(I, -1),
                    d._setField(h, n)),
                    d.getMarketingCloudVisitorID(),
                    d.getAudienceManagerLocationHint(),
                    d.getAudienceManagerBlob(),
                    d._mergeServerState(d.serverState)
                } else
                    d._attemptToPopulateIdsFromUrl(),
                    d._attemptToPopulateSdidFromUrl()
            }(),
            function() {
                if (!d.idSyncDisableSyncs && !d.disableIdSyncs) {
                    b.checkDPIframeSrc();
                    var e = function() {
                        var e = b;
                        e.readyToAttachIframe() && e.attachIframe()
                    };
                    c.addEventListener("load", function() {
                        u.windowLoaded = !0,
                        e()
                    });
                    try {
                        U.receiveMessage(function(e) {
                            b.receiveMessage(e.data)
                        }, b.iframeHost)
                    } catch (e) {}
                }
            }(),
            function() {
                d.whitelistIframeDomains && G.POST_MESSAGE_ENABLED && (d.whitelistIframeDomains = d.whitelistIframeDomains instanceof Array ? d.whitelistIframeDomains : [d.whitelistIframeDomains],
                d.whitelistIframeDomains.forEach(function(t) {
                    var i = new k(e,t)
                      , n = w(d, i);
                    U.receiveMessage(n, t)
                }))
            }()
        }
    };
    return W.getInstance = function(e, t) {
        if (!e)
            throw new Error("Visitor requires Adobe Marketing Cloud Org ID.");
        e.indexOf("@") < 0 && (e += "@AdobeOrg");
        var i = function() {
            var t = a.s_c_il;
            if (t)
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    if (n && "Visitor" === n._c && n.marketingCloudOrgID === e)
                        return n
                }
        }();
        if (i)
            return i;
        var n = e
          , r = n.split("").reverse().join("")
          , s = new W(e,null,r);
        t === Object(t) && t.cookieDomain && (s.cookieDomain = t.cookieDomain),
        function() {
            a.s_c_il.splice(--a.s_c_in, 1)
        }();
        var o = v.getIeVersion();
        if ("number" == typeof o && o < 10)
            return s._helpers.replaceMethodsWithFunction(s, function() {});
        var l = function() {
            try {
                return a.self !== a.parent
            } catch (e) {
                return !0
            }
        }() && !function(e) {
            return e.cookieWrite("TEST_AMCV_COOKIE", "T", 1),
            "T" === e.cookieRead("TEST_AMCV_COOKIE") && (e._helpers.removeCookie("TEST_AMCV_COOKIE"),
            !0)
        }(s) && a.parent ? new E(e,t,s,a.parent) : new W(e,t,r);
        return s = null,
        l.init(),
        l
    }
    ,
    function() {
        function e() {
            W.windowLoaded = !0
        }
        a.addEventListener ? a.addEventListener("load", e) : a.attachEvent && a.attachEvent("onload", e),
        W.codeLoadEnd = (new Date).getTime()
    }(),
    W.config = X,
    a.Visitor = W,
    W
}();
try {
    (function(id, loader) {
        window.utag.tagsettings = window.utag.tagsettings || {};
        window.utag.tagsettings.adobe = window.utag.tagsettings.adobe || {};
        var vAPI = window.utag.tagsettings.adobe.visitorAPI = window.utag.tagsettings.adobe.visitorAPI || (function() {
            function logger(msg) {
                utag.DB('[' + id + '] : ' + msg);
            }
            function Observer(orgId, config) {
                var observers = []
                  , visitor = {}
                  , demdex = null
                  , instance = null
                  , regex = new RegExp('AMCV_' + window.encodeURIComponent(orgId) + '=(.*?)(;|$)')
                  , active = false
                  , util = {
                    'hasOwn': function(o, a) {
                        return o !== null && Object.prototype.hasOwnProperty.call(o, a);
                    }
                }
                  , mTags = (function() {
                    var tags = [], tag, cfg = utag.loader.cfg, loadcond = {
                        1: 1,
                        4: 1
                    };
                    for (tag in cfg) {
                        if (!util.hasOwn(cfg, tag)) {
                            continue;
                        }
                        if (cfg[tag].tid === 1191 && loadcond[cfg[tag].load]) {
                            tags.push(tag);
                        }
                    }
                    return tags;
                }());
                function mTagsLoaded() {
                    var loaded = true, id;
                    for (var i = 0, len = mTags.length; i < len; i++) {
                        id = mTags[i];
                        if (!utag.loader.f[id]) {
                            loaded = false;
                            break;
                        }
                    }
                    return loaded;
                }
                function notify(result) {
                    instance = result;
                    if (instance && instance.setCustomerIDs) {
                        var aliases, alias;
                        for (aliases in visitor) {
                            if (util.hasOwn(visitor, aliases)) {
                                alias = visitor[aliases];
                                if (alias.authState && Visitor.AuthState[alias.authState] !== undefined) {
                                    alias.authState = Visitor.AuthState[alias.authState];
                                }
                            }
                        }
                        instance.setCustomerIDs(visitor);
                    }
                    while (observers.length !== 0) {
                        var nextCallback = observers.shift();
                        nextCallback(instance);
                    }
                    return true;
                }
                this.sync = function(ids) {
                    var alias;
                    for (alias in ids) {
                        if (util.hasOwn(ids, alias)) {
                            if (!visitor[alias]) {
                                visitor[alias] = ids[alias];
                            }
                        }
                    }
                    return true;
                }
                ;
                this.subscribe = function(callback) {
                    var self = this;
                    if (instance !== null) {
                        return callback(instance);
                    } else {
                        observers.push(callback);
                        if (!active) {
                            logger('demdex org id [' + orgId + '] sync requested');
                            (function retry(retries) {
                                if (retries === 0) {
                                    logger('demdex org id [' + orgId + '] sync timed out!');
                                    active = false;
                                    return notify(undefined);
                                } else {
                                    active = true;
                                    if (regex.test(document.cookie) && /\|mcmid\|/i.test(window.decodeURIComponent(RegExp.$1)) && mTagsLoaded()) {
                                        logger('demdex org id [' + orgId + '] sync completed');
                                        return config ? notify(window.Visitor.getInstance(orgId, config)) : notify(window.Visitor.getInstance(orgId));
                                    } else {
                                        if (window.Visitor && window.Visitor.getInstance) {
                                            if (config && !demdex) {
                                                demdex = window.Visitor.getInstance(orgId, config);
                                            }
                                        }
                                        window.setTimeout(function() {
                                            logger('demdex org id [' + orgId + '] sync, waiting...');
                                            retry(--retries);
                                        }, 25);
                                    }
                                }
                            }(80));
                        }
                    }
                    return true;
                }
                ;
            }
            function VisitorAPIWrapper() {
                var observers = {};
                this._version = '1.0';
                this.getInstance = function(orgId, callback, config, customerIds) {
                    if (!orgId) {
                        return callback(undefined);
                    }
                    orgId = !/@AdobeOrg$/.test(orgId) ? orgId + '@AdobeOrg' : orgId;
                    if (!observers[orgId]) {
                        if (!config) {
                            logger('demdex org id [' + orgId + '] sync error. marketing cloud tag missing demdex config');
                            return callback(undefined);
                        }
                        observers[orgId] = new Observer(orgId,config);
                    }
                    if (customerIds) {
                        observers[orgId].sync(customerIds);
                    }
                    observers[orgId].subscribe(callback);
                    return true;
                }
                ;
            }
            return new VisitorAPIWrapper();
        }());
        var u = {
            "id": id
        };
        utag.o[loader].sender[id] = u;
        if (utag.ut === undefined) {
            utag.ut = {};
        }
        var match = /ut\d\.(\d*)\..*/.exec(utag.cfg.v);
        if (utag.ut.loader === undefined || !match || parseInt(match[1]) < 41) {
            u.loader = function(o, a, b, c, l, m) {
                utag.DB(o);
                a = document;
                if (o.type == "iframe") {
                    m = a.getElementById(o.id);
                    if (m && m.tagName == "IFRAME") {
                        b = m;
                    } else {
                        b = a.createElement("iframe");
                    }
                    o.attrs = o.attrs || {};
                    utag.ut.merge(o.attrs, {
                        "height": "1",
                        "width": "1",
                        "style": "display:none"
                    }, 0);
                } else if (o.type == "img") {
                    utag.DB("Attach img: " + o.src);
                    b = new Image();
                } else {
                    b = a.createElement("script");
                    b.language = "javascript";
                    b.type = "text/javascript";
                    b.async = 1;
                    b.charset = "utf-8";
                }
                if (o.id) {
                    b.id = o.id;
                }
                for (l in utag.loader.GV(o.attrs)) {
                    b.setAttribute(l, o.attrs[l]);
                }
                b.setAttribute("src", o.src);
                if (typeof o.cb == "function") {
                    if (b.addEventListener) {
                        b.addEventListener("load", function() {
                            o.cb();
                        }, false);
                    } else {
                        b.onreadystatechange = function() {
                            if (this.readyState == "complete" || this.readyState == "loaded") {
                                this.onreadystatechange = null;
                                o.cb();
                            }
                        }
                        ;
                    }
                }
                if (o.type != "img" && !m) {
                    l = o.loc || "head";
                    c = a.getElementsByTagName(l)[0];
                    if (c) {
                        utag.DB("Attach to " + l + ": " + o.src);
                        if (l == "script") {
                            c.parentNode.insertBefore(b, c);
                        } else {
                            c.appendChild(b);
                        }
                    }
                }
            }
            ;
        } else {
            u.loader = utag.ut.loader;
        }
        if (utag.ut.typeOf === undefined) {
            u.typeOf = function(e) {
                return ({}).toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
            }
            ;
        } else {
            u.typeOf = utag.ut.typeOf;
        }
        u.hasOwn = function(o, a) {
            return o != null && Object.prototype.hasOwnProperty.call(o, a);
        }
        ;
        u.isEmptyObject = function(o, a) {
            for (a in o) {
                if (u.hasOwn(o, a))
                    return false;
            }
            return true;
        }
        ;
        u.ev = {
            "view": 1
        };
        u.initialized = false;
        u.map_func = function(arr, obj, item) {
            var i = arr.shift();
            obj[i] = obj[i] || {};
            if (arr.length > 0) {
                u.map_func(arr, obj[i], item);
            } else {
                obj[i] = item;
            }
        }
        ;
        u.clearEmptyKeys = function(object) {
            for (var key in object) {
                if (object[key] === "" || object[key] === undefined) {
                    delete object[key];
                }
            }
            return object;
        }
        ;
        u.map = {};
        u.extend = [];
        u.send = function(a, b) {
            if (u.ev[a] || u.ev.all !== undefined) {
                utag.DB("send:54");
                utag.DB(b);
                var c, d, e, f;
                u.data = {
                    "adobe_org_id": "900A67C25245B3C10A490D4C",
                    "config": {
                        "trackingServer": "t.mazdausa.com",
                        "trackingServerSecure": "st.mazdausa.com",
                        "marketingCloudServer": "t.mazdausa.com",
                        "marketingCloudServerSecure": "st.mazdausa.com",
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
                        }())
                    },
                    'customer_ids': {}
                };
                utag.DB("send:54:EXTENSIONS");
                utag.DB(b);
                c = [];
                for (d in utag.loader.GV(u.map)) {
                    if (b[d] !== undefined && b[d] !== "") {
                        e = u.map[d].split(",");
                        for (f = 0; f < e.length; f++) {
                            u.map_func(e[f].split("."), u.data, b[d]);
                        }
                    }
                }
                utag.DB("send:54:MAPPINGS");
                utag.DB(u.data);
                if (!u.data.adobe_org_id) {
                    utag.DB(u.id + ": Tag not fired: Required attribute not populated [adobe_org_id]");
                    return;
                }
                if (!u.initialized) {
                    u.initialized = !0;
                    vAPI.getInstance(u.data.adobe_org_id, function(instance) {}, u.clearEmptyKeys(u.data.config), u.data.customer_ids);
                }
                utag.DB("send:54:COMPLETE");
            }
        }
        ;
        utag.o[loader].loader.LOAD(id);
    }("54", "mazdausa.main"));
} catch (error) {
    utag.DB(error);
}
(function() {
    if (typeof utag != 'undefined') {
        utag.initcatch = true;
        for (var i in utag.loader.GV(utag.loader.cfg)) {
            var b = utag.loader.cfg[i];
            if (b.load != 4) {
                utag.initcatch = false;
                break
            }
            ;if (b.wait == 1) {
                utag.initcatch = false;
                break
            }
        }
        ;if (utag.initcatch)
            utag.handler.INIT();
    }
}
)();
