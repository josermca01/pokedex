import React from "react";
import {
  PokeCardContainer,
  PokeCardId,
  PokeCardImage,
  PokeCardName,
  PokeCardNameContainer,
  PokeCardTypeName,
} from "../styles/PokeCardStyle";
import BlankSpacer from "react-native-blank-spacer";

import { Text,View } from "react-native";

const PokeCard = ({ id, nome, urlImage, onPress, typeColor ,typeName,typeName2}) => {
  return (
    <PokeCardContainer onPress={onPress} borderColor={typeColor}>
      <PokeCardId textColor={typeColor}>#{id} {nome}</PokeCardId>
      <View style={{ flex: 1, backgroundColor: 'rgba(52, 52, 52, 0.2)', borderRadius: 20 }}>
      <PokeCardImage source={{ uri: urlImage }} />
      </View>
      <PokeCardTypeName>{typeName.nome}</PokeCardTypeName>
      {typeName2 != null ?(
      <PokeCardTypeName>{typeName2.nome}</PokeCardTypeName>
      ):<BlankSpacer height={29} />}
    </PokeCardContainer>
  );
};

export default PokeCard;
