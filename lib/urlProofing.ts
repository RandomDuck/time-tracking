import PublicRoutes from "@/json/routes.json";
import { redirect } from "next/navigation";

function checkIfRedirect(route: string) {
  const loggedIn = isLoggedIn();
  const publicRoute = checkRoute(route);
  if (publicRoute || loggedIn) {
    return;
  }
  redirect(PublicRoutes.home);
}

function isLoggedIn() {
  const storageItems = JSON.parse(sessionStorage.getItem('user') || '{}');

  if (storageItems.name !== undefined && storageItems.name !== '') {
    return true;
  }
  return false;
}

function checkRoute(route: string) {
  return Object.values(PublicRoutes).includes(route);
}

export default checkIfRedirect;
