// React
import React, {FC} from 'react';

// Chakra
import { Text, Flex } from "@chakra-ui/react"

// Common
import { styles } from "./MenuStyles"
import { IMenu } from "../../types/types";


export const Menu: FC<IMenu> = ({title, menuArray, customStyles, menuWidth, justify}) => {
  const combinedStyles = {...styles.textItem, ...customStyles};
  const menuItem = menuArray.map((item, index) =>
    <Text style={combinedStyles} _hover={styles.textItemHover} key={index}>{item.label}</Text>);

  return (
    <div style={styles.wrapper as React.CSSProperties}>
      {title && <span style={styles.title}>{title}</span>}
      <Flex style={title ? styles.menuList : styles.fullMenuList as React.CSSProperties}>
        <Flex style={{width: menuWidth ? `${menuWidth}%` : "85%", justifyContent: justify || "space-between"}}>
          {menuItem}
        </Flex>
      </Flex>
    </div>
  )
};
