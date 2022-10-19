import { ROUTE_PATHS, ROUTE_TITLES } from '../../constants/routes';

export interface IMenu {
  title: string;
  path: string;
}

export const menuItems: IMenu[] = [
  {title: ROUTE_TITLES.home, path: ROUTE_PATHS.home},
]
