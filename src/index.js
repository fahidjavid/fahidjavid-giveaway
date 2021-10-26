
import {registerBlockType} from '@wordpress/blocks';
import edit from './edit';
import save from './save';
import './style.scss';

registerBlockType('create-block/fahidjavid-giveaway', {
	edit,
	save,
});

/**
 * Child Blocks
 */
import {metadata, name, settings} from './blocks/social-row';

registerBlockType({name, ...metadata}, settings);
