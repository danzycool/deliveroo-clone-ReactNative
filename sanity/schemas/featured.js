import { defineField, defineType } from 'sanity'

export default defineType({
    name: "featured",
    title: "Featured Menu categories",
    type: 'document',
    fields: [
        defineField({
            name: "name",
            type: "string",
            title: "Featured Category Name",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "short_description",
            type: "string",
            title: "Short Description",
            validation: (Rule) => Rule.max(200),
        }),
        defineField({
            name: "restaurants",
            type: "array",
            title: "Restaurants",
            of: [{
                type: "reference",
                to: [{ type: "restaurant" }]
            }],
        }),
    ]
})