<?php

namespace Big_Bite\Flex_Grid;

/**
 * Loader for handling assets
 */
class Loader
{

    private const SCRIPT_NAME = 'block-flex-grid-script';
    private const STYLE_NAME = 'block-flex-grid-style';
    private const FRONTEND_SCRIPT_NAME = 'block-flex-grid-frontend-script';
    private const FRONTEND_STYLE_NAME  = 'block-flex-grid-frontend-style';

    /**
     * Initialise the hooks and filters.
     */

    public function __construct()
    {
        add_action('enqueue_block_editor_assets', [$this, 'enqueue_block_editor_assets'], 1);
        add_action('wp_enqueue_scripts', [$this, 'enqueue_frontend_assets']);
        add_action('init', [$this, 'register_bb_block_flex_grid']);
    }

    /**
     * Enqueue any required assets for the block editor.
     *
     * @return void
     */
    public function enqueue_block_editor_assets(): void
    {
        $plugin_name = basename(BIG_BITE_BLOCK_FLEX_GRID_DIR);

        wp_enqueue_script(
            self::SCRIPT_NAME,
            plugins_url($plugin_name . '/dist/scripts' . BLOCK_FLEX_GRID_EDITOR_JS,),
            ['wp-blocks', 'wp-i18n', 'wp-element', 'wp-plugins', 'wp-edit-post'],
            filemtime(BIG_BITE_BLOCK_FLEX_GRID_DIR . '/dist/scripts/' . BLOCK_FLEX_GRID_EDITOR_JS),
            BLOCK_FLEX_GRID_VERSION
        );

        // wp_enqueue_style(
        //     self::STYLE_NAME,
        //     plugins_url($plugin_name . '/dist/styles/' . BLOCK_FLEX_GRID_CSS),
        //     [],
        //     filemtime(BIG_BITE_FLEX_GRID_DIR . '/dist/styles/' . BLOCK_FLEX_GRID_EDITOR_CSS)
        // );
    }

    /**
     * Enqueue any required assets for the frontend.
     *
     * @return void
     */
    public function enqueue_frontend_assets(): void
    {
        $plugin_name = basename(BIG_BITE_BLOCK_FLEX_GRID_DIR);
        wp_enqueue_script(
            self::STYLE_NAME,
            plugins_url($plugin_name . '/dist/scripts/' . BLOCK_FLEX_GRID_FRONTEND_JS),
            [],
            filemtime(BIG_BITE_BLOCK_FLEX_GRID_DIR . '/dist/scripts/' . BLOCK_FLEX_GRID_FRONTEND_JS),
            true
        );

        wp_enqueue_style(
            self::STYLE_NAME,
            plugins_url($plugin_name . '/dist/styles/' . BLOCK_FLEX_GRID_FRONTEND_CSS),
            [],
            filemtime(BIG_BITE_BLOCK_FLEX_GRID_DIR . '/dist/styles/' . BLOCK_FLEX_GRID_FRONTEND_CSS)
        );
    }

    /**
     * Register the Accordion block type with WordPress.
     *
     * @return void
     */
    public function register_bb_block_flex_grid(): void
    {
        register_block_type(
            __DIR__ . 'Group/block.json',
            [
                'render_callback' => 'bigbite_render_flex_grid_group_block',
                'skip_inner_blocks' => false
            ]
        );

        register_block_type(
            __DIR__ . 'Item/block.json',
            [
                'render_callback' => 'bigbite_render_flex_grid_item_block',
                'skip_inner_blocks' => false
            ]
        );
    }
}
