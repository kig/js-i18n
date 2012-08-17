(function() {
    var invert = function(obj) {
        var o = {};
        for (var i in obj) {
            o[obj[i]] = i;
        }
        return o;
    };
    var localeMappings = {
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

	'zh-CN': invert({
	    "alert": "警告",
	    "show": "显示",
	    "function": "函数",
	    "if": "如果",
	    "else": "否则",
	    "for": "取",
	    "while": "当",
	    "return": "返回",
	    "do": "做",
	    "true": "真",
	    "false": "假",
	    "var": "变量",
	    "in": "在",
	    "let": "使",
	    "new": "新建",
	    "try": "尝试",
	    "case": "条件",
	    "null": "空",
	    "this": "本例",
	    "with": "以",
	    "break": "跳出",
	    "throw": "抛出",
	    "catch": "捕获",
	    "switch": "选择",
	    "continue": "继续",
	    "debugger": "调试",
	    "instanceof": "实例为",
	    "typeof": "类型为",
	    "void": "无返回",
	    "delete": "删除",
	    "default": "默认",
	    "finally": "最后",
	    "int": "整数",
	    "byte": "字节",
	    "char": "字符",
	    "enum": "枚举",
	    "goto": "跳转到",
	    "long": "长整数",
	    "const": "常量",
	    "super": "超",
	    "class": "类",
	    "yield": "协程",
	    "final": "不可变量",
	    "float": "浮点数",
	    "short": "短整数",
	    "native": "本地",
	    "throws": "会抛出",
	    "import": "导入",
	    "double": "双精度数",
	    "static": "静态",
	    "public": "公共",
	    "export": "导出",
	    "package": "包",
	    "boolean": "布尔",
	    "private": "私有",
	    "extends": "扩展",
	    "abstract": "抽象",
	    "volatile": "挥发变量",
	    "interface": "接口",
	    "protected": "受保护",
	    "transient": "瞬时变量",
	    "implements": "实现",
	    "synchronized": "同步",
	    "arguments": "参数",
	    "callee": "被调用者",
	    "length": "长度",
	    "caller": "调用者",
	    "LIBRARY_SCOPE": "库_范围",
	    "Function": "函数对象",
	    "name": "名称",
	    "arity": "参数数",
	    "prototype": "原型",
	    "constructor": "构造器",
	    "toString": "转字符串",
	    "toSource": "转源代码",
	    "apply": "应用",
	    "call": "调用",
	    "Object": "对象",
	    "toLocaleString": "转本地化字符串",
	    "valueOf": "值为",
	    "hasOwnProperty": "是否含属性",
	    "propertyIsEnumerable": "属性可枚举",
	    "isPrototypeOf": "是否为原型",
	    "__defineGetter__": "_定义取操作_",
	    "__defineSetter__": "_定义设操作_",
	    "__lookupGetter__": "_查找取操作_",
	    "__lookupSetter__": "_查找设操作_",
	    "Error": "错误",
	    "message": "消息",
	    "fileName": "文件名",
	    "lineNumber": "行数",
	    "decodeURI": "解码URI",
	    "decodeURIComponent": "解码URI组件",
	    "encodeURI": "编码URI",
	    "encodeURIComponent": "编码URI组件",
	    "escape": "编码",
	    "eval": "评估",
	    "isFinite": "是否无限",
	    "isNaN": "是否非数字",
	    "isXMLName": "是否XML名称",
	    "parseFloat": "解析浮点型",
	    "parseInt": "解析整型",
	    "unescape": "解码",
	    "uneval": "解析代码",
	    "NaN": "非数字",
	    "Infinity": "无限",
	    "undefined": "未定义",
	    "ConversionError": "转换错误",
	    "EvalError": "编码错误",
	    "RangeError": "范围错误",
	    "ReferenceError": "引用错误",
	    "SyntaxError": "语法错误",
	    "TypeError": "类型错误",
	    "URIError": "URI错误",
	    "InternalError": "内部错误",
	    "JavaException": "Java异常",
	    "Array": "数组",
	    "join": "连接",
	    "reverse": "反转",
	    "sort": "排序",
	    "push": "推出",
	    "pop": "弹出",
	    "shift": "换位",
	    "unshift": "复位",
	    "splice": "拼接",
	    "concat": "串连",
	    "slice": "切词",
	    "indexOf": "索引为",
	    "lastIndexOf": "最后索引为",
	    "every": "完整遍历",
	    "filter": "过滤",
	    "forEach": "遍历单个元素",
	    "map": "映射",
	    "some": "部分遍历",
	    "String": "字符串",
	    "fromCharCode": "字符转字符串",
	    "charAt": "字符在",
	    "charCodeAt": "字符编码在",
	    "split": "分割",
	    "substring": "子字符串",
	    "toLowerCase": "转小写",
	    "toUpperCase": "转大写",
	    "substr": "子字符串2",
	    "bold": "粗体",
	    "italics": "斜体",
	    "fixed": "打印机字体",
	    "strike": "删除线",
	    "small": "小",
	    "big": "大",
	    "blink": "闪烁",
	    "sup": "上标",
	    "sub": "下标",
	    "fontsize": "字体大小",
	    "fontcolor": "字体颜色",
	    "link": "链接",
	    "anchor": "锚点",
	    "equals": "相等",
	    "equalsIgnoreCase": "相等忽略大小写",
	    "match": "匹配",
	    "search": "查找",
	    "replace": "替换",
	    "localeCompare": "本地化比较",
	    "toLocaleLowerCase": "转本地化小写",
	    "toLocaleUpperCase": "转本地化大写",
	    "Boolean": "布尔型",
	    "Number": "数字",
	    "POSITIVE_INFINITY": "正无限",
	    "NEGATIVE_INFINITY": "负无限",
	    "MAX_VALUE": "最大值",
	    "MIN_VALUE": "最小值",
	    "toFixed": "转固定",
	    "toExponential": "转指数",
	    "toPrecision": "转精度",
	    "Date": "日期",
	    "now": "现在",
	    "parse": "解析",
	    "UTC": "世界标准时间",
	    "toTimeString": "转时间字符串",
	    "toDateString": "转日期字符串",
	    "toLocaleTimeString": "转本地化时间字符串",
	    "toLocaleDateString": "转本地化日期字符串",
	    "toUTCString": "转标准时间字符串",
	    "getTime": "取时间",
	    "getYear": "取年",
	    "getFullYear": "取完整年",
	    "getUTCFullYear": "取标准时间完整年",
	    "getMonth": "取月",
	    "getUTCMonth": "取标准时间月",
	    "getDate": "取日期",
	    "getUTCDate": "取标准时间日期",
	    "getDay": "取日",
	    "getUTCDay": "取标准时间日",
	    "getHours": "取小时",
	    "getUTCHours": "取标准时间小时",
	    "getMinutes": "取分钟",
	    "getUTCMinutes": "取标准时间分钟",
	    "getSeconds": "取秒",
	    "getUTCSeconds": "取标准时间秒",
	    "getMilliseconds": "取微秒",
	    "getUTCMilliseconds": "取标准时间微秒",
	    "getTimezoneOffset": "取时间差",
	    "setTime": "设时间",
	    "setMilliseconds": "设微秒",
	    "setUTCMilliseconds": "设标准时间微秒",
	    "setSeconds": "设秒",
	    "setUTCSeconds": "设标准时间秒",
	    "setMinutes": "设分钟",
	    "setUTCMinutes": "设标准时间分钟",
	    "setHours": "设小时",
	    "setUTCHours": "设标准时间小时",
	    "setDate": "设日期",
	    "setUTCDate": "设标准时间日期",
	    "setMonth": "设月",
	    "setUTCMonth": "设标准时间月",
	    "setFullYear": "设完整年",
	    "setUTCFullYear": "设标准时间完整年",
	    "setYear": "设年",
	    "Math": "数学",
	    "abs": "绝对值",
	    "acos": "反余弦",
	    "asin": "反正弦",
	    "atan": "反正切",
	    "atan2": "反正切2",
	    "ceil": "向上取整",
	    "cos": "余弦",
	    "exp": "指数",
	    "floor": "向下取整",
	    "log": "对数",
	    "max": "最大值",
	    "min": "最小值",
	    "pow": "次幂",
	    "random": "随机",
	    "round": "就近取整",
	    "sin": "正弦",
	    "sqrt": "平方根",
	    "tan": "正切",
	    "E": "欧拉的数",
	    "PI": "圆周率",
	    "LN10": "十的自然对数",
	    "LN2": "二的自然对数",
	    "LOG2E": "以二为底e的对数",
	    "LOG10E": "以十为底e的对数",
	    "SQRT1_2": "二的平方根倒数",
	    "SQRT2": "二的平方根",
	    "With": "以",
	    "Call": "调用",
	    "Script": "脚本",
	    "exec": "执行",
	    "compile": "编译",
	    "Iterator": "迭代",
	    "next": "下一个",
	    "__iterator__": "_迭代_",
	    "StopIteration": "停止迭代",
	    "RegExp": "正则表达式",
	    "lastIndex": "最后索引为",
	    "source": "源代码",
	    "global": "全局",
	    "ignoreCase": "忽略大小写",
	    "multiline": "多行",
	    "test": "测试",
	    "prefix": "前缀",
	    "RegExpMatches": "",
	    "index": "索引",
	    "input": "输入"
	}),
        
        'fi-FI': {
	    // reserved words

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

            'anna':'yield',
            'on':'let',

            'luokka':'class',
            'enum':'enum',
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

	    // built-ins
	    'Taulukko':'Array',
	    'Olio':'Object',
	    'Funktio':'Function',
	    'Merkkijono':'String',
	    'Numero':'Number',
	    'SääKie':'RegExp',
	    'evaluoi':'eval',
	    'onkoNaN':'isNaN',
	    'Matikka':'Math',

	    'Kok8Taulukko':'Int8Array',
	    'Luon8Taulukko':'Uint8Array',
	    'Kok16Taulukko':'Int16Array',
	    'Luon16Taulukko':'Uint16Array',
	    'Kok32Taulukko':'Int32Array',
	    'Luon32Taulukko':'Uint32Array',
	    'Liuku32Taulukko':'Float32Array',
	    'Liuku64Taulukko':'Float64Array',

	    // Array
	    'pituus':'length',
	    'lisääVika':'push',
	    'otaVika':'pop',
	    'otaEka':'shift',
	    'lisääEka':'unshift',
	    'siivu':'slice',
	    'sijoite':'splice',
	    'jokaiselle':'forEach',
	    'kartta':'map',
	    'kutista':'reduce',
	    'suodata':'filter',
	    'käänteinen':'reverse',

	    // Object
	    'luo':'create',
	    'määritäOminaisuus':'defineProperty',

	    // String
	    'korvaa':'replace',
	    'alijono':'substring',
	    'isoiksi':'toUpperCase',
	    'pieniksi':'toLowerCase',
	    'merkkinä':'charAt',
	    'merkkikoodina':'charCodeAt',
	    'tunnista':'match',
	    'yhdistä':'concat',
	    'merkkikoodista':'fromCharCode',
	    'indeksissä':'indexOf',
	    'vikaIndeksissä':'lastIndexOf',
	    'etsi':'search',
	    'jaa':'split',
	    'ajono':'substr',
	    
	    // RegExp
	    'test':'kokeile',
	    'pakene':'escape',

	    // common properties
	    'alustaja':'constructor',
            'prototyyppi':'prototype',
	    'arvona':'valueOf',
	    'merkkijonona':'toString',
	    'parseFloat':'liukulukuna',
	    'parseInt':'kokonaislukuna',

	    // canvas
	    'haeKonteksti':'getContext',
	    'tallenna':'save',
	    'entisöi':'restore',
	    'siirrä':'translate',
	    'kierrä':'rotate',
	    'skaalaa':'scale',
	    'muunna':'transform',
	    'poistaMuunnos':'resetTransform',
	    'asetaMuunnos':'setTransform',
	    'piirräKuva':'drawImage',
	    'tyhjennäRuutu':'clearRect',
	    'täytäRuutu':'fillRect',
	    'piirräRuutu':'strokeRect',
	    'piirtotyyli':'strokeStyle',
	    'täyttötyyli':'fillStyle',
	    'viivanLeveys':'lineWidth',
	    'viivanPää':'lineCap',
	    'viivanYhdiste':'lineJoin',
	    'miterRaja':'miterLimit',
	    'aloitaPolku':'beginPath',
	    'suljePolku':'closePath',
	    'täytä':'fill',
	    'piirrä':'stroke',
	    'rajaa':'clip',
	    'poistaRajaus':'resetClip',
	    'täytäTeksti':'fillText',
	    'piirräTeksti':'strokeText',
	    'mittaaTeksti':'measureText',
	    'luoSuoraVäriliuku':'createLinearGradient',
	    'luoSädeVäriliuku':'createRadialGradient',
	    'luoKuvio':'createPattern',
	    'varjonX':'shadowOffsetX',
	    'varjonY':'shadowOffsetY',
	    'varjonSumu':'shadowBlur',
	    'varjonVäri':'shadowColor',
	    'luoKuvaData':'createImageData',
	    'laitaKuvaData':'putImageData',
	    'haeKuvaData':'getImageData',
	    'onkoPistePolussa':'isPointInPath',
	    'yleisAlfa':'globalAlpha',
	    'yleisKompositoija':'globalCompositeOperation',
	    'dataURLina':'toDataURL',
	    'blobina':'toBlob',

	    // DOM globals
	    'asiakirja':'document',
	    'ikkuna':'window',
	    'Solmu':'Node',
	    'Solmulista':'NodeList',
	    'HTMLElementti':'HTMLElement',
	    'Tekstisolmu':'TextNode',
	    'Kuva':'Image',
	    'Tapaus':'Event',
	    'Virhe':'Error',
	    'HiiriTapaus':'MouseEvent',
	    'hälytä':'alert',
	    'konsoli':'console',

	    // console
	    'loki':'log',

	    // document
	    'pää':'head',
	    'runko':'body',
	    'kuvat':'images',
	    'lomakkeet':'forms',

	    // events
	    'kunladattu':'onload',
	    'kunhiiripäällä':'onmouseover',
	    'kunhiiripois':'onmouseout',
	    'kunhiirialas':'onmousedown',
	    'kunhiiriylös':'onmouseup',
	    'kunhiiriliikkuu':'onmousemove',
	    'kunnapsaus':'onclick',
	    'kuntuplanapsaus':'ondblclick',
	    'kunnäppäinalas':'onkeydown',
	    'kunnäppäinylös':'onkeydown',
	    'kunnäppäinpainettu':'onkeypress',
	    'kunvaihdettu':'onchange',
	    'kunkohdistettu':'onfocus',
	    'kunsumennettu':'onblur',
	    'kunlähetetty':'onsubmit',
	    'kohde':'target',
	    'asiakasX':'clientX',
	    'asiakasY':'clientY',
	    'tasoX':'layerX',
	    'tasoY':'layerY',
	    'nappi':'button',
	    'mikä':'which',
	    'merkkikoodi':'charCode',
	    'näppäinkoodi':'keyCode',
	    'estäOletus':'preventDefault',
	    'pysäytäLähetys':'stopPropagation',
	    'altnäppäin':'altKey',
	    'ctrlnäppäin':'ctrlKey',
	    'vaihtonäppäin':'shiftKey',

	    // Element
	    'haeElementtiIdllä':'getElementById',
	    'haeElementitTaginNimellä':'getElementsByTagName',
	    'haeElementitLuokanNimellä':'getElementsByClassName',
	    'valitseKyselyllä':'querySelector',
	    'valitseKaikkiKyselyllä':'querySelectorAll',
	    'sisäHTML':'innerHTML',
	    'luoElementti':'createElement',
	    'lisääLapsi':'appendChild',
	    'luoTekstisolmu':'createTextNode',
	    'lapsisolmut':'childNodes',
	    'seuraavaSisarus':'nextSibling',
	    'ekaLapsi':'firstChild',
	    'vikaLapsi':'lastChild',
	    'emoSolmu':'parentNode',
	    'poistaLapsi':'removeChild',
	    'sijoitaEteen':'insertBefore',
	    'lisääTapauskuuntelija':'addEventListener',
	    'poistaTapauskuuntelija':'removeEventListener',
	    'haeMäärite':'getAttribute',
	    'asetaMäärite':'setAttribute',

	    // Style
	    'tyyli':'style',
	    'ylä':'top',
	    'ala':'bottom',
	    'vasen':'left',
	    'oikea':'right',
	    'leveys':'width',
	    'korkeus':'height',
	    'liuku':'float',
	    'tyhjennä':'clear',
	    'näyttö':'display',
	    'näkyvyys':'visibility',
	    'välilyönnit':'white-space',
	    'väri':'color',
	    'tausta':'background',
	    'taustanVäri':'backgroundColor',
	    'taustanKuva':'backgroundImage',
	    'taustanToisto':'backgroundRepeat',
	    'taustanKiinnike':'backgroundAttachment',
	    'taustanSijainti':'backgroundPosition',
	    'kirjasin':'font',
	    'kirjasinperhe':'fontFamily',
	    'kirjasinkoko':'fontSize',
	    'kirjasintyyli':'fontStyle',
	    'kirjasinpaino':'fontWeight',
	    'kirjasinvariantti':'fontVariant',
	    'sanaväli':'wordSpacing',
	    'kirjasinväli':'letterSpacing',
	    'pystytasaus':'verticalAlign',
	    'tekstinKoristelu':'textDecoration',
	    'tekstinMuunnos':'textTransform',
	    'tekstinTasaus':'textAlign',
	    'tekstinSisennys':'textIndent',
	    'rivinKorkeus':'lineHeight',
	    'marginaali':'margin',
	    'marginaaliVasen':'marginLeft',
	    'marginaaliOikea':'marginRight',
	    'marginaaliYlä':'marginTop',
	    'marginaaliAla':'marginBottom',
	    'täyte':'padding',
	    'täyteVasen':'paddingLeft',
	    'täyteOikea':'paddingRight',
	    'täyteYlä':'paddingTop',
	    'täyteAla':'paddingBottom',
	    'raja':'border',
	    'rajaAla':'borderBottom',
	    'rajaYlä':'borderTop',
	    'rajaVasen':'borderLeft',
	    'rajaOikea':'borderRight',
	    'rajanVäri':'borderColor',
	    'rajanLeveys':'borderWidth',
	    'rajanTyyli':'borderStyle',
	    'rajanSäde':'borderRadius',
	    'rajaAlaVäri':'borderBottomColor',
	    'rajaAlaVasenSäde':'borderBottomLeftRadius',
	    'rajaAlaOikeaSäde':'borderBottomRightRadius',
	    'rajaAlaLeveys':'borderBottomWidth',
	    'rajaAlaTyyli':'borderBottomStyle',
	    'rajaYläVäri':'borderTopColor',
	    'rajaYläVasenSäde':'borderTopLeftRadius',
	    'rajaYläOikeaSäde':'borderTopRightRadius',
	    'rajaYläLeveys':'borderTopWidth',
	    'rajaYläTyyli':'borderTopStyle',
	    'rajaVasenVäri':'borderLeftColor',
	    'rajaVasenLeveys':'borderLeftWidth',
	    'rajaVasenTyyli':'borderLeftStyle',
	    'rajaOikeaVäri':'borderRightColor',
	    'rajaOikeaLeveys':'borderRightWidth',
	    'rajaOikeaTyyli':'borderRightStyle'

        }
    };

    var prettyPrint = function(tokens, locale) {
        var strings = [];
        var indent = "";
        var loc, iloc;
        if (locale) {
            loc = JSI18N.localeMappings[locale];
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
                var id = JSI18N.localeMappings['en-US'][token.id];
                if (id !== undefined) {
                    if (locale) {
			if (iloc[token.id]) {
                            string = token.value.replace(/\S+/, iloc[token.id]);
			}
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
	esprima.localeMapping = JSI18N.localeMappings[locale];
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
        esprima.localeMapping = JSI18N.localeMappings['en-US'];
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
	var re = /^\s*"lang ([^"]+)"(;|\n)/m;
	var langString = text.match(re);
	if (langString != null && langString[1]) {
	    lang = langString[1];
	}
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

    window.JSI18N = {
	localeMappings: localeMappings,
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
    if (JSI18N.autoRun) {
	JSI18N.run();
    }
}, false);