ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3067").setExtent([247438.389029, 6578478.014701, 504217.269950, 6750933.860542]);
var wms_layers = [];


        var lyr_Positron_0 = new ol.layer.Tile({
            'title': 'Positron',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });
var format_Uusimaalandareas_1 = new ol.format.GeoJSON();
var features_Uusimaalandareas_1 = format_Uusimaalandareas_1.readFeatures(json_Uusimaalandareas_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3067'});
var jsonSource_Uusimaalandareas_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Uusimaalandareas_1.addFeatures(features_Uusimaalandareas_1);
var lyr_Uusimaalandareas_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Uusimaalandareas_1, 
                style: style_Uusimaalandareas_1,
                popuplayertitle: 'Uusimaa land areas',
                interactive: false,
                title: '<img src="styles/legend/Uusimaalandareas_1.png" /> Uusimaa land areas'
            });
var format_Uusimaawaters_2 = new ol.format.GeoJSON();
var features_Uusimaawaters_2 = format_Uusimaawaters_2.readFeatures(json_Uusimaawaters_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3067'});
var jsonSource_Uusimaawaters_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Uusimaawaters_2.addFeatures(features_Uusimaawaters_2);
var lyr_Uusimaawaters_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Uusimaawaters_2, 
                style: style_Uusimaawaters_2,
                popuplayertitle: 'Uusimaa waters',
                interactive: false,
                title: '<img src="styles/legend/Uusimaawaters_2.png" /> Uusimaa waters'
            });
var format_Uusimaaurbanareas_3 = new ol.format.GeoJSON();
var features_Uusimaaurbanareas_3 = format_Uusimaaurbanareas_3.readFeatures(json_Uusimaaurbanareas_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3067'});
var jsonSource_Uusimaaurbanareas_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Uusimaaurbanareas_3.addFeatures(features_Uusimaaurbanareas_3);
var lyr_Uusimaaurbanareas_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Uusimaaurbanareas_3, 
                style: style_Uusimaaurbanareas_3,
                popuplayertitle: 'Uusimaa urban areas',
                interactive: false,
                title: '<img src="styles/legend/Uusimaaurbanareas_3.png" /> Uusimaa urban areas'
            });
var format_Observationsinmunicipalities_4 = new ol.format.GeoJSON();
var features_Observationsinmunicipalities_4 = format_Observationsinmunicipalities_4.readFeatures(json_Observationsinmunicipalities_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3067'});
var jsonSource_Observationsinmunicipalities_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Observationsinmunicipalities_4.addFeatures(features_Observationsinmunicipalities_4);
var lyr_Observationsinmunicipalities_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Observationsinmunicipalities_4, 
                style: style_Observationsinmunicipalities_4,
                popuplayertitle: 'Observations in municipalities',
                interactive: true,
    title: 'Observations in municipalities<br />\
    <img src="styles/legend/Observationsinmunicipalities_4_0.png" /> 1 - 70<br />\
    <img src="styles/legend/Observationsinmunicipalities_4_1.png" /> 70 - 325<br />\
    <img src="styles/legend/Observationsinmunicipalities_4_2.png" /> 325 - 616<br />\
    <img src="styles/legend/Observationsinmunicipalities_4_3.png" /> 616 - 1821<br />\
    <img src="styles/legend/Observationsinmunicipalities_4_4.png" /> 1821 - 3079<br />' });
var format_Areaobservations_5 = new ol.format.GeoJSON();
var features_Areaobservations_5 = format_Areaobservations_5.readFeatures(json_Areaobservations_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3067'});
var jsonSource_Areaobservations_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Areaobservations_5.addFeatures(features_Areaobservations_5);
var lyr_Areaobservations_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Areaobservations_5, 
                style: style_Areaobservations_5,
                popuplayertitle: 'Area observations',
                interactive: true,
    title: 'Area observations<br />\
    <img src="styles/legend/Areaobservations_5_0.png" /> 1 - 7<br />\
    <img src="styles/legend/Areaobservations_5_1.png" /> 7 - 20<br />\
    <img src="styles/legend/Areaobservations_5_2.png" /> 20 - 40<br />\
    <img src="styles/legend/Areaobservations_5_3.png" /> 40 - 67<br />\
    <img src="styles/legend/Areaobservations_5_4.png" /> 67 - 100<br />\
    <img src="styles/legend/Areaobservations_5_5.png" /> 100 - 142<br />\
    <img src="styles/legend/Areaobservations_5_6.png" /> 142 - 201<br />\
    <img src="styles/legend/Areaobservations_5_7.png" /> 201 - 325<br />' });
