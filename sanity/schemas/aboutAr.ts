const aboutAr = {
    name: 'aboutar',
    title: 'AboutAr',
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


export default aboutAr

