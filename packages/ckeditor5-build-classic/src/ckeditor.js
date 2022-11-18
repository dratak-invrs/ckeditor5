/**
 * @license Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import UploadAdapter from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import CKFinder from '@ckeditor/ckeditor5-ckfinder/src/ckfinder';
import EasyImage from '@ckeditor/ckeditor5-easy-image/src/easyimage';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import Indent from '@ckeditor/ckeditor5-indent/src/indent';
import Link from '@ckeditor/ckeditor5-link/src/link';
import List from '@ckeditor/ckeditor5-list/src/list';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';
import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation';
import CloudServices from '@ckeditor/ckeditor5-cloud-services/src/cloudservices';
import HtmlEmbed from '@ckeditor/ckeditor5-html-embed/src/htmlembed';
import Mention from '@ckeditor/ckeditor5-mention/src/mention';
import IndentBlock from '@ckeditor/ckeditor5-indent/src/indentblock';
import GeneralHtmlSupport from '@ckeditor/ckeditor5-html-support/src/generalhtmlsupport';
import ImageResize from '@ckeditor/ckeditor5-image/src/imageresize';
import AutoImage from '@ckeditor/ckeditor5-image/src/autoimage';

import SpecialCharacters from '@ckeditor/ckeditor5-special-characters/src/specialcharacters';
import SpecialCharactersEssentials from '@ckeditor/ckeditor5-special-characters/src/specialcharactersessentials';
import BlockToolbar from '@ckeditor/ckeditor5-ui/src/toolbar/block/blocktoolbar';
import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import imageIcon from './theme/gif.svg';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';
import WordCount from '@ckeditor/ckeditor5-word-count/src/wordcount';

class InsertGiphy extends Plugin {
    init() {
        console.log( 'InsertGiphy was initialized' );
        const editor = this.editor;

        editor.ui.componentFactory.add( 'insertGiphy', locale => {
            const view = new ButtonView( locale );

            view.set( {
                label: 'Insert Giphy',
                icon: imageIcon,
                tooltip: true,
            } );

            // Callback executed once the image is clicked.
            view.on( 'execute', () => {
                console.log("trigger giphy")
				const event = new CustomEvent('showGiphy');
				event['data'] = view.element;
				editor.sourceElement.dispatchEvent(event);
            } );

            return view;
        } );
    }
}

export default class ClassicEditor extends ClassicEditorBase {}

// Plugins to include in the build.
ClassicEditor.builtinPlugins = [
	Essentials,
	UploadAdapter,
	Autoformat,
	Bold,
	Italic,
	BlockQuote,
	CKFinder,
	CloudServices,
	EasyImage,
	Heading,
	Image,
	ImageCaption,
	ImageStyle,
	ImageToolbar,
	ImageUpload,
	Indent,
	Link,
	List,
	MediaEmbed,
	Paragraph,
	PasteFromOffice,
	Table,
	TableToolbar,
	TextTransformation,
	Mention,
	HtmlEmbed,
	IndentBlock,
	GeneralHtmlSupport,
	ImageResize,
	AutoImage,
	SpecialCharacters,
	SpecialCharactersEssentials,
	BlockToolbar,
	InsertGiphy,
	WordCount,

];

// Editor configuration.
ClassicEditor.defaultConfig = {
	toolbar: {
		items: [
			'heading',
			'|',
			'bold',
			'italic',
			'link',
			'bulletedList',
			'numberedList',
			'|',
			'outdent',
			'indent',
			'|',
			'uploadImage',
			'blockQuote',
			'insertTable',
			'mediaEmbed',
			'undo',
			'redo',
			'specialCharacters',
			'insertGiphy',
			
		]
	},
	
	image: {
		toolbar: [
			'imageStyle:inline',
			'imageStyle:block',
			'imageStyle:side',
			'|',
			'toggleImageCaption',
			'imageTextAlternative'
		]
	},
	table: {
		contentToolbar: [
			'tableColumn',
			'tableRow',
			'mergeTableCells'
		]
	},
	// This value must be kept in sync with the language defined in webpack.config.js.
	language: 'en'
};
