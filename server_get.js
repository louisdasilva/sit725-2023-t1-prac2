/**
const express = require("express");
const res = require("express/lib/response")
const app = express();
**/

const express = require('express');
const app = express();
const port = process.env.port || 3040;

const addTwoNumber = (n1,n2) => {
	return n1 + n2;
}

const multiplyTwoNumber = (n1,n2) => {
	return n1*n2;
}

app.get('/', (req, res) => {
	res.send('hello world');
});

app.get('/addTwoNumber', (req,res) => {
	const n1 = parseInt(req.query.n1);
	const n2 = parseInt(req.query.n2);
	const result = addTwoNumber(n1,n2);
	res.json({statuscode:200, data:result});
});

app.get('/multiplyTwoNumber', (req,res) => {
	const n1 = parseInt(req.query.n1);
	const n2 = parseInt(req.query.n2);
	const result = multiplyTwoNumber(n1,n2);
	res.json({statuscode:200, data:result});
});

app.listen(port, () => {
	console.log(`listening on port ${port}`);
});