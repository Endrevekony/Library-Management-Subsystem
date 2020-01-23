const BookList = document.querySelector('#book-list');
const Description = document.querySelector('#desc');
const Categories = document.querySelector('#cat');
const avl = document.querySelector('#avl');

async function renderBooks(doc){
     let li = document.createElement('BUTTON');
     let Name = document.createElement('span');
     let Author = document.createElement('span');
     let Category = document.createElement('span');
     let Available = document.createElement('span');
    
    li.setAttribute('data-id',doc.id);
    Name.textContent = doc.data().Name;
    Author.textContent = doc.data().Author;
    Category.textContent = doc.data().Category;
    Available.textContent = doc.data().Available;
    
    li.appendChild(Name);
    li.addEventListener("click",function(){
        
        while (Description.firstChild) {
        Description.removeChild(Description.firstChild);
  }
         Description.appendChild(Author);
        
        while (Categories.firstChild) {
    Categories.removeChild(Categories.firstChild);
  }
        Categories.appendChild(Category);
        
         while (avl.firstChild) {
    avl.removeChild(avl.firstChild);
  }
        avl.appendChild(Available);
    });
       
    
    BookList.appendChild(li);
    };


async function kveri(){
    var isbn = document.getElementById("ISBN").value;
    var name = document.getElementById("Name").value;
    var author = document.getElementById("Author").value;
    var category = document.getElementById("Category").value;
    while (BookList.firstChild) {
    BookList.removeChild(BookList.firstChild);
  }
    if (name.trim() != '') {
      db.collection('Books').where('Name','==',name).get().then(snapshot => {
        snapshot.docs.forEach(doc => {
        renderBooks(doc);
    });
});
    }
     if (author.trim() != '') {
      db.collection('Books').where('Author','==',author).get().then(snapshot => {
        snapshot.docs.forEach(doc => {
        renderBooks(doc);
    });
});
    }
    if (category.trim() != '') {
      db.collection('Books').where('Category','==',category).get().then(snapshot => {
        snapshot.docs.forEach(doc => {
        renderBooks(doc);
    });
});
    }
    if (isbn.trim() != '') {
      db.collection('Books').where('ISBN','==',isbn).get().then(snapshot => {
        snapshot.docs.forEach(doc => {
        renderBooks(doc);
    });
});
    }
    


}