<?php

/**
 * Used for utility functions.
 */

/**
 * 
 * Helper function to construct the style attribute and prevent empty style properties being output
 * 
 *  @param array  $styles - Expects an associative array of style propertes and values.
 *  @return string - Returns a populated style tag attribute, or an empty string if values are empty.
 */

function constructStyleAttribute($styles)
{
    $style_attribute = 'style="';

    $styles_present = false;

    foreach ($styles as $key => $value) {
        if (!empty($value)) {
            $styles_present = true;
            $style_attribute .= $key . ': ' . $value . ';';
        }
    }
    $style_attribute .= '"';

    if ($styles_present) {
        return $style_attribute;
    } else {
        return '';
    }
}
