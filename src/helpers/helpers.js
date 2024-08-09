export let newPrice=(price)=>{
    let strPrice=price.toString();
    if(strPrice.includes('.'))return strPrice+'0'
    else return strPrice+'.00'
   }

