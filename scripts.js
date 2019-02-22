
function onClick() {
  
  
  const getIDs = new Promise((resolve, reject) => {
    setTimeout(() => {
      //success -> call resolve passsing through val in .then() below
      resolve([523, 883, 432, 974]);
      console.log("getIDs finished");
    }, 1500);
  });
  
  const getRecipe = recID => {
    console.log("getRecipe called");
    return new Promise((resolve, reject) => {
      setTimeout(ID => {
        const recipe = {title: "Fresh tomato pasta", publisher: "Jonas"};
        resolve(`${ID}: ${recipe.title}`);
      }, 1500, recID);
    });
  }

  //IDs is the value passed from promise resolve() above
  getIDs.then(IDs => {
      console.log(IDs);
      return getRecipe(IDs[2]);
    })
    .then(recipe => {
      console.log(recipe);
    })
    .catch(error => {
      console.log("error!");
    });
  
    
}

(function() {
  var bg = document.querySelector('body');
  var req = new XMLHttpRequest();
  req.open('GET', 'https://raw.githubusercontent.com/worldwidewes/worldwidewes.github.io/master/images.json');
  req.onload = function(){
    var data = JSON.parse(req.responseText);
    var randomImageIndex = Math.floor((Math.random() * (data.length - 1)) + 1);
    bg.style.backgroundRepeat =  "no-repeat";
    bg.style.backgroundSize = "cover";
    bg.style.backgroundImage = "url(" + data[randomImageIndex].url + ")";
  }
  req.onerror = function(){
    console.error("Image URL Connection Error!");
  };
  req.send();
})();


function changeBGImage() {
  var bg = document.querySelector('body');

  var req = new XMLHttpRequest();

  req.open('GET', 'https://raw.githubusercontent.com/worldwidewes/worldwidewes.github.io/master/images.json');
  req.onload = function(){
    var data = JSON.parse(req.responseText);
    var randomImageIndex = Math.floor((Math.random() * (data.length - 1)) + 1);
    bg.style.backgroundRepeat =  "no-repeat";
    bg.style.backgroundSize = "cover";
    bg.style.backgroundImage = "url(" + data[randomImageIndex].url + ")";
  }
  req.onerror = function(){
    console.error("Image URL Connection Error!");
  };
  req.send();
};