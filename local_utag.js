//tealium universal tag - utag.loader ut4.0.201903052121, Copyright 2019 Tealium.com Inc. All Rights Reserved.
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
            if (RegExp.$1.indexOf("/dev/") === -1) {
                var s = RegExp.$1;
                while (s.indexOf("%") != -1) {
                    s = decodeURIComponent(s);
                }
                s = s.replace(/\.\./g, "");
                ul(s);
                utag_condload = true;
                __tealium_default_path = '//tags.tiqcdn.com/utag/mazdausa/main/dev/';
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
            copy(a);
            console.log("Copied a track call, paste it now!");
            debugger;
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
        path: "//tags.tiqcdn.com/utag/mazdausa/main/dev/",
        utid: "mazdausa/main/201903052121"
    };
    utag.cfg.v = utag.cfg.template + "201903052121";
    utag.cond = {
        10: 0,
        11: 0,
        12: 0,
        13: 0,
        14: 0,
        15: 0,
        17: 0,
        18: 0,
        19: 0,
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
            case '17':
                try {
                    c[17] |= (typeof d['exponential_value'] != 'undefined' && typeof d['exponential_value'] != 'undefined' && d['exponential_value'] != '')
                } catch (e) {
                    utag.DB(e)
                }
                ;break;
            case '18':
                try {
                    c[18] |= (typeof d['ten_value'] != 'undefined' && typeof d['ten_value'] != 'undefined' && d['ten_value'] != '')
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
                    teal.getFullPageName = function getFullPageName() {
                        var URL_PATHS = ['mazda3-sedan', 'mazda3-hatchback', 'mazda6', 'cx-3', 'cx-5', 'cx-9', 'mx-5-miata'];
                        var URL_HASHES = ['m3s', 'm3h', 'm6g', 'cx3', 'cx5', 'cx9', 'mx5', 'all', 'm6g', 'mxr'];
                        var INPAGE_TEXT = ['Mazda3 4-door', 'Mazda3 5-door', 'Mazda6', 'CX-3', 'CX-5', 'CX-9', 'MX-5 Miata'];
                        var RAB_PRINT_VEHICLES = ['M3S', 'M3H', 'M6G', 'CX3', 'CX5', 'CX9', 'MX5', 'FLV', 'MXR'];
                        var RAB_VEHICLES = [/\d\dM3S/, /\d\dM3H/, /16M6G/, /\d\dCX3/, /\d\dCX5/, /\d\dCX9/, /\d\dMX5/, /FLV/, /17M6G/, ];
                        var fromDataLayer = teal.getVar('vehicle.vehicleID') || '';
                        var fromURLParam = teal.getVar('vehicleID.fromURLParam') || teal.getVar('vehicleID.fromURLParamB');
                        var fromURLPath = URL_PATHS.findIndex(function(path) {
                            return document.location.pathname.toLowerCase().includes(path);
                        });
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
                        var _vehicle = fromDataLayer || fromURLParam || URL_HASHES[index] || '';
                        var _section = teal.getVar('site.section');
                        var _subsection = teal.getVar('site.subsection') || '';
                        var _pageName = teal.getVar('page.name') || '';
                        var _subCat = teal.getVar('page.subCategory') || '';
                        var _year = teal.getVar('vehicle.modelYear') || '';
                        var _events = teal.getVar('events.kpi') || '';
                        var _pageStructure = _section == 'regional incentives' ? [_section, _vehicle] : _subsection == 'inventory' && _pageName == 'models' ? [_section, _subsection, _pageName, _subCat] : [_section, _subsection, _pageName, _vehicle];
                        var formSelection = document.querySelector('input:checked') ? document.querySelector('input:checked')['id'] : '';
                        var _fullPageName = _pageStructure.filter(function(x) {
                            return x !== '';
                        }).join(':').replace(/\s/g, '_');
                        return _fullPageName;
                    }
                }
            } catch (e) {
                utag.DB(e)
            }
        }
        , function(a, b) {
            try {
                if (1) {
                    try {
                        b['full_page_name'] = teal.getFullPageName()
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
                'home:home:home': 'Dream0|musa_0|3eedd142-e884-b321-4617-8a208db81847|4336693|0||||||pdata=partner%3Dtap22978%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Dreamers|CQAAAEAAAA20ECA|9d1cf807bbdb46a8a1d53d7807daf076||9spr9l6||tl6ows5|||||'
            }, {
                'ools:compare:details:cx3:compare': 'shopp0|musa_007|db5384f5-a24d-ce71-4d9a-afe874e3cb1f|4336696|1|client=654223&ev=2&page=Validate|client=655883&ev=1||3||pdata=partner%3Dtap22949%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Shoppers|CQAAAEAAAA3UECA|402c1e4825d94ddf881ee3260284db42||qev2ig1|||2xm23p1|ihu9797|||'
            }, {
                'tools:apply_for_financing:info': 'decid0|musa_001|f88cb71c-68fc-fdf4-aeda-bc7da54dbc7e|||client=654223&ev=1&page=Shop|||3||pdata=partner%3Dtap22979%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Decided|||85114|tnaf3xu|9d3nwvk||||||Lead'
            }, {
                'tools:build:summary:cx3:buildComplete': 'Explo0|musa_007|32c58ea2-7aa6-f190-6db0-e3c29366138f|4338288|2|c=601533&ev=5&page=Cclass|client=655883&ev=1||||pdata=partner%3Dtap22977%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Explorers|CQAAAEAAAA3EECA|67df3e3bfc1c4c9b875ad47d95a32d98||edj49ti|||2xm23p1||||ViewContent'
            }, {
                'tools:build:summary:cx5:buildComplete': 'Explo0|musa_008|4f59999a-e69e-7349-3f9f-cfb42d8add7e|4338288|2|c=601533&ev=5&page=Cclass|client=455403&ev=1&page=CX5||||pdata=partner%3Dtap22977%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Explorers|CQAAAEAAAA3EECA|db09be85f35c4d968ba8d78de57c2ac1||dicbm9b|||2xm23p1||||ViewContent'
            }, {
                'tools:build:summary:cx9:buildComplete': 'Explo0|musa_009|1f319937-bd60-f6a9-c201-6684523e07f3|4338288|2|c=601533&ev=5&page=Cclass|client=463963&ev=1&page=CX9||||pdata=partner%3Dtap22977%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Explorers|CQAAAEAAAA3EECA|7c6daa5f505046e1b1dd265305d34102||zy1ypoy|||2xm23p1||||ViewContent'
            }, {
                'tools:build:summary:m3h:buildComplete': 'Explo0|musa_00-|c6dfc89c-b659-b611-edea-198b56b71eed|4338288|2|c=601533&ev=4&page=Mclass|client=462213&ev=1&page=M3H||||pdata=partner%3Dtap22977%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Explorers|CQAAAEAAAA3EECA|bfb8ce697fb5417aab7a5bf9f281e100||kphg7zh|||2xm23p1||||ViewContent'
            }, {
                'tools:build:summary:m3s:buildComplete': 'Explo0|musa_00a|c9faafd5-d915-c7aa-991a-5dd0b50d8ed8|4338288|2|c=601533&ev=4&page=Mclass|client=609393&ev=1&page=M3S||||pdata=partner%3Dtap22977%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Explorers|CQAAAEAAAA3EECA|f811aff6a3d14df5b1a664d4a121760f||t8zqks7|||2xm23p1||||ViewContent'
            }, {
                'tools:build:summary:m6g:buildComplete': 'Explo0|musa_00b|d6d94d1c-b260-6aeb-6fbd-d551b78f860b||2|c=601533&ev=4&page=Mclass|client=609413&ev=1&page=M6G||||pdata=partner%3Dtap22977%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Explorers|CQAAAEAAAA3EECA|b8fd8f4659a94854bd61f042a5f5ee45||g7wccs1|||2xm23p1||||ViewContent'
            }, {
                'tools:build:summary:mx5:buildComplete': 'Explo0|musa_00c|ec79c959-7f99-73b3-0d61-43ec097856e2|4338288|2|c=601533&ev=4&page=Mclass|client=654243&ev=1&page=MX5||||pdata=partner%3Dtap22977%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Explorers|CQAAAEAAAA3EECA|89a0e9510f424156859fd9c475cd13e3||y0o3snj|||2xm23p1||||ViewContent'
            }, {
                'tools:build:summary:mxr:buildComplete': 'Explo0|musa_00d|ec79c959-7f99-73b3-0d61-43ec097856e2|4338288|2||||||pdata=partner%3Dtap22977%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Explorers|CQAAAEAAAA3EECA|fd07cb79f59a4018a422552de856205c||a953z5u|||2xm23p1||||ViewContent'
            }, {
                'tools:compare:details:cx5:compare': 'shopp0|musa_008|99c8e3ff-2e1c-8388-a483-25bf1a776584|4336696|1|client=654223&ev=2&page=Validate|||3||pdata=partner%3Dtap22949%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Shoppers|CQAAAEAAAA3UECA|1be901e99e684c76b0bab3960732159c|99994|bcxuca4|||2xm23p1|ihu9797|||'
            }, {
                'tools:compare:details:cx9:compare': 'shopp0|musa_009|d0d3376a-14bb-addd-5c6f-e69f9ea8bb60|4336696|1|client=654223&ev=2&page=Validate|||3||pdata=partner%3Dtap22949%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Shoppers|CQAAAEAAAA3UECA|bbb170f6c1514dfe945d775cdf94ae4d|100834|ggpskqs|||2xm23p1|ihu9797|||'
            }, {
                'tools:compare:details:m3h:compare': 'shopp0|musa_00-|18ed97df-e27a-a147-f8b8-b2b62f36056d|4336696|1|client=654223&ev=2&page=Validate|||3||pdata=partner%3Dtap22949%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Shoppers|CQAAAEAAAA3UECA|52347910e8ad44d2923fefcf25b382f5|88234|vzs5odi|||2xm23p1|ihu9797|||'
            }, {
                'tools:compare:details:m3s:compare': 'shopp0|musa_00a|93bef4f9-45a3-6b26-f86b-14fd0594de94|4336696|1|client=654223&ev=2&page=Validate|||3||pdata=partner%3Dtap22949%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Shoppers|CQAAAEAAAA3UECA|4a04c43f50a2445e9b81eece708cbf1e|86554|3pd4xfk|||2xm23p1|ihu9797|||'
            }, {
                'tools:compare:details:m6g:compare': 'shopp0|musa_00b|2b8b1283-3719-c065-260e-21adf0ac3408||1|client=654223&ev=2&page=Validate|||3||pdata=partner%3Dtap22949%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Shoppers|CQAAAEAAAA3UECA|81d8ac9f28ae4dc08d48a2684a54381a|91954|6ldbc2a|||2xm23p1|ihu9797|||'
            }, {
                'tools:compare:details:mx5:compare': 'shopp0|musa_00c|50b09c3f-8a92-b4b9-d321-e644151fcc3f|4336696|1|client=654223&ev=2&page=Validate||client=654243&ev=1|3||pdata=partner%3Dtap22949%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Shoppers|CQAAAEAAAA3UECA|4627bf93e8cb4e3f97a4e9672799c008|93874|7bcvmn4|||2xm23p1|ihu9797|||'
            }, {
                'tools:compare:details:mxr:compare': 'shopp0|musa_00d|9c684f25-e303-1c0d-6a02-9ed472a12df5|4336696|1|client=654223&ev=2&page=Conversion Page||client=718673&ev=1|3||pdata=partner%3Dtap22949%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Shoppers|CQAAAEAAAA3UECA|5f1431018c8e48bc898e415c0d6e3751|128794|vvmk4hw|||2xm23p1|ihu9797|||'
            }, {
                'tools:incentives:national': 'Dream0|musa_009||||||||||||||||||||'
            }, {
                'tools:incentives:national:cx3:scroll': 'Dream0|musa_00-|d242ec05-e02c-2724-eb99-01743440b310|4336693|||||||pdata=partner%3Dtap22978%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Dreamers|CQAAAEAAAA20ECA|c321eaac3a794e9593147d4f90f4f83b||1knxj5x||tl6ows5|||||'
            }, {
                'tools:incentives:national:cx3:specialOffersExpand': 'shopp0|musa_00|c8417331-0dd1-a01f-1d1b-b7002035a620|4336696|1||||||pdata=partner%3Dtap22949%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Shoppers|CQAAAEAAAA3UECA|f4d7b76de16f416c9ccd090726f50c64||nviee1b|||2xm23p1|ihu9797||AddPaymentInfo'
            }, {
                'tools:incentives:national:cx5:scroll': 'Dream0|musa_00b|85812c4c-57bb-0a59-d24d-a05d08d2677c|4336693|||||||pdata=partner%3Dtap22978%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Dreamers|CQAAAEAAAA20ECA|2b786297168b46cd9fd67fdd118c2859||31jiou1||tl6ows5|||||'
            }, {
                'tools:incentives:national:cx5:specialOffersExpand': 'shopp0|musa_000|490fa839-3558-69d0-4b68-fa07f4300c67|4336696|1||||||pdata=partner%3Dtap22949%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Shoppers|CQAAAEAAAA3UECA|d5d6e113afe64010a53764ffbeb9637f||ooq9jm0|||2xm23p1|ihu9797||AddPaymentInfo'
            }, {
                'tools:incentives:national:cx9:scroll': 'Dream0|musa_00d|bb941c85-1e61-9010-5f95-23faae738a26|4336693|||||||pdata=partner%3Dtap22978%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Dreamers|CQAAAEAAAA20ECA|2b0687d69f75465f8def73bbb994ce47||wp73dh0||tl6ows5|||||'
            }, {
                'tools:incentives:national:cx9:specialOffersExpand': 'shopp0|musa_001|f69de3a1-8a97-1d5b-880d-128a57e98b47|4336696|1||||||pdata=partner%3Dtap22949%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Shoppers|CQAAAEAAAA3UECA|53fe3e7cc39944bb8c19b425a364e3d0||e6hk675|||2xm23p1|ihu9797||AddPaymentInfo'
            }, {
                'tools:incentives:national:m3h:scroll': 'Dream0|musa_00f|8e67d75f-f7ae-fadb-5068-064625cf3b20|4336693|||||||pdata=partner%3Dtap22978%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Dreamers|CQAAAEAAAA20ECA|390c70ae761d4ad0885447c3fee215a7||qbyi3wf||tl6ows5|||||'
            }, {
                'tools:incentives:national:m3h:specialOffersExpand': 'shopp0|musa_002|da07660d-1569-9a5f-ad14-a1407673bd9e|4336696|1||||||pdata=partner%3Dtap22949%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Shoppers|CQAAAEAAAA3UECA|b57beae1a0ac4ca3af88391c896ddb5e||ypr0dop|||2xm23p1|ihu9797||AddPaymentInfo'
            }, {
                'tools:incentives:national:m3s:scroll': 'Dream0|musa_00h|56c5f667-afb6-3d6c-76b2-e36509bf9bd4|4336693|||||||pdata=partner%3Dtap22978%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Dreamers|CQAAAEAAAA20ECA|47ed35de11a14c609004d1d55a27c9a9||87had6n||tl6ows5|||||'
            }, {
                'tools:incentives:national:m3s:specialOffersExpand': 'shopp0|musa_003|b3b592c6-cedd-195c-52b4-8db0148a9c35|4336696|1||||||pdata=partner%3Dtap22949%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Shoppers|CQAAAEAAAA3UECA|52fe0dd539dc4b59a512c6586ee0e8ac||6fh9rrg|||2xm23p1|ihu9797||AddPaymentInfo'
            }, {
                'tools:incentives:national:m6g:scroll': 'Dream0|musa_00j|275820da-750c-0639-2615-e3b52362cdb1||||||||pdata=partner%3Dtap22978%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Dreamers|CQAAAEAAAA20ECA|3d098a89dd99471c97c5b5f557364ea7||c5mor19||tl6ows5|||||'
            }, {
                'tools:incentives:national:m6g:specialOffersExpand': 'shopp0|musa_004|cc36ce0d-6d18-a52d-4af7-8266556b1bf7||1||||||pdata=partner%3Dtap22949%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Shoppers|CQAAAEAAAA3UECA|5a7eaabd581f47baa1834d305d2a88ad||36d13yt|||2xm23p1|ihu9797||AddPaymentInfo'
            }, {
                'tools:incentives:national:mx5:scroll': 'Dream0|musa_00l|abafd8a7-16c4-5182-5d56-56eb708a685c|4336693|||||||pdata=partner%3Dtap22978%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Dreamers|CQAAAEAAAA20ECA|40512773a09845778469b30b0f28b10e||6layfr1||tl6ows5|||||'
            }, {
                'tools:incentives:national:mx5:specialOffersExpand': 'shopp0|musa_005|5282bb1b-02f9-faf6-9788-ff2416518c9b|4336696|1||||||pdata=partner%3Dtap22949%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Shoppers|CQAAAEAAAA3UECA|49f3fae65ffc4751b612860ec0ad7112||xfz425y|||2xm23p1|ihu9797||AddPaymentInfo'
            }, {
                'tools:incentives:national:mxr:scroll': 'Dream0|musa_00n|31b4095f-3856-12de-5909-8d159e76bafc|4336693|||||||pdata=partner%3Dtap22978%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Dreamers|CQAAAEAAAA20ECA|bcc0a53c2f7643daa34b8ea53f35029b||0qsq2pc||tl6ows5|||||'
            }, {
                'tools:incentives:national:mxr:specialOffersExpand': 'shopp0|musa_006|2d84bdee-e2ef-e0dd-ea9a-a08f09de360c|4336696|1||||||pdata=partner%3Dtap22949%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Shoppers|CQAAAEAAAA3UECA|9d1c30e8782b42c3b6be0d911bb3c468||xzhtth6|||2xm23p1|ihu9797||AddPaymentInfo'
            }, {
                'tools:incentives:national:specialOffersExpand': 'shopp0|musa_0|d423bae9-89b6-fad1-3ab6-cf6405c7c008|4336693|1||||||pdata=partner%3Dtap22949%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Shoppers|CQAAAEAAAA3UECA|b421ca994f094ef997509820f17ccffa||ahxjwyk|||2xm23p1|ihu9797||AddPaymentInfo'
            }, {
                'tools:inventory:cpo_detail:cx3:CPOdetailedView': 'shopp0|musa_00m|c6cc2d0b-7486-9296-8250-d3884739d996|4336696|||||||pdata=partner%3Dtap22949%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Shoppers|CQAAAEAAAA3UECA|8810a6f22c58476fa523050c6dd35351|||||2xm23p1||||'
            }, {
                'tools:inventory:cpo_detail:cx5:CPOdetailedView': 'shopp0|musa_00n|33e54df3-8809-e6cf-676b-f1f5990b36ad|4336696|1||||||pdata=partner%3Dtap22949%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Shoppers|CQAAAEAAAA3UECA|f590300a798541f190275a221d6d83bd|||||2xm23p1||||'
            }, {
                'tools:inventory:cpo_detail:cx7:CPOdetailedView': 'shopp0|musa_00u|b6433202-3073-6360-785a-20f1b7ecfc45|4336696|||||||pdata=partner%3Dtap22949%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Shoppers|CQAAAEAAAA3UECA|b7339dbf4d7a45279de20498dee7c41f|||||2xm23p1||||'
            }, {
                'tools:inventory:cpo_detail:cx9:CPOdetailedView': 'shopp0|musa_00o|0b96b934-d75a-7d39-09f6-34ef8885c52e|4336696|||||||pdata=partner%3Dtap22949%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Shoppers|CQAAAEAAAA3UECA|226ae130055c4aa9a05228f49ea8457c|||||2xm23p1||||'
            }, {
                'tools:inventory:cpo_detail:m3h:CPOdetailedView': 'shopp0|musa_00p|f7ef6e85-374f-ac25-9ce1-61d6a82c4ce7|4336696|||||||pdata=partner%3Dtap22949%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Shoppers|CQAAAEAAAA3UECA|3dbb1d27adec404bb5e56ed424c27d41|||||2xm23p1||||'
            }, {
                'tools:inventory:cpo_detail:m3s:CPOdetailedView': 'shopp0|musa_00q|46115837-2fe7-ea70-a172-269ab058501c|4336696|||||||pdata=partner%3Dtap22949%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Shoppers|CQAAAEAAAA3UECA|c13c1a4ab11a49ca80456b856851f0c0|||||2xm23p1||||'
            }, {
                'tools:inventory:cpo_detail:m6g:CPOdetailedView': 'shopp0|musa_00r|f0b53266-9f58-7890-403f-171eb7d21666||2||||||pdata=partner%3Dtap22949%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Shoppers|CQAAAEAAAA3UECA|e03cab1fc6a44f12a6f6e9b5ee3adf82|||||2xm23p1||||'
            }, {
                'tools:inventory:cpo_detail:ms3:CPOdetailedView': 'shopp0|musa_00v|7cfbc131-2731-5f8d-e1fb-6a2f8eb85658|4338288|||||||pdata=partner%3Dtap22949%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Shoppers|CQAAAEAAAA3UECA|68e941b566da48259de46b984d8c4318|||||2xm23p1||||'
            }, {
                'tools:inventory:cpo_detail:mx5:CPOdetailedView': 'shopp0|musa_00s|78a1156c-881e-bdf7-c0b7-d6df8fcce466|4336696|||||||pdata=partner%3Dtap22949%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Shoppers|CQAAAEAAAA3UECA|4f795810db66468aa6e11403aa9e107b|||||2xm23p1||||'
            }, {
                'tools:inventory:cpo_detail:mxr:CPOdetailedView': 'shopp0|musa_00t|6fb9c80a-0e46-3425-49b3-dd9530f0fb11|4336696|||||||pdata=partner%3Dtap22949%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Shoppers||a0944f77f6ad4c1d847c2018cc010036|||||2xm23p1||||'
            }, {
                'tools:inventory:cpo_detail:mz2:CPOdetailedView': 'shopp0|musa_00w|62208a59-824b-a7bb-eeba-f3c4f8dfd4c0|4336696|||||||pdata=partner%3Dtap22949%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Shoppers|CQAAAEAAAA3UECA|c97b738e66d5483abfea847ed2751fe1|||||2xm23p1||||'
            }, {
                'tools:inventory:cpo_detail:mz5:CPOdetailedView': 'shopp0|musa_00x|057c272f-8129-3696-7aec-e72919c35249|4336696|||||||pdata=partner%3Dtap22949%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Shoppers|CQAAAEAAAA3UECA|f90d799765a14957a8abb5c3f972ed68|||||2xm23p1||||'
            }, {
                'tools:inventory:cpo_detail:rx8:CPOdetailedView': 'shopp0|musa_00y|501c0ee9-f9da-e390-ed88-2aa2dd7de196|4336696|||||||pdata=partner%3Dtap22949%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Shoppers|CQAAAEAAAA3UECA|2b6fb5dbce2d4e988316a35468f89655|||||2xm23p1||||'
            }, {
                'tools:inventory:detail:cx3:NEWdetailedView': 'shopp0|musa_00e|d242ec05-e02c-2724-eb99-01743440b310|4336696|1||||||pdata=partner%3Dtap22949%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Shoppers|CQAAAEAAAA3UECA|ce43a083d6bc4592b6673e84f1f98f0a||mu1prra|||2xm23p1|ihu9797|||'
            }, {
                'tools:inventory:detail:cx5:NEWdetailedView': 'shopp0|musa_00f|8657db9b-874f-e381-f1bb-e2167101a1cc|4336696|||||||pdata=partner%3Dtap22949%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Shoppers|CQAAAEAAAA3UECA|76373ff704b942cdbd0a6522adfec6da||z8apu1a|||2xm23p1|ihu9797|||'
            }, {
                'tools:inventory:detail:cx9:NEWdetailedView': 'shopp0|musa_00g|eea20c1f-a518-e346-a43b-8df6251eaece|4336696|1||||||pdata=partner%3Dtap22949%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Shoppers|CQAAAEAAAA3UECA|81476474a3c640849454bf9ecb0b05db||8qinxk8|||2xm23p1|ihu9797|||'
            }, {
                'tools:inventory:detail:m3h:NEWdetailedView': 'shopp0|musa_00h|bf80b7a4-7195-78e5-b8cd-9bf04d66bd6f|4336696|1||||||pdata=partner%3Dtap22949%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Shoppers|CQAAAEAAAA3UECA|ae3890f866a946fc818d36c212a34ee3||88jjnnm|||2xm23p1|ihu9797|||'
            }, {
                'tools:inventory:detail:m3s:NEWdetailedView': 'shopp0|musa_00i|437fbd82-7d58-0c0d-7aac-11bf24846382|4336696|1||||||pdata=partner%3Dtap22949%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Shoppers|CQAAAEAAAA3UECA|93d1ade9ff4c4e20ad46fa5a0b54cac6||30b1l5r|||2xm23p1|ihu9797|||'
            }, {
                'tools:inventory:detail:m6g:NEWdetailedView': 'shopp0|musa_00j|192f366f-13ab-b4e2-4d35-0b3839d30652||1||||||pdata=partner%3Dtap22949%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Shoppers|CQAAAEAAAA3UECA|303b6ef709af4ff2a57c7428da79ff78||cssmpxb|||2xm23p1|ihu9797|||'
            }, {
                'tools:inventory:detail:mx5:NEWdetailedView': 'shopp0|musa_00k|33c7db80-d780-3996-b70f-c75952069781|4336696|1||||||pdata=partner%3Dtap22949%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Shoppers|CQAAAEAAAA3UECA|0a86e820d0af4d48ae48863f0cad3f8e||a5a0eom|||2xm23p1|ihu9797|||'
            }, {
                'tools:locate_dealer:overview': 'shopp0|musa_00z|232da1f5-a7e7-33eb-09ab-bdf1e5d2da91|4336696|1|client=654223&ev=1&page=Shop|||2||pdata=partner%3Dtap22949%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Shoppers|CQAAAEAAAA3UECA|90cb83e7411f4a94a2b136bcd2821a92|85234|7jl5x8z|||2xm23p1|ihu9797|1||'
            }, {
                'tools:locate_dealer:overview:callDealer': 'decid0|musa_0|501c0ee9-f9da-e390-ed88-2aa2dd7de196||||||||pdata=partner%3Dtap22979%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Decided|||||nevonyw||||||Lead'
            }, {
                'tools:locate_dealer:overview:clickDealerMap': 'decid0|musa_00|d697e7e2-b1aa-65aa-3366-e7a2b3645904||||||||pdata=partner%3Dtap22979%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Decided||||buc59f4|9d3nwvk||||||Lead'
            }, {
                'tools:locate_dealer:overview:dealerWebsite': 'decid0|musa_000|a799152b-45fc-68ec-4054-25bdcd01d975||||||||pdata=partner%3Dtap22979%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Decided||||atl15as|9d3nwvk||||||Lead'
            }, {
                'tools:pay_est:info:event14': 'shopp0|musa_00_|ffa0e47c-1e67-1f60-8f00-7fc7275e2a4f|4336696|1||||||pdata=partner%3Dtap22949%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Shoppers|CQAAAEAAAA3UECA|9f930dda27954a5086d6bd80b4db32c8||ljrrwrk|||2xm23p1|ihu9797|||'
            }, {
                'tools:quote:confirm:cx3:RAQcomplete': 'decid0|musa_002|42a4c418-de00-7f50-90cb-b2b28b2a8cae|||c=601533&ev=5&page=Cclass|client=655883&ev=1||||pdata=partner%3Dtap22979%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Decided||||ityu7im|9d3nwvk||||||Lead'
            }, {
                'tools:quote:confirm:cx5:RAQcomplete': 'decid0|musa_003|382c058a-aab8-6839-fffa-42c2e73d5e37|4336693||c=601533&ev=5&page=Cclass|client=455403&ev=1&page=CX5||||pdata=partner%3Dtap22979%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Decided||||p4mmem9|9d3nwvk||||||Lead'
            }, {
                'tools:quote:confirm:cx9:RAQcomplete': 'decid0|musa_004|92d9d977-2ae2-977f-405d-49b45222092f|4336693||c=601533&ev=5&page=Cclass|client=463963&ev=1&page=CX9||||pdata=partner%3Dtap22979%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Decided||||ak7whdl|9d3nwvk||||||Lead'
            }, {
                'tools:quote:confirm:m3h:RAQcomplete': 'decid0|musa_005|a32ad128-3b01-1075-b26e-a31ef20d53b0|4336693||c=601533&ev=4&page=Mclass|client=462213&ev=1&page=M3H||||pdata=partner%3Dtap22979%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Decided||||5rbzhsx|9d3nwvk||||||Lead'
            }, {
                'tools:quote:confirm:m3s:RAQcomplete': 'decid0|musa_006|1bc9938a-8f64-1b09-421d-040c9a7a3173|4336693||c=601533&ev=4&page=Mclass|client=609393&ev=1&page=M3S||||pdata=partner%3Dtap22979%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Decided||||v289avv|9d3nwvk||||||Lead'
            }, {
                'tools:quote:confirm:m6g:RAQcomplete': 'decid0|musa_007|f48c371a-2bc2-88e4-db70-8d9d82a282a6|||c=601533&ev=4&page=Mclass|client=609413&ev=1&page=M6G||||pdata=partner%3Dtap22979%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Decided||||zipiqy9|9d3nwvk||||||Lead'
            }, {
                'tools:quote:confirm:mx5:RAQcomplete': 'decid0|musa_008|28d69c3f-efec-f8ee-1ed6-880c150713e9|4336693||c=601533&ev=4&page=Mclass|client=654243&ev=1&page=MX5||||pdata=partner%3Dtap22979%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Decided||||as6rtna|9d3nwvk||||||Lead'
            }, {
                'tools:quote:confirm:mxr:RAQcomplete': 'decid0|musa_009|98c1b38b-5967-ec70-7c9a-260c8f88ecb1|4336693|||||||pdata=partner%3Dtap22979%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Decided||||t6p724g|9d3nwvk||||||Lead'
            }, {
                'vehicles:anniversary:overview:mx5': 'Dream0|musa_00s||4336696||||||||||||||||||'
            }, {
                'vehicles:cx3:features:cx3:scroll': 'Explo0|musa_00e|319c510d-b0d4-ebcd-401b-cd35e2387d5b|4338288|2||||||pdata=partner%3Dtap22977%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Explorers|CQAAAEAAAA3EECA|edfeec9b6d5841f5a284e233355829ee||rvvmqz6|||2xm23p1||||'
            }, {
                'vehicles:cx3:gallery:cx3:scroll': 'Explo0|musa_00m|800d1d31-8c11-c283-0a91-a8b883ac1dde|4338288|2||||||pdata=partner%3Dtap22977%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Explorers|CQAAAEAAAA3EECA|a797d23b8cc14ec1ba1a96ed80380a86||92pnye5|||2xm23p1||||'
            }, {
                'vehicles:cx3:overview:cx3': 'Dream0|musa_00a|619fefff-313d-8d40-bfd6-2de2f21b2ae0|4336693|0|||||CQAAAEAAAAFQgYAQ|pdata=partner%3Dtap22978%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Dreamers|CQAAAEAAAA20ECA|884aaa3dd106432384c6df37d3d81806||fnqw65m||tl6ows5||||'
            }, {
                'vehicles:cx3:specs:cx3': 'Explo0|musa_00u|7c012e9b-12b8-0857-1164-ac53ee9c6fc5|4338288|2|client=654223&ev=2&page=Validate|client=655883&ev=1||3||pdata=partner%3Dtap22977%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Explorers|CQAAAEAAAA3EECA|7345760e672a4f9c99e0178871a8cb23||rqal9vy|||2xm23p1||1||'
            }, {
                'vehicles:cx5:features:cx5:scroll': 'Explo0|musa_00f|1606c4d5-ccb9-8d13-9d05-1e927ebfdd55|4338288|2||||||pdata=partner%3Dtap22977%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Explorers|CQAAAEAAAA3EECA|3db3ece7a4d74f28b8c33965a14a41fd||qwl771d|||2xm23p1||||'
            }, {
                'vehicles:cx5:gallery:cx5:scroll': 'Explo0|musa_00n|3effaa04-beb6-0331-61b8-ef716fd90d26|4338288|2||||||pdata=partner%3Dtap22977%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Explorers|CQAAAEAAAA3EECA|516b7c1e106c47c081f95a5a104cb366||zdqjgfy|||2xm23p1||||'
            }, {
                'vehicles:cx5:overview:cx5': 'Dream0|musa_00c|c3e15617-df11-1944-097b-9babe773aedd|4336693|1|||||CQAAAEAAAAFggYAQ||CQAAAEAAAA20ECA|479865ace097467bbe704d5cf15c4c3b||luy86qj||tl6ows5|||||'
            }, {
                'vehicles:cx5:specs:cx5': 'Explo0|musa_00v|379e5d5a-64c5-fa48-56b2-a0857965f5fc|4338288|2|client=654223&ev=2&page=Validate|||3||pdata=partner%3Dtap22977%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Explorers|CQAAAEAAAA3EECA|d8ad82e338e04aa78af4a3558fc141c8|99754|y4ir7ln|||2xm23p1||1||'
            }, {
                'vehicles:cx9:features:cx9:scroll': 'Explo0|musa_00g|20a40357-f000-6091-4316-5acf6e29f96c|4338288|2||||||pdata=partner%3Dtap22977%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Explorers|CQAAAEAAAA3EECA|d77aca5490c04fabb4dfc9fb90108b5f||bfyj89o|||2xm23p1||||'
            }, {
                'vehicles:cx9:gallery:cx9:scroll': 'Explo0|musa_00o|0f5e9d5a-e5c2-79bc-37d3-5358140838cb|4338288|2||||||pdata=partner%3Dtap22977%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Explorers|CQAAAEAAAA3EECA|f7597ccf90c54071beccaccf86746033||cg37dum|||2xm23p1||||'
            }, {
                'vehicles:cx9:overview:cx9': 'Dream0|musa_00e|c879446c-37da-c6fc-4077-5e29c1aafc5f|4336693|2|||||CQAAAEAAAAFwgYAQ|pdata=partner%3Dtap22978%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Dreamers|CQAAAEAAAA20ECA|74d9197dd3d549979ae075a09fb23b33||itm68v9||tl6ows5|||||'
            }, {
                'vehicles:cx9:specs:cx9': 'Explo0|musa_00w|52183009-79b8-a2f4-aa9f-3f19f45917f1|4338288|2|client=654223&ev=2&page=Validate|||||pdata=partner%3Dtap22977%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Explorers|CQAAAEAAAA3EECA|d6dc883081094fba8988d0064585ab6c|100594|ys4vqo3|||2xm23p1||1||'
            }, {
                'vehicles:m3h:features:m3h:scroll': 'Explo0|musa_00h|63d5080f-5f91-6d85-e30d-21d9b9603bca|4338288|2||||||pdata=partner%3Dtap22977%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Explorers|CQAAAEAAAA3EECA|39012314bb794365a13154541d9b8dae||6rw05zm|||2xm23p1||||'
            }, {
                'vehicles:m3h:gallery:m3h:scroll': 'Explo0|musa_00p|08e0d3b0-f99e-64b2-443a-edb65485fac2|4338288|2||||||pdata=partner%3Dtap22977%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Explorers|CQAAAEAAAA3EECA|b6233746ce05440b97ccc1020b7f5b1c||9png2gi|||2xm23p1||||'
            }, {
                'vehicles:m3h:overview:m3h': 'Dream0|musa_00g|b3a2c3ca-bec7-8589-4476-76e96c3b953c|4336693|3|||||CQAAAEAAAAGAgYAQ|pdata=partner%3Dtap22978%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Dreamers|CQAAAEAAAA20ECA|eb4d677f839543c681b0ac75895f8028||pi83idj||tl6ows5|||||'
            }, {
                'vehicles:m3h:specs:m3h': 'Explo0|musa_00x|6cd86115-c058-b3e8-84a8-0f66bdcc8c2f|4338288|2|client=654223&ev=2&page=Validate|||3||pdata=partner%3Dtap22977%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Explorers|CQAAAEAAAA3EECA|b9990a8703d443e1b8b4f62c0329cc21|87754|h5we714|||2xm23p1||1||'
            }, {
                'vehicles:m3s:features:m3s:scroll': 'Explo0|musa_00i|96e1fd64-c504-63b9-0d83-ec6e46b15594|4338288|2|||||||CQAAAEAAAA3EECA|037c75c11f874d97b36c7206f933ead7||psobo4g|||2xm23p1||||'
            }, {
                'vehicles:m3s:gallery:m3s:scroll': 'Explo0|musa_00q|556b40af-5c5a-d498-7210-9f032371d6ec|4338288|2||||||pdata=partner%3Dtap22977%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Explorers|CQAAAEAAAA3EECA|29d915fd30ae408b9ef1162812ecc2ea||eeq5d2a|||2xm23p1||||'
            }, {
                'vehicles:m3s:overview:m3s': 'Dream0|musa_00i|de2f03d9-d3a8-4476-d435-14bb69415138|4336693|4|||||CQAAAEAAAAGQgYAQ|pdata=partner%3Dtap22978%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Dreamers|CQAAAEAAAA20ECA|25449cfca7734f7980f0c5c1a4b4a068||sr8nzio||tl6ows5||||'
            }, {
                'vehicles:m3s:specs:m3s': 'Explo0|musa_00y|7c66de5c-5bff-483a-b818-4fa046c637d5|4338288|2|client=654223&ev=2&page=Validate|||3||pdata=partner%3Dtap22977%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Explorers|CQAAAEAAAA3EECA|f1cb6d9eff9d4603a394619bc5400ae9|85954|lmmwj42|||2xm23p1||1||'
            }, {
                'vehicles:m6g:features:m6g:scroll': 'Explo0|musa_00j|3422b773-0748-67f6-4324-77e06028e5e5||2||||||pdata=partner%3Dtap22977%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Explorers|CQAAAEAAAA3EECA|dc38d92641a847b089c06dc70729dba4||yarrkpt|||2xm23p1||||'
            }, {
                'vehicles:m6g:gallery:m6g:scroll': 'Explo0|musa_00r|e1d40351-38f2-81fd-05bb-f321ac3f867a|4338288|2||||||pdata=partner%3Dtap22977%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Explorers|CQAAAEAAAA3EECA|04d23c820bbb4821bba06e8ebe7d1ce6||b4wx0mk|||2xm23p1||||'
            }, {
                'vehicles:m6g:overview:m6g': 'Dream0|musa_00k|ae456c1e-f11f-b504-7ea1-0f3e1bf25db1||5|||||CQAAAEAAAAHAgYAQ|pdata=partner%3Dtap22978%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Dreamers|CQAAAEAAAA20ECA|a87557af22b148f1923dfe28342e94e4||r0u282n||tl6ows5|||||'
            }, {
                'vehicles:mx5:features:mx5:scroll': 'Explo0|musa_00k|ec79c959-7f99-73b3-0d61-43ec097856e2|4338288|2||||||pdata=partner%3Dtap22977%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Explorers|CQAAAEAAAA3EECA|5f78d198a064468f8458a73aaeed186d||cou6yxa|||2xm23p1||||'
            }, {
                'vehicles:mx5:gallery:mx5:scroll': 'Explo0|musa_00s|03b04851-f930-f5b0-0a5c-ebe778dbcc09|4338288|2||||||pdata=partner%3Dtap22977%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Explorers|CQAAAEAAAA3EECA|461c93ed4e9e4571a7898b1a1e7c8392||ktr5b76|||2xm23p1||||'
            }, {
                'vehicles:mx5:overview:mx5': 'Dream0|musa_00m|b9ec5d6f-8130-d6f0-65da-3c2ef299113e|4336693|6|||||CQAAAEAAAAGggYAQ|pdata=partner%3Dtap22978%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Dreamers|CQAAAEAAAA20ECA|a4c5d01d0dce4c52aec0f50adb13e99d||8vn7jz4||tl6ows5|||||'
            }, {
                'vehicles:mx5:specs:mx5': 'Explo0|musa_00_|e50f29a8-9243-c26c-44a3-b631ed313409|4338288|2|client=654223&ev=2&page=Validate||client=654243&ev=1|3||pdata=partner%3Dtap22977%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Explorers|CQAAAEAAAA3EECA|ffe72ff3fd9e42fda6055df692397121|93034|lik7b2i|||2xm23p1||1||'
            }, {
                'vehicles:mxr:features:mxr:scroll': 'Explo0|musa_00l|91f1d5f5-8ec4-28e1-eb3e-f97b82620beb|4338288|2||||||pdata=partner%3Dtap22977%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Explorers|CQAAAEAAAA3EECA|d7483fd00bc94728b9c67c90886839a5||7upmiyt|||2xm23p1||||'
            }, {
                'vehicles:mxr:gallery:mxr:scroll': 'Explo0|musa_00t|c4136cec-c2c6-3b3f-79e2-23bafa1e48f8|4338288|2||||||pdata=partner%3Dtap22977%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Explorers|CQAAAEAAAA3EECA|5cc9181da88d4584844b162b11c31669||itn6sny|||2xm23p1||||'
            }, {
                'vehicles:mxr:overview:mxr': 'Dream0|musa_00o|15b86a26-6610-2548-f4c4-a786075bb4ce|4336693|7|||||CQAAAEAAAAGwgYAQ|pdata=partner%3Dtap22978%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Dreamers|CQAAAEAAAA20ECA|adfc4f57096f4b24ace3c4c6c73e3b0e||k48q1wl||tl6ows5|||||'
            }, {
                'vehicles:mxr:specs:mxr': 'Explo0|musa_01|1800c2bb-37b5-a573-9c29-7a2b72955536|4338288|2|client=654223&ev=2&page=Conversion Page||client=718673&ev=1|3||pdata=partner%3Dtap22977%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Explorers|CQAAAEAAAA3EECA|7df4a3c69fc4449bb4a96283f8e61e22|129514|d2xuuns|||2xm23p1||||'
            }, {
                'vehicles:mz6:specs:mz6': 'Explo0|musa_00z|0a09d84b-2d02-5e60-c82a-72c4e6555eee||2|client=654223&ev=2&page=Validate|||3||pdata=partner%3Dtap22977%2Cdata%3Dtype%3Aimpression%24audience%3AFY153%20Mazda_Explorers|CQAAAEAAAA3EECA|3d73be62bf694613853c728f3b9e0304|91354|r0u282n|||2xm23p1||1||'
            }, {
                'vehicles:new_era:overview': 'Dream0|musa_00q||||||||||||||||||||'
            }, {
                'vehicles:new_era:overview:m3s:KMUsubmit': 'Explo0|musa_00r||||||||||||||||||||CompleteRegistration'
            }, {
                'tools:test_drive:reserve_a_test_drive': '|||||||||||||||||||||Schedule'
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
                        b['tradedesk_fy152_value'] = b.full_page_value.split('|')[15]
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
                        b['tradedesk_fy152_shopper_v2_value'] = b.full_page_value.split('|')[19]
                    } catch (e) {}
                    ;try {
                        b['tradedesk_rt_fy152_value'] = b.full_page_value.split('|')[20]
                    } catch (e) {}
                    ;try {
                        b['facebook_event'] = b.full_page_value.split('|')[21]
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
        ];
        utag.handler.cfg_extend = [{
            "end": 0,
            "id": "3",
            "blr": 1,
            "alr": 0,
            "bwq": 0
        }, {
            "end": 0,
            "bwq": 0,
            "alr": 0,
            "blr": 1,
            "id": "5"
        }, {
            "end": 0,
            "id": "8",
            "blr": 1,
            "alr": 0,
            "bwq": 0
        }, {
            "end": 0,
            "bwq": 0,
            "alr": 0,
            "blr": 1,
            "id": "9"
        }, {
            "end": 0,
            "blr": 1,
            "id": "25",
            "bwq": 0,
            "alr": 0
        }, {
            "id": "28",
            "blr": 1,
            "alr": 0,
            "bwq": 0,
            "end": 0
        }, {
            "end": 0,
            "bwq": 0,
            "alr": 0,
            "blr": 1,
            "id": "29"
        }, {
            "end": 0,
            "id": "30",
            "blr": 1,
            "alr": 0,
            "bwq": 0
        }, {
            "end": 0,
            "alr": 0,
            "bwq": 0,
            "id": "31",
            "blr": 1
        }, {
            "bwq": 0,
            "alr": 0,
            "blr": 1,
            "id": "32",
            "end": 0
        }, {
            "end": 0,
            "blr": 1,
            "id": "34",
            "bwq": 0,
            "alr": 0
        }, {
            "id": "35",
            "blr": 1,
            "alr": 0,
            "bwq": 0,
            "end": 0
        }, {
            "end": 0,
            "bwq": 0,
            "alr": 0,
            "blr": 1,
            "id": "36"
        }, {
            "end": 0,
            "blr": 1,
            "id": "37",
            "bwq": 0,
            "alr": 0
        }, {
            "id": "38",
            "blr": 1,
            "alr": 0,
            "bwq": 0,
            "end": 0
        }, {
            "end": 0,
            "alr": 0,
            "bwq": 0,
            "id": "39",
            "blr": 1
        }, {
            "alr": 0,
            "bwq": 0,
            "id": "40",
            "blr": 1,
            "end": 0
        }, {
            "alr": 0,
            "bwq": 0,
            "id": "41",
            "blr": 1,
            "end": 0
        }, {
            "bwq": 0,
            "alr": 0,
            "blr": 1,
            "id": "42",
            "end": 0
        }, {
            "end": 0,
            "id": "43",
            "blr": 1,
            "alr": 0,
            "bwq": 0
        }, {
            "end": 0,
            "alr": 0,
            "bwq": 0,
            "id": "44",
            "blr": 1
        }];
        utag.loader.initcfg = function() {
            utag.loader.cfg = {
                "1": {
                    load: 1,
                    send: 1,
                    v: 201812141844,
                    wait: 1,
                    tid: 2045
                },
                "8": {
                    load: 1,
                    send: 1,
                    v: 201812142306,
                    wait: 1,
                    tid: 22024
                },
                "9": {
                    load: 1,
                    send: 1,
                    v: 201812142306,
                    wait: 1,
                    tid: 13068
                },
                "10": {
                    load: 1,
                    send: 1,
                    v: 201812200038,
                    wait: 1,
                    tid: 19003
                },
                "12": {
                    load: 1,
                    send: 1,
                    v: 201812142340,
                    wait: 1,
                    tid: 1068
                },
                "14": {
                    load: 1,
                    send: 1,
                    v: 201902271655,
                    wait: 1,
                    tid: 6026
                },
                "19": {
                    load: 1,
                    send: 1,
                    v: 201903010025,
                    wait: 1,
                    tid: 7133
                },
                "20": {
                    load: 1,
                    send: 1,
                    v: 201903051901,
                    wait: 1,
                    tid: 4049
                },
                "21": {
                    load: 1,
                    send: 1,
                    v: 201812211644,
                    wait: 1,
                    tid: 20067
                },
                "22": {
                    load: 1,
                    send: 1,
                    v: 201903010025,
                    wait: 1,
                    tid: 7132
                },
                "28": {
                    load: utag.cond[2],
                    send: 1,
                    v: 201902020104,
                    wait: 1,
                    tid: 20067
                },
                "29": {
                    load: utag.cond[3],
                    send: 1,
                    v: 201902020112,
                    wait: 1,
                    tid: 20067
                },
                "34": {
                    load: utag.cond[5],
                    send: 1,
                    v: 201902020141,
                    wait: 1,
                    tid: 7132
                },
                "35": {
                    load: utag.cond[6],
                    send: 1,
                    v: 201902020147,
                    wait: 1,
                    tid: 20067
                },
                "36": {
                    load: utag.cond[7],
                    send: 1,
                    v: 201902020151,
                    wait: 1,
                    tid: 20067
                },
                "37": {
                    load: utag.cond[8],
                    send: 1,
                    v: 201902020155,
                    wait: 1,
                    tid: 20067
                },
                "38": {
                    load: utag.cond[9],
                    send: 1,
                    v: 201902020201,
                    wait: 1,
                    tid: 20067
                },
                "39": {
                    load: (utag.cond[9] || utag.cond[10]),
                    send: 1,
                    v: 201902020213,
                    wait: 1,
                    tid: 20067
                },
                "40": {
                    load: utag.cond[10],
                    send: 1,
                    v: 201902020213,
                    wait: 1,
                    tid: 20067
                },
                "41": {
                    load: utag.cond[11],
                    send: 1,
                    v: 201902020213,
                    wait: 1,
                    tid: 20067
                },
                "42": {
                    load: (utag.cond[12] || utag.cond[13] || utag.cond[14]),
                    send: 1,
                    v: 201902041654,
                    wait: 1,
                    tid: 20067
                },
                "43": {
                    load: utag.cond[15],
                    send: 1,
                    v: 201902020220,
                    wait: 1,
                    tid: 20067
                },
                "45": {
                    load: utag.cond[17],
                    send: 1,
                    v: 201902050004,
                    wait: 1,
                    tid: 20067
                },
                "46": {
                    load: utag.cond[18],
                    send: 1,
                    v: 201902050008,
                    wait: 1,
                    tid: 20067
                },
                "47": {
                    load: utag.cond[19],
                    send: 1,
                    v: 201902050012,
                    wait: 1,
                    tid: 20067
                },
                "48": {
                    load: 1,
                    send: 1,
                    v: 201902060000,
                    wait: 1,
                    tid: 20103
                },
                "53": {
                    load: 1,
                    send: 1,
                    v: 201903052121,
                    wait: 1,
                    tid: 19063
                }
            };
            utag.loader.cfgsort = ["1", "8", "9", "10", "12", "14", "19", "20", "21", "22", "28", "29", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "45", "46", "47", "48", "53"];
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
                try {
                    if (1) {
                        function assignLinkTracking() {
                            var links = document.querySelectorAll("[data-analytics-link-component-name]");
                            for (var a = 0, l = links.length; a < l; a++) {
                                links[a].addEventListener("click", mazdaAnalytics.linkHandler, false);
                            }
                        }
                        assignLinkTracking();
                    }
                } catch (e) {
                    utag.DB(e)
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
