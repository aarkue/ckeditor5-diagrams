import { Plugin } from 'ckeditor5/src/core';
import DiagramsUI from './diagrams-ui';

export default class DiagramsPlugin extends Plugin {
	static get pluginName() {
		return 'Diagrams';
	}

	static get requires(){
		return [DiagramsUI]
	}
}
