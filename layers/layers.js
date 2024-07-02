var wms_layers = [];


        var lyr_Google_0 = new ol.layer.Tile({
            'title': 'Google',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr__1 = new ol.layer.Tile({
            'title': '標準地図',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png'
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
var format__3 = new ol.format.GeoJSON();
var features__3 = format__3.readFeatures(json__3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__3.addFeatures(features__3);
var lyr__3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__3, 
                style: style__3,
                popuplayertitle: "形質変更時要届出区域",
                interactive: false,
    title: '形質変更時要届出区域<br />\
    <img src="styles/legend/_3_0.png" /> 090_H28市場_ガスBe_(概況+詳細)<br />\
    <img src="styles/legend/_3_1.png" /> 090_H28市場_含有量Pb(概況)<br />\
    <img src="styles/legend/_3_2.png" /> 090_H28市場_溶出量As(概況)<br />\
    <img src="styles/legend/_3_3.png" /> 090_H28市場_溶出量Cr(概況)<br />\
    <img src="styles/legend/_3_4.png" /> 090_H28市場_溶出量F(概況)<br />\
    <img src="styles/legend/_3_5.png" /> 090_H28市場_溶出量Hg(概況)<br />\
    <img src="styles/legend/_3_6.png" /> 091_H30衛生_ガスBe_(概況+詳細)<br />\
    <img src="styles/legend/_3_7.png" /> 091_H30衛生_溶出量As(配管)<br />\
    <img src="styles/legend/_3_8.png" /> 091_H30衛生_溶出量F(配管)<br />\
    <img src="styles/legend/_3_9.png" /> 091_H30衛生_溶出量Hg(配管)<br />\
    <img src="styles/legend/_3_10.png" /> 091_H30衛生_溶出量Pb（配管）<br />\
    <img src="styles/legend/_3_11.png" /> 092_H30建設局_含有量Pb(概況)<br />\
    <img src="styles/legend/_3_12.png" /> 092_H30建設局_溶出量As(概況)<br />\
    <img src="styles/legend/_3_13.png" /> 092_H30建設局_溶出量B(概況)<br />\
    <img src="styles/legend/_3_14.png" /> 092_H30建設局_溶出量Cr(概況)<br />\
    <img src="styles/legend/_3_15.png" /> 092_H30建設局_溶出量F(概況)<br />\
    <img src="styles/legend/_3_16.png" /> 092_H30建設局_溶出量Hg(概況)<br />\
    <img src="styles/legend/_3_17.png" /> 092_H30建設局_溶出量Pb(概況)<br />\
    <img src="styles/legend/_3_18.png" /> 093_1築-1_含有量Pb（概況）<br />\
    <img src="styles/legend/_3_19.png" /> 093_1築-1_溶出量As（概況）<br />\
    <img src="styles/legend/_3_20.png" /> 093_1築-1_溶出量F（概況）<br />\
    <img src="styles/legend/_3_21.png" /> 093_1築-1_溶出量Hg(概況)<br />\
    <img src="styles/legend/_3_22.png" /> 093_1築-1_溶出量Pb（概況）<br />\
    <img src="styles/legend/_3_23.png" /> 094_1築-1_含有量Pb（水面埋立）<br />\
    <img src="styles/legend/_3_24.png" /> 094_1築-1_溶出量As(水面埋立)<br />\
    <img src="styles/legend/_3_25.png" /> 094_1築-1_溶出量F(水面埋立)<br />\
    <img src="styles/legend/_3_26.png" /> 094_1築-1_溶出量Pb(水面埋立)<br />\
    <img src="styles/legend/_3_27.png" /> 095_1築-2_含有量Pb（概況）<br />\
    <img src="styles/legend/_3_28.png" /> 095_1築-2_溶出量As（概況）<br />\
    <img src="styles/legend/_3_29.png" /> 095_1築-2_溶出量Cr（概況）<br />\
    <img src="styles/legend/_3_30.png" /> 095_1築-2_溶出量F（概況）<br />\
    <img src="styles/legend/_3_31.png" /> 095_1築-2_溶出量Hg(概況)<br />\
    <img src="styles/legend/_3_32.png" /> 095_1築-2_溶出量Pb（概況）<br />\
    <img src="styles/legend/_3_33.png" /> 095_1築-2_溶出量Se(概況)<br />\
    <img src="styles/legend/_3_34.png" /> 096_1築-2_含有量Pb（水面埋立）<br />\
    <img src="styles/legend/_3_35.png" /> 096_1築-2_溶出量As（水面埋立）<br />\
    <img src="styles/legend/_3_36.png" /> 096_1築-2_溶出量F（水面埋立）<br />\
    <img src="styles/legend/_3_37.png" /> 096_1築-2_溶出量Pb（水面埋立）<br />\
    <img src="styles/legend/_3_38.png" /> 101_2築-1_As_溶出量<br />\
    <img src="styles/legend/_3_39.png" /> 101_2築-1_F_溶出量<br />\
    <img src="styles/legend/_3_40.png" /> 101_2築-1_Hg_溶出量<br />\
    <img src="styles/legend/_3_41.png" /> 101_2築-1_Pb_溶出量<br />\
    <img src="styles/legend/_3_42.png" /> 101_2築-1_含有量Pb（概況）<br />\
    <img src="styles/legend/_3_43.png" /> 102_2築-1_Hg_溶出量（水面埋立）<br />\
    <img src="styles/legend/_3_44.png" /> 102_2築-1_ガスBe_(概況+詳細)<br />\
    <img src="styles/legend/_3_45.png" /> 102_2築-1_ガスBe_(概況+詳細)-不明<br />\
    <img src="styles/legend/_3_46.png" /> 102_2築-1_含有量Pb（水面埋立）<br />\
    <img src="styles/legend/_3_47.png" /> 102_2築-1_溶出量As（水面埋立）<br />\
    <img src="styles/legend/_3_48.png" /> 102_2築-1_溶出量F（水面埋立）<br />\
    <img src="styles/legend/_3_49.png" /> 102_2築-1_溶出量Pb（水面埋立）<br />\
    <img src="styles/legend/_3_50.png" /> 103_2築-2_As_溶出量<br />\
    <img src="styles/legend/_3_51.png" /> 103_2築-2_Cr_溶出量<br />\
    <img src="styles/legend/_3_52.png" /> 103_2築-2_F_溶出量<br />\
    <img src="styles/legend/_3_53.png" /> 103_2築-2_Hg_溶出量<br />\
    <img src="styles/legend/_3_54.png" /> 103_2築-2_Pb_含有量<br />\
    <img src="styles/legend/_3_55.png" /> 103_2築-2_Pb_溶出量<br />\
    <img src="styles/legend/_3_56.png" /> 103_2築-2_ガスBe_(概況+詳細)<br />\
    <img src="styles/legend/_3_57.png" /> 104_3築-3_As_溶出量検出(概況+詳細)<br />\
    <img src="styles/legend/_3_58.png" /> 104_3築-3_Cr_溶出量検出(概況+詳細)<br />\
    <img src="styles/legend/_3_59.png" /> 104_3築-3_F_溶出量検出(概況+詳細)<br />\
    <img src="styles/legend/_3_60.png" /> 104_3築-3_Hg_溶出量検出(概況+詳細)<br />\
    <img src="styles/legend/_3_61.png" /> 104_3築-3_Pb_含有量検出(概況+詳細)<br />\
    <img src="styles/legend/_3_62.png" /> 104_3築-3_Pb_溶出量検出(概況+詳細)<br />\
    <img src="styles/legend/_3_63.png" /> 104_3築-3_Se_溶出量検出(概況+詳細)<br />\
    <img src="styles/legend/_3_64.png" /> 104_3築-3_ガスBe_(概況+詳細)<br />\
    <img src="styles/legend/_3_65.png" /> 105_3築-6_As_溶出量検出(概況+詳細)<br />\
    <img src="styles/legend/_3_66.png" /> 105_3築-6_F_溶出量検出(概況+詳細)<br />\
    <img src="styles/legend/_3_67.png" /> 105_3築-6_溶出量Cr(概況+詳細)<br />\
    <img src="styles/legend/_3_68.png" /> 105_3築-6_溶出量Hg(概況+詳細)<br />\
    <img src="styles/legend/_3_69.png" /> 105_3築-6_溶出量Pb(概況+詳細)<br />\
    <img src="styles/legend/_3_70.png" /> 106_3築-6_Hg_含有量検出(概況+詳細)<br />\
    <img src="styles/legend/_3_71.png" /> 106_3築-6_Pb_含有量検出(概況+詳細)<br />\
    <img src="styles/legend/_3_72.png" /> 106_3築-6_ガスBe_(概況+詳細)<br />\
    <img src="styles/legend/_3_73.png" /> 106_3築-6_ガスTCE_(概況+詳細)<br />\
    <img src="styles/legend/_3_74.png" /> 107_3築-6_As_溶出量検出(水面埋立)<br />\
    <img src="styles/legend/_3_75.png" /> 107_3築-6_Cr_溶出量検出(水面埋立)<br />\
    <img src="styles/legend/_3_76.png" /> 107_3築-6_F_溶出量検出(水面埋立)<br />\
    <img src="styles/legend/_3_77.png" /> 107_3築-6_Hg_溶出量検出(水面埋立)<br />\
    <img src="styles/legend/_3_78.png" /> 107_3築-6_Pb_溶出量検出(水面埋立)<br />\
    <img src="styles/legend/_3_79.png" /> 107_3築-6_溶出量As(水面埋立)<br />\
    <img src="styles/legend/_3_80.png" /> 107_3築-6_溶出量Pb(水面埋立)<br />\
    <img src="styles/legend/_3_81.png" /> 108_3築-6_Pb_含有量検出(水面埋立)<br />\
    <img src="styles/legend/_3_82.png" /> 109_3築-6_含有量Pb(埋立R4範囲再評価)<br />\
    <img src="styles/legend/_3_83.png" /> 109_3築-6_溶出量As(埋立R4範囲再評価)<br />\
    <img src="styles/legend/_3_84.png" /> 109_3築-6_溶出量Cr(埋立R4範囲再評価)<br />\
    <img src="styles/legend/_3_85.png" /> 109_3築-6_溶出量F(埋立R4範囲再評価)<br />\
    <img src="styles/legend/_3_86.png" /> 109_3築-6_溶出量Hg(埋立R4範囲再評価)<br />\
    <img src="styles/legend/_3_87.png" /> 109_3築-6_溶出量Pb(埋立R4範囲再評価)<br />\
    <img src="styles/legend/_3_88.png" /> 110_3築-7_As_溶出量検出(概況+詳細)<br />\
    <img src="styles/legend/_3_89.png" /> 110_3築-7_Cr_溶出量検出(概況+詳細)<br />\
    <img src="styles/legend/_3_90.png" /> 110_3築-7_F_溶出量検出(概況+詳細)<br />\
    <img src="styles/legend/_3_91.png" /> 110_3築-7_Hg_溶出量検出(概況+詳細)<br />\
    <img src="styles/legend/_3_92.png" /> 110_3築-7_Pb_溶出量検出(概況+詳細)<br />\
    <img src="styles/legend/_3_93.png" /> 111_3築-7_Pb_含有量検出(概況+詳細)<br />\
    <img src="styles/legend/_3_94.png" /> 115_4築-1_As_溶出量検出(概況+詳細)<br />\
    <img src="styles/legend/_3_95.png" /> 115_4築-1_Cr_溶出量検出(概況+詳細)<br />\
    <img src="styles/legend/_3_96.png" /> 115_4築-1_F_溶出量検出(概況+詳細)<br />\
    <img src="styles/legend/_3_97.png" /> 115_4築-1_Hg_溶出量検出(概況+詳細)<br />\
    <img src="styles/legend/_3_98.png" /> 115_4築-1_Pb_溶出量検出(概況+詳細)<br />\
    <img src="styles/legend/_3_99.png" /> 116_4築-1_Pb_含有量検出(概況+詳細)<br />\
    <img src="styles/legend/_3_100.png" /> 117_4築-1_Be_ガス検出(概況+詳細)<br />\
    <img src="styles/legend/_3_101.png" /> 117_4築-1_Be_ガス検出(概況+詳細)-不明<br />\
    <img src="styles/legend/_3_102.png" /> 118_4築-1_溶出量As(水面埋立)<br />\
    <img src="styles/legend/_3_103.png" /> 118_4築-1_溶出量Cr(水面埋立)<br />\
    <img src="styles/legend/_3_104.png" /> 118_4築-1_溶出量F(水面埋立)<br />\
    <img src="styles/legend/_3_105.png" /> 118_4築-1_溶出量Hg(水面埋立)<br />\
    <img src="styles/legend/_3_106.png" /> 118_4築-1_溶出量Pb(水面埋立)<br />\
    <img src="styles/legend/_3_107.png" /> 119_4築-1_含有量Pb(水面埋立)<br />\
    <img src="styles/legend/_3_108.png" /> 120_4築-2_As_溶出量検出(概況+詳細)<br />\
    <img src="styles/legend/_3_109.png" /> 120_4築-2_Cr_溶出量検出(概況+詳細)<br />\
    <img src="styles/legend/_3_110.png" /> 120_4築-2_F_溶出量検出(概況+詳細)<br />\
    <img src="styles/legend/_3_111.png" /> 120_4築-2_Hg_溶出量検出(概況+詳細)<br />\
    <img src="styles/legend/_3_112.png" /> 120_4築-2_Pb_溶出量検出(概況+詳細)<br />\
    <img src="styles/legend/_3_113.png" /> 121_4築-2_Pb_含有量検出(概況+詳細)<br />\
    <img src="styles/legend/_3_114.png" /> 122_4築-2_溶出量As(水面埋立)<br />\
    <img src="styles/legend/_3_115.png" /> 122_4築-2_溶出量F(水面埋立)<br />\
    <img src="styles/legend/_3_116.png" /> 122_4築-2_溶出量Hg(水面埋立)<br />\
    <img src="styles/legend/_3_117.png" /> 122_4築-2_溶出量Pb(水面埋立)<br />\
    <img src="styles/legend/_3_118.png" /> 122_4築-2_溶出量Se(水面埋立)<br />\
    <img src="styles/legend/_3_119.png" /> 123_4築-2_含有量Pb(水面埋立)<br />\
    <img src="styles/legend/_3_120.png" /> 130_5築-2_As_溶出量<br />\
    <img src="styles/legend/_3_121.png" /> 130_5築-2_As_溶出量(再調査7点)<br />\
    <img src="styles/legend/_3_122.png" /> 130_5築-2_Cr_溶出量<br />\
    <img src="styles/legend/_3_123.png" /> 130_5築-2_F_溶出量<br />\
    <img src="styles/legend/_3_124.png" /> 130_5築-2_Hg_溶出量<br />\
    <img src="styles/legend/_3_125.png" /> 130_5築-2_Hg_溶出量(再調査7点)<br />\
    <img src="styles/legend/_3_126.png" /> 130_5築-2_Pb_含有量<br />\
    <img src="styles/legend/_3_127.png" /> 130_5築-2_Pb_含有量(再調査7点)<br />\
    <img src="styles/legend/_3_128.png" /> 130_5築-2_Pb_溶出量<br />\
    <img src="styles/legend/_3_129.png" /> 130_5築-2_Pb_溶出量(再調査7点)<br />\
    <img src="styles/legend/_3_130.png" /> 130_Cr-地下水基準適合<br />\
    <img src="styles/legend/_3_131.png" /> 130_Cr-地下水調査未完了<br />\
    <img src="styles/legend/_3_132.png" /> 132_Se-地下水基準不適合（水面埋立範囲）<br />\
    <img src="styles/legend/_3_133.png" /> 133_Pb-地下水基準不適合<br />\
    <img src="styles/legend/_3_134.png" /> 134_As-第二地下水基準不適合<br />\
    <img src="styles/legend/_3_135.png" /> 134_As-地下水基準不適合<br />\
    <img src="styles/legend/_3_136.png" /> 134_As-地下水基準不適合（水面埋立範囲）<br />\
    <img src="styles/legend/_3_137.png" /> 135_F-地下水基準不適合<br />\
    <img src="styles/legend/_3_138.png" /> 135_F-地下水基準不適合（水面埋立範囲）<br />\
    <img src="styles/legend/_3_139.png" /> 136_B-地下水基準不適合<br />\
    <img src="styles/legend/_3_140.png" /> 150_5築-2_As_溶出量検出(水面埋立)<br />\
    <img src="styles/legend/_3_141.png" /> 150_5築-2_F_溶出量検出(水面埋立)<br />\
    <img src="styles/legend/_3_142.png" /> 150_5築-2_Hg_溶出量（水面埋立）<br />\
    <img src="styles/legend/_3_143.png" /> 150_5築-2_Pb_含有量（水面埋立）<br />\
    <img src="styles/legend/_3_144.png" /> 150_5築-2_Pb_溶出量検出(水面埋立)<br />\
    <img src="styles/legend/_3_145.png" /> 150_5築-2_Se_溶出量検出（水面埋立）<br />\
    <img src="styles/legend/_3_146.png" /> 170_1築-1_B_溶出量検出(水面埋立)<br />\
    <img src="styles/legend/_3_147.png" /> 170_1築-1_F_溶出量検出(水面埋立)<br />\
    <img src="styles/legend/_3_148.png" /> 170_2築-1_F_溶出量検出(水面埋立)<br />\
    <img src="styles/legend/_3_149.png" /> 200_As_第二地下水基準不適合<br />\
    <img src="styles/legend/_3_150.png" /> 200_Hg_第二溶出量不適合（概況）<br />\
    <img src="styles/legend/_3_151.png" /> 200_Hg_第二溶出量不適合（詳細で検出）<br />\
    <img src="styles/legend/_3_152.png" /> 200_Pb_第二溶出量不適合（概況）<br />\
    <img src="styles/legend/_3_153.png" /> 200_Pb_第二溶出量不適合（詳細で検出）<br />\
    <img src="styles/legend/_3_154.png" /> <br />'
        });
var format__4 = new ol.format.GeoJSON();
var features__4 = format__4.readFeatures(json__4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__4.addFeatures(features__4);
var lyr__4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__4, 
                style: style__4,
                popuplayertitle: "重心",
                interactive: true,
    title: '重心<br />\
    <img src="styles/legend/_4_0.png" /> PS検層<br />\
    <img src="styles/legend/_4_1.png" /> 地質調査地点<br />\
    <img src="styles/legend/_4_2.png" /> 帯水層調査地点<br />'
        });
var format_entities_5 = new ol.format.GeoJSON();
var features_entities_5 = format_entities_5.readFeatures(json_entities_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_entities_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_entities_5.addFeatures(features_entities_5);
var lyr_entities_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_entities_5, 
                style: style_entities_5,
                popuplayertitle: "entities",
                interactive: true,
    title: 'entities<br />\
    <img src="styles/legend/entities_5_0.png" /> 010_10ｍメッシュ<br />\
    <img src="styles/legend/entities_5_1.png" /> 010_30ｍ格子<br />\
    <img src="styles/legend/entities_5_2.png" /> <br />'
        });
var group_mesh_sjis = new ol.layer.Group({
                                layers: [lyr_entities_5,],
                                fold: "open",
                                title: "mesh_sjis"});
var group_futekigou_sjis = new ol.layer.Group({
                                layers: [lyr__3,],
                                fold: "open",
                                title: "futekigou_sjis"});

lyr_Google_0.setVisible(true);lyr__1.setVisible(true);lyr_Google_2.setVisible(true);lyr__3.setVisible(true);lyr__4.setVisible(true);lyr_entities_5.setVisible(true);
var layersList = [lyr_Google_0,lyr__1,lyr_Google_2,group_futekigou_sjis,lyr__4,group_mesh_sjis];
lyr__3.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr__4.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_entities_5.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr__3.set('fieldImages', {'Layer': '', 'PaperSpace': '', 'SubClasses': '', 'Linetype': '', 'EntityHandle': '', 'Text': '', });
lyr__4.set('fieldImages', {'Layer': '', 'PaperSpace': '', 'SubClasses': '', 'Linetype': '', 'EntityHandle': '', 'Text': '', });
lyr_entities_5.set('fieldImages', {'Layer': '', 'PaperSpace': '', 'SubClasses': '', 'Linetype': '', 'EntityHandle': '', 'Text': '', });
lyr__3.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'hidden field', 'SubClasses': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'hidden field', });
lyr__4.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'hidden field', 'SubClasses': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'hidden field', });
lyr_entities_5.set('fieldLabels', {'Layer': 'hidden field', 'PaperSpace': 'hidden field', 'SubClasses': 'hidden field', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', });
lyr_entities_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});