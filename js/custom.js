$(document).ready(function() {


    var userFeed = new Instafeed({
        get: 'user',
        userId: '47163674962',
        limit: 5,
        resolution: 'standard_resolution',
        accessToken: 'IGQVJVLXEwNXFSTDJLM1FJbUo5SFZAUSjNXYWFqUExBd24yNngxM3dEN0o3bGhzUkJ5aldFYjAxYV9sRzV0NUU0ZA0VMUUFkU1BXYkYtQXhuQW1abjJBbjhIUEtyRVg3MExCa0NJNEExSkZAUaFBXb3hEcwZDZD',
        sortBy: 'most-recent',
        template: '<div class="col-lg-3 instaimg"><a href="{{image}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
    });


    userFeed.run();

    
    // This will create a single gallery from all elements that have class "gallery-item"
    $('.gallery').magnificPopup({
        type: 'image',
        delegate: 'a',
        gallery: {
            enabled: true
        }
    });


});