/* eslint-disable @next/next/no-img-element */

const Button = ({ onClick }) => (
    <>
        <button name="button" onClick={onClick} className="btn">
            <img 
                alt="search"
                src="/iconos/search.svg"
            />
        </button>
    </>
);

export default Button;
