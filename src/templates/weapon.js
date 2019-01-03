import React from 'react';
import { graphql } from 'gatsby';

import BuildableDetail from 'src/components/buildable-detail';

export default ({ data }) => {
  const {
    weapon,
    imageName,
    ...stats
  } = data.warframeArsenal.weaponByBuildableId;
  return <BuildableDetail name={weapon} imageUrl={imageName} stats={stats} />;
};

export const query = graphql`
  query($buildableId: Int!) {
    warframeArsenal {
      weaponByBuildableId(buildableId: $buildableId) {
        weapon
        weaponType
        weaponCategory
        imageName
      }
    }
  }
`;
