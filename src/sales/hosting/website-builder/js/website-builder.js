/*! jQuery Slide This
* ----------------------------------------------------------
*/
var slidethis = {};
(function (jQuery){
    $(document).ready(function(){
        init();
    });
    
    var slidethisObjects = {};
    var slidethisPrevButtons = {};
    var slidethisNextButtons = {};
    
    function init(){
        slidethisObjects = $('.slidethis');
        slidethisPrevButtons = $('.slidethis-prev');
        slidethisNextButtons = $('.slidethis-next');
        
        attachParams(slidethisObjects);
        attachParams(slidethisPrevButtons);
        attachParams(slidethisNextButtons);
        
        attachSlides();
        positionAllSlides();
        attachButtonEvents();
    }
    
    function attachButtonEvents(){
        if(typeof slidethisPrevButtons != 'undefined' || slidethisPrevButtons.length == 0){
            for(var i=0;i<slidethisPrevButtons.length;i++){
                slidethisPrevButtons.eq(i).click(function(){
                    slidethis.slideIt(this['stid'],'prev');
                });
                slidethisPrevButtons.eq(i).attr({'href':'javascript:void(0);'})
            }
        }
        if(typeof slidethisNextButtons != 'undefined' || slidethisNextButtons.length == 0){
            for(var i=0;i<slidethisNextButtons.length;i++){
                slidethisNextButtons.eq(i).click(function(){
                    slidethis.slideIt(this['stid'],'next');
                });
                slidethisNextButtons.eq(i).attr({'href':'javascript:void(0);'})
            }
        }
    }
    
    function attachParams(array){
        // attach keys and values from data-slidethis parameters attribute to object
        for(var i=0;i<array.length;i++){
            var dataString = $(array).eq(i).attr('data-slidethis');
            var dataArray = dataString.split(',');
            
            // attach key and value to object
            for(var j=0;j<dataArray.length;j++){
                var valueSet = false;
                var keyVal = dataArray[j].split('|');
                
                // set boolean values
                if($.inArray(keyVal[0],['animate']) != -1){
                    array[i]['st'+keyVal[0]] = Boolean(keyVal[1]);
                    valueSet = true;
                }
                
                // set integer values
                if($.inArray(keyVal[0],['delay','speed']) != -1){
                    array[i]['st'+keyVal[0]] = parseInt(keyVal[1]);
                    valueSet = true;
                }
                
                // set all other values
                if(valueSet == false){
                    array[i]['st'+keyVal[0]] = keyVal[1];
                }
            }
        }
    }
    
    function attachSlides(){
        for(var i=0;i<slidethisObjects.length;i++){
            var slides = new Array;
            $(slidethisObjects[i]).children('li').each(function(){
                slides.push($(this));
            });
            slidethisObjects[i]['stslides'] = slides;
            slidethisObjects[i]['stenabled'] = true;
        }
    }
    
    function positionAllSlides(){
        for(var i=0;i<slidethisObjects.length;i++){
            positionSlides(slidethisObjects[i],false);
        }
    }
    
    function positionSlides(obj,animate,direction){
        var delay = 0;
        var animationSpeed = 500;
        var slides = obj['stslides'];
        var firstObject = slides[0];
        var lastObject = slides[slides.length-1];
        
        // set speed of slide animation if specified
        if(typeof obj['stspeed'] != 'undefined'){
            animationSpeed = obj['stspeed'];
        }
        
        // set delay between each slide if specified
        if(typeof obj['stdelay'] != 'undefined'){
            delay = obj['stdelay'];
        }
        
        if(typeof direction != 'undefined' && direction == 'next'){
            lastObject['stleft'] = -getFullWidth(firstObject);
        }
        
        if(typeof direction != 'undefined' && direction == 'prev'){
            $(firstObject).animate({opacity:0},delay,function(){
                // move object to front and make visible
                $(this).css({position:'absolute',marginLeft:-getFullWidth(firstObject),opacity:1});
            });
        }
        
        for(var i=0;i<slides.length;i++){
            var slide = slides[i];
            var $slide = $(slide);
            var newLeft;
            var delayMultiply;
            
            slide['fullWidth'] = getFullWidth(slide);
            if(i == 0){
                newLeft = 0;
            }else{
                var prevObj = $(slides[i-1]);
                newLeft = slides[i-1]['stleft']+parseInt(slides[i-1]['fullWidth']);
            }
            
            if(slide == lastObject && typeof animate != 'undefined' && animate && typeof direction != 'undefined' && direction == 'next'){
                var lastObjectNewLeft = newLeft;
                var $lastObject = slide;
            }else{
                slide['stleft'] = newLeft;
            }
            
            if(typeof animate != 'undefined' && animate){
                $slide.css({position:'absolute'});
                if(typeof direction != 'undefined' && direction == 'next'){
                    var delayMultiply = i+1;
                    if(i == slides.length-1){
                        delayMultiply = 0;
                    }
                }
                if(typeof direction != 'undefined' && direction == 'prev'){
                    var delayMultiply = (slides.length-i);
                    if(slide == firstObject){
                        // set slide delay first object
                        delayMultiply = slides.length-1;
                    }
                }
                
                // slide/animate objects
                $slide.delay(delayMultiply*delay).animate({marginLeft:slide['stleft']},animationSpeed,function(){
                    // callback for last object on next trigger
                    if(typeof $lastObject != 'undefined' && $lastObject[0] == $(this)[0] && typeof direction != 'undefined' && direction == 'next'){
                        // set delay for showing last object
                        var showDelay;
                        for(var j=0;j<slides.length;j++){
                            if($(slides[j])[0] == $lastObject[0]){
                                showDelay = delay*(j-1);
                            }
                        }
                        // set stleft to correct value
                        lastObject['stleft'] = lastObjectNewLeft;
                        // hide first object, move to back then fade it in
                        $lastObject.css({position:'absolute',marginLeft:lastObject['stleft'],opacity:0}).delay(showDelay).animate({opacity:1},delay*2,function(){
                            obj['stenabled'] = true;
                        });
                    }
                    
                    // callback for first object on prev trigger
                    if(firstObject[0] == $(this)[0] && typeof direction != 'undefined' && direction == 'prev'){
                        obj['stenabled'] = true;
                    }
                });
                
            }else{
                $(slide).css({position:'absolute',marginLeft:slide['stleft']});
                obj['stenabled'] = true;
            }
        }
    }
    
    function getFullWidth(obj){
        obj = $(obj);
        var fullWidth = parseInt(obj.css('width'))+parseInt(obj.css('margin-right'))+parseInt(obj.css('padding-right'))+parseInt(obj.css('padding-left'))+parseInt(obj.css('border-right-width'))+parseInt(obj.css('border-left-width'));
        return fullWidth;
    }
    
    function moveSlideOrder(stId,direction){
        var slides = getSlidethisObject(stId)['stslides'];
        if(direction == 'next'){
            slides.push(slides.shift());
        }
        if(direction == 'prev'){
            slides.unshift(slides.pop());
        }
    }
    
    function getSlidethisObject(stId){
        var slidethisObject;
        for(var i=0;i<slidethisObjects.length;i++){
            if(slidethisObjects[i]['stid'] == stId){
                slidethisObject = slidethisObjects[i];
            }
        }
        return slidethisObject;
    }
            
    
    
    
    // functions that need to be called from outside the scope of the main function
    // slidethis.functionName();
    $.extend(slidethis,{
        
        slideIt:function(stId,direction){
            var obj =getSlidethisObject(stId);
            
            if(obj['stenabled']){
                obj['stenabled'] = false;
                moveSlideOrder(stId,direction);
                positionSlides(obj,obj['stanimate'],direction);
            }
        },
        
        specificSlide:function(stId,slideId){
            //console.log('stId:'+stId+' slideId:'+slideId);
        }
        
    });
    
}(slidethis.$));


