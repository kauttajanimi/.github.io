var size = 0;
var placement = 'point';

var style_Uusimaamunicipalityborders_9 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("");
    var labelFont = "15.600000000000001px \'Arial\', sans-serif";
    var labelFill = "#000000";
    var bufferColor = "#cecece";
    var bufferWidth = 0.8999999999999999;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if (feature.get("NAMEFIN") !== null) {
        labelText = String(feature.get("NAMEFIN"));
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(190,178,151,0.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
