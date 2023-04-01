// React
import {FC, CSSProperties } from "react";

// Chakra
import {Flex, Badge, Text, Avatar, Box, AspectRatio } from "@chakra-ui/react";

// Common
import { styles } from "./FeaturedCardStyles";
import { IFeaturedCard } from "../../types/types";

interface IProps {
  arrayOfItems: IFeaturedCard[]
}
export const FeaturedCard: FC<IProps> = ({arrayOfItems}) => {

   return (
     <Flex style={styles.wrapper}>
       {arrayOfItems.map((item, index) =>
         <AspectRatio key={index} ratio={5 / 3} style={styles.ratio}>
           <Flex backgroundImage={item.bgImage} style={styles.content as CSSProperties}>
             <Flex>
               {item.badge && <Badge style={styles.badge} >{item.badge}</Badge>}
             </Flex>
             <Flex style={styles.textContent as CSSProperties}>
               <Text style={styles.title}>{item.title}</Text>
               <Text style={styles.description}>{item.description}</Text>
               <Flex style={styles.cardFooter as CSSProperties}>
                 <Flex style={styles.avatarBlock as CSSProperties}>
                   <Avatar style={styles.avatar} src={item.avatar}/>
                   <Box ml='3'>
                     <Text style={styles.avatarAndTimeText}>{item.name}</Text>
                   </Box>
                 </Flex>
                 <Text style={styles.avatarAndTimeText}>{item.date}</Text>
               </Flex>
             </Flex>
          </Flex>
         </AspectRatio>)}
     </Flex>
  )
}