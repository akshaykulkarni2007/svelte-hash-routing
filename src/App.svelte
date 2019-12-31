<script>
  import Router from "svelte-spa-router";

  import Header from "./Components/Common/Header.svelte";
  import Footer from "./Components/Common/Footer.svelte";

  import { routes } from "./Routes";
</script>

<Header />
<Router {routes} />
<Footer />
