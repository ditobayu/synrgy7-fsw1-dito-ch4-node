const fs = require('fs');

const writeInitialUserData = async () => {
    const data = [
        {
            id: 1,
            name: "Leanne Graham",
            username: "Bret",
            email: "Sincere@april.biz",
        },
        {
            id: 2,
            name: "Ervin Howell",
            username: "Antonette",
            email: "Shanna@melissa.tv",
        },
        {
            id: 3,
            name: "Clementine Bauch",
            username: "Samantha",
            email: "Nathan@yesenia.net",
        },
        {
            id: 4,
            name: "Patricia Lebsack",
            username: "Karianne",
            email: "Julianne.OConner@kory.org",
        },
        {
            id: 5,
            name: "Chelsey Dietrich",
            username: "Kamren",
            email: "Lucio_Hettinger@annie.ca",
        },
        {
            id: 6,
            name: "Mrs. Dennis Schulist",
            username: "Leopoldo_Corkery",
            email: "Karley_Dach@jasper.info",
        },
        {
            id: 7,
            name: "Kurtis Weissnat",
            username: "Elwyn.Skiles",
            email: "Telly.Hoeger@billy.biz",
        },
        {
            id: 8,
            name: "Nicholas Runolfsdottir V",
            username: "Maxime_Nienow",
            email: "Sherwood@rosamond.me",
        },
        {
            id: 9,
            name: "Glenna Reichert",
            username: "Delphine",
            email: "Chaim_McDermott@dana.io",
        },
        {
            id: 10,
            name: "Clementina DuBuque",
            username: "Moriah.Stanton",
            email: "Rey.Padberg@karina.biz",
        },
    ]

    fs.writeFile('./dummy.txt', JSON.stringify(data), 'utf-8', (err) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log("Data has been written successfully");
    });
}

const writeNewUserData = async (newData) => {
    fs.readFile('./dummy.txt', 'utf-8', (err, data) => {
        if (err) {
            console.log(err);
            return;
        }
        const oldData = JSON.parse(data);
        const updatedData = [...oldData, newData];
        fs.writeFile('./dummy.txt', JSON.stringify(updatedData), 'utf-8', (err) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log("Data has been written successfully");
        });
    });
}

const readUserData = async () => {
    fs.readFile('./dummy.txt', 'utf-8', (err, data) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log(JSON.parse(data));
    });
}

const getDetail = async (id) => {
    fs.readFile('./dummy.txt', 'utf-8', (err, data) => {
        if (err) {
            console.log(err);
            return;
        }
        const users = JSON.parse(data);
        const user = users.find((user) => user.id === id);
        console.log(user);
    });
}

const getData = async () => {
    fs.readFile('./dummy.txt', 'utf-8', (err, data) => {
        if (err) {
            console.log(err);
            return;
        }
        const users = JSON.parse(data);
        const user = users.map((user) => user.name);
        console.log(user);
    });
}

module.exports = {
    writeInitialUserData,
    writeNewUserData,
    readUserData,
    getDetail,
    getData
}