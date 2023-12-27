
const achievements = {
    name: 'achievements',
    title: 'Ahievements',
    type: 'document',
    fields: [
        {
            name: 'icon',
            title: 'Icon',
            type: 'image',
            options: {
                hotspot: true,
            }
        },
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'details',
            title: 'Details',
            type: 'string',
        },
    ]
}


export default achievements