(function(exports){
  let assert = {
    isTrue: function(assertionToCheck){
      if (!assertionToCheck) {
        throw new Error ("Assertion failed: " + assertionToCheck + " is not truthy");
      } else {
        console.log("test passed");
      }
    }
  }
  exports.assert = assert;
})(this);

(function(exports){
  function testForExistanceOfNote(){
    const note = new Note();
    assert.isTrue(typeof note !== "undefined");
  };

  exports.testForExistanceOfNote = testForExistanceOfNote;
})(this);

testForExistanceOfNote();


(function(exports){
  function testForExistanceOfText(){
    const note = new Note();
    const text = note._text;
    assert.isTrue(typeof text !== "undefined");
  }
  function testForDisplayNote(){
    note = new Note();
    assert.isTrue(note.displayNote() === "My favourite language is JavaScript");
  }

  exports.testForExistanceOfText = testForExistanceOfText;
  exports.testForDisplayNote = testForDisplayNote;
})(this);

testForExistanceOfText();
testForDisplayNote();