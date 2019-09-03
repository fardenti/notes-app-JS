(function(exports){
  function NoteListView(){
    this._noteList = new NoteList();
    console.log(this._noteList);
  }

  NoteListView.prototype.createView = function(){
    return "<ul><li><div>string 1</div></li><li><div>string 2</div></li></ul>"
    
 
  }
  exports.NoteListView = NoteListView;
})(this);
