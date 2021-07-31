import React from "react";
import { useParams } from "react-router-dom";
import cx from "classnames";
import { Client } from "boardgame.io/react";
import { SocketIO } from "boardgame.io/multiplayer";

import './room.scss';

const Room = (props) => {
	const { history } = props;
	const { id } = useParams();

	//////////////////////////
	return (
		<>
		</>
	);
}

export default Room;