
const NAME_REGEX = RegExp('^[A-Z]{1}[a-z]{2,}$');
const ADDRESS_REGEX = RegExp('^[a-zA-z]{3,}$');
const ZIP_REGEX = RegExp('^[1-9]{1}[0-9]{2}\\s{0,1}[0-9]{3}$');
const PHONE_NUMBER_REGEX = RegExp('^(0/91)?[6-9][0-9]{9}$'); 
const EMAIL_REGEX=RegExp('^[a-zA-Z0-9]+([._+-][0-9a-zA-Z]+)*@[a-zA-Z0-9]+.[a-zA-Z]{2,4}([.][a-zA-Z]{2,4})?$');
let addressBookArray=new Array();

class AddressBook{
    // properties
    
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

    get firstName(){
        return this._firstName;
    }
    set firstName(firstName){
        if(NAME_REGEX.test(firstName)){
            return this._firstName=firstName;
        }
        else throw( "first name is incoorect");
    }



    get lastName(){
        return this._lastName;
    }
    set lastName(lastName){
        if(NAME_REGEX.test(lastName)){
            return this._lastName=lastName;
        }
        else throw( "last name is incoorect");
    }

    get address(){
        return this._address;
    }

    set address(address){
        if(ADDRESS_REGEX.test(address)){
            return this._address=address;
        }
        else throw (" address is Incorrect ")
    }

    get city(){
        return this._city;
    }

    set city(city){
       if(ADDRESS_REGEX.test(city)){
        return this._city=city;
       }
       else throw ("City is Incorrect");
    }

    get state(){
        return this._state;
    }

    set state(state){
        if(ADDRESS_REGEX.test(state)){
            return this._state=state;
        }
        else throw ("state is Incorrect");
    }

    get zip(){
        return this._zip;
    }

    set zip(zip){
        if(ZIP_REGEX.test(zip)){
            return this._zip=zip;
        }
        else throw ("Zip is Incorrect");
    }

    get phoneNumber(){
        return this._phoneNumber;
    }

    set phoneNumber(phoneNumber){
        if(PHONE_NUMBER_REGEX.test(phoneNumber)){
            return this._phoneNumber=phoneNumber;
        }
        else throw ("Phone number is Incorrect");
    }

    get email(){
        return this._email;
    }

    set email(email){
        if(EMAIL_REGEX.test(email)){
            return this._email=email;
        }
        else throw ("Email is Incorrect");
    }

    toString(){
        return 'firstName ',this.firstName,' lastName ',this.lastName, ' city ',this.city,' phoneNumber ',
        this.phoneNumber,' emial ',this.email,'address',this.address,'state',this.state,'zip',this.zip;
    }


}

try{
    let contact= new AddressBook("Ranganath","Vatti","gorantla","anatapur","andrapradesh",515231,7483247032,"devangmranganth@gmail.com");
    addressBookArray.push(contact);
    let contact1= new AddressBook("Harinath","Vatti","gorantla","anatapur","andrapradesh",515231,6309609657,"harinath@gmail.com");
    addressBookArray.push(contact1);
    console.log(addressBookArray);

}
catch(e){
    console.error(e);
}
