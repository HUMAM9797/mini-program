<script>
    let open = false;

    const openMenu = () => (open = true);
    const closeMenu = () => (open = false);
</script>

<!-- ========== TOP BAR ========== -->
<header
    class="fixed top-0 inset-x-0 z-40 flex items-center justify-between
         bg-white px-4 py-3 shadow-sm"
>
    <h1 class="text-sm font-semibold">Logo</h1>

    <button
        on:click={openMenu}
        aria-label="Menu"
        class="h-9 w-9 rounded-full bg-gray-100 text-lg
           active:scale-95 transition"
    >
        ☰
    </button>
</header>

<!-- ========== SIDE DRAWER ========== -->
{#if open}
    <!-- Overlay -->
    <div class="fixed inset-0 z-40 bg-black/40" on:click={closeMenu} />

    <!-- Drawer -->
    <aside
        class="fixed top-0 right-0 z-50 h-full w-64 bg-white shadow-xl
           animate-slide-in"
    >
        <!-- Drawer Header -->
        <div class="flex items-center justify-between border-b p-4">
            <p class="font-semibold">Account</p>
            <button on:click={closeMenu}>✕</button>
        </div>

        <!-- Menu Items -->
        <nav class="p-4 space-y-3 text-sm">
            <button class="w-full rounded p-2 text-left hover:bg-gray-100">
                👤 Profile
            </button>

            <button class="w-full rounded p-2 text-left hover:bg-gray-100">
                🌐 Language
            </button>

            <button class="w-full rounded p-2 text-left hover:bg-gray-100">
                ⚙ Settings
            </button>

            <button class="w-full rounded p-2 text-left hover:bg-gray-100">
                ℹ About
            </button>

            <hr />

            <button
                class="w-full rounded p-2 text-left text-red-500 hover:bg-red-50"
            >
                🚪 Logout
            </button>
        </nav>
    </aside>
{/if}
