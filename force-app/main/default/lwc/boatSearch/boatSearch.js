import { LightningElement,api,wire } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class BoatSearch extends NavigationMixin(LightningElement) {
   
    isLoading = false;
    boatTypeId
   
    
    // Handles loading event
    handleLoading() {
        this.isLoading = true;
     }
    
    // Handles done loading event
    handleDoneLoading() { 
        this.isLoading = false;
    }
    
    // Handles search boat event
    // This custom event comes from the form
    searchBoats(event) {
       this.boatTypeId = event.detail;
        console.log('from boatsearchForm ' +this.boatTypeId);
        this.template.querySelector('c-boat-search-results').searchBoats(boatTypeId);
        this.handleDoneLoading();
     }

     //create new boat it will open a new pop two make a new record
    createNewBoat() { 
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Boat__c',
                actionName: 'new'
            }
        });        
    }
    }