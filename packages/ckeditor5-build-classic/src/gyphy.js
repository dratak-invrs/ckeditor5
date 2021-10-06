import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import imageIcon from './theme/giphy.svg';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';

class InsertGiphy extends Plugin {
    init() {
        console.log( 'InsertGiphy was initialized' );
        const editor = this.editor;

        editor.ui.componentFactory.add( 'insertGiphy', locale => {
            const view = new ButtonView( locale );

            view.set( {
                label: 'Insert Giphy',
                icon: imageIcon,
                tooltip: true
            } );

            // Callback executed once the image is clicked.
            view.on( 'execute', () => {
                console.log("trigger giphy")
            } );

            return view;
        } );
    }
}