const cardDetails = document.getElementById('cardDetails')


async function fakestore(){
    try{
        const fakestoreapi = await fetch('https://fakestoreapi.com/products')
        console.log(fakestoreapi);
        

        if(!fakestoreapi.ok){
            throw new Error('something went wrong')
        }

        const products = await fakestoreapi.json()
        console.log(products);
        document.getElementById('loading').style.display = 'none'
        document.getElementById('firstmain').classList.add('adding')

        products.forEach((product) =>{
            let cards =`<div class="card ">
                    <img src=${product.image}
                        class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${product.title}</h5>
                        <p class="card-text">${product.description.slice(0,100)}</p>
                    </div>
                    <div class="extra">
                        <h6>$${product.price}</h6>
                        <a href="./product.html?id=${product.id}"><button type="button" class="btn btn-primary">View Details</button></a>

                    </div>
                </div>`

                cardDetails.innerHTML += cards

        })
        
    }
    catch(error){
        console.log(error);
        

    }
}

fakestore()