
async function login(){
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var myHeaders = new Headers();
    var valami;

    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({"api_key":"f5a2efedb74c3a13aeaca6c842d20d0b","email":email,"password":password});
    
var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

    let response = await fetch("http://teachersystem.herokuapp.com/teachers/login_teacher", requestOptions);
    if (response.ok) {
        window.location = "home.html";
} else {
  alert("Incorrect e-mail or password");
}
}