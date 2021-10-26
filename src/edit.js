
import {__} from '@wordpress/i18n';
import {InnerBlocks, useBlockProps} from '@wordpress/block-editor';
import './editor.scss';

const MY_TEMPLATE = [
	['core/image', {}],
	['core/heading', {placeholder: 'Giveaway Title'}],
	['core/paragraph', {placeholder: 'Giveaway Description'}],
	['create-block/fahidjavid-giveaway-social-row'],
	['core/button', {placeholder: 'Call to Action'}]
];

export default function edit() {
	return (
		<div {...useBlockProps()}>
			<InnerBlocks template={MY_TEMPLATE} templateLock='insert'/>
		</div>
	);
}
