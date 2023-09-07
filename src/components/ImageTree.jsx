/* eslint-disable react/prop-types */
export const ImageTree = ({ image, name }) => {
    return (
        <img
            src={image}
            alt={name}
            className=" max-md:h-56 md:h-[18rem]  object-cover rounded-lg transition-all duration-1000 ease-in-out absolute z-5 top-0 right-0  w-full
            
            "
        />
    );
};
