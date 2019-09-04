(function(exports){
  function GetAppDiv(){
 
  }

  GetAppDiv.prototype.displayHTML = function(){
    var elem = document.getElementById('app');
    elem.innerHTML = "howdy";
    console.log(elem);
  }
 
GetAppDiv.prototype.displayHTML();

exports.GetAppDiv = GetAppDiv;
})(this);

