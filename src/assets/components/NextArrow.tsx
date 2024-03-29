export const NextArrow = (props : any) => {
    const {className, style, onClick} = props;
    return (
        <div
        className={`slider__arrow slider__arrow_right ${className}`}
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
                <rect
                    width="172"
                    height="2.99998"
                    transform="matrix(-1 8.74228e-08 8.74228e-08 1 172 10)"
                    fill="#C9D0E1"/>
                <path
                    d="M161 0V0C161 6.07513 165.925 11 172 11L173 11"
                    stroke="#C9D0E1"
                    stroke-width="3"/>
                <path
                    d="M161 23V23C161 16.9249 165.925 12 172 12L173 12"
                    stroke="#C9D0E1"
                    stroke-width="3"/>
            </svg>
        </div>

    )
}