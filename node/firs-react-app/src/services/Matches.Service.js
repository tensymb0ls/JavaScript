import { instance } from './api';
export class MatchSevice {
    static getMatch(id) {
        return instance.get(`/shorts/match_data/${id}`)
    }
}