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
        },
        {
            name: 'release',
            type: 'number',
            title: "Utgivelsesår",
            validation: (Rule) => Rule.required(),

        },
        {
            name: 'image',
            title: 'Bilde',
            type: 'contentImage',
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            description: "Filmens unike URL",
            validation: (Rule) => Rule.required(),
            options: {
                source: 'title',
                maxLength: 96,
                
            }
        },
        {
            name: 'summary',
            type: 'text',
            title: 'Oppsummering',
            description: 'En beskrivelse av filmen',
            validation: (Rule) => Rule.required(),
        },

        {name: 'imdb',
        type: 'string',
        title: 'IMDB link',
        description: 'Link til filmens IMDB side',
        validation: (Rule) => Rule.required(),
    
        }
    ],
    preview: {
        select: {
            title: 'title',
            actor: 'actor.name'
        },
        prepare(selection) {
            const {title, actor} = selection;
            return {
                title,
                subtitle: `Skuespiller: ${actor}`,
            }
        }
    }
}

export default movie;