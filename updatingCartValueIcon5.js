let cartValue = document.getElementById("cartValue")

export let updatedCartValueIcon = (cartProds) => { 

    return ( cartValue.innerHTML = `<i class="fa-solid fa-cart-shopping"> ${cartProds.length} </i>` )


} 