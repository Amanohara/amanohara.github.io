var wms_layers = [];


        var lyr__0 = new ol.layer.Tile({
            'title': '標準地図',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png'
            })
        });

        var lyr_Google_1 = new ol.layer.Tile({
            'title': 'Google',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_Google_2 = new ol.layer.Tile({
            'title': 'Google 航空写真',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s@189&x={x}&y={y}&z={z}'
            })
        });
var format_youshutsu_hutekigou_3 = new ol.format.GeoJSON();
var features_youshutsu_hutekigou_3 = format_youshutsu_hutekigou_3.readFeatures(json_youshutsu_hutekigou_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_youshutsu_hutekigou_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_youshutsu_hutekigou_3.addFeatures(features_youshutsu_hutekigou_3);
var lyr_youshutsu_hutekigou_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_youshutsu_hutekigou_3, 
                style: style_youshutsu_hutekigou_3,
                popuplayertitle: "youshutsu_hutekigou",
                interactive: true,
                title: '<img src="styles/legend/youshutsu_hutekigou_3.png" /> youshutsu_hutekigou'
            });
var format_ganyu_hutekigou_4 = new ol.format.GeoJSON();
var features_ganyu_hutekigou_4 = format_ganyu_hutekigou_4.readFeatures(json_ganyu_hutekigou_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ganyu_hutekigou_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ganyu_hutekigou_4.addFeatures(features_ganyu_hutekigou_4);
var lyr_ganyu_hutekigou_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ganyu_hutekigou_4, 
                style: style_ganyu_hutekigou_4,
                popuplayertitle: "ganyu_hutekigou",
                interactive: true,
                title: '<img src="styles/legend/ganyu_hutekigou_4.png" /> ganyu_hutekigou'
            });
var format_ganyu_hutekigou_umetate_5 = new ol.format.GeoJSON();
var features_ganyu_hutekigou_umetate_5 = format_ganyu_hutekigou_umetate_5.readFeatures(json_ganyu_hutekigou_umetate_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ganyu_hutekigou_umetate_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ganyu_hutekigou_umetate_5.addFeatures(features_ganyu_hutekigou_umetate_5);
var lyr_ganyu_hutekigou_umetate_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ganyu_hutekigou_umetate_5, 
                style: style_ganyu_hutekigou_umetate_5,
                popuplayertitle: "ganyu_hutekigou_umetate",
                interactive: true,
                title: '<img src="styles/legend/ganyu_hutekigou_umetate_5.png" /> ganyu_hutekigou_umetate'
            });
var format_youshutsu_hutekigou_umetate_6 = new ol.format.GeoJSON();
var features_youshutsu_hutekigou_umetate_6 = format_youshutsu_hutekigou_umetate_6.readFeatures(json_youshutsu_hutekigou_umetate_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_youshutsu_hutekigou_umetate_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_youshutsu_hutekigou_umetate_6.addFeatures(features_youshutsu_hutekigou_umetate_6);
var lyr_youshutsu_hutekigou_umetate_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_youshutsu_hutekigou_umetate_6, 
                style: style_youshutsu_hutekigou_umetate_6,
                popuplayertitle: "youshutsu_hutekigou_umetate",
                interactive: true,
                title: '<img src="styles/legend/youshutsu_hutekigou_umetate_6.png" /> youshutsu_hutekigou_umetate'
            });
var format_youshutsu2_hutekigou_7 = new ol.format.GeoJSON();
var features_youshutsu2_hutekigou_7 = format_youshutsu2_hutekigou_7.readFeatures(json_youshutsu2_hutekigou_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_youshutsu2_hutekigou_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_youshutsu2_hutekigou_7.addFeatures(features_youshutsu2_hutekigou_7);
var lyr_youshutsu2_hutekigou_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_youshutsu2_hutekigou_7, 
                style: style_youshutsu2_hutekigou_7,
                popuplayertitle: "youshutsu2_hutekigou",
                interactive: true,
                title: '<img src="styles/legend/youshutsu2_hutekigou_7.png" /> youshutsu2_hutekigou'
            });
var format_chikasui_hutekigou_8 = new ol.format.GeoJSON();
var features_chikasui_hutekigou_8 = format_chikasui_hutekigou_8.readFeatures(json_chikasui_hutekigou_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_chikasui_hutekigou_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_chikasui_hutekigou_8.addFeatures(features_chikasui_hutekigou_8);
var lyr_chikasui_hutekigou_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_chikasui_hutekigou_8, 
                style: style_chikasui_hutekigou_8,
                popuplayertitle: "chikasui_hutekigou",
                interactive: true,
                title: '<img src="styles/legend/chikasui_hutekigou_8.png" /> chikasui_hutekigou'
            });
var format_chikasui_hutekigou_umetate_9 = new ol.format.GeoJSON();
var features_chikasui_hutekigou_umetate_9 = format_chikasui_hutekigou_umetate_9.readFeatures(json_chikasui_hutekigou_umetate_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_chikasui_hutekigou_umetate_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_chikasui_hutekigou_umetate_9.addFeatures(features_chikasui_hutekigou_umetate_9);
var lyr_chikasui_hutekigou_umetate_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_chikasui_hutekigou_umetate_9, 
                style: style_chikasui_hutekigou_umetate_9,
                popuplayertitle: "chikasui_hutekigou_umetate",
                interactive: true,
                title: '<img src="styles/legend/chikasui_hutekigou_umetate_9.png" /> chikasui_hutekigou_umetate'
            });
