


const product = {
    

    plainBurger:{
        name: 'plainBurger',
        price: '10000',
        img:'images/product1.jpg',
        amount: 0,
        get total() {
            return this.price * this.amount
        }
    },
    freshBurger:{
        name: 'freshBurger',
        price: '20500',
        img:'images/product2.jpg',
        amount: 0,
        get total() {
            return this.price * this.amount
        }
    },
    freshCombo:{
        name: 'freshCombo',
        price: '31900',
        img:'images/product3.jpg',
        amount: 0,
        get total() {
            return this.price * this.amount
        }
    }


}



const burgerBtn = document.querySelectorAll('.main__product-btn'),
    addBtn = document.querySelectorAll('.main__product-label'),
    amountnNum = document.querySelectorAll('.main__product-num'),
    amountCall = document.querySelectorAll('.main__product-call'),
    amountSum = document.querySelectorAll('.main__product-price'),
    receipt = document.querySelector('.receipt'),
    burgerList = document.querySelectorAll('.main__product'),
    totalPrice = document.querySelectorAll('.main__product-price')


    burgerBtn.forEach(btn => {
        btn.addEventListener('click', function () {
        plusOrminus(this)
            
        })
    })


    function plusOrminus(btn) {
        
        let parent = btn.closest('.main__product'),
            parentId = parent.getAttribute('id')
            product[parentId].amount++
            


            

            // btn()
            
            basket()
                
    }


    // function btn() {



    // }


    function basket() {
        
        const productAmount = []
        for (const key in product) {
            let totalItems = 0
            const about = product[key]
            const productName = document.querySelector(`#${about.name}`),
            parentNum = productName.querySelector('.main__product-num')


            if (about.amount) {
                
                productAmount.push(about)
                totalItems += about.amount
                parentNum.innerHTML = totalItems
                
            }
            
            
        }
        totalPrice.innerHTML = totalSum()
    }
console.log( totalSum());
    function totalSum () {
        let totalProduct = 0
        for (const key in product) {

            totalProduct += product[key].total
            
    }
    return totalProduct
    }




    function productItems(productData) {

        return`
        `
        
    }

    
    

    window.addEventListener('click', function(e) {
    const target = e.target
        if (target.classList.contains('main__product-btn')) {

        const sign = target.getAttribute('data-symbol')
        const parent = target.closest('.main__product')
        if (parent) {
            const idProduct = parent.getAttribute('id').split('_')[0]
            if (sign == '-') {
                totalItems.amount--
            }else if(sign == '+'){
                totalItems.amount++
            }
            
        }
    }

})
    

