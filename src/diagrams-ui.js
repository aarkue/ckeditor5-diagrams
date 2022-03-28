import Plugin from '@ckeditor/ckeditor5-core/src/plugin'
import { ButtonView } from 'ckeditor5/src/ui';
import ImageUtils from '@ckeditor/ckeditor5-image/src/imageutils'
import ImageBlock from '@ckeditor/ckeditor5-image/src/imageblock';

import diagram from '../theme/icons/diagram.svg';

import {
	EditDiagramCommand,
	InsertDiagramCommand
} from './diagrams-command';

export default class DiagramUI extends Plugin{
    static get requires(){
        return [ImageUtils, ImageBlock];
    }

    init(){
        this._createButton();

		this.editor.commands.add(
			'editDiagram',
			new EditDiagramCommand(this.editor)
		);
		this.editor.commands.add(
			'insertDiagram',
			new InsertDiagramCommand(this.editor)
		);
		}

    _createButton( ) {
		const editor = this.editor;
		const t = editor.t;
		
		this.editor.ui.componentFactory.add(  'editDiagram', locale => {
			const command = this.editor.commands.get( 'editDiagram' );
			const view = new ButtonView( locale );

			view.set( {
				label: t('Edit Diagram'),
				tooltip: true,
                withText: true,
				icon: diagram,
			} );

			view.bind( 'isEnabled' ).to( command, 'isEnabled' );
			view.on( 'execute', this._executeCommand.bind( this ) );

			return view;
		} );

		this.editor.ui.componentFactory.add(  'insertDiagram', locale => {
			const command = this.editor.commands.get( 'insertDiagram' );
			const view = new ButtonView( locale );

			view.set( {
				label: t('Add Diagram'),
				tooltip: true,
				icon: diagram,
                // withText: true
			} );

			view.bind( 'isEnabled' ).to( command, 'isEnabled' );
			// view.bind( 'isOn' ).to( command, 'value', value => value === buttonName );
			// view.on( 'execute', this.editor.execute( 'insertDiagram' ) );
			this.listenTo( view, 'execute', () => editor.execute( 'insertDiagram' ) );

			return view;
		} );
	}

    _executeCommand(name) {
		this.editor.execute( 'editDiagram' );
		this.editor.editing.view.focus();
	}

}
