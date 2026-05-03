export interface BaseControlOptions<T> {
    defaultValue?: T;
    icon?: string;
    label?: string;
    labelPosition?: LabelPosition;
    placeholder?: string;
    required?: boolean;
}

export type LabelPosition = 'top' | 'left';