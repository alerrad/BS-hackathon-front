import type { PageServerLoad } from "./$types";
import { API_HOST } from "$env/static/private";
import { error } from "@sveltejs/kit";


export const load = (async ({ fetch }) => {
    let res;

    try {
        const req = await fetch(API_HOST + "/articles/", {
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

    return {
        articles: res
    };
}) satisfies PageServerLoad;