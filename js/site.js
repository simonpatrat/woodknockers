(function( $ ){
    
        /// Video Players
        window.onload = function() {

        // Video
        var video = document.getElementById("video-player");

        // Buttons
        var playButton = document.getElementById("play-pause");
        var muteButton = document.getElementById("mute");
        var fullScreenButton = document.getElementById("full-screen");

        // Sliders
        var seekBar = document.getElementById("seek-bar");
        var volumeBar = document.getElementById("volume-bar");

        // Event listener for the play/pause button
        playButton.addEventListener("click", function() {
          if (video.paused == true) {
            // Play the video
            video.play();

            // Update the button text to 'Pause'
            playButton.innerHTML = "Pause";
          } else {
            // Pause the video
            video.pause();

            // Update the button text to 'Play'
            playButton.innerHTML = "Play";
          }
        });

        }


    $(document).ready(function() {
        $('.loader-container').addClass('loaded');
        $(".loader-container").one('transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd', 
        function() {
            
            // Hide loader
            $(this).hide();

            // Masonry showcase
            $('.showcase-grid-inner').masonry({
              // options
              itemSelector: '.sc-grid-bloc',
              columnWidth: '.grid-sizer',     
            });

            // Flickity carousel
            $('.showcase-carousel .gallery').flickity({
                cellAlign: 'left',
                contain: true
            });
            $('.featured-products-gallery').flickity({
                cellAlign: 'center',
                contain: true
            });
         
        });
        

        
        
        
        headerH = $('.site-header').height();
        halfHeaderH = headerH /2;
        $(window).scroll(function(){
            w = $(this);
            wTop = w.scrollTop();
            
            if(wTop> halfHeaderH){
                $('#site-navigation').addClass('minified');
            }else{
                $('#site-navigation').removeClass('minified');
            }
        });
 
    });

})( jQuery );

