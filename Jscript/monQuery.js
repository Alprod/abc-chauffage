$(document).ready(function () {


    /* ouvertutre fermeture des sous-menu sur la navbar */
    function allerRetour() {
        $('#subNav1').on('click', function () {
            $('.fioul').stop().slideToggle(300);
            $('.chaud').slideUp(200);
            $('.plomb').slideUp(200);
        });

        $('#subNav2').on('click', function () {
            $('.plomb').stop().slideToggle(300);
            $('.fioul').slideUp(200);
            $('.chaud').slideUp(200);
        });

        $('#subNav3').on('click', function () {
            $('.chaud').stop().slideToggle(300);
            $('.plomb').slideUp(200);
            $('.fioul').slideUp(200);
        });
    }
    allerRetour();


    /* ouvertutre fermeture des sous-menu sur la navbar en responsive */
    $('.Togg').on('click', function () {
        $('#navigation').stop().slideToggle(500)
    })
    $('#Togg1').on('click', function () {
        $('#navigation').stop().slideToggle(500)
    });





    let select = $('#subNav1, #subNav2, #subNav3, .nav-link')
    let classe = $('.plomb, .fioul, .chaud')



    /* affichage du background déjà en hover */
    $(select)
        .mouseenter(function () {
            $(this).css('background', 'rgba(245, 246, 250, 0.671)')
            $(this).css('borderRadius', '4px')
        })
        .mouseleave(function () {
            $(this).css('background', '')
        });

    /* remonter des sous-menu déjà ouvert en cliquant sur le container-fluid */

    /* $('.container-fluid').on('click',function(){
    $(classe).slideUp(200) 
}); */

    /* augmentation du background de la navbar avec le scroll*/

    $(function () {
        let navbar = $('.navbar')
        $(window).scroll(function () {
            if ($(window).scrollTop() <= 40) {
                navbar.css('transition', '0.4s')
                navbar.css('background', '#2c3e505e')
            } else {
                navbar.css('transition', '0.4s')
                navbar.css('background', '#2c3e50')
            }
        })
    });


    /* apparition du Rappel automatique */

    $(function () {
        let rappel = $('#rappel')
        $(document).scroll(function () {
            if ($(document).scrollTop() >= 2000) {
                rappel.slideUp('slow')
                rappel.css({
                    background: '#f5f6fa',
                    position: 'fixed',
                    bottom: '0px',
                    width: '100%'
                })
            } else if ($(document).scrollTop() == 10000) {
                rappel.slideDown('fast')
                rappel.css({
                    background: '#f5f6fa',
                    position: 'fixed',
                    bottom: '0px',
                    width: '100%'
                })
            } else {
                rappel.show().css(({
                    background: '#f5f6fa',
                    position: 'fixed',
                    bottom: '0px',
                    width: '100%'
                }))
            }

        })
    });



    $('.top0').mouseenter(function () {
        $('#carteTitre').fadeIn(500)
        $('.cdi1').css('filter', 'blur(2px)')
        $('.slogan0').slideDown(200)
    });
    $('.top0').mouseleave(function () {
        $('#carteTitre').stop().fadeOut(200)
        $('.cdi1').css('filter', '')
        $('.slogan0').fadeOut(200)
    });

    $('.top1').mouseenter(function () {
        $('#carteTitre1').fadeIn(500)
        $('.cdi2').css('filter', 'blur(2px)')
        $('.slogan1').slideDown(200)
    });
    $('.top1').mouseleave(function () {
        $('#carteTitre1').stop().fadeOut(200)
        $('.cdi2').css('filter', '')
        $('.slogan1').fadeOut(200)
    });

    $('.top2').mouseenter(function () {
        $('#carteTitre2').fadeIn(500)
        $('.cdi3').css('filter', 'blur(2px)')
        $('.slogan2').slideDown(200)
    });
    $('.top2').mouseleave(function () {
        $('#carteTitre2').stop().fadeOut(200)
        $('.cdi3').css('filter', '')
        $('.slogan2').fadeOut(200)
    });




    /* function slidTog(a){
        if (($('.plomb') = $('#subNav1').mouseenter()) || ($('.chaud') = $('.subNav3').mouseenter()) ||($('.fioul') = $('subNav1').mouseenter())){
            a.slideDown(500)
        }
        else{
            a.slideUp(500)
        }
    };
    slidTog() */
    var a = "";

    var r = /[0-9]/

    //retrenscription des inputs du form devisfioul de la form principal a la div Total

    $('body').keyup(function (e) {
        if (document.activeElement == document.getElementById('codePostal')) {
            a += e.key

            $('#cpost').html(a)
        }
    });



    $('#row')
        .next('h2')
        .addClass('display-3');



    $('#soumettre').on('click', function () {
        erreur = $('.invalid-feedback')

        if ($('#email').val() == '') {

        }
    })






    $('#gaz').on('click', function () {
            $('.gaz').show()
            $('.pompechaleur').stop().hide()
            $('.Mazout').stop().hide()
            $('.electrique').stop().hide()
        
    })

    $('#electrique').on('click', function () {
        $('.electrique').show()
            $('.pompechaleur').stop().hide()
            $('.Mazout').stop().hide()
            $('.gaz').stop().hide()
        
    })

    $('#pompe').on('click', function () {
        $('.pompechaleur').show()
            $('.electrique').stop().hide()
            $('.Mazout').stop().hide()
            $('.gaz').stop().hide()
    
})

$('#mazout').on('click', function () {
    $('.Mazout').show()
        $('.pompechaleur').stop().hide()
        $('.electrique').stop().hide()
        $('.gaz').stop().hide()
})




















});// Fin de mon Code