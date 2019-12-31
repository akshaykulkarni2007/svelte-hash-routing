import Home from "./Components/Home.svelte";
import About from "./Components/About.svelte";
import NotFound from "./Components/Common/NotFound.svelte";

const routes = {
	"/": Home,
	"/about": About,
	"*": NotFound
};

export { routes };
