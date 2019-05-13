(() => {
    'use strict';
    const PI = 'sfajdghkjg';
    const user = {
        firstName: 'Vasya',
        lastName: 'Pupkin',
        [PI]: 3.14,
        email: 'vasya@gmail.com',
        // fullName: () => `${this.firstName} ${this.lastName}`,
        /*fullName: function() {
            return `${this.firstName} ${this.lastName}`;
        },*/
        fullName() {
            return `${this.firstName} ${this.lastName}`;
        }
    };
    console.log(user[PI]);
    console.log(user);
    console.log(user.email);
    console.log(user['firstName']);
    console.log(user['email']);
    console.log(user.fullName());
    user.email = 'petya@gmail.com'; // user['email'] = 'petya@gmail.com';
    console.log(user.email);
    user.age = 36;
    console.log(user);
    // delete user.age;
    console.log(user.gender);
    user.gender = 'male';
    console.log(user);
    for (let key in user) {
        console.log(user[key]);
    }
    const keys = Object.keys(user);
    const values = Object.values(user);
    console.log(keys);
    console.log(values);
    const newUser = Object.assign(
        {},
        user,
        {
            gender: 'female',
            religion: 'XXXX'
        },
        {
            a: 456
        });

    console.log(newUser);
    console.log(user);

    const newUser1 = user;
    newUser.lastName = 'asfgh';
    console.log(newUser);
    console.log(newUser1);
    console.log(user);
    const news = [
        {
            title: 'This is title 1',
            description: 'this id description 1',
            comments: [
                {
                    username: 'Petya',
                    comment: 'tarahskdfj;s sfdg',
                    comments: [
                        {
                            username: 'Vasya',
                            comment: 'tarahskdfj;s sfdg'
                        }
                    ]
                },
                {
                    username: 'Petya',
                    comment: 'tarahskdfj;s sfdg'
                }
            ]
        },
        {
            title: 'This is title 2',
            description: 'this id description 2',
            comments: []
        },
    ];
    console.log(news[0].comments[0].comments[0].username);
    for (let item of news) {
        console.log(`${item.title}(${item.comments.length} comments)`);
    }

    function User(firstName, lastName) {
        this._password = 'sasad';
        this.firstName = firstName;
        this.lastName = lastName;
    }

    User.prototype.fullName = function () {
        return `${this.firstName} ${this.lastName}`;
    };
    User.prototype.getPassword = function () {
        return this._password;
    };

    function SuperUser(firstName, lastName, email) {
        User.call(this, firstName, lastName);
        this.email = email;
    }

    SuperUser.prototype = Object.create(User.prototype);

    const testUser = new User('Vasya', 'Pupkin');
    const testUser1 = new User('Petya', 'Pupkin');
    console.log(testUser);
    testUser._password = 'dwerw';
    console.log(testUser._password);
    console.log(testUser.fullName());
    console.log(testUser1.fullName());
    console.log(testUser1.getPassword());
    console.log(testUser1.hasOwnProperty('firstName'));
    const superUser = new SuperUser('Nikita', 'Pupkin', 'nikita@gmai.com');
    console.log(superUser);
    console.log(superUser.fullName());
    console.log(superUser.getPassword());

    class NUser {
        constructor(firstName, lastName) {
            this._password = 'sasad';
            this.firstName = firstName;
            this.lastName = lastName;
        }

        fullName() {
            return `${this.firstName} ${this.lastName}`;
        }

        getPassword() {
            return this._password;
        }
    }

    class NSuperUser extends NUser {
        constructor(firstName, lastName, email) {
            super(firstName, lastName);
            this.email = email;
        }

        getEmail() {
            return this.email;
        }
    }

    const nUser = new NUser('NPetya', 'NPupkin');
    const nSuperUser = new NSuperUser('NPetya', 'NPupkin', 'etewr@gmail.com');
    console.log(nUser);
    console.log(nSuperUser);
    console.log(nSuperUser.getEmail());
})();
