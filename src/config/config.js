import { CLIENT_VERSION, HOST, PORT, DB_NAME, DB_USER, DB_PASSWORD, DB_HOST, DB_PORT } from '../constants/env.js';
import {
  PACKET_TYPE_LENGTH,
  PAYLOAD_LENGTH,
  VERSION_LENGTH,
  SEQUENCE_LENGTH,
} from '../constants/packetTypes.js';

export const config = {
  server: {
    port: PORT,
    host: HOST,
  },
  client: {
    clientVersion: CLIENT_VERSION,
  },
  packet: {
    typeLength: PACKET_TYPE_LENGTH,
    versionLength: VERSION_LENGTH,
    sequenceLength: SEQUENCE_LENGTH,
    payloadLength: PAYLOAD_LENGTH,
  },
  database: {
    database: DB_NAME,
    user: DB_USER,
    password: DB_PASSWORD,
    host: DB_HOST,
    port: DB_PORT,
},
};
