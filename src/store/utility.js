// we can update our state object with this utility function -- clean and simple :)
export const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    };
};