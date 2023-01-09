import fetch from "node-fetch";

const urlString = 'https://dummyjson.com/products/category/smartphones';
const smartphones = [];

async function getSmartphones(url) {
    console.log("<~~ function started ~~>")
        await fetch(url)
            .then((res) => res.json())
            .then((data) => {
                smartphones.push(data.products);
            })
            .then(() => {
                let highestRating = smartphones.map(a => Math.max(...a.map(b => b.rating)));
                console.log(`List of smartphones - ${JSON.stringify(smartphones)}`)

                const smartphone = smartphones.flat().filter(element => { 
                    element.rating >= highestRating && element.price < 500 
                });
                console.log(`The best smartphone - ${JSON.stringify(smartphone)}`)
            });
    console.log("<~~ function ended ~~>")

}

getSmartphones(urlString);