const graphpl = require('graphql')
const _ = require('lodash')
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt
} = graphpl

const users = [{
  id: 23, firstName: 'Bill', age: 41
}, {
  id: 50, firstName: 'Sam', age: 19
}]

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: { type: GraphQLString },
    firstName: { type: GraphQLString },
    age: { type: GraphQLInt }
  }
})

Const RootQuery = new graphpl.GraphQLInputObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      args: {
        id: { type: GraphQLString },
        resolve(parentValue, args) {
          return _.find(users, { id: args.id })
        }

      }
    }
  }
}
})
