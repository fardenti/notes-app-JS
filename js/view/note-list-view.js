(function(exports){
  function NoteListView(notelist){
    this._noteList = notelist;
  }

  NoteListView.prototype.createView = function(){
    let array = (this._noteList.displayAllNotes().map(x => "<li><div class='text'>" + x._text + "</div></li>").join(""));
    let htmlArray = "<ul>" + array + "</ul>"
    return htmlArray
  }
  exports.NoteListView = NoteListView;
})(this);
