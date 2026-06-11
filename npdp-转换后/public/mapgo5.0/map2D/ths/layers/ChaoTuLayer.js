define(["dojo/_base/declare", "dojo/string", "esri/layers/TiledMapServiceLayer", "esri/SpatialReference", "esri/geometry/Extent", "esri/layers/TileInfo"], function (declare, string, TiledMapServiceLayer, SpatialReference, Extent, TileInfo) {
    return declare("ChaoTuLayer", TiledMapServiceLayer, {
        constructor: function () {
            //http://10.100.240.40:8099/DVIEW2-00-WEB_SERVICE/services/TiledMapService?request=getTile&name={name}&level={level}+{minLevel}&row={row}&col={col}&type={type}
            this.urlTemplate = "http://10.100.240.40:8099/DVIEW2-00-WEB_SERVICE/services/TiledMapService?request=getTile&name=world&level=(${level}+0)&row=${row}&col=${col}&type=ArcgisMapserviceCache";

            this.spatialReference = new SpatialReference({wkid: 3857});
            this.initialExtent = new Extent(-22041259.177080002,-28401448.364850003,22041259.177080002,28401448.36485, this.spatialReference);
            this.fullExtent = new Extent(-22041259.177080002,-28401448.364850003,22041259.177080002,28401448.36485, this.spatialReference);
            this.tileInfo = new TileInfo({
                "dpi": "90.71428571427429",
                "format": "image/png",
                "compressionQuality": 0,
                "spatialReference": this.spatialReference,
                "rows": 256,
                "cols": 256,
                "origin": {"x": -20037508.342787001, "y": 20037508.342787001},
                "lods": [
                    {"level": 0, "scale": 5.9165871090913E8, "resolution": 0.703125},
                    {"level": 1, "scale": 2.95829355454565E8, "resolution": 0.703125},
                    {"level": 2, "scale": 1.479146777272825E8, "resolution": 0.351563},
                    {"level": 3, "scale": 7.395733886364125E7, "resolution": 0.175781},
                    {"level": 4, "scale": 3.697866943182062E7, "resolution": 0.0878906},
                    {"level": 5, "scale": 1.848933471591031E7, "resolution": 0.0439453},
                    {"level": 6, "scale": 9244667.357955156, "resolution": 0.0219727},
                    {"level": 7, "scale": 4622333.678977578, "resolution": 0.0109863},
                    {"level": 8, "scale": 2311166.839488789, "resolution": 0.00549316},
                    {"level": 9, "scale": 1155583.4197443945, "resolution": 0.00274658},
                    {"level": 10, "scale": 577791.7098721972, "resolution": 0.00137329},
                    {"level": 11, "scale": 288895.8549360986, "resolution": 0.000686646},
                    {"level": 12, "scale": 144447.9274680493, "resolution": 0.000343323},
                    {"level": 13, "scale": 72223.96373402466, "resolution": 0.000171661},
                    {"level": 14, "scale": 36111.98186701233, "resolution": 8.58307e-05},
                    {"level": 15, "scale": 18055.990933506164, "resolution": 4.29153e-05},
                    {"level": 16, "scale": 9027.995466753082, "resolution": 2.14577e-05},
                    {"level": 17, "scale": 4513.997733376541, "resolution": 1.07289e-05},
                    {"level": 18, "scale": 2256.9988666882705, "resolution": 5.36445e-06},
                    {"level": 19, "scale": 1128.4994333441352, "resolution": 0.298582141647617}
                ]
            });
            this.loaded = true;
            this.onLoad(this)
        },
        getTileUrl: function (level, row, col) {
            return string.substitute(this.urlTemplate, {
                col: col, row: row, level: level
            });
        }
    })
});