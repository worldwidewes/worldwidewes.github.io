
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


function changeBGImage() {
  var bg = document.getElementsByClassName('body');

  var req = new XMLHttpRequest();

  req.open('GET', 'https://raw.githubusercontent.com/worldwidewes/worldwidewes.github.io/master/images.json');
  req.onload = function(){
    var data = JSON.parse(req.responseText);
    debugger;
    //bg.style.backgroundImage = "url(" + responseText +")"
  }
  req.send();
};