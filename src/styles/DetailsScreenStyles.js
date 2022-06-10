import styled from "styled-components/native";

export const PokemonHeaderInfo = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;
  padding-left: 25px;
  padding-right: 25px;
`;

export const PokemonName = styled.Text`
  font-size: 25px;
  color: white;
  margin-left: 20px;
  margin-top: 8px;
`;

export const PokemonID = styled.Text`
  font-size: 20px;
  color: white;
  margin-top: 8px;
`;

export const InfoContainer = styled.View`
  background-color: white;
  padding-top: 17%;
  padding-bottom: 50%;
  width: 95%;
  height: 95%;
  border-radius: 20px;
  margin: 10px;
  bottom: 80px;
`;

export const TypeTagContainer = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const TypeTag = styled.Text`
  background-color: ${(props) => props.tagColor};
  width: 100px;
  height: 40px;
  padding-top: 3px;
  text-align: center;
  border-radius: 20px;
  color: white;
  margin-left: 5px;
  margin-right: 5px;
`;

export const Title = styled.Text`
  font-size: 23px;
  text-align: center;
  color: ${(props) => props.textColor};
`;

export const SubTitle = styled.Text`
  font-size: 18px;
  text-align: center;
  color: #666;
`;

export const AboutValueText = styled.Text`
  font-size: 20px;
  text-align: center;
  color: black;
`;

export const StatsTitle = styled.Text`
  font-size: 15px;
  text-align: center;
  color: ${(props) => props.textColor};
`;

export const StatsValueText = styled.Text`
  color: black;
`;
