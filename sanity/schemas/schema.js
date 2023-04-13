import {createSchema} from 'sanity'

import experience from './experience'
import pageInfo from './pageInfo'
import projects from './projects'
import skill from './skill'
import social from './social'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([experience, pageInfo, projects, skill, social]),
})
