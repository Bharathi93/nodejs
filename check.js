var fs = require('fs');


var array1=[];
var text=[];
var text1=[];
var text2=[];
var text3=[];
fs.readFile("datafile13.csv", function (err, data)
{
  if (err)
  {
    return console.error(err);
  }
  //Split the data into different rows of array
  var a=data.toString();
  array1=a.split("\r\n");
  //console.log(array1[0]);


  //Get the key values//
  var key=[];
  key = array1[0].split(",");


  //Get the values for the key//

  for(var i=1;i<=20;i++)
  {
    var value = array1[i].split(",");

    //Object for GDP,Population by country name//
    var obj=new Object();
    obj[key[0]] = value[0];
    obj[key[5]] = value[5];
    obj[key[9]] = value[9];
    if (value[0]==="European Union")
    {
      text.push(obj);
      text.pop(obj);
    }
    else
    text.push(obj);

    //Object for GDP and country Name//
    var obj1=new Object();
    obj1[key[0]]=value[0];
    obj1[key[9]]=value[9];
    if (value[0]==="European Union")
    {
      text1.push(obj1);
      text1.pop(obj1);
    }
    else
    text1.push(obj1);

    //Object for Population and country Name//
    var obj2=new Object();
    obj2[key[0]]=value[0];
    obj2[key[5]]=value[5];
    if (value[0]==="European Union")
    {
      text2.push(obj2);
      text2.pop(obj2);
    }
    else
    text2.push(obj2);

    //Object for Purchasing power and country Name//
    var obj3=new Object();
    obj3[key[0]]=value[0];
    obj3[key[17]]=value[17];
    if (value[0]==="European Union")
    {
      text3.push(obj3);
      text3.pop(obj3);
    }
    else
    text3.push(obj3);
  }

  //Sorting the objects in descending order for file 1//
  var a={};
  var b={};
  text1.sort(function(a, b)
  {
    return a[key[9]] - b[key[9]];
  });
  text1.reverse();

  //To display the sorted file
  // for(var i=0;i<19;i++)
  // {
  //   console.log(text1[i]);
  // }

  //Sorting the objects in descending order for file 2//
  text2.sort(function(a, b)
  {
    return a[key[5]] - b[key[5]];
  });
  text2.reverse();

  //To display the sorted file
  // for(var i=0;i<19;i++)
  // {
  //   console.log(text2[i]);
  // }

  //Sorting the objects in descending order for file 3//
  text3.sort(function(a, b)
  {
    return a[key[17]] - b[key[17]];
  });
  text3.reverse();


  //To display the sorted file3
  // for(var i=0;i<19;i++)
  // {
  //   console.log(text3[i]);
  // }

  //Writing the contents into file
  fs.writeFile("file.json",JSON.stringify(text),function(err)
  {
    if (err)
    return console.log(err);
    else
    console.log("Success");
  });

  //Writing the contents into file1
  fs.writeFile("file1.json",JSON.stringify(text1),function(err)
  {
    if (err)
    return console.log(err);
    else
    console.log("Success File1");
  });

  //Writing the contents into file2
  fs.writeFile("file2.json",JSON.stringify(text2),function(err)
  {
    if (err)
    return console.log(err);
    else
    console.log("Success File2");
  });


  //Writing the contents into file3
  fs.writeFile("file3.json",JSON.stringify(text3),function(err)
  {
    if (err)
    return console.log(err);
    else
    console.log("Success File3");
  });


});//Close of read file
