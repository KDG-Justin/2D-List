import { Priority } from "../model/enums/Priority";


export function GetRandomUnit(){
    
}

export function GetPriorityColor(priority: Priority) : string{
    switch (priority) {
    case Priority.urgent:
      return "#000";
    case Priority.high:
      return "#b22222"; 
    case Priority.medium:
      return "#b2b222"; 
    case Priority.low:
      return "#228b22";
    default:
      return "#228b22";
  }
}