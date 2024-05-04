import adminRoutes from "./adminRoutes";
import userRoutes from "./userRoutes";

const appRoutes = [...userRoutes, ...adminRoutes];

export default appRoutes;
