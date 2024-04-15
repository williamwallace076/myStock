import { listProducts } from "./dbProducts"

export const api = [
    {
     id:0,
     sellToday: 0,
     sellMonth: 30,
     sellTotal: 30,
     stock: listProducts.length
    },

]

export const listDashboard = api