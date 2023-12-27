const products = {
    name: 'products',
    title: 'Products',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'image',
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


export default products

