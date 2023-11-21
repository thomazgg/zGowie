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

// ! PROJECTS //

// // Supondo que você tenha um array de projetos a serem adicionados
// var projects = [
//     { title: 'Theree Stars Kick', description: 'Thumbnail', image: './assets/img/zgowie/kick_star.jpg' },
//     { title: 'Atlas Rise', description: 'Digital art carrossel', image: './assets/img/zgowie/Atlas-titan.jpg' },
//     { title: 'Fears', description: 'Streetwear art', image: './assets/img/zgowie/FEARS.jpg' },
//     { title: 'Halo on Fire', description: 'Digital art carrossel', image: './assets/img/zgowie/demonfull.jpg' },
//     { title: 'The earth creation', description: 'Streetwear art', image: './assets/img/zgowie/THE CREATION.jpg' },
//     { title: 'Need more space', description: 'Digital art', image: './assets/img/zgowie/need_more_space.jpg' }
// ];

// // Obtém o primeiro projeto da lista
// var primeiroProjeto = projects[0];

// // Clone o primeiro projeto
// var primeiroElemento = $('.project').first().clone();

// // Ajusta a imagem do primeiro elemento
// primeiroElemento.find('.bg').attr('src', primeiroProjeto.image);
// primeiroElemento.find('.w-txt p').first().text('01.');
// primeiroElemento.find('.w-txt p').last().text(primeiroProjeto.title);
// primeiroElemento.find('.w-txt span').text(primeiroProjeto.description);

// // Adiciona o primeiro elemento ao final do contêiner
// $('.wrk').append(primeiroElemento);

// // Itera sobre os demais projetos e adiciona novos elementos
// for (var i = 1; i < projects.length; i++) {
//     var projeto = projects[i];
//     var novoElemento = primeiroElemento.clone();

//     // Ajusta a imagem do novo elemento
//     novoElemento.find('.bg').attr('src', projeto.image);
//     novoElemento.find('.w-txt p').first().text((i + 1).toString().padStart(2, '0') + '.');
//     novoElemento.find('.w-txt p').last().text(projeto.title);
//     novoElemento.find('.w-txt span').text(projeto.description);

//     // Adiciona o novo elemento ao final do contêiner
//     $('.wrk').append(novoElemento);
// }

Fancybox.bind('[data-fancybox="gallery"]', {
    dragToClose: false,

    closeButton: "top",

    Image: {
        zoom: false,
    },

    on: {
        initCarousel: (fancybox) => {
            const slide = fancybox.Carousel.slides[fancybox.Carousel.page];

            fancybox.$container.style.setProperty(
                "--bg-image",
                `url("${slide.$thumb.src}")`
            );
        },
        "Carousel.change": (fancybox, carousel, to, from) => {
            const slide = carousel.slides[to];

            fancybox.$container.style.setProperty(
                "--bg-image",
                `url("${slide.$thumb.src}")`
            );
        },
    },
});