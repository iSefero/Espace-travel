// React
import { FC, CSSProperties } from "react";

// Chakra
import { Box, Divider, Flex, Text, Input, Button } from "@chakra-ui/react";

// Common
import { styles} from "./FooterStyle"
import { Menu } from "../Menu/Menu";
import { headerItems } from "../data/arrayList";


export const Footer: FC = () => {
  return (
    <Flex style={styles.wrapper as CSSProperties}>
      <Flex style={styles.contentWrapper as CSSProperties}>
        <Flex style={styles.content as CSSProperties}>
          <Box>
            <Text style={styles.title}>Stay in Touch</Text>
            <Divider style={styles.divider}/>
          </Box>
          <form style={styles.formWrapper}>
            <Flex>
              <Input style={styles.input} placeholder="Enter your email address"/>
              <Button style={styles.button} type="submit">Submit</Button>
            </Flex>
          </form>
        </Flex>
        <Flex style={styles.menuWrapper}>
          <Menu title="Escape" menuArray={headerItems} customStyles={styles.menuText} justify="right"/>
        </Flex>
      </Flex>
    </Flex>
  )
};