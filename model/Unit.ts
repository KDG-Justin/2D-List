import { UnitType } from "./enums/UnitType";
import { SpecialSkill } from "./SpecialSkill";

export interface Unit{
    unitIdle: string; 
    unitAttack?: string; 
    type: UnitType;
    attack: number; 
    hp: number; 
    defence: number; 
    mana: number;
    specialSkill?: SpecialSkill;  

}