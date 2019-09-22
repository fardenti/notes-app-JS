(function(exports){
  function NoteListView(notelist){
    this._noteList = notelist;
  }

  NoteListView.prototype.createView = function(){
    let array = (this._noteList.displayAllNotes().map(x => "<li><div class='text'><a href='#notes/" + x.id  + "'>" + x._text + "</a></div></li>").join(""));
    console.log(array)
    let htmlArray = "<ul>" + array + "</ul>"
    return htmlArray
  }
  exports.NoteListView = NoteListView;
})(this);
