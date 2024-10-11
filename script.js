const blogBtn = document.querySelector(".js_blog");
const molaBtn = document.querySelector(".js_mola");
const workforceBtn = document.querySelector(".js_workforce");
const blogCont = document.querySelector(".js_blog_container");
const molaCont = document.querySelector(".js_mola_container");
const workforceCont = document.querySelector(".js_workforce_container");

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

    } else if(id === "mola"){
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