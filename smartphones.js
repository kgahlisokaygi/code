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
                const phone = smartphones.flat().filter(element => element.price < 500 && Math.max(element.rating));
                console.log(`phone - ${JSON.stringify(phone)}`)
            });
    console.log("<~~ function ended ~~>")

}

getSmartphones(urlString);