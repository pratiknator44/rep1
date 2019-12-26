arena=null;
headingLabel= null;
function init() {
arena = document.getElementById('arena');
console.log(arena);
}

function showCategory(category) {
    var cat = document.getElementById('category-'+category);
    cat.style.display = 'block';
}