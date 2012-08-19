// copy-paste to console in about:blank (or use as a bookmarklet)
(function() {
    var collectNames = function(obj, arr, seen) {
	for (var i in obj) {
	    var v = null;
	    try {
		v = obj[i];
	    } catch(e) {}
	    if (typeof v == 'string' && !seen[v] && !/^(\d|\s)*$/.test(v)) {
		arr.push(v);
		seen[v] = true;
	    }
	    if (!seen[i] && !/^(\d|\s)*$/.test(i)) {
		arr.push(i);
		seen[i] = true;
		if (v !== null) {
		    collectNames(v, arr, seen);
		}
	    }
	}
	if (obj && obj.prototype) {
	    collectNames(obj.prototype, arr, seen);
	} 
	return arr;
    };
    
    var names = collectNames(this, [], {}).sort();
    var h = {};
    names.forEach(function(i){ h[i] = i; });
    var str = JSON.stringify(h, null, 4);
    document.body.innerHTML = '<pre>'+str+'</pre>';
})();
