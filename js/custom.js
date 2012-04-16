jQuery(function() {
  jQuery('a:not([href=""])').each(function() {
    if (this.hostname !== location.hostname) {
      jQuery(this).addClass('externalLink').attr('target', "_blank");
    }
  });
});
