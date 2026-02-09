require.config({
    paths: {
        'SuperMap3D': 'https://www.supermapol.com/earth/Build/SuperMap3D/SuperMap3D',
        'Zlib': 'https://www.supermapol.com/earth/Build/SuperMap3D/Workers/zlib.min'
    },
    shim: {
        SuperMap3D: {
            exports: 'SuperMap3D'
        },
        Zlib: {
            exports: 'Zlib'
        }
    }
});

if (typeof SuperMap3D !== "undefined" && typeof Zlib !== "undefined") {
    onload(SuperMap3D, Zlib);
} else if (typeof require === "function") {
    require(["SuperMap3D", "Zlib"], onload);
}
