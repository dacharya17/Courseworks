var w = ["Ravens", "stadium", "is", "Orioles", "stadium"];
var x = ["Baltimore", "Downtown", "located", "near"];
var y = ["located", "Downtown", "near", "Fells Point", "Fed Hill", "Canton"];
var z = ["Towson", "Stevenson", "UMBC", "University", "Loyola", "University", "Morgan State", "Frostburg"];
var arr=[];
// Start implementation below:

x.pop();
x.pop();
x.pop();

w.pop();
w.pop();

y.pop()
y.pop()
y.pop()

z.pop();

arr=x.concat(w);
arr=arr.concat(y)
arr.push(z.pop())

// Should contain: ['Baltimore', 'Ravens', 'stadium', 'is', 'located', 'Downtown', 'near', 'Morgan State']
console.log(arr);