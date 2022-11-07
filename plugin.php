<?php

/**
 * Plugin Name:       Flex Grid
 * Description:
 * Version:           0.0.1
 * Requires at least: 5.9
 * Requires PHP:      7.4
 * Author:            Big Bite
 * License:           GPL v2 or later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Update URI:        https://example.com/my-plugin/
 * Text Domain:		  flex-grid
 */

namespace Big_Bite\Flex_Grid;

// Exit if accessed directly.
if (!defined('ABSPATH')) {
	exit;
}

if (!defined('BIG_BITE_BLOCK_FLEX_GRID_DIR')) {
	define('BIG_BITE_BLOCK_FLEX_GRID_DIR', rtrim(plugin_dir_path(__FILE__), '/'));
}

require_once BIG_BITE_BLOCK_FLEX_GRID_DIR . '/vendor/autoload_packages.php';

add_action('plugins_loaded', __NAMESPACE__ . '\\setup', 0);
