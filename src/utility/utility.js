export const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties,
    };
};

export const currentTime = () => {
    const currentDate = new Date();

    const formatTime = currentDate.getHours() + ":" + currentDate.getMinutes() + ":"+currentDate.getSeconds();
    const formatDate = currentDate.getDate() + "." + (currentDate.getMonth()+1) + "." + currentDate.getFullYear();

    return formatTime + " " + formatDate;
};

export const convertDataResponseFirebaseToList = (responseData) => {
    return Object.keys(responseData).reduce((previous, current) => {
        const value = {
            uid: current,
            ...responseData[current]
        };

        previous.push(value);
        return previous;
    }, []);
};