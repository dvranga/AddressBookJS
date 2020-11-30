class AddressBook{
    // properties
    firstName;
    lastName;
    address;
    city;
    state;
    zip;
    phoneNumber;
    email;

    constructor(...params){
        this.firstName=params[0];
        this.lastName=params[1];
        this.address=params[2];
        this.city=params[3];
        this.state=params[4];
        this.zip=params[5];
        this.phoneNumber=params[6];
        this.email=params[7]
    }


    toString(){
        return 'firstName ',this.firstName,' lastName ',this.lastName, ' city ',this.city,' phoneNumber ',this.phoneNumber,' emial ',this.email;
    }


}
let contact= new AddressBook("ranganath","vatti","gorantla","anatapur","A.p",515231,7483247032,"devangmranganth@gmail.com");
console.log(contact)