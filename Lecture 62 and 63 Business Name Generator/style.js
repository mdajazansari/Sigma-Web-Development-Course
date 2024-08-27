/* Create a business name generator by combining list of adjectives and shop name and another word


Adjectives:
Crazy 
Amazing
Fire 

Shop Name:
Engine
Foods
Garments

Another Word:
Bros
Limited
Hub


*/


// My and Gemini Code

let adj = {
    0: "Crazy",
    1: "Amazing",
    2: "Fire", 
}

let shop = {
    0: "Engine",
    1: "Foods",
    2: "Garments",
}

let other = {
    0: "Bros",
    1: "Limited",
    2: "Hub",
}

function businessNameGenerator() {
    const adjIndex = Math.floor(Math.random()*3);
    const shopIndex = Math.floor(Math.random()*3);
    const otherIndex = Math.floor(Math.random()*3);

    const businessName = adj[adjIndex] + " " + shop[shopIndex] + " " + other[otherIndex];
    console.log("You business name is", businessName);
}

businessNameGenerator()


// Harry Code

/*
        let rand1 = Math.random()
        let first, second, third;
        // 0 0.33 0.66 1


        // Lets generate the first word
        if(rand1<0.33){
            first = "Crazy"
        }
        else if(rand1<0.66 && rand1>=0.33){
            first = "Amazing"
        }
        else{
            first = "Fire"
        }

        // Lets generate the second word
        let rand2 = Math.random()
        if(rand2<0.33){
            second = "Engine"
        }
        else if(rand2<0.66 && rand2>=0.33){
            second = "Foods"
        }
        else{
            second = "Garments"
        }

        // Lets generate the third word
        let rand3 = Math.random()
        if(rand3<0.33){
            third = "Bros"
        }
        else if(rand3<0.66 && rand3>=0.33){
            third = "Limited"
        }
        else{
            third = "Hub"
        }

        console.log(`${first} ${second} ${third}`)
*/