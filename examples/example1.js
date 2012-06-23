console.log("String.prototype.toJSON: " + ( String.prototype.toJSON ? "exists" : "does not exist") );
console.log("Error.prototype.toJSON: " + ( Error.prototype.toJSON ? "exists" : "does not exist") );

var json = require('json-object').setup(global),
    util = require('util');

var data = {'date':new Date(),'msg':'Hello World!'};
console.log("data = " + util.inspect(data));

var str = json.stringify(data);
console.log("str = " + util.inspect(str));

var parsed_data = json.parse(str);
console.log("parsed_data = " + util.inspect(parsed_data));

console.log("String.prototype.toJSON: " + ( String.prototype.toJSON ? "exists" : "does not exist") );
console.log("Error.prototype.toJSON: " + ( Error.prototype.toJSON ? "exists" : "does not exist") );
