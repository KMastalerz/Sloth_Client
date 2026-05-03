import { BaseControlOptions } from "./base-control.options";

export interface TextInputOptions extends BaseControlOptions<string | null> {
    minLength?: number;
    maxLength?: number;
    pattern?: string;
}