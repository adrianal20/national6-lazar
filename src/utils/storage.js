export function logOut(){
    localStorage.removeItem("name");
    localStorage.removeItem("password");
    localStorage.removeItem("breed");
    localStorage.removeItem("index");
    redirect();
}

function redirect(){
    window.location = "/";
}