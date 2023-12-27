import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import schemas from './sanity/schemas';




const config = defineConfig({
    projectId: '3drbqba0',

    dataset: 'production',

    title: "Amir Page",

    apiversion: '2023-11-08',

    plugins: [deskTool()],
    basePath: "/admin",
    usecdn: true,

    schema: {
        types: schemas
    },
})
export default config;