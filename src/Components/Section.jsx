import React from 'react';
import sectionData from '../Data/section-data';
import { SectionContainer } from './ Section.styles';

function Section() {
    return (
        <SectionContainer>
            {sectionData.map((data) => (
                <h1 key={data.title}>{data.title}</h1>
            ))}
        </SectionContainer>
    );
}

export default Section;
