var dataLayer = {"stuff": "goesinhere"}

//onload JS, randomize bg image on page load
window.onload = function() {
  var bg = document.querySelector('body');
  var req = new XMLHttpRequest();
  req.open('GET', 'https://raw.githubusercontent.com/worldwidewes/worldwidewes.github.io/master/images.json');
  req.onload = function(){
    var data = JSON.parse(req.responseText);
    var randomImageIndex = Math.floor((Math.random() * (data.length - 1)) + 1);
    bg.style.backgroundRepeat =  "no-repeat";
    bg.style.backgroundSize = "cover";
    bg.style.backgroundColor = "black";
    bg.style.backgroundImage = "url(" + data[randomImageIndex].url + ")";
  }
  req.onerror = function(){
    console.error("Image URL Connection Error!");
  };
  req.send();


  //Set debugging
  if(document.URL.indexOf("debug=true") > -1){
    document.cookie = "debug=true";
    window.debugger = true;
  }
};

//Change Background Image, Fired on Button Click
function changeBGImage() {
  var bg = document.querySelector('body');
    if(window.debugger){debugger;};
    if (!window.bg_data){
      window.bg_data = {};
      var req = new XMLHttpRequest();
      req.open('GET', 'https://raw.githubusercontent.com/worldwidewes/worldwidewes.github.io/master/images.json');
      req.onload = function(){
        var data = JSON.parse(req.responseText);
        window.bg_data = data;
        var randomImageIndex = Math.floor((Math.random() * (data.length - 1)) + 1);
        bg.style.backgroundRepeat =  "no-repeat";
        bg.style.backgroundSize = "cover";
        bg.style.backgroundImage = "url(" + data[randomImageIndex].url + ")";
      }
      req.onerror = function(){
        console.error("Image URL Connection Error!");
      };
      req.send();
    }else if(window.bg_data){
      var randomImageIndex = Math.floor((Math.random() * (window.bg_data.length - 1)) + 1);
      bg.style.backgroundImage = "url(" + window.bg_data[randomImageIndex].url + ")";
    }
  }

//Testbed Javascript
function promiseAll() {
  if(window.debugger){debugger;};
//Practicing Promises
  const function1 = new Promise((resolve, reject) => {
    console.log("Function 1 started!")
    setTimeout(() => {
      resolve('Function 1 completed after .5 seconds')
    }, 500);
  })

  const function2 = new Promise((resolve, reject) => {
    console.log("Function 2 started!")
    setTimeout(() => {
      resolve('Function 2 completed after 2 seconds')
    }, 2000);
  })

  const function3 = new Promise((resolve, reject) => {
    console.log("Function 3 started!")
    setTimeout(() => {
      resolve('Function 3 completed after 1.5 seconds')
    }, 1500);
  })

  //Start all functions together, but only do .then() or .catch() when all completed
  Promise.all([
    function1,
    function2,
    function3
  ])
  .then((messages) => {
    console.log(messages[0]);
    console.log(messages[1]);
    console.log(messages[2]);
  })
  .catch((errors) => {
    console.log(errors);
  });

//   const getIDs = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       //success -> call resolve passsing through val in .then() below
//       resolve([523, 883, 432, 974]);
//       console.log("getIDs finished");
//     }, 1500);
//   });
  
//   const getRecipe = recID => {
//     console.log("getRecipe called");
//     return new Promise((resolve, reject) => {
//       setTimeout(ID => {
//         const recipe = {title: "Fresh tomato pasta", publisher: "Jonas"};
//         resolve(`${ID}: ${recipe.title}`);
//       }, 1500, recID);
//     });
//   }

// //IDs is the value passed from promise resolve() above
//   getIDs.then(IDs => {
//       console.log(IDs);
//       return getRecipe(IDs[2]);
//     })
//     .then(recipe => {
//       console.log(recipe);
//     })
//     .catch(error => {
//       console.log("error!");
//     });
}

function promiseThen() {
  if(window.debugger){debugger;};
//Practicing Promises
  const function1 = new Promise((resolve, reject) => {
    console.log("Function 1 started!")
    setTimeout(() => {
      resolve('Function 1 completed after 1 second')
    }, 1000);
  })

  const function2 = (resolvedMessage) => {
    return new Promise((resolve, reject) => {
      console.log("Function 2 started!")
      setTimeout(() => {
        resolve('Function 2 completed after 1 second')
      }, 1000);
    })
  }

  const function3 = (resolvedMessage) => {
    return new Promise((resolve, reject) => {
      console.log("Function 3 started!")
      setTimeout(() => {
        resolve('Function 3 completed after 1 second')
      }, 1000);
    })
  }

  //Start all functions together, but only do .then() or .catch() when all completed
 function1
  .then((message) => {
    console.log(message);
    return function2(message);
  })
  .then((message) => {
    console.log(message);
    return function3(message);
  })
  .then((message) => {
    console.log(message);
  })
  .catch((errors) => {
    console.log(errors);
  });
}