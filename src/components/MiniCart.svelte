<script>
    import {
        cart,
        cartTotal,
        increase,
        decrease,
        remove,
    } from "../stores/cart";

    import { createOrder } from "../stores/orders";

    export let open = false;
    export let close;

    const checkout = () => {
        let items;

        cart.subscribe((v) => (items = v))();

        if (items.length === 0) return;

        createOrder(items, $cartTotal);
        cart.set([]);
        close();
    };
</script>

{#if open}
    <!-- Overlay -->
    <div class="fixed inset-0 z-40 bg-black/40 " on:click={close} />

    <!-- Bottom Sheet -->
    <div
        class="fixed bottom-0 inset-x-0 z-50 rounded-t-2xl bg-white p-4 my-15
        pb-[env(safe-area-inset-bottom)]
        animate-slide-up"
    >
        <!-- Header -->
        <div class="mb-4 flex items-center justify-between">
            <h2 class="text-lg font-semibold">Your Cart</h2>
            <button on:click={close}>✕</button>
        </div>

        {#if $cart.length === 0}
            <p class="text-center text-gray-500">Cart is empty</p>
        {:else}
            <!-- Items -->
            <div class="space-y-3">
                {#each $cart as item}
                    <div class="flex items-center gap-3">
                        <img
                            src={item.image}
                            class="h-12 w-12 rounded-lg object-cover"
                        />

                        <div class="flex-1">
                            <p class="text-sm font-medium">{item.name}</p>
                            <p class="text-xs text-gray-500">
                                ${item.price}
                            </p>
                        </div>

                        <!-- Qty Controls -->
                        <div class="flex items-center gap-2">
                            <button
                                on:click={() => decrease(item.id)}
                                class="h-8 w-8 rounded-full bg-gray-200"
                            >
                                −
                            </button>

                            <span class="w-5 text-center text-sm">
                                {item.qty}
                            </span>

                            <button
                                on:click={() => increase(item.id)}
                                class="h-8 w-8 rounded-full bg-gray-200"
                            >
                                +
                            </button>
                        </div>

                        <!-- Remove -->
                        <button
                            on:click={() => remove(item.id)}
                            class="ml-2 text-red-500"
                        >
                            ✕
                        </button>
                    </div>
                {/each}
            </div>

            <!-- Footer -->
            <div class="mt-4 border-t pt-4">
                <div class="mb-3 flex justify-between font-semibold">
                    <span>Total</span>
                    <span>${$cartTotal}</span>
                </div>

                <button
                    on:click={checkout}
                    class="h-11 w-full rounded-xl bg-black text-white active:scale-95 mb-5"
                >
                    Complete the Order
                </button>
            </div>
        {/if}
    </div>
{/if}
