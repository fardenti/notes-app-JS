(function(exports){
  function NoteController(list = new NoteList){
    this._notelist = list;
   
  }
   

  NoteController.prototype.changeText = function(){
    this._notelist.createNewNote("Favourite drink: seltzer");
    let view = new NoteListView(this._notelist)
    let element = document.getElementById('app');
    element.innerHTML = view.createView();
  }

exports.NoteController = NoteController;
})(this);

var ctrl = new NoteController()
ctrl.changeText();

