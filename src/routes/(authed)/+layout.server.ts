import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./logout/$types";

export const load: PageServerLoad = async (event: { cookies: { get: (arg0: string) => unknown; }; }) => {
    if (!event.cookies.get("token")) {
        throw redirect(303, "/login");
    }
}