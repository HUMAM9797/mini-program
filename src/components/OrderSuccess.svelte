<script>
    import { orderSuccess } from "../stores/orders";
    import { get } from "svelte/store";

    export let go;

    const close = () => {
        orderSuccess.set(null);
    };
</script>

{#if $orderSuccess}
    <!-- Overlay -->
    <div
        class="fixed inset-0 z-50 bg-black/40 flex items-center justify-center"
    >
        <div class="w-[90%] max-w-sm rounded-2xl bg-white p-6 text-center">
            <div class="text-4xl mb-3">✅</div>

            <h2 class="text-lg font-semibold mb-1">Order Placed!</h2>

            <p class="text-sm text-gray-500 mb-4">
                Order ID: {$orderSuccess.id}
            </p>

            <div class="space-y-2">
                <button
                    on:click={() => {
                        close();
                        go("orders");
                    }}
                    class="h-11 w-full rounded-xl bg-black text-white active:scale-95"
                >
                    View Orders
                </button>

                <button
                    on:click={() => {
                        close();
                        go("products");
                    }}
                    class="h-11 w-full rounded-xl bg-gray-100 active:scale-95"
                >
                    Continue Shopping
                </button>
            </div>
        </div>
    </div>
{/if}
