//Author Mia xu
@import "../js/utility.js";

var app = NSApplication.sharedApplication(),
    selection,
    plugin,
    command,
    doc,
    page,
    artboards,
    selectedArtboard;

function createBookCover(context){
  var sketch = context.api()
  var bundle = context.plugin
  // [doc showMessage:"New plugin update is available! Visit github.com/timuric/Content-generator-sketch-plugin"]
  alert("This will help you create  a book cover","Creat BookCover")

  // var imageURL = ('../data/image/book/1.png')
  var imageURL = sketch.resourceNamed('1.png')

  // var imageURL = bundle.url() + "Contents/Sketch/" + "/data/image/book/1.png"

  log (imageURL)
  var document = sketch.selectedDocument
  var  page = document.selectedPage

  // var group = page.newGroup({frame: new sketch.Rectangle(0, 0, 375, 640)})
  // var image = page.newImage({frame: new sketch.Rectangle(0, 0, 375, 640), imageURL:imageURL})

  // var group = page.newGroup({frame: new sketch.Rectangle(0, 0, 375, 640)})
  var image = page.newImage({frame: new sketch.Rectangle(0, 0, 375, 640), imageURL:imageURL})


  doc = context.document
  plugin = context.plugin
  command = context.command
  page = doc.currentPage()
  artboards = page.artboards()  
  selectedArtboard = page.currentArtboard()  // 当前被选择的画板
  selection = context.selection   // 被选择的图层

  for(var i=0; i<selection.count(); i++) {
    var layer = selection[i]
    log('layer ' + layer.name + ' is selected.')
  }


}

function onRun(context) {

  // We are passed a context variable when we're run.
  // We use this to get hold of a javascript object
  // which we can use in turn to manipulate Sketch.
  var sketch = context.api()

  // Next we want to extract the selected page of the selected (front-most) document
  var document = sketch.selectedDocument
  var page = document.selectedPage
  var pages = document.pages;
  var page1 = pages[0];
  var xumengmeg = Array["hahha","ddf","fmsd"];


  // Now let's create a new text layer, using a large font, and a traditional value...
  var layer = page.newText({alignment: NSTextAlignmentCenter, systemFontSize: 36, text:"Hello World"})

  // ...resize it so that the text just fits...
  layer.adjustToFit()

  // Finally, lets center the view on our new layer
  // so that we can see where it is.
  document.centerOnLayer(layer)
};

// And that's it. Job done.
//
// Obviously this is only the tip of the iceberg. Check out some of the other examples to see what else can be done.
//
// If you have questions, comments or any feedback, ping us at <developer@sketchapp.com>!
