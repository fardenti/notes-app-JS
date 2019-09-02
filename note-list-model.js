(function(exports){
  function NoteList(){
    this._noteArray = [];

    NoteList.prototype.displayAllNotes = function(){
      return this._noteArray;
    }

    NoteList.prototype.createNewNote = function(text){
      this._noteArray.push(new Note(text));
    }

  }



  exports.NoteList = NoteList;

  })(this);
