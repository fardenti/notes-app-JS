(function(exports){
  function Note(){
    this._text = "My favourite language is JavaScript";
  }

  Note.prototype.displayNote = function(){
    return this._text;
  }
  exports.Note = Note;
})(this);

