document.addEventListener('touchmove', function(e){}, false);

var _switch   = document.getElementById("switch-1"), 
    switchHit = false,
    hasTouch  = false;
        
function toggleHit(){ if(!switchHit){ switchHit = true; _switch.classList.add("hit"  ); }}
function setTouch() { if(!hasTouch) { hasTouch = true;  _switch.classList.add("touch"); }}
        
_switch.onclick = toggleHit;
_switch.ontouchstart = function(e){ setTouch(); e.preventDefault(); e.target.click(); }      