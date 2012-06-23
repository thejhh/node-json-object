var json = require('json-object').setup(global),
    util = require('util');

// Our custom object
function UIMessage(msg, date) {
	this.msg = "" + msg;
	this.date = date || new Date();
}

// Extend our custom object to support json-object
UIMessage.prototype.toJSON = (function() { return new json.JSONObject('UIMessage', [this.msg, this.date] ); });
json.revivers.UIMessage    = (function(value) { return new UIMessage(value[0], value[1]); });

// Test for the object
var data = new UIMessage("Hello World!");
console.log("data = " + util.inspect(data));

var str = json.stringify(data);
console.log("str = " + util.inspect(str));

var parsed_data = json.parse(str);
console.log("parsed_data = " + util.inspect(parsed_data));
