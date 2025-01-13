import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { getCurrentUser } from "./services/apiAuth";
import { cookies } from "next/headers";

type Role = "user" | "admin";

const AuthRoutes = ["/sign-in", "/sign-up", "/forgot-password"];
const PublicRoutes: string[] = [];

const roleBasedRoutes: Record<Role, (string | RegExp)[]> = {
  user: ["/", "/about", "/contact", /^\/dashboard\/user/, "/feeds"],
  admin: ["/", "/about", "/contact", /^\/dashboard\/admin/, "/feeds"],
};

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = cookies().get("token")?.value;

  // Allow access to authentication routes when not logged in
  if (!token) {
    if (AuthRoutes.includes(pathname)) {
      return NextResponse.next();
    }
    // Redirect to sign-in for all protected routes
    return NextResponse.redirect(
      new URL(`/sign-in?redirect=${pathname}`, request.url)
    );
  }

  // For authenticated users
  const user = await getCurrentUser();

  // Allow access to public routes (if any)
  if (PublicRoutes.includes(pathname)) {
    return NextResponse.next();
  }

  // Check role-based access
  if (user.role && roleBasedRoutes[user.role as Role]) {
    const routes = roleBasedRoutes[user.role as Role];
    if (
      routes.some((route) =>
        typeof route === "string"
          ? pathname.startsWith(route)
          : pathname.match(route)
      )
    ) {
      return NextResponse.next();
    }
  }

  // If user doesn't have access to the requested route, redirect to sign-in
  return NextResponse.redirect(new URL("/sign-in", request.url));
}

export const config = {
  matcher: [
    "/",
    "/about",
    "/contact",
    "/dashboard/:path*",
    "/feeds",
    "/sign-in",
    "/sign-up",
    "/forgot-password",
  ],
};
