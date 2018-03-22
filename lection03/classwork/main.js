// do{
//     var a = +prompt('a: ',);
//     var b = +prompt('b: ',);
// } while (isNaN(a) || isNaN(b));
// var digit = 0;
// for (var i = a; i <= b; i++){
//     i < 0 ? console.log(-i*i) : console.log(i*i); 
// }

var a = 1, b = 15;
// document.write('<table border="1">');
// document.write('<tr>');
// document.write('<td>');
// for (var i = a; i <= b; i+=2){
//     document.write(i + ' ')
// }
// document.write('</td>');
// document.write('</tr>');
// document.write('<tr>');
// document.write('<td>');
// for (var i = a + 1; i <= b; i+=2){
//     document.write(i + ' ')
// }
// document.write('</td>');
// document.write('</tr>');


// document.write('</table>');
var odd = '', even = '';

for (var i = a; i <= b; i++){
    i%2 == 0 ? even+=' ' + i : odd += ' ' + i;
}

document.write('<table border="1"><tr><td>');

document.write(odd + "</td></tr><tr><td>" + even);

document.write('</table></tr></td>');