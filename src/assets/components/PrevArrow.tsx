
export const PrevArrow = (props : any) => {
    const {className, style, onClick} = props;
    return (
        <div
            className={`slider__arrow ${className}`}
            style={{
                ...style,
            }}
            onClick={onClick}>
            <svg
                width="173"
                height="23"
                viewBox="0 0 173 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <rect x="1" y="10" width="172" height="2.99998" fill="#C9D0E1"/>
                <path
                    d="M12 0V0C12 6.07513 7.07513 11 0.999998 11L-1.33918e-06 11"
                    stroke="#C9D0E1"
                    stroke-width="3"/>
                <path
                    d="M12 23V23C12 16.9249 7.07513 12 1 12L6.11999e-07 12"
                    stroke="#C9D0E1"
                    stroke-width="3"/>
            </svg>

        </div>

    )
}