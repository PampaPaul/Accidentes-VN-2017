var wms_layers = [];


        var lyr_GoogleRoad_0 = new ol.layer.Tile({
            'title': 'Google Road',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_provincia_1 = new ol.format.GeoJSON();
var features_provincia_1 = format_provincia_1.readFeatures(json_provincia_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_provincia_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_provincia_1.addFeatures(features_provincia_1);
var lyr_provincia_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_provincia_1, 
                style: style_provincia_1,
                popuplayertitle: "provincia",
                interactive: false,
                title: '<img src="styles/legend/provincia_1.png" /> provincia'
            });
var format_Accidentes2017confallecidosVNLaPampa_2 = new ol.format.GeoJSON();
var features_Accidentes2017confallecidosVNLaPampa_2 = format_Accidentes2017confallecidosVNLaPampa_2.readFeatures(json_Accidentes2017confallecidosVNLaPampa_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Accidentes2017confallecidosVNLaPampa_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Accidentes2017confallecidosVNLaPampa_2.addFeatures(features_Accidentes2017confallecidosVNLaPampa_2);cluster_Accidentes2017confallecidosVNLaPampa_2 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_Accidentes2017confallecidosVNLaPampa_2
});
var lyr_Accidentes2017confallecidosVNLaPampa_2 = new ol.layer.Vector({
                declutter: true,
                source:cluster_Accidentes2017confallecidosVNLaPampa_2, 
                style: style_Accidentes2017confallecidosVNLaPampa_2,
                popuplayertitle: "Accidentes 2017 con  fallecidos VN La Pampa",
                interactive: true,
                title: '<img src="styles/legend/Accidentes2017confallecidosVNLaPampa_2.png" /> Accidentes 2017 con  fallecidos VN La Pampa'
            });
var format_RedVialNacionalLaPampa_3 = new ol.format.GeoJSON();
var features_RedVialNacionalLaPampa_3 = format_RedVialNacionalLaPampa_3.readFeatures(json_RedVialNacionalLaPampa_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RedVialNacionalLaPampa_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RedVialNacionalLaPampa_3.addFeatures(features_RedVialNacionalLaPampa_3);
var lyr_RedVialNacionalLaPampa_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RedVialNacionalLaPampa_3, 
                style: style_RedVialNacionalLaPampa_3,
                popuplayertitle: "Red Vial Nacional La Pampa",
                interactive: false,
                title: '<img src="styles/legend/RedVialNacionalLaPampa_3.png" /> Red Vial Nacional La Pampa'
            });

lyr_GoogleRoad_0.setVisible(true);lyr_provincia_1.setVisible(true);lyr_Accidentes2017confallecidosVNLaPampa_2.setVisible(true);lyr_RedVialNacionalLaPampa_3.setVisible(true);
var layersList = [lyr_GoogleRoad_0,lyr_provincia_1,lyr_Accidentes2017confallecidosVNLaPampa_2,lyr_RedVialNacionalLaPampa_3];
lyr_provincia_1.set('fieldAliases', {'gid': 'gid', 'entidad': 'entidad', 'fna': 'fna', 'gna': 'gna', 'nam': 'nam', 'in1': 'in1', 'fdc': 'fdc', 'sag': 'sag', 'fdc2': 'fdc2', });
lyr_Accidentes2017confallecidosVNLaPampa_2.set('fieldAliases', {'A―O': 'A―O', 'Zona': 'Zona', 'Ruta': 'Ruta', 'Km': 'Km', 'fecha': 'fecha', 'hora': 'hora', 'Tipo_de_Ac': 'Tipo_de_Ac', 'muertos': 'muertos', 'heridos_gr': 'heridos_gr', 'heridos_le': 'heridos_le', 'Lugar_del_': 'Lugar_del_', 'Condicion_': 'Condicion_', 'Estado_de_': 'Estado_de_', 'Iluminacio': 'Iluminacio', 'Nota': 'Nota', });
lyr_RedVialNacionalLaPampa_3.set('fieldAliases', {'id': 'id', 'Tramo': 'Tramo', 'Ruta': 'Ruta', 'Longitud': 'Longitud', });
lyr_provincia_1.set('fieldImages', {'gid': 'TextEdit', 'entidad': 'TextEdit', 'fna': 'TextEdit', 'gna': 'TextEdit', 'nam': 'TextEdit', 'in1': 'TextEdit', 'fdc': 'TextEdit', 'sag': 'TextEdit', 'fdc2': 'TextEdit', });
lyr_Accidentes2017confallecidosVNLaPampa_2.set('fieldImages', {'A―O': 'TextEdit', 'Zona': 'TextEdit', 'Ruta': 'TextEdit', 'Km': 'TextEdit', 'fecha': 'TextEdit', 'hora': 'TextEdit', 'Tipo_de_Ac': 'TextEdit', 'muertos': 'TextEdit', 'heridos_gr': 'TextEdit', 'heridos_le': 'TextEdit', 'Lugar_del_': 'TextEdit', 'Condicion_': 'TextEdit', 'Estado_de_': 'TextEdit', 'Iluminacio': 'TextEdit', 'Nota': '', });
lyr_RedVialNacionalLaPampa_3.set('fieldImages', {'id': 'TextEdit', 'Tramo': 'TextEdit', 'Ruta': 'TextEdit', 'Longitud': 'TextEdit', });
lyr_provincia_1.set('fieldLabels', {'gid': 'no label', 'entidad': 'no label', 'fna': 'no label', 'gna': 'no label', 'nam': 'no label', 'in1': 'no label', 'fdc': 'no label', 'sag': 'no label', 'fdc2': 'no label', });
lyr_Accidentes2017confallecidosVNLaPampa_2.set('fieldLabels', {'A―O': 'inline label - always visible', 'Zona': 'inline label - always visible', 'Ruta': 'inline label - always visible', 'Km': 'inline label - always visible', 'fecha': 'inline label - always visible', 'hora': 'inline label - always visible', 'Tipo_de_Ac': 'inline label - always visible', 'muertos': 'inline label - always visible', 'heridos_gr': 'inline label - always visible', 'heridos_le': 'inline label - always visible', 'Lugar_del_': 'inline label - always visible', 'Condicion_': 'inline label - always visible', 'Estado_de_': 'inline label - always visible', 'Iluminacio': 'inline label - always visible', 'Nota': 'inline label - always visible', });
lyr_RedVialNacionalLaPampa_3.set('fieldLabels', {'id': 'no label', 'Tramo': 'no label', 'Ruta': 'no label', 'Longitud': 'no label', });
lyr_RedVialNacionalLaPampa_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});