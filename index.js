const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
        document.querySelectorAll(".animated")[0].classList.add("fade1");
        document.querySelectorAll(".animated")[1].classList.add("fade2");
        document.querySelectorAll(".animated")[2].classList.add("fade3");
        }
    })
});

observer.observe(document.querySelector(".content-container"));
