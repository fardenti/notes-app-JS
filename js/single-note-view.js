(function(exports){
  function SingleNoteView(note){
    this._note = note;
  }
  
  SingleNoteView.prototype.returnHTML = function(){
    // var txt = this._note._text;
    // // console.log("this is the text in note " + txt );
    // // document.getElementById("single-note").innerHTML = txt;
    // var para = document.createElement("div");
    // var node = document.createTextNode(txt);
    // console.log(node)
    // para.appendChild(node);
    // var element = document.getElementById("single-note");
    // element.appendChild(para);
    
    return "<div>" + this._note._text + "</div>"
  }

exports.SingleNoteView = SingleNoteView;
})(this);
var s = new this.SingleNoteView()
s.returnHTML();