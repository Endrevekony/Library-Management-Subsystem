const BookList = document.querySelector('#book-list');

console.log(name)
function renderBooks(doc){
    let li = document.createElement('li');
     let Name = document.createElement('span');
     let Author = document.createElement('span');
     
     li.setAttribute('data-id',doc.id);
    Name.textContent = doc.data().Name;
    Author.textContent = doc.data().Author;
    
    li.appendChild(Name);
    li.appendChild(Author);

    BookList.appendChild(li);
}

function kveri(){
    var isbn = document.getElementById("ISBN").value;
    var name = document.getElementById("Name").value;
    var author = document.getElementById("Author").value;
    var category = document.getElementById("Category").value;
db.collection('Books').where('Name','==',name).get().then(snapshot => {
    console.log( isbn );
    console.log( name );
    console.log( author );
    snapshot.docs.forEach(doc => {
        renderBooks(doc);
    });
});
}