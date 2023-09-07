/* eslint-disable react/prop-types */
export const ImageTree = ({ image, name }) => {
    return (
        <img
            src={image}
            alt={name}
            className=" max-md:w-56 max-md:h-56  md:w-96 md:h-96  object-cover rounded-lg transition-all duration-1000 ease-in-out"
        />
    );
};
