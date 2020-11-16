//Welcome to AddressBook problem, Language : JavaScript

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
}

{
    let contact = new AddressBook('Vinay', 'Chinimilli', 'Dr. no', 'Visakhapatnam', 'Andhra Pradesh', 533003, 99122232, 'vc@gmail.com');
    console.log(contact.toString());
}