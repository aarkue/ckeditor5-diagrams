import Command from '@ckeditor/ckeditor5-core/src/command';
export class InsertDiagramCommand extends Command {
    execute(){
        console.log('exec insert diagram')
        return this.editor.model.change( writer => {
            console.log('exec insert diagram')
			const imageElement = writer.createElement( 'imageBlock', {'src': `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHkAAAA9CAYAAACJM8YzAAAAAXNSR0IArs4c6QAAA310RVh0bXhmaWxlACUzQ214ZmlsZSUyMGhvc3QlM0QlMjJFbGVjdHJvbiUyMiUyMG1vZGlmaWVkJTNEJTIyMjAyMi0wMy0yOFQxNiUzQTA5JTNBNDAuNTg4WiUyMiUyMGFnZW50JTNEJTIyNS4wJTIwKFgxMSUzQiUyMExpbnV4JTIweDg2XzY0KSUyMEFwcGxlV2ViS2l0JTJGNTM3LjM2JTIwKEtIVE1MJTJDJTIwbGlrZSUyMEdlY2tvKSUyMGRyYXcuaW8lMkYxNi41LjElMjBDaHJvbWUlMkY5Ni4wLjQ2NjQuMTEwJTIwRWxlY3Ryb24lMkYxNi4wLjclMjBTYWZhcmklMkY1MzcuMzYlMjIlMjBldGFnJTNEJTIyX3E1dno1cGxBN0kyUGlQWWdLNE4lMjIlMjB2ZXJzaW9uJTNEJTIyMTYuNS4xJTIyJTIwdHlwZSUzRCUyMmRldmljZSUyMiUzRSUzQ2RpYWdyYW0lMjBpZCUzRCUyMkZWSE5mNDZrWE8zS2pfN3JpaWhmJTIyJTIwbmFtZSUzRCUyMlBhZ2UtMSUyMiUzRWpaTk5jNFFnRElaJTJGalhlVjFyYlh0ZHZ0cFNjUFBiT1NDak1nRHVLcSUyRmZVTk5mZ3hPNTNwUlpJbndaQTNrTERTVEJmSE8lMkZsaEJlZ2tUOFdVc05ja3o3TXN6WEVKWkNhUzVvOExhWndTeERaUXFXJTJCSWlVUUhKYUElMkZKSHBydFZmZEVkYTJiYUgyQjhhZHMlMkJNeDdjdnFZOVdPTjNBSHFwcnJlJTJGcXBoSmNMZmM2Zk52NE9xcEd4Y2xhOExCSERZekoxMGtzdTdMaEQ3Snl3MGxuckY4dE1KZWlnWHRSbDJmZjJSM1E5bUlQVyUyRjJjRFRlTEc5VUM5VmFDRFpKaGlnZ3BCV2Z5QVVNZ0ticnFFbmRwckh4YjBOUlk1WGRGb2dpRVVieHcza1dQVk5VVGQlMkJqbEs2T3pRQ2dpblNERThTdVdoNm5nZG9pUGVHbVRTRzQxZXR1N2VkMFdOM3NCNW1IYUl1cnlBTmVEZGpDa1VaVkh4ZU9jZXlCJTJCM0FXWXhSJTJCNkdWeERqZEdlYTlkZWJyR2lR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`} );
            this.editor.model.insertContent(imageElement)
        });
    }

