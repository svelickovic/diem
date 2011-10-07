(function($) {    
    
    // Add a search field
    $('.dm_add_behavior_menu input.dm_add_behavior_search').hint().bind('keyup', function(){
        var $menu = $('.dm_add_behavior_menu');
        var term = new RegExp($.trim($(this).val()), 'i');
        if(term == '') {
            $menu.find(':hidden').show();
            return;
        };        
        $menu.find('.dm_behaviors_section').each(function()  {
            $(this).show();            
            if($(this).find('> .dm_behaviors_section_title').text().match(term))   {
                $(this).find('.dm_behavior_draggable_helper').show();
            } else {
                $(this).find('.dm_behavior_draggable_helper').each(function() {
                    $(this)[$(this).find('.dm_behavior_draggable_title').text().match(term) ? 'show' : 'hide']();
                });
                $(this)[$(this).find('.dm_behavior_draggable_helper:visible').length ? 'show' : 'hide']();
            };
        });
    });   
        
    // Show / Hide menu        
    $('.dm_add_behavior').click(function(event){
        var position = $('.dm_add_behavior').closest('li').position();
        $('.dm_add_behavior_menu').css('left', position.left + 4 + 'px');        
        if ($('.dm_add_behavior_menu').css('display') == 'block') {
            $('.dm_add_behavior_menu').css('display', 'none');
            $(this).removeClass('active');
        } else {
            $('.dm_add_behavior_menu').css('display', 'block');             
            $(this).addClass('active');
        };
    });    
    $(document).click(function(e){
        if ($(e.target).hasClass('dm_add_behavior') || $(e.target).hasClass('dm_add_behavior_menu') ||  $(e.target).closest('.dm_add_behavior_menu').length != 0 || $(e.target).closest('.dm_add_behavior').length != 0) return;
        else {
            $('.dm_add_behavior_menu').css('display', 'none');
            $('.dm_add_behavior').removeClass('active');
        };
    });
    
    // Hover activation
    $('.dm_add_behavior_menu').find('.dm_behavior_draggable_helper').hover(function(){
        $(this).addClass('dm_behavior_draggable_hover');
    }, function(){
        $(this).removeClass('dm_behavior_draggable_hover');
    }) . // Drag activation
    draggable({
        appendTo: '#dm_page',
        cursor: 'move',
        start: function() {
            $('.dm_add_behavior_menu').css('display', 'none');
            $('.dm_add_behavior').removeClass('active');
        },
        helper: function() {            
            return $('<div class="dm_behavior_draggable_helper dm_behavior_draggable_hover">' + $(this).html() + '</div>').maxZIndex();
        }
    });
})(jQuery);
