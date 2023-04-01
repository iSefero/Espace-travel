// React
import { FC, CSSProperties } from "react";

// Chakra
import { Box, Button, Text, Flex } from "@chakra-ui/react";

// Common
import { Menu } from "../Menu/Menu";
import { headerItems } from "../data/arrayList";
import { styles } from "./HeaderStyle";


export const Header: FC = () => {
  return (
    <Flex style={styles.wrapper as CSSProperties}>
      <Flex style={styles.contentWrapper as CSSProperties}>
        <Box style={styles.menu}>
          <Menu title="Escape" menuArray={headerItems} customStyles={styles.menuText}/>
        </Box>
        <Flex style={styles.content as CSSProperties}>
          <Text style={styles.title as CSSProperties}>Let`s do it together.</Text>
          <Text style={styles.description}>We travel the world in search of stories. Come along for the ride.</Text>
          <Button style={styles.button}>View Latest Posts</Button>
        </Flex>
      </Flex>
    </Flex>
  )
}