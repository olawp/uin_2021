// Ville kalle image men antar at det er reservert
const contentImage = {
  name: 'contentImage',
  title: 'Bilde',
  type: 'image',
  options: {
    hotspot: true,
  },
  fields: [
    {
      name: 'altText',
      title: 'Alternativ tekst',
      type: 'string',
      options: {
        isHighlighted: true,
      },
    },
  ],
  preview: {
      select: {
          imageUrl: 'asset.url',
          title: 'caption',
      }
  }
};

export default contentImage;