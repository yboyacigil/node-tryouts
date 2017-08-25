#!/usr/bin/env node

var bunyan = require('bunyan');

var log = bunyan.createLogger({
	name: 'myapp',
	streams: [
		{
			stream: process.stdout,
			level: 'info'
		},
		{
			level: 'error',
			path: './myapp-error.log'
		}
	]
});

log.info('Hello, %s!', 'World');

log.error('Some error occured!');


log.info('Start');
function Wuzzle(options) {
	this.log = options.log.child({ widget_type: 'wuzzle'});
	this.log.info('Wuzzle created');
}

Wuzzle.prototype.woos = function() {
	this.log.warn('This wuzzle is wuzzling');
}

var wuzzle = new Wuzzle({log: log});
wuzzle.woos();

log.info('End');
