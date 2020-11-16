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

{
    try{
        let contact = new AddressBook('Vinay', 'Chinimilli', 'Drno', 'Visakhapatnam', 'AndhraPradesh', 533003, 9987654321, 'vc@gmail.com');
        console.log(contact.toString());
    }catch (error) {
        console.error(error);
    }
}    