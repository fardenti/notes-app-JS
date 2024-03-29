(function(exports){
  function NoteList(){
    this.noteArray = [];
  }


    NoteList.prototype.displayAllNotes = function(){
      this.noteArray.forEach((item, i) => {
        item.id = i + 0;
      });
      return this.noteArray;
    }

    NoteList.prototype.createNewNote = function(text){
      this.noteArray.push(new Note(text));
    }

  exports.NoteList = NoteList;
  })(this);
