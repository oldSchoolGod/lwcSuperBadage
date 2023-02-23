import { LightningElement,api,wire } from 'lwc';
import getBoatTypes from '@salesforce/apex/BoatDataService.getBoatTypes';


export default class BoatSearchForm extends LightningElement {
@api recordId;
// import getBoatTypes from the BoatDataService => getBoatTypes method';

boatRecord;
TypeOptions
selectedBoatTypeId = '';

    // Private
    error = undefined;
    
    searchOptions;
    
    // Wire a custom Apex method
    @wire(getBoatTypes)
      boatTypes({ error, data }) {
      if (data) {
        console.log('data' + JSON.stringify(data));
        this.searchOptions = data.map(type => {
          // TODO: complete the logic
          return {
              label : type.Name,
              value : type.Id
          }
        });
        //unshist pushes the data from the beginning
        this.searchOptions.unshift({ label: 'All Types', value: '' });
      } else if (error) {
        this.searchOptions = undefined;
        this.error = error;
      }
    }
    
    // Fires event that the search option has changed.
    // passes boatTypeId (value of this.selectedBoatTypeId) in the detail
    handleSearchOptionChange(event) {
        // Create the const searchEvent
        // searchEvent must be the new custom event search
        console.log('handleSearchOptionChange');
        this.selectedBoatTypeId = event.detail.value;
         console.log('this.selectedBoatTypeId '+this.selectedBoatTypeId);
       const  searchEvent= new CustomEvent('search',{
        detail: {
          boatTypeId: this.selectedBoatTypeId
      }
        }) ;
       this.dispatchEvent(searchEvent);
    
        
      }
  }