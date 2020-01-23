var book = sessionStorage.getItem("bookname");
document.getElementById("Title").textContent = book;

function rdb(doc){
     let fine = document.createElement('span');
    fine.textContent = doc.data().Value;
     
     var rad = document.myForm.myRadios;
    var rd = false;
    var pay = "";
    for (var i = 0; i < rad.length; i++) {
    rad[i].addEventListener('change', function() {
        if(rd){
           pay = fine.textContent; 
            rd = false;
        }else{
           pay = "0";
            rd=true;
        }
        document.getElementById("fine").textContent = pay;
    });
}
}
async function confirmBook(){
db.collection('Books').where('Name','==',book).get().then(snapshot => {
        snapshot.docs.forEach(doc => {
            let promise = new Promise(async function(resolve, reject) {
                db.collection('Books').doc(doc.id).update({
                Available: true
   });
                window.location = "profile.html";
});
     
    });
})
}


async function loadrdb(){
db.collection('Books').where('Name','==',book).get().then(snapshot => {
        snapshot.docs.forEach(doc => {
         rdb(doc);
    });
});
}
