class vechile{
    constructor(name,price){
        this.name=name
        this.price=price
    }
    move(){
        console.log('Ups! gari tho chole na ')
    }
}
class bus extends vechile{
    constructor(name,price,ticket,seatPrice){
        super(name,price);
        this.ticket=ticket;
        this.seatPrice=seatPrice;
    }
}