const check = document.getElementById("check");
const err = document.querySelector(".Error");

const country = document.getElementById("country");    
      const form = document.forms["google-sheet"];
      const btn = document.querySelector(".btnsubmit");
      var checked = false;
       check.addEventListener("input",(e)=>{
        
        if(e.target.checked){
          console.log('hey');
          checked = true;
          
          
        }
        else{
          console.log('not check');
          e.preventDefault();
        }
      });
      btn.addEventListener("click",(e)=>{
        
        if(checked && email.value && first && last && country){
          document.querySelector(".formMain").submit();
        }
        else{
        err.style.display = "block";  
          e.preventDefault();
        }
      });