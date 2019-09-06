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
    let note = new Note("text");
    let text = note._text;
    assert.isTrue(typeof text !== "undefined");
  }

  function testForDisplayNote(){
    let note = new Note("My favourite language is JavaScript");
    assert.isTrue(note.displayNote() === "My favourite language is JavaScript");
  }

  function testForCreateNewNote(){
    const testString = "hello"
    const noteList = new NoteList();
    noteList.createNewNote(testString);
    assert.isTrue(noteList.displayAllNotes()[0]._text == testString);
  }

  function testForNoteListView(){
    const list = new NoteList();
    const noteListView = new NoteListView(list);
    noteListView._noteList.createNewNote("string 1");
    noteListView._noteList.createNewNote("string 2");
    const result = noteListView.createView();
    assert.isTrue(result == "<ul><li><div>string 1</div></li><li><div>string 2</div></li></ul>");
  }

  // function testForNoteController(){
    
  // }
  exports.testForExistanceOfText = testForExistanceOfText;
  exports.testForDisplayNote = testForDisplayNote;
  exports.testForCreateNewNote = testForCreateNewNote;
  exports.testForNoteListView = testForNoteListView;
  // exports.testForNoteController = testForNoteController;
})(this);

testForExistanceOfText();
counter++;
testForDisplayNote();
counter++;
testForCreateNewNote();
counter++;
testForNoteListView();
counter++;
// testForNoteController();
// counter++;
