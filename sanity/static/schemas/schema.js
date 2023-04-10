import experience from './experience'
import pageInfo from './pageInfo'
import projects from './projects'
import skill from './skill'
import social from './social'

export const schemaTypes = [pageInfo, author, category, blockContent]

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([skill, pageInfo, experience, social, projects]),
})
