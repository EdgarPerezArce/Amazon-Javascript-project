console.log(`Script file`)
const message =`Welcome to Amazon!`;
const URL = `http://www/amazonPrivateEndPoint/project`;
const taxes = 8.5;





// user page info
let userName = `John25`;
let password = `12345`;
let age = 100;
let phoneNumber = `813-455-6845`;
let geoLocation = `Tampa, FL`;
let creditCard = `Visa`;
let items = 100;
//menu tab deals
let epicDeals = `Flash sales!`;
let holidayGift = `Christmas`;
let computers = `Aseus specials`
let bestSellers = `Televisions`;
let petSupplies = `Petsmart`;
let Books = `Michu Kaku`;
let outdoorRecreation = `Canoes`;
// products
let electronics = `Sony`;
let furniture = `lazy boy`;
let appliances =`Ninja`;
let makeup = `Maybelline`;
let apparel = `H&M`;
let shoes = `Addis Yeezys`;

// template string
console.log(`
    Web padge ${URL}
    My Screenname ${userName}
    The Password ${password}
    My current age ${age} 
    Phone number ${phoneNumber}
    In ${geoLocation}
    With ${creditCard}
    Amount of Products ${items} 
    We have great deals like ${epicDeals}
    Ideas for ${holidayGift}
    Computer devices ${computers}
    Todays Best Sellers ${bestSellers}
    All the Greatest pet supplies ${petSupplies}
    BooksAmillion ${Books}
    Out door advantures supplies ${outdoorRecreation}
    The greatest electronics ${electronics}
    Strong and durable ${furniture}
    Quick and reliable ${appliances}
    Beautiful rich makeup ${makeup}
    Contreversially cool apparel ${apparel}
    Hip brands on clearnce ${shoes}`);

document.write(`
    <p> My Screenname ${userName}</p>
    <p> The Password ${password}</p> 
    <p> My current age ${age}</p> 
    <p> Phone number ${phoneNumber}</p> 
    <p> In ${geoLocation}</p> 
    <p> With ${creditCard}</p>
    <p> Amount of Products ${items}</p>
    `);

document.write(`
    <h3> We have great deals like ${epicDeals}</h3>
    <h3> Ideas for ${holidayGift}</h3> 
    <h3> Computer devices ${computers}</h3>
    <h3> Todays Best Sellers ${bestSellers}</h3>
    <h3> All the Greatest pet supplies ${petSupplies}</h3>
    <h3> BooksAmillion ${Books}</h3>
    <h3> Out door advantures supplies ${outdoorRecreation}</h3>
    `);

document.write(`
    <p> The greatest electronics ${electronics}</p>
    <p> Strong and durable ${furniture}</p>
    <p> Quick and reliable ${appliances}</p>
    <p> Beautiful rich makeup ${makeup}</p>
    <p> Contreversially cool apparel ${apparel}</p>
    <p> Hip brands on clearnce ${shoes}</p> 
    `);
    