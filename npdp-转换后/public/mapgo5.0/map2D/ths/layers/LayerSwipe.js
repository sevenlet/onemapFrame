define([
  'dojo/_base/declare', 'esri/dijit/LayerSwipe', 'dojo/dom-geometry', 'dojo/on', 'dojo/_base/lang'
], function(declare, LayerSwipe, l, k, h) {
  return declare('LayerSwipe', LayerSwipe, {
    _swipe: function () {
      if (this.get('loaded') && this.get('enabled')) {
        var a = {
          layers: [],
          swipeType: this.get('type'),
        };
        if (this.layers && this.layers.length)
          for (var b = 0; b < this.layers.length; b++) {
            var layer = this.layers[b];
            var c = this._positionValues(layer);
            
            if (layer.right && a.swipeType === 'vertical') {
              var right = c.r;
              c.r = this.map.width;
              c.l = right;
            }
            // 修复水平卷帘时，第二个图层位置不对的问题
            if (a.swipeType === 'horizontal' && b) {
              var bottom = c.b;
              c.t = bottom;
              c.b = this.map.height;
            }
            this._clipLayer(c);
            a.layers.push({
              layer: this.layers[b],
              left: c.l,
              right: c.r,
              top: c.t,
              bottom: c.b,
            });
          }
        this.emit('swipe', a);
      }
    },

    /**
     * 注册相关事件
     * 这里是为了重写部分新需求相关的事件
     */
    _setupEvents: function() {
      this.inherited(arguments);
      // 这里额外注册一下 Move 事件，通知外面
      this._dragDIVMoveHandle = k.pausable(
        this.moveable,
        'Move',
        h.hitch(this, function () {
          this.emit('dragDIVMove');
        })
      );
      this._listeners.push(this._dragDIVMoveHandle);
    }
  })
});
