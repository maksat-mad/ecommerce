import axios from "axios";

export default class UserService {
    static async getRequests() {
        // return await axios.post('https://jsonplaceholder.typicode.com/posts', {
        //     body: body,
        //     headers: {
        //         'Content-type': 'application/json; charset=UTF-8',
        //     }
        // });
        return {
            data: [
                {
                    id: 1,
                    email: 'maksat111@gmail.com',
                    time: '14/03/23',
                    detailsEn: ["3 kg apple", "3 kg apple", "3 kg apple", "3 kg apple"],
                    detailsRu: ["3 kg yabloko", "3 kg yabloko", "3 kg yabloko", "3 kg yabloko"],
                    detailsKk: ["3 kg alma", "3 kg alma", "3 kg alma", "3 kg alma"],
                    totalMoney: 3000,
                    phoneNumber: "+7(705)100-10-10"
                },
                {
                    id: 2,
                    email: 'maksat222@gmail.com',
                    time: '14/03/23',
                    detailsEn: ["3 kg apple", "3 kg apple", "3 kg apple", "3 kg apple"],
                    detailsRu: ["3 kg yabloko", "3 kg yabloko", "3 kg yabloko", "3 kg yabloko"],
                    detailsKk: ["3 kg alma", "3 kg alma", "3 kg alma", "3 kg alma"],
                    totalMoney: 3000,
                    phoneNumber: "+7(705)100-10-10"
                },
                {
                    id: 3,
                    email: 'maksat333@gmail.com',
                    time: '14/03/23',
                    detailsEn: ["3 kg apple", "3 kg apple", "3 kg apple", "3 kg apple"],
                    detailsRu: ["3 kg yabloko", "3 kg yabloko", "3 kg yabloko", "3 kg yabloko"],
                    detailsKk: ["3 kg alma", "3 kg alma", "3 kg alma", "3 kg alma"],
                    totalMoney: 3000,
                    phoneNumber: "+7(705)100-10-10"
                },
                {
                    id: 4,
                    email: 'maksat444@gmail.com',
                    time: '14/03/23',
                    detailsEn: ["3 kg apple", "3 kg apple", "3 kg apple", "3 kg apple"],
                    detailsRu: ["3 kg yabloko", "3 kg yabloko", "3 kg yabloko", "3 kg yabloko"],
                    detailsKk: ["3 kg alma", "3 kg alma", "3 kg alma", "3 kg alma"],
                    totalMoney: 3000,
                    phoneNumber: "+7(705)100-10-10"
                },
                {
                    id: 5,
                    email: 'maksat555@gmail.com',
                    time: '14/03/23',
                    detailsEn: ["3 kg apple", "3 kg apple", "3 kg apple", "3 kg apple"],
                    detailsRu: ["3 kg yabloko", "3 kg yabloko", "3 kg yabloko", "3 kg yabloko"],
                    detailsKk: ["3 kg alma", "3 kg alma", "3 kg alma", "3 kg alma"],
                    totalMoney: 3000,
                    phoneNumber: "+7(705)100-10-10"
                },
            ]
        };
    }

    static async cancelRequest(id) {
        return await axios.post('https://jsonplaceholder.typicode.com/posts', {
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        });
    }

    static async acceptRequest(id) {
        return await axios.post('https://jsonplaceholder.typicode.com/posts', {
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        });
    }

