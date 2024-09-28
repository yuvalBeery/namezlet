export enum CornerVariant {
    TOP_LEFT,
    TOP_RIGHT,
    BOTTOM_LEFT,
    BOTTOM_RIGHT,
}

export interface NameOptionProps {
    name: string;
    variant?: CornerVariant;
}
