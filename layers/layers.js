var wms_layers = [];

var format_codbeckareapolygon_0 = new ol.format.GeoJSON();
var features_codbeckareapolygon_0 = format_codbeckareapolygon_0.readFeatures(json_codbeckareapolygon_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_codbeckareapolygon_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_codbeckareapolygon_0.addFeatures(features_codbeckareapolygon_0);
var lyr_codbeckareapolygon_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_codbeckareapolygon_0, 
                style: style_codbeckareapolygon_0,
                popuplayertitle: 'cod beck area polygon',
                interactive: false,
                title: 'cod beck area polygon'
            });
var format_clippedwoodland_1 = new ol.format.GeoJSON();
var features_clippedwoodland_1 = format_clippedwoodland_1.readFeatures(json_clippedwoodland_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_clippedwoodland_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_clippedwoodland_1.addFeatures(features_clippedwoodland_1);
var lyr_clippedwoodland_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_clippedwoodland_1, 
                style: style_clippedwoodland_1,
                popuplayertitle: 'clipped woodland',
                interactive: false,
                title: '<img src="styles/legend/clippedwoodland_1.png" /> clipped woodland'
            });
var format_clippedlocal_buildings_2 = new ol.format.GeoJSON();
var features_clippedlocal_buildings_2 = format_clippedlocal_buildings_2.readFeatures(json_clippedlocal_buildings_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_clippedlocal_buildings_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_clippedlocal_buildings_2.addFeatures(features_clippedlocal_buildings_2);
var lyr_clippedlocal_buildings_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_clippedlocal_buildings_2, 
                style: style_clippedlocal_buildings_2,
                popuplayertitle: 'clipped local_buildings',
                interactive: false,
                title: '<img src="styles/legend/clippedlocal_buildings_2.png" /> clipped local_buildings'
            });
var format_clippedsurface_water_3 = new ol.format.GeoJSON();
var features_clippedsurface_water_3 = format_clippedsurface_water_3.readFeatures(json_clippedsurface_water_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_clippedsurface_water_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_clippedsurface_water_3.addFeatures(features_clippedsurface_water_3);
var lyr_clippedsurface_water_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_clippedsurface_water_3, 
                style: style_clippedsurface_water_3,
                popuplayertitle: 'clipped surface_water',
                interactive: false,
                title: '<img src="styles/legend/clippedsurface_water_3.png" /> clipped surface_water'
            });
var format_uppercode_beck_area_4 = new ol.format.GeoJSON();
var features_uppercode_beck_area_4 = format_uppercode_beck_area_4.readFeatures(json_uppercode_beck_area_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_uppercode_beck_area_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_uppercode_beck_area_4.addFeatures(features_uppercode_beck_area_4);
var lyr_uppercode_beck_area_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_uppercode_beck_area_4, 
                style: style_uppercode_beck_area_4,
                popuplayertitle: 'upper code_beck_area',
                interactive: false,
                title: 'upper code_beck_area'
            });
var format_clippedlocal_roads_5 = new ol.format.GeoJSON();
var features_clippedlocal_roads_5 = format_clippedlocal_roads_5.readFeatures(json_clippedlocal_roads_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_clippedlocal_roads_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_clippedlocal_roads_5.addFeatures(features_clippedlocal_roads_5);
var lyr_clippedlocal_roads_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_clippedlocal_roads_5, 
                style: style_clippedlocal_roads_5,
                popuplayertitle: 'clipped local_roads',
                interactive: false,
                title: '<img src="styles/legend/clippedlocal_roads_5.png" /> clipped local_roads'
            });
var format_clippedwaterlines_6 = new ol.format.GeoJSON();
var features_clippedwaterlines_6 = format_clippedwaterlines_6.readFeatures(json_clippedwaterlines_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_clippedwaterlines_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_clippedwaterlines_6.addFeatures(features_clippedwaterlines_6);
var lyr_clippedwaterlines_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_clippedwaterlines_6, 
                style: style_clippedwaterlines_6,
                popuplayertitle: 'clipped waterlines',
                interactive: false,
                title: '<img src="styles/legend/clippedwaterlines_6.png" /> clipped waterlines'
            });
var format_clippednames_7 = new ol.format.GeoJSON();
var features_clippednames_7 = format_clippednames_7.readFeatures(json_clippednames_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_clippednames_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_clippednames_7.addFeatures(features_clippednames_7);
var lyr_clippednames_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_clippednames_7, 
                style: style_clippednames_7,
                popuplayertitle: 'clipped names',
                interactive: false,
                title: '<img src="styles/legend/clippednames_7.png" /> clipped names'
            });
var format_clippedcontours_8 = new ol.format.GeoJSON();
var features_clippedcontours_8 = format_clippedcontours_8.readFeatures(json_clippedcontours_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_clippedcontours_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_clippedcontours_8.addFeatures(features_clippedcontours_8);
var lyr_clippedcontours_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_clippedcontours_8, 
                style: style_clippedcontours_8,
                popuplayertitle: 'clipped contours',
                interactive: false,
                title: '<img src="styles/legend/clippedcontours_8.png" /> clipped contours'
            });
