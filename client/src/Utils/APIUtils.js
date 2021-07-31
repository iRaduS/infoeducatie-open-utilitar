import ky from "ky";

const { origin, protocol, hostname } = window.location;
const SERVER_URL = `${protocol}//${hostname}:8000`;

export class APIUtils {
	constructor() {
		this.api = ky.create({
			prefixUrl: `${SERVER_URL}/games/Coup`
		});
	}
	
	// POST /games/{game_name}/create : create a match
	async createRoom(numPlayers) {
	    try {
	      	const res = await this.api.post("create", { json: { numPlayers: numPlayers } }).json();

	      	return res.gameID;
	    } catch (err) {
	      	console.log("failed to create room:", err);
	    }
  	}

  	// POST /games/{game_name}/{room_id}/join : join a match
  	async joinRoom(roomID, id, name) {
    	try {
      		const res = await this.api.post(`${roomID}/join`, { json: { playerID: id, playerName: name } }).json();

      		return res.playerCredentials;
    	} catch (err) {
      		console.log("failed to join room:", err);
    	}
  	}

  	// POST /games/{game_name}/{room_id}/leave : leave a match
  	async leaveRoom(roomID, id, playerCredentials) {
    	try {
      		await this.api.post(`${roomID}/leave`, { json: { playerID: id, credentials: playerCredentials } }).json();
    	} catch (err) {
      		console.log("failed to leave room:", err);
    	}
  	}

  	// GET /games/{game_name}/{room_id} : get specific match by its matchID
  	async getPlayers(roomID) {
    	const res = await this.api.get(roomID).json();
    	return res.players;
  	}

  	// GET /games/{game_name} : return an array of all the games
 	async getRooms() {
    	const res = await this.api.get("").json();
    	return res;
  	}
}

const api = new APIUtils();
export { api };