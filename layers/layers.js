var wms_layers = [];

var lyr_OSMStandard_0 = new ol.layer.Tile({
    'title': 'Mapa base',
    'opacity': 1.000000,
    source: new ol.source.XYZ({
        attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">&copy; OpenStreetMap contributors, CC-BY-SA</a>',
        url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
    })
});
var lyr_cu54_1_1 = new ol.layer.Image({
    opacity: 1,
    title: 'CU 5.4<br />',
    source: new ol.source.ImageStatic({
        url: "./layers/cu54_1_1.png",
        attributions: ' ',
        projection: 'EPSG:3857',
        alwaysInRange: true,
        imageExtent: [-8244215.102477, 520571.981948, -8239698.109960, 528147.187398]
    })
});
var format_PrediosImportantesp_relevantes2_copiar_2 = new ol.format.GeoJSON();
var features_PrediosImportantesp_relevantes2_copiar_2 = format_PrediosImportantesp_relevantes2_copiar_2.readFeatures(json_PrediosImportantesp_relevantes2_copiar_2,
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PrediosImportantesp_relevantes2_copiar_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrediosImportantesp_relevantes2_copiar_2.addFeatures(features_PrediosImportantesp_relevantes2_copiar_2);
var lyr_PrediosImportantesp_relevantes2_copiar_2 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_PrediosImportantesp_relevantes2_copiar_2,
    style: style_PrediosImportantesp_relevantes2_copiar_2,
    popuplayertitle: 'Predios importantes',
    interactive: true,
    title: '<img src="styles/legend/PrediosImportantesp_relevantes2_copiar_2.png" /> Predios importantes'
});

lyr_OSMStandard_0.setVisible(true);
lyr_cu54_1_1.setVisible(true);
lyr_PrediosImportantesp_relevantes2_copiar_2.setVisible(true);
var layersList = [lyr_OSMStandard_0, lyr_cu54_1_1, lyr_PrediosImportantesp_relevantes2_copiar_2];
lyr_PrediosImportantesp_relevantes2_copiar_2.set('fieldAliases', {'fid': 'fid', 'LOTCODIGO': 'LOTCODIGO', 'LOTDISPERS': 'LOTDISPERS', 'LOTILDISPE': 'LOTILDISPE', 'LOTUPREDIA': 'LOTUPREDIA', 'MANZCODIGO': 'MANZCODIGO', 'LOTDISTRIT': 'LOTDISTRIT', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'ID': 'ID'});
lyr_PrediosImportantesp_relevantes2_copiar_2.set('fieldImages', {'fid': 'TextEdit', 'LOTCODIGO': 'TextEdit', 'LOTDISPERS': 'TextEdit', 'LOTILDISPE': 'TextEdit', 'LOTUPREDIA': 'Range', 'MANZCODIGO': 'TextEdit', 'LOTDISTRIT': 'Range', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'ID': 'Range'});
lyr_PrediosImportantesp_relevantes2_copiar_2.set('fieldLabels', {'fid': 'no label', 'LOTCODIGO': 'no label', 'LOTDISPERS': 'no label', 'LOTILDISPE': 'no label', 'LOTUPREDIA': 'no label', 'MANZCODIGO': 'no label', 'LOTDISTRIT': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'ID': 'no label'});
lyr_PrediosImportantesp_relevantes2_copiar_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
