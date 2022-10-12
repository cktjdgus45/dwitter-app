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
    constructor(private http) {
        this.http = http;
    }
    async getTweets(username: string) {
        const query = username ? `?username=${username}` : '';
        return this.http.fetch(`/tweets/${query}`, {
            method: 'GET',
        });
        
    }
    
    async postTweet(text: string) {
        return this.http.fetch(`/tweets`, {
            method: 'POST',
            body: JSON.stringify({
                text,
                username: 'popo',
                name: 'popory',
            }),
        });
        
    }
    
    async updateTweet(targetId: string, text: string) {
        return this.http.fetch(`/tweets/${targetId}`, {
            method: 'PUT',
            body: JSON.stringify({
                text
            })
        });
    }
    async deleteTweet(targetId: string) {
        return this.http.fetch(`/tweets/${targetId}`, {
            method: 'DELETE',
        });
    }
}


