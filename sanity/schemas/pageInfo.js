import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'pageInfo',
  title: 'pageInfo',
  type: 'document',
  fields: [
    {
      name: 'name',
  title: 'Name',
  type: 'string',
    },
    {
      name: 'role',
  title: 'Role',
  type: 'string',
    },
    {
      name: 'heroImage',
  title: 'Image',
  type: 'Image',
  options: {
    hotspot: true,
  }
    },
    {
      name: 'backgroundInfo',
  title: 'BackgroundInformation',
  type: 'string',
    },
    {
      name: 'profilePic',
  title: 'ProfilePic',
  type: 'image',
  options: {
    hotspot: true
  }
    },
    {
      name: 'phoneNumber',
  title: 'PhoneNumber',
  type: 'string',
    },
    {
      name: 'email',
  title: 'Email',
  type: 'string',
    },
    {
      name: 'address',
  title: 'Address',
  type: 'string',
    },
    {
      name: 'socials',
  title: 'Socials',
  type: 'array',
    },
  ],

  })
