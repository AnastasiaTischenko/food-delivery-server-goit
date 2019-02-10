const fs = require('fs');
const path = require('path');

const saveUserData = user => {
    const userName = user.username;
    const filePath = path.join(__dirname, "../../db/users", `${userName}.json`);

    fs.writeFile(filePath, JSON.stringify(user), function (err) {
        if (err) throw err;
        console.log(`${userName}.json add new user`);
    })
}

const signupRouter = (req, res) => {
    if (req.method === "POST") {
        let body = '';

        req.on("data", function (data) {
                body += data;
        })
            .on("end", function() {
                const data = JSON.parse(body);

                saveUserData(data);
                const response = {
                    status: 'success',
                    user: data
                };

                res.writeHead(200, {"Content-type": "application/json"});
                res.end(JSON.stringify(response));
            });
    };
};

module.exports = signupRouter;
