var config = {
    style: 'mapbox://styles/mmtr92/cmhhtgr30003x01sgfjombbqh',
    // leave commented to use Mapbox Standard Style
    accessToken: 'pk.eyJ1IjoibW10cjkyIiwiYSI6ImNtaGdnM2xmMDA5dWwya3NoZTdvMzloOWgifQ.DySXWehHcbT2xg3OQiXjFA',
    showMarkers: true,
    markerColor: '#3FB1CE',
    projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Playas Euskadi',
    subtitle: 'Euskadi cuenta con algunas de las playas más hermosas de España, ideales para disfrutar del mar, la naturaleza y actividades al aire libre.',
    byline: 'By Margarita',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'PLAYA DE ARRIGORRI',
            image: 'https://www.euskadi.eus/contenidos/g_naturaleza/0000002993_g1_rec_turismo/es_2993/images/GL_playasG_arrigorri.jpg',
            description: 'Calidad sanitaria del entorno de la playa: MALA',
            location: {
                center: [-2.41853, 43.32317],
                zoom: 16.89,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'PLAYA DE GORLIZ',
            image: 'https://tse4.mm.bing.net/th/id/OIP.Ds7GPj6phAHgDR9u4AqdnAHaE_?rs=1&pid=ImgDetMain&o=7&rm=3',
            description: 'Calidad sanitaria del entorno de la playa: BUENA',
            location: {
                center: [-2.94386, 43.41478],
                zoom: 16.5,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
