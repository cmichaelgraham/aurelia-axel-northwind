declare module "esri/Map" {
    class Map {
        constructor(obj: Object);
        add(obj: Object);
        basemap: string;
        layers: Array<any>;
    }
    export = Map;
}

declare module "esri/views/SceneView" {
    class SceneView {
        constructor(obj: Object);
        watch(s: string, camera: any);
        camera: any;
        animateTo(obj: Object);
    }
    export = SceneView;
}

declare module "esri/layers/ArcGISDynamicLayer" {
    class ArcGISDynamicLayer {
        constructor(obj: Object);
    }
    export = ArcGISDynamicLayer;
}

declare module "esri/layers/FeatureLayer" {
    class FeatureLayer {
        constructor(obj: Object);
    }
    export = FeatureLayer;
}

declare module "esri/renderers/SimpleRenderer" {
    class SimpleRenderer {
        constructor(obj: Object);
    }
    export = SimpleRenderer;
}

declare module "esri/symbols/SimpleLineSymbol" {
    class SimpleLineSymbol {
        constructor(obj: Object);
    }
    export = SimpleLineSymbol;
}

declare module "esri/layers/ArcGISTiledLayer" {
    class ArcGISTiledLayer {
        constructor(obj: Object);
    }
    export = ArcGISTiledLayer;
}

declare module "dojo/domReady!" { }