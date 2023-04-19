const products = [
    {
        id: "1",
        name:"Iphone 12",
        Price:1000,
        category:"celular",
        img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-finish-select-202207-blue?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1662149977576",
        stock:25,
        description:"Description de Iphone 12"

    },
    {   id:"2",    
        name:"Samsung S21", 
        Price:800, 
        category:"celular",
        img:"https://images.samsung.com/is/image/samsung/p6pim/mx/sm-g990ezaaltm/gallery/mx-galaxy-s21-fe-g990-sm-g990ezaaltm-530644584", 
        stock:16,
        description:"Description de Samsung S21"},
    {   id:"3", 
        name:"Ipad 8va generacion", 
        Price:1200, 
        category:"tablet",
        img:"https://www.apple.com/newsroom/images/product/ipad/standard/apple_ipad-8th-gen_w-keyboard_09152020.jpg.og.jpg?202303302223", 
        stock:10,
        description:"Description de Ipad 8va generacion"}         
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() =>{
            resolve(products)
        }, 500)
    })
}
export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() =>{
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}