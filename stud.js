module.exports.getUser = async function(){
    // Code here
   // let a = await fetch('https://od-api-demo.oxforddictionaries.com:443/api/v1/domains/english');

    return new Promise(async (resolve, reject) => {
        try{
           var ajjj =  function ass(){
                return new Promise ((res, rej) => {
                    //console.log("promise First")
                    res('await promise');
                })
            }
           let o = await ajjj();
           console.log(o);
            resolve("anshul");
        }catch(err){
            reject(err)
        }
    })
    

    //res("anshul")
}

// function getUsers() {
//     // Code here
//     console.log("verma")
// }

// module.exports = {
//     getUser,
//     getUsers
// }