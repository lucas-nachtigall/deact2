exports.handler = async (event) => {
    console.log("aaaa");
    console.error("bbbb");
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello World!! - 5'),
    };
    return response;
};