/*! jQuery So Lazy (Loader)
 * Author: Dave Utley
 * 
 * 
 * --v1.1.0--
 * - improved performance on conditional check
 * - improved performance on position check
 * - added hide onerror feature
 * 
 */
if(typeof solazy == 'undefined'){
    var solazy = {};
    (function(jQuery){
        var $lazyObjects,$window;
        var fadeInSpeed = 750;
        var fadeInDelay = 0;
        var distanceBuffer = 100; // distance in pixels
        var scrollCheckDelay = 300;
        var scrollCheckInterval;
        var isScrolling = false;
        
        $(document).ready(function(){
            $lazyObjects = $('.solazy');
            $window = $(window);
            $scrollElements = $('div,ul');
            $triggerObjects = $window.add($scrollElements);
        
            setupAllLazyObjects();
        
            setTimeout(function(){ solazy.check(); },500);

            $triggerObjects.bind('scroll',function(e){
                // interval while scrolling method
                var resetTopValues = false;
                if(!isScrolling){
                    solazy.check(this);
                    // clear interval
                    clearInterval(scrollCheckInterval);
                    // set interval
                    scrollCheckInterval = setInterval(function(){
                        solazy.check(this);
                        clearInterval(scrollCheckInterval);
                        isScrolling = false;
                    },scrollCheckDelay);
                }
                isScrolling = true;
            });
        });
    
    
        function setupAllLazyObjects(){
            $lazyObjects.each(function(){
                setupLazyObject($(this));
            });
        }
    
        function setupLazyObject($obj){
            var $this = $obj;
            var condition = $this.attr('data-sl-condition');
            if(typeof condition != 'undefined'){
                var conditionParts = condition.split('|');
                var conditionCss = conditionParts[1].split(':');
                $this[0]['sl-condition-property'] = conditionCss[0];
                $this[0]['sl-condition-css-value'] = conditionCss[1];       
                $this[0]['sl-condition-target'] = $(conditionParts[0]);
            }
            var error = $this.attr('data-sl-error');
            if(typeof error != 'undefined'){
                var errorParts = error.split('|');
                $this[0]['sl-error-action'] = errorParts[0];
                $this[0]['sl-error-selector'] = errorParts[1];
            }
        }
    
        function loadObject($obj){
            var src = $obj.attr('data-sl-src');
            
            // load the image
            var image = new Image();
            
            image.onload = function(){
                $('<img src="'+src+'" />')
                    .css({opacity:0.0,width:'100%',height:'100%'})
                    .appendTo($obj)
                    .delay(fadeInDelay)
                    .animate({opacity:1.0},fadeInSpeed,function(){
                        $obj.css('background-image','none');
                    });
            };
            
            image.onerror = function(){
                var action = $obj[0]['sl-error-action'];
                var selector = $obj[0]['sl-error-selector'];
                if(typeof action != 'undefined' && typeof selector != 'undefined'){
                    if(action == 'hide-parent'){
                        $obj.parents(selector).hide();
                    }
                }
            };
            
            // set the image source
            image.src = src;
            
            // remove from $lazyObjects
            $lazyObjects = $lazyObjects.not($obj);
        }
    
        // functions that need to be called from outside the scope of the main function
        // solazy.functionName();
        $.extend(solazy,{
        
            check:function(scrolledElement){
                var windowTop = $window.scrollTop();
                var windowBottom = windowTop+$window.height();
                var setTopValues = false;
                        
                if(typeof scrolledElement != 'undefined'){
                    if(scrolledElement.nodeName != undefined){
                        setTopValues = true;
                    }
                }else{
                    setTopValues = true;
                }
                
                $lazyObjects.each(function(){
                    var $this = $(this);
                    var performPositionCheck = true;
                    
                    // check if condition is met
                    if(typeof $this[0]['sl-condition-target'] != 'undefined'){
                        performPositionCheck = false;
                        
                        if($($this[0]['sl-condition-target']).css($this[0]['sl-condition-property']) == $this[0]['sl-condition-css-value']){
                            performPositionCheck = true;
                        }
                    }
                    
                    // check to see if in window
                    if(performPositionCheck){
                        // get previously stored vertical element position and height
                        var top = $this[0]['sl-top'];
                        var height = $this[0]['sl-height'];
                        
                        // if position and height hasn't been stored yet store it
                        if(typeof top == 'undefined' || setTopValues){
                            top = $this[0]['sl-top'] = $this.offset().top;
                        }
                        if(typeof height == 'undefined'){
                            height = $this[0]['sl-height'] = $this.height();
                        }
                        
                        // check if element is in viewport
                        if(top > (windowTop-height)-distanceBuffer && top < windowBottom+distanceBuffer){
                            loadObject($this);
                        }
                    }
                });
            },
        
            // add new or re-add removed elements
            addLazyOjects:function(target){
                var $addElements = $(target).find('.solazy');
                $addElements.each(function(){
                    setupLazyObject($(this));
                });
                $lazyObjects = $lazyObjects.add($addElements);
            },
            
            loadObject:function($obj){
                // applies loadObject function above
                loadObject($obj);
            }
        });
    })(solazy.$);
}



