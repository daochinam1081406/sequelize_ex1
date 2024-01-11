

const getVideo = (req, res) => {
    res.send("Get video 123456");
};

const createVideo = (req, res) => {
    res.send("Create video");
}

export {
    getVideo,
    createVideo,
}