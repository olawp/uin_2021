const movie = {
    title: 'Movie',
    name: 'movie',
    type: 'document',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Tittel',
            decription: 'Dette er beskrivelsen av filmen',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'actor',
            type: 'reference',
            title: 'Skuespiller',
            to: [{type: 'actor'}],
            validation: (Rule) => Rule.required(),
        }
    ]
}

export default movie;