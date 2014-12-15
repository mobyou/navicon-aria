
$(document).ready(function(){

    // mobile menu
    
    // sans JS c'est un lien vers une ancre, avec JS c'est un bouton (ARIA)
    $('.btn-mobile-menu').attr('role', 'button');
    
    // ouverture du menu mobile
    $('.btn-mobile-menu').on('click', function() {
        var self = $(this);
        // toggle ouvre ou ferme le menu
        $('nav.main-nav').toggle(500, function(){
            // on récupère l'état du menu après le click
            if($(this).css('display')=='none'){
                // menu fermé (ARIA)
                // on change l'attribut aria-expanded de a.btn-mobile-menu
                self.attr('aria-expanded','false');
            }
            else {
                // menu ouvert (ARIA)
                // on change l'attribut aria-expanded de a.btn-mobile-menu
                self.attr('aria-expanded','true');
            }
        });
    });

	
});


//JS END