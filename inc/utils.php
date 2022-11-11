<?php

/**
 * Used for utility functions.
 */

/**
 * 
 * Helper function to construct the style attribute for rendering in php
 * This may not be neccesary, try to figure out how to add multiple style attributes via get_block_wrapper_attributes
 * 
 *  @param array  $styles - Expects an associative array of style propertes and values.
 *  @return string - Returns a string of style declarations
 */

function constructStyles($input)
{
    $in_styles = '';

    foreach ($input as $key => $value) {
        if (!empty($value)) {
            $in_styles .= $key . ': ' . $value . '; ';
        }
    }

    return $in_styles;
}

/**
 * 
 * Helper function to append to a class with a condition.. eg 'row' || 'row-reverse'
 * 
 *  @param string  $main_class - Expects a class name
 *  @param boolean  $conditional - Expects a true or false condition
 *  @param string  $main_class - Expects a string. This will be appended to the end of the class if the condition is true
 *  @return string - Returns a style declarations
 */
function constructConditionalStyle($main_class, $conditional, $append)
{
    if ($conditional) {
        return $main_class . $append;
    } else {
        return $main_class;
    }
}
