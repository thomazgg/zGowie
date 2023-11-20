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
        maxResults: 99,
        playlistId: playlistId
    }

    loadVids();

    function loadVids(pageToken) {
        options.pageToken = pageToken;

        $.getJSON(URL, options, function(data) {
            var id = data.items[0].snippet.resourceId.videoId;
            mainVid(id);
            resultsLoop(data.items);
            // resultsLoop(data.items.reverse()); // Inverte a ordem antes de processar
            if (data.nextPageToken) {
                loadVids(data.nextPageToken);
            }
        });
    }

    function mainVid(id) {
        $('.video-container').html(`<iframe id="video" onClick="togglePlay()" src="https://www.youtube.com/embed/${id}" loop muted autoplay controls frameborder="0" allowfullscreen></iframe>`);
    }

    function resultsLoop(items) {
        var listContainer = $('.list');
        // listContainer.empty(); // Limpa a lista antes de adicionar os novos itens

        $.each(items, function(i, item) {
            var title = item.snippet.title;
            var vid = item.snippet.resourceId.videoId;
            
            // Adiciona a classe "active" ao primeiro item
            var listItem = `<li data-src="${vid}" ${i === 0 ? 'class="active"' : ''}>${title}</li>`;
            
            listContainer.append(listItem);

            // Se for o primeiro item, atualiza o vídeo principal
            if (i === 0) {
                mainVid(vid);
            }
        });
    }

    // CLICK EVENT
    $('.list').on('click', 'li', function() {
        var id = $(this).attr('data-src');
        mainVid(id);

        // Remove a classe "active" do elemento atualmente ativo
        $('.list li.active').removeClass('active');

        // Adiciona a classe "active" ao botão atual/clique
        $(this).addClass('active');
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
