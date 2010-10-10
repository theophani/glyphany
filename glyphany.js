(function () {
  var counter = 0;
  window.showGlyphany = function() {
    var $ = jQuery
      , glyphany;
    
    document.title = document.title.replace('(Fetching glyphany ... ) ','');

    /* add the css */
    lt  = '#glyphany, #glyphany *{font-family:Courier,"Courier New",fixed;color:#333;text-shadow:none;line-height:1.5em;font-size:20px;margin:0;padding:0;}';
    lt += '#glyphany *{font-size:inherit;font-family:inherit;}';
    lt += '#glyphany{z-index:100000000;position:fixed;top:20px;right:20px;padding:12px;width:200px;border:none;background-color:#fff;}';
    lt += '#glyphany{-webkit-box-shadow: #999 0px 0px 18px;-moz-box-shadow: #999 0px 0px 18px;box-shadow: #999 0px 0px 18px;}';
    lt += '#glyphany{-webkit-border-radius: 1em;-moz-border-radius:1em;border-radius:1em;}';
    lt += '#glyphany span{display:block;float:left;position:relative;width:1.5em;line-height:1.5em;text-align:center;font-weight:normal;}';
    lt += '#glyphany br{clear:both;}';
    lt += '#glyphany #glyphany_close{cursor:pointer;position:absolute;top:10px;right:10px;background-color:#0080C0;color:#fff;font-family:Helvetica,Arial,sans-serif;}';
    lt += '#glyphany #glyphany_close{-webkit-border-radius: 1em;-moz-border-radius:1em;border-radius:1em;}';
    lt += '#glyphany p{font-size:11px;color:#999;font-family:"Lucida Sans","Lucida Grande","Lucida Sans Unicode",sans-serif;line-height:1.5em;font-weight:normal;margin-top:1.5em;}';
    lt += '#glyphany a{color:#999;text-decoration:none;border-bottom:1px solid #00A0F0;font-weight:normal;} #glyphany a:hover{background-color:#0080C0;border-bottom-color:#0080C0;color:#fff;display:inline;}';
    l =  document.createElement('style');
    l.innerHTML = lt;
    document.body.appendChild(l);

    /* build the glyphany element */
    gt  = '<div id="glyphany">';
    gt += '<span id="glyphany_close" title="close">X</span>';
    gt += '<span>♥</span><span>☺</span><span>☻</span><span>©</span><span>®</span><br>';
    gt += '<span>←</span><span>↑</span><span>→</span><span>↓</span><span>▲</span><span>▼</span><br>';
    gt += '<span>«</span><span>»</span><span>‹</span><span>›</span><br>';
    gt += '<span>‘</span><span>’</span><span>‚</span><span>“</span><span>”</span><span>„</span><br>';
    gt += '<span>°</span><span>℃</span><span>℉</span><br>';
    gt += '<span>–</span><span>—</span><span>…</span><br>';
    gt += '<p>Copy and paste to use a glyph.</p>';
    gt += '<p>This is a prototype of <a href="http://tif.ca/glyphany/">glyphany</a>.<br>New features to be added. Provide feedback to tif at tif dot ca.</p>';
    gt += '</div>';
    glyphany = g = $(gt);

    glyphany.click(function(e){
      if ( e.target.id === 'glyphany_close' ) 
        $(this).hide();
    });

    // show glyphany
    $('body').append(g);

    window.showGlyphany = function(){
      g.show();
    }
      
  }

  if (window.jQuery) {
    window.showGlyphany();
  } else {
    // load jQuery, else hope the version is high enough
    var elem=document.createElement('script');
    elem.setAttribute('src','http://tif.ca/glyphany/load-jquery.js?t='+(new Date().getTime()));
    document.body.appendChild(elem);
  }  
  
})();