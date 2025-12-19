import { writable, derived } from "svelte/store";

const CART_KEY = "mini_app_cart";

/* ---------- helpers ---------- */
function loadCart() {
    try {
        const data = localStorage.getItem(CART_KEY);
        return data ? JSON.parse(data) : [];
    } catch {
        return [];
    }
}

function saveCart(cart) {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

/* ---------- store ---------- */
export const cart = writable(loadCart());

cart.subscribe((value) => {
    saveCart(value);
});

/* ---------- derived ---------- */
export const cartCount = derived(cart, ($cart) =>
    $cart.reduce((sum, item) => sum + item.qty, 0)
);

export const cartTotal = derived(cart, ($cart) =>
    $cart.reduce((sum, item) => sum + item.price * item.qty, 0)
);

/* ---------- actions ---------- */
export function addToCart(product) {
    cart.update((items) => {
        const existing = items.find((i) => i.id === product.id);

        if (existing) {
            return items.map((i) =>
                i.id === product.id ? { ...i, qty: i.qty + 1 } : i
            );
        }

        return [...items, { ...product, qty: 1 }];
    });
}

export function increase(id) {
    cart.update((items) =>
        items.map((i) =>
            i.id === id ? { ...i, qty: i.qty + 1 } : i
        )
    );
}

export function decrease(id) {
    cart.update((items) =>
        items
            .map((i) =>
                i.id === id ? { ...i, qty: i.qty - 1 } : i
            )
            .filter((i) => i.qty > 0)
    );
}

export function remove(id) {
    cart.update((items) => items.filter((i) => i.id !== id));
}
