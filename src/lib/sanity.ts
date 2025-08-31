import { createClient } from "next-sanity";

export const client = createClient({
    projectId:"415081o6",
    dataset:"production",
    apiVersion:"2025-08-31",
    useCdn:true
})