"use strict";

const fetch = require("node-fetch");
fetch.Promise = require("bluebird");
const nihongo = require("nihongo");

function translate(toTranslate) {
	// determine source and target languages
	const sourceLanguage = getSourceLanguage(toTranslate);
	const targetLanguage = getTargetLanguage(sourceLanguage);

	// build query for translator service
	const queryString = buildQuery(toTranslate, sourceLanguage, targetLanguage);

	// call translator service with query
	return fetch(queryString);
}

function getSourceLanguage(toTranslate) {
	// if source not Japanese set to unknown
	return nihongo.hasJapanese(toTranslate) ? "ja" : "";
}


function getTargetLanguage(sourceLanguage) {
	// if source not Japanese, translate into Japanese
	return sourceLanguage === "ja" ? "en" : "ja";
}

function buildQuery(toTranslate, sourceLanguage, targetLanguage) {

	var queryString = process.env.TRANSLATOR + "?";
	queryString += "input=" + encodeURIComponent(toTranslate);
	queryString += "&source=" + sourceLanguage;
	queryString += "&target=" + targetLanguage;

	return queryString;
}

module.exports = {
	translate: translate
};
