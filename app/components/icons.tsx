type Props = {
    size: string;
    color: string;
    stroke?: string;
}

export const ArrowIcon = ({ size, color, stroke }: Props) => (
    <svg className={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.0701 9.57L12.0001 3.5L5.93005 9.57" className={color} strokeWidth={stroke ? stroke : "1.5"} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 20.5V3.67001" className={color} strokeWidth={stroke ? stroke : "1.5"} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);