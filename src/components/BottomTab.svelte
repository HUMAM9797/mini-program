<script>
    export let page;
    export let go;
</script>

<nav
    class="fixed bottom-0 inset-x-0 z-50 border-t bg-white
         pb-[env(safe-area-inset-bottom)]"
>
    <div class="flex justify-around">
        <button
            on:click={() => go("home")}
            class="flex flex-col items-center gap-1 py-2 text-sm
      {page === 'home' ? 'text-black' : 'text-gray-400'}"
        >
            <span>🏠</span>
            <span>Home</span>
        </button>

        <button
            on:click={() => go("products")}
            class="flex flex-col items-center gap-1 py-2 text-sm
      {page === 'products' ? 'text-black' : 'text-gray-400'}"
        >
            <span>🛒</span>
            <span>Products</span>
        </button>

        <button
            on:click={() => go("orders")}
            class="flex flex-col items-center gap-1 py-2 text-sm
      {page === 'orders' ? 'text-black' : 'text-gray-400'}"
        >
            <span>📦</span>
            <span>Orders</span>
        </button>
    </div>
</nav>
