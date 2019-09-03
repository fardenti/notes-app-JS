var counter = 1;

(function(exports){
  let assert = {
    isTrue: function(assertionToCheck){
      if (!assertionToCheck) {
        throw new Error ("Assertion failed: " + assertionToCheck + " is not truthy");
      } else {
        console.log(counter + " test passed " + assertionToCheck);
      }
    }
  }
  exports.assert = assert;
})(this);

(function(exports){
  function testForExistanceOfNote(){
    const note = new Note("text");
    assert.isTrue(typeof note !== "undefined");
  };

  exports.testForExistanceOfNote = testForExistanceOfNote;
})(this);

testForExistanceOfNote();
counter++;



(function(exports){
  function testForExistanceOfText(){
    const note = new Note();
    const text = note._text;
    assert.isTrue(typeof text !== "undefined");
  }

  function testForDisplayNote(){
    const note = new Note();
    assert.isTrue(note.displayNote() === "My favourite language is JavaScript");
  }

  function testForDisplayAllNotes(){
    let testNote = new Note();
    const noteList = new NoteList();
    noteList._noteArray = [testNote];
    assert.isTrue(noteList.displayAllNotes()[0] == testNote);
  }

  function testForCreateNewNote(){
    const testString = "Favourite drink: seltzer"
    const noteList = new NoteList();
    noteList.createNewNote(testString);
    assert.isTrue(noteList.displayAllNotes()[0]._text == testString);
  }

  function testForNoteListView(){
    const noteOne = {
      _text: "string 1"
    }
    const noteTwo= {
      _text: "string 2"
    }
    const noteList = {
      noteArray: [noteOne, noteTwo]
    }

    const noteListView = new NoteListView();
    const result = noteListView.createView();
    assert.isTrue(result == "<ul><li><div>string 1</div></li><li><div>string 2</div></li></ul>");
  }
  exports.testForExistanceOfText = testForExistanceOfText;
  exports.testForDisplayNote = testForDisplayNote;
  exports.testForDisplayAllNotes = testForDisplayAllNotes;
  exports.testForCreateNewNote = testForCreateNewNote;
  exports.testForNoteListView = testForNoteListView;
})(this);

testForExistanceOfText();
counter++;
testForDisplayNote();
counter++;
testForDisplayAllNotes();
counter++;
testForCreateNewNote();
counter++;
testForNoteListView();
counter++;
