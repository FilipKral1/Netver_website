// MENU
            window.onresize = ()=>{
                $("#slider").css("left", $(".link").first().offset().left+"px");
                $("#slider").css("width", $(".link").first().outerWidth()+"px");
                
                $.each($(".link"), (i,link)=>{
               var n = 0;
               if(i!=0){
                   n = $("#nav").position().left;
               }
               $(link).on("click",(e)=>{
                   $(link).closest("#nav").find(".link").removeClass("active");
                   $(link).addClass("active");
                   move(e,n);
               }); 
               $(link).hover((e)=>{
                   move(e,n);
               }); 
           });
            };
            
            $("#burger").click((e)=>{
                $("#burger").toggleClass('active');
                $("#nav").toggleClass('active');
            });

           $.each($(".link"), (i,link)=>{
               var n = 0;
               if(i!=0){
                   n = $("#nav").position().left;
               }
               $(link).on("click",(e)=>{
                   $(link).closest("#nav").find(".link").removeClass("active");
                   $(link).addClass("active");
                   move(e,n);
               }); 
               $(link).hover((e)=>{
                   move(e,n);
               }); 
           });
            function move(e,n){
                $("#slider").css("left", (e.target.offsetLeft+n)+"px");
                $("#slider").css("width", (e.target.offsetWidth)+"px");
            }
            
            // MENU END
            
            // COLORS DAY/NIGHT 
            
            if(new Date().getHours() < 7 || new Date().getHours() > 17){
                var r = $(":root");
                //BASIC
                r.css("--white", "#000"); 
                r.css('--light', '#222');
                
                r.css("--black", "#fff");
                r.css('--grey', '#eee');
                
                r.css("--background", "#333");
                r.css("--text", "#fff");
                
                r.css('--menu-link-color', '#222');
                
                //EDITABLE
                r.css('--footer-primary', 'var(--secondary)');
        
            }
            
            // COLORS END
            
            
            // ANIMATIONS START UP
            
            function checkElementLocation() {
                var $window = $(window);
                var bottom_of_window = $window.scrollTop() + $window.height();
                

                $('.tofadein').each(function(i) {
                    var $that = $(this);
                    var bottom_of_object = $that.offset().top + $that.outerHeight();
                    
                    if (bottom_of_window > bottom_of_object) {
                        $(this).addClass('fadein');
                    }
                });
                
                $('.toslideinr').each(function(i) {
                    var $that = $(this);
                    var bottom_of_object = $that.offset().top + $that.outerHeight();
                    
                    if (bottom_of_window > bottom_of_object) {
                        $(this).addClass('slideinr');
                    }
                });
                
                $('.toslideinl').each(function(i) {
                    var $that = $(this);
                    var bottom_of_object = $that.offset().top + $that.outerHeight();
                    
                    if (bottom_of_window > bottom_of_object) {
                        $(this).addClass('slideinl');
                    }
                });
            }
            
            checkElementLocation();

            $(window).on('scroll', function() {
                checkElementLocation();
            });
            
            // ANIMATIONS END