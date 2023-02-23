
import { LightningElement, track } from 'lwc';
import searchPdf from '@salesforce/apex/SearchPdf.searchPdf';
export default class SearchPdfText extends LightningElement {
    

    @track searchText;
    @track pdfFiles;

    handleChange(event) {
        this.searchText = event.target.value;
    }

    searchPdf() {
        searchPdf({ searchText: this.searchText })
            .then(result => {
                this.pdfFiles = result;
            })
            .catch(error => {
                console.error(error);
            });
    }
}
