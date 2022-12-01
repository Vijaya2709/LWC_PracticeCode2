import { LightningElement } from 'lwc';
import SL from '@salesforce/resourceUrl/simplelightbox';
import { loadStyle, loadScript} from 'lightning/platformResourceLoader';

export default class SimpleLightboxExample extends LightningElement {

        slLoaded = false;

        renderedCallback(){
            if(!this.slLoaded){
            Promise.all([
                loadStyle(this, SL+'/simpleLightBox/dist/simpleLightBox.css'),
                loadScript(this, SL+'/simpleLightBox/dist/simpleLightBox.css')
            ]).then(()=>{
                this.slLoaded = true;
            }).catch((error)=>{
                console.error('Could not initialize Simple Light box', error);
            })
        }
        }

        openGalleryHandler(){
            SimpleLightbox.open({
                items: ['demo/images/1big.jpg', 'demo/images/2big.jpg', 'demo/images/3big.jpg']
            });
        }

}