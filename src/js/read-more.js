const read = document.querySelector(".read");
const about = document.querySelector(".about")

read.addEventListener("click",(e)=>{
    about.classList.toggle("more-text");
    if (read.innerText === "Read more") {
        read.innerText = "Read less";
    } else {
        read.innerText = "Read more";
    }
})