import getRoutes from "./routes";

/**
 *
 * you can pass any config during init and those config can become prop for any of the route component
 */
export default function init(config) {
  return {
    name: "home",
    router: getRoutes(config)
  };
}
