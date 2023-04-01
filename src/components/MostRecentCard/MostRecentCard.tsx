// React
import { CSSProperties, FC, useEffect, useState } from "react";

// Chakra
import { Wrap, WrapItem, Image, Text, Box, Flex, Avatar, Divider } from "@chakra-ui/react";

// Common
import { styles } from "./MostRecentCardStyle";
import { IMostRecentCard } from "../../types/types";

interface IProps {
  arrayOfItems: IMostRecentCard[]
}

export const MostRecentCard: FC<IProps> = ({arrayOfItems}) => {
  const [screenWidth, setScreenWidth] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  return(
    <Wrap justify="space-between" spacing="20px" style={styles.wrapper}>
      {arrayOfItems.map((item, index) =>
        <WrapItem key={index} width={screenWidth <= 1080 ? "45%" : "30.50%"} style={styles.card as CSSProperties}>
          <Image src={item.image} alt="Error" style={styles.img}/>
          <Box style={styles.textBlock}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </Box>
          <Box style={styles.footer}>
            <Divider/>
            <Flex style={styles.avatarWrapper}>
              <Flex style={styles.avatarBlock}>
                <Avatar style={styles.avatar} src={item.avatar}/>
                <Box ml='3'>
                  <Text style={styles.avatarName}>{item.name}</Text>
                </Box>
              </Flex>
              <Text style={styles.date}>{item.date}</Text>
            </Flex>
          </Box>
      </WrapItem>)}
    </Wrap>
  )
}