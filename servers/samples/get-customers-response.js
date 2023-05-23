(config) => {


    const responseBody = {
        name: 'John Doe',
        birthdate: new Date()
    }

    return {
        statusCode: 200,
        headers: {
            'Content-Type': 'application/json'
        },
        body: responseBody
    }
}