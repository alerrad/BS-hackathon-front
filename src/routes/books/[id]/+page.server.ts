import type { PageServerLoad } from "./$types";
import { API_HOST } from "$env/static/private";
import { error } from "@sveltejs/kit";


export const load = (async ({ params, fetch }) => {
    let res;

    try {
        const req = await fetch(API_HOST + "/books/" + `${params.id}/`, {
            method: "GET",
            mode: "cors",
        });
        res = await req.json();
    } catch (err) {
        console.log(err);
        throw error(404, {
            message: "Not found"
        });
    }

    return res;
}) satisfies PageServerLoad;