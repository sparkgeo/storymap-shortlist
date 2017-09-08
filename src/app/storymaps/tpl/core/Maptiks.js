define(['dojo/topic'],
  function(topic) {
    require(['maptiks'], function(mapWrapper) {
      topic.subscribe("story-loaded-map", function() {
        var appSettings = app.data.getWebAppData().getSettings();
        var container = app.map.container;
        if (appSettings.maptiks) { // maptiks have been entered in builder
          var maptiksTrackcode = app.data.getWebAppData().getMaptiks().maptiksTrackcode;
          var maptiksId = app.data.getWebAppData().getMaptiks().maptiksId;
          var maptiksMapOptions = {
            maptiks_trackcode: maptiksTrackcode,
            maptiks_id: maptiksId
          };
          mapWrapper(container, maptiksMapOptions, app.map);
        }
        topic.publish('maptiks-ready', mapWrapper);
      });
    });
  }
);