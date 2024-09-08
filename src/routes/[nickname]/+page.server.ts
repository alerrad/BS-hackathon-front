import type { PageServerLoad } from "./$types";
import { API_HOST } from "$env/static/private";
import { error } from "@sveltejs/kit";


export const load = (async ({ fetch, params }) => {
    let res;

    try {
        const req = await fetch(API_HOST + "/users/" + `${params.nickname}`, {
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

    try {
        const req = await fetch(API_HOST + "/articles/", {
            method: "GET",
            mode: "cors",
        });
        res.user_articles = await req.json();
    } catch (err) {
        console.log(err);
        throw error(404, {
            message: "Not found",
        });
    }

    return res;
}) satisfies PageServerLoad;