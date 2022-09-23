// ( 1 )
var object1 = {
    name: 'ABC',
    person:1,
    age: 5
  };
      
var object2 = {
    age: 5,
    name: 'ABC',
    person:1
    
  };
  
      
  JSON.stringify(object1) === JSON.stringify(object2)
  // false
      
  .isEqual(object1, object2);
  // true
  
  



// 2) 

var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all")
request.send();
request.onload=function(){
    var res=JSON.parse(request.response)
    console.log(res)
    for (var i=0; i<res.length;i++){
        console.log("COUNTRY flags :",  res[i].flags);
    }
};


// 3)
var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all")
request.send();
request.onload=function(){
        var res=JSON.parse(request.response)
        for (var i=0; i<res.length;i++){
        console.log(res[i].name, res[i].region, res[i].subregion);
    }
};
