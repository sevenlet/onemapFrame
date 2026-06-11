define([
    "dojo/_base/declare",
    "dojo/on",
    "dojo/dom-construct",
    "esri/layers/OnDemandMode"
], function (declare,
             on,
             domConstruct,
             OnDemandMode) {
    return declare([OnDemandMode], {
        _drawFeatures: function (featureSet, b) {
            var features = featureSet.features;
            var ctx = this.featureLayer._ctx;
            for (var index in features) {
                var point = this.map.toScreen(features[index].geometry);
                // ctx.fillStyle = "#0000FF";
                ctx.fillRect(point.x - 5, point.y - 5, 10, 10);
            }
        },
        _zoomHandler:function(){
            this.featureLayer._ctx.clearRect(0,0,this.map.width,this.map.height);
            this.inherited(arguments);
        },
        _panHandler:function(){
            this.featureLayer._ctx.clearRect(0,0,this.map.width,this.map.height);
            this.inherited(arguments);
        }
    });
});