var format_Nonurbanareaobservations_6 = new ol.format.GeoJSON();
var features_Nonurbanareaobservations_6 = format_Nonurbanareaobservations_6.readFeatures(json_Nonurbanareaobservations_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3067'});
var jsonSource_Nonurbanareaobservations_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nonurbanareaobservations_6.addFeatures(features_Nonurbanareaobservations_6);
var lyr_Nonurbanareaobservations_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Nonurbanareaobservations_6, 
                style: style_Nonurbanareaobservations_6,
                popuplayertitle: 'Non-urban area observations',
                interactive: false,
                title: '<img src="styles/legend/Nonurbanareaobservations_6.png" /> Non-urban area observations'
            });
var format_Urbanareaobservations_7 = new ol.format.GeoJSON();
var features_Urbanareaobservations_7 = format_Urbanareaobservations_7.readFeatures(json_Urbanareaobservations_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3067'});
var jsonSource_Urbanareaobservations_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Urbanareaobservations_7.addFeatures(features_Urbanareaobservations_7);
var lyr_Urbanareaobservations_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Urbanareaobservations_7, 
                style: style_Urbanareaobservations_7,
                popuplayertitle: 'Urban area observations',
                interactive: false,
                title: '<img src="styles/legend/Urbanareaobservations_7.png" /> Urban area observations'
            });
var format_Uusimaaborder_8 = new ol.format.GeoJSON();
var features_Uusimaaborder_8 = format_Uusimaaborder_8.readFeatures(json_Uusimaaborder_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3067'});
var jsonSource_Uusimaaborder_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Uusimaaborder_8.addFeatures(features_Uusimaaborder_8);
var lyr_Uusimaaborder_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Uusimaaborder_8, 
                style: style_Uusimaaborder_8,
                popuplayertitle: 'Uusimaa border',
                interactive: false,
                title: '<img src="styles/legend/Uusimaaborder_8.png" /> Uusimaa border'
            });
var format_Uusimaamunicipalityborders_9 = new ol.format.GeoJSON();
var features_Uusimaamunicipalityborders_9 = format_Uusimaamunicipalityborders_9.readFeatures(json_Uusimaamunicipalityborders_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3067'});
var jsonSource_Uusimaamunicipalityborders_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Uusimaamunicipalityborders_9.addFeatures(features_Uusimaamunicipalityborders_9);
var lyr_Uusimaamunicipalityborders_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Uusimaamunicipalityborders_9, 
                style: style_Uusimaamunicipalityborders_9,
                popuplayertitle: 'Uusimaa municipality borders',
                interactive: false,
                title: '<img src="styles/legend/Uusimaamunicipalityborders_9.png" /> Uusimaa municipality borders'
            });
var group_Borders = new ol.layer.Group({
                                layers: [lyr_Uusimaaborder_8,lyr_Uusimaamunicipalityborders_9,],
                                fold: 'close',
                                title: 'Borders'});
var group_FlyingSquirrelObservations = new ol.layer.Group({
                                layers: [lyr_Observationsinmunicipalities_4,lyr_Areaobservations_5,lyr_Nonurbanareaobservations_6,lyr_Urbanareaobservations_7,],
                                fold: 'open',
                                title: 'Flying Squirrel Observations'});
var group_MapFeatures = new ol.layer.Group({
                                layers: [lyr_Positron_0,lyr_Uusimaalandareas_1,lyr_Uusimaawaters_2,lyr_Uusimaaurbanareas_3,],
                                fold: 'close',
                                title: 'Map Features'});

