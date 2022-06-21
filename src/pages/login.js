window.onload=function(){
  const sign_in_btn = document.querySelector("#sign-in-btn");
  const sign_up_btn = document.querySelector("#sign-up-btn");
  const containerlogin = document.querySelector(".containerlogin");  
  sign_up_btn.addEventListener("click", () => {
    containerlogin.classList.add("sign-up-mode");
  });
  sign_in_btn.addEventListener("click", () => {
    containerlogin.classList.remove("sign-up-mode");
  });  
}