    static async getBoughtHistory() {
        // return await axios.post('https://jsonplaceholder.typicode.com/posts', {
        //     body: body,
        //     headers: {
        //         'Content-type': 'application/json; charset=UTF-8',
        //     }
        // });
        return {
            data: [
                {
                    id: 1,
                    email: 'maksat111@gmail.com',
                    time: '14/03/23',
                    detailsEn: ["3 kg apple", "3 kg apple", "3 kg apple", "3 kg apple"],
                    detailsRu: ["3 kg yabloko", "3 kg yabloko", "3 kg yabloko", "3 kg yabloko"],
                    detailsKk: ["3 kg alma", "3 kg alma", "3 kg alma", "3 kg alma"],
                    totalMoney: 3000,
                    phoneNumber: "+7(705)100-10-10"
                },
                {
                    id: 2,
                    email: 'maksat222@gmail.com',
                    time: '14/03/23',
                    detailsEn: ["3 kg apple", "3 kg apple", "3 kg apple", "3 kg apple"],
                    detailsRu: ["3 kg yabloko", "3 kg yabloko", "3 kg yabloko", "3 kg yabloko"],
                    detailsKk: ["3 kg alma", "3 kg alma", "3 kg alma", "3 kg alma"],
                    totalMoney: 3000,
                    phoneNumber: "+7(705)100-10-10"
                },
                {
                    id: 3,
                    email: 'maksat333@gmail.com',
                    time: '14/03/23',
                    detailsEn: ["3 kg apple", "3 kg apple", "3 kg apple", "3 kg apple"],
                    detailsRu: ["3 kg yabloko", "3 kg yabloko", "3 kg yabloko", "3 kg yabloko"],
                    detailsKk: ["3 kg alma", "3 kg alma", "3 kg alma", "3 kg alma"],
                    totalMoney: 3000,
                    phoneNumber: "+7(705)100-10-10"
                },
                {
                    id: 4,
                    email: 'maksat444@gmail.com',
                    time: '14/03/23',
                    detailsEn: ["3 kg apple", "3 kg apple", "3 kg apple", "3 kg apple"],
                    detailsRu: ["3 kg yabloko", "3 kg yabloko", "3 kg yabloko", "3 kg yabloko"],
                    detailsKk: ["3 kg alma", "3 kg alma", "3 kg alma", "3 kg alma"],
                    totalMoney: 3000,
                    phoneNumber: "+7(705)100-10-10"
                },
                {
                    id: 5,
                    email: 'maksat555@gmail.com',
                    time: '14/03/23',
                    detailsEn: ["3 kg apple", "3 kg apple", "3 kg apple", "3 kg apple"],
                    detailsRu: ["3 kg yabloko", "3 kg yabloko", "3 kg yabloko", "3 kg yabloko"],
                    detailsKk: ["3 kg alma", "3 kg alma", "3 kg alma", "3 kg alma"],
                    totalMoney: 3000,
                    phoneNumber: "+7(705)100-10-10"
                },
            ]
        };
    }

    static async getSoldHistory() {
        // return await axios.post('https://jsonplaceholder.typicode.com/posts', {
        //     body: body,
        //     headers: {
        //         'Content-type': 'application/json; charset=UTF-8',
        //     }
        // });
        return {
            data: [
                {
                    id: 1,
                    email: 'maksat111@gmail.com',
                    time: '14/03/23',
                    detailsEn: ["3 kg apple", "3 kg apple", "3 kg apple", "3 kg apple"],
                    detailsRu: ["3 kg yabloko", "3 kg yabloko", "3 kg yabloko", "3 kg yabloko"],
                    detailsKk: ["3 kg alma", "3 kg alma", "3 kg alma", "3 kg alma"],
                    totalMoney: 3000,
                    phoneNumber: "+7(705)100-10-10"
                },
                {
                    id: 2,
                    email: 'maksat222@gmail.com',
                    time: '14/03/23',
                    detailsEn: ["3 kg apple", "3 kg apple", "3 kg apple", "3 kg apple"],
                    detailsRu: ["3 kg yabloko", "3 kg yabloko", "3 kg yabloko", "3 kg yabloko"],
                    detailsKk: ["3 kg alma", "3 kg alma", "3 kg alma", "3 kg alma"],
                    totalMoney: 3000,
                    phoneNumber: "+7(705)100-10-10"
                },
                {
                    id: 3,
                    email: 'maksat333@gmail.com',
                    time: '14/03/23',
                    detailsEn: ["3 kg apple", "3 kg apple", "3 kg apple", "3 kg apple"],
                    detailsRu: ["3 kg yabloko", "3 kg yabloko", "3 kg yabloko", "3 kg yabloko"],
                    detailsKk: ["3 kg alma", "3 kg alma", "3 kg alma", "3 kg alma"],
                    totalMoney: 3000,
                    phoneNumber: "+7(705)100-10-10"
                },
                {
                    id: 4,
                    email: 'maksat444@gmail.com',
                    time: '14/03/23',
                    detailsEn: ["3 kg apple", "3 kg apple", "3 kg apple", "3 kg apple"],
                    detailsRu: ["3 kg yabloko", "3 kg yabloko", "3 kg yabloko", "3 kg yabloko"],
                    detailsKk: ["3 kg alma", "3 kg alma", "3 kg alma", "3 kg alma"],
                    totalMoney: 3000,
                    phoneNumber: "+7(705)100-10-10"
                },
                {
                    id: 5,
                    email: 'maksat555@gmail.com',
                    time: '14/03/23',
                    detailsEn: ["3 kg apple", "3 kg apple", "3 kg apple", "3 kg apple"],
                    detailsRu: ["3 kg yabloko", "3 kg yabloko", "3 kg yabloko", "3 kg yabloko"],
                    detailsKk: ["3 kg alma", "3 kg alma", "3 kg alma", "3 kg alma"],
                    totalMoney: 3000,
                    phoneNumber: "+7(705)100-10-10"
                },
            ]
        };
    }

