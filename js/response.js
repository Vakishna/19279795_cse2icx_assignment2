/*  
    Encode URI Component for forms
    encodeURIComponent(variableName)
*/

var qd = {};
location.search.substr(1).split("&").forEach(function(item) {var k = item.split("=")[0], v = encodeURIComponent(item.split("=")[1]); (k in qd) ? qd[k].push(v) : qd[k] = [v]})

$("#order").append("<table style=\"font-size: 10px; \"><tr id=\"one\"></tr><tr id=\"two\"></tr></table>");

for (const value of Object.keys(qd)) {
    var row = "<td>"+value+"</td>"
    $("#one").append(row);
}

for (const value of Object.values(qd)) {
    var str = value;
    var row = "<td>"+decodeURIComponent(str)+"</td>"
    $("#two").append(row);
}

$( "table" ).serialize();