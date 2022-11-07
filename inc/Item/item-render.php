<?php
// require_once BIG_BITE_BLOCK_FLEX_GRID_DIR . '/inc/utils.php';
/**
 * Function to handle rendering the Accordion Item block on the frontend.
 * 
 * @param array  $attributes - Holds the block attributes.
 * @param string $content - Stores the block content.
 * @param object $block - Block content.
 */
function bigbite_render_flex_grid_item_block($attributes, $content, $block)
{
	include plugin_dir_path(__DIR__) . 'allowed-tags-args.php'; // Include the $allowed_tags array.

	// $item_type          = $block->context['bigbite/flex-grid/display'];



	$wrapper_class = get_block_wrapper_attributes();


	ob_start();
	printf(
		'<div %s>%s</div>',
		$wrapper_class, // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
		wp_kses($content, $allowed_tags)
	);

	return ob_get_clean();
}
