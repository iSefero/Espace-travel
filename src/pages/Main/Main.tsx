import { FC, CSSProperties } from "react";
import { arrayOfCategories, arrayOfFeaturedPosts, arrayOfMostRecent } from "../../components/data/arrayList";
import { Header } from "../../components/Header/Header";
import { Menu } from "../../components/Menu/Menu";
import { Box, Text, Flex, Divider } from "@chakra-ui/react"
import { FeaturedCard } from "../../components/FeaturedCard/FeaturedCard";
import { MostRecentCard } from "../../components/MostRecentCard/MostRecentCard";
import { Footer } from "../../components/Footer/Footer";
import { styles } from "./MainStyle";

export const Main: FC = () => {

  return (
    <Flex style={styles.wrapper as CSSProperties}>
      <Header/>
      <Flex style={styles.categoriesWrapper}>
        <Menu menuArray={arrayOfCategories} customStyles={styles.categoriesText} menuWidth="97"/>
      </Flex>
      <Flex style={styles.content as CSSProperties}>
        <Box>
          <Text style={styles.contentTitle}>Featured Posts</Text>
          <Divider style={styles.grayDivider}/>
        </Box>
        <FeaturedCard arrayOfItems={arrayOfFeaturedPosts}/>
        <Box style={styles.mostRecentWrapper}>
          <Text style={styles.contentTitle}>Most Recent</Text>
          <Divider style={styles.grayDivider}/>
        </Box>
        <MostRecentCard arrayOfItems={arrayOfMostRecent}/>
      </Flex>
      <Footer/>
    </Flex>
  )
};