    refresh(){
        this.isEnabled = this.editor.plugins.get( 'ImageUtils' ).isImageAllowed();
    }
}
export class EditDiagramCommand extends Command {
	execute() {
		const imageUtils = this.editor.plugins.get( 'ImageUtils' );
		const imgEl = imageUtils.getClosestSelectedImageElement( this.editor.model.document.selection );
			if (!imgEl) {
				return;
			}
            this.editor.model.change((writer) => {
                writer.setSelection(null);
            });

            console.log({imgEl})
            var iframe = document.createElement('iframe');
            iframe.setAttribute('frameborder', '0');
            const url = this.editor.config.get('diagram.embedUrl') || 'https://embed.diagrams.net/?embed=1&ui=min&splash=0&spin=1&modified=unsavedChanges&proto=json&saveAndExit=1&noSaveBtn=1'
            iframe.setAttribute('src', url);
            iframe.setAttribute('style',"border:0;position:fixed;top:0;left:0;right:0;bottom:0;width:100%;height:100%;z-index:100;background-color:white;");
            document.body.appendChild(iframe);
            this.isEnabled = false;
            let dataURL;
            window.addEventListener('message',async (evt) => {
                console.log({evt})
                if(evt.data && evt.data.length > 0){
                  const message = JSON.parse(evt.data);
                  if(iframe.contentWindow){
                  if('event' in message){
                   if(message.event === 'init'){
                        try{
                            let blob = await fetch(imgEl.getAttribute('src')).then(r => r.blob());
                            dataURL = await new Promise(resolve => {
                                let reader = new FileReader();
                                reader.onload = () => resolve(reader.result);
                                reader.readAsDataURL(blob);
                            });  
                        }catch(err){
                            console.error('Loading image failed', err);
                        }
                        if(dataURL){
                            console.log('dataURL!',{dataURL})
                            // if(dataURL.indexOf('data:image/png') !== 0){
                                // Content is not png, i.e. not png with embedded diagram
                            //     const xml = createXMLWithImage(dataURL)
                            //     iframe.contentWindow.postMessage(JSON.stringify({action: 'load', 'xmlpng': xml}),'*');
                            // }else{
                                // if data type is unspecified, try png
                                dataURL = dataURL.replace('data:application/octet-stream','data:image/png')
                                // First try to load image as xml (i.e., embedded diagram in png), if that fails, we create a new one (see below)
                                iframe.contentWindow.postMessage(JSON.stringify({action: 'load', 'xmlpng': dataURL}),'*');
                            // }
                        }else{
                            console.log('No dataURL')
                            iframe.contentWindow.postMessage(JSON.stringify({action: 'load', xml: ''}),'*');
                            const imageLoadingFailedMessage = this.editor.config.get('diagram.imageLoadingFailedMessage') || 'The image could not be loaded. Please try again later or download the image manually and create a new diagram with it.';
                            const imageLoadingFailedTitle = this.editor.config.get('diagram.imageLoadingFailedTitle') || 'Loading image failed';
                            iframe.contentWindow.postMessage(JSON.stringify({action: 'dialog', title: imageLoadingFailedTitle, message: imageLoadingFailedMessage, button: 'Okay', modified: true}),'*')
                        }
                    }else if(message.event === 'save'){
                      console.log('save');
                      iframe.contentWindow.postMessage(JSON.stringify({action: 'export', format: 'xmlpng', spinKey: 'saving'}),'*');
                    }else if(message.event === 'load'){
                        // if the xml content is null (but the dataURL/image was loaded), there is no content in the diagram (i.e., loading the diagram failed)
                        // in that case, we create new xml content and simply embed the selected image
                        if(message.xml === null && dataURL !== undefined){
                            console.log('loading failed');
                            const xml = createXMLWithImage(dataURL)
                            console.log({xml})
                            iframe.contentWindow.postMessage(JSON.stringify({action: 'load', 'xml': xml}),'*');
                            const newMessage = this.editor.config.get('diagram.newDiagramCreatedMessage');
                            if(newMessage){
                                iframe.contentWindow.postMessage(JSON.stringify({action: 'status', message: newMessage, modified: true}),'*')
                            }
                         }
                        }else if(message.event === 'export'){
                            console.log('export')
                            this.editor.model.change((writer) => {
                                writer.setAttribute( 'src', message.data, imgEl );
                            });
                        
                    }else{
                      console.log('Unhandled message',{message,evt})
                    }
                  }else{
                    console.log('No message')
                  }

                if(message.event === 'exit' || message.event === 'export'){
                    document.body.removeChild(iframe);
                }
              }
            }
        
            })

	}
    

	refresh() {
		const imageUtils = this.editor.plugins.get( 'ImageUtils' );
		const element = imageUtils.getClosestSelectedImageElement( this.editor.model.document.selection );
        if(!element){
            this.isEnabled = false;
        }else{
            this.isEnabled = true;
        }
	}
}

function createXMLWithImage(dataURL){
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
    <mxfile host="embed.diagrams.net" modified="2022-03-28T14:28:23.794Z" agent="5.0 (X11)" version="17.2.4" etag="wXAFyWxSF_gL4y4L3svE" type="embed">
    <diagram id="TUFkX3nXo-2MK1rdvojP" name="Page-1">
    <mxGraphModel dx="1999" dy="1331" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="850" pageHeight="1100" math="0" shadow="0">
    <root>
    <mxCell id="0" />
    <mxCell id="1" parent="0" />
    <mxCell id="3" value="" style="shape=image;verticalLabelPosition=bottom;labelBackgroundColor=default;verticalAlign=top;aspect=fixed;imageAspect=1;image=${dataURL.replace(';base64,', ',')};" vertex="1" parent="1">
    <mxGeometry x="0" y="0" width="500" height="500" as="geometry" />
    </mxCell>
    </root>
    </mxGraphModel>
    </diagram>
    </mxfile>`
    console.log({xml});
    return xml;
}
