<script>
    import { addToCart, cartCount } from "../stores/cart";
    import MiniCart from "../components/MiniCart.svelte";

    export let go;

    let cartOpen = false;

    let products = [
        {
            id: 1,
            name: "Product-1",
            price: 35,
            image: "https://picsum.photos/200?1",
        },
        {
            id: 2,
            name: "Product-2",
            price: 50,
            image: "https://picsum.photos/200?2",
        },
        {
            id: 3,
            name: "Product-3",
            price: 10,
            image: "https://picsum.photos/200?3",
        },
    ];
</script>

<div class="min-h-screen bg-gray-50 p-4 my-14 ">
    <!-- Header -->
    <header class="mb-4 flex items-center justify-between">
        <button
            on:click={() => go("home")}
            class="rounded bg-white px-3 py-1 shadow-sm active:scale-95"
        >
            ← Back
        </button>

        <h1 class="text-lg font-semibold">Products</h1>

        <!-- Cart Button (inline, right) -->
        
            <button
                on:click={() => (cartOpen = true)}
                class="rounded bg-white px-3 py-1 shadow-sm active:scale-95 flex items-center gap-2"
                aria-label="Open cart"
            >
                <span>🛒</span>
                <span class="text-sm font-medium">{$cartCount}</span>
            </button>

            <!-- Mini Cart Popup -->
            <MiniCart open={cartOpen} close={() => (cartOpen = false)} />

    </header>

    <!-- Products Grid -->
    <div class="grid grid-cols-2 gap-4">
        {#each products as product}
            <div class="rounded bg-white p-3 shadow-sm">
                <img
                    src={product.image}
                    alt={product.name}
                    class="mb-2 h-28 w-full rounded object-cover"
                />

                <h2 class="text-sm font-semibold text-gray-800">
                    {product.name}
                </h2>

                <p class="mt-1 text-sm text-gray-500">
                    ${product.price}
                </p>

                <button
                    on:click={() => addToCart(product)}
                    class="mt-3 h-11 w-full rounded-xl bg-black text-white active:scale-95 transition"
                >
                    Add to Cart
                </button>
            </div>
        {/each}
    </div>
</div>
