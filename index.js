//Jc Ghyselinck
//Le 10/10/2022
//Le Gîte du Moulin : carrousel universel
//JQuery

$(function() {

    function affich(index) {
        let index1 = 0;
        let index2 = 0;
        let index3 = 0;
        let lg = tab.length;

        if(index < lg - 2) {
            index1 = index;
            index2 = index + 1;
            index3 = index + 2;
        }

        if(index == lg - 2) {
            index1 = index;
            index2 = index + 1;
            index3 = 0;
        }

        if(index == lg - 1) {
            index1 = index;
            index2 = 0;
            index3 = 1;
        }

        $('#image_gauche').attr('src', tab[index1][0]);
    
        $('#image_centre').attr('src', tab[index2][0]);
        $('#intitul').text(tab[index2][1]);
    
        $('#image_droite').attr('src', tab[index3][0]);         
    }

    //Tableau images / textes : peut en contenir autant que vous en voulez !! 
    var tab = [['./images_logos/studio.png', 'Hébergements classiques: Les Studios'],
               ['./images_logos/gite.jpg', 'Hébergement classique: Le Gîte'],
               ['./images_logos/kota.jpg', 'Hébergement insolite: Le Kota'],
               ['./images_logos/roulotte.png', 'Hébergement insolite: La Roulotte'] 
              ]


    var index_img = 0;
    affich(index_img);

    $('#gauche').click(function() {
        index_img += 1;
        if(index_img > tab.length - 1) {
            index_img = 0;
        }
        affich(index_img);       
    });

    $('#droite').click(function() {
        index_img -= 1;
        if(index_img < 0) {
            index_img = tab.length -1;
        }
        affich(index_img);
    });
   
}); //DOM prêt