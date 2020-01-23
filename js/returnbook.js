BorrowedName  = document.querySelector('#borrowedName');
BorrowedAuthor = document.querySelector('#borrowedAuthor');
returnBtn = document.querySelector('#returnBtn');

async function renderBooks(doc){
     let li = document.createElement('h2');
     let Name = document.createElement('h2');
     let Author = document.createElement('h3');
     let btn = document.createElement('BUTTON');
    btn.innerHTML = "RETURN BOOK";
    btn.className = "btn btn-success"; 

    li.setAttribute('data-id',doc.id);
    Name.textContent = doc.data().Name;
    Author.textContent = doc.data().Author;

    li.appendChild(Name);
    li.appendChild(Author);
    li.appendChild(btn);
    BorrowedName.appendChild(li);
btn.addEventListener("click",function(){
        sessionStorage.setItem("bookname", Name.textContent);
        window.location = "bookreturn.html";
    });

}

async function printBooks(){

db.collection('Books').where('Available','==',false).get().then(snapshot => {
        snapshot.docs.forEach(doc => {
        renderBooks(doc);
    });
});
}