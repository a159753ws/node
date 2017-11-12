var foo = {
    "hello"     : "world",
    "node"      : "js",
    "blahblah"  : "bar"
};

for(var key in foo) {
	console.log(key + ":" + foo[key]);
}
