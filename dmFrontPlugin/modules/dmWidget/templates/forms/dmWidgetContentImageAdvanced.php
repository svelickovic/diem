<?php


echo

$form->renderGlobalErrors(),

_open('div.dm_tabbed_form'),

_tag('ul.tabs',
  _tag('li', _link('#'.$baseTabId.'_media')->text(__('Media'))).
  _tag('li', _link('#'.$baseTabId.'_advanced')->text(__('Advanced')))
),

_tag('div#'.$baseTabId.'_media',
  $sf_context->get('helper')->renderPartial('dmWidget', 'forms/dmWidgetContentImage', array(
    'form' => $form,
    'hasMedia' => $hasMedia,
    'skipCssClass' => true
  ))
),

_tag('div#'.$baseTabId.'_advanced',
  _tag('ul.dm_form_elements',
    $form['behaviors']->renderRow().
    $form['cssClass']->renderRow()
  )
),

_close('div'); //div.dm_tabbed_form