/*TEMPLATE MODAL */

    $(document).ready(function () {
         $('#g-modal').on('show.bs.modal', function (e) {
            $('.templates-modal').show();
            //solazy.addLazyOjects('.templates-modal');
            $this = $(e.relatedTarget);
            if(!$this.hasClass('view-all')){
                var hash = $this.find('a').attr('href');
                hash = hash.replace('#','');
                setTimeout(function(){
                    var $targetElement = $('a[name="'+hash+'"]');
                    $('.templates-modal-content').scrollTo($targetElement,1000,{/*offset:{top:-20},*/onAfter:function(){solazy.check();}});
                },500);
                
            }else{
                setTimeout(function(){
                    solazy.check(true);
                },500);
            }               
        });

        $('#g-modal').on('hide.bs.modal', function(e){
            $('.templates-modal').hide();
        });
        $('#template-select').on('click', 'a', function(e){
            var hash = $(this).attr('href');
                console.log($(this));
                hash = hash.replace('#','');
                var $targetElement = $('a[name="'+hash+'"]');
                console.log($targetElement);
                $('.templates-modal-content').scrollTo($targetElement,1000,{offset:{top:-20},onAfter:function(){solazy.check();}});
        });       

    //   $(".copy-link, .view-all").click(function (event) {
    //     $('#g-modal').modal('show');
    //     $this = $(this);

        
    //     // $("#g-modal").modal({
    //     //   overlayId: "g-modal-overlay",
    //     //   close: "false", // disables default close button
    //     //   autoPosition: "true",
    //     //   onShow:function(){
    //     //     solazy.addLazyOjects('.templates-modal');
    //     //     if(!$this.hasClass('view-all')){
    //     //         var hash = $this.find('a').attr('href');
    //     //         hash = hash.replace('#','');
    //     //         var $targetElement = $('a[name="'+hash+'"]');
    //     //         $('.templates-modal-content').scrollTo($targetElement,1000,{offset:{top:-20},onAfter:function(){solazy.check();}});
    //     //     }else{
    //     //         setTimeout(function(){
    //     //             solazy.check(true);
    //     //         },500);
    //     //     }
    //     //   },
    //     //   onClose:function(){
    //     //     $.modal.close();
    //     //     $(window).scrollTo('#templates',0,{offset:{top:0}});
    //     //   }
    //     // });
    //   }).css('cursor','pointer');
    //   $('.templates-modal-close').attr('href','javascript:void(0)');
    //   $('#templates .view-all').attr('href','javascript:void(0)');
    });





