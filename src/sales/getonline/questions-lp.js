    var p4pConfigData = {};
    var url2 = window.location.protocol+'//'+ window.location.host+'/api/package/config/p4p_get_online';
    var domainName;
    
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
        domainName = $('#search-input').val();
        domainName = encodeURIComponent(domainName);
        calculateResultsPage();
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
        resultPage += (resultPage.indexOf('?') > 0 ? '&' : '?') + 'domain=' + domainName + '&version=' + whiteListSpoof + '&version=sales/getonline/online-store.aspx|54d28923f778fc21301a8966';
        
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