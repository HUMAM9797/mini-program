import { writable } from "svelte/store";

export const orderSuccess = writable(null);

const ORDERS_KEY = "mini_app_orders";

/* ---------- helpers ---------- */
function loadOrders() {
    try {
        const data = localStorage.getItem(ORDERS_KEY);
        return data ? JSON.parse(data) : [];
    } catch {
        return [];
    }
}

function saveOrders(orders) {
    localStorage.setItem(ORDERS_KEY, JSON.stringify(orders));
}

/* ---------- store ---------- */
export const orders = writable(loadOrders());

orders.subscribe((value) => {
    saveOrders(value);
});

/* ---------- actions ---------- */
export function createOrder(cartItems, total) {
    const newOrder = {
        id: "ORD-" + Date.now(),
        date: new Date().toISOString().slice(0, 10),
        items: cartItems.reduce((sum, i) => sum + i.qty, 0),
        total,
        status: "pending",
        products: cartItems
    };

    orders.update((list) => [newOrder, ...list]);
    orderSuccess.set(newOrder);   // 
}

