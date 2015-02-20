    var p4pConfigData = {};
    var url2 = window.location.protocol+'//'+ window.location.host+'/api/package/config/p4p_get_online';
    var domainName;
    var p4pPage = {
      tlds: {
        valid: [@T[appSetting:<setting name="SALES_GOT_TLD_EVERYONE_LIST" />]@T],
        restricted: [@T[appSetting:<setting name="SALES_GOT_TLD_RESTRICTED_LIST" />]@T]
      }
    };
    
    $.ajax({
      type: 'POST',
      url: url2
      ,complete: function (data) {
      processP4PData(data);
      },
      dataType: 'json'
    });
    
    function processP4PData(data){
      p4pConfigData = $.parseJSON(data.responseText);
      var dropDown1 = '<select class="dropdown1">';
      var dropDown2 = '<select class="dropdown2">';
      var drop1Size = p4pConfigData.step2_dropdown1.length;
      var drop2Size = p4pConfigData.step2_dropdown2.length;
      
      for(var i = 0; i < drop1Size; i++){
        dropDown1 += '<option value="' + p4pConfigData.step2_dropdown1[i].value + '" id="' + p4pConfigData.step2_dropdown1[i].value + '">' + p4pConfigData.step2_dropdown1[i].interest + '</option>';
      }
      dropDown1 += '</select>';
      
      for(var i = 0; i < drop2Size; i++){
        dropDown2 += '<option value="' + p4pConfigData.step2_dropdown2[i].value + '" id="' + p4pConfigData.step2_dropdown2[i].value + '">' + p4pConfigData.step2_dropdown2[i].resource + '</option>';
      }
      dropDown2 += '</select>';
      
      $("#first-dropdown").html(dropDown1);
      $("#second-dropdown").html(dropDown2);
      
    }
    
    $('#get-running-butt').click(function(){
        domainName = $('#search-input').val().toLowerCase();
        var checkInput = validateInput(domainName);
        domainName = encodeURIComponent(domainName);
        if(checkInput === 0){
          domainName = " ";
        }
        else{
          calculateResultsPage();
        }
    });
    
    function calculateResultsPage(){
      var resultPage = " ";
      var whiteListSpoof = "sales/whitelist%7C54ca63b0f778fc10543b3d15";
      //------------------NEW OR EXISTING BUSINESS--------------------------------------
      if(($('.dropdown1').val() == "new_business" || $('.dropdown1').val() == "existing_business")) {
        if($('.dropdown2').val() == "build_myself" && domainName != ""){
          //WEBSITE BUILDER 
          resultPage = '[@T[link:<relative path="~/getonline/websitebuilder.aspx"></relative>]@T]';
          resultPage += (resultPage.indexOf('?') > 0 ? '&' : '?') + 'domain=' + domainName + '&version=' + whiteListSpoof + '&version=sales/getonline/websitebuilder.aspx|54d3a061f778fc1134545580';
          window.location = resultPage;
        }
        else if($('.dropdown2').val() == "hire_someone" && domainName != ""){
          //PRO SERVICES
          resultPage = '[@T[link:<relative path="~/getonline/pro-basic.aspx"></relative>]@T]';
          resultPage += (resultPage.indexOf('?') > 0 ? '&' : '?') + 'domain=' + domainName + '&version=' + whiteListSpoof + '&version=sales/getonline/pro-basic.aspx|54dba076f778fc1120b67d3d';
        
          window.location = resultPage;
        }
        else if($('.dropdown2').val() == "know_someone" && domainName != ""){
          //WEBSITE HOSTING 
          resultPage = '[@T[link:<relative path="~/getonline/web-hosting.aspx"></relative>]@T]';
          resultPage += (resultPage.indexOf('?') > 0 ? '&' : '?') + 'domain=' + domainName + '&version=' + whiteListSpoof + '&version=sales/getonline/web-hosting.aspx|54d916f8f778fc2a88214035';
        
          window.location = resultPage;
        }
      }
      //--------------------BLOG--------------------------------------------------------
      else if($('.dropdown1').val() == "blog" && $('.dropdown2').val() == "build_myself" && domainName != ""){
        //WORDPRESS
        resultPage = '[@T[link:<relative path="~/getonline/wordpress.aspx"></relative>]@T]';
        resultPage += (resultPage.indexOf('?') > 0 ? '&' : '?') + 'domain=' + domainName + '&version=' + whiteListSpoof + '&version=sales/getonline/wordpress.aspx|54db8f88f778fc1120b67d32';
        
        window.location = resultPage;
      }
      else if($('.dropdown1').val() == "blog" && $('.dropdown2').val() == "hire_someone" && domainName != ""){
        resultPage = '[@T[link:<relative path="~/getonline/wordpress.aspx"></relative>]@T]';
        resultPage += (resultPage.indexOf('?') > 0 ? '&' : '?') + 'domain=' + domainName + '&version=' + whiteListSpoof + '&version=sales/getonline/wordpress.aspx|54db8f88f778fc1120b67d32';
        
        window.location = resultPage;
      }
      else if($('.dropdown1').val() == "blog" && $('.dropdown2').val() == "know_someone" && domainName != ""){
        resultPage = '[@T[link:<relative path="~/getonline/wordpress.aspx"></relative>]@T]';
        resultPage += (resultPage.indexOf('?') > 0 ? '&' : '?') + 'domain=' + domainName + '&version=' + whiteListSpoof + '&version=sales/getonline/wordpress.aspx|54db8f88f778fc1120b67d32';
        
        window.location = resultPage;
      }
      //------------SELLING PRODUCTS--------------------------------------------------
      else if($('.dropdown1').val() == "selling_products" && $('.dropdown2').val() == "build_myself" && domainName != ""){
        //ONLINE STORE
        resultPage = '[@T[link:<relative path="~/getonline/online-store.aspx"></relative>]@T]';
        resultPage += (resultPage.indexOf('?') > 0 ? '&' : '?') + 'domain=' + domainName + '&version=' + whiteListSpoof + '&version=sales/getonline/online-store.aspx|54de7adff778fc03ac812903';
        
        window.location = resultPage;
      }
      else if($('.dropdown1').val() == "selling_products" && $('.dropdown2').val() == "hire_someone" && domainName != ""){
          //PRO SERVICES
        resultPage = '[@T[link:<relative path="~/getonline/pro-ecomm.aspx"></relative>]@T]';
        resultPage += (resultPage.indexOf('?') > 0 ? '&' : '?') + 'domain=' + domainName + '&version=' + whiteListSpoof + '&version=sales/getonline/pro-ecomm.aspx|54dba062f778fc1120b67d3b';
        
        window.location = resultPage;
      }
      else if($('.dropdown1').val() == "selling_products" && $('.dropdown2').val() == "know_someone" && domainName != ""){
        //Website Hosting Result Page
        resultPage = '[@T[link:<relative path="~/getonline/web-hosting.aspx"></relative>]@T]';
        resultPage += (resultPage.indexOf('?') > 0 ? '&' : '?') + 'domain=' + domainName + '&version=' + whiteListSpoof + '&version=sales/getonline/web-hosting.aspx|54d916f8f778fc2a88214035';
        
        window.location = resultPage;
      }
    }

    function validateInput(domainName){
       var validFlag = 0;

       domainName.toLowerCase();

       if(domainName.indexOf('.') > -1){
           var domainSplit = domainName.split('.');
           for(var i = 0; i < p4pPage.tlds.valid.length; i++){
               if(domainSplit[1] === p4pPage.tlds.valid[i]){
                  validFlag = 1;
                  $(".validate-message").text("");
                  return validFlag;
               }    
              else{
                  $(".validate-message").text("Offer only valid with .COM, .CLUB, .CO, .NET, .ROCKS, or .ORG");
                  validFlag = 0;
              }
           }

           return validFlag;
       }
    }

    function stripHomePageParameter(){
      var windowParams = window.location.search.replace("?","");
      var params = windowParams.split("&");
      for(var i = 0; i < params.length;i++){
       var inputName = params[i].split("=")[0];
       var inputValue = params[i].split("=")[1];
       if(inputName == "p4p"){
         $("#homepage-selection").text(inputValue);
       }
      }
        
    }

    $(document).ready(function(){
      stripHomePageParameter();
    });