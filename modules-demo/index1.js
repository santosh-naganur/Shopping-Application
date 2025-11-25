const validator = require("validator");
console.log("URL is:"+ validator.isURL("http://www.google.com"));
console.log("Email is:"+validator.isEmail("santosh.naganur178@gmail.com"));