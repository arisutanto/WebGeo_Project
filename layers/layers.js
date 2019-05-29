var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_ATM_UGM_0 = new ol.format.GeoJSON();
var features_ATM_UGM_0 = format_ATM_UGM_0.readFeatures(json_ATM_UGM_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ATM_UGM_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_ATM_UGM_0.addFeatures(features_ATM_UGM_0);var lyr_ATM_UGM_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ATM_UGM_0, 
                style: style_ATM_UGM_0,
    title: 'ATM_UGM<br />\
    <img src="styles/legend/ATM_UGM_0_0.png" /> BCA<br />\
    <img src="styles/legend/ATM_UGM_0_1.png" /> BNI<br />\
    <img src="styles/legend/ATM_UGM_0_2.png" /> BPD DIY<br />\
    <img src="styles/legend/ATM_UGM_0_3.png" /> BRI<br />\
    <img src="styles/legend/ATM_UGM_0_4.png" /> BTN<br />\
    <img src="styles/legend/ATM_UGM_0_5.png" /> BUKOPIN<br />\
    <img src="styles/legend/ATM_UGM_0_6.png" /> CIMB Niaga<br />\
    <img src="styles/legend/ATM_UGM_0_7.png" /> Danamon<br />\
    <img src="styles/legend/ATM_UGM_0_8.png" /> Mandiri<br />\
    <img src="styles/legend/ATM_UGM_0_9.png" /> Muamalat<br />\
    <img src="styles/legend/ATM_UGM_0_10.png" /> <br />'
        });

lyr_ATM_UGM_0.setVisible(true);
var layersList = [baseLayer,lyr_ATM_UGM_0];
lyr_ATM_UGM_0.set('fieldAliases', {'Nama ATM': 'Nama ATM', 'Jenis ATM': 'Jenis ATM', 'Lokasi ATM': 'Lokasi ATM', 'Kondisi AT': 'Kondisi AT', 'Penerangan': 'Penerangan', 'Id': 'Id', 'Photo': 'Photo', });
lyr_ATM_UGM_0.set('fieldImages', {'Nama ATM': 'TextEdit', 'Jenis ATM': 'TextEdit', 'Lokasi ATM': 'TextEdit', 'Kondisi AT': 'TextEdit', 'Penerangan': 'TextEdit', 'Id': 'TextEdit', 'Photo': 'Photo', });
lyr_ATM_UGM_0.set('fieldLabels', {'Nama ATM': 'header label', 'Jenis ATM': 'inline label', 'Lokasi ATM': 'inline label', 'Kondisi AT': 'inline label', 'Penerangan': 'inline label', 'Id': 'inline label', 'Photo': 'no label', });
lyr_ATM_UGM_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});