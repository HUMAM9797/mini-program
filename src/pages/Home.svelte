

<script >

    export let go;
    const handleLogin = () => {
        my.getAuthCode({
            scopes: ["auth_base"],
            success: (res) => {
                my.alert({
                    content: res.authCode,
                });
            },
            fail: (res) => {
                console.log(res.authErrorScopes);
            },
        });
    };
</script>
<div class="min-h-screen bg-gray-500 px-4 py-16 pb-24">
    <!-- Header -->
    <header class="mb-6">
        <h1 class="text-2xl font-bold text-gray-800">
            Welcome to the World of Natural Care
        </h1>
        <p class="mt-1 text-sm text-gray-100">
            Discover your ideal natural care collection—curated just for you.
        </p>
    </header>

    <!-- Main Actions -->
    <div class="grid gap-4">
        <!-- Products -->
        <button
            on:click={() => go("products")}
            class="flex items-center justify-between rounded bg-white p-5 shadow-sm active:scale-95 transition"
        >
            <div class="flex flex-col items-start">
                <h2 class="text-lg font-semibold">🛒 Products</h2>
                <p class="text-sm text-gray-500">
                    Browse all available products
                </p>
            </div>
            <span class="text-xl text-gray-400">›</span>
        </button>

        <!-- Orders -->
        <button
            on:click={() => go("orders")}
            class="flex items-center justify-between rounded bg-white p-5 shadow-sm active:scale-95 transition"
        >
            <div class="flex flex-col items-start">
                <h2 class="text-lg font-semibold">📦 Orders</h2>
                <p class="text-sm text-gray-500">View your previous orders</p>
            </div>
            <span class="text-xl text-gray-400">›</span>
        </button>

        <!-- Profile (future) -->
        <button
            class="flex items-center justify-between rounded bg-white p-5 shadow-sm opacity-60"
            disabled
        >
            <div class="flex flex-col items-start">
                <h2 class="text-lg font-semibold">👤 Profile</h2>
                <p class="text-sm text-gray-500">
                    Account settings (coming soon)
                </p>
            </div>
            <span class="text-xl text-gray-300">›</span>
        </button>
    </div>

    <button on:click={handleLogin} class="border border-amber-950"> hhh</button>
</div>
