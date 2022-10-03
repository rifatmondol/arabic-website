// ======isotop js====

$(document).ready(function(){
    $('.gallery-manu').on('click', 'input',(function () {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({
            filter: filterValue,
            transitionDuration: 0,
            layoutMode: 'fitRows',
        });

    }));
    //start-masonry
    var $grid = $('.media-center-gallery').isotope({
        itemSelector: '.grid-item',
        percentPosition: true,
        masonry: {
            columnWidth: '.grid-item'
        }
    })    

})