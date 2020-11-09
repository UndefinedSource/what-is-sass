var sec1 = document.getElementById("article_content1");
var sec2 = document.getElementById("article_content2");
var sec3 = document.getElementById("article_content3");

// bad code
document.addEventListener("scroll", function() {
    var currentYaxis = window.pageYOffset;
    var triggerPoisitonYaxis = 300;

    if (currentYaxis + triggerPoisitonYaxis > sec1.offsetTop) {
        sec1.classList.add("fade-in");
    }
    if (currentYaxis + triggerPoisitonYaxis > sec2.offsetTop) {
        sec2.classList.add("fade-in");
    }
    if (currentYaxis + triggerPoisitonYaxis > sec3.offsetTop) {
        sec3.classList.add("fade-in");
    }
})