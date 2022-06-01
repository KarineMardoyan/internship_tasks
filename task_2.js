var codelines =
	"We graduate in one month. Sarah's birthday arrives that same day. My family from Montana will be there. They have to sit inside a hot stuffy gym. Tears shall flow as friends say goodbye. Soon it is all over. ";
var spl = codelines.split(" ");
console.log(spl)
var firstWords = []
for (var i = 0; i < 1; i++) {
    firstWords.push(spl[0])
}

for (var i = 1; i < spl.length-1; i++) {
	if (spl[i].charAt(0) === spl[i].charAt(0).toUpperCase() && spl[i-1].includes('.')) {
		firstWords.push(spl[i]);
	}
}

console.log(firstWords);
