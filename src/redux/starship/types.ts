/*
 * @Date: 2019-09-08 22:16:35
 * @LastEditTime: 2019-09-08 22:20:58
 * @Description: 
 * @Author: Zhen
 * @LastEditors: Zhen
 */
import Starship from 'swapi-typescript/dist/models/Starship';

export const APPEND_STARSHIP = 'APPEND_STARSHIP';
export const SET_STARSHIP = 'SET_STARSHIP';

export interface AppendStarshipPayload { starships: Starship[], next: string, total: number };

interface AppendStarshipAction {
  type: typeof APPEND_STARSHIP,
  payload: AppendStarshipPayload
}

interface SetPersonAction {
  type: typeof SET_STARSHIP,
  payload: Starship
}

export type StarshipActionTypes = AppendStarshipAction | SetPersonAction;
