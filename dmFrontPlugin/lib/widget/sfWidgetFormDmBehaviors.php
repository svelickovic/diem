<?php
/**
 * sfWidgetFormField for attaching the behaviors
 *
 * @author TheCelavi
 */
class sfWidgetFormDmBehaviors extends sfWidgetFormInputText {
    
    public function render($name, $value = null, $attributes = array(), $errors = array()) {
        
        $i18n = dmContext::getInstance()->getI18N();
        
        return 
            '<div class="dm_widget_form_behaviors_droppable">
                <span style="display: none">' 
                    . parent::render($name, $value, $attributes, $errors) . 
                    '<span class="message message_add_behavior">'. $i18n->__('Attach behavior') .'</span>'.
                    '<span class="message message_edit_behavior">'. $i18n->__('Edit behavior') .'</span>'.
                    '<span class="message message_remove_behavior">'. $i18n->__('Do you realy want to remove this behavior?') .'</span>'.
                '</span>
             </div>';
    }
    
    public function getJavaScripts() {        
        return array_merge(parent::getJavaScripts(), array(
            'lib.json',
            'front.behaviorsFormField'
        ));
    }

    public function getStylesheets() {
        return array_merge(parent::getStylesheets(), array(
            'front.behaviorsFormField'
        ));
    }
    
}