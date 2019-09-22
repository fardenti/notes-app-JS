(function(exports){
  function Note(text){
    this._text = text;
  }

  Note.prototype.displayNote = function(){
    return this._text;
  }


  exports.Note = Note;
})(this);
