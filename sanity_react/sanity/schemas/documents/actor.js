const actor = {
    title: 'Skuespiller',
    name: 'actor',
    type: 'document',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Skuespiller',
            description: 'Navn på skuespiller',
            validation: (Rule) => Rule.required(),
        }
    ]
}

export default actor;