import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import CKEditorInspector from '@ckeditor/ckeditor5-inspector';

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import Base64UploadAdapter from '@ckeditor/ckeditor5-upload/src/adapters/base64uploadadapter';
import Indent from '@ckeditor/ckeditor5-indent/src/indent';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Link from '@ckeditor/ckeditor5-link/src/link';
import List from '@ckeditor/ckeditor5-list/src/list';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';
import CodeBlock from '@ckeditor/ckeditor5-code-block/src/codeblock';
import Code from '@ckeditor/ckeditor5-basic-styles/src/code';

import DiagramsPlugin from '../src/diagrams';

/* global document, window */

ClassicEditor
	.create( document.querySelector( '#editor' ), {
		plugins: [
			DiagramsPlugin,
			Essentials,
			Autoformat,
			BlockQuote,
			Bold,
			Heading,
			Image,
			ImageCaption,
			ImageStyle,
			ImageToolbar,
			ImageUpload,
			Indent,
			Italic,
			Link,
			List,
			MediaEmbed,
			Paragraph,
			Table,
			TableToolbar,
			CodeBlock,
			Code,
			Base64UploadAdapter
		],
		toolbar: [
			// `myButton` is an example button provided by the `MyPlugin` class.
			'insertDiagram',
			'|',
			'heading',
			'|',
			'bold',
			'italic',
			'link',
			'code',
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
			'codeBlock',
			'|',
			'undo',
			'redo'
		],
		image: {
			toolbar: [ 'imageStyle:inline', 'imageStyle:block', 'imageStyle:side', '|', 'imageTextAlternative', '|', 'editDiagram' ]
		},
		table: {
			contentToolbar: [
				'tableColumn',
				'tableRow',
				'mergeTableCells'
			]
		},
		diagram: {
			embedUrl: 'https://embed.diagrams.net/?embed=1&splash=0&spin=1&modified=unsavedChanges&proto=json&saveAndExit=1&noSaveBtn=1',
			newDiagramCreatedMessage: 'Newly created',
			imgFormat: 'svg'
		}
	} )
	.then( editor => {
		window.editor = editor;
		CKEditorInspector.attach( editor );
		window.console.log( 'CKEditor 5 is ready.', editor );
	} )
