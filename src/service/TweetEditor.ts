// type Tweet = {
//     id: number,
//     name: string,
//     username: string,
//     profileUrl: string,
//     createdAt: string,
//     text: string,
// }

interface IEditor {
    getTweets(username: string): any;
    postTweet(text: string): any;
    updateTweet(targetId: string, text: string): void;
    deleteTweet(target: string): void;
}

export default class TweetEditor implements IEditor {
    constructor(private baseURL: string) {
        this.baseURL = baseURL;
    }

    async postTweet(text: string) {
        const response = await fetch(`${this.baseURL}/tweets`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                text,
                username: 'popo',
                name: 'popory',
            }),
        });
        const data = await response.json();
        if (response.status !== 201) {
            throw new Error(data.message);
        }
        return data;
    }
    async getTweets(username: string) {
        const query = username ? `?username=${username}` : '';
        const response = await fetch(`${this.baseURL}/tweets/${query}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        });
        const data = await response.json();
        if (response.status !== 200) {
            throw new Error(data.message);
        }
        return data;
    }
    async updateTweet(targetId: string, text: string) {
        const response = await fetch(`${this.baseURL}/tweets/${targetId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                text
            })
        });
        if (response.status !== 200) {
            throw new Error('ID NOT FOUND');
        }

    }
    async deleteTweet(targetId: string) {
        const response = await fetch(`${this.baseURL}/tweets/${targetId}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.status !== 204) {
            throw new Error('ID NOT FOUND');
        }
    }
}


