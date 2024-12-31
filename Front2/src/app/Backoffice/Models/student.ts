export class Student {
    id?: number;
    firstname: string;
    lastname: string;
    formation: string;
    phoneNumber: string;
    parentPhoneNumber: string;
    dateInscrit: Date;
    price: number;
    status: string;
   
  
    constructor(
      firstname: string,
      lastname: string,
      formation: string,
      phoneNumber: string,
      parentPhoneNumber: string,
      dateInscrit: Date,
      price: number,
      status: string,
      
    ) {
      this.firstname = firstname;
      this.lastname = lastname;
      this.formation = formation;
      this.phoneNumber = phoneNumber;
      this.parentPhoneNumber = parentPhoneNumber;
      this.dateInscrit = dateInscrit;
      this.price = price;
      this.status = status;
      
    }
  }
  