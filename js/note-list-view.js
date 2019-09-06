(function(exports){
  function NoteListView(notelistArray){
    this._noteList = notelistArray;
  }

  NoteListView.prototype.createView = function(){
    let array = (this._noteList.displayAllNotes().map(x => "<li><div>" + x._text + "</div></li>").join(""));
    let htmlArray = "<ul>" + array + "</ul>"
    return htmlArray
  }
  exports.NoteListView = NoteListView;
})(this);
