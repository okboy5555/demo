var newTemp = document.getElementById('new-temp');
var tmpl = '<p>this is new temp</p>';
newTemp.innerHTML = ejs.render(tmpl);
console.log(newTemp);