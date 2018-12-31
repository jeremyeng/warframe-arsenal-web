/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require(`path`);

exports.createPages = async ({ actions, graphql }) => {
  const { data } = await graphql(`
    query {
      warframeArsenal {
        allWarframes {
          edges {
            node {
              buildableId
              warframe
              shield
              health
              armor
              energy
              imageName
            }
          }
        }
      }
    }
  `);
  data.warframeArsenal.allWarframes.edges.forEach(({ node }) => {
    actions.createPage({
      path: `/warframe/${node.buildableId}`,
      component: path.resolve(`./src/templates/warframe.js`),
      context: {
        buildableId: node.buildableId,
      },
    });
  });
};
