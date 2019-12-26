
fileTag;
files;
function startUpload() {
    var fileTag = document.getElementsByClassName("upload-file")[0];
    console.log(fileTag);
}

function showName () {
    var fileTag = document.getElementsByClassName("upload-file")[0];
    console.log('Selected file: ', fileTag.files);
}

