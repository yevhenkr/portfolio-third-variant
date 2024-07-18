import React from 'react';
import styled from 'styled-components';

interface SVGGridProps {
    icons: React.ReactNode[];
}

export const SVGGrid: React.FC<SVGGridProps> = ({ icons }) => {
    return (
        <GridContainer>
            {icons.map((icon, index) => (
                <GridItem key={index}>{icon}</GridItem>
            ))}
        </GridContainer>
    );
};

const GridContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(5, 1fr);
  gap: 100px;
    left: 0;
    right: 0;
    width: 100%;
`;

const GridItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
    flex: 1;
  //padding: 8px;
  //border: 1px solid #ddd;
  //border-radius: 8px;
`;
