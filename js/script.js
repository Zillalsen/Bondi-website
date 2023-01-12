let links = document.querySelectorAll(".links li");
let imgs = document.querySelectorAll(".box img");

links.forEach((e) => {
  e.addEventListener("click", removeActive);
  e.addEventListener("click", (u) => {
    let filter = u.target.dataset.filter;
    imgs.forEach((img) => {
      if (img.classList.contains(filter)) {
        img.parentElement.parentElement.style.display = "block";
      } else {
        img.parentElement.parentElement.style.display = "none";
      }
    });
  });
});

function removeActive() {
  links.forEach((link) => {
    link.classList.remove("active");
    this.classList.add("active");
  });
}

// scrollreveal js

const scr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2000,
  delay: 400,
  // reset: true,
});

scr.reveal(` .subscribe ,.info, .footer .links, .footer .contact`),
  scr.reveal(`.landing .content , .project`, {
    origin: "bottom",
    distance: "20px",
  }),
  scr.reveal(`.about-data`, { origin: "left" }),
  scr.reveal(`.image img`, { origin: "right" }),
  scr.reveal(
    `.features .feat, .our-work .box, .team .box, .techs img , .card`,
    {
      interval: 100,
    }
  );