// planbox select boxes
var PlanBox6UI = {
  showTerm: function (li) {
    if (li) {
      var viewData = li.attr('data-view').split("|");
      var container = li.parents('.plan');
      if (container) {
        container.children(".price").html(viewData[0] + "<span>/month</span>");
        container.find(".reg-price").css("visibility", 0 < parseInt(viewData[2]) ? "visible" : "hidden");
        container.find(".reg-price").html('<strike>' + viewData[1] + '</strike>' + '<span>SAVE ' + viewData[2] +'%</span>');
      }
    }
  },

  changeSelected: function (li, parent) {
    var content = li.find('div[data-main=true]').html(); //Find new content
    parent.find('.plan-droplist-selected').html(content); //Place new content
    li.parents('.plan').find("a.flt-btn-orng").attr("data-cart", li.data("main"));
    $("#frmAddToCart input#product").val(li.attr("data-main"));
    }
  }
  $(document).ready(function () {
    $("a.flt-btn-orng, .slideshow-description>a.flt-btn-grn").click(function (event) {
      var selected = $(this).attr("data-cart");
      if (selected && selected != "") {
        var $form = $("#frmAddToCart");
        $form.find('input[name="formSubmitButton"]').val("Add-to-Cart");
        $form.find('input#product').val(selected);
        var data = $form.serialize();
        var url = $form.attr("action");
        $form.submit();
        }
    });
  $('.plan-droplist-select').click(function () { //Open & close dropdown
    var wrap = $(this);
    if (wrap.hasClass('droplist-open')) {
      wrap.removeClass('droplist-open');
    } else {
      wrap.addClass('droplist-open');
    }
  });

  $('.plan-droplist-select').mouseleave(function () { //Close dropdown is mouse leaves
    $(this).removeClass('droplist-open');
  });
  
  $('.plan-droplist-select > ul > li').click(function () {
    var li = $(this);
    var parent = li.parents('.plan-droplist-select');
    li.siblings('li').removeClass('selected'); //Remove current selected
    li.addClass('selected'); //Mark new selected
    PlanBox6UI.showTerm(li); //Show term content
    PlanBox6UI.changeSelected(li, parent); //Change selectbox content
  });
  // template slider rollovers
        $('#templates .templates-slider .slidethis li').each(function(){
            var $this = $(this);
            $this.hover(function(){
                $this.find('.sl-img').animate({top:-10,left:-10,width:232,height:288},150);
                $this.find('.hover').css({display:'block',opacity:'0.0'}).animate({opacity:'1.0'},150);
            },function(){
                $this.find('.sl-img').animate({top:0,left:0,width:212,height:268},150);
                $this.find('.hover').animate({opacity:'0.0'},150,function(){
                    $(this).css({display:'none'})
                });
            });
        });
});


