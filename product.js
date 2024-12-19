


const urlparams = new URLSearchParams(window.location.search)
const productid = urlparams.get("id")



const mainProducts = document.getElementById('mainProducts')

console.log(productid);

async function productDetails(){
    try {
        const response =await fetch(`https://fakestoreapi.com/products/${productid}`)
        if(!response.ok){
            throw new Error('something went wrong')
        }

        const productitems = await response.json()
        console.log(productitems);
        document.getElementById('loading').style.display = 'none'



        proitems(productitems)
        
        
        
    } catch (error) {
        console.log(error);
        
        
    }
}

function proitems(detailescard){
    let carditems = `<div class="imagecard">
                    <img src=${detailescard.image} alt="">
                </div>
                <div class="textcard">
                    <h2>${detailescard.title}</h2>
                    <p>${detailescard.category}</p>
                    <p>${detailescard.description}</p>
                    <h3 class="text-primary">$${detailescard.price}</h3>
                    <button type="button" class="btn btn-success productbtn">Buy Now</button>
                </div>`

                mainProducts.innerHTML = carditems
}

productDetails()
