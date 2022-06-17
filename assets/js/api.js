/* ================= Google API =================*/

import $ from "https://cdn.skypack.dev/jquery@3.6.0";

// API: https://console.developers.google.com/apis/api

// https://developers.google.com/youtube/v3/docs/playlistItems/list

// https://www.youtube.com/playlist?list=PLydCkvfdgEA7fPMV2Kq9zzFrZVuLgVfVK


$(document).ready(function() {

    var key = 'AIzaSyA_8P3qH8qSLLO3zxAcjJKMSo0VErrXdXM';
    var playlistId = 'PLydCkvfdgEA7fPMV2Kq9zzFrZVuLgVfVK';
    var URL = 'https://www.googleapis.com/youtube/v3/playlistItems';


    var options = {
        part: 'snippet',
        key: key,
        maxResults: 20,
        playlistId: playlistId
    }

    loadVids();

    function loadVids() {
        $.getJSON(URL, options, function(data) {
            var id = data.items[0].snippet.resourceId.videoId;
            mainVid(id);
            resultsLoop(data);
        });
    }

    function mainVid(id) {
        $('.video-container').html(`<iframe id="video" onClick="togglePlay()" src="https://www.youtube.com/embed/${id}" loop muted autoplay controls frameborder="0" allowfullscreen></iframe>`);
    }

    function resultsLoop(data) {

        $.each(data.items, function(i, item) {

            var title = item.snippet.title;
            var vid = item.snippet.resourceId.videoId;
            /* var thumb = item.snippet.thumbnails.medium.url; */
            /* var desc = item.snippet.description.substring(0, 100); */

            $('.list').append(`<li data-src="${vid}">${title}</li>`);

        });
    }

    // CLICK EVENT
    $('.list').on('click', 'li', function() {
        var id = $(this).attr('data-src');
        mainVid(id);

        var current = document.getElementsByClassName("active");

        // If there's no active class
        if (current.length > 0) {
            current[0].className = current[0].className.replace(" active", "");
        }

        // Add the active class to the current/clicked button
        this.className += " active";
    });


});

$('.vd').on('click', function() {
    $('html, body').animate({ scrollTop: $(this.hash).offset().top - 200 }, 500);
    return false;
});

$('.button').on('click', function() {
    $('html, body').animate({ scrollTop: $(this.hash).offset().top }, 1000);
    return false;
});
