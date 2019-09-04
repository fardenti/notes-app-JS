(function(exports){
  function NoteList(){
    this.noteArray = [];

    NoteList.prototype.displayAllNotes = function(){
      console.log(this.noteArray)
      return this.noteArray;
    }

    NoteList.prototype.createNewNote = function(text){
      this.noteArray.push(new Note(text));
      console.log(this.noteArray);
    }

  }

  exports.NoteList = NoteList;

  })(this);
