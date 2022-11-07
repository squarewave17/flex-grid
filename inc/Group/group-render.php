<?php

/**
 * Function to handle rendering the Flex Grid Group block on the frontend.
 * 
 * @param array  $attributes - Block attributes.
 * @param string $content - Block Content.
 */

function bigbite_render_flex_grid_group_block($attributes, $content)
{
    include plugin_dir_path(__DIR__) . 'allowed-tags-args.php';
    $display = $attributes['display'];

    $wrapper_class = get_block_wrapper_attributes(); // Define this before if statement to avoid invalid argument error.

    if ($display) {
        $extra = [
            'class' => $display,
        ];
        $wrapper_class = get_block_wrapper_attributes($extra);
    }


    ob_start();
    printf(
        '<div %s>%s</div>',
        $wrapper_class, // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
        wp_kses($content, $allowed_tags)
    );
    return ob_get_clean();
}
