export interface IFeaturedCard {
  badge?: string,
  bgImage: string,
  title: string,
  description: string,
  avatar: string,
  name: string,
  date: string
}

export interface IMenu {
  title?: string,
  menuArray: {
    label: string
  }[],
  customStyles?: any,
  menuWidth?: string,
  justify?: string
}

export interface IMostRecentCard {
  image: string
  title: string,
  description: string,
  avatar: string,
  name: string,
  date: string
}