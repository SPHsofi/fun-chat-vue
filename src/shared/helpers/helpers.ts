export default function createJsonMessage<Payload>(type: string, payload: Payload) {
  return JSON.stringify({
    id: `${Math.random()}`,
    type,
    payload,
  });
}
