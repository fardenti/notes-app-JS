(function(exports){
  function Note(text="My favourite language is JavaScript"){
    this._text = text;
  }

  Note.prototype.displayNote = function(){
    return this._text;
  }
  exports.Note = Note;
})(this);
