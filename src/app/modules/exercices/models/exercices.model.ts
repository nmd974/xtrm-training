import { ExerciceCategories } from "./exercice-categories.model";
import { MusclesCategory } from "./muscles.models";

export interface Exercice{
  id: number;
  label: string;
  description: string;
  category: ExerciceCategories;
  muscles: MusclesCategory[];
}
