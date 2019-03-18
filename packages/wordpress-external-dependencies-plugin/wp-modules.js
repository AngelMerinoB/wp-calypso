const wpModules = new Map( [
	[ 'jquery', { dependency: 'jquery', globalName: 'jQuery' } ],
	[ 'lodash', { dependency: 'lodash', globalName: 'lodash' } ],
	[ 'moment', { dependency: 'moment', globalName: 'moment' } ],
	[ 'react', { dependency: 'react', globalName: 'React' } ],
	[ 'react-dom', { dependency: 'react-dom', globalName: 'ReactDOM' } ],
	[ '@wordpress/a11y', { dependency: 'wp-a11y', globalName: 'wp.a11y' } ],
	[ '@wordpress/annotations', { dependency: 'wp-annotations', globalName: 'wp.annotations' } ],
	[ '@wordpress/api-fetch', { dependency: 'wp-api-fetch', globalName: 'wp.apiFetch' } ],
	[ '@wordpress/autop', { dependency: 'wp-autop', globalName: 'wp.autop' } ],
	[ '@wordpress/blob', { dependency: 'wp-blob', globalName: 'wp.blob' } ],
	[ '@wordpress/block-editor', { dependency: 'wp-block-editor', globalName: 'wp.blockEditor' } ],
	[ '@wordpress/block-library', { dependency: 'wp-block-library', globalName: 'wp.blockLibrary' } ],
	[
		'@wordpress/block-serialization-default-parser',
		{
			dependency: 'wp-block-serialization-default-parser',
			globalName: 'wp.blockSerializationDefaultParser',
		},
	],
	[
		'@wordpress/block-serialization-spec-parser',
		{
			dependency: 'wp-block-serialization-spec-parser',
			globalName: 'wp.blockSerializationSpecParser',
		},
	],
	[ '@wordpress/blocks', { dependency: 'wp-blocks', globalName: 'wp.blocks' } ],
	[ '@wordpress/components', { dependency: 'wp-components', globalName: 'wp.components' } ],
	[ '@wordpress/compose', { dependency: 'wp-compose', globalName: 'wp.compose' } ],
	[ '@wordpress/core-data', { dependency: 'wp-core-data', globalName: 'wp.coreData' } ],
	[ '@wordpress/data', { dependency: 'wp-data', globalName: 'wp.data' } ],
	[ '@wordpress/date', { dependency: 'wp-date', globalName: 'wp.date' } ],
	[ '@wordpress/deprecated', { dependency: 'wp-deprecated', globalName: 'wp.deprecated' } ],
	[ '@wordpress/dom', { dependency: 'wp-dom', globalName: 'wp.dom' } ],
	[ '@wordpress/dom-ready', { dependency: 'wp-dom-ready', globalName: 'wp.domReady' } ],
	[ '@wordpress/edit-post', { dependency: 'wp-edit-post', globalName: 'wp.editPost' } ],
	[ '@wordpress/edit-widgets', { dependency: 'wp-edit-widgets', globalName: 'wp.editWidgets' } ],
	[ '@wordpress/editor', { dependency: 'wp-editor', globalName: 'wp.editor' } ],
	[ '@wordpress/element', { dependency: 'wp-element', globalName: 'wp.element' } ],
	[ '@wordpress/embed', { dependency: 'wp-embed', globalName: 'wp.embed' } ],
	[ '@wordpress/escape-html', { dependency: 'wp-escape-html', globalName: 'wp.escapeHtml' } ],
	[
		'@wordpress/format-library',
		{ dependency: 'wp-format-library', globalName: 'wp.formatLibrary' },
	],
	[ '@wordpress/hooks', { dependency: 'wp-hooks', globalName: 'wp.hooks' } ],
	[ '@wordpress/html-entities', { dependency: 'wp-html-entities', globalName: 'wp.htmlEntities' } ],
	[ '@wordpress/i18n', { dependency: 'wp-i18n', globalName: 'wp.i18N' } ],
	[
		'@wordpress/is-shallow-equal',
		{ dependency: 'wp-is-shallow-equal', globalName: 'wp.isShallowEqual' },
	],
	[ '@wordpress/keycodes', { dependency: 'wp-keycodes', globalName: 'wp.keycodes' } ],
	[
		'@wordpress/list-reusable-blocks',
		{ dependency: 'wp-list-reusable-blocks', globalName: 'wp.listReusableBlocks' },
	],
	[ '@wordpress/notices', { dependency: 'wp-notices', globalName: 'wp.notices' } ],
	[ '@wordpress/nux', { dependency: 'wp-nux', globalName: 'wp.nux' } ],
	[ '@wordpress/plugins', { dependency: 'wp-plugins', globalName: 'wp.plugins' } ],
	[
		'@wordpress/priority-queue',
		{ dependency: 'wp-priority-queue', globalName: 'wp.priorityQueue' },
	],
	[ '@wordpress/redux-routine', { dependency: 'wp-redux-routine', globalName: 'wp.reduxRoutine' } ],
	[ '@wordpress/rich-text', { dependency: 'wp-rich-text', globalName: 'wp.richText' } ],
	[ '@wordpress/shortcode', { dependency: 'wp-shortcode', globalName: 'wp.shortcode' } ],
	[ '@wordpress/token-list', { dependency: 'wp-token-list', globalName: 'wp.tokenList' } ],
	[ '@wordpress/url', { dependency: 'wp-url', globalName: 'wp.url' } ],
	[ '@wordpress/viewport', { dependency: 'wp-viewport', globalName: 'wp.viewport' } ],
	[ '@wordpress/wordcount', { dependency: 'wp-wordcount', globalName: 'wp.wordcount' } ],
] );

module.exports = wpModules;
