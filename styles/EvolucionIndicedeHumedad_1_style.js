var size = 0;
var placement = 'point';

var style_EvolucionIndicedeHumedad_1 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("E_NDMI");
    var labelText = "";
    size = 0;
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    if (value >= -0.024044 && value <= 0.008090) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(253,231,37,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 0.008090 && value <= 0.040223) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(93,201,98,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 0.040223 && value <= 0.072357) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(32,144,141,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 0.072357 && value <= 0.104491) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(58,82,139,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 0.104491 && value <= 0.136624) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(68,1,84,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    };

    return style;
};
