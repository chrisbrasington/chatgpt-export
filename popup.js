// Import the PDFDocument class from the pdfkit library
const PDFDocument = require('pdfkit');

document.getElementById('export-button').onclick = function(){export_page()};

function export_page(){
  open_pdf();
}

function open_pdf() {
  alert('yo');
  // Create a new PDF document
  var doc = new PDFDocument();

  // Add content to the document
  doc.text('Hello world!');

  // Get the PDF file as a Buffer
  var pdf = doc.outputSync();

  // Create a new Blob object containing the PDF file
  var file = new Blob([pdf], { type: "application/pdf" });

  // Create a URL for the file
  var fileURL = URL.createObjectURL(file);

  // Open the PDF in a new window
  window.open(fileURL);
}