/*PAGE FUNCTIONALITY
-- LEAVE AT BOTTOM --
*/
var wsbv7 = {};
(function(jQuery){
    $(document).ready(function(){
        init();
        initApps();
    });     
    function init(){        
        // CI CODES
        $('[data-ci]').click(function(e){
            $this = $(this);
            FastballEvent_MouseClick(e,$this.attr('data-ci'),$(this)[0],'a');
            fbiLibCheckQueue();
        });
    }
    // show and hide apps
    var transitionSpeed = 400;
    var $currentApp,$apps;
    var firstApp = 'twitter-app';
    
    function initApps(){
        $apps = $('#apps li');
        
        $apps.hover(function(){
            var $this = $(this);
            if(typeof $currentApp != 'undefined' && $currentApp[0] != $this[0]){
                showApp($this);
            }
        },function(){});
                
        $apps.each(function(){
            var $this = $(this);
            if($this.attr('class') == firstApp){
                showApp($this);
            }else{
                hideApp($this);
            }
        }); 
        
    }   
    function showApp($obj){
        // highlight background
        $obj.css('border','5px solid #ccc');
        
        // show arrow
        $obj.find('.arrow').animate({opacity:1.0},transitionSpeed);
        
        // show image image
        $('#'+$obj.attr('class')+'-image').animate({opacity:1.0},transitionSpeed);
        
        // hide current app
        if(typeof $currentApp != 'undefined'){
            hideApp($currentApp);
        }
        
        // set as current app
        $currentApp = $obj;
    }
    function hideApp($obj){
        // remove highlight
        $obj.css('border','5px solid #fff');
        
        // hide arrow
        $obj.find('.arrow').animate({opacity:0.0},transitionSpeed);
        
        // hide image
        $('#'+$obj.attr('class')+'-image').animate({opacity:0.0},transitionSpeed);
    }

    // functions that need to be called from outside the scope of the main function
    // slidethis.functionName();
    $.extend(wsbv7,{
        
    });
}(wsbv7.$));
    