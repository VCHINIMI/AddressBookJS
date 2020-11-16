//Welcome to AddressBook problem, Language : JavaScript


const NAME_REGEX = RegExp('^[A-Z]{1}[a-z]{3,}$');
const ADDRESS_CITY_STATE_REGEX = RegExp('^[A-Za-z]{4,}$');
const ZIP_REGEX = RegExp('^[1-9]{1}[0-9]{5}$');
const PHONE_REGEX = RegExp('^[1-9][0-9]{9}$');
const EMAIL_REGEX = RegExp("^[\\w-\\+]+(\\.[\\w]+)*@[\\w-]+(\\.[\\w]{2,})?(\\.[a-z]{2,})?$");

//Creating AddressBook class
class AddressBook {
    constructor(...params) {
        this.firstName = params[0] ;
        this.lastName = params[1] ;
        this.address = params[2] ;
        this.city = params[3] ;
        this.state = params[4] ;
        this.zip = params[5] ;
        this.phoneNumber = params[6] ;
        this.email = params[7] ;
    }


    toString() {
        return 'First Name : ' + this.firstName + ' Last Name : ' + this.lastName +
        ' Address : ' + this.address + ' City : ' + this.city +  ' state : ' + this.state +
        ' zip code : ' + this.zip + ' Phone Number : ' + this.phoneNumber + 
        ' Email : ' + this.email ;
    }

    //first name
    get firstName() {
        return this._firstName ;
    }
    set firstName(firstName) {
        if(NAME_REGEX.test(firstName)){
            this._firstName = firstName ;
        }
        else{
            throw 'First Name is Incorrect';
        }
    }

    //last name
    get lastName() {
        return this._lastName ;
    }
    set lastName(lastName) {
        if(NAME_REGEX.test(lastName)){
            this._lastName = lastName ;
        }
        else{
            throw 'Last Name is Incorrect';
        }
    }

    //address
    get address() {
        return this._address ;
    }
    set address(address) {
        if(ADDRESS_CITY_STATE_REGEX.test(address)){
            this._address = address ;
        }
        else{
            throw 'Address is Incorrect';
        }
    }

    //city
    get city() {
        return this._city ;
    }
    set city(city) {
        if(ADDRESS_CITY_STATE_REGEX.test(city)){
            this._city = city ;
        }
        else{
            throw 'City is Incorrect';
        }
    }

    //state
    get state() {
        return this._state ;
    }
    set state(state) {
        if(ADDRESS_CITY_STATE_REGEX.test(state)){
            this._state = state;
        }
        else{
            throw 'State is Incorrect';
        }
    }

    //zip
    get zip() {
        return this._zip ;
    }
    set zip(zip) {
        if(ZIP_REGEX.test(zip)){
            this._zip = zip ;
        }
        else{
            throw 'Zip is Incorrect';
        }
    }

    //phone
    get phoneNumber() {
        return this._phoneNumber ;
    }
    set phoneNumber(phoneNumber) {
        if(PHONE_REGEX.test(phoneNumber)){
            this._phoneNumber = phoneNumber ;
        }
        else{
            throw 'Phone Number is Incorrect';
        }
    }

    //email
    get email() {
        return this._email ;
    }
    set email(email) {
        if(EMAIL_REGEX.test(email)){
            this._email = email ;
        }
        else{
            throw 'Email is Incorrect';
        }
    }
}

//UC2
{
    try{
        let contact = new AddressBook('Vinay', 'Chinimilli', 'Drno', 'Visakhapatnam', 'AndhraPradesh', 533003, 9987654321, 'vc@gmail.com');
    }catch (error) {
        console.error(error);
    }
}   

//UC3 AddressBook Array
{
    let AddressBookArray = new Array() ;
    AddressBookArray.push(new AddressBook('Vinay', 'Chinimilli', 'Drno', 'Visakhapatnam', 'AndhraPradesh', 533003, 9987654321, 'vc@gmail.com'));
    AddressBookArray.push(new AddressBook('Harika', 'Unknown', 'tulasi', 'Kakinada', 'AndhraPradesh', 533033, 1234554321, 'hc@gmail.com'));
    
    //UC4 Edit contact by name (Find element by find() and use setter)
    AddressBookArray.find(contact => contact.firstName == 'Vinay').firstName = 'Vinayc';

    //UC5 Find contact by name and delete
    {    
        let indexToBeDel = AddressBookArray.indexOf(contact => contact.firstName=='Vinayc')
        //AddressBookArray.splice(indexToBeDel-1,1);
        //console.log(AddressBookArray);
    }

    //UC6 Find No of contacts in AddressBook using reduce
    {
        console.log('Number of Contacts in Address Book are : ' + AddressBookArray.reduce((acc, val) => acc + 1,0) );
    }
    
    //UC7 Ensure No Duplicate entries 
    {
        let newContact = new AddressBook('Vinayc', 'Chinimilli', 'Drno', 'Visakhapatnam', 'AndhraPradesh', 533003, 9987654321, 'vc@gmail.com') ;
        if  (       AddressBookArray.filter(contact =>  
                    contact.firstName == newContact.firstName && 
                    contact.lastName == newContact.lastName &&
                    contact.address == newContact.address &&
                    contact.city == newContact.city &&
                    contact.state == newContact.state &&
                    contact.zip == newContact.zip &&
                    contact.phoneNumber == newContact.phoneNumber &&
                    contact.email == newContact.email 
                    ).reduce((acc,val) => acc+1,0)
        > 0) {
            console.log('Duplicate Exists');
        }
        else {
            AddressBookArray.push(newContact);
        }        
    }

    //UC8 Search person by city 
    {
        let givenCity = 'Kakinada';
        let searchPersonInCityOrState = AddressBookArray.filter(contact => contact.firstName == 'Harika' && contact.city == givenCity );
        console.log(searchPersonInCityOrState.pop().state);                                    
    }

    //UC9 View Person By City or State
    {
        let givenCity = 'Kakinada';
        let searchPersonInCityOrState = AddressBookArray.filter(contact => contact.city == givenCity );
        console.log(searchPersonInCityOrState.toString());
    }

    //UC10 Count By City Or State
    {
        let givenCity = 'Kakinada';
        let countByCity = AddressBookArray.filter(contact => contact.city == givenCity ).reduce((acc,val) => acc+1,0);
        console.log('Count by City ' + givenCity + ' is : ' + countByCity);
    }
}    