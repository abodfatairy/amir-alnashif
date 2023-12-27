const about = {
    name: 'about',
    title: 'About',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'array',
            of: [{ type: 'image' }],
            options: {
                hotspot: true,
            }
        },
        {
            name: 'details',
            title: 'Details',
            type: 'string',
        },
    ]
}


export default about

