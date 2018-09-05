import styled from "styled-components";

import { spacing, fontSizes, colours } from "src/styles";
import { ButtonReset, HrReset } from "src/components";

export const PersonaTextRegular = styled.div`
  padding: ${spacing.three} 0;
  font-size: ${fontSizes.subtitle};
`;

export const PersonaTextBold = styled.div`
  font-size: ${fontSizes.subtitle};
  font-weight: 500;
  padding: ${spacing.three} 0;
`;

export const MoreDetailsButton = styled(ButtonReset)`
  border-radius: 3px;
  background-color: ${colours.periwinkleBlueLighter};
  color: ${colours.periwinkleBlue};
  text-transform: uppercase;
  padding: ${spacing.two} ${spacing.three};
  font-size: ${fontSizes.p};
  margin-top: ${spacing.four};
`;

export const SectionHeader = styled.h2`
  margin: 0;
  font-size: ${fontSizes.display2};
  color: ${colours.periwinkleBlue};
  font-weight: 400;
  padding-bottom: ${spacing.three};
`;

export const SectionSubheader = styled.h3`
  margin: 0;
  font-size: ${fontSizes.display1};
  font-weight: 400;
  color: ${colours.black};
`;

export const SectionSmallSubheader = styled.h4`
  margin: 0;
  font-size: ${fontSizes.heading};
  font-weight: 400;
  color: ${colours.black};
`;

export const SectionBlock = styled.div`
  padding: ${spacing.three} 0;
`;

export const Subsection = styled.div`
  padding: ${spacing.three} 0 ${spacing.five} 0;
`;

export const CenteredContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const ControlWrapper = styled.div`
  display: flex;
  padding: ${spacing.two} 0;
`;

export const DropdownControlWrapper = styled.div`
  display: flex;
  align-items: baseline;
  padding: ${spacing.two} 0 ${spacing.three} 0;
`;

export const SliderWrapper = styled.div`
  flex-grow: 1;
  margin-left: ${spacing.two};
`;

export const DropdownWrapper = styled.div`
  flex-grow: 0;
  margin-left: ${spacing.two};
`;

export const ButtonControlWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  padding: ${spacing.two} 0;
`;

export const ButtonSetWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;
`;

export const ButtonOption = styled(ButtonReset)`
  font-size: ${fontSizes.p};
  padding: ${spacing.three} ${spacing.five};
  font-weight: 400;
  background-color: ${props =>
    props.active ? colours.periwinkleBlue : colours.periwinkleBlueLight};
  color: ${props => (props.active ? colours.white : colours.black)};
  margin-right: 3px;
  text-transform: uppercase;

  &:hover {
    background-color: ${props =>
      props.active ? colours.periwinkleBlue : colours.periwinkleBlueMedium};
    color: ${props => (props.active ? colours.white : colours.white)};
  }

  &:first-child {
    border-radius: 5px 0 0 5px;
  }

  &:last-child {
    border-radius: 0 5px 5px 0;
    margin-right: 0;
  }
`;
export const ButtonLabelWrapper = styled.div`
  display: flex;
  flex-grow: 0;
  justify-content: center;
  padding: ${spacing.one} 0;
`;

export const InformationNotice = styled.div`
  padding: ${spacing.one} 0;
  font-size: ${fontSizes.description};
`;

export const InformationCard = styled.div`
  border-radius: 3px;
  border: 2px solid ${colours.periwinkleBlue};
  padding: ${spacing.four};
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.div`
  font-size: ${fontSizes.p};
`;

export const CostDisplay = styled.div`
  font-size: ${fontSizes.display1};
  font-weight: 500;
`;

export const LargeCostDisplay = styled.div`
  font-size: ${fontSizes.display2};
  font-weight: 500;
`;

export const TotalCostsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  line-height: 1.2;
  padding-top: ${spacing.three};
`;

export const LabelledImageButton = styled(ButtonReset)`
  border: 1px solid ${props =>
    props.active ? colours.periwinkleBlue : colours.periwinkleBlueLight};
  border-radius: 3px;
  padding: ${spacing.three} ${spacing.three} 0 ${spacing.three};
  margin: ${spacing.two} ${spacing.three} ${spacing.two} 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: ${fontSizes.display5}
  background-color: ${props =>
    props.active ? colours.periwinkleBlueLight : colours.periwinkleBlueLighter};
  &:hover {
    background-color: ${colours.periwinkleBlueLight};
    border-color: ${props =>
      props.active ? colours.periwinkleBlue : colours.periwinkleBlueMedium};
  }
  &:first-child {
    margin-left: 0;
  }
`;

export const ImageButtonLabel = styled.label`
  padding: ${spacing.one} 0;
  font-size: ${fontSizes.p};
`;

export const DisplayItemsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-bottom: ${spacing.four};
`;

export const SectionDivider = styled(HrReset)`
  border-bottom: 1px solid
    ${props => (props.colour ? props.colour : colours.indigoDark)};
  width: 100%;
  margin: ${spacing.three} 0;
`;

export const OutlinedDisplayCard = styled.div`
  border: 1px solid ${colours.grayMedium};
  border-radius: 3px;
  padding: ${spacing.three};
  margin: ${spacing.two} ${spacing.three} ${spacing.two} 0;
  width: 9rem;
  height: 9rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  line-height: 1.2rem;
`;

export const HighlightedNote = styled.div`
  background-color: ${colours.yellowLight};
  width: 100%;
  padding: ${spacing.three} ${spacing.four};
`;
