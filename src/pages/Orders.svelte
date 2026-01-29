<script>
    import { orders } from "../stores/orders";
    export let go;

    let selectedOrder = null;
    let open = false;

    const showDetails = (order) => {
        selectedOrder = order;
        open = true;
    };

    const close = () => {
        open = false;
        selectedOrder = null;
    };
</script>

<div class="min-h-screen bg-gray-50 p-4 pb-24 my-14">
    <!-- Header -->
    <header class="mb-4 flex items-center gap-3">
        <button
            on:click={() => go("home")}
            class="rounded-full bg-white px-3 py-1 shadow-sm"
        >
            ← Back
        </button>

        <h1 class="text-lg font-semibold">Orders</h1>
    </header>

    {#if $orders.length === 0}
        <!-- Empty State -->
    {:else}
        <div class="space-y-4">
            {#each $orders as order}
                <div class="rounded-2xl bg-white p-4 shadow-sm">
                    <div class="flex justify-between">
                        <div>
                            <p class="text-sm font-semibold">{order.id}</p>
                            <p class="text-xs text-gray-500">
                                {order.date} • {order.items} items
                            </p>
                        </div>

                        <span
                            class="rounded-full px-3 py-1 text-xs
                            {order.status === 'pending'
                                ? 'bg-yellow-100 text-yellow-700'
                                : 'bg-green-100 text-green-700'}"
                        >
                            {order.status}
                        </span>
                    </div>

                    <div class="mt-3 flex justify-between">
                        <span class="font-semibold">
                            Total: ${order.total}
                        </span>

                        <button
                            on:click={() => showDetails(order)}
                            class="text-sm underline "
                        >
                            Details
                        </button>
                    </div>
                </div>
            {/each}
        </div>
    {/if}
</div>

{#if open && selectedOrder}
    <!-- Overlay -->
    <div class="fixed inset-0 z-40 bg-black/40" on:click={close} />

    <!-- Bottom Sheet -->
    <div
        class="fixed bottom-0 inset-x-0 z-50 rounded-t-2xl bg-white p-4
        pb-[env(safe-area-inset-bottom)]
        animate-slide-up"
    >
        <!-- Header -->
        <div class="mb-4 flex items-center justify-between">
            <h2 class="text-lg font-semibold">
                Order {selectedOrder.id}
            </h2>
            <button on:click={close}>✕</button>
        </div>

        <!-- Meta -->
        <div class="mb-3 text-sm text-gray-500">
            {selectedOrder.date} • {selectedOrder.items} items
        </div>

        <!-- Products -->
        <div class="space-y-3">
            {#each selectedOrder.products as item}
                <div class="flex items-center gap-3">
                    <img
                        src={item.image}
                        alt={item.name}
                        class="h-12 w-12 rounded-lg object-cover"
                    />

                    <div class="flex-1">
                        <p class="text-sm font-medium">
                            {item.name}
                        </p>
                        <p class="text-xs text-gray-500">
                            ${item.price} × {item.qty}
                        </p>
                    </div>

                    <p class="text-sm font-semibold">
                        ${item.price * item.qty}
                    </p>
                </div>
            {/each}
        </div>

        <!-- Footer -->
        <div class="mt-4 border-t pt-4 flex justify-between font-semibold">
            <span>Total</span>
            <span>${selectedOrder.total}</span>
        </div>
    </div>
{/if}
