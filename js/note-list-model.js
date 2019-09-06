(function(exports){
  function NoteList(){
    this.noteArray = [];
  }

    NoteList.prototype.displayAllNotes = function(){
      return this.noteArray;
    }

    NoteList.prototype.createNewNote = function(text){
      this.noteArray.push(new Note(text));
    }

  exports.NoteList = NoteList;
  })(this);
