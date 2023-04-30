const user = {
    user: {
        fname: '',
        sname: '',
        email: '',
        phone: null,
        password: null,
        role: 'user',
        profile: {
            image: '/assets/images/user/user.png',
            primary_address: {}
        },
        permissions: {
            restricted: true,
            self: {
                all: true,
            }
        },
        events: {
            joined: '',
            general: []
        },
        flags: {
            profile_completion: false
        }
    },

    admin: {
        fname: '',
        sname: '',
        email: '',
        phone: null,
        password: null,
        role: 'admin',
        profile: {
            image: '/assets/images/user/user.png',
            primary_address: {}
        },
        permissions: {
            restricted: false,
            admin: true,
            all: false,
            self: {
                all: false,
                view: true,
                edit: true,
                update: true,
            },
            messages: {
                all: false,
                view: true,
            },
            users: {
                all: false,
                view: true,
                edit: true,
                update: true,
            },
            candidates: {
                all: false,
                view: true,
                edit: true,
                update: true,
            },
            recuruiter: {
                all: false,
                view: true,
                add: true,
                edit: true,
                update: true,
            },
            interviews: {
                all: false,
                view: true,
                add: true,
                edit: true,
                update: true,
            },
            allotments: {
                all: false,
                view: true,
                add: true,
                edit: true,
                update: true,
            },
        },
        events: {
            joined: '',
            general: []
        },
        flags: {
            profile_completed: false,
        }
    },

    super_admin: {
        fname: '',
        sname: '',
        email: '',
        phone: null,
        password: null,
        role: 'super_admin',
        profile: {
            image: '/assets/images/user/user.png',
            primary_address: {}
        },
        permissions: {
            restricted: false,
            admin: true,
            all: true,
            self: {
                all: true,
            },
            messages: {
                all: true,
            },
            users: {
                all: true,
            },
            candidates: {
                all: true,
            },
            recuruiter: {
                all: true,
            },
            interviews: {
                all: true,
            },
            allotments: {
                all: true,
            },
            admins: {
                all: true,
            },
        },
        events: {
            joined: '',
            general: []
        },
        flags: {
            profile_completed: false,
        }
    },
};

module.exports.models = {
    user
};