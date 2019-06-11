var express = require('express');
var app = express();

 
// app.get('/', function (req, res) {
//   res.send('Hello World!');
// });
let User = require("/home/anshul/dataStr/user.js")
let Awa = require("/home/anshul/dataStr/stud.js")

var a = [0, 1, 0, 2, 0, 3, 2, 4]
var res = []
var reqRes = [0,1,2,3,4];
var result = [];
var map = new Map();
function abbbb(){
res.push(a[0]);
//result.push(a[0])
map.set(a[0], true);
while(res.length>0){
    let vk = res.shift();
    result.push(vk);
    for(var i =1; i<a.length; i++){
      if(!map.has(a[i])){
        result.push(a[i])
        map.set(a[i], true)
      }
    }
}
}
abbbb();
console.log(result);





//console.log(Awa.getUser());
// async function kkkk(){
//   return new Promise(async (res, rej) => {
//     let xx = await Awa.getUser();
//     console.log(xx + "ssssssssssssssss");
//     res('done');
//    console.log(res);
    
//   })
// }
// //kkkk();
// //console.log(xx);
// //let xxxx  =  Awa.getUsers;
// var arr = new Array(3);
// for(var i = 0; i< 3; i++){
//   arr[i] =[];
//   for(var j= 0 ; j< 4; j++){
//     arr[i][j] = i
//   }
// }
// var csv = 'Name,Title,ssss,dddd\n';
//     arr.forEach(function(row) {
//             csv += row.join(',');
//             csv += "\n";
//     });
 
//     console.log(csv);

// console.log(arr);
// // const matrix = new Array(5).fill(0).map(() => new Array(4).fill(0));
// // console.log(matrix)
// //console.log(ansh)

// var user =  new User("Anshul");

// var a =  [0,1,0,2,0,3,2,4]


app.listen(4000, function () {
  console.log('Example app listening on port 4000!');
})