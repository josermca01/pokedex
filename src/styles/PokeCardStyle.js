import styled from "styled-components/native";

export const PokeCardContainer = styled.TouchableOpacity`
  border-width: 3px;
  border-radius: 20px;
  border-color: ${(props) => props.borderColor};
  flex: 1;
  margin: 8px;
  align-items: center;
`;

export const PokeCardId = styled.Text`
  align-self: flex-start;
  padding: 10px;
  color: ${(props) => props.textColor};
  font-size: 18px;
  font-weight: bold;
`;

export const PokeCardImage = styled.Image`
  width: 90px;
  height: 90px;
  margin-bottom: 10px;
`;

export const PokeCardTypeName = styled.Text`
  font-size: 20px;
  color: black;
`;
