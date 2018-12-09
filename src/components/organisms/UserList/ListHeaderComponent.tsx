import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { View } from "react-native";
import { HeaderInfoView, StyledExtremeListItem } from "./styled";

interface IProps {
  height: number;
}

const ListHeaderComponent = (props: IProps) => (
  <StyledExtremeListItem height={props.height}>
    <HeaderInfoView>
      <View>
        <MaterialCommunityIcons name="close" size={60} color="#bc3e3e" />

        <MaterialCommunityIcons
          name="chevron-double-left"
          size={60}
          color="#888"
        />
      </View>

      <View>
        <MaterialCommunityIcons name="heart" size={60} color="#fc4600" />

        <MaterialCommunityIcons
          name="chevron-double-right"
          size={60}
          color="#888"
        />
      </View>
    </HeaderInfoView>

    <MaterialCommunityIcons name="chevron-double-down" size={60} color="#888" />
  </StyledExtremeListItem>
);

export default ListHeaderComponent;
