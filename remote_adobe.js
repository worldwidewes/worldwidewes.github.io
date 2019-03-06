//tealium universal tag - utag.53 ut4.0.201903062019, Copyright 2019 Tealium.com Inc. All Rights Reserved.
!function() {
    window.PaneMirror = {},
    PaneMirror.echo = function(e, t) {
        function r(e) {
            var t = n.findIndex(function(t) {
                return Array.from(t.targets).includes(e.target)
            })
              , r = n[t]
              , i = e.oldValue
              , o = e.target
              , s = r.dataOf(o)
              , c = e.attributeName === r.observed
              , u = !i || -1 != i.search(r.hidden) && -1 == i.search(r.visible)
              , d = !!i && (-1 != i.search(r.visible) && (!r.hidden || -1 == i.search(r.hidden)))
              , b = r.hidden && o.getAttribute(r.observed) ? -1 != o.getAttribute(r.observed).search(r.hidden) : o.getAttribute(r.observed) && -1 == o.getAttribute(r.observed).search(r.visible)
              , l = o.getAttribute(r.observed) && -1 != o.getAttribute(r.observed).search(r.visible);
            e.current = o.getAttribute(r.observed),
            e.datums = s,
            e.name = r.name,
            l && u && c && (mazdaAnalytics.log("Mirror ʕっ•ᴥ•ʔっ Dynamic Pane expanded: " + (s || e.name) + "\n\n", 1),
            a(e)),
            b && d && c && (mazdaAnalytics.log("Mirror ʕ￫ᴥ￩　ʔ Dynamic Pane retracted:  " + (s || e.name) + "\n\n", 1),
            dataLayer.events = "")
        }
        var n = e.map(function(e) {
            return e.targets = document.querySelectorAll(e.selector),
            e
        }).filter(function(e) {
            return e.targets.length > 0
        });
        if (0 !== n.length) {
            var a = t || function(e) {
                mazdaAnalytics.log(e, 1)
            }
              , i = new MutationObserver(function(e) {
                e.forEach(r)
            }
            )
              , o = {
                attributes: !0,
                attributeFilter: ["style", "class", "data-form-state"],
                attributeOldValue: !0
            };
            n.map(function(e) {
                return Array.from(e.targets)
            }).reduce(function(e, t) {
                return e.concat(t)
            }, []).forEach(function(e) {
                i.observe(e, o)
            })
        }
    }
}();
window.throttle = function(r, t) {
    var n, e, o, i = null, u = 0, a = function() {
        u = new Date,
        i = null,
        o = r.apply(n, e)
    };
    return function() {
        var f = new Date;
        u || (u = f);
        var l = t - (f - u);
        return n = this,
        e = arguments,
        l <= 0 ? (clearTimeout(i),
        i = null,
        u = f,
        o = r.apply(n, e)) : i || (i = setTimeout(a, l)),
        o
    }
}
,
Array.from || (Array.from = function() {
    var r = Object.prototype.toString
      , t = function(t) {
        return "function" == typeof t || "[object Function]" === r.call(t)
    }
      , n = function(r) {
        var t = Number(r);
        return isNaN(t) ? 0 : 0 !== t && isFinite(t) ? (t > 0 ? 1 : -1) * Math.floor(Math.abs(t)) : t
    }
      , e = Math.pow(2, 53) - 1
      , o = function(r) {
        var t = n(r);
        return Math.min(Math.max(t, 0), e)
    };
    return function(r) {
        var n = this
          , e = Object(r);
        if (null == r)
            throw new TypeError("Array.from requires an array-like object - not null or undefined");
        var i, u = arguments.length > 1 ? arguments[1] : void 0;
        if ("undefined" != typeof u) {
            if (!t(u))
                throw new TypeError("Array.from: when provided, the second argument must be a function");
            arguments.length > 2 && (i = arguments[2])
        }
        for (var a, f = o(e.length), l = t(n) ? Object(new n(f)) : new Array(f), p = 0; p < f; )
            a = e[p],
            u ? l[p] = "undefined" == typeof i ? u(a, p) : u.call(i, a, p) : l[p] = a,
            p += 1;
        return l.length = f,
        l
    }
}()),
String.prototype.includes || (String.prototype.includes = function(r, t) {
    "use strict";
    return "number" != typeof t && (t = 0),
    !(t + r.length > this.length) && this.indexOf(r, t) !== -1
}
),
String.prototype.startsWith || (String.prototype.startsWith = function(r, t) {
    return t = t || 0,
    this.substr(t, r.length) === r
}
),
Array.prototype.find || (Array.prototype.find = function(r) {
    if (null === this)
        throw new TypeError("Array.prototype.find called on null or undefined");
    if ("function" != typeof r)
        throw new TypeError("predicate must be a function");
    for (var t, n = Object(this), e = n.length >>> 0, o = arguments[1], i = 0; i < e; i++)
        if (t = n[i],
        r.call(o, t, i, n))
            return t
}
),
Array.prototype.findIndex || (Array.prototype.findIndex = function(r) {
    if (null === this)
        throw new TypeError("Array.prototype.findIndex called on null or undefined");
    if ("function" != typeof r)
        throw new TypeError("predicate must be a function");
    for (var t, n = Object(this), e = n.length >>> 0, o = arguments[1], i = 0; i < e; i++)
        if (t = n[i],
        r.call(o, t, i, n))
            return i;
    return -1
}
),
Array.prototype.indexOf || (Array.prototype.indexOf = function(r, t) {
    var n;
    if (null == this)
        throw new TypeError('"this" is null or not defined');
    var e = Object(this)
      , o = e.length >>> 0;
    if (0 === o)
        return -1;
    var i = +t || 0;
    if (Math.abs(i) === 1 / 0 && (i = 0),
    i >= o)
        return -1;
    for (n = Math.max(i >= 0 ? i : o - Math.abs(i), 0); n < o; ) {
        if (n in e && e[n] === r)
            return n;
        n++
    }
    return -1
}
);
function linkTracker(r, t, a) {
    var n = jQuery(r)
      , e = n.attr("data-analytics-link-component-name")
      , o = n.attr("data-analytics-link-type")
      , i = groom(n.attr("data-analytics-link-description"))
      , p = s.prop23
      , l = n.attr("data-analytics-link-number") || ""
      , c = n.attr("data-analytics-vehicle-ID") || ""
      , u = groom(n.attr("data-analytics-form-values") || "")
      , f = n.attr("data-analytics-content-description") || ""
      , d = n.attr("data-gallery-full-index") || ""
      , k = [l || c, i].filter(function(r) {
        return "" !== r
    }).join("_")
      , y = [f || e, o, k, d].filter(function(r) {
        return "" !== r
    }).join(":")
      , g = p + ":" + y
      , m = {
        prop1: c,
        prop25: g,
        prop36: l,
        prop48: y,
        prop50: k,
        prop51: e,
        prop52: u,
        prop60: o,
        eVar2: g,
        eVar48: y,
        eVar51: e,
        eVar60: o,
        list2: u
    };
    m.events = [t, a].map(function(r) {
        return r ? "event" + r : ""
    }).filter(function(r) {
        return "" !== r
    }).join(","),
    m.linkTrackVars = [l ? "prop36" : "", c ? "prop1" : "", u ? "list2,prop52" : "", m.events ? "events" : "", "prop25"].filter(function(r) {
        return "" !== r
    }).concat(defaultLinkTrackVars).join(","),
    s.tl(r, "o", g, m)
}
function groom(r) {
    var t = r.toLocaleLowerCase().trim().replace(/\s/g, "_").replace(/%|#|\?|!/g, "").replace(/\-|@|&|\^|`|~|\(|\)|;|\||\:/g, "_").replace(/(\D(\s)*)\.((\s)*\D)/g, "$1_$2").replace(/_{2,}/g, "_");
    return t
}
function vehicularize(e) {
    var r = String(e)
      , i = ["m3s", "m3h", "m6g", "cx3", "cx5", "cx7", "cx9", "mx5", "mxr", "rx8", "mz2", "ms3"]
      , t = new RegExp(i.reduce(function(e, r) {
        return e + "|" + r
    }),"gi");
    if ("" === r)
        return r;
    if (isIndistinguishable(r))
        return r;
    var n = r.trim().toLowerCase().replace(/\s/g, "_").replace(/-/g, "")
      , c = (n = (n = (n = (n = n.replace(/(20)?(1[1-9]|0[0-9])/g, "")).replace(/mazda/gi, "m").replace(/miata/gi, "mx").replace(/prht/gi, "mxr").replace(/speed/gi, "s").replace(/sedan/gi, "s").replace(/hatchback/gi, "h").replace(/(4|four).?door/gi, "s").replace(/(5|five).?door/gi, "h")).replace(/_(h|s)\b/gi, "$1")).replace(/m6(g?)/gi, "m6g").replace(/m2/gi, "mz2").replace(/m5/gi, "mz5").replace(/rx(8?)/gi, "rx8")).split("_").sort().filter(function(e) {
        return "" !== e
    }).filter(function(e) {
        return e.length >= 3
    }).filter(function(e) {
        return e.match(t)
    }).pop();
    c = void 0 === c ? n : c;
    var a = i.filter(function(e) {
        return -1 !== c.indexOf(e)
    }).pop();
    return a = void 0 === a ? c.toUpperCase() : a.toUpperCase()
}
function isIndistinguishable(e) {
    var r = String(e).toLowerCase();
    if (-1 !== ["m3s", "m3h", "m6g", "cx3", "cx5", "cx7", "cx9", "mx5", "mxr", "rx8", "mz2", "ms3"].findIndex(function(e) {
        return e == r
    }))
        return !0;
    if (/^(c|m|r)(x|[1-9])([1-9]|h|g|r|s|z)$/.test(r))
        return !0;
    var i = 3 == r.length
      , t = -1 !== r.search(/\w{3}/g)
      , n = 0 === r.search(/^\D/);
    return !!(i && t && n)
}
!function(e, t, n) {
    function o(e) {
        var t = a.findIndex(function(t) {
            return Array.from(t.targets).includes(e.target)
        })
          , o = a[t]
          , r = o.dataOf(e.target)
          , i = e.attributeName === o.observed
          , s = !e.oldValue || e.oldValue.includes(o.off) && !e.oldValue.includes(o.on)
          , l = !!e.oldValue && (e.oldValue.includes(o.on) && (!o.off || !e.oldValue.includes(o.off)))
          , c = o.off ? e.target.getAttribute(o.observed).includes(o.off) : !e.target.getAttribute(o.observed).includes(o.on)
          , u = e.target.getAttribute(o.observed).includes(o.on);
        e.current = e.target.getAttribute(o.observed),
        e.datums = r,
        e.name = o.name,
        e.inventory = r,
        u && s && i && n(e),
        c && l && i && n(e)
    }
    var r = [{
        name: "inventorySelectModel",
        selector: "#mdp-inventory--modelselect > section",
        observed: "class",
        on: "preowned",
        off: "",
        dataOf: function(e) {
            var t = "vehicle-2" == e.querySelector("section.mdp-inventory--model-select div input[type=radio]:checked").id ? "cpo" : "new";
            return t
        }
    }]
      , a = r.map(function(e) {
        return e.targets = t.querySelectorAll(e.selector),
        e
    }).filter(function(e) {
        return e.targets.length > 0
    });
    if (0 !== a.length) {
        n = n || function(e) {
            mazdaAnalytics.log(e, 1)
        }
        ;
        var i = new MutationObserver(function(e) {
            e.forEach(o)
        }
        )
          , s = {
            attributes: !0,
            attributeFilter: ["style", "class"],
            attributeOldValue: !0
        }
          , l = a.map(function(e) {
            return Array.from(e.targets)
        }).reduce(function(e, t) {
            return e.concat(t)
        }, []);
        l.forEach(function(e) {
            i.observe(e, s)
        })
    }
}(window, document, function(e) {
    var t = [{
        name: "inventorySelectModel",
        page: "models",
        nameHistorical: "musa:cpo_inventory_model",
        subCategory: "cpo_inventory_model",
        sectionHistorical: "cpo",
        inventory: "cpo"
    }, {
        name: "inventorySelectModel",
        page: "models",
        nameHistorical: "musa:inventory_model",
        subCategory: "inventory_model",
        sectionHistorical: "inventory_model",
        inventory: "new"
    }]
      , n = t.find(function(t) {
        return t.inventory === e.inventory
    })
      , o = (e.datums.trim().toLowerCase().replace(/\-/g, "_"),
    ["musa", mazdaAnalytics.setData("dataLayer.site.section"), mazdaAnalytics.setData("dataLayer.site.subsection"), n.page].filter(function(e) {
        return "" !== e
    }).join(":"))
      , r = {
        pageName: o,
        nameHistorical: n.nameHistorical,
        subCategory: n.subCategory,
        sectionHistorical: n.sectionHistorical
    };
    dataLayer.page.name = n.page,
    dataLayer.page.nameHistorical = r.nameHistorical,
    dataLayer.page.subCategory = r.subCategory,
    dataLayer.site.sectionHistorical = r.sectionHistorical,
    s.t(r)
});
(function(a, b, c) {
    function d(j) {
        var k = j.target
          , l = j.oldValue
          , m = f.findIndex(function(A) {
            return Array.from(A.targets).includes(k)
        })
          , n = f[m]
          , o = k.getAttribute(n.observed).includes(n.cpoResults)
          , p = k.getAttribute(n.observed).includes(n.newResults)
          , q = l.includes(n.cpoResults)
          , r = l.includes(n.newResults)
          , s = k.getAttribute(n.observed).includes('velocity-animating')
          , t = l.includes('velocity-animating')
          , u = k.getAttribute(n.observed).includes('draweropen')
          , v = l.includes('draweropen')
          , w = l.includes(k.getAttribute(n.observed))
          , z = n.dataOf(k);
        j.current = k.getAttribute(n.observed),
        j.name = n.name,
        j.resultType = o && !p ? 'CPO' : 'NEW',
        j.datums = z,
        o && !s && !u && q ? (mazdaAnalytics.log('\u22CB(\u25CD\'\u0398\'\u25CD)\u22CC ' + j.resultType + ' Inventory results: ' + z + '\n\n', 1),
        c(j)) : p && !s && !u && r && (mazdaAnalytics.log('\u22CB(\u25CD\'\u0398\'\u25CD)\u22CC ' + j.resultType + ' Inventory results: ' + z + '\n\n', 1),
        c(j))
    }
    var f = [{
        name: 'inventoryResults',
        selector: '#mdp-inventory--results > section',
        observed: 'class',
        cpoResults: 'cpo-results',
        newResults: 'new-results',
        dataOf: function dataOf(j) {
            var l = ['m3s', 'm3h', 'm6g', 'cx3', 'cx5', 'cx9', 'mx5']
              , n = mazdaAnalytics.setData('dataLayer.vehicle.vehicleID')
              , o = mazdaAnalytics.setData('vehicleID.fromURLParam')
              , p = ['mazda3-sedan', 'mazda3-hatchback', 'mazda6', 'cx-3', 'cx-5', 'cx-9', 'mx-5-miata'].findIndex(function(t) {
                return b.location.pathname.includes(t)
            })
              , q = l.findIndex(function(t) {
                return b.location.hash.includes(t)
            })
              , r = ['Mazda3 4-door', 'Mazda3 5-door', 'Mazda6', 'CX-3', 'CX-5', 'CX-9', 'MX-5 Miata'].findIndex(function(t) {
                var u = j.querySelector('h3.mobile-title') ? j.querySelector('h3.mobile-title').textContent.includes(t) : '';
                return u
            })
              , s = -1 < p ? p : -1 < q ? q : -1 < r ? r : -1;
            return n || o || l[s] || ''
        }
    }].map(function(j) {
        return j.targets = b.querySelectorAll(j.selector),
        j
    }).filter(function(j) {
        return 0 < j.targets.length
    });
    if (0 !== f.length) {
        c = c || function(j) {
            mazdaAnalytics.log(j, 1)
        }
        ;
        var g = new MutationObserver(function(j) {
            j.forEach(d)
        }
        )
          , h = {
            attributes: !0,
            attributeFilter: ['class'],
            attributeOldValue: !0
        }
          , i = f.map(function(j) {
            return Array.from(j.targets)
        }).reduce(function(j, k) {
            return j.concat(k)
        }, []);
        i.forEach(function(j) {
            g.observe(j, h)
        })
    }
}
)(window, document, function(a) {
    var c = [{
        resultType: 'CPO',
        page: 'cpo_results',
        nameHistorical: 'musa:cpo_inventory_results',
        subCategory: 'inventory_results',
        sectionHistorical: 'inventory_results',
        events: 'event38,event40'
    }, {
        resultType: 'NEW',
        page: 'results',
        nameHistorical: 'musa:inventory_results',
        subCategory: 'inventory_results',
        sectionHistorical: 'inventory_results',
        events: 'event12,event209'
    }].find(function(h) {
        return h.resultType === a.resultType
    })
      , d = ['musa', mazdaAnalytics.setData('dataLayer.site.section'), mazdaAnalytics.setData('dataLayer.site.subsection'), c.page].filter(function(h) {
        return '' !== h
    }).join(':')
      , e = {
        pageName: d,
        nameHistorical: c.nameHistorical,
        subCategory: c.subCategory,
        sectionHistorical: c.sectionHistorical,
        events: c.events
    }
      , f = dataLayer.page.name
      , g = dataLayer.page.nameHistorical;
    dataLayer.page.name = c.page,
    dataLayer.page.nameHistorical = e.nameHistorical,
    dataLayer.page.subCategory = e.subCategory,
    dataLayer.site.sectionHistorical = e.sectionHistorical,
    dataLayer.events = e.events
});
if (location.hostname == "mazdausa.com" || location.hostname == "www.mazdausa.com" || location.hostname == "www.mazdaespanol.com" || location.hostname == "mazdaespanol.com" || location.hostname == "accessories.mazdausa.com" || location.hostname == "www.mazdarecallinfo.com" || location.hostname == "www.mazdaseguridad.com" || location.hostname == "www.mymazda.com" || location.hostname == "www.mazdafeelalive.com" || location.hostname == "ja.mazdausa.com" || location.hostname == "zh.mazdausa.com") {
    var s_account = "mazdausaglobal";
} else {
    var s_account = "mazdatealiumdev";
}
var s = s_gi(s_account);
s.trackDownloadLinks = true;
s.trackExternalLinks = true;
s.trackInlineStats = true;
s.linkInternalFilters = "javascript:,tel:,mailto:,mazdausa.com,mymazda.com,devteamcr.com,mirum.agency";
s.linkLeaveQueryString = false;
s.linkTrackVars = "None";
s.linkTrackEvents = "None";
s.usePlugins = true;
s.currencyCode = "USD";
s.visitorNamespace = "";
s.trackingServer = "t.mazdausa.com";
s.trackingServerSecure = "st.mazdausa.com";
s.charSet = "UTF-8";
s.expectSupplementalData = true;
s.debugTracking = utag.cfg.utagdb;
window.mazdaAnalytics = {
    log(t) {
        var url = new URL(window.location.href);
        if (url.searchParams.get("printqa")) {
            console.log(t);
        }
    },
    format(t) {
        if (!!t && typeof (t) == 'string') {
            t = t.toLocaleLowerCase();
            t = t.replace(/\s/g, "_");
            t = t.replace(/&/g, "");
            t = t.replace(/\?/g, "");
            t = t.replace(/#/g, "");
            t = t.replace(/%/g, "");
            t = t.replace(/__+/g, "_");
            if (t.slice(-1) == "_") {
                t = t.substring(0, t.length - 1);
            }
            if (t.substring(0, 1) == '_') {
                t = t.slice(1);
            }
        }
        return t;
    },
    getData: function(dataLayerValue) {
        dataLayerValueSplit = dataLayerValue.split('.');
        if (dataLayerValueSplit.length == 2) {
            if (!!dataLayer[dataLayerValueSplit[1]]) {
                if (typeof (dataLayer[dataLayerValueSplit[1]]) == 'object') {
                    var tempString = '';
                    for (key in dataLayer[dataLayerValueSplit[1]]) {
                        if (key > 0)
                            tempString += ';';
                        tempString += String(dataLayer[dataLayerValueSplit[1]][key]);
                    }
                    return tempString;
                } else {
                    return mazdaAnalytics.format(dataLayer[dataLayerValueSplit[1]]);
                }
            } else {
                mazdaAnalytics.log('The dataLayer parameter ' + dataLayerValue + ' does not exist');
                return '';
            }
        } else if (dataLayerValueSplit.length == 3) {
            if (!!dataLayer[dataLayerValueSplit[1]][dataLayerValueSplit[2]]) {
                if (typeof (dataLayer[dataLayerValueSplit[1]][dataLayerValueSplit[2]]) == 'object') {
                    var tempString = '';
                    for (key in dataLayer[dataLayerValueSplit[1]][dataLayerValueSplit[2]]) {
                        if (key > 0)
                            tempString += ';';
                        tempString += String(dataLayer[dataLayerValueSplit[1]][dataLayerValueSplit[2]][key]);
                    }
                    return tempString;
                } else {
                    return mazdaAnalytics.format(dataLayer[dataLayerValueSplit[1]][dataLayerValueSplit[2]]);
                }
            } else {
                mazdaAnalytics.log('The dataLayer parameter ' + dataLayerValue + ' does not exist');
                return '';
            }
        } else {
            return '';
        }
    },
    setData: function(dataLayerValue, stringForDataLayer) {
        dataLayerValueSplit = dataLayerValue.split('.');
        if (dataLayerValue) {
            if (dataLayerValueSplit.length == 2) {
                if (dataLayer[dataLayerValueSplit[1]]) {
                    dataLayer[dataLayerValueSplit[1]] = stringForDataLayer;
                } else {
                    dataLayer[dataLayerValueSplit[1]] = stringForDataLayer;
                    mazdaAnalytics.log('The new dataLayer parameter ' + dataLayerValue + ' does not exist - Created');
                }
            } else if (dataLayerValueSplit.length == 3) {
                if (dataLayer[dataLayerValueSplit[1]]) {
                    if ([dataLayerValueSplit[2]]) {
                        dataLayer[dataLayerValueSplit[1]][dataLayerValueSplit[2]] = stringForDataLayer;
                    }
                } else {
                    dataLayer[dataLayerValueSplit[1]] = {};
                    dataLayer[dataLayerValueSplit[1]][dataLayerValueSplit[2]] = stringForDataLayer;
                    mazdaAnalytics.log('The dataLayer parameter ' + dataLayerValue + ' does not exist - Created');
                }
            }
        } else {
            mazdaAnalytics.log('The dataLayer parameter ' + dataLayerValue + ' does not exist');
        }
    },
    linkHandler(linkInfo) {
        linkInfo = this;
        var componentname = linkInfo.getAttribute('data-analytics-link-component-name');
        var linktype = linkInfo.getAttribute('data-analytics-link-type');
        var linkdescription = mazdaAnalytics.format(linkInfo.getAttribute('data-analytics-link-description'));
        s.prop51 = s.eVar51 = componentname;
        s.prop60 = s.eVar60 = linktype;
        s.prop50 = linkdescription;
        s.linkTrackVars = defaultLinkTrackVars;
        mazdaAnalytics.log('LH component: ' + componentname);
        mazdaAnalytics.log('LH link type: ' + linktype);
        mazdaAnalytics.log('LH link description: ' + linkdescription);
        if (linkInfo.getAttribute('data-analytics-link-number')) {
            var linknumber = linkInfo.getAttribute('data-analytics-link-number');
            linkdescription = linknumber + "_" + linkdescription;
            s.prop36 = linknumber;
            s.linkTrackVars = s.linkTrackVars + ",prop36";
        }
        if (linkInfo.getAttribute('data-analytics-vehicle-ID')) {
            var vehicleID = linkInfo.getAttribute('data-analytics-vehicle-ID');
            linkdescription = vehicleID + "_" + linkdescription;
            s.prop1 = vehicleID;
            s.linkTrackVars = s.linkTrackVars + ",prop1";
        }
        if (linkInfo.getAttribute('data-analytics-form-values')) {
            var formvalues = linkInfo.getAttribute('data-analytics-form-values');
            formvalues = mazdaAnalytics.format(formvalues);
            s.list2 = s.prop52 = formvalues;
            s.linkTrackVars = s.linkTrackVars + ",list2,prop52";
        }
        var linkname = componentname + ":" + linktype + ":" + linkdescription;
        s.eVar48 = s.prop48 = linkname;
        if (linkInfo.getAttribute('data-analtyics-content-description')) {
            var contentdescription = linkInfo.getAttribute('data-analtyics-content-description');
            s.eVar48 = s.prop48 = contentdescription + ":" + linktype + ":" + linkdescription;
        }
        s.eVar2 = s.prop25 = s.prop23 + ":" + linkname;
        if (componentname == 'dealer_map' && linktype == 'address') {
            s.events = 'event123,event124';
            s.linkTrackEvents = 'event123,event124';
        }
        if ((componentname == 'dealer_map' || componentname == 'dealer_results') && linktype == 'call') {
            s.events = 'event50,event52';
            s.linkTrackEvents = 'event50,event52';
        }
        if ((componentname == 'dealer_map' || componentname == 'dealer_results') && (linkdescription == 'Dealer Website - Exit to Dealer Detail' || linkdescription == 'visit_website')) {
            s.events = 'event117,event118';
            s.linkTrackEvents = 'event117,event118';
        }
        if (componentname == 'sm_bg' && linkdescription == 'autocheck') {
            s.events = 'event107,event108';
            s.linkTrackEvents = 'event107,event108';
        }
        if (mazdaAnalytics.getData('dataLayer.page.subCategory') == 'inventory_detail' && componentname == 'divider_block' && linkdescription == 'details') {
            s.events = 'event131,event132';
            s.linkTrackEvents = 'event131,event132';
        }
        if (componentname == 'specs' && linktype == 'expand') {
            s.events = 'event30,event22';
            s.linkTrackEvents = 'event30,event22';
        }
        if (componentname == 'incentive_filter' && linkdescription == 'apply_filters') {
            s.events = 'event9,event16';
            s.linkTrackEvents = 'event9,event16';
        }
        if (componentname == 'apply_for_financing_form' && linkdescription == 'Next') {
            s.events = 'event49,event70';
            s.linkTrackEvents = 'event49,event70';
        }
        if (componentname == 'dealer_results' && linkdescription == 'Schedule Service') {
            s.events = 'event159,event160';
            s.linkTrackEvents = 'event159,event160';
        }
        if (mazdaAnalytics.getData('dataLayer.site.section') == 'tools' && componentname == 'dealer_results' && linktype == 'call' && linkdescription.indexOf('sales:') == -1 && linkdescription.indexOf('service:') == -1 && linkdescription.indexOf('parts:') == -1) {
            s.events = 'event50,event52';
            s.linkTrackEvents = 'event50,event52';
            console.log('Generic Call');
        }
        if (mazdaAnalytics.getData('dataLayer.site.section') == 'tools' && componentname == 'dealer_results' && linktype == 'call' && linkdescription.indexOf('sales:') > -1) {
            s.events = 'event210,event211';
            s.linkTrackEvents = 'event210,event211';
            console.log('Sales');
        }
        if (mazdaAnalytics.getData('dataLayer.site.section') == 'tools' && componentname == 'dealer_results' && linktype == 'call' && linkdescription.indexOf('parts:') > -1) {
            s.events = 'event119,event120';
            s.linkTrackEvents = 'event119,event120';
            console.log('Parts');
        }
        if (mazdaAnalytics.getData('dataLayer.site.section') == 'tools' && componentname == 'dealer_results' && linktype == 'call' && linkdescription.indexOf('service:') > -1) {
            s.events = 'event121,event122';
            s.linkTrackEvents = 'event121,event122';
            console.log('Service');
        }
        if (mazdaAnalytics.getData('dataLayer.site.section') == 'tools' && componentname == 'dealer_results' && linkdescription == 'address - exit to map') {
            s.events = 'event123,event124';
            s.linkTrackEvents = 'event123,event124';
        }
        if (componentname == 'gallery_grid' && linktype == 'image') {
            s.events = 'event28,event36';
            s.linkTrackEvents = 'event28,event36';
        }
        if (componentname == 'lg_bg' && linkdescription == '1-800-866-1998') {
            s.events = 'event324,event325';
            s.linkTrackEvents = 'event324,event325';
        }
        if (mazdaAnalytics.getData('dataLayer.site.section') == 'vehicles' && componentname == 'divider_block' && linktype == 'image') {
            s.events = 'event26,event34';
            s.linkTrackEvents = 'event26,event34';
        }
        if (componentname == 'accordian_vlp' && linktype == 'expand' && linkdescription.indexOf('Accordion') > -1) {
            s.events = 'event326,event327';
            s.linkTrackEvents = 'event326,event327';
        }
        if (componentname == 'subnav' && linkdescription == 'SCHEDULE SERVICE') {
            s.events = 'event159,event160';
            s.linkTrackEvents = 'event159,event160';
        }
        if (mazdaAnalytics.getData('dataLayer.site.section') == 'owners' && componentname == 'dealer_results' && linktype == 'call' && linkdescription.indexOf('sales:') == -1 && linkdescription.indexOf('service:') == -1 && linkdescription.indexOf('parts:') == -1) {
            s.events = 'event153,event154';
            s.linkTrackEvents = 'event153,event154';
        }
        if (mazdaAnalytics.getData('dataLayer.site.section') == 'owners' && componentname == 'dealer_results' && linktype == 'call' && linkdescription.indexOf('sales:') > -1) {
            s.events = 'event216,event217';
            s.linkTrackEvents = 'event216,event217';
        }
        if (mazdaAnalytics.getData('dataLayer.site.section') == 'owners' && componentname == 'dealer_results' && linktype == 'call' && linkdescription.indexOf('parts:') > -1) {
            s.events = 'event220,event221';
            s.linkTrackEvents = 'event220,event221';
        }
        if (mazdaAnalytics.getData('dataLayer.site.section') == 'owners' && componentname == 'dealer_results' && linktype == 'call' && linkdescription.indexOf('service:') > -1) {
            s.events = 'event218,event219';
            s.linkTrackEvents = 'event218,event219';
        }
        if (mazdaAnalytics.getData('dataLayer.site.section') == 'owners' && componentname == 'dealer_results' && linktype == 'cta' && linkdescription == 'schedule service') {
            s.events = 'event151,event152';
            s.linkTrackEvents = 'event151,event152';
        }
        if (componentname == 'dealer_results' && linkdescription == 'address - exit to map') {
            s.events = 'event155,event156';
            s.linkTrackEvents = 'event155,event156';
        }
        if (document.domain.indexOf("mymazda.com") > -1) {
            if (window.dataLayer.zipCode !== "") {
                s.eVar76 = window.dataLayer.zipCode;
                s.linkTrackVars = s.linkTrackVars + ",eVar76";
            }
            if (window.dataLayer.form.name !== "") {
                if (window.dataLayer.vehicle.vin) {
                    s.list2 = s.prop52 = s.list2 + "," + window.dataLayer.vehicle.vin;
                    s.linkTrackVars = s.linkTrackVars + ",list2,prop52";
                }
                if (window.dataLayer.vehicle.milesBySchedule) {
                    s.list2 = s.prop52 = s.list2 + "," + window.dataLayer.vehicle.milesBySchedule;
                    s.linkTrackVars = s.linkTrackVars + ",list2,prop52";
                }
            }
            if (linkname.indexOf("video_player") > -1) {
                s.prop21 = s.prop68 = window.dataLayer.video.name;
                s.prop26 = window.dataLayer.video.engagement;
                s.linkTrackVars = s.linkTrackVars + ",prop21,prop26,prop68";
            }
        }
        mazdaAnalytics.log('LH events:' + s.events);
        mazdaAnalytics.setData('dataLayer.page.linkId', s.prop23 + ":" + linkname);
        s.tl(this, 'o', s.prop23 + ":" + linkname);
        var temp = JSON.parse(JSON.stringify(dataLayer));
        utag.link(temp);
        s.events = '';
        s.linkTrackVars = defaultLinkTrackVars;
        s.eVar2 = '';
        s.prop25 = '';
        s.eVar48 = s.prop48 = '';
        s.prop50 = '';
        s.eVar51 = s.prop51 = '';
        s.eVar60 = s.prop60 = '';
    }
}
s.linkDownloadFileTypes = 'avi,css,csv,doc,docx,eps,exe,jpg,js,m4v,mov,mp3,pdf,png,ppt,pptx,rar,svg,tab,txt,vsd,vxd,wav,wma,wmv,xls,xlsx,xml,zip';
var defaultLinkTrackVars = "prop1,eVar3,prop3,eVar4,prop4,prop12,eVar12,prop15,eVar15,prop16,eVar16,prop27,eVar27,prop8,prop23,prop24,prop71,eVar71,prop40,prop41,prop51,eVar51,prop60,eVar60,eVar2,prop50,eVar48,prop48,eVar80,eVar83,prop64,prop99,prop100";
s.campaign = s.Util.getQueryParam('cid');
s.linkExternalFilters = "http://infotainment.mazdahandsfree.com/entertainment-bluetooth,http://mazda.custhelp.com/app,http://www.allaboutdnt.org/,http://info.evidon.com/pub_info/1798,http://mazda--tst.custhelp.com/app,http://mazda.crosscountry-auto.com/,http://www2.mazda.com/,https://itunes.apple.com/us/app/mymazda/id451886367?mt=8,https://vinrcl.safercar.gov/vin/,https://www.instagram.com/mazdausa/";
s.dynamicVariablePrefix = "D=";
s.eVar13 = s.Util.getQueryParam('intcmp');
s.eVar38 = s.Util.getQueryParam('semid');
s.eVar56 = s.Util.getQueryParam('secid');
s.eVar57 = s.Util.getQueryParam('setid');
s.eVar58 = s.Util.getQueryParam('sesc');
s.eVar59 = s.Util.getQueryParam('secmp');
s.eVar31 = s.Util.getQueryParam('crmcid');
s.eVar49 = s.Util.getQueryParam('gclid');
s.eVar32 = s.Util.getQueryParam('soccmp');
s.prop39 = mazdaAnalytics.getData('dataLayer.vehicle.trimCode');
s.prop28 = mazdaAnalytics.getData('dataLayer.vehicle.msrp');
s.prop36 = mazdaAnalytics.getData('dataLayer.vehicle.totalCost');
s.prop29 = mazdaAnalytics.getData('dataLayer.package.cost');
s.prop30 = mazdaAnalytics.getData('dataLayer.package.name');
s.prop32 = mazdaAnalytics.getData('dataLayer.accessory.cost');
s.prop33 = mazdaAnalytics.getData('dataLayer.accessory.name');
function analyticsFormat(t) {
    t = t.toLocaleLowerCase();
    t = t.replace(/\s/g, "_");
    t = t.replace(/&/g, "");
    t = t.replace(/\?/g, "");
    t = t.replace(/#/g, "");
    t = t.replace(/%/g, "");
    t = t.replace(/__+/g, "_");
    if (t.slice(-1) == "_") {
        t = t.substring(0, t.length - 1);
    }
    if (t.substring(0, 1) == '_') {
        t = t.slice(1);
    }
    return t;
}
dataLayer.events = '';
s.events = s.events || '';
var subSection = mazdaAnalytics.getData('dataLayer.site.subsection');
var section = mazdaAnalytics.getData('dataLayer.site.section');
var subCategory = mazdaAnalytics.getData('dataLayer.page.subCategory');
var page = mazdaAnalytics.getData('dataLayer.page.name');
var isSkyActive = subSection == 'skyactiv' && section == 'about';
var isApplyForFinancing = subSection == 'apply_for_financing' && page == 'info';
var isBuildModelSelect = subSection == 'build' && page == 'models';
var isBuildStart = subSection == 'build' && page == 'start';
var isIncentives = subSection == 'incentives' && page == 'national';
var isIncentivesRegional = section == 'regional incentives' || section == 'Regional Incentives';
var isNewInventory = mazdaAnalytics.getData('dataLayer.site.subsection') == 'inventory' && mazdaAnalytics.getData('dataLayer.page.subCategory') == 'inventory_model';
var isNewInventoryResults = subSection == 'inventory' && subCategory == 'inventory_results';
var isNewInventoryDetail = subSection == 'inventory' && subCategory == 'inventory_detail';
var isCPOInventory = subSection == 'inventory' && subCategory == 'cpo_inventory_model';
var isCPOInventoryResults = mazdaAnalytics.getData('dataLayer.site.subsection') == 'inventory' && mazdaAnalytics.getData('dataLayer.page.name') == 'cpo_results';
var hasNoInventoryResults = mazdaAnalytics.getData('dataLayer.search.results') === '0';
var isCPOInventoryDetail = subSection == 'inventory' && subCategory == 'cpo_inventory_detail';
var isDealerResults = subSection == 'locate_dealer' && page == 'overview';
var isCPOOverview = section == 'cpo' && subSection == 'main' && page == 'overview';
var hasResults = mazdaAnalytics.getData('dataLayer.search.results') > 0;
var isAccolades = page == 'accolades' || (page == 'overview' && subSection == 'accolades');
var isAccessories = page == 'accessories';
var isFeatures = page == 'features';
var isGallery = page == 'gallery';
var isVLP = page == 'overview' && section == 'vehicles' && subCategory == 'models_main';
var isSpecs = page == 'specs' && section == 'vehicles';
var isTrims = page == 'trims' && section == 'vehicles';
var isHome = page == 'home' && subSection == 'home';
var isCompare = page == 'models' && subSection == 'compare';
var isCompareResults = page == 'details' && subSection == 'compare';
var isRAQ = page == 'info' && subSection == 'quote';
var isPayEstimator = page == 'info' && subSection == 'pay_est';
var isTradeIn = page == 'info' && subSection == 'trade_in';
var isKMUmulti = page == 'info_multi_veh' && subSection == 'kmu';
var isOwnersRecall = section == 'owners' && subSection == 'recalls';
s.events = isSkyActive ? 'event197,event198' : s.events;
s.events = isApplyForFinancing ? 'event96,event97' : s.events;
s.events = isIncentives ? 'event9,event16' : s.events;
s.events = isIncentivesRegional ? 'event9,event16' : s.events;
s.events = isNewInventory ? 'event149,event150' : s.events;
s.events = isNewInventoryDetail ? 'event143,event144' : s.events;
s.events = isNewInventoryResults ? 'event806' : s.events;
s.events = isCPOInventory ? 'event115,event116' : s.events;
s.events = isCPOInventoryResults ? 'event38,event40' : s.events;
s.events = isCPOInventoryDetail ? 'event109,event110' : s.events;
s.events = isBuildModelSelect ? 'event6,event29' : s.events;
s.events = isBuildStart ? 'event103,event104' : s.events;
s.events = isAccolades ? 'event203,event204' : s.events;
s.events = isAccessories ? 'event94,event95' : s.events;
s.events = isFeatures ? 'event26,event34' : s.events;
s.events = isGallery ? 'event28,event36' : s.events;
s.events = isVLP ? 'event191,event192' : s.events;
s.events = isSpecs ? 'event25,event33' : s.events;
s.events = isTrims ? 'event185,event186' : s.events;
s.events = isHome ? 'event129,event130' : s.events;
s.events = isRAQ ? 'event163,event164' : s.events;
s.events = isPayEstimator ? '' : s.events;
s.events = isTradeIn ? 'event183,event184' : s.events;
s.events = isCompare ? 'event105,event106' : s.events;
s.events = isCompareResults ? 'event22,event30' : s.events;
s.events = isKMUmulti ? 'event199,event200' : s.events;
s.events = isOwnersRecall ? 'event157,event158' : s.events;
s.events = isCPOOverview ? 'event240,event241' : s.events;
dataLayer.events = s.events;
var dlrref = mazdaAnalytics.getData('referrer');
if (document.referrer === "" && dlrref !== "") {
    s.referrer = dlrref;
}
var initialScrollRegex = /\/$|\/why-mazda\/|shopping-tools\/inventory\/results|shopping-tools\/special-offers-and-incentives|why-mazda\/skyactiv|preorder\/mx-5-rf-launch-edition\/gallery|\/shopping-tools\/compare-vehicles|\/vehicles\/certified-pre-owned|\/disaster-relief|\/next-generation|\/new-era/;
if (document.location.pathname.match(initialScrollRegex) != null) {
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
                dataLayer.events += ",event.scroll";//localwes
                var temp = JSON.parse(JSON.stringify(dataLayer));
                utag.link(temp);
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
var isVehicleLanding = document.location.pathname.split('/').length === 3;
var jqueryHasLoaded = typeof jQuery === 'function';
var nonVehicleLandingRegex = /\/vehicles\/|\/preorder\/account-overview\/status\/|\/new-era/;
var vehicleLandingRegex = /\/vehicles\/|\/preorder\/account-overview\/status\//;
if (!isVehicleLanding && jqueryHasLoaded && document.location.pathname.match(nonVehicleLandingRegex) != null) {
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
            var temp = JSON.parse(JSON.stringify(dataLayer));
            utag.link(temp);
        }
    }
} else if (isVehicleLanding && jqueryHasLoaded && document.location.pathname.match(vehicleLandingRegex) != null && (location.href.indexOf("2018-mazda6#kmu" == -1))) {
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
            var temp = JSON.parse(JSON.stringify(dataLayer));
            utag.link(temp);
        }
    }
}
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
        dataLayer.site.sectionHistorical = v)
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
Array.from || (Array.from = function() {
    var r = Object.prototype.toString
      , n = function(n) {
        return "function" == typeof n || "[object Function]" === r.call(n)
    }
      , t = function(r) {
        var n = Number(r);
        return isNaN(n) ? 0 : 0 !== n && isFinite(n) ? (n > 0 ? 1 : -1) * Math.floor(Math.abs(n)) : n
    }
      , e = Math.pow(2, 53) - 1
      , o = function(r) {
        var n = t(r);
        return Math.min(Math.max(n, 0), e)
    };
    return function(r) {
        var t = this
          , e = Object(r);
        if (null == r)
            throw new TypeError("Array.from requires an array-like object - not null or undefined");
        var a, i = arguments.length > 1 ? arguments[1] : void 0;
        if (void 0 !== i) {
            if (!n(i))
                throw new TypeError("Array.from: when provided, the second argument must be a function");
            arguments.length > 2 && (a = arguments[2])
        }
        for (var u, f = o(e.length), c = n(t) ? Object(new t(f)) : new Array(f), h = 0; h < f; )
            u = e[h],
            c[h] = i ? void 0 === a ? i(u, h) : i.call(a, u, h) : u,
            h += 1;
        return c.length = f,
        c
    }
}());
function AppMeasurement(r) {
    var a = this;
    a.version = "2.10.0";
    var k = window;
    k.s_c_in || (k.s_c_il = [],
    k.s_c_in = 0);
    a._il = k.s_c_il;
    a._in = k.s_c_in;
    a._il[a._in] = a;
    k.s_c_in++;
    a._c = "s_c";
    var p = k.AppMeasurement.Nb;
    p || (p = null);
    var n = k, m, s;
    try {
        for (m = n.parent,
        s = n.location; m && m.location && s && "" + m.location != "" + s && n.location && "" + m.location != "" + n.location && m.location.host == s.host; )
            n = m,
            m = n.parent
    } catch (u) {}
    a.D = function(a) {
        try {
            console.log(a)
        } catch (b) {}
    }
    ;
    a.Ha = function(a) {
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
    a.ub = function() {
        var c = k.location.hostname, b = a.fpCookieDomainPeriods, d;
        b || (b = a.cookieDomainPeriods);
        if (c && !a.za && !/^[0-9.]+$/.test(c) && (b = b ? parseInt(b) : 2,
        b = 2 < b ? b : 2,
        d = c.lastIndexOf("."),
        0 <= d)) {
            for (; 0 <= d && 1 < b; )
                d = c.lastIndexOf(".", d - 1),
                b--;
            a.za = 0 < d ? c.substring(d) : c
        }
        return a.za
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
        var f = a.ub(), e = a.cookieLifetime, g;
        b = "" + b;
        e = e ? ("" + e).toUpperCase() : "";
        d && "SESSION" != e && "NONE" != e && ((g = "" != b ? parseInt(e ? e : 0) : -60) ? (d = new Date,
        d.setTime(d.getTime() + 1E3 * g)) : 1 === d && (d = new Date,
        g = d.getYear(),
        d.setYear(g + 2 + (1900 > g ? 1900 : 0))));
        return c && "NONE" != e ? (a.d.cookie = a.escape(c) + "=" + a.escape("" != b ? b : "[[B]]") + "; path=/;" + (d && "SESSION" != e ? " expires=" + d.toUTCString() + ";" : "") + (f ? " domain=" + f + ";" : ""),
        a.cookieRead(c) == b) : 0
    }
    ;
    a.rb = function() {
        var c = a.Util.getIeVersion();
        "number" === typeof c && 10 > c && (a.unsupportedBrowser = !0,
        a.gb(a, function() {}))
    }
    ;
    a.gb = function(a, b) {
        for (var d in a)
            a.hasOwnProperty(d) && "function" === typeof a[d] && (a[d] = b)
    }
    ;
    a.L = [];
    a.ba = function(c, b, d) {
        if (a.Aa)
            return 0;
        a.maxDelay || (a.maxDelay = 250);
        var f = 0
          , e = (new Date).getTime() + a.maxDelay
          , g = a.d.visibilityState
          , h = ["webkitvisibilitychange", "visibilitychange"];
        g || (g = a.d.webkitVisibilityState);
        if (g && "prerender" == g) {
            if (!a.ca)
                for (a.ca = 1,
                d = 0; d < h.length; d++)
                    a.d.addEventListener(h[d], function() {
                        var c = a.d.visibilityState;
                        c || (c = a.d.webkitVisibilityState);
                        "visible" == c && (a.ca = 0,
                        a.delayReady())
                    });
            f = 1;
            e = 0
        } else
            d || a.o("_d") && (f = 1);
        f && (a.L.push({
            m: c,
            a: b,
            t: e
        }),
        a.ca || setTimeout(a.delayReady, a.maxDelay));
        return f
    }
    ;
    a.delayReady = function() {
        var c = (new Date).getTime(), b = 0, d;
        for (a.o("_d") ? b = 1 : a.ra(); 0 < a.L.length; ) {
            d = a.L.shift();
            if (b && !d.t && d.t > c) {
                a.L.unshift(d);
                setTimeout(a.delayReady, parseInt(a.maxDelay / 2));
                break
            }
            a.Aa = 1;
            a[d.m].apply(a, d.a);
            a.Aa = 0
        }
    }
    ;
    a.setAccount = a.sa = function(c) {
        var b, d;
        if (!a.ba("setAccount", arguments))
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
        var d, f, e, g, h = "";
        e = f = "";
        if (a.lightProfileID)
            d = a.P,
            (h = a.lightTrackVars) && (h = "," + h + "," + a.ga.join(",") + ",");
        else {
            d = a.g;
            if (a.pe || a.linkType)
                h = a.linkTrackVars,
                f = a.linkTrackEvents,
                a.pe && (e = a.pe.substring(0, 1).toUpperCase() + a.pe.substring(1),
                a[e] && (h = a[e].Lb,
                f = a[e].Kb));
            h && (h = "," + h + "," + a.G.join(",") + ",");
            f && h && (h += ",events,")
        }
        b && (b = "," + b + ",");
        for (f = 0; f < d.length; f++)
            e = d[f],
            (g = a[e]) && (!h || 0 <= h.indexOf("," + e + ",")) && (!b || 0 <= b.indexOf("," + e + ",")) && c(e, g)
    }
    ;
    a.q = function(c, b, d, f, e) {
        var g = "", h, l, k, q, m = 0;
        "contextData" == c && (c = "c");
        if (b) {
            for (h in b)
                if (!(Object.prototype[h] || e && h.substring(0, e.length) != e) && b[h] && (!d || 0 <= d.indexOf("," + (f ? f + "." : "") + h + ","))) {
                    k = !1;
                    if (m)
                        for (l = 0; l < m.length; l++)
                            h.substring(0, m[l].length) == m[l] && (k = !0);
                    if (!k && ("" == g && (g += "&" + c + "."),
                    l = b[h],
                    e && (h = h.substring(e.length)),
                    0 < h.length))
                        if (k = h.indexOf("."),
                        0 < k)
                            l = h.substring(0, k),
                            k = (e ? e : "") + l + ".",
                            m || (m = []),
                            m.push(k),
                            g += a.q(l, b, d, f, k);
                        else if ("boolean" == typeof l && (l = l ? "true" : "false"),
                        l) {
                            if ("retrieveLightData" == f && 0 > e.indexOf(".contextData."))
                                switch (k = h.substring(0, 4),
                                q = h.substring(4),
                                h) {
                                case "transactionID":
                                    h = "xact";
                                    break;
                                case "channel":
                                    h = "ch";
                                    break;
                                case "campaign":
                                    h = "v0";
                                    break;
                                default:
                                    a.Ha(q) && ("prop" == k ? h = "c" + q : "eVar" == k ? h = "v" + q : "list" == k ? h = "l" + q : "hier" == k && (h = "h" + q,
                                    l = l.substring(0, 255)))
                                }
                            g += "&" + a.escape(h) + "=" + a.escape(l)
                        }
                }
            "" != g && (g += "&." + c)
        }
        return g
    }
    ;
    a.usePostbacks = 0;
    a.xb = function() {
        var c = "", b, d, f, e, g, h, l, k, q = "", m = "", n = e = "";
        if (a.lightProfileID)
            b = a.P,
            (q = a.lightTrackVars) && (q = "," + q + "," + a.ga.join(",") + ",");
        else {
            b = a.g;
            if (a.pe || a.linkType)
                q = a.linkTrackVars,
                m = a.linkTrackEvents,
                a.pe && (e = a.pe.substring(0, 1).toUpperCase() + a.pe.substring(1),
                a[e] && (q = a[e].Lb,
                m = a[e].Kb));
            q && (q = "," + q + "," + a.G.join(",") + ",");
            m && (m = "," + m + ",",
            q && (q += ",events,"));
            a.events2 && (n += ("" != n ? "," : "") + a.events2)
        }
        if (a.visitor && a.visitor.getCustomerIDs) {
            e = p;
            if (g = a.visitor.getCustomerIDs())
                for (d in g)
                    Object.prototype[d] || (f = g[d],
                    "object" == typeof f && (e || (e = {}),
                    f.id && (e[d + ".id"] = f.id),
                    f.authState && (e[d + ".as"] = f.authState)));
            e && (c += a.q("cid", e))
        }
        a.AudienceManagement && a.AudienceManagement.isReady() && (c += a.q("d", a.AudienceManagement.getEventCallConfigParams()));
        for (d = 0; d < b.length; d++) {
            e = b[d];
            g = a[e];
            f = e.substring(0, 4);
            h = e.substring(4);
            g || ("events" == e && n ? (g = n,
            n = "") : "marketingCloudOrgID" == e && a.visitor && (g = a.visitor.marketingCloudOrgID));
            if (g && (!q || 0 <= q.indexOf("," + e + ","))) {
                switch (e) {
                case "customerPerspective":
                    e = "cp";
                    break;
                case "marketingCloudOrgID":
                    e = "mcorgid";
                    break;
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
                    n && (g += ("" != g ? "," : "") + n);
                    if (m)
                        for (h = g.split(","),
                        g = "",
                        f = 0; f < h.length; f++)
                            l = h[f],
                            k = l.indexOf("="),
                            0 <= k && (l = l.substring(0, k)),
                            k = l.indexOf(":"),
                            0 <= k && (l = l.substring(0, k)),
                            0 <= m.indexOf("," + l + ",") && (g += (g ? "," : "") + h[f]);
                    break;
                case "events2":
                    g = "";
                    break;
                case "contextData":
                    c += a.q("c", a[e], q, e);
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
                    a.retrieveLightProfiles && (c += a.q("mts", a[e], q, e));
                    g = "";
                    break;
                default:
                    a.Ha(h) && ("prop" == f ? e = "c" + h : "eVar" == f ? e = "v" + h : "list" == f ? e = "l" + h : "hier" == f && (e = "h" + h,
                    g = g.substring(0, 255)))
                }
                g && (c += "&" + e + "=" + ("pev" != e.substring(0, 3) ? a.escape(g) : g))
            }
            "pev3" == e && a.e && (c += a.e)
        }
        a.fa && (c += "&lrt=" + a.fa,
        a.fa = null);
        return c
    }
    ;
    a.C = function(a) {
        var b = a.tagName;
        if ("undefined" != "" + a.Qb || "undefined" != "" + a.Gb && "HTML" != ("" + a.Gb).toUpperCase())
            return "";
        b = b && b.toUpperCase ? b.toUpperCase() : "";
        "SHAPE" == b && (b = "");
        b && (("INPUT" == b || "BUTTON" == b) && a.type && a.type.toUpperCase ? b = a.type.toUpperCase() : !b && a.href && (b = "A"));
        return b
    }
    ;
    a.Da = function(a) {
        var b = k.location, d = a.href ? a.href : "", f, e, g;
        f = d.indexOf(":");
        e = d.indexOf("?");
        g = d.indexOf("/");
        d && (0 > f || 0 <= e && f > e || 0 <= g && f > g) && (e = a.protocol && 1 < a.protocol.length ? a.protocol : b.protocol ? b.protocol : "",
        f = b.pathname.lastIndexOf("/"),
        d = (e ? e + "//" : "") + (a.host ? a.host : b.host ? b.host : "") + ("/" != d.substring(0, 1) ? b.pathname.substring(0, 0 > f ? 0 : f) + "/" : "") + d);
        return d
    }
    ;
    a.M = function(c) {
        var b = a.C(c), d, f, e = "", g = 0;
        return b && (d = c.protocol,
        f = c.onclick,
        !c.href || "A" != b && "AREA" != b || f && d && !(0 > d.toLowerCase().indexOf("javascript")) ? f ? (e = a.replace(a.replace(a.replace(a.replace("" + f, "\r", ""), "\n", ""), "\t", ""), " ", ""),
        g = 2) : "INPUT" == b || "SUBMIT" == b ? (c.value ? e = c.value : c.innerText ? e = c.innerText : c.textContent && (e = c.textContent),
        g = 3) : "IMAGE" == b && c.src && (e = c.src) : e = a.Da(c),
        e) ? {
            id: e.substring(0, 100),
            type: g
        } : 0
    }
    ;
    a.Ob = function(c) {
        for (var b = a.C(c), d = a.M(c); c && !d && "BODY" != b; )
            if (c = c.parentElement ? c.parentElement : c.parentNode)
                b = a.C(c),
                d = a.M(c);
        d && "BODY" != b || (c = 0);
        c && (b = c.onclick ? "" + c.onclick : "",
        0 <= b.indexOf(".tl(") || 0 <= b.indexOf(".trackLink(")) && (c = 0);
        return c
    }
    ;
    a.Fb = function() {
        var c, b, d = a.linkObject, f = a.linkType, e = a.linkURL, g, h;
        a.ha = 1;
        d || (a.ha = 0,
        d = a.clickObject);
        if (d) {
            c = a.C(d);
            for (b = a.M(d); d && !b && "BODY" != c; )
                if (d = d.parentElement ? d.parentElement : d.parentNode)
                    c = a.C(d),
                    b = a.M(d);
            b && "BODY" != c || (d = 0);
            if (d && !a.linkObject) {
                var l = d.onclick ? "" + d.onclick : "";
                if (0 <= l.indexOf(".tl(") || 0 <= l.indexOf(".trackLink("))
                    d = 0
            }
        } else
            a.ha = 1;
        !e && d && (e = a.Da(d));
        e && !a.linkLeaveQueryString && (g = e.indexOf("?"),
        0 <= g && (e = e.substring(0, g)));
        if (!f && e) {
            var m = 0, q = 0, n;
            if (a.trackDownloadLinks && a.linkDownloadFileTypes)
                for (l = e.toLowerCase(),
                g = l.indexOf("?"),
                h = l.indexOf("#"),
                0 <= g ? 0 <= h && h < g && (g = h) : g = h,
                0 <= g && (l = l.substring(0, g)),
                g = a.linkDownloadFileTypes.toLowerCase().split(","),
                h = 0; h < g.length; h++)
                    (n = g[h]) && l.substring(l.length - (n.length + 1)) == "." + n && (f = "d");
            if (a.trackExternalLinks && !f && (l = e.toLowerCase(),
            a.Ga(l) && (a.linkInternalFilters || (a.linkInternalFilters = k.location.hostname),
            g = 0,
            a.linkExternalFilters ? (g = a.linkExternalFilters.toLowerCase().split(","),
            m = 1) : a.linkInternalFilters && (g = a.linkInternalFilters.toLowerCase().split(",")),
            g))) {
                for (h = 0; h < g.length; h++)
                    n = g[h],
                    0 <= l.indexOf(n) && (q = 1);
                q ? m && (f = "e") : m || (f = "e")
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
            k.s_objectID && (b.id = k.s_objectID,
            d = b.type = 1),
            f && b && b.id && c && (a.e = "&pid=" + a.escape(f.substring(0, 255)) + (e ? "&pidt=" + e : "") + "&oid=" + a.escape(b.id.substring(0, 100)) + (b.type ? "&oidt=" + b.type : "") + "&ot=" + c + (d ? "&oi=" + d : "")))
    }
    ;
    a.yb = function() {
        var c = a.ha
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
        if (a.trackClickMap || a.trackInlineStats || a.Bb()) {
            var b = {}, d = 0, e = a.cookieRead("s_sq"), g = e ? e.split("&") : 0, h, l, k, e = 0;
            if (g)
                for (h = 0; h < g.length; h++)
                    l = g[h].split("="),
                    f = a.unescape(l[0]).split(","),
                    l = a.unescape(l[1]),
                    b[l] = f;
            f = a.account.split(",");
            h = {};
            for (k in a.contextData)
                k && !Object.prototype[k] && "a.activitymap." == k.substring(0, 14) && (h[k] = a.contextData[k],
                a.contextData[k] = "");
            a.e = a.q("c", h) + (a.e ? a.e : "");
            if (c || a.e) {
                c && !a.e && (e = 1);
                for (l in b)
                    if (!Object.prototype[l])
                        for (k = 0; k < f.length; k++)
                            for (e && (g = b[l].join(","),
                            g == a.account && (a.e += ("&" != l.charAt(0) ? "&" : "") + l,
                            b[l] = [],
                            d = 1)),
                            h = 0; h < b[l].length; h++)
                                g = b[l][h],
                                g == f[k] && (e && (a.e += "&u=" + a.escape(g) + ("&" != l.charAt(0) ? "&" : "") + l + "&u=0"),
                                b[l].splice(h, 1),
                                d = 1);
                c || (d = 1);
                if (d) {
                    e = "";
                    h = 2;
                    !c && a.e && (e = a.escape(f.join(",")) + "=" + a.escape(a.e),
                    h = 1);
                    for (l in b)
                        !Object.prototype[l] && 0 < h && 0 < b[l].length && (e += (e ? "&" : "") + a.escape(b[l].join(",")) + "=" + a.escape(l),
                        h--);
                    a.cookieWrite("s_sq", e)
                }
            }
        }
        return c
    }
    ;
    a.zb = function() {
        if (!a.Jb) {
            var c = new Date, b = n.location, d, f, e = f = d = "", g = "", h = "", l = "1.2", k = a.cookieWrite("s_cc", "true", 0) ? "Y" : "N", m = "", p = "";
            if (c.setUTCDate && (l = "1.3",
            (0).toPrecision && (l = "1.5",
            c = [],
            c.forEach))) {
                l = "1.6";
                f = 0;
                d = {};
                try {
                    f = new Iterator(d),
                    f.next && (l = "1.7",
                    c.reduce && (l = "1.8",
                    l.trim && (l = "1.8.1",
                    Date.parse && (l = "1.8.2",
                    Object.create && (l = "1.8.5")))))
                } catch (r) {}
            }
            d = screen.width + "x" + screen.height;
            e = navigator.javaEnabled() ? "Y" : "N";
            f = screen.pixelDepth ? screen.pixelDepth : screen.colorDepth;
            g = a.w.innerWidth ? a.w.innerWidth : a.d.documentElement.offsetWidth;
            h = a.w.innerHeight ? a.w.innerHeight : a.d.documentElement.offsetHeight;
            try {
                a.b.addBehavior("#default#homePage"),
                m = a.b.Pb(b) ? "Y" : "N"
            } catch (s) {}
            try {
                a.b.addBehavior("#default#clientCaps"),
                p = a.b.connectionType
            } catch (t) {}
            a.resolution = d;
            a.colorDepth = f;
            a.javascriptVersion = l;
            a.javaEnabled = e;
            a.cookiesEnabled = k;
            a.browserWidth = g;
            a.browserHeight = h;
            a.connectionType = p;
            a.homepage = m;
            a.Jb = 1
        }
    }
    ;
    a.Q = {};
    a.loadModule = function(c, b) {
        var d = a.Q[c];
        if (!d) {
            d = k["AppMeasurement_Module_" + c] ? new k["AppMeasurement_Module_" + c](a) : {};
            a.Q[c] = a[c] = d;
            d.ab = function() {
                return d.fb
            }
            ;
            d.hb = function(b) {
                if (d.fb = b)
                    a[c + "_onLoad"] = b,
                    a.ba(c + "_onLoad", [a, d], 1) || b(a, d)
            }
            ;
            try {
                Object.defineProperty ? Object.defineProperty(d, "onLoad", {
                    get: d.ab,
                    set: d.hb
                }) : d._olc = 1
            } catch (f) {
                d._olc = 1
            }
        }
        b && (a[c + "_onLoad"] = b,
        a.ba(c + "_onLoad", [a, d], 1) || b(a, d))
    }
    ;
    a.o = function(c) {
        var b, d;
        for (b in a.Q)
            if (!Object.prototype[b] && (d = a.Q[b]) && (d._olc && d.onLoad && (d._olc = 0,
            d.onLoad(a, d)),
            d[c] && d[c]()))
                return 1;
        return 0
    }
    ;
    a.Bb = function() {
        return a.ActivityMap && a.ActivityMap._c ? !0 : !1
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
        var d, f, e, g, h, l;
        for (d = 0; 2 > d; d++)
            for (f = 0 < d ? a.va : a.g,
            e = 0; e < f.length; e++)
                if (g = f[e],
                (h = c[g]) || c["!" + g]) {
                    if (!b && ("contextData" == g || "retrieveLightData" == g) && a[g])
                        for (l in a[g])
                            h[l] || (h[l] = a[g][l]);
                    a[g] = h
                }
    }
    ;
    a.Ra = function(c, b) {
        var d, f, e, g;
        for (d = 0; 2 > d; d++)
            for (f = 0 < d ? a.va : a.g,
            e = 0; e < f.length; e++)
                g = f[e],
                c[g] = a[g],
                b || c[g] || (c["!" + g] = 1)
    }
    ;
    a.tb = function(a) {
        var b, d, f, e, g, h = 0, l, k = "", m = "";
        if (a && 255 < a.length && (b = "" + a,
        d = b.indexOf("?"),
        0 < d && (l = b.substring(d + 1),
        b = b.substring(0, d),
        e = b.toLowerCase(),
        f = 0,
        "http://" == e.substring(0, 7) ? f += 7 : "https://" == e.substring(0, 8) && (f += 8),
        d = e.indexOf("/", f),
        0 < d && (e = e.substring(f, d),
        g = b.substring(d),
        b = b.substring(0, d),
        0 <= e.indexOf("google") ? h = ",q,ie,start,search_key,word,kw,cd," : 0 <= e.indexOf("yahoo.co") && (h = ",p,ei,"),
        h && l)))) {
            if ((a = l.split("&")) && 1 < a.length) {
                for (f = 0; f < a.length; f++)
                    e = a[f],
                    d = e.indexOf("="),
                    0 < d && 0 <= h.indexOf("," + e.substring(0, d) + ",") ? k += (k ? "&" : "") + e : m += (m ? "&" : "") + e;
                k && m ? l = k + "&" + m : m = ""
            }
            d = 253 - (l.length - m.length) - b.length;
            a = b + (0 < d ? g.substring(0, d) : "") + "?" + l
        }
        return a
    }
    ;
    a.Va = function(c) {
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
    a.X = !1;
    a.J = !1;
    a.jb = function() {
        a.J = !0;
        a.H()
    }
    ;
    a.Y = !1;
    a.S = !1;
    a.kb = function(c) {
        a.marketingCloudVisitorID = c.MCMID;
        a.visitorOptedOut = c.MCOPTOUT;
        a.analyticsVisitorID = c.MCAID;
        a.audienceManagerLocationHint = c.MCAAMLH;
        a.audienceManagerBlob = c.MCAAMB;
        a.S = !0;
        a.H()
    }
    ;
    a.Ua = function(c) {
        a.maxDelay || (a.maxDelay = 250);
        return a.o("_d") ? (c && setTimeout(function() {
            c()
        }, a.maxDelay),
        !1) : !0
    }
    ;
    a.W = !1;
    a.I = !1;
    a.ra = function() {
        a.I = !0;
        a.H()
    }
    ;
    a.isReadyToTrack = function() {
        var c = !0
          , b = a.visitor;
        a.X || a.J || (a.Va(a.jb) ? a.J = !0 : a.X = !0);
        if (a.X && !a.J)
            return !1;
        b && b.isAllowed() && (a.Y || a.marketingCloudVisitorID || !b.getVisitorValues || (a.Y = !0,
        a.marketingCloudVisitorID ? a.S = !0 : b.getVisitorValues(a.kb)),
        c = !a.Y || a.S || a.marketingCloudVisitorID ? !0 : !1);
        a.W || a.I || (a.Ua(a.ra) ? a.I = !0 : a.W = !0);
        a.W && !a.I && (c = !1);
        return c
    }
    ;
    a.l = p;
    a.r = 0;
    a.callbackWhenReadyToTrack = function(c, b, d) {
        var f;
        f = {};
        f.ob = c;
        f.nb = b;
        f.lb = d;
        a.l == p && (a.l = []);
        a.l.push(f);
        0 == a.r && (a.r = setInterval(a.H, 100))
    }
    ;
    a.H = function() {
        var c;
        if (a.isReadyToTrack() && (a.ib(),
        a.l != p))
            for (; 0 < a.l.length; )
                c = a.l.shift(),
                c.nb.apply(c.ob, c.lb)
    }
    ;
    a.ib = function() {
        a.r && (clearInterval(a.r),
        a.r = 0)
    }
    ;
    a.cb = function(c) {
        var b, d, f = p, e = p;
        if (!a.isReadyToTrack()) {
            b = [];
            if (c != p)
                for (d in f = {},
                c)
                    f[d] = c[d];
            e = {};
            a.Ra(e, !0);
            b.push(f);
            b.push(e);
            a.callbackWhenReadyToTrack(a, a.track, b);
            return !0
        }
        return !1
    }
    ;
    a.vb = function() {
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
        a.o("_s");
        a.cb(c) || (b && a.R(b),
        c && (d = {},
        a.Ra(d, 0),
        a.R(c)),
        a.Cb() && !a.visitorOptedOut && (a.pa() || (a.fid = a.vb()),
        a.Fb(),
        a.usePlugins && a.doPlugins && a.doPlugins(a),
        a.account && (a.abort || (a.trackOffline && !a.timestamp && (a.timestamp = Math.floor(f.getTime() / 1E3)),
        f = k.location,
        a.pageURL || (a.pageURL = f.href ? f.href : f),
        a.referrer || a.Sa || (f = a.Util.getQueryParam("adobe_mc_ref", null, null, !0),
        a.referrer = f || void 0 === f ? void 0 === f ? "" : f : n.document.referrer),
        a.Sa = 1,
        a.referrer = a.tb(a.referrer),
        a.o("_g")),
        a.yb() && !a.abort && (a.visitor && !a.supplementalDataID && a.visitor.getSupplementalDataID && (a.supplementalDataID = a.visitor.getSupplementalDataID("AppMeasurement:" + a._in, a.expectSupplementalData ? !1 : !0)),
        a.zb(),
        g += a.xb(),
        a.eb(e, g),
        a.o("_t"),
        a.referrer = ""))),
        c && a.R(d, 1));
        a.abort = a.supplementalDataID = a.timestamp = a.pageURLRest = a.linkObject = a.clickObject = a.linkURL = a.linkName = a.linkType = k.s_objectID = a.pe = a.pev1 = a.pev2 = a.pev3 = a.e = a.lightProfileID = 0
    }
    ;
    a.ua = [];
    a.registerPreTrackCallback = function(c) {
        for (var b = [], d = 1; d < arguments.length; d++)
            b.push(arguments[d]);
        "function" == typeof c ? a.ua.push([c, b]) : a.debugTracking && a.D("DEBUG: Non function type passed to registerPreTrackCallback")
    }
    ;
    a.Ya = function(c) {
        a.oa(a.ua, c)
    }
    ;
    a.ta = [];
    a.registerPostTrackCallback = function(c) {
        for (var b = [], d = 1; d < arguments.length; d++)
            b.push(arguments[d]);
        "function" == typeof c ? a.ta.push([c, b]) : a.debugTracking && a.D("DEBUG: Non function type passed to registerPostTrackCallback")
    }
    ;
    a.Xa = function(c) {
        a.oa(a.ta, c)
    }
    ;
    a.oa = function(c, b) {
        if ("object" == typeof c)
            for (var d = 0; d < c.length; d++) {
                var f = c[d][0]
                  , e = c[d][1].slice();
                e.unshift(b);
                if ("function" == typeof f)
                    try {
                        f.apply(null, e)
                    } catch (g) {
                        a.debugTracking && a.D(g.message)
                    }
            }
    }
    ;
    a.tl = a.trackLink = function(c, b, d, f, e) {
        a.linkObject = c;
        a.linkType = b;
        a.linkName = d;
        e && (a.k = c,
        a.v = e);
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
    a.eb = function(c, b) {
        var d = a.Za() + "/" + c + "?AQB=1&ndh=1&pf=1&" + (a.qa() ? "callback=s_c_il[" + a._in + "].doPostbacks&et=1&" : "") + b + "&AQE=1";
        a.Ya(d);
        a.Wa(d);
        a.T()
    }
    ;
    a.Za = function() {
        var c = a.$a();
        return "http" + (a.ssl ? "s" : "") + "://" + c + "/b/ss/" + a.account + "/" + (a.mobile ? "5." : "") + (a.qa() ? "10" : "1") + "/JS-" + a.version + (a.Ib ? "T" : "") + (a.tagContainerMarker ? "-" + a.tagContainerMarker : "")
    }
    ;
    a.qa = function() {
        return a.AudienceManagement && a.AudienceManagement.isReady() || 0 != a.usePostbacks
    }
    ;
    a.$a = function() {
        var c = a.dc
          , b = a.trackingServer;
        b ? a.trackingServerSecure && a.ssl && (b = a.trackingServerSecure) : (c = c ? ("" + c).toLowerCase() : "d1",
        "d1" == c ? c = "112" : "d2" == c && (c = "122"),
        b = a.bb() + "." + c + ".2o7.net");
        return b
    }
    ;
    a.bb = function() {
        var c = a.visitorNamespace;
        c || (c = a.account.split(",")[0],
        c = c.replace(/[^0-9a-z]/gi, ""));
        return c
    }
    ;
    a.Qa = /{(%?)(.*?)(%?)}/;
    a.Mb = RegExp(a.Qa.source, "g");
    a.sb = function(c) {
        if ("object" == typeof c.dests)
            for (var b = 0; b < c.dests.length; ++b) {
                var d = c.dests[b];
                if ("string" == typeof d.c && "aa." == d.id.substr(0, 3))
                    for (var f = d.c.match(a.Mb), e = 0; e < f.length; ++e) {
                        var g = f[e]
                          , h = g.match(a.Qa)
                          , k = "";
                        "%" == h[1] && "timezone_offset" == h[2] ? k = (new Date).getTimezoneOffset() : "%" == h[1] && "timestampz" == h[2] && (k = a.wb());
                        d.c = d.c.replace(g, a.escape(k))
                    }
            }
    }
    ;
    a.wb = function() {
        var c = new Date
          , b = new Date(6E4 * Math.abs(c.getTimezoneOffset()));
        return a.j(4, c.getFullYear()) + "-" + a.j(2, c.getMonth() + 1) + "-" + a.j(2, c.getDate()) + "T" + a.j(2, c.getHours()) + ":" + a.j(2, c.getMinutes()) + ":" + a.j(2, c.getSeconds()) + (0 < c.getTimezoneOffset() ? "-" : "+") + a.j(2, b.getUTCHours()) + ":" + a.j(2, b.getUTCMinutes())
    }
    ;
    a.j = function(a, b) {
        return (Array(a + 1).join(0) + b).slice(-a)
    }
    ;
    a.la = {};
    a.doPostbacks = function(c) {
        if ("object" == typeof c)
            if (a.sb(c),
            "object" == typeof a.AudienceManagement && "function" == typeof a.AudienceManagement.isReady && a.AudienceManagement.isReady() && "function" == typeof a.AudienceManagement.passData)
                a.AudienceManagement.passData(c);
            else if ("object" == typeof c && "object" == typeof c.dests)
                for (var b = 0; b < c.dests.length; ++b) {
                    var d = c.dests[b];
                    "object" == typeof d && "string" == typeof d.c && "string" == typeof d.id && "aa." == d.id.substr(0, 3) && (a.la[d.id] = new Image,
                    a.la[d.id].alt = "",
                    a.la[d.id].src = d.c)
                }
    }
    ;
    a.Wa = function(c) {
        a.i || a.Ab();
        a.i.push(c);
        a.ea = a.B();
        a.Oa()
    }
    ;
    a.Ab = function() {
        a.i = a.Db();
        a.i || (a.i = [])
    }
    ;
    a.Db = function() {
        var c, b;
        if (a.ka()) {
            try {
                (b = k.localStorage.getItem(a.ia())) && (c = k.JSON.parse(b))
            } catch (d) {}
            return c
        }
    }
    ;
    a.ka = function() {
        var c = !0;
        a.trackOffline && a.offlineFilename && k.localStorage && k.JSON || (c = !1);
        return c
    }
    ;
    a.Ea = function() {
        var c = 0;
        a.i && (c = a.i.length);
        a.p && c++;
        return c
    }
    ;
    a.T = function() {
        if (a.p && (a.A && a.A.complete && a.A.F && a.A.na(),
        a.p))
            return;
        a.Fa = p;
        if (a.ja)
            a.ea > a.O && a.Ma(a.i),
            a.ma(500);
        else {
            var c = a.mb();
            if (0 < c)
                a.ma(c);
            else if (c = a.Ba())
                a.p = 1,
                a.Eb(c),
                a.Hb(c)
        }
    }
    ;
    a.ma = function(c) {
        a.Fa || (c || (c = 0),
        a.Fa = setTimeout(a.T, c))
    }
    ;
    a.mb = function() {
        var c;
        if (!a.trackOffline || 0 >= a.offlineThrottleDelay)
            return 0;
        c = a.B() - a.Ka;
        return a.offlineThrottleDelay < c ? 0 : a.offlineThrottleDelay - c
    }
    ;
    a.Ba = function() {
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
            a.D(b)
        }
    }
    ;
    a.pa = function() {
        return a.marketingCloudVisitorID || a.analyticsVisitorID
    }
    ;
    a.V = !1;
    var t;
    try {
        t = JSON.parse('{"x":"y"}')
    } catch (w) {
        t = null
    }
    t && "y" == t.x ? (a.V = !0,
    a.U = function(a) {
        return JSON.parse(a)
    }
    ) : k.$ && k.$.parseJSON ? (a.U = function(a) {
        return k.$.parseJSON(a)
    }
    ,
    a.V = !0) : a.U = function() {
        return null
    }
    ;
    a.Hb = function(c) {
        var b, d, f;
        a.pa() && 2047 < c.length && (a.Ta() && (d = 1,
        b = new XMLHttpRequest),
        b && (a.AudienceManagement && a.AudienceManagement.isReady() || 0 != a.usePostbacks) && (a.V ? b.wa = !0 : b = 0));
        !b && a.Pa && (c = c.substring(0, 2047));
        !b && a.d.createElement && (0 != a.usePostbacks || a.AudienceManagement && a.AudienceManagement.isReady()) && (b = a.d.createElement("SCRIPT")) && "async"in b && ((f = (f = a.d.getElementsByTagName("HEAD")) && f[0] ? f[0] : a.d.body) ? (b.type = "text/javascript",
        b.setAttribute("async", "async"),
        d = 2) : b = 0);
        b || (b = new Image,
        b.alt = "",
        b.abort || "undefined" === typeof k.InstallTrigger || (b.abort = function() {
            b.src = p
        }
        ));
        b.La = Date.now();
        b.ya = function() {
            try {
                b.F && (clearTimeout(b.F),
                b.F = 0)
            } catch (a) {}
        }
        ;
        b.onload = b.na = function() {
            b.La && (a.fa = Date.now() - b.La);
            a.Xa(c);
            b.ya();
            a.qb();
            a.Z();
            a.p = 0;
            a.T();
            if (b.wa) {
                b.wa = !1;
                try {
                    a.doPostbacks(a.U(b.responseText))
                } catch (d) {}
            }
        }
        ;
        b.onabort = b.onerror = b.Ca = function() {
            b.ya();
            (a.trackOffline || a.ja) && a.p && a.i.unshift(a.pb);
            a.p = 0;
            a.ea > a.O && a.Ma(a.i);
            a.Z();
            a.ma(500)
        }
        ;
        b.onreadystatechange = function() {
            4 == b.readyState && (200 == b.status ? b.na() : b.Ca())
        }
        ;
        a.Ka = a.B();
        if (1 == d)
            f = c.indexOf("?"),
            d = c.substring(0, f),
            f = c.substring(f + 1),
            f = f.replace(/&callback=[a-zA-Z0-9_.\[\]]+/, ""),
            b.open("POST", d, !0),
            b.withCredentials = !0,
            b.send(f);
        else if (b.src = c,
        2 == d) {
            if (a.Ia)
                try {
                    f.removeChild(a.Ia)
                } catch (e) {}
            f.firstChild ? f.insertBefore(b, f.firstChild) : f.appendChild(b);
            a.Ia = a.A
        }
        b.F = setTimeout(function() {
            b.F && (b.complete ? b.na() : (a.trackOffline && b.abort && b.abort(),
            b.Ca()))
        }, 5E3);
        a.pb = c;
        a.A = k["s_i_" + a.replace(a.account, ",", "_")] = b;
        if (a.useForcedLinkTracking && a.K || a.v)
            a.forcedLinkTrackingTimeout || (a.forcedLinkTrackingTimeout = 250),
            a.aa = setTimeout(a.Z, a.forcedLinkTrackingTimeout)
    }
    ;
    a.Ta = function() {
        return "undefined" !== typeof XMLHttpRequest && "withCredentials"in new XMLHttpRequest ? !0 : !1
    }
    ;
    a.qb = function() {
        if (a.ka() && !(a.Ja > a.O))
            try {
                k.localStorage.removeItem(a.ia()),
                a.Ja = a.B()
            } catch (c) {}
    }
    ;
    a.Ma = function(c) {
        if (a.ka()) {
            a.Oa();
            try {
                k.localStorage.setItem(a.ia(), k.JSON.stringify(c)),
                a.O = a.B()
            } catch (b) {}
        }
    }
    ;
    a.Oa = function() {
        if (a.trackOffline) {
            if (!a.offlineLimit || 0 >= a.offlineLimit)
                a.offlineLimit = 10;
            for (; a.i.length > a.offlineLimit; )
                a.Ba()
        }
    }
    ;
    a.forceOffline = function() {
        a.ja = !0
    }
    ;
    a.forceOnline = function() {
        a.ja = !1
    }
    ;
    a.ia = function() {
        return a.offlineFilename + "-" + a.visitorNamespace + a.account
    }
    ;
    a.B = function() {
        return (new Date).getTime()
    }
    ;
    a.Ga = function(a) {
        a = a.toLowerCase();
        return 0 != a.indexOf("#") && 0 != a.indexOf("about:") && 0 != a.indexOf("opera:") && 0 != a.indexOf("javascript:") ? !0 : !1
    }
    ;
    a.setTagContainer = function(c) {
        var b, d, f;
        a.Ib = c;
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
        getQueryParam: function(c, b, d, f) {
            var e, g = "";
            b || (b = a.pageURL ? a.pageURL : k.location);
            d = d ? d : "&";
            if (!c || !b)
                return g;
            b = "" + b;
            e = b.indexOf("?");
            if (0 > e)
                return g;
            b = d + b.substring(e + 1) + d;
            if (!f || !(0 <= b.indexOf(d + c + d) || 0 <= b.indexOf(d + c + "=" + d))) {
                e = b.indexOf("#");
                0 <= e && (b = b.substr(0, e) + d);
                e = b.indexOf(d + c + "=");
                if (0 > e)
                    return g;
                b = b.substring(e + d.length + c.length + 1);
                e = b.indexOf(d);
                0 <= e && (b = b.substring(0, e));
                0 < b.length && (g = a.unescape(b));
                return g
            }
        },
        getIeVersion: function() {
            if (document.documentMode)
                return document.documentMode;
            for (var a = 7; 4 < a; a--) {
                var b = document.createElement("div");
                b.innerHTML = "\x3c!--[if IE " + a + "]><span></span><![endif]--\x3e";
                if (b.getElementsByTagName("span").length)
                    return a
            }
            return null
        }
    };
    a.G = "supplementalDataID timestamp dynamicVariablePrefix visitorID marketingCloudVisitorID analyticsVisitorID audienceManagerLocationHint authState fid vmk visitorMigrationKey visitorMigrationServer visitorMigrationServerSecure charSet visitorNamespace cookieDomainPeriods fpCookieDomainPeriods cookieLifetime pageName pageURL customerPerspective referrer contextData currencyCode lightProfileID lightStoreForSeconds lightIncrementBy retrieveLightProfiles deleteLightProfiles retrieveLightData".split(" ");
    a.g = a.G.concat("purchaseID variableProvider channel server pageType transactionID campaign state zip events events2 products audienceManagerBlob tnt".split(" "));
    a.ga = "timestamp charSet visitorNamespace cookieDomainPeriods cookieLifetime contextData lightProfileID lightStoreForSeconds lightIncrementBy".split(" ");
    a.P = a.ga.slice(0);
    a.va = "account allAccounts debugTracking visitor visitorOptedOut trackOffline offlineLimit offlineThrottleDelay offlineFilename usePlugins doPlugins configURL visitorSampling visitorSamplingGroup linkObject clickObject linkURL linkName linkType trackDownloadLinks trackExternalLinks trackClickMap trackInlineStats linkLeaveQueryString linkTrackVars linkTrackEvents linkDownloadFileTypes linkExternalFilters linkInternalFilters useForcedLinkTracking forcedLinkTrackingTimeout trackingServer trackingServerSecure ssl abort mobile dc lightTrackVars maxDelay expectSupplementalData usePostbacks registerPreTrackCallback registerPostTrackCallback AudienceManagement".split(" ");
    for (m = 0; 250 >= m; m++)
        76 > m && (a.g.push("prop" + m),
        a.P.push("prop" + m)),
        a.g.push("eVar" + m),
        a.P.push("eVar" + m),
        6 > m && a.g.push("hier" + m),
        4 > m && a.g.push("list" + m);
    m = "pe pev1 pev2 pev3 latitude longitude resolution colorDepth javascriptVersion javaEnabled cookiesEnabled browserWidth browserHeight connectionType homepage pageURLRest marketingCloudOrgID".split(" ");
    a.g = a.g.concat(m);
    a.G = a.G.concat(m);
    a.ssl = 0 <= k.location.protocol.toLowerCase().indexOf("https");
    a.charSet = "UTF-8";
    a.contextData = {};
    a.offlineThrottleDelay = 0;
    a.offlineFilename = "AppMeasurement.offline";
    a.Ka = 0;
    a.ea = 0;
    a.O = 0;
    a.Ja = 0;
    a.linkDownloadFileTypes = "exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx";
    a.w = k;
    a.d = k.document;
    try {
        if (a.Pa = !1,
        navigator) {
            var v = navigator.userAgent;
            if ("Microsoft Internet Explorer" == navigator.appName || 0 <= v.indexOf("MSIE ") || 0 <= v.indexOf("Trident/") && 0 <= v.indexOf("Windows NT 6"))
                a.Pa = !0
        }
    } catch (x) {}
    a.Z = function() {
        a.aa && (k.clearTimeout(a.aa),
        a.aa = p);
        a.k && a.K && a.k.dispatchEvent(a.K);
        a.v && ("function" == typeof a.v ? a.v() : a.k && a.k.href && (a.d.location = a.k.href));
        a.k = a.K = a.v = 0
    }
    ;
    a.Na = function() {
        a.b = a.d.body;
        a.b ? (a.u = function(c) {
            var b, d, f, e, g;
            if (!(a.d && a.d.getElementById("cppXYctnr") || c && c["s_fe_" + a._in])) {
                if (a.xa)
                    if (a.useForcedLinkTracking)
                        a.b.removeEventListener("click", a.u, !1);
                    else {
                        a.b.removeEventListener("click", a.u, !0);
                        a.xa = a.useForcedLinkTracking = 0;
                        return
                    }
                else
                    a.useForcedLinkTracking = 0;
                a.clickObject = c.srcElement ? c.srcElement : c.target;
                try {
                    if (!a.clickObject || a.N && a.N == a.clickObject || !(a.clickObject.tagName || a.clickObject.parentElement || a.clickObject.parentNode))
                        a.clickObject = 0;
                    else {
                        var h = a.N = a.clickObject;
                        a.da && (clearTimeout(a.da),
                        a.da = 0);
                        a.da = setTimeout(function() {
                            a.N == h && (a.N = 0)
                        }, 1E4);
                        f = a.Ea();
                        a.track();
                        if (f < a.Ea() && a.useForcedLinkTracking && c.target) {
                            for (e = c.target; e && e != a.b && "A" != e.tagName.toUpperCase() && "AREA" != e.tagName.toUpperCase(); )
                                e = e.parentNode;
                            if (e && (g = e.href,
                            a.Ga(g) || (g = 0),
                            d = e.target,
                            c.target.dispatchEvent && g && (!d || "_self" == d || "_top" == d || "_parent" == d || k.name && d == k.name))) {
                                try {
                                    b = a.d.createEvent("MouseEvents")
                                } catch (l) {
                                    b = new k.MouseEvent
                                }
                                if (b) {
                                    try {
                                        b.initMouseEvent("click", c.bubbles, c.cancelable, c.view, c.detail, c.screenX, c.screenY, c.clientX, c.clientY, c.ctrlKey, c.altKey, c.shiftKey, c.metaKey, c.button, c.relatedTarget)
                                    } catch (m) {
                                        b = 0
                                    }
                                    b && (b["s_fe_" + a._in] = b.s_fe = 1,
                                    c.stopPropagation(),
                                    c.stopImmediatePropagation && c.stopImmediatePropagation(),
                                    c.preventDefault(),
                                    a.k = c.target,
                                    a.K = b)
                                }
                            }
                        }
                    }
                } catch (n) {
                    a.clickObject = 0
                }
            }
        }
        ,
        a.b && a.b.attachEvent ? a.b.attachEvent("onclick", a.u) : a.b && a.b.addEventListener && (navigator && (0 <= navigator.userAgent.indexOf("WebKit") && a.d.createEvent || 0 <= navigator.userAgent.indexOf("Firefox/2") && k.MouseEvent) && (a.xa = 1,
        a.useForcedLinkTracking = 1,
        a.b.addEventListener("click", a.u, !0)),
        a.b.addEventListener("click", a.u, !1))) : setTimeout(a.Na, 30)
    }
    ;
    a.rb();
    a.Rb || (r ? a.setAccount(r) : a.D("Error, missing Report Suite ID in AppMeasurement initialization"),
    a.Na(),
    a.loadModule("ActivityMap"))
}
function s_gi(r) {
    var a, k = window.s_c_il, p, n, m = r.split(","), s, u, t = 0;
    if (k)
        for (p = 0; !t && p < k.length; ) {
            a = k[p];
            if ("s_c" == a._c && (a.account || a.oun))
                if (a.account && a.account == r)
                    t = 1;
                else
                    for (n = a.account ? a.account : a.oun,
                    n = a.allAccounts ? a.allAccounts : n.split(","),
                    s = 0; s < m.length; s++)
                        for (u = 0; u < n.length; u++)
                            m[s] == n[u] && (t = 1);
            p++
        }
    t ? a.setAccount && a.setAccount(r) : a = new AppMeasurement(r);
    return a
}
AppMeasurement.getInstance = s_gi;
window.s_objectID || (window.s_objectID = 0);
function s_pgicq() {
    var r = window, a = r.s_giq, k, p, n;
    if (a)
        for (k = 0; k < a.length; k++)
            p = a[k],
            n = s_gi(p.oun),
            n.setAccount(p.un),
            n.setTagContainer(p.tagContainerName);
    r.s_giq = 0
}
s_pgicq();
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
        u.queue = [];
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
        u.combineLinkVar = false;
        u.pushlt = function(l, v) {
            if (typeof l != "undefined")
                l.push(v)
        }
        ;
        if (utag.ut.typeOf === undefined) {
            u.typeOf = function(e) {
                return ({}).toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
            }
            ;
        } else {
            u.typeOf = utag.ut.typeOf;
        }
        u.typeCheck = function(linkTrack, type) {
            if (u.typeOf(linkTrack) === "string") {
                u[type] = linkTrack.split(",");
            } else if (u.typeOf(linkTrack) === "array") {
                u[type] = linkTrack;
            } else {
                u[type] = [];
            }
        }
        u.initialized = false;
        u.map = {};
        u.extend = [function(a, b) {
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
                    s.split = new Function("l","d","" + "var i,x=0,a=new Array;while(l){i=l.indexOf(d);i=i>-1?i:l.length;a[x++]=l.substring(0,i);l=l.substring(i+d.length);}return a");
                    s.vpr = new Function("vs","v","if(typeof(v)!='undefined'){var s=this; eval('s.'+vs+'=\"'+v+'\"')}");
                    s.repl = new Function("x","o","n","" + "var i=x.indexOf(o),l=n.length;while(x&&i>=0){x=x.substring(0,i)+n+x.substring(i+o.length);i=x.indexOf(o,i+l)}return x");
                    s.partnerADSERVCheck = new Function("cfg","" + "var s=this,c=cfg.visitCookie,src=cfg.clickThroughParam,scp=cfg.searchCenterParam,tv=cfg.tEvar,dl=',',cr,nc,q,g,gs,i,j,k,fnd,v=1," + "t=new Date,cn=0,ca=new Array,aa=new Array,cs=new Array;t.setTime(t.getTime()+1800000);cr=s.c_r(c);if(cr){v=0;}ca=s.split(cr,dl);" + "if(s.un)aa=s.split(s.un,dl);else aa=s.split(s.account,dl);for(i=0;i<aa.length;i++){fnd = 0;for(j=0;j<ca.length;j++){if(aa[i] == ca[j]){fnd=1;}}if(!fnd){cs[cn]=aa[i];c" + "n++;}}if(cs.length){for(k=0;k<cs.length;k++){nc=(nc?nc+dl:'')+cs[k];}cr=(cr?cr+dl:'')+nc;v=1;}if(s.wd)q=s.wd.location.search.toLowerCase(" + ");else q=s.w.location.search.toLowerCase();q=s.repl(q,'?','&');g=q.indexOf('&'+src.toLowerCase()+'=');gs=(scp)?q.indexOf('&'+scp.toLowerCase()+'='):-1;if(g>-1){v=1;}else i" + "f(gs>-1){v=0;s.vpr(tv,'SearchCenter Visitors');}if(!s.c_w(c,cr,t)){s.c_w(c,cr,0);}if(!s.c_r(c)){v=0;}return v>=1;");
                    s.getValOnce = new Function("v","c","e","" + "var s=this,a=new Date,v=v?v:v='',c=c?c:c='s_gvo',e=e?e:0,k=s.c_r(c" + ");if(v){a.setTime(a.getTime()+e*86400000);s.c_w(c,v,e?a:0);}return" + " v==k?'':v");
                    window.adservConfig = {
                        tEvar: 'eVar54',
                        aID: '63183',
                        cID: '582059',
                        gID: 'EB_ACM:',
                        requestURL: "https://bs.serving-sys.com/BurstingPipe/ActivityServer.bs?cn=as&vn=omn&activityID=[cID]&advID=[aID]&var=[VAR]&rnd=[RAND]",
                        maxDelay: "750",
                        visitCookie: "s_adserv",
                        clickThroughParam: "CID",
                        searchCenterParam: undefined,
                    };
                    s.maxDelay = adservConfig.maxDelay;
                    s.loadModule("Integrate");
                    s.Integrate.onLoad = function(s, m) {
                        var adservCheck = s.partnerADSERVCheck(adservConfig);
                        if (adservCheck) {
                            s.Integrate.add("Sizmek_ACM");
                            s.Integrate.Sizmek_ACM.tEvar = adservConfig.tEvar;
                            s.Integrate.Sizmek_ACM.aID = adservConfig.aID;
                            s.Integrate.Sizmek_ACM.cID = adservConfig.cID;
                            s.Integrate.Sizmek_ACM.gID = adservConfig.gID;
                            s.Integrate.Sizmek_ACM.tVar = adservConfig.tEvar;
                            s.Integrate.Sizmek_ACM.get(adservConfig.requestURL);
                            s.Integrate.Sizmek_ACM.setVars = function(s, p) {
                                var at = p.lastImpTime
                                  , a1 = p.lastImpSId
                                  , a2 = p.lastImpPId
                                  , a3 = p.lastImpId
                                  , bt = p.lastClkTime
                                  , b1 = p.lastClkSId
                                  , b2 = p.lastClkPId
                                  , b3 = p.lastClkId;
                                if (((at && a1 && a2 && a3) || (bt && b1 && b2 && b3)) && !p.errorCode)
                                    s[p.tVar] = adservConfig.gID + (at ? at : 0) + ":" + (a1 ? a1 : 0) + ":" + (a2 ? a2 : 0) + ":" + (a3 ? a3 : 0) + ":" + (bt ? bt : 0) + ":" + (b1 ? b1 : 0) + ":" + (b2 ? b2 : 0) + ":" + (b3 ? b3 : 0);
                            }
                            ;
                        }
                    }
                    ;
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
                }
            } catch (e) {
                utag.DB(e)
            }
        }
        ];
        u.send = function(a, b, c, d, e, f, g, h, ev) {
            if (u.ev[a] || typeof u.ev.all != "undefined") {
                utag.DB("send:53");
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
                for (d in utag.loader.GV(u.map)) {
                    if (b[d] !== undefined && b[d] !== "") {
                        e = u.map[d].split(",");
                        for (f = 0; f < e.length; f++) {
                            if (e[f] === "adobe_org_id" || e[f] === "linkTrackVars" || e[f] === "linkTrackEvents") {
                                u.data[e[f]] = b[d];
                            } else if (e[f] === "combineLinkVar") {
                                u.combineLinkVar = b[d];
                            }
                        }
                    }
                }
                u.queue.push({
                    "a": a,
                    "b": b,
                    "u.data": u.data
                });
                vAPI.getInstance(u.data.adobe_org_id, function(instance) {
                    var data = u.queue.shift();
                    a = data["a"];
                    b = data["b"];
                    u.data = data["u.data"];
                    u.a = a;
                    b.sc_events = b.sc_events || {};
                    for (c = 0; c < u.extend.length; c++) {
                        try {
                            d = u.extend[c](a, b);
                            if (d == false)
                                return
                        } catch (e) {}
                    }
                    ;if (!u.initialized) {
                        if (u.a == "view") {
                            var img = u.o.t();
                            if (typeof img != "undefined" && img != "") {
                                u.img = new Image();
                                u.img.src = img.substring(img.indexOf("src=") + 5, img.indexOf("width=") - 2);
                            }
                            u.initialized = true;
                            utag.DB("Adobe initial pageview fired");
                        }
                    }
                    if ("no" == "yes") {
                        u.o.clearVars();
                        u.o.contextData = {};
                    }
                    utag.DB("send:53:COMPLETE");
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
    )('53', 'mazdausa.main');
} catch (e) {
    utag.DB(e);
}
