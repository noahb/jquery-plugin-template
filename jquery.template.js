;(function($) {
  // multiple plugins can go here
  (function(pluginName) {
    var defaults = {
      color: 'black',
      testFor: function(div) {
        return true;
      }
    };
    $.fn[pluginName] = function(options) {
      options = $.extend(true, {}, defaults, options);
            
      return this.each(function() {
        var that = this,
          $this = $(that);

        // heres the guts of the plugin
        if (options.testFor(that)) {
          $this.css({
            borderWidth: 1,
            borderStyle: 'solid',
            borderColor: options.color
          });
        }
      });
    };
    $.fn[pluginName].defaults = defaults;
  })('pluginName');
})(jQuery);
