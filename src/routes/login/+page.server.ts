import { error, redirect } from "@sveltejs/kit";
import { API_HOST } from "$env/static/private";

import type { PageServerLoad } from "./$types.js";

export const load: PageServerLoad = async (event: { cookies: { get: (arg0: string) => unknown; }; }) => {
    if (event.cookies.get("token")) {
        throw redirect(303, "/profile");
    }
}

export const actions = {
    default: async ({ request, fetch, cookies }) => {
        let res;
        const form_data: FormData = await request.formData();

        const req_body = {
            username: form_data.get("username"),
            password: form_data.get("password"),
        }

        try {
            const response = await fetch(API_HOST + "/auth/token/",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(req_body)
                });
            
            res = await response.json();
        } catch (err) {
            console.log(err);
            throw error(404, {
                message: "Bad request"
            });
        }

        if (res.access) {
            cookies.set("token", res.access, {path: "/", maxAge: 3600});
            // cookies.set("user", JSON.stringify(res.data), {path: "/"});
            throw redirect(303, "/profile");
        }

        return {
            "success": false,
            "message": "username or password incorrect!"
        }
    },
}