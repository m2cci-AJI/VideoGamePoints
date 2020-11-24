
(function() {
  // Init
  var containerr = document.getElementById("containerr"),
      innerr = document.getElementById("innerr");

  // Mouse
  var mouse = {
    _x: 0,
    _y: 0,
    x: 0,
    y: 0,
    updatePosition: function(event) {
      var e = event || window.event;
      this.x = e.clientX - this._x;
      this.y = (e.clientY - this._y) * -1;
    },
    setOrigin: function(e) {
      this._x = e.offsetLeft + Math.floor(e.offsetWidth / 2);
      this._y = e.offsetTop + Math.floor(e.offsetHeight / 2);
    },
    show: function() {
      return "(" + this.x + ", " + this.y + ")";
    }
  };

  // Track the mouse position relative to the center of the containerr.
  mouse.setOrigin(containerr);

  //----------------------------------------------------

  var counter = 0;
  var refreshRate = 10;
  var isTimeToUpdate = function() {
    return counter++ % refreshRate === 0;
  };

  //----------------------------------------------------

  var onMouseEnterHandler = function(event) {
    update(event);
  };

  var onMouseLeaveHandler = function() {
    innerr.style = "";
  };

  var onMouseMoveHandler = function(event) {
    if (isTimeToUpdate()) {
      update(event);
    }
  };

  //----------------------------------------------------

  var update = function(event) {
    mouse.updatePosition(event);
    updateTransformStyle(
      (mouse.y / innerr.offsetHeight / 1).toFixed(1),
      (mouse.x / innerr.offsetWidth / 1).toFixed(1)
    );
  };

  var updateTransformStyle = function(x, y) {
    var style = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
    innerr.style.transform = style;
    innerr.style.webkitTransform = style;
    innerr.style.mozTranform = style;
    innerr.style.msTransform = style;
    innerr.style.oTransform = style;
  };

  //--------------------------------------------------------

  containerr.onmousemove = onMouseMoveHandler;
  containerr.onmouseleave = onMouseLeaveHandler;
  containerr.onmouseenter = onMouseEnterHandler;
})();
