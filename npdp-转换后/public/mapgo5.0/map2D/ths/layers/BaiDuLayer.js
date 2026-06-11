define(["dojo/_base/declare", "dojo/string", "esri/layers/TiledMapServiceLayer", "esri/SpatialReference", "esri/geometry/Extent", "esri/layers/TileInfo"], function (declare, string, TiledMapServiceLayer, SpatialReference, Extent, TileInfo) {
    return declare("BaiDuLayer", TiledMapServiceLayer, {
        constructor: function (type) {
            this.subDomains = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
            if (!type || type === "baidu") {
                this.urlTemplate = "http://online${subDomain}.map.bdimg.com/tile/?qt=tile&x=${col}&y=${row}&z=${level}&styles=pl&udt=20150421&scaler=1";
            }
            else if (!type || type === "baidugray") {
                this.subDomains = [0, 1, 2];
                this.urlTemplate = "http://api${subDomain}.map.bdimg.com/customimage/tile?&x=${col}&y=${row}&z=${level}&udt=20150629&scale=1&styles=t%3Awater%7Ce%3Aall%7Cc%3A%23d1d1d1%2Ct%3Aland%7Ce%3Aall%7Cc%3A%23f3f3f3%2Ct%3Arailway%7Ce%3Aall%7Cv%3Aoff%2Ct%3Ahighway%7Ce%3Aall%7Cc%3A%23fdfdfd%2Ct%3Ahighway%7Ce%3Al%7Cv%3Aoff%2Ct%3Aarterial%7Ce%3Ag%7Cc%3A%23fefefe%2Ct%3Aarterial%7Ce%3Ag.f%7Cc%3A%23fefefe%2Ct%3Apoi%7Ce%3Aall%7Cv%3Aoff%2Ct%3Agreen%7Ce%3Aall%7Cv%3Aoff%2Ct%3Asubway%7Ce%3Aall%7Cv%3Aoff%2Ct%3Amanmade%7Ce%3Aall%7Cc%3A%23d1d1d1%2Ct%3Alocal%7Ce%3Aall%7Cc%3A%23d1d1d1%2Ct%3Aarterial%7Ce%3Al%7Cv%3Aoff%2Ct%3Aboundary%7Ce%3Aall%7Cc%3A%23fefefe%2Ct%3Abuilding%7Ce%3Aall%7Cc%3A%23d1d1d1%2Ct%3Alabel%7Ce%3Al.t.f%7Cc%3A%23999999";
            }
            else if(!type || type==="baidublack"){
                this.subDomains = [0, 1, 2];
                this.urlTemplate = "http://api${subDomain}.map.bdimg.com/customimage/tile?&x=${col}&y=${row}&z=${level}&udt=20150629&scale=1&styles=t%3Awater%7Ce%3Aall%7Cc%3A%23031628%2Ct%3Aland%7Ce%3Ag%7Cc%3A%23000102%2Ct%3Ahighway%7Ce%3Aall%7Cv%3Aoff%2Ct%3Aarterial%7Ce%3Ag.f%7Cc%3A%23000000%2Ct%3Aarterial%7Ce%3Ag.s%7Cc%3A%230b3d51%2Ct%3Alocal%7Ce%3Ag%7Cc%3A%23000000%2Ct%3Arailway%7Ce%3Ag.f%7Cc%3A%23000000%2Ct%3Arailway%7Ce%3Ag.s%7Cc%3A%2308304b%2Ct%3Asubway%7Ce%3Ag%7Cl%3A-70%2Ct%3Abuilding%7Ce%3Ag.f%7Cc%3A%23000000%2Ct%3Aall%7Ce%3Al.t.f%7Cc%3A%23857f7f%2Ct%3Aall%7Ce%3Al.t.s%7Cc%3A%23000000%2Ct%3Abuilding%7Ce%3Ag%7Cc%3A%23022338%2Ct%3Agreen%7Ce%3Ag%7Cc%3A%23062032%2Ct%3Aboundary%7Ce%3Aall%7Cc%3A%23465b6c%2Ct%3Amanmade%7Ce%3Aall%7Cc%3A%23022338%2Ct%3Alabel%7Ce%3Aall%7Cv%3Aoff";
            }
            else if (type === "baidusatellite") {
                this.urlTemplate = "http://shangetu${subDomain}.map.bdimg.com/it/u=x=${col};y=${row};z=${level};v=009;type=sate&fm=46&udt=20140929";
            }
            else if (type === "baidusatellitelabel") {
                this.urlTemplate = "http://online${subDomain}.map.bdimg.com/tile/?qt=tile&x=${col}&y=${row}&z=${level}&styles=sl&v=068&udt=20150418";
            }
            else if (type === "baidu3d") {
                this.urlTemplate = "http://d${subDomain}.map.baidu.com/resource/mappic/bj/2/3/lv${level}/${col},${row}.jpg?v=001";
            }
            this.tileInfo = new TileInfo({
                "rows": 256,
                "cols": 256,
                "compressionQuality": 0,
                //"origin": {"x": -20037508.3427892, "y": 20037508.3427892},
                "origin": {"x": -22137508.3427892, "y": 19037508.3427892},
                "spatialReference": {"wkid": 102100},
                "lods": [
                    {level: 0, resolution: 156543.033928, scale: 5.91657527591555E8},
                    {level: 1, resolution: 78271.5169639999, scale: 2.95828763795777E8},
                    {level: 2, resolution: 39135.7584820001, scale: 1.47914381897889E8},
                    {level: 3, resolution: 19567.8792409999, scale: 7.3957190948944E7},
                    {level: 4, resolution: 9783.93962049996, scale: 3.6978595474472E7},
                    {level: 5, resolution: 4891.96981024998, scale: 1.8489297737236E7},
                    {level: 6, resolution: 2445.98490512499, scale: 9244648.868618},
                    {level: 7, resolution: 1222.99245256249, scale: 4622324.434309},
                    {level: 8, resolution: 611.49622628138, scale: 2311162.217155},
                    {level: 9, resolution: 305.748113140558, scale: 1155581.108577},
                    {level: 10, resolution: 152.874056570411, scale: 577790.554289},
                    {level: 11, resolution: 76.4370282850732, scale: 288895.277144},
                    {level: 12, resolution: 38.2185141425366, scale: 144447.638572},
                    {level: 13, resolution: 19.1092570712683, scale: 72223.819286},
                    {level: 14, resolution: 9.55462853563415, scale: 36111.909643},
                    {level: 15, resolution: 4.77731426794937, scale: 18055.954822},
                    {level: 16, resolution: 2.38865713397468, scale: 9027.977411},
                    {level: 17, resolution: 1.19432856685505, scale: 4513.988705},
                    {level: 18, resolution: 0.597164283559817, scale: 2256.994353},
                    {level: 19, resolution: 0.298582141647617, scale: 1128.497176}
                ]
            });
            this.spatialReference = new SpatialReference(this.tileInfo.spatialReference.toJson());
            this.fullExtent = new Extent(-20037508.3427892, -20037508.3427892, 20037508.3427892, 20037508.3427892, this.spatialReference);
            this.initialExtent = new Extent(-20037508.3427892, -20037508.3427892, 20037508.3427892, 20037508.3427892, this.spatialReference);
            this.loaded = true;
            this.onLoad(this);
        },
        getTileUrl: function (level, row, col) {
            var zoom = level - 1;
            var offsetX = Math.pow(2, zoom);
            var offsetY = offsetX - 1;
            var numX = col - offsetX;
            var numY = (-row) + offsetY;
            zoom = level + 1;
            return string.substitute(this.urlTemplate, {
                subDomain: this.subDomains[row % this.subDomains.length],
                col: numX, row: numY, level: zoom
            });
        }
    });
});