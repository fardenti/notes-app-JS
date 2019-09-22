(function(exports){
  function NoteController(notelist){
    this._notelist = notelist;
    this._notelist.createNewNote("Favourite drink: seltzer");
   
  
    NoteController.prototype.changeText = function(){
      var view = new NoteListView(this._notelist);
      console.log(view)
      let element = document.getElementById('app');
      element.innerHTML = view.createView();
      // console.log(view)
      // return view.createView();
      
  }
  }
exports.NoteController = NoteController;
})(this);

// var ctrl = new NoteController()
// ctrl.changeText();
