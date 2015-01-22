/*!
 * Lazy Load v2.0.0
 * Author: Dave Utley
 *
 * Updated by: Dominic Tuso - January 2015
 * 
 * ----DESCRIPTION----
 * 
 * Will lazy load an image or a background image
 * 
 * 1. Simply add class "lazyload" to your div or image
 * 2. "data-lazyload-source" Add an attribute to define your source image 
 * 3. "data-lazyload-watch" Optionally add an attribute to define the region of the page that fires off loading of the actual image 
 * 4. "data-lazyload-callback" Optional callback that fires BEFORE the fade in
 * 5. "data-lazyload-callbackAfter" Optional callback that fires AFTER the fade in
 * 
 * ---- USAGE EXAMPLES ---- 
 * 
 * <div class="lazyload" data-lazy-load-watch=".selector-to-some-container-optional" data-lazy-load-source="[@T[link:<imageroot />]@T]fos/sales/themes/montezuma/offers/online-business/tld-in.png"></div>
 * <img class="lazyload" data-lazy-load-watch=".selector-to-some-container-optional" data-lazy-load-source="[@T[link:<imageroot />]@T]fos/sales/themes/montezuma/offers/online-business/tld-in.png" />
 * 
 */
(function($){
  if(typeof lazyload == 'undefined'){
    window.lazyload = {
      version:'2.0.0',
      items:$(),
      __defaults:{
        updatePosition:true,
        checkHorizontal:false,
        scrollCheckDelay:300,
        loadBufferDistance:0,
        fadeInDelay:0,
        fadeInSpeed:500
      }
    };


    function setupItem($item,settings){
      if(typeof settings == 'undefined'){
        settings = {
          source: $item.data('lazyload-source'),
          watch: $item.data('lazyload-watch'),
          callback: $item.data('lazyload-callback'),
          callbackAfter: $item.data('lazyload-callbackAfter') 
        };
      }   
      if(typeof settings.source != 'undefined'){
        // attach the settings to the object
        $item[0].lazyload = settings;
        // add to items to check/watch
        lazyload.items = lazyload.items.add($item);
        // set item position
        setPosition($item);
      }
    }


    function checkItems(){
      setPosition($(window));
      lazyload.items.each(function(){
        checkItem($(this));
      });
    }


    function checkItem($item){
      var updatePosition = $item[0].lazyload.updatePosition || lazyload.__defaults.updatePosition;
      var updateWindowScroll = updateWindowScroll || lazyload.__defaults.updateWindowScroll;
      var checkHorizontal = $item[0].lazyload.checkHorizontal || lazyload.__defaults.checkHorizontal;

      // update item position info if specified
      // good for items that may move on their own
      if(updatePosition){
        setPosition($item);
      }

      // set window position (window position will not actually set every time)
      setPosition($(window));

      // check for item in the viewport
      var itemTop = $item[0].lazyload.positionTop;
      var itemBottom = $item[0].lazyload.positionBottom;
      var windowTop = lazyload.windowTop;
      var windowBottom = lazyload.windowBottom;
      
      if(itemTop < windowBottom+lazyload.__defaults.loadBufferDistance && itemBottom > windowTop-lazyload.__defaults.loadBufferDistance){
        loadItem($item);
      }
    }


    function setPosition($element){
      var element = $element[0];
      if(element == window){
        if(lazyload.updateWindowPosition){
          lazyload.windowTop = $element.scrollTop();
          lazyload.windowLeft = $element.scrollLeft();
          lazyload.windowRight = lazyload.windowLeft + $element.width();
          lazyload.windowBottom = lazyload.windowTop + $element.height();
          
          // keep window position updates from occurring more often than the scrollCheckDelay setting
          lazyload.updateWindowPosition = false;
          clearTimeout(lazyload.windowPositionDelayTimer);
          lazyload.windowPositionDelayTimer = setTimeout(function(){
            lazyload.updateWindowPosition = true;
          },lazyload.__defaults.scrollCheckDelay);
        }
      }else{
        if(typeof element.lazyload.watch != 'undefined'){
          var $watchParent = $element.parents(element.lazyload.watch);
          if($watchParent.length >= 1){
            $element = $watchParent;
          }
        }
        element.lazyload.positionTop = $element.offset().top;
        element.lazyload.positionLeft = $element.offset().left;
        element.lazyload.positionRight = element.lazyload.positionLeft + $element.width();
        element.lazyload.positionBottom = element.lazyload.positionTop + $element.height();
      }
    }


    function callCallback(callback){
      if(typeof callback == 'string'){
        var parameters = callback.split(',');
        var targetFunction = parameters.shift();
        targetFunction = stringToFunctionPath(targetFunction);
        callFunction(targetFunction,parameters,callback);
      }else if(typeof callback == 'object'){
        for(var i=0; i<callback.length; i++){
          (function(){
            var parameters = callback[i].split(',');
            var targetFunction = parameters.shift();
            var targetFunctionString = targetFunction;
            targetFunction = stringToFunctionPath(targetFunction);
            callFunction(targetFunction,parameters,targetFunctionString);
          })();
        }
      }
      function callFunction(func,parameters,callback){
        try{
          if(typeof parameters != 'undefined' && parameters.length >= 1){
            func.apply(null,parameters);
          }else{
            func.call(null);
          }
        }
        catch(error){}
      }
    }


    function stringToFunctionPath(functionString){
      var context = window;
      var namespaces = functionString.split('.');
      var target = namespaces.pop();
      var found = true;
      for(var i = 0; i < namespaces.length; i++){
        if(typeof context[namespaces[i]] != 'undefined'){
          context = context[namespaces[i]];
        }else{
          found = false;
        }
      }
      if(found){
        return context[target];
      }else{
        return null;
      }
    }


    function loadItem($item){
      var source = $item[0].lazyload.src ||  $item[0].lazyload.source;
      // console.log('loaded: '+source);
      var callback = $item[0].lazyload.callback;
      var callbackAfter = $item[0].lazyload.callbackAfter;

      // remove from items to load
      lazyload.items = lazyload.items.not($item);
      
      // add source to loadedSrc array
      if(lazyload.loadedSrc.indexOf(source) == -1){
       lazyload.loadedSrc.push(source);
      }

      // load the image
      var image = new Image();
      image.onload = function(){
        /* Callback (before fade-in animation) */
        if(typeof callback != 'undefined'){
          // event trigger
          $item.trigger('lazyloaded').addClass('lazyloaded');
          // callback
          callCallback(callback);
        }

        // place image
        if($item.is('img')){
          // load normal image tag
          $item
            .css({opacity:0.0}).attr('src',source)
            .delay(lazyload.__defaults.fadeInDelay)
            .animate({opacity:1.0},lazyload.__defaults.fadeInSpeed,function(){
              if(typeof callbackAfter != 'undefined'){
                /* After fade-in events */
                setTimeout(function(){
                  // event trigger
                  $item.trigger('lazyloadedafter');
                  // callback
                  callCallback(callbackAfter);
                },lazyload.__defaults.fadeInSpeed);
              }
            }
          );
        }else{
          /* load as background image */
          var insertDelay = 200;
          // this portion may not play nice with some browsers
          try{
            // create blank image to crossfade with
            var base64 = 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==';
            var blankImage = new Image();
            blankImage.src = base64;
            
            // match the native dimentions of the final image
            // to avoid unwanted scaling transitions
            blankImage.height = image.height;
            blankImage.width = image.width;

            function getBase64Image(img){
                // Create an empty canvas element
                var canvas = document.createElement('canvas');
                canvas.width = img.width;
                canvas.height = img.height;

                // Copy the image contents to the canvas
                var ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0);

                // Get the data-URL formatted image
                var dataURL = canvas.toDataURL('image/png');

                return dataURL.replace(/^data:image\/(png|jpg);base64,/,'');
            }
            
            // get binary data string from blank image object
            var blankImageString = getBase64Image(blankImage);
            
            // insert blank background image
            $item.css({
              'background-image':'url(data:image/gif;base64,'+blankImageString+')',
              '-moz-transition':'all '+lazyload.__defaults.fadeInSpeed+'ms ease-in-out'
            });
          }
          catch(error){
            insertDelay = 0;
          }
          
          // insert new background image
          // might need delay for fade to work
          setTimeout(function(){
            $item.css({
              'background-image':'url('+source+')',
              '-webkit-transition':'background '+lazyload.__defaults.fadeInSpeed+'ms ease-in-out',
              '-moz-transition':'all '+lazyload.__defaults.fadeInSpeed+'ms ease-in-out',
              '-o-transition':'background '+lazyload.__defaults.fadeInSpeed+'ms ease-in-out',
              'transition':'background '+lazyload.__defaults.fadeInSpeed+'ms ease-in-out'
            });
            /* After fade-in events */
            if(typeof callbackAfter != 'undefined'){
              setTimeout(function(){
                // event trigger
                $item.trigger('lazyloadafter');
                // callback
                callCallback(callbackAfter);
              },lazyload.__defaults.fadeInSpeed);
            }
          },insertDelay);
        }
      };

      // set the image source
      image.src = source;
    }


    $(document).ready(function(){
      lazyload.updateWindowPosition = true;
      lazyload.scrollCheck = true;
      lazyload.loadedSrc = [];

      $foundItems = $('.lazyload');

      if($foundItems.length >= 1){
        // listen for scroll events on elements other than window
        lazyload.scrollElements = $('div,ul');
        lazyload.scrollElements.each(function(){
          var $this = $(this);
          var overflow = $this.css('overflow');
          var overflowX = $this.css('overflow-x');
          var overflowY = $this.css('overflow-y');
          var overflowValues = ['hidden','scroll','auto'];
          if($this.find('[data-lazy-load]').length == 0 && overflowValues.indexOf(overflow) == -1 && overflowValues.indexOf(overflowY) == -1 && overflowValues.indexOf(overflowX) == -1){
            lazyload.scrollElements = lazyload.scrollElements.not($this);
          }
        });

        lazyload.scrollElements = lazyload.scrollElements.add(window);

        // add scroll event listener
        lazyload.scrollElements.bind('scroll.lazyload',function(event){
          if(lazyload.scrollCheck){
            checkItems();
            // stop position checks from occurring more often than the scrollCheckDelay setting
            lazyload.scrollCheck = false;
            clearTimeout(lazyload.scrollCheckDelayTimer);
            lazyload.scrollCheckDelayTimer = setTimeout(function(){
              lazyload.scrollCheck = true;
            },lazyload.__defaults.scrollCheckDelay);
          }
        });
        
        // setup each lazyload item
        $foundItems.each(function(){
          setupItem($(this));
        });

        // run first check after initial setup
        checkItems();
      }
    });


    /* Public Methods */
    lazyload.check = function(){
      checkItems();
    };

    lazyload.add = function($item,settings){
      setupItem($($item),settings);
    };

    lazyload.load = function(){
      loadItem($($item));
    };
  }
})(jQuery);

// Array indexOf shim for IE9 and below
if (!Array.prototype.indexOf){
  Array.prototype.indexOf = function(elt /*, from*/) {
    var len = this.length >>> 0;
    var from = Number(arguments[1]) || 0;
    from = (from < 0) ? Math.ceil(from) : Math.floor(from);
    if (from < 0) from += len;
    for (; from < len; from++) {
      if (from in this && this[from] === elt) return from;
    }
    return -1;
  };
}

