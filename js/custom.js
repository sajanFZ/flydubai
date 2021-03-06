/*////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
/*//////////////////// Variables Start                                                                                    */
/*////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
var $ = jQuery.noConflict();
/*////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
/*//////////////////// Variables End                                                                                      */
/*////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/



/*////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
/*////////////////////// Window Load Function Starts                                                                                                                              */
/*////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
jQuery(window).load(function(){
	
	jQuery('.preloader').stop(true, true).fadeOut(300, function(){jQuery(this).remove();});
	
});
/*////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
/*////////////////////// Window Load Function Ends                                                                                                                                */
/*////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/



/*////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
/*//////////////////// Document Ready Function Starts                                                                     */
/*////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
jQuery(document).ready(function($){
			
	
	
	'use strict';
	
	
	
	// initial settings start
	var mainMenuStatus = 'closed';
	var mainMenuAnimation = 'complete';
	var menuIndex = 10 * $('.mainMenuWrapper > li').length;
	var menuItemNumber = 0;
	
	$('.mainMenuWrapper > li').each(function(){
		menuIndex -= 10;
		$(this).css({'background-color': $(this).attr('data-background'), 'z-index': menuIndex});
	});
	
	var windowWidth = $(window).width() - 48;
		
	var lightboxInitialWidth = windowWidth;
	var lightboxInitialHeight = 220;
	// initial settings end


     
	// main menu functions start
	$('.mainMenuButton').click(function(){
		
		if(mainMenuStatus == 'closed' && mainMenuAnimation == 'complete'){
			
			mainMenuAnimation = 'incomplete';
			
			menuItemNumber = 0;
			
			$('.mainMenuOuterWrapper').fadeIn(300);
			
			var websiteWrapperHeight = $('.mainMenuWrapper > li').length * $('.mainMenuWrapper > li').height() + $('.headerOuterWrapper').outerHeight();
	
			$('.websiteWrapper').css('min-height', websiteWrapperHeight);
			
			$('.mainMenuWrapper > li').each(function(){
				
				var index = $(this).index();
				
				$(this).stop(true, true).delay(300).animate({top: index * $('.mainMenuWrapper > li').height()}, 600, 'easeOutCubic', function(){
					menuItemNumber++;
					if($('.mainMenuWrapper > li').length == menuItemNumber){ mainMenuStatus = 'open'; mainMenuAnimation = 'complete';};
				});
				
			});
			
		}else if(mainMenuStatus == 'open' && mainMenuAnimation == 'complete'){
			
			mainMenuAnimation = 'incomplete';
			
			$('.mainMenuWrapper > li').each(function(){
				
				var index = $(this).index();
				
				$(this).stop(true, true).animate({top: -$('.mainMenuWrapper > li').height()}, 600, 'easeOutCubic', function(){
					menuItemNumber--;
					if(menuItemNumber == 0){ mainMenuStatus = 'closed'; mainMenuAnimation = 'complete'; $('.mainMenuOuterWrapper').fadeOut(300);};
					$('.websiteWrapper').removeAttr('style');
				});
				
			});
			
		};
		
		return false;
		
	});	
	// main menu functions end	
	
	
	
	// adapt website wrapper function starts 
	function adaptWebsiteWrapper(){
		if($('.websiteWrapper').height() <= $(window).height() && $(window).height() >= $('.mainMenuWrapper').outerHeight()){
			$('.websiteWrapper').css('min-height', $(window).height());
		} else {
			$('.websiteWrapper').css('min-height', $('.mainMenuWrapper').outerHeight());
		};	
	};
	
	adaptWebsiteWrapper();
	// adapt website wrapper function ends
	
	
	
	// adapt portfolio function starts
	function adaptPortfolio(){
		
		$('.portfolioTwoWrapper').css('width', $('.portfolioTwoPageWrapper').width() - 12);
		$('.portfolioTwoFilterableWrapper .portfolioFilterableItemsWrapper').css('width', $('.portfolioTwoFilterablePageWrapper').width() - 12);
		$('.recentProjects').css('width', $('.recentProjectsOuterWrapper').width() + 36);
		
		var portfolioTwoItemWidth = ($('.portfolioTwoPageWrapper').width() - 48 - 36)/2;
		var portfolioTwoFilterableItemWidth = ($('.portfolioTwoFilterablePageWrapper').width() - 48 - 36)/2;
		var recentProjectItemWidth = ($('.recentProjectsOuterWrapper').width() - 36)/2;
		
		$('.portfolioTwoItemWrapper').css('width', portfolioTwoItemWidth);
		$('.portfolioTwoFilterableWrapper .portfolioFilterableItemWrapper').css('width', portfolioTwoFilterableItemWidth);
		$('.recentProject').css('width', recentProjectItemWidth);
		
	};
	
	adaptPortfolio();
	// adapt portfolio function ends
	
	
	
	// filterable portfolio functions start
	$('#portfolioMenuWrapper > li > a').click(function(){
		
		var filterVal = $(this).attr('data-type');
		
		if(filterVal != 'all'){
			
			$('.currentPortfolioFilter').removeClass('currentPortfolioFilter');
			
			$(this).addClass('currentPortfolioFilter');
			
			$('.portfolioFilterableItemWrapper').each(function(){
	            
				var itemCategories = $(this).attr("data-type").split(",");
				  
				if($.inArray(filterVal, itemCategories) > -1){
					
					$(this).addClass('filteredPortfolioItem');
					
					$('.filteredPortfolioItem').stop(true, true).animate({opacity:1}, 300, 'easeOutCubic');
					
				}else{
						
					$(this).removeClass('filteredPortfolioItem');
					
					if(!$(this).hasClass('filteredPortfolioItem')){
						
						$(this).stop(true, true).animate({opacity:0.3}, 300, 'easeOutCubic');
					
					};
					
				};
					
			});
		
		}else{
			
			$('.currentPortfolioFilter').removeClass('currentPortfolioFilter');
			
			$(this).addClass('currentPortfolioFilter');
			
			$('.filteredPortfolioItem').removeClass('filteredPortfolioItem');
			
			$('.portfolioFilterableItemWrapper').stop(true, true).animate({opacity:1}, 300, 'easeOutCubic');
			
		}
			
		return false;
	
	});
	// filterable portfolio functions end
	
	
	
	// alert box widget function starts
	$('.alertBoxButton').click(function(){
		
		$(this).parent().fadeOut(300, function(){$(this).remove();});
		
		return false;
		
	});
	// alert box widget function ends
	
	
	
	// accordion widget function starts
	$('.accordionButton').click(function(e){
		 
		if($(this).hasClass('currentAccordion')){
			
			 $(this).parent().find('.accordionContentWrapper').stop(true, true).animate({height:'hide'}, 300, 'easeOutCubic', function(){$(this).parent().find('.accordionButton').removeClass('currentAccordion');});
			 
		}else{
			 
			$(this).parent().find('.accordionContentWrapper').stop(true, true).animate({height:'show'}, 300, 'easeOutCubic', function(){$(this).parent().find('.accordionButton').addClass('currentAccordion');});
		 
        };
		 
		return false;
		
	});
	// accordion widget function ends

	
	
	// back to top function starts
	$('.backToTopButton').click(function(){
								   
	    $('body, html').stop(true, true).animate({scrollTop:0}, 1200,'easeOutCubic'); 
		
		return false;
	
    });
	// back to top function ends 
	
	
	
	// window resize functions start
	$(window).resize(function(){
		
		windowWidth = $(window).width() - 48;
		
		lightboxInitialWidth = windowWidth;
		
		lightbox();
					
		adaptPortfolio();
		
		adaptWebsiteWrapper()
		
		if(mainMenuStatus == 'open'){
			$('.mainMenuOuterWrapper').css('height', $('.websiteWrapper').height());	
		};
				
	});
	// window resize functions end
	
	
	
	// nivo slider functions start
	$('#mainSlider').nivoSlider({
		
		effect: 'fade',
		directionNav: true,
		controlNav: false,
		prevText: '',
        nextText: '' 
		
	});
	// nivo slider functions end
	
	
	
	// lightbox functions start
	function lightbox(){
		
		$('.portfolioOneExpandButton, .portfolioFilterableExpandButton, .singleProjectExpandButton').colorbox({
		
			maxWidth: windowWidth,
			initialWidth: lightboxInitialWidth,
			initialHeight: lightboxInitialHeight
			
		});
		
	};
	
	lightbox();
	// lightbox functions end



});
/*////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
/*//////////////////// Document Ready Function Ends                                                                       */
/*////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/