lyr_Positron_0.setVisible(true);lyr_Uusimaalandareas_1.setVisible(true);lyr_Uusimaawaters_2.setVisible(true);lyr_Uusimaaurbanareas_3.setVisible(true);lyr_Observationsinmunicipalities_4.setVisible(false);lyr_Areaobservations_5.setVisible(true);lyr_Nonurbanareaobservations_6.setVisible(false);lyr_Urbanareaobservations_7.setVisible(false);lyr_Uusimaaborder_8.setVisible(true);lyr_Uusimaamunicipalityborders_9.setVisible(true);
var layersList = [group_MapFeatures,group_FlyingSquirrelObservations,group_Borders];
lyr_Uusimaalandareas_1.set('fieldAliases', {'GML_ID': 'GML_ID', 'NATCODE': 'NATCODE', 'NAMEFIN': 'NAMEFIN', 'NAMESWE': 'NAMESWE', });
lyr_Uusimaawaters_2.set('fieldAliases', {'Kohderyhma': 'Kohderyhma', 'Kohdeluokk': 'Kohdeluokk', 'Korkeus': 'Korkeus', });
lyr_Uusimaaurbanareas_3.set('fieldAliases', {'Kohderyhma': 'Kohderyhma', 'Kohdeluokk': 'Kohdeluokk', });
lyr_Observationsinmunicipalities_4.set('fieldAliases', {'GML_ID': 'GML_ID', 'NATCODE': 'NATCODE', 'NAMEFIN': 'NAMEFIN', 'NAMESWE': 'NAMESWE', 'LANDAREA': 'LANDAREA', 'FRESHWAREA': 'FRESHWAREA', 'SEAWAREA': 'SEAWAREA', 'TOTALAREA': 'TOTALAREA', 'NUMPOINTS': 'OBSERVATIONS', });
lyr_Areaobservations_5.set('fieldAliases', {'id': 'ID', 'left': 'left', 'top': 'top', 'right': 'right', 'bottom': 'bottom', 'row_index': 'row_index', 'col_index': 'col_index', 'NUMPOINTS': 'OBSERVATIONS', });
lyr_Nonurbanareaobservations_6.set('fieldAliases', {'fid': 'fid', 'taxonomic_order': 'taxonomic_order', 'formatted_taxon_name': 'formatted_taxon_name', 'abundance_verbatim': 'abundance_verbatim', 'formatted_date_time': 'formatted_date_time', 'country': 'country', 'bio_province_interpreted': 'bio_province_interpreted', 'locality': 'locality', 'collection_name': 'collection_name', 'team': 'team', 'year': 'year', 'date2': 'date2', 'end_date': 'end_date', });
lyr_Urbanareaobservations_7.set('fieldAliases', {'fid': 'fid', 'taxonomic_': 'taxonomic_', 'formatted_': 'formatted_', 'abundance_': 'abundance_', 'formatte_1': 'formatte_1', 'country': 'country', 'bio_provin': 'bio_provin', 'locality': 'locality', 'collection': 'collection', 'team': 'team', 'year': 'year', 'date2': 'date2', 'end_date': 'end_date', });
lyr_Uusimaaborder_8.set('fieldAliases', {'GML_ID': 'GML_ID', 'NATCODE': 'NATCODE', 'NAMEFIN': 'NAMEFIN', 'NAMESWE': 'NAMESWE', });
lyr_Uusimaamunicipalityborders_9.set('fieldAliases', {'GML_ID': 'GML_ID', 'NATCODE': 'NATCODE', 'NAMEFIN': 'NAMEFIN', 'NAMESWE': 'NAMESWE', 'LANDAREA': 'LANDAREA', 'FRESHWAREA': 'FRESHWAREA', 'SEAWAREA': 'SEAWAREA', 'TOTALAREA': 'TOTALAREA', });
lyr_Uusimaalandareas_1.set('fieldImages', {'GML_ID': 'TextEdit', 'NATCODE': 'TextEdit', 'NAMEFIN': 'TextEdit', 'NAMESWE': 'TextEdit', });
lyr_Uusimaawaters_2.set('fieldImages', {'Kohderyhma': '', 'Kohdeluokk': '', 'Korkeus': '', });
lyr_Uusimaaurbanareas_3.set('fieldImages', {'Kohderyhma': '', 'Kohdeluokk': '', });
lyr_Observationsinmunicipalities_4.set('fieldImages', {'GML_ID': 'TextEdit', 'NATCODE': 'TextEdit', 'NAMEFIN': 'TextEdit', 'NAMESWE': 'TextEdit', 'LANDAREA': 'TextEdit', 'FRESHWAREA': 'TextEdit', 'SEAWAREA': 'TextEdit', 'TOTALAREA': 'TextEdit', 'NUMPOINTS': 'TextEdit', });
lyr_Areaobservations_5.set('fieldImages', {'id': 'TextEdit', 'left': 'TextEdit', 'top': 'TextEdit', 'right': 'TextEdit', 'bottom': 'TextEdit', 'row_index': 'TextEdit', 'col_index': 'TextEdit', 'NUMPOINTS': 'TextEdit', });
lyr_Nonurbanareaobservations_6.set('fieldImages', {'fid': 'TextEdit', 'taxonomic_order': 'TextEdit', 'formatted_taxon_name': 'TextEdit', 'abundance_verbatim': 'TextEdit', 'formatted_date_time': 'TextEdit', 'country': 'TextEdit', 'bio_province_interpreted': 'TextEdit', 'locality': 'TextEdit', 'collection_name': 'TextEdit', 'team': 'TextEdit', 'year': 'TextEdit', 'date2': 'DateTime', 'end_date': 'DateTime', });
lyr_Urbanareaobservations_7.set('fieldImages', {'fid': '', 'taxonomic_': '', 'formatted_': '', 'abundance_': '', 'formatte_1': '', 'country': '', 'bio_provin': '', 'locality': '', 'collection': '', 'team': '', 'year': '', 'date2': '', 'end_date': '', });
lyr_Uusimaaborder_8.set('fieldImages', {'GML_ID': 'TextEdit', 'NATCODE': 'TextEdit', 'NAMEFIN': 'TextEdit', 'NAMESWE': 'TextEdit', });
lyr_Uusimaamunicipalityborders_9.set('fieldImages', {'GML_ID': 'TextEdit', 'NATCODE': 'TextEdit', 'NAMEFIN': 'TextEdit', 'NAMESWE': 'TextEdit', 'LANDAREA': 'TextEdit', 'FRESHWAREA': 'TextEdit', 'SEAWAREA': 'TextEdit', 'TOTALAREA': 'TextEdit', });
lyr_Uusimaalandareas_1.set('fieldLabels', {'GML_ID': 'hidden field', 'NATCODE': 'hidden field', 'NAMEFIN': 'hidden field', 'NAMESWE': 'hidden field', });
lyr_Uusimaawaters_2.set('fieldLabels', {'Kohderyhma': 'hidden field', 'Kohdeluokk': 'hidden field', 'Korkeus': 'hidden field', });
lyr_Uusimaaurbanareas_3.set('fieldLabels', {'Kohderyhma': 'hidden field', 'Kohdeluokk': 'hidden field', });
lyr_Observationsinmunicipalities_4.set('fieldLabels', {'GML_ID': 'hidden field', 'NATCODE': 'hidden field', 'NAMEFIN': 'inline label - always visible', 'NAMESWE': 'hidden field', 'LANDAREA': 'hidden field', 'FRESHWAREA': 'hidden field', 'SEAWAREA': 'hidden field', 'TOTALAREA': 'hidden field', 'NUMPOINTS': 'inline label - always visible', });
lyr_Areaobservations_5.set('fieldLabels', {'id': 'inline label - always visible', 'left': 'hidden field', 'top': 'hidden field', 'right': 'hidden field', 'bottom': 'hidden field', 'row_index': 'hidden field', 'col_index': 'hidden field', 'NUMPOINTS': 'inline label - always visible', });
lyr_Nonurbanareaobservations_6.set('fieldLabels', {'fid': 'hidden field', 'taxonomic_order': 'hidden field', 'formatted_taxon_name': 'hidden field', 'abundance_verbatim': 'hidden field', 'formatted_date_time': 'hidden field', 'country': 'hidden field', 'bio_province_interpreted': 'hidden field', 'locality': 'hidden field', 'collection_name': 'hidden field', 'team': 'hidden field', 'year': 'hidden field', 'date2': 'hidden field', 'end_date': 'hidden field', });
lyr_Urbanareaobservations_7.set('fieldLabels', {'fid': 'hidden field', 'taxonomic_': 'hidden field', 'formatted_': 'hidden field', 'abundance_': 'hidden field', 'formatte_1': 'hidden field', 'country': 'hidden field', 'bio_provin': 'hidden field', 'locality': 'hidden field', 'collection': 'hidden field', 'team': 'hidden field', 'year': 'hidden field', 'date2': 'hidden field', 'end_date': 'hidden field', });
lyr_Uusimaaborder_8.set('fieldLabels', {'GML_ID': 'hidden field', 'NATCODE': 'hidden field', 'NAMEFIN': 'hidden field', 'NAMESWE': 'hidden field', });
lyr_Uusimaamunicipalityborders_9.set('fieldLabels', {'GML_ID': 'hidden field', 'NATCODE': 'hidden field', 'NAMEFIN': 'hidden field', 'NAMESWE': 'hidden field', 'LANDAREA': 'hidden field', 'FRESHWAREA': 'hidden field', 'SEAWAREA': 'hidden field', 'TOTALAREA': 'hidden field', });
lyr_Uusimaamunicipalityborders_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});