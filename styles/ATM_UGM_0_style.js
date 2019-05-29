var size = 0;
var placement = 'point';
function categories_ATM_UGM_0(feature, value, size, resolution, labelText,
                       labelFont, labelFill) {
                switch(value.toString()) {case 'BCA':
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 8.0 + size, points: 4,
            stroke: new ol.style.Stroke({color: 'rgba(36,22,236,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 2}), fill: new ol.style.Fill({color: 'rgba(255,255,255,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case 'BNI':
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 8.0 + size, points: 4,
            stroke: new ol.style.Stroke({color: 'rgba(50,125,9,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1}), fill: new ol.style.Fill({color: 'rgba(255,198,0,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case 'BPD DIY':
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 8.0 + size, points: 4,
            stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(63,96,239,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case 'BRI':
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 8.0 + size, points: 4,
            stroke: new ol.style.Stroke({color: 'rgba(255,255,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 2}), fill: new ol.style.Fill({color: 'rgba(36,22,236,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case 'BTN':
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 8.0 + size, points: 4,
            stroke: new ol.style.Stroke({color: 'rgba(227,36,25,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 2}), fill: new ol.style.Fill({color: 'rgba(63,96,239,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case 'BUKOPIN':
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 8.0 + size, points: 4,
            stroke: new ol.style.Stroke({color: 'rgba(250,250,48,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 3}), fill: new ol.style.Fill({color: 'rgba(51,160,44,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case 'CIMB Niaga':
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 8.0 + size, points: 4,
            stroke: new ol.style.Stroke({color: 'rgba(255,255,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1}), fill: new ol.style.Fill({color: 'rgba(233,61,67,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case 'Danamon':
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 8.0 + size, points: 4,
            stroke: new ol.style.Stroke({color: 'rgba(255,127,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 2}), fill: new ol.style.Fill({color: 'rgba(135,196,78,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case 'Mandiri':
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 8.0 + size, points: 4,
            stroke: new ol.style.Stroke({color: 'rgba(250,250,48,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 2}), fill: new ol.style.Fill({color: 'rgba(32,49,234,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case 'Muamalat':
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 8.0 + size, points: 4,
            stroke: new ol.style.Stroke({color: 'rgba(255,255,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 2}), fill: new ol.style.Fill({color: 'rgba(202,35,191,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
default:
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 4.0 + size,
            stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(159,41,201,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;}};

var style_ATM_UGM_0 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("Nama ATM");
    var labelText = "";
    size = 0;
    var labelFont = "9.75px \'MS Shell Dlg 2\', sans-serif";
    var labelFill = "rgba(0, 0, 0, 1)";
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if (feature.get("Nama ATM") !== null) {
        labelText = String(feature.get("Nama ATM"));
    }
    
var style = categories_ATM_UGM_0(feature, value, size, resolution, labelText,
                          labelFont, labelFill);

    return style;
};
