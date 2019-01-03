import React from 'react';
import { graphql } from 'gatsby';

import BuildableDetail from 'src/components/buildable-detail';

export default ({ data }) => {
  const {
    companion,
    imageName,
    ...stats
  } = data.warframeArsenal.companionByBuildableId;
  return (
    <BuildableDetail name={companion} imageUrl={imageName} stats={stats} />
  );
};

export const query = graphql`
  query($buildableId: Int!) {
    warframeArsenal {
      companionByBuildableId(buildableId: $buildableId) {
        companion
        shield
        health
        armor
        energy
        imageName
      }
    }
  }
`;