var format_chikasui2_hutekigou_10 = new ol.format.GeoJSON();
var features_chikasui2_hutekigou_10 = format_chikasui2_hutekigou_10.readFeatures(json_chikasui2_hutekigou_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_chikasui2_hutekigou_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_chikasui2_hutekigou_10.addFeatures(features_chikasui2_hutekigou_10);
var lyr_chikasui2_hutekigou_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_chikasui2_hutekigou_10, 
                style: style_chikasui2_hutekigou_10,
                popuplayertitle: "chikasui2_hutekigou",
                interactive: true,
                title: '<img src="styles/legend/chikasui2_hutekigou_10.png" /> chikasui2_hutekigou'
            });
var format_boring_11 = new ol.format.GeoJSON();
var features_boring_11 = format_boring_11.readFeatures(json_boring_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_boring_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_boring_11.addFeatures(features_boring_11);
var lyr_boring_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_boring_11, 
                style: style_boring_11,
                popuplayertitle: "boring",
                interactive: true,
                title: '<img src="styles/legend/boring_11.png" /> boring'
            });

lyr__0.setVisible(true);lyr_Google_1.setVisible(true);lyr_Google_2.setVisible(true);lyr_youshutsu_hutekigou_3.setVisible(true);lyr_ganyu_hutekigou_4.setVisible(true);lyr_ganyu_hutekigou_umetate_5.setVisible(true);lyr_youshutsu_hutekigou_umetate_6.setVisible(true);lyr_youshutsu2_hutekigou_7.setVisible(true);lyr_chikasui_hutekigou_8.setVisible(true);lyr_chikasui_hutekigou_umetate_9.setVisible(true);lyr_chikasui2_hutekigou_10.setVisible(true);lyr_boring_11.setVisible(true);
var layersList = [lyr__0,lyr_Google_1,lyr_Google_2,lyr_youshutsu_hutekigou_3,lyr_ganyu_hutekigou_4,lyr_ganyu_hutekigou_umetate_5,lyr_youshutsu_hutekigou_umetate_6,lyr_youshutsu2_hutekigou_7,lyr_chikasui_hutekigou_8,lyr_chikasui_hutekigou_umetate_9,lyr_chikasui2_hutekigou_10,lyr_boring_11];
lyr_youshutsu_hutekigou_3.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_ganyu_hutekigou_4.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_ganyu_hutekigou_umetate_5.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_youshutsu_hutekigou_umetate_6.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_youshutsu2_hutekigou_7.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_chikasui_hutekigou_8.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_chikasui_hutekigou_umetate_9.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_chikasui2_hutekigou_10.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_boring_11.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_youshutsu_hutekigou_3.set('fieldImages', {'Layer': '', 'PaperSpace': '', 'SubClasses': '', 'Linetype': '', 'EntityHandle': '', 'Text': '', });
lyr_ganyu_hutekigou_4.set('fieldImages', {'Layer': '', 'PaperSpace': '', 'SubClasses': '', 'Linetype': '', 'EntityHandle': '', 'Text': '', });
lyr_ganyu_hutekigou_umetate_5.set('fieldImages', {'Layer': '', 'PaperSpace': '', 'SubClasses': '', 'Linetype': '', 'EntityHandle': '', 'Text': '', });
lyr_youshutsu_hutekigou_umetate_6.set('fieldImages', {'Layer': '', 'PaperSpace': '', 'SubClasses': '', 'Linetype': '', 'EntityHandle': '', 'Text': '', });
lyr_youshutsu2_hutekigou_7.set('fieldImages', {'Layer': '', 'PaperSpace': '', 'SubClasses': '', 'Linetype': '', 'EntityHandle': '', 'Text': '', });
lyr_chikasui_hutekigou_8.set('fieldImages', {'Layer': '', 'PaperSpace': '', 'SubClasses': '', 'Linetype': '', 'EntityHandle': '', 'Text': '', });
lyr_chikasui_hutekigou_umetate_9.set('fieldImages', {'Layer': '', 'PaperSpace': '', 'SubClasses': '', 'Linetype': '', 'EntityHandle': '', 'Text': '', });
lyr_chikasui2_hutekigou_10.set('fieldImages', {'Layer': '', 'PaperSpace': '', 'SubClasses': '', 'Linetype': '', 'EntityHandle': '', 'Text': '', });
lyr_boring_11.set('fieldImages', {'Layer': '', 'PaperSpace': '', 'SubClasses': '', 'Linetype': '', 'EntityHandle': '', 'Text': '', });
lyr_youshutsu_hutekigou_3.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', });
lyr_ganyu_hutekigou_4.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', });
lyr_ganyu_hutekigou_umetate_5.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', });
lyr_youshutsu_hutekigou_umetate_6.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', });
lyr_youshutsu2_hutekigou_7.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', });
lyr_chikasui_hutekigou_8.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', });
lyr_chikasui_hutekigou_umetate_9.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', });
lyr_chikasui2_hutekigou_10.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', });
lyr_boring_11.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', });
lyr_boring_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});