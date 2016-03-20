import {inject} from 'aurelia-framework';
import {App} from './app';

// esri imports
import EMap = require("esri/Map");
import SceneView = require("esri/views/SceneView");
import ArcGISDynamicLayer = require("esri/layers/ArcGISDynamicLayer");
import FeatureLayer = require("esri/layers/FeatureLayer");
import SimpleRenderer = require("esri/renderers/SimpleRenderer");
import SimpleLineSymbol = require("esri/symbols/SimpleLineSymbol");
import domReady = require("dojo/domReady!");

@inject(App)
export class EsriGlobe {
    map: EMap;
    view: SceneView;
    app: App;
    rotateAntiClockwiseSpan: HTMLElement;
    rotateClockwiseSpan: HTMLElement;
    indicatorSpan: HTMLElement;
    tiltzoom: HTMLElement;

    constructor(app: App) {
        this.app = app;
    }

    detached() {
        this.app.mapVisible = false;
    }

    attached() {
        this.app.mapVisible = true;

        if (this.app.mapInitialized) {
            return;
        }

        this.app.mapInitialized = true;

        // Earth quake layer
        var eqLyr = new ArcGISDynamicLayer({
            url: "https://tmservices1.esri.com/arcgis/rest/services/LiveFeeds/Earthquakes/MapServer"
        });


        this.map = new EMap({
            basemap: "streets",
            layers: [eqLyr]
        });

        this.view = new SceneView({
            container: "globe",
            camera: {tilt: 80},
            map: this.map,
            scale: 10000000,
            center: [-101.17, 21.78]
        });
    }
}