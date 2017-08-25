#!/usr/bin/env node

var winston = require('winston')

// instantiate a logger
var logger = new (winston.Logger)({
	level: 'info',
	transports: [
		new (winston.transports.Console)(),
		new (winston.transports.File)({name: 'info-file', filename: 'filelog-info.log', level: 'info'}),
		new (winston.transports.File)({name: 'error-file', filename: 'filelog-error.log', level: 'error'}),
	]
});

// print logger level to console 
console.log('Current log level: ', logger.level);

// some info logs
logger.log('info', 'Some info message!');
logger.info('Another info message');

// info log with metadata
logger.info('Info message with some metadata!', { userid: '1234'});

// error log
try {
	throw new Error('Sample error');
} catch(e) {
	logger.error('An error occured', e);
}

