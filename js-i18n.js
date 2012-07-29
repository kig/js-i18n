(function() {
    var invert = function(obj) {
        var o = {};
        for (var i in obj) {
            o[obj[i]] = i;
        }
        return o;
    };
    window.LocaleMappings = {
        'en-US': {
            'if': 'if',
            'in': 'in',
            'do': 'do',
            
            'var': 'var',
            'for': 'for',
            'new': 'new',
            'try': 'try',
            
            'this': 'this',
            'else': 'else',
            'case': 'case',
            'void': 'void',
            'with': 'with',
            
            'while': 'while',
            'break': 'break',
            'catch': 'catch',
            'throw': 'throw',
            
            'return': 'return',
            'typeof': 'typeof',
            'delete': 'delete',
            'switch': 'switch',
            
            'default': 'default',
            'finally': 'finally',
            'function': 'function',
            'continue': 'continue',
            'debugger': 'debugger',

            'instanceof': 'instanceof',

            'true': 'true',
            'false': 'false',
            'null': 'null',
            'undefined': 'undefined',
            'prototype': 'prototype',

            'yield': 'yield',
            'let': 'let',

            'class': 'class',
            'enum': 'enum',
            'export': 'export',
            'extends': 'extends',
            'import': 'import',
            'super': 'super',

            'implements': 'implements',
            'interface': 'interface',
            'package': 'package',
            'private': 'private',
            'protected': 'protected',
            'public': 'public',
            'static': 'static'
        },

        'ja-JP': invert({
            'function':'関数',
            'if':'もし',
            'else':'それ以外',
            'for':'なら',
            'while':'ながら',
            'return':'戻す',
            'do':'する',
            'true':'真',
            'false':'偽',
            'var':'変数',
            'in':'が',
            'let':'させ',
            'new':'新',
            'try':'試',
            'case':'ケース',
            'null':'ヌル',
            'this':'これ',
            'with':'と',
            'break':'中断',
            'throw':'投げ',
            'catch':'受け',
            'switch':'スイッチ',
            'continue':'続け',
            'debugger':'デバッガ',
            'instanceof':'実例',
            'typeof':'属性',
            'void':'無効',
            'delete':'削除',
            'default':'デフォルト',
            'finally':'やっと'
        }),
        
        'fr-FR': invert({
            'function':'fonction',
            'if':'si',
            'else':'sinon',
            'for':'pour',
            'while':'tantque',
            'return':'retourner',
            'do':'faire',
            'true':'vrai',
            'false':'faux',
            'var':'var',
            'in':'dans',
            'let':'soit',
            'new':'nouveau',
            'try':'essayer',
            'case':'cas',
            'null':'nul',
            'this':'ceci',
            'with':'avec',
            'break':'casser',
            'throw':'lancer',
            'catch':'capturer',
            'switch':'selon',
            'continue':'continuer',
            'debugger':'débogueur',
            'instanceof':'instancede',
            'typeof':'typede',
            'void':'vide',
            'delete':'effacer',
            'default':'défaut',
            'finally':'finalement'
        }),
        
        'fi-FI': {
            'jos':'if',
            'johon':'in',
            'tee':'do',

            'muu':'var',
            'joka':'for',
            'uusi':'new',
            'yritä':'try',

            'tämä':'this',
            'muuten':'else',
            'tapaus':'case',
            'tyhjiö':'void',
            'jolle':'with',

            'kun':'while',
            'lopeta':'break',
            'koppi':'catch',
            'heitä':'throw',

            'palauta':'return',
            'tyyppi':'typeof',
            'poista':'delete',
            'valitse':'switch',

            'oletus':'default',
            'viimein':'finally',
            'funktio':'function',
            'jatka':'continue',
            'debuggeri':'debugger',

            'instanssi':'instanceof',

            'tosi':'true',
            'epätosi':'false',
            'tyhjä':'null',
            'puuttuva':'undefined',
            'prototyyppi':'prototype',

            'anna':'yield',
            'on':'let',

            'luokka':'class',
            'num':'enum',
            'vie':'export',
            'laajentaa':'extends',
            'tuo':'import',
            'yli':'super',

            'toteuttaa':'implements',
            'rajapinta':'interface',
            'pakkaus':'package',
            'yksityinen':'private',
            'suojattu':'protected',
            'julkinen':'public',
            'staattinen':'static',

	    'asiakirja':'document',
	    'haeElementtiIdllä':'getElementById',

	    'sisäHTML':'innerHTML',
	    'korvaa':'replace',

	    'runko':'body',
	    'luoElementti':'createElement',
	    'lisääLapsi':'appendChild',
	    'luoTekstiSolmu':'createTextNode',
	    'lapsiSolmut':'childNodes',
	    'pituus':'length',
	    'tyyli':'style',
	    'väri':'color'
        }
    };

    var prettyPrint = function(tokens, locale) {
        var strings = [];
        var indent = "";
        var loc, iloc;
        if (locale) {
            loc = LocaleMappings[locale];
            iloc = {};
            for (var i in loc) {
                iloc[loc[i]] = i;
            }
        }
        var idx = 0;
        var writeOut = function (token) {
            var string = null;
            switch (token.type) {
            case 'Boolean':
            case 'Identifier':
            case 'Keyword':
            case 'Null':
            case 'Numeric':
            case 'Punctuator':
                string = token.id;
                var id = LocaleMappings['en-US'][token.id];
                if (id !== undefined) {
                    if (locale) {
                        string = token.value.replace(/\S+/, iloc[token.id]);
                    } else {
                        string = token.value.replace(/\S+/, id);
                    }
                }
                break;
            case 'WhiteSpace':
            case 'RegularExpression':
            case 'String':
                string = token.value;
                break;
            case 'BlockComment':
                string = '/*' + token.value + '*/';
                break;
            case 'LineComment':
                string = '//' + token.value + '\n';
                break;
            }

            return string;
        };

        return tokens.map(writeOut).join('');
    };

    var injectWhiteSpace = function(src, tokens) {
        var i = 0;
        var tok = tokens[i];
        if (!tok) {
            tokens.push({"type":"WhiteSpace", "value":src, range:[0,src.length-1]});
        } else {
            var start = 0;
            var end = tokens[i].range[0]-1;
            if (end-start >= 0) {
                tokens.splice(i, 0, {type:"WhiteSpace", value:src.substring(start, end+1), range:[start, end]});
                i++;
            }
            i++;
            for (; i < tokens.length; i++) {
                start = tokens[i-1].range[1]+1;
                end = tokens[i].range[0]-1;
                if (end-start >= 0) {
                    tokens.splice(i, 0, {type:"WhiteSpace", value:src.substring(start, end+1), range:[start, end]});
                    i++;
                }
            }
        }
    };


    var delocalise = function(src, locale) {
        LOCALE = locale;
        var ast = esprima.parse(src, {
            comment: true,
            range: true,
            tokens: true
        });
        injectWhiteSpace(src, ast.tokens);
        var tsrc = prettyPrint(ast.tokens);
        return tsrc;
    };

    var localise = function(src, locale) {
        LOCALE = 'en-US';
        var ast = esprima.parse(src, {
            comment: true,
            range: true,
            tokens: true
        });
        injectWhiteSpace(src, ast.tokens);
        var tsrc = prettyPrint(ast.tokens, locale);
        return tsrc;
    };

    var getInnerText = function(elem) {
        var s = "";
        var cn = elem.childNodes;
        for (var i=0; i<cn.length; i++) {
	    var c = cn[i];
            if (c.nodeType != Node.TEXT_NODE) {
                s += getInnerText(c);
            } else {
                s += c.data;
            }
        }
        return s;
    };

    var xhrText = function(src, callback, onerror) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', src);
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    callback(xhr.responseText);
                } else {
                    onerror(xhr);
                }
            }
        };
        xhr.send(null);
    };

    var addI18NScript = function(text, lang, elem) {
        var src = delocalise(text, lang);
        var s = document.createElement('script');
        s.appendChild(document.createTextNode(src));
        if (elem) {
            elem.parentNode.insertBefore(s, elem);
        } else {
            document.body.appendChild(s);
        }
    };

    var run = function() {
        var scriptsNL = document.body.getElementsByTagName('script');
	var scripts = [];
	var i;
        for (i=0; i<scriptsNL.length; i++) {
	    scripts[i] = scriptsNL[i];
	}
        for (i=0; i<scripts.length; i++) {
            var s = scripts[i];
            var stype = s.getAttribute('type');
            if (stype == "text/js-i18n") {
                var lang = s.getAttribute('lang');
                var src = s.getAttribute('src');
                if (src) {
                    xhrText(src, (function(lang, elem) { return function(text) {
                        addI18NScript(text, lang, elem);
                    }; })(lang, s), function(xhr) {console.log('xhrText error', xhr);});
                } else {
                    var text = getInnerText(s);
		    addI18NScript(text, lang, s);
		}
	    }
	}
    };

    window.JSIN = {
	localize: localise,
	localise: localise,
	delocalize: delocalise,
	delocalise: delocalise,
	addI18NScript: addI18NScript,
	run: run,
	autoRun: true
    };
})();

window.addEventListener('load', function() {
    if (JSIN.autoRun) {
	JSIN.run();
    }
}, false);