JSON with extended support for custom objects
=============================================

Description
-----------

This library extends standard JSON support in JavaScript to fully support 
objects like Date. It does that by using a special format with strings but only 
when it is needed.

	           JSON                |        JavaScript     |                             Description
	-------------------------------+-----------------------+---------------------------------------------------------------------------
	 "Hello"                       | "Hello"               | If it doesn't end ")" or doesn't have "(", it can be presented normally
	 "Date(1287197914000)"         | Date(1287197914000)   | Date object
	 "String(Date(1287197914000))" | "Date(1287197914000)" | String object
	 "UIMessage(OK)"               | UIMessage(...)        | Custom object
	-------------------------------+-----------------------+---------------------------------------------------------------------------

Installation for Node.js
------------------------

Simplest way to install is to use [npm](http://npmjs.org/), just simply `npm install json-object`.

License
-------

MIT-style license, see [INSTALL.txt](http://github.com/jheusala/node-json-object/blob/master/LICENSE.txt).

Example Code
------------
