$(document).on('turbolinks:load', function() {
  /* Turn.js responsive book */
  let loadBook = () =>{
    'use strict';
    var module = {
      ratio: 2.62,
      init: function (id) {
        var me = this;
          console.log(this)
          // if older browser then don't run javascript
          if (document.addEventListener) {
            this.el = document.getElementById(id);
            this.resize();
            this.plugins();
            console.log(this.plugins)

            // on window resize, update the plugin size
            window.addEventListener('resize', function (e) {
                var size = me.resize();
                $(me.el).turn('size', size.width, size.height);
            });
          }
      },
      resize: function () {
        // reset the width and height to the css defaults
        this.el.style.width = '';
        this.el.style.height = '';

        var width = this.el.clientWidth,
            height = Math.round(width / this.ratio),
            padded = Math.round(document.body.clientHeight * 0.9);

        // if the height is too big for the window, constrain it
        if (height > padded) {
            height = padded;
            width = Math.round(height * this.ratio);
        }

        // set the width and height matching the aspect ratio
        this.el.style.width = width + 'px';
        this.el.style.height = height + 'px';

        return {
            width: width,
            height: height
        };
      },
      plugins: function () {
        // run the plugin
        $(this.el).turn({
            gradients: true,
            acceleration: true,
            width: 990,
            height: 380
        });
        // hide the body overflow
        document.body.className = 'hide-overflow';
      }
    };

    module.init('book');
  };
  loadBook();
})