var format_ScarthwoodMoorbogplantsconverted_9 = new ol.format.GeoJSON();
var features_ScarthwoodMoorbogplantsconverted_9 = format_ScarthwoodMoorbogplantsconverted_9.readFeatures(json_ScarthwoodMoorbogplantsconverted_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ScarthwoodMoorbogplantsconverted_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ScarthwoodMoorbogplantsconverted_9.addFeatures(features_ScarthwoodMoorbogplantsconverted_9);
var lyr_ScarthwoodMoorbogplantsconverted_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ScarthwoodMoorbogplantsconverted_9, 
                style: style_ScarthwoodMoorbogplantsconverted_9,
                popuplayertitle: 'Scarthwood Moor bog plants converted',
                interactive: true,
                title: '<img src="styles/legend/ScarthwoodMoorbogplantsconverted_9.png" /> Scarthwood Moor bog plants converted'
            });

lyr_codbeckareapolygon_0.setVisible(true);lyr_clippedwoodland_1.setVisible(true);lyr_clippedlocal_buildings_2.setVisible(true);lyr_clippedsurface_water_3.setVisible(true);lyr_uppercode_beck_area_4.setVisible(true);lyr_clippedlocal_roads_5.setVisible(true);lyr_clippedwaterlines_6.setVisible(true);lyr_clippednames_7.setVisible(true);lyr_clippedcontours_8.setVisible(true);lyr_ScarthwoodMoorbogplantsconverted_9.setVisible(true);
var layersList = [lyr_codbeckareapolygon_0,lyr_clippedwoodland_1,lyr_clippedlocal_buildings_2,lyr_clippedsurface_water_3,lyr_uppercode_beck_area_4,lyr_clippedlocal_roads_5,lyr_clippedwaterlines_6,lyr_clippednames_7,lyr_clippedcontours_8,lyr_ScarthwoodMoorbogplantsconverted_9];
lyr_codbeckareapolygon_0.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_clippedwoodland_1.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'type': 'type', });
lyr_clippedlocal_buildings_2.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'uuid': 'uuid', });
lyr_clippedsurface_water_3.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'type': 'type', });
lyr_uppercode_beck_area_4.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_clippedlocal_roads_5.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'type': 'type', 'name': 'name', 'number': 'number', 'level': 'level', });
lyr_clippedwaterlines_6.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'type': 'type', });
lyr_clippednames_7.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'type': 'type', 'name1': 'name1', 'name1language': 'name1language', 'name2': 'name2', 'name2language': 'name2language', });
lyr_clippedcontours_8.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'type': 'type', 'height': 'height', });
lyr_ScarthwoodMoorbogplantsconverted_9.set('fieldAliases', {'Main Area': 'Main Area', 'Sub-area': 'Sub-area', 'Date': 'Date', 'OS Location': 'OS Location', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Scientific Name': 'Scientific Name', 'Common Name': 'Common Name', 'Comments': 'Comments', });
lyr_codbeckareapolygon_0.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_clippedwoodland_1.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'type': 'TextEdit', });
lyr_clippedlocal_buildings_2.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'uuid': 'TextEdit', });
lyr_clippedsurface_water_3.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'type': 'TextEdit', });
lyr_uppercode_beck_area_4.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_clippedlocal_roads_5.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'type': 'TextEdit', 'name': 'TextEdit', 'number': 'TextEdit', 'level': 'Range', });
lyr_clippedwaterlines_6.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'type': 'TextEdit', });
lyr_clippednames_7.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'type': 'TextEdit', 'name1': 'TextEdit', 'name1language': 'TextEdit', 'name2': 'TextEdit', 'name2language': 'TextEdit', });
lyr_clippedcontours_8.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'type': 'TextEdit', 'height': 'TextEdit', });
lyr_ScarthwoodMoorbogplantsconverted_9.set('fieldImages', {'Main Area': 'TextEdit', 'Sub-area': 'TextEdit', 'Date': 'Hidden', 'OS Location': 'Hidden', 'Latitude': 'Hidden', 'Longitude': 'Hidden', 'Scientific Name': 'Hidden', 'Common Name': 'TextEdit', 'Comments': 'Hidden', });
lyr_codbeckareapolygon_0.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_clippedwoodland_1.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'type': 'no label', });
lyr_clippedlocal_buildings_2.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'uuid': 'no label', });
lyr_clippedsurface_water_3.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'type': 'no label', });
lyr_uppercode_beck_area_4.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_clippedlocal_roads_5.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'type': 'no label', 'name': 'no label', 'number': 'no label', 'level': 'no label', });
lyr_clippedwaterlines_6.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'type': 'no label', });
lyr_clippednames_7.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'type': 'no label', 'name1': 'no label', 'name1language': 'no label', 'name2': 'no label', 'name2language': 'no label', });
lyr_clippedcontours_8.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'type': 'no label', 'height': 'no label', });
lyr_ScarthwoodMoorbogplantsconverted_9.set('fieldLabels', {'Main Area': 'inline label - visible with data', 'Sub-area': 'inline label - visible with data', 'Common Name': 'inline label - visible with data', });
lyr_ScarthwoodMoorbogplantsconverted_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});