#japanese-translator-interface
A promise-based interface to a translator web service for Japanese translation

The web service must be set as the environment variable *TRANSLATOR* and respond to HTTP
GET requests with the following parameters:
* *input* - The text to translate
* *source* - The language of the input text, or the empty string "" for language auto-detection
* *target* - The language to translate to