const courses = {
    name: 'courses',
    title: 'Courses',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
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


export default courses

