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

	'ja': invert({
	    "alert": "アラート",
	    "show": "表示",
	    "function": "関数",
	    "if": "もし",
	    "else": "それ以外",
	    "for": "なら",
	    "while": "ながら",
	    "return": "戻す",
	    "do": "する",
	    "true": "真",
	    "false": "偽",
	    "var": "変数",
	    "in": "が",
	    "let": "させ",
	    "new": "新",
	    "try": "試",
	    "case": "ケース",
	    "null": "ヌル",
	    "this": "これ",
	    "with": "と",
	    "break": "中断",
	    "throw": "投げ",
	    "catch": "受け",
	    "switch": "スイッチ",
	    "continue": "続け",
	    "debugger": "デバッガ",
	    "instanceof": "実例",
	    "typeof": "属性",
	    "void": "無効",
	    "delete": "削除",
	    "default": "デフォルト",
	    "finally": "やっと",
	    "int": "整数",
	    "byte": "バイト",
	    "char": "文字",
	    "enum": "列数",
	    "goto": "行け",
	    "long": "長数",
	    "const": "定数",
	    "super": "超",
	    "class": "属",
	    "yield": "出せ",
	    "final": "ずっと",
	    "float": "浮数",
	    "short": "短数",
	    "native": "地元",
	    "throws": "投げられる",
	    "import": "輸入",
	    "double": "倍浮数",
	    "static": "静的",
	    "public": "公共",
	    "export": "輸出",
	    "package": "パッケージ",
	    "boolean": "ブール",
	    "private": "非公開",
	    "extends": "拡張",
	    "abstract": "抽象",
	    "volatile": "揮発性",
	    "interface": "インターフェイス",
	    "protected": "保護され",
	    "transient": "一時的な",
	    "implements": "実装",
	    "synchronized": "同期",
	    "arguments": "引数",
	    "callee": "返す値",
	    "length": "長さ",
	    "caller": "渡す値",
	    "LIBRARY_SCOPE": "図書館_範囲",
	    "Function": "関数属",
	    "name": "名称",
	    "arity": "項数",
	    "prototype": "原型",
	    "constructor": "コンストラクター",
	    "toString": "文字例化",
	    "toSource": "ソース化",
	    "apply": "応用",
	    "call": "コール",
	    "Object": "オブジェクト",
	    "toLocaleString": "地域文字列化",
	    "valueOf": "の価値",
	    "hasOwnProperty": "有性質",
	    "propertyIsEnumerable": "性質列挙",
	    "isPrototypeOf": "原型由来",
	    "__defineGetter__": "__取得定義__",
	    "__defineSetter__": "__設定定義__",
	    "__lookupGetter__": "__取得検索__",
	    "__lookupSetter__": "__設定検索__",
	    "Error": "エラー",
	    "message": "伝言",
	    "fileName": "ファイル名",
	    "lineNumber": "行番号",
	    "decodeURI": "URI復号",
	    "decodeURIComponent": "URI部復号",
	    "encodeURI": "URI符号化",
	    "encodeURIComponent": "URI部符号化",
	    "escape": "脱出",
	    "eval": "評価",
	    "isFinite": "有限",
	    "isNaN": "非数",
	    "isXMLName": "XML名",
	    "parseFloat": "浮数解析",
	    "parseInt": "整数解析",
	    "unescape": "非脱出",
	    "uneval": "非評価",
	    "NaN": "非数",
	    "Infinity": "無限",
	    "undefined": "未定義",
	    "ConversionError": "変換エラー",
	    "EvalError": "評価エラー",
	    "RangeError": "範囲エラー",
	    "ReferenceError": "指示エラー",
	    "SyntaxError": "構文エラー",
	    "TypeError": "属性エラー",
	    "URIError": "URIエラー",
	    "InternalError": "内部エラー",
	    "JavaException": "Java例外",
	    "Array": "配列",
	    "join": "部分連結",
	    "reverse": "逆",
	    "sort": "ソート",
	    "push": "尾に加",
	    "pop": "尾に消",
	    "shift": "頭に消",
	    "unshift": "頭に加",
	    "splice": "横断面消",
	    "concat": "連結",
	    "slice": "スライス",
	    "indexOf": "索引",
	    "lastIndexOf": "最後索引",
	    "every": "毎",
	    "filter": "篩う",
	    "forEach": "各のため",
	    "map": "写像",
	    "some": "いくつか",
	    "String": "文字列",
	    "fromCharCode": "文字コードから",
	    "charAt": "文字に",
	    "charCodeAt": "文字コードに",
	    "split": "分割",
	    "substring": "亜文字例",
	    "toLowerCase": "小文字化",
	    "toUpperCase": "大文字化",
	    "substr": "亜文字",
	    "bold": "太字",
	    "italics": "斜体",
	    "fixed": "等幅",
	    "strike": "打消し線",
	    "small": "小体",
	    "big": "大体",
	    "blink": "点滅",
	    "sup": "上付き",
	    "sub": "下付き",
	    "fontsize": "書体規模",
	    "fontcolor": "書体色",
	    "link": "リンク",
	    "anchor": "碇",
	    "equals": "イコール",
	    "equalsIgnoreCase": "無規模イコール",
	    "match": "一致",
	    "search": "検索",
	    "replace": "交換",
	    "localeCompare": "地域比較",
	    "toLocaleLowerCase": "地域小文字化",
	    "toLocaleUpperCase": "地域大文字化",
	    "Boolean": "ブール",
	    "Number": "数",
	    "POSITIVE_INFINITY": "正の無限",
	    "NEGATIVE_INFINITY": "負の無限",
	    "MAX_VALUE": "最大値",
	    "MIN_VALUE": "最小値",
	    "toFixed": "点桁数文字化",
	    "toExponential": "乗数文字化",
	    "toPrecision": "全桁数文字化",
	    "Date": "日付",
	    "now": "今",
	    "parse": "解析",
	    "UTC": "UTC",
	    "toTimeString": "時間文字列化",
	    "toDateString": "日付文字列化",
	    "toLocaleTimeString": "地域時間文字列化",
	    "toLocaleDateString": "地域日付文字列化",
	    "toUTCString": "UTC文字列化",
	    "getTime": "時間取得",
	    "getYear": "年取得",
	    "getFullYear": "四桁年号取得",
	    "getUTCFullYear": "UTC年号取得",
	    "getMonth": "月取得",
	    "getUTCMonth": "UTC月取得",
	    "getDate": "日付取得",
	    "getUTCDate": "UTC日付取得",
	    "getDay": "曜日取得",
	    "getUTCDay": "UTC曜日取得",
	    "getHours": "時取得",
	    "getUTCHours": "UTC時取得",
	    "getMinutes": "分取得",
	    "getUTCMinutes": "UTC分取得",
	    "getSeconds": "秒取得",
	    "getUTCSeconds": "UTC秒取得",
	    "getMilliseconds": "ミリ秒取得",
	    "getUTCMilliseconds": "UTCミリ秒取得",
	    "getTimezoneOffset": "標準時差取得",
	    "setTime": "時間設定",
	    "setMilliseconds": "ミリ秒設定",
	    "setUTCMilliseconds": "UTCミリ秒設定",
	    "setSeconds": "秒設定",
	    "setUTCSeconds": "UTC秒設定",
	    "setMinutes": "分設定",
	    "setUTCMinutes": "UTC分設定",
	    "setHours": "時設定",
	    "setUTCHours": "UTC時設定",
	    "setDate": "日付設定",
	    "setUTCDate": "UTC日付設定",
	    "setMonth": "月設定",
	    "setUTCMonth": "UTC月設定",
	    "setFullYear": "四桁年号設定",
	    "setUTCFullYear": "UTC年号設定",
	    "setYear": "年設定",
	    "Math": "数学",
	    "abs": "絶対値",
	    "acos": "acos",
	    "asin": "asin",
	    "atan": "atan",
	    "atan2": "atan2",
	    "ceil": "天井",
	    "cos": "cos",
	    "exp": "ℯ乗",
	    "floor": "床",
	    "log": "㏒",
	    "max": "最大",
	    "min": "最小",
	    "pow": "冪乗",
	    "random": "乱数",
	    "round": "丸め",
	    "sin": "sin",
	    "sqrt": "√",
	    "tan": "tan",
	    "E": "ℯ",
	    "PI": "π",
	    "LN10": "LN10",
	    "LN2": "LN2",
	    "LOG2E": "㏒2E",
	    "LOG10E": "㏒10E",
	    "SQRT1_2": "√1_2",
	    "SQRT2": "√2",
	    "With": "と",
	    "Call": "コール",
	    "Script": "スクリプト",
	    "exec": "実行",
	    "compile": "コンパイル",
	    "Iterator": "反復子",
	    "next": "次",
	    "__iterator__": "__反復子__",
	    "StopIteration": "反復子停止",
	    "RegExp": "正規表現",
	    "lastIndex": "最後索引",
	    "source": "ソース化",
	    "global": "グローバル",
	    "ignoreCase": "無規模",
	    "multiline": "複数行",
	    "test": "試",
	    "prefix": "接頭",
	    "index": "索引",
	    "input": "入力"
	}),

	'fr': invert({
	    "function": "fonction",
	    "if": "si",
	    "else": "sinon",
	    "for": "pour",
	    "while": "tantque",
	    "return": "retourner",
	    "do": "faire",
	    "true": "vrai",
	    "false": "faux",
	    "var": "var",
	    "in": "dans",
	    "let": "soit",
	    "new": "nouveau",
	    "try": "essayer",
	    "case": "cas",
	    "null": "nul",
	    "this": "ceci",
	    "with": "avec",
	    "break": "casser",
	    "throw": "lancer",
	    "catch": "capturer",
	    "switch": "selon",
	    "continue": "continuer",
	    "debugger": "débogueur",
	    "instanceof": "instancede",
	    "typeof": "typede",
	    "void": "vide",
	    "delete": "effacer",
	    "default": "défaut",
	    "finally": "finalement",
	    "int": "entier",
	    "byte": "octet",
	    "char": "car",
	    "enum": "énum",
	    "goto": "allerà",
	    "long": "long",
	    "const": "const",
	    "super": "super",
	    "class": "classe",
	    "yield": "fournir",
	    "final": "final",
	    "float": "flottant",
	    "short": "court",
	    "native": "natif",
	    "throws": "lance",
	    "import": "importer",
	    "double": "double",
	    "static": "statique",
	    "public": "public",
	    "export": "exporter",
	    "package": "paquetage",
	    "boolean": "booléen",
	    "private": "privé",
	    "extends": "étend",
	    "abstract": "abstrait",
	    "volatile": "volatile",
	    "interface": "interface",
	    "protected": "protégé",
	    "transient": "transient",
	    "implements": "implémente",
	    "synchronized": "synchronisé",
	    "arguments": "arguments",
	    "callee": "appelé",
	    "length": "longueur",
	    "caller": "appelant",
	    "LIBRARY_SCOPE": "ÉTENDUE_BIBLIOTHÈQUE",
	    "Function": "Fonction",
	    "name": "nom",
	    "arity": "arité",
	    "prototype": "prototype",
	    "constructor": "constructeur",
	    "toString": "enChaîne",
	    "toSource": "enSource",
	    "apply": "appliquer",
	    "call": "appeler",
	    "Object": "Objet",
	    "toLocaleString": "",
	    "valueOf": "valeurDe",
	    "hasOwnProperty": "aSaProprePropriété",
	    "propertyIsEnumerable": "propriétéEstÉnumérable",
	    "isPrototypeOf": "estPrototypeDe",
	    "__defineGetter__": "__définirLecteur__",
	    "__defineSetter__": "__définirÉcrivain__",
	    "__lookupGetter__": "__rechercherLecteur__",
	    "__lookupSetter__": "__rechercherÉcrivain__",
	    "Error": "Erreur",
	    "message": "message",
	    "fileName": "nomFichier",
	    "lineNumber": "numéroLigne",
	    "decodeURI": "décoderURI",
	    "decodeURIComponent": "",
	    "encodeURI": "encoderURI",
	    "encodeURIComponent": "",
	    "escape": "échapper",
	    "eval": "éval",
	    "isFinite": "estFini",
	    "isNaN": "",
	    "isXMLName": "",
	    "parseFloat": "parserFlottant",
	    "parseInt": "parserEnt",
	    "unescape": "déséchapper",
	    "uneval": "déséval",
	    "NaN": "",
	    "Infinity": "Infini",
	    "undefined": "indéfini",
	    "ConversionError": "ErreurConversion",
	    "EvalError": "ErreurÉval",
	    "RangeError": "ErreurPlage",
	    "ReferenceError": "ErreurRéférence",
	    "SyntaxError": "ErreurSyntaxe",
	    "TypeError": "ErreurType",
	    "URIError": "ErreurURI",
	    "InternalError": "ErreurInterne",
	    "JavaException": "ExceptionJava",
	    "Array": "Tableau",
	    "join": "joindre",
	    "reverse": "renverser",
	    "sort": "trier",
	    "push": "empiler",
	    "pop": "dépiler",
	    "shift": "décaler",
	    "unshift": "dédécaler",
	    "splice": "",
	    "concat": "concat",
	    "slice": "couper",
	    "indexOf": "indiceDe",
	    "lastIndexOf": "dernierIndiceDe",
	    "every": "tout",
	    "filter": "filtrer",
	    "forEach": "pourChaque",
	    "map": "",
	    "some": "",
	    "String": "Chaîne",
	    "fromCharCode": "deCodeCar",
	    "charAt": "carÀ",
	    "charCodeAt": "codeCarÀ",
	    "split": "fendre",
	    "substring": "souschaîne",
	    "toLowerCase": "enMinuscule",
	    "toUpperCase": "enMajuscule",
	    "substr": "sousch",
	    "bold": "",
	    "italics": "",
	    "fixed": "",
	    "strike": "",
	    "small": "",
	    "big": "",
	    "blink": "",
	    "sup": "",
	    "sub": "",
	    "fontsize": "",
	    "fontcolor": "",
	    "link": "",
	    "anchor": "",
	    "equals": "égal",
	    "equalsIgnoreCase": "",
	    "match": "",
	    "search": "chercher",
	    "replace": "remplacer",
	    "localeCompare": "",
	    "toLocaleLowerCase": "",
	    "toLocaleUpperCase": "",
	    "Boolean": "Booléen",
	    "Number": "Nombre",
	    "POSITIVE_INFINITY": "INFINI_POSITIF",
	    "NEGATIVE_INFINITY": "INFINI_NÉGATIF",
	    "MAX_VALUE": "VALEUR_MAX",
	    "MIN_VALUE": "VALEUR_MIN",
	    "toFixed": "enFixe",
	    "toExponential": "enExponentiel",
	    "toPrecision": "enPrécision",
	    "Date": "Date",
	    "now": "maintenant",
	    "parse": "parser",
	    "UTC": "UTC",
	    "toTimeString": "enChaîneHeure",
	    "toDateString": "enChaîneDate",
	    "toLocaleTimeString": "",
	    "toLocaleDateString": "",
	    "toUTCString": "enChaîneUTC",
	    "getTime": "lireHeure",
	    "getYear": "lireAnnée",
	    "getFullYear": "lireAnnéeEntière",
	    "getUTCFullYear": "lireAnnéeEntièreUTC",
	    "getMonth": "lireMois",
	    "getUTCMonth": "lireMoisUTC",
	    "getDate": "lireDate",
	    "getUTCDate": "lireDateUTC",
	    "getDay": "lireJour",
	    "getUTCDay": "lireJourUTC",
	    "getHours": "lireHeures",
	    "getUTCHours": "lireHeuresUTC",
	    "getMinutes": "lireMinutes",
	    "getUTCMinutes": "lireMinutesUTC",
	    "getSeconds": "lireSecondes",
	    "getUTCSeconds": "lireSecondesUTC",
	    "getMilliseconds": "lireMillisecondes",
	    "getUTCMilliseconds": "lireMillisecondesUTC",
	    "getTimezoneOffset": "lireDécalageFuseauHoraire",
	    "setTime": "écrireHeure",
	    "setMilliseconds": "écrireMillisecondes",
	    "setUTCMilliseconds": "écrireMillisecondesUTC",
	    "setSeconds": "écrireSecondes",
	    "setUTCSeconds": "écrireSecondesUTC",
	    "setMinutes": "écrireMinutes",
	    "setUTCMinutes": "écrireMinutesUTC",
	    "setHours": "écrireHeures",
	    "setUTCHours": "écrireHeuresUTC",
	    "setDate": "écrireDate",
	    "setUTCDate": "écrireDateUTC",
	    "setMonth": "écrireMois",
	    "setUTCMonth": "écrireUTC",
	    "setFullYear": "écrireAnnéeEntière",
	    "setUTCFullYear": "écrireAnnéeEntièreUTC",
	    "setYear": "écrireAnnée",
	    "Math": "Math",
	    "abs": "abs",
	    "acos": "acos",
	    "asin": "asin",
	    "atan": "atan",
	    "atan2": "atan2",
	    "ceil": "plafond",
	    "cos": "cos",
	    "exp": "exp",
	    "floor": "plancher",
	    "log": "log",
	    "max": "max",
	    "min": "min",
	    "pow": "puissance",
	    "random": "aléatoire",
	    "round": "arrondi",
	    "sin": "sin",
	    "sqrt": "racine",
	    "tan": "tan",
	    "E": "E",
	    "PI": "PI",
	    "LN10": "LN10",
	    "LN2": "LN2",
	    "LOG2E": "LOG2E",
	    "LOG10E": "LOG10E",
	    "SQRT1_2": "RACINE1_2",
	    "SQRT2": "RACINE2",
	    "With": "",
	    "Call": "",
	    "Script": "Script",
	    "exec": "exéc",
	    "compile": "compiler",
	    "Iterator": "Itérateur",
	    "next": "prochain",
	    "__iterator__": "__itérateur__",
	    "StopIteration": "",
	    "RegExp": "ExpRég",
	    "lastIndex": "dernierIndice",
	    "source": "source",
	    "global": "",
	    "ignoreCase": "",
	    "multiline": "multiligne",
	    "test": "tester",
	    "prefix": "préfixe",
	    "index": "indice",
	    "input": ""
	}),

	'es': invert({
	    "alert": "alertar",
	    "show": "mostrar",
	    "function": "función",
	    "if": "si",
	    "else": "sino",
	    "for": "para",
	    "while": "mientras",
	    "return": "retornar",
	    "do": "hacer",
	    "true": "verdadero",
	    "false": "falso",
	    "var": "var",
	    "in": "en",
	    "let": "dado",
	    "new": "nuevo",
	    "try": "tratar",
	    "case": "caso",
	    "null": "nulo",
	    "this": "este",
	    "with": "con",
	    "break": "salir",
	    "throw": "lanzar",
	    "catch": "capturar",
	    "switch": "según",
	    "continue": "continuar",
	    "debugger": "depurador",
	    "instanceof": "instanciade",
	    "typeof": "tipode",
	    "void": "vacío",
	    "delete": "eliminar",
	    "default": "defecto",
	    "finally": "finalmente",
	    "int": "ent",
	    "byte": "byte",
	    "char": "car",
	    "enum": "enum",
	    "goto": "ira",
	    "long": "largo",
	    "const": "const",
	    "super": "super",
	    "class": "clase",
	    "yield": "ceder",
	    "final": "final",
	    "float": "flotante",
	    "short": "corto",
	    "native": "nativo",
	    "throws": "lanza",
	    "import": "importar",
	    "double": "doble",
	    "static": "estático",
	    "public": "público",
	    "export": "exportar",
	    "package": "paquete",
	    "boolean": "buliano",
	    "private": "privado",
	    "extends": "extiende",
	    "abstract": "abstracto",
	    "volatile": "volatil",
	    "interface": "interfaz",
	    "protected": "protegido",
	    "transient": "transitorio",
	    "implements": "implementa",
	    "synchronized": "sincronizado",
	    "arguments": "argumentos",
	    "callee": "llamado",
	    "length": "longitud",
	    "caller": "llamador",
	    "LIBRARY_SCOPE": "AMBITO_BIBLIOTECA",
	    "Function": "Función",
	    "name": "nombre",
	    "arity": "aridad",
	    "prototype": "prototipo",
	    "constructor": "constructor",
	    "toString": "aCadena",
	    "toSource": "aFuente",
	    "apply": "aplicar",
	    "call": "llamar",
	    "Object": "Objeto",
	    "toLocaleString": "aCadenaLocal",
	    "valueOf": "valorDe",
	    "hasOwnProperty": "tienePropiaPropiedad",
	    "propertyIsEnumerable": "propiedadEsEnumerable",
	    "isPrototypeOf": "esPrototipoDe",
	    "__defineGetter__": "__definirLector__",
	    "__defineSetter__": "__definirEscritor__",
	    "__lookupGetter__": "__buscarLector__",
	    "__lookupSetter__": "__buscarEscritor__",
	    "Error": "Error",
	    "message": "mensage",
	    "fileName": "nombreFichero",
	    "lineNumber": "númeroLinea",
	    "decodeURI": "decodificarURI",
	    "decodeURIComponent": "decodificarComponenteURI",
	    "encodeURI": "codificarUri",
	    "encodeURIComponent": "codificarComponenteUri",
	    "escape": "escapar",
	    "eval": "eval",
	    "isFinite": "esFinito",
	    "isNaN": "esNuN",
	    "isXMLName": "esNombreXML",
	    "parseFloat": "analizarFlotante",
	    "parseInt": "analizarEnt",
	    "unescape": "desescapar",
	    "uneval": "desevaluar",
	    "NaN": "NuN",
	    "Infinity": "Infinito",
	    "undefined": "indefinido",
	    "ConversionError": "ErrorConversión",
	    "EvalError": "ErrorEval",
	    "RangeError": "ErrorRango",
	    "ReferenceError": "ErrorReferencia",
	    "SyntaxError": "ErrorSintaxis",
	    "TypeError": "ErrorTipo",
	    "URIError": "ErrorURI",
	    "InternalError": "ErrorInterno",
	    "JavaException": "ExcepciónJava",
	    "Array": "Arreglo",
	    "join": "unir",
	    "reverse": "revertir",
	    "sort": "ordernar",
	    "push": "empujar",
	    "pop": "saltar",
	    "shift": "desplazar",
	    "unshift": "introducir",
	    "splice": "recortar",
	    "concat": "concatenar",
	    "slice": "cortar",
	    "indexOf": "índiceDe",
	    "lastIndexOf": "últimoIndiceDe",
	    "every": "cada",
	    "filter": "filtrar",
	    "forEach": "paraCada",
	    "map": "mapear",
	    "some": "alguno",
	    "String": "Cadena",
	    "fromCharCode": "deCódigoCar",
	    "charAt": "carEn",
	    "charCodeAt": "códigoCarEn",
	    "split": "separar",
	    "substring": "subcadena",
	    "toLowerCase": "aMinúscula",
	    "toUpperCase": "aMayúscula",
	    "substr": "subcad",
	    "bold": "negrita",
	    "italics": "itálica",
	    "fixed": "fijo",
	    "strike": "tachar",
	    "small": "pequeño",
	    "big": "grande",
	    "blink": "parpadear",
	    "sup": "sup",
	    "sub": "sub",
	    "fontsize": "tamañoletra",
	    "fontcolor": "colorletra",
	    "link": "enlace",
	    "anchor": "anclar",
	    "equals": "igual",
	    "equalsIgnoreCase": "igualIgnorarMayúsMinús",
	    "match": "corresponder",
	    "search": "buscar",
	    "replace": "remplazar",
	    "localeCompare": "compararLocal",
	    "toLocaleLowerCase": "aMinúsculaLocal",
	    "toLocaleUpperCase": "aMayúsculaLocal",
	    "Boolean": "Buliano",
	    "Number": "Número",
	    "POSITIVE_INFINITY": "INFINITO_POSITIVO",
	    "NEGATIVE_INFINITY": "INFINITO_NEGATIVO",
	    "MAX_VALUE": "VALOR_MÁXIMO",
	    "MIN_VALUE": "VALOR_MÍNIMO",
	    "toFixed": "aFijo",
	    "toExponential": "aExponencial",
	    "toPrecision": "aPrecisión",
	    "Date": "Fecha",
	    "now": "ahora",
	    "parse": "analizar",
	    "UTC": "UTC",
	    "toTimeString": "aCadenaTiempo",
	    "toDateString": "aCadenaFecha",
	    "toLocaleTimeString": "aCadenaTiempoLocal",
	    "toLocaleDateString": "aCadenaFechaLocal",
	    "toUTCString": "aCadenaUTC",
	    "getTime": "leerHora",
	    "getYear": "leerAño",
	    "getFullYear": "leerAñoCompleto",
	    "getUTCFullYear": "leerAñoCompletoUTC",
	    "getMonth": "leerMes",
	    "getUTCMonth": "leerMesUTC",
	    "getDate": "leerFecha",
	    "getUTCDate": "leerFechaUTC",
	    "getDay": "leerDía",
	    "getUTCDay": "leerDíaUTC",
	    "getHours": "leerHoras",
	    "getUTCHours": "leerHorasUTC",
	    "getMinutes": "leerMinutos",
	    "getUTCMinutes": "leerMinutosUTC",
	    "getSeconds": "leerSegundos",
	    "getUTCSeconds": "leerSegundosUTC",
	    "getMilliseconds": "leerMilisegundos",
	    "getUTCMilliseconds": "leerMilisegundosUTC",
	    "getTimezoneOffset": "leerHusoHorario",
	    "setTime": "escribirHora",
	    "setMilliseconds": "escribirMilisegundos",
	    "setUTCMilliseconds": "escribirMilisegundosUTC",
	    "setSeconds": "escribirSegundos",
	    "setUTCSeconds": "escribirSegundosUTC",
	    "setMinutes": "escribirMinutos",
	    "setUTCMinutes": "escribirMinutosUTC",
	    "setHours": "escribirHoras",
	    "setUTCHours": "escribirHorasUTC",
	    "setDate": "escribirFecha",
	    "setUTCDate": "escribirFechaUTC",
	    "setMonth": "escribirMes",
	    "setUTCMonth": "escribirMesUTC",
	    "setFullYear": "escribirAñoCompleto",
	    "setUTCFullYear": "escribirAñoCompletoUTC",
	    "setYear": "escribirAño",
	    "Math": "Matemática",
	    "abs": "abs",
	    "acos": "acos",
	    "asin": "asen",
	    "atan": "atan",
	    "atan2": "atan2",
	    "ceil": "techo",
	    "cos": "cos",
	    "exp": "exp",
	    "floor": "suelo",
	    "log": "log",
	    "max": "max",
	    "min": "min",
	    "pow": "pot",
	    "random": "aleatorio",
	    "round": "redondear",
	    "sin": "sen",
	    "sqrt": "raíz",
	    "tan": "tan",
	    "E": "E",
	    "PI": "PI",
	    "LN10": "LN10",
	    "LN2": "LN2",
	    "LOG2E": "LOG2E",
	    "LOG10E": "LOG10E",
	    "SQRT1_2": "RAIZ1_2",
	    "SQRT2": "RAIZ2",
	    "With": "Ancho",
	    "Call": "Ancho",
	    "Script": "Script",
	    "exec": "ejec",
	    "compile": "compilar",
	    "Iterator": "Iterador",
	    "next": "siguiente",
	    "__iterator__": "__iterador__",
	    "StopIteration": "PararIteración",
	    "RegExp": "ExpReg",
	    "lastIndex": "últimoIndice",
	    "source": "fuente",
	    "global": "global",
	    "ignoreCase": "ignorarMayúsMinús",
	    "multiline": "multilineas",
	    "test": "probar",
	    "prefix": "prefijo",
	    "index": "indice",
	    "input": "entrada"
	}),

	'pt': invert({
	    "alert": "alertar",
	    "show": "mostrar",
	    "function": "função",
	    "if": "se",
	    "else": "senão",
	    "for": "por",
	    "while": "enquanto",
	    "return": "retorno",
	    "do": "fazer",
	    "true": "verdadeiro",
	    "false": "falso",
	    "var": "var",
	    "in": "em",
	    "let": "dado",
	    "new": "novo",
	    "try": "tentativa",
	    "case": "caso",
	    "null": "nulo",
	    "this": "este",
	    "with": "com",
	    "break": "quebra",
	    "throw": "atirar",
	    "catch": "apanhar",
	    "switch": "switch",
	    "continue": "continuar",
	    "debugger": "debugger",
	    "instanceof": "instânciade",
	    "typeof": "tipode",
	    "void": "vazio",
	    "delete": "eliminar",
	    "default": "poromissão",
	    "finally": "finalmente",
	    "int": "int",
	    "byte": "byte",
	    "char": "caract",
	    "enum": "enumeração",
	    "goto": "irpara",
	    "long": "longo",
	    "const": "constante",
	    "super": "super",
	    "class": "classe",
	    "yield": "ceder",
	    "final": "final",
	    "float": "flut",
	    "short": "curto",
	    "native": "nativo",
	    "throws": "atira",
	    "import": "importar",
	    "double": "duplo",
	    "static": "estático",
	    "public": "público",
	    "export": "exportar",
	    "package": "pacote",
	    "boolean": "booleano",
	    "private": "privado",
	    "extends": "ampliar",
	    "abstract": "abstrato",
	    "volatile": "volátil",
	    "interface": "interface",
	    "protected": "protegido",
	    "transient": "transitório",
	    "implements": "implementa",
	    "synchronized": "sincronizado",
	    "arguments": "argumentos",
	    "callee": "chamado",
	    "length": "comprimento",
	    "caller": "chamador",
	    "LIBRARY_SCOPE": "ÂMBITO_BIBLIOTECA",
	    "Function": "Função",
	    "name": "nome",
	    "arity": "aridade",
	    "prototype": "protótipo",
	    "constructor": "construtor",
	    "toString": "paraCadeia",
	    "toSource": "paraFonte",
	    "apply": "aplicar",
	    "call": "chamar",
	    "Object": "Objeto",
	    "toLocaleString": "paraCadeiaLocale",
	    "valueOf": "valorDe",
	    "hasOwnProperty": "temSuaPropriedade",
	    "propertyIsEnumerable": "propriedadeÉEnumerável",
	    "isPrototypeOf": "éProtótipoDe",
	    "__defineGetter__": "__definirLeitor__",
	    "__defineSetter__": "__definirAtualizador__",
	    "__lookupGetter__": "__consultarLeitor__",
	    "__lookupSetter__": "__consultarAtualizador__",
	    "Error": "Erro",
	    "message": "mensagem",
	    "fileName": "nomeDoFicheiro",
	    "lineNumber": "númeroDaLinha",
	    "decodeURI": "descodificarURI",
	    "decodeURIComponent": "descodificarComponenteURI",
	    "encodeURI": "codificarURI",
	    "encodeURIComponent": "codificarComponenteURI",
	    "escape": "escapar",
	    "eval": "avaliar",
	    "isFinite": "éFinito",
	    "isNaN": "éNãoNúm",
	    "isXMLName": "éNomeXML",
	    "parseFloat": "parsearFlutuante",
	    "parseInt": "parsearInt",
	    "unescape": "desescapar",
	    "uneval": "desavaliar",
	    "NaN": "NãoNúm",
	    "Infinity": "Infinito",
	    "undefined": "indefinido",
	    "ConversionError": "ErroConversão",
	    "EvalError": "ErroAvaliação",
	    "RangeError": "ErroGama",
	    "ReferenceError": "ErroReferência",
	    "SyntaxError": "ErroSintaxe",
	    "TypeError": "ErroTipo",
	    "URIError": "ErroURI",
	    "InternalError": "ErroInterno",
	    "JavaException": "ExceçãoJava",
	    "Array": "Arranjo",
	    "join": "juntar",
	    "reverse": "inverter",
	    "sort": "ordenar",
	    "push": "empurrar",
	    "pop": "saltar",
	    "shift": "afastar",
	    "unshift": "acercar",
	    "splice": "emendar",
	    "concat": "concatenar",
	    "slice": "cortar",
	    "indexOf": "índiceDe",
	    "lastIndexOf": "últimoÍndiceDe",
	    "every": "todos",
	    "filter": "filtro",
	    "forEach": "paraCada",
	    "map": "mapear",
	    "some": "alguns",
	    "String": "Cadeia",
	    "fromCharCode": "deCódigoCaract",
	    "charAt": "caractEm",
	    "charCodeAt": "caractCódigoEm",
	    "split": "separar",
	    "substring": "subcadeia",
	    "toLowerCase": "paraMinúsc",
	    "toUpperCase": "paraMaiúsc",
	    "substr": "substr",
	    "bold": "negrito",
	    "italics": "itálico",
	    "fixed": "fixo",
	    "strike": "riscar",
	    "small": "pequeno",
	    "big": "grande",
	    "blink": "piscar",
	    "sup": "sup",
	    "sub": "sub",
	    "fontsize": "tamanholetra",
	    "fontcolor": "corletra",
	    "link": "ligação",
	    "anchor": "âncora",
	    "equals": "igual",
	    "equalsIgnoreCase": "igualIgnorarMaiúsMinúsc",
	    "match": "corresp",
	    "search": "localizar",
	    "replace": "substituir",
	    "localeCompare": "compararLocale",
	    "toLocaleLowerCase": "paraLocaleMinúsc",
	    "toLocaleUpperCase": "paraLocaleMaiúsc",
	    "Boolean": "Booleano",
	    "Number": "Número",
	    "POSITIVE_INFINITY": "INFINITO_POSITIVO",
	    "NEGATIVE_INFINITY": "INFINITO_NEGATIVO",
	    "MAX_VALUE": "VALOR_MÁX",
	    "MIN_VALUE": "VALOR_MÍN",
	    "toFixed": "paraFixo",
	    "toExponential": "paraExponencial",
	    "toPrecision": "paraPrecisão",
	    "Date": "Data",
	    "now": "agora",
	    "parse": "parsear",
	    "UTC": "UTC",
	    "toTimeString": "paraCadeiaHora",
	    "toDateString": "paraCadeiaData",
	    "toLocaleTimeString": "paraCadeiaHoraLocale",
	    "toLocaleDateString": "paraCadeiaDataLocale",
	    "toUTCString": "paraCadeiaUTC",
	    "getTime": "obterHora",
	    "getYear": "obterAno",
	    "getFullYear": "obterAnoCompleto",
	    "getUTCFullYear": "obterAnoCompletoUTC",
	    "getMonth": "obterMês",
	    "getUTCMonth": "obterMêsUTC",
	    "getDate": "obterData",
	    "getUTCDate": "obterDataUTC",
	    "getDay": "obterDia",
	    "getUTCDay": "obterDiaUTC",
	    "getHours": "obterHoras",
	    "getUTCHours": "obterHorasUTC",
	    "getMinutes": "obterMinutos",
	    "getUTCMinutes": "obterMinutosUTC",
	    "getSeconds": "obterSegundos",
	    "getUTCSeconds": "obterSegundosUTC",
	    "getMilliseconds": "obterMilissegundos",
	    "getUTCMilliseconds": "bterMilissegundosUTC",
	    "getTimezoneOffset": "obterFusoHorário",
	    "setTime": "definirHora",
	    "setMilliseconds": "definirMilissegundos",
	    "setUTCMilliseconds": "definirMilissegundosUTC",
	    "setSeconds": "definirSegundos",
	    "setUTCSeconds": "definirSegundosUTC",
	    "setMinutes": "definirMinutos",
	    "setUTCMinutes": "definirMinutosUTC",
	    "setHours": "definirHoras",
	    "setUTCHours": "definirHorasUTC",
	    "setDate": "definirData",
	    "setUTCDate": "definirDataUTC",
	    "setMonth": "definirMês",
	    "setUTCMonth": "definirMêsUTC",
	    "setFullYear": "definirAnoCompleto",
	    "setUTCFullYear": "definirAnoCompletoUTC",
	    "setYear": "definirAno",
	    "Math": "Matemática",
	    "abs": "abs",
	    "acos": "acos",
	    "asin": "asen",
	    "atan": "atan",
	    "atan2": "atan2",
	    "ceil": "teto",
	    "cos": "cos",
	    "exp": "exp",
	    "floor": "chão",
	    "log": "log",
	    "max": "máx",
	    "min": "mín",
	    "pow": "potência",
	    "random": "aleatório",
	    "round": "arred",
	    "sin": "sen",
	    "sqrt": "raíz",
	    "tan": "tan",
	    "E": "E",
	    "PI": "Pi",
	    "LN10": "LN10",
	    "LN2": "LN2",
	    "LOG2E": "LOG2E",
	    "LOG10E": "LOG10E",
	    "SQRT1_2": "RAIZ1_2",
	    "SQRT2": "RAIZ2",
	    "With": "Com",
	    "Call": "Chamar",
	    "Script": "Script",
	    "exec": "executar",
	    "compile": "compilar",
	    "Iterator": "Iterador",
	    "next": "próximo",
	    "__iterator__": "__iterador__",
	    "StopIteration": "PararIteração",
	    "RegExp": "ExpReg",
	    "lastIndex": "últimoÍndice",
	    "source": "fonte",
	    "global": "global",
	    "ignoreCase": "ignorarMaiúsMinúsc",
	    "multiline": "multilinhas",
	    "test": "teste",
	    "prefix": "prefixo",
	    "index": "índice",
	    "input": "input"
	}),

	'bn': invert({
	    "alert": "সতর্ক",
	    "show": "প্রদর্শন",
	    "function": "ফাংশন",
	    "if": "যদ্যপি",
	    "else": "নয়ত",
	    "for": "জন্যে",
	    "while": "যেহেতু",
	    "return": "সমাবর্তন",
	    "do": "করো",
	    "true": "সত্য",
	    "false": "অসত্য",
	    "var": "চলক",
	    "in": "মধ্যে",
	    "let": "হলে",
	    "new": "নতুন",
	    "try": "চেষ্টা",
	    "case": "অবস্থা",
	    "null": "নাল",
	    "this": "এটি",
	    "with": "সহ",
	    "break": "ভাঙ্গন",
	    "throw": "নিক্ষেপ",
	    "catch": "ধরা",
	    "switch": "পরিবর্তিত_করো",
	    "continue": "অগ্রসর",
	    "debugger": "সংশোধক",
	    "instanceof": "পরামর্শে",
	    "typeof": "এই_ধরনের",
	    "void": "শূন্যস্থান",
	    "delete": "মুছো",
	    "default": "পূর্বনির্ধারিত",
	    "finally": "পরিশেষে",
	    "int": "পূর্ণসংখ্যা",
	    "byte": "বাইট",
	    "char": "অক্ষর",
	    "enum": "পরিগণনা",
	    "goto": "যাও_তাতে",
	    "long": "দীর্ঘ",
	    "const": "নিত্য",
	    "super": "উপরি",
	    "class": "বর্গ",
	    "yield": "উত্পাদ",
	    "final": "শেষ",
	    "float": "দশমিক",
	    "short": "ন্যুন",
	    "native": "স্থানীয়",
	    "throws": "ছোঁড়ার",
	    "import": "আগম",
	    "double": "দ্বি",
	    "static": "স্ট্যাটিক",
	    "public": "প্রকাশ্য",
	    "export": "রপ্তানি",
	    "package": "গাঁটরি",
	    "boolean": "বুলীয়",
	    "private": "নিজস্ব",
	    "extends": "প্রসারিত",
	    "abstract": "নির্বস্তুক",
	    "volatile": "উদ্বায়ী",
	    "interface": "প্রেক্ষাপটের",
	    "protected": "রক্ষিত",
	    "transient": "অস্থায়ী",
	    "implements": "সরঁজাম",
	    "synchronized": "সুসংগত",
	    "arguments": "পরামিতি",
	    "callee": "আহূত",
	    "length": "ব্যাপ্তি",
	    "caller": "আহ্বায়ক",
	    "LIBRARY_SCOPE": "গ্রন্থাগারের_সুযোগ",
	    "Function": "_ফাংশন",
	    "name": "নাম",
	    "arity": "পরামিতি_গন্য",
	    "prototype": "প্রোটোটাইপ",
	    "constructor": "নির্মাতা",
	    "toString": "পংক্তিতে",
	    "toSource": "উত্সে",
	    "apply": "প্রয়োগ",
	    "call": "আহ্বান",
	    "Object": "বস্তু",
	    "toLocaleString": "স্থানীয়_পংক্তিতে",
	    "valueOf": "এর_মান",
	    "hasOwnProperty": "নিজস্ব_গুণ_আছে",
	    "propertyIsEnumerable": "গুণ_গণনসাধ্য",
	    "isPrototypeOf": "এর_প্রোটোটাইপ_হল",
	    "__defineGetter__": "__গ্রাহক_বিবৃতি_করো__",
	    "__defineSetter__": "__স্থাপনকর্তা_বিবৃতি_করো__",
	    "__lookupGetter__": "__গ্রাহক_খোঁজো__",
	    "__lookupSetter__": "__স্থাপনকর্তা_খোঁজো__",
	    "Error": "ভুল",
	    "message": "বার্তা",
	    "fileName": "নথির_নাম",
	    "lineNumber": "পংক্তি_সংখ্যা",
	    "decodeURI": "পাঠোদ্ধার_ইউআরএই",
	    "decodeURIComponent": "পাঠোদ্ধার_ইউআরএই_উপাদান",
	    "encodeURI": "সঙ্কেতাক্ষরে_ইউআরএই",
	    "encodeURIComponent": "সঙ্কেতাক্ষরে_ইউআরএই_উপাদান",
	    "escape": "অব্যাহতি",
	    "eval": "মূল্যায়ন",
	    "isFinite": "সসীম_হল",
	    "isNaN": "সংখ্যা_নয়_হল",
	    "isXMLName": "এক্ষএমএল_নাম_হল",
	    "parseFloat": "পার্স_দশমিক",
	    "parseInt": "পার্স_পূর্ণসংখ্যা",
	    "unescape": "অ_অব্যাহতি",
	    "uneval": "অ_মূল্যায়ন",
	    "NaN": "সংখ্যা_নয়",
	    "Infinity": "অসীম",
	    "undefined": "অবর্ণিত",
	    "ConversionError": "রুপান্তরে_ত্রুটি",
	    "EvalError": "মূল্যায়নে_ত্রুটি",
	    "RangeError": "পরিসরে_ত্রুটি",
	    "ReferenceError": "প্রসঙ্গে_ত্রুটি",
	    "SyntaxError": "সিনট্যাক্স_ত্রুটি",
	    "TypeError": "ধরনের_ত্রুটি",
	    "URIError": "ইউআরএই_ত্রুটি",
	    "InternalError": "অভ্যন্তরীণ_ত্রুটি",
	    "JavaException": "জাভা_ব্যতিক্রম",
	    "Array": "অ্যারে",
	    "join": "সংযোগ",
	    "reverse": "উলটান",
	    "sort": "শ্রেণীবিভক্ত",
	    "push": "ঠেলা",
	    "pop": "টান",
	    "shift": "সরান",
	    "unshift": "অ_সরান",
	    "splice": "আবদ্ধ_করো",
	    "concat": "যোগ_করো",
	    "slice": "টুকরা_করো",
	    "indexOf": "সূচী",
	    "lastIndexOf": "শেষ_সূচী",
	    "every": "প্রতি",
	    "filter": "পরিশোধক",
	    "forEach": "প্রত্যেকটি",
	    "map": "ম্যাপ",
	    "some": "কিছু",
	    "String": "পংক্তি",
	    "fromCharCode": "অক্ষরের_সংকেত_থেকে",
	    "charAt": "এ_অক্ষর",
	    "charCodeAt": "এ_অক্ষর_সংকেত",
	    "split": "বিভক্ত_করো",
	    "substring": "উপ_পংক্তি",
	    "toLowerCase": "ছোট_অক্ষরে",
	    "toUpperCase": "বড়_অক্ষরে",
	    "substr": "খণ্ডবাক্য",
	    "bold": "মোটা",
	    "italics": "বাঁকা",
	    "fixed": "স্থায়ী",
	    "strike": "কাটো",
	    "small": "ছোট",
	    "big": "বড়",
	    "blink": "মিট্মিট্",
	    "sup": "উপরে_লিখিত",
	    "sub": "নিম্ন_লিখিত",
	    "fontsize": "হরফ_আকার",
	    "fontcolor": "হরফ_রং",
	    "link": "লিংক",
	    "anchor": "নঙ্গর",
	    "equals": "সমান",
	    "equalsIgnoreCase": "সমান_উপেক্ষা_অবস্থা",
	    "match": "মিল",
	    "search": "অনুসন্ধান",
	    "replace": "প্রতিস্থাপন_করো",
	    "localeCompare": "স্থানীয়_তুলনা",
	    "toLocaleLowerCase": "স্থানীয়_ছোট_অক্ষরে",
	    "toLocaleUpperCase": "স্থানীয়_বড়_অক্ষরে",
	    "Boolean": "_বুলীয়",
	    "Number": "সংখ্যা",
	    "POSITIVE_INFINITY": "ধনাত্মক_অমেয়তা",
	    "NEGATIVE_INFINITY": "ঋণাত্মক_অমেয়তা",
	    "MAX_VALUE": "সর্বোচ্চ_মান",
	    "MIN_VALUE": "সর্বনিম্ন_মান",
	    "toFixed": "নির্দিষ্ট",
	    "toExponential": "ব্যাখ্যামূলক_তে",
	    "toPrecision": "স্পষ্টতা_তে",
	    "Date": "তারিখ",
	    "now": "এখন",
	    "parse": "পরিচিতিকরণ",
	    "UTC": "ইউটিসি",
	    "toTimeString": "সময়_পংক্তিতে",
	    "toDateString": "তারিখ_পংক্তিতে",
	    "toLocaleTimeString": "স্থানীয়_সময়_পংক্তিতে",
	    "toLocaleDateString": "স্থানীয়_তারিখ_পংক্তিতে",
	    "toUTCString": "ইউটিসি_পংক্তিতে",
	    "getTime": "পান_সময়",
	    "getYear": "পান_বর্ষ",
	    "getFullYear": "পান_পূর্ণ_বর্ষ",
	    "getUTCFullYear": "পান_ইউটিসি_পূর্ণ_বর্ষ",
	    "getMonth": "পান_মাস",
	    "getUTCMonth": "পান_ইউটিসি_মাস",
	    "getDate": "পান_তারিখ",
	    "getUTCDate": "পান_ইউটিসি_তারিখ",
	    "getDay": "পান_দিন",
	    "getUTCDay": "পান_ইউটিসি_দিন",
	    "getHours": "পান_ঘন্টা",
	    "getUTCHours": "পান_ইউটিসি_ঘন্টা",
	    "getMinutes": "পান_মিনিট",
	    "getUTCMinutes": "পান_ইউটিসি_মিনিট",
	    "getSeconds": "পান_সেকন্ড",
	    "getUTCSeconds": "পান_ইউটিসি_সেকন্ড",
	    "getMilliseconds": "পান_মিলিসেকন্ড",
	    "getUTCMilliseconds": "পান_ইউটিসি_মিলিসেকন্ড",
	    "getTimezoneOffset": "পান_সময়অঞ্চল_শোধবোধ",
	    "setTime": "স্থাপন_সময়",
	    "setMilliseconds": "স্থাপন_মিলিসেকন্ড",
	    "setUTCMilliseconds": "স্থাপন_ইউটিসি_মিলিসেকন্ড",
	    "setSeconds": "স্থাপন_সেকন্ড",
	    "setUTCSeconds": "স্থাপন_ইউটিসি_সেকন্ড",
	    "setMinutes": "স্থাপন_মিনিট",
	    "setUTCMinutes": "স্থাপন_ইউটিসি_মিনিট",
	    "setHours": "স্থাপন_ঘন্টা",
	    "setUTCHours": "স্থাপন_ইউটিসি_ঘন্টা",
	    "setDate": "স্থাপন_তারিখ",
	    "setUTCDate": "স্থাপন_ইউটিসি_তারিখ",
	    "setMonth": "স্থাপন_মাস",
	    "setUTCMonth": "স্থাপন_ইউটিসি_মাস",
	    "setFullYear": "স্থাপন_পূর্ণ_বর্ষ",
	    "setUTCFullYear": "স্থাপন_ইউটিসি_পূর্ণ_বর্ষ",
	    "setYear": "স্থাপন_বর্ষ",
	    "Math": "গণিত",
	    "abs": "নিরপেক্ষ_মূল্য",
	    "acos": "চাপ_কোসাইন",
	    "asin": "চাপ_জ্যা",
	    "atan": "চাপ_স্পর্শক",
	    "atan2": "চাপ_স্পর্শক২",
	    "ceil": "সিলিং",
	    "cos": "কোসাইন",
	    "exp": "উদ্গাতা",
	    "floor": "তল",
	    "log": "লগারিদম",
	    "max": "সর্বোচ্চ",
	    "min": "সর্বনিম্ন_মান",
	    "pow": "ক্ষমতা",
	    "random": "এলোমেলো",
	    "round": "বৃত্তাকার",
	    "sin": "জ্যা",
	    "sqrt": "বর্গমূল",
	    "tan": "স্পর্শক",
	    "E": "ই",
	    "PI": "পাই",
	    "LN10": "স্বাভাবিক_লগারিদম১০",
	    "LN2": "স্বাভাবিক_লগারিদম২",
	    "LOG2E": "লগারিদম২ই",
	    "LOG10E": "লগারিদম১০ই",
	    "SQRT1_2": "বর্গমূল১_২",
	    "SQRT2": "বর্গমূল২",
	    "With": "_সহ",
	    "Call": "_আহ্বান",
	    "Script": "লিপি",
	    "exec": "আসাদিত",
	    "compile": "সঙ্কলন",
	    "Iterator": "_পুনরাবৃতি",
	    "next": "পরবর্তী",
	    "__iterator__": "__পুনরাবৃতি__",
	    "StopIteration": "_পুনরাবৃত্তি_বন্ধ",
	    "RegExp": "_नियमित_অভিব্যক্তি",
	    "lastIndex": "শেষ_সূচক",
	    "source": "উত্সে",
	    "global": "বিশ্বব্যাপী",
	    "ignoreCase": "উপেক্ষা_অবস্থা",
	    "multiline": "বহু_রেখা",
	    "test": "পরীক্ষা",
	    "prefix": "উপসর্গ",
	    "index": "সূচী",
	    "input": "নিবেশ"
	}),

	'de': invert({
	    "alert": "warnen",
	    "show": "zeigen",
	    "function": "funktion",
	    "if": "wenn",
	    "else": "sonst",
	    "for": "für",
	    "while": "solange",
	    "return": "rücksprung",
	    "do": "ausführen",
	    "true": "wahr",
	    "false": "falsch",
	    "var": "var",
	    "in": "in",
	    "let": "sein",
	    "new": "neu",
	    "try": "versuche",
	    "case": "fall",
	    "null": "null",
	    "this": "dies",
	    "with": "mit",
	    "break": "abbrechen",
	    "throw": "wirf",
	    "catch": "fangen",
	    "switch": "schalten",
	    "continue": "fortfahren",
	    "debugger": "tester",
	    "instanceof": "instanzvon",
	    "typeof": "artvon",
	    "void": "nichts",
	    "delete": "löschen",
	    "default": "standard",
	    "finally": "zuletzt",
	    "int": "ganzzahl",
	    "byte": "byte",
	    "char": "aeichen",
	    "enum": "aufzählung",
	    "goto": "springen",
	    "long": "langzahl",
	    "const": "konstante",
	    "super": "über",
	    "class": "klasse",
	    "yield": "liefern",
	    "final": "final",
	    "float": "gleitkommazahl",
	    "short": "kurzzahl",
	    "native": "nativ",
	    "throws": "wirft",
	    "import": "importieren",
	    "double": "langleitkommazahl",
	    "static": "statisch",
	    "public": "öffentlich",
	    "export": "exportieren",
	    "package": "packet",
	    "boolean": "boolesch",
	    "private": "privat",
	    "extends": "erweitert",
	    "abstract": "abstrakt",
	    "volatile": "volatil",
	    "interface": "schnittstelle",
	    "protected": "geschützt",
	    "transient": "transient",
	    "implements": "implementiert",
	    "synchronized": "synchronisiert",
	    "arguments": "argumente",
	    "callee": "aufgerufene",
	    "length": "länger",
	    "caller": "aufrufer",
	    "LIBRARY_SCOPE": "BIBLIOTHEK_BEREICH",
	    "Function": "Funktion",
	    "name": "name",
	    "arity": "arität",
	    "prototype": "prototyp",
	    "constructor": "konstruktor",
	    "toString": "zuZeichenkette",
	    "toSource": "zuQuellcode",
	    "apply": "anwenden",
	    "call": "aufrufen",
	    "Object": "Objekt",
	    "toLocaleString": "zuLokalisierterZeichenkette",
	    "valueOf": "wertVon",
	    "hasOwnProperty": "hatEigenschaft",
	    "propertyIsEnumerable": "eigenschaftIstAufzählbar",
	    "isPrototypeOf": "istPrototypVon",
	    "__defineGetter__": "__definiereHoler__",
	    "__defineSetter__": "__definiereSetzer__",
	    "__lookupGetter__": "__liefereHoler__",
	    "__lookupSetter__": "__liefereSetzer__",
	    "Error": "Fehler",
	    "message": "nachricht",
	    "fileName": "dateiName",
	    "lineNumber": "dateiNummer",
	    "decodeURI": "dekodiereURI",
	    "decodeURIComponent": "dekodiereURIKomponente",
	    "encodeURI": "enkodiereURI",
	    "encodeURIComponent": "enkodiereURIKomponente",
	    "escape": "umsetzen",
	    "eval": "evaluiere",
	    "isFinite": "istEndlich",
	    "isNaN": "istKeineZahl",
	    "isXMLName": "istXMLName",
	    "parseFloat": "parseGleitkommazahl",
	    "parseInt": "praseGanzzahl",
	    "unescape": "deUmsetzen",
	    "uneval": "deevaluiere",
	    "NaN": "KeineZahl",
	    "Infinity": "Unendlich",
	    "undefined": "undefiniert",
	    "ConversionError": "KonvertierungsFehler",
	    "EvalError": "EvaluationsFehler",
	    "RangeError": "SpannweitenFehler",
	    "ReferenceError": "ReferenzFehler",
	    "SyntaxError": "SyntaktischerFehler",
	    "TypeError": "TypFehler",
	    "URIError": "URIFehler",
	    "InternalError": "InternerFehler",
	    "JavaException": "JavaAusnahmefehler",
	    "Array": "Feld",
	    "join": "verknüpfe",
	    "reverse": "umkehren",
	    "sort": "sortieren",
	    "push": "einkellern",
	    "pop": "auskellern",
	    "shift": "verschieben",
	    "unshift": "unverschieben",
	    "splice": "spleißen",
	    "concat": "konkatenieren",
	    "slice": "zerteilen",
	    "indexOf": "indexVon",
	    "lastIndexOf": "letzterIndexVon",
	    "every": "jedes",
	    "filter": "filtern",
	    "forEach": "fürJedes",
	    "map": "abbilden",
	    "some": "einige",
	    "String": "Zeichenkette",
	    "fromCharCode": "vonZeichenKode",
	    "charAt": "zeichenBei",
	    "charCodeAt": "zeichenKodeBei",
	    "split": "auttrennen",
	    "substring": "unterzeichenkette",
	    "toLowerCase": "zuKleinschrift",
	    "toUpperCase": "zuGroßschrift",
	    "substr": "unterzeichenkette",
	    "bold": "fett",
	    "italics": "kursiv",
	    "fixed": "fixiert",
	    "strike": "durchgestrichen",
	    "small": "klein",
	    "big": "groß",
	    "blink": "blinken",
	    "sup": "über",
	    "sub": "unter",
	    "fontsize": "schriftgröße",
	    "fontcolor": "schriftfarbe",
	    "link": "link",
	    "anchor": "anker",
	    "equals": "gleicht",
	    "equalsIgnoreCase": "gleichtIgnoriereGroßKleinschreibung",
	    "match": "istIn",
	    "search": "suchen",
	    "replace": "ersetzen",
	    "localeCompare": "lokalisierterVergleich",
	    "toLocaleLowerCase": "zuLokalisierterKleinschreibung",
	    "toLocaleUpperCase": "zuLokalisierterGroßschreibung",
	    "Boolean": "Boolesch",
	    "Number": "Zahl",
	    "POSITIVE_INFINITY": "PLUS_UNENDLICH",
	    "NEGATIVE_INFINITY": "MINUS_UNENDLICH",
	    "MAX_VALUE": "MAXIMAL_WERT",
	    "MIN_VALUE": "MINIMAL_WERT",
	    "toFixed": "zuFixkommazahl",
	    "toExponential": "zuExponentialzahl",
	    "toPrecision": "zuNachkommastellen",
	    "Date": "Datum",
	    "now": "jetzt",
	    "parse": "parsen",
	    "UTC": "UTC",
	    "toTimeString": "zuZeitZeichenkette",
	    "toDateString": "zuDatumsZeichenkette",
	    "toLocaleTimeString": "zuLokalisierterZeitZeichenkette",
	    "toLocaleDateString": "zuLokalisierterDatumsZeichenkette",
	    "toUTCString": "zuUTCZeichenkette",
	    "getTime": "holeZeit",
	    "getYear": "holenJahr",
	    "getFullYear": "holenGanzesJahr",
	    "getUTCFullYear": "holenUTCGanzesJahr",
	    "getMonth": "holenMonat",
	    "getUTCMonth": "holenUTCMonat",
	    "getDate": "holenDatum",
	    "getUTCDate": "holenUTCDatum",
	    "getDay": "holenTag",
	    "getUTCDay": "holenUTCTag",
	    "getHours": "holenStunde",
	    "getUTCHours": "holenUTCStunde",
	    "getMinutes": "holenMinuten",
	    "getUTCMinutes": "holenUTCMinuten",
	    "getSeconds": "holenSekunden",
	    "getUTCSeconds": "holenUTCSekunden",
	    "getMilliseconds": "holenMillisekunden",
	    "getUTCMilliseconds": "holenUTCMillisekunden",
	    "getTimezoneOffset": "holenZeitzonenOffset",
	    "setTime": "setzenZeit",
	    "setMilliseconds": "setzenMillisekunden",
	    "setUTCMilliseconds": "setzenUTCMillisekunden",
	    "setSeconds": "setzenSekunden",
	    "setUTCSeconds": "setzenUTCSekunden",
	    "setMinutes": "setzenMinuten",
	    "setUTCMinutes": "setzenUTCMinuten",
	    "setHours": "setzenStunden",
	    "setUTCHours": "setzenUTCStunden",
	    "setDate": "setzenDatum",
	    "setUTCDate": "setzenUTCDatum",
	    "setMonth": "setzenMonat",
	    "setUTCMonth": "setzenUTCMonat",
	    "setFullYear": "setzenGanzesJahr",
	    "setUTCFullYear": "setzenUTCGanzesJahr",
	    "setYear": "setzenJahr",
	    "Math": "Mathe",
	    "abs": "abs",
	    "acos": "acos",
	    "asin": "asin",
	    "atan": "atan",
	    "atan2": "atan2",
	    "ceil": "aufrunden",
	    "cos": "cos",
	    "exp": "exp",
	    "floor": "abrunden",
	    "log": "log",
	    "max": "max",
	    "min": "min",
	    "pow": "potenzieren",
	    "random": "zufällig",
	    "round": "runden",
	    "sin": "sin",
	    "sqrt": "qwurzel",
	    "tan": "tan",
	    "E": "E",
	    "PI": "PI",
	    "LN10": "LN10",
	    "LN2": "LN2",
	    "LOG2E": "LOG2E",
	    "LOG10E": "LOG10E",
	    "SQRT1_2": "QWurzel1_2",
	    "SQRT2": "QWurzel_2",
	    "With": "Mit",
	    "Call": "Aufruf",
	    "Script": "Skript",
	    "exec": "ausführen",
	    "compile": "kompilieren",
	    "Iterator": "Iterator",
	    "next": "nächstes",
	    "__iterator__": "__Iterator__",
	    "StopIteration": "StopIteration",
	    "RegExp": "RegAusdruck",
	    "lastIndex": "letzterIndex",
	    "source": "quellcode",
	    "global": "global",
	    "ignoreCase": "ignoriereGroßKleinschreibung",
	    "multiline": "mehrzeilig",
	    "test": "testen",
	    "prefix": "prefix",
	    "index": "index",
	    "input": "eingabe"
	}),

	'ar': invert({
	    "alert": "تحذير",
	    "show": "إظهار",
	    "function": "دالة",
	    "if": "إذا",
	    "else": "اخر",
	    "for": "لكــل",
	    "while": "بينما",
	    "return": "ارجع",
	    "do": "نفذ",
	    "true": "صواب",
	    "false": "خطــأ",
	    "var": "متغير",
	    "in": "في",
	    "let": "دع",
	    "new": "جديد",
	    "try": "حاول",
	    "case": "حالة",
	    "null": "فارغة",
	    "this": "هذا",
	    "with": "مع",
	    "break": "اقطع",
	    "throw": "ارمي",
	    "catch": "قبض",
	    "switch": "تبديل",
	    "continue": "استمر",
	    "debugger": "مصحح",
	    "instanceof": "مثيل",
	    "typeof": "نوع",
	    "void": "لايعيد",
	    "delete": "إمسح",
	    "default": "تلقائى",
	    "finally": "اخيرا",
	    "int": "رقم",
	    "byte": "بايت",
	    "char": "حرف",
	    "enum": "قائمة",
	    "goto": "اذهب_إلى",
	    "long": "طويل",
	    "const": "ثابت",
	    "super": "اعلى",
	    "class": "صنف",
	    "yield": "اجعل",
	    "final": "اخير",
	    "float": "كسر",
	    "short": "قصير",
	    "native": "أصلى",
	    "throws": "يلقي",
	    "import": "استيراد",
	    "double": "مضاعف",
	    "static": "ثابت",
	    "public": "عام",
	    "export": "تصدير",
	    "package": "رزمة",
	    "boolean": "منطقي",
	    "private": "خاص",
	    "extends": "يمتد",
	    "abstract": "مجرد",
	    "volatile": "متقلب",
	    "interface": "وسيط",
	    "protected": "محمي",
	    "transient": "عابر",
	    "implements": "تطبيق",
	    "synchronized": "مزامن",
	    "arguments": "الوسائط",
	    "callee": "الداعى",
	    "length": "طول",
	    "caller": "المستدعي",
	    "LIBRARY_SCOPE": "المجال_المكتبي",
	    "Function": "_داله",
	    "name": "الاسم",
	    "arity": "عدد_المعاملات_الاصلى",
	    "prototype": "نموذج_بدئي",
	    "constructor": "منشىء",
	    "toString": "لسلسله",
	    "toSource": "للمصدر",
	    "apply": "طبق",
	    "call": "استدعي",
	    "Object": "الكائن",
	    "toLocaleString": "لسلسله_محلية",
	    "valueOf": "قيمة_من",
	    "hasOwnProperty": "من_خصائصة",
	    "propertyIsEnumerable": "فى_القوائم",
	    "isPrototypeOf": "هل_الخاصية_مبدئية_من",
	    "__defineGetter__": "تعريف_الجالب",
	    "__defineSetter__": "تعريف_الواضع",
	    "__lookupGetter__": "بحث_الجالب",
	    "__lookupSetter__": "بحث_الواضع",
	    "Error": "خطأ",
	    "message": "رسالة",
	    "fileName": "اسم_الملف",
	    "lineNumber": "رقم_السطر",
	    "decodeURI": "فك_تشفير_الرابط",
	    "decodeURIComponent": "فك_تشفير_مكونات_الرابط",
	    "encodeURI": "تشفير_الرابط",
	    "encodeURIComponent": "تشفير_مكونات_الرابط",
	    "escape": "تشفير",
	    "eval": "تقدير",
	    "isFinite": "هل_محدود",
	    "isNaN": "هل_لا_رقمي",
	    "isXMLName": "هل_اكس_ام_ال_آسمي",
	    "parseFloat": "تحليل_لكسر",
	    "parseInt": "تحليل_لرقم",
	    "unescape": "فك_تشفير",
	    "uneval": "غير_تقدير",
	    "NaN": "غير_رقمى",
	    "Infinity": "لانهائي",
	    "undefined": "غير_محدد",
	    "ConversionError": "خطأ_تحويلي",
	    "EvalError": "خطأ_تقييمي",
	    "RangeError": "خطأ_نطاقي",
	    "ReferenceError": "خطأ_مرجعي",
	    "SyntaxError": "خطأ_كتابى",
	    "TypeError": "خطأ_نوعى",
	    "URIError": "خطأ_عنوانى",
	    "InternalError": "خطأ_داخلى",
	    "JavaException": "إعتراض_جافا",
	    "Array": "مجموعة",
	    "join": "اربط",
	    "reverse": "اعكس",
	    "sort": "رتب",
	    "push": "ادفع",
	    "pop": "اسحب",
	    "shift": "ازح",
	    "unshift": "لاازاحة",
	    "splice": "فرع",
	    "concat": "ضم",
	    "slice": "تفريع",
	    "indexOf": "مؤشر",
	    "lastIndexOf": "أخر_مؤشر",
	    "every": "كل",
	    "filter": "فلتر",
	    "forEach": "لكل",
	    "map": "إنتقال",
	    "some": "بعض",
	    "String": "سلسله",
	    "fromCharCode": "من_كود_لحرف",
	    "charAt": "حرف_عند",
	    "charCodeAt": "كود_الحرف_عند",
	    "split": "قسم",
	    "substring": "سلسلة_فرعية",
	    "toLowerCase": "لحروف_صغيرة",
	    "toUpperCase": "لحروف_كبيرة",
	    "substr": "تقطيع",
	    "bold": "سميك",
	    "italics": "مائل",
	    "fixed": "ثابت",
	    "strike": "شطب",
	    "small": "ضئيل",
	    "big": "كبير",
	    "blink": "وامض",
	    "sup": "فوق_السطر",
	    "sub": "تحت_السطر",
	    "fontsize": "حجم_الخط",
	    "fontcolor": "لون_الخط",
	    "link": "وصلة",
	    "anchor": "علامة",
	    "equals": "يساوى",
	    "equalsIgnoreCase": "قارن_تجاهل_الحروف",
	    "match": "يطابق",
	    "search": "بحث",
	    "replace": "استبدال",
	    "localeCompare": "مقارنة_محلى",
	    "toLocaleLowerCase": "لحروف_صغيرة_محلى",
	    "toLocaleUpperCase": "لحروف_كبيرة_محلى",
	    "Boolean": "منطقي",
	    "Number": "رقمي",
	    "POSITIVE_INFINITY": "موجب_مالانهاية",
	    "NEGATIVE_INFINITY": "سالب_مالانهاية",
	    "MAX_VALUE": "اقصى_قيمة",
	    "MIN_VALUE": "اقل_قيمة",
	    "toFixed": "لتشكيل_الكسر",
	    "toExponential": "للاس",
	    "toPrecision": "لتدوير_الكسر",
	    "Date": "تاريخ",
	    "now": "الان",
	    "parse": "حلل",
	    "UTC": "يوتيسي",
	    "toTimeString": "حول_لسلسله_توقيت",
	    "toDateString": "حول_لسلسله_تاريخية",
	    "toLocaleTimeString": "للوقت_المحلى",
	    "toLocaleDateString": "للتاريخ_المحلى",
	    "toUTCString": "حول_التاريخ_يوتيسي_لسلسله",
	    "getTime": "إجلب_الوقت",
	    "getYear": "إجلب_السنة",
	    "getFullYear": "إجلب_كل_السنة",
	    "getUTCFullYear": "إجلب_كل_السنة_عالميا",
	    "getMonth": "إجلب_الشهر",
	    "getUTCMonth": "إجلب_الشهر_عالميا",
	    "getDate": "إجلب_التاريخ",
	    "getUTCDate": "إجلب_التاريخ_عالميا",
	    "getDay": "إجلب_اليوم",
	    "getUTCDay": "إجلب_اليوم_عالميا",
	    "getHours": "إجلب_الساعة",
	    "getUTCHours": "إجلب_الساعة_عالميا",
	    "getMinutes": "إجلب_الدقائق",
	    "getUTCMinutes": "إجلب_الدقائق_عالميا",
	    "getSeconds": "إجلب_الثوانى",
	    "getUTCSeconds": "إجلب_الثوانى_عالميا",
	    "getMilliseconds": "إجلب_ملىثانية",
	    "getUTCMilliseconds": "إجلب_ملىثانية_عالميا",
	    "getTimezoneOffset": "إجلب_فرق_الوقت",
	    "setTime": "اضبط_الوقت",
	    "setMilliseconds": "اضبط_المللي_ثانية",
	    "setUTCMilliseconds": "اضبط_المللي_ثانية_يوتيسي",
	    "setSeconds": "اضبط_الثانية",
	    "setUTCSeconds": "اضبط_الثانية_يوتيسي",
	    "setMinutes": "اضبط_الدقائق",
	    "setUTCMinutes": "اضبط_الدقائق_يوتيسي",
	    "setHours": "اضبط_الساعة",
	    "setUTCHours": "اضبط_الساعة_يوتيسي",
	    "setDate": "اضبط_االتاريخ",
	    "setUTCDate": "اضبط_االتاريخ_يوتيسي",
	    "setMonth": "اضبط_الشهر",
	    "setUTCMonth": "اضبط_الشهر_يوتيسي",
	    "setFullYear": "اضبط_السنة_كاملة",
	    "setUTCFullYear": "اضبط_السنة_كاملة_يوتيسي",
	    "setYear": "اضبط_السنة",
	    "Math": "حساب",
	    "abs": "المطلق",
	    "acos": "مقلوب_الجتا",
	    "asin": "مقلوب_الجا",
	    "atan": "مقلوب_الظا",
	    "atan2": "مقلوب_الظا2",
	    "ceil": "سقف_الرقم",
	    "cos": "جتا",
	    "exp": "آس",
	    "floor": "ارضية_الرقم",
	    "log": "لوغ",
	    "max": "قيمة_عظمي",
	    "min": "قيمة_دنيا",
	    "pow": "للآس",
	    "random": "عشوائي",
	    "round": "تقريبي",
	    "sin": "جا",
	    "sqrt": "تربيع",
	    "tan": "ظا",
	    "E": "الرقمالطبيعيي",
	    "PI": "باي",
	    "LN10": "لين_اساس_10",
	    "LN2": "لين_اساس_2",
	    "LOG2E": "لين_اساس_2_العدد_الطبيعي",
	    "LOG10E": "لين_اساس_10_العدد_الطبيعي",
	    "SQRT1_2": "الجذر_التربيعي_لنص",
	    "SQRT2": "الجذر_التربيعي",
	    "With": "صاحب",
	    "Call": "استدعي",
	    "Script": "سكربت",
	    "exec": "شغل",
	    "compile": "جمع",
	    "Iterator": "مكرر",
	    "next": "التالي",
	    "__iterator__": "__مكرر__",
	    "StopIteration": "أوقف_التكرار",
	    "RegExp": "تعبير_نمطي",
	    "lastIndex": "أخر_مؤشر",
	    "source": "المصدر",
	    "global": "عالمى",
	    "ignoreCase": "تجاهل_الحروف",
	    "multiline": "متعدد_السطور",
	    "test": "اختبر",
	    "prefix": "بادئة",
	    "index": "مؤشر",
	    "input": "مدخل"
	}),

	'tr': invert({
	    "alert": "uyar",
	    "show": "göster",
	    "function": "işlev",
	    "if": "eğer",
	    "else": "değilse",
	    "for": "döngü",
	    "while": "iken",
	    "return": "sonuç",
	    "do": "yap",
	    "true": "doğru",
	    "false": "yanlış",
	    "var": "değişken",
	    "in": "içinde",
	    "let": "ata",
	    "new": "yeni",
	    "try": "dene",
	    "case": "durum",
	    "null": "yok",
	    "this": "bu",
	    "with": "ile",
	    "break": "kır",
	    "throw": "fırlat",
	    "catch": "yakala",
	    "switch": "seçim",
	    "continue": "devam",
	    "debugger": "ayıklayıcı",
	    "instanceof": "türevi",
	    "typeof": "tipi",
	    "void": "metot",
	    "delete": "sil",
	    "default": "varsayılan",
	    "finally": "sonunda",
	    "int": "tam",
	    "byte": "bayt",
	    "char": "harf",
	    "enum": "liste",
	    "goto": "git",
	    "long": "uzun",
	    "const": "sabit",
	    "super": "üst",
	    "class": "sınıf",
	    "yield": "teslim",
	    "final": "son",
	    "float": "kayan",
	    "short": "kısa",
	    "native": "doğal",
	    "throws": "fırlatır",
	    "import": "ithal",
	    "double": "çift",
	    "static": "durağan",
	    "public": "açık",
	    "export": "ihraç",
	    "package": "paket",
	    "boolean": "bool",
	    "private": "özel",
	    "extends": "geliştirir",
	    "abstract": "soyut",
	    "volatile": "çokamaçlı",
	    "interface": "arabirim",
	    "protected": "korumalı",
	    "transient": "geçici",
	    "implements": "uygular",
	    "synchronized": "eşitlenmiş",
	    "arguments": "argümanlar",
	    "callee": "çağırılan",
	    "length": "uzunluk",
	    "caller": "çağıran",
	    "LIBRARY_SCOPE": "KÜTÜPHANE_KAPSAMI",
	    "Function": "İşlev",
	    "name": "isim",
	    "arity": "beklenen",
	    "prototype": "ilkörnek",
	    "constructor": "kurucu",
	    "toString": "metinOlarak",
	    "toSource": "kaynakOlarak",
	    "apply": "uygula",
	    "call": "çağır",
	    "Object": "Nesne",
	    "toLocaleString": "yerelMetinOlarak",
	    "valueOf": "değeri",
	    "hasOwnProperty": "kendiÖzelliğiMi",
	    "propertyIsEnumerable": "özellikListeMi",
	    "isPrototypeOf": "ilkörneğiMi",
	    "__defineGetter__": "__vericiTanımla__",
	    "__defineSetter__": "__atayıcıTanımla__",
	    "__lookupGetter__": "__vericiGetir__",
	    "__lookupSetter__": "__atayıcıGetir__",
	    "Error": "Hata",
	    "message": "mesaj",
	    "fileName": "dosyaAdı",
	    "lineNumber": "satırNumarası",
	    "decodeURI": "çözümleBKK",
	    "decodeURIComponent": "çözümleBKKParçası",
	    "encodeURI": "kodlaBKK",
	    "encodeURIComponent": "kodlaBKKParçası",
	    "escape": "kaçır",
	    "eval": "çalıştır",
	    "isFinite": "sonluMu",
	    "isNaN": "sayiDegilMi",
	    "isXMLName": "XMLİsmiMi",
	    "parseFloat": "kayanÇözümle",
	    "parseInt": "tamÇözümle",
	    "unescape": "kaçırma",
	    "uneval": "çalıştırma",
	    "NaN": "SayıDeğil",
	    "Infinity": "Sonsuz",
	    "undefined": "tanımsız",
	    "ConversionError": "ÇevirimHatası",
	    "EvalError": "ÇalıştırmaHatası",
	    "RangeError": "AralıkHatası",
	    "ReferenceError": "ReferansHatası",
	    "SyntaxError": "SözDizimiHatası",
	    "TypeError": "TürHatası",
	    "URIError": "BKKHatası",
	    "InternalError": "DahiliHata",
	    "JavaException": "JavaHatası",
	    "Array": "Dizi",
	    "join": "birleştir",
	    "reverse": "evir",
	    "sort": "sırala",
	    "push": "ekle",
	    "pop": "baştanAl",
	    "shift": "kaydır",
	    "unshift": "başaEkle",
	    "splice": "dolgu",
	    "concat": "ekle",
	    "slice": "dilim",
	    "indexOf": "indisi",
	    "lastIndexOf": "sonİndisi",
	    "every": "hepsi",
	    "filter": "süz",
	    "forEach": "herbiriİçin",
	    "map": "eşle",
	    "some": "bazısı",
	    "String": "Metin",
	    "fromCharCode": "harfKodundan",
	    "charAt": "indistekiHarf",
	    "charCodeAt": "indistekiHarfKodu",
	    "split": "ayır",
	    "substring": "altMetin",
	    "toLowerCase": "küçükHaflerle",
	    "toUpperCase": "büyükHarflerle",
	    "substr": "altMtn",
	    "bold": "koyu",
	    "italics": "eğik",
	    "fixed": "sabitYazıtipi",
	    "strike": "üstünüÇiz",
	    "small": "ufak",
	    "big": "büyük",
	    "blink": "kırpıştır",
	    "sup": "üstSimge",
	    "sub": "altSimge",
	    "fontsize": "yazıtipiBoyu",
	    "fontcolor": "yazıtipiRengi",
	    "link": "bağlantı",
	    "anchor": "çapa",
	    "equals": "eşittir",
	    "equalsIgnoreCase": "eşittirKüçükYadaBüyük",
	    "match": "yakala",
	    "search": "ara",
	    "replace": "değiştir",
	    "localeCompare": "yerelKarşılaştır",
	    "toLocaleLowerCase": "yerelUfakHarflerle",
	    "toLocaleUpperCase": "yerelBüyükkHarflerle",
	    "Boolean": "Boolean",
	    "Number": "Sayı",
	    "POSITIVE_INFINITY": "ARTI_SONSUZ",
	    "NEGATIVE_INFINITY": "EKSİ_SONSUZ",
	    "MAX_VALUE": "EN_YÜKSEK_DEĞER",
	    "MIN_VALUE": "EN_DÜŞÜK_DEĞER",
	    "toFixed": "sabitNoktalıOlarak",
	    "toExponential": "üstelOlarak",
	    "toPrecision": "kesinOlarak",
	    "Date": "Tarih",
	    "now": "şimdi",
	    "parse": "çözümle",
	    "UTC": "EZK",
	    "toTimeString": "saatMetniOlarak",
	    "toDateString": "tarihMetniOlarak",
	    "toLocaleTimeString": "yerelZamanMetniOlarak",
	    "toLocaleDateString": "yerelTarihMetniOlarak",
	    "toUTCString": "metinOlarakEZK",
	    "getTime": "zamanıVer",
	    "getYear": "yılıVer",
	    "getFullYear": "tamYılıVer",
	    "getUTCFullYear": "tamYılıVerEZK",
	    "getMonth": "ayıVer",
	    "getUTCMonth": "ayıVerEZK",
	    "getDate": "tarihiVer",
	    "getUTCDate": "tarihiVerEZK",
	    "getDay": "günüVer",
	    "getUTCDay": "günüVerEZK",
	    "getHours": "saatiVer",
	    "getUTCHours": "saatiVerEZK",
	    "getMinutes": "dakikayıVer",
	    "getUTCMinutes": "dakikayıVerEZK",
	    "getSeconds": "saniyeyiVer",
	    "getUTCSeconds": "saniyeyiVerEZK",
	    "getMilliseconds": "milisaniyeVer",
	    "getUTCMilliseconds": "milisaniyeVerEZK",
	    "getTimezoneOffset": "saatDilimiGöreliKonumunuVer",
	    "setTime": "zamanıAta",
	    "setMilliseconds": "milisaniyeyiAta",
	    "setUTCMilliseconds": "milisaniyeyiAtaEZK",
	    "setSeconds": "saniyeAta",
	    "setUTCSeconds": "saniyeAtaEZK",
	    "setMinutes": "dakikaAta",
	    "setUTCMinutes": "dakikaAtaEZK",
	    "setHours": "saatAta",
	    "setUTCHours": "saatAtaEZK",
	    "setDate": "tarihAta",
	    "setUTCDate": "tarihAtaEZK",
	    "setMonth": "ayAta",
	    "setUTCMonth": "ayAtaEZK",
	    "setFullYear": "tamYılAta",
	    "setUTCFullYear": "tamYılAtaEZK",
	    "setYear": "yılAta",
	    "Math": "Mat",
	    "abs": "mutlak",
	    "acos": "akos",
	    "asin": "asin",
	    "atan": "atan",
	    "atan2": "atan2",
	    "ceil": "yukarıYuvarla",
	    "cos": "kos",
	    "exp": "eÜstü",
	    "floor": "aşağıYuvarla",
	    "log": "log",
	    "max": "büyüğü",
	    "min": "küçüğü",
	    "pow": "üssü",
	    "random": "rastgele",
	    "round": "yuvarla",
	    "sin": "sin",
	    "sqrt": "kareKökü",
	    "tan": "tan",
	    "E": "E",
	    "PI": "Pİ",
	    "LN10": "LN10",
	    "LN2": "LN2",
	    "LOG2E": "LOG2E",
	    "LOG10E": "LOG10E",
	    "SQRT1_2": "KK1_2",
	    "SQRT2": "KK2",
	    "With": "İle",
	    "Call": "Çağır",
	    "Script": "Betik",
	    "exec": "çalıştır",
	    "compile": "derle",
	    "Iterator": "Döngüleyici",
	    "next": "sonraki",
	    "__iterator__": "__döngüleyici__",
	    "StopIteration": "DöngüDurdur",
	    "RegExp": "Düzİfd",
	    "lastIndex": "sonİndis",
	    "source": "kaynak",
	    "global": "tamamında",
	    "ignoreCase": "küçükBüyükHarfDuyarsız",
	    "multiline": "çokluSatır",
	    "test": "sına",
	    "prefix": "önek",
	    "index": "indis",
	    "input": "girdi"
	}),

	'ru': invert({
	    "alert": "предупредить",
	    "show": "показать",
	    "function": "функция",
	    "if": "если",
	    "else": "иначе",
	    "for": "для",
	    "while": "пока",
	    "return": "возврат",
	    "do": "вып",
	    "true": "истина",
	    "false": "ложь",
	    "var": "пер",
	    "in": "в",
	    "let": "пусть",
	    "new": "нов",
	    "try": "проверить",
	    "case": "случай",
	    "null": "нуль",
	    "this": "этот",
	    "with": "с",
	    "break": "прервать",
	    "throw": "передать",
	    "catch": "захватить",
	    "switch": "перекл",
	    "continue": "продолжить",
	    "debugger": "отладчик",
	    "instanceof": "элемент",
	    "typeof": "тип",
	    "void": "пусто",
	    "delete": "удалить",
	    "default": "поумолчанию",
	    "finally": "вконце",
	    "int": "цел",
	    "byte": "байт",
	    "char": "символ",
	    "enum": "переч",
	    "goto": "перейти",
	    "long": "длин",
	    "const": "конст",
	    "super": "супер",
	    "class": "класс",
	    "yield": "уступить",
	    "final": "оконч",
	    "float": "плав",
	    "short": "короткое",
	    "native": "встроен",
	    "throws": "посылает",
	    "import": "импорт",
	    "double": "двойное",
	    "static": "стат",
	    "public": "общ",
	    "export": "экспорт",
	    "package": "пакет",
	    "boolean": "логич",
	    "private": "приват",
	    "extends": "расширяет",
	    "abstract": "абстрактный",
	    "volatile": "изменяемо",
	    "interface": "интерфейс",
	    "protected": "зашищ",
	    "transient": "переходный",
	    "implements": "реализует",
	    "synchronized": "синхронизирован",
	    "arguments": "аргументы",
	    "callee": "вызываемый",
	    "length": "длина",
	    "caller": "вызывающий",
	    "LIBRARY_SCOPE": "ОбластьВидимостиБиблиотеки",
	    "Function": "Функция",
	    "name": "имя",
	    "arity": "числоаргументов",
	    "prototype": "прототип",
	    "constructor": "конструктор",
	    "toString": "вСтроку",
	    "toSource": "вИсходныйТекст",
	    "apply": "применить",
	    "call": "вызвать",
	    "Object": "Объект",
	    "toLocaleString": "вСтрокуЛокализации",
	    "valueOf": "значение",
	    "hasOwnProperty": "естьСобствСвойство",
	    "propertyIsEnumerable": "свойствоПеречислимо",
	    "isPrototypeOf": "явлПрототипом",
	    "__defineGetter__": "__определитьПолучающего__",
	    "__defineSetter__": "__определитьЗадающего__",
	    "__lookupGetter__": "__найтиПолучающего__",
	    "__lookupSetter__": "__найтиЗадающего__",
	    "Error": "Ошибка",
	    "message": "сообщение",
	    "fileName": "имяФайла",
	    "lineNumber": "номерСтроки",
	    "decodeURI": "декодироватьУИР",
	    "decodeURIComponent": "декодироватьКомпонентУИР",
	    "encodeURI": "кодироватьУИР",
	    "encodeURIComponent": "кодироватьКомпонентУИР",
	    "escape": "кодсоспецсимволами",
	    "eval": "результат",
	    "isFinite": "явлКонечным",
	    "isNaN": "неЧисло",
	    "isXMLName": "явлИменемXML",
	    "parseFloat": "сПравТочкой",
	    "parseInt": "вЦелое",
	    "unescape": "преобрспецсимволы",
	    "uneval": "преобразобратно",
	    "NaN": "НеЧ",
	    "Infinity": "Бесконечность",
	    "undefined": "неопредел",
	    "ConversionError": "ОшибкаПреобразования",
	    "EvalError": "ОшибкаВычисления",
	    "RangeError": "ОшибкаДиапазона",
	    "ReferenceError": "ОшибкаУказателя",
	    "SyntaxError": "ОшибкаСинтаксиса",
	    "TypeError": "ОшибкаТипа",
	    "URIError": "ОшибкаУИР",
	    "InternalError": "ВнутренняяОшибка",
	    "JavaException": "ИсключениеJava",
	    "Array": "Массив",
	    "join": "соединить",
	    "reverse": "реверс",
	    "sort": "сортировать",
	    "push": "втолкнуть",
	    "pop": "вытолкнуть",
	    "shift": "вдвинуть",
	    "unshift": "выдвинуть",
	    "splice": "вырезать",
	    "concat": "объединить",
	    "slice": "часть",
	    "indexOf": "индекс",
	    "lastIndexOf": "последнийиндекс",
	    "every": "каждый",
	    "filter": "фильтровать",
	    "forEach": "дляКаждого",
	    "map": "отобразить",
	    "some": "какойлибо",
	    "String": "Строка",
	    "fromCharCode": "изКодаСимв",
	    "charAt": "символУ",
	    "charCodeAt": "кодСимволаУ",
	    "split": "расщепить",
	    "substring": "подстрока",
	    "toLowerCase": "вСтрочн",
	    "toUpperCase": "вЗаглавн",
	    "substr": "подстрока",
	    "bold": "жирный",
	    "italics": "наклонный",
	    "fixed": "фиксированный",
	    "strike": "ударение",
	    "small": "малый",
	    "big": "большой",
	    "blink": "мигающий",
	    "sup": "верхиндекс",
	    "sub": "нижниндекс",
	    "fontsize": "размершрифта",
	    "fontcolor": "цветшрифта",
	    "link": "связь",
	    "anchor": "привязка",
	    "equals": "равен",
	    "equalsIgnoreCase": "равенИгнорируяРегистр",
	    "match": "совпадение",
	    "search": "искать",
	    "replace": "заменить",
	    "localeCompare": "локализованоСравнить",
	    "toLocaleLowerCase": "вЛокалСтрочн",
	    "toLocaleUpperCase": "вЛокалЗаглавн",
	    "Boolean": "Булево",
	    "Number": "Число",
	    "POSITIVE_INFINITY": "ПОЛОЖИТЕЛЬНАЯ_БЕСКОНЕЧНОСТЬ",
	    "NEGATIVE_INFINITY": "ОТРИЦАТЕЛЬНАЯ_БЕСКОНЕЧНОСТЬ",
	    "MAX_VALUE": "МАКС_ВЕЛИЧИНА",
	    "MIN_VALUE": "МИН_ВЕЛИЧИНА",
	    "toFixed": "вФиксЗпт",
	    "toExponential": "вЭкспон",
	    "toPrecision": "вТочность",
	    "Date": "Дата",
	    "now": "сейчас",
	    "parse": "разобрать",
	    "UTC": "поГринвичу",
	    "toTimeString": "вСтрокуВремя",
	    "toDateString": "вСтрокуДата",
	    "toLocaleTimeString": "вСтрокуМестВремени",
	    "toLocaleDateString": "вСтрокуМестДаты",
	    "toUTCString": "вСтрокуПоГринвичу",
	    "getTime": "получитьВремя",
	    "getYear": "получитьГод",
	    "getFullYear": "получитьГодКраткий",
	    "getUTCFullYear": "получитьГодПолныйГр",
	    "getMonth": "получитьМесяц",
	    "getUTCMonth": "получитьМесяцГр",
	    "getDate": "получитьДату",
	    "getUTCDate": "получитьДатуГр",
	    "getDay": "получитьДень",
	    "getUTCDay": "получитьДеньГр",
	    "getHours": "получитьЧасы",
	    "getUTCHours": "получитьЧасыГр",
	    "getMinutes": "получитьМинуты",
	    "getUTCMinutes": "получитьМинутыГр",
	    "getSeconds": "получитьСекунды",
	    "getUTCSeconds": "получитьСекундыГр",
	    "getMilliseconds": "получитьМиллисекунды",
	    "getUTCMilliseconds": "получитьМиллисекундыГр",
	    "getTimezoneOffset": "получитьСмещениеЧП",
	    "setTime": "установитьВремя",
	    "setMilliseconds": "установитьМиллисекунды",
	    "setUTCMilliseconds": "установитьМиллисекундыГр",
	    "setSeconds": "установитьСекунды",
	    "setUTCSeconds": "установитьСекундыГр",
	    "setMinutes": "установитьМинуты",
	    "setUTCMinutes": "установитьМинутыГр",
	    "setHours": "установитьЧасы",
	    "setUTCHours": "установитьЧасыГр",
	    "setDate": "установитьДату",
	    "setUTCDate": "установитьДатуГр",
	    "setMonth": "установитьМесяц",
	    "setUTCMonth": "установитьМесяцГр",
	    "setFullYear": "установитьГодКраткий",
	    "setUTCFullYear": "установитьГодКраткийГр",
	    "setYear": "установитьГод",
	    "Math": "Математика",
	    "abs": "abs",
	    "acos": "acos",
	    "asin": "asin",
	    "atan": "atan",
	    "atan2": "atan2",
	    "ceil": "окрвверх",
	    "cos": "cos",
	    "exp": "exp",
	    "floor": "окрвниз",
	    "log": "log",
	    "max": "макс",
	    "min": "мин",
	    "pow": "степень",
	    "random": "случайное",
	    "round": "округл",
	    "sin": "sin",
	    "sqrt": "корень",
	    "tan": "tan",
	    "E": "E",
	    "PI": "ПИ",
	    "LN10": "ЛН10",
	    "LN2": "ЛН2",
	    "LOG2E": "ЛОГ2Е",
	    "LOG10E": "ЛОГ10Е",
	    "SQRT1_2": "КВКОР1_2",
	    "SQRT2": "КВКОР2",
	    "With": "С",
	    "Call": "Вызов",
	    "Script": "Скрипт",
	    "exec": "выполнить",
	    "compile": "компилировать",
	    "Iterator": "Итератор",
	    "next": "следующий",
	    "__iterator__": "__итератор__",
	    "StopIteration": "ОстановитьИтерацию",
	    "RegExp": "РегВыраж",
	    "lastIndex": "последнийИндекс",
	    "source": "источник",
	    "global": "глоб",
	    "ignoreCase": "игнорироватьРегистр",
	    "multiline": "многострочн",
	    "test": "проверить",
	    "prefix": "префикс",
	    "index": "индекс",
	    "input": "вход"
	}),

	'ro': invert({
	    "function": "funcție",
	    "if": "dacă",
	    "else": "altfel",
	    "for": "pentru",
	    "while": "câttimp",
	    "return": "întoarce",
	    "do": "execută",
	    "true": "adevărat",
	    "false": "fals",
	    "var": "var",
	    "in": "în",
	    "let": "fie",
	    "new": "nou",
	    "try": "încearcă",
	    "case": "caz",
	    "null": "nul",
	    "this": "acesta",
	    "with": "cu",
	    "break": "ieșire",
	    "throw": "aruncă",
	    "catch": "prinde",
	    "switch": "înfuncțiede",
	    "continue": "continuă",
	    "debugger": "depanator",
	    "instanceof": "instanță",
	    "typeof": "tip",
	    "void": "vid",
	    "delete": "șterge",
	    "default": "implicit",
	    "finally": "înfiinal",
	    "int": "int",
	    "byte": "octet",
	    "char": "caracter",
	    "enum": "mulțime",
	    "goto": "mergila",
	    "long": "lung",
	    "const": "const",
	    "super": "super",
	    "class": "clasă",
	    "yield": "cedează",
	    "final": "final",
	    "float": "real",
	    "short": "scurt",
	    "native": "nativ",
	    "throws": "aruncă",
	    "import": "importă",
	    "double": "dublu",
	    "static": "static",
	    "public": "public",
	    "export": "exportă",
	    "package": "pachet",
	    "boolean": "bulean",
	    "private": "privat",
	    "extends": "extinde",
	    "abstract": "abstract",
	    "volatile": "volatil",
	    "interface": "interfață",
	    "protected": "protejat",
	    "transient": "tranzitoriu",
	    "implements": "implementează",
	    "synchronized": "sincronizat",
	    "arguments": "argumente",
	    "callee": "apelat",
	    "length": "lungime",
	    "caller": "apelant",
	    "LIBRARY_SCOPE": "VIZIBILITATE_BIBLIOTECĂ",
	    "Function": "Funcție",
	    "name": "nume",
	    "arity": "aritate",
	    "prototype": "prototip",
	    "constructor": "constructor",
	    "toString": "cătreȘirCaractere",
	    "toSource": "cătreSursă",
	    "apply": "aplică",
	    "call": "apelează",
	    "Object": "Obiect",
	    "toLocaleString": "cătreȘirCaractereFormaLocală",
	    "valueOf": "valoareaA",
	    "hasOwnProperty": "areProprietateaSa",
	    "propertyIsEnumerable": "proprietateaEsteEnumerabilă",
	    "isPrototypeOf": "estePrototipAl",
	    "__defineGetter__": "__defineșteCititor__",
	    "__defineSetter__": "__defineșteScriitor__",
	    "__lookupGetter__": "__cautăCititor__",
	    "__lookupSetter__": "__cautăScriitor__",
	    "Error": "Eroare",
	    "message": "mesaj",
	    "fileName": "numeFișier",
	    "lineNumber": "numărLinie",
	    "decodeURI": "decodificăURI",
	    "decodeURIComponent": "decodificăComponentăURI",
	    "encodeURI": "codificăURI",
	    "encodeURIComponent": "codificăComponentăURI",
	    "escape": "salvare",
	    "eval": "eval",
	    "isFinite": "esteFinit",
	    "isNaN": "esteNEN",
	    "isXMLName": "esteNumeXML",
	    "parseFloat": "parseazăReal",
	    "parseInt": "parseazăÎntreg",
	    "unescape": "dessalvare",
	    "uneval": "deseval",
	    "NaN": "NEN",
	    "Infinity": "Infinit",
	    "undefined": "nedefinit",
	    "ConversionError": "EroareConversie",
	    "EvalError": "EroareEvaluare",
	    "RangeError": "EroareDomeniu",
	    "ReferenceError": "EroareReferință",
	    "SyntaxError": "EroareSintaxă",
	    "TypeError": "EroareTip",
	    "URIError": "EroareURI",
	    "InternalError": "EroareInternă",
	    "JavaException": "ExcepțieJava",
	    "Array": "Tablou",
	    "join": "combină",
	    "reverse": "invers",
	    "sort": "sortează",
	    "push": "adaugă",
	    "pop": "scoate",
	    "shift": "deplasează",
	    "unshift": "dedeplasează",
	    "splice": "lipește",
	    "concat": "concatenează",
	    "slice": "taie",
	    "indexOf": "indexAl",
	    "lastIndexOf": "ultimulIndexAl",
	    "every": "toate",
	    "filter": "filtru",
	    "forEach": "pentruFiecare",
	    "map": "asociază",
	    "some": "câțiva",
	    "String": "ȘirCaractere",
	    "fromCharCode": "dinCodCaracter",
	    "charAt": "caracterLa",
	    "charCodeAt": "codCaracterLa",
	    "split": "separă",
	    "substring": "subșir",
	    "toLowerCase": "cătreLitereMici",
	    "toUpperCase": "cătreLitereMari",
	    "substr": "subșir",
	    "bold": "îngroșat",
	    "italics": "aplecat",
	    "fixed": "fixat",
	    "strike": "tăiat",
	    "small": "mic",
	    "big": "mare",
	    "blink": "clipește",
	    "sup": "sup",
	    "sub": "sub",
	    "fontsize": "mărimefont",
	    "fontcolor": "culoarefont",
	    "link": "legătură",
	    "anchor": "ancoră",
	    "equals": "esteegal",
	    "equalsIgnoreCase": "esteegalIgnorăMajuscule",
	    "match": "potrivește",
	    "search": "caută",
	    "replace": "înlocuiește",
	    "localeCompare": "comparăFormaLocală",
	    "toLocaleLowerCase": "cătreLitereMiciFormaLocală",
	    "toLocaleUpperCase": "cătreLitereMariFormaLocală",
	    "Boolean": "Bulean",
	    "Number": "Număr",
	    "POSITIVE_INFINITY": "PLUS_INFINIT",
	    "NEGATIVE_INFINITY": "MINUS_INFINIT",
	    "MAX_VALUE": "VALOARE_MAXIMĂ",
	    "MIN_VALUE": "VALOARE_MINIMĂ",
	    "toFixed": "cătreFixat",
	    "toExponential": "cătreExponențial",
	    "toPrecision": "cătrePrecizie",
	    "Date": "Data",
	    "now": "acum",
	    "parse": "parsează",
	    "UTC": "UTC",
	    "toTimeString": "cătreTimpȘirCaractere",
	    "toDateString": "cătreDatăȘirCaractere",
	    "toLocaleTimeString": "cătreTimpȘirCaractereFormaLocală",
	    "toLocaleDateString": "cătreDatăȘirCaractereFormaLocală",
	    "toUTCString": "cătreUTCȘirCaractere",
	    "getTime": "citeșteTimp",
	    "getYear": "citeșteAn",
	    "getFullYear": "citeșteAnComplet",
	    "getUTCFullYear": "citeșteAnCompletUTC",
	    "getMonth": "citeșteLună",
	    "getUTCMonth": "citeșteLunăUTC",
	    "getDate": "citeșteDată",
	    "getUTCDate": "citeșteDatăUTC",
	    "getDay": "citeșteZi",
	    "getUTCDay": "citeșteZiUTC",
	    "getHours": "citeșteOră",
	    "getUTCHours": "citeșteOrăUTC",
	    "getMinutes": "citeșteMinute",
	    "getUTCMinutes": "citeșteMinuteUTC",
	    "getSeconds": "citeșteSecunde",
	    "getUTCSeconds": "citeșteSecundeUTC",
	    "getMilliseconds": "citeșteMilisecunde",
	    "getUTCMilliseconds": "citeșteMilisecundeUTC",
	    "getTimezoneOffset": "citeșteDiferentăFusOrar",
	    "setTime": "scrieTimp",
	    "setMilliseconds": "scrieMilisecunde",
	    "setUTCMilliseconds": "scrieMilisecundeUTC",
	    "setSeconds": "scrieSecunde",
	    "setUTCSeconds": "scrieSecundeUTC",
	    "setMinutes": "scrieMinute",
	    "setUTCMinutes": "scrieMinuteUTC",
	    "setHours": "scrieOră",
	    "setUTCHours": "scrieOrăUTC",
	    "setDate": "scrieDată",
	    "setUTCDate": "scrieDatăUTC",
	    "setMonth": "scrieLună",
	    "setUTCMonth": "scrieLunăUTC",
	    "setFullYear": "scrieAnComplet",
	    "setUTCFullYear": "scrieAnCompletUTC",
	    "setYear": "scrieAn1900",
	    "Math": "Math",
	    "abs": "modulo",
	    "acos": "acos",
	    "asin": "asin",
	    "atan": "atan",
	    "atan2": "atan2",
	    "ceil": "ceil",
	    "cos": "cos",
	    "exp": "exp",
	    "floor": "floor",
	    "log": "log",
	    "max": "max",
	    "min": "min",
	    "pow": "putere",
	    "random": "aleator",
	    "round": "rontunjește",
	    "sin": "sin",
	    "sqrt": "radical",
	    "tan": "tan",
	    "E": "E",
	    "PI": "PI",
	    "LN10": "LN10",
	    "LN2": "LN2",
	    "LOG2E": "LOG2E",
	    "LOG10E": "LOG10E",
	    "SQRT1_2": "RADICAL1_2",
	    "SQRT2": "RADICAL2",
	    "With": "",
	    "Call": "",
	    "Script": "Script",
	    "exec": "exec",
	    "compile": "compilează",
	    "Iterator": "Iterator",
	    "next": "următorul",
	    "__iterator__": "__iterator__",
	    "StopIteration": "OpreșteIterație",
	    "RegExp": "ExpRegulată",
	    "lastIndex": "ultimulIndex",
	    "source": "sursă",
	    "global": "global",
	    "ignoreCase": "ingnoraMajuscule",
	    "multiline": "multilinie",
	    "test": "test",
	    "prefix": "prefix",
	    "index": "indice",
	    "input": "intrare"
	}),

	'ko': invert({
	    "alert": "알림",
	    "show": "표시",
	    "function": "함수",
	    "if": "만약",
	    "else": "아니면",
	    "for": "반복",
	    "while": "동안",
	    "return": "반환",
	    "do": "실행",
	    "true": "참",
	    "false": "거짓",
	    "var": "변수",
	    "in": "가운데",
	    "let": "정의",
	    "new": "새로",
	    "try": "시행",
	    "case": "경우",
	    "null": "널",
	    "this": "자신",
	    "with": "하위",
	    "break": "정지",
	    "throw": "스로우",
	    "catch": "캣치",
	    "switch": "스위치",
	    "continue": "계속",
	    "debugger": "디버거",
	    "void": "무",
	    "delete": "삭제",
	    "default": "기본값",
	    "finally": "최종",
	    "int": "정수",
	    "byte": "바이트",
	    "char": "문자",
	    "enum": "열거",
	    "goto": "이행",
	    "long": "큰정수",
	    "const": "상수",
	    "super": "슈퍼",
	    "class": "클래스",
	    "yield": "양보",
	    "final": "최종",
	    "float": "실수",
	    "short": "작은정수",
	    "native": "고유",
	    "throws": "스로우",
	    "import": "반입",
	    "double": "정확실수",
	    "static": "정적",
	    "public": "공동",
	    "export": "반출",
	    "package": "패키지",
	    "boolean": "논리",
	    "private": "내부",
	    "extends": "확장",
	    "abstract": "추상",
	    "volatile": "휘발성",
	    "interface": "대면",
	    "protected": "보호",
	    "transient": "일시적인",
	    "implements": "구현하다",
	    "synchronized": "동기화된",
	    "arguments": "인수",
	    "callee": "호출이",
	    "length": "길이",
	    "caller": "호출자",
	    "LIBRARY_SCOPE": "서고_범위",
	    "Function": "함수",
	    "name": "이름",
	    "arity": "항수",
	    "prototype": "원형",
	    "constructor": "구축자",
	    "toString": "문자열화",
	    "toSource": "소스화",
	    "apply": "적용",
	    "call": "호출",
	    "Object": "오브젝트",
	    "toLocaleString": "지역문자열화",
	    "valueOf": "타입변환",
	    "hasOwnProperty": "유속성",
	    "propertyIsEnumerable": "유속성열거",
	    "isPrototypeOf": "의프로퍼타입",
	    "__defineGetter__": "_얻기자정의_",
	    "__defineSetter__": "_설정자정의_",
	    "__lookupGetter__": "_얻기자검사_",
	    "__lookupSetter__": "_설정자검사_",
	    "Error": "오류",
	    "message": "메세지",
	    "fileName": "파일이름",
	    "lineNumber": "행번호",
	    "decodeURI": "URI디코드",
	    "decodeURIComponent": "URI콤퍼넌트디코드",
	    "encodeURI": "URI인코드",
	    "encodeURIComponent": "URI콤퍼넌트인코드",
	    "escape": "이스게이프",
	    "eval": "수식화",
	    "isFinite": "유무한",
	    "isNaN": "비수",
	    "isXMLName": "XML이름",
	    "parseFloat": "실수변형",
	    "parseInt": "정수변형",
	    "unescape": "언이스케이프",
	    "uneval": "비수식화",
	    "NaN": "비수값",
	    "Infinity": "무한",
	    "undefined": "미정의",
	    "ConversionError": "변환오류",
	    "EvalError": "수식화오류",
	    "RangeError": "범위오류",
	    "ReferenceError": "참조오류",
	    "SyntaxError": "문법오류",
	    "TypeError": "형오류",
	    "URIError": "URI오류",
	    "InternalError": "내부오류",
	    "JavaException": "자바예외",
	    "Array": "배열",
	    "join": "결합",
	    "reverse": "역",
	    "sort": "정렬",
	    "push": "푸시",
	    "pop": "팝",
	    "shift": "쉬프트",
	    "unshift": "역쉬프트",
	    "splice": "스플라이스",
	    "concat": "결합",
	    "slice": "슬라이스",
	    "indexOf": "색인",
	    "lastIndexOf": "마지막색인",
	    "every": "모두",
	    "filter": "여과",
	    "forEach": "요소반복",
	    "map": "대응",
	    "some": "여러개",
	    "String": "문자열",
	    "fromCharCode": "코드로부터문자",
	    "charAt": "문자추출",
	    "charCodeAt": "문자코드",
	    "split": "분할",
	    "substring": "부분문자열",
	    "toLowerCase": "소문자화",
	    "toUpperCase": "대문자화",
	    "substr": "부분문자",
	    "bold": "굵음",
	    "italics": "사선",
	    "fixed": "고정",
	    "strike": "취소선",
	    "small": "작음",
	    "big": "큼",
	    "blink": "깜박",
	    "sup": "아래첨자",
	    "sub": "위첨자",
	    "fontsize": "서체크기",
	    "fontcolor": "서체색갈",
	    "link": "링크",
	    "anchor": "앵코",
	    "equals": "같기",
	    "equalsIgnoreCase": "대소문없이같기",
	    "match": "일치",
	    "search": "검색",
	    "replace": "교환",
	    "localeCompare": "지역비교",
	    "toLocaleLowerCase": "지역소문자화",
	    "toLocaleUpperCase": "지역대문자화",
	    "Boolean": "블린",
	    "Number": "수",
	    "POSITIVE_INFINITY": "양의무한",
	    "NEGATIVE_INFINITY": "음의무한",
	    "MAX_VALUE": "최대값",
	    "MIN_VALUE": "최소값",
	    "toFixed": "고정소수점화",
	    "toExponential": "지수문자화",
	    "toPrecision": "유호숫자문자화",
	    "Date": "날자",
	    "now": "현재",
	    "parse": "분석",
	    "UTC": "UTC",
	    "toTimeString": "시간문자열화",
	    "toDateString": "날자문자열화",
	    "toLocaleTimeString": "지역시간문자열화",
	    "toLocaleDateString": "지역날자문자열화",
	    "toUTCString": "UTC문자열화",
	    "getTime": "시간얻기",
	    "getYear": "년도얻기",
	    "getFullYear": "넷자리년도얻기",
	    "getUTCFullYear": "UTC년도얻기",
	    "getMonth": "월얻기",
	    "getUTCMonth": "UTC월얻기",
	    "getDate": "날짜얻기",
	    "getUTCDate": "UTC날짜얻기",
	    "getDay": "일얻기",
	    "getUTCDay": "UTC일얻기",
	    "getHours": "시간얻기",
	    "getUTCHours": "UTC시간얻기",
	    "getMinutes": "분얻기",
	    "getUTCMinutes": "UTC분얻기",
	    "getSeconds": "초얻기",
	    "getUTCSeconds": "UTC초얻기",
	    "getMilliseconds": "밀리초얻기",
	    "getUTCMilliseconds": "UTC밀리초얻기",
	    "getTimezoneOffset": "표준시간차얻기",
	    "setTime": "시간설정",
	    "setMilliseconds": "밀리초설정",
	    "setUTCMilliseconds": "UTC밀리초설정",
	    "setSeconds": "초설정",
	    "setUTCSeconds": "UTC초설정",
	    "setMinutes": "분설정",
	    "setUTCMinutes": "UTC분설정",
	    "setHours": "시간설정",
	    "setUTCHours": "UTC시간설정",
	    "setDate": "날짜설정",
	    "setUTCDate": "UTC날짜설정",
	    "setMonth": "월설정",
	    "setUTCMonth": "UTC월설정",
	    "setFullYear": "넷자리년도설정",
	    "setUTCFullYear": "UTC년호설정",
	    "setYear": "년설정",
	    "Math": "수학",
	    "abs": "절대값",
	    "acos": "acos",
	    "asin": "asin",
	    "atan": "atan",
	    "atan2": "atan2",
	    "ceil": "ceil",
	    "cos": "cos",
	    "exp": "exp",
	    "floor": "floor",
	    "log": "log",
	    "max": "최대",
	    "min": "최소",
	    "pow": "제곱",
	    "random": "난수",
	    "round": "반올림",
	    "sin": "sin",
	    "sqrt": "sqrt",
	    "tan": "tan",
	    "E": "E",
	    "PI": "PI",
	    "LN10": "LN10",
	    "LN2": "LN2",
	    "LOG2E": "LOG2E",
	    "LOG10E": "LOG10E",
	    "SQRT1_2": "SQRT1_2",
	    "SQRT2": "SQRT2",
	    "With": "와",
	    "Call": "호출",
	    "Script": "스크립트",
	    "exec": "범용매칭",
	    "compile": "컴파일",
	    "Iterator": "반복자",
	    "next": "다음",
	    "__iterator__": "_반복자_",
	    "StopIteration": "반복정지",
	    "RegExp": "정규화",
	    "lastIndex": "마지막색인",
	    "source": "소스",
	    "global": "글로벌",
	    "ignoreCase": "대소문자무시",
	    "multiline": "다중행",
	    "test": "시험",
	    "prefix": "접두사",
	    "index": "색인",
	    "input": "입력"
	}),

	'hi': invert({
	    "alert": "सावधान",
	    "show": "निर्देश",
	    "function": "फलन",
	    "if": "अगर",
	    "else": "अन्यथा",
	    "for": "के_लिए",
	    "while": "जब_तक",
	    "return": "लौटा",
	    "do": "कर",
	    "true": "सही",
	    "false": "ग़लत",
	    "var": "चर",
	    "in": "में",
	    "let": "मानो",
	    "new": "नया",
	    "try": "आज़माओ",
	    "case": "विकल्प",
	    "null": "रिक्त",
	    "this": "यह",
	    "with": "साथ",
	    "break": "अवरोध",
	    "throw": "फेंक",
	    "catch": "पकड़",
	    "switch": "चयन",
	    "continue": "जारी",
	    "debugger": "डीबगर",
	    "instanceof": "अवतार",
	    "typeof": "का_प्रकार",
	    "void": "ख़ाली",
	    "delete": "मिटा",
	    "default": "मूलभूत",
	    "finally": "अंत_में",
	    "int": "पूर्णांक",
	    "byte": "बाइट",
	    "char": "अक्षर",
	    "enum": "परिगणना",
	    "goto": "जाओ",
	    "long": "दीर्घ",
	    "const": "अचर",
	    "super": "सूपर",
	    "class": "वर्ग",
	    "yield": "उपज",
	    "final": "अंतिम",
	    "float": "दाशमिक",
	    "short": "लघु",
	    "native": "देशी",
	    "throws": "फेंकता_है",
	    "import": "आयात",
	    "double": "दूना",
	    "static": "स्थिर",
	    "public": "सार्वजनिक",
	    "export": "निर्यात",
	    "package": "संकुल",
	    "boolean": "बूलीय",
	    "private": "निजी",
	    "extends": "विस्तृत_करता_है",
	    "abstract": "निराकार",
	    "volatile": "परिवर्तनशील",
	    "interface": "ढांचा",
	    "protected": "संरक्षित",
	    "transient": "क्षणिक",
	    "implements": "लागू_करता_है",
	    "synchronized": "समकालिक",
	    "arguments": "कोणांक",
	    "callee": "आह्वानित",
	    "length": "माप",
	    "caller": "आवाहक",
	    "LIBRARY_SCOPE": "संग्रह_क्षेत्र",
	    "Function": "_फलन",
	    "name": "नाम",
	    "arity": "कोणांक_गिनती",
	    "prototype": "प्रारुप",
	    "constructor": "संरचक",
	    "toString": "वर्णमाला_में",
	    "toSource": "स्रोत_में",
	    "apply": "आवेदन",
	    "call": "आह्वान",
	    "Object": "ऑब्जेक्ट",
	    "toLocaleString": "स्थानीय_वर्णमाला_में",
	    "valueOf": "का_मूल्य",
	    "hasOwnProperty": "खुद_का_लक्षण_है",
	    "propertyIsEnumerable": "लक्षण_गणनीय_है",
	    "isPrototypeOf": "का_प्रारुप_है",
	    "__defineGetter__": "_पाठक_परिभाषित_करे_",
	    "__defineSetter__": "_लेखक_परिभाषित_करे_",
	    "__lookupGetter__": "_पाठक_खोजे_",
	    "__lookupSetter__": "_लेखक_खोजे_",
	    "Error": "त्रुटि",
	    "message": "संदेश",
	    "fileName": "फ़ाइल_नाम",
	    "lineNumber": "पंक्ति_क्रम",
	    "decodeURI": "कूटवचन_यूआरआइ",
	    "decodeURIComponent": "कूटवचन_यूआरआइ_घटक",
	    "encodeURI": "कूटलेखन_यूआरआइ",
	    "encodeURIComponent": "कूटलेखन_यूआरआइ_घटक",
	    "escape": "खारिज",
	    "eval": "मूल्यांकन",
	    "isFinite": "परिमित_है",
	    "isNaN": "अंक_न_है",
	    "isXMLName": "एक्सएमएल_नाम_है",
	    "unescape": "अ_खारिज",
	    "uneval": "अ_मूल्यांकन",
	    "NaN": "अंक_नही",
	    "Infinity": "अपरिमितता",
	    "undefined": "अपरिभाषित",
	    "ConversionError": "रूपांतरण_त्रुटी",
	    "EvalError": "मूल्यांकन_त्रुटी",
	    "RangeError": "सीमा_त्रुटी",
	    "ReferenceError": "संदर्भ_त्रुटी",
	    "SyntaxError": "वाक्य_रचना_त्रुटी",
	    "TypeError": "प्रकार_त्रुटी",
	    "URIError": "यूआरआइ_त्रुटी",
	    "InternalError": "आंतरिक_त्रुटी",
	    "JavaException": "जावा_आपत्ति",
	    "Array": "_व्यूह",
	    "join": "संलग्न",
	    "reverse": "उलटा",
	    "sort": "श्रेणीकरण",
	    "push": "धकेल",
	    "pop": "निकाल",
	    "shift": "खिसका",
	    "unshift": "अ_खिसका",
	    "splice": "सांठना",
	    "concat": "जोड़",
	    "slice": "फांक",
	    "indexOf": "का_सूचकांक",
	    "lastIndexOf": "का_अंतिम_सूचकांक",
	    "every": "प्रत्येक",
	    "filter": "निथारना",
	    "forEach": "प्रत्येक_के_लिए",
	    "map": "मिलान",
	    "some": "कुछ",
	    "String": "वर्णमाला",
	    "fromCharCode": "अक्षर_संकेत_में_से",
	    "charAt": "पर_अक्षर",
	    "charCodeAt": "पर_अक्षर_संकेत",
	    "split": "विभाजित",
	    "substring": "उप_वर्णमाला",
	    "toLowerCase": "निच्लि_धानी_में",
	    "toUpperCase": "ऊपरी_धानी_में",
	    "substr": "उप_वर्ण",
	    "bold": "मोटा",
	    "italics": "तिर्छा",
	    "fixed": "नियत",
	    "strike": "कटा",
	    "small": "छोटा",
	    "big": "बड़ा",
	    "blink": "झपक",
	    "sup": "उपरिलिखित",
	    "sub": "अधोलिखित",
	    "fontsize": "मुद्र_आकार",
	    "fontcolor": "मुद्र_रंग",
	    "link": "कड़ी",
	    "anchor": "लंगर",
	    "equals": "समान",
	    "equalsIgnoreCase": "समान_धानी_उपेक्षित",
	    "match": "मेल",
	    "search": "खोज",
	    "replace": "प्रतिस्थापन",
	    "localeCompare": "स्थानीय_तुलना",
	    "toLocaleLowerCase": "स्थानीय_निच्लि_धानी_में",
	    "toLocaleUpperCase": "स्थानीय_ऊपरी_धानी_में",
	    "Boolean": "_बूलीय",
	    "Number": "_अंक",
	    "POSITIVE_INFINITY": "घनात्मक_अपरिमितता",
	    "NEGATIVE_INFINITY": "ऋणात्मक_अपरिमितता",
	    "MAX_VALUE": "अधिकतम_मूल्य",
	    "MIN_VALUE": "न्यूनतम_मूल्य",
	    "toFixed": "नियत_में",
	    "toExponential": "चरघातांकी_में",
	    "toPrecision": "परिशुद्धता_में",
	    "Date": "_दिनांक",
	    "now": "अभी",
	    "parse": "पदच्छेद",
	    "UTC": "यूटीसी",
	    "toTimeString": "समय_वर्णमाला_में",
	    "toDateString": "दिनांक_वर्णमाला_में",
	    "toLocaleTimeString": "स्थानीय_समय_वर्णमाला_में",
	    "toLocaleDateString": "स्थानीय_दिनांक_वर्णमाला_में",
	    "toUTCString": "यूटीसी_वर्णमाला_में",
	    "getTime": "पाठ_समय",
	    "getYear": "पाठ_साल",
	    "getFullYear": "पाठ_पूरा_साल",
	    "getUTCFullYear": "पाठ_यूटीसी_पूरा_साल",
	    "getMonth": "पाठ_माह",
	    "getUTCMonth": "पाठ_यूटीसी_माह",
	    "getDate": "पाठ_दिनांक",
	    "getUTCDate": "पाठ_यूटीसी_दिनांक",
	    "getDay": "पाठ_दिन",
	    "getUTCDay": "पाठ_यूटीसी_दिन",
	    "getHours": "पाठ_घंटे",
	    "getUTCHours": "पाठ_यूटीसी_घंटे",
	    "getMinutes": "पाठ_मिनट",
	    "getUTCMinutes": "पाठ_यूटीसी_मिनट",
	    "getSeconds": "पाठ_सेकंड",
	    "getUTCSeconds": "पाठ_यूटीसी_सेकंड",
	    "getMilliseconds": "पाठ_मिसे",
	    "getUTCMilliseconds": "पाठ_यूटीसी_मिसे",
	    "getTimezoneOffset": "पाठ_समयक्षेत्र_अन्तर्लम्ब",
	    "setTime": "लेख_समय",
	    "setMilliseconds": "लेख_मिसे",
	    "setUTCMilliseconds": "लेख_यूटीसी_मिसे",
	    "setSeconds": "लेख_सेकंड",
	    "setUTCSeconds": "लेख_यूटीसी_सेकंड",
	    "setMinutes": "लेख_मिनट",
	    "setUTCMinutes": "लेख_यूटीसी_मिनट",
	    "setHours": "लेख_घंटे",
	    "setUTCHours": "लेख_यूटीसी_घंटे",
	    "setDate": "लेख_तारीख",
	    "setUTCDate": "लेख_यूटीसी_दिनांक",
	    "setMonth": "लेख_माह",
	    "setUTCMonth": "लेख_यूटीसी_माह",
	    "setFullYear": "लेख_पूरा_साल",
	    "setUTCFullYear": "लेख_यूटीसी_पूरा_साल",
	    "setYear": "लेख_साल",
	    "Math": "गणित",
	    "abs": "निरपेक्ष",
	    "acos": "चा_कोज्या",
	    "asin": "चा_ज्या",
	    "atan": "चा_स्पज्या",
	    "atan2": "चा_स्पज्या२",
	    "ceil": "अंतश्छद",
	    "cos": "कोज्या",
	    "exp": "ई_की_घात",
	    "floor": "गृहतल",
	    "log": "लघुगणक",
	    "max": "अधिकतम",
	    "min": "न्यूनतम",
	    "pow": "घात",
	    "random": "क्रमरहित",
	    "round": "पूर्णांक_बनाओ",
	    "sin": "ज्या",
	    "sqrt": "वर्गमूल",
	    "tan": "स्पज्या",
	    "E": "ई",
	    "PI": "पाइ",
	    "LN10": "प्रा_लघुग१०",
	    "LN2": "प्रा_लघुग२",
	    "LOG2E": "लघुगणक२E",
	    "LOG10E": "लघुगणक१०E",
	    "SQRT1_2": "वर्गमूल१_२",
	    "SQRT2": "वर्गमूल२",
	    "With": "_साथ",
	    "Call": "_आह्वान",
	    "Script": "लिपि",
	    "exec": "निष्पादित",
	    "compile": "संकलन",
	    "Iterator": "_पुनरावर्तक",
	    "next": "अगला",
	    "__iterator__": "_पुनरावर्तक_",
	    "StopIteration": "_पुनरावृत्ति_बंद",
	    "RegExp": "_नियमित_व्‍यंजक",
	    "lastIndex": "अंतिम_सूचकांक",
	    "source": "स्रोत",
	    "global": "वैश्विक",
	    "ignoreCase": "धानी_उपेक्षा",
	    "multiline": "बहु_पंक्ति",
	    "test": "परीक्षण",
	    "prefix": "उपसर्ग",
	    "index": "सूची",
	    "input": "निवेश"
	}),

	'zh': invert({
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
        
        'fi': {
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

    var inverted = {};
    for (var i in localeMappings) {
	inverted[i] = invert(localeMappings[i]);
    }

    var prettyPrint = function(tokens, locale) {
        var strings = [];
        var indent = "";
        var loc, iloc;
        if (locale != null) {
            loc = JSI18N.localeMappings[locale];
            iloc = JSI18N.invertedMappings[locale];
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
                    if (locale != null) {
			if (iloc[token.id]) {
                            string = token.value.replace(/\S+/, iloc[token.id]);
			}
                    } else {
                        string = token.value.replace(/\S+/, id);
                    }
                } else if (loc !== undefined && loc[token.id] && loc[token.id] !== token.id) {
		    // Namespace collision.
		    // The delocalised code uses a localised reserved word as an identifier.
		    // Escape the reserved word.
		    string = token.value.replace(/\S+/, token.id+'ಠ_ಠ');
		    console.log(token.id);
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
	invertedMappings: inverted,
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


/*
  Copyright (C) 2012 Ariya Hidayat <ariya.hidayat@gmail.com>
  Copyright (C) 2012 Mathias Bynens <mathias@qiwi.be>
  Copyright (C) 2012 Joost-Wim Boekesteijn <joost-wim@boekesteijn.nl>
  Copyright (C) 2012 Kris Kowal <kris.kowal@cixar.com>
  Copyright (C) 2012 Yusuke Suzuki <utatane.tea@gmail.com>
  Copyright (C) 2012 Arpad Borsos <arpad.borsos@googlemail.com>
  Copyright (C) 2011 Ariya Hidayat <ariya.hidayat@gmail.com>

  Redistribution and use in source and binary forms, with or without
  modification, are permitted provided that the following conditions are met:

    * Redistributions of source code must retain the above copyright
      notice, this list of conditions and the following disclaimer.
    * Redistributions in binary form must reproduce the above copyright
      notice, this list of conditions and the following disclaimer in the
      documentation and/or other materials provided with the distribution.

  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
  AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
  IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
  ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
  DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
  (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
  LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
  ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
  (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
  THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

/*jslint bitwise:true plusplus:true */
/*global esprima:true, exports:true,
throwError: true, createLiteral: true, generateStatement: true,
parseAssignmentExpression: true, parseBlock: true, parseExpression: true,
parseFunctionDeclaration: true, parseFunctionExpression: true,
parseFunctionSourceElements: true, parseVariableIdentifier: true,
parseLeftHandSideExpression: true,
parseStatement: true, parseSourceElement: true */

(function (exports) {
    'use strict';

    var Token,
        TokenName,
        Syntax,
        PropertyKind,
        Messages,
        Regex,
        source,
        allowIn,
        lastParenthesized,
        strict,
        index,
        lineNumber,
        lineStart,
        length,
        buffer,
        extra,
        labelSet,
        inIteration,
        inSwitch,
        inFunctionBody;

    Token = {
        BooleanLiteral: 1,
        EOF: 2,
        Identifier: 3,
        Keyword: 4,
        NullLiteral: 5,
        NumericLiteral: 6,
        Punctuator: 7,
        StringLiteral: 8
    };

    TokenName = {};
    TokenName[Token.BooleanLiteral] = 'Boolean';
    TokenName[Token.EOF] = '<end>';
    TokenName[Token.Identifier] = 'Identifier';
    TokenName[Token.Keyword] = 'Keyword';
    TokenName[Token.NullLiteral] = 'Null';
    TokenName[Token.NumericLiteral] = 'Numeric';
    TokenName[Token.Punctuator] = 'Punctuator';
    TokenName[Token.StringLiteral] = 'String';

    Syntax = {
        AssignmentExpression: 'AssignmentExpression',
        ArrayExpression: 'ArrayExpression',
        BlockStatement: 'BlockStatement',
        BinaryExpression: 'BinaryExpression',
        BreakStatement: 'BreakStatement',
        CallExpression: 'CallExpression',
        CatchClause: 'CatchClause',
        ConditionalExpression: 'ConditionalExpression',
        ContinueStatement: 'ContinueStatement',
        DoWhileStatement: 'DoWhileStatement',
        DebuggerStatement: 'DebuggerStatement',
        EmptyStatement: 'EmptyStatement',
        ExpressionStatement: 'ExpressionStatement',
        ForStatement: 'ForStatement',
        ForInStatement: 'ForInStatement',
        FunctionDeclaration: 'FunctionDeclaration',
        FunctionExpression: 'FunctionExpression',
        Identifier: 'Identifier',
        IfStatement: 'IfStatement',
        Literal: 'Literal',
        LabeledStatement: 'LabeledStatement',
        LogicalExpression: 'LogicalExpression',
        MemberExpression: 'MemberExpression',
        NewExpression: 'NewExpression',
        ObjectExpression: 'ObjectExpression',
        Program: 'Program',
        Property: 'Property',
        ReturnStatement: 'ReturnStatement',
        SequenceExpression: 'SequenceExpression',
        SwitchStatement: 'SwitchStatement',
        SwitchCase: 'SwitchCase',
        ThisExpression: 'ThisExpression',
        ThrowStatement: 'ThrowStatement',
        TryStatement: 'TryStatement',
        UnaryExpression: 'UnaryExpression',
        UpdateExpression: 'UpdateExpression',
        VariableDeclaration: 'VariableDeclaration',
        VariableDeclarator: 'VariableDeclarator',
        WhileStatement: 'WhileStatement',
        WithStatement: 'WithStatement'
    };

    PropertyKind = {
        Data: 1,
        Get: 2,
        Set: 4
    };

    // Error messages should be identical to V8.
    Messages = {
        UnexpectedToken:  'Unexpected token %0',
        UnexpectedNumber:  'Unexpected number',
        UnexpectedString:  'Unexpected string',
        UnexpectedIdentifier:  'Unexpected identifier',
        UnexpectedReserved:  'Unexpected reserved word',
        UnexpectedEOS:  'Unexpected end of input',
        NewlineAfterThrow:  'Illegal newline after throw',
        InvalidRegExp: 'Invalid regular expression',
        UnterminatedRegExp:  'Invalid regular expression: missing /',
        InvalidLHSInAssignment:  'Invalid left-hand side in assignment',
        InvalidLHSInForIn:  'Invalid left-hand side in for-in',
        NoCatchOrFinally:  'Missing catch or finally after try',
        UnknownLabel: 'Undefined label \'%0\'',
        Redeclaration: '%0 \'%1\' has already been declared',
        IllegalContinue: 'Illegal continue statement',
        IllegalBreak: 'Illegal break statement',
        IllegalReturn: 'Illegal return statement',
        StrictModeWith:  'Strict mode code may not include a with statement',
        StrictCatchVariable:  'Catch variable may not be eval or arguments in strict mode',
        StrictVarName:  'Variable name may not be eval or arguments in strict mode',
        StrictParamName:  'Parameter name eval or arguments is not allowed in strict mode',
        StrictParamDupe: 'Strict mode function may not have duplicate parameter names',
        StrictFunctionName:  'Function name may not be eval or arguments in strict mode',
        StrictOctalLiteral:  'Octal literals are not allowed in strict mode.',
        StrictDelete:  'Delete of an unqualified identifier in strict mode.',
        StrictDuplicateProperty:  'Duplicate data property in object literal not allowed in strict mode',
        AccessorDataProperty:  'Object literal may not have data and accessor property with the same name',
        AccessorGetSet:  'Object literal may not have multiple get/set accessors with the same name',
        StrictLHSAssignment:  'Assignment to eval or arguments is not allowed in strict mode',
        StrictLHSPostfix:  'Postfix increment/decrement may not have eval or arguments operand in strict mode',
        StrictLHSPrefix:  'Prefix increment/decrement may not have eval or arguments operand in strict mode',
        StrictReservedWord:  'Use of future reserved word in strict mode'
    };

    // See also tools/generate-unicode-regex.py.
    Regex = {
        NonAsciiIdentifierStart: new RegExp('[\xaa\xb5\xba\xc0-\xd6\xd8-\xf6\xf8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0370-\u0374\u0376\u0377\u037a-\u037d\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u048a-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05d0-\u05ea\u05f0-\u05f2\u0620-\u064a\u066e\u066f\u0671-\u06d3\u06d5\u06e5\u06e6\u06ee\u06ef\u06fa-\u06fc\u06ff\u0710\u0712-\u072f\u074d-\u07a5\u07b1\u07ca-\u07ea\u07f4\u07f5\u07fa\u0800-\u0815\u081a\u0824\u0828\u0840-\u0858\u08a0\u08a2-\u08ac\u0904-\u0939\u093d\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097f\u0985-\u098c\u098f\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bd\u09ce\u09dc\u09dd\u09df-\u09e1\u09f0\u09f1\u0a05-\u0a0a\u0a0f\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32\u0a33\u0a35\u0a36\u0a38\u0a39\u0a59-\u0a5c\u0a5e\u0a72-\u0a74\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2\u0ab3\u0ab5-\u0ab9\u0abd\u0ad0\u0ae0\u0ae1\u0b05-\u0b0c\u0b0f\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32\u0b33\u0b35-\u0b39\u0b3d\u0b5c\u0b5d\u0b5f-\u0b61\u0b71\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99\u0b9a\u0b9c\u0b9e\u0b9f\u0ba3\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bd0\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c33\u0c35-\u0c39\u0c3d\u0c58\u0c59\u0c60\u0c61\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbd\u0cde\u0ce0\u0ce1\u0cf1\u0cf2\u0d05-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d\u0d4e\u0d60\u0d61\u0d7a-\u0d7f\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0e01-\u0e30\u0e32\u0e33\u0e40-\u0e46\u0e81\u0e82\u0e84\u0e87\u0e88\u0e8a\u0e8d\u0e94-\u0e97\u0e99-\u0e9f\u0ea1-\u0ea3\u0ea5\u0ea7\u0eaa\u0eab\u0ead-\u0eb0\u0eb2\u0eb3\u0ebd\u0ec0-\u0ec4\u0ec6\u0edc-\u0edf\u0f00\u0f40-\u0f47\u0f49-\u0f6c\u0f88-\u0f8c\u1000-\u102a\u103f\u1050-\u1055\u105a-\u105d\u1061\u1065\u1066\u106e-\u1070\u1075-\u1081\u108e\u10a0-\u10c5\u10c7\u10cd\u10d0-\u10fa\u10fc-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u1380-\u138f\u13a0-\u13f4\u1401-\u166c\u166f-\u167f\u1681-\u169a\u16a0-\u16ea\u16ee-\u16f0\u1700-\u170c\u170e-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176c\u176e-\u1770\u1780-\u17b3\u17d7\u17dc\u1820-\u1877\u1880-\u18a8\u18aa\u18b0-\u18f5\u1900-\u191c\u1950-\u196d\u1970-\u1974\u1980-\u19ab\u19c1-\u19c7\u1a00-\u1a16\u1a20-\u1a54\u1aa7\u1b05-\u1b33\u1b45-\u1b4b\u1b83-\u1ba0\u1bae\u1baf\u1bba-\u1be5\u1c00-\u1c23\u1c4d-\u1c4f\u1c5a-\u1c7d\u1ce9-\u1cec\u1cee-\u1cf1\u1cf5\u1cf6\u1d00-\u1dbf\u1e00-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u2071\u207f\u2090-\u209c\u2102\u2107\u210a-\u2113\u2115\u2119-\u211d\u2124\u2126\u2128\u212a-\u212d\u212f-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2160-\u2188\u2c00-\u2c2e\u2c30-\u2c5e\u2c60-\u2ce4\u2ceb-\u2cee\u2cf2\u2cf3\u2d00-\u2d25\u2d27\u2d2d\u2d30-\u2d67\u2d6f\u2d80-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u2e2f\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303c\u3041-\u3096\u309d-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312d\u3131-\u318e\u31a0-\u31ba\u31f0-\u31ff\u3400-\u4db5\u4e00-\u9fcc\ua000-\ua48c\ua4d0-\ua4fd\ua500-\ua60c\ua610-\ua61f\ua62a\ua62b\ua640-\ua66e\ua67f-\ua697\ua6a0-\ua6ef\ua717-\ua71f\ua722-\ua788\ua78b-\ua78e\ua790-\ua793\ua7a0-\ua7aa\ua7f8-\ua801\ua803-\ua805\ua807-\ua80a\ua80c-\ua822\ua840-\ua873\ua882-\ua8b3\ua8f2-\ua8f7\ua8fb\ua90a-\ua925\ua930-\ua946\ua960-\ua97c\ua984-\ua9b2\ua9cf\uaa00-\uaa28\uaa40-\uaa42\uaa44-\uaa4b\uaa60-\uaa76\uaa7a\uaa80-\uaaaf\uaab1\uaab5\uaab6\uaab9-\uaabd\uaac0\uaac2\uaadb-\uaadd\uaae0-\uaaea\uaaf2-\uaaf4\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uabc0-\uabe2\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uf900-\ufa6d\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d\ufb1f-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40\ufb41\ufb43\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe70-\ufe74\ufe76-\ufefc\uff21-\uff3a\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc]'),
        NonAsciiIdentifierPart: new RegExp('[\xaa\xb5\xba\xc0-\xd6\xd8-\xf6\xf8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0300-\u0374\u0376\u0377\u037a-\u037d\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u0483-\u0487\u048a-\u0527\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u05d0-\u05ea\u05f0-\u05f2\u0610-\u061a\u0620-\u0669\u066e-\u06d3\u06d5-\u06dc\u06df-\u06e8\u06ea-\u06fc\u06ff\u0710-\u074a\u074d-\u07b1\u07c0-\u07f5\u07fa\u0800-\u082d\u0840-\u085b\u08a0\u08a2-\u08ac\u08e4-\u08fe\u0900-\u0963\u0966-\u096f\u0971-\u0977\u0979-\u097f\u0981-\u0983\u0985-\u098c\u098f\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bc-\u09c4\u09c7\u09c8\u09cb-\u09ce\u09d7\u09dc\u09dd\u09df-\u09e3\u09e6-\u09f1\u0a01-\u0a03\u0a05-\u0a0a\u0a0f\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32\u0a33\u0a35\u0a36\u0a38\u0a39\u0a3c\u0a3e-\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a59-\u0a5c\u0a5e\u0a66-\u0a75\u0a81-\u0a83\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2\u0ab3\u0ab5-\u0ab9\u0abc-\u0ac5\u0ac7-\u0ac9\u0acb-\u0acd\u0ad0\u0ae0-\u0ae3\u0ae6-\u0aef\u0b01-\u0b03\u0b05-\u0b0c\u0b0f\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32\u0b33\u0b35-\u0b39\u0b3c-\u0b44\u0b47\u0b48\u0b4b-\u0b4d\u0b56\u0b57\u0b5c\u0b5d\u0b5f-\u0b63\u0b66-\u0b6f\u0b71\u0b82\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99\u0b9a\u0b9c\u0b9e\u0b9f\u0ba3\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bbe-\u0bc2\u0bc6-\u0bc8\u0bca-\u0bcd\u0bd0\u0bd7\u0be6-\u0bef\u0c01-\u0c03\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c33\u0c35-\u0c39\u0c3d-\u0c44\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c58\u0c59\u0c60-\u0c63\u0c66-\u0c6f\u0c82\u0c83\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbc-\u0cc4\u0cc6-\u0cc8\u0cca-\u0ccd\u0cd5\u0cd6\u0cde\u0ce0-\u0ce3\u0ce6-\u0cef\u0cf1\u0cf2\u0d02\u0d03\u0d05-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d-\u0d44\u0d46-\u0d48\u0d4a-\u0d4e\u0d57\u0d60-\u0d63\u0d66-\u0d6f\u0d7a-\u0d7f\u0d82\u0d83\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0dca\u0dcf-\u0dd4\u0dd6\u0dd8-\u0ddf\u0df2\u0df3\u0e01-\u0e3a\u0e40-\u0e4e\u0e50-\u0e59\u0e81\u0e82\u0e84\u0e87\u0e88\u0e8a\u0e8d\u0e94-\u0e97\u0e99-\u0e9f\u0ea1-\u0ea3\u0ea5\u0ea7\u0eaa\u0eab\u0ead-\u0eb9\u0ebb-\u0ebd\u0ec0-\u0ec4\u0ec6\u0ec8-\u0ecd\u0ed0-\u0ed9\u0edc-\u0edf\u0f00\u0f18\u0f19\u0f20-\u0f29\u0f35\u0f37\u0f39\u0f3e-\u0f47\u0f49-\u0f6c\u0f71-\u0f84\u0f86-\u0f97\u0f99-\u0fbc\u0fc6\u1000-\u1049\u1050-\u109d\u10a0-\u10c5\u10c7\u10cd\u10d0-\u10fa\u10fc-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u135d-\u135f\u1380-\u138f\u13a0-\u13f4\u1401-\u166c\u166f-\u167f\u1681-\u169a\u16a0-\u16ea\u16ee-\u16f0\u1700-\u170c\u170e-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176c\u176e-\u1770\u1772\u1773\u1780-\u17d3\u17d7\u17dc\u17dd\u17e0-\u17e9\u180b-\u180d\u1810-\u1819\u1820-\u1877\u1880-\u18aa\u18b0-\u18f5\u1900-\u191c\u1920-\u192b\u1930-\u193b\u1946-\u196d\u1970-\u1974\u1980-\u19ab\u19b0-\u19c9\u19d0-\u19d9\u1a00-\u1a1b\u1a20-\u1a5e\u1a60-\u1a7c\u1a7f-\u1a89\u1a90-\u1a99\u1aa7\u1b00-\u1b4b\u1b50-\u1b59\u1b6b-\u1b73\u1b80-\u1bf3\u1c00-\u1c37\u1c40-\u1c49\u1c4d-\u1c7d\u1cd0-\u1cd2\u1cd4-\u1cf6\u1d00-\u1de6\u1dfc-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u200c\u200d\u203f\u2040\u2054\u2071\u207f\u2090-\u209c\u20d0-\u20dc\u20e1\u20e5-\u20f0\u2102\u2107\u210a-\u2113\u2115\u2119-\u211d\u2124\u2126\u2128\u212a-\u212d\u212f-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2160-\u2188\u2c00-\u2c2e\u2c30-\u2c5e\u2c60-\u2ce4\u2ceb-\u2cf3\u2d00-\u2d25\u2d27\u2d2d\u2d30-\u2d67\u2d6f\u2d7f-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u2de0-\u2dff\u2e2f\u3005-\u3007\u3021-\u302f\u3031-\u3035\u3038-\u303c\u3041-\u3096\u3099\u309a\u309d-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312d\u3131-\u318e\u31a0-\u31ba\u31f0-\u31ff\u3400-\u4db5\u4e00-\u9fcc\ua000-\ua48c\ua4d0-\ua4fd\ua500-\ua60c\ua610-\ua62b\ua640-\ua66f\ua674-\ua67d\ua67f-\ua697\ua69f-\ua6f1\ua717-\ua71f\ua722-\ua788\ua78b-\ua78e\ua790-\ua793\ua7a0-\ua7aa\ua7f8-\ua827\ua840-\ua873\ua880-\ua8c4\ua8d0-\ua8d9\ua8e0-\ua8f7\ua8fb\ua900-\ua92d\ua930-\ua953\ua960-\ua97c\ua980-\ua9c0\ua9cf-\ua9d9\uaa00-\uaa36\uaa40-\uaa4d\uaa50-\uaa59\uaa60-\uaa76\uaa7a\uaa7b\uaa80-\uaac2\uaadb-\uaadd\uaae0-\uaaef\uaaf2-\uaaf6\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uabc0-\uabea\uabec\uabed\uabf0-\uabf9\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uf900-\ufa6d\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40\ufb41\ufb43\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe00-\ufe0f\ufe20-\ufe26\ufe33\ufe34\ufe4d-\ufe4f\ufe70-\ufe74\ufe76-\ufefc\uff10-\uff19\uff21-\uff3a\uff3f\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc]')
    };

    // Ensure the condition is true, otherwise throw an error.
    // This is only to have a better contract semantic, i.e. another safety net
    // to catch a logic error. The condition shall be fulfilled in normal case.
    // Do NOT use this to enforce a certain condition on any user input.

    function assert(condition, message) {
        if (!condition) {
            throw new Error('ASSERT: ' + message);
        }
    }

    function sliceSource(from, to) {
        return source.slice(from, to);
    }

    if (typeof 'esprima'[0] === 'undefined') {
        sliceSource = function sliceArraySource(from, to) {
            return source.slice(from, to).join('');
        };
    }

    function isDecimalDigit(ch) {
        return '0123456789'.indexOf(ch) >= 0;
    }

    function isHexDigit(ch) {
        return '0123456789abcdefABCDEF'.indexOf(ch) >= 0;
    }

    function isOctalDigit(ch) {
        return '01234567'.indexOf(ch) >= 0;
    }


    // 7.2 White Space

    function isWhiteSpace(ch) {
        return (ch === ' ') || (ch === '\u0009') || (ch === '\u000B') ||
            (ch === '\u000C') || (ch === '\u00A0') ||
            (ch.charCodeAt(0) >= 0x1680 &&
             '\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\uFEFF'.indexOf(ch) >= 0);
    }

    // 7.3 Line Terminators

    function isLineTerminator(ch) {
        return (ch === '\n' || ch === '\r' || ch === '\u2028' || ch === '\u2029');
    }

    // 7.6 Identifier Names and Identifiers

    function isIdentifierStart(ch) {
        return (ch === '$') || (ch === '_') || (ch === '\\') ||
            (ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z') ||
            ((ch.charCodeAt(0) >= 0x80) && Regex.NonAsciiIdentifierStart.test(ch));
    }

    function isIdentifierPart(ch) {
        return (ch === '$') || (ch === '_') || (ch === '\\') ||
            (ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z') ||
            ((ch >= '0') && (ch <= '9')) ||
            ((ch.charCodeAt(0) >= 0x80) && Regex.NonAsciiIdentifierPart.test(ch));
    }

    // 7.6.1.2 Future Reserved Words

    function isFutureReservedWord(id) {
        switch (id) {

        // Future reserved words.
        case 'class':
        case 'enum':
        case 'export':
        case 'extends':
        case 'import':
        case 'super':
            return true;
        }

        return false;
    }

    function isStrictModeReservedWord(id) {
        switch (id) {

        // Strict Mode reserved words.
        case 'implements':
        case 'interface':
        case 'package':
        case 'private':
        case 'protected':
        case 'public':
        case 'static':
        case 'yield':
        case 'let':
            return true;
        }

        return false;
    }

    function isRestrictedWord(id) {
        return id === 'eval' || id === 'arguments';
    }

    // 7.6.1.1 Keywords

    function isKeyword(id) {
        var keyword = false;
        switch (id.length) {
        case 2:
            keyword = (id === 'if') || (id === 'in') || (id === 'do');
            break;
        case 3:
            keyword = (id === 'var') || (id === 'for') || (id === 'new') || (id === 'try');
            break;
        case 4:
            keyword = (id === 'this') || (id === 'else') || (id === 'case') || (id === 'void') || (id === 'with');
            break;
        case 5:
            keyword = (id === 'while') || (id === 'break') || (id === 'catch') || (id === 'throw');
            break;
        case 6:
            keyword = (id === 'return') || (id === 'typeof') || (id === 'delete') || (id === 'switch');
            break;
        case 7:
            keyword = (id === 'default') || (id === 'finally');
            break;
        case 8:
            keyword = (id === 'function') || (id === 'continue') || (id === 'debugger');
            break;
        case 10:
            keyword = (id === 'instanceof');
            break;
        }

        if (keyword) {
            return true;
        }

        switch (id) {
        // Future reserved words.
        // 'const' is specialized as Keyword in V8.
        case 'const':
            return true;

        // For compatiblity to SpiderMonkey and ES.next
        case 'yield':
        case 'let':
            return true;
        }

        if (strict && isStrictModeReservedWord(id)) {
            return true;
        }

        return isFutureReservedWord(id);
    }

    // Return the next character and move forward.

    function nextChar() {
        return source[index++];
    }

    // 7.4 Comments

    function skipComment() {
        var ch, blockComment, lineComment;

        blockComment = false;
        lineComment = false;

        while (index < length) {
            ch = source[index];

            if (lineComment) {
                ch = nextChar();
                if (isLineTerminator(ch)) {
                    lineComment = false;
                    if (ch === '\r' && source[index] === '\n') {
                        ++index;
                    }
                    ++lineNumber;
                    lineStart = index;
                }
            } else if (blockComment) {
                if (isLineTerminator(ch)) {
                    if (ch === '\r' && source[index + 1] === '\n') {
                        ++index;
                    }
                    ++lineNumber;
                    ++index;
                    lineStart = index;
                    if (index >= length) {
                        throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
                    }
                } else {
                    ch = nextChar();
                    if (index >= length) {
                        throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
                    }
                    if (ch === '*') {
                        ch = source[index];
                        if (ch === '/') {
                            ++index;
                            blockComment = false;
                        }
                    }
                }
            } else if (ch === '/') {
                ch = source[index + 1];
                if (ch === '/') {
                    index += 2;
                    lineComment = true;
                } else if (ch === '*') {
                    index += 2;
                    blockComment = true;
                    if (index >= length) {
                        throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
                    }
                } else {
                    break;
                }
            } else if (isWhiteSpace(ch)) {
                ++index;
            } else if (isLineTerminator(ch)) {
                ++index;
                if (ch ===  '\r' && source[index] === '\n') {
                    ++index;
                }
                ++lineNumber;
                lineStart = index;
            } else {
                break;
            }
        }
    }

    function scanHexEscape(prefix) {
        var i, len, ch, code = 0;

        len = (prefix === 'u') ? 4 : 2;
        for (i = 0; i < len; ++i) {
            if (index < length && isHexDigit(source[index])) {
                ch = nextChar();
                code = code * 16 + '0123456789abcdef'.indexOf(ch.toLowerCase());
            } else {
                return '';
            }
        }
        return String.fromCharCode(code);
    }

    function scanIdentifier() {
        var ch, start, id, restore;

        ch = source[index];
        if (!isIdentifierStart(ch)) {
            return;
        }

        start = index;
        if (ch === '\\') {
            ++index;
            if (source[index] !== 'u') {
                return;
            }
            ++index;
            restore = index;
            ch = scanHexEscape('u');
            if (ch) {
                if (ch === '\\' || !isIdentifierStart(ch)) {
                    return;
                }
                id = ch;
            } else {
                index = restore;
                id = 'u';
            }
        } else {
            id = nextChar();
        }

        while (index < length) {
            ch = source[index];
            if (!isIdentifierPart(ch)) {
                break;
            }
            if (ch === '\\') {
                ++index;
                if (source[index] !== 'u') {
                    return;
                }
                ++index;
                restore = index;
                ch = scanHexEscape('u');
                if (ch) {
                    if (ch === '\\' || !isIdentifierPart(ch)) {
                        return;
                    }
                    id += ch;
                } else {
                    index = restore;
                    id += 'u';
                }
            } else {
                id += nextChar();
            }
        }

	if (esprima.localeMapping != null) {
            id = esprima.localeMapping[id] || id;
	}

        // There is no keyword or literal with only one character.
        // Thus, it must be an identifier.
        if (id.length === 1) {
            return {
                type: Token.Identifier,
                value: id,
                lineNumber: lineNumber,
                lineStart: lineStart,
                range: [start, index]
            };
        }

        if (isKeyword(id)) {
            return {
                type: Token.Keyword,
                value: id,
                lineNumber: lineNumber,
                lineStart: lineStart,
                range: [start, index]
            };
        }

        // 7.8.1 Null Literals

        if (id === 'null') {
            return {
                type: Token.NullLiteral,
                value: id,
                lineNumber: lineNumber,
                lineStart: lineStart,
                range: [start, index]
            };
        }

        // 7.8.2 Boolean Literals

        if (id === 'true' || id === 'false') {
            return {
                type: Token.BooleanLiteral,
                value: id,
                lineNumber: lineNumber,
                lineStart: lineStart,
                range: [start, index]
            };
        }

        return {
            type: Token.Identifier,
            value: id,
            lineNumber: lineNumber,
            lineStart: lineStart,
            range: [start, index]
        };
    }

    // 7.7 Punctuators

    function scanPunctuator() {
        var start = index,
            ch1 = source[index],
            ch2,
            ch3,
            ch4;

        // Check for most common single-character punctuators.

        if (ch1 === ';' || ch1 === '{' || ch1 === '}') {
            ++index;
            return {
                type: Token.Punctuator,
                value: ch1,
                lineNumber: lineNumber,
                lineStart: lineStart,
                range: [start, index]
            };
        }

        if (ch1 === ',' || ch1 === '(' || ch1 === ')') {
            ++index;
            return {
                type: Token.Punctuator,
                value: ch1,
                lineNumber: lineNumber,
                lineStart: lineStart,
                range: [start, index]
            };
        }

        // Dot (.) can also start a floating-point number, hence the need
        // to check the next character.

        ch2 = source[index + 1];
        if (ch1 === '.' && !isDecimalDigit(ch2)) {
            return {
                type: Token.Punctuator,
                value: nextChar(),
                lineNumber: lineNumber,
                lineStart: lineStart,
                range: [start, index]
            };
        }

        // Peek more characters.

        ch3 = source[index + 2];
        ch4 = source[index + 3];

        // 4-character punctuator: >>>=

        if (ch1 === '>' && ch2 === '>' && ch3 === '>') {
            if (ch4 === '=') {
                index += 4;
                return {
                    type: Token.Punctuator,
                    value: '>>>=',
                    lineNumber: lineNumber,
                    lineStart: lineStart,
                    range: [start, index]
                };
            }
        }

        // 3-character punctuators: === !== >>> <<= >>=

        if (ch1 === '=' && ch2 === '=' && ch3 === '=') {
            index += 3;
            return {
                type: Token.Punctuator,
                value: '===',
                lineNumber: lineNumber,
                lineStart: lineStart,
                range: [start, index]
            };
        }

        if (ch1 === '!' && ch2 === '=' && ch3 === '=') {
            index += 3;
            return {
                type: Token.Punctuator,
                value: '!==',
                lineNumber: lineNumber,
                lineStart: lineStart,
                range: [start, index]
            };
        }

        if (ch1 === '>' && ch2 === '>' && ch3 === '>') {
            index += 3;
            return {
                type: Token.Punctuator,
                value: '>>>',
                lineNumber: lineNumber,
                lineStart: lineStart,
                range: [start, index]
            };
        }

        if (ch1 === '<' && ch2 === '<' && ch3 === '=') {
            index += 3;
            return {
                type: Token.Punctuator,
                value: '<<=',
                lineNumber: lineNumber,
                lineStart: lineStart,
                range: [start, index]
            };
        }

        if (ch1 === '>' && ch2 === '>' && ch3 === '=') {
            index += 3;
            return {
                type: Token.Punctuator,
                value: '>>=',
                lineNumber: lineNumber,
                lineStart: lineStart,
                range: [start, index]
            };
        }

        // 2-character punctuators: <= >= == != ++ -- << >> && ||
        // += -= *= %= &= |= ^= /=

        if (ch2 === '=') {
            if ('<>=!+-*%&|^/'.indexOf(ch1) >= 0) {
                index += 2;
                return {
                    type: Token.Punctuator,
                    value: ch1 + ch2,
                    lineNumber: lineNumber,
                    lineStart: lineStart,
                    range: [start, index]
                };
            }
        }

        if (ch1 === ch2 && ('+-<>&|'.indexOf(ch1) >= 0)) {
            if ('+-<>&|'.indexOf(ch2) >= 0) {
                index += 2;
                return {
                    type: Token.Punctuator,
                    value: ch1 + ch2,
                    lineNumber: lineNumber,
                    lineStart: lineStart,
                    range: [start, index]
                };
            }
        }

        // The remaining 1-character punctuators.

        if ('[]<>+-*%&|^!~?:=/'.indexOf(ch1) >= 0) {
            return {
                type: Token.Punctuator,
                value: nextChar(),
                lineNumber: lineNumber,
                lineStart: lineStart,
                range: [start, index]
            };
        }
    }

    // 7.8.3 Numeric Literals

    function scanNumericLiteral() {
        var number, start, ch;

        ch = source[index];
        assert(isDecimalDigit(ch) || (ch === '.'),
            'Numeric literal must start with a decimal digit or a decimal point');

        start = index;
        number = '';
        if (ch !== '.') {
            number = nextChar();
            ch = source[index];

            // Hex number starts with '0x'.
            // Octal number starts with '0'.
            if (number === '0') {
                if (ch === 'x' || ch === 'X') {
                    number += nextChar();
                    while (index < length) {
                        ch = source[index];
                        if (!isHexDigit(ch)) {
                            break;
                        }
                        number += nextChar();
                    }

                    if (number.length <= 2) {
                        // only 0x
                        throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
                    }

                    if (index < length) {
                        ch = source[index];
                        if (isIdentifierStart(ch)) {
                            throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
                        }
                    }
                    return {
                        type: Token.NumericLiteral,
                        value: parseInt(number, 16),
                        lineNumber: lineNumber,
                        lineStart: lineStart,
                        range: [start, index]
                    };
                } else if (isOctalDigit(ch)) {
                    number += nextChar();
                    while (index < length) {
                        ch = source[index];
                        if (!isOctalDigit(ch)) {
                            break;
                        }
                        number += nextChar();
                    }

                    if (index < length) {
                        ch = source[index];
                        if (isIdentifierStart(ch) || isDecimalDigit(ch)) {
                            throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
                        }
                    }
                    return {
                        type: Token.NumericLiteral,
                        value: parseInt(number, 8),
                        octal: true,
                        lineNumber: lineNumber,
                        lineStart: lineStart,
                        range: [start, index]
                    };
                }

                // decimal number starts with '0' such as '09' is illegal.
                if (isDecimalDigit(ch)) {
                    throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
                }
            }

            while (index < length) {
                ch = source[index];
                if (!isDecimalDigit(ch)) {
                    break;
                }
                number += nextChar();
            }
        }

        if (ch === '.') {
            number += nextChar();
            while (index < length) {
                ch = source[index];
                if (!isDecimalDigit(ch)) {
                    break;
                }
                number += nextChar();
            }
        }

        if (ch === 'e' || ch === 'E') {
            number += nextChar();

            ch = source[index];
            if (ch === '+' || ch === '-') {
                number += nextChar();
            }

            ch = source[index];
            if (isDecimalDigit(ch)) {
                number += nextChar();
                while (index < length) {
                    ch = source[index];
                    if (!isDecimalDigit(ch)) {
                        break;
                    }
                    number += nextChar();
                }
            } else {
                ch = 'character ' + ch;
                if (index >= length) {
                    ch = '<end>';
                }
                throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
            }
        }

        if (index < length) {
            ch = source[index];
            if (isIdentifierStart(ch)) {
                throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
            }
        }

        return {
            type: Token.NumericLiteral,
            value: parseFloat(number),
            lineNumber: lineNumber,
            lineStart: lineStart,
            range: [start, index]
        };
    }

    // 7.8.4 String Literals

    function scanStringLiteral() {
        var str = '', quote, start, ch, code, unescaped, restore, octal = false;

        quote = source[index];
        assert((quote === '\'' || quote === '"'),
            'String literal must starts with a quote');

        start = index;
        ++index;

        while (index < length) {
            ch = nextChar();

            if (ch === quote) {
                quote = '';
                break;
            } else if (ch === '\\') {
                ch = nextChar();
                if (!isLineTerminator(ch)) {
                    switch (ch) {
                    case 'n':
                        str += '\n';
                        break;
                    case 'r':
                        str += '\r';
                        break;
                    case 't':
                        str += '\t';
                        break;
                    case 'u':
                    case 'x':
                        restore = index;
                        unescaped = scanHexEscape(ch);
                        if (unescaped) {
                            str += unescaped;
                        } else {
                            index = restore;
                            str += ch;
                        }
                        break;
                    case 'b':
                        str += '\b';
                        break;
                    case 'f':
                        str += '\f';
                        break;
                    case 'v':
                        str += '\v';
                        break;

                    default:
                        if (isOctalDigit(ch)) {
                            code = '01234567'.indexOf(ch);

                            // \0 is not octal escape sequence
                            if (code !== 0) {
                                octal = true;
                            }

                            if (index < length && isOctalDigit(source[index])) {
                                octal = true;
                                code = code * 8 + '01234567'.indexOf(nextChar());

                                // 3 digits are only allowed when string starts
                                // with 0, 1, 2, 3
                                if ('0123'.indexOf(ch) >= 0 &&
                                        index < length &&
                                        isOctalDigit(source[index])) {
                                    code = code * 8 + '01234567'.indexOf(nextChar());
                                }
                            }
                            str += String.fromCharCode(code);
                        } else {
                            str += ch;
                        }
                        break;
                    }
                } else {
                    ++lineNumber;
                    if (ch ===  '\r' && source[index] === '\n') {
                        ++index;
                    }
                }
            } else if (isLineTerminator(ch)) {
                break;
            } else {
                str += ch;
            }
        }

        if (quote !== '') {
            throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
        }

        return {
            type: Token.StringLiteral,
            value: str,
            octal: octal,
            lineNumber: lineNumber,
            lineStart: lineStart,
            range: [start, index]
        };
    }

    function scanRegExp() {
        var str = '', ch, start, pattern, flags, value, classMarker = false, restore;

        buffer = null;
        skipComment();

        start = index;
        ch = source[index];
        assert(ch === '/', 'Regular expression literal must start with a slash');
        str = nextChar();

        while (index < length) {
            ch = nextChar();
            str += ch;
            if (classMarker) {
                if (ch === ']') {
                    classMarker = false;
                }
            } else {
                if (ch === '\\') {
                    str += nextChar();
                }
                if (ch === '/') {
                    break;
                }
                if (ch === '[') {
                    classMarker = true;
                }
                if (isLineTerminator(ch)) {
                    throwError({}, Messages.UnterminatedRegExp);
                }
            }
        }

        if (str.length === 1) {
            throwError({}, Messages.UnterminatedRegExp);
        }

        // Exclude leading and trailing slash.
        pattern = str.substr(1, str.length - 2);

        flags = '';
        while (index < length) {
            ch = source[index];
            if (!isIdentifierPart(ch)) {
                break;
            }

            ++index;
            if (ch === '\\' && index < length) {
                ch = source[index];
                if (ch === 'u') {
                    ++index;
                    restore = index;
                    ch = scanHexEscape('u');
                    if (ch) {
                        flags += ch;
                        str += '\\u';
                        for (; restore < index; ++restore) {
                            str += source[restore];
                        }
                    } else {
                        index = restore;
                        flags += 'u';
                        str += '\\u';
                    }
                } else {
                    str += '\\';
                }
            } else {
                flags += ch;
                str += ch;
            }
        }

        try {
            value = new RegExp(pattern, flags);
        } catch (e) {
            throwError({}, Messages.InvalidRegExp);
        }

        return {
            literal: str,
            value: value,
            range: [start, index]
        };
    }

    function isIdentifierName(token) {
        return token.type === Token.Identifier ||
            token.type === Token.Keyword ||
            token.type === Token.BooleanLiteral ||
            token.type === Token.NullLiteral;
    }

    function advance() {
        var ch, token;

        skipComment();

        if (index >= length) {
            return {
                type: Token.EOF,
                lineNumber: lineNumber,
                lineStart: lineStart,
                range: [index, index]
            };
        }

        token = scanPunctuator();
        if (typeof token !== 'undefined') {
            return token;
        }

        ch = source[index];

        if (ch === '\'' || ch === '"') {
            return scanStringLiteral();
        }

        if (ch === '.' || isDecimalDigit(ch)) {
            return scanNumericLiteral();
        }

        token = scanIdentifier();
        if (typeof token !== 'undefined') {
            return token;
        }

        throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
    }

    function lex() {
        var token;

        if (buffer) {
            index = buffer.range[1];
            lineNumber = buffer.lineNumber;
            lineStart = buffer.lineStart;
            token = buffer;
            buffer = null;
            return token;
        }

        buffer = null;
        return advance();
    }

    function lookahead() {
        var pos, line, start;

        if (buffer !== null) {
            return buffer;
        }

        pos = index;
        line = lineNumber;
        start = lineStart;
        buffer = advance();
        index = pos;
        lineNumber = line;
        lineStart = start;

        return buffer;
    }

    // Return true if there is a line terminator before the next token.

    function peekLineTerminator() {
        var pos, line, start, found;

        pos = index;
        line = lineNumber;
        start = lineStart;
        skipComment();
        found = lineNumber !== line;
        index = pos;
        lineNumber = line;
        lineStart = start;

        return found;
    }

    // Throw an exception

    function throwError(token, messageFormat) {
        var error,
            args = Array.prototype.slice.call(arguments, 2),
            msg = messageFormat.replace(
                /%(\d)/g,
                function (whole, index) {
                    return args[index] || '';
                }
            );

        if (typeof token.lineNumber === 'number') {
            error = new Error('Line ' + token.lineNumber + ': ' + msg);
            error.index = token.range[0];
            error.lineNumber = token.lineNumber;
            error.column = token.range[0] - lineStart + 1;
        } else {
            error = new Error('Line ' + lineNumber + ': ' + msg);
            error.index = index;
            error.lineNumber = lineNumber;
            error.column = index - lineStart + 1;
        }

        throw error;
    }

    function throwErrorTolerant() {
        var error;
        try {
            throwError.apply(null, arguments);
        } catch (e) {
            if (extra.errors) {
                extra.errors.push(e);
            } else {
                throw e;
            }
        }
    }


    // Throw an exception because of the token.

    function throwUnexpected(token) {
        var s;

        if (token.type === Token.EOF) {
            throwError(token, Messages.UnexpectedEOS);
        }

        if (token.type === Token.NumericLiteral) {
            throwError(token, Messages.UnexpectedNumber);
        }

        if (token.type === Token.StringLiteral) {
            throwError(token, Messages.UnexpectedString);
        }

        if (token.type === Token.Identifier) {
            throwError(token, Messages.UnexpectedIdentifier);
        }

        if (token.type === Token.Keyword) {
            if (isFutureReservedWord(token.value)) {
                throwError(token, Messages.UnexpectedReserved);
            } else if (strict && isStrictModeReservedWord(token.value)) {
                throwError(token, Messages.StrictReservedWord);
            }
            throwError(token, Messages.UnexpectedToken, token.value);
        }

        // BooleanLiteral, NullLiteral, or Punctuator.
        throwError(token, Messages.UnexpectedToken, token.value);
    }

    // Expect the next token to match the specified punctuator.
    // If not, an exception will be thrown.

    function expect(value) {
        var token = lex();
        if (token.type !== Token.Punctuator || token.value !== value) {
            throwUnexpected(token);
        }
    }

    // Expect the next token to match the specified keyword.
    // If not, an exception will be thrown.

    function expectKeyword(keyword) {
        var token = lex();
        if (token.type !== Token.Keyword || token.value !== keyword) {
            throwUnexpected(token);
        }
    }

    // Return true if the next token matches the specified punctuator.

    function match(value) {
        var token = lookahead();
        return token.type === Token.Punctuator && token.value === value;
    }

    // Return true if the next token matches the specified keyword

    function matchKeyword(keyword) {
        var token = lookahead();
        return token.type === Token.Keyword && token.value === keyword;
    }

    // Return true if the next token is an assignment operator

    function matchAssign() {
        var token = lookahead(),
            op = token.value;

        if (token.type !== Token.Punctuator) {
            return false;
        }
        return op === '=' ||
            op === '*=' ||
            op === '/=' ||
            op === '%=' ||
            op === '+=' ||
            op === '-=' ||
            op === '<<=' ||
            op === '>>=' ||
            op === '>>>=' ||
            op === '&=' ||
            op === '^=' ||
            op === '|=';
    }

    function consumeSemicolon() {
        var token, line;

        // Catch the very common case first.
        if (source[index] === ';') {
            lex();
            return;
        }

        line = lineNumber;
        skipComment();
        if (lineNumber !== line) {
            return;
        }

        if (match(';')) {
            lex();
            return;
        }

        token = lookahead();
        if (token.type !== Token.EOF && !match('}')) {
            throwUnexpected(token);
        }
        return;
    }

    // Return true if provided expression is LeftHandSideExpression

    function isLeftHandSide(expr) {
        switch (expr.type) {
        case 'AssignmentExpression':
        case 'BinaryExpression':
        case 'ConditionalExpression':
        case 'LogicalExpression':
        case 'SequenceExpression':
        case 'UnaryExpression':
        case 'UpdateExpression':
            return false;
        }
        return true;
    }

    // 11.1.4 Array Initialiser

    function parseArrayInitialiser() {
        var elements = [],
            undef;

        expect('[');

        while (!match(']')) {
            if (match(',')) {
                lex();
                elements.push(undef);
            } else {
                elements.push(parseAssignmentExpression());

                if (!match(']')) {
                    expect(',');
                }
            }
        }

        expect(']');

        return {
            type: Syntax.ArrayExpression,
            elements: elements
        };
    }

    // 11.1.5 Object Initialiser

    function parsePropertyFunction(param, first) {
        var previousStrict, body;

        previousStrict = strict;
        body = parseFunctionSourceElements();
        if (first && strict && isRestrictedWord(param[0].name)) {
            throwError(first, Messages.StrictParamName);
        }
        strict = previousStrict;

        return {
            type: Syntax.FunctionExpression,
            id: null,
            params: param,
            body: body
        };
    }

    function parseObjectPropertyKey() {
        var token = lex(),
            key;

        switch (token.type) {

        case Token.StringLiteral:
        case Token.NumericLiteral:
            if (strict && token.octal) {
                throwError(token, Messages.StrictOctalLiteral);
            }
            key = createLiteral(token);
            break;

        case Token.Identifier:
        case Token.Keyword:
        case Token.BooleanLiteral:
        case Token.NullLiteral:
            key = {
                type: Syntax.Identifier,
                name: token.value
            };
            break;

        default:
            // Unreachable, since parseObjectProperty() will not call this
            // function with any other type of token.
        }

        return key;
    }

    function parseObjectProperty() {
        var token, property, key, id, param;

        token = lookahead();

        switch (token.type) {

        case Token.Identifier:
            id = parseObjectPropertyKey();

            // Property Assignment: Getter and Setter.

            if (token.value === 'get' && !match(':')) {
                key = parseObjectPropertyKey();
                expect('(');
                expect(')');
                property = {
                    type: Syntax.Property,
                    key: key,
                    value: parsePropertyFunction([]),
                    kind: 'get'
                };
            } else if (token.value === 'set' && !match(':')) {
                key = parseObjectPropertyKey();
                expect('(');
                token = lookahead();
                if (token.type !== Token.Identifier) {
                    throwUnexpected(lex());
                }
                param = [ parseVariableIdentifier() ];
                expect(')');
                property = {
                    type: Syntax.Property,
                    key: key,
                    value: parsePropertyFunction(param, token),
                    kind: 'set'
                };
            } else {
                expect(':');
                property = {
                    type: Syntax.Property,
                    key: id,
                    value: parseAssignmentExpression(),
                    kind: 'init'
                };
            }
            break;

        case Token.Keyword:
        case Token.BooleanLiteral:
        case Token.NullLiteral:
        case Token.StringLiteral:
        case Token.NumericLiteral:
            key = parseObjectPropertyKey();
            expect(':');
            property = {
                type: Syntax.Property,
                key: key,
                value: parseAssignmentExpression(),
                kind: 'init'
            };
            break;

        default:
            throwUnexpected(token);
        }

        return property;
    }

    function parseObjectInitialiser() {
        var token, properties = [], property, name, kind, map = {}, toString = String;

        expect('{');

        while (!match('}')) {
            property = parseObjectProperty();

            if (property.key.type === Syntax.Identifier) {
                name = property.key.name;
            } else {
                name = toString(property.key.value);
            }
            kind = (property.kind === 'init') ? PropertyKind.Data : (property.kind === 'get') ? PropertyKind.Get : PropertyKind.Set;
            if (Object.prototype.hasOwnProperty.call(map, name)) {
                if (map[name] === PropertyKind.Data) {
                    if (strict && kind === PropertyKind.Data) {
                        throwError({}, Messages.StrictDuplicateProperty);
                    } else if (kind !== PropertyKind.Data) {
                        throwError({}, Messages.AccessorDataProperty);
                    }
                } else {
                    if (kind === PropertyKind.Data) {
                        throwError({}, Messages.AccessorDataProperty);
                    } else if (map[name] & kind) {
                        throwError({}, Messages.AccessorGetSet);
                    }
                }
                map[name] |= kind;
            } else {
                map[name] = kind;
            }

            properties.push(property);

            if (!match('}')) {
                expect(',');
            }
        }

        expect('}');

        return {
            type: Syntax.ObjectExpression,
            properties: properties
        };
    }

    // 11.1 Primary Expressions

    function parsePrimaryExpression() {
        var expr,
            token = lookahead(),
            type = token.type;

        if (type === Token.Identifier) {
            return {
                type: Syntax.Identifier,
                name: lex().value
            };
        }

        if (type === Token.StringLiteral || type === Token.NumericLiteral) {
            if (strict && token.octal) {
                throwError(token, Messages.StrictOctalLiteral);
            }
            return createLiteral(lex());
        }

        if (type === Token.Keyword) {
            if (matchKeyword('this')) {
                lex();
                return {
                    type: Syntax.ThisExpression
                };
            }

            if (matchKeyword('function')) {
                return parseFunctionExpression();
            }
        }

        if (type === Token.BooleanLiteral) {
            lex();
            token.value = (token.value === 'true');
            return createLiteral(token);
        }

        if (type === Token.NullLiteral) {
            lex();
            token.value = null;
            return createLiteral(token);
        }

        if (match('[')) {
            return parseArrayInitialiser();
        }

        if (match('{')) {
            return parseObjectInitialiser();
        }

        if (match('(')) {
            lex();
            lastParenthesized = expr = parseExpression();
            expect(')');
            return expr;
        }

        if (match('/') || match('/=')) {
            return createLiteral(scanRegExp());
        }

        return throwUnexpected(lex());
    }

    // 11.2 Left-Hand-Side Expressions

    function parseArguments() {
        var args = [];

        expect('(');

        if (!match(')')) {
            while (index < length) {
                args.push(parseAssignmentExpression());
                if (match(')')) {
                    break;
                }
                expect(',');
            }
        }

        expect(')');

        return args;
    }

    function parseNonComputedProperty() {
        var token = lex();

        if (!isIdentifierName(token)) {
            throwUnexpected(token);
        }

        return {
            type: Syntax.Identifier,
            name: token.value
        };
    }

    function parseNonComputedMember(object) {
        return {
            type: Syntax.MemberExpression,
            computed: false,
            object: object,
            property: parseNonComputedProperty()
        };
    }

    function parseComputedMember(object) {
        var property, expr;

        expect('[');
        property = parseExpression();
        expr = {
            type: Syntax.MemberExpression,
            computed: true,
            object: object,
            property: property
        };
        expect(']');
        return expr;
    }

    function parseCallMember(object) {
        return {
            type: Syntax.CallExpression,
            callee: object,
            'arguments': parseArguments()
        };
    }

    function parseNewExpression() {
        var expr;

        expectKeyword('new');

        expr = {
            type: Syntax.NewExpression,
            callee: parseLeftHandSideExpression(),
            'arguments': []
        };

        if (match('(')) {
            expr['arguments'] = parseArguments();
        }

        return expr;
    }

    function parseLeftHandSideExpressionAllowCall() {
        var useNew, expr;

        useNew = matchKeyword('new');
        expr = useNew ? parseNewExpression() : parsePrimaryExpression();

        while (index < length) {
            if (match('.')) {
                lex();
                expr = parseNonComputedMember(expr);
            } else if (match('[')) {
                expr = parseComputedMember(expr);
            } else if (match('(')) {
                expr = parseCallMember(expr);
            } else {
                break;
            }
        }

        return expr;
    }

    function parseLeftHandSideExpression() {
        var useNew, expr;

        useNew = matchKeyword('new');
        expr = useNew ? parseNewExpression() : parsePrimaryExpression();

        while (index < length) {
            if (match('.')) {
                lex();
                expr = parseNonComputedMember(expr);
            } else if (match('[')) {
                expr = parseComputedMember(expr);
            } else {
                break;
            }
        }

        return expr;
    }

    // 11.3 Postfix Expressions

    function parsePostfixExpression() {
        var expr = parseLeftHandSideExpressionAllowCall();

        if ((match('++') || match('--')) && !peekLineTerminator()) {
            // 11.3.1, 11.3.2
            if (strict && expr.type === Syntax.Identifier && isRestrictedWord(expr.name)) {
                throwError({}, Messages.StrictLHSPostfix);
            }
            expr = {
                type: Syntax.UpdateExpression,
                operator: lex().value,
                argument: expr,
                prefix: false
            };
        }

        return expr;
    }

    // 11.4 Unary Operators

    function parseUnaryExpression() {
        var token, expr;

        if (match('++') || match('--')) {
            token = lex();
            expr = parseUnaryExpression();
            // 11.4.4, 11.4.5
            if (strict && expr.type === Syntax.Identifier && isRestrictedWord(expr.name)) {
                throwError({}, Messages.StrictLHSPrefix);
            }
            expr = {
                type: Syntax.UpdateExpression,
                operator: token.value,
                argument: expr,
                prefix: true
            };
            return expr;
        }

        if (match('+') || match('-') || match('~') || match('!')) {
            expr = {
                type: Syntax.UnaryExpression,
                operator: lex().value,
                argument: parseUnaryExpression()
            };
            return expr;
        }

        if (matchKeyword('delete') || matchKeyword('void') || matchKeyword('typeof')) {
            expr = {
                type: Syntax.UnaryExpression,
                operator: lex().value,
                argument: parseUnaryExpression()
            };
            if (strict && expr.operator === 'delete' && expr.argument.type === Syntax.Identifier) {
                throwError({}, Messages.StrictDelete);
            }
            return expr;
        }

        return parsePostfixExpression();
    }

    // 11.5 Multiplicative Operators

    function parseMultiplicativeExpression() {
        var expr = parseUnaryExpression();

        while (match('*') || match('/') || match('%')) {
            expr = {
                type: Syntax.BinaryExpression,
                operator: lex().value,
                left: expr,
                right: parseUnaryExpression()
            };
        }

        return expr;
    }

    // 11.6 Additive Operators

    function parseAdditiveExpression() {
        var expr = parseMultiplicativeExpression();

        while (match('+') || match('-')) {
            expr = {
                type: Syntax.BinaryExpression,
                operator: lex().value,
                left: expr,
                right: parseMultiplicativeExpression()
            };
        }

        return expr;
    }

    // 11.7 Bitwise Shift Operators

    function parseShiftExpression() {
        var expr = parseAdditiveExpression();

        while (match('<<') || match('>>') || match('>>>')) {
            expr = {
                type: Syntax.BinaryExpression,
                operator: lex().value,
                left: expr,
                right: parseAdditiveExpression()
            };
        }

        return expr;
    }
    // 11.8 Relational Operators

    function parseRelationalExpression() {
        var expr, previousAllowIn;

        previousAllowIn = allowIn;
        allowIn = true;
        expr = parseShiftExpression();
        allowIn = previousAllowIn;

        if (match('<') || match('>') || match('<=') || match('>=')) {
            expr = {
                type: Syntax.BinaryExpression,
                operator: lex().value,
                left: expr,
                right: parseRelationalExpression()
            };
        } else if (allowIn && matchKeyword('in')) {
            lex();
            expr = {
                type: Syntax.BinaryExpression,
                operator: 'in',
                left: expr,
                right: parseRelationalExpression()
            };
        } else if (matchKeyword('instanceof')) {
            lex();
            expr = {
                type: Syntax.BinaryExpression,
                operator: 'instanceof',
                left: expr,
                right: parseRelationalExpression()
            };
        }

        return expr;
    }

    // 11.9 Equality Operators

    function parseEqualityExpression() {
        var expr = parseRelationalExpression();

        while (match('==') || match('!=') || match('===') || match('!==')) {
            expr = {
                type: Syntax.BinaryExpression,
                operator: lex().value,
                left: expr,
                right: parseRelationalExpression()
            };
        }

        return expr;
    }

    // 11.10 Binary Bitwise Operators

    function parseBitwiseANDExpression() {
        var expr = parseEqualityExpression();

        while (match('&')) {
            lex();
            expr = {
                type: Syntax.BinaryExpression,
                operator: '&',
                left: expr,
                right: parseEqualityExpression()
            };
        }

        return expr;
    }

    function parseBitwiseORExpression() {
        var expr = parseBitwiseANDExpression();

        while (match('|')) {
            lex();
            expr = {
                type: Syntax.BinaryExpression,
                operator: '|',
                left: expr,
                right: parseBitwiseANDExpression()
            };
        }

        return expr;
    }

    function parseBitwiseXORExpression() {
        var expr = parseBitwiseORExpression();

        while (match('^')) {
            lex();
            expr = {
                type: Syntax.BinaryExpression,
                operator: '^',
                left: expr,
                right: parseBitwiseORExpression()
            };
        }

        return expr;
    }

    // 11.11 Binary Logical Operators

    function parseLogicalANDExpression() {
        var expr = parseBitwiseXORExpression();

        while (match('&&')) {
            lex();
            expr = {
                type: Syntax.LogicalExpression,
                operator: '&&',
                left: expr,
                right: parseBitwiseXORExpression()
            };
        }

        return expr;
    }

    function parseLogicalORExpression() {
        var expr = parseLogicalANDExpression();

        while (match('||')) {
            lex();
            expr = {
                type: Syntax.LogicalExpression,
                operator: '||',
                left: expr,
                right: parseLogicalANDExpression()
            };
        }

        return expr;
    }

    // 11.12 Conditional Operator

    function parseConditionalExpression() {
        var expr, previousAllowIn, consequent;

        expr = parseLogicalORExpression();

        if (match('?')) {
            lex();
            previousAllowIn = allowIn;
            allowIn = true;
            consequent = parseAssignmentExpression();
            allowIn = previousAllowIn;
            expect(':');

            expr = {
                type: Syntax.ConditionalExpression,
                test: expr,
                consequent: consequent,
                alternate: parseAssignmentExpression()
            };
        }

        return expr;
    }

    // 11.13 Assignment Operators

    function parseAssignmentExpression() {
        var expr;

        expr = parseConditionalExpression();

        if (matchAssign()) {
            // LeftHandSideExpression
            if (lastParenthesized !== expr && !isLeftHandSide(expr)) {
                throwError({}, Messages.InvalidLHSInAssignment);
            }

            // 11.13.1
            if (strict && expr.type === Syntax.Identifier && isRestrictedWord(expr.name)) {
                throwError({}, Messages.StrictLHSAssignment);
            }

            expr = {
                type: Syntax.AssignmentExpression,
                operator: lex().value,
                left: expr,
                right: parseAssignmentExpression()
            };
        }

        return expr;
    }

    // 11.14 Comma Operator

    function parseExpression() {
        var expr = parseAssignmentExpression();

        if (match(',')) {
            expr = {
                type: Syntax.SequenceExpression,
                expressions: [ expr ]
            };

            while (index < length) {
                if (!match(',')) {
                    break;
                }
                lex();
                expr.expressions.push(parseAssignmentExpression());
            }

        }
        return expr;
    }

    // 12.1 Block

    function parseStatementList() {
        var list = [],
            statement;

        while (index < length) {
            if (match('}')) {
                break;
            }
            statement = parseSourceElement();
            if (typeof statement === 'undefined') {
                break;
            }
            list.push(statement);
        }

        return list;
    }

    function parseBlock() {
        var block;

        expect('{');

        block = parseStatementList();

        expect('}');

        return {
            type: Syntax.BlockStatement,
            body: block
        };
    }

    // 12.2 Variable Statement

    function parseVariableIdentifier() {
        var token = lex();

        if (token.type !== Token.Identifier) {
            throwUnexpected(token);
        }

        return {
            type: Syntax.Identifier,
            name: token.value
        };
    }

    function parseVariableDeclaration(kind) {
        var id = parseVariableIdentifier(),
            init = null;

        // 12.2.1
        if (strict && isRestrictedWord(id.name)) {
            throwError({}, Messages.StrictVarName);
        }

        if (kind === 'const') {
            expect('=');
            init = parseAssignmentExpression();
        } else if (match('=')) {
            lex();
            init = parseAssignmentExpression();
        }

        return {
            type: Syntax.VariableDeclarator,
            id: id,
            init: init
        };
    }

    function parseVariableDeclarationList(kind) {
        var list = [];

        while (index < length) {
            list.push(parseVariableDeclaration(kind));
            if (!match(',')) {
                break;
            }
            lex();
        }

        return list;
    }

    function parseVariableStatement() {
        var declarations;

        expectKeyword('var');

        declarations = parseVariableDeclarationList();

        consumeSemicolon();

        return {
            type: Syntax.VariableDeclaration,
            declarations: declarations,
            kind: 'var'
        };
    }

    // kind may be `const` or `let`
    // Both are experimental and not in the specification yet.
    // see http://wiki.ecmascript.org/doku.php?id=harmony:const
    // and http://wiki.ecmascript.org/doku.php?id=harmony:let
    function parseConstLetDeclaration(kind) {
        var declarations;

        expectKeyword(kind);

        declarations = parseVariableDeclarationList(kind);

        consumeSemicolon();

        return {
            type: Syntax.VariableDeclaration,
            declarations: declarations,
            kind: kind
        };
    }

    // 12.3 Empty Statement

    function parseEmptyStatement() {
        expect(';');

        return {
            type: Syntax.EmptyStatement
        };
    }

    // 12.4 Expression Statement

    function parseExpressionStatement() {
        var expr = parseExpression();

        consumeSemicolon();

        return {
            type: Syntax.ExpressionStatement,
            expression: expr
        };
    }

    // 12.5 If statement

    function parseIfStatement() {
        var test, consequent, alternate;

        expectKeyword('if');

        expect('(');

        test = parseExpression();

        expect(')');

        consequent = parseStatement();

        if (matchKeyword('else')) {
            lex();
            alternate = parseStatement();
        } else {
            alternate = null;
        }

        return {
            type: Syntax.IfStatement,
            test: test,
            consequent: consequent,
            alternate: alternate
        };
    }

    // 12.6 Iteration Statements

    function parseDoWhileStatement() {
        var body, test, oldInIteration;

        expectKeyword('do');

        oldInIteration = inIteration;
        inIteration = true;

        body = parseStatement();

        inIteration = oldInIteration;

        expectKeyword('while');

        expect('(');

        test = parseExpression();

        expect(')');

        if (match(';')) {
            lex();
        }

        return {
            type: Syntax.DoWhileStatement,
            body: body,
            test: test
        };
    }

    function parseWhileStatement() {
        var test, body, oldInIteration;

        expectKeyword('while');

        expect('(');

        test = parseExpression();

        expect(')');

        oldInIteration = inIteration;
        inIteration = true;

        body = parseStatement();

        inIteration = oldInIteration;

        return {
            type: Syntax.WhileStatement,
            test: test,
            body: body
        };
    }

    function parseForVariableDeclaration() {
        var token = lex();

        return {
            type: Syntax.VariableDeclaration,
            declarations: parseVariableDeclarationList(),
            kind: token.value
        };
    }

    function parseForStatement() {
        var init, test, update, left, right, body, oldInIteration;

        init = test = update = null;

        expectKeyword('for');

        expect('(');

        if (match(';')) {
            lex();
        } else {
            if (matchKeyword('var') || matchKeyword('let')) {
                allowIn = false;
                init = parseForVariableDeclaration();
                allowIn = true;

                if (init.declarations.length === 1 && matchKeyword('in')) {
                    lex();
                    left = init;
                    right = parseExpression();
                    init = null;
                }
            } else {
                allowIn = false;
                init = parseExpression();
                allowIn = true;

                if (matchKeyword('in')) {
                    // LeftHandSideExpression
                    if (matchKeyword('in') && (lastParenthesized !== init && !isLeftHandSide(init))) {
                        throwError({}, Messages.InvalidLHSInForIn);
                    }
                    lex();
                    left = init;
                    right = parseExpression();
                    init = null;
                }
            }

            if (typeof left === 'undefined') {
                expect(';');
            }
        }

        if (typeof left === 'undefined') {

            if (!match(';')) {
                test = parseExpression();
            }
            expect(';');

            if (!match(')')) {
                update = parseExpression();
            }
        }

        expect(')');

        oldInIteration = inIteration;
        inIteration = true;

        body = parseStatement();

        inIteration = oldInIteration;

        if (typeof left === 'undefined') {
            return {
                type: Syntax.ForStatement,
                init: init,
                test: test,
                update: update,
                body: body
            };
        }

        return {
            type: Syntax.ForInStatement,
            left: left,
            right: right,
            body: body,
            each: false
        };
    }

    // 12.7 The continue statement

    function parseContinueStatement() {
        var token, label = null;

        expectKeyword('continue');

        // Optimize the most common form: 'continue;'.
        if (source[index] === ';') {
            lex();
            
            if (!inIteration) {
                throwError({}, Messages.IllegalContinue);
            }

            return {
                type: Syntax.ContinueStatement,
                label: null
            };
        }

        if (peekLineTerminator()) {
            if (!inIteration) {
                throwError({}, Messages.IllegalContinue);
            }

            return {
                type: Syntax.ContinueStatement,
                label: null
            };
        }

        token = lookahead();
        if (token.type === Token.Identifier) {
            label = parseVariableIdentifier();

            if (!Object.prototype.hasOwnProperty.call(labelSet, label.name)) {
                throwError({}, Messages.UnknownLabel, label.name);
            }
        }

        consumeSemicolon();

        if (label === null && !inIteration) {
            throwError({}, Messages.IllegalContinue);
        }

        return {
            type: Syntax.ContinueStatement,
            label: label
        };
    }

    // 12.8 The break statement

    function parseBreakStatement() {
        var token, label = null;

        expectKeyword('break');

        // Optimize the most common form: 'break;'.
        if (source[index] === ';') {
            lex();
            
            if (!(inIteration || inSwitch)) {
                throwError({}, Messages.IllegalBreak);
            }

            return {
                type: Syntax.BreakStatement,
                label: null
            };
        }

        if (peekLineTerminator()) {
            if (!(inIteration || inSwitch)) {
                throwError({}, Messages.IllegalBreak);
            }

            return {
                type: Syntax.BreakStatement,
                label: null
            };
        }

        token = lookahead();
        if (token.type === Token.Identifier) {
            label = parseVariableIdentifier();

            if (!Object.prototype.hasOwnProperty.call(labelSet, label.name)) {
                throwError({}, Messages.UnknownLabel, label.name);
            }
        }

        consumeSemicolon();

        if (label === null && !(inIteration || inSwitch)) {
            throwError({}, Messages.IllegalBreak);
        }

        return {
            type: Syntax.BreakStatement,
            label: label
        };
    }

    // 12.9 The return statement

    function parseReturnStatement() {
        var token, argument = null;

        expectKeyword('return');

        if (!inFunctionBody) {
            throwErrorTolerant({}, Messages.IllegalReturn);
        }

        // 'return' followed by a space and an identifier is very common.
        if (source[index] === ' ') {
            if (isIdentifierStart(source[index + 1])) {
                argument = parseExpression();
                consumeSemicolon();
                return {
                    type: Syntax.ReturnStatement,
                    argument: argument
                };
            }
        }

        if (peekLineTerminator()) {
            return {
                type: Syntax.ReturnStatement,
                argument: null
            };
        }

        if (!match(';')) {
            token = lookahead();
            if (!match('}') && token.type !== Token.EOF) {
                argument = parseExpression();
            }
        }

        consumeSemicolon();

        return {
            type: Syntax.ReturnStatement,
            argument: argument
        };
    }

    // 12.10 The with statement

    function parseWithStatement() {
        var object, body;

        if (strict) {
            throwErrorTolerant({}, Messages.StrictModeWith);
        }

        expectKeyword('with');

        expect('(');

        object = parseExpression();

        expect(')');

        body = parseStatement();

        return {
            type: Syntax.WithStatement,
            object: object,
            body: body
        };
    }

    // 12.10 The swith statement

    function parseSwitchCase(test) {
        var consequent = [],
            statement;

        while (index < length) {
            if (match('}') || matchKeyword('default') || matchKeyword('case')) {
                break;
            }
            statement = parseStatement();
            if (typeof statement === 'undefined') {
                break;
            }
            consequent.push(statement);
        }

        return {
            type: Syntax.SwitchCase,
            test: test,
            consequent: consequent
        };
    }

    function parseSwitchStatement() {
        var discriminant, cases, test, oldInSwitch;

        expectKeyword('switch');

        expect('(');

        discriminant = parseExpression();

        expect(')');

        expect('{');

        if (match('}')) {
            lex();
            return {
                type: Syntax.SwitchStatement,
                discriminant: discriminant
            };
        }

        cases = [];

        oldInSwitch = inSwitch;
        inSwitch = true;

        while (index < length) {
            if (match('}')) {
                break;
            }

            if (matchKeyword('default')) {
                lex();
                test = null;
            } else {
                expectKeyword('case');
                test = parseExpression();
            }
            expect(':');

            cases.push(parseSwitchCase(test));
        }

        inSwitch = oldInSwitch;

        expect('}');

        return {
            type: Syntax.SwitchStatement,
            discriminant: discriminant,
            cases: cases
        };
    }

    // 12.13 The throw statement

    function parseThrowStatement() {
        var argument;

        expectKeyword('throw');

        if (peekLineTerminator()) {
            throwError({}, Messages.NewlineAfterThrow);
        }

        argument = parseExpression();

        consumeSemicolon();

        return {
            type: Syntax.ThrowStatement,
            argument: argument
        };
    }

    // 12.14 The try statement

    function parseCatchClause() {
        var param;

        expectKeyword('catch');

        expect('(');
        if (!match(')')) {
            param = parseExpression();
            // 12.14.1
            if (strict && param.type === Syntax.Identifier && isRestrictedWord(param.name)) {
                throwError({}, Messages.StrictCatchVariable);
            }
        }
        expect(')');

        return {
            type: Syntax.CatchClause,
            param: param,
            guard: null,
            body: parseBlock()
        };
    }

    function parseTryStatement() {
        var block, handlers = [], finalizer = null;

        expectKeyword('try');

        block = parseBlock();

        if (matchKeyword('catch')) {
            handlers.push(parseCatchClause());
        }

        if (matchKeyword('finally')) {
            lex();
            finalizer = parseBlock();
        }

        if (handlers.length === 0 && !finalizer) {
            throwError({}, Messages.NoCatchOrFinally);
        }

        return {
            type: Syntax.TryStatement,
            block: block,
            handlers: handlers,
            finalizer: finalizer
        };
    }

    // 12.15 The debugger statement

    function parseDebuggerStatement() {
        expectKeyword('debugger');

        consumeSemicolon();

        return {
            type: Syntax.DebuggerStatement
        };
    }

    // 12 Statements

    function parseStatement() {
        var token = lookahead(),
            expr,
            labeledBody;

        if (token.type === Token.EOF) {
            throwUnexpected(token);
        }

        if (token.type === Token.Punctuator) {
            switch (token.value) {
            case ';':
                return parseEmptyStatement();
            case '{':
                return parseBlock();
            case '(':
                return parseExpressionStatement();
            default:
                break;
            }
        }

        if (token.type === Token.Keyword) {
            switch (token.value) {
            case 'break':
                return parseBreakStatement();
            case 'continue':
                return parseContinueStatement();
            case 'debugger':
                return parseDebuggerStatement();
            case 'do':
                return parseDoWhileStatement();
            case 'for':
                return parseForStatement();
            case 'function':
                return parseFunctionDeclaration();
            case 'if':
                return parseIfStatement();
            case 'return':
                return parseReturnStatement();
            case 'switch':
                return parseSwitchStatement();
            case 'throw':
                return parseThrowStatement();
            case 'try':
                return parseTryStatement();
            case 'var':
                return parseVariableStatement();
            case 'while':
                return parseWhileStatement();
            case 'with':
                return parseWithStatement();
            default:
                break;
            }
        }

        expr = parseExpression();

        // 12.12 Labelled Statements
        if ((expr.type === Syntax.Identifier) && match(':')) {
            lex();

            if (Object.prototype.hasOwnProperty.call(labelSet, expr.name)) {
                throwError({}, Messages.Redeclaration, 'Label', expr.name);
            }

            labelSet[expr.name] = true;
            labeledBody = parseStatement();
            delete labelSet[expr.name];

            return {
                type: Syntax.LabeledStatement,
                label: expr,
                body: labeledBody
            };
        }

        consumeSemicolon();

        return {
            type: Syntax.ExpressionStatement,
            expression: expr
        };
    }

    // 13 Function Definition

    function parseFunctionSourceElements() {
        var sourceElement, sourceElements = [], token, directive, firstRestricted, oldLabelSet, oldInIteration, oldInSwitch, oldInFunctionBody;

        expect('{');

        while (index < length) {
            token = lookahead();
            if (token.type !== Token.StringLiteral) {
                break;
            }

            sourceElement = parseSourceElement();
            sourceElements.push(sourceElement);
            if (sourceElement.expression.type !== Syntax.Literal) {
                // this is not directive
                break;
            }
            directive = sliceSource(token.range[0] + 1, token.range[1] - 1);
            if (directive === 'use strict') {
                strict = true;
                if (firstRestricted) {
                    throwError(firstRestricted, Messages.StrictOctalLiteral);
                }
            } else {
                if (!firstRestricted && token.octal) {
                    firstRestricted = token;
                }
            }
        }

        oldLabelSet = labelSet;
        oldInIteration = inIteration;
        oldInSwitch = inSwitch;
        oldInFunctionBody = inFunctionBody;

        labelSet = {};
        inIteration = false;
        inSwitch = false;
        inFunctionBody = true;

        while (index < length) {
            if (match('}')) {
                break;
            }
            sourceElement = parseSourceElement();
            if (typeof sourceElement === 'undefined') {
                break;
            }
            sourceElements.push(sourceElement);
        }

        expect('}');

        labelSet = oldLabelSet;
        inIteration = oldInIteration;
        inSwitch = oldInSwitch;
        inFunctionBody = oldInFunctionBody;

        return {
            type: Syntax.BlockStatement,
            body: sourceElements
        };
    }

    function parseFunctionDeclaration() {
        var id, param, params = [], body, token, firstRestricted, message, previousStrict, paramSet;

        expectKeyword('function');
        token = lookahead();
        id = parseVariableIdentifier();
        if (strict) {
            if (isRestrictedWord(token.value)) {
                throwError(token, Messages.StrictFunctionName);
            }
        } else {
            if (isRestrictedWord(token.value)) {
                firstRestricted = token;
                message = Messages.StrictFunctionName;
            } else if (isStrictModeReservedWord(token.value)) {
                firstRestricted = token;
                message = Messages.StrictReservedWord;
            }
        }

        expect('(');

        if (!match(')')) {
            paramSet = {};
            while (index < length) {
                token = lookahead();
                param = parseVariableIdentifier();
                if (strict) {
                    if (isRestrictedWord(token.value)) {
                        throwError(token, Messages.StrictParamName);
                    }
                    if (Object.prototype.hasOwnProperty.call(paramSet, token.value)) {
                        throwError(token, Messages.StrictParamDupe);
                    }
                } else if (!firstRestricted) {
                    if (isRestrictedWord(token.value)) {
                        firstRestricted = token;
                        message = Messages.StrictParamName;
                    } else if (isStrictModeReservedWord(token.value)) {
                        firstRestricted = token;
                        message = Messages.StrictReservedWord;
                    } else if (Object.prototype.hasOwnProperty.call(paramSet, token.value)) {
                        firstRestricted = token;
                        message = Messages.StrictParamDupe;
                    }
                }
                params.push(param);
                paramSet[param.name] = true;
                if (match(')')) {
                    break;
                }
                expect(',');
            }
        }

        expect(')');

        previousStrict = strict;
        body = parseFunctionSourceElements();
        if (strict && firstRestricted) {
            throwError(firstRestricted, message);
        }
        strict = previousStrict;

        return {
            type: Syntax.FunctionDeclaration,
            id: id,
            params: params,
            body: body
        };
    }

    function parseFunctionExpression() {
        var token, id = null, firstRestricted, message, param, params = [], body, previousStrict, paramSet;

        expectKeyword('function');

        if (!match('(')) {
            token = lookahead();
            id = parseVariableIdentifier();
            if (strict) {
                if (isRestrictedWord(token.value)) {
                    throwError(token, Messages.StrictFunctionName);
                }
            } else {
                if (isRestrictedWord(token.value)) {
                    firstRestricted = token;
                    message = Messages.StrictFunctionName;
                } else if (isStrictModeReservedWord(token.value)) {
                    firstRestricted = token;
                    message = Messages.StrictReservedWord;
                }
            }
        }

        expect('(');

        if (!match(')')) {
            paramSet = {};
            while (index < length) {
                token = lookahead();
                param = parseVariableIdentifier();
                if (strict) {
                    if (isRestrictedWord(token.value)) {
                        throwError(token, Messages.StrictParamName);
                    }
                    if (Object.prototype.hasOwnProperty.call(paramSet, token.value)) {
                        throwError(token, Messages.StrictParamDupe);
                    }
                } else if (!firstRestricted) {
                    if (isRestrictedWord(token.value)) {
                        firstRestricted = token;
                        message = Messages.StrictParamName;
                    } else if (isStrictModeReservedWord(token.value)) {
                        firstRestricted = token;
                        message = Messages.StrictReservedWord;
                    } else if (Object.prototype.hasOwnProperty.call(paramSet, token.value)) {
                        firstRestricted = token;
                        message = Messages.StrictParamDupe;
                    }
                }
                params.push(param);
                paramSet[param.name] = true;
                if (match(')')) {
                    break;
                }
                expect(',');
            }
        }

        expect(')');

        previousStrict = strict;
        body = parseFunctionSourceElements();
        if (strict && firstRestricted) {
            throwError(firstRestricted, message);
        }
        strict = previousStrict;

        return {
            type: Syntax.FunctionExpression,
            id: id,
            params: params,
            body: body
        };
    }

    // 14 Program

    function parseSourceElement() {
        var token = lookahead();

        if (token.type === Token.Keyword) {
            switch (token.value) {
            case 'const':
            case 'let':
                return parseConstLetDeclaration(token.value);
            case 'function':
                return parseFunctionDeclaration();
            default:
                return parseStatement();
            }
        }

        if (token.type !== Token.EOF) {
            return parseStatement();
        }
    }

    function parseSourceElements() {
        var sourceElement, sourceElements = [], token, directive, firstRestricted;

        while (index < length) {
            token = lookahead();
            if (token.type !== Token.StringLiteral) {
                break;
            }

            sourceElement = parseSourceElement();
            sourceElements.push(sourceElement);
            if (sourceElement.expression.type !== Syntax.Literal) {
                // this is not directive
                break;
            }
            directive = sliceSource(token.range[0] + 1, token.range[1] - 1);
            if (directive === 'use strict') {
                strict = true;
                if (firstRestricted) {
                    throwError(firstRestricted, Messages.StrictOctalLiteral);
                }
            } else {
                if (!firstRestricted && token.octal) {
                    firstRestricted = token;
                }
            }
        }

        while (index < length) {
            sourceElement = parseSourceElement();
            if (typeof sourceElement === 'undefined') {
                break;
            }
            sourceElements.push(sourceElement);
        }
        return sourceElements;
    }

    function parseProgram() {
        var program;
        strict = false;
        program = {
            type: Syntax.Program,
            body: parseSourceElements()
        };
        return program;
    }

    // The following functions are needed only when the option to preserve
    // the comments is active.

    function addComment(start, end, type, value) {
        assert(typeof start === 'number', 'Comment must have valid position');

        // Because the way the actual token is scanned, often the comments
        // (if any) are skipped twice during the lexical analysis.
        // Thus, we need to skip adding a comment if the comment array already
        // handled it.
        if (extra.comments.length > 0) {
            if (extra.comments[extra.comments.length - 1].range[1] > start) {
                return;
            }
        }

        extra.comments.push({
            range: [start, end],
            type: type,
            value: value
        });
    }

    function scanComment() {
        var comment, ch, start, blockComment, lineComment;

        comment = '';
        blockComment = false;
        lineComment = false;

        while (index < length) {
            ch = source[index];

            if (lineComment) {
                ch = nextChar();
                if (index >= length) {
                    lineComment = false;
                    comment += ch;
                    addComment(start, index - 1, 'Line', comment);
                } else if (isLineTerminator(ch)) {
                    lineComment = false;
                    addComment(start, index - 1, 'Line', comment);
                    if (ch === '\r' && source[index] === '\n') {
                        ++index;
                    }
                    ++lineNumber;
                    lineStart = index;
                    comment = '';
                } else {
                    comment += ch;
                }
            } else if (blockComment) {
                if (isLineTerminator(ch)) {
                    if (ch === '\r' && source[index + 1] === '\n') {
                        ++index;
                        comment += '\r\n';
                    } else {
                        comment += ch;
                    }
                    ++lineNumber;
                    ++index;
                    lineStart = index;
                    if (index >= length) {
                        throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
                    }
                } else {
                    ch = nextChar();
                    if (index >= length) {
                        throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
                    }
                    comment += ch;
                    if (ch === '*') {
                        ch = source[index];
                        if (ch === '/') {
                            comment = comment.substr(0, comment.length - 1);
                            blockComment = false;
                            ++index;
                            addComment(start, index - 1, 'Block', comment);
                            comment = '';
                        }
                    }
                }
            } else if (ch === '/') {
                ch = source[index + 1];
                if (ch === '/') {
                    start = index;
                    index += 2;
                    lineComment = true;
                } else if (ch === '*') {
                    start = index;
                    index += 2;
                    blockComment = true;
                    if (index >= length) {
                        throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
                    }
                } else {
                    break;
                }
            } else if (isWhiteSpace(ch)) {
                ++index;
            } else if (isLineTerminator(ch)) {
                ++index;
                if (ch ===  '\r' && source[index] === '\n') {
                    ++index;
                }
                ++lineNumber;
                lineStart = index;
            } else {
                break;
            }
        }
    }

    function collectToken() {
        var token = extra.advance(),
            range,
            value;

        if (token.type !== Token.EOF) {
            range = [token.range[0], token.range[1] - 1];
            value = sliceSource(token.range[0], token.range[1]);
            extra.tokens.push({
                type: TokenName[token.type],
                value: value,
                id: token.value,
                range: range
            });
        }

        return token;
    }

    function collectRegex() {
        var pos, regex, token;

        skipComment();

        pos = index;
        regex = extra.scanRegExp();

        // Pop the previous token, which is likely '/' or '/='
        if (extra.tokens.length > 0) {
            token = extra.tokens[extra.tokens.length - 1];
            if (token.range[0] === pos && token.type === 'Punctuator') {
                if (token.value === '/' || token.value === '/=') {
                    extra.tokens.pop();
                }
            }
        }

        extra.tokens.push({
            type: 'RegularExpression',
            value: regex.literal,
            range: [pos, index - 1]
        });

        return regex;
    }

    function createLiteral(token) {
        return {
            type: Syntax.Literal,
            value: token.value
        };
    }

    function createRawLiteral(token) {
        return {
            type: Syntax.Literal,
            value: token.value,
            raw: sliceSource(token.range[0], token.range[1])
        };
    }

    function wrapTrackingFunction(range, loc) {

        return function (parseFunction) {

            function isBinary(node) {
                return node.type === Syntax.LogicalExpression ||
                    node.type === Syntax.BinaryExpression;
            }

            function visit(node) {
                if (isBinary(node.left)) {
                    visit(node.left);
                }
                if (isBinary(node.right)) {
                    visit(node.right);
                }

                if (range && typeof node.range === 'undefined') {
                    node.range = [node.left.range[0], node.right.range[1]];
                }
                if (loc && typeof node.loc === 'undefined') {
                    node.loc = {
                        start: node.left.loc.start,
                        end: node.right.loc.end
                    };
                }
            }

            return function () {
                var node, rangeInfo, locInfo;

                skipComment();
                rangeInfo = [index, 0];
                locInfo = {
                    start: {
                        line: lineNumber,
                        column: index - lineStart
                    }
                };

                node = parseFunction.apply(null, arguments);
                if (typeof node !== 'undefined') {

                    if (range) {
                        rangeInfo[1] = index - 1;
                        node.range = rangeInfo;
                    }

                    if (loc) {
                        locInfo.end = {
                            line: lineNumber,
                            column: index - lineStart
                        };
                        node.loc = locInfo;
                    }

                    if (isBinary(node)) {
                        visit(node);
                    }

                    if (node.type === Syntax.MemberExpression) {
                        if (typeof node.object.range !== 'undefined') {
                            node.range[0] = node.object.range[0];
                        }
                        if (typeof node.object.loc !== 'undefined') {
                            node.loc.start = node.object.loc.start;
                        }
                    }
                    return node;
                }
            };

        };
    }

    function patch() {

        var wrapTracking;

        if (extra.comments) {
            extra.skipComment = skipComment;
            skipComment = scanComment;
        }

        if (extra.raw) {
            extra.createLiteral = createLiteral;
            createLiteral = createRawLiteral;
        }

        if (extra.range || extra.loc) {

            wrapTracking = wrapTrackingFunction(extra.range, extra.loc);

            extra.parseAdditiveExpression = parseAdditiveExpression;
            extra.parseAssignmentExpression = parseAssignmentExpression;
            extra.parseBitwiseANDExpression = parseBitwiseANDExpression;
            extra.parseBitwiseORExpression = parseBitwiseORExpression;
            extra.parseBitwiseXORExpression = parseBitwiseXORExpression;
            extra.parseBlock = parseBlock;
            extra.parseFunctionSourceElements = parseFunctionSourceElements;
            extra.parseCallMember = parseCallMember;
            extra.parseCatchClause = parseCatchClause;
            extra.parseComputedMember = parseComputedMember;
            extra.parseConditionalExpression = parseConditionalExpression;
            extra.parseConstLetDeclaration = parseConstLetDeclaration;
            extra.parseEqualityExpression = parseEqualityExpression;
            extra.parseExpression = parseExpression;
            extra.parseForVariableDeclaration = parseForVariableDeclaration;
            extra.parseFunctionDeclaration = parseFunctionDeclaration;
            extra.parseFunctionExpression = parseFunctionExpression;
            extra.parseLogicalANDExpression = parseLogicalANDExpression;
            extra.parseLogicalORExpression = parseLogicalORExpression;
            extra.parseMultiplicativeExpression = parseMultiplicativeExpression;
            extra.parseNewExpression = parseNewExpression;
            extra.parseNonComputedMember = parseNonComputedMember;
            extra.parseNonComputedProperty = parseNonComputedProperty;
            extra.parseObjectProperty = parseObjectProperty;
            extra.parseObjectPropertyKey = parseObjectPropertyKey;
            extra.parsePostfixExpression = parsePostfixExpression;
            extra.parsePrimaryExpression = parsePrimaryExpression;
            extra.parseProgram = parseProgram;
            extra.parsePropertyFunction = parsePropertyFunction;
            extra.parseRelationalExpression = parseRelationalExpression;
            extra.parseStatement = parseStatement;
            extra.parseShiftExpression = parseShiftExpression;
            extra.parseSwitchCase = parseSwitchCase;
            extra.parseUnaryExpression = parseUnaryExpression;
            extra.parseVariableDeclaration = parseVariableDeclaration;
            extra.parseVariableIdentifier = parseVariableIdentifier;

            parseAdditiveExpression = wrapTracking(extra.parseAdditiveExpression);
            parseAssignmentExpression = wrapTracking(extra.parseAssignmentExpression);
            parseBitwiseANDExpression = wrapTracking(extra.parseBitwiseANDExpression);
            parseBitwiseORExpression = wrapTracking(extra.parseBitwiseORExpression);
            parseBitwiseXORExpression = wrapTracking(extra.parseBitwiseXORExpression);
            parseBlock = wrapTracking(extra.parseBlock);
            parseFunctionSourceElements = wrapTracking(extra.parseFunctionSourceElements);
            parseCallMember = wrapTracking(extra.parseCallMember);
            parseCatchClause = wrapTracking(extra.parseCatchClause);
            parseComputedMember = wrapTracking(extra.parseComputedMember);
            parseConditionalExpression = wrapTracking(extra.parseConditionalExpression);
            parseConstLetDeclaration = wrapTracking(extra.parseConstLetDeclaration);
            parseEqualityExpression = wrapTracking(extra.parseEqualityExpression);
            parseExpression = wrapTracking(extra.parseExpression);
            parseForVariableDeclaration = wrapTracking(extra.parseForVariableDeclaration);
            parseFunctionDeclaration = wrapTracking(extra.parseFunctionDeclaration);
            parseFunctionExpression = wrapTracking(extra.parseFunctionExpression);
            parseLogicalANDExpression = wrapTracking(extra.parseLogicalANDExpression);
            parseLogicalORExpression = wrapTracking(extra.parseLogicalORExpression);
            parseMultiplicativeExpression = wrapTracking(extra.parseMultiplicativeExpression);
            parseNewExpression = wrapTracking(extra.parseNewExpression);
            parseNonComputedMember = wrapTracking(extra.parseNonComputedMember);
            parseNonComputedProperty = wrapTracking(extra.parseNonComputedProperty);
            parseObjectProperty = wrapTracking(extra.parseObjectProperty);
            parseObjectPropertyKey = wrapTracking(extra.parseObjectPropertyKey);
            parsePostfixExpression = wrapTracking(extra.parsePostfixExpression);
            parsePrimaryExpression = wrapTracking(extra.parsePrimaryExpression);
            parseProgram = wrapTracking(extra.parseProgram);
            parsePropertyFunction = wrapTracking(extra.parsePropertyFunction);
            parseRelationalExpression = wrapTracking(extra.parseRelationalExpression);
            parseStatement = wrapTracking(extra.parseStatement);
            parseShiftExpression = wrapTracking(extra.parseShiftExpression);
            parseSwitchCase = wrapTracking(extra.parseSwitchCase);
            parseUnaryExpression = wrapTracking(extra.parseUnaryExpression);
            parseVariableDeclaration = wrapTracking(extra.parseVariableDeclaration);
            parseVariableIdentifier = wrapTracking(extra.parseVariableIdentifier);
        }

        if (typeof extra.tokens !== 'undefined') {
            extra.advance = advance;
            extra.scanRegExp = scanRegExp;

            advance = collectToken;
            scanRegExp = collectRegex;
        }
    }

    function unpatch() {
        if (typeof extra.skipComment === 'function') {
            skipComment = extra.skipComment;
        }

        if (extra.raw) {
            createLiteral = extra.createLiteral;
        }

        if (extra.range || extra.loc) {
            parseAdditiveExpression = extra.parseAdditiveExpression;
            parseAssignmentExpression = extra.parseAssignmentExpression;
            parseBitwiseANDExpression = extra.parseBitwiseANDExpression;
            parseBitwiseORExpression = extra.parseBitwiseORExpression;
            parseBitwiseXORExpression = extra.parseBitwiseXORExpression;
            parseBlock = extra.parseBlock;
            parseFunctionSourceElements = extra.parseFunctionSourceElements;
            parseCallMember = extra.parseCallMember;
            parseCatchClause = extra.parseCatchClause;
            parseComputedMember = extra.parseComputedMember;
            parseConditionalExpression = extra.parseConditionalExpression;
            parseConstLetDeclaration = extra.parseConstLetDeclaration;
            parseEqualityExpression = extra.parseEqualityExpression;
            parseExpression = extra.parseExpression;
            parseForVariableDeclaration = extra.parseForVariableDeclaration;
            parseFunctionDeclaration = extra.parseFunctionDeclaration;
            parseFunctionExpression = extra.parseFunctionExpression;
            parseLogicalANDExpression = extra.parseLogicalANDExpression;
            parseLogicalORExpression = extra.parseLogicalORExpression;
            parseMultiplicativeExpression = extra.parseMultiplicativeExpression;
            parseNewExpression = extra.parseNewExpression;
            parseNonComputedMember = extra.parseNonComputedMember;
            parseNonComputedProperty = extra.parseNonComputedProperty;
            parseObjectProperty = extra.parseObjectProperty;
            parseObjectPropertyKey = extra.parseObjectPropertyKey;
            parsePrimaryExpression = extra.parsePrimaryExpression;
            parsePostfixExpression = extra.parsePostfixExpression;
            parseProgram = extra.parseProgram;
            parsePropertyFunction = extra.parsePropertyFunction;
            parseRelationalExpression = extra.parseRelationalExpression;
            parseStatement = extra.parseStatement;
            parseShiftExpression = extra.parseShiftExpression;
            parseSwitchCase = extra.parseSwitchCase;
            parseUnaryExpression = extra.parseUnaryExpression;
            parseVariableDeclaration = extra.parseVariableDeclaration;
            parseVariableIdentifier = extra.parseVariableIdentifier;
        }

        if (typeof extra.scanRegExp === 'function') {
            advance = extra.advance;
            scanRegExp = extra.scanRegExp;
        }
    }

    function stringToArray(str) {
        var length = str.length,
            result = [],
            i;
        for (i = 0; i < length; ++i) {
            result[i] = str.charAt(i);
        }
        return result;
    }

    function parse(code, options) {
        var program, toString;

        toString = String;
        if (typeof code !== 'string' && !(code instanceof String)) {
            code = toString(code);
        }

        source = code;
        index = 0;
        lineNumber = (source.length > 0) ? 1 : 0;
        lineStart = 0;
        length = source.length;
        buffer = null;
        allowIn = true;
        labelSet = {};
        inSwitch = false;
        inIteration = false;
        lastParenthesized = null;
        inFunctionBody = false;

        extra = {};
        if (typeof options !== 'undefined') {
            extra.range = (typeof options.range === 'boolean') && options.range;
            extra.loc = (typeof options.loc === 'boolean') && options.loc;
            extra.raw = (typeof options.raw === 'boolean') && options.raw;
            if (typeof options.tokens === 'boolean' && options.tokens) {
                extra.tokens = [];
            }
            if (typeof options.comment === 'boolean' && options.comment) {
                extra.comments = [];
            }
            if (typeof options.tolerant === 'boolean' && options.tolerant) {
                extra.errors = [];
            }
        }

        if (length > 0) {
            if (typeof source[0] === 'undefined') {
                // Try first to convert to a string. This is good as fast path
                // for old IE which understands string indexing for string
                // literals only and not for string object.
                if (code instanceof String) {
                    source = code.valueOf();
                }

                // Force accessing the characters via an array.
                if (typeof source[0] === 'undefined') {
                    source = stringToArray(code);
                }
            }
        }

        patch();
        try {
            program = parseProgram();
            if (typeof extra.comments !== 'undefined') {
                program.comments = extra.comments;
            }
            if (typeof extra.tokens !== 'undefined') {
                program.tokens = extra.tokens;
            }
            if (typeof extra.errors !== 'undefined') {
                program.errors = extra.errors;
            }
        } catch (e) {
            throw e;
        } finally {
            unpatch();
            extra = {};
        }

        return program;
    }

    // Sync with package.json.
    exports.version = '0.9.9';

    exports.parse = parse;

}(typeof exports === 'undefined' ? (esprima = {}) : exports));
/* vim: set sw=4 ts=4 et tw=80 : */
