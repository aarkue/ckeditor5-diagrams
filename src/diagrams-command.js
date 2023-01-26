import Command from '@ckeditor/ckeditor5-core/src/command';
export class InsertDiagramCommand extends Command {
    execute(){
        return this.editor.model.change( writer => {
            const imgFormat = this.editor.config.get('diagram.imgFormat') || 'png';
            if(imgFormat === 'png'){
                const imageElement = writer.createElement( 'imageBlock', {'src': `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHkAAAA9CAYAAACJM8YzAAAAAXNSR0IArs4c6QAAA310RVh0bXhmaWxlACUzQ214ZmlsZSUyMGhvc3QlM0QlMjJFbGVjdHJvbiUyMiUyMG1vZGlmaWVkJTNEJTIyMjAyMi0wMy0yOFQxNiUzQTA5JTNBNDAuNTg4WiUyMiUyMGFnZW50JTNEJTIyNS4wJTIwKFgxMSUzQiUyMExpbnV4JTIweDg2XzY0KSUyMEFwcGxlV2ViS2l0JTJGNTM3LjM2JTIwKEtIVE1MJTJDJTIwbGlrZSUyMEdlY2tvKSUyMGRyYXcuaW8lMkYxNi41LjElMjBDaHJvbWUlMkY5Ni4wLjQ2NjQuMTEwJTIwRWxlY3Ryb24lMkYxNi4wLjclMjBTYWZhcmklMkY1MzcuMzYlMjIlMjBldGFnJTNEJTIyX3E1dno1cGxBN0kyUGlQWWdLNE4lMjIlMjB2ZXJzaW9uJTNEJTIyMTYuNS4xJTIyJTIwdHlwZSUzRCUyMmRldmljZSUyMiUzRSUzQ2RpYWdyYW0lMjBpZCUzRCUyMkZWSE5mNDZrWE8zS2pfN3JpaWhmJTIyJTIwbmFtZSUzRCUyMlBhZ2UtMSUyMiUzRWpaTk5jNFFnRElaJTJGalhlVjFyYlh0ZHZ0cFNjUFBiT1NDak1nRHVLcSUyRmZVTk5mZ3hPNTNwUlpJbndaQTNrTERTVEJmSE8lMkZsaEJlZ2tUOFdVc05ja3o3TXN6WEVKWkNhUzVvOExhWndTeERaUXFXJTJCSWlVUUhKYUElMkZKSHBydFZmZEVkYTJiYUgyQjhhZHMlMkJNeDdjdnFZOVdPTjNBSHFwcnJlJTJGcXBoSmNMZmM2Zk52NE9xcEd4Y2xhOExCSERZekoxMGtzdTdMaEQ3Snl3MGxuckY4dE1KZWlnWHRSbDJmZjJSM1E5bUlQVyUyRjJjRFRlTEc5VUM5VmFDRFpKaGlnZ3BCV2Z5QVVNZ0ticnFFbmRwckh4YjBOUlk1WGRGb2dpRVVieHcza1dQVk5VVGQlMkJqbEs2T3pRQ2dpblNERThTdVdoNm5nZG9pUGVHbVRTRzQxZXR1N2VkMFdOM3NCNW1IYUl1cnlBTmVEZGpDa1VaVkh4ZU9jZXlCJTJCM0FXWXhSJTJCNkdWeERqZEdlYTlkZWJyR2lR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`} );
                this.editor.model.insertContent(imageElement)
            }else{
                const imageElement = writer.createElement( 'imageBlock', {'src': `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHdpZHRoPSIxMjFweCIgaGVpZ2h0PSI2MXB4IiB2aWV3Qm94PSItMC41IC0wLjUgMTIxIDYxIiBjb250ZW50PSImbHQ7bXhmaWxlIGhvc3Q9JnF1b3Q7ZW1iZWQuZGlhZ3JhbXMubmV0JnF1b3Q7IG1vZGlmaWVkPSZxdW90OzIwMjMtMDEtMjZUMTc6NDQ6MzAuNDM2WiZxdW90OyBhZ2VudD0mcXVvdDs1LjAgKFgxMSkmcXVvdDsgdmVyc2lvbj0mcXVvdDsyMC44LjEyJnF1b3Q7IGV0YWc9JnF1b3Q7RlI3aUMtZlQ3Yzd0a3hQREZnRXYmcXVvdDsgdHlwZT0mcXVvdDtlbWJlZCZxdW90OyZndDsmbHQ7ZGlhZ3JhbSBpZD0mcXVvdDszNnVrYjdvMjVzbWNtaDNhRFhWciZxdW90OyBuYW1lPSZxdW90O1BhZ2UtMSZxdW90OyZndDtqWlBCY29RZ0RJYWZocnRLZDZlOXJ0MjJsNTQ4OU14S0NzeUFPSWlyOXVrYkN1ZzZPenZUaXlSZkVtTitJcUcxbWQ4ZDYrV241YUJKVmZDWjBGZFNWV1ZSdk9BUnlKSUlMUStSQ0tkNFlodG8xQS9rMGtSSHhXSFlKWHBydFZmOUhyYTI2NkQxTzhhY3M5TSs3ZHZxZmRlZUNiZ0RUY3YwUGYxUzNNdEludy9GeGo5QUNaazc0OGd4WWxoT1RtQ1FqTnZwQnRFem9iV3oxa2ZMekRYb29GN1dKZGE5UFlpdUgrYWc4LzhwcUdMQmxla3h6ZGFBRHBKaGlna3FCR1h4QVZ3aE96TFRFM3JxTGtNNDBOZlk1SFJCUXdTREt5WWNNNWxqMXpXVXB2VkxsdERac2VNUXZxTEE4Q1NWaDZabmJZaE91RFhJcERjYXZYS3R2b0x6TUQ4Y3RGemx3OFVEYThDN0JWTlNBYzJLNTUxN1N2NjBYV0NaYytUTjVSMFRZMmxueFBycVRWWTBrckxaM1c3d0wzYnpJOUR6THc9PSZsdDsvZGlhZ3JhbSZndDsmbHQ7L214ZmlsZSZndDsiPjxkZWZzLz48Zz48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMTIwIiBoZWlnaHQ9IjYwIiBmaWxsPSJyZ2IoMjU1LCAyNTUsIDI1NSkiIHN0cm9rZT0icmdiKDAsIDAsIDApIiBwb2ludGVyLWV2ZW50cz0iYWxsIi8+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTAuNSAtMC41KSI+PHN3aXRjaD48Zm9yZWlnbk9iamVjdCBzdHlsZT0ib3ZlcmZsb3c6IHZpc2libGU7IHRleHQtYWxpZ246IGxlZnQ7IiBwb2ludGVyLWV2ZW50cz0ibm9uZSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgcmVxdWlyZWRGZWF0dXJlcz0iaHR0cDovL3d3dy53My5vcmcvVFIvU1ZHMTEvZmVhdHVyZSNFeHRlbnNpYmlsaXR5Ij48ZGl2IHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sIiBzdHlsZT0iZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IHVuc2FmZSBjZW50ZXI7IGp1c3RpZnktY29udGVudDogdW5zYWZlIGNlbnRlcjsgd2lkdGg6IDExOHB4OyBoZWlnaHQ6IDFweDsgcGFkZGluZy10b3A6IDMwcHg7IG1hcmdpbi1sZWZ0OiAxcHg7Ij48ZGl2IHN0eWxlPSJib3gtc2l6aW5nOiBib3JkZXItYm94OyBmb250LXNpemU6IDBweDsgdGV4dC1hbGlnbjogY2VudGVyOyIgZGF0YS1kcmF3aW8tY29sb3JzPSJjb2xvcjogcmdiKDAsIDAsIDApOyAiPjxkaXYgc3R5bGU9ImRpc3BsYXk6IGlubGluZS1ibG9jazsgZm9udC1zaXplOiAxMnB4OyBmb250LWZhbWlseTogSGVsdmV0aWNhOyBjb2xvcjogcmdiKDAsIDAsIDApOyBsaW5lLWhlaWdodDogMS4yOyBwb2ludGVyLWV2ZW50czogYWxsOyB3aGl0ZS1zcGFjZTogbm9ybWFsOyBvdmVyZmxvdy13cmFwOiBub3JtYWw7Ij5TZWxlY3QgaW1hZ2UgdG8gZWRpdMKgPGI+ZGlhZ3JhbTwvYj48L2Rpdj48L2Rpdj48L2Rpdj48L2ZvcmVpZ25PYmplY3Q+PHRleHQgeD0iNjAiIHk9IjM0IiBmaWxsPSJyZ2IoMCwgMCwgMCkiIGZvbnQtZmFtaWx5PSJIZWx2ZXRpY2EiIGZvbnQtc2l6ZT0iMTJweCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+U2VsZWN0IGltYWdlIHRvIGVkaXQuLi48L3RleHQ+PC9zd2l0Y2g+PC9nPjwvZz48c3dpdGNoPjxnIHJlcXVpcmVkRmVhdHVyZXM9Imh0dHA6Ly93d3cudzMub3JnL1RSL1NWRzExL2ZlYXR1cmUjRXh0ZW5zaWJpbGl0eSIvPjxhIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAsLTUpIiB4bGluazpocmVmPSJodHRwczovL3d3dy5kaWFncmFtcy5uZXQvZG9jL2ZhcS9zdmctZXhwb3J0LXRleHQtcHJvYmxlbXMiIHRhcmdldD0iX2JsYW5rIj48dGV4dCB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXNpemU9IjEwcHgiIHg9IjUwJSIgeT0iMTAwJSI+VGV4dCBpcyBub3QgU1ZHIC0gY2Fubm90IGRpc3BsYXk8L3RleHQ+PC9hPjwvc3dpdGNoPjwvc3ZnPg==`} );
                this.editor.model.insertContent(imageElement)
            }
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
            var iframe = document.createElement('iframe');
            iframe.setAttribute('frameborder', '0');
            const imgFormat = this.editor.config.get('diagram.imgFormat') || 'png';
            const url = this.editor.config.get('diagram.embedUrl') || 'https://embed.diagrams.net/?embed=1&ui=min&splash=0&spin=1&modified=unsavedChanges&proto=json&saveAndExit=1&noSaveBtn=1'
            iframe.setAttribute('src', url);
            iframe.setAttribute('style',"border:0;position:fixed;top:0;left:0;right:0;bottom:0;width:100%;height:100%;z-index:100;background-color:white;");
            document.body.appendChild(iframe);
            this.isEnabled = false;
            let dataURL;
            window.addEventListener('message',async (evt) => {
                if(evt.data && evt.data.length > 0){
                  const message = JSON.parse(evt.data);
                  if(iframe.contentWindow){
                  if('event' in message){
                   if(message.event === 'init'){
                        try{
                            let blob = await fetch(imgEl.getAttribute('src'),{credentials: 'include'}).then(r => r.blob());
                            dataURL = await new Promise(resolve => {
                                let reader = new FileReader();
                                reader.onload = () => resolve(reader.result);
                                reader.readAsDataURL(blob);
                            });  
                        }catch(err){
                            console.error('Loading image failed', err);
                        }
                        if(dataURL){
                            // if data type is unspecified, try png
                            if(imgFormat === 'png'){
                                dataURL = dataURL.replace('data:application/octet-stream','data:image/png')
                                iframe.contentWindow.postMessage(JSON.stringify({action: 'load', 'xmlpng': dataURL}),'*');
                            }else{
                                dataURL = dataURL.replace('data:application/octet-stream','data:image/svg')
                                iframe.contentWindow.postMessage(JSON.stringify({action: 'load', 'xml': dataURL}),'*');
                            }
                        }else{
                            console.log('No dataURL')
                            iframe.contentWindow.postMessage(JSON.stringify({action: 'load', xml: ''}),'*');
                            const imageLoadingFailedMessage = this.editor.config.get('diagram.imageLoadingFailedMessage') || 'The image could not be loaded. Please try again later or download the image manually and create a new diagram with it.';
                            const imageLoadingFailedTitle = this.editor.config.get('diagram.imageLoadingFailedTitle') || 'Loading image failed';
                            iframe.contentWindow.postMessage(JSON.stringify({action: 'dialog', title: imageLoadingFailedTitle, message: imageLoadingFailedMessage, button: 'Okay', modified: true}),'*')
                        }
                    }else if(message.event === 'save'){
                        if(imgFormat === 'png'){
                            iframe.contentWindow.postMessage(JSON.stringify({action: 'export', format: 'xmlpng', spinKey: 'saving'}),'*');
                        }else{
                            iframe.contentWindow.postMessage(JSON.stringify({action: 'export', format: 'xmlsvg', spinKey: 'saving'}),'*');
                        }
                    }else if(message.event === 'load'){
                        // if the xml content is null (but the dataURL/image was loaded), there is no content in the diagram (i.e., loading the diagram failed)
                        // in that case, we create new xml content and simply embed the selected image
                        if(message.xml === null && dataURL !== undefined){
                            const xml = createXMLWithImage(dataURL)
                            iframe.contentWindow.postMessage(JSON.stringify({action: 'load', 'xml': xml}),'*');
                            const newMessage = this.editor.config.get('diagram.newDiagramCreatedMessage');
                            if(newMessage){
                                iframe.contentWindow.postMessage(JSON.stringify({action: 'status', message: newMessage, modified: true}),'*')
                            }
                         }
                        }else if(message.event === 'export'){
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
    return xml;
}
