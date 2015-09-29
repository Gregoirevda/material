(function(){

    "use strict";

    angular.module('app', [])

        .controller('AppController', [function(){



        }])

        .directive('likeyooHeader', function(){
            return {
                restrict : 'E',
                link : function(scope, element){
                    $(window).on('scroll', function(e){
                        console.log(document.body.scrollTop);
                        if(document.body.scrollTop < 100){
                            element.removeClass('header-shadow');
                        } else{
                            element.addClass('header-shadow');
                        }
                    });
                }
            };
        })

        .directive('homePage', [function(){
            return {
                restrict : 'E',
                link : function(scope, element){

                    element.css('padding-top', ($(window).height() / 2) - 200 );
                    element.outerHeight($(window).height());

                    $(window).resize(function(){
                        element.css('padding-top', ($(window).height() / 2) - 200);
                        element.outerHeight($(window).height());
                    });

                }
            };
        }])

        .directive('player', function(){
            return {
                restrict : 'E',
                link : function(scope, element){

                    var isLittle = false;

                    $(window).on('scroll', function(){
                        if(document.body.scrollTop < 100){
                            togglePlayer(false);
                            isLittle = false;
                        } else{
                            togglePlayer(true);
                            isLittle = true;
                        }

                    });

                    element.click(function(){
                        if(isLittle){
                            togglePlayer(false);
                        }
                    });

                    function togglePlayer(state){
                        element.toggleClass('player-little', state);
                        element.toggleClass('player-round', state);
                        element.toggleClass('player-fixed', state);
                    }
                }
            };
        });

})();