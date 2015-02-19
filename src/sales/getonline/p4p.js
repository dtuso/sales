$(document).ready(function(){
   stripDomainName();
});

function stripDomainName(){
      var windowParams = window.location.search.replace("?","");
      var params = windowParams.split("&");
      for(var i = 0; i < params.length;i++){
       var inputName = params[i].split("=")[0];
       var inputValue = params[i].split("=")[1];
       if(inputName == "domain"){
         inputValue = decodeURIComponent(inputValue);
         $("#business-idea").text(inputValue);
         $("#business-idea2").text(inputValue);
       }
        
    }
};
