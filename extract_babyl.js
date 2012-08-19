javascript:(function(){
    var extractMapping = function() {
	var trs = document.body.getElementsByTagName('tr');
	var mapping = {};
	for (var i=0; i<trs.length; i++) {
	    var tds = trs[i].getElementsByTagName('td');
	    if (tds[1]) {
		var key = tds[0].innerText.replace(/^\s+|\s+$/g, '');
		var value = tds[1].innerText.replace(/^\s+|\s+$/g, '');
		if (!(/\s/.test(key) || /\s/.test(value))) {
		    mapping[key] = value;
		}
	    }
	}
	return mapping;
    };
    var w = window.open();
    w.document.write('<pre>'+JSON.stringify(extractMapping(),null,4)+'</pre>');
})();