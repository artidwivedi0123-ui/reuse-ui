import { ReactNode } from 'react';
export interface CardProps {
    title?: string;
    image?: string;
    children?: ReactNode;
    className?: string;
    onClick?: () => void;
}
export default function Card({ title, image, children, className, onClick, }: CardProps): import("react").JSX.Element;
