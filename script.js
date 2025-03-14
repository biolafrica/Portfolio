const blogBtn = document.querySelector(".js_blog");
const molaBtn = document.querySelector(".js_mola");
const workforceBtn = document.querySelector(".js_workforce");
const blogCont = document.querySelector(".js_blog_container");
const molaCont = document.querySelector(".js_mola_container");
const workforceCont = document.querySelector(".js_workforce_container");
const footerEl = document.querySelector(".footer_js");
const headerEl = document.querySelector(".header_js");
const copyrightEl = document.querySelector(".copyright_js");
const year = new Date().getFullYear();


footerEl.innerHTML = 
`
  <h2><b>Keep in Touch</b></h2>
  <h5>I am currently specializing in <span class="mern">MERN</span> stack.</h5>
  <h5>Lets Connect and Build Something Great Together.</h5>
  
  <div class="footer-btn">
    <a href="https://drive.google.com/file/d/1PTmCWwZpgI8EqlE1GkthosEsJOq7lWjl/view?usp=sharing" class="btn" target="_blank">
      <img src="./icons/Document.svg" > Resume
    </a>
    <a href="https://www.linkedin.com/in/abiobaku/" class="btn linkedIn" target="_blank"><img src="./icons/linkedIn 1068.png" alt="https://www.linkedin.com/in/abiobaku/">
      LinkedIn
    </a>
    <a href="mailto:biolafrica@gmail.com" class="btn" target="_blank"><img src="./icons/Email.png" alt=""> Email</a>

  </div>
`;

headerEl.innerHTML = 
`
  <div class="main-header js-main-header">

    <a href="/" class="left-header-container">
      <img src="./icons/Token.png" alt="abiodun logo">
    </a>
    
    <div class="right-header-container">
      <h4><a href="./index.html">Home</a></h4>
      <h4><a href="#project">Projects</a></h4>
      <img class="hamburger js-hamburger" src="./icons/Menu.svg" alt="hamburger icon">
    </div>

  </div>

  <div class="small-header js-small-header">
    <div class="small-top-header">
    
      <a href="./index.html" class="left-header-container">
        <img src="./icons/Token.png" alt="abiodun logo">
      </a>
    
      <div class="right-header-container">
        <img class="close js-close" src="./icons/Close.svg" alt="cancel icon">
      </div>
    
    </div>

    <div class="small-header-nav">

      <div class="small-header-nav-text">
        <h3><a href="./index.html" class="nav-bold">Home</a></h3>
        <h3><a href="#project" class="nav-bold">Project</a></h3>
      </div>
      
      <a href="mailto:biolafrica@gmail.com" class="btn">Email</a>

    </div>

  </div>

`;

const headerCont = document.querySelector(".js-main-header");
const subHeaderCont = document.querySelector(".js-small-header");


copyrightEl.innerHTML = 
`
  <h6 class="dark-color">Copyright &copy; ${year} Abiodun Biobaku</h6>
`;

document.querySelectorAll(".js_project_head").forEach((btn)=>{
  btn.addEventListener('click', (e)=>{
    const id = (e.target.id);

    if(id === "blog"){
      blogBtn.classList.add('active');
      molaBtn.classList.add("disable");
      workforceBtn.classList.add("disable");
      molaBtn.classList.remove("active");
      workforceBtn.classList.remove("active");
      blogCont.style.display = "flex";
      blogCont.style.animation = 'slideInFromLeft 2s ease-out forwards';
      blogCont.style.opacity = "0";
      molaCont.style.display = "none";
      workforceCont.style.display = 'none';

    }else if(id === "mola"){
      molaBtn.classList.add("active");
      workforceBtn.classList.add("disable");
      blogBtn.classList.add('disable');
      workforceBtn.classList.remove("active");
      blogBtn.classList.remove('active');
      molaCont.style.display = "flex";
      molaCont.style.animation = 'slideInFromLeft 2s ease-out forwards';
      molaCont.style.opacity = "0";
      workforceCont.style.display = 'none';
      blogCont.style.display = "none";

    }else{
      workforceBtn.classList.add("active");
      molaBtn.classList.add("disable");
      blogBtn.classList.add('disable');
      molaBtn.classList.remove("active");
      blogBtn.classList.remove('active');
      workforceCont.style.display = "flex";
      workforceCont.style.animation = 'slideInFromLeft 2s ease-out forwards';
      workforceCont.style.opacity = "0";
      blogCont.style.display = "none";
      molaCont.style.display = "none";

    }

  })

})

document.querySelector(".js-hamburger").addEventListener("click", ()=>{
  headerCont.style.display = "none";
  subHeaderCont.style.display = "flex"
})

document.querySelector(".js-close").addEventListener("click", ()=>{
  headerCont.style.display = "flex";
  subHeaderCont.style.display = "none"
})


window.addEventListener("resize", ()=>{
  const screenWidth = window.innerWidth;
  if(screenWidth > 992){
    subHeaderCont.style.display = "none";
    headerCont.style.display = "flex";
  }
  
})

