<script>
    export let go;

        var authCode = '';
        var token = '';

        function handlePay() {
            fetch('https://its.mouamle.space/api/payment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': token
                },
            }).then(res => res.json()).then(data => {
                my.tradePay({
                    paymentUrl: data.url,
                    success: (res) => {
                        my.alert({
                            content: "Payment successful",
                        });
                    },
                });
            }).catch(err => {
                my.alert({
                    content: "Payment failed",
                });
            });
        }
    
    const handleLogin = () => {
        my.getAuthCode({
            scopes: ["auth_base", "USER_ID"],
            success: (res) => {
        fetch('https://its.mouamle.space/api/auth-with-superQi', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            token: res.authCode
                        })
                    }).then(res => res.json()).then(data => {
                        my.alert({
                            content: "Login successful" + JSON.stringify(data)
                        });
                    }).catch(err => {
                        let errorDetails = '';
                        if (err && typeof err === 'object') {
                            errorDetails = JSON.stringify(err, null, 2);
                        } else {
                            errorDetails = String(err);
                        }
                        my.alert({
                            content: "Error: " + errorDetails,
                        });
                    });
        
            },
            fail: (err) => {
                console.log("Authorization failed:", err.authErrorScopes);
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
            onclick={() => go("products")}
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
            onclick={() => go("orders")}
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

        <button
        onclick={handleLogin}
        class=" border border-amber-950 bg-blue-900  py-4"
    >
        Auth
    </button>
    <button 
    onclick={handlePay}
    class=" border border-amber-950 bg-blue-900  py-4">
        Pay
    </button>
    </div>

    
</div>
