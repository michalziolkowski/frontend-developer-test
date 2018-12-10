import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { View } from "react-native";
import styles from "../../../resources/styles";
import { HeaderInfoView, StyledExtremeListItem } from "./styled";

const { iconName, iconSize, iconColor } = styles.userList.headerElement;

interface IProps {
  height: number;
}

const ListHeaderComponent = (props: IProps) => (
  <StyledExtremeListItem height={props.height}>
    <HeaderInfoView>
      <View>
        <MaterialCommunityIcons
          name={iconName.reject}
          size={iconSize}
          color={iconColor.reject}
        />

        <MaterialCommunityIcons
          name={iconName.left}
          size={iconSize}
          color={iconColor.direction}
        />
      </View>

      <View>
        <MaterialCommunityIcons
          name={iconName.like}
          size={iconSize}
          color={iconColor.like}
        />

        <MaterialCommunityIcons
          name={iconName.right}
          size={iconSize}
          color={iconColor.direction}
        />
      </View>
    </HeaderInfoView>

    <MaterialCommunityIcons
      name={iconName.down}
      size={iconSize}
      color={iconColor.direction}
    />
  </StyledExtremeListItem>
);

export default ListHeaderComponent;
