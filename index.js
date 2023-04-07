//Mobile navigation

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function (){
  headerEl.classList.toggle("nav-open");
});

//////smoth scrolling animation

const allLinks = document.querySelector("a:link");

allLinks.forEach(function(link){
 link.addEventListener("click", function (e){
    e.preventDefault();
    const href = link.getAttribute("href")
    console.log(href)
 
    //////////scroll back to top
    if(href === "#")
    window.scrollTo({
    top:0,
    behavior: "smooth"
   });

  });
});

//Fixing flexbox gap property missing in some Safari versions

function checkFlexGap(){
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px"

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight == 1;
  flex.parentNode.removeChild(flex);

  if(!isSupported) document.body.classList.add("no-flexbox-gap")

}

checkFlexGap();