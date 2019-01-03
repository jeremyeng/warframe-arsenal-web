/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const { createBuildablePage } = require('./src/utils/pages');

exports.createPages = async ({ actions, graphql }) => {
  const { data } = await graphql(`
    query {
      warframeArsenal {
        allBuildables {
          nodes {
            buildableId
            buildableType
          }
        }
      }
    }
  `);

  data.warframeArsenal.allBuildables.nodes.forEach(node => {
    actions.createPage(createBuildablePage(node));
  });
};