    static async getUser(query) {
        return {
            data: [
                {
                    id: 1,
                    email: 'maksat111@gmail.com',
                    blocked: false,
                    phoneNumber: "+7(705)100-10-10"
                },
                {
                    id: 2,
                    email: 'maksat222@gmail.com',
                    blocked: false,
                    phoneNumber: "+7(705)100-10-10"
                },
                {
                    id: 3,
                    email: 'maksat333@gmail.com',
                    blocked: false,
                    phoneNumber: "+7(705)100-10-10"
                },
                {
                    id: 4,
                    email: 'maksat444@gmail.com',
                    blocked: true,
                    phoneNumber: "+7(705)100-10-10"
                },
                {
                    id: 5,
                    email: 'maksat555@gmail.com',
                    blocked: true,
                    phoneNumber: "+7(705)100-10-10"
                },
            ]
        };
    }

    static async blockUser(id) {
        return await axios.post('https://jsonplaceholder.typicode.com/posts', {
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        });
    }

    static async unblockUser(id) {
        return await axios.post('https://jsonplaceholder.typicode.com/posts', {
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        });
    }

    static async makeAdmin(id) {
        return await axios.post('https://jsonplaceholder.typicode.com/posts', {
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        });
    }

    static async removeFromAdmin(id) {
        return await axios.post('https://jsonplaceholder.typicode.com/posts', {
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        });
    }

    static async getUserForCreateAdmin(query) {
        return {
            data: [
                {
                    id: 1,
                    email: 'maksat111@gmail.com',
                    phoneNumber: "+7(705)100-10-10"
                },
                {
                    id: 2,
                    email: 'maksat222@gmail.com',
                    phoneNumber: "+7(705)100-10-10"
                },
                {
                    id: 3,
                    email: 'maksat333@gmail.com',
                    phoneNumber: "+7(705)100-10-10"
                },
                {
                    id: 4,
                    email: 'maksat444@gmail.com',
                    phoneNumber: "+7(705)100-10-10"
                },
                {
                    id: 5,
                    email: 'maksat555@gmail.com',
                    phoneNumber: "+7(705)100-10-10"
                },
            ]
        };
    }

    static async getUserForAdminManagement(query) {
        return {
            data: [
                {
                    id: 1,
                    email: 'maksat111@gmail.com',
                    phoneNumber: "+7(705)100-10-10"
                },
                {
                    id: 2,
                    email: 'maksat222@gmail.com',
                    phoneNumber: "+7(705)100-10-10"
                },
                {
                    id: 3,
                    email: 'maksat333@gmail.com',
                    phoneNumber: "+7(705)100-10-10"
                },
                {
                    id: 4,
                    email: 'maksat444@gmail.com',
                    phoneNumber: "+7(705)100-10-10"
                },
                {
                    id: 5,
                    email: 'maksat555@gmail.com',
                    phoneNumber: "+7(705)100-10-10"
                },
            ]
        };
    }
}