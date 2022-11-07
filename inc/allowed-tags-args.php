<?php

$kses_defaults = wp_kses_allowed_html( 'post' );

$svg_args = [
	'style'               => [],
	'svg'                 => [
		'class'           => true,
		'xmlns'           => true,
		'width'           => true,
		'height'          => true,
		'viewbox'         => true, // <= Must be lower case!
		'stroke'          => true,
		'stroke-width'    => true,
		'stroke-linecap'  => true,
		'stroke-linejoin' => true,
		'fill-opacity'    => true,
		'fill'            => true,
		'style'           => true,
		'role'            => true,
		'focusable'       => true,
	],
	'path'                => [
		'd'    => true,
		'fill' => true,
	],
	'polyline'            => [ 'points' => true ],
	'defs'                => [],
	'filter'              => [ 'id' => true ],
	'fecolormatrix'       => [
		'type'   => true,
		'values' => true,
	],
	'fecomponenttransfer' => [
		'color-interpolation-filters' => true,
	],
	'fefuncr'             => [
		'type'        => true,
		'tablevalues' => true,
	],
	'fefuncg'             => [
		'type'        => true,
		'tablevalues' => true,
	],
	'fefuncb'             => [
		'type'        => true,
		'tablevalues' => true,
	],
];

$aria_args = [
	'div'    => [
		'tabindex'   => true,
		'class'      => true,
		'role'       => true,
		'aria-level' => true,
		'id'         => true,
		'style'      => true,
	],
	'button' => [
		'tabindex'      => true,
		'class'         => true,
		'aria-controls' => true,
		'aria-expanded' => true,
		'style'         => true,
	],
];

$allowed_tags = array_merge( $kses_defaults, $svg_args, $aria_args );
