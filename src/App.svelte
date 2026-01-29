<script>
    import AppHeader from "./components/AppHeader.svelte";
    import Home from "./pages/Home.svelte";
    import Products from "./pages/Products.svelte";
    import Orders from "./pages/Orders.svelte";
    import OrderSuccess from "./components/OrderSuccess.svelte";
    import BottomTab from "./components/BottomTab.svelte";

    let page = "home";

    const go = (p) => (page = p);
</script>
<AppHeader />

{#if page === "home"}
    <Home {go} />
{:else if page === "products"}
    <Products {go} />
{:else if page === "orders"}
    <Orders {go} />
{/if}

<OrderSuccess {go} />
<BottomTab {page} {go} />



